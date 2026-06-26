"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

// Approximate 2026 state income tax rates (top/representative). 0 = no state income tax.
const STATE_RATES = {
  AL: 0.05, AK: 0, AZ: 0.025, AR: 0.044, CA: 0.093, CO: 0.044, CT: 0.055, DE: 0.066,
  FL: 0, GA: 0.0539, HI: 0.08, ID: 0.058, IL: 0.0495, IN: 0.0305, IA: 0.038, KS: 0.057,
  KY: 0.04, LA: 0.03, ME: 0.0715, MD: 0.05, MA: 0.05, MI: 0.0425, MN: 0.0785, MS: 0.047,
  MO: 0.048, MT: 0.059, NE: 0.052, NV: 0, NH: 0, NJ: 0.0637, NM: 0.049, NY: 0.0685,
  NC: 0.045, ND: 0.025, OH: 0.035, OK: 0.0475, OR: 0.0875, PA: 0.0307, RI: 0.0599,
  SC: 0.062, SD: 0, TN: 0, TX: 0, UT: 0.0455, VT: 0.066, VA: 0.0575, WA: 0, WV: 0.0512,
  WI: 0.053, WY: 0, DC: 0.085,
};

const STATE_OPTIONS = Object.keys(STATE_RATES).map((s) => ({ value: s, label: s + (STATE_RATES[s] === 0 ? " (no income tax)" : "") }));

const SS_WAGE_BASE = 184500;

// 2026 federal brackets (Single). MFJ ≈ double thresholds. Returns progressive tax owed.
const SINGLE_BRACKETS = [
  [0, 12400, 0.10],
  [12400, 50400, 0.12],
  [50400, 105700, 0.22],
  [105700, 201775, 0.24],
  [201775, 256225, 0.32],
  [256225, 640600, 0.35],
  [640600, Infinity, 0.37],
];

function bracketTax(taxable, filing) {
  if (taxable <= 0) return 0;
  const mult = filing === "mfj" ? 2 : 1;
  let tax = 0;
  for (const [lo, hi, rate] of SINGLE_BRACKETS) {
    const low = lo * mult;
    const high = hi === Infinity ? Infinity : hi * mult;
    if (taxable > low) {
      tax += (Math.min(taxable, high) - low) * rate;
    } else {
      break;
    }
  }
  return tax;
}

function compute1099Net(gross, expenses, filing, stateRate) {
  const adjGross = Math.max(0, gross - expenses);
  const seTax = adjGross * 0.9235 * 0.153;
  const seDeduction = seTax / 2;
  const qbi = adjGross * 0.20;
  const taxable = Math.max(0, adjGross - seDeduction - qbi);
  const federalTax = bracketTax(taxable, filing);
  const stateTax = adjGross * stateRate;
  const net = adjGross - seTax - federalTax - stateTax;
  return { adjGross, seTax, seDeduction, qbi, taxable, federalTax, stateTax, net };
}

export default function Calculator() {
  const [income, setIncome] = useState("");
  const [filing, setFiling] = useState("single");
  const [stateCode, setStateCode] = useState("CA");
  const [benefits, setBenefits] = useState("6000");
  const [expenses, setExpenses] = useState("0");

  const inc = parseFloat(income) || 0;
  const benefitsVal = parseFloat(benefits) || 0;
  const expensesVal = parseFloat(expenses) || 0;
  const stateRate = STATE_RATES[stateCode] ?? 0;

  const errors = {};
  if (income !== "" && inc < 0) errors.income = "Income can't be negative.";
  if (benefits !== "" && benefitsVal < 0) errors.benefits = "Benefits value can't be negative.";
  if (expenses !== "" && expensesVal < 0) errors.expenses = "Expenses can't be negative.";

  // W-2 side
  const fica = Math.min(inc, SS_WAGE_BASE) * 0.062 + inc * 0.0145;
  const w2Federal = bracketTax(inc, filing);
  const w2State = inc * stateRate;
  const netW2 = inc - fica - w2Federal - w2State;
  const totalW2Comp = netW2 + benefitsVal;

  // 1099 side
  const r1099 = compute1099Net(inc, expensesVal, filing, stateRate);
  const net1099 = r1099.net;

  // Difference (compare 1099 net vs total W-2 comp including benefits)
  const diff = net1099 - totalW2Comp;
  const diffPct = totalW2Comp !== 0 ? (diff / totalW2Comp) * 100 : 0;

  // Break-even 1099 gross: solve compute1099Net(G).net == totalW2Comp (binary search)
  let breakEvenGross = inc;
  if (inc > 0) {
    let lo = 0;
    let hi = inc * 5 + 100000;
    for (let i = 0; i < 60; i++) {
      const mid = (lo + hi) / 2;
      const netMid = compute1099Net(mid, expensesVal, filing, stateRate).net;
      if (netMid < totalW2Comp) lo = mid;
      else hi = mid;
    }
    breakEvenGross = (lo + hi) / 2;
  }
  const breakEvenPremiumPct = inc > 0 ? ((breakEvenGross - inc) / inc) * 100 : 0;

  const hasResults = inc > 0;

  const schemaData = {
    name: "W-2 vs 1099 Calculator 2026",
    description: "Compare take-home pay as a W-2 employee versus a 1099 independent contractor, including SE tax, benefits, and the break-even contractor rate.",
    url: "https://www.themetricapp.com/calculators/w2-vs-1099-calculator-2026",
  };

  return (
    <CalculatorShell
      title="W-2 vs 1099 Calculator (2026)"
      subtitle="Compare your real take-home pay as a W-2 employee versus a 1099 independent contractor — including SE tax, benefits, and your break-even contractor rate."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          {!hasResults ? (
            <p className="text-center text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Enter an annual income to compare W-2 and 1099 take-home pay.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border-2 border-blue-400 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>W-2 Employee</p>
                  <Row label="Gross Income" value={fmt(inc)} />
                  <Row label="FICA (7.65%)" value={"−" + fmt(fica)} />
                  <Row label="Federal Tax" value={"−" + fmt(w2Federal)} />
                  <Row label={"State Tax (" + pct(stateRate * 100) + ")"} value={"−" + fmt(w2State)} />
                  <Row label="Net Take-Home" value={fmt(netW2)} strong />
                  <Row label="+ Benefits Value" value={fmt(benefitsVal)} />
                  <Row label="Total W-2 Comp" value={fmt(totalW2Comp)} strong accent />
                </div>
                <div className="rounded-xl border-2 border-purple-400 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>1099 Contractor</p>
                  <Row label="Gross Income" value={fmt(inc)} />
                  <Row label="Business Expenses" value={"−" + fmt(expensesVal)} />
                  <Row label="SE Tax (15.3%)" value={"−" + fmt(r1099.seTax)} />
                  <Row label="QBI Deduction (20%)" value={fmt(r1099.qbi)} />
                  <Row label="Federal Tax" value={"−" + fmt(r1099.federalTax)} />
                  <Row label={"State Tax (" + pct(stateRate * 100) + ")"} value={"−" + fmt(r1099.stateTax)} />
                  <Row label="Net Take-Home" value={fmt(net1099)} strong accent />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ResultCard
                  label="1099 vs W-2 Difference"
                  value={(diff >= 0 ? "+" : "−") + fmt(Math.abs(diff))}
                  sub={pct(Math.abs(diffPct)) + (diff >= 0 ? " more as 1099" : " less as 1099")}
                  highlight
                />
                <ResultCard
                  label="1099 Break-Even Rate"
                  value={fmt(breakEvenGross)}
                  sub={pct(breakEvenPremiumPct) + " higher than W-2"}
                  highlight
                />
              </div>

              <div className="rounded-xl border border-[#E8E3DA] bg-[#FAF8F4] p-4 text-sm text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>
                To match this W-2 (including benefits), your 1099 rate needs to be about <strong className="text-[#1A1410]">{fmt(breakEvenGross)}</strong> ({pct(breakEvenPremiumPct)} higher).
                <br />
                <strong className="text-[#1A1410]">Rule of thumb:</strong> a 1099 rate should be roughly 25–30% higher than a W-2 salary to break even after self-employment tax and lost benefits.
              </div>
            </>
          )}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="income" label="Annual Income" value={income} onChange={(e) => setIncome(e.target.value)} prefix="$" placeholder="80000" helpText="Applies to both the W-2 and 1099 sides" />
          {errors.income && <p className="text-xs text-red-500 mt-1">{errors.income}</p>}
        </div>
        <SelectField
          id="filing"
          label="Filing Status"
          value={filing}
          onChange={(e) => setFiling(e.target.value)}
          options={[
            { value: "single", label: "Single" },
            { value: "mfj", label: "Married Filing Jointly" },
          ]}
        />
        <SelectField
          id="state"
          label="State"
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
          options={STATE_OPTIONS}
          helpText="Approximate state income tax rate"
        />
        <div>
          <InputField id="benefits" label="W-2 Employer Benefits Value / Year" value={benefits} onChange={(e) => setBenefits(e.target.value)} prefix="$" placeholder="6000" helpText="Health insurance, 401(k) match, PTO value" />
          {errors.benefits && <p className="text-xs text-red-500 mt-1">{errors.benefits}</p>}
        </div>
        <div className="sm:col-span-2">
          <InputField id="expenses" label="1099 Business Expenses / Year" value={expenses} onChange={(e) => setExpenses(e.target.value)} prefix="$" placeholder="0" helpText="Deductible business expenses (lowers 1099 taxable income)" />
          {errors.expenses && <p className="text-xs text-red-500 mt-1">{errors.expenses}</p>}
        </div>
      </div>
    </CalculatorShell>
  );
}

function Row({ label, value, strong, accent }) {
  return (
    <div className="flex items-center justify-between py-1 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
      <span className={strong ? "font-semibold text-[#1A1410]" : "text-[#8A7F72]"}>{label}</span>
      <span className={`${strong ? "font-bold" : ""} ${accent ? "text-[#E8521A]" : "text-[#1A1410]"}`}>{value}</span>
    </div>
  );
}

function SEOContent() {
  return (
    <>
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300"><strong>Last Updated:</strong> June 2026</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Author:</strong> Financial Metrics Team</span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS Self-Employment Tax</a>
          </span>
        </div>
      </div>

      <h2>W-2 vs 1099 — What Is the Difference?</h2>
      <p>
        The <strong>W-2 vs 1099</strong> choice determines how you are paid, taxed, and protected at work. A <strong>W-2 employee</strong> has taxes withheld by an employer, who also pays half of Social Security and Medicare (FICA) and typically provides benefits like health insurance, paid time off, and a 401(k) match. A <strong>1099 independent contractor</strong> is self-employed: you receive the full gross payment but must pay <strong>both halves of FICA</strong> as self-employment tax, buy your own benefits, and make your own quarterly tax payments. The same headline number means very different take-home pay depending on which side you are on.
      </p>
      <p>
        This calculator compares both scenarios on the same income so you can see your real net pay as an employee versus a contractor, the value of employer benefits, and the <strong>1099 rate you would need to truly break even</strong>.
      </p>

      <h2>How to Use This W-2 vs 1099 Calculator</h2>
      <p>
        Enter your <strong>annual income</strong> (it applies to both sides for a fair comparison), choose your <strong>filing status</strong> and <strong>state</strong>, set the <strong>value of W-2 employer benefits</strong> you would receive (health insurance, 401(k) match, PTO — default $6,000), and enter any <strong>1099 business expenses</strong> you could deduct. The calculator instantly produces side-by-side breakdowns for W-2 and 1099, the dollar and percentage difference in take-home pay, and your <strong>break-even 1099 rate</strong> — the gross contractor income needed to match your total W-2 compensation including benefits.
      </p>

      <h2>The Real Tax Difference Between W-2 and 1099</h2>
      <p>
        The core difference is <strong>self-employment tax</strong>. As a W-2 employee you pay 7.65% FICA and your employer pays a matching 7.65%. As a 1099 contractor you pay the <strong>full 15.3%</strong> yourself (on 92.35% of net self-employment income), though you get to deduct half of it. Contractors can offset this with the <strong>QBI deduction</strong> (up to 20% of qualified business income) and by deducting <strong>business expenses</strong>, which W-2 employees generally cannot.
      </p>
      <p>
        <strong>Worked example ($80,000):</strong> A W-2 employee pays about $6,120 in FICA plus federal and state income tax, then receives, say, $6,000 of benefits on top. A 1099 contractor on the same $80,000 pays roughly <strong>$11,304 in self-employment tax</strong>, but reduces taxable income with the half-SE-tax deduction and the 20% QBI deduction. After all taxes, the contractor&apos;s net is usually <strong>lower than the employee&apos;s total compensation</strong> unless the contractor charges a premium — which is exactly what the break-even rate quantifies.
      </p>

      <h2>How to Calculate Your 1099 Break-Even Rate</h2>
      <p>
        Your <strong>break-even 1099 rate</strong> is the gross contractor income that produces the same net value as your total W-2 compensation (take-home pay plus benefits). The calculator solves for it directly. In practice it usually lands <strong>25–30% above the equivalent W-2 salary</strong>, because the contractor must cover the employer&apos;s half of FICA (about 7.65%), replace lost benefits (often 10–20% of salary), and absorb the cost of no paid time off. If a W-2 job pays $80,000 with $6,000 in benefits, a contractor typically needs roughly $100,000–$104,000 to come out even — and more to come out ahead.
      </p>

      <h2>Hidden Costs of Being 1099 Beyond Taxes</h2>
      <p>
        Taxes are only part of the story. As a 1099 contractor you have <strong>no employer-provided health insurance</strong>, so you buy your own — often a major expense. There is <strong>no employer 401(k) match</strong>, no paid vacation or sick leave, and <strong>no unemployment insurance</strong> if work dries up. You also handle <strong>quarterly estimated tax payments</strong> and the administrative burden of invoicing, bookkeeping, and chasing late payments. These costs rarely show up in a simple rate comparison but materially affect whether 1099 work pays off.
      </p>

      <h2>When 1099 Makes More Financial Sense Than W-2</h2>
      <p>
        Despite the extra tax, 1099 work can win financially in several situations. <strong>High earners</strong> who can fully use the <strong>QBI deduction</strong> and contribute to a <strong>Solo 401(k)</strong> (which allows far larger contributions than a typical employee plan) can shelter significant income. Contractors with <strong>real business expenses</strong> — equipment, software, a home office, mileage — reduce their taxable base in ways employees cannot. And if you can <strong>command a rate well above the 25–30% break-even premium</strong>, the surplus, combined with flexibility and multiple clients, can make 1099 the clearly better choice.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>Should I take a W-2 or 1099 position?</h3>
      <p>It depends on the pay difference and your situation. As a rule, a 1099 rate should be 25–30% higher than a comparable W-2 salary just to break even after self-employment tax and lost benefits. Use the calculator to compare your specific numbers, including state tax and the value of benefits.</p>
      <h3>How much more should a 1099 contractor charge vs W-2?</h3>
      <p>Typically 25–30% more than the equivalent W-2 salary to break even, covering the employer&apos;s half of FICA, health insurance, retirement match, and paid time off. To actually come out ahead, you should aim higher than the break-even premium.</p>
      <h3>What is the self-employment tax rate for 1099 workers in 2026?</h3>
      <p>The self-employment tax rate is 15.3% — 12.4% for Social Security (up to the wage base) and 2.9% for Medicare — applied to 92.35% of your net self-employment income. You can deduct half of it when calculating income tax.</p>
      <h3>Can 1099 workers deduct business expenses?</h3>
      <p>Yes. Independent contractors can deduct ordinary and necessary business expenses — equipment, software, supplies, a home office, business mileage, and more — which lowers both income tax and self-employment tax. W-2 employees generally cannot deduct unreimbursed work expenses.</p>
      <h3>What is the QBI deduction for 1099 contractors?</h3>
      <p>The Qualified Business Income (QBI) deduction lets eligible self-employed people deduct up to 20% of their qualified business income, subject to income limits and business-type rules. It significantly reduces the effective tax rate on 1099 income.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</a> — Calculate the 15.3% SE tax in detail.</li>
        <li><a href="/calculators/california-1099-tax-calculator">California 1099 Tax Calculator</a> — Federal, SE, and CA state taxes for contractors.</li>
        <li><a href="/calculators/small-business-tax-deduction-calculator">Small Business Tax Deduction Calculator</a> — Maximize write-offs and QBI.</li>
      </ul>

      <RelatedCalculators currentPage="w2-vs-1099-calculator-2026" />
    </>
  );
}

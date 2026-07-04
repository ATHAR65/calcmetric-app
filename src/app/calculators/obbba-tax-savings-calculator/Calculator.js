"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

// 2026 federal marginal brackets (Single). MFJ ≈ double the single thresholds.
const SINGLE_BRACKETS = [
  [12400, 0.10],
  [50400, 0.12],
  [105700, 0.22],
  [201775, 0.24],
  [256225, 0.32],
  [640600, 0.35],
  [Infinity, 0.37],
];

function marginalRate(income, filing) {
  const mult = filing === "mfj" ? 2 : 1;
  for (const [cap, rate] of SINGLE_BRACKETS) {
    if (income <= cap * mult) return rate;
  }
  return 0.37;
}

export default function Calculator() {
  const [filing, setFiling] = useState("single");
  const [magi, setMagi] = useState("");
  const [tips, setTips] = useState("");
  const [otPremium, setOtPremium] = useState("");
  const [carInterest, setCarInterest] = useState("");
  const [you65, setYou65] = useState("no");
  const [spouse65, setSpouse65] = useState("no");

  const income = parseFloat(magi) || 0;
  const tipsAmt = parseFloat(tips) || 0;
  const otAmt = parseFloat(otPremium) || 0;
  const carAmt = parseFloat(carInterest) || 0;

  const errors = {};
  if (magi !== "" && income < 0) errors.magi = "Income can't be negative.";
  if (tips !== "" && tipsAmt < 0) errors.tips = "Tips can't be negative.";
  if (otPremium !== "" && otAmt < 0) errors.otPremium = "Overtime can't be negative.";
  if (carInterest !== "" && carAmt < 0) errors.carInterest = "Interest can't be negative.";

  const isMFJ = filing === "mfj";

  // 1) Tips: $25K cap all statuses; −$100 per $1,000 MAGI over $150K/$300K
  const tipsPhaseStart = isMFJ ? 300000 : 150000;
  let tipsDed = Math.min(tipsAmt, 25000);
  if (income > tipsPhaseStart) {
    tipsDed = Math.max(0, tipsDed - Math.ceil((income - tipsPhaseStart) / 1000) * 100);
  }

  // 2) Overtime premium: $12.5K/$25K cap; proportional phase-out $150K–$275K / $300K–$550K
  const otCap = isMFJ ? 25000 : 12500;
  const otStart = isMFJ ? 300000 : 150000;
  const otEnd = isMFJ ? 550000 : 275000;
  let otDed = Math.min(otAmt, otCap);
  if (income > otEnd) otDed = 0;
  else if (income > otStart) otDed = otDed * (1 - (income - otStart) / (otEnd - otStart));

  // 3) Senior: $6K per person 65+; −6% of MAGI over $75K/$150K
  const seniors = (you65 === "yes" ? 1 : 0) + (isMFJ && spouse65 === "yes" ? 1 : 0);
  const srStart = isMFJ ? 150000 : 75000;
  let srDed = 6000 * seniors;
  if (income > srStart) srDed = Math.max(0, srDed - (income - srStart) * 0.06);

  // 4) Car loan interest: $10K cap; −$200 per $1,000 MAGI over $100K/$200K
  const carStart = isMFJ ? 200000 : 100000;
  let carDed = Math.min(carAmt, 10000);
  if (income > carStart) {
    carDed = Math.max(0, carDed - Math.ceil((income - carStart) / 1000) * 200);
  }

  const totalDed = tipsDed + otDed + srDed + carDed;
  const rateUsed = marginalRate(income, filing);
  const taxSaved = totalDed * rateUsed;

  const schemaData = {
    name: "OBBBA Tax Savings Calculator 2026",
    description: "Stack all four One Big Beautiful Bill Act deductions — tips, overtime, senior, and car loan interest — and estimate your total 2026 federal tax savings.",
    url: "https://www.themetricapp.com/calculators/obbba-tax-savings-calculator",
  };

  return (
    <CalculatorShell
      title="OBBBA Tax Savings Calculator (2026)"
      subtitle="Stack all four One Big Beautiful Bill Act deductions — no tax on tips, no tax on overtime, the $6,000 senior bonus, and car loan interest — in one place."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Total OBBBA Deductions" value={fmt(totalDed)} highlight sub="All four stacked" />
          <ResultCard label="Est. Federal Tax Saved" value={fmt(taxSaved)} sub={"At " + pct(rateUsed * 100) + " marginal rate"} />
          <ResultCard label="Tips Deduction" value={fmt(tipsDed)} sub="Cap $25,000" />
          <ResultCard label="Overtime Deduction" value={fmt(otDed)} sub={"Cap " + fmt(otCap)} />
          <ResultCard label="Senior Deduction" value={fmt(srDed)} sub="$6,000 per person 65+" />
          <ResultCard label="Car Loan Interest" value={fmt(carDed)} sub="Cap $10,000" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SelectField
          id="filing"
          label="Filing Status"
          value={filing}
          onChange={(e) => setFiling(e.target.value)}
          options={[
            { value: "single", label: "Single" },
            { value: "hoh", label: "Head of Household" },
            { value: "mfj", label: "Married Filing Jointly" },
          ]}
          helpText="Filing status sets each deduction's caps and phase-out thresholds"
        />
        <div>
          <InputField id="magi" label="Annual Gross Income / MAGI" value={magi} onChange={(e) => setMagi(e.target.value)} prefix="$" placeholder="75000" helpText="Drives every phase-out and your marginal rate" />
          {errors.magi && <p className="text-xs text-red-500 mt-1">{errors.magi}</p>}
        </div>
        <div>
          <InputField id="tips" label="Annual Reported Tips" value={tips} onChange={(e) => setTips(e.target.value)} prefix="$" placeholder="0" helpText="Qualified tips — leave 0 if none" />
          {errors.tips && <p className="text-xs text-red-500 mt-1">{errors.tips}</p>}
        </div>
        <div>
          <InputField id="otPremium" label="Annual Overtime Premium" value={otPremium} onChange={(e) => setOtPremium(e.target.value)} prefix="$" placeholder="0" helpText="The half-time (0.5×) portion only — W-2 employees" />
          {errors.otPremium && <p className="text-xs text-red-500 mt-1">{errors.otPremium}</p>}
        </div>
        <div>
          <InputField id="carInterest" label="Car Loan Interest This Year" value={carInterest} onChange={(e) => setCarInterest(e.target.value)} prefix="$" placeholder="0" helpText="New US-assembled vehicle financed after Dec 31, 2024" />
          {errors.carInterest && <p className="text-xs text-red-500 mt-1">{errors.carInterest}</p>}
        </div>
        <SelectField
          id="you65"
          label="Are You 65 or Older?"
          value={you65}
          onChange={(e) => setYou65(e.target.value)}
          options={[
            { value: "no", label: "No" },
            { value: "yes", label: "Yes — 65+ by end of 2026" },
          ]}
          helpText="Adds the $6,000 senior bonus deduction"
        />
        {isMFJ && (
          <SelectField
            id="spouse65"
            label="Is Your Spouse 65 or Older?"
            value={spouse65}
            onChange={(e) => setSpouse65(e.target.value)}
            options={[
              { value: "no", label: "No" },
              { value: "yes", label: "Yes — 65+ by end of 2026" },
            ]}
            helpText="Each qualifying spouse adds $6,000"
          />
        )}
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> All four deductions are above-the-line (no itemizing needed) and apply to tax years 2025–2028. Each has its own eligibility rules — use the individual calculators linked below for full detail. FICA, SE tax, and most state taxes are unaffected.
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300"><strong>Last Updated:</strong> July 2026</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Author:</strong> Financial Metrics Team</span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://www.irs.gov/newsroom/one-big-beautiful-bill-how-to-take-advantage-of-no-tax-on-tips-and-overtime" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS — OBBBA Guidance</a>
          </span>
        </div>
      </div>

      <h2>What Are the Four OBBBA Deductions?</h2>
      <p>
        The <strong>One Big Beautiful Bill Act (OBBBA)</strong>, signed July 4, 2025, created four new <strong>above-the-line federal deductions</strong> for tax years <strong>2025 through 2028</strong>: <strong>no tax on tips</strong> (up to $25,000 of qualified tip income), <strong>no tax on overtime</strong> (up to $12,500/$25,000 of overtime premium), the <strong>$6,000 senior bonus</strong> (per person 65+), and <strong>car loan interest</strong> (up to $10,000 on new US-assembled vehicles). Because they are above-the-line, you can claim them all while still taking the standard deduction.
      </p>
      <p>
        Many households qualify for <strong>more than one</strong>. A restaurant worker with overtime and tips can claim both. A retired couple who bought a new US-built car can stack the senior bonus with car loan interest. This calculator combines all four with their separate caps and phase-outs so you see the complete picture.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Select your <strong>filing status</strong> and enter your <strong>MAGI</strong> first — every phase-out depends on them. Then fill in whichever deductions apply: annual <strong>reported tips</strong>, your annual <strong>overtime premium</strong> (only the extra 0.5× above your regular rate — use the <a href="/calculators/no-tax-on-overtime-calculator-2026">overtime calculator</a> to find it), <strong>car loan interest</strong> paid this year (the <a href="/calculators/car-loan-interest-deduction-calculator-2026">car loan calculator</a> computes it from your loan terms), and whether you or your spouse are <strong>65+</strong>. Leave anything that doesn&apos;t apply at zero.
      </p>

      <h2>Each Deduction's Rules at a Glance</h2>
      <p>
        <strong>Tips:</strong> $25,000 cap (all statuses), W-2 and self-employed both qualify, phases out $100 per $1,000 of MAGI over $150K/$300K. <strong>Overtime:</strong> $12,500/$25,000 cap, W-2 only, half-time premium only, phases out proportionally between $150K–$275K / $300K–$550K. <strong>Senior:</strong> $6,000 per person 65+, phases out at 6% of MAGI over $75K/$150K. <strong>Car loan:</strong> $10,000 cap, new US-assembled personal vehicles financed after 2024, phases out $200 per $1,000 over $100K/$200K — the fastest phase-out of the four.
      </p>
      <p>
        <strong>Worked example:</strong> A married couple (MAGI $95,000): one spouse earns $12,000 in tips and $4,000 of overtime premium; they bought a new US-built SUV with $2,800 first-year interest. Total deductions = $12,000 + $4,000 + $2,800 = <strong>$18,800</strong>. At their 12% marginal rate, that is about <strong>$2,256</strong> of federal tax saved — none of it requiring itemization. A couple in the 22% bracket with the same deductions would save about $4,136.
      </p>

      <h2>Common Mistakes When Stacking OBBBA Deductions</h2>
      <p>
        First: entering <strong>full overtime pay</strong> instead of just the half-time premium — only the 0.5× portion counts. Second: forgetting the deductions <strong>share one MAGI</strong> — a raise can trigger three phase-outs at once, and the car loan deduction dies fastest. Third: assuming <strong>FICA savings</strong> — all four reduce federal income tax only. Fourth: married couples filing <strong>separately</strong> — MFS filers are excluded from tips, senior, and overtime deductions. Fifth: missing the <strong>2028 sunset</strong> — plan large purchases and income timing while the window is open.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>Can I claim all four OBBBA deductions in the same year?</h3>
      <p>Yes, if you meet each deduction's separate eligibility rules. They stack, and all are available alongside the standard deduction for tax years 2025 through 2028.</p>
      <h3>Do the OBBBA deductions reduce Social Security or Medicare tax?</h3>
      <p>No. All four reduce federal income tax only. FICA, self-employment tax, and most state income taxes are unchanged.</p>
      <h3>What income limits apply to the OBBBA deductions?</h3>
      <p>Each has its own phase-out: tips and overtime start at $150,000 ($300,000 MFJ); the senior bonus at $75,000 ($150,000 MFJ); car loan interest at $100,000 ($200,000 MFJ) with the fastest reduction rate.</p>
      <h3>Do I need to itemize to claim OBBBA deductions?</h3>
      <p>No. All four are above-the-line deductions, claimable together with the standard deduction.</p>
      <h3>When do the OBBBA deductions expire?</h3>
      <p>All four apply to tax years 2025, 2026, 2027, and 2028 only, unless Congress extends them.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/no-tax-on-tips-calculator-2026">No Tax on Tips Calculator</a> — Full detail on the $25,000 tips deduction.</li>
        <li><a href="/calculators/no-tax-on-overtime-calculator-2026">No Tax on Overtime Calculator</a> — Compute your overtime premium and savings.</li>
        <li><a href="/calculators/senior-tax-deduction-calculator-2026">Senior Tax Deduction Calculator</a> — The $6,000 bonus for 65+.</li>
        <li><a href="/calculators/car-loan-interest-deduction-calculator-2026">Car Loan Interest Deduction Calculator</a> — Amortized first-year interest math.</li>
      </ul>

      <RelatedCalculators currentPage="obbba-tax-savings-calculator" />
    </>
  );
}

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

// IRS combined-income thresholds (not inflation-indexed since 1984/1993)
const THRESHOLDS = {
  single: { base: 25000, upper: 34000 },
  hoh: { base: 25000, upper: 34000 },
  mfj: { base: 32000, upper: 44000 },
};

export default function Calculator() {
  const [ssBenefits, setSsBenefits] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [taxExempt, setTaxExempt] = useState("");
  const [filing, setFiling] = useState("single");

  const ss = parseFloat(ssBenefits) || 0;
  const other = parseFloat(otherIncome) || 0;
  const exempt = parseFloat(taxExempt) || 0;

  const errors = {};
  if (ssBenefits !== "" && ss < 0) errors.ssBenefits = "Benefits can't be negative.";
  if (otherIncome !== "" && other < 0) errors.otherIncome = "Income can't be negative.";
  if (taxExempt !== "" && exempt < 0) errors.taxExempt = "Interest can't be negative.";

  const { base, upper } = THRESHOLDS[filing] || THRESHOLDS.single;

  // IRS worksheet: combined (provisional) income = other income + tax-exempt interest + 50% of SS
  const combinedIncome = other + exempt + ss * 0.5;

  let taxableSS = 0;
  if (combinedIncome > upper) {
    taxableSS = Math.min(
      0.85 * (combinedIncome - upper) + Math.min(0.5 * (upper - base), 0.5 * ss),
      0.85 * ss
    );
  } else if (combinedIncome > base) {
    taxableSS = Math.min(0.5 * (combinedIncome - base), 0.5 * ss);
  }
  taxableSS = Math.max(0, taxableSS);

  const taxablePct = ss > 0 ? (taxableSS / ss) * 100 : 0;
  const taxFreeSS = ss - taxableSS;
  const rateUsed = marginalRate(other + taxableSS, filing);
  const estTax = taxableSS * rateUsed;

  const schemaData = {
    name: "Social Security Tax Calculator",
    description: "Calculate how much of your Social Security benefits are taxable under the IRS 0%, 50%, and 85% combined-income rules.",
    url: "https://www.themetricapp.com/calculators/social-security-tax-calculator",
  };

  return (
    <CalculatorShell
      title="Social Security Tax Calculator (2026)"
      subtitle="Find out how much of your Social Security benefits are taxable under the IRS 0% / 50% / 85% combined-income rules — and what you'll roughly owe."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Taxable Benefits" value={fmt(taxableSS)} highlight sub={pct(taxablePct) + " of your benefits"} />
          <ResultCard label="Tax-Free Benefits" value={fmt(taxFreeSS)} sub="Never more than 15% is safe at 85% tier" />
          <ResultCard label="Combined Income" value={fmt(combinedIncome)} sub="Other income + exempt interest + ½ SS" />
          <ResultCard label="Est. Federal Tax on SS" value={fmt(estTax)} sub={"At " + pct(rateUsed * 100) + " marginal rate"} />
          <ResultCard label="50% Tier Starts" value={fmt(base)} sub="Combined income" />
          <ResultCard label="85% Tier Starts" value={fmt(upper)} sub="Combined income" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="ssBenefits" label="Annual Social Security Benefits" value={ssBenefits} onChange={(e) => setSsBenefits(e.target.value)} prefix="$" placeholder="28000" helpText="Total from your SSA-1099 (Box 5), before Medicare premiums" />
          {errors.ssBenefits && <p className="text-xs text-red-500 mt-1">{errors.ssBenefits}</p>}
        </div>
        <div>
          <InputField id="otherIncome" label="Other Annual Income" value={otherIncome} onChange={(e) => setOtherIncome(e.target.value)} prefix="$" placeholder="30000" helpText="Pensions, IRA/401(k) withdrawals, wages, interest, dividends" />
          {errors.otherIncome && <p className="text-xs text-red-500 mt-1">{errors.otherIncome}</p>}
        </div>
        <div>
          <InputField id="taxExempt" label="Tax-Exempt Interest" value={taxExempt} onChange={(e) => setTaxExempt(e.target.value)} prefix="$" placeholder="0" helpText="Municipal bond interest — counts toward combined income" />
          {errors.taxExempt && <p className="text-xs text-red-500 mt-1">{errors.taxExempt}</p>}
        </div>
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
          helpText="Thresholds: $25K/$34K single — $32K/$44K joint"
        />
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> No more than 85% of benefits are ever federally taxable. If you are 65+, the new <a href="/calculators/senior-tax-deduction-calculator-2026" className="underline" style={{ color: "var(--color-gold)" }}>$6,000 OBBBA senior deduction</a> may offset most of this tax. Most states do not tax Social Security.
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
            <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS</a>,{" "}
            <a href="https://www.ssa.gov/benefits/retirement/planner/taxes.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">SSA</a>
          </span>
        </div>
      </div>

      <h2>How Much of My Social Security Is Taxable?</h2>
      <p>
        Between <strong>0% and 85%</strong> of your Social Security benefits can be subject to federal income tax — never more than 85%, no matter how much you earn. Which tier you land in depends on your <strong>combined income</strong> (the IRS also calls it provisional income): your adjusted gross income excluding Social Security, <strong>plus</strong> any tax-exempt municipal bond interest, <strong>plus half</strong> of your annual Social Security benefits.
      </p>
      <p>
        For <strong>single filers</strong>: combined income under <strong>$25,000</strong> means 0% taxable; between <strong>$25,000 and $34,000</strong>, up to 50% is taxable; above <strong>$34,000</strong>, up to 85%. For <strong>married filing jointly</strong>: the thresholds are <strong>$32,000</strong> and <strong>$44,000</strong>. These thresholds were set in 1984/1993 and are <strong>not indexed for inflation</strong>, which is why more retirees owe tax on benefits every year.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your <strong>annual Social Security benefits</strong> (Box 5 of your SSA-1099), your <strong>other income</strong> (pensions, IRA and 401(k) withdrawals, wages, interest, dividends, capital gains), any <strong>tax-exempt interest</strong>, and your filing status. The calculator runs the exact IRS worksheet math and shows your taxable amount, the percentage of benefits taxed, and a rough federal tax estimate at your marginal rate.
      </p>

      <h2>The Exact IRS Formula</h2>
      <p>
        If combined income exceeds the upper threshold, taxable benefits = the <strong>lesser of</strong>: 85% of the amount over the upper threshold plus the smaller of (50% of the gap between thresholds) or (50% of benefits) — or 85% of total benefits. If you are between the thresholds, it is the lesser of 50% of the excess over the base or 50% of benefits.
      </p>
      <p>
        <strong>Worked example:</strong> A single retiree receives $28,000 in Social Security and withdraws $30,000 from an IRA. Combined income = $30,000 + $14,000 = <strong>$44,000</strong> — above the $34,000 upper threshold. Taxable = min(0.85 × $10,000 + $4,500, 0.85 × $28,000) = min($13,000, $23,800) = <strong>$13,000</strong>, about 46% of benefits. At a 12% rate, that is roughly <strong>$1,560</strong> of federal tax.
      </p>

      <h2>How to Reduce Taxes on Your Social Security</h2>
      <p>
        The lever is <strong>combined income</strong>. Strategies that lower it: take <strong>Roth withdrawals</strong> instead of traditional IRA withdrawals (Roth distributions don&apos;t count toward combined income); use <strong>QCDs</strong> (qualified charitable distributions) after 70½ to satisfy RMDs without raising AGI; harvest capital <strong>losses</strong>; and be careful with municipal bonds — their interest is <strong>tax-exempt but still counts</strong> toward combined income. If you are 65+, the <a href="/calculators/senior-tax-deduction-calculator-2026">$6,000 OBBBA senior deduction</a> (2025–2028) offsets much of the tax even when benefits are taxable.
      </p>

      <h2>Common Mistakes Retirees Make</h2>
      <p>
        First: believing the myth that <strong>Social Security is never taxed</strong> — most retirees with pension or IRA income owe something. Second: forgetting that <strong>tax-exempt interest counts</strong> toward combined income. Third: taking one large IRA withdrawal that <strong>spikes combined income</strong> into the 85% tier when two smaller withdrawals across years would stay at 50%. Fourth: confusing the OBBBA senior deduction with a change to these rules — the <strong>0/50/85% tiers still apply</strong>; the deduction just offsets the resulting tax. Fifth: ignoring <strong>withholding</strong> — you can file Form W-4V to have tax withheld from benefits and avoid a surprise bill.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>How much of my Social Security is taxable in 2026?</h3>
      <p>Between 0% and 85%, based on combined income (other income + tax-exempt interest + half your benefits). Single: 0% under $25,000, up to 50% between $25,000–$34,000, up to 85% above $34,000. Married filing jointly: $32,000 and $44,000.</p>
      <h3>What is combined income for Social Security?</h3>
      <p>Your adjusted gross income excluding Social Security, plus tax-exempt interest, plus 50% of your annual Social Security benefits. The IRS also calls it provisional income.</p>
      <h3>Is Social Security ever 100% taxable?</h3>
      <p>No. Federal law caps the taxable portion at 85% of benefits — at least 15% is always tax-free.</p>
      <h3>Did OBBBA make Social Security tax-free?</h3>
      <p>No. The 0/50/85% rules are unchanged. OBBBA added a separate $6,000 senior deduction (2025–2028) for taxpayers 65+, which offsets much of the tax for typical retirees.</p>
      <h3>Do states tax Social Security benefits?</h3>
      <p>Most states do not. A small number tax benefits partially, generally with exemptions that shield lower and middle incomes — check your state's current rules.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/senior-tax-deduction-calculator-2026">Senior Tax Deduction Calculator</a> — The $6,000 OBBBA bonus deduction for 65+.</li>
        <li><a href="/calculators/retirement-savings-calculator-2026">Retirement Savings Calculator</a> — Project your withdrawals and income.</li>
        <li><a href="/calculators/401k-retirement-calculator">401(k) Retirement Calculator</a> — Grow your balance with employer match.</li>
      </ul>

      <RelatedCalculators currentPage="social-security-tax-calculator" />
    </>
  );
}

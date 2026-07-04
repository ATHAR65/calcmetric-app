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

// 2026 standard deduction + age-65 additional standard deduction
const STD_DEDUCTION = { single: 16100, hoh: 24150, mfj: 32200 };
const AGE65_EXTRA = { single: 2050, hoh: 2050, mfj: 1650 }; // per qualifying spouse for MFJ

export default function Calculator() {
  const [filing, setFiling] = useState("single");
  const [you65, setYou65] = useState("yes");
  const [spouse65, setSpouse65] = useState("no");
  const [magi, setMagi] = useState("");

  const income = parseFloat(magi) || 0;

  const errors = {};
  if (magi !== "" && income < 0) errors.magi = "Income can't be negative.";

  const isMFJ = filing === "mfj";
  const seniors = (you65 === "yes" ? 1 : 0) + (isMFJ && spouse65 === "yes" ? 1 : 0);
  const phaseStart = isMFJ ? 150000 : 75000;

  // OBBBA bonus deduction: $6,000 per qualifying person 65+, reduced by 6% of MAGI over threshold
  const bonusBase = 6000 * seniors;
  const reduction = income > phaseStart ? (income - phaseStart) * 0.06 : 0;
  const bonusDeduction = Math.max(0, bonusBase - reduction);

  // Age-65 additional standard deduction (pre-existing, not OBBBA)
  const age65Extra = AGE65_EXTRA[filing] * seniors;
  const stdDeduction = STD_DEDUCTION[filing] || STD_DEDUCTION.single;

  const totalShield = stdDeduction + age65Extra + bonusDeduction;
  const rateUsed = marginalRate(income, filing);
  const taxSaved = bonusDeduction * rateUsed;

  const schemaData = {
    name: "Senior Tax Deduction Calculator 2026",
    description: "Estimate your $6,000 OBBBA senior bonus deduction for 2026, including phase-out and total tax-free income for age 65+.",
    url: "https://www.themetricapp.com/calculators/senior-tax-deduction-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Senior Tax Deduction Calculator (2026)"
      subtitle="Estimate the new $6,000 OBBBA bonus deduction for taxpayers 65 and older — plus your total tax-free income when stacked with the standard deduction."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="OBBBA Senior Deduction" value={fmt(bonusDeduction)} sub="After 6% phase-out" highlight />
          <ResultCard label="Est. Federal Tax Saved" value={fmt(taxSaved)} sub="From the bonus deduction" />
          <ResultCard label="Standard Deduction" value={fmt(stdDeduction)} sub="2026" />
          <ResultCard label="Age-65 Extra Deduction" value={fmt(age65Extra)} sub="Pre-existing add-on" />
          <ResultCard label="Total Income Shielded" value={fmt(totalShield)} sub="Standard + age 65 + OBBBA" />
          <ResultCard label="Phase-Out Starts" value={fmt(phaseStart)} sub={isMFJ ? "MFJ MAGI" : "Single/HOH MAGI"} />
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
          helpText="MFJ can claim up to $12,000 if both spouses are 65+"
        />
        <SelectField
          id="you65"
          label="Are You 65 or Older?"
          value={you65}
          onChange={(e) => setYou65(e.target.value)}
          options={[
            { value: "yes", label: "Yes — 65+ by end of 2026" },
            { value: "no", label: "No" },
          ]}
          helpText="You must turn 65 on or before December 31, 2026"
        />
        {isMFJ && (
          <SelectField
            id="spouse65"
            label="Is Your Spouse 65 or Older?"
            value={spouse65}
            onChange={(e) => setSpouse65(e.target.value)}
            options={[
              { value: "yes", label: "Yes — 65+ by end of 2026" },
              { value: "no", label: "No" },
            ]}
            helpText="Each qualifying spouse adds $6,000"
          />
        )}
        <div className={isMFJ ? "" : "sm:col-span-1"}>
          <InputField id="magi" label="Annual Income / MAGI" value={magi} onChange={(e) => setMagi(e.target.value)} prefix="$" placeholder="60000" helpText="Include pensions, IRA withdrawals, and taxable Social Security" />
          {errors.magi && <p className="text-xs text-red-500 mt-1">{errors.magi}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> The OBBBA senior deduction does not make Social Security tax-free — benefits are still taxed under the normal 0/50/85% rules, but this deduction offsets much of that tax for typical retirees. Available for tax years 2025–2028. You need a valid SSN, and married couples must file jointly.
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
            <a href="https://www.irs.gov/newsroom" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS Newsroom</a>
          </span>
        </div>
      </div>

      <h2>What is the $6,000 Senior Tax Deduction in 2026?</h2>
      <p>
        The <strong>senior bonus deduction</strong> is a new tax break created by the <strong>One Big Beautiful Bill Act (OBBBA)</strong> for taxpayers who are <strong>65 or older</strong>. For tax years <strong>2025 through 2028</strong>, each qualifying person can deduct an extra <strong>$6,000</strong> — so a married couple where both spouses are 65+ can deduct <strong>$12,000</strong>. It works whether you itemize or take the standard deduction.
      </p>
      <p>
        This deduction <strong>stacks on top of</strong> two existing breaks: the regular 2026 standard deduction ($16,100 single / $32,200 MFJ) and the pre-existing age-65 additional standard deduction ($2,050 single / $1,650 per married spouse). Combined, a single senior can shield about <strong>$24,150</strong> of income from federal tax, and a married couple both 65+ about <strong>$47,500</strong>.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Select your <strong>filing status</strong>, confirm whether you (and your spouse, if filing jointly) are <strong>65 or older by December 31, 2026</strong>, and enter your <strong>MAGI</strong> — including pensions, IRA withdrawals, and the taxable portion of Social Security. The calculator applies the <strong>6% phase-out</strong> and shows your bonus deduction, the tax it saves at your marginal rate, and your total shielded income when everything stacks.
      </p>

      <h2>The Phase-Out — How Higher Incomes Lose the Deduction</h2>
      <p>
        The bonus deduction is reduced by <strong>6 cents for every dollar of MAGI</strong> above <strong>$75,000</strong> (single/HOH) or <strong>$150,000</strong> (married filing jointly). A single senior with $100,000 MAGI loses 6% × $25,000 = $1,500, leaving a $4,500 deduction. The deduction disappears entirely around <strong>$175,000</strong> for a single senior and between <strong>$250,000 and $350,000</strong> for couples (depending on whether one or both spouses qualify).
      </p>
      <p>
        <strong>Worked example:</strong> A retired couple, both 67, has $90,000 MAGI. They are under the $150,000 threshold, so they keep the full <strong>$12,000</strong> bonus deduction. At a 12% marginal rate, that saves <strong>$1,440</strong> in federal tax — on top of their $32,200 standard deduction and $3,300 age-65 add-on.
      </p>

      <h2>Does This Make Social Security Tax-Free?</h2>
      <p>
        Not technically — the deduction does not change the <a href="/calculators/social-security-tax-calculator">Social Security taxability rules</a> (0%, 50%, or 85% of benefits taxable based on combined income). But in practice, for most middle-income retirees, the extra $6,000/$12,000 deduction offsets some or all of the tax owed on their benefits. That is why it is often described as delivering &quot;no tax on Social Security&quot; for the typical retiree, even though high earners still pay.
      </p>

      <h2>Common Mistakes Seniors Make</h2>
      <p>
        First: assuming Social Security is now <strong>completely tax-free</strong> — the 0/50/85% rules still exist; this is a separate deduction. Second: <strong>missing the age cutoff</strong> — you must turn 65 by December 31 of the tax year; being 64½ doesn&apos;t count. Third: married couples <strong>filing separately</strong> — MFS filers cannot claim it. Fourth: forgetting that large <strong>Roth conversions or IRA withdrawals raise MAGI</strong> and can trigger the 6% phase-out; spreading withdrawals across years can preserve the deduction. Fifth: it <strong>expires after 2028</strong> — factor that into multi-year retirement withdrawal planning.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is the extra tax deduction for seniors in 2026?</h3>
      <p>Taxpayers 65 and older can claim a $6,000 bonus deduction ($12,000 for married couples where both qualify) under OBBBA for tax years 2025–2028, on top of the standard deduction and the pre-existing age-65 add-on.</p>
      <h3>What are the income limits for the $6,000 senior deduction?</h3>
      <p>The deduction phases out at 6% of MAGI above $75,000 (single/HOH) or $150,000 (MFJ). A single senior loses it entirely around $175,000.</p>
      <h3>Does the senior deduction make Social Security tax-free?</h3>
      <p>No — the 0/50/85% taxability rules still apply. But for most middle-income retirees the deduction offsets much or all of the tax on their benefits.</p>
      <h3>Do both spouses get $6,000?</h3>
      <p>Yes, if both are 65+ by year-end and you file jointly, you can deduct $12,000 total. If only one spouse qualifies, the deduction is $6,000.</p>
      <h3>Do I need to itemize to claim the senior bonus deduction?</h3>
      <p>No. It is available whether you itemize or take the standard deduction, for tax years 2025 through 2028.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/social-security-tax-calculator">Social Security Tax Calculator</a> — How much of your benefits are taxable under the 0/50/85% rules.</li>
        <li><a href="/calculators/retirement-savings-calculator-2026">Retirement Savings Calculator</a> — Project your savings and withdrawal income.</li>
        <li><a href="/calculators/obbba-tax-savings-calculator">OBBBA Total Savings Calculator</a> — Stack every OBBBA deduction you qualify for.</li>
      </ul>

      <RelatedCalculators currentPage="senior-tax-deduction-calculator-2026" />
    </>
  );
}

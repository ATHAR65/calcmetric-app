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
  const [hourlyRate, setHourlyRate] = useState("");
  const [otHours, setOtHours] = useState("");
  const [weeks, setWeeks] = useState("52");
  const [filing, setFiling] = useState("single");
  const [magi, setMagi] = useState("");

  const rate = parseFloat(hourlyRate) || 0;
  const hrs = parseFloat(otHours) || 0;
  const wk = parseFloat(weeks) || 0;
  const income = parseFloat(magi) || 0;

  // Inline validation
  const errors = {};
  if (hourlyRate !== "" && rate < 0) errors.hourlyRate = "Hourly rate can't be negative.";
  if (otHours !== "" && hrs < 0) errors.otHours = "Overtime hours can't be negative.";
  if (weeks !== "" && (wk < 0 || wk > 52)) errors.weeks = "Enter between 0 and 52 weeks.";
  if (magi !== "" && income < 0) errors.magi = "Income can't be negative.";

  const isMFJ = filing === "mfj";
  const cap = isMFJ ? 25000 : 12500;
  const phaseStart = isMFJ ? 300000 : 150000;
  const phaseEnd = isMFJ ? 550000 : 275000;

  // The OBBBA deduction covers only the "half-time premium" portion of overtime pay.
  const overtimePremium = rate * 0.5 * hrs * wk;
  let deductible = Math.min(overtimePremium, cap);

  // MAGI phase-out
  if (income > phaseEnd) {
    deductible = 0;
  } else if (income > phaseStart) {
    const ratio = (income - phaseStart) / (phaseEnd - phaseStart);
    deductible = deductible * (1 - ratio);
  }

  const rateUsed = marginalRate(income, filing);
  const taxSaved = deductible * rateUsed;

  const schemaData = {
    name: "No Tax on Overtime Calculator 2026",
    description: "Estimate your federal income tax savings from the OBBBA overtime deduction for 2026.",
    url: "https://www.themetricapp.com/calculators/no-tax-on-overtime-calculator-2026",
  };

  return (
    <CalculatorShell
      title="No Tax on Overtime Calculator (2026)"
      subtitle="Estimate how much federal income tax you save on overtime pay under the One Big Beautiful Bill Act (OBBBA). W-2 employees only."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Annual Overtime Premium" value={fmt(overtimePremium)} sub="Half-time portion of OT" />
          <ResultCard label="Deductible Amount" value={fmt(deductible)} sub="After phase-out & cap" />
          <ResultCard label="Est. Federal Tax Saved" value={fmt(taxSaved)} highlight />
          <ResultCard label="Your Marginal Tax Rate" value={pct(rateUsed * 100)} />
          <ResultCard label="Deduction Cap" value={fmt(cap)} sub={isMFJ ? "MFJ" : "Single / HOH"} />
          <ResultCard label="Phase-Out Range" value={fmt(phaseStart)} sub={"to " + fmt(phaseEnd)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="hourlyRate" label="Regular Hourly Rate" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} prefix="$" placeholder="25.00" helpText="Your standard (non-overtime) pay rate" />
          {errors.hourlyRate && <p className="text-xs text-red-500 mt-1">{errors.hourlyRate}</p>}
        </div>
        <div>
          <InputField id="otHours" label="Avg. Overtime Hours / Week" value={otHours} onChange={(e) => setOtHours(e.target.value)} placeholder="10" helpText="Hours worked beyond 40 per week" />
          {errors.otHours && <p className="text-xs text-red-500 mt-1">{errors.otHours}</p>}
        </div>
        <div>
          <InputField id="weeks" label="Weeks Worked Per Year" value={weeks} onChange={(e) => setWeeks(e.target.value)} placeholder="52" helpText="Default is 52" />
          {errors.weeks && <p className="text-xs text-red-500 mt-1">{errors.weeks}</p>}
        </div>
        <SelectField
          id="filing"
          label="Filing Status"
          value={filing}
          onChange={(e) => setFiling(e.target.value)}
          options={[
            { value: "single", label: "Single" },
            { value: "mfj", label: "Married Filing Jointly" },
            { value: "hoh", label: "Head of Household" },
          ]}
          helpText="MFJ doubles the deduction cap and phase-out thresholds"
        />
        <div className="sm:col-span-2">
          <InputField id="magi" label="Annual Gross Income / MAGI" value={magi} onChange={(e) => setMagi(e.target.value)} prefix="$" placeholder="65000" helpText="Modified adjusted gross income — controls phase-out and your marginal rate" />
          {errors.magi && <p className="text-xs text-red-500 mt-1">{errors.magi}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> FICA (Social Security 6.2% + Medicare 1.45%) still applies to overtime, and state income taxes still apply. This deduction is available for tax years 2025–2028 only under OBBBA.
      </div>
    </CalculatorShell>
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
            <a href="https://www.irs.gov/newsroom" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS Newsroom</a>
          </span>
        </div>
      </div>

      <h2>What is the No Tax on Overtime Rule in 2026?</h2>
      <p>
        The <strong>no tax on overtime</strong> rule is a federal income tax deduction created by the <strong>One Big Beautiful Bill Act (OBBBA)</strong>, signed into law on July 4, 2025. Despite the popular &quot;no tax on overtime&quot; nickname, the law does not make overtime pay completely tax-free. Instead, it lets qualifying W-2 employees deduct the <strong>&quot;half-time premium&quot;</strong> portion of their overtime pay — the extra 0.5× above their regular rate that the Fair Labor Standards Act (FLSA) requires for hours over 40 per week.
      </p>
      <p>
        This is an <strong>above-the-line deduction</strong>, which means you can claim it whether you itemize or take the standard deduction. It lowers your taxable income, not your tax bill dollar-for-dollar. The maximum deduction is <strong>$12,500</strong> for single and head-of-household filers and <strong>$25,000</strong> for married couples filing jointly. The deduction phases out at higher incomes and is temporary — it applies only to <strong>tax years 2025 through 2028</strong>.
      </p>

      <h2>How to Use This No Tax on Overtime Calculator</h2>
      <p>
        Enter your <strong>regular hourly rate</strong>, your <strong>average overtime hours per week</strong>, and the number of <strong>weeks you work per year</strong> (52 by default). Choose your <strong>filing status</strong> — this sets your deduction cap and phase-out thresholds — and enter your <strong>annual gross income or MAGI</strong>, which determines both whether your deduction is reduced and which marginal tax bracket applies to your savings.
      </p>
      <p>
        The calculator instantly shows your annual overtime premium, the deductible amount after applying the cap and any phase-out, your estimated federal income tax savings, and your marginal tax rate. Adjust any field to see how extra overtime or a raise changes your benefit.
      </p>

      <h2>How the Overtime Tax Deduction Works — The Math Explained</h2>
      <p>
        Only the <strong>premium half</strong> of overtime pay is deductible — not the entire overtime paycheck. If you earn $25/hour, your overtime rate is $37.50 (time-and-a-half). The premium portion is the extra $12.50 per overtime hour (half of $25). That premium is what counts toward the deduction.
      </p>
      <p>
        <strong>Formula:</strong> Overtime Premium = Regular Rate × 0.5 × OT Hours per Week × Weeks Worked. Deductible = min(Overtime Premium, Cap), then reduced for phase-out. Tax Saved = Deductible × Marginal Rate.
      </p>
      <p>
        <strong>Worked example:</strong> You earn $25/hour and work 10 overtime hours per week for 52 weeks. Your overtime premium is $25 × 0.5 × 10 × 52 = <strong>$6,500</strong>. That is below the $12,500 single cap, so the full $6,500 is deductible (assuming your income is under the phase-out start). If your marginal rate is 22%, you save about <strong>$1,430</strong> in federal income tax. Note that FICA still applies to the full overtime wage, and your state may still tax it.
      </p>

      <h2>Who Qualifies for the Overtime Tax Deduction?</h2>
      <p>
        The deduction is for <strong>W-2 employees</strong> who receive FLSA-qualifying overtime — generally non-exempt hourly workers paid time-and-a-half for hours over 40 in a week. <strong>1099 contractors and self-employed individuals do not qualify</strong>, because they are not paid statutory overtime. Salaried exempt employees who do not receive overtime pay also do not benefit.
      </p>
      <p>
        High earners see a reduced or eliminated deduction. For single and head-of-household filers, the deduction begins phasing out at <strong>$150,000 of MAGI</strong> and is fully gone at <strong>$275,000</strong>. For married couples filing jointly, the phase-out runs from <strong>$300,000 to $550,000</strong>. Within that range, the deduction is reduced proportionally to where your income falls.
      </p>

      <h2>How to Maximize Your Overtime Tax Savings in 2026</h2>
      <p>
        First, <strong>adjust your W-4</strong> if you expect a large deduction — your employer withholds tax as if all overtime is fully taxable, so you may be over-withholding and due a refund, or you can reduce withholding to capture the benefit during the year. Second, <strong>understand the phase-out</strong>: if a year-end bonus would push you past the phase-out start, deferring income or increasing pre-tax 401(k) contributions can lower your MAGI and preserve more of the deduction.
      </p>
      <p>
        Third, <strong>keep good records</strong>. Your overtime premium should be reported by your employer, but tracking your own hours protects you at filing time. Fourth, if you make estimated payments for other income, factor this deduction into your <strong>quarterly planning</strong> so you do not overpay. Finally, remember the deduction sunsets after 2028 — plan multi-year overtime strategies accordingly.
      </p>

      <h2>Common Mistakes Workers Make About the No Tax on Overtime Rule</h2>
      <p>
        The biggest mistake is believing your <strong>entire overtime paycheck is tax-free</strong>. Only the half-time premium is deductible, and only for federal income tax. The second mistake is <strong>forgetting FICA</strong> — Social Security and Medicare taxes (7.65% combined) still come out of every overtime dollar. Third, many workers <strong>ignore state taxes</strong>; most states do not conform to the federal deduction, so your overtime stays fully taxable at the state level. Fourth, high earners assume they qualify when the <strong>phase-out</strong> has already reduced or wiped out their benefit. Avoid these traps and your estimate will be far more realistic.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is the no tax on overtime rule in 2026?</h3>
      <p>It is a federal income tax deduction under the One Big Beautiful Bill Act that lets eligible W-2 workers deduct the half-time premium portion of their overtime pay, up to $12,500 (single/HOH) or $25,000 (MFJ), for tax years 2025–2028.</p>
      <h3>Who qualifies for the overtime tax deduction?</h3>
      <p>W-2 employees who receive FLSA-qualifying overtime (time-and-a-half for hours over 40/week). The deduction phases out for single/HOH filers between $150,000 and $275,000 MAGI, and for joint filers between $300,000 and $550,000.</p>
      <h3>Does the overtime deduction apply to self-employed or 1099 workers?</h3>
      <p>No. Independent contractors and self-employed individuals are not paid statutory overtime and cannot claim this deduction.</p>
      <h3>Is my entire overtime paycheck tax-free under OBBBA?</h3>
      <p>No. Only the premium half (the extra 0.5× above your regular rate) is deductible for federal income tax. FICA and most state income taxes still apply to your full overtime wages.</p>
      <h3>When does the no tax on overtime deduction expire?</h3>
      <p>The deduction is temporary and applies only to tax years 2025 through 2028 unless Congress extends it.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/texas-paycheck-calculator">Texas Paycheck Calculator</a> — See take-home pay after federal withholding and FICA.</li>
        <li><a href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</a> — Estimate the 15.3% SE tax for 1099 income.</li>
        <li><a href="/calculators/irs-mileage-deduction-calculator">IRS Mileage Deduction Calculator</a> — Calculate federal mileage write-offs.</li>
      </ul>

      <RelatedCalculators currentPage="no-tax-on-overtime-calculator-2026" />
    </>
  );
}

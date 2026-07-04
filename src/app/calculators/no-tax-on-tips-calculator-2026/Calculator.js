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

const TIPS_CAP = 25000; // same cap for every filing status under OBBBA

export default function Calculator() {
  const [tipsPerMonth, setTipsPerMonth] = useState("");
  const [months, setMonths] = useState("12");
  const [workerType, setWorkerType] = useState("w2");
  const [seNetIncome, setSeNetIncome] = useState("");
  const [filing, setFiling] = useState("single");
  const [magi, setMagi] = useState("");

  const monthly = parseFloat(tipsPerMonth) || 0;
  const mo = parseFloat(months) || 0;
  const seNet = parseFloat(seNetIncome) || 0;
  const income = parseFloat(magi) || 0;

  // Inline validation
  const errors = {};
  if (tipsPerMonth !== "" && monthly < 0) errors.tipsPerMonth = "Tips can't be negative.";
  if (months !== "" && (mo < 0 || mo > 12)) errors.months = "Enter between 0 and 12 months.";
  if (seNetIncome !== "" && seNet < 0) errors.seNetIncome = "Net income can't be negative.";
  if (magi !== "" && income < 0) errors.magi = "Income can't be negative.";

  const isMFJ = filing === "mfj";
  const phaseStart = isMFJ ? 300000 : 150000;

  const annualTips = monthly * mo;
  let deductible = Math.min(annualTips, TIPS_CAP);

  // Self-employed: deduction cannot exceed net income from the tipped business
  if (workerType === "se" && seNetIncome !== "") {
    deductible = Math.min(deductible, Math.max(seNet, 0));
  }

  // MAGI phase-out: reduced by $100 for each $1,000 over the threshold
  if (income > phaseStart) {
    const reduction = Math.ceil((income - phaseStart) / 1000) * 100;
    deductible = Math.max(0, deductible - reduction);
  }

  const rateUsed = marginalRate(income, filing);
  const taxSaved = deductible * rateUsed;
  const phaseEnd = phaseStart + Math.ceil(Math.min(annualTips, TIPS_CAP) / 100) * 1000;

  const schemaData = {
    name: "No Tax on Tips Calculator 2026",
    description: "Estimate your federal income tax savings from the OBBBA qualified tips deduction for 2026.",
    url: "https://www.themetricapp.com/calculators/no-tax-on-tips-calculator-2026",
  };

  return (
    <CalculatorShell
      title="No Tax on Tips Calculator (2026)"
      subtitle="Estimate how much federal income tax you save on tip income under the One Big Beautiful Bill Act (OBBBA). Works for W-2 employees and self-employed tipped workers."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Annual Tip Income" value={fmt(annualTips)} sub="Qualified tips reported" />
          <ResultCard label="Deductible Amount" value={fmt(deductible)} sub="After cap & phase-out" />
          <ResultCard label="Est. Federal Tax Saved" value={fmt(taxSaved)} highlight />
          <ResultCard label="Your Marginal Tax Rate" value={pct(rateUsed * 100)} />
          <ResultCard label="Deduction Cap" value={fmt(TIPS_CAP)} sub="All filing statuses" />
          <ResultCard label="Phase-Out Starts" value={fmt(phaseStart)} sub={isMFJ ? "MFJ MAGI" : "Single/HOH MAGI"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="tipsPerMonth" label="Average Tips Per Month" value={tipsPerMonth} onChange={(e) => setTipsPerMonth(e.target.value)} prefix="$" placeholder="1500" helpText="Cash + card tips reported to your employer or on your return" />
          {errors.tipsPerMonth && <p className="text-xs text-red-500 mt-1">{errors.tipsPerMonth}</p>}
        </div>
        <div>
          <InputField id="months" label="Months Worked This Year" value={months} onChange={(e) => setMonths(e.target.value)} placeholder="12" helpText="Default is 12" />
          {errors.months && <p className="text-xs text-red-500 mt-1">{errors.months}</p>}
        </div>
        <SelectField
          id="workerType"
          label="Worker Type"
          value={workerType}
          onChange={(e) => setWorkerType(e.target.value)}
          options={[
            { value: "w2", label: "W-2 Employee (server, bartender, stylist...)" },
            { value: "se", label: "Self-Employed / 1099 (own clients)" },
          ]}
          helpText="Unlike the overtime deduction, self-employed tipped workers also qualify"
        />
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
          helpText="The $25,000 cap is the same for every status; MFJ raises the phase-out threshold"
        />
        {workerType === "se" && (
          <div>
            <InputField id="seNetIncome" label="Net Income From Tipped Business" value={seNetIncome} onChange={(e) => setSeNetIncome(e.target.value)} prefix="$" placeholder="40000" helpText="Your deduction can't exceed this net income" />
            {errors.seNetIncome && <p className="text-xs text-red-500 mt-1">{errors.seNetIncome}</p>}
          </div>
        )}
        <div className={workerType === "se" ? "" : "sm:col-span-2"}>
          <InputField id="magi" label="Annual Gross Income / MAGI" value={magi} onChange={(e) => setMagi(e.target.value)} prefix="$" placeholder="55000" helpText="Modified adjusted gross income — controls the phase-out and your marginal rate" />
          {errors.magi && <p className="text-xs text-red-500 mt-1">{errors.magi}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> FICA (Social Security 6.2% + Medicare 1.45%) or self-employment tax still applies to tips, and most states still tax them. Your occupation must be on the IRS list of jobs that customarily receive tips. Available for tax years 2025–2028 only.
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
            <a href="https://www.irs.gov/newsroom/one-big-beautiful-bill-how-to-take-advantage-of-no-tax-on-tips-and-overtime" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS — OBBBA Tips &amp; Overtime</a>
          </span>
        </div>
      </div>

      <h2>What is the No Tax on Tips Rule in 2026?</h2>
      <p>
        The <strong>no tax on tips</strong> rule is a federal income tax deduction created by the <strong>One Big Beautiful Bill Act (OBBBA)</strong>, signed into law on July 4, 2025. It lets workers in tipped occupations deduct up to <strong>$25,000 of qualified tip income</strong> per year from their federal taxable income. Despite the nickname, tips are not completely tax-free — the deduction applies to <strong>federal income tax only</strong>. Social Security and Medicare taxes (FICA), self-employment tax, and most state income taxes still apply to every tipped dollar.
      </p>
      <p>
        This is an <strong>above-the-line deduction</strong>, so you can claim it even if you take the standard deduction. It is available for <strong>tax years 2025 through 2028</strong>. Unlike the companion overtime deduction, the $25,000 cap is the <strong>same for every filing status</strong> — married couples filing jointly do not get a doubled cap, but they do get a higher phase-out threshold.
      </p>

      <h2>How to Use This No Tax on Tips Calculator</h2>
      <p>
        Enter your <strong>average monthly tips</strong> (cash plus card tips you report) and the <strong>months you worked</strong> this year. Choose whether you are a <strong>W-2 employee or self-employed</strong> — both qualify, but self-employed workers cannot deduct more than the net income of the business the tips came from. Finally, select your <strong>filing status</strong> and enter your <strong>MAGI</strong> so the calculator can apply the income phase-out and estimate your savings at your marginal tax rate.
      </p>

      <h2>How the Tips Deduction Works — The Math Explained</h2>
      <p>
        <strong>Formula:</strong> Deductible = min(Annual Qualified Tips, $25,000). If your MAGI exceeds $150,000 (single/HOH) or $300,000 (MFJ), the deduction is reduced by <strong>$100 for every $1,000</strong> above the threshold. Federal Tax Saved = Deductible × Your Marginal Rate.
      </p>
      <p>
        <strong>Worked example:</strong> A bartender earns $1,500/month in tips for 12 months — $18,000 for the year. That is under the $25,000 cap, so the full $18,000 is deductible (MAGI below the threshold). At a 12% marginal rate, that saves about <strong>$2,160</strong> in federal income tax. At 22%, the same tips would save <strong>$3,960</strong>.
      </p>

      <h2>Who Qualifies for the Tips Deduction?</h2>
      <p>
        You must work in an occupation that <strong>&quot;customarily and regularly&quot; received tips</strong> before 2025 — the IRS publishes the official list, which includes servers, bartenders, barbers and stylists, nail techs, taxi and rideshare drivers, delivery drivers, hotel staff, casino dealers, personal trainers, and many more. Both <strong>W-2 employees and self-employed workers qualify</strong> — a key difference from the overtime deduction. Tips must be <strong>voluntary</strong> (mandatory service charges do not count) and must be properly reported. You need a valid SSN, and married taxpayers must file jointly to claim it.
      </p>

      <h2>Tips vs. Overtime Deduction — Know the Difference</h2>
      <p>
        OBBBA created two similar but separate deductions. The <strong>tips deduction</strong> is capped at $25,000 for everyone and is open to the self-employed. The <a href="/calculators/no-tax-on-overtime-calculator-2026"><strong>overtime deduction</strong></a> is capped at $12,500 single / $25,000 MFJ, covers only the half-time premium, and is W-2 only. If you earn both — common in restaurants — you can claim <strong>both deductions in the same year</strong>. Use our <a href="/calculators/obbba-tax-savings-calculator">OBBBA Total Savings Calculator</a> to stack them.
      </p>

      <h2>Common Mistakes Tipped Workers Make</h2>
      <p>
        The biggest mistake is assuming tips are now <strong>completely tax-free</strong> and under-reporting withholding — FICA (7.65%) still comes out of every dollar, and most states still tax tips fully. Second, <strong>unreported cash tips don&apos;t qualify</strong>: only tips reported to your employer or on Form 4137/your return count. Third, <strong>mandatory service charges</strong> (auto-gratuity on large parties) are wages, not tips, and don&apos;t qualify. Fourth, self-employed workers forget the <strong>net income limit</strong> — if your tipped business netted $10,000, your deduction caps at $10,000 even with $15,000 in tips.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is the no tax on tips deduction for 2026?</h3>
      <p>It is a federal income tax deduction under the One Big Beautiful Bill Act that lets workers in qualifying tipped occupations deduct up to $25,000 of reported tip income per year, for tax years 2025 through 2028.</p>
      <h3>Are tips completely tax-free now?</h3>
      <p>No. The deduction reduces federal income tax only. Social Security and Medicare (FICA) taxes, self-employment tax, and most state income taxes still apply to your tips in full.</p>
      <h3>Do self-employed workers qualify for the tips deduction?</h3>
      <p>Yes — unlike the overtime deduction, self-employed and 1099 workers in tipped occupations qualify, but the deduction cannot exceed the net income of the business the tips came from.</p>
      <h3>What is the income limit for the tips deduction?</h3>
      <p>The deduction phases out above $150,000 MAGI (single/HOH) or $300,000 (married filing jointly), reduced by $100 for every $1,000 over the threshold.</p>
      <h3>Do cash tips count for the deduction?</h3>
      <p>Yes, but only if they are properly reported — to your employer, or on your tax return if self-employed. Unreported tips do not qualify and remain illegal to omit.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/no-tax-on-overtime-calculator-2026">No Tax on Overtime Calculator</a> — The companion OBBBA deduction for W-2 overtime pay.</li>
        <li><a href="/calculators/obbba-tax-savings-calculator">OBBBA Total Savings Calculator</a> — Stack tips, overtime, senior, and car loan deductions.</li>
        <li><a href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</a> — SE tax on your 1099 tip income.</li>
      </ul>

      <RelatedCalculators currentPage="no-tax-on-tips-calculator-2026" />
    </>
  );
}

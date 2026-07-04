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

const CAP = 10000; // max deductible car loan interest per year

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [apr, setApr] = useState("");
  const [termMonths, setTermMonths] = useState("60");
  const [filing, setFiling] = useState("single");
  const [magi, setMagi] = useState("");
  const [qualifies, setQualifies] = useState("yes");

  const principal = parseFloat(loanAmount) || 0;
  const rate = (parseFloat(apr) || 0) / 100;
  const term = parseFloat(termMonths) || 0;
  const income = parseFloat(magi) || 0;

  // Inline validation
  const errors = {};
  if (loanAmount !== "" && principal < 0) errors.loanAmount = "Loan amount can't be negative.";
  if (apr !== "" && (rate < 0 || rate > 1)) errors.apr = "Enter an APR between 0 and 100.";
  if (termMonths !== "" && (term < 1 || term > 120)) errors.termMonths = "Enter a term between 1 and 120 months.";
  if (magi !== "" && income < 0) errors.magi = "Income can't be negative.";

  const isMFJ = filing === "mfj";
  const phaseStart = isMFJ ? 200000 : 100000;
  const phaseEnd = isMFJ ? 250000 : 150000; // $200 reduction per $1,000 → gone $50K above start

  // First-year interest via amortization (sum of first 12 months' interest)
  const monthlyRate = rate / 12;
  let firstYearInterest = 0;
  if (principal > 0 && term > 0) {
    if (monthlyRate === 0) {
      firstYearInterest = 0;
    } else {
      const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
      let balance = principal;
      const monthsToSum = Math.min(12, term);
      for (let i = 0; i < monthsToSum; i++) {
        const interest = balance * monthlyRate;
        firstYearInterest += interest;
        balance -= payment - interest;
      }
    }
  }

  let deductible = qualifies === "yes" ? Math.min(firstYearInterest, CAP) : 0;

  // MAGI phase-out: reduced by $200 for each $1,000 over the threshold
  if (income > phaseStart) {
    const reduction = Math.ceil((income - phaseStart) / 1000) * 200;
    deductible = Math.max(0, deductible - reduction);
  }

  const rateUsed = marginalRate(income, filing);
  const taxSaved = deductible * rateUsed;

  const schemaData = {
    name: "Car Loan Interest Deduction Calculator 2026",
    description: "Estimate your tax savings from the OBBBA car loan interest deduction (up to $10,000) for 2026.",
    url: "https://www.themetricapp.com/calculators/car-loan-interest-deduction-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Car Loan Interest Deduction Calculator (2026)"
      subtitle="Estimate how much federal income tax you save by deducting car loan interest (up to $10,000) on a new US-assembled vehicle under the One Big Beautiful Bill Act."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="First-Year Loan Interest" value={fmt(firstYearInterest)} sub="From amortization schedule" />
          <ResultCard label="Deductible Amount" value={fmt(deductible)} sub="After cap & phase-out" />
          <ResultCard label="Est. Federal Tax Saved" value={fmt(taxSaved)} highlight />
          <ResultCard label="Your Marginal Tax Rate" value={pct(rateUsed * 100)} />
          <ResultCard label="Deduction Cap" value={fmt(CAP)} sub="Per year, 2025–2028" />
          <ResultCard label="Phase-Out Range" value={fmt(phaseStart)} sub={"to " + fmt(phaseEnd) + " MAGI"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="loanAmount" label="Loan Amount" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} prefix="$" placeholder="42000" helpText="Amount financed on the vehicle" />
          {errors.loanAmount && <p className="text-xs text-red-500 mt-1">{errors.loanAmount}</p>}
        </div>
        <div>
          <InputField id="apr" label="Loan APR" value={apr} onChange={(e) => setApr(e.target.value)} suffix="%" placeholder="7.5" helpText="Annual percentage rate on the loan" />
          {errors.apr && <p className="text-xs text-red-500 mt-1">{errors.apr}</p>}
        </div>
        <div>
          <InputField id="termMonths" label="Loan Term (Months)" value={termMonths} onChange={(e) => setTermMonths(e.target.value)} placeholder="60" helpText="Typical terms: 48, 60, 72, 84" />
          {errors.termMonths && <p className="text-xs text-red-500 mt-1">{errors.termMonths}</p>}
        </div>
        <SelectField
          id="qualifies"
          label="Vehicle Qualifies?"
          value={qualifies}
          onChange={(e) => setQualifies(e.target.value)}
          options={[
            { value: "yes", label: "Yes — new, US-assembled, personal use" },
            { value: "no", label: "No — used, leased, or foreign-assembled" },
          ]}
          helpText="New vehicles only, final assembly in the US, bought after Dec 31, 2024"
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
          helpText="MFJ doubles the phase-out threshold"
        />
        <div>
          <InputField id="magi" label="Annual Gross Income / MAGI" value={magi} onChange={(e) => setMagi(e.target.value)} prefix="$" placeholder="80000" helpText="Phase-out starts at $100K (single) / $200K (MFJ)" />
          {errors.magi && <p className="text-xs text-red-500 mt-1">{errors.magi}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> Qualifying vehicles must be new (not used), assembled in the US, under 14,000 lbs, for personal use, and financed after December 31, 2024. Leases and business vehicles do not qualify. Available for tax years 2025–2028.
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

      <h2>What is the Car Loan Interest Deduction in 2026?</h2>
      <p>
        The <strong>car loan interest deduction</strong> is a new federal tax break created by the <strong>One Big Beautiful Bill Act (OBBBA)</strong>. For tax years <strong>2025 through 2028</strong>, buyers of qualifying new vehicles can deduct up to <strong>$10,000 of car loan interest per year</strong> from their federal taxable income. It is an <strong>above-the-line deduction</strong> — you can claim it even if you take the standard deduction, which most car buyers do.
      </p>
      <p>
        The catch is in the fine print: the vehicle must be <strong>new</strong> (used cars don&apos;t qualify), must have <strong>final assembly in the United States</strong>, must be for <strong>personal use</strong>, must weigh under 14,000 lbs, and the loan must have originated <strong>after December 31, 2024</strong>. Leases and business vehicles are excluded.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your <strong>loan amount</strong>, <strong>APR</strong>, and <strong>term</strong> — the calculator builds a real amortization schedule and sums your <strong>first-year interest</strong> (interest is front-loaded, so year one gives the biggest deduction). Confirm your vehicle qualifies, select your filing status, and enter your MAGI. You&apos;ll instantly see your deductible interest and the federal tax you actually save at your marginal rate.
      </p>

      <h2>The Math — Why Your Savings Are Smaller Than the Deduction</h2>
      <p>
        A deduction reduces taxable income, not your tax bill dollar-for-dollar. <strong>Tax Saved = Deductible Interest × Your Marginal Rate.</strong>
      </p>
      <p>
        <strong>Worked example:</strong> You finance $42,000 at 7.5% APR for 60 months. First-year interest comes to about <strong>$2,900</strong>. At a 22% marginal rate, that saves roughly <strong>$640</strong> in federal tax — real money, but far from $10,000. Hitting the full $10,000 cap would take a loan of roughly $130,000+, which is why most buyers save hundreds, not thousands.
      </p>

      <h2>Income Limits and Phase-Out</h2>
      <p>
        The deduction phases out quickly for higher earners: it is reduced by <strong>$200 for every $1,000 of MAGI</strong> above <strong>$100,000</strong> (single/HOH) or <strong>$200,000</strong> (married filing jointly). That means the deduction is completely gone at <strong>$150,000 / $250,000</strong>. If your income is near the threshold, increasing pre-tax 401(k) or HSA contributions can lower your MAGI and preserve the deduction.
      </p>

      <h2>Which Vehicles Qualify?</h2>
      <p>
        Qualifying vehicles: new cars, SUVs, pickups, minivans, vans, and motorcycles with <strong>final assembly in the US</strong> — check the vehicle&apos;s VIN label or the NHTSA assembly-plant lookup before you buy. Many &quot;foreign&quot; brands assemble in the US (Toyota Camry, Honda Accord, BMW X-series), while some &quot;American&quot; models are assembled in Mexico or Canada and <strong>don&apos;t qualify</strong>. Used vehicles, leases, commercial vehicles, and salvage titles are excluded.
      </p>

      <h2>Common Mistakes Buyers Make</h2>
      <p>
        First: assuming <strong>any car loan qualifies</strong> — used-car loans and leases never do. Second: assuming the badge tells you the assembly country — <strong>always check the VIN</strong> (a VIN starting with 1, 4, or 5 means US-assembled). Third: expecting a $10,000 refund — the cap is on the <em>deduction</em>, and the actual saving is your marginal rate times the interest. Fourth: refinancing wrong — refinanced loans can keep the deduction only if the refinance doesn&apos;t exceed the original balance. Fifth: forgetting the deduction <strong>shrinks every year</strong> as your loan amortizes and interest declines.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>How much car loan interest can I deduct in 2026?</h3>
      <p>Up to $10,000 per year of interest on a qualifying new, US-assembled personal vehicle financed after December 31, 2024, for tax years 2025–2028. Your actual saving equals the deductible interest times your marginal tax rate.</p>
      <h3>Do used cars qualify for the car loan interest deduction?</h3>
      <p>No. Only new vehicles qualify. Used vehicles, leases, and commercial vehicles are excluded under OBBBA.</p>
      <h3>What are the income limits for the car loan interest deduction?</h3>
      <p>The deduction phases out above $100,000 MAGI (single/HOH) or $200,000 (MFJ), reduced by $200 per $1,000 over the limit — fully eliminated at $150,000 / $250,000.</p>
      <h3>How do I know if my car was assembled in the US?</h3>
      <p>Check the VIN: if it starts with 1, 4, or 5, the vehicle was assembled in the United States. You can also check the vehicle's information label or the NHTSA VIN decoder.</p>
      <h3>Do I need to itemize to claim the car loan interest deduction?</h3>
      <p>No. It is an above-the-line deduction, so you can claim it alongside the standard deduction.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/car-loan-affordability-calculator-2026">Car Loan Affordability Calculator</a> — Find how much car fits your budget before you borrow.</li>
        <li><a href="/calculators/obbba-tax-savings-calculator">OBBBA Total Savings Calculator</a> — Stack this with tips, overtime, and senior deductions.</li>
        <li><a href="/calculators/loan-comparison-calculator">Loan Comparison Calculator</a> — Compare two loan offers side by side.</li>
      </ul>

      <RelatedCalculators currentPage="car-loan-interest-deduction-calculator-2026" />
    </>
  );
}

"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

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

// 2026 HSA contribution limits
const LIMIT = { self: 4400, family: 8750 };
const CATCHUP = 1000;

export default function Calculator() {
  const [contribution, setContribution] = useState("");
  const [coverage, setCoverage] = useState("self");
  const [age55, setAge55] = useState("no");
  const [income, setIncome] = useState("");
  const [filing, setFiling] = useState("single");
  const [payroll, setPayroll] = useState("yes");

  const contrib = parseFloat(contribution) || 0;
  const inc = parseFloat(income) || 0;

  const errors = {};
  if (contribution !== "" && contrib < 0) errors.contribution = "Contribution can't be negative.";
  if (income !== "" && inc < 0) errors.income = "Income can't be negative.";

  const maxContribution = LIMIT[coverage] + (age55 === "yes" ? CATCHUP : 0);
  const overLimit = contrib > maxContribution;
  const effectiveContrib = Math.min(contrib, maxContribution);

  const rate = marginalRate(inc, filing);
  const incomeTaxSaved = effectiveContrib * rate;
  // FICA saved only if contributed via employer payroll deduction
  const ficaSaved = payroll === "yes" ? effectiveContrib * 0.0765 : 0;
  const totalSaved = incomeTaxSaved + ficaSaved;
  const netCost = effectiveContrib - totalSaved;

  const schemaData = {
    name: "HSA Tax Savings Calculator",
    description: "Calculate the income tax and FICA savings from Health Savings Account contributions for 2026.",
    url: "https://www.themetricapp.com/calculators/hsa-tax-savings-calculator",
  };

  return (
    <CalculatorShell
      title="HSA Tax Savings Calculator"
      subtitle="See how much a Health Savings Account contribution saves you in income and payroll taxes — the only triple-tax-advantaged account in the US code."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Total Tax Saved" value={fmt(totalSaved)} highlight sub={pct((effectiveContrib > 0 ? totalSaved / effectiveContrib : 0) * 100) + " of contribution"} />
          <ResultCard label="Income Tax Saved" value={fmt(incomeTaxSaved)} sub={"At " + pct(rate * 100) + " marginal"} />
          <ResultCard label="FICA Tax Saved" value={fmt(ficaSaved)} sub={payroll === "yes" ? "Payroll deduction" : "Not via payroll"} />
          <ResultCard label="Net Cost of Contribution" value={fmt(netCost)} sub={fmt(effectiveContrib) + " in, less savings"} />
          <ResultCard label="2026 Contribution Limit" value={fmt(maxContribution)} sub={coverage === "family" ? "Family" : "Self-only"} />
          <ResultCard label="Your Contribution" value={fmt(effectiveContrib)} sub={overLimit ? "Capped at limit" : "Within limit"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="contribution" label="Annual HSA Contribution" value={contribution} onChange={(e) => setContribution(e.target.value)} prefix="$" placeholder="4400" helpText="How much you plan to contribute this year" />
          {errors.contribution && <p className="text-xs text-red-500 mt-1">{errors.contribution}</p>}
          {overLimit && <p className="text-xs text-amber-600 mt-1">Above the {coverage === "family" ? "family" : "self-only"} limit — capped at {fmt(maxContribution)}.</p>}
        </div>
        <SelectField
          id="coverage"
          label="HDHP Coverage Type"
          value={coverage}
          onChange={(e) => setCoverage(e.target.value)}
          options={[
            { value: "self", label: "Self-only ($4,400 limit)" },
            { value: "family", label: "Family ($8,750 limit)" },
          ]}
          helpText="You must be enrolled in a qualifying high-deductible health plan"
        />
        <SelectField
          id="age55"
          label="Age 55 or Older?"
          value={age55}
          onChange={(e) => setAge55(e.target.value)}
          options={[
            { value: "no", label: "No" },
            { value: "yes", label: "Yes — adds $1,000 catch-up" },
          ]}
        />
        <SelectField
          id="payroll"
          label="Contributing via Payroll?"
          value={payroll}
          onChange={(e) => setPayroll(e.target.value)}
          options={[
            { value: "yes", label: "Yes — employer payroll deduction" },
            { value: "no", label: "No — direct/after-tax contribution" },
          ]}
          helpText="Payroll contributions also avoid the 7.65% FICA tax"
        />
        <div>
          <InputField id="income" label="Annual Income" value={income} onChange={(e) => setIncome(e.target.value)} prefix="$" placeholder="75000" helpText="Sets your marginal tax rate" />
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
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> 2026 limits: $4,400 self / $8,750 family, plus $1,000 catch-up at 55+. FICA savings apply only to payroll (Section 125) contributions. HSA funds grow and withdraw tax-free for qualified medical expenses. Requires an HSA-eligible HDHP.
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
            <strong>Source:</strong>{" "}
            <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS Pub 969</a>
          </span>
        </div>
      </div>

      <h2>Why the HSA Is the Best Tax Shelter in America</h2>
      <p>
        <strong>A Health Savings Account is the only triple-tax-advantaged account in the US tax code: contributions are tax-deductible, growth is tax-free, and withdrawals for qualified medical expenses are tax-free.</strong> No other account — not a 401(k), not a Roth IRA — offers all three. For 2026 you can contribute up to <strong>$4,400 (self-only)</strong> or <strong>$8,750 (family)</strong>, plus a <strong>$1,000 catch-up</strong> at age 55+.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your planned <strong>contribution</strong>, your <strong>HDHP coverage type</strong>, whether you&apos;re <strong>55 or older</strong>, and whether you contribute <strong>through payroll</strong>. Add your income and filing status to set your marginal rate. The calculator shows income tax saved, FICA saved (payroll only), and the true net cost of funding your HSA.
      </p>

      <h2>The Payroll Bonus: Avoiding FICA</h2>
      <p>
        Contributing through your employer&apos;s payroll (a Section 125 cafeteria plan) is better than contributing directly, because payroll HSA dollars also escape the <strong>7.65% FICA tax</strong> — a saving you can&apos;t get on a 401(k) or IRA. For someone in the 22% bracket, a payroll HSA contribution is effectively discounted by nearly 30% between income tax and FICA.
      </p>
      <p>
        <strong>Worked example:</strong> A single filer earning $75,000 contributes $4,400 via payroll. Income tax saved = 22% × $4,400 = <strong>$968</strong>; FICA saved = 7.65% × $4,400 = <strong>$337</strong>. Total tax saved = <strong>$1,305</strong>, so the real cost of $4,400 in your HSA is about <strong>$3,095</strong>.
      </p>

      <h2>The HSA as a Stealth Retirement Account</h2>
      <p>
        Beyond medical bills, the HSA doubles as retirement savings. Invest the balance, pay current medical costs out of pocket, and let it compound — after age 65 you can withdraw for any purpose (taxed like a traditional IRA, but penalty-free), while medical withdrawals stay tax-free forever. Pair it with our <a href="/calculators/compound-interest-calculator">Compound Interest Calculator</a> and <a href="/calculators/federal-income-tax-calculator-2026">Federal Income Tax Calculator</a> to see the long-game impact.
      </p>
    </>
  );
}

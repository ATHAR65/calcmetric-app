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
const STD = { single: 16100, mfj: 32200 };

function taxAndMarginal(taxable, filing) {
  const mult = filing === "mfj" ? 2 : 1;
  let tax = 0;
  let prev = 0;
  let marginal = 0.10;
  for (const [cap, rate] of SINGLE_BRACKETS) {
    const upper = cap * mult;
    if (taxable > prev) {
      tax += (Math.min(taxable, upper) - prev) * rate;
      marginal = rate;
      prev = upper;
    } else break;
  }
  return { tax, marginal };
}

export default function Calculator() {
  const [income, setIncome] = useState("");
  const [filing, setFiling] = useState("single");
  const [stateTax, setStateTax] = useState("");
  const [includeFica, setIncludeFica] = useState("yes");

  const gross = parseFloat(income) || 0;
  const state = parseFloat(stateTax) || 0;

  const errors = {};
  if (income !== "" && gross < 0) errors.income = "Income can't be negative.";
  if (stateTax !== "" && state < 0) errors.stateTax = "State tax can't be negative.";

  const taxable = Math.max(0, gross - (STD[filing] || STD.single));
  const { tax: fedTax, marginal } = taxAndMarginal(taxable, filing);
  // FICA: 7.65% on wages up to the SS wage base ($183,600 est 2026), Medicare 1.45% above.
  const ficaSS = Math.min(gross, 183600) * 0.062;
  const ficaMedicare = gross * 0.0145;
  const fica = includeFica === "yes" ? ficaSS + ficaMedicare : 0;

  const totalTax = fedTax + fica + state;
  const effFederal = gross > 0 ? (fedTax / gross) * 100 : 0;
  const effTotal = gross > 0 ? (totalTax / gross) * 100 : 0;
  const takeHome = gross - totalTax;

  const schemaData = {
    name: "Effective Tax Rate Calculator",
    description: "Calculate your effective tax rate versus marginal rate, including federal, FICA, and state taxes.",
    url: "https://www.themetricapp.com/calculators/effective-tax-rate-calculator",
  };

  return (
    <CalculatorShell
      title="Effective Tax Rate Calculator"
      subtitle="Find your true effective tax rate — the actual percentage of income you pay — versus your marginal bracket, across federal, FICA, and state taxes."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Effective Tax Rate" value={pct(effTotal)} highlight sub="All taxes ÷ income" />
          <ResultCard label="Marginal Tax Rate" value={pct(marginal * 100)} sub="Federal top bracket" />
          <ResultCard label="Federal Income Tax" value={fmt(fedTax)} sub={pct(effFederal) + " effective"} />
          <ResultCard label="FICA (Payroll) Tax" value={fmt(fica)} sub={includeFica === "yes" ? "SS + Medicare" : "Excluded"} />
          <ResultCard label="Total Tax" value={fmt(totalTax)} sub="Federal + FICA + state" />
          <ResultCard label="After-Tax Income" value={fmt(takeHome)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="income" label="Annual Gross Income" value={income} onChange={(e) => setIncome(e.target.value)} prefix="$" placeholder="85000" helpText="Total wages and taxable income" />
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
          id="includeFica"
          label="Include Payroll (FICA) Tax?"
          value={includeFica}
          onChange={(e) => setIncludeFica(e.target.value)}
          options={[
            { value: "yes", label: "Yes — I'm a W-2 employee" },
            { value: "no", label: "No — federal income tax only" },
          ]}
          helpText="FICA is Social Security 6.2% + Medicare 1.45%"
        />
        <div>
          <InputField id="stateTax" label="State Income Tax (Optional)" value={stateTax} onChange={(e) => setStateTax(e.target.value)} prefix="$" placeholder="0" helpText="Enter your total state tax if you want it included" />
          {errors.stateTax && <p className="text-xs text-red-500 mt-1">{errors.stateTax}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> Uses the 2026 standard deduction and brackets. FICA applies Social Security (6.2% up to ~$183,600) plus Medicare (1.45%). Credits and itemized deductions are not modeled. Not tax advice.
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
        </div>
      </div>

      <h2>What Is an Effective Tax Rate?</h2>
      <p>
        <strong>Your effective tax rate is the actual percentage of your total income that you pay in tax — total tax divided by gross income.</strong> It is almost always lower than your marginal (top-bracket) rate because the US system is progressive: your first dollars are taxed at 10%, and only the income above each threshold is taxed at higher rates. A single filer earning $85,000 might sit in the 22% marginal bracket but pay an effective federal rate closer to 12%.
      </p>

      <h2>Effective vs Marginal — Why the Gap Matters</h2>
      <p>
        Confusing the two is the most common tax mistake. Your <strong>marginal rate</strong> answers &quot;what will my next $1,000 be taxed at?&quot; — key for deciding on overtime, a bonus, or a pre-tax contribution. Your <strong>effective rate</strong> answers &quot;what share of everything I earned went to tax?&quot; — the honest number for budgeting. Never turn down a raise fearing a bracket; only the portion above the threshold is taxed higher.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your <strong>gross income</strong> and <strong>filing status</strong>, choose whether to include <strong>FICA payroll tax</strong> (yes for W-2 employees), and optionally add your <strong>state income tax</strong>. The result shows your effective rate across all included taxes alongside your federal marginal rate. Compare it with the detailed <a href="/calculators/federal-income-tax-calculator-2026">Federal Income Tax Calculator</a> for a full bracket breakdown.
      </p>

      <h2>Your Real Tax Burden Is Bigger Than Federal Alone</h2>
      <p>
        Many people quote only their federal effective rate, but FICA adds 7.65% off the top and state taxes can add up to 13%. A middle earner&apos;s true all-in effective rate often lands around 25–30%. Knowing it helps you set aside the right amount — especially if you&apos;re self-employed and pay both halves of FICA via <a href="/calculators/self-employment-tax-calculator-2026">self-employment tax</a>.
      </p>
    </>
  );
}

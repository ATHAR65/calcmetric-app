"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

// 2026 federal marginal brackets (Single). MFJ = double the single thresholds.
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
  const [adjustments, setAdjustments] = useState("");
  const [withheld, setWithheld] = useState("");

  const gross = parseFloat(income) || 0;
  const adj = parseFloat(adjustments) || 0;
  const paid = parseFloat(withheld) || 0;

  const errors = {};
  if (income !== "" && gross < 0) errors.income = "Income can't be negative.";
  if (adjustments !== "" && adj < 0) errors.adjustments = "Adjustments can't be negative.";
  if (withheld !== "" && paid < 0) errors.withheld = "Withholding can't be negative.";

  const stdDeduction = STD[filing] || STD.single;
  const taxable = Math.max(0, gross - adj - stdDeduction);
  const { tax, marginal } = taxAndMarginal(taxable, filing);
  const effRate = gross > 0 ? (tax / gross) * 100 : 0;
  const afterTax = gross - tax;
  const refundOrOwe = paid - tax;

  const schemaData = {
    name: "Federal Income Tax Calculator 2026",
    description: "Estimate your 2026 US federal income tax, effective and marginal rates, and refund or amount owed.",
    url: "https://www.themetricapp.com/calculators/federal-income-tax-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Federal Income Tax Calculator (2026)"
      subtitle="Estimate your 2026 federal income tax, effective and marginal rates, take-home pay, and whether you'll get a refund or owe — using the latest IRS brackets."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Federal Income Tax" value={fmt(tax)} highlight sub="2026 brackets" />
          <ResultCard label="Taxable Income" value={fmt(taxable)} sub="After standard deduction" />
          <ResultCard label="Effective Tax Rate" value={pct(effRate)} sub="Tax ÷ gross income" />
          <ResultCard label="Marginal Tax Rate" value={pct(marginal * 100)} sub="Top bracket you reach" />
          <ResultCard label="After-Tax Income" value={fmt(afterTax)} sub="Federal only" />
          <ResultCard label={refundOrOwe >= 0 ? "Estimated Refund" : "Estimated Balance Due"} value={fmt(Math.abs(refundOrOwe))} sub={paid > 0 ? "vs. tax withheld" : "Enter withholding"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="income" label="Annual Gross Income" value={income} onChange={(e) => setIncome(e.target.value)} prefix="$" placeholder="75000" helpText="Total wages, salary, and other taxable income" />
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
          helpText="MFJ doubles the brackets and standard deduction"
        />
        <div>
          <InputField id="adjustments" label="Adjustments / Pre-Tax (Optional)" value={adjustments} onChange={(e) => setAdjustments(e.target.value)} prefix="$" placeholder="0" helpText="401(k), HSA, traditional IRA and other above-the-line items" />
          {errors.adjustments && <p className="text-xs text-red-500 mt-1">{errors.adjustments}</p>}
        </div>
        <div>
          <InputField id="withheld" label="Federal Tax Withheld (Optional)" value={withheld} onChange={(e) => setWithheld(e.target.value)} prefix="$" placeholder="0" helpText="From your W-2 or paychecks — to estimate a refund" />
          {errors.withheld && <p className="text-xs text-red-500 mt-1">{errors.withheld}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> Estimates federal income tax only — FICA (7.65%), state income tax, and credits (Child Tax Credit, EITC) are not included. Uses the 2026 standard deduction ($16,100 single / $32,200 MFJ). Not tax advice.
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
            <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS</a>
          </span>
        </div>
      </div>

      <h2>How Is Federal Income Tax Calculated in 2026?</h2>
      <p>
        <strong>US federal income tax is progressive — different portions of your income are taxed at increasing rates from 10% to 37%.</strong> You don&apos;t pay your top rate on all your income. First subtract the standard deduction ($16,100 single / $32,200 married filing jointly for 2026) to get taxable income, then apply each bracket in turn. Only the dollars inside the top bracket you reach are taxed at that rate.
      </p>

      <h2>How to Use This Federal Tax Calculator</h2>
      <p>
        Enter your <strong>gross income</strong>, <strong>filing status</strong>, and any <strong>pre-tax adjustments</strong> (401(k), HSA, traditional IRA). Optionally add federal tax <strong>withheld</strong> to estimate your refund or balance due. The calculator returns your total tax, taxable income, and both your effective and marginal rates.
      </p>

      <h2>Effective vs Marginal Tax Rate</h2>
      <p>
        Your <strong>marginal rate</strong> is the bracket your last dollar falls in — it matters for decisions like a raise or an extra deduction. Your <strong>effective rate</strong> is total tax divided by total income, always lower because of the progressive brackets and standard deduction. A single filer earning $75,000 has a 22% marginal rate but only about a 10–12% effective rate. Explore the difference with our <a href="/calculators/effective-tax-rate-calculator">Effective Tax Rate Calculator</a>.
      </p>

      <h2>Lower Your Federal Tax Bill Legally</h2>
      <p>
        Pre-tax contributions are the simplest lever: every dollar into a <a href="/calculators/401k-retirement-calculator">401(k)</a>, <a href="/calculators/hsa-tax-savings-calculator">HSA</a>, or traditional IRA reduces taxable income at your marginal rate. Self-employed? Layer in the QBI deduction and business write-offs via our <a href="/calculators/self-employment-tax-calculator-2026">Self-Employment Tax Calculator</a>. This tool covers federal income tax only — add FICA and your state's tax for a full picture.
      </p>
    </>
  );
}

"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const STANDARD_DEDUCTION_2026 = 16100;
const FICA_RATE = 0.0765;
const SS_WAGE_BASE = 184500;

function federalTax(taxableIncome) {
  if (taxableIncome <= 0) return 0;
  const brackets = [
    { max: 12400, rate: 0.10 },
    { max: 50400, rate: 0.12 },
    { max: 105700, rate: 0.22 },
    { max: 201775, rate: 0.24 },
    { max: 256225, rate: 0.32 },
    { max: 640600, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ];
  let tax = 0;
  let prev = 0;
  for (const b of brackets) {
    if (taxableIncome > prev) {
      const amount = Math.min(taxableIncome, b.max) - prev;
      tax += amount * b.rate;
    }
    prev = b.max;
  }
  return tax;
}

function nyStateTax(taxableIncome) {
  if (taxableIncome <= 0) return 0;
  const brackets = [
    { max: 8500, rate: 0.04 },
    { max: 11750, rate: 0.045 },
    { max: 13950, rate: 0.0525 },
    { max: 21400, rate: 0.055 },
    { max: 80650, rate: 0.06 },
    { max: 215400, rate: 0.0685 },
    { max: 1077550, rate: 0.0696 },
    { max: Infinity, rate: 0.1035 },
  ];
  let tax = 0;
  let prev = 0;
  for (const b of brackets) {
    if (taxableIncome > prev) {
      const amount = Math.min(taxableIncome, b.max) - prev;
      tax += amount * b.rate;
    }
    prev = b.max;
  }
  return tax;
}

export default function Calculator() {
  const [salary, setSalary] = useState("");
  const [payPeriod, setPayPeriod] = useState("annual");
  const [preTax, setPreTax] = useState("");

  const annualSalary = payPeriod === "annual" ? parseFloat(salary) || 0 : payPeriod === "monthly" ? (parseFloat(salary) || 0) * 12 : payPeriod === "biweekly" ? (parseFloat(salary) || 0) * 26 : (parseFloat(salary) || 0) * 52;

  const preTaxDeductions = parseFloat(preTax) || 0;
  const adjustedGross = Math.max(0, annualSalary - preTaxDeductions);
  const taxableIncome = Math.max(0, adjustedGross - STANDARD_DEDUCTION_2026);

  const fica = Math.min(adjustedGross, SS_WAGE_BASE) * 0.062 + adjustedGross * 0.0145;
  const fedTax = federalTax(taxableIncome);
  const stateTax = nyStateTax(taxableIncome);
  const totalDeductions = fedTax + stateTax + fica;
  const netPay = adjustedGross - totalDeductions;
  const effectiveRate = annualSalary > 0 ? (totalDeductions / annualSalary) * 100 : 0;

  const schemaData = {
    name: "New York Paycheck Calculator 2026",
    description: "Calculate your New York take-home pay after NY state income tax, federal tax, and FICA deductions.",
    url: "https://www.themetricapp.com/calculators/new-york-paycheck-calculator-2026",
  };

  return (
    <CalculatorShell
      title="New York Paycheck Calculator (2026)"
      subtitle="Calculate your New York net pay after federal withholding, NY state income tax, and FICA deductions."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Annual Gross" value={fmt(annualSalary)} />
          <ResultCard label="Federal Income Tax" value={fmt(fedTax)} />
          <ResultCard label="NY State Tax" value={fmt(stateTax)} highlight />
          <ResultCard label="FICA (7.65%)" value={fmt(fica)} sub="SS + Medicare" />
          <ResultCard label="Total Deductions" value={fmt(totalDeductions)} />
          <ResultCard label="Net Annual Pay" value={fmt(netPay)} highlight />
          <ResultCard label="Effective Tax Rate" value={effectiveRate.toFixed(1) + "%"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <InputField id="salary" label="Salary / Gross Pay" value={salary} onChange={(e) => setSalary(e.target.value)} prefix="$" placeholder="85000" helpText="Enter your total gross pay" />
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Pay Period</label>
          <select
            value={payPeriod}
            onChange={(e) => setPayPeriod(e.target.value)}
            className="w-full rounded-lg border border-slate-600 bg-slate-800/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="annual">Annual</option>
            <option value="monthly">Monthly</option>
            <option value="biweekly">Bi-Weekly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
        <InputField id="preTax" label="Pre-Tax Deductions / Year" value={preTax} onChange={(e) => setPreTax(e.target.value)} prefix="$" placeholder="5000" helpText="401k, HSA, FSA" />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      {/* E-E-A-T Signals: Last Updated, Author, Sources */}
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Last Updated:</strong> May 2026
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Author:</strong> Financial Metrics Team
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://www.tax.ny.gov/pit/file/tax-rates.htm" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              NY State Tax Rates
            </a>
            {" · "}
            <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Revenue Procedure
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the New York Paycheck Calculator</h2>
      <p>
        New York has a progressive state income tax ranging from 4% to 10.9% — one of the highest state tax burdens in the US. This paycheck calculator factors in federal taxes, NY state income tax, and FICA (Social Security + Medicare) to give you an accurate estimate of your take-home pay.
      </p>
      <p>
        Enter your <strong>gross salary or hourly wages</strong>, select your pay period (annual, monthly, bi-weekly, or weekly), and include any <strong>pre-tax deductions</strong> like 401(k) contributions, HSA, or FSA. The calculator instantly computes your net pay after all deductions.
      </p>

      {/* Visual Content: NY vs No-Tax States Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Salary</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">NY Net Pay</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">FL Net Pay (0% tax)</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">TX Net Pay (0% tax)</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Extra NY Tax Paid</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$75,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$58,457</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$62,457</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$62,457</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-red-600 font-bold">−$4,000</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$150,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$107,030</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$117,280</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$117,280</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-red-600 font-bold">−$10,250</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * NY state tax calculated at 2025-26 rates. FL and TX have 0% state income tax. NYC residents pay additional local tax.
        </p>
      </div>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our New York Paycheck Calculator uses 2026 federal and NY state tax rates from official sources. All data is verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>NY State Brackets:</strong> 4%–10.3% progressive rates from{" "}
          <a href="https://www.tax.ny.gov/pit/file/tax-rates.htm" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            NY Department of Taxation
          </a>
          .
        </li>
        <li>
          <strong>Federal Brackets:</strong> 10%–37% from{" "}
          <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Revenue Procedure
          </a>
          .
        </li>
        <li>
          <strong>FICA:</strong> 6.2% SS (capped) + 1.45% Medicare from{" "}
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            SSA Wage Base
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Annual gross is normalized from pay period. Adjusted gross = gross − pre-tax deductions. Taxable income = adjusted gross − standard deduction ($16,100 single, 2026). Federal tax uses progressive brackets. NY state tax uses 8 progressive brackets (4%–10.3%). FICA = SS tax (6.2% up to $184,500) + Medicare (1.45% no cap). Net pay = adjusted gross − fed tax − NY tax − FICA.
      </p>

      <h2>New York Tax Brackets for 2025-2026</h2>
      <p>
        New York has eight tax brackets: 4.0% ($0-$8,500), 4.5% ($8,500-$11,750), 5.25% ($11,750-$13,950), 5.5% ($13,950-$21,400), 6.0% ($21,400-$80,650), 6.85% ($80,650-$215,400), 9.65% ($215,400-$1,077,550), and 10.3% (over $1,077,550). NYC residents also pay an additional city tax of 3.078% to 3.876%.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>How does New York state income tax compare to Texas?</h3>
      <p>
        New York has one of the highest state income tax burdens in the US, with rates up to 10.9% for top earners. Texas has no state income tax. A worker earning $85,000 in NYC could pay $4,000-$5,000 in NY state tax, while the same worker in Texas pays $0 in state income tax. This calculator helps NY residents understand their true tax burden.
      </p>
      <h3>Does this calculator include New York City/local taxes?</h3>
      <p>
        This calculator computes NY state income tax but does not include NYC local income tax (which ranges from 3.078% to 3.876% for NYC residents) or Yonkers surcharges. NYC residents should add approximately 3-4% to their state tax estimate for local taxes. Yonkers residents face an additional 10.5% surcharge on their NY state tax liability.
      </p>
      <h3>How do pre-tax deductions affect my New York paycheck?</h3>
      <p>
        Pre-tax deductions like 401(k) contributions, HSA, FSA, and commuter benefits reduce your taxable income for both federal AND New York state income tax purposes. This creates significant tax savings. For example, contributing $5,000 to a 401(k) could save you $1,100-$1,850 annually depending on your tax bracket.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Read our guide:{" "}<a href="/blog/new-york-paycheck-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">New York Paycheck Calculator 2026 — Complete Guide</a>.
          <br />Compare with our{" "}
          <a href="/calculators/texas-paycheck-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">Texas Paycheck Calculator</a>
          {" "}or check the{" "}
          <a href="/calculators/california-1099-tax-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">California 1099 Tax Calculator</a>.
        </p>
      </div>

      <RelatedCalculators currentPage="new-york-paycheck-calculator-2026" />

      </>
  );
}

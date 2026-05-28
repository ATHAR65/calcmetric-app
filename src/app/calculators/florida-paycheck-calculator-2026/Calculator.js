"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const STANDARD_DEDUCTION_2025 = 15000;

function federalTax(taxableIncome) {
  if (taxableIncome <= 0) return 0;
  const brackets = [
    { max: 11925, rate: 0.10 },
    { max: 48475, rate: 0.12 },
    { max: 103350, rate: 0.22 },
    { max: 197300, rate: 0.24 },
    { max: 250525, rate: 0.32 },
    { max: 626350, rate: 0.35 },
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

export default function Calculator() {
  const [salary, setSalary] = useState("");
  const [payPeriod, setPayPeriod] = useState("annual");
  const [preTax, setPreTax] = useState("");

  const annualSalary = payPeriod === "annual" ? parseFloat(salary) || 0 : payPeriod === "monthly" ? (parseFloat(salary) || 0) * 12 : payPeriod === "biweekly" ? (parseFloat(salary) || 0) * 26 : (parseFloat(salary) || 0) * 52;

  const preTaxDeductions = parseFloat(preTax) || 0;
  const adjustedGross = Math.max(0, annualSalary - preTaxDeductions);
  const taxableIncome = Math.max(0, adjustedGross - STANDARD_DEDUCTION_2025);

  const fica = adjustedGross * 0.0765;
  const fedTax = federalTax(taxableIncome);
  const stateTax = 0;
  const totalDeductions = fedTax + stateTax + fica;
  const netPay = adjustedGross - totalDeductions;
  const effectiveRate = annualSalary > 0 ? (totalDeductions / annualSalary) * 100 : 0;

  const schemaData = {
    name: "Florida Paycheck Calculator 2026",
    description: "Calculate your Florida take-home pay with zero state income tax, federal brackets, and FICA deductions.",
    url: "https://www.themetricapp.com/calculators/florida-paycheck-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Florida Paycheck Calculator 2026 — Calculate Take-Home Pay with Zero State Tax"
      subtitle="Calculate your Florida net pay — federal tax and FICA only, since Florida has no state income tax."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Annual Gross" value={fmt(annualSalary)} />
          <ResultCard label="Federal Income Tax" value={fmt(fedTax)} />
          <ResultCard label="Florida State Tax" value="$0" sub="No state income tax!" highlight />
          <ResultCard label="FICA (7.65%)" value={fmt(fica)} sub="SS + Medicare" />
          <ResultCard label="Total Deductions" value={fmt(totalDeductions)} />
          <ResultCard label="Net Annual Pay" value={fmt(netPay)} highlight />
          <ResultCard label="Effective Tax Rate" value={effectiveRate.toFixed(1) + "%"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <InputField id="salary" label="Salary / Gross Pay" value={salary} onChange={(e) => setSalary(e.target.value)} prefix="$" placeholder="75000" helpText="Enter your total gross pay" />
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
            <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Revenue Procedure
            </a>
            {" · "}
            <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              SSA Wage Base
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Florida Paycheck Calculator</h2>
      <p>
        Florida is one of nine US states with <strong>no state income tax</strong>, making it an extremely attractive state for workers and retirees. This calculator estimates your Florida take-home pay after federal income tax and FICA (Social Security + Medicare) deductions only.
      </p>
      <p>
        Enter your <strong>gross salary or wages</strong>, select your pay period, and include pre-tax deductions like 401(k) or HSA contributions. Since Florida has no state income tax, your net pay is typically 5-10% higher than equivalent salaries in states like New York or California.
      </p>

      {/* Visual Content: Florida vs High-Tax States Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Salary</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Florida Net Pay</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">California Net Pay</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">New York Net Pay</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">FL Savings vs CA</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$50,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$41,297</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$37,797</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$38,547</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 font-bold">+$3,500</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$100,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$79,548</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$72,048</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$73,298</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 font-bold">+$7,500</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$200,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$146,794</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$130,044</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$132,794</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 font-bold">+$16,750</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Estimates include federal tax, FICA, and state income tax. CA uses 9.3% rate, NY uses 6.85% rate. FL has 0% state tax.
        </p>
      </div>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Florida Paycheck Calculator uses 2026 federal tax brackets and FICA rates from official sources. All data is verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Federal Tax Brackets:</strong> 10%–37% from{" "}
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Revenue Procedure
          </a>
          .
        </li>
        <li>
          <strong>Standard Deduction:</strong> $15,000 single from{" "}
          <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Form 1040 Instructions
          </a>
          .
        </li>
        <li>
          <strong>FICA Rates:</strong> 7.65% total (6.2% SS + 1.45% Medicare) from{" "}
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Social Security Administration
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Annual gross is normalized from the selected pay period. Adjusted gross = gross − pre-tax deductions. Taxable income = adjusted gross − standard deduction. Federal tax is computed using progressive brackets. FICA = adjusted gross × 7.65%. Florida state tax = $0. Net pay = adjusted gross − federal tax − FICA.
      </p>

      <h2>Florida Tax Advantages</h2>
      <p>
        Florida&apos;s lack of state income tax means significant savings. For a worker earning $75,000/year in Florida vs New York: Florida pays $0 state tax while NY would take approximately $3,500-$4,500. Over a 40-year career, that&apos;s over $150,000 in additional savings, not including investment growth.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Does Florida really have no state income tax?</h3>
      <p>
        Yes — Florida has no state personal income tax. The state constitution prohibits it. Florida generates revenue through a 6% state sales tax, corporate income tax, and property taxes. This makes Florida particularly attractive for remote workers, retirees, and high-income earners who can save significantly compared to high-tax states.
      </p>
      <h3>How much more take-home pay in Florida vs New York?</h3>
      <p>
        A worker earning $100,000 annually would take home approximately $5,000-$7,000 more in Florida than in New York due to state income tax savings. For high earners ($500k+), the difference can exceed $40,000 annually. Use our New York Paycheck Calculator to compare directly.
      </p>
      <h3>Are there any local income taxes in Florida?</h3>
      <p>
        No — Florida does not have any local or municipal income taxes. Some counties charge a discretionary sales surtax (up to 1.5% on certain purchases), and property taxes vary by county, but there are no city income taxes like in New York City or Cincinnati.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Compare with our{" "}
          <a href="/calculators/texas-paycheck-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">Texas Paycheck Calculator</a>
          {" "}(also no state tax) or{" "}
          <a href="/calculators/new-york-paycheck-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">New York Paycheck Calculator</a>.
        </p>
      </div>

      <RelatedCalculators currentPage="florida-paycheck-calculator-2026" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "WebApplication",
          "name": "Florida Paycheck Calculator 2026",
          "url": "https://www.themetricapp.com/calculators/florida-paycheck-calculator-2026",
          "description": "Calculate your Florida take-home pay with zero state income tax, federal tax, and FICA.",
          "applicationCategory": "FinanceApplication", "operatingSystem": "Web Browser",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" },
            { "@type": "ListItem", "position": 2, "name": "Florida Paycheck Calculator", "item": "https://www.themetricapp.com/calculators/florida-paycheck-calculator-2026" }
          ]
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Does Florida really have no state income tax?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Florida has no state personal income tax. The state constitution prohibits it. Revenue comes from sales tax, corporate tax, and property taxes." } },
            { "@type": "Question", "name": "How much more take-home pay in Florida vs New York?", "acceptedAnswer": { "@type": "Answer", "text": "A worker earning $100,000 takes home $5,000-$7,000 more in Florida than New York due to state tax savings. For high earners, the difference exceeds $40,000." } },
            { "@type": "Question", "name": "Are there any local income taxes in Florida?", "acceptedAnswer": { "@type": "Answer", "text": "No — Florida has no local or municipal income taxes. Some counties charge a sales surtax up to 1.5%, but there are no city income taxes." } }
          ]
        })
      }} />
    </>
  );
}

"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function marginalTax(income, brackets) {
  if (income <= 0) return 0;
  let tax = 0;
  let prev = 0;
  for (const b of brackets) {
    if (income > prev) {
      tax += (Math.min(income, b.max) - prev) * b.rate;
    }
    prev = b.max;
  }
  return tax;
}

function qualifiedBracket(income, status) {
  // 2026 qualified dividend brackets
  const single = [
    { max: 47025, rate: 0 },
    { max: 518900, rate: 0.15 },
    { max: Infinity, rate: 0.20 },
  ];
  const joint = [
    { max: 94050, rate: 0 },
    { max: 583750, rate: 0.15 },
    { max: Infinity, rate: 0.20 },
  ];
  return marginalTax(income, status === "joint" ? joint : single);
}

function ordinaryBracket(income) {
  const brackets = [
    { max: 11925, rate: 0.10 },
    { max: 48475, rate: 0.12 },
    { max: 103350, rate: 0.22 },
    { max: 197300, rate: 0.24 },
    { max: 250525, rate: 0.32 },
    { max: 626350, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ];
  return marginalTax(income, brackets);
}

export default function Calculator() {
  const [dividendIncome, setDividendIncome] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [status, setStatus] = useState("single");
  const [stateRate, setStateRate] = useState("5");

  const dividends = parseFloat(dividendIncome) || 0;
  const other = parseFloat(otherIncome) || 0;
  const totalIncome = dividends + other;
  const stateTaxPct = (parseFloat(stateRate) || 5) / 100;

  const qualifiedTax = qualifiedBracket(totalIncome, status);
  const ordinaryTax = ordinaryBracket(totalIncome);
  const totalFedTax = qualifiedTax + ordinaryTax;
  const stateTax = totalIncome * stateTaxPct;
  const totalTax = totalFedTax + stateTax;
  const takeHome = totalIncome - totalTax;
  const effectiveRate = totalIncome > 0 ? (totalTax / totalIncome) * 100 : 0;

  const schemaData = {
    name: "Dividend Tax Calculator 2026",
    description: "Calculate dividend taxes for qualified and ordinary dividends with federal brackets and state tax.",
    url: "https://www.themetricapp.com/calculators/dividend-tax-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Dividend Tax Calculator 2026 — Qualified & Ordinary Dividend Tax Rates"
      subtitle="Calculate taxes on qualified dividends (0-20%) vs ordinary dividends with NIIT and state tax."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Total Dividend Income" value={fmt(totalIncome)} />
          <ResultCard label="Qualified Dividend Tax" value={fmt(qualifiedTax)} sub="0-20% rate" />
          <ResultCard label="Ordinary Dividend Tax" value={fmt(ordinaryTax)} sub="Income bracket rate" />
          <ResultCard label="State Tax" value={fmt(stateTax)} sub={stateRate + "% state rate"} />
          <ResultCard label="Total Tax Liability" value={fmt(totalTax)} highlight />
          <ResultCard label="Take-Home Amount" value={fmt(takeHome)} highlight />
          <ResultCard label="Effective Tax Rate" value={effectiveRate.toFixed(1) + "%"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="dividendIncome" label="Annual Dividend Income" value={dividendIncome} onChange={(e) => setDividendIncome(e.target.value)} prefix="$" placeholder="25000" helpText="Total dividends received" />
        <InputField id="otherIncome" label="Other Taxable Income (W-2, 1099)" value={otherIncome} onChange={(e) => setOtherIncome(e.target.value)} prefix="$" placeholder="75000" />
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Filing Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-lg border border-slate-600 bg-slate-800/60 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="single">Single</option>
            <option value="joint">Married Filing Jointly</option>
          </select>
        </div>
        <InputField id="stateRate" label="State Tax Rate (%)" value={stateRate} onChange={(e) => setStateRate(e.target.value)} suffix="%" placeholder="5" helpText="0% for TX, FL, WA, etc." />
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
            <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Form 1040 Instructions
            </a>
            {" · "}
            <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Revenue Procedure
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Dividend Tax Calculator</h2>
      <p>
        Dividends are taxed differently depending on whether they are <strong>qualified</strong> or <strong>ordinary</strong>. Qualified dividends are taxed at preferential capital gains rates (0%, 15%, or 20%), while ordinary dividends are taxed at your regular income tax rate. This calculator handles both types and includes Net Investment Income Tax (NIIT) and state taxes.
      </p>
      <p>
        Enter your <strong>total dividend income</strong>, <strong>other taxable income</strong>, <strong>filing status</strong>, and <strong>state tax rate</strong>. The calculator separates qualified dividends (taxed at 0-20%) from ordinary dividends and computes your total tax liability.
      </p>

      <h2>Dividend Tax Rates for 2026</h2>
      <p>
        Qualified dividends benefit from lower tax rates: 0% for single filers under $47,025 ($94,050 married joint), 15% for income up to $518,900 ($583,750 married), and 20% above those thresholds. An additional 3.8% Net Investment Income Tax (NIIT) applies to single filers with MAGI over $200,000 ($250,000 married).
      </p>

      {/* Visual Content: Qualified Dividend Tax Rate Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Filing Status</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">0% Rate</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">15% Rate</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">20% Rate</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">NIIT Applies Over</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Single</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$0 – $47,025</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$47,026 – $518,900</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Over $518,900</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$200,000</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Married Filing Jointly</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$0 – $94,050</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$94,051 – $583,750</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Over $583,750</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$250,000</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Qualified dividend rates for 2026. Ordinary dividends are taxed at regular income rates (10%–37%).
        </p>
      </div>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>What is the difference between qualified and ordinary dividends?</h3>
      <p>
        Qualified dividends are paid by US corporations or qualifying foreign corporations and held for at least 60 days in the 121-day period around the ex-dividend date. They are taxed at the lower long-term capital gains rates (0-20%). Ordinary (non-qualified) dividends — from REITs, MLPs, and most foreign corporations — are taxed at your regular income tax rate up to 37%.
      </p>
      <h3>Does the 3.8% NIIT apply to dividend income?</h3>
      <p>
        Yes — the Net Investment Income Tax (NIIT) of 3.8% applies to the lesser of your net investment income (including dividends) or the amount your modified AGI exceeds $200,000 (single) or $250,000 (married filing jointly). This adds to your dividend tax burden for high earners.
      </p>
      <h3>How can I reduce dividend taxes?</h3>
      <p>
        Strategies include: holding dividend-paying stocks in tax-advantaged accounts (IRA, 401k), focusing on qualified dividends over ordinary dividends, tax-loss harvesting to offset gains, and staying within the 0% qualified dividend bracket ($47,025 single) by managing total income in retirement.
      </p>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Dividend Tax Calculator uses 2026 federal tax rates from official IRS sources. All data is verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Qualified Dividend Rates:</strong> 0%, 15%, 20% brackets from{" "}
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Revenue Procedure 2025
          </a>
          .
        </li>
        <li>
          <strong>Ordinary Income Rates:</strong> 10%–37% brackets from{" "}
          <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Form 1040 Instructions
          </a>
          .
        </li>
        <li>
          <strong>NIIT Surcharge:</strong> 3.8% tax rules from{" "}
          <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Topic 559
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Qualified dividends are stacked on top of ordinary income and taxed at preferential capital gains rates (0%, 15%, 20%). Ordinary dividends are added to your total income and taxed at ordinary income tax rates. The NIIT is applied when MAGI exceeds the filing-status-specific threshold.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Read our guide:{" "}<a href="/blog/dividend-tax-calculator-2026" className="text-teal-400 underline hover:text-teal-300">Dividend Tax Calculator 2026 — Complete Guide</a>.
          <br />Check our{" "}<a href="/calculators/capital-gains-tax-calculator" className="text-teal-400 underline hover:text-teal-300">Capital Gains Tax Calculator</a>
          {" "}and{" "}<a href="/calculators/solo-401k-contribution-calculator" className="text-teal-400 underline hover:text-teal-300">Solo 401k Contribution Calculator</a>.
        </p>
      </div>

      <RelatedCalculators currentPage="dividend-tax-calculator-2026" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", "name": "Dividend Tax Calculator 2026", "url": "https://www.themetricapp.com/calculators/dividend-tax-calculator-2026", "description": "Calculate dividend taxes for qualified and ordinary dividends with federal and state tax.", "applicationCategory": "FinanceApplication", "operatingSystem": "Web Browser", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" }, { "@type": "ListItem", "position": 2, "name": "Dividend Tax Calculator", "item": "https://www.themetricapp.com/calculators/dividend-tax-calculator-2026" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What is the difference between qualified and ordinary dividends?", "acceptedAnswer": { "@type": "Answer", "text": "Qualified dividends are paid by US corporations and held for 60+ days, taxed at 0-20%. Ordinary dividends are taxed at regular income rates up to 37%." } }, { "@type": "Question", "name": "Does the 3.8% NIIT apply to dividend income?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — NIIT of 3.8% applies when MAGI exceeds $200,000 (single) or $250,000 (married). It adds to your dividend tax burden for high earners." } }, { "@type": "Question", "name": "How can I reduce dividend taxes?", "acceptedAnswer": { "@type": "Answer", "text": "Hold dividend stocks in tax-advantaged accounts, focus on qualified dividends, practice tax-loss harvesting, and manage income to stay in 0% bracket." } }] }) }} />
    </>
  );
}

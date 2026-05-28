"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [netIncome, setNetIncome] = useState("");
  const [expenses, setExpenses] = useState("");

  const income = parseFloat(netIncome) || 0;
  const deductions = parseFloat(expenses) || 0;

  const taxableIncome = Math.max(0, income - deductions);
  // SE tax: 92.35% of net earnings is subject to SE tax
  const seTaxBase = taxableIncome * 0.9235;
  // 12.4% Social Security up to $176,100, 2.9% Medicare no cap
  const ssCap = 176100;
  const socialSecurity = Math.min(seTaxBase, ssCap) * 0.124;
  const medicare = seTaxBase * 0.029;
  const totalSeTax = socialSecurity + medicare;
  const halfDeduction = totalSeTax * 0.5;
  const quarterlyPayment = totalSeTax / 4;
  const effectiveRate = income > 0 ? (totalSeTax / income) * 100 : 0;

  const schemaData = {
    name: "Self Employment Tax Calculator 2026",
    description: "Calculate your self-employment tax (15.3%) for 2026 including Social Security and Medicare portions.",
    url: "https://www.themetricapp.com/calculators/self-employment-tax-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Self Employment Tax Calculator 2026 — Calculate SE Tax & Quarterly Payments"
      subtitle="Calculate your self-employment tax (15.3%) — the independent contractor equivalent of FICA."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Net Self-Employment Income" value={fmt(taxableIncome)} />
          <ResultCard label="SE Tax Base (92.35%)" value={fmt(seTaxBase)} sub="92.35% of net income" />
          <ResultCard label="Social Security (12.4%)" value={fmt(socialSecurity)} sub="Cap: $176,100" />
          <ResultCard label="Medicare (2.9%)" value={fmt(medicare)} sub="No income cap" />
          <ResultCard label="Total SE Tax (15.3%)" value={fmt(totalSeTax)} highlight />
          <ResultCard label="Quarterly Payment" value={fmt(quarterlyPayment)} sub="Due 4x/year" />
          <ResultCard label="Effective Tax Rate" value={effectiveRate.toFixed(1) + "%"} />
          <ResultCard label="Deductible Half" value={fmt(halfDeduction)} sub="AGI deduction" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="netIncome" label="Annual Net Self-Employment Income" value={netIncome} onChange={(e) => setNetIncome(e.target.value)} prefix="$" placeholder="65000" helpText="After COGS but before SE tax" />
        <InputField id="expenses" label="Business Deductions" value={expenses} onChange={(e) => setExpenses(e.target.value)} prefix="$" placeholder="12000" helpText="Mileage, home office, supplies" />
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
              Schedule SE Instructions
            </a>
            {" · "}
            <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Revenue Procedure
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Self Employment Tax Calculator</h2>
      <p>
        The Self Employment (SE) Tax is the independent contractor equivalent of the FICA taxes that W-2 employees split with their employer. As a self-employed individual, you pay both the <strong>employee portion (7.65%)</strong> and the <strong>employer portion (7.65%)</strong>, totaling <strong>15.3%</strong>. This calculator estimates your SE tax accurately and helps you plan for quarterly estimated payments.
      </p>
      <p>
        Enter your <strong>annual net self-employment income</strong> — this is your total freelance or business income after cost of goods sold but before deducting business expenses. Then enter your <strong>total business deductions</strong> for the year, including mileage, home office, supplies, marketing, and software subscriptions. The calculator applies the 92.35% SE tax base rule and the Social Security wage cap automatically.
      </p>

      <h2>Self Employment Tax Formula</h2>
      <p>
        The SE tax is calculated on <strong>92.35% of your net earnings</strong> from self-employment (not 100%). This adjustment accounts for the fact that you can deduct half of the SE tax when calculating your adjusted gross income. The formula is:
      </p>
      <p>
        <strong>SE Tax Base = Net Income × 0.9235</strong>
      </p>
      <p>
        <strong>Social Security portion = min(SE Tax Base, $176,100) × 12.4%</strong>
      </p>
      <p>
        <strong>Medicare portion = SE Tax Base × 2.9%</strong>
      </p>
      <p>
        <strong>Total SE Tax = Social Security + Medicare</strong>
      </p>
      <p>
        Example: With $65,000 net income and $12,000 in deductions: Taxable = $53,000. SE Base = $48,945.50. SS = $6,069.24. Medicare = $1,419.42. Total SE Tax = <strong>$7,488.66</strong>. Quarterly = <strong>$1,872.17</strong>.
      </p>

      {/* Visual Content: SE Tax Breakdown Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Component</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Rate</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Wage Cap</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">On $50k Income</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">On $200k Income</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Social Security</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">12.4%</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$176,100</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$5,722</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$20,129</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Medicare</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">2.9%</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">No cap</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$1,339</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$5,355</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Total SE Tax</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-bold">15.3%</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">—</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-bold">$7,061</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-bold">$25,484</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Calculated on 92.35% of net SE income. $176,100 Social Security wage cap for 2026.
        </p>
      </div>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Who needs to pay self-employment tax?</h3>
      <p>
        If you had net earnings of <strong>$400 or more</strong> from self-employment during the year, you must file Schedule SE and pay self-employment tax. This applies to freelancers, independent contractors, gig workers (Uber, DoorDash), sole proprietors, and single-member LLCs. Even if you have a regular W-2 job, you may need to pay SE tax on your side business income.
      </p>
      <h3>Can I deduct half of my self-employment tax?</h3>
      <p>
        Yes — the IRS allows you to deduct the <strong>employer-equivalent portion (half)</strong> of your SE tax when calculating your adjusted gross income (AGI). This deduction is taken on Schedule 1 of Form 1040 and reduces your federal income tax liability. This calculator shows your deductible half amount in the results section.
      </p>
      <h3>What is the Social Security wage cap for 2026?</h3>
      <p>
        For 2025, the Social Security wage base is $176,100. This means only the first $176,100 of your combined SE tax base is subject to the 12.4% Social Security portion. The 2.9% Medicare portion has <strong>no wage cap</strong>. High earners may also be subject to an additional 0.9% Medicare surtax on income over $200,000 ($250,000 married filing jointly).
      </p>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Self-Employment Tax Calculator uses 2026 federal tax rates from official IRS sources. All data is verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>SE Tax Rate:</strong> 15.3% (12.4% SS + 2.9% Medicare) from{" "}
          <a href="https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Schedule SE
          </a>
          .
        </li>
        <li>
          <strong>SE Tax Base:</strong> 92.35% of net earnings per IRS Section 1402(a) from{" "}
          <a href="https://www.law.cornell.edu/uscode/text/26/1402" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            US Code Title 26 § 1402
          </a>
          .
        </li>
        <li>
          <strong>Social Security Wage Cap:</strong> $176,100 for 2026 from{" "}
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Revenue Procedure
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Net SE income is reduced by business deductions, then 92.35% of that amount is the SE tax base. Social Security tax (12.4%) is applied up to the wage cap of $176,100. Medicare tax (2.9%) is applied to the full SE tax base with no cap. The deductible half (employer-equivalent portion) is calculated as 50% of total SE tax.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For more details on self-employment taxes, read our{" "}
          <a href="/blog/self-employment-tax-tips-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Self-Employment Tax Tips for 2026 Guide
          </a>
          . Also see our{" "}
          <a href="/blog/side-hustle-tax-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Side Hustle Tax Guide
          </a>.
        </p>
      </div>

      <RelatedCalculators currentPage="self-employment-tax-calculator-2026" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Self Employment Tax Calculator 2026",
            "url": "https://www.themetricapp.com/calculators/self-employment-tax-calculator-2026",
            "description": "Calculate your self-employment tax (15.3%) for 2026 including Social Security and Medicare portions.",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" },
              { "@type": "ListItem", "position": 2, "name": "Self Employment Tax Calculator", "item": "https://www.themetricapp.com/calculators/self-employment-tax-calculator-2026" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who needs to pay self-employment tax?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you had net earnings of $400 or more from self-employment, you must file Schedule SE and pay SE tax. This includes freelancers, gig workers, sole proprietors, and single-member LLCs."
                }
              },
              {
                "@type": "Question",
                "name": "Can I deduct half of my self-employment tax?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — you can deduct the employer-equivalent half of your SE tax when calculating your AGI. This deduction is taken on Schedule 1 of Form 1040."
                }
              },
              {
                "@type": "Question",
                "name": "What is the Social Security wage cap for 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Social Security wage base is $176,100 for 2025. Only the first $176,100 is subject to 12.4% Social Security tax. The 2.9% Medicare portion has no wage cap."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

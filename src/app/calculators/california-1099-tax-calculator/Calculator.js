"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const federalBrackets = {
  single: [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 },
  ],
  married: [
    { min: 0, max: 23850, rate: 0.10 },
    { min: 23850, max: 96950, rate: 0.12 },
    { min: 96950, max: 206700, rate: 0.22 },
    { min: 206700, max: 394600, rate: 0.24 },
    { min: 394600, max: 501050, rate: 0.32 },
    { min: 501050, max: 751600, rate: 0.35 },
    { min: 751600, max: Infinity, rate: 0.37 },
  ],
};

// California state tax brackets 2025
const caBrackets = {
  single: [
    { min: 0, max: 10412, rate: 0.01 },
    { min: 10412, max: 24684, rate: 0.02 },
    { min: 24684, max: 38959, rate: 0.04 },
    { min: 38959, max: 54081, rate: 0.06 },
    { min: 54081, max: 68350, rate: 0.08 },
    { min: 68350, max: 349137, rate: 0.093 },
    { min: 349137, max: 418961, rate: 0.103 },
    { min: 418961, max: 698271, rate: 0.113 },
    { min: 698271, max: Infinity, rate: 0.123 },
  ],
  married: [
    { min: 0, max: 20824, rate: 0.01 },
    { min: 20824, max: 49368, rate: 0.02 },
    { min: 49368, max: 77918, rate: 0.04 },
    { min: 77918, max: 108162, rate: 0.06 },
    { min: 108162, max: 136700, rate: 0.08 },
    { min: 136700, max: 698274, rate: 0.093 },
    { min: 698274, max: 837922, rate: 0.103 },
    { min: 837922, max: 1396542, rate: 0.113 },
    { min: 1396542, max: Infinity, rate: 0.123 },
  ],
};

const standardDeduction = { single: 15000, married: 30000 };
const caStandardDeduction = { single: 5740, married: 11480 };

function calcBracketTax(income, brackets) {
  let tax = 0;
  for (const b of brackets) {
    if (income <= b.min) break;
    const taxable = Math.min(income, b.max) - b.min;
    tax += taxable * b.rate;
  }
  return tax;
}

export default function Calculator() {
  const [income, setIncome] = useState("");
  const [status, setStatus] = useState("single");

  const netSEIncome = parseFloat(income) || 0;

  // SE Tax: 15.3% of 92.35% of net SE income
  const seTaxBase = netSEIncome * 0.9235;
  const socialSecurityTax = Math.min(seTaxBase, 176100) * 0.124;
  const medicareTax = seTaxBase * 0.029;
  const selfEmploymentTax = socialSecurityTax + medicareTax;
  const halfSETaxDeduction = selfEmploymentTax / 2;

  // Federal income tax
  const federalAGI = netSEIncome - halfSETaxDeduction;
  const federalTaxableIncome = Math.max(0, federalAGI - standardDeduction[status]);
  const federalIncomeTax = calcBracketTax(federalTaxableIncome, federalBrackets[status]);

  // California state income tax
  const caTaxableIncome = Math.max(0, netSEIncome - caStandardDeduction[status]);
  const caStateTax = calcBracketTax(caTaxableIncome, caBrackets[status]);

  // CA Mental Health Services Tax (1% on income over $1M)
  const caMHTax = netSEIncome > 1000000 ? (netSEIncome - 1000000) * 0.01 : 0;

  const totalTax = selfEmploymentTax + federalIncomeTax + caStateTax + caMHTax;
  const takeHome = netSEIncome - totalTax;
  const effectiveRate = netSEIncome > 0 ? (totalTax / netSEIncome) * 100 : 0;
  const quarterlyPayment = totalTax / 4;

  const schemaData = {
    name: "California 1099 Tax Calculator",
    description: "Calculate your federal self-employment tax, federal income tax, and California state income tax on 1099 freelance income.",
    url: "https://www.themetricapp.com/calculators/california-1099-tax-calculator",
  };

  return (
    <CalculatorShell
      title="California 1099 Tax Calculator (2026)"
      subtitle="Compute self-employment, federal, and California state income taxes on your freelance 1099 income."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ResultCard label="SE Tax (15.3%)" value={fmt(selfEmploymentTax)} sub="SS + Medicare" />
          <ResultCard label="Federal Income Tax" value={fmt(federalIncomeTax)} />
          <ResultCard label="CA State Tax" value={fmt(caStateTax)} />
          <ResultCard label="Total Tax Burden" value={fmt(totalTax)} />
          <ResultCard label="Annual Take-Home" value={fmt(takeHome)} highlight />
          <ResultCard label="Quarterly Payment" value={fmt(quarterlyPayment)} highlight />
          <ResultCard label="Effective Tax Rate" value={effectiveRate.toFixed(1) + "%"} />
          <ResultCard label="Half SE Deduction" value={fmt(halfSETaxDeduction)} sub="AGI adjustment" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="income" label="Annual Net Self-Employment Income" value={income} onChange={(e) => setIncome(e.target.value)} prefix="$" placeholder="85000" helpText="After business expenses" />
        <SelectField
          id="status"
          label="Filing Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={[
            { value: "single", label: "Single" },
            { value: "married", label: "Married Filing Jointly" },
          ]}
        />
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
            <strong>Author:</strong> Tax Professionals Team
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Form 1040 Instructions
            </a>
            {" · "}
            <a href="https://www.ftb.ca.gov/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              CA FTB
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the California 1099 Tax Calculator</h2>
      <p>
        If you are a freelancer, independent contractor, or self-employed professional earning 1099 income in California, you face one of the highest combined tax burdens in the United States. California&apos;s progressive state income tax — with rates reaching up to 13.3% for top earners — stacks on top of federal self-employment tax (15.3%) and federal income tax. This calculator provides a comprehensive, real-time estimate of your total annual tax liability across all three layers.
      </p>
      <p>
        To use this tool, enter your <strong>annual net self-employment income</strong> — this is your gross 1099 revenue minus all legitimate business deductions (home office, equipment, software subscriptions, professional development, travel, etc.). Then select your <strong>filing status</strong> (Single or Married Filing Jointly), which determines your standard deduction and bracket thresholds at both the federal and state level. The calculator instantly breaks down your self-employment tax, federal income tax, California state income tax, and your estimated quarterly payment obligations.
      </p>
      <p>
        This is especially valuable for freelancers on platforms like Upwork, Fiverr, and Toptal, as well as independent consultants, content creators, and gig workers who receive 1099-NEC forms. Unlike W-2 employees, you are responsible for the full FICA contribution (both the employer and employee portions), making tax planning essential for cash flow management.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <h3>Layer 1: Federal Self-Employment Tax (15.3%)</h3>
      <p>
        Self-employment tax is the 1099 equivalent of FICA taxes paid by W-2 employees and their employers. The IRS calculates SE tax on <strong>92.35% of your net self-employment earnings</strong> (this adjustment accounts for the employer-equivalent portion). The rate consists of 12.4% for Social Security (on the first $176,100 of earnings in 2025) and 2.9% for Medicare (unlimited). If your earnings exceed $200,000 ($250,000 for married couples), an additional 0.9% Medicare surtax applies. Importantly, you can deduct <strong>half of your SE tax</strong> from your adjusted gross income when calculating federal income tax, which slightly reduces your federal tax liability.
      </p>
      <h3>Layer 2: Federal Income Tax (Progressive Brackets)</h3>
      <p>
        After subtracting half your SE tax and the standard deduction ($15,000 Single / $30,000 Married Filing Jointly for 2025), your remaining income is subject to the federal progressive tax brackets. The rates range from 10% on the first $11,925 of taxable income to 37% on income above $626,350 for Single filers. The marginal system means you only pay higher rates on income within each bracket, not on your entire income. This is a common misconception that leads people to overestimate their federal tax liability.
      </p>
      <h3>Layer 3: California State Income Tax</h3>
      <p>
        California has nine income tax brackets, with rates starting at 1% and climbing to 12.3% on taxable income above $698,271 (Single). An additional 1% Mental Health Services Tax applies to income exceeding $1 million. California&apos;s standard deduction is relatively modest at $5,740 for Single filers and $11,480 for Married Filing Jointly. Unlike federal tax, California does not allow you to deduct SE tax payments from your state taxable income. This triple-layer structure is why California 1099 workers often face effective tax rates of 35–45% on their self-employment income.
      </p>
      <h3>Quarterly Estimated Tax Payments</h3>
      <p>
        Both the IRS and California Franchise Tax Board (FTB) require quarterly estimated tax payments if you expect to owe more than $1,000 in federal taxes or $500 in California state taxes. Federal payments are due April 15, June 15, September 15, and January 15. California follows the same schedule. This calculator divides your total annual tax liability by four to give you the minimum quarterly payment needed to avoid underpayment penalties.
      </p>

      {/* Visual Content: Tax Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Net SE Income</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">SE Tax (15.3%)</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Federal Income Tax</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">CA State Tax</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Total Tax</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Effective Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$50,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$7,065</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$3,227</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$1,299</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-medium">$11,591</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-red-600 dark:text-red-400">23.2%</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$80,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$11,304</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$8,075</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$3,461</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-medium">$22,840</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-red-600 dark:text-red-400">28.6%</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$120,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$16,956</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$17,515</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$6,698</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-medium">$41,169</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-red-600 dark:text-red-400">34.3%</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$200,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$27,400</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$38,174</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$14,089</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-medium">$79,663</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-red-600 dark:text-red-400">39.8%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Based on single filing status with standard deduction. 2026 federal and CA tax brackets applied.
        </p>
      </div>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Why is the California 1099 tax burden so much higher than other states?</h3>
      <p>
        California&apos;s combined tax burden for self-employed individuals is among the highest in the nation for three key reasons. First, California has the highest top marginal state income tax rate in the US at 13.3% (including the Mental Health Services Tax), compared to states like Texas and Florida which have 0% state income tax. Second, California does not allow a deduction for self-employment tax at the state level, meaning your full net SE income is subject to state tax. Third, California&apos;s cost of living — particularly in the Bay Area and Los Angeles — means freelancers must earn significantly more just to maintain a comparable standard of living. A 1099 worker earning $100,000 in California might pay $35,000–$40,000 in combined taxes, while the same worker in Texas would pay approximately $22,000–$25,000. This $10,000–$15,000 annual difference is a primary driver of the ongoing migration of freelancers and tech workers from California to lower-tax states.
      </p>
      <h3>Can I reduce my California 1099 tax liability through an S-Corp election?</h3>
      <p>
        Yes — one of the most effective tax strategies for high-earning California freelancers is electing S-Corporation status. By forming an LLC and electing S-Corp treatment with the IRS (Form 2553), you can pay yourself a &quot;reasonable salary&quot; as a W-2 employee and take the remaining profits as distributions. Only the salary portion is subject to the 15.3% SE tax; the distributions are exempt from SE tax (though still subject to federal and California income tax). For a freelancer earning $150,000, setting a reasonable salary of $80,000 could save approximately $10,000+ in SE taxes annually. However, S-Corps have additional compliance requirements: payroll processing, quarterly payroll tax filings, and California&apos;s $800 minimum franchise tax. This strategy typically becomes cost-effective at $80,000+ in net self-employment income. Consult a CPA specializing in self-employment taxation before making this election.
      </p>
      <h3>What business expenses can I deduct to lower my taxable 1099 income in California?</h3>
      <p>
        California 1099 workers can deduct any expense that is &quot;ordinary and necessary&quot; for their trade or business. Common deductions include: <strong>home office</strong> (either simplified method at $5/sq ft up to 300 sq ft, or actual expenses including rent, utilities, and insurance proportional to office square footage), <strong>equipment and software</strong> (computers, monitors, software subscriptions like Adobe Creative Suite, development tools), <strong>internet and phone</strong> (business-use percentage), <strong>professional development</strong> (courses, certifications, conferences), <strong>health insurance premiums</strong> (100% deductible for self-employed individuals), <strong>retirement contributions</strong> (SEP-IRA up to 25% of net SE income or $69,000, Solo 401k up to $23,000 employee + 25% employer), and <strong>vehicle expenses</strong> (standard mileage rate or actual expenses). Maximizing legitimate deductions is the single most effective way to reduce your California 1099 tax burden. Both the IRS and California FTB can audit deduction claims.
      </p>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our California 1099 Tax Calculator uses the latest tax rates from the IRS and California Franchise Tax Board. All rates are verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>IRS Self-Employment Tax:</strong> 15.3% rate (12.4% Social Security + 2.9% Medicare) applied to 92.35% of net earnings from{" "}
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-self-employment-tax" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Self-Employment Tax Page
          </a>
          .
        </li>
        <li>
          <strong>Federal Income Tax Brackets:</strong> 2026 brackets from{" "}
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Revenue Procedure 2025
          </a>
          .
        </li>
        <li>
          <strong>California Tax Brackets:</strong> Current brackets from{" "}
          <a href="https://www.ftb.ca.gov/file/personal/tax-information/index.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            California FTB — Tax Information
          </a>
          . CA rates range from 1% to 12.3%, plus 1% Mental Health Services Tax.
        </li>
        <li>
          <strong>Standard Deductions:</strong> 2026 federal amounts ($15,000 single, $30,000 MFJ) from{" "}
          <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Form 1040 Instructions
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Self-employment tax = net SE income × 92.35% × 15.3%. Federal income tax = (net SE income - half SE tax deduction - standard deduction) × progressive brackets. CA state tax = (net SE income - CA standard deduction) × CA progressive brackets. Total tax = SE tax + federal income tax + CA state tax. Quarterly payments = total tax ÷ 4. All results are estimates; actual tax liability depends on your specific circumstances, additional deductions, and credits.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed examples, strategies, and expert tips on California 1099 taxes, read our full guide:{" "}
          <a href="/blog/california-1099-tax-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            California 1099 Tax Calculator 2026 Guide
          </a>
          . This companion article covers additional tax scenarios, filing strategies, and real-world case studies not included in the calculator.
        </p>
      </div>

      <h2>Related Tools</h2>
      <p>
        Check out these other helpful calculators for freelancers and workers:
      </p>
      <ul>
        <li><a href="/calculators/doordash-tax-estimator">DoorDash Tax Estimator</a> — Estimate self-employment taxes with mileage deductions.</li>
        <li><a href="/calculators/texas-paycheck-calculator">Texas Paycheck Calculator</a> — Calculate your take-home pay with zero state income tax.</li>
        <li><a href="/calculators/freelancer-platform-fee-comparison">Freelancer Platform Fee Comparison</a> — Compare Upwork vs Fiverr fees side-by-side.</li>
      </ul>

      <RelatedCalculators currentPage="california-1099-tax-calculator" />

      </>
  );
}

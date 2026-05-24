"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const federalBrackets = {
  single: [
    { min: 0, max: 11600, rate: 0.10 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 },
  ],
  married: [
    { min: 0, max: 23200, rate: 0.10 },
    { min: 23200, max: 94300, rate: 0.12 },
    { min: 94300, max: 201050, rate: 0.22 },
    { min: 201050, max: 383900, rate: 0.24 },
    { min: 383900, max: 487450, rate: 0.32 },
    { min: 487450, max: 731200, rate: 0.35 },
    { min: 731200, max: Infinity, rate: 0.37 },
  ],
};

// California state tax brackets 2024
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

const standardDeduction = { single: 14600, married: 29200 };
const caStandardDeduction = { single: 5540, married: 11080 };

function calcBracketTax(income, brackets) {
  let tax = 0;
  for (const b of brackets) {
    if (income <= b.min) break;
    const taxable = Math.min(income, b.max) - b.min;
    tax += taxable * b.rate;
  }
  return tax;
}

export default function California1099TaxCalculator() {
  const [income, setIncome] = useState("");
  const [status, setStatus] = useState("single");

  const netSEIncome = parseFloat(income) || 0;

  // SE Tax: 15.3% of 92.35% of net SE income
  const seTaxBase = netSEIncome * 0.9235;
  const socialSecurityTax = Math.min(seTaxBase, 168600) * 0.124;
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
    url: "https://themetricapp.com/calculators/california-1099-tax-calculator",
  };

  return (
    <CalculatorShell
      title="California 1099 Tax Calculator"
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
        Self-employment tax is the 1099 equivalent of FICA taxes paid by W-2 employees and their employers. The IRS calculates SE tax on <strong>92.35% of your net self-employment earnings</strong> (this adjustment accounts for the employer-equivalent portion). The rate consists of 12.4% for Social Security (on the first $168,600 of earnings in 2024) and 2.9% for Medicare (unlimited). If your earnings exceed $200,000 ($250,000 for married couples), an additional 0.9% Medicare surtax applies. Importantly, you can deduct <strong>half of your SE tax</strong> from your adjusted gross income when calculating federal income tax, which slightly reduces your federal tax liability.
      </p>
      <h3>Layer 2: Federal Income Tax (Progressive Brackets)</h3>
      <p>
        After subtracting half your SE tax and the standard deduction ($14,600 Single / $29,200 Married Filing Jointly for 2024), your remaining income is subject to the federal progressive tax brackets. The rates range from 10% on the first $11,600 of taxable income to 37% on income above $609,350 for Single filers. The marginal system means you only pay higher rates on income within each bracket, not on your entire income. This is a common misconception that leads people to overestimate their federal tax liability.
      </p>
      <h3>Layer 3: California State Income Tax</h3>
      <p>
        California has nine income tax brackets, with rates starting at 1% and climbing to 12.3% on taxable income above $698,271 (Single). An additional 1% Mental Health Services Tax applies to income exceeding $1 million. California&apos;s standard deduction is relatively modest at $5,540 for Single filers and $11,080 for Married Filing Jointly. Unlike federal tax, California does not allow you to deduct SE tax payments from your state taxable income. This triple-layer structure is why California 1099 workers often face effective tax rates of 35–45% on their self-employment income.
      </p>
      <h3>Quarterly Estimated Tax Payments</h3>
      <p>
        Both the IRS and California Franchise Tax Board (FTB) require quarterly estimated tax payments if you expect to owe more than $1,000 in federal taxes or $500 in California state taxes. Federal payments are due April 15, June 15, September 15, and January 15. California follows the same schedule. This calculator divides your total annual tax liability by four to give you the minimum quarterly payment needed to avoid underpayment penalties.
      </p>

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
        California 1099 workers can deduct any expense that is &quot;ordinary and necessary&quot; for their trade or business. Common deductions include: <strong>home office</strong> (either simplified method at $5/sq ft up to 300 sq ft, or actual expenses including rent, utilities, and insurance proportional to office square footage), <strong>equipment and software</strong> (computers, monitors, software subscriptions like Adobe Creative Suite, development tools), <strong>internet and phone</strong> (business-use percentage), <strong>professional development</strong> (courses, certifications, conferences), <strong>health insurance premiums</strong> (100% deductible for self-employed individuals), <strong>retirement contributions</strong> (SEP-IRA up to 25% of net SE income or $69,000, Solo 401k up to $23,000 employee + 25% employer), and <strong>vehicle expenses</strong> (standard mileage rate or actual expenses). Maximizing legitimate deductions is the single most effective way to reduce your California 1099 tax burden. Keep meticulous records and receipts for every business expense, as both the IRS and California FTB can audit deduction claims.
      </p>
    </>
  );
}

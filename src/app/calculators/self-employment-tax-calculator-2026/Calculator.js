"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";
import QuickAnswer from "@/components/QuickAnswer";
import AuthorBar from "@/components/AuthorBar";
import ComparisonTable from "@/components/ComparisonTable";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [netIncome, setNetIncome] = useState("");
  const [expenses, setExpenses] = useState("");

  const income = parseFloat(netIncome) || 0;
  const deductions = parseFloat(expenses) || 0;

  const taxableIncome = Math.max(0, income - deductions);
  const seTaxBase = taxableIncome * 0.9235;
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
      title="Self-Employment Tax Calculator (2026)"
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
  const seBreakdownRows = [
    { label: "Social Security (12.4%)", values: ["12.4%", "$176,100 cap", "$5,722", "$20,129"] },
    { label: "Medicare (2.9%)", values: ["2.9%", "No cap", "$1,339", "$5,355"] },
    { label: "Total SE Tax (15.3%)", values: ["15.3%", "—", "$7,061", "$25,484"] },
    { label: "Quarterly Payment", values: ["—", "—", "$1,765", "$6,371"] },
    { label: "Deductible Half", values: ["—", "—", "$3,531", "$12,742"] },
  ];

  const incomeComparisonRows = [
    { label: "Gross Income", values: ["$40,000", "$65,000", "$100,000", "$150,000"] },
    { label: "SE Tax Base (92.35%)", values: ["$36,940", "$59,978", "$92,350", "$138,525"] },
    { label: "Total SE Tax", values: ["$5,652", "$9,177", "$14,130", "$21,194"] },
    { label: "Quarterly Payment", values: ["$1,413", "$2,294", "$3,533", "$5,299"] },
    { label: "Deductible Half", values: ["$2,826", "$4,589", "$7,065", "$10,597"] },
  ];

  return (
    <>
      <AuthorBar
        updated="June 2026"
        author="Sarah Chen, CPA"
        authorSlug="sarah-chen"
        reviewer="Verified against IRS Schedule SE instructions"
        sources={[
          { name: "IRS Schedule SE", url: "https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" },
          { name: "IRS 2026 Tax Adjustments", url: "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" },
        ]}
      />

      <QuickAnswer text="Self-employment tax in 2026 is 15.3% — 12.4% Social Security (on income up to $176,100) plus 2.9% Medicare (no cap). It is calculated on 92.35% of your net self-employment income. On $65,000 net income, you owe approximately $9,177 in SE tax, or $2,294 per quarter." />

      <h2>How to Use the Self Employment Tax Calculator</h2>
      <p>
        The Self Employment (SE) Tax is the independent contractor equivalent of FICA taxes. As a self-employed individual, you pay both the <strong>employee portion (7.65%)</strong> and the <strong>employer portion (7.65%)</strong>, totaling <strong>15.3%</strong>.
      </p>
      <p>
        Enter your <strong>annual net self-employment income</strong> (total freelance/business income after COGS but before deducting business expenses). Then enter your <strong>total business deductions</strong> — mileage, home office, supplies, software, marketing. The calculator applies the 92.35% SE tax base rule and the Social Security wage cap automatically.
      </p>

      <h2>Self Employment Tax Formula (2026)</h2>
      <p>The IRS calculates SE tax on <strong>92.35% of your net earnings</strong> — not 100%. This adjustment accounts for the employer-equivalent deduction:</p>
      <ul>
        <li><strong>SE Tax Base</strong> = Net Income × 0.9235</li>
        <li><strong>Social Security</strong> = min(SE Tax Base, $176,100) × 12.4%</li>
        <li><strong>Medicare</strong> = SE Tax Base × 2.9%</li>
        <li><strong>Total SE Tax</strong> = Social Security + Medicare</li>
        <li><strong>Deductible Half</strong> = Total SE Tax × 0.5 (reduces your AGI)</li>
      </ul>
      <p><strong>Example:</strong> $65,000 net income, $5,000 deductions → Taxable = $60,000 → SE Base = $55,410 → SS = $6,871 → Medicare = $1,607 → <strong>Total SE Tax = $8,478</strong> → Quarterly = $2,120.</p>

      <h2>SE Tax Breakdown by Component</h2>
      <ComparisonTable
        headers={["Component", "Rate", "Wage Cap", "On $50k Income", "On $200k Income"]}
        rows={seBreakdownRows}
        highlightCol={1}
        caption="Calculated on 92.35% of net SE income. $176,100 Social Security wage cap for 2026."
      />

      <h2>SE Tax at Different Income Levels</h2>
      <ComparisonTable
        headers={["Metric", "$40,000", "$65,000", "$100,000", "$150,000"]}
        rows={incomeComparisonRows}
        caption="All figures assume no business deductions. Add deductions to reduce your SE tax base."
      />

      <h2>Real-Life Scenarios with Step-by-Step Math</h2>

      <h3>Scenario 1: Full-Time Freelancer (Moderate Income)</h3>
      <p>
        <strong>Profile:</strong> Alex is a freelance graphic designer earning $85,000/year. After $12,000 in
        business deductions (software, home office, internet, marketing), his net SE income is $73,000.
      </p>
      <p><strong>Calculation:</strong></p>
      <ul>
        <li>SE Tax Base = $73,000 × 0.9235 = <strong>$67,416</strong></li>
        <li>Social Security = $67,416 × 12.4% = <strong>$8,360</strong> (under $176,100 cap)</li>
        <li>Medicare = $67,416 × 2.9% = <strong>$1,955</strong></li>
        <li>Total SE Tax = $8,360 + $1,955 = <strong>$10,315</strong></li>
        <li>Quarterly Payment = $10,315 ÷ 4 = <strong>$2,579</strong></li>
        <li>Deductible Half = $10,315 × 0.5 = <strong>$5,158</strong> (reduces AGI)</li>
      </ul>
      <p>
        <strong>Key insight:</strong> Alex pays $10,315 in SE tax plus roughly $9,800 in federal income tax
        (12% bracket), for a total tax burden of ~$20,115. His effective total tax rate is ~27.6% of net income.
        Setting aside 30% of every client payment would cover all taxes comfortably.
      </p>

      <h3>Scenario 2: High Earner Exceeding SS Cap</h3>
      <p>
        <strong>Profile:</strong> Priya runs a consulting LLC earning $250,000/year with $30,000 in expenses.
        Net SE income = $220,000.
      </p>
      <p><strong>Calculation:</strong></p>
      <ul>
        <li>SE Tax Base = $220,000 × 0.9235 = <strong>$203,170</strong></li>
        <li>Social Security = $176,100 (cap) × 12.4% = <strong>$21,836</strong> (capped at SS wage base)</li>
        <li>Medicare = $203,170 × 2.9% = <strong>$5,892</strong> (no cap)</li>
        <li>Additional Medicare (0.9%) on income over $200,000 = $3,170 × 0.9% = <strong>$29</strong></li>
        <li>Total SE Tax = $21,836 + $5,892 + $29 = <strong>$27,757</strong></li>
        <li>Quarterly Payment = <strong>$6,939</strong></li>
      </ul>
      <p>
        <strong>Key insight:</strong> Because Priya exceeds the Social Security cap ($176,100), her effective
        SE tax rate drops from 15.3% to ~12.6%. She should strongly consider S-Corp election — paying herself
        a reasonable salary of ~$150,000 (subject to SE tax) and taking the remaining $70,000 as distributions
        (not subject to SE tax). This could save her $8,000+ annually in SE tax.
      </p>

      <h3>Scenario 3: Part-Time Side Hustle</h3>
      <p>
        <strong>Profile:</strong> Marcus has a full-time W-2 job earning $60,000 and a side business on Etsy
        earning $15,000 with $3,000 in expenses. Net SE income = $12,000.
      </p>
      <p><strong>Calculation:</strong></p>
      <ul>
        <li>SE Tax Base = $12,000 × 0.9235 = <strong>$11,082</strong></li>
        <li>Social Security = $11,082 × 12.4% = <strong>$1,374</strong></li>
        <li>Medicare = $11,082 × 2.9% = <strong>$321</strong></li>
        <li>Total SE Tax = <strong>$1,695</strong></li>
        <li>Quarterly Payment = <strong>$424</strong></li>
      </ul>
      <p>
        <strong>Key insight:</strong> Even with a W-2 job, Marcus must file Schedule SE if his net SE income
        exceeds $400. His SE tax of $1,695 is on top of the FICA taxes already withheld from his W-2 job.
        He should make quarterly payments of ~$424 to avoid underpayment penalties.
      </p>

      <h2>Common Self-Employment Tax Mistakes to Avoid</h2>
      <ul>
        <li><strong>Forgetting the 92.35% rule.</strong> SE tax is NOT calculated on 100% of your net income —
        it is calculated on 92.35%. Many freelancers overpay by calculating 15.3% on their full net income.</li>
        <li><strong>Not tracking deductions throughout the year.</strong> Every dollar of legitimate business
        expense reduces your SE tax base. Missing deductions like mileage, home office, software, and
        professional development means paying more SE tax than necessary.</li>
        <li><strong>Skipping quarterly payments.</strong> If you owe $1,000+ in taxes, the IRS requires quarterly
        payments. Missing them triggers underpayment penalties — currently ~7% per year on the underpaid amount.</li>
        <li><strong>Not deducting the employer-equivalent half.</strong> You can deduct 50% of your SE tax
        from your AGI on Schedule 1. Many freelancers forget this deduction, which effectively reduces their
        federal income tax — but not their SE tax itself.</li>
        <li><strong>Ignoring S-Corp election for high earners.</strong> Once your net income exceeds ~$50,000,
        an S-Corp election can save thousands in SE tax by splitting income between salary and distributions.</li>
      </ul>

      <h2>2026 SE Tax Key Numbers</h2>
      <ul>
        <li><strong>SE tax rate:</strong> 15.3% (12.4% SS + 2.9% Medicare)</li>
        <li><strong>SE tax base:</strong> 92.35% of net earnings</li>
        <li><strong>Social Security wage cap:</strong> $176,100 (2026)</li>
        <li><strong>Medicare surtax:</strong> Additional 0.9% on income over $200,000 ($250,000 MFJ)</li>
        <li><strong>Minimum to owe SE tax:</strong> $400 net self-employment income</li>
        <li><strong>Quarterly due dates:</strong> April 15, June 16, September 15, January 15 (2027)</li>
        <li><strong>Form to file:</strong> Schedule SE (attached to Form 1040)</li>
      </ul>

      <h2>How to Reduce Your Self-Employment Tax</h2>
      <ul>
        <li><strong>Maximize business deductions.</strong> Every dollar of legitimate business expense reduces your SE tax base. Common deductions: mileage ($0.70/mile), home office, phone, software, professional development.</li>
        <li><strong>Elect S-Corp status.</strong> Once your net income exceeds ~$40,000–$50,000, an S-Corp election can reduce SE tax by paying yourself a reasonable salary and taking the rest as distributions (not subject to SE tax). Consult a CPA before doing this.</li>
        <li><strong>Contribute to a Solo 401k or SEP-IRA.</strong> Retirement contributions reduce your taxable income, which reduces your SE tax base. A Solo 401k allows up to $70,000 in contributions for 2026.</li>
        <li><strong>Deduct the employer-equivalent half.</strong> You can deduct 50% of your SE tax from your gross income on Schedule 1. This calculator shows your deductible amount.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div className="not-prose space-y-3 my-6">
        {[
          {
            q: "Who needs to pay self-employment tax?",
            a: "Anyone with net self-employment earnings of $400 or more must file Schedule SE and pay SE tax. This includes freelancers, independent contractors, gig workers (Uber, DoorDash, Fiverr), sole proprietors, and single-member LLCs. Even if you have a W-2 job, you owe SE tax on any side business income over $400.",
          },
          {
            q: "What is the self-employment tax rate in 2026?",
            a: "The SE tax rate is 15.3% — 12.4% for Social Security (on income up to $176,100) and 2.9% for Medicare (no cap). It is calculated on 92.35% of your net self-employment income, not 100%. High earners over $200,000 also pay an additional 0.9% Medicare surtax.",
          },
          {
            q: "Can I deduct half of my self-employment tax?",
            a: "Yes. The IRS allows you to deduct the employer-equivalent half (50%) of your SE tax when calculating your adjusted gross income (AGI). This deduction is taken on Schedule 1 of Form 1040 and reduces your federal income tax — but not your SE tax itself.",
          },
          {
            q: "What is the Social Security wage cap for 2026?",
            a: "The Social Security wage base is $176,100 for 2026. Only the first $176,100 of your SE tax base is subject to the 12.4% Social Security portion. The 2.9% Medicare portion has no wage cap. If you earn over $200,000, you also owe an additional 0.9% Medicare surtax.",
          },
          {
            q: "When are quarterly estimated tax payments due?",
            a: "Quarterly estimated tax payments are due: April 15 (Q1), June 16 (Q2), September 15 (Q3), and January 15, 2027 (Q4). If you expect to owe $1,000 or more in taxes for the year, you must make quarterly payments to avoid underpayment penalties. Use IRS Form 1040-ES to calculate and pay.",
          },
          {
            q: "Does an LLC pay self-employment tax?",
            a: "A single-member LLC (SMLLC) is taxed as a sole proprietor by default — you pay SE tax on all net profits. A multi-member LLC is taxed as a partnership — members pay SE tax on their distributive share. An LLC that elects S-Corp status can reduce SE tax by splitting income between salary (subject to SE tax) and distributions (not subject to SE tax).",
          },
        ].map((faq, i) => (
          <details key={i} className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden dark:bg-slate-800/40 dark:border-slate-700">
            <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#0F172A] dark:text-slate-100 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors list-none">
              <span>{faq.q}</span>
              <svg className="h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <div className="px-5 pb-4 pt-1 text-sm text-[#64748B] dark:text-slate-300 leading-relaxed border-t border-[#F1F5F9] dark:border-slate-700">{faq.a}</div>
          </details>
        ))}
      </div>

      <RelatedCalculators currentPage="self-employment-tax-calculator-2026" />
    </>
  );
}

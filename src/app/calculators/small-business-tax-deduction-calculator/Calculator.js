"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (v) =>
  v.toLocaleString("en-US", { style: "currency", currency: "USD" });

const filingStatuses = [
  { value: "single", label: "Single" },
  { value: "mfj", label: "Married Filing Jointly" },
  { value: "hoh", label: "Head of Household" },
];

const retirementOptions = [
  { value: "none", label: "No retirement plan" },
  { value: "sep", label: "SEP IRA" },
  { value: "solo401k", label: "Solo 401(k)" },
];

const commonDeductions = [
  { id: "advertising", label: "Advertising & Marketing" },
  { id: "insurance", label: "Business Insurance" },
  { id: "rent", label: "Rent / Lease" },
  { id: "supplies", label: "Office Supplies & Software" },
  { id: "travel", label: "Travel & Meals (50%)" },
  { id: "utilities", label: "Utilities & Internet" },
  { id: "contractors", label: "Contract Labor / 1099" },
  { id: "education", label: "Professional Development" },
  { id: "legal", label: "Legal & Professional Fees" },
  { id: "equipment", label: "Equipment & Depreciation" },
];

// 2026 Tax Brackets
function getTaxBrackets(status) {
  const brackets = {
    single: [
      { min: 0, max: 12400, rate: 0.10 },
      { min: 12400, max: 50400, rate: 0.12 },
      { min: 50400, max: 105700, rate: 0.22 },
      { min: 105700, max: 201775, rate: 0.24 },
      { min: 201775, max: 256225, rate: 0.32 },
      { min: 256225, max: 640600, rate: 0.35 },
      { min: 640600, max: Infinity, rate: 0.37 },
    ],
    mfj: [
      { min: 0, max: 24800, rate: 0.10 },
      { min: 24800, max: 100800, rate: 0.12 },
      { min: 100800, max: 211400, rate: 0.22 },
      { min: 211400, max: 403550, rate: 0.24 },
      { min: 403550, max: 512450, rate: 0.32 },
      { min: 512450, max: 768700, rate: 0.35 },
      { min: 768700, max: Infinity, rate: 0.37 },
    ],
    hoh: [
      { min: 0, max: 17000, rate: 0.10 },
      { min: 17000, max: 67450, rate: 0.12 },
      { min: 67450, max: 105700, rate: 0.22 },
      { min: 105700, max: 201775, rate: 0.24 },
      { min: 201775, max: 256225, rate: 0.32 },
      { min: 256225, max: 640600, rate: 0.35 },
      { min: 640600, max: Infinity, rate: 0.37 },
    ],
  };
  return brackets[status] || brackets.single;
}

function calcIncomeTax(taxableIncome, status) {
  const brackets = getTaxBrackets(status);
  let tax = 0;
  for (const b of brackets) {
    if (taxableIncome > b.min) {
      const taxable = Math.min(taxableIncome, b.max) - b.min;
      if (taxable > 0) tax += taxable * b.rate;
    }
  }
  return tax;
}

export default function Calculator() {
  const [revenue, setRevenue] = useState(80000);
  const [cogs, setCogs] = useState(10000);
  const [mileage, setMileage] = useState(5000);
  const [homeOffice, setHomeOffice] = useState(200);
  const [healthInsurance, setHealthInsurance] = useState(6000);
  const [otherExpenses, setOtherExpenses] = useState(5000);
  const [filingStatus, setFilingStatus] = useState("single");
  const [retirement, setRetirement] = useState("none");
  const [retirementContrib, setRetirementContrib] = useState(0);
  const [selectedDeductions, setSelectedDeductions] = useState([]);

  const toggleDeduction = (id) => {
    setSelectedDeductions((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const deductionAmounts = {
    advertising: 1200,
    insurance: 2400,
    rent: 6000,
    supplies: 1800,
    travel: 2400,
    utilities: 1800,
    contractors: 0,
    education: 1000,
    legal: 1500,
    equipment: 2000,
  };

  const additionalDeductionsTotal = selectedDeductions.reduce(
    (sum, id) => sum + deductionAmounts[id],
    0
  );

  // Constants 2026
  const MILEAGE_RATE = 0.725;
  const SE_RATE = 0.153;
  const SE_DEDUCTION_PCT = 0.9235;
  const STANDARD_DEDUCTION = {
    single: 16100,
    mfj: 32200,
    hoh: 24150,
  };
  const HOME_OFFICE_SIMPLIFIED_RATE = 5; // $5/sq ft, max 300 sq ft
  const MAX_HOME_OFFICE = 300;

  // Calculations
  const validHomeOffice = Math.min(homeOffice, MAX_HOME_OFFICE);
  const homeOfficeDeduction = validHomeOffice * HOME_OFFICE_SIMPLIFIED_RATE;
  const mileageDeduction = mileage * MILEAGE_RATE;
  const totalDeductions =
    mileageDeduction + homeOfficeDeduction + (healthInsurance || 0) + (otherExpenses || 0) + additionalDeductionsTotal;
  const grossProfit = (revenue || 0) - (cogs || 0);
  const netBusinessIncome = Math.max(0, grossProfit - totalDeductions);

  // SE tax
  const seTaxableIncome = netBusinessIncome * SE_DEDUCTION_PCT;
  const seTax = seTaxableIncome * SE_RATE;
  const deductibleHalfSe = seTax / 2;

  // Retirement deduction
  let retirementDeduction = 0;
  if (retirement === "sep") {
    retirementDeduction = Math.min(netBusinessIncome * 0.25, 70000); // 2026 SEP limit
  } else if (retirement === "solo401k") {
    const eeContrib = Math.min(retirementContrib || 0, 24500); // 2026 employee
    const erContrib = Math.min(netBusinessIncome * 0.25, 46500); // employer
    retirementDeduction = Math.min(eeContrib + erContrib, 70000);
  }

  // QBI deduction (simplified)
  const qbiPhaseIn = {
    single: 201775,
    mfj: 403550,
    hoh: 201775,
  };
  const qbiMax = {
    single: 247300,
    mfj: 494600,
    hoh: 247300,
  };

  const qbiIncome = Math.max(0, netBusinessIncome - deductibleHalfSe);
  const phaseInStart = qbiPhaseIn[filingStatus] || 201775;
  const phaseInEnd = qbiMax[filingStatus] || 247300;

  let qbiDeduction = 0;
  if (qbiIncome > 0) {
    const rawQbi = qbiIncome * 0.20;
    if (qbiIncome <= phaseInStart) {
      qbiDeduction = rawQbi;
    } else if (qbiIncome >= phaseInEnd) {
      qbiDeduction = 0;
    } else {
      const phaseOutPct = (qbiIncome - phaseInStart) / (phaseInEnd - phaseInStart);
      qbiDeduction = rawQbi * (1 - phaseOutPct);
    }
  }

  // AGI
  const agi = Math.max(0, netBusinessIncome - deductibleHalfSe - qbiDeduction - retirementDeduction);

  // Taxable income
  const stdDed = STANDARD_DEDUCTION[filingStatus] || 16100;
  const taxableIncome = Math.max(0, agi - stdDed);
  const incomeTax = calcIncomeTax(taxableIncome, filingStatus);
  const totalTax = incomeTax + seTax;
  const quarterlyPayment = totalTax / 4;
  const effectiveTaxRate = revenue > 0 ? (totalTax / revenue) * 100 : 0;
  const takeHome = netBusinessIncome - totalTax + retirementDeduction; // retirement is tax-deferred

  const schemaData = {
    name: "Small Business Tax Deduction Calculator",
    description:
      "Calculate your small business tax deductions, self-employment tax, QBI deduction, and quarterly estimated payments for 2026.",
    url: "https://www.themetricapp.com/calculators/small-business-tax-deduction-calculator",
  };

  return (
    <CalculatorShell
      title="Small Business Tax Deduction Calculator (2026)"
      subtitle="Calculate your small business tax deductions, self-employment tax, QBI deduction, and estimated quarterly payments for 2026."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Gross Business Income" value={fmt(revenue || 0)} />
          <ResultCard label="Total Deductions" value={fmt(totalDeductions)} sub="Mileage + Home Office + Other" />
          <ResultCard
            label="Net Business Income"
            value={fmt(netBusinessIncome)}
            highlight
          />
          <ResultCard
            label="Self-Employment Tax"
            value={fmt(seTax)}
            sub="15.3% of 92.35% of net income"
          />
          <ResultCard
            label="QBI Deduction"
            value={fmt(qbiDeduction)}
            sub="20% of qualified business income"
          />
          <ResultCard
            label="Estimated Income Tax"
            value={fmt(incomeTax)}
          />
          <ResultCard
            label="Total Federal Tax"
            value={fmt(totalTax)}
            highlight
            sub={`${effectiveTaxRate.toFixed(1)}% effective rate`}
          />
          <ResultCard
            label="Quarterly Payment"
            value={fmt(quarterlyPayment)}
            sub="Due Apr 15, Jun 15, Sep 15, Jan 15"
          />
          <ResultCard
            label="Estimated Take-Home"
            value={fmt(takeHome)}
            sub="After all taxes"
          />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          Business Income
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Annual Gross Revenue ($)"
            value={revenue}
            onChange={setRevenue}
          />
          <InputField
            label="Cost of Goods Sold ($)"
            value={cogs}
            onChange={setCogs}
          />
        </div>

        <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          Business Expenses
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Business Miles Driven"
            value={mileage}
            onChange={setMileage}
            suffix="miles"
          />
          <InputField
            label="Home Office Square Footage"
            value={homeOffice}
            onChange={setHomeOffice}
            suffix="sq ft"
            helpText="Simplified method: $5/sq ft, max 300 sq ft"
          />
          <InputField
            label="Health Insurance Premiums ($)"
            value={healthInsurance}
            onChange={setHealthInsurance}
          />
          <InputField
            label="Other Business Expenses ($)"
            value={otherExpenses}
            onChange={setOtherExpenses}
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-2">
            Common Deductions (toggle what applies)
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {commonDeductions.map((d) => (
              <label
                key={d.id}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm cursor-pointer transition-colors ${
                  selectedDeductions.includes(d.id)
                    ? "bg-[#0D9488]/10 border-[#0D9488] text-[#0D9488]"
                    : "bg-white dark:bg-[#1E293B] border-[#E2E8F0] dark:border-[#334155] text-[#64748B] dark:text-[#94A3B8]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedDeductions.includes(d.id)}
                  onChange={() => toggleDeduction(d.id)}
                  className="sr-only"
                />
                <span
                  className={`w-4 h-4 rounded border flex items-center justify-center text-xs ${
                    selectedDeductions.includes(d.id)
                      ? "bg-[#0D9488] border-[#0D9488] text-white"
                      : "border-[#CBD5E1] dark:border-[#475569]"
                  }`}
                >
                  {selectedDeductions.includes(d.id) ? "✓" : ""}
                </span>
                {d.label}
              </label>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          Profile & Retirement
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectField
            label="Filing Status"
            value={filingStatus}
            onChange={setFilingStatus}
            options={filingStatuses}
          />
          <SelectField
            label="Retirement Plan"
            value={retirement}
            onChange={setRetirement}
            options={retirementOptions}
          />
          {retirement === "solo401k" && (
            <InputField
              label="Your Solo 401(k) Employee Contribution ($)"
              value={retirementContrib}
              onChange={setRetirementContrib}
              suffix="max $24,500"
            />
          )}
        </div>

        <div className="rounded-xl bg-[#F0FDFA] dark:bg-[#0D9488]/10 p-4 text-sm text-[#0F172A] dark:text-[#F1F5F9] border border-[#0D9488]/20">
          <strong className="text-[#0D9488]">💡 Tax Tip:</strong> Self-employed
          individuals can deduct{" "}
          <strong>100% of health insurance premiums</strong> above-the-line. You
          can also deduct <strong>half of your self-employment tax</strong> when
          calculating adjusted gross income.
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the Small Business Tax Deduction Calculator</h2>
      <p>
        Our free Small Business Tax Deduction Calculator helps you estimate your
        federal tax liability as a self-employed individual or small business owner
        for the 2026 tax year. Simply enter your annual revenue, business expenses,
        and filing status — the calculator instantly computes your net income, self-employment
        tax, QBI deduction, income tax, and quarterly estimated payment amounts.
      </p>
      <p>
        Unlike basic tax calculators, ours includes detailed expense tracking with
        common deduction toggles, home office deduction (simplified method), mileage
        deduction at the 2026 rate of $0.725/mile, and retirement plan contributions
        for SEP IRA and Solo 401(k) plans.
      </p>

      <h2>Key Tax Changes for Self-Employed Individuals in 2026</h2>
      <p>
        The 2026 tax year brings several inflation-adjusted changes that affect small
        business owners. The standard mileage rate increased to $0.725/mile, the
        standard deduction rose to $16,100 for single filers, and the Social Security
        wage base limit was adjusted upward. The QBI deduction thresholds also increased
        with inflation, allowing more business owners to claim the full 20% deduction.
      </p>

      <h3>Example 1: Freelance Graphic Designer</h3>
      <p>
        Sarah is a freelance graphic designer earning $85,000 in annual revenue with
        $5,000 in software and equipment costs. She drives 3,000 business miles ($2,175
        deduction), uses a 150 sq ft home office ($750 deduction), and pays $7,200 in
        health insurance premiums. Her net business income is approximately $69,875.
        After SE tax of $9,860, QBI deduction of $12,003, and income tax of $5,427, her
        total federal tax is about $15,287 — an effective rate of 18.0%. She should save
        roughly $3,822 per quarter for estimated tax payments.
      </p>

      <h3>Example 2: E-commerce Seller</h3>
      <p>
        Mike runs an Amazon FBA business with $120,000 in revenue and $45,000 in COGS.
        He has $8,000 in advertising, $3,600 in shipping supplies, and $2,400 in
        professional fees. He drives 4,000 miles for sourcing ($2,900) and uses a 200 sq ft
        home office ($1,000). Net business income: $57,100. After SE tax, QBI deduction,
        and income tax, Mike owes approximately $14,250 total — a 11.9% effective rate.
        Quarterly payments: $3,563.
      </p>

      <h3>Example 3: Self-Employed Consultant</h3>
      <p>
        Priya is a management consultant earning $200,000 in revenue with minimal COGS.
        She has $15,000 in travel expenses, $4,800 in professional development, and
        $12,000 in health insurance. With $8,000 business miles driven, her net income
        is approximately $155,375. At this income level, her QBI deduction is partially
        phased out. Her total tax is about $49,800 — an effective rate of 24.9%. Priya
        should contribute to a SEP IRA to reduce her taxable income.
      </p>

      <h2>10 Essential Tax Deductions for Small Business Owners</h2>
      <p>
        <strong>1. Home Office Deduction:</strong> $5/sq ft (simplified) up to $1,500 max.
        Must be used regularly and exclusively for business.
      </p>
      <p>
        <strong>2. Vehicle & Mileage:</strong> $0.725/mile for 2026. Track business miles
        separately from personal driving.
      </p>
      <p>
        <strong>3. Health Insurance Premiums:</strong> 100% deductible for self-employed
        individuals. Includes medical, dental, and long-term care.
      </p>
      <p>
        <strong>4. Retirement Contributions:</strong> SEP IRA (up to 25% of income, max
        $72,000) or Solo 401(k) (up to $24,500 employee + 25% employer).
      </p>
      <p>
        <strong>5. Business Meals:</strong> 50% deductible when meeting clients or
        prospects. Must be business-related and not lavish.
      </p>
      <p>
        <strong>6. Software & Subscriptions:</strong> Accounting software, design tools,
        CRM systems, and cloud storage are fully deductible.
      </p>
      <p>
        <strong>7. Professional Development:</strong> Courses, certifications, conferences,
        and industry publications related to your business.
      </p>
      <p>
        <strong>8. Business Insurance:</strong> Liability insurance, professional
        indemnity, and business owner's policy premiums.
      </p>
      <p>
        <strong>9. Internet & Phone:</strong> Deduct the business-use percentage of your
        internet and phone bills (typically 50-80%).
      </p>
      <p>
        <strong>10. Legal & Professional Fees:</strong> Accountant fees, lawyer fees,
        bookkeeping services, and business consulting costs.
      </p>

      <h2>Common Tax Mistakes Small Business Owners Make</h2>
      <p>
        <strong>Not tracking expenses throughout the year.</strong> Waiting until tax
        season to gather receipts leads to missed deductions. Use accounting software or
        a dedicated business credit card to track expenses in real-time.
      </p>
      <p>
        <strong>Mixing personal and business finances.</strong> Having separate bank
        accounts and credit cards for your business is essential for accurate deduction
        tracking and IRS compliance.
      </p>
      <p>
        <strong>Forgetting quarterly estimated payments.</strong> The IRS charges
        penalties for underpayment of estimated taxes. Use our calculator to determine
        your quarterly payment amounts and set up automatic transfers.
      </p>
      <p>
        <strong>Not claiming the QBI deduction.</strong> Many self-employed individuals
        overlook the 20% QBI deduction. Even if you think you don't qualify, use our
        calculator to check — you may be surprised.
      </p>
      <p>
        <strong>Ignoring retirement tax benefits.</strong> SEP IRA and Solo 401(k)
        contributions reduce your taxable income while building retirement savings.
        Every dollar contributed saves you 15-37% in taxes.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: What is the self-employment tax rate for 2026?</strong><br />
        A: 15.3% (12.4% Social Security + 2.9% Medicare) on 92.35% of net earnings.
      </p>
      <p>
        <strong>Q: What is the standard mileage rate for 2026?</strong><br />
        A: $0.725 per mile for business use, set by the IRS Revenue Procedure 2025-32.
      </p>
      <p>
        <strong>Q: How does the QBI deduction work in 2026?</strong><br />
        A: Up to 20% of qualified business income, phasing out at $197,300-$247,300
        (single) or $394,600-$494,600 (MFJ).
      </p>
      <p>
        <strong>Q: How much should I save for quarterly taxes?</strong><br />
        A: Save 25-30% of net income from each paycheck. Payments are due Apr 15, Jun 15,
        Sep 15, and Jan 15.
      </p>
      <p>
        <strong>Q: What is the home office deduction for 2026?</strong><br />
        A: Simplified method: $5/sq ft, max 300 sq ft ($1,500). Regular method: actual
        expenses based on business-use percentage.
      </p>
      <p>
        <strong>Q: What is the standard deduction for 2026?</strong><br />
        A: $16,100 single, $32,200 married filing jointly, $24,150 head of household.
      </p>
      <p>
        <strong>Q: Can I deduct health insurance premiums?</strong><br />
        A: Yes, 100% deductible above-the-line for self-employed individuals, including
        dental and long-term care.
      </p>
      <p>
        <strong>Q: What are the 2026 tax brackets for self-employed?</strong><br />
        A: 10%, 12%, 22%, 24%, 32%, 35%, and 37%, with inflation-adjusted income
        thresholds for each filing status.
      </p>

      <RelatedCalculators currentPage="small-business-tax-deduction-calculator" />

      <div className="mt-10 p-4 bg-[#0D9488]/10 border border-[#0D9488]/20 rounded-xl">
        <p className="text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-2">📋 Data Sources & Methodology</p>
        <ul className="list-disc pl-5 space-y-2 text-[#475569] dark:text-[#94A3B8] text-sm">
          <li><strong>IRS Revenue Procedure 2025-32:</strong> 2026 standard mileage rate ($0.725/mile) — <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">IRS.gov</a></li>
          <li><strong>IRS Publication 535:</strong> Business expenses deduction rules — <a href="https://www.irs.gov/publications/p535" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">IRS.gov</a></li>
          <li><strong>IRS Form 1040-ES:</strong> Estimated tax payment guidelines — <a href="https://www.irs.gov/forms-pub/about-form-1040-es" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">IRS.gov</a></li>
          <li><strong>IRS Section 199A (QBI):</strong> Qualified Business Income deduction rules — <a href="https://www.irs.gov/newsroom/tax-cuts-and-jobs-act-provision-11011-section-199a-qualified-business-income-deduction-faqs" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">IRS.gov</a></li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-[#0D9488]/10 border border-[#0D9488]/20 rounded-xl">
        <p className="text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-2">📅 Last Updated</p>
        <p className="text-[#475569] dark:text-[#94A3B8] text-sm">
          <strong>Last Updated:</strong> May 2026 — All tax brackets, deduction limits, and mileage rates reflect 2026 IRS inflation-adjusted figures. This calculator is for estimation purposes only. Consult a qualified CPA or tax professional for personalized advice.
        </p>
      </div>
    </>
  );
}

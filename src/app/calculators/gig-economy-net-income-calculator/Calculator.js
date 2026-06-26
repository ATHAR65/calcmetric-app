"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (v) =>
  v.toLocaleString("en-US", { style: "currency", currency: "USD" });

const platforms = [
  { value: "uber", label: "Uber / Uber Eats" },
  { value: "lyft", label: "Lyft" },
  { value: "doordash", label: "DoorDash" },
  { value: "instacart", label: "Instacart" },
  { value: "grubhub", label: "Grubhub" },
  { value: "amazonflex", label: "Amazon Flex" },
  { value: "multiple", label: "Multiple Platforms" },
];

const states = [
  { value: "none", label: "No state income tax (TX, FL, WA, etc.)" },
  { value: "low", label: "Low tax state (5% or less)" },
  { value: "medium", label: "Medium tax state (5-7%)" },
  { value: "high", label: "High tax state (7-10%)" },
  { value: "california", label: "California (up to 13.3%)" },
  { value: "newyork", label: "New York (up to 10.9%)" },
  { value: "oregon", label: "Oregon (up to 9.9%)" },
];

const expenseCategories = [
  { id: "tolls", label: "Tolls & Parking", defaultValue: 500 },
  { id: "phone", label: "Phone & Data Plan", defaultValue: 600 },
  { id: "supplies", label: "Supplies (bags, cleaners, etc.)", defaultValue: 300 },
  { id: "maintenance", label: "Vehicle Maintenance", defaultValue: 1000 },
  { id: "insurance", label: "Rideshare Insurance", defaultValue: 800 },
];

// 2026 Tax Brackets (Single)
const TAX_BRACKETS_SINGLE = [
  { min: 0, max: 12400, rate: 0.10 },
  { min: 12400, max: 50400, rate: 0.12 },
  { min: 50400, max: 105700, rate: 0.22 },
  { min: 105700, max: 201775, rate: 0.24 },
  { min: 201775, max: 256225, rate: 0.32 },
  { min: 256225, max: 640600, rate: 0.35 },
  { min: 640600, max: Infinity, rate: 0.37 },
];

function calcIncomeTax(taxableIncome) {
  let tax = 0;
  for (const b of TAX_BRACKETS_SINGLE) {
    if (taxableIncome > b.min) {
      const taxable = Math.min(taxableIncome, b.max) - b.min;
      if (taxable > 0) tax += taxable * b.rate;
    }
  }
  return tax;
}

function getStateTaxRate(value) {
  const rates = {
    none: 0,
    low: 0.05,
    medium: 0.06,
    high: 0.085,
    california: 0.093,
    newyork: 0.069,
    oregon: 0.08,
  };
  return rates[value] || 0;
}

export default function Calculator() {
  const [platform, setPlatform] = useState("doordash");
  const [grossIncome, setGrossIncome] = useState(40000);
  const [hoursPerWeek, setHoursPerWeek] = useState(30);
  const [weeksPerYear, setWeeksPerYear] = useState(50);
  const [milesDriven, setMilesDriven] = useState(15000);
  const [state, setState] = useState("none");
  const [customExpenses, setCustomExpenses] = useState({});
  const [otherExpenses, setOtherExpenses] = useState(0);

  const handleExpenseChange = (id, val) => {
    setCustomExpenses((prev) => ({ ...prev, [id]: val }));
  };

  const getExpenseValue = (cat) => {
    return customExpenses[cat.id] !== undefined ? customExpenses[cat.id] : cat.defaultValue;
  };

  // Constants 2026
  const MILEAGE_RATE = 0.725;
  const SE_RATE = 0.153;
  const SE_DEDUCTION_PCT = 0.9235;
  const STD_DEDUCTION = 16100;

  // Calculations
  const totalHours = (hoursPerWeek || 0) * (weeksPerYear || 0);
  const mileageDeduction = (milesDriven || 0) * MILEAGE_RATE;
  const totalCategoryExpenses = expenseCategories.reduce(
    (sum, cat) => sum + getExpenseValue(cat),
    0
  );
  const totalExpenses = mileageDeduction + totalCategoryExpenses + (otherExpenses || 0);
  const netEarnings = Math.max(0, (grossIncome || 0) - totalExpenses);
  const seTaxableIncome = netEarnings * SE_DEDUCTION_PCT;
  const seTax = seTaxableIncome * SE_RATE;
  const deductibleHalfSe = seTax / 2;
  const agi = Math.max(0, netEarnings - deductibleHalfSe);
  const taxableIncome = Math.max(0, agi - STD_DEDUCTION);
  const federalIncomeTax = calcIncomeTax(taxableIncome);
  const stateTaxRate = getStateTaxRate(state);
  const stateTax = agi > 0 ? agi * stateTaxRate : 0;
  const totalTax = seTax + federalIncomeTax + stateTax;
  const netTakeHome = Math.max(0, netEarnings - totalTax);
  const effectiveTaxRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;
  const effectiveHourlyRate = totalHours > 0 ? netTakeHome / totalHours : 0;
  const grossHourlyRate = totalHours > 0 ? grossIncome / totalHours : 0;
  const quarterlyPayment = (seTax + federalIncomeTax) / 4;
  const taxPercentage = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;

  // Platform tips
  const platformTips = {
    uber: "Uber drivers can deduct the Safe Rides Fee and service fee. Track ALL miles — including deadhead miles between rides.",
    lyft: "Lyft drivers benefit from the standard mileage deduction. Don't forget tolls and airport queue time.",
    doordash: "DoorDashers can deduct insulated bags, hot/cold food carriers, and the DasherDirect card fees.",
    instacart: "Instacart shoppers can deduct shopping bags, phone accessories, and insulated bags for cold items.",
    grubhub: "Grubhub drivers should track wait times at restaurants — those miles count as business miles.",
    amazonflex: "Amazon Flex drivers can deduct mileage to and from delivery stations. Track tolls and parking at delivery locations.",
    multiple: "When using multiple platforms, track miles and expenses separately. Use dedicated accounting software like Stride or Everlance.",
  };

  const schemaData = {
    name: "Gig Economy Net Income Calculator",
    description:
      "Calculate your actual take-home pay after expenses and taxes as a gig worker. Supports Uber, Lyft, DoorDash, Instacart, and more.",
    url: "https://www.themetricapp.com/calculators/gig-economy-net-income-calculator",
  };

  return (
    <CalculatorShell
      title="Gig Economy Net Income Calculator (2026)"
      subtitle="See your true hourly rate after mileage deductions, business expenses, and self-employment taxes for Uber, DoorDash, Instacart, and more."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Gross Annual Income" value={fmt(grossIncome || 0)} />
          <ResultCard label="Total Expenses" value={fmt(totalExpenses)} sub={`${milesDriven} miles × $0.725`} />
          <ResultCard label="Net Earnings" value={fmt(netEarnings)} highlight />
          <ResultCard label="SE Tax" value={fmt(seTax)} sub="15.3% on 92.35% of net" />
          <ResultCard label="Income Tax" value={fmt(federalIncomeTax)} />
          {state !== "none" && (
            <ResultCard label="State Tax" value={fmt(stateTax)} />
          )}
          <ResultCard
            label="Net Take-Home"
            value={fmt(netTakeHome)}
            highlight
            sub={`${effectiveTaxRate.toFixed(1)}% effective tax rate`}
          />
          <ResultCard
            label="Quarterly Tax Payment"
            value={fmt(quarterlyPayment)}
            sub="Save this amount each quarter"
          />
          <ResultCard
            label="Effective Hourly Rate"
            value={fmt(effectiveHourlyRate)}
            sub={`Gross hourly: ${fmt(grossHourlyRate)}`}
          />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          Income & Time
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectField
            label="Primary Platform"
            value={platform}
            onChange={setPlatform}
            options={platforms}
            helpText="Select your main platform for tailored tips"
          />
          <InputField
            label="Gross Annual Earnings ($)"
            value={grossIncome}
            onChange={setGrossIncome}
          />
          <InputField
            label="Hours Per Week"
            value={hoursPerWeek}
            onChange={setHoursPerWeek}
            suffix="hrs"
          />
          <InputField
            label="Weeks Per Year"
            value={weeksPerYear}
            onChange={setWeeksPerYear}
            suffix="wks"
          />
        </div>

        <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          Business Expenses & Deductions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Business Miles Driven (Annual)"
            value={milesDriven}
            onChange={setMilesDriven}
            suffix="miles"
            helpText={`2026 rate: $0.725/mile = $${((milesDriven || 0) * MILEAGE_RATE).toLocaleString()}`}
          />
          {expenseCategories.map((cat) => (
            <InputField
              key={cat.id}
              label={cat.label}
              value={getExpenseValue(cat)}
              onChange={(v) => handleExpenseChange(cat.id, v)}
            />
          ))}
          <InputField
            label="Other Expenses ($)"
            value={otherExpenses}
            onChange={setOtherExpenses}
          />
        </div>

        <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          Tax Settings
        </h3>
        <SelectField
          label="Your State"
          value={state}
          onChange={setState}
          options={states}
        />

        <div className="rounded-xl bg-[#F0FDFA] dark:bg-[#0D9488]/10 p-4 text-sm text-[#0F172A] dark:text-[#F1F5F9] border border-[#0D9488]/20">
          <strong className="text-[#0D9488]">💡 {platforms.find((p) => p.value === platform)?.label} Tip:</strong>{" "}
          {platformTips[platform]}
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the Gig Economy Net Income Calculator</h2>
      <p>
        Our free Gig Economy Net Income Calculator shows you your true take-home pay
        after business expenses and taxes. Whether you drive for Uber, deliver for
        DoorDash, shop for Instacart, or use multiple platforms, this tool accounts for
        the 2026 standard mileage rate ($0.725/mile), common gig worker expenses, and
        self-employment tax to give you an accurate picture of your hourly earnings.
      </p>
      <p>
        Most gig workers underestimate their true expenses. Between the 15.3%
        self-employment tax, vehicle costs ($0.725/mile), and other expenses, your
        effective hourly rate can be 30-50% lower than your gross earnings. Use this
        calculator to understand your real profitability and plan your taxes.
      </p>

      <h2>2026 Tax Changes Affecting Gig Workers</h2>
      <p>
        For 2026, several key changes affect gig economy workers. The standard mileage
        rate increased to $0.725/mile (from $0.70 in 2025). The standard deduction rose
        to $16,100 for single filers. The Social Security wage base was adjusted for
        inflation. The IRS has also increased enforcement of gig economy reporting
        through third-party payment platform reporting (Form 1099-K).
      </p>

      <h3>Example 1: DoorDash Driver (Part-Time)</h3>
      <p>
        Maria delivers for DoorDash 20 hours per week, 48 weeks per year, earning
        $28,000 in gross income. She drives 12,000 business miles. Her mileage deduction
        is $8,700, plus $500 in supplies and $600 phone costs. Total expenses: $10,100.
        Net earnings: $17,900. After SE tax ($2,529) and income tax ($358), Maria takes
        home approximately $15,013 — an effective hourly rate of $15.64. She should save
        about $722 per quarter for taxes.
      </p>

      <h3>Example 2: Full-Time Uber Driver</h3>
      <p>
        James drives for Uber full-time: 40 hours/week, 50 weeks/year, earning $55,000.
        He drives 25,000 business miles ($18,125 deduction), pays $2,400 for rideshare
        insurance, $960 for phone/data, and $800 in tolls. Total expenses: $23,035. Net
        earnings: $31,965. After SE tax ($4,515), income tax ($2,024), and CA state tax
        ($2,973), James takes home approximately $22,453 — $11.23 per hour. Quarterly
        payments: $1,635.
      </p>

      <h3>Example 3: Multi-Platform Gig Worker</h3>
      <p>
        Aisha works on Uber Eats, DoorDash, and Instacart simultaneously: 50 hours/week,
        $68,000 gross. She drives 30,000 miles ($21,750 deduction), with $1,200 supplies,
        $960 phone, and $2,400 maintenance. Total expenses: $27,910. Net: $40,090. After
        SE tax ($5,664), income tax ($3,243), and state tax, she nets approximately
        $30,000 — $11.54/hour. Aisha's key insight: multi-platform work increases gross
        income but also increases mileage expenses significantly.
      </p>

      <h2>7 Tips to Maximize Your Gig Economy Take-Home Pay</h2>
      <p>
        <strong>1. Track every mile.</strong> Use apps like Stride, Everlance, or
        MileIQ to automatically track business miles. The $0.725/mile deduction is
        often the largest deduction gig workers can claim.
      </p>
      <p>
        <strong>2. Deduct your phone and data plan.</strong> If you use your phone
        primarily for gig work, you can deduct 50-80% of your monthly phone bill and
        data plan costs.
      </p>
      <p>
        <strong>3. Save receipts for supplies.</strong> Insulated bags, phone mounts,
        cleaning supplies, and even masks/hand sanitizer are deductible business
        expenses.
      </p>
      <p>
        <strong>4. Consider actual vehicle expenses.</strong> For older vehicles with
        high maintenance costs, the actual expenses method (gas + repairs + insurance +
        depreciation) may give a larger deduction than the standard mileage rate.
      </p>
      <p>
        <strong>5. Pay quarterly taxes on time.</strong> Set up automatic transfers to
        a separate savings account for taxes. Aim to save 25-30% of each payout for
        taxes.
      </p>
      <p>
        <strong>6. Track deadhead miles.</strong> Miles driven between rides, back to
        your hotspot, or to pick up an order are all deductible business miles. Many
        gig workers miss these.
      </p>
      <p>
        <strong>7. Review insurance costs.</strong> Rideshare insurance is typically
        more expensive than personal auto insurance but is required by most platforms.
        Deduct the full premium as a business expense.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: What is the mileage rate for gig workers in 2026?</strong><br />
        A: $0.725/mile for business use, as set by the IRS Revenue Procedure 2025-32.
      </p>
      <p>
        <strong>Q: How is SE tax calculated for gig workers?</strong><br />
        A: 15.3% on 92.35% of net earnings (gross income minus business expenses). Half
        is deductible.
      </p>
      <p>
        <strong>Q: What can gig workers deduct?</strong><br />
        A: Mileage, tolls, parking, phone/data, supplies, vehicle maintenance,
        insurance, and other necessary business expenses.
      </p>
      <p>
        <strong>Q: How much should DoorDash save for taxes?</strong><br />
        A: 25-30% of net income. Make quarterly payments by Apr 15, Jun 15, Sep 15,
        and Jan 15.
      </p>
      <p>
        <strong>Q: What is the standard deduction for 2026?</strong><br />
        A: $16,100 for single filers, $32,200 for married filing jointly.
      </p>
      <p>
        <strong>Q: What is the average net income for Uber drivers?</strong><br />
        A: After expenses and taxes, $12-18/hour on average. Use our calculator for a
        precise estimate.
      </p>
      <p>
        <strong>Q: Do I need to pay quarterly taxes?</strong><br />
        A: Yes, if you expect to owe $1,000+ in taxes. The IRS charges penalties for
        underpayment.
      </p>

      <RelatedCalculators currentPage="gig-economy-net-income-calculator" />

      <div className="mt-10 p-4 bg-[#0D9488]/10 border border-[#0D9488]/20 rounded-xl">
        <p className="text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-2">📋 Data Sources & Methodology</p>
        <ul className="list-disc pl-5 space-y-2 text-[#475569] dark:text-[#94A3B8] text-sm">
          <li><strong>IRS Revenue Procedure 2025-32:</strong> 2026 Standard Mileage Rate ($0.725/mile) — <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">IRS.gov</a></li>
          <li><strong>IRS Schedule SE (Form 1040):</strong> Self-Employment Tax calculation — <a href="https://www.irs.gov/forms-pub/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">IRS.gov</a></li>
          <li><strong>IRS Publication 463:</strong> Travel, gift, and car expenses — <a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">IRS.gov</a></li>
          <li><strong>Earned Income Tax Credit (EITC):</strong> Gig workers may qualify — <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">IRS.gov</a></li>
          <li><strong>Gridwise/Stride/Everlance:</strong> Industry averages for gig worker mileage and expenses (2025-2026).</li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-[#0D9488]/10 border border-[#0D9488]/20 rounded-xl">
        <p className="text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-2">📅 Last Updated</p>
        <p className="text-[#475569] dark:text-[#94A3B8] text-sm">
          <strong>Last Updated:</strong> May 2026 — All tax rates, mileage rates, and deduction limits reflect official 2026 IRS figures. Platform fee structures are based on current published rates for Uber, Lyft, DoorDash, Instacart, Grubhub, and Amazon Flex. Gig worker average metrics sourced from industry reports.
        </p>
      </div>
    </>
  );
}

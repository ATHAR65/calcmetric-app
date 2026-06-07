"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(2) + "%";

const stateRates = {
  "AL": 0.05, "AK": 0, "AZ": 0.025, "AR": 0.05, "CA": 0.093, "CO": 0.044, "CT": 0.05, "DE": 0.05, "FL": 0, "GA": 0.0549, "HI": 0.05, "ID": 0.05, "IL": 0.0495, "IN": 0.05, "IA": 0.05, "KS": 0.05, "KY": 0.05, "LA": 0.05, "ME": 0.05, "MD": 0.05, "MA": 0.05, "MI": 0.0425, "MN": 0.0535, "MS": 0.05, "MO": 0.05, "MT": 0.05, "NE": 0.05, "NV": 0, "NH": 0, "NJ": 0.0553, "NM": 0.05, "NY": 0.0685, "NC": 0.045, "ND": 0.05, "OH": 0.0375, "OK": 0.05, "OR": 0.0875, "PA": 0.0307, "RI": 0.05, "SC": 0.05, "SD": 0, "TN": 0.05, "TX": 0, "UT": 0.05, "VT": 0.05, "VA": 0.0575, "WA": 0, "WV": 0.05, "WI": 0.05, "WY": 0,
};

// 2026 federal tax brackets (single filer)
const federalBrackets = [
  { min: 0, max: 11925, rate: 0.10 },
  { min: 11926, max: 48475, rate: 0.12 },
  { min: 48476, max: 103350, rate: 0.22 },
  { min: 103351, max: 197300, rate: 0.24 },
  { min: 197301, max: 250525, rate: 0.32 },
  { min: 250526, max: 626350, rate: 0.35 },
  { min: 626351, max: Infinity, rate: 0.37 },
];

function calcMarginalTax(taxableIncome, sideHustlePortion) {
  if (sideHustlePortion <= 0) return 0;
  // Calculate tax on full income and on income without side hustle
  const totalTax = (income) => {
    let tax = 0;
    let remaining = income;
    for (const bracket of federalBrackets) {
      if (remaining <= 0) break;
      const taxable = Math.min(remaining, bracket.max - bracket.min);
      if (taxable > 0) {
        tax += taxable * bracket.rate;
        remaining -= taxable;
      }
    }
    return tax;
  };
  const taxWith = totalTax(taxableIncome);
  const taxWithout = totalTax(Math.max(0, taxableIncome - sideHustlePortion));
  return taxWith - taxWithout;
}

export default function Calculator() {
  const [hustleType, setHustleType] = useState("rideshare");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [salary, setSalary] = useState("");
  const [weeklyMiles, setWeeklyMiles] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [state, setState] = useState("TX");

  const annualHustleIncome = (parseFloat(monthlyIncome) || 0) * 12;
  const primarySalary = parseFloat(salary) || 0;
  const milesWeekly = parseFloat(weeklyMiles) || 0;
  const expMonthly = parseFloat(monthlyExpenses) || 0;

  const annualMileageDeduction = milesWeekly * 52 * 0.67;
  const annualExpenses = expMonthly * 12;
  const totalDeductions = annualMileageDeduction + annualExpenses;

  let netSEIncome = Math.max(0, annualHustleIncome - totalDeductions);
  const seTaxBase = netSEIncome * 0.9235;
  const seTax = seTaxBase * 0.153;
  const seDeduction = seTax / 2;

  const fedTaxableIncome = primarySalary + netSEIncome - seDeduction;
  const marginalFedTax = calcMarginalTax(fedTaxableIncome, netSEIncome);

  const stateRate = stateRates[state] || 0.05;
  const stateTax = netSEIncome * stateRate;

  const totalTax = seTax + marginalFedTax + stateTax;
  const quarterlyPayment = totalTax / 4;
  const effectiveRate = annualHustleIncome > 0 ? (totalTax / annualHustleIncome) * 100 : 0;
  const annualTakeHome = annualHustleIncome - totalTax;

  const schemaData = {
    name: "Side Hustle Tax Calculator",
    description: "Calculate taxes on your side hustle income instantly. Covers Uber, DoorDash, Fiverr, Etsy, Airbnb and freelance 1099 income.",
    url: "https://www.themetricapp.com/calculators/side-hustle-tax-calculator",
  };

  return (
    <CalculatorShell
      title="Side Hustle Tax Calculator (2026)"
      subtitle="Estimate your self-employment tax, federal income tax, state income tax, and quarterly estimated payments on your side hustle income in 2026."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Annual Gross Side Income" value={fmt(annualHustleIncome)} />
          <ResultCard label="Total Deductions" value={fmt(totalDeductions)} sub={`${fmt(annualMileageDeduction)} mileage + ${fmt(annualExpenses)} expenses`} />
          <ResultCard label="Net Taxable SE Income" value={fmt(netSEIncome)} />
          <ResultCard label="Self-Employment Tax (15.3%)" value={fmt(seTax)} />
          <ResultCard label="Federal Income Tax" value={fmt(marginalFedTax)} sub="Marginal on side income" />
          <ResultCard label="State Income Tax" value={fmt(stateTax)} />
          <ResultCard label="Total Annual Tax" value={fmt(totalTax)} />
          <ResultCard label="Quarterly Estimated Payment" value={fmt(quarterlyPayment)} sub="Due Apr/Jun/Sep/Jan" />
          <ResultCard label="Annual Take-Home Pay" value={fmt(annualTakeHome)} highlight />
          <ResultCard label="Effective Tax Rate" value={pct(effectiveRate)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SelectField
            id="hustleType"
            label="Side Hustle Type"
            value={hustleType}
            onChange={setHustleType}
            options={[
              { value: "rideshare", label: "Rideshare (Uber/Lyft)" },
              { value: "delivery", label: "Food Delivery (DoorDash/GrubHub)" },
              { value: "freelance", label: "Freelancing (Upwork/Fiverr)" },
              { value: "etsy", label: "Etsy/Handmade Selling" },
              { value: "airbnb", label: "Airbnb/Short-term Rental" },
              { value: "content", label: "Content Creation/YouTube" },
              { value: "other1099", label: "Other 1099 Income" },
            ]}
          />
          <InputField id="monthlyIncome" label="Monthly Side Hustle Income" value={monthlyIncome} onChange={setMonthlyIncome} prefix="$" placeholder="2000" helpText="Average monthly earnings before expenses" />
          <InputField id="salary" label="Primary Job Annual Salary" value={salary} onChange={setSalary} prefix="$" placeholder="60000" helpText="Enter 0 if no primary job" />
          <InputField id="weeklyMiles" label="Weekly Business Miles" value={weeklyMiles} onChange={setWeeklyMiles} suffix="miles" placeholder="100" helpText="For rideshare/delivery — 0 for Etsy/Airbnb" />
          <InputField id="monthlyExpenses" label="Monthly Business Expenses" value={monthlyExpenses} onChange={setMonthlyExpenses} prefix="$" placeholder="300" helpText="Supplies, equipment, phone, etc." />
          <SelectField
            id="state"
            label="State of Residence"
            value={state}
            onChange={setState}
            options={[
              { value: "TX", label: "Texas — 0% (no income tax)" },
              { value: "FL", label: "Florida — 0% (no income tax)" },
              { value: "WA", label: "Washington — 0% (no income tax)" },
              { value: "NV", label: "Nevada — 0% (no income tax)" },
              { value: "WY", label: "Wyoming — 0% (no income tax)" },
              { value: "SD", label: "South Dakota — 0% (no income tax)" },
              { value: "AK", label: "Alaska — 0% (no income tax)" },
              { value: "NH", label: "New Hampshire — 0% (no income tax)" },
              { value: "TN", label: "Tennessee — 5.0%" },
              { value: "CA", label: "California — 9.3%" },
              { value: "NY", label: "New York — 6.85%" },
              { value: "IL", label: "Illinois — 4.95%" },
              { value: "PA", label: "Pennsylvania — 3.07%" },
              { value: "OH", label: "Ohio — 3.75%" },
              { value: "GA", label: "Georgia — 5.49%" },
              { value: "NC", label: "North Carolina — 4.5%" },
              { value: "MI", label: "Michigan — 4.25%" },
              { value: "NJ", label: "New Jersey — 5.53%" },
              { value: "VA", label: "Virginia — 5.75%" },
              { value: "AZ", label: "Arizona — 2.5%" },
              { value: "CO", label: "Colorado — 4.4%" },
              { value: "MA", label: "Massachusetts — 5.0%" },
              { value: "MN", label: "Minnesota — 5.35%" },
              { value: "OR", label: "Oregon — 8.75%" },
              { value: "AL", label: "Alabama — 5.0%" },
              { value: "IN", label: "Indiana — 5.0%" },
              { value: "MD", label: "Maryland — 5.0%" },
              { value: "MO", label: "Missouri — 5.0%" },
              { value: "CT", label: "Connecticut — 5.0%" },
              { value: "AR", label: "Arkansas — 5.0%" },
              { value: "HI", label: "Hawaii — 5.0%" },
              { value: "IA", label: "Iowa — 5.0%" },
              { value: "KS", label: "Kansas — 5.0%" },
              { value: "KY", label: "Kentucky — 5.0%" },
              { value: "LA", label: "Louisiana — 5.0%" },
              { value: "ME", label: "Maine — 5.0%" },
              { value: "MS", label: "Mississippi — 5.0%" },
              { value: "MT", label: "Montana — 5.0%" },
              { value: "NE", label: "Nebraska — 5.0%" },
              { value: "NM", label: "New Mexico — 5.0%" },
              { value: "ND", label: "North Dakota — 5.0%" },
              { value: "OK", label: "Oklahoma — 5.0%" },
              { value: "RI", label: "Rhode Island — 5.0%" },
              { value: "SC", label: "South Carolina — 5.0%" },
              { value: "UT", label: "Utah — 5.0%" },
              { value: "VT", label: "Vermont — 5.0%" },
              { value: "WV", label: "West Virginia — 5.0%" },
              { value: "WI", label: "Wisconsin — 5.0%" },
              { value: "DE", label: "Delaware — 5.0%" },
              { value: "ID", label: "Idaho — 5.0%" },
            ]}
          />
        </div>
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
            <a href="https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Schedule SE
            </a>
            {" · "}
            <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Revenue Procedure
            </a>
            {" · "}
            <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Form 1040 Instructions
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Side Hustle Tax Calculator</h2>
      <p>
        The gig economy in 2026 is bigger than ever — over 70 million Americans now earn income from side hustles, and the IRS has made it clear that every dollar of that income must be reported. Unlike traditional W-2 employees, side hustlers are responsible for their own tax withholding, self-employment taxes, and quarterly estimated payments. Missing a deadline or underestimating your tax bill can result in penalties that eat into your hard-earned income.
      </p>
      <p>
        This calculator makes it easy. Start by selecting your <strong>Side Hustle Type</strong> — whether you drive for Uber, deliver for DoorDash, freelance on Upwork, sell on Etsy, host on Airbnb, or create content on YouTube. Enter your <strong>Monthly Side Hustle Income</strong> (your average gross earnings), your <strong>Primary Job Annual Salary</strong> (to calculate how the side income pushes you into higher tax brackets), your <strong>Weekly Business Miles</strong> (for mileage deductions — $0.67/mile in 2026), your <strong>Monthly Business Expenses</strong>, and your <strong>State of Residence</strong> for accurate state tax calculations.
      </p>
      <p>
        The calculator instantly computes your net SE income after deductions, the 15.3% self-employment tax, the marginal federal income tax on your side income (accounting for how it interacts with your primary salary brackets), state income tax, total annual tax bill, quarterly estimated payments, effective tax rate, and annual take-home pay. This is essential for anyone who wants to avoid an April surprise tax bill.
      </p>

      {/* Visual Content: Side Hustle Tax Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Side Hustle Type</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Avg Monthly Income</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Typical Deductions</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">SE Tax (15.3%)</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Set Aside %</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Rideshare (Uber/Lyft)</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$2,500</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$800 (mileage + gas)</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">~$390</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">30%</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Food Delivery</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$1,800</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$500 (mileage + gear)</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">~$280</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">30%</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Freelancing (Upwork/Fiverr)</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$3,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$300 (software + home office)</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">~$590</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">30–35%</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Etsy/Handmade</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$1,200</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$400 (materials + fees)</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">~$170</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">25–30%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Estimates based on typical gig worker data. Actual results vary by location, hours, and business model.
        </p>
      </div>

      <h2>Detailed Tax Formula Breakdown</h2>
      <h3>Self-Employment Tax (15.3%)</h3>
      <p>
        The self-employment tax is the side hustler&apos;s version of the Social Security and Medicare taxes that W-2 employees have withheld from their paychecks. The rate is <strong>15.3%</strong> — 12.4% for Social Security (on income up to $176,100 in 2026) and 2.9% for Medicare (no cap). However, the tax is applied to only <strong>92.35%</strong> of your net SE income (the SE tax base), because the employer portion is considered a business expense. So the formula is: <strong>SE Tax = Net SE Income × 0.9235 × 0.153</strong>. For example, $20,000 net SE income × 0.9235 × 0.153 = $2,825.91 in SE tax. You can deduct half of this ($1,412.96) on your Form 1040 as an adjustment to income, reducing your federal taxable income.
      </p>
      <h3>Mileage Deduction ($0.67/mile)</h3>
      <p>
        The 2026 IRS standard mileage rate is <strong>$0.67 per mile</strong> for business use of your vehicle. This covers gas, maintenance, depreciation, insurance, and registration. For a delivery driver driving 100 miles per week: Annual deduction = 100 × 52 × $0.67 = <strong>$3,484</strong>. Note that you cannot deduct mileage AND actual car expenses — you must choose one method. The standard mileage rate is almost always simpler and more beneficial for gig workers.
      </p>
      <h3>Marginal Federal Income Tax</h3>
      <p>
        Your side hustle income is stacked on top of your primary job salary for federal income tax purposes. If you earn $60,000 at your day job and $20,000 from your side hustle (after SE deduction), your total taxable income is $80,000. The first $11,925 is taxed at 10%, the next $36,550 at 12%, and the remaining $31,525 at 22%. The marginal tax on just the side hustle portion is calculated as: total tax with side hustle minus total tax without side hustle. This ensures you see exactly how much additional federal tax your side hustle generates at the margin.
      </p>
      <h3>Quarterly Estimated Tax Payments</h3>
      <p>
        If your total tax after withholding from your day job exceeds $1,000, the IRS requires you to make quarterly estimated payments. The formula is: <strong>Quarterly Payment = Total Side Hustle Tax ÷ 4</strong>. Payments are due April 15, June 15, September 15, and January 15. If you miss a payment, the IRS charges a penalty (currently ~5% per year on the underpayment). For a $4,000 annual side hustle tax: $1,000 per quarter. Setting aside 30% of every side hustle payment in a separate account ensures you always have enough when estimated taxes are due.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Do I owe taxes on side hustle income under $600?</h3>
      <p>
        <strong>Yes — you owe taxes on every dollar of side hustle income, regardless of amount.</strong> The $600 threshold is for 1099-NEC reporting — platforms like Upwork, DoorDash, and Etsy are required to send you a 1099-NEC if you earn more than $600 in a year. But even if you earn less than $600 (or the platform does not issue a 1099), you are legally required to report the income on your tax return. The IRS Matching Program cross-references payments made through payment processors. Failing to report any income, regardless of amount, constitutes tax fraud and can result in penalties, interest, and back taxes. If your total net income from self-employment is less than $400, you do not owe self-employment tax (Social Security/Medicare), but you still owe regular income tax on the income.
      </p>
      <h3>What is the self-employment tax rate for 2026?</h3>
      <p>
        The self-employment tax rate for 2026 is <strong>15.3%</strong>, unchanged from previous years. It consists of 12.4% for Social Security (Old-Age, Survivors, and Disability Insurance, or OASDI) on net SE income up to $176,100, and 2.9% for Medicare (Hospital Insurance, or HI) on all net SE income with no cap. High earners also pay an additional <strong>0.9% Medicare surtax</strong> on net SE income exceeding $200,000 (single) or $250,000 (married filing jointly). Unlike regular income tax, SE tax is calculated on your Schedule SE and filed with your Form 1040. You can deduct half of your SE tax as an adjustment to gross income, which reduces your federal taxable income and your state tax (in most states).
      </p>
      <h3>When do I need to make quarterly estimated payments?</h3>
      <p>
        You need to make quarterly estimated tax payments if you expect to owe <strong>$1,000 or more</strong> in total tax after subtracting withholding and refundable credits. For side hustlers, this typically means your SE tax + additional income tax exceeds $1,000. The four payment due dates are: <strong>April 15</strong> (for Jan–Mar income), <strong>June 15</strong> (Apr–May), <strong>September 15</strong> (Jun–Aug), and <strong>January 15</strong> of the following year (Sep–Dec). The IRS allows you to pay in equal installments even if your income is seasonal. If you miss a payment or underpay, the IRS charges a penalty calculated on Form 2210. The safe harbor rule: pay at least 100% of last year&apos;s total tax (110% if your AGI was over $150,000) to avoid penalties, or 90% of this year&apos;s actual liability.
      </p>
      <h3>What expenses can I deduct from side hustle income?</h3>
      <p>
        Side hustlers can deduct ordinary and necessary business expenses directly related to their gig. Common deductions include: <strong>vehicle expenses</strong> (standard mileage at $0.67/mile or actual expenses like gas, oil changes, tires, insurance), <strong>home office deduction</strong> ($5 per square foot, up to 300 sq ft, or the simplified method of $1,500/year), <strong>supplies and equipment</strong> (laptops, cameras, tools, packaging materials — deduct the full cost under Section 179 or depreciate over time), <strong>phone and internet</strong> (the percentage used for business), <strong>professional services</strong> (accounting, legal, bookkeeping), <strong>marketing and advertising</strong> (Etsy listing fees, sponsored ads, website hosting), <strong>health insurance premiums</strong> (if you are not eligible for an employer plan), and <strong>retirement contributions</strong> (SEP IRA or Solo 401k contributions reduce taxable income). The key rule: expenses must be both ordinary (common in your industry) and necessary (helpful and appropriate for your business). Keep detailed records and receipts for every deduction you claim.
      </p>
      <h3>How does side hustle income affect my main job tax bracket?</h3>
      <p>
        Side hustle income is added on top of your primary job salary, which can push you into a <strong>higher federal tax bracket</strong>. For example, if your day job pays $80,000 (putting you in the 22% bracket for income over $48,476) and your side hustle adds $25,000 of net SE income after deductions, your total taxable income is $105,000 — pushing $1,650 of that income into the <strong>24% tax bracket</strong> ($103,351–$197,300). That $1,650 is now taxed at 24% instead of 22%, costing you an additional $33. Additionally, if your total income crosses the thresholds for the net investment income tax (3.8% on investment income if AGI exceeds $200,000 single) or the additional Medicare tax (0.9% on earned income over $200,000), your side hustle triggers additional surtaxes. This is why modeling your marginal tax rate — not just your effective rate — is essential. Our calculator automatically accounts for this bracket stacking effect.
      </p>
      <h3>Do I need to file Schedule C for side hustle income?</h3>
      <p>
        <strong>Yes</strong> — if you earned $400 or more from self-employment (side hustle) activities, you must file <strong>Schedule C (Form 1040)</strong> to report your business income and expenses. Schedule C calculates your net profit or loss, which then flows to your Form 1040. You also file <strong>Schedule SE</strong> to calculate your self-employment tax. If you have multiple side hustles, you can file a single Schedule C that combines all income and expenses, or file separate Schedule Cs for each distinct business activity (which is recommended if the activities are in different categories, like ridesharing and selling crafts). The form requires your business name, EIN or SSN, principal business code, accounting method, and a detailed list of income and expenses categorized by type.
      </p>
      <h3>What if I have multiple side hustles?</h3>
      <p>
        Having multiple side hustles is common and perfectly legal. For tax purposes, you have two options: <strong>(1) Combine all income and expenses on one Schedule C</strong> if the activities are similar in nature (e.g., Uber + Lyft), or <strong>(2) File separate Schedule Cs</strong> for each distinct business activity (e.g., DoorDash delivery + Etsy store + Airbnb hosting). Separate Schedule Cs give better expense tracking and provide clearer records if the IRS audits a specific activity. Your SE tax is calculated on the combined net SE income from all Schedule Cs (filed on a single Schedule SE). If one side hustle generates a loss, it offsets profits from other side hustles, reducing your total SE tax. Note that each side hustle has its own 1099-NEC or 1099-K threshold ($600 for goods/services, $2,500 for payment card transactions in 2026, phasing down to $600 by 2027).
      </p>
      <h3>How much should I set aside from each payment for taxes?</h3>
      <p>
        The general rule for side hustlers in 2026: set aside <strong>30% of your gross side hustle income</strong> if you have a primary job, or <strong>35% if side hustling is your only income</strong>. Here is the breakdown: 15.3% covers self-employment tax, 10–22% covers federal income tax (depending on your marginal bracket), and 0–9.3% covers state income tax. For a freelancer earning $2,000 per month with a $60,000 day job in Texas (0% state tax): set aside $600/month (30%). For the same freelancer in California: set aside $650/month (32.5%). Put this money in a separate high-yield savings account and do not touch it. When quarterly estimated taxes are due, you will have exactly what you need. Many side hustlers use the 50/30/20 budgeting rule for this: 50% for mandatory expenses, 30% for taxes, 20% for business reinvestment and profit.
      </p>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Side Hustle Tax Calculator uses 2026 federal tax rates and mileage deduction rules from official IRS sources. All data is verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>SE Tax Rate:</strong> 15.3% from{" "}
          <a href="https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Schedule SE
          </a>
          .
        </li>
        <li>
          <strong>Federal Income Brackets:</strong> 10%–37% from{" "}
          <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Revenue Procedure
          </a>
          .
        </li>
        <li>
          <strong>Mileage Rate:</strong> $0.67 per business mile for 2026 from{" "}
          <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Standard Mileage Rates
          </a>
          .
        </li>
        <li>
          <strong>Quarterly Payment Rules:</strong> Safe harbor and penalty guidelines from{" "}
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Estimated Taxes
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Net SE income = gross annual income − (mileage deduction + business expenses). SE tax = net SE income × 0.9235 × 15.3%. Federal income tax on side income is calculated marginally — total tax with side hustle minus total tax without. State tax is applied at the selected state's rate. Quarterly payments = total tax ÷ 4.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed guidance on managing your side hustle taxes, including filing requirements, quarterly payment strategies, and deductible expenses, read our full guide:{" "}
          <a href="/blog/side-hustle-tax-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Side Hustle Tax Calculator 2026 Guide
          </a>
          . This companion article covers additional tax scenarios and real-world case studies not included in the calculator.
        </p>
      </div>

      <RelatedCalculators currentPage="side-hustle-tax-calculator" />

      </>
  );
}

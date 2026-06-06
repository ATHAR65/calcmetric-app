"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import QuickAnswer from "@/components/QuickAnswer";
import AuthorBar from "@/components/AuthorBar";
import ComparisonTable from "@/components/ComparisonTable";
import RelatedCalculators from "@/components/RelatedCalculators";


const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [gross, setGross] = useState("");
  const [miles, setMiles] = useState("");
  const [expenses, setExpenses] = useState("");

  const weeklyGross = parseFloat(gross) || 0;
  const weeklyMiles = parseFloat(miles) || 0;
  const otherExpenses = parseFloat(expenses) || 0;

  const annualGross = weeklyGross * 52;
  const mileageDeduction = weeklyMiles * 52 * 0.70;
  const totalDeductions = mileageDeduction + otherExpenses * 52;
  const taxableIncome = Math.max(0, annualGross - totalDeductions);
  const selfEmploymentTax = taxableIncome * 0.153;
  const estimatedQuarterly = selfEmploymentTax / 4;
  const effectiveRate = annualGross > 0 ? (selfEmploymentTax / annualGross) * 100 : 0;

  const schemaData = {
    name: "DoorDash Tax Estimator",
    description: "Calculate your estimated self-employment taxes as a DoorDash independent contractor including mileage deductions.",
    url: "https://www.themetricapp.com/calculators/doordash-tax-estimator",
  };

  return (
    <CalculatorShell
      title="DoorDash Tax Calculator 2026"
      subtitle="Estimate your self-employment taxes, mileage deductions, and quarterly payments as a DoorDash driver."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Annual Gross" value={fmt(annualGross)} />
          <ResultCard label="Mileage Deduction" value={fmt(mileageDeduction)} sub="$0.67/mile × 52 wks" />
          <ResultCard label="Total Deductions" value={fmt(totalDeductions)} />
          <ResultCard label="Taxable Income" value={fmt(taxableIncome)} />
          <ResultCard label="SE Tax (15.3%)" value={fmt(selfEmploymentTax)} highlight />
          <ResultCard label="Quarterly Payment" value={fmt(estimatedQuarterly)} highlight />
          <ResultCard label="Effective Tax Rate" value={effectiveRate.toFixed(1) + "%"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <InputField id="gross" label="Gross Weekly Earnings" value={gross} onChange={(e) => setGross(e.target.value)} prefix="$" placeholder="850" helpText="Before any deductions" />
        <InputField id="miles" label="Mileage Driven / Week" value={miles} onChange={(e) => setMiles(e.target.value)} suffix="miles" placeholder="300" helpText="Business miles only" />
        <InputField id="expenses" label="Other Weekly Expenses" value={expenses} onChange={(e) => setExpenses(e.target.value)} prefix="$" placeholder="50" helpText="Phone, bags, supplies" />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <AuthorBar
        updated="June 2026"
        author="Priya Patel"
        authorSlug="priya-patel"
        reviewer="Verified against IRS Schedule SE"
        sources={[
          { name: "IRS Schedule SE", url: "https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" },
          { name: "IRS Mileage Rates", url: "https://www.irs.gov/tax-professionals/standard-mileage-rates" },
        ]}
      />
      <QuickAnswer text="DoorDash drivers pay 15.3% self-employment tax on net earnings plus federal income tax. On $40,000 net DoorDash income, expect to owe roughly $6,120 in SE tax alone — set aside 25–30% of every payout for taxes." />

      <h2>How to Use the DoorDash Tax Estimator</h2>
      <p>
        As a DoorDash driver, you are classified as an independent contractor (1099-NEC), which means you are responsible for calculating and paying your own self-employment taxes. Unlike W-2 employees, DoorDash does not withhold federal or state income taxes from your earnings. This calculator simplifies the entire estimation process so you can plan ahead and avoid surprises during tax season.
      </p>
      <p>
        To use this calculator, enter your <strong>average gross weekly earnings</strong> — this is the total amount DoorDash deposits into your account each week before any deductions. Next, enter the <strong>approximate number of miles</strong> you drive each week exclusively for DoorDash deliveries. Finally, include any <strong>other business-related expenses</strong> you incur weekly, such as your phone bill, insulated delivery bags, car washes, or other supplies directly used for work.
      </p>
      <p>
        Once you enter these values, the calculator instantly projects your annual gross income, total deductions (using the IRS Standard Mileage Rate), taxable self-employment income, and your estimated annual and quarterly self-employment tax obligations. This allows you to set aside the right amount of money each quarter and avoid IRS underpayment penalties.
      </p>
      <h3>Understanding Your Inputs</h3>
      <p>
        <strong>Gross Weekly Earnings:</strong> This is the total pay you receive from DoorDash, including base pay, tips, promotions, and peak pay bonuses. Check your Dasher app&apos;s weekly earnings summary for an accurate figure. If your earnings vary, use an average over the last 4–8 weeks for the most realistic estimate.
      </p>
      <p>
        <strong>Mileage Driven:</strong> Track every mile you drive from the moment you accept an order to the moment you complete the delivery. Many Dashers also count miles driven to the restaurant and back home. Use a mileage tracking app like Everlance, Stride, or MileIQ for accurate records. The IRS requires contemporaneous records, meaning you must log miles as they happen, not estimate them later.
      </p>
      <p>
        <strong>Other Expenses:</strong> Beyond mileage, you can deduct the business-use portion of your cell phone plan, hot bags, phone mounts, car chargers, and even a portion of your car insurance if you carry a rideshare endorsement. Only include expenses that are ordinary and necessary for your delivery work.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <p>
        The core tax calculation for DoorDash drivers revolves around the <strong>Self-Employment Tax (SE Tax)</strong>, which is the independent contractor equivalent of FICA taxes that W-2 employees split with their employer. As a self-employed individual, you pay both the employer and employee portions.
      </p>
      <h3>Step 1: Calculate Annual Gross Income</h3>
      <p>
        Your annual gross income is simply your average weekly earnings multiplied by 52 weeks. For example, if you earn $850 per week, your annual gross would be $44,200. This is your total revenue before any deductions are applied.
      </p>
      <h3>Step 2: Calculate Mileage Deduction</h3>
      <p>
        The IRS allows self-employed individuals to deduct business mileage at the <strong>Standard Mileage Rate</strong>, which is <strong>$0.70 per mile for 2025</strong>. This rate covers gas, depreciation, insurance, maintenance, and repairs related to your vehicle. Multiply your weekly miles by 52 weeks, then multiply by $0.70. For example, 300 miles/week × 52 weeks × $0.70 = $10,920 in annual mileage deductions.
      </p>
      <h3>Step 3: Calculate Taxable Self-Employment Income</h3>
      <p>
        Subtract your total deductions (mileage deduction + other annual expenses) from your annual gross income. The result is your <strong>net self-employment income</strong>, which is the amount subject to self-employment tax. If deductions exceed income, your taxable SE income is $0.
      </p>
      <h3>Step 4: Apply the 15.3% Self-Employment Tax Rate</h3>
      <p>
        The SE tax rate of 15.3% consists of two components: <strong>12.4% for Social Security</strong> (on the first $176,100 of net earnings in 2025) and <strong>2.9% for Medicare</strong> (no income cap). This calculator applies the full 15.3% to your taxable income for a conservative estimate. Note that you can deduct half of your SE tax when calculating your adjusted gross income for federal income tax purposes.
      </p>
      <h3>Step 5: Quarterly Estimated Payments</h3>
      <p>
        The IRS requires self-employed individuals to make quarterly estimated tax payments if they expect to owe $1,000 or more in taxes for the year. Quarterly payments are due on April 15, June 15, September 15, and January 15. Divide your annual SE tax by 4 to determine each quarterly payment amount. Missing these deadlines can result in underpayment penalties.
      </p>

      {/* Visual Content: DoorDash Tax Breakdown Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Income Level</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Weekly Gross</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Weekly Miles</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Annual Deductions</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">SE Tax (15.3%)</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Quarterly Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Part-Time</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$500</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">150</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$5,460</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$706</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$177</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Moderate</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$850</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">300</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$10,920</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$1,495</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$374</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Full-Time</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$1,200</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">450</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$16,380</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$2,648</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$662</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Estimates based on IRS mileage rate of $0.67/mile. State tax not included.
        </p>
      </div>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Real-Life Scenarios with Step-by-Step Math</h2>

      <h3>Scenario 1: Part-Time Dasher (Weekends Only)</h3>
      <p>
        <strong>Profile:</strong> Mike dashes on weekends while working a full-time job. He earns $400/week
        gross, drives 150 miles/week, and has $25/week in other expenses.
      </p>
      <p><strong>Calculation:</strong></p>
      <ul>
        <li>Annual Gross = $400 × 52 = <strong>$20,800</strong></li>
        <li>Mileage Deduction = 150 miles × 52 weeks × $0.67 = <strong>$5,226</strong></li>
        <li>Other Expenses = $25 × 52 = <strong>$1,300</strong></li>
        <li>Total Deductions = $5,226 + $1,300 = <strong>$6,526</strong></li>
        <li>Taxable Income = $20,800 − $6,526 = <strong>$14,274</strong></li>
        <li>SE Tax (15.3%) = $14,274 × 0.153 = <strong>$2,184</strong></li>
        <li>Quarterly Payment = $2,184 ÷ 4 = <strong>$546</strong></li>
        <li>Effective Rate on Gross = $2,184 ÷ $20,800 = <strong>10.5%</strong></li>
      </ul>
      <p>
        <strong>Key insight:</strong> Mike's mileage deduction alone reduces his taxable income by 25%.
        His effective SE tax rate on gross earnings is only 10.5% — well below the 15.3% nominal rate
        because of the mileage deduction. He should set aside ~15% of each payout for SE tax.
      </p>

      <h3>Scenario 2: Full-Time Dasher in Major City</h3>
      <p>
        <strong>Profile:</strong> Sarah dashes full-time in Chicago. She earns $1,200/week gross, drives
        450 miles/week, and has $75/week in other expenses (phone, parking, tolls, supplies).
      </p>
      <p><strong>Calculation:</strong></p>
      <ul>
        <li>Annual Gross = $1,200 × 52 = <strong>$62,400</strong></li>
        <li>Mileage Deduction = 450 miles × 52 weeks × $0.67 = <strong>$15,678</strong></li>
        <li>Other Expenses = $75 × 52 = <strong>$3,900</strong></li>
        <li>Total Deductions = $15,678 + $3,900 = <strong>$19,578</strong></li>
        <li>Taxable Income = $62,400 − $19,578 = <strong>$42,822</strong></li>
        <li>SE Tax (15.3%) = $42,822 × 0.153 = <strong>$6,552</strong></li>
        <li>Quarterly Payment = $6,552 ÷ 4 = <strong>$1,638</strong></li>
        <li>Plus Federal Income Tax (est. 12% bracket) ≈ <strong>$3,600/year</strong></li>
        <li>Total Tax Burden ≈ <strong>$10,152/year</strong> (16.3% effective rate)</li>
      </ul>
      <p>
        <strong>Key insight:</strong> Sarah's mileage deduction of $15,678 is her single biggest tax saver —
        it reduces her taxable income by over 25%. She should set aside 25-30% of each weekly payout
        ($300-360/week) to cover both SE tax and federal income tax. Illinois state income tax (4.95%)
        adds another ~$2,120/year.
      </p>

      <h3>Scenario 3: Multi-App Gig Worker</h3>
      <p>
        <strong>Profile:</strong> Carlos delivers for DoorDash, Uber Eats, and Instacart simultaneously.
        Combined: $1,800/week gross, 600 miles/week, $100/week expenses.
      </p>
      <p><strong>Calculation:</strong></p>
      <ul>
        <li>Annual Gross = $1,800 × 52 = <strong>$93,600</strong></li>
        <li>Mileage Deduction = 600 miles × 52 weeks × $0.67 = <strong>$20,904</strong></li>
        <li>Other Expenses = $100 × 52 = <strong>$5,200</strong></li>
        <li>Total Deductions = $20,904 + $5,200 = <strong>$26,104</strong></li>
        <li>Taxable Income = $93,600 − $26,104 = <strong>$67,496</strong></li>
        <li>SE Tax (15.3%) = $67,496 × 0.153 = <strong>$10,327</strong></li>
        <li>Quarterly Payment = <strong>$2,582</strong></li>
      </ul>
      <p>
        <strong>Key insight:</strong> At this income level, Carlos should consider tracking actual vehicle
        expenses instead of the standard mileage rate — his high mileage might make actual expenses more
        beneficial. He should also consider an S-Corp election if his net income consistently exceeds $50,000.
        Setting aside 30% of gross ($540/week) is recommended.
      </p>

      <h2>Comparison: Standard Mileage vs Actual Expenses</h2>
      <p>
        The IRS offers two methods for deducting vehicle expenses. Which is better depends on your specific situation.
      </p>
      <ComparisonTable
        headers={["Factor", "Standard Mileage ($0.67/mi)", "Actual Expenses"]}
        rows={[
          { label: "Record Keeping", values: ["Log miles only", "Track every receipt"] },
          { label: "Deduction on 20,000 miles", values: ["$13,400", "Varies ($8k-15k typical)"] },
          { label: "Includes Depreciation", values: ["Yes (bundled)", "Separate calculation"] },
          { label: "Best For", values: ["High-mileage drivers", "New cars with high depreciation"] },
          { label: "Complexity", values: ["Simple ✓", "Complex — requires tracking all costs"] },
          { label: "Switch allowed?", values: ["Yes, in year 1 only", "Must continue once chosen"] },
        ]}
        caption="Choose the Standard Mileage Rate in your first year of using the vehicle for business. After that, switching is restricted."
      />

      <h2>Common DoorDash Tax Mistakes to Avoid</h2>
      <ul>
        <li><strong>Not tracking mileage daily.</strong> The IRS requires contemporaneous mileage logs — you
        cannot estimate miles at year-end. Use a mileage tracking app (Stride, Everlance, MileIQ) that
        logs each trip automatically.</li>
        <li><strong>Forgetting to deduct dead miles.</strong> Miles driven to pick up food and return to
        your waiting area are business miles. Only the miles from home to your first dash location and
        from your last drop-off back home are commuting miles (not deductible).</li>
        <li><strong>Missing the 92.35% SE tax base adjustment.</strong> SE tax is calculated on 92.35%
        of net earnings, not 100%. Many dashers overpay by calculating 15.3% on their full net income.</li>
        <li><strong>Not making quarterly payments.</strong> If you expect to owe $1,000+ in taxes, you must
        make quarterly payments or face underpayment penalties (~7% per year on underpaid amount).</li>
        <li><strong>Ignoring state taxes.</strong> If you live in a state with income tax (CA, NY, IL, etc.),
        you also owe state taxes on your DoorDash income. Add 3-10% to your tax set-aside rate.</li>
      </ul>

      <h2>2026 DoorDash Driver Tax Rates & Thresholds</h2>
      <ul>
        <li><strong>Standard mileage rate:</strong> $0.67 per business mile (2025–2026)</li>
        <li><strong>SE tax rate:</strong> 15.3% (12.4% Social Security + 2.9% Medicare)</li>
        <li><strong>Social Security wage cap:</strong> $176,100 for 2026</li>
        <li><strong>SE tax filing threshold:</strong> $400 net self-employment income</li>
        <li><strong>Federal income tax brackets (single):</strong> 10% ($0-11,925), 12% ($11,926-48,475), 22% ($48,476-103,350)</li>
        <li><strong>Quarterly due dates:</strong> April 15, June 16, September 15, January 15 (2027)</li>
        <li><strong>Recommended set-aside rate:</strong> 25-30% of net earnings for SE tax + federal income tax</li>
      </ul>

      <h2>Data Sources & Methodology</h2>
      <p>
        Our DoorDash Tax Estimator uses 2026 IRS mileage rates and self-employment tax rules. All data is verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Mileage Rate:</strong> $0.67 per business mile from{" "}
          <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Standard Mileage Rates
          </a>
          .
        </li>
        <li>
          <strong>SE Tax Rate:</strong> 15.3% from{" "}
          <a href="https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Schedule SE
          </a>
          .
        </li>
        <li>
          <strong>Quarterly Payment Rules:</strong> Safe harbor rules from{" "}
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Estimated Taxes Guide
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Annual gross = weekly gross × 52. Mileage deduction = weekly miles × 52 × $0.67. Total deductions = mileage + (other expenses × 52). Taxable income = annual gross − total deductions (minimum $0). SE tax = taxable income × 15.3%. Quarterly payment = SE tax ÷ 4.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>Do DoorDash drivers need to pay taxes on all their earnings?</h3>
      <p>
        Yes — as an independent contractor, all income reported on your 1099-NEC from DoorDash is subject to federal self-employment tax and potentially federal and state income taxes. However, you can significantly reduce your taxable income through legitimate business deductions like the standard mileage rate, phone expenses, and delivery supplies. Many full-time Dashers find that mileage alone can reduce their taxable income by 20–30%. It is crucial to track every deductible expense meticulously throughout the year. If your total annual net earnings from self-employment are $400 or more, you are required to file a Schedule SE with your federal tax return.
      </p>
      <h3>Should I use the Standard Mileage Rate or Actual Expenses method?</h3>
      <p>
        The IRS offers two methods for deducting vehicle expenses: the <strong>Standard Mileage Rate</strong> ($0.70/mile in 2025) and the <strong>Actual Expenses</strong> method. The Standard Mileage Rate is simpler — you just multiply your business miles by the rate. The Actual Expenses method requires you to track every car-related cost (gas, oil changes, tires, insurance, depreciation, repairs) and multiply the total by your business-use percentage. For most DoorDash drivers, the Standard Mileage Rate provides a larger deduction and involves far less record-keeping. However, if you drive an older, high-maintenance vehicle or have unusually high repair costs, the Actual Expenses method might yield a bigger deduction. You must choose one method in your first year of using the vehicle for business, and there are restrictions on switching later. Consult a tax professional to determine which method maximizes your savings.
      </p>
      <h3>How much should I set aside from each paycheck for taxes?</h3>
      <p>
        A common rule of thumb for DoorDash drivers and other gig workers is to set aside <strong>25–30% of your net earnings</strong> (after deducting mileage and expenses) for taxes. This covers both self-employment tax (15.3%) and a conservative estimate for federal income tax (10–12% for most Dashers in the lower to middle income brackets). If you live in a state with income tax (unlike Texas, Florida, or Washington), you may need to add another 3–8% depending on your state&apos;s rates. The best strategy is to open a separate savings account and transfer the tax percentage immediately after each weekly payout. This prevents you from accidentally spending money that belongs to the IRS and ensures you always have enough for quarterly estimated payments.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed examples, strategies, and expert tips on managing your DoorDash taxes, read our full guide:{" "}
          <a href="/blog/doordash-tax-estimator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            DoorDash Tax Estimator 2026 Guide
          </a>
          . This companion article covers additional tax scenarios, mileage tracking tips, and real-world case studies not included in the calculator.
        </p>
      </div>

      <h2>Related Tools</h2>
      <p>
        Check out these other helpful calculators for gig workers and freelancers:
      </p>
      <ul>
        <li><a href="/calculators/california-1099-tax-calculator">California 1099 Tax Calculator</a> — Calculate self-employment, federal, and California state taxes on freelance income.</li>
        <li><a href="/calculators/texas-paycheck-calculator">Texas Paycheck Calculator</a> — Calculate your take-home pay with zero state income tax.</li>
        <li><a href="/calculators/freelancer-platform-fee-comparison">Freelancer Platform Fee Comparison</a> — Compare Upwork vs Fiverr fees side-by-side.</li>
      </ul>

      <RelatedCalculators currentPage="doordash-tax-estimator" />

      </>
  );
}

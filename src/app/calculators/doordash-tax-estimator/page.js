"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function DoorDashTaxEstimator() {
  const [gross, setGross] = useState("");
  const [miles, setMiles] = useState("");
  const [expenses, setExpenses] = useState("");

  const weeklyGross = parseFloat(gross) || 0;
  const weeklyMiles = parseFloat(miles) || 0;
  const otherExpenses = parseFloat(expenses) || 0;

  const annualGross = weeklyGross * 52;
  const mileageDeduction = weeklyMiles * 52 * 0.67;
  const totalDeductions = mileageDeduction + otherExpenses * 52;
  const taxableIncome = Math.max(0, annualGross - totalDeductions);
  const selfEmploymentTax = taxableIncome * 0.153;
  const estimatedQuarterly = selfEmploymentTax / 4;
  const effectiveRate = annualGross > 0 ? (selfEmploymentTax / annualGross) * 100 : 0;

  const schemaData = {
    name: "DoorDash Tax Estimator",
    description: "Calculate your estimated self-employment taxes as a DoorDash independent contractor including mileage deductions.",
    url: "https://calcmetric.com/calculators/doordash-tax-estimator",
  };

  return (
    <CalculatorShell
      title="DoorDash Tax Estimator"
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
        The IRS allows self-employed individuals to deduct business mileage at the <strong>Standard Mileage Rate</strong>, which is <strong>$0.67 per mile for 2024</strong>. This rate covers gas, depreciation, insurance, maintenance, and repairs related to your vehicle. Multiply your weekly miles by 52 weeks, then multiply by $0.67. For example, 300 miles/week × 52 weeks × $0.67 = $10,452 in annual mileage deductions.
      </p>
      <h3>Step 3: Calculate Taxable Self-Employment Income</h3>
      <p>
        Subtract your total deductions (mileage deduction + other annual expenses) from your annual gross income. The result is your <strong>net self-employment income</strong>, which is the amount subject to self-employment tax. If deductions exceed income, your taxable SE income is $0.
      </p>
      <h3>Step 4: Apply the 15.3% Self-Employment Tax Rate</h3>
      <p>
        The SE tax rate of 15.3% consists of two components: <strong>12.4% for Social Security</strong> (on the first $168,600 of net earnings in 2024) and <strong>2.9% for Medicare</strong> (no income cap). This calculator applies the full 15.3% to your taxable income for a conservative estimate. Note that you can deduct half of your SE tax when calculating your adjusted gross income for federal income tax purposes.
      </p>
      <h3>Step 5: Quarterly Estimated Payments</h3>
      <p>
        The IRS requires self-employed individuals to make quarterly estimated tax payments if they expect to owe $1,000 or more in taxes for the year. Quarterly payments are due on April 15, June 15, September 15, and January 15. Divide your annual SE tax by 4 to determine each quarterly payment amount. Missing these deadlines can result in underpayment penalties.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Do DoorDash drivers need to pay taxes on all their earnings?</h3>
      <p>
        Yes — as an independent contractor, all income reported on your 1099-NEC from DoorDash is subject to federal self-employment tax and potentially federal and state income taxes. However, you can significantly reduce your taxable income through legitimate business deductions like the standard mileage rate, phone expenses, and delivery supplies. Many full-time Dashers find that mileage alone can reduce their taxable income by 20–30%. It is crucial to track every deductible expense meticulously throughout the year. If your total annual net earnings from self-employment are $400 or more, you are required to file a Schedule SE with your federal tax return.
      </p>
      <h3>Should I use the Standard Mileage Rate or Actual Expenses method?</h3>
      <p>
        The IRS offers two methods for deducting vehicle expenses: the <strong>Standard Mileage Rate</strong> ($0.67/mile in 2024) and the <strong>Actual Expenses</strong> method. The Standard Mileage Rate is simpler — you just multiply your business miles by the rate. The Actual Expenses method requires you to track every car-related cost (gas, oil changes, tires, insurance, depreciation, repairs) and multiply the total by your business-use percentage. For most DoorDash drivers, the Standard Mileage Rate provides a larger deduction and involves far less record-keeping. However, if you drive an older, high-maintenance vehicle or have unusually high repair costs, the Actual Expenses method might yield a bigger deduction. You must choose one method in your first year of using the vehicle for business, and there are restrictions on switching later. Consult a tax professional to determine which method maximizes your savings.
      </p>
      <h3>How much should I set aside from each paycheck for taxes?</h3>
      <p>
        A common rule of thumb for DoorDash drivers and other gig workers is to set aside <strong>25–30% of your net earnings</strong> (after deducting mileage and expenses) for taxes. This covers both self-employment tax (15.3%) and a conservative estimate for federal income tax (10–12% for most Dashers in the lower to middle income brackets). If you live in a state with income tax (unlike Texas, Florida, or Washington), you may need to add another 3–8% depending on your state&apos;s rates. The best strategy is to open a separate savings account and transfer the tax percentage immediately after each weekly payout. This prevents you from accidentally spending money that belongs to the IRS and ensures you always have enough for quarterly estimated payments.
      </p>
    </>
  );
}

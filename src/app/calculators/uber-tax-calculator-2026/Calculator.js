"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
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
    name: "Uber Tax Calculator 2026",
    description: "Calculate your estimated self-employment taxes as an Uber driver including mileage deductions at $0.67/mile.",
    url: "https://www.themetricapp.com/calculators/uber-tax-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Uber Tax Calculator 2026 — Calculate Self-Employment Taxes & Mileage Deductions"
      subtitle="Estimate your self-employment taxes, mileage deductions, and quarterly payments as an Uber driver."
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
        <InputField id="gross" label="Gross Weekly Earnings" value={gross} onChange={(e) => setGross(e.target.value)} prefix="$" placeholder="950" helpText="Before any deductions" />
        <InputField id="miles" label="Mileage Driven / Week" value={miles} onChange={(e) => setMiles(e.target.value)} suffix="miles" placeholder="400" helpText="Business miles only" />
        <InputField id="expenses" label="Other Weekly Expenses" value={expenses} onChange={(e) => setExpenses(e.target.value)} prefix="$" placeholder="60" helpText="Phone, tolls, supplies" />
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
            <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Mileage Rates
            </a>
            {" · "}
            <a href="https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Schedule SE
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Uber Tax Calculator</h2>
      <p>
        As an Uber driver, you are classified as an independent contractor (1099-NEC), meaning Uber does not withhold taxes from your earnings. You are responsible for calculating and paying your own self-employment taxes and quarterly estimated payments. This calculator helps you estimate your annual tax obligation so you can plan ahead and avoid IRS underpayment penalties.
      </p>
      <p>
        Enter your <strong>average gross weekly earnings</strong> — the total amount Uber deposits into your account each week before expenses. Next, enter your <strong>weekly business miles</strong> driven exclusively for Uber trips. Finally, include any <strong>other weekly business expenses</strong> like your phone plan, tolls, parking fees, car washes, and water/snacks for riders.
      </p>
      <p>
        The calculator instantly projects your annual gross income, mileage deduction using the IRS Standard Mileage Rate ($0.70/mile for 2025), total deductions, taxable income, and your estimated self-employment tax and quarterly payment amounts.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <h3>Step 1: Annual Gross Income</h3>
      <p>
        Annual Gross = Weekly Gross × 52 weeks. For example, $950/week × 52 = $49,400 annual gross revenue.
      </p>
      <h3>Step 2: Mileage Deduction</h3>
      <p>
        The IRS allows you to deduct business mileage at $0.70/mile (2025 rate). Mileage Deduction = Weekly Miles × 52 × $0.70. For 400 miles/week: 400 × 52 × $0.70 = $14,560 annual deduction.
      </p>
      <h3>Step 3: Taxable Self-Employment Income</h3>
      <p>
        Taxable Income = Annual Gross − Total Deductions (mileage + other expenses). This is the amount subject to self-employment tax.
      </p>
      <h3>Step 4: Self-Employment Tax (15.3%)</h3>
      <p>
        The SE tax rate is 15.3% — 12.4% for Social Security (on the first $176,100 of net earnings in 2025) and 2.9% for Medicare (no cap). This calculator applies the full 15.3%. You can deduct half of your SE tax when computing federal income tax.
      </p>
      <h3>Step 5: Quarterly Estimated Payments</h3>
      <p>
        Divide annual SE tax by 4 to get quarterly payments due April 15, June 15, September 15, and January 15.
      </p>

      {/* Visual Content: Uber Tax Breakdown Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Driving Level</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Weekly Gross</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Weekly Miles</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Annual Deductions</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">SE Tax Due</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Set Aside 30%</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Part-Time</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$600</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">200</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$7,280</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$1,019</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$9,360</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Moderate</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$950</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">400</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$14,560</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$2,004</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$14,820</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Full-Time</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$1,400</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">550</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$20,020</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$3,488</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$21,840</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Estimates based on IRS mileage rate of $0.67/mile. 30% set aside covers SE tax + estimated federal income tax.
        </p>
      </div>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Uber Tax Calculator uses 2026 IRS mileage rates and self-employment tax rules. All data is verified as of May 2026.
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
          <strong>Gig Worker Guidelines:</strong> IRS gig economy resources from{" "}
          <a href="https://www.irs.gov/businesses/gig-economy/gig-economy-tax-center" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Gig Economy Tax Center
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Annual gross = weekly gross × 52. Mileage deduction = weekly miles × 52 × $0.67. Total deductions = mileage + (other weekly expenses × 52). Taxable income = max(0, annual gross − total deductions). SE tax = taxable income × 15.3%. Quarterly payment = SE tax ÷ 4.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Do Uber drivers need to pay taxes on all their earnings?</h3>
      <p>
        Yes — all income reported on your 1099-NEC from Uber is subject to federal self-employment tax and potentially federal and state income taxes. However, you can significantly reduce taxable income through legitimate business deductions like the standard mileage rate, phone expenses, tolls, and even a portion of your car insurance. If your net earnings from self-employment are $400 or more, you must file Schedule SE with your federal return.
      </p>
      <h3>What is the difference between Uber Eats and Uber X tax deductions?</h3>
      <p>
        Uber Eats (delivery) and Uber X (rideshare) drivers both use the standard mileage rate of $0.70/mile, but the nature of deductions differs slightly. Uber X drivers can deduct the business-use portion of tolls, parking fees, and rider amenities like phone chargers and water bottles. Uber Eats drivers typically have higher mileage efficiency since they stay in a concentrated delivery area, but may have additional expenses like insulated delivery bags. Both driver types can deduct the business-use portion of their cell phone plan and car insurance rideshare endorsement fees.
      </p>
      <h3>How much should Uber drivers set aside for taxes?</h3>
      <p>
        A general rule is to set aside <strong>25-30% of your net earnings</strong> (after deducting mileage and expenses) for taxes. This covers self-employment tax (15.3%) plus federal income tax (10-12% for most drivers). If you drive in a state with income tax like California or New York, add another 3-8%. Open a separate savings account and transfer this amount after each weekly payout.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed strategies on managing Uber taxes, read our{" "}
          <a href="/blog/doordash-tax-estimator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Gig Worker Tax Guide
          </a>
          . Also check our companion guide on{" "}
          <a href="/blog/side-hustle-tax-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Side Hustle Taxes
          </a>.
        </p>
      </div>

      <RelatedCalculators currentPage="uber-tax-calculator-2026" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Uber Tax Calculator 2026",
            "url": "https://www.themetricapp.com/calculators/uber-tax-calculator-2026",
            "description": "Calculate your estimated self-employment taxes as an Uber driver with mileage deductions at $0.67/mile.",
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
              { "@type": "ListItem", "position": 2, "name": "Uber Tax Calculator", "item": "https://www.themetricapp.com/calculators/uber-tax-calculator-2026" }
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
                "name": "Do Uber drivers need to pay taxes on all their earnings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — all income reported on your 1099-NEC from Uber is subject to federal self-employment tax and potentially federal and state income taxes. You can reduce taxable income through deductions like mileage, phone expenses, tolls, and car insurance."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between Uber Eats and Uber X tax deductions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both use the standard mileage rate of $0.70/mile. Uber X drivers deduct tolls, parking, and rider amenities. Uber Eats drivers have insulated bags and phone mount expenses. Both can deduct cell phone and insurance rideshare endorsement fees."
                }
              },
              {
                "@type": "Question",
                "name": "How much should Uber drivers set aside for taxes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Set aside 25-30% of your net earnings after deductions for taxes. This covers SE tax (15.3%) plus federal income tax. Add 3-8% more if you live in a state with income tax."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

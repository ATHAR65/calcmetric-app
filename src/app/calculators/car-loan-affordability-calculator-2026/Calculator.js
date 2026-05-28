"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtMonth = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(2) + "%";

export default function Calculator() {
  const [carPrice, setCarPrice] = useState("35000");
  const [downPayment, setDownPayment] = useState("20");
  const [tradeIn, setTradeIn] = useState("0");
  const [rate, setRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState("60");
  const [annualIncome, setAnnualIncome] = useState("75000");
  const [monthlyExpenses, setMonthlyExpenses] = useState("500");

  const price = parseFloat(carPrice) || 0;
  const downPct = (parseFloat(downPayment) || 20) / 100;
  const tradeInValue = parseFloat(tradeIn) || 0;
  const annualInterestRate = (parseFloat(rate) || 6.5) / 100;
  const monthlyRate = annualInterestRate / 12;
  const termMonths = parseInt(loanTerm) || 60;
  const income = parseFloat(annualIncome) || 0;
  const otherDebts = parseFloat(monthlyExpenses) || 0;

  // Calculate loan details
  const downAmount = price * downPct;
  const loanAmount = Math.max(0, price - downAmount - tradeInValue);
  const monthlyPayment = loanAmount > 0 && monthlyRate > 0
    ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) / (Math.pow(1 + monthlyRate, termMonths) - 1)
    : loanAmount > 0 ? loanAmount / termMonths : 0;
  const totalPayment = monthlyPayment * termMonths;
  const totalInterest = totalPayment - loanAmount;

  // Affordability checks
  const monthlyIncome = income / 12;
  const totalMonthlyDebt = monthlyPayment + otherDebts;
  const dtiRatio = monthlyIncome > 0 ? (totalMonthlyDebt / monthlyIncome) * 100 : 0;

  // Common DTI thresholds
  const dtiStatus = dtiRatio <= 36 ? "Healthy" : dtiRatio <= 43 ? "Moderate" : dtiRatio <= 50 ? "Stretch" : "Over-Leveraged";
  const dtiColor = dtiRatio <= 36 ? "text-green-600 dark:text-green-400" : dtiRatio <= 43 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400";

  // Monthly cost breakdown
  const estimatedInsurance = price * 0.0012; // ~0.12% of car value per month
  const estimatedFuel = 200;
  const estimatedMaintenance = 100;
  const totalMonthlyCarCost = monthlyPayment + estimatedInsurance + estimatedFuel + estimatedMaintenance;

  const schemaData = {
    name: "Car Loan Affordability Calculator 2026",
    description: "Calculate monthly car payments, total interest, and whether a car loan fits your budget based on income and expenses.",
    url: "https://www.themetricapp.com/calculators/car-loan-affordability-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Car Loan Affordability Calculator 2026 — Can You Afford That Car?"
      subtitle="Calculate your monthly car payment, total interest, and see if the car fits your budget with real DTI analysis."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Monthly Payment" value={fmtMonth(monthlyPayment)} highlight />
          <ResultCard label="Loan Amount" value={fmt(loanAmount)} sub={`${(downPct * 100).toFixed(0)}% down + $${Number(tradeInValue).toLocaleString()} trade-in`} />
          <ResultCard label="Total Interest" value={fmt(totalInterest)} sub={`Over ${termMonths} months`} />
          <ResultCard label="Total Loan Cost" value={fmt(totalPayment)} sub={`${fmt(loanAmount)} + ${fmt(totalInterest)} interest`} />
          <ResultCard label="Debt-to-Income Ratio" value={pct(dtiRatio)} sub={<span className={dtiColor}>{dtiStatus}</span>} />
          <ResultCard label="Total Monthly Car Cost" value={fmtMonth(totalMonthlyCarCost)} sub="Payment + insurance + fuel + maintenance" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="carPrice" label="Car Price" value={carPrice} onChange={(e) => setCarPrice(e.target.value)} prefix="$" placeholder="35000" />
        <InputField id="downPayment" label="Down Payment" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} suffix="%" placeholder="20" helpText="Recommended: 20%" />
        <InputField id="tradeIn" label="Trade-In Value" value={tradeIn} onChange={(e) => setTradeIn(e.target.value)} prefix="$" placeholder="0" />
        <InputField id="rate" label="Interest Rate" value={rate} onChange={(e) => setRate(e.target.value)} suffix="%" placeholder="6.5" helpText="Your auto loan APR" />
        <InputField id="loanTerm" label="Loan Term" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} suffix="months" placeholder="60" helpText="36, 48, 60, or 72 months" />
        <InputField id="annualIncome" label="Annual Income" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} prefix="$" placeholder="75000" />
        <InputField id="monthlyExpenses" label="Other Monthly Debts" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)} prefix="$" placeholder="500" helpText="Rent, student loans, credit cards" />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      {/* E-E-A-T Signals */}
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
            <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-why-is-the-43-debt-to-income-ratio-important-en-1791/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              CFPB DTI Guidelines
            </a>
            {" · "}
            <a href="https://fred.stlouisfed.org/series/TERMCBAUTO48NS" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Fed Auto Loan Rates
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Car Loan Affordability Calculator</h2>
      <p>
        This car loan affordability calculator helps you determine whether a vehicle purchase fits your budget. Enter the <strong>car price</strong>, your <strong>down payment percentage</strong>, <strong>trade-in value</strong>, <strong>interest rate</strong>, and <strong>loan term</strong>. Then add your <strong>annual income</strong> and <strong>other monthly debts</strong> for a full affordability analysis using the debt-to-income (DTI) ratio.
      </p>
      <p>
        The calculator shows your <strong>monthly payment</strong>, <strong>total interest paid</strong> over the loan term, <strong>total loan cost</strong>, and your <strong>DTI ratio</strong> with a health assessment. It also estimates the <strong>total monthly car cost</strong> including insurance, fuel, and maintenance — because the monthly payment alone doesn't tell the full story.
      </p>
      <p>
        Lenders typically look for a DTI ratio below 43%, but the 36% threshold is considered ideal. This tool helps you see exactly where you stand before visiting the dealership.
      </p>

      <h2>Car Loan Formula & Methodology</h2>
      <h3>Monthly Payment Calculation</h3>
      <p>
        The calculator uses the standard auto loan amortization formula: <strong>M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]</strong>, where M is the monthly payment, P is the loan amount (car price − down payment − trade-in), r is the monthly interest rate (APR ÷ 12), and n is the total number of months. This is the same formula lenders use for fixed-rate auto loans.
      </p>
      <h3>Debt-to-Income Ratio</h3>
      <p>
        DTI = (Monthly Car Payment + Other Monthly Debts) ÷ Monthly Gross Income × 100. Lenders use this to assess your ability to take on additional debt. <strong>Below 36%</strong> is considered healthy, <strong>36-43%</strong> is moderate (most lenders will approve), <strong>43-50%</strong> is a stretch (some lenders may deny), and <strong>above 50%</strong> is over-leveraged (likely denial). The Qualified Mortgage rule caps DTI at 43% for most conventional loans.
      </p>
      <h3>Total Cost of Ownership</h3>
      <p>
        Beyond the monthly payment, we estimate: <strong>Insurance</strong> (~0.12% of car value/month = ~$42/month for a $35k car), <strong>Fuel</strong> ($200/month for average driving), and <strong>Maintenance</strong> ($100/month for tires, oil changes, repairs). Total monthly car cost = payment + insurance + fuel + maintenance. A $35k car with a $600/month payment actually costs about $942/month to own.
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Car Price</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">20% Down</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Monthly Payment</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Total Interest</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {[
              { price: 25000, label: "$25,000" },
              { price: 35000, label: "$35,000" },
              { price: 45000, label: "$45,000" },
              { price: 55000, label: "$55,000" },
            ].map((row) => {
              const down = row.price * 0.2;
              const loan = row.price - down;
              const r = 0.065 / 12;
              const n = 60;
              const pmt = loan * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
              const total = pmt * n;
              const interest = total - loan;
              return (
                <tr key={row.price} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{row.label}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${(down).toLocaleString()}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${pmt.toFixed(2)}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${interest.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 dark:text-green-400 font-medium">${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Assumes 6.5% APR, 60-month term, 20% down payment. Actual rates vary by credit score.
        </p>
      </div>

      {/* Data Sources & Methodology */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Car Loan Affordability Calculator uses standard auto loan amortization formulas and widely accepted DTI guidelines. All data verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>DTI Guidelines:</strong> Consumer Financial Protection Bureau{" "}
          <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-why-is-the-43-debt-to-income-ratio-important-en-1791/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            qualified mortgage rules
          </a>
          . Maximum 43% DTI for QM loans.
        </li>
        <li>
          <strong>Interest Rates:</strong> Average auto loan rates from{" "}
          <a href="https://fred.stlouisfed.org/series/TERMCBAUTO48NS" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Federal Reserve Economic Data (FRED)
          </a>
          . New car rates averaged 6.5% for Q1 2026.
        </li>
        <li>
          <strong>Insurance Estimates:</strong> Based on average US auto insurance costs from{" "}
          <a href="https://www.naic.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            NAIC
          </a>
          . Actual costs vary by state, vehicle, and driver profile.
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Monthly payment uses the standard amortization formula. Total interest = (monthly payment × term) − loan amount. DTI = (car payment + other debts) ÷ monthly income × 100. Estimates for insurance, fuel, and maintenance are national averages — your actual costs will vary.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>What is the 20/4/10 rule for car buying?</h3>
      <p>
        The 20/4/10 rule is a conservative guideline: put down <strong>at least 20%</strong>, finance for <strong>no more than 4 years</strong>, and keep total car expenses (payment + insurance + fuel + maintenance) <strong>under 10% of your gross monthly income</strong>. For a $75k annual income ($6,250/month), that means keeping total car costs under $625/month. This rule helps ensure you don't become "car poor."
      </p>
      <h3>What credit score do I need for the best auto loan rates?</h3>
      <p>
        In 2026, credit score tiers for auto loans typically follow this pattern: <strong>720+</strong> (excellent): 4.5-6.5% APR, <strong>680-719</strong> (good): 6.5-8.5%, <strong>620-679</strong> (fair): 8.5-12%, <strong>below 620</strong> (poor): 12-20%+. A 100-point difference in credit score can cost thousands in extra interest. Check your credit score before visiting the dealership and consider getting pre-approved through a credit union or online lender.
      </p>
      <h3>How much should I put down on a car?</h3>
      <p>
        <strong>At least 20% is recommended</strong> to avoid being "upside down" (owing more than the car is worth) from day one. New cars depreciate 20-30% in the first year alone. A larger down payment also reduces your monthly payment, lowers total interest, and may qualify you for a better rate. If you can't afford 20% down, you may be looking at too much car. That said, putting down 10-15% with excellent credit is still workable — just be prepared for possible negative equity if you need to sell early.
      </p>
      <h3>What is a good DTI ratio for a car loan?</h3>
      <p>
        Most auto lenders look for a <strong>back-end DTI ratio below 43%</strong>, though some credit unions may approve up to 50% with strong credit. A DTI below <strong>36% is considered ideal</strong> and gives you room for other financial goals like saving and investing. If your DTI is above 43%, focus on paying down existing debt before taking on a new car loan. Remember that your car payment isn't just the loan — it's also insurance, fuel, and maintenance.
      </p>
      <h3>Should I finance for 60 or 72 months?</h3>
      <p>
        <strong>Shorter terms (36-48 months) are better financially</strong> — you pay less total interest and build equity faster. A 60-month term is the most common balance between affordability and cost. Avoid 72-84 month terms unless absolutely necessary: on a $30k loan at 6.5%, a 72-month term costs $6,320 in interest vs $5,186 for 60 months. Longer terms also mean you're more likely to be upside down on the loan for a longer period. If you need a 72-month term to afford the payment, the car is probably too expensive.
      </p>
      <h3>What's the true cost of owning a car?</h3>
      <p>
        Most people only think about the monthly payment, but the true cost of owning a car includes: <strong>Loan Payment</strong> (the obvious one), <strong>Insurance</strong> ($100-200/month on average), <strong>Fuel</strong> ($150-300/month depending on mileage and gas prices), <strong>Maintenance & Repairs</strong> ($50-150/month averaged out), <strong>Registration & Taxes</strong> ($10-50/month), <strong>Depreciation</strong> (the biggest hidden cost — new cars lose $3,000-5,000/year in value). AAA estimates the true cost of owning a new car at over <strong>$1,000/month</strong> for the average American driver. Our calculator includes the main operating costs so you can budget realistically.
      </p>
      <h3>Should I buy new or used in 2026?</h3>
      <p>
        In 2026, <strong>lightly used cars (2-3 years old) offer the best value</strong> because they've already taken the steepest depreciation hit but still have modern features and low mileage. A 3-year-old car that cost $45k new might sell for $30-32k — you save 30%+ while getting a car that's still under factory warranty. However, if interest rates on used cars are significantly higher than new (common in 2026), the math can change. Compare the total cost (price + interest + insurance) rather than just the sticker price. Certified Pre-Owned (CPO) programs from manufacturers offer the best middle ground.
      </p>

      <h2>Related Tools</h2>
      <p>Check out these other helpful calculators for budgeting and financial planning:</p>
      <ul>
        <li><a href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</a> — How much house can you afford?</li>
        <li><a href="/calculators/credit-card-payoff-calculator">Credit Card Payoff Calculator</a> — Compare snowball vs avalanche methods.</li>
        <li><a href="/calculators/solo-401k-contribution-calculator">Solo 401k Contribution Calculator</a> — Maximize your retirement savings.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to car loan strategies, rates, and negotiation tips, read our blog post:{" "}
          <a href="/blog/car-loan-affordability-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Car Loan Affordability Guide 2026
          </a>
          .
        </p>
      </div>

      <RelatedCalculators currentPage="car-loan-affordability-calculator-2026" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", "name": "Car Loan Affordability Calculator 2026", "url": "https://www.themetricapp.com/calculators/car-loan-affordability-calculator-2026", "description": "Calculate monthly car payments, total interest, and whether a car loan fits your budget based on income and expenses.", "applicationCategory": "FinanceApplication", "operatingSystem": "Web Browser", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" }, { "@type": "ListItem", "position": 2, "name": "Car Loan Affordability Calculator", "item": "https://www.themetricapp.com/calculators/car-loan-affordability-calculator-2026" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "What is the 20/4/10 rule for car buying?", acceptedAnswer: { "@type": "Answer", text: "Put down at least 20%, finance for no more than 4 years, and keep total car expenses under 10% of gross monthly income." } },
        { "@type": "Question", name: "What credit score do I need for the best auto loan rates?", acceptedAnswer: { "@type": "Answer", text: "720+ for 4.5-6.5% APR. 680-719: 6.5-8.5%. Below 620: 12-20%+. Check your score before visiting dealerships." } },
        { "@type": "Question", name: "How much should I put down on a car?", acceptedAnswer: { "@type": "Answer", text: "At least 20% recommended to avoid being upside down. New cars depreciate 20-30% in the first year." } },
        { "@type": "Question", name: "What is a good DTI ratio for a car loan?", acceptedAnswer: { "@type": "Answer", text: "Most lenders want back-end DTI below 43%. Below 36% is ideal. Above 50% means likely denial." } },
        { "@type": "Question", name: "Should I finance for 60 or 72 months?", acceptedAnswer: { "@type": "Answer", text: "Shorter terms (36-48 months) save thousands in interest. Avoid 72-84 months — if you need them, the car is too expensive." } },
        { "@type": "Question", name: "What's the true cost of owning a car?", acceptedAnswer: { "@type": "Answer", text: "Beyond the loan payment: insurance ($100-200/mo), fuel ($150-300/mo), maintenance ($50-150/mo), and depreciation ($3k-5k/year)." } },
      ] }) }} />
    </>
  );
}

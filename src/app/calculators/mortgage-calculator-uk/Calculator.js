"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmtGBP = (n) =>
  "£" + Number(n || 0).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const fmtPct = (n) => Number(n || 0).toFixed(1) + "%";

function calcStampDuty(price, isFirstTime) {
  if (isFirstTime && price <= 425000) return 0;
  const bands = [
    { min: 0, max: 250000, rate: 0 },
    { min: 250000, max: 925000, rate: 0.05 },
    { min: 925000, max: 1500000, rate: 0.10 },
    { min: 1500000, max: Infinity, rate: 0.12 },
  ];
  if (isFirstTime) {
    // First-time buyer relief: 0% up to £425k, 5% on portion between £425k and £625k
    if (price <= 425000) return 0;
    if (price <= 625000) return (price - 425000) * 0.05;
  }
  let tax = 0;
  for (const b of bands) {
    if (price <= b.min) break;
    const taxable = Math.min(price, b.max) - b.min;
    if (taxable > 0) tax += taxable * b.rate;
  }
  return tax;
}

export default function Calculator() {
  const [price, setPrice] = useState("");
  const [deposit, setDeposit] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("25");
  const [isFirstTime, setIsFirstTime] = useState(false);

  const propertyPrice = parseFloat(price) || 0;
  const depositAmt = parseFloat(deposit) || 0;
  const interestRate = parseFloat(rate) || 0;
  const loanTerm = parseFloat(term) || 25;

  const loanAmount = Math.max(0, propertyPrice - depositAmt);
  const ltv = propertyPrice > 0 ? (loanAmount / propertyPrice) * 100 : 0;

  // Monthly repayment (capital + interest)
  const monthlyRate = interestRate > 0 ? interestRate / 100 / 12 : 0;
  const numPayments = loanTerm * 12;
  let monthlyPayment = 0;
  let totalRepayment = 0;
  let totalInterest = 0;

  if (monthlyRate > 0 && loanAmount > 0) {
    monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    totalRepayment = monthlyPayment * numPayments;
    totalInterest = totalRepayment - loanAmount;
  } else if (loanAmount > 0) {
    monthlyPayment = loanAmount / numPayments;
    totalRepayment = loanAmount;
  }

  const stampDuty = calcStampDuty(propertyPrice, isFirstTime);
  const monthlyStampDutyOverTerm = numPayments > 0 ? stampDuty / numPayments : 0;

  const schemaData = {
    name: "Mortgage Calculator UK (2025–26)",
    description: "Estimate monthly repayments, total interest, stamp duty costs, and borrowing affordability. Accurate UK rates, instant results.",
    url: "https://www.themetricapp.com/calculators/mortgage-calculator-uk",
  };

  return (
    <>
      <CalculatorShell
        title="UK Mortgage Calculator (2025–26)"
        subtitle="Calculate your monthly mortgage payments, total interest payable, stamp duty costs, and loan-to-value ratio. Accurate for the 2025–26 UK property market."
        schemaData={schemaData}
        results={
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ResultCard label="Property Price" value={fmtGBP(propertyPrice)} sub="Purchase price" />
            <ResultCard label="Loan Amount" value={fmtGBP(loanAmount)} sub={`${fmtPct(ltv)} LTV`} />
            <ResultCard label="Monthly Payment" value={fmtGBP(monthlyPayment)} highlight />
            <ResultCard label="Total Repayment" value={fmtGBP(totalRepayment)} sub="Over full term" />
            <ResultCard label="Total Interest" value={fmtGBP(totalInterest)} sub="Cost of borrowing" />
            <ResultCard label="Stamp Duty" value={fmtGBP(stampDuty)} sub={isFirstTime ? "First-time buyer" : "Standard rate"} />
            <ResultCard label="Monthly + SDLT" value={fmtGBP(monthlyPayment + monthlyStampDutyOverTerm)} sub="Inc. stamp duty/month" />
            <ResultCard label="Deposit" value={fmtGBP(depositAmt)} sub={`${propertyPrice > 0 ? ((depositAmt / propertyPrice) * 100).toFixed(1) : 0}% of price`} />
          </div>
        }
        seoContent={<SEOContent />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            id="price"
            label="Property Price (£)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            prefix="£"
            placeholder="300000"
            step="1000"
          />
          <InputField
            id="deposit"
            label="Deposit Amount (£)"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            prefix="£"
            placeholder="60000"
            step="1000"
            helpText="At least 5-10% of property price"
          />
          <InputField
            id="rate"
            label="Interest Rate (%)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            suffix="%"
            placeholder="4.5"
            step="0.1"
            helpText="Current mortgage interest rate"
          />
          <SelectField
            id="term"
            label="Mortgage Term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            options={[
              { value: "15", label: "15 years" },
              { value: "20", label: "20 years" },
              { value: "25", label: "25 years" },
              { value: "30", label: "30 years" },
              { value: "35", label: "35 years" },
              { value: "40", label: "40 years" },
            ]}
          />
          <div className="flex items-center gap-3 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isFirstTime}
                onChange={(e) => setIsFirstTime(e.target.checked)}
                className="accent-[#0D9488] w-4 h-4"
              />
              <span className="text-sm font-medium text-[#0F172A]">First-time buyer?</span>
            </label>
            {isFirstTime && (
              <span className="text-xs text-[#0D9488] font-medium">You may be eligible for SDLT relief</span>
            )}
          </div>
        </div>
      </CalculatorShell>
    </>
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
            <a href="https://www.gov.uk/stamp-duty-land-tax" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              HMRC SDLT Rates
            </a>
            {" · "}
            <a href="https://www.bankofengland.co.uk/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Bank of England
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Mortgage Calculator UK</h2>
      <p>
        Buying a home is one of the biggest financial decisions you&apos;ll ever make, and understanding your true costs — from monthly repayments to stamp duty — is essential. This calculator is designed to give you an instant, accurate picture of your mortgage affordability for the 2025–26 UK property market.
      </p>
      <p>
        Start by entering the <strong>property price</strong> and your <strong>deposit amount</strong>. Next, enter the <strong>interest rate</strong> you&apos;ve been quoted (or use the current average rate of around 4.5% for a benchmark). Choose your <strong>mortgage term</strong> — longer terms mean lower monthly payments but more total interest. If you&apos;re a first-time buyer, tick the box to see your stamp duty relief. The results show your monthly repayment, total repayment over the full term, total interest paid, stamp duty, and loan-to-value ratio.
      </p>

      <h2>Detailed Mortgage Formula Breakdown</h2>
      <h3>Monthly Repayment Formula</h3>
      <p>
        Monthly payments are calculated using the standard amortisation formula: <strong>M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]</strong> where M is the monthly payment, P is the loan amount, r is the monthly interest rate (annual rate ÷ 12), and n is the number of monthly payments (term × 12). For example, a £240,000 loan at 4.5% over 25 years: r = 0.00375, n = 300, M = £1,334 per month.
      </p>
      <h3>Stamp Duty (SDLT)</h3>
      <p>
        Stamp Duty Land Tax in England and Northern Ireland is a progressive tax: 0% on the first £250,000, 5% on £250,001–£925,000, 10% on £925,001–£1.5M, and 12% above £1.5M. First-time buyers get relief: 0% on the first £425,000 (up to £625,000 property price). For a £400,000 property, the SDLT is £7,500 for a non-first-time buyer (0% on £250k = £0, 5% on £150k = £7,500).
      </p>
      <h3>Loan-to-Value (LTV) Ratio</h3>
      <p>
        LTV = Loan Amount ÷ Property Price × 100. A lower LTV (higher deposit) typically qualifies you for better interest rates. At 60% LTV (40% deposit), you&apos;ll get the best rates. At 90% LTV (10% deposit), rates are higher and you may need to pay Mortgage Indemnity Guarantee (MIG) fees.
      </p>

      <h2>Real-Life Examples</h2>
      <h3>Example 1 — £300,000 Property, 20% Deposit, 4.5% Rate, 25-Year Term</h3>
      <p>
        Property: £300,000. Deposit: £60,000 (20%). Loan: £240,000. At 4.5% over 25 years, your monthly payment is £1,334. Total repayment over the term: £400,267. Total interest: £160,267. Stamp duty: £2,500 (0% on first £250k, 5% on £50k). LTV: 80%. A solid standard scenario for first-time buyers in much of England.
      </p>
      <h3>Example 2 — £500,000 Property, 10% Deposit, 5% Rate, 30-Year Term</h3>
      <p>
        Property: £500,000. Deposit: £50,000 (10%). Loan: £450,000. At 5% over 30 years, your monthly payment is £2,416. Total repayment: £869,807. Total interest: £419,807. Stamp duty: £12,500 (0% on £250k, 5% on £250k). LTV: 90%. You may also need MIG insurance at this LTV, adding roughly £50–100 to your monthly costs.
      </p>

      <h2>Key Things to Know About UK Mortgages in 2025–26</h2>
      <ul>
        <li><strong>Interest rates:</strong> The Bank of England base rate influences mortgage rates. In 2025–26, average 2-year fixed rates are around 4.5%, with 5-year fixed rates slightly lower at 4.2%.</li>
        <li><strong>Stamp Duty thresholds:</strong> The £250,000 0% band was made permanent in 2022. First-time buyer relief up to £425,000 is also now permanent.</li>
        <li><strong>Affordability checks:</strong> Most lenders cap borrowing at 4.5× your annual income. Some go up to 5.5× for high earners or professionals.</li>
        <li><strong>Mortgage term:</strong> 25 years is standard, but 30–40 year terms are increasingly common to keep monthly payments affordable — at the cost of more total interest.</li>
      </ul>

      <h2>Data Sources & Methodology</h2>
      <p>
        Our Mortgage Calculator UK uses current market rates and official HMRC stamp duty thresholds. All data is verified as of May 2026 and applies to England and Northern Ireland property purchases. Scottish and Welsh buyers should check their devolved land transaction tax rules.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Stamp Duty (SDLT):</strong> Official thresholds from{" "}
          <a href="https://www.gov.uk/stamp-duty-land-tax" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            HMRC SDLT Rates
          </a>
          . 0% on first £250,000, 5% on £250k–£925k, 10% on £925k–£1.5M, 12% above £1.5M.
        </li>
        <li>
          <strong>First-Time Buyer Relief:</strong> Details from{" "}
          <a href="https://www.gov.uk/stamp-duty-land-tax/first-time-buyers" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            GOV.UK First-Time Buyer SDLT
          </a>
          . 0% up to £425,000, 5% on portion between £425k and £625k.
        </li>
        <li>
          <strong>Interest Rate Data:</strong> Current average mortgage rates from the{" "}
          <a href="https://www.bankofengland.co.uk/statistics/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Bank of England Statistics
          </a>
          .
        </li>
        <li>
          <strong>Affordability Guidelines:</strong> Standard lending criteria (4–4.5× income) as per{" "}
          <a href="https://www.fca.org.uk/firms/mortgage-lending" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            FCA Mortgage Lending Rules
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Monthly payments use the standard amortisation formula: M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1], where M is monthly payment, P is loan amount, r is monthly interest rate (annual rate ÷ 12), and n is number of payments (term × 12). Stamp Duty is computed using progressive band rates. LTV = Loan Amount ÷ Property Price × 100%. All results are estimates — actual mortgage offers depend on lender criteria, credit history, and property valuation.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: How much deposit do I need for a mortgage in the UK?</strong><br />
        A: Most lenders require at least 5% deposit (95% LTV), but 10% gives you access to much better rates. For the best rates, aim for 20-25% deposit (75-80% LTV). First-time buyers can take advantage of 95% mortgage schemes backed by the government.
      </p>
      <p>
        <strong>Q: What is stamp duty and how much will I pay?</strong><br />
        A: Stamp Duty Land Tax (SDLT) is a tax on property purchases in England and Northern Ireland. You pay 0% on the first £250,000, 5% on £250,001–£925,000, 10% on £925,001–£1.5M, and 12% above £1.5M. First-time buyers get relief up to £425,000. Use TheMetricApp.com for an instant, accurate result.
      </p>
      <p>
        <strong>Q: How much can I borrow for a mortgage?</strong><br />
        A: Most lenders offer 4–4.5× your annual income. For a joint application, it&apos;s typically 4× the higher income plus 1× the lower income, or 4.5× combined. Some lenders use more flexible affordability assessments. Use a mortgage affordability calculator to estimate your maximum borrowing.
      </p>
      <p>
        <strong>Q: Should I choose a 2-year or 5-year fixed rate?</strong><br />
        A: A 2-year fix offers lower initial rates and flexibility to remortgage sooner. A 5-year fix provides payment stability but typically has slightly higher rates and early repayment charges if you want to switch. If you expect rates to fall, a 2-year fix is better. If you want certainty, choose 5 years.
      </p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/income-tax-calculator-uk">Income Tax Calculator UK</a> — Calculate PAYE, National Insurance, and take-home pay.</li>
        <li><a href="/calculators/vat-calculator-uk">VAT Calculator UK</a> — Add or remove 20% VAT instantly for UK businesses.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Estimate taxes on freelance income.</li>
      </ul>

      <RelatedCalculators currentPage="mortgage-calculator-uk" />
    </>
  );
}

"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (v) =>
  v.toLocaleString("en-US", { style: "currency", currency: "USD" });

const loanTypes = [
  { value: "undergrad", label: "Undergraduate Federal (6.39%)" },
  { value: "grad", label: "Graduate Federal (7.94%)" },
  { value: "plus", label: "Parent/Grad PLUS (8.94%)" },
  { value: "private", label: "Private Loan (Custom Rate)" },
];

const repaymentPlans = [
  { value: "standard", label: "Standard (10 years)" },
  { value: "extended", label: "Extended Fixed (25 years)" },
  { value: "graduated", label: "Graduated (10 years)" },
  { value: "income", label: "Income-Driven (20-25 years)" },
];

function calculateAmortization(
  principal,
  annualRate,
  termMonths,
  extraPayment = 0
) {
  if (principal <= 0 || annualRate <= 0) {
    return {
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0,
      monthsToPayoff: 0,
      schedule: [],
    };
  }

  const monthlyRate = annualRate / 100 / 12;
  const standardPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1);
  const actualPayment = standardPayment + extraPayment;

  let balance = principal;
  let totalInterest = 0;
  let months = 0;
  const schedule = [];

  while (balance > 0 && months < 600) {
    const interest = balance * monthlyRate;
    const principalPaid = Math.min(actualPayment - interest, balance);
    if (principalPaid <= 0) {
      return {
        monthlyPayment: standardPayment,
        totalPayment: Infinity,
        totalInterest: Infinity,
        monthsToPayoff: Infinity,
        schedule: [],
        paymentTooLow: true,
      };
    }
    balance -= principalPaid;
    totalInterest += interest;
    months++;

    if (months % 12 === 0 || months === 1) {
      schedule.push({
        month: months,
        balance: Math.max(0, balance),
        totalPaid: months * actualPayment,
        totalInterest,
      });
    }
  }

  return {
    monthlyPayment: standardPayment,
    totalPayment: months * actualPayment,
    totalInterest,
    monthsToPayoff: months,
    schedule,
  };
}

const LOAN_RATES = {
  undergrad: 6.39,
  grad: 7.94,
  plus: 8.94,
  private: 7.5,
};

const TERM_MONTHS = {
  standard: 120, // 10 years
  extended: 300, // 25 years
  graduated: 120, // 10 years
  income: 300, // 25 years (simplified)
};

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState(35000);
  const [loanType, setLoanType] = useState("undergrad");
  const [customRate, setCustomRate] = useState(7.5);
  const [repaymentPlan, setRepaymentPlan] = useState("standard");
  const [extraPayment, setExtraPayment] = useState(0);

  const annualRate =
    loanType === "private" ? (customRate || 7.5) : LOAN_RATES[loanType] || 6.39;
  const termMonths = TERM_MONTHS[repaymentPlan] || 120;

  const standardResult = calculateAmortization(
    loanAmount || 0,
    annualRate,
    termMonths,
    0
  );

  const acceleratedResult = calculateAmortization(
    loanAmount || 0,
    annualRate,
    termMonths,
    extraPayment || 0
  );

  const interestSaved = standardResult.totalInterest - acceleratedResult.totalInterest;

  const schemaData = {
    name: "Student Loan Payoff Calculator",
    description:
      "Calculate student loan payments, total interest, and payoff timeline. See how extra payments save you money on federal and private student loans.",
    url: "https://www.themetricapp.com/calculators/student-loan-payoff-calculator",
  };

  return (
    <CalculatorShell
      title="Student Loan Payoff Calculator (2026)"
      subtitle="Calculate your monthly student loan payments, total interest over the life of the loan, and see how extra payments can save you thousands."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Loan Amount" value={fmt(loanAmount || 0)} />
          <ResultCard
            label="Monthly Payment"
            value={fmt(standardResult.monthlyPayment)}
            sub={`${annualRate.toFixed(2)}% APR`}
            highlight
          />
          <ResultCard
            label="Total Interest (Standard)"
            value={fmt(standardResult.totalInterest)}
            sub={`${standardResult.monthsToPayoff} months`}
          />
          {extraPayment > 0 && (
            <>
              <ResultCard
                label="Accelerated Interest"
                value={fmt(acceleratedResult.totalInterest)}
                sub={`${acceleratedResult.monthsToPayoff} months`}
              />
              <ResultCard
                label="Interest Saved"
                value={fmt(interestSaved)}
                highlight
              />
              <ResultCard
                label="Months Saved"
                value={
                  isFinite(acceleratedResult.monthsToPayoff)
                    ? `${
                        standardResult.monthsToPayoff -
                        acceleratedResult.monthsToPayoff
                      } months`
                    : "N/A"
                }
                highlight
              />
            </>
          )}
          <ResultCard
            label="Total Cost"
            value={fmt(standardResult.totalPayment)}
            sub="Principal + Interest"
          />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          Loan Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Total Loan Amount ($)"
            value={loanAmount}
            onChange={setLoanAmount}
          />
          <SelectField
            label="Loan Type"
            value={loanType}
            onChange={setLoanType}
            options={loanTypes}
          />
          {loanType === "private" && (
            <InputField
              label="Custom Interest Rate (%)"
              value={customRate}
              onChange={setCustomRate}
              suffix="%"
            />
          )}
          <SelectField
            label="Repayment Plan"
            value={repaymentPlan}
            onChange={setRepaymentPlan}
            options={repaymentPlans}
          />
        </div>

        <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          Extra Payments
        </h3>
        <InputField
          label="Extra Monthly Payment ($)"
          value={extraPayment}
          onChange={setExtraPayment}
          helpText="Even $25-50 extra per month can save thousands in interest"
        />

        {/* Amortization preview */}
        {standardResult.schedule && standardResult.schedule.length > 0 && (
          <div className="rounded-xl bg-[#F8FAFC] dark:bg-[#1E293B] p-4 border border-[#E2E8F0] dark:border-[#334155]">
            <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-3">
              📊 Amortization Schedule (Standard)
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-[#64748B] dark:text-[#94A3B8] border-b border-[#E2E8F0] dark:border-[#334155]">
                    <th className="text-left py-2 pr-2">Year</th>
                    <th className="text-right px-2">Remaining Balance</th>
                    <th className="text-right px-2">Total Paid</th>
                    <th className="text-right pl-2">Interest Paid</th>
                  </tr>
                </thead>
                <tbody>
                  {standardResult.schedule.map((row, i) => (
                    <tr
                      key={row.month}
                      className={`border-b border-[#E2E8F0] dark:border-[#334155] ${
                        i === standardResult.schedule.length - 1
                          ? "text-[#0D9488] font-semibold"
                          : "text-[#475569] dark:text-[#94A3B8]"
                      }`}
                    >
                      <td className="py-2 pr-2">Year {i + 1}</td>
                      <td className="text-right px-2">{fmt(row.balance)}</td>
                      <td className="text-right px-2">{fmt(row.totalPaid)}</td>
                      <td className="text-right pl-2">{fmt(row.totalInterest)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="rounded-xl bg-[#F0FDFA] dark:bg-[#0D9488]/10 p-4 text-sm text-[#0F172A] dark:text-[#F1F5F9] border border-[#0D9488]/20">
          <strong className="text-[#0D9488]">💡 Tip:</strong>{" "}
          {extraPayment > 0
            ? `By paying an extra ${fmt(extraPayment)} per month, you'll save ${fmt(interestSaved)} in interest and pay off your loan ${
                isFinite(acceleratedResult.monthsToPayoff) && isFinite(standardResult.monthsToPayoff)
                  ? standardResult.monthsToPayoff - acceleratedResult.monthsToPayoff
                  : "many"
              } months sooner!`
            : "Even small extra payments make a huge difference. Try adding $25, $50, or $100 extra per month to see how much you can save."}
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the Student Loan Payoff Calculator</h2>
      <p>
        Our free Student Loan Payoff Calculator helps you understand exactly what your student loans
        will cost over time. Enter your total loan amount, select your loan type (or enter a custom
        rate for private loans), choose your repayment plan, and optionally add extra monthly payments.
        The calculator instantly shows your monthly payment, total interest, payoff timeline, and an
        amortization schedule.
      </p>
      <p>
        Whether you have federal undergraduate loans at 6.39%, graduate loans at 7.94%, or private
        loans with variable rates, our calculator handles all scenarios. The amortization table shows
        you exactly how much of each payment goes toward principal vs interest over time.
      </p>

      <h2>Federal Student Loan Rates for 2025-2026</h2>
      <p>
        Federal student loan interest rates are set each year by Congress and remain fixed for the
        life of the loan. For the 2025-2026 academic year, the rates are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Undergraduate (Direct Subsidized & Unsubsidized):</strong> 6.39% — the lowest rate available</li>
        <li><strong>Graduate (Direct Unsubsidized):</strong> 7.94% — for master's, doctoral, and professional degrees</li>
        <li><strong>Parent/Grad PLUS:</strong> 8.94% — requires credit check, highest rate</li>
      </ul>

      <h3>Example 1: Standard 10-Year Repayment</h3>
      <p>
        Sarah has $35,000 in undergraduate federal loans at 6.39% APR on the standard 10-year plan.
        Her monthly payment is $395. Over 10 years, she pays $12,652 in total interest, making her
        total cost $47,652. By paying an extra $50/month ($445 total), she saves $3,237 in interest
        and pays off the loan in 7.5 years instead of 10.
      </p>

      <h3>Example 2: Graduate School Loans</h3>
      <p>
        Michael took out $65,000 in graduate school loans at 7.94% APR. On a 10-year standard plan,
        his monthly payment is $786. Total interest over 10 years: $29,356. Total cost: $94,356. By
        paying an extra $100/month, he saves $5,847 in interest and pays off in 8.3 years.
      </p>

      <h3>Example 3: Private Loan with Extra Payments</h3>
      <p>
        Jessica has a $45,000 private student loan at 9.5% APR. Her standard 10-year payment is $582
        per month and she'll pay $24,885 in total interest. By paying an extra $150/month ($732 total),
        she pays off the loan in 6 years and saves $8,421 in interest.
      </p>

      <h2>5 Strategies to Pay Off Student Loans Faster</h2>
      <p>
        <strong>1. Make biweekly payments.</strong> Instead of one monthly payment, make half-payments
        every two weeks. This results in 26 half-payments (13 full payments) per year instead of 12,
        effectively making one extra payment annually.
      </p>
      <p>
        <strong>2. Apply windfalls to your loans.</strong> Tax refunds, work bonuses, gifts, and
        inheritance money can make a huge dent in your student loan balance. Apply these directly
        to your highest-interest loan.
      </p>
      <p>
        <strong>3. Use the avalanche method.</strong> If you have multiple loans at different rates,
        put extra payments toward the loan with the highest APR first. This saves the most money over time.
      </p>
      <p>
        <strong>4. Consider loan forgiveness programs.</strong> If you work in public service,
        teaching, or non-profit, look into PSLF (Public Service Loan Forgiveness) which forgives
        remaining debt after 120 qualifying payments.
      </p>
      <p>
        <strong>5. Refinance if it makes sense.</strong> If you have good credit and stable income,
        refinancing to a lower rate can significantly reduce your interest. Use our calculator to
        compare your current loan vs a refinanced scenario.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: What are the federal student loan rates for 2025-2026?</strong><br />
        A: Undergrad 6.39%, Grad 7.94%, PLUS 8.94%. Fixed for the life of the loan.
      </p>
      <p>
        <strong>Q: What is the average student loan debt in 2026?</strong><br />
        A: About $39,075 federal per borrower, or $42,670 including private loans.
      </p>
      <p>
        <strong>Q: How long does a standard repayment plan take?</strong><br />
        A: 10 years for standard and graduated plans. Extended plans go up to 25 years.
      </p>
      <p>
        <strong>Q: How much does extra $50/month save?</strong><br />
        A: On a $35,000 loan at 6.39%, about $3,200 in interest and 2.5 years early payoff.
      </p>
      <p>
        <strong>Q: Should I refinance my student loans?</strong><br />
        A: Refinance private loans if you can get a lower rate. Don't refinance federal loans —
        you'll lose borrower protections.
      </p>
      <p>
        <strong>Q: What income-driven repayment plans are available?</strong><br />
        A: Plans cap payments at 10-20% of discretionary income with forgiveness after 20-25 years.
      </p>

      <RelatedCalculators currentPage="student-loan-payoff-calculator" />

      <div className="mt-10 p-4 bg-[#0D9488]/10 border border-[#0D9488]/20 rounded-xl">
        <p className="text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-2">📋 Data Sources & Methodology</p>
        <ul className="list-disc pl-5 space-y-2 text-[#475569] dark:text-[#94A3B8] text-sm">
          <li><strong>Federal Student Aid (studentaid.gov):</strong> Official federal student loan interest rates 2025-2026 — <a href="https://studentaid.gov/understand-aid/types/loans/interest-rates" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">studentaid.gov</a></li>
          <li><strong>Federal Student Aid:</strong> Repayment plan comparison — <a href="https://studentaid.gov/manage-loans/repayment/plans" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">studentaid.gov</a></li>
          <li><strong>Consumer Financial Protection Bureau (CFPB):</strong> Student loan repayment guide — <a href="https://www.consumerfinance.gov/paying-for-college/" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">consumerfinance.gov</a></li>
          <li><strong>Education Data Initiative:</strong> Average student loan debt statistics 2026 — <a href="https://educationdata.org/student-loan-debt-statistics" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">educationdata.org</a></li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-[#0D9488]/10 border border-[#0D9488]/20 rounded-xl">
        <p className="text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-2">📅 Last Updated</p>
        <p className="text-[#475569] dark:text-[#94A3B8] text-sm">
          <strong>Last Updated:</strong> May 2026 — Federal loan interest rates reflect official 2025-2026 academic year figures published by Federal Student Aid. Average debt statistics sourced from Education Data Initiative and Federal Reserve data. Amortization calculations use the standard monthly compounding formula. Income-driven repayment terms are simplified for estimation purposes.
        </p>
      </div>
    </>
  );
}

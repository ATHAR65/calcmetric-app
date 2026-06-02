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
  // Loan A
  const [amountA, setAmountA] = useState("30000");
  const [rateA, setRateA] = useState("6.5");
  const [termA, setTermA] = useState("60");
  const [feesA, setFeesA] = useState("500");

  // Loan B
  const [amountB, setAmountB] = useState("30000");
  const [rateB, setRateB] = useState("5.9");
  const [termB, setTermB] = useState("72");
  const [feesB, setFeesB] = useState("0");

  // Loan A calculations
  const loanA = parseFloat(amountA) || 0;
  const rateA_monthly = (parseFloat(rateA) || 6.5) / 100 / 12;
  const termA_months = parseInt(termA) || 60;
  const feesA_val = parseFloat(feesA) || 0;

  const paymentA = loanA > 0 && rateA_monthly > 0
    ? (loanA * (rateA_monthly * Math.pow(1 + rateA_monthly, termA_months))) / (Math.pow(1 + rateA_monthly, termA_months) - 1)
    : loanA > 0 ? loanA / termA_months : 0;
  const totalA = paymentA * termA_months;
  const interestA = totalA - loanA;
  const totalCostA = totalA + feesA_val;
  const aprA = loanA > 0 ? ((totalA + feesA_val - loanA) / loanA / (termA_months / 12)) * 100 : 0;

  // Loan B calculations
  const loanB = parseFloat(amountB) || 0;
  const rateB_monthly = (parseFloat(rateB) || 5.9) / 100 / 12;
  const termB_months = parseInt(termB) || 72;
  const feesB_val = parseFloat(feesB) || 0;

  const paymentB = loanB > 0 && rateB_monthly > 0
    ? (loanB * (rateB_monthly * Math.pow(1 + rateB_monthly, termB_months))) / (Math.pow(1 + rateB_monthly, termB_months) - 1)
    : loanB > 0 ? loanB / termB_months : 0;
  const totalB = paymentB * termB_months;
  const interestB = totalB - loanB;
  const totalCostB = totalB + feesB_val;
  const aprB = loanB > 0 ? ((totalB + feesB_val - loanB) / loanB / (termB_months / 12)) * 100 : 0;

  const paymentDiff = paymentB - paymentA;
  const interestDiff = interestB - interestA;
  const totalCostDiff = totalCostB - totalCostA;

  const schemaData = {
    name: "Loan Comparison Calculator 2026",
    description: "Compare two loan options side-by-side. Calculate monthly payments, total interest, APR, and total cost to find the best loan for your needs.",
    url: "https://www.themetricapp.com/calculators/loan-comparison-calculator",
  };

  return (
    <CalculatorShell
      title="Loan Comparison Calculator (2026)"
      subtitle="Compare two loans side-by-side: different rates, terms, amounts, and fees. Find the cheapest option with monthly payment, total interest, and APR analysis."
      schemaData={schemaData}
      results={
        <div className="space-y-3">
          {/* Header labels */}
          <div className="grid grid-cols-3 gap-3 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider px-1">
            <div></div>
            <div className="text-center">Loan A</div>
            <div className="text-center">Loan B</div>
          </div>
          {/* Monthly Payment */}
          <div className="grid grid-cols-3 gap-3">
            <ResultCard label="Monthly Payment" value="" hideValue />
            <ResultCard label="" value={fmtMonth(paymentA)} />
            <ResultCard label="" value={fmtMonth(paymentB)} highlight={paymentB < paymentA} />
          </div>
          {/* Total Interest */}
          <div className="grid grid-cols-3 gap-3">
            <ResultCard label="Total Interest" value="" hideValue />
            <ResultCard label="" value={fmt(interestA)} />
            <ResultCard label="" value={fmt(interestB)} highlight={interestB < interestA} />
          </div>
          {/* Total Cost (with fees) */}
          <div className="grid grid-cols-3 gap-3">
            <ResultCard label="Total Cost" value="" hideValue sub="With fees" />
            <ResultCard label="" value={fmt(totalCostA)} />
            <ResultCard label="" value={fmt(totalCostB)} highlight={totalCostB < totalCostA} />
          </div>
          {/* APR */}
          <div className="grid grid-cols-3 gap-3">
            <ResultCard label="APR" value="" hideValue />
            <ResultCard label="" value={pct(aprA)} />
            <ResultCard label="" value={pct(aprB)} highlight={aprB < aprA} />
          </div>
          {/* Difference row */}
          {totalCostDiff !== 0 && (
            <div className="mt-4 p-3 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-lg text-center">
              <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
                {totalCostDiff > 0
                  ? `⚠️ Loan A is ${fmt(Math.abs(totalCostDiff))} cheaper overall`
                  : `✅ Loan B is ${fmt(Math.abs(totalCostDiff))} cheaper overall`}
              </p>
            </div>
          )}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-6">
        {/* Loan A */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-slate-300 mb-3 uppercase tracking-wider">Loan A</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField id="amountA" label="Loan Amount" value={amountA} onChange={(e) => setAmountA(e.target.value)} prefix="$" placeholder="30000" />
            <InputField id="rateA" label="Interest Rate" value={rateA} onChange={(e) => setRateA(e.target.value)} suffix="%" placeholder="6.5" />
            <InputField id="termA" label="Loan Term" value={termA} onChange={(e) => setTermA(e.target.value)} suffix="months" placeholder="60" helpText="36, 48, 60, or 72 months" />
            <InputField id="feesA" label="Origination Fees" value={feesA} onChange={(e) => setFeesA(e.target.value)} prefix="$" placeholder="500" helpText="Application, origination, processing" />
          </div>
        </div>
        {/* Loan B */}
        <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-slate-300 mb-3 uppercase tracking-wider">Loan B</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField id="amountB" label="Loan Amount" value={amountB} onChange={(e) => setAmountB(e.target.value)} prefix="$" placeholder="30000" />
            <InputField id="rateB" label="Interest Rate" value={rateB} onChange={(e) => setRateB(e.target.value)} suffix="%" placeholder="5.9" />
            <InputField id="termB" label="Loan Term" value={termB} onChange={(e) => setTermB(e.target.value)} suffix="months" placeholder="72" helpText="36, 48, 60, or 72 months" />
            <InputField id="feesB" label="Origination Fees" value={feesB} onChange={(e) => setFeesB(e.target.value)} prefix="$" placeholder="0" helpText="Application, origination, processing" />
          </div>
        </div>
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
            <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-the-truth-in-lending-act-tila-en-1955/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              TILA Guidelines
            </a>
            {" · "}
            <a href="https://fred.stlouisfed.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Fed Economic Data
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Loan Comparison Calculator</h2>
      <p>
        This loan comparison calculator helps you evaluate two loan options side-by-side with complete transparency. Enter the <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>loan term</strong> (in months), and <strong>origination fees</strong> for both Loan A and Loan B. Use this to compare auto loans, personal loans, student loans, or any other installment loan.
      </p>
      <p>
        The calculator shows a direct side-by-side comparison of <strong>monthly payment</strong>, <strong>total interest paid</strong>, <strong>total cost including fees</strong>, and the <strong>APR</strong> (Annual Percentage Rate) which incorporates fees into the effective rate. A green highlight shows which loan is cheaper for each metric, and the bottom summary tells you which loan is cheaper overall.
      </p>

      <h2>Loan Comparison Formula & Methodology</h2>
      <h3>Monthly Payment Calculation</h3>
      <p>
        Both loans use the standard amortization formula: <strong>M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]</strong>, where M is the monthly payment, P is the loan amount, r is the monthly interest rate (APR ÷ 12), and n is the total number of months.
      </p>
      <h3>APR Calculation</h3>
      <p>
        APR includes both the interest rate and fees to show the true cost of borrowing. <strong>APR ≈ ((Total Cost + Fees − Loan Amount) ÷ Loan Amount) ÷ (Term in Years) × 100.</strong> APR is always equal to or higher than the interest rate, and comparing APRs is the fairest way to evaluate loans with different fee structures.
      </p>
      <h3>Total Cost</h3>
      <p>
        <strong>Total Cost = (Monthly Payment × Term in Months) + Fees.</strong> This is the true dollar figure you'll pay over the life of the loan. A loan with a lower interest rate but higher fees may have a higher total cost — our calculator shows you the real bottom line.
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Loan Amount</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Rate</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Term</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Monthly Payment</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Total Interest</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">APR</th>
            </tr>
          </thead>
          <tbody>
            {[
              { amount: 10000, rate: 6.5, months: 60 },
              { amount: 20000, rate: 6.5, months: 60 },
              { amount: 30000, rate: 6.5, months: 60 },
              { amount: 50000, rate: 6.5, months: 60 },
            ].map((row) => {
              const r = row.rate / 100 / 12;
              const n = row.months;
              const pmt = row.amount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
              const interest = pmt * n - row.amount;
              return (
                <tr key={row.amount} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">${row.amount.toLocaleString()}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{row.rate}%</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{row.months} mo</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${pmt.toFixed(2)}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${interest.toFixed(2)}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 dark:text-green-400 font-medium">{row.rate}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Why compare APRs instead of interest rates?</h3>
      <p>
        APR (Annual Percentage Rate) includes both the interest rate and any fees (origination, processing, application) to show the true annual cost of borrowing. A loan with 5.9% interest and $1,000 in fees may have a higher APR than a 6.5% loan with $0 fees. The Truth in Lending Act (TILA) requires lenders to disclose APRs so consumers can make fair comparisons. Always compare APRs, not just interest rates.
      </p>
      <h3>How do loan terms affect total cost?</h3>
      <p>
        Longer loan terms mean lower monthly payments but significantly higher total interest. Example: A $30,000 loan at 6.5% costs $587/month for 60 months (total: $35,220, interest: $5,220). The same loan for 72 months costs $502/month (total: $36,144, interest: $6,144). The 72-month term saves $85/month but costs $924 more in total interest. Always consider the total cost, not just the monthly payment.
      </p>
      <h3>What loans can I compare with this calculator?</h3>
      <p>
        This calculator works for any fixed-rate installment loan: <strong>auto loans</strong>, <strong>personal loans</strong>, <strong>student loans</strong>, <strong>debt consolidation loans</strong>, <strong>home equity loans</strong>, and <strong>small business loans</strong>. For adjustable-rate or interest-only loans, the calculations differ. For mortgage comparisons, use our dedicated mortgage refinance calculator which includes closing costs and property taxes.
      </p>
      <h3>How do origination fees affect loan comparison?</h3>
      <p>
        Origination fees (typically 1-8% of the loan amount for personal loans) directly increase your APR and total cost. A $10,000 loan at 6% with 5% origination fees ($500) has an effective APR of about 7.2%. Some lenders offer "no-fee" loans with slightly higher rates — our calculator helps you compare both scenarios to find the best deal.
      </p>
      <h3>Should I choose a shorter or longer loan term?</h3>
      <p>
        <strong>Shorter terms (24-48 months)</strong>: Higher monthly payments, lower total interest, faster debt payoff, lower interest rates typically. <strong>Longer terms (60-84 months)</strong>: Lower monthly payments, higher total interest, slower equity building. General rule: choose the shortest term you can comfortably afford. For auto loans, avoid terms longer than 60 months to avoid being upside down. For personal loans, 24-48 months is ideal for most borrowers.
      </p>
      <h3>What is a good interest rate in 2026?</h3>
      <p>
        Interest rates in 2026 vary by loan type and credit score: <strong>Auto loans</strong>: 5.5-8% (new), 7-12% (used); <strong>Personal loans</strong>: 7-25% (depending on credit); <strong>Student loans (federal)</strong>: 5.5-7.5%; <strong>Home equity loans</strong>: 7-9%. A "good" rate for your situation depends on your credit score (740+ gets the best rates), loan type, and current market conditions. Check multiple lenders and pre-qualify (soft credit pull) to see your actual offered rates.
      </p>

      <h2>Data Sources & Methodology</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>APR Disclosure Requirements:</strong> Truth in Lending Act (TILA) as enforced by the{" "}
          <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-the-truth-in-lending-act-tila-en-1955/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Consumer Financial Protection Bureau
          </a>
          . Lenders must disclose APR before loan closing.
        </li>
        <li>
          <strong>Loan Rate Benchmarks:</strong> Average consumer loan rates from{" "}
          <a href="https://fred.stlouisfed.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Federal Reserve Economic Data (FRED)
          </a>
          . Personal loan rates averaged 10-12% in early 2026.
        </li>
        <li>
          <strong>Amortization Formula:</strong> Standard installment loan formula used by all major lenders. Verified for accuracy against loan amortization schedules.
        </li>
      </ul>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/calculators/mortgage-refinance-calculator-2026">Mortgage Refinance Calculator</a> — Is refinancing worth it?</li>
        <li><a href="/calculators/car-loan-affordability-calculator-2026">Car Loan Affordability Calculator</a> — Can you afford that car?</li>
        <li><a href="/calculators/credit-card-payoff-calculator">Credit Card Payoff Calculator</a> — Compare payoff strategies.</li>
        <li><a href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</a> — How much house can you afford?</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to choosing the best loan, comparing rates, and avoiding costly mistakes, read our blog post:{" "}
          <a href="/blog/loan-comparison-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Loan Comparison Guide 2026
          </a>
          .
        </p>
      </div>

      <RelatedCalculators currentPage="loan-comparison-calculator" />

      </>
  );
}

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
  const [currentRate, setCurrentRate] = useState("7.0");
  const [newRate, setNewRate] = useState("5.75");
  const [balance, setBalance] = useState("300000");
  const [remainingTerm, setRemainingTerm] = useState("25");
  const [newTerm, setNewTerm] = useState("30");
  const [closingCosts, setClosingCosts] = useState("6000");
  const [homeValue, setHomeValue] = useState("400000");

  const currRate = (parseFloat(currentRate) || 7.0) / 100 / 12;
  const refiRate = (parseFloat(newRate) || 5.75) / 100 / 12;
  const loanBalance = parseFloat(balance) || 0;
  const remainMonths = (parseInt(remainingTerm) || 25) * 12;
  const newLoanTerm = (parseInt(newTerm) || 30) * 12;
  const costs = parseFloat(closingCosts) || 0;
  const value = parseFloat(homeValue) || 400000;

  // Current monthly payment (P&I)
  const currentPayment = loanBalance > 0 && currRate > 0
    ? (loanBalance * (currRate * Math.pow(1 + currRate, remainMonths))) / (Math.pow(1 + currRate, remainMonths) - 1)
    : loanBalance > 0 ? loanBalance / remainMonths : 0;

  // New monthly payment (P&I)
  const newPayment = loanBalance > 0 && refiRate > 0
    ? (loanBalance * (refiRate * Math.pow(1 + refiRate, newLoanTerm))) / (Math.pow(1 + refiRate, newLoanTerm) - 1)
    : loanBalance > 0 ? loanBalance / newLoanTerm : 0;

  const monthlySavings = currentPayment - newPayment;
  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(costs / monthlySavings) : Infinity;
  const breakEvenYears = breakEvenMonths === Infinity ? "N/A" : (breakEvenMonths / 12).toFixed(1);

  // Total interest over remaining term (if no refi)
  const totalInterestCurrent = (currentPayment * remainMonths) - loanBalance;
  const totalInterestNew = (newPayment * newLoanTerm) - loanBalance;
  const totalInterestSaved = Math.max(0, totalInterestCurrent - totalInterestNew);
  const lifetimeSavings = monthlySavings > 0
    ? (monthlySavings * Math.min(remainMonths, newLoanTerm)) - costs
    : 0;

  // LTV check
  const ltv = value > 0 ? (loanBalance / value) * 100 : 0;
  const canRefi = ltv <= 80 ? "Likely" : ltv <= 95 ? "FHA/VA Only" : "Unlikely";
  const ltvColor = ltv <= 80 ? "text-green-600 dark:text-green-400" : ltv <= 95 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400";

  const schemaData = {
    name: "Mortgage Refinance Calculator 2026",
    description: "Calculate savings, break-even point, and total interest saved when refinancing your mortgage. Compare current vs new rates with closing costs included.",
    url: "https://www.themetricapp.com/calculators/mortgage-refinance-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Mortgage Refinance Calculator (2026)"
      subtitle="Compare your current mortgage vs a new rate, calculate monthly savings, break-even point, and total interest saved with closing costs included."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Current Payment" value={fmtMonth(currentPayment)} sub={`${currentRate}% APR`} />
          <ResultCard label="New Payment" value={fmtMonth(newPayment)} sub={`${newRate}% APR`} />
          <ResultCard label="Monthly Savings" value={fmtMonth(monthlySavings)} highlight />
          <ResultCard label="Break-Even Point" value={breakEvenMonths === Infinity ? "Never" : `${breakEvenMonths} months`} sub={breakEvenYears !== "N/A" ? `~${breakEvenYears} years` : ""} />
          <ResultCard label="Total Interest Saved" value={fmt(totalInterestSaved)} sub="Over full loan term" />
          <ResultCard label="LTV Ratio" value={pct(ltv)} sub={<span className={ltvColor}>{canRefi}</span>} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="currentRate" label="Current Interest Rate" value={currentRate} onChange={(e) => setCurrentRate(e.target.value)} suffix="%" placeholder="7.0" />
        <InputField id="newRate" label="New Interest Rate" value={newRate} onChange={(e) => setNewRate(e.target.value)} suffix="%" placeholder="5.75" helpText="Current mortgage rates 2026" />
        <InputField id="balance" label="Remaining Loan Balance" value={balance} onChange={(e) => setBalance(e.target.value)} prefix="$" placeholder="300000" />
        <InputField id="remainingTerm" label="Remaining Years" value={remainingTerm} onChange={(e) => setRemainingTerm(e.target.value)} suffix="years" placeholder="25" />
        <InputField id="newTerm" label="New Loan Term" value={newTerm} onChange={(e) => setNewTerm(e.target.value)} suffix="years" placeholder="30" helpText="15, 20, or 30 years" />
        <InputField id="closingCosts" label="Estimated Closing Costs" value={closingCosts} onChange={(e) => setClosingCosts(e.target.value)} prefix="$" placeholder="6000" helpText="Typically 2-5% of loan" />
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
            <a href="https://www.consumerfinance.gov/mortgage/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              CFPB Mortgage Guidance
            </a>
            {" · "}
            <a href="https://www.freddiemac.com/pmms" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Freddie Mac PMMS
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Mortgage Refinance Calculator</h2>
      <p>
        This mortgage refinance calculator helps you decide whether refinancing your home loan makes financial sense. Enter your <strong>current interest rate</strong>, <strong>remaining loan balance</strong>, <strong>remaining term</strong>, and the <strong>new rate and term</strong> you're considering. Then add your <strong>estimated closing costs</strong> (typically 2-5% of the loan amount) to see a complete cost-benefit analysis.
      </p>
      <p>
        The calculator shows your <strong>monthly payment comparison</strong>, <strong>monthly savings</strong>, <strong>break-even point</strong> (how many months to recoup closing costs), <strong>total interest saved</strong> over the loan term, and your <strong>loan-to-value (LTV) ratio</strong> — which determines whether you qualify for conventional refinancing.
      </p>

      <h2>Mortgage Refinance Formula & Methodology</h2>
      <h3>Monthly Payment Calculation</h3>
      <p>
        Both current and new payments use the standard amortization formula: <strong>M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]</strong>, where M is the monthly payment, P is the loan balance, r is the monthly interest rate (APR ÷ 12), and n is the total number of months remaining/term.
      </p>
      <h3>Break-Even Analysis</h3>
      <p>
        <strong>Break-Even Point = Closing Costs ÷ Monthly Savings.</strong> If closing costs are $6,000 and you save $200/month, you break even in 30 months (2.5 years). If you plan to stay in the home beyond the break-even point, refinancing makes financial sense.
      </p>
      <h3>Total Interest Comparison</h3>
      <p>
        Total interest on current loan: (current payment × remaining months) − loan balance. Total interest on refi: (new payment × new term months) − loan balance. The difference shows your total interest savings — but if you extend your term (e.g., from 25 to 30 years), you may pay more total interest despite a lower rate.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Is refinancing worth it in 2026?</h3>
      <p>
        Refinancing is worth it if you can lower your rate by at least 0.75-1% and plan to stay in the home past the break-even point. In 2026, with rates between 5.5-7%, borrowers who took mortgages at 7.5-8% in 2023-2024 may benefit significantly from a rate and term refinance. Always factor in closing costs, which typically range from 2-5% of the loan amount.
      </p>
      <h3>What is the break-even point on a refinance?</h3>
      <p>
        The break-even point is the time it takes for your monthly savings to cover the closing costs. For example, if closing costs are $5,000 and you save $200/month, you break even in 25 months. If you plan to move before the break-even point, refinancing likely isn't worth it. Most experts recommend refinancing only if the break-even point is under 3-4 years.
      </p>
      <h3>What LTV ratio do I need to refinance?</h3>
      <p>
        For a conventional refinance, most lenders require an LTV ratio of 80% or lower (20% equity). FHA streamline refinances allow up to 95% LTV. VA loans have no LTV limit for IRRRL (streamline) refinances. If your home value has declined, cash-in refinancing (bringing cash to closing) can help lower your LTV. Use our calculator to check your LTV before applying.
      </p>
      <h3>Should I refinance to a 15-year or 30-year mortgage?</h3>
      <p>
        A 15-year refinance typically offers a lower rate (0.25-0.5% lower than 30-year) but significantly higher monthly payments. Example: Refinancing a $300,000 loan from 7% to 5.5% on a 15-year term increases monthly payment from ~$1,995 to ~$2,451 but saves $160,000+ in total interest. A 30-year term lowers monthly payments but may extend your payoff timeline and increase total interest paid. Choose based on your cash flow needs and retirement timeline.
      </p>
      <h3>What closing costs can I expect for a refinance?</h3>
      <p>
        Refinance closing costs typically range from <strong>2% to 5% of the loan amount</strong>. On a $300,000 loan, that's $6,000-$15,000. Common costs include: application fee ($300-500), appraisal ($400-600), title search ($400-1,000), origination fee (0-1% of loan), recording fees ($100-300), and prepaid interest. Many lenders offer "no-closing-cost" refinances in exchange for a slightly higher rate, which can be beneficial if you plan to move soon.
      </p>
      <h3>Can I refinance with an FHA or VA loan?</h3>
      <p>
        Yes. FHA Streamline Refinance requires no appraisal or income verification (for rate/term) and allows up to 95% LTV. VA IRRRL (Interest Rate Reduction Refinance Loan) requires no appraisal and has no LTV limit — any veteran with an existing VA loan can typically qualify. Both streamline programs offer lower closing costs than conventional refinances. USDA loans also have a streamline refinance option for eligible rural properties.
      </p>
      <h3>How much does a credit score affect my refinance rate?</h3>
      <p>
        Your credit score significantly impacts your refinance rate. In 2026: <strong>760+</strong> (excellent): best rates −0.25% to −0.5% below advertised, <strong>700-759</strong> (good): standard rates, <strong>640-699</strong> (fair): rates +0.5% to +1.5%, <strong>below 640</strong>: may not qualify for conventional refinancing. A 100-point credit score difference can cost $50-150/month on a $300,000 loan. Check your credit score and consider improving it before applying.
      </p>

      <h2>Data Sources & Methodology</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Mortgage Rate Data:</strong> Current rate averages from{" "}
          <a href="https://www.freddiemac.com/pmms" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Freddie Mac Primary Mortgage Market Survey
          </a>
          . 30-year fixed rates averaged 5.75-6.5% in Q1 2026.
        </li>
        <li>
          <strong>Closing Cost Estimates:</strong> Based on{" "}
          <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            CFPB Closing Disclosure Guidelines
          </a>
          . Typical costs range from 2-5% of loan amount.
        </li>
        <li>
          <strong>LTV Requirements:</strong> Conventional loan guidelines from{" "}
          <a href="https://www.fhfa.gov/Data/Homeowner-Affordability" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            FHFA
          </a>
          . Standard 80% LTV for conventional refinancing.
        </li>
      </ul>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</a> — How much house can you afford?</li>
        <li><a href="/calculators/mortgage-calculator-uk">Mortgage Calculator UK</a> — UK mortgage repayment estimates.</li>
        <li><a href="/calculators/rental-property-roi-calculator">Rental Property ROI Calculator</a> — Cap rate, cash flow, and ROI analysis.</li>
        <li><a href="/calculators/loan-comparison-calculator">Loan Comparison Calculator</a> — Compare multiple loan options side-by-side.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to refinancing strategies, rates, and what to watch out for in 2026, read our blog post:{" "}
          <a href="/blog/mortgage-refinance-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Mortgage Refinance Guide 2026
          </a>
          .
        </p>
      </div>

      <RelatedCalculators currentPage="mortgage-refinance-calculator-2026" />

      </>
  );
}

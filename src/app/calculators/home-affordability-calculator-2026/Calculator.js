"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtMonth = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [income, setIncome] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [monthlyDebts, setMonthlyDebts] = useState("500");
  const [rate, setRate] = useState("6.5");
  const [propertyTax, setPropertyTax] = useState("1.25");

  const annualIncome = parseFloat(income) || 0;
  const downPct = (parseFloat(downPayment) || 20) / 100;
  const debts = parseFloat(monthlyDebts) || 0;
  const interestRate = (parseFloat(rate) || 6.5) / 100 / 12;
  const taxRate = (parseFloat(propertyTax) || 1.25) / 100 / 12;

  const monthlyIncome = annualIncome / 12;
  // 28% front-end DTI
  const maxPayment28 = monthlyIncome * 0.28;
  // 36% back-end DTI
  const maxPayment36 = monthlyIncome * 0.36 - debts;

  const affordablePayment = Math.min(maxPayment28, maxPayment36);
  const principal = affordablePayment > 0 ? affordablePayment / (interestRate + taxRate + (interestRate / (Math.pow(1 + interestRate, 360) - 1))) : 0;
  const homePrice = downPct < 1 ? principal / (1 - downPct) : principal;
  const mortgageAmount = homePrice * (1 - downPct);
  const monthlyPI = mortgageAmount * (interestRate * Math.pow(1 + interestRate, 360)) / (Math.pow(1 + interestRate, 360) - 1);
  const monthlyTax = homePrice * taxRate;
  const totalMonthlyPayment = monthlyPI + monthlyTax;

  const schemaData = {
    name: "Home Affordability Calculator 2026",
    description: "Calculate how much house you can afford based on income, down payment, debts, and interest rates.",
    url: "https://www.themetricapp.com/calculators/home-affordability-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Home Affordability Calculator (2026)"
      subtitle="Calculate your home buying budget based on the 28/36 DTI rule with current interest rates."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Affordable Home Price" value={fmt(homePrice)} highlight />
          <ResultCard label="Mortgage Amount" value={fmt(mortgageAmount)} sub={format(downPct * 100, "0") + "% down"} />
          <ResultCard label="Max Monthly Payment" value={fmtMonth(affordablePayment)} sub="28/36 rule" />
          <ResultCard label="Principal & Interest" value={fmtMonth(monthlyPI)} />
          <ResultCard label="Monthly Property Tax" value={fmtMonth(monthlyTax)} />
          <ResultCard label="Total Monthly Payment" value={fmtMonth(totalMonthlyPayment)} highlight />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="income" label="Annual Household Income" value={income} onChange={(e) => setIncome(e.target.value)} prefix="$" placeholder="95000" />
        <InputField id="downPayment" label="Down Payment (%)" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} suffix="%" placeholder="20" helpText="Default 20%" />
        <InputField id="monthlyDebts" label="Monthly Debt Payments" value={monthlyDebts} onChange={(e) => setMonthlyDebts(e.target.value)} prefix="$" placeholder="500" helpText="Car loans, student loans, credit cards" />
        <InputField id="rate" label="Interest Rate (%)" value={rate} onChange={(e) => setRate(e.target.value)} suffix="%" placeholder="6.5" />
      </div>
    </CalculatorShell>
  );
}

function format(n, digits) { return Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: digits || 0, maximumFractionDigits: digits || 0 }); }

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
            <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-the-28-36-rule-for-mortgages-en-1995/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              CFPB 28/36 Rule
            </a>
            {" · "}
            <a href="https://www.fhfa.gov/Data/Homeowner-Affordability" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              FHFA Housing Data
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Home Affordability Calculator</h2>
      <p>
        The 28/36 rule is a standard lender guideline: your housing costs should not exceed <strong>28% of gross monthly income</strong>, and total debt payments (housing + other debts) should not exceed <strong>36% of gross monthly income</strong>. This calculator applies both limits and uses the more restrictive one to determine your affordable home price.
      </p>
      <p>
        Enter your <strong>annual household income</strong>, <strong>down payment percentage</strong>, <strong>monthly debt payments</strong> (car loans, student loans, credit cards), and <strong>current mortgage interest rate</strong>. The calculator computes your maximum affordable home price using a 30-year fixed-rate mortgage.
      </p>

      <h2>Data Sources & Methodology</h2>
      <p>
        Our Home Affordability Calculator uses the standard 28/36 DTI rule widely adopted by conventional mortgage lenders in the US. All guidelines are verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>28/36 DTI Rule:</strong> Standard lending guideline from the{" "}
          <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-the-28-36-rule-for-mortgages-en-1995/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Consumer Financial Protection Bureau
          </a>
          . Front-end: 28% of gross income. Back-end: 36% including debt payments.
        </li>
        <li>
          <strong>Interest Rate Data:</strong> Current mortgage rate averages from{" "}
          <a href="https://www.freddiemac.com/pmms" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Freddie Mac PMMS
          </a>
          . Default assumes 6.5% for 30-year fixed.
        </li>
        <li>
          <strong>Property Tax:</strong> US average ~1.25% per{" "}
          <a href="https://www.taxpolicycenter.org/statistics/state-and-local-property-tax-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Tax Policy Center
          </a>
          . County-level rates vary significantly.
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Front-End DTI = Monthly Income × 28%. Back-End DTI = (Monthly Income × 36%) − Monthly Debts. The calculator uses the lower of the two limits. The affordable loan amount is derived by reversing the amortization formula: M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]. Home Price = Loan Amount ÷ (1 − Down Payment %). Monthly payment includes principal, interest, and property taxes. This is an estimate — actual approval depends on lender criteria, credit score, and debt ratios.
      </p>

      <h2>Home Affordability Formula</h2>
      <p>
        Front-End DTI: Monthly Income × 28% = Max Housing Payment. Back-End DTI: (Monthly Income × 36%) − Monthly Debts = Max Payment. The calculator uses the lower of the two limits and reverses a standard amortization formula to determine the maximum principal affordable.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Should I use the 28/36 rule or can I go higher?</h3>
      <p>
        The 28/36 rule is a conservative guideline used by most conventional lenders. FHA loans allow up to 31/43, and some lenders approve up to 50% DTI with strong credit (720+) and significant reserves. However, staying within 28/36 provides a comfortable margin for saving, investing, and unexpected expenses.
      </p>
      <h3>How does the down payment affect affordability?</h3>
      <p>
        A larger down payment reduces the loan amount, eliminates PMI (at 20%), and lowers monthly payments. A 20% down payment on a $400,000 home saves approximately $200-$300/month in PMI costs. However, putting down less than 20% is sometimes better if it means entering the market sooner in a rising price environment.
      </p>
      <h3>Does this include homeowners insurance and HOA fees?</h3>
      <p>
        No — this calculator covers principal, interest, and property taxes. Homeowners insurance typically adds $100-$200/month, and HOA fees can add $50-$500/month depending on the community. Factor these into your total monthly budget when evaluating actual affordability.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Read our guide:{" "}<a href="/blog/home-affordability-calculator-2026" className="text-teal-400 underline hover:text-teal-300">Home Affordability Calculator 2026 — Complete Guide</a>.
          <br />Check our{" "}<a href="/calculators/mortgage-calculator-uk" className="text-teal-400 underline hover:text-teal-300">Mortgage Calculator UK</a>
          {" "}or{" "}<a href="/calculators/rental-property-roi-calculator" className="text-teal-400 underline hover:text-teal-300">Rental Property ROI Calculator</a>.
        </p>
      </div>

      <RelatedCalculators currentPage="home-affordability-calculator-2026" />

      </>
  );
}

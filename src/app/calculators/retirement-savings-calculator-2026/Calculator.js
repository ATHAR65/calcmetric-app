"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtMonth = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

export default function Calculator() {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("65");
  const [currentSavings, setCurrentSavings] = useState("50000");
  const [monthlyContribution, setMonthlyContribution] = useState("500");
  const [expectedReturn, setExpectedReturn] = useState("7");
  const [annualIncome, setAnnualIncome] = useState("75000");

  const age = parseInt(currentAge) || 30;
  const retireAge = parseInt(retirementAge) || 65;
  const yearsToRetirement = Math.max(1, retireAge - age);
  const savings = parseFloat(currentSavings) || 0;
  const monthlyContrib = parseFloat(monthlyContribution) || 0;
  const annualReturn = (parseFloat(expectedReturn) || 7) / 100;
  const monthlyRate = annualReturn / 12;
  const income = parseFloat(annualIncome) || 0;
  const totalMonths = yearsToRetirement * 12;

  // Future value of current savings (lump sum)
  const fvLumpSum = savings * Math.pow(1 + annualReturn, yearsToRetirement);

  // Future value of monthly contributions (annuity)
  const fvAnnuity = monthlyRate > 0
    ? monthlyContrib * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate)
    : monthlyContrib * totalMonths;

  const totalAtRetirement = fvLumpSum + fvAnnuity;

  // Withdrawals using 4% rule
  const annualWithdrawal4pct = totalAtRetirement * 0.04;
  const monthlyWithdrawal4pct = annualWithdrawal4pct / 12;

  // What if they stopped contributing today?
  const fvNoContributions = savings * Math.pow(1 + annualReturn, yearsToRetirement);
  const differenceWithContributions = totalAtRetirement - fvNoContributions;

  // Income replacement rate
  const incomeReplacementRate = income > 0 ? (annualWithdrawal4pct / income) * 100 : 0;

  // Total contributions made
  const totalContributionsMade = monthlyContrib * totalMonths + savings;

  const schemaData = {
    name: "Retirement Savings Calculator 2026",
    description: "Estimate your retirement savings growth, monthly retirement income using the 4% rule, and see if you're on track for your goals.",
    url: "https://www.themetricapp.com/calculators/retirement-savings-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Retirement Savings Calculator 2026 — Are You on Track for Retirement?"
      subtitle="Project your retirement savings growth, see your estimated monthly income using the 4% rule, and check your income replacement rate."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Total at Retirement" value={fmt(totalAtRetirement)} highlight />
          <ResultCard label="Monthly Retirement Income" value={fmtMonth(monthlyWithdrawal4pct)} sub="4% withdrawal rule" />
          <ResultCard label="Annual Retirement Income" value={fmt(annualWithdrawal4pct)} />
          <ResultCard label="Income Replacement" value={pct(incomeReplacementRate)} sub={`of current $${income.toLocaleString()} income`} />
          <ResultCard label="If You Stopped Today" value={fmt(fvNoContributions)} sub={`Without future contributions`} />
          <ResultCard label="Value of Contributions" value={fmt(differenceWithContributions)} sub={`Savings you'll add over ${yearsToRetirement} years`} />
          <ResultCard label="Years to Retirement" value={yearsToRetirement.toString()} sub={`Age ${age} → ${retireAge}`} />
          <ResultCard label="Total Contributions" value={fmt(totalContributionsMade)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="currentAge" label="Your Current Age" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} suffix="years" placeholder="30" />
        <InputField id="retirementAge" label="Desired Retirement Age" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} suffix="years" placeholder="65" />
        <InputField id="currentSavings" label="Current Retirement Savings" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} prefix="$" placeholder="50000" />
        <InputField id="monthlyContribution" label="Monthly Contribution" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} prefix="$" placeholder="500" helpText="401k, IRA, or taxable account" />
        <InputField id="expectedReturn" label="Expected Annual Return" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} suffix="%" placeholder="7" helpText="Historical S&P 500 avg: ~7% after inflation" />
        <InputField id="annualIncome" label="Current Annual Income" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} prefix="$" placeholder="75000" helpText="Used for income replacement rate" />
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
            <a href="https://www.sec.gov/files/4-percent-rule.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Trinity Study (4% Rule)
            </a>
            {" · "}
            <a href="https://www.ssa.gov/benefits/retirement/estimator.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              SSA Retirement Estimator
            </a>
            {" · "}
            <a href="https://www.irs.gov/retirement-plans" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Retirement Plans
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Retirement Savings Calculator</h2>
      <p>
        Planning for retirement is one of the most important financial decisions you'll make. This calculator projects how your savings will grow over time using compound interest, and estimates how much income you can expect in retirement. Enter your <strong>current age</strong>, <strong>desired retirement age</strong>, <strong>current savings</strong>, <strong>monthly contribution</strong>, <strong>expected annual return</strong>, and <strong>annual income</strong> to get started.
      </p>
      <p>
        The calculator shows your <strong>total savings at retirement</strong>, <strong>monthly retirement income</strong> (using the 4% safe withdrawal rule), <strong>income replacement rate</strong> (what percentage of your current income you can replace), and what your savings would be <strong>if you stopped contributing today</strong>. This last number is powerful — it shows exactly how much future contributions matter.
      </p>
      <p>
        Financial advisors typically recommend targeting a <strong>70-80% income replacement rate</strong> in retirement. If your rate is below that, consider increasing your monthly contribution or adjusting your retirement age.
      </p>

      <h2>Retirement Savings Formula & Methodology</h2>
      <h3>Compound Growth Projection</h3>
      <p>
        The calculator uses two standard financial formulas. <strong>Future Value of Lump Sum:</strong> FV = PV × (1 + r)ⁿ — this projects how your current savings grow over time. <strong>Future Value of Annuity:</strong> FV = PMT × ((1 + r)ⁿ − 1) ÷ r — this projects how your monthly contributions grow. The total is the sum of both, giving you a complete picture of your retirement savings trajectory.
      </p>
      <h3>The 4% Safe Withdrawal Rule</h3>
      <p>
        The 4% rule, based on the famous Trinity Study (1998), suggests you can withdraw 4% of your retirement portfolio in the first year of retirement and adjust that amount for inflation each year, with a high probability of your savings lasting 30 years. Monthly retirement income = Total Savings × 4% ÷ 12. A $1,000,000 portfolio generates approximately $40,000/year or $3,333/month.
      </p>
      <h3>Income Replacement Rate</h3>
      <p>
        Income Replacement Rate = Annual Withdrawal ÷ Current Annual Income × 100. Most retirees need <strong>70-80% of their pre-retirement income</strong> to maintain their standard of living (lower because of reduced taxes, no retirement savings, and potentially lower expenses). Social Security typically replaces about 40% of pre-retirement income for average earners.
      </p>

      {/* Growth Projection Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Monthly Contribution</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Total Saved at 65</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Monthly Income (4% rule)</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Income on $75k Salary</th>
            </tr>
          </thead>
          <tbody>
            {[
              { contrib: 250, label: "$250/month" },
              { contrib: 500, label: "$500/month" },
              { contrib: 1000, label: "$1,000/month" },
              { contrib: 1500, label: "$1,500/month" },
            ].map((row) => {
              const age = 30, retire = 65, years = retire - age, savings = 50000;
              const r = 0.07, mr = r / 12, months = years * 12;
              const lumpSum = savings * Math.pow(1 + r, years);
              const annuity = row.contrib * ((Math.pow(1 + mr, months) - 1) / mr);
              const total = lumpSum + annuity;
              const monthlyIncome = (total * 0.04) / 12;
              const replaceRate = (total * 0.04) / 75000 * 100;
              return (
                <tr key={row.contrib} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{row.label}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{fmt(total)}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{fmtMonth(monthlyIncome)}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 dark:text-green-400 font-medium">{replaceRate.toFixed(0)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Assumes age 30, $50k current savings, 7% annual return, retirement at 65.
        </p>
      </div>

      {/* Data Sources & Methodology */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Retirement Savings Calculator uses standard time value of money formulas and peer-reviewed withdrawal research. All data verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>4% Safe Withdrawal Rule:</strong> Based on the{" "}
          <a href="https://www.sec.gov/files/4-percent-rule.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Trinity Study
          </a>
          (Bengen, 1994; Cooley, Hubbard & Walz, 1998). Historical success rate of ~95% for 30-year retirements.
        </li>
        <li>
          <strong>Historical Market Returns:</strong> The 7% default return rate is based on the{" "}
          <a href="https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            historical average S&P 500 return
          </a>
          of ~10% before inflation, adjusted to ~7% after 3% inflation. Past performance does not guarantee future results.
        </li>
        <li>
          <strong>Income Replacement Guidelines:</strong> Industry standard 70-80% target from{" "}
          <a href="https://www.fidelity.com/viewpoints/retirement/how-much-do-i-need-to-retire" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Fidelity Retirement Guidelines
          </a>
          . Adjust based on your lifestyle and expected expenses.
        </li>
        <li>
          <strong>Social Security:</strong> The SSA estimates average benefits replace about{" "}
          <a href="https://www.ssa.gov/benefits/retirement/estimator.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            40% of pre-retirement income
          </a>
          . Actual benefits vary by earnings history.
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Future value formulas for compound growth of lump sum and annuity streams. No Monte Carlo simulation — we use deterministic projections. The 4% rule assumes a balanced portfolio of 50-70% stocks and 30-50% bonds. Higher stock allocations may support a higher withdrawal rate but increase sequence-of-returns risk.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>How much do I need to save for retirement?</h3>
      <p>
        A common rule of thumb is to aim for <strong>10-15x your final salary saved by retirement age</strong>. Fidelity suggests: 1x salary by 30, 3x by 40, 6x by 50, 8x by 60, and 10x by 67. However, the exact number depends on your desired lifestyle, expected Social Security benefits, healthcare costs, and longevity. A more personalized approach: use this calculator to find the monthly contribution needed to reach a portfolio that can sustain your desired retirement income using the 4% rule.
      </p>
      <h3>What is the 4% rule and is it still valid in 2026?</h3>
      <p>
        The 4% rule suggests withdrawing 4% of your portfolio in your first year of retirement, then adjusting that dollar amount for inflation each year. Developed by William Bengen in 1994 and validated by the Trinity Study, it has a ~95% historical success rate for 30-year retirements. In 2026, many experts recommend a <strong>more conservative 3-3.5% withdrawal rate</strong> given current high valuations and lower expected bond yields. However, 4% remains a useful planning benchmark. Adjust based on your risk tolerance, portfolio allocation, and retirement timeline.
      </p>
      <h3>What's a good income replacement rate for retirement?</h3>
      <p>
        Most financial advisors recommend targeting <strong>70-80% of your pre-retirement income</strong> in retirement. You typically need less than your working income because: you're no longer saving for retirement (that's 10-15% right there), payroll taxes stop (7.65% for FICA), work-related expenses decrease, and many people have a paid-off mortgage by retirement. Social Security typically replaces about 40% of pre-retirement income for median earners. If this calculator shows you below 70% replacement, consider increasing your monthly contribution or working a few more years.
      </p>
      <h3>Should I use 7% or a different expected return?</h3>
      <p>
        The <strong>7% default (10% historical S&P 500 return minus 3% inflation)</strong> is a reasonable long-term assumption for a portfolio heavily weighted in stocks. However, if you're within 10 years of retirement, a more conservative 5-6% might be appropriate since you'll likely shift toward bonds. For aggressive investors with a long time horizon, 8-9% could be used. The calculator lets you experiment with different return rates to see best-case and worst-case scenarios. Remember: past performance doesn't guarantee future results, and sequence-of-returns risk matters as you approach retirement.
      </p>
      <h3>What accounts should I use for retirement savings?</h3>
      <p>
        In order of tax efficiency: <strong>1) Employer 401k match</strong> (free money — contribute enough to get the full match), <strong>2) Roth IRA or Traditional IRA</strong> ($7,000 limit in 2026, $8,000 if 50+), <strong>3) Max out 401k</strong> ($23,500 limit in 2026, $31,000 if 60-63 under SECURE 2.0), <strong>4) HSA</strong> (triple tax-advantaged if eligible), <strong>5) Taxable brokerage account</strong>. The Solo 401k is the best option for self-employed individuals (up to $70,000 in 2026). Use our <a href="/calculators/solo-401k-contribution-calculator">Solo 401k Contribution Calculator</a> to find your maximum contribution.
      </p>
      <h3>What if I start saving later in life?</h3>
      <p>
        Starting later means you need to save significantly more each month to catch up. A 40-year-old with $10k saved needs to contribute ~$1,800/month to reach $1M by 65 at 7% returns, while a 25-year-old would only need ~$500/month. The power of compound interest means <strong>time is your greatest ally</strong>. If you're starting late: maximize catch-up contributions (extra $7,500 in 401k if 50+), consider working longer, plan for a lower withdrawal rate (3-3.5%), and factor in Social Security more heavily. Every dollar saved still matters — don't let a late start discourage you from starting now.
      </p>
      <h3>How does Social Security affect my retirement plan?</h3>
      <p>
        Social Security provides a base layer of retirement income that reduces how much you need from your personal savings. For a median earner ($60k-75k/year), Social Security replaces about <strong>40% of pre-retirement income</strong>. The full retirement age for most workers in 2026 is 67 (born 1960 or later). Claiming at 62 reduces benefits by up to 30%, while delaying to 70 increases benefits by 8% per year past full retirement age. Create an account at ssa.gov to see your estimated benefits. This calculator focuses on personal savings — add your estimated Social Security income to get a fuller picture of your retirement readiness.
      </p>

      <h2>Related Tools</h2>
      <p>Check out these other helpful calculators for retirement and financial planning:</p>
      <ul>
        <li><a href="/calculators/solo-401k-contribution-calculator">Solo 401k Contribution Calculator</a> — Maximize retirement contributions as a self-employed professional.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Estimate taxes on freelance and gig income.</li>
        <li><a href="/calculators/capital-gains-tax-calculator">Capital Gains Tax Calculator</a> — Understand taxes on investment gains.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to retirement savings strategies, contribution limits, and tax-advantaged accounts, read our blog post:{" "}
          <a href="/blog/retirement-savings-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Retirement Savings Guide 2026
          </a>
          .
        </p>
      </div>

      <RelatedCalculators currentPage="retirement-savings-calculator-2026" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", "name": "Retirement Savings Calculator 2026", "url": "https://www.themetricapp.com/calculators/retirement-savings-calculator-2026", "description": "Estimate your retirement savings growth, monthly retirement income using the 4% rule, and see if you're on track for your goals.", "applicationCategory": "FinanceApplication", "operatingSystem": "Web Browser", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" }, { "@type": "ListItem", "position": 2, "name": "Retirement Savings Calculator", "item": "https://www.themetricapp.com/calculators/retirement-savings-calculator-2026" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "How much do I need to save for retirement?", acceptedAnswer: { "@type": "Answer", text: "Aim for 10-15x your final salary by retirement. Fidelity suggests: 1x by 30, 3x by 40, 6x by 50, 8x by 60, 10x by 67." } },
        { "@type": "Question", name: "What is the 4% rule and is it still valid?", acceptedAnswer: { "@type": "Answer", text: "The 4% rule suggests withdrawing 4% of your portfolio in the first year, adjusting for inflation. It has ~95% historical success for 30-year retirements. Many now recommend 3-3.5% as more conservative." } },
        { "@type": "Question", name: "What's a good income replacement rate?", acceptedAnswer: { "@type": "Answer", text: "Target 70-80% of pre-retirement income. You need less because you stop saving for retirement, FICA taxes end, and work expenses decrease." } },
        { "@type": "Question", name: "Should I use 7% or a different expected return?", acceptedAnswer: { "@type": "Answer", text: "7% (10% historical minus 3% inflation) is reasonable for stock-heavy portfolios. Use 5-6% if within 10 years of retirement." } },
        { "@type": "Question", name: "What accounts should I use for retirement savings?", acceptedAnswer: { "@type": "Answer", text: "Order: employer 401k match → Roth IRA ($7k limit) → max 401k ($23.5k) → HSA → taxable brokerage. Solo 401k is best for self-employed." } },
        { "@type": "Question", name: "What if I start saving later in life?", acceptedAnswer: { "@type": "Answer", text: "A 40-year-old needs ~$1,800/month vs a 25-year-old needing only ~$500/month to reach $1M by 65. Catch-up contributions and working longer help." } },
      ] }) }} />
    </>
  );
}

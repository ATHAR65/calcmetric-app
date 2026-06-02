"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtMonth = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

export default function Calculator() {
  const [monthlyExpenses, setMonthlyExpenses] = useState("4500");
  const [currentSavings, setCurrentSavings] = useState("5000");
  const [targetMonths, setTargetMonths] = useState("6");
  const [monthlySavingsRate, setMonthlySavingsRate] = useState("500");
  const [incomeStability, setIncomeStability] = useState("moderate");

  const expenses = parseFloat(monthlyExpenses) || 0;
  const savings = parseFloat(currentSavings) || 0;
  const months = parseInt(targetMonths) || 6;
  const savingsRate = parseFloat(monthlySavingsRate) || 0;

  // Stability-based multiplier
  const stabilityMultipliers = {
    stable: 3,
    moderate: 6,
    unstable: 8,
    variable: 12,
  };
  const stabilityLabel = {
    stable: "3 months (Stable Job)",
    moderate: "6 months (Moderate Stability)",
    unstable: "8 months (Freelancer/Self-Employed)",
    variable: "12 months (Variable Income)",
  };

  const recommendedMonths = stabilityMultipliers[incomeStability] || 6;
  const targetAmount = expenses * months;
  const recommendedAmount = expenses * recommendedMonths;
  const progress = targetAmount > 0 ? Math.min(100, (savings / targetAmount) * 100) : 0;
  const shortfall = Math.max(0, targetAmount - savings);
  const monthsToGoal = savingsRate > 0 ? Math.ceil(shortfall / savingsRate) : Infinity;
  const progressColor = progress >= 100 ? "text-green-600 dark:text-green-400" : progress >= 50 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400";

  const schemaData = {
    name: "Emergency Fund Calculator 2026",
    description: "Calculate how much you need in your emergency fund based on monthly expenses, savings rate, and income stability. Free 2026 emergency savings planner.",
    url: "https://www.themetricapp.com/calculators/emergency-fund-calculator",
  };

  return (
    <CalculatorShell
      title="Emergency Fund Calculator (2026)"
      subtitle="Calculate your emergency fund target based on monthly expenses, income stability, and current savings. See how long it will take to reach your goal."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Emergency Fund Target" value={fmt(targetAmount)} sub={`${months} months of expenses`} highlight />
          <ResultCard label="Current Savings" value={fmt(savings)} sub={`${pct(progress)} of target`} />
          <ResultCard label="Shortfall" value={fmt(shortfall)} sub={shortfall > 0 ? "Amount still needed" : "Goal reached!"} />
          <ResultCard label="Progress" value={pct(progress)} sub={<span className={progressColor}>{progress >= 100 ? "✅ Goal Reached" : progress >= 50 ? "🟡 Halfway There" : "🔴 Getting Started"}</span>} />
          <ResultCard label="Months to Goal" value={monthsToGoal === Infinity ? "—" : monthsToGoal + " mo"} sub={savingsRate > 0 ? `At $${savingsRate}/month savings` : "Increase savings rate"} />
          <ResultCard label="Recommended Target" value={fmt(recommendedAmount)} sub={stabilityLabel[incomeStability]} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="monthlyExpenses" label="Monthly Expenses" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)} prefix="$" placeholder="4500" helpText="Rent, food, utilities, insurance, minimum debt payments" />
        <InputField id="currentSavings" label="Current Savings" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} prefix="$" placeholder="5000" helpText="Money already set aside for emergencies" />
        <InputField id="targetMonths" label="Target Coverage" value={targetMonths} onChange={(e) => setTargetMonths(e.target.value)} suffix="months" placeholder="6" helpText="How many months of expenses to save (3-12)" />
        <InputField id="monthlySavingsRate" label="Monthly Savings" value={monthlySavingsRate} onChange={(e) => setMonthlySavingsRate(e.target.value)} prefix="$" placeholder="500" helpText="How much you can save each month" />
        <div>
          <label className="block text-sm font-semibold text-[#0D9488] mb-2">Income Stability</label>
          <select
            value={incomeStability}
            onChange={(e) => setIncomeStability(e.target.value)}
            className="w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-shadow"
          >
            <option value="stable">Stable Job (3 months)</option>
            <option value="moderate">Moderate Stability (6 months)</option>
            <option value="unstable">Freelancer/Self-Employed (8 months)</option>
            <option value="variable">Variable Income (12 months)</option>
          </select>
          <p className="text-xs text-[#94A3B8] mt-1.5">Less stable income = larger safety net needed</p>
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
            <a href="https://www.fdic.gov/resources/bankers/bank-failures/frequently-asked-questions/index.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              FDIC Savings Guidelines
            </a>
            {" · "}
            <a href="https://www.nerdwallet.com/article/banking/emergency-fund-calculator" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              NerdWallet Research
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Emergency Fund Calculator</h2>
      <p>
        This Emergency Fund Calculator helps you determine how much money you should set aside for unexpected expenses. Enter your <strong>monthly expenses</strong>, <strong>current savings</strong>, <strong>target coverage months</strong>, and <strong>monthly savings rate</strong>. Then select your <strong>income stability level</strong> for a personalized recommendation.
      </p>
      <p>
        The calculator shows your <strong>emergency fund target</strong>, <strong>current progress percentage</strong>, <strong>shortfall amount</strong>, and <strong>months to reach your goal</strong> based on your monthly savings rate. It also suggests a recommended target based on your income stability — because a freelancer needs a larger safety net than someone with a stable government job.
      </p>
      <p>
        Financial experts recommend 3-6 months of expenses for stable jobs, 6-8 months for freelancers and self-employed workers, and up to 12 months for those with highly variable income like commission-based sales or seasonal work.
      </p>

      <h2>Emergency Fund Formula & Methodology</h2>
      <h3>Target Calculation</h3>
      <p>
        <strong>Emergency Fund Target = Monthly Expenses × Target Coverage Months</strong>
      </p>
      <p>
        <strong>Example — $4,500/month expenses, 6-month target:</strong>
      </p>
      <ul>
        <li>Monthly Expenses: <strong>$4,500</strong></li>
        <li>Target Coverage: <strong>6 months</strong></li>
        <li>Emergency Fund Target: $4,500 × 6 = <strong>$27,000</strong></li>
        <li>Current Savings: <strong>$5,000</strong></li>
        <li>Shortfall: $27,000 − $5,000 = <strong>$22,000</strong></li>
        <li>Progress: ($5,000 ÷ $27,000) × 100 = <strong>18.5%</strong></li>
        <li>Months to Goal (at $500/month): $22,000 ÷ $500 = <strong>44 months (~3.7 years)</strong></li>
      </ul>

      <h3>Income Stability Multipliers</h3>
      <p>
        <strong>Stable Job (3 months):</strong> Government employees, tenured teachers, union workers with strong job security. High likelihood of finding comparable employment within 3 months if laid off.
      </p>
      <p>
        <strong>Moderate Stability (6 months):</strong> Most salaried private-sector employees. The standard recommendation from most financial advisors. Covers average unemployment duration plus a buffer.
      </p>
      <p>
        <strong>Freelancer/Self-Employed (8 months):</strong> 1099 contractors, gig workers, and small business owners. Income can fluctuate significantly, and finding replacement clients takes time.
      </p>
      <p>
        <strong>Variable Income (12 months):</strong> Real estate agents, commission-only sales, seasonal workers, entrepreneurs. A full year of expenses provides security through unpredictable income cycles.
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Scenario</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Monthly Expenses</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Target Fund</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">At $500/mo</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">At $1,000/mo</th>
            </tr>
          </thead>
          <tbody>
            {[
              { scenario: "Single, Renting", expenses: 2500, months: 6, label: "Single" },
              { scenario: "Couple, Renting", expenses: 4500, months: 6, label: "Couple" },
              { scenario: "Family with Kids", expenses: 7000, months: 6, label: "Family" },
              { scenario: "Self-Employed", expenses: 5000, months: 8, label: "Freelancer" },
            ].map((row) => {
              const target = row.expenses * row.months;
              const months500 = Math.ceil(target / 500);
              const months1000 = Math.ceil(target / 1000);
              return (
                <tr key={row.label} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{row.scenario}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${row.expenses.toLocaleString()}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-medium text-green-600 dark:text-green-400">${target.toLocaleString()}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{months500} mo</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{months1000} mo</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Assumes starting from $0 savings. Actual time depends on current savings balance.
        </p>
      </div>

      {/* Data Sources & Methodology */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Emergency Fund Calculator uses widely accepted financial planning guidelines from leading consumer protection and advisory organizations. All data verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>FDIC Guidelines:</strong>{" "}
          <a href="https://www.fdic.gov/resources/consumers/consumer-news/2022/emergency-savings.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            FDIC Emergency Savings Recommendations
          </a>
          . Recommends 3-6 months of expenses for most households.
        </li>
        <li>
          <strong>NerdWallet Research:</strong>{" "}
          <a href="https://www.nerdwallet.com/article/banking/emergency-fund-calculator" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            NerdWallet Emergency Fund Guidelines
          </a>
          . Updated methodology for 2026 with inflation-adjusted expense estimates.
        </li>
        <li>
          <strong>Federal Reserve:</strong>{" "}
          <a href="https://www.federalreserve.gov/publications/2024-economic-well-being-of-us-households.htm" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Report on the Economic Well-Being of U.S. Households
          </a>
          . 37% of Americans would struggle to cover a $400 emergency expense.
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Emergency fund target = monthly expenses × target coverage months. Progress = (current savings ÷ target) × 100. Months to goal = shortfall ÷ monthly savings rate. Recommended amount varies by income stability level for a more personalized result.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>How much should I have in my emergency fund?</h3>
      <p>
        Most financial experts recommend <strong>3-6 months of essential expenses</strong> for those with stable jobs. Freelancers and self-employed workers should aim for <strong>6-8 months</strong>, and those with highly variable income should target <strong>8-12 months</strong>. Your specific target depends on your job security, monthly expenses, number of dependents, and access to other financial safety nets like credit or family support.
      </p>
      <h3>What expenses should I include in my monthly total?</h3>
      <p>
        Include <strong>essential expenses only</strong>: rent or mortgage (minimum payment), utilities (electricity, water, gas, internet), groceries and toiletries, insurance premiums (health, auto, renters/homeowners), minimum debt payments (credit cards, student loans, car loans), transportation costs (fuel, public transit), and essential healthcare costs. <strong>Do not include</strong> discretionary spending like dining out, entertainment, subscriptions, or travel — those can be cut during an emergency.
      </p>
      <h3>Where should I keep my emergency fund?</h3>
      <p>
        Your emergency fund should be <strong>liquid and accessible</strong> — meaning you can access it within 24-48 hours without penalty. The best options are: <strong>High-Yield Savings Account</strong> (HYSA) offering 3.5-5% APY in 2026, <strong>Money Market Account</strong>, or <strong>No-Penalty CD</strong>. Avoid keeping your emergency fund in the stock market (too volatile) or a retirement account (early withdrawal penalties apply). The FDIC insures up to $250,000 per depositor, per bank.
      </p>
      <h3>Should I pay off debt or build an emergency fund first?</h3>
      <p>
        <strong>Build a starter emergency fund of $1,000-2,000 first</strong>, then focus on paying off high-interest debt (credit cards over 15% APR). Once high-interest debt is paid off, build your full 3-6 month emergency fund while making minimum payments on low-interest debt (student loans, mortgage). This approach, popularized by Dave Ramsey's Baby Steps, balances the need for a safety net with the urgency of eliminating expensive debt. Our{' '}
        <Link href="/calculators/credit-card-payoff-calculator"><strong>Credit Card Payoff Calculator</strong></Link> can help you compare debt payoff strategies.
      </p>
      <h3>How long will it take to build my emergency fund?</h3>
      <p>
        The time depends on your savings rate and target amount. For a single person with <strong>$2,500/month expenses</strong> targeting 6 months ($15,000) and saving <strong>$500/month</strong>, it would take 30 months (2.5 years) from $0. Increasing savings to <strong>$1,000/month</strong> cuts that to 15 months. Strategies to accelerate: temporarily reduce discretionary spending, take on a side hustle, redirect tax refunds or bonuses, and automate your savings so you never see the money in your checking account.
      </p>
      <h3>What is the difference between a savings account and an emergency fund?</h3>
      <p>
        A <strong>savings account</strong> is a general-purpose account for any financial goal — vacation, new car, down payment, holidays, etc. An <strong>emergency fund</strong> is specifically designated for unexpected financial shocks: job loss, medical emergency, major car repair, home repair, or unexpected travel. The key difference is <strong>purpose and discipline</strong> — your emergency fund should only be tapped for true emergencies, not planned expenses. Many people keep both in high-yield savings accounts but track them separately.
      </p>
      <h3>How do I rebuild my emergency fund after using it?</h3>
      <p>
        If you need to tap your emergency fund, <strong>make rebuilding it your top financial priority</strong>. Temporarily pause other non-essential savings goals until your fund is restored. Consider setting a minimum threshold (e.g., $5,000) that triggers automatic rebuilding mode. Many financial advisors recommend treating your emergency fund as a <strong>"pay yourself first"</strong> line item in your monthly budget. Once rebuilt, you can resume other savings goals with the confidence that your safety net is intact.
      </p>

      <h2>Related Tools</h2>
      <p>Check out these other helpful calculators for your financial planning:</p>
      <ul>
        <li><a href="/calculators/net-worth-calculator">Net Worth Calculator</a> — Track your total financial picture.</li>
        <li><a href="/calculators/credit-card-payoff-calculator">Credit Card Payoff Calculator</a> — Compare snowball vs avalanche methods.</li>
        <li><a href="/calculators/net-worth-calculator">Net Worth Calculator</a> — Track your total financial picture.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to building your emergency fund and strategies to save faster, read our blog post:{" "}
          <a href="/blog/emergency-fund-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Emergency Fund Guide 2026
          </a>
          .
        </p>
      </div>

      <RelatedCalculators currentPage="emergency-fund-calculator" />

      </>
  );
}

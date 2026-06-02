"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtWhole = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function Calculator() {
  const [initialDeposit, setInitialDeposit] = useState("1000");
  const [monthlyContribution, setMonthlyContribution] = useState("500");
  const [annualRate, setAnnualRate] = useState("7");
  const [years, setYears] = useState("10");

  const initial = parseFloat(initialDeposit) || 0;
  const monthly = parseFloat(monthlyContribution) || 0;
  const rate = parseFloat(annualRate) || 0;
  const periods = parseInt(years) || 0;
  const totalMonths = periods * 12;
  const monthlyRate = rate / 100 / 12;

  // Future value of a series with initial principal
  // FV = P * (1 + r)^n + PMT * [((1 + r)^n - 1) / r]
  let futureValue = 0;
  if (monthlyRate > 0) {
    const growthFactor = Math.pow(1 + monthlyRate, totalMonths);
    futureValue = initial * growthFactor + monthly * ((growthFactor - 1) / monthlyRate);
  } else {
    futureValue = initial + monthly * totalMonths;
  }

  const totalContributions = initial + monthly * totalMonths;
  const totalInterest = futureValue - totalContributions;

  // Timeline: value at each year
  const timeline = [];
  for (let y = 1; y <= periods; y++) {
    const m = y * 12;
    let val = 0;
    if (monthlyRate > 0) {
      const gf = Math.pow(1 + monthlyRate, m);
      val = initial * gf + monthly * ((gf - 1) / monthlyRate);
    } else {
      val = initial + monthly * m;
    }
    timeline.push({ year: y, value: val });
  }

  const schemaData = {
    name: "Savings Goal Calculator 2026",
    description: "Calculate the future value of your savings with regular contributions. Project your savings growth with compound interest for any goal — retirement, education, or major purchase.",
    url: "https://www.themetricapp.com/calculators/savings-goal-calculator",
  };

  return (
    <CalculatorShell
      title="Savings Goal Calculator (2026)"
      subtitle="Calculate how your savings will grow over time with regular contributions and compound interest. See exactly how much you need to save each month to reach any financial goal."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Future Value" value={fmtWhole(futureValue)} sub="Total at end of term" highlight />
            <ResultCard label="Total Contributions" value={fmtWhole(totalContributions)} sub={`$${monthly}/month for ${periods} years`} />
            <ResultCard label="Total Interest Earned" value={fmtWhole(totalInterest)} sub={`${totalContributions > 0 ? ((totalInterest / totalContributions) * 100).toFixed(1) : 0}% return on contributions`} />
          </div>

          {/* Growth Timeline Chart */}
          {timeline.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#0D9488] mb-3">Growth Over Time</p>
              <div className="space-y-1.5">
                {timeline.map((pt) => {
                  const maxVal = timeline[timeline.length - 1].value;
                  const pct = maxVal > 0 ? (pt.value / maxVal) * 100 : 0;
                  return (
                    <div key={pt.year} className="flex items-center gap-3 text-sm">
                      <span className="w-16 text-right text-[#64748B] shrink-0">Year {pt.year}</span>
                      <div className="flex-1 h-6 rounded-md bg-[#F1F5F9] dark:bg-slate-700 overflow-hidden">
                        <div
                          className="h-full rounded-md bg-gradient-to-r from-[#0D9488] to-[#14B8A6] transition-all duration-500 flex items-center px-2"
                          style={{ width: Math.max(2, pct) + "%" }}
                        >
                          <span className="text-xs font-semibold text-white whitespace-nowrap">
                            {fmtWhole(pt.value)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="initialDeposit" label="Initial Deposit" value={initialDeposit} onChange={(e) => setInitialDeposit(e.target.value)} prefix="$" placeholder="1000" helpText="Starting balance (can be $0)" />
        <InputField id="monthlyContribution" label="Monthly Contribution" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} prefix="$" placeholder="500" helpText="How much you will add each month" />
        <InputField id="annualRate" label="Annual Interest Rate" value={annualRate} onChange={(e) => setAnnualRate(e.target.value)} suffix="%" placeholder="7" helpText="Expected annual return (e.g., 7% for S&P 500 avg)" />
        <InputField id="years" label="Time Period" value={years} onChange={(e) => setYears(e.target.value)} suffix="years" placeholder="10" helpText="How long you plan to save" />
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
            <a href="https://www.investor.gov/introduction-investing/investing-basics/compound-interest" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              SEC — Compound Interest Calculator
            </a>
            {" · "}
            <a href="https://www.nerdwallet.com/calculator/savings-calculator" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              NerdWallet Savings Calculator
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Savings Goal Calculator</h2>
      <p>
        This Savings Goal Calculator helps you project the growth of your savings over time. Enter your <strong>initial deposit</strong>, <strong>monthly contribution</strong>, <strong>expected annual return</strong>, and <strong>time period</strong> to see your future savings balance, total contributions, and total interest earned.
      </p>
      <p>
        The calculator uses the <strong>future value of a series formula</strong> with compound interest to calculate your balance at the end of your savings period. It also displays a year-by-year growth chart so you can visualize your progress toward any financial goal — whether it's retirement, a down payment, education funding, or a major purchase.
      </p>
      <p>
        <strong>Pro tip:</strong> Try adjusting the monthly contribution or interest rate to see how small changes compound over time. Even an extra $50 per month can grow to thousands of dollars over a 10-year period thanks to compound interest.
      </p>

      <h2>Savings Goal Formula & Methodology</h2>
      <h3>Future Value Formula</h3>
      <p>
        <strong>FV = P × (1 + r)^n + PMT × [((1 + r)^n − 1) / r]</strong>
      </p>
      <p>Where:</p>
      <ul>
        <li><strong>FV</strong> = Future value of savings</li>
        <li><strong>P</strong> = Initial deposit (starting balance)</li>
        <li><strong>PMT</strong> = Monthly contribution amount</li>
        <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12)</li>
        <li><strong>n</strong> = Total number of months (years × 12)</li>
      </ul>

      <h3>Example — Saving for a Down Payment</h3>
      <p>
        <strong>Scenario:</strong> You want to save for a $60,000 down payment on a home. You have $5,000 saved already and can contribute $800 per month. You expect a 6% annual return in a balanced portfolio.
      </p>
      <ul>
        <li>Initial Deposit: <strong>$5,000</strong></li>
        <li>Monthly Contribution: <strong>$800</strong></li>
        <li>Annual Interest Rate: <strong>6%</strong></li>
        <li>Monthly Rate: 6% ÷ 12 = <strong>0.5%</strong></li>
      </ul>
      <p><strong>After 5 years (60 months):</strong></p>
      <ul>
        <li>Growth Factor: (1 + 0.005)^60 = <strong>1.3489</strong></li>
        <li>Future Value of Initial: $5,000 × 1.3489 = <strong>$6,744</strong></li>
        <li>Future Value of Contributions: $800 × [(1.3489 − 1) / 0.005] = <strong>$55,818</strong></li>
        <li>Total Future Value: $6,744 + $55,818 = <strong>$62,562</strong></li>
        <li>Total Contributions: $5,000 + ($800 × 60) = <strong>$53,000</strong></li>
        <li>Total Interest Earned: $62,562 − $53,000 = <strong>$9,562</strong></li>
      </ul>

      <h3>How Long to Reach a Specific Goal</h3>
      <p>
        You can also use this calculator in reverse: set a target future value and adjust the inputs to find the right combination of initial deposit, monthly contribution, and time period to reach your goal. For example:
      </p>
      <ul>
        <li><strong>Goal of $100,000:</strong> $500/month at 7% for 11 years (starting from $0)</li>
        <li><strong>Goal of $250,000:</strong> $1,000/month at 7% for 13.5 years (starting from $0)</li>
        <li><strong>Goal of $1,000,000:</strong> $1,000/month at 8% for 29 years (starting from $0)</li>
      </ul>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Scenario</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Monthly</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Rate</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Years</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Future Value</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Interest Earned</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Conservative", monthly: 500, rate: 4, years: 10, initial: 0 },
              { name: "Moderate", monthly: 500, rate: 7, years: 10, initial: 0 },
              { name: "Aggressive", monthly: 500, rate: 10, years: 10, initial: 0 },
              { name: "Moderate + $1k/mo", monthly: 1000, rate: 7, years: 10, initial: 0 },
              { name: "Moderate + $5k start", monthly: 500, rate: 7, years: 10, initial: 5000 },
            ].map((row) => {
              const mr = row.rate / 100 / 12;
              const tm = row.years * 12;
              let fv;
              if (mr > 0) {
                const gf = Math.pow(1 + mr, tm);
                fv = row.initial * gf + row.monthly * ((gf - 1) / mr);
              } else {
                fv = row.initial + row.monthly * tm;
              }
              const tc = row.initial + row.monthly * tm;
              const interest = fv - tc;
              return (
                <tr key={row.name} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{row.name}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${row.monthly.toLocaleString()}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{row.rate}%</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{row.years}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-medium text-green-600 dark:text-green-400">${Math.round(fv).toLocaleString()}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${Math.round(interest).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Assumes monthly compounding. Actual returns vary based on market conditions and investment choices.
        </p>
      </div>

      <h2>The Power of Compound Interest</h2>
      <p>
        Albert Einstein reportedly called compound interest the <strong>"eighth wonder of the world."</strong> Here is why: when you earn interest on your savings, that interest itself begins earning interest. Over time, this creates an exponential growth effect that turns modest regular contributions into substantial wealth.
      </p>
      <p>
        For example, saving <strong>$500 per month</strong> for 30 years at <strong>7% annual return</strong> results in a future value of approximately <strong>$567,000</strong> — even though you only contributed <strong>$180,000</strong> out of pocket. The remaining <strong>$387,000</strong> is compound interest working for you.
      </p>
      <p>
        The key variables that determine your savings outcome are:
      </p>
      <ul>
        <li><strong>Time:</strong> The single most important factor. Starting 10 years earlier can more than double your ending balance.</li>
        <li><strong>Rate of Return:</strong> Even 1-2% more per year makes a dramatic difference over decades.</li>
        <li><strong>Consistency:</strong> Regular contributions, even small ones, harness the power of dollar-cost averaging.</li>
        <li><strong>Starting Early:</strong> A person who saves $300/month from age 25 to 35 and then stops will likely have more at retirement than someone who saves $300/month from age 35 to 65.</li>
      </ul>

      <h2>Savings Strategies for Different Goals</h2>
      <h3>Retirement Savings</h3>
      <p>
        For long-term retirement savings, use an expected return of <strong>7-10%</strong> for stock-heavy portfolios (based on historical S&P 500 returns) or <strong>5-7%</strong> for balanced portfolios. Tax-advantaged accounts like <strong>401(k)s</strong>, <strong>Traditional IRAs</strong>, and <strong>Roth IRAs</strong> offer significant tax benefits that can accelerate your progress. Use our{' '}
        <Link href="/calculators/roth-vs-traditional-ira-calculator-2026"><strong>Roth vs Traditional IRA Calculator</strong></Link> to compare account types, and explore our{' '}
        <Link href="/calculators/solo-401k-contribution-calculator"><strong>Solo 401k Calculator</strong></Link> if you are self-employed.
      </p>

      <h3>Education Savings</h3>
      <p>
        For college savings, <strong>529 plans</strong> offer tax-free growth and withdrawals for qualified education expenses. Expected returns for age-based 529 portfolios typically range from <strong>4-7%</strong>. The earlier you start, the more time your money has to grow. Our{' '}
        <Link href="/calculators/college-savings-calculator-2026"><strong>College Savings Calculator</strong></Link> offers detailed projections for 529 plans including state tax deductions.
      </p>

      <h3>Emergency Fund</h3>
      <p>
        For emergency savings, keep your money in a high-yield savings account with expected returns of <strong>3.5-5%</strong> in 2026. The priority here is <strong>safety and liquidity</strong>, not maximum returns. Our{' '}
        <Link href="/calculators/emergency-fund-calculator"><strong>Emergency Fund Calculator</strong></Link> helps you determine the right target for your situation.
      </p>

      <h3>Major Purchase (Home, Car, etc.)</h3>
      <p>
        For goals within 1-5 years, consider using a high-yield savings account or a conservative balanced fund (3-5% expected return). For goals 5+ years away, you can afford to take more risk with a diversified portfolio (5-7% expected return). The key is matching your investment horizon with appropriate risk levels.
      </p>

      {/* Data Sources & Methodology */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Savings Goal Calculator uses the standard <strong>future value of an annuity formula</strong> with monthly compounding, which is the industry standard for projecting savings growth. All calculations are verified against financial calculator standards.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Compound Interest Formula:</strong>{" "}
          <a href="https://www.investor.gov/introduction-investing/investing-basics/compound-interest" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            SEC Investor.gov — Compound Interest
          </a>
          . Official SEC guide to how compound interest works.
        </li>
        <li>
          <strong>Historical Returns:</strong>{" "}
          <a href="https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Investopedia — S&P 500 Historical Returns
          </a>
          . Average annual return of approximately 7-10% after inflation.
        </li>
        <li>
          <strong>529 Plan Guidance:</strong>{" "}
          <a href="https://www.savingforcollege.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Saving for College
          </a>
          . Comprehensive 529 plan research and comparison tools.
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Future value = initial deposit × (1 + r)^n + monthly contribution × [((1 + r)^n − 1) / r], where r is the monthly interest rate and n is the total number of months. Interest earned = future value − total contributions.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>How much should I save each month?</h3>
      <p>
        A common guideline is the <strong>50/30/20 rule</strong>: 50% of income for needs, 30% for wants, and <strong>20% for savings and debt repayment</strong>. If you earn $60,000/year, that means saving approximately <strong>$1,000/month</strong>. However, the right amount depends on your specific goals, timeline, and current financial situation. Start with whatever you can afford, even if it is $50/month, and increase the amount over time.
      </p>
      <h3>What is a realistic rate of return to use?</h3>
      <p>
        For <strong>stock market investments</strong> (S&P 500 index funds), use <strong>7-10%</strong> before inflation or <strong>4-7%</strong> after inflation. For <strong>balanced portfolios</strong> (60% stocks / 40% bonds), use <strong>5-7%</strong>. For <strong>high-yield savings accounts</strong>, use <strong>3.5-5%</strong> in 2026. For <strong>conservative projections</strong>, use 4-5% to account for potential lower returns. Always remember: past performance does not guarantee future results.
      </p>
      <h3>How does compound interest work?</h3>
      <p>
        Compound interest is <strong>interest on interest</strong>. When you earn interest on your savings, that interest is added to your principal, and then the next interest calculation is based on this larger amount. Over time, this creates exponential growth. For example, $10,000 invested at 7% annual return grows to $19,672 in 10 years, $38,697 in 20 years, and $76,123 in 30 years — with the <strong>majority of growth happening in the later years</strong>. This is why starting early is the most powerful factor in building wealth.
      </p>
      <h3>How long will it take to save $1 million?</h3>
      <p>
        At a <strong>7% annual return</strong>: Saving $500/month takes approximately 41 years. Saving $1,000/month takes approximately 29 years. Saving $1,500/month takes approximately 23 years. At a <strong>10% annual return</strong>: Saving $500/month takes 32 years. Saving $1,000/month takes 23 years. These timelines shorten significantly if you increase your contributions over time (e.g., increasing by 3% annually to match salary growth).
      </p>
      <h3>Should I pay off debt or save first?</h3>
      <p>
        Generally, <strong>pay off high-interest debt first</strong> (credit cards over 15% APR), then focus on building savings. For low-interest debt (mortgage under 5%, student loans under 5%), it often makes sense to invest rather than accelerate payoff, especially if you expect investment returns higher than your interest rate. However, there is a <strong>psychological benefit</strong> to being debt-free that goes beyond pure math. Build a small emergency fund ($1,000-2,000) first regardless of your debt situation.
      </p>
      <h3>What is the difference between simple and compound interest?</h3>
      <p>
        <strong>Simple interest</strong> is calculated only on your original principal. If you deposit $10,000 at 5% simple interest, you earn $500 every year — always on the same $10,000. <strong>Compound interest</strong> is calculated on your principal plus previously earned interest. With annual compounding at 5%, the first year you earn $500 (on $10,000), the second year you earn $525 (on $10,500), the third year $551.25 (on $11,025), and so on. Over 30 years, $10,000 at 5% simple interest grows to $25,000, while at 5% compound interest it grows to <strong>$43,219</strong> — a difference of over <strong>$18,000</strong>.
      </p>
      <h3>How does inflation affect my savings goal?</h3>
      <p>
        Inflation reduces the <strong>purchasing power</strong> of your savings over time. If inflation averages 3% per year, $100 today will be worth only about <strong>$74 in 10 years</strong> and <strong>$55 in 20 years</strong>. When setting a savings goal, consider using a <strong>real rate of return</strong> (nominal return minus inflation) to project your purchasing power. For example, if you expect 7% nominal returns and 3% inflation, use 4% as your real return. Our{' '}
        <Link href="/calculators/inflation-calculator"><strong>Inflation Calculator</strong></Link> can help you understand how inflation impacts your savings.
      </p>

      <h2>Related Tools</h2>
      <p>Check out these other helpful calculators for your savings and financial planning:</p>
      <ul>
        <li><Link href="/calculators/retirement-savings-calculator-2026">Retirement Savings Calculator</Link> — Project your retirement nest egg with the 4% rule.</li>
        <li><Link href="/calculators/college-savings-calculator-2026">College Savings Calculator</Link> — Plan 529 plan contributions for education funding.</li>
        <li><Link href="/calculators/emergency-fund-calculator">Emergency Fund Calculator</Link> — Determine your emergency savings target.</li>
        <li><Link href="/calculators/inflation-calculator">Inflation Calculator</Link> — See how inflation impacts the purchasing power of your savings.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to setting and achieving savings goals, read our blog post:{" "}
          <a href="/blog/savings-goal-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Savings Goal Calculator Guide 2026
          </a>
          .
        </p>
      </div>

      <RelatedCalculators currentPage="savings-goal-calculator" />

      </>
  );
}

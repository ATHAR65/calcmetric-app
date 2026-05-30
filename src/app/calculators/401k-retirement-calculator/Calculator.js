"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import SelectField from "@/components/SelectField";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtWhole = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function Calculator() {
  const [currentBalance, setCurrentBalance] = useState("10000");
  const [annualSalary, setAnnualSalary] = useState("60000");
  const [contributionPct, setContributionPct] = useState("10");
  const [employerMatch, setEmployerMatch] = useState("4");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [years, setYears] = useState("30");
  const [age, setAge] = useState("35");
  const [matchType, setMatchType] = useState("dollar");

  const balance = parseFloat(currentBalance) || 0;
  const salary = parseFloat(annualSalary) || 0;
  const contribPct = parseFloat(contributionPct) || 0;
  const match = parseFloat(employerMatch) || 0;
  const rate = parseFloat(annualReturn) || 0;
  const periods = parseInt(years) || 0;
  const currentAge = parseInt(age) || 0;

  // Contribution calculations
  const annualContribution = salary * (contribPct / 100);
  const monthlyContribution = annualContribution / 12;

  // Employer match
  let employerAnnual = 0;
  if (matchType === "dollar") {
    employerAnnual = Math.min(annualContribution, match); // Dollar-for-dollar up to $X
  } else {
    // Percentage match: employer matches up to X% of salary
    employerAnnual = Math.min(annualContribution, salary * (match / 100));
  }
  const totalAnnualContribution = annualContribution + employerAnnual;
  const totalMonthlyContribution = totalAnnualContribution / 12;

  // Future value calculation (monthly compounding)
  const totalMonths = periods * 12;
  const monthlyRate = rate / 100 / 12;
  
  let futureValue = 0;
  let totalEmployeeContrib = 0;
  let totalEmployerContrib = 0;
  
  if (monthlyRate > 0) {
    const growthFactor = Math.pow(1 + monthlyRate, totalMonths);
    futureValue = balance * growthFactor + totalMonthlyContribution * ((growthFactor - 1) / monthlyRate);
  } else {
    futureValue = balance + totalMonthlyContribution * totalMonths;
  }
  
  totalEmployeeContrib = balance + annualContribution * periods;
  totalEmployerContrib = employerAnnual * periods;
  const totalContributions = totalEmployeeContrib + totalEmployerContrib;
  const totalGrowth = futureValue - totalContributions;

  // Monthly income at retirement (4% rule)
  const monthlyIncome = futureValue * 0.04 / 12;

  // Timeline
  const timeline = [];
  for (let y = 1; y <= periods; y++) {
    const m = y * 12;
    let val = 0;
    if (monthlyRate > 0) {
      const gf = Math.pow(1 + monthlyRate, m);
      val = balance * gf + totalMonthlyContribution * ((gf - 1) / monthlyRate);
    } else {
      val = balance + totalMonthlyContribution * m;
    }
    timeline.push({ year: y, value: val, age: currentAge + y });
  }

  const schemaData = {
    name: "401(k) Retirement Calculator 2026",
    description: "Project your 401(k) retirement savings growth with employer matching, compound interest, and contribution strategies. Free 2026 401(k) retirement planner for employees.",
    url: "https://www.themetricapp.com/calculators/401k-retirement-calculator",
  };

  return (
    <CalculatorShell
      title="401(k) Retirement Calculator 2026 — Project Your Nest Egg with Employer Match"
      subtitle="Estimate how your 401(k) retirement savings will grow over time, including employer matching contributions and compound interest. See your projected balance, total contributions, and estimated monthly retirement income."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Projected 401(k) Balance" value={fmtWhole(futureValue)} sub={`At age ${currentAge + periods} (${periods} years)`} highlight />
            <ResultCard label="Your Contributions" value={fmtWhole(totalEmployeeContrib)} sub={`${contribPct}% of $${(salary/1000).toFixed(0)}k salary`} />
            <ResultCard label="Employer Match" value={fmtWhole(totalEmployerContrib)} sub="Free money from your employer" />
            <ResultCard label="Investment Growth" value={fmtWhole(totalGrowth)} sub={`At ${rate}% annual return`} />
            <ResultCard label="Total Contributions" value={fmtWhole(totalContributions)} sub="You + Employer" />
            <ResultCard label="Est. Monthly Income" value={fmt(monthlyIncome)} sub="4% withdrawal rule at retirement" />
          </div>

          {timeline.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#6366F1] mb-3">Growth Over Time</p>
              <div className="space-y-1.5">
                {timeline.map((pt) => {
                  const maxVal = timeline[timeline.length - 1].value;
                  const pct = maxVal > 0 ? (pt.value / maxVal) * 100 : 0;
                  return (
                    <div key={pt.year} className="flex items-center gap-3 text-sm">
                      <span className="w-24 text-right text-[#64748B] shrink-0">Age {pt.age}</span>
                      <div className="flex-1 h-6 rounded-md bg-[#F1F5F9] dark:bg-slate-700 overflow-hidden">
                        <div
                          className="h-full rounded-md bg-gradient-to-r from-[#6366F1] to-[#818CF8] transition-all duration-500 flex items-center px-2"
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
        <InputField id="currentBalance" label="Current 401(k) Balance" value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)} prefix="$" placeholder="10000" helpText="What you have saved so far" />
        <InputField id="annualSalary" label="Annual Salary" value={annualSalary} onChange={(e) => setAnnualSalary(e.target.value)} prefix="$" placeholder="60000" helpText="Your gross annual income" />
        <InputField id="contributionPct" label="Your Contribution" value={contributionPct} onChange={(e) => setContributionPct(e.target.value)} suffix="%" placeholder="10" helpText="Percentage of salary you contribute" />
        <InputField id="annualReturn" label="Expected Annual Return" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} suffix="%" placeholder="7" helpText="Long-term average ~7% for S&P 500" />
        <InputField id="age" label="Your Current Age" value={age} onChange={(e) => setAge(e.target.value)} suffix="years" placeholder="35" helpText="Used to show age milestones" />
        <InputField id="years" label="Years Until Retirement" value={years} onChange={(e) => setYears(e.target.value)} suffix="years" placeholder="30" helpText="How many years until you retire" />
      </div>
      <div className="mt-5 p-4 bg-[#EEF2FF] dark:bg-[#6366F1]/10 rounded-xl border border-[#6366F1]/15">
        <p className="text-sm font-semibold text-[#6366F1] mb-3">🏢 Employer Match Settings</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectField
            id="matchType"
            label="Match Type"
            value={matchType}
            onChange={(e) => setMatchType(e.target.value)}
            options={[
              { value: "dollar", label: "Dollar-for-dollar (up to $X)" },
              { value: "percent", label: "Percentage match (up to X% of salary)" },
            ]}
          />
          <InputField id="employerMatch" label={matchType === "dollar" ? "Max Match ($)" : "Max Match (%)"} value={employerMatch} onChange={(e) => setEmployerMatch(e.target.value)} suffix={matchType === "dollar" ? "/yr" : "%"} placeholder={matchType === "dollar" ? "4000" : "4"} helpText={matchType === "dollar" ? "Employer matches up to this amount" : "Employer matches up to this % of salary"} />
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300"><strong>Last Updated:</strong> May 2026</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Author:</strong> Financial Metrics Team</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Sources:</strong>{" "}
            <a href="https://www.irs.gov/retirement-plans/401k-plans" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS — 401(k) Plans</a>
            {" · "}
            <a href="https://www.investopedia.com/terms/1/401kplan.asp" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Investopedia — 401(k) Guide</a>
          </span>
        </div>
      </div>

      <h2>How to Use the 401(k) Retirement Calculator</h2>
      <p>
        This 401(k) Retirement Calculator helps you project the growth of your retirement savings. Enter your <strong>current balance</strong>, <strong>annual salary</strong>, your <strong>contribution percentage</strong>, <strong>employer match</strong>, and <strong>expected annual return</strong> to see your projected balance at retirement.
      </p>
      <p>
        The calculator shows your <strong>projected 401(k) balance</strong>, <strong>your total contributions</strong>, <strong>employer match total</strong>, <strong>investment growth</strong>, and <strong>estimated monthly retirement income</strong> using the 4% withdrawal rule. It also includes an age-based growth timeline so you can track your progress year by year.
      </p>
      <p>
        <strong>Pro tip:</strong> Try increasing your contribution by just 1-2% to see how it compounds over decades. Even small increases today can mean tens of thousands more at retirement.
      </p>

      <h2>401(k) Formula & Methodology</h2>
      <p><strong>Future Value = P × (1 + r)^n + PMT × [((1 + r)^n − 1) / r]</strong></p>
      <p>Where:</p>
      <ul>
        <li><strong>P</strong> = Current 401(k) balance</li>
        <li><strong>PMT</strong> = Total monthly contribution (your contribution + employer match)</li>
        <li><strong>r</strong> = Monthly return rate (annual return ÷ 12)</li>
        <li><strong>n</strong> = Total months until retirement</li>
      </ul>

      <h3>Example — Maxing Your 401(k) Over 30 Years</h3>
      <p><strong>Scenario:</strong> Sarah, age 35, earns $75,000/year and contributes 15% ($11,250/year). Her employer matches 100% of the first 4% ($3,000/year). She has $25,000 saved already and expects 7% annual returns.</p>
      <ul>
        <li>Annual Contribution: $75,000 × 15% = <strong>$11,250</strong></li>
        <li>Employer Match: $75,000 × 4% = <strong>$3,000</strong></li>
        <li>Total Annual: $11,250 + $3,000 = <strong>$14,250</strong></li>
        <li>Monthly Contribution: $14,250 ÷ 12 = <strong>$1,187.50</strong></li>
      </ul>
      <p><strong>After 30 years (age 65):</strong></p>
      <ul>
        <li>Growth Factor at 7%: (1 + 0.07/12)^360 = <strong>8.116</strong></li>
        <li>Future Value of $25,000: $25,000 × 8.116 = <strong>$202,900</strong></li>
        <li>Future Value of Contributions: $1,187.50 × [(8.116 − 1) / (0.07/12)] = <strong>$1,446,000</strong></li>
        <li>Total Projected Balance: ~<strong>$1,649,000</strong></li>
        <li>Her Contributions: $25,000 + ($11,250 × 30) = <strong>$362,500</strong></li>
        <li>Employer Contributions: $3,000 × 30 = <strong>$90,000</strong></li>
        <li>Investment Growth: $1,649,000 − $452,500 = <strong>$1,196,500</strong></li>
        <li>Estimated Monthly Income (4% rule): ~<strong>$5,497</strong></li>
      </ul>

      <h3>2026 401(k) Contribution Limits</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Limit Type</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">2026 Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50"><td className="border px-4 py-3 font-medium">Employee Elective Deferral (under 50)</td><td className="border px-4 py-3 text-right"><strong>$23,500</strong></td></tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50"><td className="border px-4 py-3 font-medium">Catch-Up Contribution (age 50+)</td><td className="border px-4 py-3 text-right"><strong>$7,500</strong></td></tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50"><td className="border px-4 py-3 font-medium">Super Catch-Up (ages 60-63, SECURE 2.0)</td><td className="border px-4 py-3 text-right"><strong>$11,250</strong></td></tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50"><td className="border px-4 py-3 font-medium">Total Employer + Employee Limit</td><td className="border px-4 py-3 text-right"><strong>$70,000</strong></td></tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">* Based on IRS guidelines for 2026. SECURE 2.0 increased catch-up for ages 60-63.</p>
      </div>

      <h2>Why Your 401(k) is the Most Powerful Retirement Tool</h2>
      <p>A 401(k) offers three massive advantages over regular taxable accounts:</p>
      <ul>
        <li><strong>Tax-deferred growth:</strong> Your contributions reduce your taxable income today, and your money grows tax-free until withdrawal. In 2026, contributing $23,500 saves you approximately $5,875 in federal taxes if you are in the 25% bracket.</li>
        <li><strong>Employer match = free money:</strong> If your employer offers a 4% match, that is a guaranteed 100% return on the first 4% you contribute. Not contributing enough to get the full match is literally leaving free money on the table.</li>
        <li><strong>High contribution limits:</strong> At $23,500 (2026), the 401(k) allows far more tax-advantaged saving than an IRA ($7,000). Combined with employer match, you can put away $70,000/year total.</li>
      </ul>

      <h2>401(k) Investment Strategies</h2>
      <h3>Target-Date Funds</h3>
      <p>The most popular 401(k) investment. A 2055 target-date fund automatically shifts from stocks to bonds as you approach retirement. They are a great default choice for hands-off investors.</p>
      <h3>Index Fund Portfolio</h3>
      <p>For lower fees and more control, build a simple portfolio: 80-90% S&P 500 index fund and 10-20% bond index fund. Rebalance annually. This approach has historically returned 7-10% annually with minimal fees.</p>
      <h3>Roth 401(k) Option</h3>
      <p>Many employers now offer a Roth 401(k) option. You contribute after-tax dollars, but qualified withdrawals in retirement are tax-free. This is powerful if you expect to be in a higher tax bracket in retirement.</p>

      <h2>How Employer Matching Works</h2>
      <p>Common employer match structures include:</p>
      <ul>
        <li><strong>100% match on first 4%:</strong> You contribute 4%, employer adds 4%. Instant 100% return.</li>
        <li><strong>50% match on first 6%:</strong> You contribute 6%, employer adds 3%. Still a great 50% return.</li>
        <li><strong>Safe harbor match:</strong> Employer must contribute 3% of salary regardless, or 100% on first 3% plus 50% on next 2%.</li>
        <li><strong>Profit-sharing:</strong> Employer contributes a percentage of profits — varies year to year.</li>
      </ul>
      <p><strong>Always contribute at least enough to get the full employer match.</strong> It is the closest thing to free money in personal finance.</p>

      <h2>Data Sources & Methodology</h2>
      <ul>
        <li><a href="https://www.irs.gov/retirement-plans/401k-plans" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS — 401(k) Contribution Limits</a></li>
        <li><a href="https://www.investopedia.com/terms/1/401kplan.asp" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Investopedia — 401(k) Plan Guide</a></li>
        <li><a href="https://www.nerdwallet.com/article/investing/401k" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">NerdWallet — 401(k) Guide</a></li>
      </ul>
      <p><strong>Methodology:</strong> Future value is calculated using the standard compound interest formula with monthly compounding. Estimated retirement income uses the 4% safe withdrawal rule (Bengen, 1994). Past performance does not guarantee future results.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>How much should I contribute to my 401(k)?</h3>
      <p>At minimum, contribute enough to get the full employer match (typically 4-6% of salary). The ideal target is 15% of your gross income including employer match. In 2026, the maximum employee contribution is $23,500 ($31,000 if age 60-63). A common strategy: contribute 10-15% consistently throughout your career.</p>
      <h3>Should I choose traditional or Roth 401(k)?</h3>
      <p>A Traditional 401(k) saves you taxes now (contributions are pre-tax), which is ideal if you are in a high tax bracket today. A Roth 401(k) saves you taxes later (withdrawals are tax-free), which is ideal if you expect higher income in retirement. Many financial advisors recommend having some of both for tax diversification.</p>
      <h3>What happens to my 401(k) when I change jobs?</h3>
      <p>You have four options: (1) Leave it in your former employer's plan, (2) Roll it into your new employer's 401(k), (3) Roll it into a Traditional IRA (more investment choices), or (4) Cash out (not recommended — you will pay income tax plus a 10% penalty). Rolling over to an IRA or new 401(k) is typically the best choice.</p>
      <h3>Can I withdraw from my 401(k) early?</h3>
      <p>Early withdrawals before age 59½ are subject to a 10% penalty plus ordinary income tax. Exceptions include: financial hardship, first-time home purchase ($10,000 limit), disability, medical expenses exceeding 7.5% of AGI, and substantially equal periodic payments (72t). Loans from your 401(k) (up to $50,000 or 50% of vested balance) are allowed by most plans without penalty.</p>
      <h3>What is the 4% rule?</h3>
      <p>The 4% rule, developed by financial advisor Bill Bengen in 1994, suggests that retirees can withdraw 4% of their portfolio in the first year of retirement, then adjust that amount for inflation each year, with a high probability of their savings lasting 30+ years. For a $1 million portfolio, that means withdrawing $40,000 in the first year ($3,333/month).</p>

      <h2>Related Tools</h2>
      <ul>
        <li><Link href="/calculators/roth-ira-growth-calculator">Roth IRA Growth Calculator</Link> — Compare Roth IRA growth vs 401(k).</li>
        <li><Link href="/calculators/roth-vs-traditional-ira-calculator-2026">Roth vs Traditional IRA Calculator</Link> — Choose the right IRA type.</li>
        <li><Link href="/calculators/solo-401k-contribution-calculator">Solo 401k Contribution Calculator</Link> — For self-employed professionals.</li>
        <li><Link href="/calculators/retirement-savings-calculator-2026">Retirement Savings Calculator</Link> — Full retirement planning with the 4% rule.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to maximizing your 401(k), read our blog post:{" "}
          <a href="/blog/401k-retirement-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            401(k) Retirement Calculator Guide 2026
          </a>.
        </p>
      </div>

      <RelatedCalculators currentPage="401k-retirement-calculator" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", "name": "401(k) Retirement Calculator 2026", "url": "https://www.themetricapp.com/calculators/401k-retirement-calculator", "description": "Project your 401(k) retirement savings growth with employer matching and compound interest.", "applicationCategory": "FinanceApplication", "operatingSystem": "Web Browser", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "How much should I contribute to my 401(k)?", acceptedAnswer: { "@type": "Answer", text: "At minimum, contribute enough to get the full employer match (4-6%). The ideal target is 15% of gross income including employer match. Max is $23,500 in 2026." } },
        { "@type": "Question", name: "Should I choose traditional or Roth 401(k)?", acceptedAnswer: { "@type": "Answer", text: "Traditional saves taxes now (pre-tax contributions). Roth saves taxes later (tax-free withdrawals). Having some of both provides tax diversification in retirement." } },
        { "@type": "Question", name: "What happens to my 401(k) when I change jobs?", acceptedAnswer: { "@type": "Answer", text: "Options: leave it, roll into new employer's plan, roll into IRA, or cash out (not recommended — 10% penalty + income tax). Rolling over is typically best." } },
        { "@type": "Question", name: "What is the 4% rule?", acceptedAnswer: { "@type": "Answer", text: "The 4% rule says retirees can withdraw 4% of their portfolio in year one, adjust for inflation, and have a high probability of savings lasting 30+ years." } },
      ] }) }} />
    </>
  );
}

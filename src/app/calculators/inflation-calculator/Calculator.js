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
  const [currentAmount, setCurrentAmount] = useState("10000");
  const [inflationRate, setInflationRate] = useState("3");
  const [timePeriod, setTimePeriod] = useState("10");

  const amount = parseFloat(currentAmount) || 0;
  const rate = parseFloat(inflationRate) || 0;
  const years = parseInt(timePeriod) || 0;

  // Future purchasing power = amount / (1 + rate)^years
  const rateDecimal = rate / 100;
  const inflationFactor = Math.pow(1 + rateDecimal, years);
  const futurePurchasingPower = amount / inflationFactor;
  const valueLost = amount - futurePurchasingPower;
  const percentLost = amount > 0 ? (valueLost / amount) * 100 : 0;

  // Amount needed in future to maintain same purchasing power
  const amountNeededFuture = amount * inflationFactor;

  // Year-by-year breakdown
  const timeline = [];
  for (let y = 1; y <= years; y++) {
    const factor = Math.pow(1 + rateDecimal, y);
    timeline.push({
      year: y,
      purchasingPower: amount / factor,
      requiredToMaintain: amount * factor,
    });
  }

  const schemaData = {
    name: "Inflation Calculator 2026",
    description: "Calculate how inflation affects the purchasing power of your money over time. See what your savings will be worth in the future with different inflation scenarios.",
    url: "https://www.themetricapp.com/calculators/inflation-calculator",
  };

  return (
    <CalculatorShell
      title="Inflation Calculator 2026 — See How Inflation Affects Your Purchasing Power"
      subtitle="Calculate how inflation erodes the purchasing power of your money over time. See exactly what your savings will be worth in the future and how much you need to keep pace with rising prices."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Future Purchasing Power" value={fmtWhole(futurePurchasingPower)} sub={`${fmtWhole(amount)} in ${years} years at ${rate}% inflation`} highlight />
            <ResultCard label="Value Lost to Inflation" value={fmtWhole(valueLost)} sub={`${percentLost.toFixed(1)}% of original value`} />
            <ResultCard label="Amount Needed to Keep Pace" value={fmtWhole(amountNeededFuture)} sub={`To maintain same buying power in ${years} years`} />
          </div>

          {/* Year-by-Year Breakdown */}
          {timeline.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#0D9488] mb-3">Value Over Time</p>
              <div className="space-y-1.5">
                {timeline.map((pt) => {
                  const maxVal = timeline[0].purchasingPower;
                  const pctLeft = maxVal > 0 ? (pt.purchasingPower / maxVal) * 100 : 0;
                  const pctLost = 100 - pctLeft;
                  return (
                    <div key={pt.year} className="flex items-center gap-3 text-sm">
                      <span className="w-16 text-right text-[#64748B] shrink-0">Year {pt.year}</span>
                      <div className="flex-1 h-6 rounded-md bg-[#F1F5F9] dark:bg-slate-700 overflow-hidden flex">
                        <div
                          className="h-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] transition-all duration-500 flex items-center px-2 shrink-0"
                          style={{ width: Math.max(2, pctLeft) + "%" }}
                        >
                          <span className="text-xs font-semibold text-white whitespace-nowrap">
                            {fmtWhole(pt.purchasingPower)}
                          </span>
                        </div>
                        <div
                          className="h-full bg-red-400/30 dark:bg-red-800/30 transition-all duration-500"
                          style={{ width: Math.max(0, pctLost) + "%" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-4 mt-2 text-xs text-[#94A3B8]">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#0D9488]"></span> Remaining Value</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-400/50"></span> Lost to Inflation</span>
              </div>
            </div>
          )}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="currentAmount" label="Current Amount" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} prefix="$" placeholder="10000" helpText="Amount of money you have today" />
        <InputField id="inflationRate" label="Inflation Rate" value={inflationRate} onChange={(e) => setInflationRate(e.target.value)} suffix="%" placeholder="3" helpText="Expected annual inflation rate" />
        <InputField id="timePeriod" label="Time Period" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} suffix="years" placeholder="10" helpText="How many years into the future" />
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
            <a href="https://www.bls.gov/cpi/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              BLS — Consumer Price Index (CPI)
            </a>
            {" · "}
            <a href="https://www.investopedia.com/terms/i/inflation.asp" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Investopedia — Inflation Guide
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Inflation Calculator</h2>
      <p>
        This Inflation Calculator helps you understand how inflation reduces the purchasing power of your money over time. Enter your <strong>current amount</strong>, the <strong>expected inflation rate</strong>, and the <strong>time period</strong> to see what your money will be worth in the future.
      </p>
      <p>
        The calculator shows your <strong>future purchasing power</strong>, the <strong>total value lost to inflation</strong>, and how much money you would need to maintain the same purchasing power. It also includes a year-by-year visual breakdown showing how your money's value declines over time, with the lost portion clearly indicated.
      </p>
      <p>
        <strong>Pro tip:</strong> Use different inflation rates to see the impact. The Federal Reserve targets 2% annual inflation, but real-world inflation has been 3-9% in recent years. Run scenarios at 2%, 3%, 5%, and even 8% to understand the range of possibilities.
      </p>

      <h2>Inflation Formula & Methodology</h2>
      <p>
        <strong>Future Purchasing Power = Current Amount ÷ (1 + Inflation Rate)^Years</strong>
      </p>
      <p>
        <strong>Example — $10,000 at 3% inflation for 10 years:</strong>
      </p>
      <ul>
        <li>Current Amount: <strong>$10,000</strong></li>
        <li>Inflation Rate: <strong>3%</strong> per year</li>
        <li>Time Period: <strong>10 years</strong></li>
        <li>Inflation Factor: (1 + 0.03)^10 = <strong>1.3439</strong></li>
        <li>Future Purchasing Power: $10,000 ÷ 1.3439 = <strong>$7,441</strong></li>
        <li>Value Lost to Inflation: $10,000 − $7,441 = <strong>$2,559</strong></li>
        <li>Percentage Lost: 25.6%</li>
        <li>Amount Needed to Maintain Purchasing Power: $10,000 × 1.3439 = <strong>$13,439</strong></li>
      </ul>

      <h3>How Inflation Calculations Change with Different Rates</h3>
      <p>
        <strong>At 2% inflation (Fed target):</strong><br />
        $10,000 in 10 years = <strong>$8,203</strong> purchasing power (18% lost)<br />
        $10,000 in 20 years = <strong>$6,730</strong> purchasing power (33% lost)<br />
        $10,000 in 30 years = <strong>$5,521</strong> purchasing power (45% lost)
      </p>
      <p>
        <strong>At 5% inflation:</strong><br />
        $10,000 in 10 years = <strong>$6,139</strong> purchasing power (39% lost)<br />
        $10,000 in 20 years = <strong>$3,769</strong> purchasing power (62% lost)<br />
        $10,000 in 30 years = <strong>$2,314</strong> purchasing power (77% lost)
      </p>
      <p>
        <strong>At 8% inflation:</strong><br />
        $10,000 in 10 years = <strong>$4,632</strong> purchasing power (54% lost)<br />
        $10,000 in 20 years = <strong>$2,145</strong> purchasing power (79% lost)<br />
        $10,000 in 30 years = <strong>$994</strong> purchasing power (90% lost)
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Time</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">2% Inflation</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">3% Inflation</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">4% Inflation</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">5% Inflation</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">8% Inflation</th>
            </tr>
          </thead>
          <tbody>
            {[5, 10, 15, 20, 25, 30].map((year) => (
              <tr key={year} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{year} years</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${Math.round(10000 / Math.pow(1.02, year)).toLocaleString()}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${Math.round(10000 / Math.pow(1.03, year)).toLocaleString()}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${Math.round(10000 / Math.pow(1.04, year)).toLocaleString()}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${Math.round(10000 / Math.pow(1.05, year)).toLocaleString()}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${Math.round(10000 / Math.pow(1.08, year)).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Values show the purchasing power of $10,000 at different inflation rates over time.
        </p>
      </div>

      <h2>Why Inflation Matters for Your Financial Planning</h2>
      <p>
        Inflation is often called the <strong>"silent wealth killer"</strong> because it steadily erodes the value of your money without you noticing day-to-day. Over a typical working career of 40 years, even moderate 3% inflation can reduce your purchasing power by over <strong>70%</strong>. This has profound implications for every aspect of financial planning:
      </p>
      <ul>
        <li><strong>Retirement savings:</strong> If you plan to need $50,000/year in today's dollars during retirement, at 3% inflation you will need approximately $101,000/year in 25 years — double today's amount.</li>
        <li><strong>Fixed-income investments:</strong> Bonds and CDs that pay 3-4% may look attractive, but after accounting for 3% inflation, the real return is only 0-1%. Your money is barely keeping pace with rising prices.</li>
        <li><strong>Cash savings:</strong> Money in a standard savings account (0.01% APY) loses significant purchasing power every year. At 3% inflation, $100 in a standard savings account is worth only $74 in 10 years — a 26% loss in real value.</li>
        <li><strong>Salary negotiations:</strong> If your salary increases by less than the inflation rate, you are effectively taking a pay cut. In 2021-2023, many workers experienced this as inflation outpaced wage growth by 2-4% per year.</li>
      </ul>

      <h2>Protecting Your Savings from Inflation</h2>
      <h3>1. Invest in Growth Assets</h3>
      <p>
        The most effective way to outpace inflation is to invest in assets that historically deliver returns above the inflation rate. <strong>Stocks (S&P 500)</strong> have returned approximately 7-10% annually over the long term, well above the 3% long-term average inflation rate. Our{' '}
        <Link href="/calculators/savings-goal-calculator"><strong>Savings Goal Calculator</strong></Link> can help you project how investing in growth assets can protect and grow your purchasing power.
      </p>

      <h3>2. Consider I Bonds and TIPS</h3>
      <p>
        <strong>Series I Savings Bonds</strong> from the US Treasury offer inflation-adjusted returns. The composite rate is a combination of a fixed rate plus a semi-annual inflation adjustment. In 2026, I Bonds yield approximately 4.5-5%. While they have a 12-month lockup and a 5-year interest penalty for early withdrawal, they are one of the safest ways to protect against inflation.
      </p>
      <p>
        <strong>TIPS (Treasury Inflation-Protected Securities)</strong> are US government bonds whose principal adjusts with the Consumer Price Index. If inflation rises, the value of your TIPS increases accordingly. They are available in 5, 10, and 30-year maturities and provide a guaranteed real return above inflation.
      </p>

      <h3>3. Real Estate and Tangible Assets</h3>
      <p>
        Real estate has historically been a strong inflation hedge because property values and rents tend to rise with inflation. Our{' '}
        <Link href="/calculators/rental-property-roi-calculator"><strong>Rental Property ROI Calculator</strong></Link> can help you evaluate real estate investments. Other inflation-resistant assets include commodities (gold, silver), infrastructure, and certain types of real estate investment trusts (REITs).
      </p>

      <h3>4. Increase Your Income</h3>
      <p>
        The best inflation hedge is your own earning potential. Developing skills, negotiating raises, changing jobs strategically, and building side income streams all help you stay ahead of rising prices. Our{' '}
        <Link href="/calculators/side-hustle-tax-calculator"><strong>Side Hustle Tax Calculator</strong></Link> can help you understand the net income from additional work.
      </p>

      <h2>Historical Inflation Rates in the US</h2>
      <ul>
        <li><strong>1914-2025 average:</strong> ~3.3% per year</li>
        <li><strong>1980s:</strong> Average ~5.6% (peaked at 14.8% in March 1980)</li>
        <li><strong>1990s:</strong> Average ~2.9%</li>
        <li><strong>2000s:</strong> Average ~2.5%</li>
        <li><strong>2010s:</strong> Average ~1.8%</li>
        <li><strong>2020-2025:</strong> Average ~4.5% (peaked at 9.1% in June 2022)</li>
        <li><strong>2026 (projected):</strong> ~3-4% (based on Fed forecasts and current economic conditions)</li>
      </ul>
      <p>
        The wide variation in inflation rates over time underscores why it is important to plan for different scenarios. Using the Inflation Calculator with rates of 2%, 3%, and 5% gives you a range of outcomes to plan for.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>What is inflation and how does it affect me?</h3>
      <p>
        Inflation is the <strong>general increase in prices</strong> for goods and services over time. As inflation rises, each dollar you have buys a smaller percentage of goods and services. For example, if inflation is 3% per year, something that costs $100 today will cost $103 next year, $106 the year after, and so on. Your purchasing power — what your money can actually buy — decreases unless your income and savings grow faster than inflation.
      </p>
      <h3>What is the current inflation rate in 2026?</h3>
      <p>
        As of 2026, the US inflation rate is approximately <strong>3-4%</strong>, down from the peak of 9.1% in June 2022 but still above the Federal Reserve's 2% target. Factors influencing 2026 inflation include ongoing supply chain adjustments, labor market dynamics, housing costs, and energy prices. The Fed has indicated it will maintain higher interest rates until inflation is convincingly under control.
      </p>
      <h3>How is inflation calculated?</h3>
      <p>
        The Bureau of Labor Statistics (BLS) calculates inflation using the <strong>Consumer Price Index (CPI)</strong>, which tracks the prices of a representative basket of goods and services including food, housing, transportation, healthcare, and education. The CPI measures price changes from a base year and is reported monthly. The "headline" inflation rate you see in the news is the year-over-year change in CPI.
      </p>
      <h3>How much does inflation reduce purchasing power over time?</h3>
      <p>
        At <strong>3% inflation</strong> (the long-term average): $100 today is worth about $97 next year, $74 in 10 years, $55 in 20 years, and $41 in 30 years. The math is: Future Value = Present Value ÷ (1 + inflation rate)^years. The higher the inflation rate or the longer the time period, the more dramatic the erosion of purchasing power.
      </p>
      <h3>How can I protect my savings from inflation?</h3>
      <p>
        The most effective strategies are: (1) <strong>Invest in stocks</strong> — the S&P 500 has historically returned 7-10%, well above inflation. (2) <strong>I Bonds and TIPS</strong> — government securities with inflation-adjusted returns. (3) <strong>Real estate</strong> — property values and rents tend to rise with inflation. (4) <strong>Increase your income</strong> — develop skills, change jobs, start a side hustle. Avoid keeping large amounts in low-interest savings accounts.
      </p>
      <h3>What is the difference between nominal and real returns?</h3>
      <p>
        <strong>Nominal return</strong> is the raw percentage gain on an investment before accounting for inflation. For example, a savings account paying 4% has a 4% nominal return. <strong>Real return</strong> is the nominal return minus the inflation rate, representing your actual increase in purchasing power. If inflation is 3%, a 4% nominal return provides only a 1% real return. When planning for long-term goals like retirement, use real returns to estimate what your savings will actually buy in the future.
      </p>

      <h2>Related Tools</h2>
      <p>Check out these other helpful calculators for your financial planning:</p>
      <ul>
        <li><Link href="/calculators/savings-goal-calculator">Savings Goal Calculator</Link> — Project your savings growth with compound interest.</li>
        <li><Link href="/calculators/retirement-savings-calculator-2026">Retirement Savings Calculator</Link> — Plan your retirement with the 4% rule.</li>
        <li><Link href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</Link> — See how inflation affects home buying power.</li>
        <li><Link href="/calculators/rental-property-roi-calculator">Rental Property ROI Calculator</Link> — Real estate as an inflation hedge.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to understanding inflation and protecting your savings, read our blog post:{" "}
          <a href="/blog/inflation-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Inflation Calculator Guide 2026
          </a>
          .
        </p>
      </div>

      <RelatedCalculators currentPage="inflation-calculator" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", "name": "Inflation Calculator 2026", "url": "https://www.themetricapp.com/calculators/inflation-calculator", "description": "Calculate how inflation affects the purchasing power of your money over time.", "applicationCategory": "FinanceApplication", "operatingSystem": "Web Browser", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" }, { "@type": "ListItem", "position": 2, "name": "Inflation Calculator", "item": "https://www.themetricapp.com/calculators/inflation-calculator" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "What is inflation and how does it affect my savings?", acceptedAnswer: { "@type": "Answer", text: "Inflation is the general increase in prices over time. As inflation rises, each dollar buys less. At 3% inflation, $100 today is worth $74 in 10 years. Your savings need to grow faster than inflation to maintain purchasing power." } },
        { "@type": "Question", name: "What is the current inflation rate in 2026?", acceptedAnswer: { "@type": "Answer", text: "As of 2026, the US inflation rate is approximately 3-4%, down from the 9.1% peak in June 2022 but still above the Federal Reserve's 2% target." } },
        { "@type": "Question", name: "How is inflation calculated?", acceptedAnswer: { "@type": "Answer", text: "The BLS calculates inflation using the Consumer Price Index (CPI), which tracks prices of a basket of goods and services including food, housing, transportation, healthcare, and education." } },
        { "@type": "Question", name: "How can I protect my savings from inflation?", acceptedAnswer: { "@type": "Answer", text: "Invest in stocks (S&P 500 averages 7-10%), I Bonds (inflation-adjusted), TIPS, real estate, or increase your income. Avoid keeping large amounts in low-interest savings accounts." } },
        { "@type": "Question", name: "What is the difference between nominal and real returns?", acceptedAnswer: { "@type": "Answer", text: "Nominal return is the raw percentage gain. Real return is nominal minus inflation. If you earn 4% and inflation is 3%, your real return is only 1%." } },
        { "@type": "Question", name: "How much purchasing power does $10,000 lose to inflation?", acceptedAnswer: { "@type": "Answer", text: "At 3% inflation over 10 years: $10,000 loses $2,559 in purchasing power. At 5% over 20 years: $10,000 loses $6,231. Use the Inflation Calculator to see different scenarios." } },
      ] }) }} />
    </>
  );
}

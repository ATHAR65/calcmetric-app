"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function Calculator() {
  // Assets
  const [cash, setCash] = useState("15000");
  const [investments, setInvestments] = useState("50000");
  const [retirement, setRetirement] = useState("75000");
  const [homeValue, setHomeValue] = useState("350000");
  const [otherProperty, setOtherProperty] = useState("25000");
  const [otherAssets, setOtherAssets] = useState("10000");

  // Liabilities
  const [mortgage, setMortgage] = useState("250000");
  const [carLoan, setCarLoan] = useState("15000");
  const [studentLoans, setStudentLoans] = useState("20000");
  const [creditCard, setCreditCard] = useState("5000");
  const [otherDebt, setOtherDebt] = useState("5000");

  // Parse assets
  const cashVal = parseFloat(cash) || 0;
  const investmentsVal = parseFloat(investments) || 0;
  const retirementVal = parseFloat(retirement) || 0;
  const homeVal = parseFloat(homeValue) || 0;
  const otherPropVal = parseFloat(otherProperty) || 0;
  const otherAssetVal = parseFloat(otherAssets) || 0;

  // Parse liabilities
  const mortgageVal = parseFloat(mortgage) || 0;
  const carLoanVal = parseFloat(carLoan) || 0;
  const studentLoanVal = parseFloat(studentLoans) || 0;
  const creditCardVal = parseFloat(creditCard) || 0;
  const otherDebtVal = parseFloat(otherDebt) || 0;

  // Totals
  const totalAssets = cashVal + investmentsVal + retirementVal + homeVal + otherPropVal + otherAssetVal;
  const totalLiabilities = mortgageVal + carLoanVal + studentLoanVal + creditCardVal + otherDebtVal;
  const netWorth = totalAssets - totalLiabilities;

  // Ratios
  const debtToAssetRatio = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;

  // Net worth status
  const netWorthStatus = netWorth < 0 ? "Negative" : netWorth < 10000 ? "Starting Out" : netWorth < 100000 ? "Building" : netWorth < 500000 ? "Established" : netWorth < 1000000 ? "Strong" : "Millionaire";
  const netWorthColor = netWorth < 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400";

  // Asset allocation
  const liquidAssets = cashVal + investmentsVal;
  const illiquidAssets = retirementVal + homeVal + otherPropVal + otherAssetVal;
  const liquidPct = totalAssets > 0 ? (liquidAssets / totalAssets) * 100 : 0;

  const schemaData = {
    name: "Net Worth Calculator 2026",
    description: "Calculate your net worth by adding up all assets and liabilities. Free 2026 net worth tracker with asset allocation analysis.",
    url: "https://www.themetricapp.com/calculators/net-worth-calculator",
  };

  return (
    <CalculatorShell
      title="Net Worth Calculator (2026)"
      subtitle="Add up all your assets and liabilities to calculate your net worth. Track your financial progress over time with this free calculator."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Total Assets" value={fmt(totalAssets)} sub="Everything you own" highlight />
          <ResultCard label="Total Liabilities" value={fmt(totalLiabilities)} sub="Everything you owe" />
          <ResultCard label="Net Worth" value={fmt(netWorth)} sub={<span className={netWorthColor}>{netWorthStatus}</span>} highlight />
          <ResultCard label="Debt-to-Asset Ratio" value={debtToAssetRatio.toFixed(1) + "%"} sub={debtToAssetRatio <= 30 ? "Healthy ✅" : debtToAssetRatio <= 50 ? "Moderate ⚠️" : "High ⚠️"} />
          <ResultCard label="Liquid Assets" value={fmt(liquidAssets)} sub={`${liquidPct.toFixed(0)}% of total assets`} />
          <ResultCard label="Home Equity" value={fmt(Math.max(0, homeVal - mortgageVal))} sub={`${homeVal > 0 ? ((Math.max(0, homeVal - mortgageVal) / homeVal) * 100).toFixed(0) : 0}% equity`} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="mb-4">
        <h3 className="text-sm font-bold text-[#0D9488] uppercase tracking-wider mb-3">💰 Assets (What You Own)</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="cash" label="Cash & Bank Accounts" value={cash} onChange={(e) => setCash(e.target.value)} prefix="$" placeholder="15000" helpText="Checking, savings, money market" />
        <InputField id="investments" label="Investments (Non-Retirement)" value={investments} onChange={(e) => setInvestments(e.target.value)} prefix="$" placeholder="50000" helpText="Stocks, bonds, crypto, brokerage" />
        <InputField id="retirement" label="Retirement Accounts" value={retirement} onChange={(e) => setRetirement(e.target.value)} prefix="$" placeholder="75000" helpText="401k, IRA, Roth IRA, pension value" />
        <InputField id="homeValue" label="Home Value (Estimate)" value={homeValue} onChange={(e) => setHomeValue(e.target.value)} prefix="$" placeholder="350000" helpText="Current market value estimate" />
        <InputField id="otherProperty" label="Other Property" value={otherProperty} onChange={(e) => setOtherProperty(e.target.value)} prefix="$" placeholder="25000" helpText="Cars, boats, jewelry, art, etc." />
        <InputField id="otherAssets" label="Other Assets" value={otherAssets} onChange={(e) => setOtherAssets(e.target.value)} prefix="$" placeholder="10000" helpText="Business equity, receivables" />
      </div>

      <div className="mt-6 mb-4">
        <h3 className="text-sm font-bold text-[#0D9488] uppercase tracking-wider mb-3">💳 Liabilities (What You Owe)</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="mortgage" label="Mortgage Balance" value={mortgage} onChange={(e) => setMortgage(e.target.value)} prefix="$" placeholder="250000" helpText="Remaining mortgage principal" />
        <InputField id="carLoan" label="Car Loans" value={carLoan} onChange={(e) => setCarLoan(e.target.value)} prefix="$" placeholder="15000" helpText="Total remaining on all auto loans" />
        <InputField id="studentLoans" label="Student Loans" value={studentLoans} onChange={(e) => setStudentLoans(e.target.value)} prefix="$" placeholder="20000" helpText="Federal and private student loans" />
        <InputField id="creditCard" label="Credit Card Debt" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} prefix="$" placeholder="5000" helpText="All credit card balances" />
        <InputField id="otherDebt" label="Other Debt" value={otherDebt} onChange={(e) => setOtherDebt(e.target.value)} prefix="$" placeholder="5000" helpText="Personal loans, medical debt, etc." />
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
            <a href="https://www.sec.gov/resources-for-investors" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              SEC Investor.gov
            </a>
            {" · "}
            <a href="https://www.federalreserve.gov/releases/z1/dataviz/summary/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Fed Flow of Funds
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Net Worth Calculator</h2>
      <p>
        This Net Worth Calculator helps you understand your complete financial picture. Enter your <strong>assets</strong> (what you own) and <strong>liabilities</strong> (what you owe) across all categories. The calculator instantly shows your <strong>total net worth</strong>, <strong>debt-to-asset ratio</strong>, <strong>liquid assets</strong>, and <strong>home equity</strong>.
      </p>
      <p>
        Net worth is the single most important metric for measuring financial health. Your net worth is calculated by subtracting everything you owe from everything you own. Tracking your net worth quarterly or annually helps you see if you are making real financial progress — even if your income fluctuates.
      </p>
      <p>
        The calculator divides assets into <strong>liquid</strong> (cash, investments) and <strong>illiquid</strong> (retirement accounts, home, property) categories so you can see how accessible your wealth really is. The debt-to-asset ratio shows how leveraged you are relative to your total assets.
      </p>

      <h2>Net Worth Formula & Methodology</h2>
      <h3>Net Worth Calculation</h3>
      <p>
        <strong>Net Worth = Total Assets − Total Liabilities</strong>
      </p>
      <p>
        <strong>Example — Typical American Household:</strong>
      </p>
      <ul>
        <li>Total Assets: $15,000 (cash) + $50,000 (investments) + $75,000 (retirement) + $350,000 (home) + $25,000 (property) + $10,000 (other) = <strong>$525,000</strong></li>
        <li>Total Liabilities: $250,000 (mortgage) + $15,000 (car) + $20,000 (student loans) + $5,000 (credit card) + $5,000 (other) = <strong>$295,000</strong></li>
        <li>Net Worth: $525,000 − $295,000 = <strong>$230,000</strong></li>
        <li>Debt-to-Asset Ratio: ($295,000 ÷ $525,000) × 100 = <strong>56.2%</strong></li>
      </ul>

      <h3>Asset Allocation</h3>
      <p>
        Liquid Assets = Cash + Non-Retirement Investments. These are assets you can access within days without penalty. Liquid percentage = Liquid Assets ÷ Total Assets × 100. A healthy liquid percentage depends on your stage of life — younger investors typically have a higher percentage of liquid assets, while older homeowners may have most of their wealth tied up in home equity and retirement accounts.
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Net Worth Milestone</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Status</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Typical Age Range</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Key Characteristics</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Below $0</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-red-600 font-medium">Negative Net Worth</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Any age</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Debt exceeds assets</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$0 – $10k</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-yellow-600 font-medium">Starting Out</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">18–25</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Early career, building foundation</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$10k – $100k</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-yellow-600 font-medium">Building</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">25–35</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Emergency fund, investments, home down payment</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$100k – $500k</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 font-medium">Established</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">35–50</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Home equity, growing retirement accounts</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$500k – $1M</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 font-medium">Strong</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">45–60</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Nearing retirement, diversified portfolio</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">$1M+</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 font-medium">Millionaire</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">50+</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Financially independent, retirement optional</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Based on Federal Reserve Survey of Consumer Finances data. Individual results vary significantly.
        </p>
      </div>

      {/* Data Sources & Methodology */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Net Worth Calculator uses standard accounting principles (assets − liabilities = net worth) applied to personal finance.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>SEC Investor.gov:</strong>{" "}
          <a href="https://www.investor.gov/introduction-investing/investing-basics/save-and-invest-net-worth" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Net Worth Calculation Guidelines
          </a>
          . Official SEC methodology for calculating personal net worth.
        </li>
        <li>
          <strong>Federal Reserve:</strong>{" "}
          <a href="https://www.federalreserve.gov/releases/z1/dataviz/summary/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Flow of Funds Report (Z.1)
          </a>
          . Comprehensive US household balance sheet data.
        </li>
        <li>
          <strong>Fed Survey of Consumer Finances:</strong>{" "}
          <a href="https://www.federalreserve.gov/econres/scfindex.htm" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            SCF Data
          </a>
          . Used for net worth percentile benchmarks and age-based comparisons.
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Total assets = sum of all asset categories. Total liabilities = sum of all debt categories. Net worth = total assets − total liabilities. Debt-to-asset ratio = (total liabilities ÷ total assets) × 100. Liquid assets = cash + non-retirement investments. Home equity = home value − mortgage balance.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>What is a good net worth for my age?</h3>
      <p>
        The median net worth in the US by age group (Federal Reserve SCF 2022 data): <strong>Under 35</strong>: $39,000, <strong>35-44</strong>: $135,000, <strong>45-54</strong>: $247,000, <strong>55-64</strong>: $364,000, <strong>65+</strong>: $410,000. However, the recommended target is often calculated as: <strong>(Your Age × Your Annual Income) ÷ 10</strong>. For example, a 35-year-old earning $75,000 should aim for a net worth of ($35 × $75,000) ÷ 10 = $262,500. Remember that these are guidelines — focus on your own progress rather than comparing to others.
      </p>
      <h3>Should I include my home and retirement accounts in net worth?</h3>
      <p>
        <strong>Yes, include both.</strong> Your home is an asset at its current market value (not purchase price), and your mortgage is a liability. Retirement accounts (401k, IRA, Roth IRA) should be included at their current account value. Some financial experts argue you should track "investable net worth" (excluding home equity) separately for retirement planning, but for a complete financial picture, include everything. Just remember that home equity and retirement accounts are <strong>not liquid</strong> — you cannot easily access those funds without selling or paying penalties.
      </p>
      <h3>How often should I calculate my net worth?</h3>
      <p>
        <strong>Quarterly (every 3 months) is ideal</strong> for most people. Monthly tracking can lead to unnecessary stress from market fluctuations. Annual tracking may miss important trends. Quarterly review allows you to see progress, catch problems early (like credit card debt creeping up), and adjust your financial strategy. Many people find that checking their net worth quarterly is motivating and helps them stay focused on their financial goals.
      </p>
      <h3>What is a good debt-to-asset ratio?</h3>
      <p>
        A debt-to-asset ratio <strong>below 30%</strong> is considered healthy for most households. <strong>30-50%</strong> is moderate — you have significant leverage but manageable debt. <strong>Above 50%</strong> indicates high leverage and potential financial vulnerability. A young professional with student loans and a mortgage may have a high ratio but good future earning potential — context matters. The most important thing is that your ratio is <strong>trending downward</strong> over time as you pay down debt and build assets.
      </p>
      <h3>How can I increase my net worth?</h3>
      <p>
        There are only four ways to increase net worth: <strong>(1) Increase income</strong> — ask for a raise, start a side hustle, switch jobs, or invest in skills. <strong>(2) Reduce expenses</strong> — cut unnecessary spending and redirect savings to debt paydown or investment. <strong>(3) Pay down debt</strong> — especially high-interest debt like credit cards (15-25% APR). <strong>(4) Invest wisely</strong> — let compound interest work for you through diversified index funds, retirement accounts, and real estate. The most powerful strategy is combining all four: earn more, spend less, eliminate debt, and invest the difference.
      </p>
      <h3>What does negative net worth mean?</h3>
      <p>
        <strong>Negative net worth</strong> means your total liabilities exceed your total assets — you owe more than you own. This is common for recent graduates with student loans, first-time homebuyers who put down a small down payment, or anyone who has experienced a financial setback. Negative net worth is <strong>not necessarily a crisis</strong> if you have strong income and a plan to pay down debt. It only becomes a concern if it persists without improvement. Focus on increasing income, creating a budget, and systematically reducing debt through methods like the debt snowball or avalanche.
      </p>
      <h3>Should I include my car in net worth?</h3>
      <p>
        <strong>Yes, include your car</strong> as an asset at its current Kelley Blue Book or Edmunds estimated value, and include any remaining auto loan as a liability. Cars are depreciating assets — they lose 20-30% of their value in the first year alone. This is why many people have negative equity in their cars (they owe more than the car is worth). Including your car gives you an accurate picture of your true financial position, even if the net effect is often negative for newer vehicles.
      </p>

      <h2>Related Tools</h2>
      <p>Check out these other helpful calculators for your financial planning:</p>
      <ul>
        <li><a href="/calculators/emergency-fund-calculator">Emergency Fund Calculator</a> — Build your financial safety net.</li>
        <li><a href="/calculators/retirement-savings-calculator-2026">Retirement Savings Calculator</a> — Project your retirement savings growth.</li>
        <li><a href="/calculators/credit-card-payoff-calculator">Credit Card Payoff Calculator</a> — Compare snowball vs avalanche methods.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to understanding and improving your net worth, read our blog post:{" "}
          <a href="/blog/net-worth-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Net Worth Guide 2026
          </a>
          .
        </p>
      </div>

      <RelatedCalculators currentPage="net-worth-calculator" />

      </>
  );
}

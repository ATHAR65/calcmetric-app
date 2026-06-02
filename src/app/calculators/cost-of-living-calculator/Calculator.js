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
  const [salary, setSalary] = useState("75000");
  const [currentCityIndex, setCurrentCityIndex] = useState("100");
  const [targetCityIndex, setTargetCityIndex] = useState("145");
  const [currentCityName, setCurrentCityName] = useState("Dallas, TX");
  const [targetCityName, setTargetCityName] = useState("San Francisco, CA");

  const currentSalary = parseFloat(salary) || 0;
  const currentIndex = parseFloat(currentCityIndex) || 100;
  const targetIndex = parseFloat(targetCityIndex) || 100;

  // Equivalent salary = current salary * (target index / current index)
  const equivalentSalary = currentSalary * (targetIndex / currentIndex);
  const costDifference = ((targetIndex - currentIndex) / currentIndex) * 100;
  const salaryDifference = equivalentSalary - currentSalary;

  // Purchasing power of current salary in target city
  const purchasingPowerInTarget = currentSalary * (currentIndex / targetIndex);

  // How much of current buying power is retained
  const purchasingPowerRatio = targetIndex > 0 ? (currentIndex / targetIndex) * 100 : 0;

  const schemaData = {
    name: "Cost of Living Calculator 2026",
    description: "Compare the cost of living between two cities. Calculate the equivalent salary you need to maintain your current standard of living when moving to a new city.",
    url: "https://www.themetricapp.com/calculators/cost-of-living-calculator",
  };

  return (
    <CalculatorShell
      title="Cost of Living Calculator (2026)"
      subtitle="Compare the cost of living between any two cities in the US. Enter your current salary and city, plus your target city, to see how much you need to earn to maintain the same standard of living."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label={`Equivalent Salary in ${targetCityName || "Target City"}`} value={fmtWhole(equivalentSalary)} sub={costDifference >= 0 ? `${costDifference.toFixed(1)}% more than current` : `${Math.abs(costDifference).toFixed(1)}% less than current`} highlight />
            <ResultCard label="Salary Difference" value={salaryDifference >= 0 ? fmtWhole(salaryDifference) : `-${fmtWhole(Math.abs(salaryDifference))}`} sub={salaryDifference >= 0 ? `You would need ${fmtWhole(salaryDifference)} more` : `You would save ${fmtWhole(Math.abs(salaryDifference))}`} />
            <ResultCard label="Purchasing Power in Target" value={fmtWhole(purchasingPowerInTarget)} sub={`${fmtWhole(currentSalary)} buys only ${fmtWhole(purchasingPowerInTarget)} worth of goods`} />
          </div>

          {/* Cost of Living Bar Comparison */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-[#0D9488] mb-3">Cost of Living Index Comparison</p>
            <div className="space-y-3">
              {[
                { label: currentCityName || "Current City", index: currentIndex, color: "from-[#0D9488] to-[#14B8A6]" },
                { label: targetCityName || "Target City", index: targetIndex, color: "from-[#F59E0B] to-[#F97316]" },
              ].map((city) => {
                const maxIdx = Math.max(currentIndex, targetIndex, 100);
                const pct = (city.index / maxIdx) * 100;
                return (
                  <div key={city.label} className="flex items-center gap-3 text-sm">
                    <span className="w-32 text-right text-[#64748B] shrink-0 truncate">{city.label}</span>
                    <div className="flex-1 h-7 rounded-md bg-[#F1F5F9] dark:bg-slate-700 overflow-hidden">
                      <div
                        className={`h-full rounded-md bg-gradient-to-r ${city.color} transition-all duration-500 flex items-center px-2`}
                        style={{ width: Math.max(2, pct) + "%" }}
                      >
                        <span className="text-xs font-semibold text-white whitespace-nowrap">
                          Index: {city.index.toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-[#94A3B8] mt-2">
              US average = 100. Higher index = higher cost of living.
            </p>
          </div>
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="salary" label="Your Current Salary" value={salary} onChange={(e) => setSalary(e.target.value)} prefix="$" placeholder="75000" helpText="Your current annual income" />
        <InputField id="currentCityName" label="Current City Name" value={currentCityName} onChange={(e) => setCurrentCityName(e.target.value)} placeholder="Dallas, TX" helpText="Name of your current city" />
        <InputField id="currentCityIndex" label="Current City Cost Index" value={currentCityIndex} onChange={(e) => setCurrentCityIndex(e.target.value)} placeholder="100" helpText="Cost of living index for current city (US avg = 100)" />
        <InputField id="targetCityName" label="Target City Name" value={targetCityName} onChange={(e) => setTargetCityName(e.target.value)} placeholder="San Francisco, CA" helpText="Name of the city you are considering" />
        <InputField id="targetCityIndex" label="Target City Cost Index" value={targetCityIndex} onChange={(e) => setTargetCityIndex(e.target.value)} placeholder="145" helpText="Cost of living index for target city" />
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
            <a href="https://www.numbeo.com/cost-of-living/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Numbeo — Cost of Living Index
            </a>
            {" · "}
            <a href="https://www.nerdwallet.com/cost-of-living-calculator" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              NerdWallet Cost of Living Calculator
            </a>
            {" · "}
            <a href="https://www.bestplaces.net/cost-of-living/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              BestPlaces Cost of Living
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Cost of Living Calculator</h2>
      <p>
        This Cost of Living Calculator helps you compare the cost of living between two cities. Enter your <strong>current salary</strong>, your <strong>current city's cost of living index</strong>, and your <strong>target city's cost of living index</strong> to see the equivalent salary you would need to maintain your standard of living.
      </p>
      <p>
        The calculator shows your <strong>equivalent salary</strong> in the target city, the <strong>salary difference</strong> (how much more or less you would need to earn), and your <strong>purchasing power</strong> in the target city. It also includes a visual bar chart comparing the cost indices side by side.
      </p>
      <p>
        <strong>Pro tip:</strong> Use the default comparison (Dallas, TX vs San Francisco, CA) as a starting point, then try your own cities. The US average cost of living index is 100. Cities above 100 are more expensive; cities below 100 are cheaper.
      </p>

      <h2>Cost of Living Formula & Methodology</h2>
      <p>
        <strong>Equivalent Salary = Current Salary × (Target City Index / Current City Index)</strong>
      </p>
      <p>
        <strong>Purchasing Power = Current Salary × (Current City Index / Target City Index)</strong>
      </p>
      <p>
        <strong>Cost Difference % = ((Target Index − Current Index) / Current Index) × 100</strong>
      </p>
      <p>
        <strong>Example — Moving from Dallas, TX to San Francisco, CA:</strong>
      </p>
      <ul>
        <li>Current Salary: <strong>$75,000</strong></li>
        <li>Dallas Cost Index: <strong>100</strong> (near US average)</li>
        <li>San Francisco Cost Index: <strong>145</strong> (45% above US average)</li>
        <li>Equivalent Salary: $75,000 × (145 / 100) = <strong>$108,750</strong></li>
        <li>Salary Difference: $108,750 − $75,000 = <strong>+$33,750</strong></li>
        <li>Purchasing Power in SF: $75,000 × (100 / 145) = <strong>$51,724</strong></li>
        <li>Your $75,000 in San Francisco buys what $51,724 buys in Dallas</li>
      </ul>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">From → To</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Current Index</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Target Index</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Cost Difference</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Salary Needed</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Purchasing Power</th>
            </tr>
          </thead>
          <tbody>
            {[
              { from: "Dallas, TX", to: "Austin, TX", fromIdx: 100, toIdx: 105 },
              { from: "Dallas, TX", to: "San Francisco, CA", fromIdx: 100, toIdx: 145 },
              { from: "New York, NY", to: "Raleigh, NC", fromIdx: 150, toIdx: 95 },
              { from: "Los Angeles, CA", to: "Phoenix, AZ", fromIdx: 140, toIdx: 102 },
              { from: "Chicago, IL", to: "Nashville, TN", fromIdx: 110, toIdx: 98 },
              { from: "Seattle, WA", to: "Denver, CO", fromIdx: 135, toIdx: 115 },
            ].map((row, i) => {
              const equiv = 75000 * (row.toIdx / row.fromIdx);
              const diff = ((row.toIdx - row.fromIdx) / row.fromIdx) * 100;
              const pp = 75000 * (row.fromIdx / row.toIdx);
              return (
                <tr key={i} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{row.from} → {row.to}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{row.fromIdx}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{row.toIdx}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{diff >= 0 ? "+" : ""}{diff.toFixed(0)}%</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-medium text-green-600 dark:text-green-400">${Math.round(equiv).toLocaleString()}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${Math.round(pp).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Based on $75,000 salary. Actual costs vary by neighborhood, lifestyle, and family size.
        </p>
      </div>

      <h2>Understanding Cost of Living Indexes</h2>
      <p>
        The <strong>cost of living index</strong> compares the relative cost of living between cities, with the national average set at <strong>100</strong>. An index of 120 means a city is 20% more expensive than the US average; an index of 85 means it is 15% cheaper. The index is a composite of several categories with typical weightings:
      </p>
      <ul>
        <li><strong>Housing (30-35%):</strong> Rent, mortgage costs, property taxes, and utilities — the largest and most variable component</li>
        <li><strong>Groceries (15-20%):</strong> Food and household supplies at local stores</li>
        <li><strong>Transportation (15-20%):</strong> Gas, car insurance, public transit fares, and vehicle maintenance</li>
        <li><strong>Healthcare (10-15%):</strong> Health insurance premiums, doctor visits, and prescription costs</li>
        <li><strong>Utilities (5-10%):</strong> Electricity, gas, water, internet, and trash services</li>
        <li><strong>Miscellaneous (10-15%):</strong> Entertainment, dining out, clothing, and personal care</li>
      </ul>

      <h3>Sample Cost of Living Indexes for Major US Cities (2026)</h3>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">City</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Overall Index</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Housing</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Groceries</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Transport</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Healthcare</th>
            </tr>
          </thead>
          <tbody>
            {[
              { city: "San Francisco, CA", overall: 145, housing: 200, groceries: 130, transport: 125, healthcare: 120 },
              { city: "New York, NY (Manhattan)", overall: 150, housing: 220, groceries: 135, transport: 130, healthcare: 125 },
              { city: "Los Angeles, CA", overall: 140, housing: 185, groceries: 125, transport: 120, healthcare: 115 },
              { city: "Seattle, WA", overall: 135, housing: 170, groceries: 120, transport: 115, healthcare: 110 },
              { city: "Washington, DC", overall: 130, housing: 160, groceries: 115, transport: 110, healthcare: 108 },
              { city: "Boston, MA", overall: 125, housing: 150, groceries: 115, transport: 115, healthcare: 115 },
              { city: "Chicago, IL", overall: 110, housing: 120, groceries: 105, transport: 105, healthcare: 100 },
              { city: "Miami, FL", overall: 115, housing: 130, groceries: 110, transport: 105, healthcare: 105 },
              { city: "Dallas, TX", overall: 100, housing: 98, groceries: 100, transport: 100, healthcare: 98 },
              { city: "Atlanta, GA", overall: 98, housing: 95, groceries: 100, transport: 95, healthcare: 95 },
              { city: "Houston, TX", overall: 95, housing: 90, groceries: 97, transport: 95, healthcare: 95 },
              { city: "Phoenix, AZ", overall: 102, housing: 105, groceries: 100, transport: 100, healthcare: 98 },
              { city: "Denver, CO", overall: 115, housing: 135, groceries: 105, transport: 110, healthcare: 105 },
              { city: "Raleigh, NC", overall: 95, housing: 92, groceries: 98, transport: 95, healthcare: 90 },
              { city: "Nashville, TN", overall: 98, housing: 100, groceries: 98, transport: 95, healthcare: 95 },
              { city: "Austin, TX", overall: 105, housing: 115, groceries: 102, transport: 100, healthcare: 98 },
            ].map((city, i) => (
              <tr key={i} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{city.city}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">{city.overall}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{city.housing}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{city.groceries}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{city.transport}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{city.healthcare}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Index values are approximate for 2026. Actual indexes vary by source and methodology.
        </p>
      </div>

      <h2>Why Cost of Living Comparisons Matter</h2>
      <p>
        Understanding cost of living differences is crucial for making informed decisions about <strong>job offers</strong>, <strong>relocation</strong>, and <strong>salary negotiations</strong>. A $100,000 salary in San Francisco provides a very different standard of living than the same salary in Dallas or Raleigh.
      </p>
      <p>
        <strong>Key factors to consider when comparing cities:</strong>
      </p>
      <ul>
        <li><strong>Housing is the biggest differentiator.</strong> In expensive cities like San Francisco and New York, housing costs can be 2-3x the national average. This is the single largest line item in most budgets and the primary driver of cost of living differences.</li>
        <li><strong>Income taxes vary significantly.</strong> Nine states have no income tax (Texas, Florida, Nevada, etc.), while others like California and New York have top marginal rates over 10-13%. Use our{' '}
          <Link href="/calculators/texas-paycheck-calculator"><strong>Texas Paycheck Calculator</strong></Link>,{' '}
          <Link href="/calculators/california-1099-tax-calculator"><strong>California 1099 Tax Calculator</strong></Link>,{' '}
          <Link href="/calculators/new-york-paycheck-calculator-2026"><strong>New York Paycheck Calculator</strong></Link>, and{' '}
          <Link href="/calculators/florida-paycheck-calculator-2026"><strong>Florida Paycheck Calculator</strong></Link> to compare take-home pay.</li>
        <li><strong>Lifestyle costs differ.</strong> Eating out, entertainment, gym memberships, and services are generally more expensive in high-cost cities. However, high-cost cities often offer more free amenities (parks, museums, cultural events).</li>
        <li><strong>Salary growth potential matters.</strong> Higher cost cities often (but not always) offer higher salaries, faster career growth, and more opportunities. The long-term earning potential may offset the higher costs.</li>
        <li><strong>Commute costs add up.</strong> A longer commute in a cheaper suburb might offset housing savings through higher transportation costs. Factor in gas, tolls, parking, and vehicle wear and tear.</li>
      </ul>

      <h2>Strategies for Relocating to a Higher-Cost City</h2>
      <h3>1. Negotiate Based on Cost of Living</h3>
      <p>
        Use this calculator to determine the <strong>minimum salary you need</strong> to maintain your current standard of living. Come to negotiations prepared with this number. Remember that even if you get the equivalent salary, you should also factor in moving costs, security deposits, and the stress of transition.
      </p>

      <h3>2. Consider a Compromise Location</h3>
      <p>
        If the target city is too expensive, consider <strong>nearby suburbs</strong> or <strong>commuter towns</strong>. For example, living in Oakland instead of San Francisco can reduce housing costs by 30-40%, while living in Jersey City instead of Manhattan can save 20-30%. Commute costs and time are important tradeoffs to evaluate.
      </p>

      <h3>3. Look for Remote Work Opportunities</h3>
      <p>
        Remote work allows you to earn a <strong>high salary while living in a low-cost area</strong>. This is the most powerful wealth-building strategy available today. Many companies offer location-adjusted pay, but some pay based on the company's location regardless of where you live. A fully remote job paying San Francisco salaries while living in Dallas can effectively double your purchasing power.
      </p>

      <h3>4. Downsize Housing Expectations</h3>
      <p>
        In expensive cities, consider <strong>smaller apartments</strong>, <strong>roommates</strong>, or <strong>converting to renter status</strong> from homeowner. The same $2,500/month might rent a 1-bedroom in San Francisco, a 2-bedroom in Austin, or a 4-bedroom in Raleigh. Adjust your housing expectations to match the local market.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>What is a cost of living index?</h3>
      <p>
        A cost of living index is a <strong>numerical comparison</strong> of the prices of goods and services between geographic areas. The US national average is set at 100. A city with an index of 120 is 20% more expensive than average; an index of 80 means 20% cheaper. Indexes typically include housing, groceries, transportation, healthcare, and utilities.
      </p>
      <h3>Where can I find cost of living indexes for my cities?</h3>
      <p>
        Several free online sources provide cost of living index data: <strong>Numbeo</strong> (crowd-sourced, most comprehensive), <strong>BestPlaces</strong> (data from government and private sources), <strong>NerdWallet</strong> (simple comparison tool), and <strong>PayScale</strong> (focused on salary data). For the most accurate comparison, look at the specific categories that matter most to your lifestyle (housing, groceries, transportation).
      </p>
      <h3>Is salary the only factor to consider when moving?</h3>
      <p>
        No, <strong>salary is just one factor</strong>. Other important considerations include: <strong>career opportunities</strong> (growth potential, industry presence, networking), <strong>quality of life</strong> (crime rates, schools, healthcare, climate, recreation), <strong>family considerations</strong> (school districts, childcare costs, family proximity), <strong>state and local taxes</strong>, <strong>housing market conditions</strong>, and <strong>personal preferences</strong> (urban vs suburban, climate, culture).
      </p>
      <h3>How often do cost of living indexes change?</h3>
      <p>
        Cost of living indexes are typically <strong>updated quarterly or semi-annually</strong>. The most volatile component is usually housing, which can change significantly in fast-growing or declining markets. During periods of high inflation (like 2021-2023), indexes across all cities rose, but the relative differences between cities remained fairly stable.
      </p>
      <h3>Do I need to consider taxes separately?</h3>
      <p>
        <strong>Yes.</strong> Cost of living indexes typically do not include income taxes (state and local), which can vary dramatically. A city with a moderate cost index but high state income tax might be more expensive overall than a city with a higher index but no income tax. Always combine cost of living data with state and local tax calculations using our paycheck calculators.
      </p>
      <h3>How accurate are cost of living comparisons?</h3>
      <p>
        Cost of living comparisons are <strong>directional indicators, not precise measurements</strong>. Your actual cost difference will depend on your specific spending patterns. A family with children spending heavily on housing and education will experience a different cost of living difference than a single person spending more on dining and entertainment. Use the calculator as a starting point and adjust based on your personal situation.
      </p>

      <h2>Related Tools</h2>
      <p>Check out these other helpful calculators for your relocation and financial planning:</p>
      <ul>
        <li><Link href="/calculators/texas-paycheck-calculator">Texas Paycheck Calculator</Link> — Calculate take-home pay in Texas (no state income tax).</li>
        <li><Link href="/calculators/california-1099-tax-calculator">California 1099 Tax Calculator</Link> — Estimate taxes in a high-tax state.</li>
        <li><Link href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</Link> — See how much house you can afford in different cities.</li>
        <li><Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link> — Track your financial health before and after relocation.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to comparing cost of living between cities, read our blog post:{" "}
          <a href="/blog/cost-of-living-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Cost of Living Calculator Guide 2026
          </a>
          .
        </p>
      </div>

      <RelatedCalculators currentPage="cost-of-living-calculator" />

      </>
  );
}

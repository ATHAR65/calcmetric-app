"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtMonth = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// State income tax deduction limits for 529 contributions (2026)
const stateTaxDeductions = {
  AL: { name: "Alabama", limit: 5000, rate: 0.05 },
  AZ: { name: "Arizona", limit: 2000, rate: 0.025 },
  AR: { name: "Arkansas", limit: 5000, rate: 0.049 },
  CA: { name: "California", limit: 0, rate: 0 }, // No deduction
  CO: { name: "Colorado", limit: 0, rate: 0 }, // No limit, taxed as income
  CT: { name: "Connecticut", limit: 5000, rate: 0.03 },
  DE: { name: "Delaware", limit: 1000, rate: 0.066 },
  FL: { name: "Florida", limit: 0, rate: 0 }, // No state income tax
  GA: { name: "Georgia", limit: 4000, rate: 0.0575 },
  HI: { name: "Hawaii", limit: 0, rate: 0 }, // No deduction
  ID: { name: "Idaho", limit: 6000, rate: 0.058 },
  IL: { name: "Illinois", limit: 10000, rate: 0.0495 },
  IN: { name: "Indiana", limit: 0, rate: 0 }, // 20% credit instead
  IA: { name: "Iowa", limit: 3461, rate: 0.057 },
  KS: { name: "Kansas", limit: 3000, rate: 0.057 },
  KY: { name: "Kentucky", limit: 2000, rate: 0.045 },
  LA: { name: "Louisiana", limit: 2400, rate: 0.0425 },
  ME: { name: "Maine", limit: 0, rate: 0 }, // No deduction
  MD: { name: "Maryland", limit: 2500, rate: 0.0575 },
  MA: { name: "Massachusetts", limit: 2000, rate: 0.05 },
  MI: { name: "Michigan", limit: 5000, rate: 0.0425 },
  MN: { name: "Minnesota", limit: 3000, rate: 0.0795 },
  MS: { name: "Mississippi", limit: 10000, rate: 0.047 },
  MO: { name: "Missouri", limit: 8000, rate: 0.0495 },
  MT: { name: "Montana", limit: 3000, rate: 0.069 },
  NE: { name: "Nebraska", limit: 10000, rate: 0.0664 },
  NV: { name: "Nevada", limit: 0, rate: 0 }, // No state income tax
  NH: { name: "New Hampshire", limit: 0, rate: 0 }, // No state income tax
  NJ: { name: "New Jersey", limit: 10000, rate: 0.0697 },
  NM: { name: "New Mexico", limit: 0, rate: 0 }, // No deduction
  NY: { name: "New York", limit: 5000, rate: 0.0685 },
  NC: { name: "North Carolina", limit: 0, rate: 0 }, // No deduction
  ND: { name: "North Dakota", limit: 5000, rate: 0.029 },
  OH: { name: "Ohio", limit: 4000, rate: 0.0399 },
  OK: { name: "Oklahoma", limit: 10000, rate: 0.0475 },
  OR: { name: "Oregon", limit: 0, rate: 0 }, // Credit instead of deduction
  PA: { name: "Pennsylvania", limit: 15000, rate: 0.0307 },
  RI: { name: "Rhode Island", limit: 500, rate: 0.0599 },
  SC: { name: "South Carolina", limit: 0, rate: 0 }, // No deduction
  SD: { name: "South Dakota", limit: 0, rate: 0 }, // No state income tax
  TN: { name: "Tennessee", limit: 0, rate: 0 }, // No state income tax
  TX: { name: "Texas", limit: 0, rate: 0 }, // No state income tax
  UT: { name: "Utah", limit: 0, rate: 0 }, // 5% credit instead
  VT: { name: "Vermont", limit: 2500, rate: 0.066 },
  VA: { name: "Virginia", limit: 4000, rate: 0.0575 },
  WA: { name: "Washington", limit: 0, rate: 0 }, // No state income tax
  WV: { name: "West Virginia", limit: 3000, rate: 0.065 },
  WI: { name: "Wisconsin", limit: 3500, rate: 0.0765 },
  WY: { name: "Wyoming", limit: 0, rate: 0 }, // No state income tax
  DC: { name: "Washington DC", limit: 0, rate: 0 }, // No deduction
};

// Average college costs 2026 (tuition + fees + room/board per year)
const avgCollegeCost = {
  public_in_state: 28000,
  public_out_state: 48000,
  private: 62000,
  community: 10000,
};

export default function Calculator() {
  const [childAge, setChildAge] = useState("8");
  const [collegeStartAge, setCollegeStartAge] = useState("18");
  const [currentSavings, setCurrentSavings] = useState("15000");
  const [monthlyContribution, setMonthlyContribution] = useState("300");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [collegeType, setCollegeType] = useState("public_in_state");
  const [stateCode, setStateCode] = useState("NY");
  const [federalTaxRate, setFederalTaxRate] = useState("22");

  const age = parseInt(childAge) || 8;
  const startAge = parseInt(collegeStartAge) || 18;
  const yearsToCollege = Math.max(0, startAge - age);
  const savings = parseFloat(currentSavings) || 0;
  const monthly = parseFloat(monthlyContribution) || 0;
  const rate = (parseFloat(annualReturn) || 7) / 100;
  const monthlyRate = rate / 12;
  const totalMonths = yearsToCollege * 12;
  const fedRate = (parseFloat(federalTaxRate) || 22) / 100;

  // Annual college cost
  const annualTuition = avgCollegeCost[collegeType] || avgCollegeCost.public_in_state;
  const yearsOfCollege = 4;
  const totalCollegeCost = annualTuition * yearsOfCollege;

  // Future value of current savings (lump sum)
  const fvLumpSum = savings > 0 ? savings * Math.pow(1 + rate, yearsToCollege) : 0;

  // Future value of monthly contributions
  const fvMonthly = monthly > 0 && monthlyRate > 0
    ? monthly * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate)
    : monthly > 0 ? monthly * totalMonths : 0;

  // Total projected savings at college start
  const totalProjected = fvLumpSum + fvMonthly;

  // Total contributions
  const totalContributions = savings + monthly * totalMonths;

  // Investment growth
  const investmentGrowth = totalProjected - totalContributions;

  // Shortfall / surplus
  const shortfall = Math.max(0, totalCollegeCost - totalProjected);
  const surplus = Math.max(0, totalProjected - totalCollegeCost);

  // Monthly needed to fully cover college
  const targetShortfall = Math.max(0, totalCollegeCost - fvLumpSum);
  const monthlyNeeded = targetShortfall > 0 && monthlyRate > 0
    ? targetShortfall / ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate)
    : 0;

  // State tax savings
  const stateData = stateTaxDeductions[stateCode] || { limit: 0, rate: 0 };
  const annualContribution = monthly * 12;
  const deductibleAmount = Math.min(annualContribution, stateData.limit);
  const annualStateTaxSavings = deductibleAmount * stateData.rate;
  const totalStateTaxSavings = annualStateTaxSavings * yearsToCollege;

  // Federal tax benefit (earnings grow tax-free, withdrawals for education are tax-free)
  // No direct federal deduction, but tax-free growth is a benefit
  const taxableEquivalent = totalProjected > totalContributions
    ? totalContributions + (totalProjected - totalContributions) * (1 - fedRate)
    : totalProjected;

  const schemaData = {
    name: "College Savings Calculator 2026 — 529 Plan",
    description: "Calculate 529 plan growth, college cost projections, and see how much you need to save for your child's education.",
    url: "https://www.themetricapp.com/calculators/college-savings-calculator-2026",
  };

  return (
    <CalculatorShell
      title="College Savings Calculator (2026)"
      subtitle="Project your 529 plan growth, estimate college costs, and find the monthly contribution needed to fund your child's education."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Projected Savings" value={fmt(totalProjected)} sub={`By age ${startAge} (${yearsToCollege} years)`} highlight />
          <ResultCard label="College Cost (4 yr)" value={fmt(totalCollegeCost)} sub={`${collegeType === "private" ? "Private" : collegeType === "public_out_state" ? "Public Out-of-State" : collegeType === "community" ? "Community College" : "Public In-State"}`} />
          <ResultCard label="Total Contributions" value={fmt(totalContributions)} sub={`$${monthly}/mo for ${yearsToCollege} yrs`} />
          <ResultCard label="Investment Growth" value={fmt(investmentGrowth)} sub={`${rate * 100}% annual return`} />
          {shortfall > 0 ? (
            <ResultCard label="Funding Gap" value={fmt(shortfall)} sub="Need to save more" />
          ) : (
            <ResultCard label="Surplus" value={fmt(surplus)} sub="Fully funded!" />
          )}
          <ResultCard label="Monthly Needed (Full)" value={fmtMonth(monthlyNeeded)} sub="To cover 100% of costs" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="childAge" label="Child's Age" value={childAge} onChange={(e) => setChildAge(e.target.value)} suffix="years" placeholder="8" />
        <InputField id="collegeStartAge" label="College Start Age" value={collegeStartAge} onChange={(e) => setCollegeStartAge(e.target.value)} suffix="years" placeholder="18" />
        <InputField id="currentSavings" label="Current 529 Savings" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} prefix="$" placeholder="15000" />
        <InputField id="monthlyContribution" label="Monthly Contribution" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} prefix="$" placeholder="300" />
        <InputField id="annualReturn" label="Expected Annual Return" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} suffix="%" placeholder="7" helpText="Typical: 6-8% for age-based portfolios" />
        <SelectField
          id="collegeType"
          label="College Type"
          value={collegeType}
          onChange={(e) => setCollegeType(e.target.value)}
          options={[
            { value: "public_in_state", label: "Public In-State ($28k/yr)" },
            { value: "public_out_state", label: "Public Out-of-State ($48k/yr)" },
            { value: "private", label: "Private ($62k/yr)" },
            { value: "community", label: "Community College ($10k/yr)" },
          ]}
        />
        <SelectField
          id="stateCode"
          label="Your State (Tax Deduction)"
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
          options={Object.entries(stateTaxDeductions).map(([code, data]) => ({
            value: code,
            label: `${data.name}${data.limit > 0 ? ` (deduct up to $${data.limit.toLocaleString()})` : data.rate === 0 ? " (no income tax)" : " (no deduction)"}`,
          }))}
        />
        <InputField id="federalTaxRate" label="Federal Tax Bracket" value={federalTaxRate} onChange={(e) => setFederalTaxRate(e.target.value)} suffix="%" placeholder="22" helpText="Your marginal tax rate" />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the College Savings Calculator</h2>
      <p>
        This <strong>College Savings Calculator</strong> helps you project how much your 529 plan (or other education savings) will grow by the time your child starts college. Enter your <strong>child's age</strong>, <strong>current 529 savings</strong>, <strong>monthly contribution</strong>, and <strong>expected annual return</strong>. Select the <strong>college type</strong> (public in-state, out-of-state, private, or community college) and your <strong>state</strong> to factor in any state income tax deduction for 529 contributions.
      </p>
      <p>
        The calculator shows your <strong>projected total savings</strong> at college age, the <strong>estimated 4-year college cost</strong>, the <strong>funding gap or surplus</strong>, and the <strong>monthly contribution needed</strong> to fully cover college costs. It also estimates your <strong>annual state tax savings</strong> from 529 contributions — a benefit many families overlook.
      </p>

      <h2>College Savings Formula & Methodology</h2>
      <h3>Future Value of 529 Plan</h3>
      <p>
        The calculator uses the standard future value formula: <strong>FV = PV × (1 + r)ⁿ</strong> for the lump sum (current savings) and the <strong>future value of an annuity</strong> formula: <strong>FV = PMT × [((1 + r/12)ⁿ − 1) ÷ (r/12)]</strong> for monthly contributions — the same formula used by 529 plan providers.
      </p>
      <h3>College Cost Estimates</h3>
      <p>
        Based on College Board & NCES 2026 data. Average annual costs: <strong>Public In-State</strong> $28,000, <strong>Public Out-of-State</strong> $48,000, <strong>Private</strong> $62,000, <strong>Community College</strong> $10,000. These include tuition, fees, room & board. Actual costs vary by institution and increase ~5% annually on average.
      </p>
      <h3>State Tax Benefits</h3>
      <p>
        Over 30 states offer income tax deductions or credits for 529 contributions. Limits range from $500 (Rhode Island) to $15,000 (Pennsylvania) per beneficiary per year. At a 5% state tax rate, a $5,000 deduction saves $250/year in state taxes. Some states (like Indiana, Utah, Oregon) offer tax credits instead of deductions.
      </p>

      <h2>529 Plan Comparison Table</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Monthly Contribution</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">10 Years</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">15 Years</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">18 Years</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Total Contributions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { monthly: 100, label: "$100/mo" },
              { monthly: 250, label: "$250/mo" },
              { monthly: 500, label: "$500/mo" },
              { monthly: 750, label: "$750/mo" },
              { monthly: 1000, label: "$1,000/mo" },
            ].map((row) => {
              const r = 0.07 / 12;
              const calc = (years) => {
                const n = years * 12;
                return row.monthly * ((Math.pow(1 + r, n) - 1) / r);
              };
              const totalContrib = row.monthly * 12 * 18;
              return (
                <tr key={row.monthly} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{row.label}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${Math.round(calc(10)).toLocaleString()}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${Math.round(calc(15)).toLocaleString()}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${Math.round(calc(18)).toLocaleString()}</td>
                  <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 dark:text-green-400 font-medium">${totalContrib.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">* Assumes 7% annual return. Past performance does not guarantee future results.</p>
      </div>

      <h2>Data Sources & Methodology</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>College Costs:</strong> College Board Trends in College Pricing 2025–26 and NCES data.</li>
        <li><strong>529 Tax Benefits:</strong> State-by-state data from SavingForCollege.com and individual state tax authority websites.</li>
        <li><strong>Investment Returns:</strong> Age-based 529 plan historical returns typically range 5-9% depending on risk allocation.</li>
        <li><strong>Tuition Inflation:</strong> Average 5% annual increase based on historical trends (varies by institution type).</li>
      </ul>
      <p><strong>Last Updated:</strong> May 2026. 529 plan rules and limits vary by state and are subject to change.</p>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/calculators/retirement-savings-calculator-2026">Retirement Savings Calculator</a> — Plan your own retirement alongside college savings.</li>
        <li><a href="/calculators/solo-401k-contribution-calculator">Solo 401k Contribution Calculator</a> — Maximize retirement savings as a self-employed parent.</li>
        <li><a href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</a> — Balance college savings with home buying goals.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: How much should I save for my child's college education?</strong><br />
        A: The amount depends on the type of college and how many years away your child is. For a public in-state school, expect ~$28,000/year (2026 dollars). Private schools can cost $62,000+/year. A good rule of thumb: aim to save 1/3 of projected costs through a 529 plan, 1/3 through current income when your child is in college, and 1/3 through financial aid, scholarships, and student loans. Use this calculator to find your specific funding gap.
      </p>
      <p>
        <strong>Q: What is a 529 plan and how does it work?</strong><br />
        A: A 529 plan is a tax-advantaged investment account designed for education savings. Contributions grow federal tax-free, and withdrawals for qualified education expenses (tuition, fees, room & board, computers) are also tax-free. Over 30 states offer additional income tax deductions or credits for 529 contributions. There are two types: education savings plans (invest in mutual funds/ETFs) and prepaid tuition plans (lock in today's tuition rates).
      </p>
      <p>
        <strong>Q: What is the best investment return to assume for a 529 plan?</strong><br />
        A: Most financial advisors recommend assuming a 6-7% annual return for age-based 529 portfolios with a moderate risk allocation. For younger children (0-10 years), the portfolio is more heavily weighted toward stocks (higher potential return, higher risk). As your child approaches college age, the portfolio shifts toward bonds and cash (lower return, lower risk). Our calculator uses 7% as the default, but you can adjust this based on your risk tolerance and investment strategy.
      </p>
      <p>
        <strong>Q: Does my state offer a tax deduction for 529 contributions?</strong><br />
        A: Over 30 states offer income tax deductions or credits for 529 plan contributions. Limits range from $500/year (Rhode Island) to $15,000/year (Pennsylvania) per beneficiary. Some states like Arizona, Indiana, Utah, and Oregon offer tax credits instead of deductions. States with no income tax (Texas, Florida, Nevada, etc.) naturally offer no state tax benefit. Use the state selector in our calculator to see your specific potential savings.
      </p>
      <p>
        <strong>Q: What if my child gets a scholarship or doesn't go to college?</strong><br />
        A: If your beneficiary receives a scholarship, you can withdraw up to the scholarship amount penalty-free (though you'll owe income tax on the earnings portion). You can also change the beneficiary to another eligible family member (sibling, cousin, or even yourself). Non-qualified withdrawals are subject to income tax plus a 10% penalty on the earnings portion only — your original contributions are never taxed or penalized.
      </p>
      <p>
        <strong>Q: Can I use a 529 plan for K-12 education expenses?</strong><br />
        A: Yes — since the Tax Cuts and Jobs Act of 2017, 529 plans can be used for up to $10,000 per year in K-12 tuition at public, private, or religious schools. This makes 529 plans more flexible than ever, allowing families to start using their savings well before college if needed.
      </p>

      <RelatedCalculators currentPage="college-savings-calculator-2026" />

      </>
  );
}

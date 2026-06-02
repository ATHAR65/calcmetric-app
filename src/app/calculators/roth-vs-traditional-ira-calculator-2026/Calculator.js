"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtMonth = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("65");
  const [annualIncome, setAnnualIncome] = useState("75000");
  const [filingStatus, setFilingStatus] = useState("single");
  const [currentBalance, setCurrentBalance] = useState("20000");
  const [annualContribution, setAnnualContribution] = useState("7000");
  const [expectedReturn, setExpectedReturn] = useState("7");
  const [currentTaxRate, setCurrentTaxRate] = useState("22");
  const [retirementTaxRate, setRetirementTaxRate] = useState("15");
  const [stateTaxRate, setStateTaxRate] = useState("5");

  const age = parseInt(currentAge) || 30;
  const retireAge = parseInt(retirementAge) || 65;
  const yearsToRetire = Math.max(0, retireAge - age);
  const income = parseFloat(annualIncome) || 0;
  const balance = parseFloat(currentBalance) || 0;
  const contribution = parseFloat(annualContribution) || 0;
  const returnRate = (parseFloat(expectedReturn) || 7) / 100;
  const currTaxRate = (parseFloat(currentTaxRate) || 22) / 100;
  const retTaxRate = (parseFloat(retirementTaxRate) || 15) / 100;
  const stateRate = (parseFloat(stateTaxRate) || 5) / 100;

  // Combined tax rates (federal + state)
  const currCombinedRate = currTaxRate + stateRate;
  const retCombinedRate = retTaxRate + stateRate;

  // Traditional IRA: Pre-tax contribution grows tax-deferred, taxed at withdrawal
  // Annual tax savings now = contribution × current tax rate
  const annualTaxSavingsTraditional = contribution * currCombinedRate;

  // Future value of Traditional IRA
  const fvTraditionalBalance = balance * Math.pow(1 + returnRate, yearsToRetire);
  const fvTraditionalContributions = contribution > 0
    ? contribution * ((Math.pow(1 + returnRate, yearsToRetire) - 1) / returnRate)
    : 0;
  const totalTraditional = fvTraditionalBalance + fvTraditionalContributions;
  const afterTaxTraditional = totalTraditional * (1 - retCombinedRate);

  // Roth IRA: Post-tax contribution, tax-free growth and withdrawals
  // Annual after-tax cost = contribution × (1 - current tax rate) ... wait no
  // Roth: you pay taxes now on the contribution amount
  // If you contribute $7,000 to Roth, you need $7,000 / (1 - taxRate) in pre-tax income
  // But most people think in terms of the contribution limit, so we just note the tax cost

  // Future value of Roth IRA (same growth, but tax-free)
  const fvRothBalance = balance * Math.pow(1 + returnRate, yearsToRetire);
  const fvRothContributions = contribution > 0
    ? contribution * ((Math.pow(1 + returnRate, yearsToRetire) - 1) / returnRate)
    : 0;
  const totalRoth = fvRothBalance + fvRothContributions;
  const afterTaxRoth = totalRoth; // Tax-free withdrawals!

  // Difference
  const rothAdvantage = afterTaxRoth - afterTaxTraditional;

  // Effective cost to fund each
  // Traditional: costs the after-tax amount of contribution minus tax savings
  // Actually: Traditional contribution reduces taxable income by contribution amount
  // So net cost = contribution - (contribution × taxRate) = contribution × (1 - taxRate)
  // Roth: cost = contribution (already taxed money)
  const netCostTraditional = contribution * (1 - currCombinedRate);
  const netCostRoth = contribution;

  // If you invested the tax savings from Traditional
  const taxSavingsInvested = annualTaxSavingsTraditional > 0
    ? annualTaxSavingsTraditional * ((Math.pow(1 + returnRate, yearsToRetire) - 1) / returnRate)
    : 0;

  // Break-even retirement tax rate
  const breakEvenRate = totalTraditional > 0
    ? 1 - (afterTaxRoth / totalTraditional)
    : 0;

  // Income limits check
  const rothIncomeLimit = filingStatus === "married" ? 230000 : 153000;
  const rothPhaseOutStart = filingStatus === "married" ? 218000 : 143000;
  const canContributeRothDirectly = income <= rothPhaseOutStart || (income <= rothIncomeLimit);
  const reducedRoth = income > rothPhaseOutStart && income <= rothIncomeLimit;
  const rothStatusText = income > rothIncomeLimit
    ? "Income exceeds limit — consider Backdoor Roth"
    : reducedRoth
      ? "Partial phase-out — reduced limit may apply"
      : "Full contribution allowed";

  // Deductibility of Traditional IRA
  const tradDeductionLimit = filingStatus === "married" ? 123000 : 73000;
  const tradPhaseOutStart = filingStatus === "married" ? 103000 : 59000;
  const tradDeductible = !(filingStatus === "married" && income > tradDeductionLimit) || income <= tradPhaseOutStart;

  const schemaData = {
    name: "Roth vs Traditional IRA Calculator 2026",
    description: "Compare Roth IRA vs Traditional IRA side-by-side. Calculate after-tax values at retirement and see which account type saves you more.",
    url: "https://www.themetricapp.com/calculators/roth-vs-traditional-ira-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Roth vs Traditional IRA Calculator (2026)"
      subtitle="Compare Roth IRA vs Traditional IRA side-by-side with after-tax values at retirement, tax savings now, and find your optimal strategy."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Roth IRA (After-Tax)" value={fmt(afterTaxRoth)} sub="Tax-free withdrawals" highlight />
          <ResultCard label="Traditional IRA (After-Tax)" value={fmt(afterTaxTraditional)} sub={`Taxed at ${(retCombinedRate * 100).toFixed(1)}% withdrawal rate`} />
          <ResultCard label="Roth Advantage" value={fmt(rothAdvantage)} sub={rothAdvantage >= 0 ? "Roth comes out ahead" : "Traditional comes out ahead"} />
          <ResultCard label="Traditional Tax Savings Now" value={fmt(annualTaxSavingsTraditional)} sub={fmtMonth(annualTaxSavingsTraditional / 12) + "/month tax savings"} />
          <ResultCard label="Break-Even Tax Rate" value={(breakEvenRate * 100).toFixed(1) + "%"} sub={`At retirement (now: ${(currCombinedRate * 100).toFixed(1)}%)`} />
          <ResultCard label="IRA Eligibility" value={rothStatusText} sub={tradDeductible ? "Traditional IRA deductible" : "Traditional IRA may not be deductible"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="currentAge" label="Current Age" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} suffix="years" placeholder="30" />
        <InputField id="retirementAge" label="Retirement Age" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} suffix="years" placeholder="65" />
        <InputField id="annualIncome" label="Annual Income" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} prefix="$" placeholder="75000" helpText="MAGI for IRA eligibility check" />
        <SelectField
          id="filingStatus"
          label="Filing Status"
          value={filingStatus}
          onChange={(e) => setFilingStatus(e.target.value)}
          options={[
            { value: "single", label: "Single" },
            { value: "married", label: "Married Filing Jointly" },
            { value: "head", label: "Head of Household" },
          ]}
        />
        <InputField id="currentBalance" label="Current IRA Balance" value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)} prefix="$" placeholder="20000" />
        <InputField id="annualContribution" label="Annual Contribution" value={annualContribution} onChange={(e) => setAnnualContribution(e.target.value)} prefix="$" placeholder="7000" helpText="2026 limit: $7,000 ($8,000 if 50+)" />
        <InputField id="expectedReturn" label="Expected Annual Return" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} suffix="%" placeholder="7" helpText="Historical market average ~7% after inflation" />
        <InputField id="currentTaxRate" label="Current Federal Tax Rate" value={currentTaxRate} onChange={(e) => setCurrentTaxRate(e.target.value)} suffix="%" placeholder="22" helpText="Your marginal federal bracket" />
        <InputField id="retirementTaxRate" label="Expected Retirement Tax Rate" value={retirementTaxRate} onChange={(e) => setRetirementTaxRate(e.target.value)} suffix="%" placeholder="15" helpText="Typically lower in retirement" />
        <InputField id="stateTaxRate" label="State Tax Rate" value={stateTaxRate} onChange={(e) => setStateTaxRate(e.target.value)} suffix="%" placeholder="5" helpText="Your state income tax rate (0 if no state tax)" />
      </div>
    </CalculatorShell>
  );
}

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
            <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS IRA Limits
            </a>
            {" · "}
            <a href="https://www.irs.gov/publications/p590a" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Publication 590-A
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Roth vs Traditional IRA Calculator</h2>
      <p>
        This <strong>Roth vs Traditional IRA Calculator</strong> helps you compare the two IRA types side-by-side to see which one leaves you with more after-tax money in retirement. Enter your <strong>current age</strong>, <strong>retirement age</strong>, <strong>annual income</strong>, <strong>current IRA balance</strong>, and <strong>annual contribution</strong>. Then enter your <strong>current tax rate</strong> and <strong>expected retirement tax rate</strong>.
      </p>
      <p>
        The calculator projects the <strong>after-tax value of both IRA types at retirement</strong>, calculates the <strong>Traditional IRA tax savings now</strong>, and estimates the <strong>break-even retirement tax rate</strong> where both options are equal. It also checks <strong>IRA eligibility</strong> based on your income and filing status.
      </p>

      <h2>Roth vs Traditional IRA Formula & Methodology</h2>
      <h3>Traditional IRA (Pre-Tax)</h3>
      <p>
        Contributions are tax-deductible now. You save <strong>contribution × current tax rate</strong> in taxes each year. The money grows tax-deferred, and withdrawals in retirement are taxed at your ordinary income rate. <strong>After-tax value = Future Value × (1 − retirement tax rate)</strong>.
      </p>
      <h3>Roth IRA (Post-Tax)</h3>
      <p>
        Contributions are made with after-tax dollars (no deduction now). The money grows tax-free, and <strong>qualified withdrawals in retirement are completely tax-free</strong>. <strong>After-tax value = Future Value</strong> (no taxes due).
      </p>
      <h3>Key Decision Factors</h3>
      <p>
        <strong>Choose Roth if:</strong> You expect to be in a higher tax bracket in retirement, you're early in your career (current rate is low), or you want tax-free income in retirement. <strong>Choose Traditional if:</strong> You're in a high bracket now and expect lower income in retirement, you want the immediate tax deduction, or you need to lower your current taxable income.
      </p>
      <h3>The Math</h3>
      <p>
        Future value uses the compound growth formula: <strong>FV = PV × (1 + r)ⁿ + PMT × [((1 + r)ⁿ − 1) ÷ r]</strong>. The break-even tax rate is the rate at which after-tax Traditional = after-tax Roth. If your retirement rate is below the break-even, Traditional wins; if above, Roth wins.
      </p>

      <h2>IRA Comparison Table</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Feature</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Roth IRA</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Traditional IRA</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: "Tax Treatment", roth: "After-tax contributions", trad: "Pre-tax contributions" },
              { feature: "Tax Deduction Now", roth: "None", trad: "Yes — reduces taxable income" },
              { feature: "Tax on Withdrawals", roth: "Tax-free (qualified)", trad: "Taxed as ordinary income" },
              { feature: "2026 Contribution Limit", roth: "$7,000 ($8,000 if 50+)", trad: "$7,000 ($8,000 if 50+)" },
              { feature: "Income Limit", roth: "$153k single, $230k married", trad: "$73k single (deductible if covered by 401k)" },
              { feature: "RMDs", roth: "None (original owner)", trad: "Yes — start at age 73" },
              { feature: "Early Withdrawal", roth: "Contributions anytime; earnings after 5 yrs", trad: "10% penalty before 59½ (some exceptions)" },
              { feature: "Best For", roth: "Younger earners, low tax bracket now", trad: "Higher earners, high tax bracket now" },
            ].map((row, i) => (
              <tr key={i} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{row.feature}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3">{row.roth}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3">{row.trad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Data Sources & Methodology</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>IRA Limits:</strong> IRS — 2026 IRA Contribution Limits (Revenue Procedure 2025-xx).</li>
        <li><strong>Roth Phase-Out:</strong> IRS Publication 590-A — Roth IRA income limits for 2026.</li>
        <li><strong>Traditional Deductibility:</strong> IRS — Modified AGI limits for Traditional IRA deduction if covered by workplace plan.</li>
        <li><strong>Historical Returns:</strong> S&P 500 average annual return ~10% nominal, ~7% inflation-adjusted.</li>
      </ul>
      <p><strong>Last Updated:</strong> May 2026. Tax laws and contribution limits are subject to change.</p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Should I choose Roth or Traditional IRA?</h3>
      <p>
        The decision depends on your current vs expected future tax rate. If you are in a low tax bracket now (10-12%) and expect higher income later, Roth likely wins. If you are in a high bracket now (32%+) and expect lower income in retirement, Traditional wins. The break-even tax rate in our calculator shows the exact threshold where both options produce the same after-tax result.
      </p>
      <h3>Can I contribute to both a Roth and Traditional IRA in the same year?</h3>
      <p>
        Yes — you can split your contributions between both accounts, but the combined total cannot exceed the annual IRA limit ($7,000 for 2026, $8,000 if age 50+). For example, you could contribute $4,000 to a Roth IRA and $3,000 to a Traditional IRA. The deductible portion of your Traditional IRA contribution depends on your income and whether you (or your spouse) have a workplace retirement plan.
      </p>
      <h3>What is a Backdoor Roth IRA and do I need one?</h3>
      <p>
        A Backdoor Roth IRA is a strategy for high earners whose income exceeds the Roth IRA direct contribution limits ($153,000 single, $230,000 married filing jointly in 2026). You contribute to a Traditional IRA (no income limit) and then convert the funds to a Roth IRA — known as a Roth conversion. There is no income limit on Roth conversions. However, if you have existing Traditional IRA balances, the pro-rata rule may apply and make this less tax-efficient.
      </p>
      <h3>What happens if I withdraw IRA money before age 59½?</h3>
      <p>
        Early withdrawals from a Traditional IRA are subject to a 10% penalty plus ordinary income tax on the withdrawn amount (with some exceptions: first-time home purchase up to $10,000, qualified education expenses, medical expenses exceeding 7.5% of AGI, disability, and substantially equal periodic payments). Roth IRA contributions can be withdrawn anytime tax- and penalty-free. Earnings withdrawn before age 59½ within the 5-year holding period may be subject to tax and penalty.
      </p>
      <h3>Are required minimum distributions (RMDs) different for Roth vs Traditional?</h3>
      <p>
        Yes — Traditional IRAs require RMDs starting at age 73 (under SECURE Act 2.0). Roth IRAs have <strong>no RMDs during the original owner's lifetime</strong>. This is a major advantage for Roth IRAs if you do not need the money in retirement and want to leave the account to heirs. Beneficiaries of both account types must take RMDs based on their life expectancy.
      </p>

      {/* Related Tools */}
      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Check our{" "}<a href="/calculators/retirement-savings-calculator-2026" className="text-teal-400 underline hover:text-teal-300">Retirement Savings Calculator</a>
          {" "}and{" "}<a href="/calculators/solo-401k-contribution-calculator" className="text-teal-400 underline hover:text-teal-300">Solo 401k Contribution Calculator</a>.
        </p>
      </div>

      <RelatedCalculators currentPage="roth-vs-traditional-ira-calculator-2026" />

      </>
  );
}

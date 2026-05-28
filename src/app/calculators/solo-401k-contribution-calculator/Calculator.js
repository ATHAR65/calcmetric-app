"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (v) =>
  v.toLocaleString("en-US", { style: "currency", currency: "USD" });

const AGE_GROUPS = [
  { value: "under50", label: "Under 50" },
  { value: "50to59", label: "Age 50–59" },
  { value: "60to63", label: "Age 60–63 (SECURE 2.0)" },
  { value: "64plus", label: "Age 64+" },
];

const TAX_BRACKETS = [
  { value: "10", label: "10%" },
  { value: "12", label: "12%" },
  { value: "22", label: "22%" },
  { value: "24", label: "24%" },
  { value: "32", label: "32%" },
  { value: "35", label: "35%" },
  { value: "37", label: "37%" },
];

export default function Calculator() {
  const [netIncome, setNetIncome] = useState(80000);
  const [ageGroup, setAgeGroup] = useState("under50");
  const [employeeContrib, setEmployeeContrib] = useState(23500);
  const [fedBracket, setFedBracket] = useState("22");
  const [stateRate, setStateRate] = useState(5);

  const nI = Math.max(0, netIncome || 0);
  const ec = Math.max(0, employeeContrib || 0);
  const fed = (parseFloat(fedBracket) || 0) / 100;
  const st = Math.max(0, stateRate || 0) / 100;

  const AGE_LIMITS = { under50: 23500, "50to59": 31000, "60to63": 34750, "64plus": 31000 };
  const maxEmployee = AGE_LIMITS[ageGroup] || 23500;
  const actualEmployee = Math.min(ec, maxEmployee);

  const netSEAfterTax = nI * 0.9235;
  const employerContribPct = netSEAfterTax * 0.25;
  const maxEmployer = Math.min(employerContribPct, 46500);
  const totalContrib = Math.min(actualEmployee + maxEmployer, 70000);

  const fedTaxSavings = totalContrib * fed;
  const stateTaxSavings = totalContrib * st;
  const seTaxSavings = actualEmployee * 0.9235 * 0.153;
  const totalTaxSaved = fedTaxSavings + stateTaxSavings + seTaxSavings;
  const netCost = totalContrib - totalTaxSaved;

  const schemaData = {
    name: "Solo 401k Contribution Calculator",
    description:
      "Calculate your maximum Solo 401k contribution for 2026. Covers employee and employer contributions up to $70,000 limit.",
    url: "https://www.themetricapp.com/calculators/solo-401k-contribution-calculator",
  };

  return (
    <CalculatorShell
      title="Solo 401k Contribution Calculator 2026 — Max Retirement Savings & Tax Deductions"
      subtitle="Calculate your maximum Solo 401k contribution and exact tax savings for 2026."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Max Employee" value={fmt(maxEmployee)} sub={`Age limit: ${maxEmployee.toLocaleString()}`} />
          <ResultCard label="Your Employee Contribution" value={fmt(actualEmployee)} sub={actualEmployee < ec ? "Adjusted to age limit" : "As entered"} />
          <ResultCard label="Max Employer Contribution" value={fmt(maxEmployer)} sub="25% of net SE income" />
          <ResultCard label="Total Maximum" value={fmt(totalContrib)} sub="Up to $70,000 cap" />
          <ResultCard label="Federal Tax Saved" value={fmt(fedTaxSavings)} sub={`At ${fedBracket}% bracket`} />
          <ResultCard label="State Tax Saved" value={fmt(stateTaxSavings)} sub={`At ${(stateRate || 0).toFixed(1)}% rate`} />
          <ResultCard label="SE Tax Saved" value={fmt(seTaxSavings)} sub="15.3% on employee deferral" />
          <ResultCard label="Total Tax Saved" value={fmt(totalTaxSaved)} sub="Fed + State + SE" />
          <ResultCard label="Net Cost (After Tax Savings)" value={fmt(netCost)} sub="What it really costs you" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-6">
        <InputField
          label="Net Self-Employment Income ($)"
          value={netIncome}
          onChange={setNetIncome}
        />
        <SelectField
          label="Your Age Group"
          value={ageGroup}
          onChange={setAgeGroup}
          options={AGE_GROUPS}
        />
        <InputField
          label="Desired Employee Contribution ($)"
          value={employeeContrib}
          onChange={setEmployeeContrib}
        />
        <SelectField
          label="Your Federal Tax Bracket"
          value={fedBracket}
          onChange={setFedBracket}
          options={TAX_BRACKETS}
        />
        <InputField
          label="Your State Tax Rate (%)"
          value={stateRate}
          onChange={setStateRate}
          step="0.1"
        />
      </div>

      {totalContrib > 0 && (
        <div className="mt-6 p-4 bg-teal-900/30 border border-teal-700 rounded-xl">
          <p className="text-teal-300 font-medium">
            Contributing {fmt(totalContrib)} saves you {fmt(totalTaxSaved)} in taxes this year
            — reducing your net out-of-pocket cost to just {fmt(netCost)}.
          </p>
        </div>
      )}
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
            <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS 401k Limits
            </a>
            {" · "}
            <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-catch-up-contributions" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Catch-Up Contributions
            </a>
            {" · "}
            <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Revenue Procedure
            </a>
          </span>
        </div>
      </div>

      {/* Visual Content: Solo 401k Contribution Limits Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Component</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Under 50</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Age 50–59</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Age 60–63</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Age 64+</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Employee Deferral Limit</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$23,500</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$31,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$34,750</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$31,000</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Employer Profit-Sharing (Max)</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right" colSpan="4">25% of net SE income, up to $46,500</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Total Combined Limit</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-bold" colSpan="4">$70,000</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * 2026 Solo 401k contribution limits per IRS guidelines. SECURE 2.0 super catch-up applies to ages 60–63.
        </p>
      </div>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Solo 401k Contribution Calculator uses 2026 IRS retirement plan limits. All data is verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Employee Deferral Limit:</strong> $23,500 base + catch-up provisions from{" "}
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS 401k Contribution Limits
          </a>
          .
        </li>
        <li>
          <strong>SECURE 2.0 Catch-Up:</strong> $11,250 super catch-up for ages 60–63 from{" "}
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-catch-up-contributions" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Catch-Up Contributions
          </a>
          .
        </li>
        <li>
          <strong>Employer Contribution:</strong> 25% of net SE income from{" "}
          <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS One-Participant 401k Plans
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Employee deferral is capped at the age-adjusted limit. Employer contribution = net SE income × 0.9235 × 25%, capped at $46,500. Total is capped at $70,000. Tax savings = total contribution × (federal bracket + state rate). SE tax savings = employee deferral × 0.9235 × 15.3%. Net cost = total contribution − total tax saved.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Solo 401k Contribution Calculator",
            url: "https://www.themetricapp.com/calculators/solo-401k-contribution-calculator",
            description: "Calculate your maximum Solo 401k contribution for 2026. Covers employee and employer contributions up to $70,000 limit.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web Browser",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com" },
              { "@type": "ListItem", position: 2, name: "Solo 401k Contribution Calculator", item: "https://www.themetricapp.com/calculators/solo-401k-contribution-calculator" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the Solo 401k contribution limit for 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For 2026, the total Solo 401k contribution limit is $70,000. The employee salary deferral limit is $23,500 for those under 50, $31,000 for ages 50–59 and 64+, and $34,750 for ages 60–63 under the SECURE 2.0 super catch-up provision. The employer profit-sharing contribution is capped at 25% of net self-employment income (after SE tax deduction), up to a maximum of $46,500.",
                },
              },
              {
                "@type": "Question",
                name: "Who qualifies to open a Solo 401k?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You qualify for a Solo 401k if you are self-employed with no full-time W-2 employees other than a spouse. This includes sole proprietors, single-member LLCs, 1099 independent contractors, freelancers, gig workers, and partnerships.",
                },
              },
              {
                "@type": "Question",
                name: "What is the SECURE 2.0 super catch-up contribution for age 60-63?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Under the SECURE 2.0 Act, individuals aged 60–63 can make super catch-up contributions of $11,250 above the standard $23,500 employee deferral limit, bringing their total employee contribution to $34,750 in 2026.",
                },
              },
              {
                "@type": "Question",
                name: "Can I have both a Solo 401k and a regular employer 401k?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you can have both a Solo 401k and a regular employer 401k simultaneously, but the combined employee deferral limit ($23,500 for under 50 in 2026) applies across all 401k plans.",
                },
              },
              {
                "@type": "Question",
                name: "How is the employer contribution calculated for Solo 401k?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The employer (profit-sharing) contribution is calculated as 25% of your net self-employment income after deducting the self-employment tax deduction. First, multiply your net SE income by 0.9235, then multiply that result by 25%. The maximum employer contribution is capped at $46,500 for 2026.",
                },
              },
              {
                "@type": "Question",
                name: "Traditional vs Roth Solo 401k — which reduces taxes more now?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Traditional Solo 401k contributions reduce your current taxable income. Roth Solo 401k contributions are made with after-tax dollars, so they don't reduce your current tax bill, but qualified withdrawals in retirement are tax-free.",
                },
              },
              {
                "@type": "Question",
                name: "What is the deadline to open and contribute to a Solo 401k for 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You must open the Solo 401k plan by December 31, 2026 (the tax year end). Employee deferral contributions can be made up to the tax filing deadline (typically April 15, 2027, or October 15 with extensions). Employer profit-sharing contributions can be made up to the tax filing deadline including extensions.",
                },
              },
              {
                "@type": "Question",
                name: "Does Solo 401k reduce self-employment tax or just income tax?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Only the employee salary deferral portion of your Solo 401k contribution reduces self-employment tax. The employer profit-sharing contribution does NOT reduce self-employment tax — it only reduces federal and state income taxes.",
                },
              },
            ],
          }),
        }}
      />

      <h2>How to Use the Solo 401k Contribution Calculator</h2>
      <p>
        Using our free Solo 401k Contribution Calculator is straightforward. Enter your net self-employment
        income (after business expenses but before taxes), select your age group to apply the correct IRS
        contribution limits, and choose how much you want to contribute as an employee. The calculator
        instantly shows your maximum allowable employee and employer contributions, total tax savings
        across federal, state, and self-employment taxes, and the net after-tax cost of your retirement
        contribution.
      </p>

      <h2>Formula & Calculation Breakdown</h2>
      <p>
        The Solo 401k contribution calculation involves three main components:
      </p>
      <p>
        <strong>Employee Salary Deferral:</strong> For 2026, the base limit is $23,500 for those under
        50. Regular catch-up contributions ($7,500 extra) apply for ages 50–59 and 64+, bringing the
        limit to $31,000. The SECURE 2.0 super catch-up ($11,250 extra) applies for ages 60–63,
        raising the limit to $34,750.
      </p>
      <p>
        <strong>Employer Profit-Sharing:</strong> The employer contribution is 25% of your net SE income
        after the SE tax deduction. To calculate: Net SE Income × 0.9235 × 0.25. The employer portion
        is capped at $46,500 for 2026.
      </p>
      <p>
        <strong>Total Limit:</strong> Combined employee and employer contributions cannot exceed $70,000
        for 2026 (or 100% of net SE income, whichever is less).
      </p>

      <h3>Example 1: Freelance Designer (Under 50)</h3>
      <p>
        Sarah, a freelance graphic designer, earns $80,000 net SE income. She is 34 years old. Her
        employee limit is $23,500. She chooses to contribute the full $23,500. Her employer contribution
        is: $80,000 × 0.9235 × 0.25 = $18,470. Total contribution: $23,500 + $18,470 = $41,970 (under
        the $70,000 cap). At a 22% federal bracket and 5% state rate, she saves $11,750 in taxes,
        making her net cost just $30,220.
      </p>

      <h3>Example 2: Consultant (Age 62, Super Catch-Up)</h3>
      <p>
        Michael, a management consultant aged 62, earns $200,000 net SE income. His super catch-up
        employee limit is $34,750. He contributes the max $34,750. Employer contribution: $200,000 ×
        0.9235 × 0.25 = $46,175. Total: $34,750 + $46,175 = $80,925, but this exceeds the $70,000
        total cap, so the total is limited to $70,000. At 32% federal and 5% state, his tax savings
        are $25,900, net cost $44,100.
      </p>

      <h3>Example 3: Part-Time Etsy Seller (Age 55, Lower Income)</h3>
      <p>
        Maria runs an Etsy shop earning $30,000 net SE income. She is 55. Employee limit is $31,000,
        but she can only contribute up to her income. She contributes $20,000. Employer contribution:
        $30,000 × 0.9235 × 0.25 = $6,926. Total: $20,000 + $6,926 = $26,926. At 12% federal and 0%
        state (Texas), her tax savings are $5,636, making the net cost just $21,290 to save $26,926.
      </p>

      <h2>Traditional vs Roth Solo 401k: Which is Right for You in 2026?</h2>
      <p>
        Choosing between Traditional and Roth Solo 401k contributions depends on your current versus
        expected future tax rate. Traditional contributions provide an immediate tax deduction at your
        marginal rate today, which is ideal if you're in a higher bracket now and expect to withdraw
        at a lower rate in retirement.
      </p>
      <p>
        Roth Solo 401k contributions don't reduce your current tax bill but offer tax-free growth and
        withdrawals. This makes Roth particularly attractive for younger self-employed individuals
        who are in lower tax brackets today and expect their income to grow significantly.
      </p>

      <h2>Real-Life Scenarios: 3 User Types</h2>
      <p>
        <strong>Case 1 — The Full-Time Freelancer:</strong> Jake, 41, earns $120,000 as a freelance
        software developer. He contributes $23,500 as employee and receives the full employer match of
        $27,705. Total: $51,205. At 24% federal and 4.95% Illinois state tax, his total tax savings
        are $16,637.
      </p>
      <p>
        <strong>Case 2 — The Side Hustler with a Full-Time Job:</strong> Priya, 36, earns $90,000 at
        her W-2 job and $35,000 from her Etsy shop. At her W-2 job, she defers $12,000 to her employer
        401k. She can only defer $11,500 more to her Solo 401k (combined $23,500 limit).
      </p>
      <p>
        <strong>Case 3 — The Near-Retiree:</strong> Robert, 61, earns $95,000 from his consulting
        practice. His super catch-up limit is $34,750. He contributes $34,750. Employer contribution:
        $21,933. Total: $56,683. At 22% federal and 3.07% Pennsylvania state tax, his tax savings are
        $14,735.
      </p>

      <h2>8 Tips to Maximize Your Solo 401k Savings in 2026</h2>
      <p>
        <strong>1. Max out employee deferrals first.</strong> The employee portion gives you the most
        flexibility and reduces both income tax and self-employment tax.
      </p>
      <p>
        <strong>2. Coordinate with other retirement plans.</strong> If you have a W-2 job with a 401k,
        remember the combined employee deferral limit applies across all plans.
      </p>
      <p>
        <strong>3. Use the super catch-up if you're 60–63.</strong> The SECURE 2.0 $11,250 super
        catch-up is the highest catch-up limit ever for this age group.
      </p>
      <p>
        <strong>4. Make employer contributions after year-end.</strong> You have until your tax filing
        deadline to make employer profit-sharing contributions.
      </p>
      <p>
        <strong>5. Consider Roth contributions for tax-free growth.</strong> If you're in a lower
        bracket now than you expect in retirement, Roth contributions lock in today's rate.
      </p>
      <p>
        <strong>6. Don't forget state tax savings.</strong> In California (9.3%), the state tax savings
        alone on a $50,000 contribution is $4,650.
      </p>
      <p>
        <strong>7. Open the plan before December 31.</strong> You must establish the plan by December
        31 of the tax year.
      </p>
      <p>
        <strong>8. Roll over old 401k balances.</strong> Consolidate old 401k accounts from previous
        employers into your Solo 401k.
      </p>

      <h2>Common Mistakes to Avoid</h2>
      <p>
        <strong>Over-contributing above the limit.</strong> Exceeding the combined $70,000 limit
        triggers a 6% excise tax on the excess each year until corrected.
      </p>
      <p>
        <strong>Forgetting the employer contribution cap.</strong> Many solo entrepreneurs max out
        employee deferrals but forget they're also entitled to the 25% employer contribution.
      </p>
      <p>
        <strong>Missing the SE tax deduction on employer contributions.</strong> Only employee
        deferrals reduce self-employment tax.
      </p>
      <p>
        <strong>Not updating beneficiary designations.</strong> Solo 401k plans require proper
        beneficiary designations.
      </p>
      <p>
        <strong>Ignoring required minimum distributions (RMDs).</strong> Once you turn 73, RMDs apply
        to Traditional Solo 401k balances.
      </p>
      <p>
        <strong>Failing to file Form 5500-EZ.</strong> If your Solo 401k balance exceeds $250,000
        at year-end, you must file Form 5500-EZ annually.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: What is the Solo 401k contribution limit for 2026?</strong><br />
        A: The total limit is $70,000. The employee deferral limit ranges from $23,500 (under 50) to
        $34,750 (ages 60–63 with super catch-up).
      </p>
      <p>
        <strong>Q: Who qualifies to open a Solo 401k?</strong><br />
        A: Self-employed individuals with no full-time W-2 employees other than a spouse.
      </p>
      <p>
        <strong>Q: What is the SECURE 2.0 super catch-up for age 60–63?</strong><br />
        A: It allows an additional $11,250 in employee deferrals beyond the standard $23,500 limit.
      </p>
      <p>
        <strong>Q: Can I have both a Solo 401k and a regular employer 401k?</strong><br />
        A: Yes, but the combined employee deferral limit applies across all plans.
      </p>
      <p>
        <strong>Q: How is the employer contribution calculated?</strong><br />
        A: Take your net SE income, multiply by 0.9235, then multiply by 25%.
      </p>
      <p>
        <strong>Q: Traditional vs Roth Solo 401k — which reduces taxes more now?</strong><br />
        A: Traditional reduces current taxes. Roth provides tax-free withdrawals in retirement.
      </p>
      <p>
        <strong>Q: What is the deadline to open and contribute for 2026?</strong><br />
        A: Open by December 31, 2026. Employee deferrals by April 15, 2027 (or October 15 with extension).
      </p>
      <p>
        <strong>Q: Does Solo 401k reduce self-employment tax?</strong><br />
        A: Only employee salary deferrals reduce SE tax. Employer profit-sharing contributions do not.
      </p>

      <RelatedCalculators currentPage="solo-401k-contribution-calculator" />
    </>
  );
}

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
  const [salePrice, setSalePrice] = useState("500000");
  const [commissionRate, setCommissionRate] = useState("6");
  const [splitPercentage, setSplitPercentage] = useState("50");
  const [transactions, setTransactions] = useState("10");

  const price = parseFloat(salePrice) || 0;
  const rate = parseFloat(commissionRate) || 0;
  const split = parseFloat(splitPercentage) || 100;
  const count = parseInt(transactions) || 1;

  const totalCommission = price * (rate / 100);
  const agentCommission = totalCommission * (split / 100);
  const brokerageShare = totalCommission - agentCommission;
  const annualCommission = agentCommission * count;
  const effectiveRate = rate * (split / 100);

  // Tier-based splits
  const tiers = [
    { label: "Traditional Split (50/50)", splitVal: 50, desc: "Standard for new agents at full-service brokerages" },
    { label: "Experienced Split (70/30)", splitVal: 70, desc: "Common for experienced agents producing $100k+ in commission" },
    { label: "Top Producer Split (80/20)", splitVal: 80, desc: "Reserved for top producers generating $250k+ annually" },
    { label: "Team Lead Split (90/10)", splitVal: 90, desc: "For team leads who bring in high-volume business" },
    { label: "100% Commission", splitVal: 100, desc: "Flat fee or 100% commission model with monthly desk fee" },
  ];

  const schemaData = {
    name: "Commission Calculator 2026",
    description: "Calculate real estate commission earnings, agent splits, and annual income projections. Estimate your take-home commission after brokerage splits.",
    url: "https://www.themetricapp.com/calculators/commission-calculator",
  };

  return (
    <CalculatorShell
      title="Commission Calculator (2026)"
      subtitle="Calculate how much commission you earn as a real estate agent or broker. Enter the sale price, commission rate, agent split, and number of transactions to see your total commission, agent share, and annual earnings."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Total Commission" value={fmtWhole(totalCommission)} sub={`${rate}% of ${fmtWhole(price)}`} highlight />
            <ResultCard label="Your Commission (After Split)" value={fmtWhole(agentCommission)} sub={`${split}% of total commission = ${effectiveRate.toFixed(2)}% effective rate`} />
            <ResultCard label="Annual Projection" value={fmtWhole(annualCommission)} sub={`${count} transaction${count > 1 ? "s" : ""} per year`} />
          </div>

          {/* Commission Split Breakdown */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-[#0D9488] mb-3">Commission Split Breakdown</p>
            <div className="space-y-3">
              {[
                { label: `Your Share (${split}%)`, value: agentCommission, color: "from-[#0D9488] to-[#14B8A6]" },
                { label: `Brokerage Share (${(100 - split).toFixed(0)}%)`, value: brokerageShare, color: "from-[#F59E0B] to-[#F97316]" },
              ].map((item) => {
                const maxVal = totalCommission;
                const pct = maxVal > 0 ? (item.value / maxVal) * 100 : 0;
                return (
                  <div key={item.label} className="flex items-center gap-3 text-sm">
                    <span className="w-36 text-right text-[#64748B] shrink-0">{item.label}</span>
                    <div className="flex-1 h-6 rounded-md bg-[#F1F5F9] dark:bg-slate-700 overflow-hidden">
                      <div
                        className={`h-full rounded-md bg-gradient-to-r ${item.color} transition-all duration-500 flex items-center px-2`}
                        style={{ width: Math.max(2, pct) + "%" }}
                      >
                        <span className="text-xs font-semibold text-white whitespace-nowrap">
                          {fmtWhole(item.value)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Alternative Split Comparison */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-[#0D9488] mb-3">Compare Commission Splits</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-slate-700">
                    <th className="border border-gray-300 dark:border-slate-600 px-3 py-2 text-left font-semibold">Split Model</th>
                    <th className="border border-gray-300 dark:border-slate-600 px-3 py-2 text-right font-semibold">Your Share</th>
                    <th className="border border-gray-300 dark:border-slate-600 px-3 py-2 text-right font-semibold">Brokerage</th>
                    <th className="border border-gray-300 dark:border-slate-600 px-3 py-2 text-right font-semibold">Per Deal</th>
                    <th className="border border-gray-300 dark:border-slate-600 px-3 py-2 text-right font-semibold">Annual (10 deals)</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((tier) => {
                    const agentAmt = totalCommission * (tier.splitVal / 100);
                    const brokerAmt = totalCommission - agentAmt;
                    return (
                      <tr key={tier.label} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                        <td className="border border-gray-300 dark:border-slate-600 px-3 py-2">
                          <span className="font-medium">{tier.label}</span>
                          <span className="text-xs text-gray-500 dark:text-slate-400 block">{tier.desc}</span>
                        </td>
                        <td className="border border-gray-300 dark:border-slate-600 px-3 py-2 text-right font-medium">{tier.splitVal}/{100 - tier.splitVal}</td>
                        <td className="border border-gray-300 dark:border-slate-600 px-3 py-2 text-right">{fmtWhole(brokerAmt)}</td>
                        <td className="border border-gray-300 dark:border-slate-600 px-3 py-2 text-right">{fmtWhole(agentAmt)}</td>
                        <td className="border border-gray-300 dark:border-slate-600 px-3 py-2 text-right font-medium text-green-600 dark:text-green-400">{fmtWhole(agentAmt * count)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="salePrice" label="Sale Price" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} prefix="$" placeholder="500000" helpText="Total property sale price" />
        <InputField id="commissionRate" label="Commission Rate" value={commissionRate} onChange={(e) => setCommissionRate(e.target.value)} suffix="%" placeholder="6" helpText="Total commission rate charged to client (typical 5-6%)" />
        <InputField id="splitPercentage" label="Your Split Percentage" value={splitPercentage} onChange={(e) => setSplitPercentage(e.target.value)} suffix="%" placeholder="50" helpText="Percentage of commission you keep after brokerage split" />
        <InputField id="transactions" label="Transactions Per Year" value={transactions} onChange={(e) => setTransactions(e.target.value)} placeholder="10" helpText="Estimated number of closed transactions per year" />
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
            <a href="https://www.nar.realtor/research-and-statistics" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              NAR — Real Estate Commission Data
            </a>
            {" · "}
            <a href="https://www.investopedia.com/terms/r/realestateagent.asp" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Investopedia — Real Estate Agent Guide
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Commission Calculator</h2>
      <p>
        This Commission Calculator is designed for <strong>real estate agents</strong> and <strong>brokers</strong> to calculate their earnings from property sales. Enter the <strong>sale price</strong>, <strong>commission rate</strong>, your <strong>split percentage with your brokerage</strong>, and <strong>expected annual transactions</strong> to see your projected income.
      </p>
      <p>
        The calculator shows the <strong>total commission</strong>, <strong>your share after the split</strong>, and <strong>annual projected earnings</strong>. It also includes a visual breakdown of the split and a comparison table showing how different split models affect your take-home pay.
      </p>
      <p>
        <strong>Pro tip:</strong> Use the split comparison table to see how negotiating a better split with your brokerage can dramatically increase your income. Moving from a 50/50 split to a 70/30 split on the same number of transactions can double your earnings.
      </p>

      <h2>Commission Formula & Methodology</h2>
      <p>
        <strong>Total Commission = Sale Price × (Commission Rate ÷ 100)</strong>
      </p>
      <p>
        <strong>Agent Commission = Total Commission × (Agent Split ÷ 100)</strong>
      </p>
      <p>
        <strong>Effective Commission Rate = Total Commission Rate × (Agent Split ÷ 100)</strong>
      </p>
      <p>
        <strong>Annual Earnings = Agent Commission × Number of Transactions</strong>
      </p>
      <p>
        <strong>Example — $500,000 home at 6% commission with a 50/50 split:</strong>
      </p>
      <ul>
        <li>Sale Price: <strong>$500,000</strong></li>
        <li>Commission Rate: <strong>6%</strong></li>
        <li>Total Commission: $500,000 × 0.06 = <strong>$30,000</strong></li>
        <li>Your Split: <strong>50%</strong></li>
        <li>Your Commission: $30,000 × 0.50 = <strong>$15,000</strong></li>
        <li>Brokerage Share: $30,000 × 0.50 = <strong>$15,000</strong></li>
        <li>Effective Rate: 6% × 50% = <strong>3.0%</strong></li>
        <li>Annual Earnings (10 deals): $15,000 × 10 = <strong>$150,000</strong></li>
      </ul>

      <h3>How Commission Splits Work by Experience Level</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Experience Level</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Typical Split</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Annual Production</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Per $500k Deal</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">10 Deals/Year</th>
            </tr>
          </thead>
          <tbody>
            {[
              { level: "New Agent", split: "50/50", production: "$50k-$100k", perDeal: "$15,000", annual: "$150,000" },
              { level: "Experienced Agent", split: "70/30", production: "$100k-$250k", perDeal: "$21,000", annual: "$210,000" },
              { level: "Top Producer", split: "80/20", production: "$250k-$500k", perDeal: "$24,000", annual: "$240,000" },
              { level: "Team Lead", split: "90/10", production: "$500k+", perDeal: "$27,000", annual: "$270,000" },
              { level: "100% Commission", split: "100/0*", production: "Varies", perDeal: "$30,000", annual: "$300,000" },
            ].map((row, i) => (
              <tr key={i} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{row.level}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{row.split}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{row.production}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-medium">{row.perDeal}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">{row.annual}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * 100% commission models typically charge a monthly desk fee or transaction fee instead of a split.
        </p>
      </div>

      <h2>Real Estate Commission Models in 2026</h2>
      <p>
        Real estate commission structures vary by brokerage, market, and experience level. Here are the most common models in 2026:
      </p>
      <h3>Traditional Split Model</h3>
      <p>
        The most common model, especially for new agents. The brokerage provides office space, training, administrative support, and brand recognition. In return, they take a percentage of each commission. Splits typically improve as you produce more volume.
      </p>
      <h3>Graduated Split Model</h3>
      <p>
        Some brokerages offer graduated splits where the agent keeps a higher percentage after reaching certain production thresholds. For example, a 50/50 split up to $100,000 in commission, then 70/30 on anything above that. This incentivizes agents to sell more.
      </p>
      <h3>100% Commission Model</h3>
      <p>
        Also called a "flat fee" or "cap" model, the agent keeps 100% of their commissions but pays a monthly desk fee ($500-2,000/month) and/or a per-transaction fee ($300-1,000). This model is best for high-producing agents who can keep significantly more of their earnings.
      </p>
      <h3>Team Model</h3>
      <p>
        Agents who join a team typically have a different split structure. The team lead takes a percentage (usually 20-40%) in exchange for providing leads, support, and mentorship. Team agents often close more deals than solo agents, potentially earning more despite the lower split.
      </p>

      <h2>Strategies to Maximize Your Commission Income</h2>
      <h3>1. Negotiate Your Split</h3>
      <p>
        Your commission split is <strong>negotiable</strong>. As you gain experience and build a track record, ask for a better split. Come prepared with data on your production volume and the value you bring to the brokerage. Even a 5% improvement in your split can mean thousands of dollars per year.
      </p>
      <h3>2. Increase Transaction Volume</h3>
      <p>
        The most direct way to increase your income is to close more deals. Invest in lead generation, nurture past clients for referrals, build your online presence, and partner with other professionals (lenders, inspectors, title companies) who can refer business to you.
      </p>
      <h3>3. Focus on Higher-Price Segments</h3>
      <p>
        Selling one $2 million home at 3% (your side) generates the same $30,000 commission as selling four $500,000 homes at the same rate — with significantly less work. If you can break into the luxury market, your per-deal income increases dramatically.
      </p>
      <h3>4. Reduce Business Expenses</h3>
      <p>
        Real estate agents have significant business expenses — marketing, transportation, continuing education, association fees, MLS fees, and technology tools. Track every deductible expense and use our{' '}
        <Link href="/calculators/small-business-tax-deduction-calculator"><strong>Small Business Tax Deduction Calculator</strong></Link> to maximize your write-offs.
      </p>
      <h3>5. Build a Referral Network</h3>
      <p>
        Referral business costs significantly less to acquire than cold leads. Build relationships with mortgage brokers, home inspectors, contractors, and moving companies. Offer reciprocal referrals and maintain a CRM to track past clients.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>What is the typical real estate commission rate in 2026?</h3>
      <p>
        The typical total commission rate in the US is <strong>5-6%</strong> of the sale price, though rates have been under pressure due to recent legal settlements and increased competition. The buyer's agent and seller's agent each typically receive half (2.5-3%). Negotiated lower rates (4-5%) are becoming more common.
      </p>
      <h3>How does a commission split work?</h3>
      <p>
        A commission split is the percentage of the total commission that the agent keeps after the brokerage takes their share. For example, a 70/30 split means the agent keeps 70% and the brokerage keeps 30%. On a $30,000 commission, a 70/30 split gives the agent $21,000 and the brokerage $9,000.
      </p>
      <h3>What is a good commission split for a new agent?</h3>
      <p>
        New agents typically start with <strong>50/50 splits</strong> while they receive training, mentorship, and leads from the brokerage. After 1-2 years or after reaching production milestones (e.g., $100k in commission), agents can negotiate to <strong>60/40, 70/30</strong>, or better.
      </p>
      <h3>Are there caps on how much I pay my brokerage?</h3>
      <p>
        Some brokerages have a <strong>commission cap</strong> — once you have paid the brokerage a certain amount (e.g., $30,000/year), your split improves to 100% for the rest of the year. This is a valuable structure for high-producing agents who close 15+ deals per year.
      </p>
      <h3>What expenses do real estate agents need to deduct?</h3>
      <p>
        Common deductible expenses include: <strong>MLS fees</strong>, <strong>association dues</strong> (NAR, state, local), <strong>continuing education</strong>, <strong>marketing and advertising</strong>, <strong>vehicle expenses</strong> (mileage or actual), <strong>office supplies</strong>, <strong>technology tools</strong> (CRM, photo software), <strong>home office deduction</strong>, and <strong>health insurance premiums</strong> (for self-employed agents).
      </p>
      <h3>How many transactions does a typical agent close per year?</h3>
      <p>
        According to the National Association of Realtors, the median real estate agent closes approximately <strong>10-12 transactions per year</strong>, but this varies widely. The top 20% of agents close <strong>25+ deals per year</strong>, while part-time agents may close <strong>2-5 deals per year</strong>. Experience, market conditions, and lead generation efforts significantly impact volume.
      </p>

      <h2>Related Tools</h2>
      <p>Check out these other helpful calculators for real estate professionals and business owners:</p>
      <ul>
        <li><Link href="/calculators/small-business-tax-deduction-calculator">Small Business Tax Deduction Calculator</Link> — Maximize your tax write-offs as a real estate agent.</li>
        <li><Link href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</Link> — Calculate SE tax on your commission income.</li>
        <li><Link href="/calculators/solo-401k-contribution-calculator">Solo 401k Contribution Calculator</Link> — Save for retirement with pre-tax commission dollars.</li>
        <li><Link href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</Link> — Help your clients understand their buying power.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to real estate commission calculations and strategies, read our blog post:{" "}
          <a href="/blog/commission-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Commission Calculator Guide 2026
          </a>
          .
        </p>
      </div>

      <RelatedCalculators currentPage="commission-calculator" />

      </>
  );
}

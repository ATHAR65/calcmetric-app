"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

export default function Calculator() {
  const [fixedCosts, setFixedCosts] = useState("");
  const [variableCost, setVariableCost] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [targetProfit, setTargetProfit] = useState("");

  const fixed = parseFloat(fixedCosts) || 0;
  const variable = parseFloat(variableCost) || 0;
  const price = parseFloat(sellingPrice) || 0;
  const target = parseFloat(targetProfit) || 0;

  const errors = {};
  if (fixedCosts !== "" && fixed < 0) errors.fixed = "Fixed costs can't be negative.";
  if (variableCost !== "" && variable < 0) errors.variable = "Variable cost can't be negative.";
  if (sellingPrice !== "" && price <= 0) errors.price = "Selling price must be greater than zero.";
  if (targetProfit !== "" && target < 0) errors.target = "Target profit can't be negative.";
  const priceTooLow = price > 0 && variable >= price;
  if (priceTooLow) errors.price = "Selling price must exceed variable cost.";

  const valid = price > 0 && !priceTooLow;

  const contributionMargin = price - variable;
  const contributionMarginPct = valid ? (contributionMargin / price) * 100 : 0;
  const breakEvenUnits = valid && contributionMargin > 0 ? fixed / contributionMargin : 0;
  const breakEvenRevenue = valid && contributionMargin > 0 ? breakEvenUnits * price : 0;
  const unitsForTarget = valid && contributionMargin > 0 ? (fixed + target) / contributionMargin : 0;

  // Color band for contribution margin %
  let marginColor = "text-[#1d1a33]";
  let marginLabel = "";
  if (valid) {
    if (contributionMarginPct > 30) {
      marginColor = "text-green-600";
      marginLabel = "Healthy (>30%)";
    } else if (contributionMarginPct >= 15) {
      marginColor = "text-amber-500";
      marginLabel = "Moderate (15–30%)";
    } else {
      marginColor = "text-red-500";
      marginLabel = "Thin (<15%)";
    }
  }

  // Visual bar: fixed-cost zone vs profit zone (relative to units needed for target, capped)
  const beU = Math.ceil(breakEvenUnits);
  const targetU = Math.ceil(unitsForTarget);
  const beFraction = targetU > 0 ? Math.min(100, (beU / targetU) * 100) : (beU > 0 ? 100 : 0);

  const schemaData = {
    name: "Break-Even Calculator for Small Business",
    description: "Find how many units you need to sell to cover fixed and variable costs, with contribution margin analysis.",
    url: "https://www.themetricapp.com/calculators/break-even-calculator-small-business",
  };

  return (
    <CalculatorShell
      title="Break-Even Calculator (Small Business & E-Commerce)"
      subtitle="Find exactly how many units you need to sell to cover your costs — plus contribution margin and units to hit your profit target."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          {!valid ? (
            <p className="text-center text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
              {priceTooLow ? "Selling price must exceed variable cost to break even." : "Enter a selling price above your variable cost to see results."}
            </p>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <ResultCard label="Break-Even Units / Month" value={Math.ceil(breakEvenUnits).toLocaleString("en-US")} highlight />
                <ResultCard label="Break-Even Revenue / Month" value={fmt(breakEvenRevenue)} />
                <ResultCard label="Contribution Margin / Unit" value={fmt(contributionMargin)} />
                <ResultCard label="Contribution Margin %" value={pct(contributionMarginPct)} />
                {target > 0 && (
                  <ResultCard label="Units to Hit Target" value={Math.ceil(unitsForTarget).toLocaleString("en-US")} sub={"+" + fmt(target) + " profit"} highlight />
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1 text-xs text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
                  <span>Cover fixed costs</span>
                  {target > 0 && <span>Reach target profit</span>}
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-green-200">
                  <div className="h-full bg-[#5d5a78]" style={{ width: beFraction + "%" }} />
                </div>
                <p className="mt-1 text-xs text-[#928fab]" style={{ fontFamily: "var(--font-body)" }}>
                  Gray = units needed to cover fixed costs &middot; green = profit zone.
                </p>
              </div>

              <div className={`text-sm font-medium ${marginColor}`} style={{ fontFamily: "var(--font-body)" }}>
                Contribution margin status: {marginLabel}
              </div>
            </>
          )}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="fixedCosts" label="Fixed Costs Per Month" value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)} prefix="$" placeholder="800" helpText="Rent, software, salaries, insurance" />
          {errors.fixed && <p className="text-xs text-red-500 mt-1">{errors.fixed}</p>}
        </div>
        <div>
          <InputField id="variableCost" label="Variable Cost Per Unit" value={variableCost} onChange={(e) => setVariableCost(e.target.value)} prefix="$" placeholder="12" helpText="COGS, packaging, shipping per unit" />
          {errors.variable && <p className="text-xs text-red-500 mt-1">{errors.variable}</p>}
        </div>
        <div>
          <InputField id="sellingPrice" label="Selling Price Per Unit" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} prefix="$" placeholder="35" helpText="What the customer pays per unit" />
          {errors.price && <p className="text-xs text-red-500 mt-1">{errors.price}</p>}
        </div>
        <div>
          <InputField id="targetProfit" label="Target Profit Per Month (optional)" value={targetProfit} onChange={(e) => setTargetProfit(e.target.value)} prefix="$" placeholder="0" helpText="Extra profit you want above break-even" />
          {errors.target && <p className="text-xs text-red-500 mt-1">{errors.target}</p>}
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
          <span className="text-gray-600 dark:text-slate-300"><strong>Last Updated:</strong> June 2026</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Author:</strong> Financial Metrics Team</span>
        </div>
      </div>

      <h2>What is a Break-Even Point?</h2>
      <p>
        Your <strong>break-even point</strong> is the sales level at which total revenue exactly equals total costs — you make no profit and no loss. It is the single most important number for any small business or e-commerce store because it tells you the minimum you must sell each month just to keep the lights on. Sell one unit beyond break-even and you start earning profit; sell one below and you are losing money.
      </p>
      <p>
        A <strong>break-even analysis</strong> separates your costs into two buckets: <strong>fixed costs</strong> (rent, software, salaries, insurance — expenses that stay the same regardless of how much you sell) and <strong>variable costs</strong> (cost of goods, packaging, and shipping that rise with each unit). The gap between your selling price and your variable cost per unit — the <strong>contribution margin</strong> — is what funds your fixed costs and, eventually, your profit.
      </p>

      <h2>How to Use This Break-Even Calculator</h2>
      <p>
        Enter your <strong>monthly fixed costs</strong>, your <strong>variable cost per unit</strong>, and your <strong>selling price per unit</strong>. Optionally add a <strong>target profit</strong> to see how many units you must sell to clear a specific profit, not just break even. The calculator instantly returns your break-even units and revenue per month, your contribution margin per unit and as a percentage, and a color-coded health signal — green above 30%, amber from 15–30%, and red below 15%. If your selling price does not exceed your variable cost, you will see a friendly error, because no sales volume can produce a profit in that case.
      </p>

      <h2>Break-Even Formula Explained with a Real Example</h2>
      <p>
        <strong>Contribution Margin = Selling Price − Variable Cost per Unit.</strong> <strong>Break-Even Units = Fixed Costs ÷ Contribution Margin.</strong> <strong>Break-Even Revenue = Break-Even Units × Selling Price.</strong> To include a profit goal: <strong>Units for Target = (Fixed Costs + Target Profit) ÷ Contribution Margin.</strong>
      </p>
      <p>
        <strong>Worked example:</strong> You sell a product for <strong>$35</strong>, your cost of goods is <strong>$12</strong>, and your fixed costs are <strong>$800/month</strong>. Your contribution margin is $35 − $12 = <strong>$23</strong> per unit (about a 65.7% margin). Break-even units = $800 ÷ $23 ≈ <strong>35 units</strong> per month, or roughly <strong>$1,217 in revenue</strong>. If you also want $1,000 of monthly profit, you would need ($800 + $1,000) ÷ $23 ≈ <strong>79 units</strong>.
      </p>

      <h2>What is Contribution Margin and Why Does It Matter?</h2>
      <p>
        <strong>Contribution margin</strong> is the portion of each sale left over after variable costs — the money that &quot;contributes&quot; to covering fixed costs and generating profit. A higher contribution margin means each sale does more work, so you break even on fewer units and you are more resilient to slow months. As a percentage, contribution margin tells you the share of every dollar of revenue available to cover overhead: at 65.7%, about 66 cents of each dollar goes toward fixed costs and profit. Businesses with thin margins (under 15%) must sell large volumes to survive, while those above 30% have far more breathing room. Tracking contribution margin per product also reveals which items deserve more marketing and which quietly drain your business.
      </p>

      <h2>Break-Even Analysis for E-Commerce — What&apos;s Different?</h2>
      <p>
        E-commerce sellers often miscalculate break-even because they forget hidden per-unit costs. Your true <strong>variable cost</strong> should include not just the product cost but also <strong>shipping</strong>, <strong>packaging</strong>, <strong>payment processing</strong> (roughly 3% per order), and <strong>marketplace or platform fees</strong> on sites like Amazon, Etsy, or Shopify. <strong>Returns</strong> are another silent margin-killer: a 5–10% return rate effectively raises your variable cost on every unit. Build these into your variable cost figure and your break-even point becomes realistic. Many sellers who think they break even at 30 units actually need 45 once shipping, fees, and returns are included.
      </p>

      <h2>How to Lower Your Break-Even Point</h2>
      <p>
        There are three levers. First, <strong>raise your selling price</strong> — even a small increase widens your contribution margin and lowers break-even units, often with little effect on demand. Second, <strong>reduce variable costs</strong> by negotiating supplier pricing, buying in bulk, cutting packaging waste, or lowering shipping costs through better carriers. Third, <strong>trim fixed costs</strong> — downgrade unused software subscriptions, renegotiate rent, or move to usage-based tools while you scale. Because break-even units = fixed costs ÷ contribution margin, improving either side of that ratio brings the finish line closer.
      </p>

      <h2>Common Mistakes to Avoid</h2>
      <p>
        The biggest mistake is <strong>treating variable costs as only the product cost</strong>, ignoring shipping, fees, and returns — which makes break-even look far easier than it is. Another is <strong>mixing fixed and variable costs</strong>, such as counting a flat monthly software fee as a per-unit cost. Sellers also forget that <strong>break-even is a moving target</strong>: a price change, a new ad budget, or a supplier increase all shift it. Finally, do not confuse <strong>revenue with profit</strong> — hitting your break-even revenue means you have covered costs, not that you have made money.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is a break-even point in business?</h3>
      <p>It is the sales volume at which total revenue equals total costs, so you make neither a profit nor a loss. Every unit sold beyond it generates profit.</p>
      <h3>How do I calculate break-even for an e-commerce product?</h3>
      <p>Divide your monthly fixed costs by your contribution margin (selling price minus all variable costs, including shipping, packaging, payment processing, and platform fees). The result is the number of units you must sell to break even.</p>
      <h3>What is contribution margin and why does it matter?</h3>
      <p>Contribution margin is selling price minus variable cost per unit — the money left to cover fixed costs and profit. A higher margin means you break even on fewer units and are more resilient to slow periods.</p>
      <h3>What is a good break-even point for a small business?</h3>
      <p>There is no universal number, but a healthy business reaches break-even well within its realistic monthly sales capacity, ideally using less than half of it, leaving room for profit. A contribution margin above 30% generally indicates a comfortable position.</p>
      <h3>How do I lower my break-even point?</h3>
      <p>Raise your selling price, reduce variable costs (supplier pricing, shipping, packaging), or cut fixed costs. Improving either contribution margin or fixed costs lowers the number of units you must sell to break even.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/ecommerce-net-profit-margin">E-Commerce Profit Margin Calculator</a> — Net profit, ROAS, and margin analysis.</li>
        <li><a href="/calculators/shopify-profit-calculator-2026">Shopify Profit Calculator</a> — Profit after fees, COGS, and marketing.</li>
        <li><a href="/calculators/amazon-seller-fee-calculator-2026">Amazon Seller Fee Calculator</a> — Referral fees, closing fees, and net profit.</li>
      </ul>

      <RelatedCalculators currentPage="break-even-calculator-small-business" />
    </>
  );
}

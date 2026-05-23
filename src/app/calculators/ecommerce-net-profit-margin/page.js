"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(2) + "%";

export default function EcommerceNetProfitMargin() {
  const [cogs, setCogs] = useState("");
  const [price, setPrice] = useState("");
  const [marketing, setMarketing] = useState("");
  const [shipping, setShipping] = useState("");

  const costOfGoods = parseFloat(cogs) || 0;
  const sellingPrice = parseFloat(price) || 0;
  const marketingSpend = parseFloat(marketing) || 0;
  const shippingCost = parseFloat(shipping) || 0;

  const grossProfit = sellingPrice - costOfGoods;
  const totalExpenses = costOfGoods + marketingSpend + shippingCost;
  const netProfit = sellingPrice - totalExpenses;
  const grossMargin = sellingPrice > 0 ? (grossProfit / sellingPrice) * 100 : 0;
  const netMargin = sellingPrice > 0 ? (netProfit / sellingPrice) * 100 : 0;
  const roi = totalExpenses > 0 ? (netProfit / totalExpenses) * 100 : 0;
  const breakEvenUnits = netProfit > 0 ? Math.ceil(marketingSpend / netProfit) : 0;

  const schemaData = {
    name: "E-Commerce Net Profit Margin Calculator",
    description: "Calculate gross profit, net profit, profit margin percentage, and ROI for any e-commerce product.",
    url: "https://calcmetric.com/calculators/ecommerce-net-profit-margin",
  };

  return (
    <CalculatorShell
      title="E-Commerce Net Profit Margin Calculator"
      subtitle="Calculate your true net profit, margin percentage, and ROI for any product you sell online."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ResultCard label="Gross Profit" value={fmt(grossProfit)} sub={`Margin: ${pct(grossMargin)}`} />
          <ResultCard label="Total Expenses" value={fmt(totalExpenses)} />
          <ResultCard label="Net Profit" value={fmt(netProfit)} highlight />
          <ResultCard label="Net Margin" value={pct(netMargin)} highlight />
          <ResultCard label="ROI" value={pct(roi)} sub="Return on Investment" />
          <ResultCard label="Break-Even Units" value={breakEvenUnits > 0 ? breakEvenUnits.toString() : "—"} sub="To cover marketing" />
          <ResultCard label="Revenue" value={fmt(sellingPrice)} />
          <ResultCard label="COGS" value={fmt(costOfGoods)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="cogs" label="Cost of Goods Sold (COGS)" value={cogs} onChange={(e) => setCogs(e.target.value)} prefix="$" placeholder="12.50" helpText="Your cost per unit" />
        <InputField id="price" label="Selling Price" value={price} onChange={(e) => setPrice(e.target.value)} prefix="$" placeholder="39.99" helpText="Customer-facing price" />
        <InputField id="marketing" label="Marketing Spend (per unit)" value={marketing} onChange={(e) => setMarketing(e.target.value)} prefix="$" placeholder="8.00" helpText="Ads, promos per unit sold" />
        <InputField id="shipping" label="Shipping Cost (per unit)" value={shipping} onChange={(e) => setShipping(e.target.value)} prefix="$" placeholder="4.50" helpText="Your cost to ship" />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the E-Commerce Net Profit Margin Calculator</h2>
      <p>
        Understanding your true net profit margin is the difference between running a profitable e-commerce business and unknowingly losing money on every sale. Many sellers focus solely on gross profit (selling price minus product cost), but the real picture includes marketing expenses, shipping costs, platform fees, and other overhead. This calculator provides a complete per-unit profitability analysis in real time.
      </p>
      <p>
        Enter your <strong>Cost of Goods Sold (COGS)</strong> — the direct cost of manufacturing or purchasing one unit of your product, including materials, labor, and supplier shipping to your warehouse. Next, enter your <strong>Selling Price</strong> — the price your customer pays at checkout. Then add your <strong>Marketing Spend per unit</strong> — divide your total advertising spend by the number of units sold to get your customer acquisition cost (CAC) per unit. Finally, enter your <strong>Shipping Cost per unit</strong> — the actual cost you pay to ship the product to the customer, whether through USPS, UPS, FedEx, or a fulfillment center like Amazon FBA.
      </p>
      <p>
        The calculator instantly computes your gross profit, net profit, gross margin percentage, net margin percentage, return on investment (ROI), and the number of units you need to sell just to break even on your marketing spend. These metrics are essential for optimizing pricing, evaluating advertising performance, and ensuring long-term business viability.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <h3>Gross Profit</h3>
      <p>
        <strong>Gross Profit = Selling Price − COGS</strong>. This is the most basic profitability metric, showing how much you earn per unit before accounting for operating expenses. For example, if you sell a product for $39.99 with a COGS of $12.50, your gross profit is $27.49. A healthy e-commerce gross margin typically ranges from 50%–80% for private label products, 30%–50% for wholesale/resale, and 60%–90% for digital products.
      </p>
      <h3>Net Profit</h3>
      <p>
        <strong>Net Profit = Selling Price − (COGS + Marketing Spend + Shipping Cost)</strong>. This is your true bottom-line profit per unit after all direct costs. Using our example with $8.00 marketing and $4.50 shipping: Net Profit = $39.99 − ($12.50 + $8.00 + $4.50) = $39.99 − $25.00 = $14.99. This is the actual cash you retain from each sale.
      </p>
      <h3>Net Profit Margin Percentage</h3>
      <p>
        <strong>Net Margin % = (Net Profit ÷ Selling Price) × 100</strong>. This tells you what percentage of each dollar of revenue you keep as profit. Using our example: ($14.99 ÷ $39.99) × 100 = 37.48%. Industry benchmarks for e-commerce net margins vary widely: 10%–20% is considered healthy for competitive markets, 20%–40% is strong, and 40%+ is excellent (often seen in digital products or niche markets with low competition).
      </p>
      <h3>Return on Investment (ROI)</h3>
      <p>
        <strong>ROI % = (Net Profit ÷ Total Expenses) × 100</strong>. ROI measures the efficiency of your investment — how much profit you generate for every dollar spent. An ROI of 100% means you double your money; 50% means you earn $0.50 for every $1 invested. In our example: ($14.99 ÷ $25.00) × 100 = 59.96% ROI. For e-commerce advertising specifically, a 3:1 return on ad spend (ROAS) or higher is generally considered profitable.
      </p>
      <h3>Break-Even Analysis</h3>
      <p>
        <strong>Break-Even Units = Marketing Spend ÷ Net Profit per Unit</strong>. This tells you how many units you need to sell before your marketing investment starts generating positive returns. If your marketing budget is $8.00 per unit and net profit is $14.99, break-even is less than 1 unit (meaning each sale is profitable). However, if net profit were $3.00 and total marketing spend were $1,000, you would need to sell 334 units to break even.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>What is a good net profit margin for e-commerce businesses?</h3>
      <p>
        Net profit margins in e-commerce vary dramatically by business model, product category, and scale. For <strong>Amazon FBA private label sellers</strong>, a net margin of 15%–25% after all fees (FBA fulfillment, referral fees, PPC advertising) is considered healthy. For <strong>Shopify/DTC brands</strong>, margins of 20%–40% are achievable because you avoid marketplace referral fees, though customer acquisition costs through Facebook/Google ads can be higher. <strong>Dropshipping businesses</strong> typically operate on thinner margins of 10%–20% due to higher product costs and shipping times. <strong>Digital product sellers</strong> (courses, templates, software) enjoy the highest margins at 70%–95% because there are no COGS or shipping costs after initial creation. The key insight is that margin percentage matters less than total profit dollars — a business with 10% margins on $1 million in revenue ($100K profit) outearns a business with 50% margins on $100K revenue ($50K profit).
      </p>
      <h3>How do I account for platform fees (Amazon, Shopify, Etsy) in this calculator?</h3>
      <p>
        To incorporate platform fees, add them to either your COGS or your marketing/shipping fields depending on the fee type. For <strong>Amazon FBA</strong>, add the referral fee (typically 15% of selling price) and FBA fulfillment fee ($3–$8 per unit depending on size/weight) to your COGS. For <strong>Shopify</strong>, add the payment processing fee (2.9% + $0.30 per transaction) and monthly subscription cost (prorated per unit) to your expenses. For <strong>Etsy</strong>, add the 6.5% transaction fee + 3% + $0.25 payment processing fee to your COGS. By including all platform-specific fees in your cost structure, the calculator will accurately reflect your true net margin. For the most precise analysis, create a spreadsheet that itemizes every cost component, then enter the total per-unit cost into this calculator.
      </p>
      <h3>How can I improve my e-commerce net profit margin?</h3>
      <p>
        There are five primary levers for improving e-commerce profitability: <strong>(1) Reduce COGS</strong> by negotiating with suppliers, ordering larger quantities for volume discounts, or sourcing from alternative manufacturers. Even a $1–2 reduction in COGS per unit can add thousands in annual profit. <strong>(2) Optimize marketing spend</strong> by improving ad targeting, testing creative variations, and focusing on channels with the highest ROAS. Reducing your CAC from $10 to $7 per customer instantly adds $3 to your net profit per unit. <strong>(3) Increase average order value (AOV)</strong> through bundling, upselling, and cross-selling. Shipping and marketing costs are often fixed per order, so higher AOV improves margins. <strong>(4) Negotiate shipping rates</strong> by using shipping aggregators like Pirate Ship, ShipStation, or negotiating UPS/FedEx volume discounts. <strong>(5) Raise prices strategically</strong> — many sellers undercharge due to fear of losing customers, but a 5–10% price increase often has minimal impact on conversion rates while dramatically improving margins.
      </p>
    </>
  );
}

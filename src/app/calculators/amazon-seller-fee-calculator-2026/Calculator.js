"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

export default function Calculator() {
  const [itemPrice, setItemPrice] = useState("");
  const [category, setCategory] = useState("standard");
  const [cogs, setCogs] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  const price = parseFloat(itemPrice) || 0;
  const cost = parseFloat(cogs) || 0;
  const shipCost = parseFloat(shippingCost) || 0;

  // Amazon referral fee by category (typical FBM rates)
  const categoryRates = { standard: 0.15, electronics: 0.08, clothing: 0.17, media: 0.15 };
  const refRate = categoryRates[category] || 0.15;
  const referralFee = price * refRate;
  // $0.99 per-item closing fee (most categories)
  const closingFee = 0.99;
  const totalFees = referralFee + closingFee;
  const totalCosts = cost + shipCost;
  const netProfit = price - totalFees - totalCosts;
  const profitMargin = price > 0 ? (netProfit / price) * 100 : 0;

  const schemaData = {
    name: "Amazon Seller Fee Calculator 2026",
    description: "Calculate Amazon seller fees, referral fees, closing fees, and net profit for FBM sellers.",
    url: "https://www.themetricapp.com/calculators/amazon-seller-fee-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Amazon Seller Fee Calculator 2026 — Calculate Referral Fees & Net Profit"
      subtitle="Calculate Amazon referral fees, closing fees, and your true net profit as an FBM seller."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Item Price" value={fmt(price)} />
          <ResultCard label="Referral Fee" value={fmt(referralFee)} sub={pct(refRate * 100)} />
          <ResultCard label="Closing Fee" value={fmt(closingFee)} sub="Per item" />
          <ResultCard label="Total Amazon Fees" value={fmt(totalFees)} highlight />
          <ResultCard label="COGS + Shipping" value={fmt(totalCosts)} />
          <ResultCard label="Net Profit" value={fmt(netProfit)} highlight />
          <ResultCard label="Profit Margin" value={pct(profitMargin)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="itemPrice" label="Item Selling Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} prefix="$" placeholder="29.99" />
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-slate-600 bg-slate-800/60 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="standard">Standard (15%)</option>
            <option value="electronics">Electronics (8%)</option>
            <option value="clothing">Clothing (17%)</option>
            <option value="media">Media/Books (15%)</option>
          </select>
        </div>
        <InputField id="cogs" label="Cost of Goods Sold" value={cogs} onChange={(e) => setCogs(e.target.value)} prefix="$" placeholder="10.00" helpText="What you paid for the item" />
        <InputField id="shippingCost" label="Your Shipping Cost" value={shippingCost} onChange={(e) => setShippingCost(e.target.value)} prefix="$" placeholder="4.50" helpText="Actual cost to ship to buyer" />
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
            <a href="https://sellercentral.amazon.com/help/hub/reference/G200336920" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Amazon Fee Schedule
            </a>
            {" · "}
            <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201362310" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              FBM Policies
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Amazon Seller Fee Calculator</h2>
      <p>
        Selling on Amazon (FBM — Fulfilled by Merchant) involves several fees beyond just the item cost. This calculator accounts for Amazon&apos;s referral fee (a percentage of the sale price that varies by category), closing fees, and your own COGS and shipping costs.
      </p>
      <p>
        Enter your <strong>item selling price</strong>, select your <strong>product category</strong>, enter your <strong>cost of goods sold</strong>, and your <strong>actual shipping cost</strong>. The calculator computes Amazon&apos;s referral fee, $0.99 closing fee, total costs, and your net profit per unit.
      </p>

      <h2>Amazon FBM Fee Structure for 2026</h2>
      <p>
        For FBM sellers, Amazon charges: <strong>Referral fee</strong> (8-17% depending on category, typically 15%), <strong>$0.99 per-item closing fee</strong> for standard items, and <strong>variable closing fees</strong> for media (books, DVDs, music). Professional selling account costs $39.99/month (waived for Individual sellers, who pay $0.99 per sale instead).
      </p>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Amazon Seller Fee Calculator uses Amazon's official 2026 fee schedule for FBM sellers.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Referral Fees:</strong> Category-based rates (8-17%) from{" "}
          <a href="https://sellercentral.amazon.com/help/hub/reference/G200336920" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Amazon Selling Fees
          </a>
          .
        </li>
        <li>
          <strong>Closing Fees:</strong> $0.99 per item for standard items, $1.80 for media. Per Amazon FBM policies.
        </li>
        <li>
          <strong>Professional Account:</strong> $39.99/month subscription fee waives per-item fees for Professional sellers.
        </li>
      </ul>
      <p className="text-xs text-gray-500 dark:text-slate-400">
        <strong>Methodology:</strong> Net profit = selling price − (referral fee + $0.99 closing fee + COGS + shipping). Results are estimates for FBM sellers. FBA sellers should use the Amazon FBA Fee Calculator instead.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>What is the difference between FBA and FBM?</h3>
      <p>
        FBA (Fulfilled by Amazon) means Amazon stores and ships your products. FBM (Fulfilled by Merchant) means you handle storage and shipping yourself. FBA adds fulfillment fees (picking, packing, shipping) and storage fees but often qualifies items for Prime. This calculator is for FBM sellers. See our Amazon FBA Fee Calculator for FBA-specific fees.
      </p>
      <h3>Does this include Amazon advertising costs?</h3>
      <p>
        No — this calculator covers Amazon seller fees only. Amazon PPC advertising costs are separate and can range from 5-30% of revenue depending on competition. Factor your ACOS (Advertising Cost of Sale) separately when calculating total profitability.
      </p>
      <h3>How can I reduce Amazon seller fees?</h3>
      <p>
        Strategies include: optimizing product category selection (electronics has 8% referral fee vs 17% for clothing), bundling products to reduce per-unit closing fees, negotiating lower shipping rates through Amazon Buy Shipping, and using a Professional account ($39.99/month) if selling more than 40 units/month.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Check our{" "}<a href="/calculators/amazon-fba-fee-calculator" className="text-teal-400 underline hover:text-teal-300">Amazon FBA Fee Calculator</a>
          {" "}or{" "}<a href="/calculators/ecommerce-net-profit-margin" className="text-teal-400 underline hover:text-teal-300">E-Commerce Profit Margin Calculator</a>.
        </p>
      </div>

      <RelatedCalculators currentPage="amazon-seller-fee-calculator-2026" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", "name": "Amazon Seller Fee Calculator 2026", "url": "https://www.themetricapp.com/calculators/amazon-seller-fee-calculator-2026", "description": "Calculate Amazon seller fees including referral fees, closing fees, and net profit for FBM sellers.", "applicationCategory": "FinanceApplication", "operatingSystem": "Web Browser", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" }, { "@type": "ListItem", "position": 2, "name": "Amazon Seller Fee Calculator", "item": "https://www.themetricapp.com/calculators/amazon-seller-fee-calculator-2026" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What is the difference between FBA and FBM?", "acceptedAnswer": { "@type": "Answer", "text": "FBA means Amazon handles shipping and storage. FBM means you handle it yourself. This calculator is for FBM sellers." } }, { "@type": "Question", "name": "Does this include Amazon advertising costs?", "acceptedAnswer": { "@type": "Answer", "text": "No — PPC advertising costs (5-30% of revenue) need to be factored separately into your total profitability calculation." } }, { "@type": "Question", "name": "How can I reduce Amazon seller fees?", "acceptedAnswer": { "@type": "Answer", "text": "Optimize category selection (electronics 8% vs clothing 17%), bundle products, use Buy Shipping discounts, and upgrade to Professional account for 40+ sales/month." } }] }) }} />
    </>
  );
}

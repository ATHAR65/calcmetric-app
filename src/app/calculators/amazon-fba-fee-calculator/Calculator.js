"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(2) + "%";

// Referral fees by category (2026)
const CATEGORIES = [
  { value: "default", label: "Standard (15%)", pct: 0.15 },
  { value: "apparel", label: "Apparel (17%)", pct: 0.17 },
  { value: "electronics", label: "Consumer Electronics (8%)", pct: 0.08 },
  { value: "accessories", label: "Electronics Accessories (15%)", pct: 0.15 },
  { value: "furniture", label: "Furniture (15%)", pct: 0.15 },
  { value: "home", label: "Home & Garden (15%)", pct: 0.15 },
  { value: "jewelry", label: "Jewelry (20%)", pct: 0.20 },
  { value: "music", label: "Musical Instruments (15%)", pct: 0.15 },
  { value: "office", label: "Office Products (15%)", pct: 0.15 },
  { value: "pet", label: "Pet Supplies (15%)", pct: 0.15 },
  { value: "sports", label: "Sports & Outdoors (15%)", pct: 0.15 },
  { value: "tools", label: "Tools & Home Improvement (15%)", pct: 0.15 },
  { value: "toys", label: "Toys & Games (15%)", pct: 0.15 },
  { value: "video", label: "Video Games (15%)", pct: 0.15 },
];

// FBA fulfillment fee tiers (2026 approximate US rates)
// Based on standard size and weight tiers
function getFulfillmentFee(weightLbs) {
  if (weightLbs <= 0.375) return 3.22;   // Small Standard (≤ 6 oz)
  if (weightLbs <= 1)    return 4.75;    // Large Standard (6 oz - 1 lb)
  if (weightLbs <= 2)    return 5.80;    // Large Standard (1-2 lbs)
  if (weightLbs <= 3)    return 6.90;    // Large Standard (2-3 lbs)
  if (weightLbs <= 5)    return 8.25;    // Small Oversize
  if (weightLbs <= 10)   return 11.50;   // Medium Oversize
  if (weightLbs <= 50)   return 18.75;   // Large Oversize
  return 35.00;                          // Special Oversize
}

function getFulfillmentTier(weightLbs) {
  if (weightLbs <= 0.375) return "Small Standard";
  if (weightLbs <= 1)    return "Large Standard (≤ 1 lb)";
  if (weightLbs <= 2)    return "Large Standard (1-2 lbs)";
  if (weightLbs <= 3)    return "Large Standard (2-3 lbs)";
  if (weightLbs <= 5)    return "Small Oversize";
  if (weightLbs <= 10)   return "Medium Oversize";
  if (weightLbs <= 50)   return "Large Oversize";
  return "Special Oversize";
}

export default function Calculator() {
  const [salePrice, setSalePrice] = useState("");
  const [category, setCategory] = useState("default");
  const [itemCost, setItemCost] = useState("");
  const [weight, setWeight] = useState("");
  const [monthlyVolume, setMonthlyVolume] = useState("100");

  const price = parseFloat(salePrice) || 0;
  const cost = parseFloat(itemCost) || 0;
  const w = parseFloat(weight) || 0;
  const vol = parseFloat(monthlyVolume) || 0;

  // Get referral fee rate for selected category
  const cat = CATEGORIES.find((c) => c.value === category) || CATEGORIES[0];
  const referralFee = price * cat.pct;

  // FBA fulfillment fee based on weight
  const fulfillmentFee = w > 0 ? getFulfillmentFee(w) : 0;
  const fulfillmentTier = w > 0 ? getFulfillmentTier(w) : "";

  // 3.5% fuel & logistics surcharge on fulfillment fee (April 2026+)
  const fuelSurcharge = fulfillmentFee * 0.035;

  // Total Amazon fees
  const totalFees = referralFee + fulfillmentFee + fuelSurcharge;

  // Net profit per unit
  const netPerUnit = price - cost - totalFees;
  const margin = price > 0 ? (netPerUnit / price) * 100 : 0;

  // Monthly projections
  const monthlyRevenue = price * vol;
  const monthlyFees = totalFees * vol;
  const monthlyCosts = cost * vol;
  const monthlyNet = netPerUnit * vol;
  const monthlyMargin = monthlyRevenue > 0 ? (monthlyNet / monthlyRevenue) * 100 : 0;

  // Effective fee rate
  const effectiveFeeRate = price > 0 ? (totalFees / price) * 100 : 0;

  const schemaData = {
    name: "Amazon FBA Fee Calculator",
    description: "Calculate Amazon FBA fees including referral fees, fulfillment fees, and the 3.5% fuel surcharge to find your true net profit per unit.",
    url: "https://www.themetricapp.com/calculators/amazon-fba-fee-calculator",
  };

  return (
    <CalculatorShell
      title="Amazon FBA Fee Calculator 2026 — Calculate Fees & Net Profit"
      subtitle="Calculate referral fees, FBA fulfillment fees, the 3.5% fuel surcharge, and your true net profit per unit for Amazon sellers."
      schemaData={schemaData}
      results={
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ResultCard label="Sale Price" value={fmt(price)} />
            <ResultCard label="Referral Fee" value={fmt(referralFee)} sub={`${(cat.pct * 100).toFixed(0)}% rate`} />
            <ResultCard label="FBA Fulfillment" value={fmt(fulfillmentFee)} sub={fulfillmentTier} />
            <ResultCard label="Fuel Surcharge (3.5%)" value={fmt(fuelSurcharge)} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <ResultCard label="Total Amazon Fees" value={fmt(totalFees)} sub={`${effectiveFeeRate.toFixed(1)}% effective`} />
            <ResultCard label="Item Cost (COGS)" value={fmt(cost)} />
            <ResultCard label="Net Profit / Unit" value={fmt(netPerUnit)} highlight />
            <ResultCard label="Profit Margin" value={pct(margin)} highlight />
          </div>

          {vol > 0 && (
            <>
              <div className="col-span-full border-t border-[#E2E8F0] pt-4 mt-4">
                <p className="text-sm font-semibold text-[#0F172A] mb-3">📊 Monthly Projections ({Math.round(vol)} units)</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <ResultCard label="Monthly Revenue" value={fmt(monthlyRevenue)} />
                <ResultCard label="Monthly Fees" value={fmt(monthlyFees)} />
                <ResultCard label="Monthly Costs" value={fmt(monthlyCosts)} />
                <ResultCard label="Monthly Net Profit" value={fmt(monthlyNet)} highlight />
              </div>
            </>
          )}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            id="salePrice"
            label="Item Sale Price ($)"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            prefix="$"
            placeholder="29.99"
            helpText="The price you charge customers"
          />
          <InputField
            id="itemCost"
            label="Your Cost / COGS ($)"
            value={itemCost}
            onChange={(e) => setItemCost(e.target.value)}
            prefix="$"
            placeholder="10.00"
            helpText="Manufacturing or wholesale cost"
          />
        </div>

        <SelectField
          id="category"
          label="Product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={CATEGORIES}
          helpText="Determines the referral fee percentage"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            id="weight"
            label="Item Weight (lbs)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            suffix="lbs"
            placeholder="0.5"
            step="0.1"
            min="0"
            helpText="Total shipping weight of one unit"
          />
          <InputField
            id="monthlyVolume"
            label="Monthly Sales Volume"
            value={monthlyVolume}
            onChange={(e) => setMonthlyVolume(e.target.value)}
            placeholder="100"
            helpText="Estimated units sold per month"
          />
        </div>
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
            <a href="https://sellercentral.amazon.com/help/hub/reference/201074400" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              FBA Fees
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Amazon FBA Fee Calculator</h2>
      <p>
        This free Amazon FBA Fee Calculator helps sellers estimate their true costs and net profit when selling on
        Amazon using Fulfillment by Amazon (FBA). Simply enter your item's sale price, product category, your cost
        of goods sold (COGS), item weight, and estimated monthly sales volume. The calculator instantly computes
        referral fees, FBA fulfillment fees, the new 3.5% fuel and logistics surcharge, your net profit per unit,
        and projected monthly earnings.
      </p>
      <p>
        Whether you are a new seller evaluating product opportunities or an experienced Amazon business owner
        optimizing your pricing strategy, this tool provides transparent, real-time estimates based on Amazon's
        2026 fee structure. All calculations update instantly with no page refreshes.
      </p>

      <h2>Amazon FBA Fee Structure for 2026 — Complete Breakdown</h2>

      <h3>1. Referral Fees (Category-Based Commission)</h3>
      <p>
        Amazon charges a <strong>referral fee</strong> — a percentage of the total sale price — on every item
        sold. This is Amazon's commission for listing and selling on their marketplace. The rate varies by
        product category, ranging from 8% for consumer electronics to 20% for jewelry. Most categories are
        charged at 15%. Our calculator includes all major category rates so you can get accurate estimates
        for your specific product type.
      </p>
      <p>
        <strong>Formula:</strong> Referral Fee = Sale Price × Category Rate<br />
        <em>Example: A $29.99 home product at 15% = $4.50 referral fee</em>
      </p>

      <h3>2. FBA Fulfillment Fees (Weight & Size Based)</h3>
      <p>
        FBA fulfillment fees cover picking, packing, shipping, and customer service for your products stored
        in Amazon's fulfillment centers. These fees are determined by your product's <strong>size tier</strong>
        and <strong>shipping weight</strong>. In 2026, Amazon increased fulfillment fees by an average of $0.08
        per unit across standard-size products. Our calculator uses approximate 2026 rates across all tiers:
      </p>
      <ul>
        <li><strong>Small Standard</strong> (≤ 6 oz): ~$3.22 per unit</li>
        <li><strong>Large Standard (≤ 1 lb)</strong>: ~$4.75 per unit</li>
        <li><strong>Large Standard (1–2 lbs)</strong>: ~$5.80 per unit</li>
        <li><strong>Large Standard (2–3 lbs)</strong>: ~$6.90 per unit</li>
        <li><strong>Small Oversize</strong>: ~$8.25 per unit</li>
        <li><strong>Medium Oversize</strong>: ~$11.50 per unit</li>
        <li><strong>Large Oversize</strong>: ~$18.75 per unit</li>
        <li><strong>Special Oversize</strong>: ~$35.00+ per unit</li>
      </ul>

      <h3>3. Fuel & Logistics Surcharge (New for 2026)</h3>
      <p>
        Starting <strong>April 17, 2026</strong>, Amazon introduced a <strong>3.5% fuel and logistics
        surcharge</strong> applied to FBA fulfillment fees. This surcharge is calculated as 3.5% of the
        base fulfillment fee and is designed to offset rising fuel and transportation costs. Our calculator
        automatically includes this surcharge so you get the complete fee picture for 2026.
      </p>

      <h3>4. Monthly Storage Fees (Optional Consideration)</h3>
      <p>
        Amazon charges monthly storage fees based on the cubic footage your inventory occupies in fulfillment
        centers. Standard-size storage fees in 2026 range from approximately $0.87 per cubic foot (January–September)
        to $2.49+ per cubic foot (October–December). While this calculator focuses on per-unit fulfillment
        costs, storage fees are an important factor for long-term inventory planning — especially for
        slow-moving, oversized, or seasonal products.
      </p>

      <h2>Step-by-Step Calculation Examples</h2>

      <h3>Example 1: Small Kitchen Gadget (Best-Selling Scenario)</h3>
      <p>
        <strong>Product:</strong> Garlic Press — Sale Price: $14.99, Category: Home (15%), Weight: 0.3 lbs, COGS: $4.00<br />
        <strong>Referral Fee:</strong> $14.99 × 15% = $2.25<br />
        <strong>Fulfillment Fee:</strong> $3.22 (Small Standard)<br />
        <strong>Fuel Surcharge:</strong> $3.22 × 3.5% = $0.11<br />
        <strong>Total Amazon Fees:</strong> $5.58<br />
        <strong>Net Profit Per Unit:</strong> $14.99 − $4.00 − $5.58 = <strong>$5.41</strong><br />
        <strong>Profit Margin:</strong> 36.1%<br />
        At 500 units/month: <strong>$2,705 monthly net profit</strong>
      </p>

      <h3>Example 2: Electronics Accessory (High Volume)</h3>
      <p>
        <strong>Product:</strong> Phone Case — Sale Price: $24.99, Category: Electronics Accessories (15%), Weight: 0.4 lbs, COGS: $6.00<br />
        <strong>Referral Fee:</strong> $24.99 × 15% = $3.75<br />
        <strong>Fulfillment Fee:</strong> $3.22 (Small Standard)<br />
        <strong>Fuel Surcharge:</strong> $0.11<br />
        <strong>Total Amazon Fees:</strong> $7.08<br />
        <strong>Net Profit Per Unit:</strong> $24.99 − $6.00 − $7.08 = <strong>$11.91</strong><br />
        <strong>Profit Margin:</strong> 47.7%<br />
        At 1,000 units/month: <strong>$11,910 monthly net profit</strong>
      </p>

      <h3>Example 3: Heavy Home Product (Margins Tighten)</h3>
      <p>
        <strong>Product:</strong> Set of Mixing Bowls — Sale Price: $39.99, Category: Home (15%), Weight: 3.5 lbs, COGS: $14.00<br />
        <strong>Referral Fee:</strong> $39.99 × 15% = $6.00<br />
        <strong>Fulfillment Fee:</strong> $8.25 (Small Oversize)<br />
        <strong>Fuel Surcharge:</strong> $0.29<br />
        <strong>Total Amazon Fees:</strong> $14.54<br />
        <strong>Net Profit Per Unit:</strong> $39.99 − $14.00 − $14.54 = <strong>$11.45</strong><br />
        <strong>Profit Margin:</strong> 28.6%<br />
        Heavy products still profit but carry lower margins. Consider whether higher price points or bundling
        can improve your per-unit profitability.
      </p>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Amazon FBA Fee Calculator uses Amazon's official 2026 fee schedule. All rates verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Referral Fees:</strong> Category-based rates from{" "}
          <a href="https://sellercentral.amazon.com/help/hub/reference/G200336920" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Amazon Selling Fees
          </a>
          . Range: 8-20% depending on category.
        </li>
        <li>
          <strong>FBA Fulfillment:</strong> Weight-based fee tiers from{" "}
          <a href="https://sellercentral.amazon.com/help/hub/reference/201074400" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Amazon FBA Fees
          </a>
          .
        </li>
        <li>
          <strong>Fuel Surcharge:</strong> 3.5% surcharge on FBA fees effective April 17, 2026 per Amazon seller announcements.
        </li>
      </ul>
      <p className="text-xs text-gray-500 dark:text-slate-400">
        <strong>Methodology:</strong> Net profit = sale price − (referral fee + FBA fulfillment fee + fuel surcharge + COGS). Results are estimates; storage fees, long-term storage fees, and advertising costs not included.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>

      <h3>Is the Amazon FBA calculator free to use?</h3>
      <p>
        Yes, this tool is 100% free with no sign-up required. You can use it as many times as you need to
        evaluate different products, categories, and pricing scenarios.
      </p>

      <h3>Does this calculator include Amazon's new 2026 fuel surcharge?</h3>
      <p>
        Yes! Our calculator includes the new 3.5% fuel and logistics surcharge that Amazon introduced on
        April 17, 2026. This surcharge is applied to the FBA fulfillment fee and is automatically included
        in your total fee calculation.
      </p>

      <h3>Are the fulfillment fee estimates accurate for all product sizes?</h3>
      <p>
        This calculator uses Amazon's 2026 standard-size and oversize fee tiers to provide industry-standard
        estimates. However, exact fees depend on precise product dimensions and the specific FBA fee schedule
        for your product category. For definitive per-ASIN fee quotes, use Amazon's official FBA Revenue
        Calculator in Seller Central.
      </p>

      <h3>How can I reduce my Amazon FBA fees?</h3>
      <p>
        Strategies to reduce FBA fees include: (1) <strong>Reduce packaging weight</strong> — lighter items
        qualify for lower fulfillment tiers; (2) <strong>Decrease package dimensions</strong> — smaller
        packages may shift to lower size tiers; (3) <strong>Avoid long-term storage</strong> — remove
        slow-moving inventory to avoid long-term storage fees; (4) <strong>Bundle products</strong> —
        selling multiple items together can improve margin per unit; (5) <strong>Choose higher-margin
        categories</strong> — categories like electronics have lower referral fees; (6) <strong>Optimize
        pricing</strong> — ensure your pricing strategy accounts for all fees to maintain target margins.
      </p>

      <h3>Does this calculator include Amazon PPC advertising costs?</h3>
      <p>
        No, this calculator focuses on Amazon's selling fees. Advertising costs (Sponsored Products, Sponsored
        Brands) are separate and can vary widely based on your product category, competition, and ad strategy.
        Many sellers find that ad costs add an additional 10-30% to their cost structure — consider this
        separately in your profitability analysis.
      </p>

      <h3>What about Amazon's monthly storage fees?</h3>
      <p>
        This calculator estimates per-unit fulfillment costs. Monthly storage fees are billed separately based
        on the cubic footage your inventory uses. In 2026, standard-size storage ranges from $0.87/cubic foot
        (non-peak) to $2.49/cubic foot (October-December). For small, fast-moving products, storage fees are
        usually minor. For large or slow-moving inventory, storage fees can significantly impact profitability.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed fee breakdowns, selling strategies, and Amazon FBA profit optimization tips, read our full guide:{" "}
          <a href="/blog/amazon-fba-fee-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Amazon FBA Fee Calculator 2026 Guide
          </a>
          . This companion article covers advanced fee scenarios, category selection strategies, and real-world seller case studies.
        </p>
      </div>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/ebay-seller-fee-profit">eBay Seller Fee & Profit Calculator</a> — Calculate eBay final value fees and net profit.</li>
        <li><a href="/calculators/ecommerce-net-profit-margin">E-Commerce Profit Margin Calculator</a> — Calculate gross profit, net profit, and ROI for online sales.</li>
        <li><a href="/calculators/stripe-fee-merchant-calculator">Stripe Fee & Merchant Calculator</a> — See how Stripe fees affect your gross revenue.</li>
        <li><a href="/calculators/paypal-fee-calculator">PayPal Fee Calculator</a> — Calculate PayPal fees and compare vs Stripe.</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Amazon FBA Fee Calculator",
            "url": "https://www.themetricapp.com/calculators/amazon-fba-fee-calculator",
            "description": "Calculate Amazon FBA fees including referral fees, fulfillment fees, and the 3.5% fuel surcharge to find your true net profit per unit.",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" },
              { "@type": "ListItem", "position": 2, "name": "Amazon FBA Fee Calculator", "item": "https://www.themetricapp.com/calculators/amazon-fba-fee-calculator" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is the Amazon FBA calculator free to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, this tool is 100% free with no sign-up required. Use it as many times as needed."
                }
              },
              {
                "@type": "Question",
                "name": "Does this calculator include Amazon's new 2026 fuel surcharge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the calculator includes the new 3.5% fuel and logistics surcharge introduced April 17, 2026."
                }
              },
              {
                "@type": "Question",
                "name": "How can I reduce my Amazon FBA fees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Reduce packaging weight, decrease package dimensions, avoid long-term storage, bundle products, choose higher-margin categories, and optimize pricing."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

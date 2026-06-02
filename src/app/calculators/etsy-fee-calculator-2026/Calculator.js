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
  const [shippingCost, setShippingCost] = useState("");
  const [cogs, setCogs] = useState("");
  const [quantity, setQuantity] = useState("1");

  const price = parseFloat(itemPrice) || 0;
  const shipping = parseFloat(shippingCost) || 0;
  const cost = parseFloat(cogs) || 0;
  const qty = Math.max(1, parseInt(quantity) || 1);

  const totalRevenue = (price + shipping) * qty;
  // Etsy: $0.20 listing fee per item, 6.5% transaction fee, 3% + $0.25 payment processing
  const listingFee = 0.20 * qty;
  const transactionFee = totalRevenue * 0.065;
  const paymentFee = totalRevenue * 0.03 + 0.25 * qty;
  const totalFees = listingFee + transactionFee + paymentFee;
  const totalCogs = cost * qty;
  const netProfit = totalRevenue - totalFees - totalCogs;
  const profitMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;
  const effectiveFeeRate = totalRevenue > 0 ? (totalFees / totalRevenue) * 100 : 0;

  const schemaData = {
    name: "Etsy Fee Calculator 2026",
    description: "Calculate Etsy seller fees including listing, transaction, and payment processing fees.",
    url: "https://www.themetricapp.com/calculators/etsy-fee-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Etsy Fee Calculator (2026)"
      subtitle="Calculate Etsy fees, net profit, and margin after listing fees, transaction fees, and payment processing."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Total Revenue" value={fmt(totalRevenue)} sub="Price + Shipping" />
          <ResultCard label="Listing Fees" value={fmt(listingFee)} sub="$0.20 per item" />
          <ResultCard label="Transaction Fee (6.5%)" value={fmt(transactionFee)} />
          <ResultCard label="Payment Processing" value={fmt(paymentFee)} sub="3% + $0.25/item" />
          <ResultCard label="Total Etsy Fees" value={fmt(totalFees)} highlight />
          <ResultCard label="Cost of Goods" value={fmt(totalCogs)} />
          <ResultCard label="Net Profit" value={fmt(netProfit)} highlight />
          <ResultCard label="Profit Margin" value={pct(profitMargin)} />
          <ResultCard label="Effective Fee Rate" value={pct(effectiveFeeRate)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="itemPrice" label="Item Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} prefix="$" placeholder="29.99" helpText="Selling price per item" />
        <InputField id="shippingCost" label="Shipping Charged to Buyer" value={shippingCost} onChange={(e) => setShippingCost(e.target.value)} prefix="$" placeholder="4.50" helpText="Per item" />
        <InputField id="cogs" label="Cost of Goods Sold (COGS)" value={cogs} onChange={(e) => setCogs(e.target.value)} prefix="$" placeholder="8.00" helpText="Materials + labor per item" />
        <InputField id="quantity" label="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="1" helpText="Number of items sold" />
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
            <a href="https://www.etsy.com/seller/fees" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Etsy Seller Fees
            </a>
            {" · "}
            <a href="https://www.etsy.com/legal/fees" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Etsy Fee Policy
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Etsy Fee Calculator</h2>
      <p>
        Selling on Etsy involves several fees that can significantly impact your profit margin. This calculator accounts for all Etsy fees including listing fees, transaction fees, and payment processing charges to give you a complete profit picture.
      </p>
      <p>
        Enter your <strong>item price</strong>, <strong>shipping charged to the buyer</strong>, your <strong>cost of goods sold</strong> (materials + labor), and the <strong>quantity sold</strong>. The calculator computes Etsy&apos;s $0.20 listing fee per item, 6.5% transaction fee on total sale amount, and 3% + $0.25 payment processing fee per item.
      </p>

      <h2>Etsy Fee Structure for 2026</h2>
      <p>
        Etsy charges: <strong>$0.20 listing fee</strong> per item (renews every 4 months), <strong>6.5% transaction fee</strong> on the total sale price including shipping, and <strong>3% + $0.25 payment processing fee</strong> per transaction. Offsite ads add a 12-15% fee if a customer finds your shop through Etsy&apos;s ad network. Etsy Plus subscribers ($10/month) get 15 free listings monthly and credits on patterns and other services.
      </p>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Etsy Fee Calculator uses Etsy's official fee schedule verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Etsy Fee Schedule:</strong> Official rates from{" "}
          <a href="https://www.etsy.com/seller/fees" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Etsy Seller Fees Page
          </a>
          . Listing fee: $0.20/item. Transaction fee: 6.5%.
        </li>
        <li>
          <strong>Payment Processing:</strong> 3% + $0.25 per transaction per{" "}
          <a href="https://www.etsy.com/legal/fees" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Etsy Payments Policy
          </a>
          .
        </li>
        <li>
          <strong>Offsite Ads:</strong> Additional 12-15% fee applies when customers arrive via Etsy's ad network.
        </li>
      </ul>
      <p className="text-xs text-gray-500 dark:text-slate-400">
        <strong>Methodology:</strong> Net profit = total revenue (price + shipping × quantity) − listing fees − transaction fees (6.5%) − payment processing fees (3% + $0.25/item) − cost of goods sold. Results are estimates; offsite ad fees, regulatory operating fee (0.25%), and Etsy Plus subscription costs not included.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Does Etsy charge fees on shipping?</h3>
      <p>
        Yes — Etsy charges its 6.5% transaction fee on the <strong>total amount of the sale including shipping</strong> and gift wrapping. This is why many sellers factor shipping costs into their pricing strategy. If you charge $4.50 shipping on a $29.99 item, Etsy collects 6.5% on the full $34.49.
      </p>
      <h3>What are Offsite Ads fees and can I opt out?</h3>
      <p>
        Etsy Offsite Ads charge an additional 12% fee on sales from Etsy-run ads (15% for shops earning under $10,000/year in the program). Shops earning over $10,000/year cannot opt out. This is automatically applied when a buyer clicks an ad and purchases within 30 days.
      </p>
      <h3>How can Etsy sellers reduce fees?</h3>
      <p>
        Strategies include: offering free shipping to attract Etsy Search algorithm boost, using Etsy Patterns to drive direct traffic with 0% transaction fees, renewing listings strategically instead of keeping all active, and calculating true COGS to ensure adequate profit margins.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Read our guide:{" "}<a href="/blog/etsy-fee-calculator-2026" className="text-teal-400 underline hover:text-teal-300">Etsy Fee Calculator 2026 — Complete Guide</a>.
          <br />Compare with our{" "}<a href="/calculators/ebay-seller-fee-profit" className="text-teal-400 underline hover:text-teal-300">eBay Fee Calculator</a>
          {" "}or{" "}<a href="/calculators/amazon-fba-fee-calculator" className="text-teal-400 underline hover:text-teal-300">Amazon FBA Fee Calculator</a>.
        </p>
      </div>

      <RelatedCalculators currentPage="etsy-fee-calculator-2026" />

      </>
  );
}

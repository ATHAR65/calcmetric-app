"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

export default function Calculator() {
  const [salePrice, setSalePrice] = useState("");
  const [buyerShipping, setBuyerShipping] = useState("");
  const [itemCost, setItemCost] = useState("");

  const price = parseFloat(salePrice) || 0;
  const ship = parseFloat(buyerShipping) || 0;
  const cost = parseFloat(itemCost) || 0;

  const errors = {};
  if (salePrice !== "" && price < 0) errors.salePrice = "Price can't be negative.";
  if (buyerShipping !== "" && ship < 0) errors.buyerShipping = "Shipping can't be negative.";
  if (itemCost !== "" && cost < 0) errors.itemCost = "Cost can't be negative.";

  // Whatnot US 2026: 8% commission on sold price + 2.9% + $0.30 processing on total order value.
  const commission = price * 0.08;
  const total = price + ship;
  const processing = total === 0 ? 0 : total * 0.029 + 0.30;
  const totalFees = commission + processing;
  const payout = Math.max(0, total - totalFees - ship); // shipping passes through to label
  const profit = payout - cost;
  const effRate = price > 0 ? (totalFees / price) * 100 : 0;

  const schemaData = {
    name: "Whatnot Fee Calculator 2026",
    description: "Calculate Whatnot's 8% commission plus 2.9% + $0.30 processing and your true payout from live sales.",
    url: "https://www.themetricapp.com/calculators/whatnot-fee-calculator",
  };

  return (
    <CalculatorShell
      title="Whatnot Fee Calculator (2026)"
      subtitle="Live selling on Whatnot? See the 8% commission + 2.9% + $0.30 processing math and your true payout per sale."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Commission (8%)" value={fmt(commission)} sub="On sold price" />
          <ResultCard label="Payment Processing" value={fmt(processing)} sub="2.9% + $0.30 on total" />
          <ResultCard label="Total Fees" value={fmt(totalFees)} />
          <ResultCard label="Your Payout" value={fmt(payout)} highlight sub="After fees, excl. shipping" />
          <ResultCard label="Net Profit" value={fmt(profit)} sub="After item cost" />
          <ResultCard label="Effective Fee Rate" value={pct(effRate)} sub="Of sold price" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="salePrice" label="Sold Price" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} prefix="$" placeholder="50.00" helpText="Final auction or Buy It Now price" />
          {errors.salePrice && <p className="text-xs text-red-500 mt-1">{errors.salePrice}</p>}
        </div>
        <div>
          <InputField id="buyerShipping" label="Buyer-Paid Shipping" value={buyerShipping} onChange={(e) => setBuyerShipping(e.target.value)} prefix="$" placeholder="10.00" helpText="Processing (2.9% + $0.30) applies to the full order value" />
          {errors.buyerShipping && <p className="text-xs text-red-500 mt-1">{errors.buyerShipping}</p>}
        </div>
        <div className="sm:col-span-2">
          <InputField id="itemCost" label="Your Item Cost (Optional)" value={itemCost} onChange={(e) => setItemCost(e.target.value)} prefix="$" placeholder="20.00" helpText="What you paid to source the item" />
          {errors.itemCost && <p className="text-xs text-red-500 mt-1">{errors.itemCost}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> US/Canada/Australia rates (UK/EU: 6.67% + VAT). No listing fees; commission applies only when items sell. Giveaways incur no commission but shipping applies. Fees verified against Whatnot&apos;s schedule, July 2026.
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300"><strong>Last Updated:</strong> July 2026</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Author:</strong> Financial Metrics Team</span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Source:</strong>{" "}
            <a href="https://help.whatnot.com/hc/en-us/articles/4847069165965" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Whatnot Seller Fees Schedule</a>
          </span>
        </div>
      </div>

      <h2>What Are Whatnot's Seller Fees in 2026?</h2>
      <p>
        Whatnot charges two fees per sale in the US: an <strong>8% commission</strong> on the sold price, and <strong>payment processing of 2.9% + $0.30</strong> on the total order value (including buyer-paid shipping). There are <strong>no listing fees and no monthly costs</strong> — you pay only when something sells. UK/EU sellers pay 6.67% + VAT instead of 8%.
      </p>
      <p>
        On a typical $50 live-auction sale, total fees run about <strong>$5.75</strong> (~11.5% effective) — cheaper than eBay&apos;s ~13.6% and Poshmark&apos;s 20%, which is part of why live selling of cards, comics, sneakers, and vintage has boomed on the platform.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter the <strong>sold price</strong> (final auction or Buy It Now amount) and <strong>buyer-paid shipping</strong> — processing applies to the whole order. Optionally add your item cost. You&apos;ll see commission, processing, total fees, payout, profit, and effective rate instantly. For a full live stream, run your average sold price through it and multiply.
      </p>

      <h2>The Math, With a Worked Example</h2>
      <p>
        <strong>Formula:</strong> Commission = 8% × sold price. Processing = 2.9% × (sold + shipping) + $0.30. Payout = sold price − commission − processing (buyer shipping passes through to the label).
      </p>
      <p>
        <strong>Example:</strong> A sports card sells for <strong>$50</strong> with $10 buyer-paid shipping. Commission = <strong>$4.00</strong>. Processing = 2.9% × $60 + $0.30 = <strong>$2.04</strong>. Total fees = $6.04, payout = <strong>$43.96</strong> — a 12.1% effective rate on the sold price.
      </p>

      <h2>Live Selling Economics — What Streamers Should Track</h2>
      <p>
        Because auctions start at $1, your real metric is <strong>average sold price per stream</strong>, not per-item fees. Ten $5 sales cost you ten $0.30 processing minimums ($3.00) versus one $50 sale&apos;s single $0.30 — small lots are fee-inefficient. Bundle low-value items, set sensible starting bids on singles worth real money, and remember Whatnot income is <strong>self-employment income</strong>: 1099-K past the threshold, quarterly estimates if you&apos;re profitable. Run your net through our <a href="/calculators/self-employment-tax-calculator-2026">SE tax calculator</a>.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>How much does Whatnot take per sale?</h3>
      <p>8% commission on the sold price plus 2.9% + $0.30 payment processing on the total order value (including shipping). About 11.5% effective on a $50 sale.</p>
      <h3>Does Whatnot charge listing or monthly fees?</h3>
      <p>No. There are no listing fees or subscriptions — fees apply only when an item sells.</p>
      <h3>Do giveaway items get charged commission?</h3>
      <p>No commission applies to giveaways, though you still cover the shipping cost you offered.</p>
      <h3>Is Whatnot cheaper than eBay for cards and collectibles?</h3>
      <p>Generally yes — Whatnot's ~11-12% effective rate is below eBay's ~13.6% for most collectible categories, and live auctions often achieve stronger realized prices for hot products.</p>
      <h3>Do I pay taxes on Whatnot earnings?</h3>
      <p>Yes — selling profit is self-employment income. Whatnot issues a 1099-K past the federal threshold; commissions, processing fees, shipping, and item costs are deductible.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/ebay-seller-fee-profit">eBay Seller Fee &amp; Profit</a> — Compare with eBay's final value fees.</li>
        <li><a href="/calculators/stockx-fee-calculator">StockX Fee Calculator</a> — Sneaker/collectible fees by seller level.</li>
        <li><a href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</a> — Taxes on your live-selling profit.</li>
      </ul>

      <RelatedCalculators currentPage="whatnot-fee-calculator" />
    </>
  );
}

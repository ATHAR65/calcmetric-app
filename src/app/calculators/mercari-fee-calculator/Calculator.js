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
  const [buyerShipping, setBuyerShipping] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [sellerShipping, setSellerShipping] = useState("");

  const price = parseFloat(itemPrice) || 0;
  const shipIn = parseFloat(buyerShipping) || 0;
  const cost = parseFloat(itemCost) || 0;
  const shipOut = parseFloat(sellerShipping) || 0;

  const errors = {};
  if (itemPrice !== "" && price < 0) errors.itemPrice = "Price can't be negative.";
  if (buyerShipping !== "" && shipIn < 0) errors.buyerShipping = "Shipping can't be negative.";
  if (itemCost !== "" && cost < 0) errors.itemCost = "Cost can't be negative.";
  if (sellerShipping !== "" && shipOut < 0) errors.sellerShipping = "Shipping can't be negative.";

  // Mercari 2026: flat 10% of item + buyer-paid shipping, $1 minimum, no processing fee.
  const feeBase = price + shipIn;
  const fee = feeBase === 0 ? 0 : Math.max(feeBase * 0.10, 1);
  const payout = Math.max(0, feeBase - fee - shipOut);
  const profit = payout - cost;
  const effRate = feeBase > 0 ? (fee / feeBase) * 100 : 0;
  const margin = feeBase > 0 ? (profit / feeBase) * 100 : 0;

  const schemaData = {
    name: "Mercari Fee Calculator 2026",
    description: "Calculate Mercari's flat 10% selling fee and your exact payout and profit — no payment processing fee since 2025.",
    url: "https://www.themetricapp.com/calculators/mercari-fee-calculator",
  };

  return (
    <CalculatorShell
      title="Mercari Fee Calculator (2026)"
      subtitle="Mercari now charges one flat 10% selling fee — no payment processing charge. See your exact payout and profit on any sale."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Mercari Fee (10%)" value={fmt(fee)} sub={fee === 1 && feeBase > 0 ? "$1 minimum applied" : "On item + buyer shipping"} />
          <ResultCard label="Your Payout" value={fmt(payout)} highlight sub="After fee & your shipping" />
          <ResultCard label="Net Profit" value={fmt(profit)} sub="After item cost" />
          <ResultCard label="Effective Fee Rate" value={pct(effRate)} />
          <ResultCard label="Profit Margin" value={pct(margin)} />
          <ResultCard label="Processing Fee" value="$0.00" sub="Eliminated since Jan 2025" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="itemPrice" label="Item Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} prefix="$" placeholder="40.00" helpText="Your listing price" />
          {errors.itemPrice && <p className="text-xs text-red-500 mt-1">{errors.itemPrice}</p>}
        </div>
        <div>
          <InputField id="buyerShipping" label="Buyer-Paid Shipping" value={buyerShipping} onChange={(e) => setBuyerShipping(e.target.value)} prefix="$" placeholder="0.00" helpText="Mercari's 10% also applies to shipping the buyer pays" />
          {errors.buyerShipping && <p className="text-xs text-red-500 mt-1">{errors.buyerShipping}</p>}
        </div>
        <div>
          <InputField id="sellerShipping" label="Shipping You Pay (Optional)" value={sellerShipping} onChange={(e) => setSellerShipping(e.target.value)} prefix="$" placeholder="0.00" helpText="If you offer free shipping, the label cost comes out of your payout" />
          {errors.sellerShipping && <p className="text-xs text-red-500 mt-1">{errors.sellerShipping}</p>}
        </div>
        <div>
          <InputField id="itemCost" label="Your Item Cost (Optional)" value={itemCost} onChange={(e) => setItemCost(e.target.value)} prefix="$" placeholder="10.00" helpText="What you paid to source the item" />
          {errors.itemCost && <p className="text-xs text-red-500 mt-1">{errors.itemCost}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> Since January 2025 Mercari charges a single flat 10% selling fee (minimum $1) on the item plus buyer-paid shipping — the old 2.9% + $0.50 processing fee is gone. Listing is free. Fees verified July 2026.
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
            <a href="https://www.mercari.com/us/help_center/article/169/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Mercari Fee Policy</a>
          </span>
        </div>
      </div>

      <h2>How Much Does Mercari Take in 2026?</h2>
      <p>
        Mercari charges a single <strong>flat 10% selling fee</strong> on the combined item price plus any buyer-paid shipping, with a <strong>$1 minimum</strong>. Since January 2025 there is <strong>no separate payment processing fee</strong> — the old 2.9% + $0.50 charge was eliminated, making Mercari one of the simplest and cheaper mainstream marketplaces. Listing is free, and there are no subscriptions.
      </p>
      <p>
        Watch two details: the 10% applies to <strong>shipping the buyer pays</strong>, not just the item; and the <strong>$1 minimum</strong> makes very cheap items expensive in percentage terms (a $5 sale pays $1 — a 20% effective rate).
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your <strong>item price</strong> and any <strong>buyer-paid shipping</strong>. If you offer free shipping, add the label cost you&apos;ll absorb, and optionally your <strong>item cost</strong>. You&apos;ll see the 10% fee, your payout, true profit, effective fee rate, and margin instantly.
      </p>

      <h2>The Math, With a Worked Example</h2>
      <p>
        <strong>Formula:</strong> Fee = max(10% × (item + buyer shipping), $1). Payout = item + buyer shipping − fee − your shipping cost. Profit = payout − item cost.
      </p>
      <p>
        <strong>Example:</strong> You sell a game console for <strong>$40</strong> with free shipping that costs you $8 to ship, item cost $10. Fee = 10% × $40 = <strong>$4.00</strong>. Payout = $40 − $4 − $8 = <strong>$28.00</strong>. Profit = <strong>$18.00</strong> (45% margin). Charging the buyer $8 shipping instead would make the fee $4.80 but lift your payout to $35.20.
      </p>

      <h2>Mercari vs Poshmark vs Depop — Where Do You Keep More?</h2>
      <p>
        On a $50 item: Mercari takes <strong>$5.00</strong> (10%), <a href="/calculators/poshmark-fee-calculator">Poshmark</a> takes <strong>$10.00</strong> (20%), and <a href="/calculators/depop-fee-calculator">Depop US</a> takes about <strong>$2.10</strong> (3.3% + $0.45). Depop wins on fees, Poshmark on fashion demand, Mercari on breadth of categories (electronics, toys, home goods) with mid-level fees. Cross-listing to all three and letting demand decide is the common power-seller strategy.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is Mercari's selling fee in 2026?</h3>
      <p>A flat 10% of the item price plus buyer-paid shipping, with a $1 minimum. There is no separate payment processing fee since January 2025, and listing is free.</p>
      <h3>Does Mercari still charge the 2.9% + $0.50 processing fee?</h3>
      <p>No. Mercari eliminated the payment processing fee — the flat 10% selling fee is the only platform charge for sellers in 2026.</p>
      <h3>Does Mercari take a fee on shipping?</h3>
      <p>Yes — the 10% fee applies to the combined item price and any shipping amount the buyer pays. Shipping you absorb (free-shipping listings) is not part of the fee base but comes out of your payout.</p>
      <h3>How much do I keep on a $100 Mercari sale?</h3>
      <p>Mercari takes $10 (10%), so your payout is $90 before any shipping cost you cover and before the cost of the item itself.</p>
      <h3>Do I pay taxes on Mercari sales?</h3>
      <p>Profit from reselling is taxable income, and Mercari issues a 1099-K past the federal threshold. Track item costs and fees — both reduce your taxable profit.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/poshmark-fee-calculator">Poshmark Fee Calculator</a> — Compare the 20% commission model.</li>
        <li><a href="/calculators/depop-fee-calculator">Depop Fee Calculator</a> — The lowest-fee option for clothing in 2026.</li>
        <li><a href="/calculators/ebay-seller-fee-profit">eBay Seller Fee &amp; Profit</a> — eBay final value fees compared.</li>
      </ul>

      <RelatedCalculators currentPage="mercari-fee-calculator" />
    </>
  );
}

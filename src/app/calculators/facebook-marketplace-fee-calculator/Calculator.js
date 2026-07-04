"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

export default function Calculator() {
  const [itemPrice, setItemPrice] = useState("");
  const [buyerShipping, setBuyerShipping] = useState("");
  const [method, setMethod] = useState("shipping");
  const [itemCost, setItemCost] = useState("");

  const price = parseFloat(itemPrice) || 0;
  const ship = parseFloat(buyerShipping) || 0;
  const cost = parseFloat(itemCost) || 0;

  const errors = {};
  if (itemPrice !== "" && price < 0) errors.itemPrice = "Price can't be negative.";
  if (buyerShipping !== "" && ship < 0) errors.buyerShipping = "Shipping can't be negative.";
  if (itemCost !== "" && cost < 0) errors.itemCost = "Cost can't be negative.";

  // FB Marketplace 2026: shipped checkout = 10% of buyer-paid total, $0.80 minimum.
  // Local pickup (cash / outside checkout) = no fee.
  const total = price + ship;
  const fee = method === "local" || total === 0 ? 0 : Math.max(total * 0.10, 0.80);
  const payout = Math.max(0, total - fee - (method === "shipping" ? ship : 0));
  const profit = payout - cost;
  const effRate = total > 0 ? (fee / total) * 100 : 0;

  const schemaData = {
    name: "Facebook Marketplace Fee Calculator 2026",
    description: "Calculate Facebook Marketplace's 10% shipped-checkout fee ($0.80 minimum) versus free local pickup, and your true payout.",
    url: "https://www.themetricapp.com/calculators/facebook-marketplace-fee-calculator",
  };

  return (
    <CalculatorShell
      title="Facebook Marketplace Fee Calculator (2026)"
      subtitle="Shipped orders pay a 10% checkout fee ($0.80 minimum); local pickup is free. See your exact payout either way."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Marketplace Fee" value={fmt(fee)} sub={method === "local" ? "Local pickup — no fee" : fee === 0.8 && total > 0 ? "$0.80 minimum applied" : "10% of buyer total"} />
          <ResultCard label="Your Payout" value={fmt(payout)} highlight sub={method === "local" ? "Cash in hand" : "After fee & label"} />
          <ResultCard label="Net Profit" value={fmt(profit)} sub="After item cost" />
          <ResultCard label="Effective Fee Rate" value={pct(effRate)} />
          <ResultCard label="Local Pickup Fee" value="$0.00" sub="Always free" />
          <ResultCard label="Listing Fee" value="$0.00" sub="Free to list" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SelectField
          id="method"
          label="Sale Method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          options={[
            { value: "shipping", label: "Shipped with checkout — 10% fee" },
            { value: "local", label: "Local pickup — no fee" },
          ]}
          helpText="Only shipped checkout orders pay the Marketplace fee"
        />
        <div>
          <InputField id="itemPrice" label="Item Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} prefix="$" placeholder="60.00" helpText="Your listing price" />
          {errors.itemPrice && <p className="text-xs text-red-500 mt-1">{errors.itemPrice}</p>}
        </div>
        {method === "shipping" && (
          <div>
            <InputField id="buyerShipping" label="Buyer-Paid Shipping" value={buyerShipping} onChange={(e) => setBuyerShipping(e.target.value)} prefix="$" placeholder="8.00" helpText="The 10% fee applies to the full buyer-paid total" />
            {errors.buyerShipping && <p className="text-xs text-red-500 mt-1">{errors.buyerShipping}</p>}
          </div>
        )}
        <div className={method === "shipping" ? "" : "sm:col-span-1"}>
          <InputField id="itemCost" label="Your Item Cost (Optional)" value={itemCost} onChange={(e) => setItemCost(e.target.value)} prefix="$" placeholder="20.00" helpText="What you paid to source the item" />
          {errors.itemCost && <p className="text-xs text-red-500 mt-1">{errors.itemCost}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> The shipped-checkout fee rose from 5% to 10% ($0.80 minimum). Local pickup deals done in cash or outside checkout remain completely free. Fees verified July 2026 — Meta adjusts these periodically, check the Commerce Help Center before big sales.
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
            <a href="https://www.facebook.com/business/help/selling-on-marketplace" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Meta Commerce Help</a>
          </span>
        </div>
      </div>

      <h2>Does Facebook Marketplace Charge Fees in 2026?</h2>
      <p>
        It depends entirely on <strong>how you sell</strong>. <strong>Local pickup</strong> — meeting the buyer and taking cash, Venmo, or Zelle — is <strong>completely free</strong>: no listing fee, no commission. <strong>Shipped orders through Facebook checkout</strong> pay a <strong>10% selling fee</strong> on the buyer-paid total (item + shipping), with a <strong>$0.80 minimum</strong>. The fee covers payment processing and purchase protection.
      </p>
      <p>
        That makes Facebook Marketplace simultaneously the <strong>cheapest platform in resale</strong> (local, 0%) and a mid-priced one (shipped, 10% — same as <a href="/calculators/mercari-fee-calculator">Mercari</a>). Shipping unlocks a national buyer pool; local keeps every dollar.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Choose your <strong>sale method</strong>. For shipped orders, enter the item price and buyer-paid shipping (the 10% applies to both). Optionally add your item cost. You&apos;ll see the fee, payout, profit, and effective rate — flip between methods to see exactly what shipping convenience costs you.
      </p>

      <h2>The Math, With a Worked Example</h2>
      <p>
        <strong>Formula (shipped):</strong> Fee = max(10% × (item + shipping), $0.80). Payout = total − fee − your label. <strong>Local pickup:</strong> payout = price, full stop.
      </p>
      <p>
        <strong>Example:</strong> A dresser drawer set sells for <strong>$60</strong>. Local pickup: you keep <strong>$60.00</strong>. Shipped with $8 buyer-paid shipping: fee = 10% × $68 = <strong>$6.80</strong>; after the $8 label your payout is <strong>$61.20</strong> — barely ahead, because the buyer&apos;s shipping mostly passed through while the fee took 10% of it too. For heavy items, local pickup usually wins outright.
      </p>

      <h2>Local vs Shipped — Which Should You Choose?</h2>
      <p>
        <strong>Go local</strong> for furniture, appliances, exercise gear, and anything heavy — 0% fees and no packaging. <strong>Ship</strong> for small, high-value items (electronics, collectibles, shoes) where the national audience lifts the price by more than 10%. Never take payment apps from strangers claiming they&apos;ll &quot;send a courier&quot; — that&apos;s the classic Marketplace scam; use checkout or cash. And remember shipped sales are reported: Meta issues a <strong>1099-K</strong> past the federal threshold, so track costs for your <a href="/calculators/side-hustle-tax-calculator">taxes</a>.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>How much does Facebook Marketplace charge sellers in 2026?</h3>
      <p>Shipped checkout orders pay 10% of the buyer-paid total with a $0.80 minimum. Local pickup sales are completely free.</p>
      <h3>Is local pickup on Facebook Marketplace really free?</h3>
      <p>Yes — listings are free and local deals settled in cash or a payment app carry no Marketplace fee.</p>
      <h3>How much do I keep on a $100 shipped Facebook sale?</h3>
      <p>With $10 buyer-paid shipping, the fee is 10% × $110 = $11. Your payout is $99 before your shipping label cost.</p>
      <h3>Did Facebook Marketplace raise its fees?</h3>
      <p>Yes — the shipped-order fee rose from 5% to 10% (minimum $0.80). Local pickup remains free.</p>
      <h3>Do I pay taxes on Facebook Marketplace sales?</h3>
      <p>Profit from reselling is taxable. Meta issues a 1099-K for checkout sales past the federal threshold. Selling your own used items at a loss is generally not taxable.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/mercari-fee-calculator">Mercari Fee Calculator</a> — Same 10% rate, different audience.</li>
        <li><a href="/calculators/ebay-seller-fee-profit">eBay Seller Fee &amp; Profit</a> — For higher-value shipped items.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Taxes on your reselling profit.</li>
      </ul>

      <RelatedCalculators currentPage="facebook-marketplace-fee-calculator" />
    </>
  );
}

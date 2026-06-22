"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

// 2024–2025 eBay final value fee structure. eBay Managed Payments bundles
// payment processing into the final value fee, so there is no separate PayPal
// charge — we surface the variable rate, the fixed per-order fee, and an
// estimate of the processing portion embedded in the FVF for transparency.
const MARKETS = {
  USD: {
    symbol: "$",
    locale: "en-US",
    fixedFee: 0.3,
    // Processing is included in the FVF; this is the approximate processing
    // slice of the variable rate, shown for users who want the breakdown.
    processingRate: 0.0235,
    categories: {
      electronics: { label: "Electronics", rate: 0.1325 },
      clothing: { label: "Clothing & Accessories", rate: 0.1325 },
      books: { label: "Books, Movies & Music", rate: 0.146 },
      other: { label: "Other (most categories)", rate: 0.1325 },
    },
  },
  GBP: {
    symbol: "£",
    locale: "en-GB",
    fixedFee: 0.3,
    processingRate: 0.02,
    categories: {
      electronics: { label: "Electronics", rate: 0.128 },
      clothing: { label: "Clothing & Accessories", rate: 0.128 },
      books: { label: "Books, Comics & Magazines", rate: 0.092 },
      other: { label: "Other (most categories)", rate: 0.128 },
    },
  },
};

export default function Calculator() {
  const [currency, setCurrency] = useState("GBP");
  const [category, setCategory] = useState("other");
  const [salePrice, setSalePrice] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [itemCost, setItemCost] = useState("");

  const market = MARKETS[currency];
  const fmt = (n) =>
    market.symbol +
    Number(isFinite(n) ? n : 0).toLocaleString(market.locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const pct = (n) => (isFinite(n) ? n : 0).toFixed(1) + "%";

  const price = Math.max(0, parseFloat(salePrice) || 0);
  const shipping = Math.max(0, parseFloat(shippingCost) || 0);
  const cost = Math.max(0, parseFloat(itemCost) || 0);

  const cat = market.categories[category] || market.categories.other;

  // Final value fee applies to the full amount the buyer pays. We treat the
  // sale price as the buyer total; the fixed fee is charged once per order.
  const variableFee = price * cat.rate;
  const finalValueFee = price > 0 ? variableFee + market.fixedFee : 0;
  const processingFee = price > 0 ? price * market.processingRate : 0; // included in FVF
  const totalFees = finalValueFee;

  const netProfit = price - totalFees - cost - shipping;
  const profitMargin = price > 0 ? (netProfit / price) * 100 : 0;
  const effectiveFeeRate = price > 0 ? (totalFees / price) * 100 : 0;

  const hasInput = price > 0;

  return (
    <CalculatorShell
      title="eBay Fee Calculator"
      subtitle="Calculate eBay final value fees and your true net profit on every sale — 2025 UK & US rates."
      currentRoute="/calculators/ebay-fee-calculator"
      results={
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Final Value Fee" value={fmt(finalValueFee)} sub={`${(cat.rate * 100).toFixed(2)}% + ${fmt(market.fixedFee)}`} />
            <ResultCard label="Payment Processing" value={fmt(processingFee)} sub="Included in FVF" />
            <ResultCard label="Total eBay Fees" value={fmt(totalFees)} sub={`Effective ${pct(effectiveFeeRate)}`} />
            <ResultCard label="Net Profit" value={fmt(netProfit)} highlight />
            <ResultCard label="Profit Margin" value={pct(profitMargin)} highlight />
            <ResultCard label="Your Costs" value={fmt(cost + shipping)} sub="Item + shipping" />
          </div>
          {!hasInput && (
            <p className="mt-4 text-sm text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Enter a sale price above to see your eBay fees and net profit.
            </p>
          )}
          {hasInput && netProfit < 0 && (
            <p className="mt-4 text-sm text-[#E8521A] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              ⚠️ This sale would lose money — your fees and costs exceed the sale price.
            </p>
          )}
          <p className="mt-4 text-xs text-[#C4BAB0]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Since 2021, eBay&apos;s managed payments include payment processing inside the final value fee — there is no
            separate PayPal fee. The figure above shows the processing portion embedded in your FVF.
          </p>
        </>
      }
    >
      {/* Currency / marketplace toggle */}
      <div className="mb-6 flex items-center gap-2">
        <span className="text-sm text-[#8A7F72] mr-1" style={{ fontFamily: "'Inter', sans-serif" }}>
          Marketplace
        </span>
        <div className="inline-flex rounded-[10px] border border-[#E8E3DA] bg-[#FAF8F4] p-1">
          {[
            { id: "GBP", label: "£ eBay UK" },
            { id: "USD", label: "$ eBay US" },
          ].map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setCurrency(opt.id)}
              aria-pressed={currency === opt.id}
              className={`px-4 py-2 text-sm rounded-[8px] transition-all ${
                currency === opt.id
                  ? "bg-[#1A1410] text-white shadow-sm"
                  : "text-[#8A7F72] hover:text-[#1A1410]"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="salePrice"
          label="Sale Price"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
          prefix={market.symbol}
          placeholder="49.99"
          min="0"
          helpText="Total amount the buyer pays"
        />
        <SelectField
          id="category"
          label="Item Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={Object.entries(market.categories).map(([value, c]) => ({
            value,
            label: `${c.label} — ${(c.rate * 100).toFixed(2)}%`,
          }))}
          helpText="Sets the final value fee rate"
        />
        <InputField
          id="itemCost"
          label="Item Cost (COGS)"
          value={itemCost}
          onChange={(e) => setItemCost(e.target.value)}
          prefix={market.symbol}
          placeholder="15.00"
          min="0"
          helpText="What you paid for the item"
        />
        <InputField
          id="shippingCost"
          label="Shipping Cost"
          value={shippingCost}
          onChange={(e) => setShippingCost(e.target.value)}
          prefix={market.symbol}
          placeholder="4.50"
          min="0"
          helpText="Your actual postage cost"
        />
      </div>
    </CalculatorShell>
  );
}

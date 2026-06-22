"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

// 2024–2025 Amazon referral fees by category (same headline percentages on
// Amazon US and UK). Minimum referral fee is $0.30 / £0.25.
const MARKETS = {
  USD: { symbol: "$", locale: "en-US", minReferral: 0.3 },
  GBP: { symbol: "£", locale: "en-GB", minReferral: 0.25 },
};

const CATEGORIES = {
  most: { label: "Most categories", rate: 0.15 },
  electronics: { label: "Consumer Electronics", rate: 0.08 },
  computers: { label: "Computers", rate: 0.08 },
  clothing: { label: "Clothing & Accessories", rate: 0.17 },
  home: { label: "Home & Kitchen", rate: 0.15 },
  beauty: { label: "Beauty & Personal Care", rate: 0.15 },
  toys: { label: "Toys & Games", rate: 0.15 },
};

// Approximate 2024 FBA fulfilment fee. Dimensions in inches + weight in lb for
// US; cm + kg for UK. Real fees depend on the exact product; this is a planning
// estimate. Sources: Amazon FBA fulfilment fee schedules (US & UK, 2024).
function fbaFee(currency, dims, weight) {
  const sides = [...dims].sort((a, b) => b - a);
  const [longest, median, shortest] = sides;

  if (currency === "USD") {
    const lb = weight;
    const oz = lb * 16;
    const smallStandard = longest <= 15 && median <= 12 && shortest <= 0.75 && lb <= 1;
    const largeStandard = longest <= 18 && median <= 14 && shortest <= 8 && lb <= 20;
    if (smallStandard) {
      if (oz <= 4) return 3.06;
      if (oz <= 8) return 3.24;
      if (oz <= 12) return 3.43;
      return 3.65; // up to 16 oz
    }
    if (largeStandard) {
      if (oz <= 4) return 3.68;
      if (oz <= 8) return 3.9;
      if (oz <= 12) return 4.15;
      if (oz <= 16) return 4.55;
      if (lb <= 1.5) return 4.99;
      if (lb <= 2) return 5.37;
      if (lb <= 3) return 5.77;
      return 5.77 + Math.ceil((lb - 3) / 0.25) * 0.16;
    }
    // Large bulky / oversize estimate
    return 9.61 + Math.max(0, lb - 1) * 0.38;
  }

  // UK (cm + kg)
  const kg = weight;
  const g = kg * 1000;
  const smallParcel = longest <= 35 && median <= 25 && shortest <= 12 && kg <= 3.9;
  if (smallParcel) {
    if (g <= 150) return 1.7;
    if (g <= 400) return 1.95;
    if (g <= 900) return 2.45;
    if (kg <= 1.4) return 2.85;
    if (kg <= 1.9) return 3.1;
    return 3.1 + Math.ceil((kg - 1.9) / 0.5) * 0.3;
  }
  // Standard / large parcel estimate
  if (kg <= 1) return 3.0;
  if (kg <= 5) return 3.0 + (kg - 1) * 0.35;
  return 4.4 + Math.max(0, kg - 5) * 0.3;
}

export default function Calculator() {
  const [currency, setCurrency] = useState("GBP");
  const [dimUnit, setDimUnit] = useState("cm"); // cm | in
  const [weightUnit, setWeightUnit] = useState("kg"); // kg | lb
  const [category, setCategory] = useState("most");

  const [salePrice, setSalePrice] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [cogs, setCogs] = useState("");

  const market = MARKETS[currency];
  const fmt = (n) =>
    market.symbol +
    Number(isFinite(n) ? n : 0).toLocaleString(market.locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const pct = (n) => (isFinite(n) ? n : 0).toFixed(1) + "%";

  const price = Math.max(0, parseFloat(salePrice) || 0);
  const cost = Math.max(0, parseFloat(cogs) || 0);
  const cat = CATEGORIES[category];

  // Convert dimensions/weight to the marketplace's native units for the fee model.
  const toNativeLen = (v) => {
    const n = Math.max(0, parseFloat(v) || 0);
    if (currency === "USD") return dimUnit === "cm" ? n / 2.54 : n; // inches
    return dimUnit === "in" ? n * 2.54 : n; // cm
  };
  const toNativeWeight = (v) => {
    const n = Math.max(0, parseFloat(v) || 0);
    if (currency === "USD") return weightUnit === "kg" ? n * 2.20462 : n; // lb
    return weightUnit === "lb" ? n / 2.20462 : n; // kg
  };

  const dims = [toNativeLen(length), toNativeLen(width), toNativeLen(height)];
  const nativeWeight = toNativeWeight(weight);
  const hasDims = dims.every((d) => d > 0) && nativeWeight > 0;

  const referralFee = price > 0 ? Math.max(price * cat.rate, market.minReferral) : 0;
  const fulfilmentFee = price > 0 && hasDims ? fbaFee(currency, dims, nativeWeight) : 0;
  const totalFees = referralFee + fulfilmentFee;

  const netProfit = price - totalFees - cost;
  const profitMargin = price > 0 ? (netProfit / price) * 100 : 0;
  const roi = cost > 0 ? (netProfit / cost) * 100 : 0;

  const hasInput = price > 0;

  const Toggle = ({ value, setValue, options, label }) => (
    <div className="flex items-center gap-2">
      <span className="text-sm text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </span>
      <div className="inline-flex rounded-[10px] border border-[#E8E3DA] bg-[#FAF8F4] p-1">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setValue(opt.id)}
            aria-pressed={value === opt.id}
            className={`px-3.5 py-1.5 text-sm rounded-[8px] transition-all ${
              value === opt.id ? "bg-[#1A1410] text-white shadow-sm" : "text-[#8A7F72] hover:text-[#1A1410]"
            }`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <CalculatorShell
      title="Amazon FBA Calculator"
      subtitle="Estimate Amazon referral fees, FBA fulfilment fees, net profit and ROI — 2025 UK & US rates."
      currentRoute="/calculators/amazon-fba-calculator"
      results={
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Referral Fee" value={fmt(referralFee)} sub={`${(cat.rate * 100).toFixed(0)}% of sale`} />
            <ResultCard label="FBA Fulfilment Fee" value={fmt(fulfilmentFee)} sub={hasDims ? "Per unit" : "Add size & weight"} />
            <ResultCard label="Total Amazon Fees" value={fmt(totalFees)} sub={price > 0 ? `Effective ${pct((totalFees / price) * 100)}` : ""} />
            <ResultCard label="Net Profit" value={fmt(netProfit)} highlight />
            <ResultCard label="Profit Margin" value={pct(profitMargin)} highlight />
            <ResultCard label="ROI" value={pct(roi)} sub="Return on cost of goods" />
          </div>
          {!hasInput && (
            <p className="mt-4 text-sm text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Enter a sale price, dimensions and weight to estimate your FBA fees and profit.
            </p>
          )}
          {hasInput && !hasDims && (
            <p className="mt-4 text-sm text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Add product dimensions and weight to include the FBA fulfilment fee.
            </p>
          )}
          {hasInput && hasDims && netProfit < 0 && (
            <p className="mt-4 text-sm text-[#E8521A] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              ⚠️ This product would lose money at the current sale price.
            </p>
          )}
          <p className="mt-4 text-xs text-[#C4BAB0]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Fulfilment fees are an estimate based on Amazon&apos;s 2024 size tiers and exclude monthly storage, long-term
            storage and optional programme fees. Check Seller Central for the exact fee on your ASIN.
          </p>
        </>
      }
    >
      {/* Toggles */}
      <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Toggle
          label="Marketplace"
          value={currency}
          setValue={setCurrency}
          options={[
            { id: "GBP", label: "£ Amazon UK" },
            { id: "USD", label: "$ Amazon US" },
          ]}
        />
        <Toggle
          label="Size"
          value={dimUnit}
          setValue={setDimUnit}
          options={[
            { id: "cm", label: "cm" },
            { id: "in", label: "in" },
          ]}
        />
        <Toggle
          label="Weight"
          value={weightUnit}
          setValue={setWeightUnit}
          options={[
            { id: "kg", label: "kg" },
            { id: "lb", label: "lb" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="salePrice"
          label="Product Sale Price"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
          prefix={market.symbol}
          placeholder="29.99"
          min="0"
          helpText="Your listed price"
        />
        <SelectField
          id="category"
          label="Product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={Object.entries(CATEGORIES).map(([value, c]) => ({
            value,
            label: `${c.label} — ${(c.rate * 100).toFixed(0)}%`,
          }))}
          helpText="Sets the referral fee rate"
        />
        <InputField id="cogs" label="Cost of Goods" value={cogs} onChange={(e) => setCogs(e.target.value)} prefix={market.symbol} placeholder="8.00" min="0" helpText="Landed cost per unit" />
        <InputField id="weight" label={`Product Weight (${weightUnit})`} value={weight} onChange={(e) => setWeight(e.target.value)} suffix={weightUnit} placeholder={weightUnit === "kg" ? "0.4" : "0.9"} min="0" />
        <InputField id="length" label={`Length (${dimUnit})`} value={length} onChange={(e) => setLength(e.target.value)} suffix={dimUnit} placeholder={dimUnit === "cm" ? "25" : "10"} min="0" />
        <InputField id="width" label={`Width (${dimUnit})`} value={width} onChange={(e) => setWidth(e.target.value)} suffix={dimUnit} placeholder={dimUnit === "cm" ? "18" : "7"} min="0" />
        <InputField id="height" label={`Height (${dimUnit})`} value={height} onChange={(e) => setHeight(e.target.value)} suffix={dimUnit} placeholder={dimUnit === "cm" ? "6" : "2.5"} min="0" />
      </div>
    </CalculatorShell>
  );
}

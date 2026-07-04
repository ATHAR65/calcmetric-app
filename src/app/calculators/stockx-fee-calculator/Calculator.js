"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

// StockX 2026 base transaction fee by seller level + flat 3% payment processing.
const LEVEL_FEES = { 1: 9.5, 2: 9.0, 3: 8.5, 4: 8.0, 5: 8.0 };

export default function Calculator() {
  const [salePrice, setSalePrice] = useState("");
  const [level, setLevel] = useState("1");
  const [bonus, setBonus] = useState("0");
  const [shipCost, setShipCost] = useState("");
  const [itemCost, setItemCost] = useState("");

  const price = parseFloat(salePrice) || 0;
  const ship = parseFloat(shipCost) || 0;
  const cost = parseFloat(itemCost) || 0;
  const bonusPct = parseFloat(bonus) || 0;

  const errors = {};
  if (salePrice !== "" && price < 0) errors.salePrice = "Price can't be negative.";
  if (shipCost !== "" && ship < 0) errors.shipCost = "Shipping can't be negative.";
  if (itemCost !== "" && cost < 0) errors.itemCost = "Cost can't be negative.";

  const baseRate = LEVEL_FEES[level] ?? 9.5;
  const txnRate = Math.max(0, baseRate - bonusPct);
  const txnFee = price * (txnRate / 100);
  const processing = price * 0.03;
  const totalFees = txnFee + processing;
  const payout = Math.max(0, price - totalFees - ship);
  const profit = payout - cost;
  const effRate = price > 0 ? ((totalFees + ship) / price) * 100 : 0;

  const schemaData = {
    name: "StockX Fee Calculator 2026",
    description: "Calculate StockX seller fees by level (8–9.5% + 3% processing) and your true payout on sneakers and collectibles.",
    url: "https://www.themetricapp.com/calculators/stockx-fee-calculator",
  };

  return (
    <CalculatorShell
      title="StockX Fee Calculator (2026)"
      subtitle="Selling sneakers, cards, or electronics on StockX? See your transaction fee by seller level, the 3% processing charge, and your true payout."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label={"Transaction Fee (" + txnRate.toFixed(1) + "%)"} value={fmt(txnFee)} sub={"Level " + level + (bonusPct > 0 ? " with bonuses" : "")} />
          <ResultCard label="Payment Processing (3%)" value={fmt(processing)} />
          <ResultCard label="Total StockX Fees" value={fmt(totalFees)} />
          <ResultCard label="Your Payout" value={fmt(payout)} highlight sub="After fees & shipping" />
          <ResultCard label="Net Profit" value={fmt(profit)} sub="After item cost" />
          <ResultCard label="All-In Cost Rate" value={pct(effRate)} sub="Fees + shipping vs price" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="salePrice" label="Sale Price" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} prefix="$" placeholder="220.00" helpText="The price your ask sold at" />
          {errors.salePrice && <p className="text-xs text-red-500 mt-1">{errors.salePrice}</p>}
        </div>
        <SelectField
          id="level"
          label="Seller Level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          options={[
            { value: "1", label: "Level 1 — 9.5% (new sellers)" },
            { value: "2", label: "Level 2 — 9.0%" },
            { value: "3", label: "Level 3 — 8.5%" },
            { value: "4", label: "Level 4 — 8.0% (50+ sales)" },
            { value: "5", label: "Level 5 — 8.0%" },
          ]}
          helpText="Check your level in the StockX seller dashboard"
        />
        <SelectField
          id="bonus"
          label="Shipping Bonuses (Level 3+)"
          value={bonus}
          onChange={(e) => setBonus(e.target.value)}
          options={[
            { value: "0", label: "None" },
            { value: "1", label: "−1% (95% on-time shipping)" },
            { value: "2", label: "−2% (on-time + quick ship)" },
          ]}
          helpText="Performance bonuses reduce your transaction fee"
        />
        <div>
          <InputField id="shipCost" label="Shipping to StockX" value={shipCost} onChange={(e) => setShipCost(e.target.value)} prefix="$" placeholder="14.00" helpText="Label cost to the authentication center (typically $13–$16)" />
          {errors.shipCost && <p className="text-xs text-red-500 mt-1">{errors.shipCost}</p>}
        </div>
        <div className="sm:col-span-2">
          <InputField id="itemCost" label="Your Item Cost (Optional)" value={itemCost} onChange={(e) => setItemCost(e.target.value)} prefix="$" placeholder="170.00" helpText="Retail or sourcing price you paid" />
          {errors.itemCost && <p className="text-xs text-red-500 mt-1">{errors.itemCost}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> All sales are final on StockX and every item ships to an authentication center first. Fee levels and bonuses verified against StockX&apos;s published seller program, July 2026 — confirm your exact rate in your seller dashboard.
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
            <a href="https://stockx.com/help/articles/what-are-stockxs-fees-for-sellers" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">StockX Seller Fees</a>
          </span>
        </div>
      </div>

      <h2>What Are StockX's Seller Fees in 2026?</h2>
      <p>
        StockX charges two fees per sale: a <strong>transaction fee of 8.0%–9.5%</strong> depending on your seller level, and a flat <strong>3% payment processing fee</strong>. New sellers start at Level 1 (9.5%); reaching Level 4 (50+ sales) drops the rate to 8.0%. Level 3+ sellers can shave up to another <strong>2% through shipping performance bonuses</strong> (95% on-time shipping = −1%; shipping 80% of orders within 36 hours = another −1%).
      </p>
      <p>
        Add <strong>$13–$16 shipping to the authentication center</strong> and a Level 1 seller&apos;s all-in cost on a $220 sneaker runs about 18% — which is why moving up levels matters more on StockX than on any other platform.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your <strong>sale price</strong>, pick your <strong>seller level</strong> (dashboard → seller profile), apply any <strong>shipping bonuses</strong> you&apos;ve earned, and add the <strong>label cost</strong> to the authentication center. Optionally add what the item cost you. You&apos;ll see each fee, your payout, profit, and true all-in rate.
      </p>

      <h2>The Math, With a Worked Example</h2>
      <p>
        <strong>Formula:</strong> Transaction fee = level rate × price. Processing = 3% × price. Payout = price − fees − shipping.
      </p>
      <p>
        <strong>Example:</strong> A Level 1 seller sells a pair for <strong>$220</strong>, ships for $14, sourced at retail $170. Transaction fee = 9.5% × $220 = <strong>$20.90</strong>; processing = <strong>$6.60</strong>. Payout = $220 − $27.50 − $14 = <strong>$178.50</strong>. Profit = <strong>$8.50</strong>. The same sale at Level 4 with both bonuses (6% + 3%) pays $19.80 in fees — profit jumps to <strong>$16.20</strong>, nearly double.
      </p>

      <h2>How to Lower Your StockX Fees</h2>
      <p>
        <strong>Volume is the lever:</strong> levels are based on completed sales and GMV, so consistent selling compounds — the 1.5-point gap between Level 1 and Level 4 is $3.30 on every $220 sale. <strong>Ship fast and on time</strong>: the two bonuses are worth up to 2 points, more than a whole level. <strong>Mind the spread</strong>: on StockX you sell to the highest bid or list an ask — patient asks typically clear 5–10% higher than instant bid-hits, which often matters more than the fees. And remember flipping profit is taxable — see our <a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a>.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>How much does StockX take per sale in 2026?</h3>
      <p>A transaction fee of 8.0–9.5% based on your seller level, plus 3% payment processing — 11–12.5% combined, before the $13–$16 shipping cost to the authentication center.</p>
      <h3>How do I lower my StockX transaction fee?</h3>
      <p>Level up through completed sales (Level 4 at 50+ sales pays 8.0% vs 9.5% at Level 1) and earn shipping bonuses at Level 3+ — up to 2% off for on-time and quick shipping.</p>
      <h3>Does StockX charge listing fees?</h3>
      <p>No. Placing asks is free; fees apply only when your item sells.</p>
      <h3>Who pays shipping on StockX?</h3>
      <p>The seller pays to ship to StockX's authentication center (typically $13–$16 in the US). The buyer pays their own delivery shipping separately.</p>
      <h3>Do I pay taxes on StockX profits?</h3>
      <p>Yes — reselling profit is taxable income and StockX issues a 1099-K past the federal threshold. Fees, shipping, and the cost of the shoes are deductible against profit.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/whatnot-fee-calculator">Whatnot Fee Calculator</a> — Live-auction selling fees compared.</li>
        <li><a href="/calculators/ebay-seller-fee-profit">eBay Seller Fee &amp; Profit</a> — The sneaker seller's other main channel.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Taxes on your flipping profit.</li>
      </ul>

      <RelatedCalculators currentPage="stockx-fee-calculator" />
    </>
  );
}

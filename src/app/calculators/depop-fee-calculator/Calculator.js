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
  const [shipping, setShipping] = useState("");
  const [boosted, setBoosted] = useState("no");
  const [itemCost, setItemCost] = useState("");

  const price = parseFloat(itemPrice) || 0;
  const ship = parseFloat(shipping) || 0;
  const cost = parseFloat(itemCost) || 0;

  const errors = {};
  if (itemPrice !== "" && price < 0) errors.itemPrice = "Price can't be negative.";
  if (shipping !== "" && ship < 0) errors.shipping = "Shipping can't be negative.";
  if (itemCost !== "" && cost < 0) errors.itemCost = "Cost can't be negative.";

  // Depop US 2026: $0 selling fee; payment processing 3.3% + $0.45 on total;
  // optional Boosted Listings 12% (charged only when the sale comes via boost).
  const total = price + ship;
  const processing = total === 0 ? 0 : total * 0.033 + 0.45;
  const boostFee = boosted === "yes" ? price * 0.12 : 0;
  const totalFees = processing + boostFee;
  const payout = Math.max(0, total - totalFees);
  const profit = payout - cost - ship; // seller ships with buyer-paid shipping passing through
  const effRate = total > 0 ? (totalFees / total) * 100 : 0;

  const schemaData = {
    name: "Depop Fee Calculator 2026",
    description: "Calculate Depop's 2026 US fees — $0 selling fee, 3.3% + $0.45 processing, optional 12% boost — and your exact payout.",
    url: "https://www.themetricapp.com/calculators/depop-fee-calculator",
  };

  return (
    <CalculatorShell
      title="Depop Fee Calculator (2026)"
      subtitle="Depop dropped its US selling fee — you pay only 3.3% + $0.45 payment processing (plus 12% if the sale comes through a Boosted Listing). See your exact payout."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Selling Fee" value="$0.00" sub="Removed for US sellers" />
          <ResultCard label="Payment Processing" value={fmt(processing)} sub="3.3% + $0.45 on total" />
          <ResultCard label="Boost Fee" value={fmt(boostFee)} sub={boosted === "yes" ? "12% of item price" : "Not boosted"} />
          <ResultCard label="Your Payout" value={fmt(payout)} highlight sub="Item + shipping − fees" />
          <ResultCard label="Net Profit" value={fmt(profit)} sub="After item cost & label" />
          <ResultCard label="Effective Fee Rate" value={pct(effRate)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="itemPrice" label="Item Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} prefix="$" placeholder="50.00" helpText="Your listing price" />
          {errors.itemPrice && <p className="text-xs text-red-500 mt-1">{errors.itemPrice}</p>}
        </div>
        <div>
          <InputField id="shipping" label="Shipping Charged to Buyer" value={shipping} onChange={(e) => setShipping(e.target.value)} prefix="$" placeholder="5.00" helpText="Processing fee applies to item + shipping" />
          {errors.shipping && <p className="text-xs text-red-500 mt-1">{errors.shipping}</p>}
        </div>
        <SelectField
          id="boosted"
          label="Sold via Boosted Listing?"
          value={boosted}
          onChange={(e) => setBoosted(e.target.value)}
          options={[
            { value: "no", label: "No — organic sale" },
            { value: "yes", label: "Yes — 12% boost fee applies" },
          ]}
          helpText="Boosting is optional; the fee only applies when the sale comes through a boost"
        />
        <div>
          <InputField id="itemCost" label="Your Item Cost (Optional)" value={itemCost} onChange={(e) => setItemCost(e.target.value)} prefix="$" placeholder="15.00" helpText="What you paid to source the item" />
          {errors.itemCost && <p className="text-xs text-red-500 mt-1">{errors.itemCost}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> US fee structure (the 10% selling fee was removed in July 2024). Profit here assumes the buyer&apos;s shipping payment covers your label at cost. Fees verified against Depop&apos;s published schedule, July 2026.
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
            <a href="https://depophelp.zendesk.com/hc/en-gb/articles/360001791847" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Depop Fee Policy</a>
          </span>
        </div>
      </div>

      <h2>What Are Depop's Fees in 2026?</h2>
      <p>
        Depop is the <strong>cheapest major clothing marketplace for US sellers in 2026</strong>. The old 10% selling fee was removed in July 2024. What remains is <strong>payment processing at 3.3% + $0.45</strong> on the total transaction (item + shipping), and an <strong>optional 12% Boosted Listings fee</strong> that applies only when a sale comes through a boost you enabled.
      </p>
      <p>
        On a $50 item with $5 shipping, a US seller pays about <strong>$2.27</strong> — versus $5.50 on <a href="/calculators/mercari-fee-calculator">Mercari</a> and $10.00 on <a href="/calculators/poshmark-fee-calculator">Poshmark</a>. The trade-off: Depop&apos;s buyer base skews to streetwear, vintage, and Y2K fashion, so category fit matters more than fee math.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your <strong>item price</strong> and the <strong>shipping charged to the buyer</strong> (processing applies to both). Toggle whether the sale came through a <strong>Boosted Listing</strong>, and optionally add your item cost. You&apos;ll see each fee, your payout, true profit, and effective rate instantly.
      </p>

      <h2>The Math, With a Worked Example</h2>
      <p>
        <strong>Formula:</strong> Processing = 3.3% × (item + shipping) + $0.45. Boost = 12% × item (only if boosted). Payout = item + shipping − fees.
      </p>
      <p>
        <strong>Example:</strong> A vintage jacket sells for <strong>$50</strong> with $5 buyer-paid shipping, not boosted. Processing = 3.3% × $55 + $0.45 = <strong>$2.27</strong>. Payout = <strong>$52.73</strong>, from which your $5 label leaves $47.73 — a 4.1% effective fee. The same sale via a boost adds $6.00, taking the effective rate to about 15%.
      </p>

      <h2>Should You Use Boosted Listings?</h2>
      <p>
        Boosting turns Depop into a ~15% fee platform — still below Poshmark, but triple the organic rate. Boost <strong>slow-moving inventory</strong> where visibility is the bottleneck, and leave fresh, in-demand pieces organic. Because the fee only charges on boosted-attributed sales, there is no downside to testing — but check your sold analytics monthly so boosts aren&apos;t silently eating your margin.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What fees does Depop charge US sellers in 2026?</h3>
      <p>No selling fee. US sellers pay payment processing of 3.3% + $0.45 on the total (item + shipping), plus an optional 12% Boosted Listings fee when a sale comes through a boost.</p>
      <h3>Did Depop remove its 10% selling fee?</h3>
      <p>Yes — Depop removed the 10% US selling fee in July 2024, shifting to a buyer-side marketplace fee. Sellers now pay only payment processing (and optional boost fees).</p>
      <h3>How much do I keep on a $100 Depop sale?</h3>
      <p>With $8 buyer-paid shipping: processing = 3.3% × $108 + $0.45 ≈ $4.01. Your payout is about $103.99, from which your shipping label is paid.</p>
      <h3>Is Depop cheaper than Poshmark and Mercari?</h3>
      <p>Yes, for US sellers — roughly 3.75% effective versus 10% (Mercari) and 20% (Poshmark) on a typical $50 sale, unless you use Boosted Listings.</p>
      <h3>Do I pay taxes on Depop income?</h3>
      <p>Reselling profit is taxable, and Depop issues a 1099-K past the federal threshold. Keep records of item costs, fees, and shipping — they all reduce taxable profit.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/poshmark-fee-calculator">Poshmark Fee Calculator</a> — The 20% commission model compared.</li>
        <li><a href="/calculators/mercari-fee-calculator">Mercari Fee Calculator</a> — Flat 10%, broadest categories.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Taxes on your reselling profit.</li>
      </ul>

      <RelatedCalculators currentPage="depop-fee-calculator" />
    </>
  );
}

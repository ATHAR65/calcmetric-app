"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

export default function Calculator() {
  const [salePrice, setSalePrice] = useState("");
  const [itemCost, setItemCost] = useState("");

  const price = parseFloat(salePrice) || 0;
  const cost = parseFloat(itemCost) || 0;

  const errors = {};
  if (salePrice !== "" && price < 0) errors.salePrice = "Price can't be negative.";
  if (itemCost !== "" && cost < 0) errors.itemCost = "Cost can't be negative.";

  // Poshmark 2026: $2.95 flat under $15, 20% at $15+. Buyer pays shipping.
  const fee = price === 0 ? 0 : price < 15 ? 2.95 : price * 0.2;
  const payout = Math.max(0, price - fee);
  const profit = payout - cost;
  const effRate = price > 0 ? (fee / price) * 100 : 0;
  const margin = price > 0 ? (profit / price) * 100 : 0;

  const schemaData = {
    name: "Poshmark Fee Calculator 2026",
    description: "Calculate Poshmark seller fees ($2.95 flat or 20%) and your exact net payout and profit.",
    url: "https://www.themetricapp.com/calculators/poshmark-fee-calculator",
  };

  return (
    <CalculatorShell
      title="Poshmark Fee Calculator (2026)"
      subtitle="See exactly what Poshmark takes — $2.95 flat under $15 or 20% at $15 and up — and your true payout and profit on every sale."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Poshmark Fee" value={fmt(fee)} sub={price > 0 && price < 15 ? "$2.95 flat (under $15)" : "20% commission"} />
          <ResultCard label="Your Payout" value={fmt(payout)} highlight sub="What Poshmark deposits" />
          <ResultCard label="Net Profit" value={fmt(profit)} sub="After item cost" />
          <ResultCard label="Effective Fee Rate" value={pct(effRate)} />
          <ResultCard label="Profit Margin" value={pct(margin)} />
          <ResultCard label="Buyer Pays Shipping" value="$7.97" sub="Standard label — not your cost" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="salePrice" label="Listing / Sale Price" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} prefix="$" placeholder="45.00" helpText="The price the buyer pays for the item (shipping is separate)" />
          {errors.salePrice && <p className="text-xs text-red-500 mt-1">{errors.salePrice}</p>}
        </div>
        <div>
          <InputField id="itemCost" label="Your Item Cost (Optional)" value={itemCost} onChange={(e) => setItemCost(e.target.value)} prefix="$" placeholder="12.00" helpText="What you paid to source the item" />
          {errors.itemCost && <p className="text-xs text-red-500 mt-1">{errors.itemCost}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> Poshmark&apos;s fee includes payment processing and the prepaid shipping label (paid by the buyer). There are no listing fees. Fees verified against Poshmark&apos;s published schedule, July 2026.
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
            <a href="https://support.poshmark.com/s/article/What-are-the-fees-on-Poshmark" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Poshmark Fee Policy</a>
          </span>
        </div>
      </div>

      <h2>How Much Does Poshmark Take in 2026?</h2>
      <p>
        Poshmark uses one of the simplest fee structures in resale: for sales <strong>under $15</strong>, you pay a flat <strong>$2.95</strong>; for sales of <strong>$15 or more</strong>, Poshmark keeps a <strong>20% commission</strong>. That single fee covers payment processing, customer support, and the prepaid shipping label — which the <strong>buyer pays for</strong> (standard $7.97), so shipping never comes out of your pocket unless you offer a discount.
      </p>
      <p>
        There are <strong>no listing fees, no subscription, and no separate processing charge</strong>. The trade-off is that 20% is one of the highest headline rates among clothing marketplaces — compare it with <a href="/calculators/mercari-fee-calculator">Mercari&apos;s 10%</a> or <a href="/calculators/depop-fee-calculator">Depop&apos;s ~3.3% + $0.45</a> before choosing where to list.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your <strong>sale price</strong> and, optionally, what the item <strong>cost you</strong>. You&apos;ll instantly see the Poshmark fee, your payout (what actually lands in your balance), net profit, effective fee rate, and margin. Try prices on both sides of the $15 line — a $14 sale pays a $2.95 fee (21.1% effective), while a $15 sale pays $3.00 (20%), so pricing just below $15 rarely helps you.
      </p>

      <h2>The Math, With a Worked Example</h2>
      <p>
        <strong>Formula:</strong> Fee = $2.95 if price &lt; $15, otherwise 20% × price. Payout = price − fee. Profit = payout − item cost.
      </p>
      <p>
        <strong>Example:</strong> You sell a jacket for <strong>$45</strong> that cost you $12 at a thrift store. Fee = 20% × $45 = <strong>$9.00</strong>. Payout = <strong>$36.00</strong>. Profit = $36 − $12 = <strong>$24.00</strong>, a 53% margin. The buyer pays the $7.97 shipping on top of the $45.
      </p>

      <h2>Tips to Keep More of Every Poshmark Sale</h2>
      <p>
        <strong>Price above $15</strong> whenever the item justifies it — the flat $2.95 makes cheap items punishing (a $10 sale nets only $7.05, a 29.5% effective fee). <strong>Bundle low-value items</strong> so one combined sale crosses $15 instead of paying $2.95 three times. Factor the 20% into your sourcing: an item must sell for at least <strong>1.25× your cost</strong> just to break even. And remember marketplace income is taxable — Poshmark issues a 1099-K past the federal threshold, so track your <a href="/calculators/side-hustle-tax-calculator">side hustle taxes</a> from day one.
      </p>
      <p>
        Deciding where to list? Compare Poshmark against <a href="/calculators/mercari-fee-calculator">Mercari&apos;s flat 10%</a>, <a href="/calculators/depop-fee-calculator">Depop&apos;s ~3.3% + $0.45</a> (the lowest-fee clothing marketplace in 2026), and <a href="/calculators/ebay-seller-fee-profit">eBay&apos;s final value fees</a> before you cross-post the same item.
      </p>
    </>
  );
}

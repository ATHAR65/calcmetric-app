"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

export default function Calculator() {
  const [price, setPrice] = useState("");
  const [cogs, setCogs] = useState("");
  const [referralPct, setReferralPct] = useState("8");
  const [affiliateOn, setAffiliateOn] = useState(false);
  const [affiliatePct, setAffiliatePct] = useState("10");
  const [shipping, setShipping] = useState("");
  const [units, setUnits] = useState("100");

  const sellingPrice = parseFloat(price) || 0;
  const cost = parseFloat(cogs) || 0;
  const refPct = parseFloat(referralPct) || 0;
  const affPct = affiliateOn ? parseFloat(affiliatePct) || 0 : 0;
  const ship = parseFloat(shipping) || 0;
  const qty = parseFloat(units) || 0;

  const errors = {};
  if (price !== "" && sellingPrice < 0) errors.price = "Price can't be negative.";
  if (cogs !== "" && cost < 0) errors.cogs = "COGS can't be negative.";
  if (shipping !== "" && ship < 0) errors.shipping = "Shipping can't be negative.";
  if (units !== "" && qty < 0) errors.units = "Units can't be negative.";

  const referralFee = sellingPrice * (refPct / 100);
  const affiliateFee = sellingPrice * (affPct / 100);
  const totalFees = referralFee + affiliateFee + ship;
  const grossProfit = sellingPrice - cost;
  const netPerUnit = grossProfit - totalFees;
  const monthlyNet = netPerUnit * qty;
  const netMarginPct = sellingPrice > 0 ? (netPerUnit / sellingPrice) * 100 : 0;

  let warning = "";
  if (sellingPrice > 0) {
    if (netPerUnit < 0) warning = "You are losing money on every sale — your fees and costs exceed your price.";
    else if (netMarginPct < 10) warning = "Thin margin: under 10% net. Consider raising price or lowering costs/fees.";
  }

  const schemaData = {
    name: "TikTok Shop Earnings Calculator 2026",
    description: "Estimate your net TikTok Shop earnings after referral fees, affiliate commissions, COGS, and shipping.",
    url: "https://www.themetricapp.com/calculators/tiktok-shop-earnings-calculator-2026",
  };

  return (
    <CalculatorShell
      title="TikTok Shop Earnings Calculator (2026)"
      subtitle="Estimate your real net profit after TikTok Shop referral fees, affiliate commissions, COGS, and shipping."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          {sellingPrice <= 0 ? (
            <p className="text-center text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
              Enter a selling price to see your net earnings.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <ResultCard label="Selling Price" value={fmt(sellingPrice)} />
                <ResultCard label="COGS" value={fmt(cost)} />
                <ResultCard label={"TikTok Fee (" + refPct + "%)"} value={fmt(referralFee)} />
                <ResultCard label={"Affiliate" + (affiliateOn ? " (" + affPct + "%)" : " (off)")} value={fmt(affiliateFee)} />
                <ResultCard label="Shipping / Unit" value={fmt(ship)} />
                <ResultCard label="Net Profit / Unit" value={fmt(netPerUnit)} highlight />
                <ResultCard label="Net Margin" value={pct(netMarginPct)} />
                <ResultCard label={"Monthly Net (" + (qty || 0) + " units)"} value={fmt(monthlyNet)} highlight />
              </div>
              {warning && (
                <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-600" style={{ fontFamily: "var(--font-body)" }}>
                  ⚠️ {warning}
                </div>
              )}
              <p className="text-xs text-[#928fab]" style={{ fontFamily: "var(--font-body)" }}>
                Fees vary by category. Verify your exact rate at seller.tiktokshop.com.
              </p>
            </>
          )}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="price" label="Product Selling Price" value={price} onChange={(e) => setPrice(e.target.value)} prefix="$" placeholder="29.99" helpText="Price the customer pays" />
          {errors.price && <p className="text-xs text-red-500 mt-1">{errors.price}</p>}
        </div>
        <div>
          <InputField id="cogs" label="Product Cost / COGS" value={cogs} onChange={(e) => setCogs(e.target.value)} prefix="$" placeholder="9.00" helpText="Your cost per unit" />
          {errors.cogs && <p className="text-xs text-red-500 mt-1">{errors.cogs}</p>}
        </div>
        <div>
          <label htmlFor="referralPct" className="block text-sm text-[#5d5a78] mb-1.5" style={{ fontFamily: "var(--font-body)" }}>
            TikTok Referral Fee: <strong className="text-[#1d1a33]">{refPct}%</strong>
          </label>
          <input
            id="referralPct"
            type="range"
            min="2"
            max="20"
            step="0.5"
            value={referralPct}
            onChange={(e) => setReferralPct(e.target.value)}
            className="w-full accent-[#7c3aed]"
          />
          <p className="text-xs text-[#928fab]" style={{ fontFamily: "var(--font-body)" }}>Default 8%. Range 2–20% by category.</p>
        </div>
        <div>
          <InputField id="shipping" label="Shipping Cost / Unit (optional)" value={shipping} onChange={(e) => setShipping(e.target.value)} prefix="$" placeholder="0.00" helpText="Your shipping cost per order" />
          {errors.shipping && <p className="text-xs text-red-500 mt-1">{errors.shipping}</p>}
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="affiliatePct" className="text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>Affiliate Commission</label>
            <label className="flex items-center gap-2 text-xs text-[#5d5a78] cursor-pointer">
              <input type="checkbox" checked={affiliateOn} onChange={(e) => setAffiliateOn(e.target.checked)} className="h-4 w-4 accent-[#7c3aed]" />
              Enabled
            </label>
          </div>
          <InputField id="affiliatePct" label="" value={affiliatePct} onChange={(e) => setAffiliatePct(e.target.value)} suffix="%" placeholder="10" helpText="Commission paid to creators (when enabled)" />
        </div>
        <div>
          <InputField id="units" label="Units Sold Per Month" value={units} onChange={(e) => setUnits(e.target.value)} placeholder="100" helpText="Monthly sales volume" />
          {errors.units && <p className="text-xs text-red-500 mt-1">{errors.units}</p>}
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300"><strong>Last Updated:</strong> June 2026</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Author:</strong> Financial Metrics Team</span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://seller.tiktokshop.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">TikTok Shop Seller Center</a>
          </span>
        </div>
      </div>

      <h2>What is TikTok Shop and How Do Seller Fees Work in 2026?</h2>
      <p>
        <strong>TikTok Shop</strong> is TikTok&apos;s native e-commerce marketplace, letting brands and creators sell products directly inside the app through videos, live streams, and a product showcase. When a sale happens, TikTok deducts a <strong>referral fee</strong> (a percentage of the selling price) before paying you. In 2026 this referral fee typically ranges from about <strong>2% to 20% depending on product category</strong>, with many categories landing around <strong>8%</strong>. On top of that, sellers who run the affiliate program pay a <strong>commission</strong> to the creators who drive sales — usually 5–20%, set by the seller.
      </p>
      <p>
        This <strong>TikTok Shop earnings calculator</strong> brings every cost together — referral fee, affiliate commission, product cost, and shipping — so you can see your true net profit per unit and per month before you commit to a price. Knowing your real margin is the difference between scaling profitably and selling at a loss to chase volume.
      </p>

      <h2>How to Use This TikTok Shop Calculator</h2>
      <p>
        Enter your <strong>product selling price</strong> and your <strong>product cost (COGS)</strong>. Set the <strong>TikTok referral fee</strong> with the slider (default 8%, adjustable 2–20% to match your category). Toggle the <strong>affiliate commission</strong> on if creators promote your product and set the percentage. Add a <strong>shipping cost per unit</strong> if you absorb shipping, and enter your <strong>monthly units sold</strong>. The calculator instantly shows a full per-unit breakdown — price, COGS, TikTok fee, affiliate, shipping, and net profit — plus your monthly net and net margin, with a warning if your margin turns negative or drops below 10%.
      </p>

      <h2>TikTok Shop Fee Breakdown — What You Actually Pay</h2>
      <p>
        Your real cost stack on TikTok Shop has several layers. The <strong>referral (commission) fee</strong> is taken on the order value and varies by category. The <strong>affiliate commission</strong>, if you use creators, is an additional percentage you set and pay out of each sale. <strong>Shipping</strong> may be subsidized by you to stay competitive, and your <strong>COGS</strong> includes the product plus packaging. New sellers sometimes benefit from promotional reduced referral rates for an introductory period, after which standard category rates apply. Always confirm your exact category rate in the Seller Center, because a 6% versus 10% referral fee meaningfully changes your margin.
      </p>

      <h2>TikTok Shop vs Amazon vs Etsy — Fee Comparison</h2>
      <p>
        Compared with other marketplaces, TikTok Shop&apos;s referral fee is often <strong>lower than Amazon&apos;s ~15% referral fee</strong> and competitive with <strong>Etsy&apos;s ~6.5% transaction fee plus 3% + $0.25 processing</strong>. However, TikTok&apos;s real cost depends heavily on affiliate commissions — if you pay creators 15–20% to drive sales, your effective fee can exceed Amazon&apos;s. The trade-off is reach: TikTok&apos;s algorithm and live-shopping format can generate explosive, demand-driven volume that is hard to match on Amazon or Etsy. The right platform depends on your margins and whether your product is discovery-driven (TikTok) or search-driven (Amazon, Etsy).
      </p>

      <h2>How to Maximize Profit on TikTok Shop</h2>
      <p>
        First, <strong>price for the full fee stack</strong>, not just COGS — include referral, affiliate, and shipping before setting your price. Second, <strong>tune your affiliate rate</strong>: a higher commission attracts more creators and volume, but only if your margin can support it. Third, <strong>lower COGS</strong> through better supplier terms and bulk buying as you scale. Fourth, <strong>use TikTok&apos;s native formats</strong> — live shopping and short-form video can drive organic sales that avoid heavy ad spend. Finally, <strong>watch returns and chargebacks</strong>, which silently erode margin; build a small buffer into your pricing to absorb them.
      </p>

      <h2>Common Mistakes New TikTok Shop Sellers Make</h2>
      <p>
        The most common mistake is <strong>forgetting the affiliate commission</strong> when calculating margin, then discovering creator-driven sales barely break even. Another is <strong>assuming one flat fee</strong> — referral rates vary by category, and the wrong assumption can turn a &quot;profitable&quot; product into a loss. Sellers also <strong>underprice to win the algorithm</strong>, sacrificing margin for volume that never becomes profitable. Finally, many <strong>ignore shipping subsidies and returns</strong>, which together can wipe out a thin margin. Run the numbers before you launch, not after.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What percentage does TikTok Shop take from sellers in 2026?</h3>
      <p>TikTok Shop charges a referral (commission) fee that varies by product category, typically ranging from about 2% to 20%, with many categories around 8%. Always confirm your exact category rate in the Seller Center.</p>
      <h3>How does TikTok affiliate commission work for shop sellers?</h3>
      <p>Sellers set an affiliate commission rate (commonly 5–20%) that is paid to creators when their content drives a sale. This commission is in addition to the TikTok referral fee and comes out of your per-unit profit.</p>
      <h3>Is TikTok Shop profitable compared to Amazon or Etsy?</h3>
      <p>TikTok&apos;s referral fee is often lower than Amazon&apos;s ~15%, but affiliate commissions can raise your effective cost. TikTok&apos;s advantage is discovery-driven, viral volume, while Amazon and Etsy rely on search demand. Profitability depends on your margins and product type.</p>
      <h3>What are TikTok Shop referral fees by category?</h3>
      <p>Referral fees differ by product category and can range from roughly 2% to 20%. Categories like electronics, apparel, and beauty each have their own rate, so check the current schedule for your specific category in the TikTok Shop Seller Center.</p>
      <h3>How do I calculate my net profit on TikTok Shop?</h3>
      <p>Net profit per unit = selling price − COGS − TikTok referral fee − affiliate commission − shipping. Multiply by units sold for your monthly net. This calculator does the full breakdown automatically.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/etsy-fee-calculator-2026">Etsy Fee Calculator</a> — Listing, transaction, and processing fees.</li>
        <li><a href="/calculators/amazon-seller-fee-calculator-2026">Amazon Seller Fee Calculator</a> — Referral and closing fees with net profit.</li>
        <li><a href="/calculators/ecommerce-net-profit-margin">E-Commerce Profit Margin Calculator</a> — Net profit, ROAS, and margin.</li>
      </ul>

      <RelatedCalculators currentPage="tiktok-shop-earnings-calculator-2026" />
    </>
  );
}

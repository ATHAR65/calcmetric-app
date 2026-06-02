"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";
const MONTHLY_SHOPIFY_FEE = 39; // Basic Shopify

export default function Calculator() {
  const [monthlySales, setMonthlySales] = useState("");
  const [avgOrderValue, setAvgOrderValue] = useState("");
  const [cogsPercent, setCogsPercent] = useState("45");
  const [marketingPercent, setMarketingPercent] = useState("15");

  const sales = parseFloat(monthlySales) || 0;
  const avgOrder = parseFloat(avgOrderValue) || 0;
  const cogsPct = parseFloat(cogsPercent) || 0;
  const mktgPct = parseFloat(marketingPercent) || 0;

  const monthlyOrders = avgOrder > 0 ? sales / avgOrder : 0;
  // Shopify: 2.9% + $0.30 per transaction (Shopify Payments)
  const transactionFees = monthlyOrders * (avgOrder * 0.029 + 0.30);
  const cogs = sales * (cogsPct / 100);
  const marketingCost = sales * (mktgPct / 100);
  const totalCosts = transactionFees + cogs + marketingCost + MONTHLY_SHOPIFY_FEE;
  const monthlyProfit = sales - totalCosts;
  const profitMargin = sales > 0 ? (monthlyProfit / sales) * 100 : 0;
  const annualProfit = monthlyProfit * 12;

  const schemaData = {
    name: "Shopify Profit Calculator 2026",
    description: "Calculate Shopify store profits including subscription, transaction fees, COGS, and marketing costs.",
    url: "https://www.themetricapp.com/calculators/shopify-profit-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Shopify Profit Calculator (2026)"
      subtitle="Calculate your Shopify store net profit after subscription, transaction fees, COGS, and marketing costs."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Monthly Revenue" value={fmt(sales)} />
          <ResultCard label="Shopify Plan" value={`$${MONTHLY_SHOPIFY_FEE}/mo`} sub="Basic" />
          <ResultCard label="Transaction Fees" value={fmt(transactionFees)} sub="2.9% + $0.30/order" />
          <ResultCard label="COGS" value={fmt(cogs)} sub={cogsPct + "% of revenue"} />
          <ResultCard label="Marketing Cost" value={fmt(marketingCost)} sub={mktgPct + "% of revenue"} />
          <ResultCard label="Net Monthly Profit" value={fmt(monthlyProfit)} highlight />
          <ResultCard label="Net Annual Profit" value={fmt(annualProfit)} highlight />
          <ResultCard label="Profit Margin" value={pct(profitMargin)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="monthlySales" label="Monthly Sales Revenue" value={monthlySales} onChange={(e) => setMonthlySales(e.target.value)} prefix="$" placeholder="25000" />
        <InputField id="avgOrderValue" label="Avg Order Value" value={avgOrderValue} onChange={(e) => setAvgOrderValue(e.target.value)} prefix="$" placeholder="45.00" />
        <InputField id="cogsPercent" label="COGS (% of revenue)" value={cogsPercent} onChange={(e) => setCogsPercent(e.target.value)} suffix="%" placeholder="45" helpText="Product cost including shipping" />
        <InputField id="marketingPercent" label="Marketing (% of revenue)" value={marketingPercent} onChange={(e) => setMarketingPercent(e.target.value)} suffix="%" placeholder="15" helpText="Ads, SEO, social media" />
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
            <a href="https://www.shopify.com/pricing" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Shopify Pricing
            </a>
            {" · "}
            <a href="https://help.shopify.com/en/manual/payments/shopify-payments" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Shopify Payments
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Shopify Profit Calculator</h2>
      <p>
        Running a Shopify store involves multiple costs beyond just product expenses. This calculator accounts for your Shopify subscription, transaction fees via Shopify Payments, cost of goods sold, and marketing spend to give you your true net profit.
      </p>
      <p>
        Enter your <strong>monthly sales revenue</strong>, <strong>average order value</strong>, <strong>COGS as a percentage of revenue</strong>, and <strong>marketing spend percentage</strong>. The calculator uses Shopify Basic ($39/month) pricing with 2.9% + $0.30 per transaction via Shopify Payments.
      </p>

      <h2>Shopify Fee Structure for 2026</h2>
      <p>
        Shopify plans: Basic ($39/mo, 2.9% + $0.30 per transaction), Shopify ($105/mo, 2.6% + $0.30), Advanced ($399/mo, 2.4% + $0.30). Using third-party payment gateways (like PayPal or Stripe) adds an additional 0.5-1% fee on top. Shopify Payments avoids this surcharge. For high-volume stores, the Advanced plan can save thousands annually in transaction fees.
      </p>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Shopify Profit Calculator uses Shopify's official pricing and rates verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Shopify Plans:</strong> Official pricing from{" "}
          <a href="https://www.shopify.com/pricing" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Shopify Pricing Page
          </a>
          . Basic ($39/mo), Shopify ($105/mo), Advanced ($399/mo).
        </li>
        <li>
          <strong>Transaction Fees:</strong> Shopify Payments rates from{" "}
          <a href="https://help.shopify.com/en/manual/payments/shopify-payments" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Shopify Payments Guide
          </a>
          . Online: 2.9% + $0.30.
        </li>
        <li>
          <strong>Third-Party Gateways:</strong> Additional 0.5-2% surcharge applies when not using Shopify Payments.
        </li>
      </ul>
      <p className="text-xs text-gray-500 dark:text-slate-400">
        <strong>Methodology:</strong> Net profit = monthly revenue − (Shopify plan fee + transaction fees + COGS + marketing costs). Transaction fees = orders × (avg order × 2.9% + $0.30). Results are estimates; app subscription costs ($50-200/mo typical) and domain/hosting not included.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Should I use Shopify Payments or a third-party processor?</h3>
      <p>
        Shopify Payments (powered by Stripe) is the most cost-effective option because it avoids the 0.5-2% third-party transaction fee that Shopify charges when using external gateways. Unless you need PayPal or a specific processor, Shopify Payments saves money.
      </p>
      <h3>Does this include Shopify app subscription costs?</h3>
      <p>
        No — this calculator covers core Shopify fees and COGS. Many stores spend $50-$200/month on apps for reviews, email marketing, upselling, and inventory management. Factor these into your marketing or general expenses for a complete picture.
      </p>
      <h3>How does Shopify pricing compare to other platforms?</h3>
      <p>
        Shopify is generally more expensive than WooCommerce (free plugin, but you pay for hosting) or BigCommerce (similar pricing to Shopify). However, Shopify offers better integrations, 24/7 support, and less technical maintenance. For stores doing $25k+/month, the fee difference is minimal compared to the time savings.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Read our guide:{" "}<a href="/blog/shopify-profit-calculator-2026" className="text-teal-400 underline hover:text-teal-300">Shopify Profit Calculator 2026 — Complete Guide</a>.
          <br />Check our{" "}<a href="/calculators/ecommerce-net-profit-margin" className="text-teal-400 underline hover:text-teal-300">E-Commerce Profit Margin Calculator</a>
          {" "}and{" "}<a href="/calculators/stripe-fee-merchant-calculator" className="text-teal-400 underline hover:text-teal-300">Stripe Fee Calculator</a>.
        </p>
      </div>

      <RelatedCalculators currentPage="shopify-profit-calculator-2026" />

      </>
  );
}

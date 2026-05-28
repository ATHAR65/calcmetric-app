"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(2) + "%";

export default function Calculator() {
  const [soldPrice, setSoldPrice] = useState("");
  const [shippingCharged, setShippingCharged] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  const price = parseFloat(soldPrice) || 0;
  const shipCharged = parseFloat(shippingCharged) || 0;
  const cost = parseFloat(itemCost) || 0;
  const shipCost = parseFloat(shippingCost) || 0;

  // eBay final value fee: 13.25% of total amount + $0.30
  const totalSaleAmount = price + shipCharged;
  const ebayFeePercent = 0.1325;
  const ebayFee = totalSaleAmount * ebayFeePercent + 0.30;

  const grossRevenue = totalSaleAmount;
  const totalFees = ebayFee;
  const totalCosts = cost + shipCost;
  const netProfit = grossRevenue - totalFees - totalCosts;
  const profitMargin = grossRevenue > 0 ? (netProfit / grossRevenue) * 100 : 0;
  const effectiveFeeRate = grossRevenue > 0 ? (totalFees / grossRevenue) * 100 : 0;
  const roi = totalCosts > 0 ? (netProfit / totalCosts) * 100 : 0;

  const schemaData = {
    name: "eBay Seller Fee & Profit Calculator",
    description: "Calculate eBay final value fees and your true net profit after all selling and shipping costs.",
    url: "https://www.themetricapp.com/calculators/ebay-seller-fee-profit",
  };

  return (
    <CalculatorShell
      title="eBay Seller Fee Calculator 2026 — Calculate Final Value Fees & Net Profit"
      subtitle="Calculate eBay final value fees and your true net cash profit after all costs."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ResultCard label="Gross Revenue" value={fmt(grossRevenue)} sub="Sale + Shipping" />
          <ResultCard label="eBay Fee (13.25%)" value={fmt(ebayFee)} sub={"+ $0.30 per order"} />
          <ResultCard label="Total Your Costs" value={fmt(totalCosts)} sub="Item + Shipping" />
          <ResultCard label="Net Cash Profit" value={fmt(netProfit)} highlight />
          <ResultCard label="Profit Margin" value={pct(profitMargin)} highlight />
          <ResultCard label="Effective Fee Rate" value={pct(effectiveFeeRate)} />
          <ResultCard label="ROI" value={pct(roi)} sub="Return on costs" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="soldPrice" label="Item Sold Price" value={soldPrice} onChange={(e) => setSoldPrice(e.target.value)} prefix="$" placeholder="49.99" />
        <InputField id="shippingCharged" label="Shipping Charged to Buyer" value={shippingCharged} onChange={(e) => setShippingCharged(e.target.value)} prefix="$" placeholder="5.99" helpText="Or $0 if free shipping" />
        <InputField id="itemCost" label="Your Item Cost (COGS)" value={itemCost} onChange={(e) => setItemCost(e.target.value)} prefix="$" placeholder="15.00" helpText="What you paid for the item" />
        <InputField id="shippingCost" label="Your Shipping Cost" value={shippingCost} onChange={(e) => setShippingCost(e.target.value)} prefix="$" placeholder="4.50" helpText="Actual cost to ship" />
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
            <a href="https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              eBay Fee Schedule
            </a>
            {" · "}
            <a href="https://pages.ebay.com/help/sell/fees.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              eBay Managed Payments
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the eBay Seller Fee &amp; Profit Calculator</h2>
      <p>
        Selling on eBay can be highly profitable, but many sellers underestimate the impact of eBay&apos;s final value fees on their bottom line. This calculator provides an instant, accurate breakdown of all eBay fees and your true net cash profit after every cost is accounted for. Whether you are a casual seller clearing out your closet or a full-time eBay business reseller, understanding your real profit per item is essential for pricing decisions and inventory sourcing.
      </p>
      <p>
        Enter the <strong>item sold price</strong> — the final selling price the buyer paid (winning bid or Buy It Now price). Next, enter the <strong>shipping amount charged to the buyer</strong> — enter $0 if you offer free shipping (note: eBay calculates its fee on the total amount including shipping). Then enter <strong>your item cost</strong> — what you originally paid for the item (purchase price, wholesale cost, or thrift/garage sale cost). Finally, enter your <strong>actual shipping cost</strong> — the real amount you pay USPS, UPS, FedEx, or another carrier to ship the item to the buyer.
      </p>
      <p>
        The calculator instantly computes eBay&apos;s final value fee (13.25% + $0.30 for most categories), your total costs, net cash profit, profit margin, effective fee rate, and return on investment. This helps you determine minimum selling prices to achieve target margins and evaluate whether sourcing a particular item for resale is worthwhile.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <h3>eBay Final Value Fee Structure</h3>
      <p>
        eBay charges sellers a <strong>final value fee</strong> calculated on the <strong>total amount of the sale, including the item price AND shipping</strong>. For most categories, the rate is <strong>13.25% + $0.30 per order</strong>. This means if you sell an item for $49.99 with $5.99 shipping, eBay calculates the fee on the full $55.98: Fee = ($55.98 × 13.25%) + $0.30 = $7.42 + $0.30 = <strong>$7.72</strong>. This is a critical point that many new sellers miss — offering &quot;free shipping&quot; by rolling shipping costs into the item price does not change your total fee because eBay fees are based on the total amount paid by the buyer.
      </p>
      <h3>Category-Specific Fee Variations</h3>
      <p>
        While 13.25% is the standard rate for most categories, some categories have different rates. Musical instruments and gear are charged 6.35%, most collectibles categories are 13.25%, and some electronics categories can be slightly lower. eBay Store subscribers may receive discounted rates depending on their subscription tier. This calculator uses the standard 13.25% + $0.30, which applies to the majority of eBay transactions. Always check eBay&apos;s current fee schedule for your specific category.
      </p>
      <h3>Net Profit Calculation</h3>
      <p>
        <strong>Net Profit = Total Sale Amount − eBay Fee − Item Cost − Shipping Cost</strong>. Using our example: $55.98 − $7.72 − $15.00 − $4.50 = <strong>$28.76 net profit</strong>. The profit margin is ($28.76 ÷ $55.98) × 100 = 51.4%. The ROI on your investment is ($28.76 ÷ $19.50) × 100 = 147.5%, meaning you nearly tripled your money on this single item.
      </p>

      {/* Fee Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Platform</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Fee Rate</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Fixed Fee</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Net on $50 Sale</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">eBay</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">13.25%</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$0.30</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$43.07</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Etsy</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">9.5%</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$0.25</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$45.00</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Amazon</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">15%</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$0.99</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$41.51</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Shopify</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">2.9%</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$0.30</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$48.25</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Comparison assumes $50 item sale price. eBay includes managed payments. Amazon adds $0.99 closing fee.
        </p>
      </div>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our eBay Seller Fee & Profit Calculator uses eBay's official fee structure verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>eBay Fee Schedule:</strong> Official rates from{" "}
          <a href="https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            eBay Selling Fees
          </a>
          . Standard final value fee: 13.25% + $0.30 per order.
        </li>
        <li>
          <strong>eBay Managed Payments:</strong> Payment processing included in final value fee per{" "}
          <a href="https://pages.ebay.com/help/sell/fees.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            eBay Managed Payments FAQ
          </a>
          .
        </li>
        <li>
          <strong>Category Rates:</strong> Some categories (musical instruments: 6.35%, stores: discounted rates) differ. Our calculator uses the standard 13.25% rate that applies to most categories.
        </li>
      </ul>
      <p className="text-xs text-gray-500 dark:text-slate-400">
        <strong>Methodology:</strong> Net profit = Gross revenue (sale price + shipping) − eBay final value fee − item cost − shipping cost. Final value fee = total sale amount × 13.25% + $0.30. Results are estimates; actual fees may vary based on category, store subscription, and promotional fees.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Why does eBay charge fees on shipping — and should I offer free shipping?</h3>
      <p>
        eBay charges its final value fee on the total amount paid by the buyer, including shipping, to prevent sellers from setting artificially low item prices and inflating shipping charges to avoid fees (a common practice in eBay&apos;s early years). Whether to offer free shipping depends on your strategy. <strong>Free shipping advantages:</strong> eBay&apos;s search algorithm (Cassini) gives a ranking boost to free shipping listings, buyers psychologically prefer free shipping even at higher item prices, and it simplifies the buyer experience. <strong>Free shipping disadvantages:</strong> you absorb the full shipping cost, heavy or oversized items make free shipping expensive, and returns become costlier since you may need to refund the full amount. The most successful eBay sellers typically offer free shipping on lightweight items (under 1 lb) where shipping costs are predictable and absorb-able, while charging calculated shipping on heavier items. Since eBay fees are based on total amount either way, the decision comes down to SEO ranking benefits and buyer psychology versus your margin tolerance.
      </p>
      <h3>How can I minimize eBay fees and maximize my per-item profit?</h3>
      <p>
        Several strategies can help reduce the effective eBay fee burden. First, consider an <strong>eBay Store subscription</strong> — Basic Store ($21.95/month) provides 250 free listings and slightly reduced final value fees in some categories. Premium and Anchor stores offer progressively better rates. Second, <strong>optimize your sourcing</strong> — the most important profit lever is reducing your item acquisition cost. Thrift stores, garage sales, liquidation pallets, and wholesale suppliers offer the deepest margins. Third, <strong>bundle items</strong> — selling multiple items as a lot reduces the per-item impact of the $0.30 fixed fee. Fourth, <strong>use USPS media mail</strong> for qualifying items (books, DVDs, video games) at dramatically lower shipping rates. Fifth, <strong>negotiate shipping rates</strong> through eBay&apos;s built-in shipping labels, which offer discounted USPS and FedEx rates that are typically 30-40% below retail counter rates.
      </p>
      <h3>Does this calculator include eBay&apos;s payment processing fee?</h3>
      <p>
        Under eBay&apos;s <strong>Managed Payments</strong> system (which replaced PayPal for all sellers), payment processing is included in the final value fee. There is no separate payment processing charge — the 13.25% + $0.30 per order covers both the marketplace fee and payment processing. This is actually simpler and often cheaper than the old system, where sellers paid both eBay&apos;s listing/final value fees AND PayPal&apos;s 2.9% + $0.30 processing fee. Under the old system, total fees on a $55.98 sale would have been approximately $9.34 (eBay FVF + PayPal), compared to $7.72 under the current unified fee structure. However, international transactions may incur an additional 1.65% international fee, and promoted listings (advertising within eBay search results) add a separate ad rate of 2–15% depending on the category and competition level.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed examples, strategies, and expert tips on eBay selling, read our full guide:{" "}
          <a href="/blog/ebay-seller-fee-profit-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            eBay Seller Fee &amp; Profit 2026 Guide
          </a>
          . This companion article covers additional fee scenarios, selling strategies, and real-world case studies not included in the calculator.
        </p>
      </div>

      <h2>Related Tools</h2>
      <p>
        Check out these other helpful calculators for eBay sellers:
      </p>
      <ul>
        <li><a href="/calculators/stripe-fee-merchant-calculator">Stripe Fee &amp; Merchant Calculator</a> — Calculate Stripe processing fees and net payout.</li>
        <li><a href="/calculators/ecommerce-net-profit-margin">E-Commerce Profit Margin Calculator</a> — Net profit, ROAS, and break-even analysis.</li>
        <li><a href="/calculators/freelancer-platform-fee-comparison">Freelancer Platform Fee Comparison</a> — Compare Upwork vs Fiverr fees side-by-side.</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "eBay Seller Fee & Profit Calculator",
            "url": "https://www.themetricapp.com/calculators/ebay-seller-fee-profit",
            "description": "Calculate eBay final value fees and your true net profit after all selling and shipping costs.",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" },
              { "@type": "ListItem", "position": 2, "name": "eBay Seller Fee & Profit Calculator", "item": "https://www.themetricapp.com/calculators/ebay-seller-fee-profit" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why does eBay charge fees on shipping — and should I offer free shipping?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "eBay charges its final value fee on the total amount paid including shipping to prevent artificially low item prices with inflated shipping. Free shipping gives a search algorithm boost but you absorb the full shipping cost."
                }
              },
              {
                "@type": "Question",
                "name": "How can I minimize eBay fees and maximize my per-item profit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Strategies include: eBay Store subscription for reduced rates, optimizing sourcing costs, bundling items to reduce fixed fee impact, using USPS media mail, and negotiating shipping rates through eBay labels."
                }
              },
              {
                "@type": "Question",
                "name": "Does this calculator include eBay payment processing fee?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Under eBay Managed Payments system, payment processing is included in the final value fee. The 13.25% + $0.30 per order covers both the marketplace fee and payment processing."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

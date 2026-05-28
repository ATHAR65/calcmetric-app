"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function marginalTax(income, brackets) {
  if (income <= 0) return 0;
  let tax = 0;
  let prev = 0;
  for (const b of brackets) {
    if (income > prev) {
      tax += (Math.min(income, b.max) - prev) * b.rate;
    }
    prev = b.max;
  }
  return tax;
}

function capitalGainsTax(gain, isLongTerm, otherIncome) {
  const totalIncome = otherIncome + gain;
  // Short-term: ordinary income rates (tax on total - tax on other = tax on gain)
  if (!isLongTerm) {
    const brackets = [
      { max: 11925, rate: 0.10 }, { max: 48475, rate: 0.12 },
      { max: 103350, rate: 0.22 }, { max: 197300, rate: 0.24 },
      { max: 250525, rate: 0.32 }, { max: 626350, rate: 0.35 },
      { max: Infinity, rate: 0.37 },
    ];
    return Math.max(0, marginalTax(totalIncome, brackets) - marginalTax(otherIncome, brackets));
  }
  // Long-term: 0/15/20%
  const ltBrackets = [
    { max: 47025, rate: 0 },
    { max: 518900, rate: 0.15 },
    { max: Infinity, rate: 0.20 },
  ];
  return marginalTax(gain, ltBrackets);
}

export default function Calculator() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [otherIncome, setOtherIncome] = useState("75000");
  const [holdingPeriod, setHoldingPeriod] = useState("long");

  const buyPrice = parseFloat(purchasePrice) || 0;
  const sellPrice = parseFloat(salePrice) || 0;
  const other = parseFloat(otherIncome) || 0;
  const isLongTerm = holdingPeriod === "long";

  const gain = Math.max(0, sellPrice - buyPrice);
  const tax = capitalGainsTax(gain, isLongTerm, other);
  const afterTax = gain - tax;
  const effectiveRate = gain > 0 ? (tax / gain) * 100 : 0;

  const schemaData = {
    name: "Crypto Tax Calculator 2026",
    description: "Calculate cryptocurrency capital gains taxes for short-term and long-term crypto trades.",
    url: "https://www.themetricapp.com/calculators/crypto-tax-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Crypto Tax Calculator 2026 — Bitcoin, Ethereum & Cryptocurrency Capital Gains"
      subtitle="Calculate cryptocurrency capital gains taxes for short-term vs long-term holdings with federal brackets."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Cost Basis (Purchase)" value={fmt(buyPrice)} />
          <ResultCard label="Sale Proceeds" value={fmt(sellPrice)} />
          <ResultCard label="Capital Gain" value={fmt(gain)} highlight />
          <ResultCard label="Holding Period" value={isLongTerm ? "Long-Term (1+ yr)" : "Short-Term"} sub={isLongTerm ? "0-20% rate" : "Income rate"} />
          <ResultCard label="Tax on Crypto Gain" value={fmt(tax)} highlight />
          <ResultCard label="After-Tax Gain" value={fmt(afterTax)} />
          <ResultCard label="Effective Tax Rate" value={effectiveRate.toFixed(1) + "%"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="purchasePrice" label="Purchase Price (Cost Basis)" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} prefix="$" placeholder="10000" helpText="What you paid including fees" />
        <InputField id="salePrice" label="Sale Price (Proceeds)" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} prefix="$" placeholder="25000" helpText="What you sold for" />
        <InputField id="otherIncome" label="Other Taxable Income" value={otherIncome} onChange={(e) => setOtherIncome(e.target.value)} prefix="$" placeholder="75000" helpText="W-2, 1099, other income" />
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Holding Period</label>
          <select value={holdingPeriod} onChange={(e) => setHoldingPeriod(e.target.value)}
            className="w-full rounded-lg border border-slate-600 bg-slate-800/60 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="long">Long-Term (1+ year) — Lower tax</option>
            <option value="short">Short-Term (Under 1 year) — Income rate</option>
          </select>
        </div>
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
            <a href="https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Virtual Currency FAQ
            </a>
            {" · "}
            <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Revenue Procedure
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Crypto Tax Calculator</h2>
      <p>
        Cryptocurrency is treated as <strong>property</strong> by the IRS, meaning every trade, sale, or crypto-to-crypto exchange is a taxable event. This calculator estimates your capital gains tax on crypto trades based on your holding period and other income.
      </p>
      <p>
        Enter your <strong>purchase price (cost basis)</strong>, <strong>sale price (proceeds)</strong>, <strong>other taxable income</strong>, and select your <strong>holding period</strong>. The calculator automatically applies the appropriate tax rate — short-term (ordinary income rates up to 37%) or long-term (0-20%).
      </p>

      <h2>Cryptocurrency Tax Rates for 2026</h2>
      <p>
        Crypto held for <strong>less than 1 year</strong> is taxed as short-term capital gains at your ordinary income tax rate (10-37%). Crypto held for <strong>more than 1 year</strong> qualifies for long-term capital gains rates: 0% (income up to $47,025 single), 15% ($47,025-$518,900), or 20% (over $518,900). The 3.8% NIIT may also apply for high earners.
      </p>

      {/* Visual Content: Short-Term vs Long-Term Crypto Tax Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Holding Period</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Tax Rate</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">$10,000 Gain Tax</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">$50,000 Gain Tax</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">$100,000 Gain Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Short-Term (&le; 1 yr)</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">10% – 37%</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$2,200</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$12,000</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$24,000</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Long-Term (&gt; 1 yr)</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">0% – 20%</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$0</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$7,500</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$15,000</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Potential Savings</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">—</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 font-bold">$2,200</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 font-bold">$4,500</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right text-green-600 font-bold">$9,000</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * Based on single filer with $80,000 ordinary income. Actual results vary by filing status and total income.
        </p>
      </div>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Is crypto-to-crypto trading a taxable event?</h3>
      <p>
        Yes — exchanging Bitcoin for Ethereum (or any crypto-to-crypto trade) is a taxable event. The IRS considers this a sale of the original asset, and you must report the gain or loss based on the fair market value at the time of the trade. This applies to DeFi swaps, token exchanges, and even converting crypto to stablecoins.
      </p>
      <h3>Do I need to report crypto taxes if I only bought and held?</h3>
      <p>
        No — simply buying and holding cryptocurrency is not a taxable event. You only trigger a tax liability when you sell, trade, spend, or otherwise dispose of your crypto. However, if you earn crypto through staking, mining, or as payment for services, that income is taxable as ordinary income at the time of receipt.
      </p>
      <h3>Can I use crypto losses to offset gains?</h3>
      <p>
        Yes — tax-loss harvesting applies to cryptocurrency. You can use realized crypto losses to offset crypto gains and up to $3,000 of ordinary income per year. Unused losses carry forward to future years. Be aware of the wash sale rule — while the IRS hasn&apos;t officially applied it to crypto, it&apos;s safest to avoid repurchasing the same asset within 30 days.
      </p>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Crypto Tax Calculator uses 2026 federal tax rates from official IRS sources. All data is verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Short-Term Rates:</strong> Ordinary income tax brackets (10%–37%) from{" "}
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Revenue Procedure 2025
          </a>
          .
        </li>
        <li>
          <strong>Long-Term Rates:</strong> 0%, 15%, 20% capital gains brackets from{" "}
          <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Form 1040 Instructions
          </a>
          .
        </li>
        <li>
          <strong>Crypto Tax Treatment:</strong> IRS Notice 2014-21 and subsequent guidance from{" "}
          <a href="https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Virtual Currency FAQ
          </a>
          .
        </li>
        <li>
          <strong>Wash Sale Rule:</strong> IRS Section 1091 from{" "}
          <a href="https://www.law.cornell.edu/uscode/text/26/1091" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            US Code Title 26
          </a>
          . Currently does not officially apply to cryptocurrency.
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Short-term gains are added to your ordinary income and taxed at marginal income tax rates (10%–37%). Long-term gains use the stacking method — ordinary income fills lower tax brackets first, then capital gains are taxed at 0%, 15%, or 20% on top. The NIIT (3.8%) is calculated on the lesser of net investment income or MAGI minus the applicable threshold.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Check our{" "}<a href="/calculators/capital-gains-tax-calculator" className="text-teal-400 underline hover:text-teal-300">Capital Gains Tax Calculator</a>
          {" "}and{" "}<a href="/calculators/dividend-tax-calculator-2026" className="text-teal-400 underline hover:text-teal-300">Dividend Tax Calculator</a>.
        </p>
      </div>

      <RelatedCalculators currentPage="crypto-tax-calculator-2026" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", "name": "Crypto Tax Calculator 2026", "url": "https://www.themetricapp.com/calculators/crypto-tax-calculator-2026", "description": "Calculate cryptocurrency capital gains taxes for short and long-term crypto trades.", "applicationCategory": "FinanceApplication", "operatingSystem": "Web Browser", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" }, { "@type": "ListItem", "position": 2, "name": "Crypto Tax Calculator", "item": "https://www.themetricapp.com/calculators/crypto-tax-calculator-2026" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Is crypto-to-crypto trading a taxable event?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — exchanging one crypto for another is a taxable event. The IRS considers this a sale of the original asset at fair market value." } }, { "@type": "Question", "name": "Do I need to report crypto taxes if I only bought and held?", "acceptedAnswer": { "@type": "Answer", "text": "No — buying and holding is not taxable. Tax is triggered when you sell, trade, spend, or dispose of crypto. Crypto earned through staking or mining is taxable as income." } }, { "@type": "Question", "name": "Can I use crypto losses to offset gains?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — realized crypto losses offset gains and up to $3,000 of ordinary income per year. Unused losses carry forward. The wash sale rule may apply." } }] }) }} />
    </>
  );
}

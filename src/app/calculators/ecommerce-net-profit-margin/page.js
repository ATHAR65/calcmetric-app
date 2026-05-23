"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import SelectField from "@/components/SelectField";

const PLATFORM_FEES = {
  none: { label: "None (Direct Sale)", feeRate: 0, fixedFee: 0, desc: "" },
  amazon: { label: "Amazon", feeRate: 15, fixedFee: 0, desc: "Referral fee 15% (varies by category)" },
  shopify: { label: "Shopify", feeRate: 2.9, fixedFee: 0.30, desc: "Shopify Payments 2.9% + $0.30" },
  ebay: { label: "eBay", feeRate: 13.25, fixedFee: 0.40, desc: "Final value fee 13.25% + $0.40" },
  etsy: { label: "Etsy", feeRate: 9.5, fixedFee: 0.25, desc: "Transaction fee 6.5% + 3% payment + $0.25" },
  custom: { label: "Custom Platform", feeRate: 0, fixedFee: 0, desc: "Enter your own rates below" },
};

const UK_PLATFORM_FEES = {
  none: { label: "None (Direct Sale)", feeRate: 0, fixedFee: 0, desc: "" },
  amazon: { label: "Amazon UK", feeRate: 15, fixedFee: 0, desc: "Referral fee ~15% (varies by category)" },
  shopify: { label: "Shopify", feeRate: 2.9, fixedFee: 0.20, desc: "Shopify Payments 2.9% + £0.20" },
  ebay: { label: "eBay UK", feeRate: 12.8, fixedFee: 0.30, desc: "Final value fee 12.8% + £0.30" },
  etsy: { label: "Etsy UK", feeRate: 9.5, fixedFee: 0.19, desc: "Transaction fee 6.5% + 3% payment + £0.19" },
  custom: { label: "Custom Platform", feeRate: 0, fixedFee: 0, desc: "Enter your own rates below" },
};

export default function EcommerceProfitCalculator() {
  const [region, setRegion] = useState("us");
  const [price, setPrice] = useState("");
  const [unitsSold, setUnitsSold] = useState("");
  const [cogs, setCogs] = useState("");
  const [marketing, setMarketing] = useState("");
  const [shipping, setShipping] = useState("");
  const [platform, setPlatform] = useState("none");
  const [customFeeRate, setCustomFeeRate] = useState("");
  const [customFixedFee, setCustomFixedFee] = useState("");
  const [processingRate, setProcessingRate] = useState("");
  const [returnsRate, setReturnsRate] = useState("");
  const [overhead, setOverhead] = useState("");

  const isUK = region === "uk";
  const currency = isUK ? "£" : "$";
  const fmt = (n) => currency + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const pct = (n) => (n || 0).toFixed(2) + "%";

  const sellingPrice = parseFloat(price) || 0;
  const units = parseFloat(unitsSold) || 0;
  const costOfGoods = parseFloat(cogs) || 0;
  const marketingSpend = parseFloat(marketing) || 0;
  const shippingCost = parseFloat(shipping) || 0;
  const processingRateVal = parseFloat(processingRate) || 0;
  const returnsRateVal = parseFloat(returnsRate) || 0;
  const overheadCost = parseFloat(overhead) || 0;

  // Platform fee lookup
  const feeConfig = isUK ? UK_PLATFORM_FEES : PLATFORM_FEES;
  const selectedFee = feeConfig[platform] || feeConfig.none;
  const platformRate = platform === "custom" ? (parseFloat(customFeeRate) || 0) : selectedFee.feeRate;
  const platformFixed = platform === "custom" ? (parseFloat(customFixedFee) || 0) : selectedFee.fixedFee;

  // Per-unit calculations
  const platformFeePerUnit = sellingPrice * (platformRate / 100) + platformFixed;
  const processingFeePerUnit = sellingPrice * (processingRateVal / 100);
  const returnsCostPerUnit = returnsRateVal > 0
    ? costOfGoods * (returnsRateVal / 100)
    : 0;
  const totalCostPerUnit = costOfGoods + shippingCost + platformFeePerUnit + processingFeePerUnit + overheadCost + returnsCostPerUnit + (units > 0 ? marketingSpend / units : 0);
  const grossProfitPerUnit = sellingPrice - costOfGoods;
  const netProfitPerUnit = sellingPrice - totalCostPerUnit;

  // Total (scaled) calculations — deduct returns from revenue (refunded sales)
  const netUnits = units * (1 - returnsRateVal / 100);
  const totalRevenue = sellingPrice * netUnits;

  const totalCOGS = costOfGoods * units;
  const totalShipping = shippingCost * units;
  const totalPlatformFees = platformFeePerUnit * units;
  const totalProcessingFees = processingFeePerUnit * units;
  const totalOverhead = overheadCost * units;
  const totalReturnsCost = costOfGoods * (returnsRateVal / 100) * units;
  const totalGrossProfit = totalRevenue - totalCOGS;
  const totalNetProfit = totalRevenue - totalCOGS - totalShipping - totalPlatformFees - totalProcessingFees - marketingSpend - totalOverhead - totalReturnsCost;

  // Margin percentages
  const grossMargin = totalRevenue > 0 ? (totalGrossProfit / totalRevenue) * 100 : 0;
  const netMargin = totalRevenue > 0 ? (totalNetProfit / totalRevenue) * 100 : 0;

  // ROAS = Revenue / Marketing Spend
  const roas = marketingSpend > 0 ? totalRevenue / marketingSpend : 0;

  // ROI = Net Profit / Total Investment
  const totalInvestment = totalCOGS + totalShipping + totalPlatformFees + totalProcessingFees + marketingSpend + totalOverhead + totalReturnsCost;
  const roi = totalInvestment > 0 ? (totalNetProfit / totalInvestment) * 100 : 0;

  // Break-even on marketing spend
  const contributionPerUnit = netProfitPerUnit;
  const breakEvenUnits = contributionPerUnit > 0 && marketingSpend > 0 ? Math.ceil(marketingSpend / contributionPerUnit) : 0;

  const schemaData = {
    name: "E-Commerce Profit Calculator — Net Margin, ROAS & Profitability",
    description: "Calculate net profit margin, ROAS, ROI, and break-even for e-commerce businesses. Supports US and UK sellers on Amazon, Shopify, eBay, and Etsy.",
    url: "https://wisefinancecalc.com/calculators/ecommerce-net-profit-margin",
  };

  return (
    <CalculatorShell
      title="E-Commerce Profit Calculator"
      subtitle="Calculate your true net profit, ROAS, margin, and break-even across US and UK markets."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          {/* Region badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-[#0D9488]/10 px-3 py-1 text-xs font-semibold text-[#0D9488]">
              {isUK ? "🇬🇧 United Kingdom" : "🇺🇸 United States"}
            </span>
            {units > 0 && (
              <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">
                {units.toLocaleString()} units sold
              </span>
            )}
          </div>

          {/* Top-level KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ResultCard label="Total Revenue" value={fmt(totalRevenue)} highlight />
            <ResultCard label="Gross Profit" value={fmt(totalGrossProfit)} sub={`Margin: ${pct(grossMargin)}`} />
            <ResultCard label="Net Profit" value={fmt(totalNetProfit)} highlight sub={`Margin: ${pct(netMargin)}`} />
            <ResultCard label="Profit Per Unit" value={fmt(netProfitPerUnit)} />
          </div>

          {/* ROAS + ROI + Break-even + Cost breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ResultCard label="ROAS" value={roas > 0 ? roas.toFixed(2) + "x" : "—"} sub="Return on Ad Spend" />
            <ResultCard label="ROI" value={pct(roi)} sub="Return on Investment" />
            <ResultCard label="Break-Even Units" value={breakEvenUnits > 0 ? breakEvenUnits.toLocaleString() : "—"} sub="To cover marketing" />
            <ResultCard label="Total Costs" value={fmt(totalInvestment)} sub={`Avg cost/unit: ${fmt(units > 0 ? totalInvestment / units : 0)}`} />
          </div>

          {/* Detailed cost breakdown */}
          <div className="pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">Cost Breakdown (Total)</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <ResultCard label="COGS" value={fmt(totalCOGS)} sub={`${fmt(costOfGoods)}/unit`} />
              <ResultCard label="Shipping" value={fmt(totalShipping)} sub={`${fmt(shippingCost)}/unit`} />
              <ResultCard label="Platform Fees" value={fmt(totalPlatformFees)} sub={`${fmt(platformFeePerUnit)}/unit`} />
              <ResultCard label="Processing Fees" value={fmt(totalProcessingFees)} sub={`${pct(processingRateVal)} rate`} />
              <ResultCard label="Marketing" value={fmt(marketingSpend)} sub={roas > 0 ? `ROAS ${roas.toFixed(2)}x` : ""} />
              <ResultCard label="Overhead" value={fmt(totalOverhead)} sub={`${fmt(overheadCost)}/unit`} />
              <ResultCard label="Returns Cost" value={fmt(totalReturnsCost)} sub={`${pct(returnsRateVal)} return rate`} />
              <ResultCard label="Gross Margin" value={pct(grossMargin)} />
            </div>
          </div>
        </div>
      }
      seoContent={<SEOContent isUK={isUK} currency={currency} />}
    >
      <div className="space-y-6">
        {/* Region & Platform row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SelectField
            id="region"
            label="Market / Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            options={[
              { value: "us", label: "🇺🇸 United States (USD)" },
              { value: "uk", label: "🇬🇧 United Kingdom (GBP)" },
            ]}
            helpText="Currency and default fee structures will adjust"
          />
          <SelectField
            id="platform"
            label="Sales Platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            options={Object.entries(isUK ? UK_PLATFORM_FEES : PLATFORM_FEES).map(([key, val]) => ({
              value: key,
              label: val.label,
            }))}
            helpText={selectedFee.desc || "Select your sales platform"}
          />
        </div>

        {/* Custom platform fees (shown when custom is selected) */}
        {platform === "custom" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              id="customFeeRate"
              label="Custom Platform Fee Rate"
              value={customFeeRate}
              onChange={(e) => setCustomFeeRate(e.target.value)}
              suffix="%"
              placeholder="10"
              helpText="Percentage fee per transaction"
            />
            <InputField
              id="customFixedFee"
              label="Custom Fixed Fee"
              value={customFixedFee}
              onChange={(e) => setCustomFixedFee(e.target.value)}
              prefix={currency}
              placeholder="0.00"
              helpText="Fixed fee per transaction"
            />
          </div>
        )}

        {/* Product pricing row */}
        <div className="pt-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">Product &amp; Pricing</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              id="price"
              label="Selling Price (per unit)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              prefix={currency}
              placeholder="39.99"
              helpText="Customer-facing price"
            />
            <InputField
              id="unitsSold"
              label="Units Sold (per period)"
              value={unitsSold}
              onChange={(e) => setUnitsSold(e.target.value)}
              suffix="units"
              placeholder="100"
              helpText="Total units for this period"
            />
            <InputField
              id="cogs"
              label="Cost of Goods Sold (per unit)"
              value={cogs}
              onChange={(e) => setCogs(e.target.value)}
              prefix={currency}
              placeholder="12.50"
              helpText="Product cost including materials &amp; labor"
            />
            <InputField
              id="shipping"
              label="Shipping Cost (per unit)"
              value={shipping}
              onChange={(e) => setShipping(e.target.value)}
              prefix={currency}
              placeholder="4.50"
              helpText="Your cost to ship one unit"
            />
          </div>
        </div>

        {/* Fees & overhead row */}
        <div className="pt-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">Fees &amp; Overhead</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              id="marketing"
              label="Total Marketing / Ad Spend"
              value={marketing}
              onChange={(e) => setMarketing(e.target.value)}
              prefix={currency}
              placeholder="800"
              helpText="Total ad spend for this period"
            />
            <InputField
              id="processingRate"
              label="Payment Processing Fee Rate"
              value={processingRate}
              onChange={(e) => setProcessingRate(e.target.value)}
              suffix="%"
              placeholder="2.9"
              helpText="e.g. 2.9% for credit cards"
            />
            <InputField
              id="returnsRate"
              label="Returns / Refunds Rate"
              value={returnsRate}
              onChange={(e) => setReturnsRate(e.target.value)}
              suffix="%"
              placeholder="5"
              helpText="Percentage of units returned"
            />
            <InputField
              id="overhead"
              label="Other Overhead (per unit)"
              value={overhead}
              onChange={(e) => setOverhead(e.target.value)}
              prefix={currency}
              placeholder="1.50"
              helpText="Packaging, labels, misc costs"
            />
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent({ isUK, currency }) {
  return (
    <>
      <h2>How to Use the E-Commerce Profit Calculator</h2>
      <p>
        Running a profitable e-commerce business requires understanding every cost that eats into your margins — from platform fees and payment processing to shipping, marketing, and returns. This comprehensive profit calculator gives you a complete per-unit and total profitability picture, supporting both <strong>US ({isUK ? "£" : "$"}) and UK ({isUK ? "£" : "$"}) markets</strong> with region-specific platform fee structures for Amazon, Shopify, eBay, and Etsy.
      </p>
      <p>
        Start by selecting your <strong>Market / Region</strong> — the calculator will adjust the currency symbol ({isUK ? "£" : "$"}) and use the appropriate default platform fee structures for the UK or US. Then select your <strong>Sales Platform</strong> — choosing from Amazon, Shopify, eBay, Etsy, or a Custom option lets the calculator pre-fill realistic fee rates. Enter your <strong>Selling Price per unit</strong> and the number of <strong>Units Sold</strong> for the period you are analyzing (monthly, quarterly, or annually). Then fill in your <strong>Cost of Goods Sold (COGS)</strong> per unit — the direct cost of manufacturing or purchasing each product.
      </p>
      <p>
        Under <strong>Fees &amp; Overhead</strong>, enter your <strong>Total Marketing / Ad Spend</strong> across all channels (Facebook, Google, TikTok, etc.) for the same period — the calculator will compute your <strong>Return on Ad Spend (ROAS)</strong> automatically. Add your <strong>Shipping Cost per unit</strong>, the <strong>Payment Processing Fee Rate</strong> (typically 2.9% for credit cards or 3.4% + fixed fee for PayPal), your <strong>Returns / Refunds Rate</strong> as a percentage of units sold, and any <strong>Other Overhead per unit</strong> like packaging materials, labeling, or miscellaneous fulfillment costs.
      </p>

      <h2>Key Metrics Explained</h2>
      <h3>Gross Profit &amp; Gross Margin</h3>
      <p>
        <strong>Gross Profit = Revenue − COGS</strong>. This is the most basic measure of product profitability before operating costs. <strong>Gross Margin % = (Gross Profit ÷ Revenue) × 100</strong>. For physical products, a gross margin of 50–70% is typical for private-label sellers, while wholesale/resellers often see 30–50%. Digital products can reach 80–95% gross margins. A gross margin below 30% makes it very difficult to cover marketing, platform fees, and overhead profitably.
      </p>
      <h3>Net Profit &amp; Net Margin</h3>
      <p>
        <strong>Net Profit = Revenue − (COGS + Shipping + Platform Fees + Processing Fees + Marketing + Overhead + Returns Cost)</strong>. This is your true bottom-line profit after all direct expenses. <strong>Net Margin % = (Net Profit ÷ Revenue) × 100</strong>. Industry benchmarks: 10–20% is healthy for competitive e-commerce markets, 20–40% is strong, and 40%+ is excellent. If your net margin is negative, you are losing money on every sale — in that case, focus on reducing costs or increasing prices before scaling ad spend.
      </p>
      <h3>ROAS (Return on Ad Spend)</h3>
      <p>
        <strong>ROAS = Total Revenue ÷ Total Marketing Spend</strong>. This is the most important metric for evaluating advertising performance. A ROAS of 4x means you earn $4 for every $1 spent on ads. Generally, a ROAS of <strong>3x–4x</strong> is considered healthy for most e-commerce businesses, while <strong>5x+</strong> is excellent. However, ROAS alone can be misleading — a 3x ROAS on a product with 10% net margin is less profitable than a 2x ROAS on a product with 30% net margin. Always evaluate ROAS alongside net margin. For Amazon sellers, a Total ACOS (Ad Cost of Sale) of 20–30% is typical, which equates to a ROAS of 3.3x–5x.
      </p>
      <h3>ROI (Return on Investment)</h3>
      <p>
        <strong>ROI % = (Net Profit ÷ Total Investment) × 100</strong>. Unlike ROAS which only considers marketing spend against revenue, ROI measures your total return against every dollar invested — including COGS, shipping, fees, marketing, and overhead. An ROI of 100% means you double your money; 50% means you earn 50¢ for every $1 invested. This is the truest measure of business profitability.
      </p>
      <h3>Profit Per Unit</h3>
      <p>
        <strong>Profit Per Unit = Net Profit ÷ Units Sold</strong>. This tells you exactly how much cash you retain from each individual sale after all costs. If your profit per unit is $5 and you sell 10,000 units, your total net profit is $50,000. This metric is essential for understanding how pricing changes, cost reductions, or efficiency improvements will impact your bottom line at scale.
      </p>
      <h3>Break-Even Units</h3>
      <p>
        <strong>Break-Even Units = Marketing Spend ÷ Profit Per Unit</strong>. This shows how many units you need to sell for your marketing investment to break even. For example, if you spend $1,000 on ads and your profit per unit is $10, you need to sell 100 units just to cover the marketing cost. Any sales beyond 100 units generate positive net profit from that ad campaign.
      </p>

      <h2>Platform Fee Structures ({isUK ? "UK / £" : "US / $"})</h2>
      <h3>Amazon</h3>
      <p>
        Amazon charges a <strong>referral fee</strong> which varies by category (typically 15% of the total sales price, including the item price and any shipping or gift wrap charges). Most categories fall between 8% and 20%. In addition to referral fees, Amazon sellers using FBA pay fulfillment fees ($3–$8 per unit based on size and weight), storage fees, and often advertising costs. For the most accurate analysis, include FBA fulfillment fees in your Shipping Cost or Other Overhead inputs, and the referral fee is automatically calculated by selecting &quot;Amazon&quot; as your platform.
      </p>
      <h3>Shopify</h3>
      <p>
        <strong>Shopify Payments</strong> is the default payment gateway, charging 2.9% + {currency}0.30 ({isUK ? "£0.20" : "$0.30"}) per transaction for online credit card payments. If you use a third-party payment gateway like PayPal or Stripe, additional fees may apply. Shopify also charges a monthly subscription ($29–$299/month depending on plan), which can be factored into your Overhead costs by dividing the monthly fee by your units sold. Unlike marketplace platforms, Shopify gives you full control over your customer relationships and data, which is a significant non-financial advantage for many sellers.
      </p>
      <h3>eBay</h3>
      <p>
        eBay charges a <strong>final value fee</strong> of 13.25% ({isUK ? "12.8%" : "13.25%"}) of the total sale amount (item price + shipping + sales tax) plus {currency}0.30 ({isUK ? "£0.30" : "$0.40"}) per order. For eBay managed payments, there is no separate PayPal fee. Additional fees apply for international sales, promoted listings, and eBay Store subscriptions ($21.95–$299.95/month). eBay fees can significantly impact margins on lower-priced items — a 13.25% fee on a $10 item is $1.33, leaving very little room for profit after COGS and shipping.
      </p>
      <h3>Etsy</h3>
      <p>
        Etsy charges a <strong>transaction fee</strong> of 6.5% of the sale price, a <strong>payment processing fee</strong> of 3% + {currency}0.25 ({isUK ? "£0.19" : "$0.25"}) per transaction, and a <strong>listing fee</strong> of {currency}0.20 per item (renews every 4 months or until sold). For sellers with over $10,000 in annual sales, Etsy charges a regulatory operating fee of 0.25% of gross sales. Etsy is popular for handmade and vintage items, where higher perceived value can support premium pricing to offset the combined ~9.5% + fixed fee transaction cost.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>What is a good net profit margin for e-commerce?</h3>
      <p>
        Net profit margins in e-commerce range widely by business model. <strong>Amazon FBA sellers</strong> typically see 10–25% net margins after all fees. <strong>Shopify/DTC brands</strong> can achieve 15–35% with strong branding and customer retention. <strong>eBay sellers</strong> often operate at 10–20% due to competitive pricing pressure. <strong>Etsy sellers</strong> with handmade goods can achieve 20–40% due to premium pricing. <strong>Digital product sellers</strong> enjoy the highest margins at 60–90%. A net margin below 10% is risky — it leaves little room for error, rising costs, or market downturns.
      </p>
      <h3>How do I calculate ROAS for my e-commerce business?</h3>
      <p>
        ROAS (Return on Ad Spend) is calculated by dividing <strong>Total Revenue</strong> by <strong>Total Ad Spend</strong>. For example, if you spend $1,000 on Facebook ads and generate $4,000 in revenue, your ROAS is 4.0x. This calculator automatically computes ROAS from your Selling Price, Units Sold, and Marketing Spend inputs. A &quot;break-even ROAS&quot; depends on your profit margins — if your net margin is 25%, you need a minimum ROAS of 4.0x just to break even on marketing. Use the Net Margin result alongside ROAS to determine if your advertising is truly profitable.
      </p>
      <h3>How do I account for Amazon FBA fees?</h3>
      <p>
        Amazon FBA fees consist of <strong>fulfillment fees</strong> (picking, packing, shipping per unit), <strong>monthly storage fees</strong>, and <strong>long-term storage fees</strong>. To use this calculator accurately as an FBA seller: enter the referral fee automatically via the Amazon platform selection, include the per-unit FBA fulfillment fee in your <strong>Shipping Cost</strong> input, and add your prorated monthly storage fee to <strong>Other Overhead</strong>. For example, if your monthly storage is $50 and you sell 500 units, add $0.10 per unit to overhead. For more precise analysis, use Amazon's own Revenue Calculator to get exact per-unit costs, then transfer those numbers into this tool.
      </p>
      <h3>What is the difference between ROAS and ROI?</h3>
      <p>
        <strong>ROAS</strong> measures how much revenue you generate per dollar of ad spend: Revenue ÷ Ad Spend. It only considers marketing costs against top-line revenue. <strong>ROI</strong> measures how much profit you generate per dollar of total investment: Net Profit ÷ Total Investment. ROI includes all costs — COGS, shipping, platform fees, processing, overhead, and marketing. A high ROAS (e.g., 5x) might look impressive, but if your profit margin is only 10%, you&apos;re actually only making $0.50 per $1 of ad spend after all costs. Always evaluate both metrics together for a complete picture.
      </p>
      <h3>How should I calculate profit for a UK-based e-commerce business?</h3>
      <p>
        If you are selling in the UK, select the <strong>United Kingdom (GBP)</strong> region option at the top of this calculator. The currency will switch to GBP (£), and the platform fee structures will adjust to UK-specific rates — eBay UK charges 12.8% + £0.30, Shopify Payments charges 2.9% + £0.20, and Etsy UK applies £0.19 per transaction. Note that VAT (Value Added Tax) is not included in this calculator — UK-based sellers should typically set their prices inclusive of VAT and consult with a tax professional about VAT registration thresholds (£90,000 for 2025/2026). For UK sellers, also consider including customs duties and international shipping costs if importing products from outside the UK.
      </p>
      <h3>What is a healthy break-even point for marketing spend?</h3>
      <p>
        Your break-even on marketing spend should ideally occur within the <strong>first 30–90 days</strong> of a campaign. If you are selling a low-margin product (e.g., profit per unit of $5), a $1,000 ad campaign requires 200 sales to break even. For a high-margin product (e.g., profit per unit of $50), only 20 sales are needed. Generally, you want your break-even point to be less than 20–30% of your total projected sales volume. If break-even exceeds 50% of your expected sales, your ad costs are too high relative to your margins, and you should either reduce ad spend, increase prices, or lower your cost structure before scaling.
      </p>
      <h3>How can I improve my e-commerce net profit margin?</h3>
      <p>
        There are seven primary levers for improving e-commerce profitability: <strong>(1) Reduce COGS</strong> by negotiating supplier discounts, ordering in bulk, or finding alternative manufacturers. <strong>(2) Optimize ad targeting</strong> to lower your customer acquisition cost — reducing CAC from $10 to $7 instantly adds $3 per unit to profit. <strong>(3) Increase average order value (AOV)</strong> through product bundling, quantity discounts, and post-purchase upsells. <strong>(4) Reduce shipping costs</strong> using shipping aggregators (Pirate Ship, ShipStation) or negotiating carrier rates. <strong>(5) Minimize returns</strong> by improving product descriptions, sizing guides, and quality control. <strong>(6) Choose lower-fee platforms</strong> — switching from a 15% marketplace fee to a 2.9% direct-to-consumer model can dramatically improve margins. <strong>(7) Raise prices strategically</strong> — many sellers undercharge, and a 5–10% price increase often has minimal impact on conversion rates while greatly improving profitability.
      </p>
    </>
  );
}

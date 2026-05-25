"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(2) + "%";

export default function StripeFeeCalculator() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("domestic");

  const total = parseFloat(amount) || 0;
  const percentFee = type === "domestic" ? 0.029 : 0.039;
  const flatFee = 0.30;
  const feeAmount = total > 0 ? total * percentFee + flatFee : 0;
  const netPayout = Math.max(0, total - feeAmount);
  const effectiveFeeRate = total > 0 ? (feeAmount / total) * 100 : 0;

  // Reverse calculation: what to charge to receive desired amount
  const desiredNet = total;
  const chargeAmount = total > 0 ? (desiredNet + flatFee) / (1 - percentFee) : 0;
  const surchargeNeeded = chargeAmount - desiredNet;

  const schemaData = {
    name: "Stripe Fee Calculator",
    description: "Calculate Stripe processing fees for domestic and international transactions. See your net payout instantly.",
    url: "https://www.themetricapp.com/calculators/stripe-fee-merchant-calculator",
  };

  return (
    <CalculatorShell
      title="Stripe Fee Calculator 2026 — Calculate Processing Fees & Net Payout Instantly"
      subtitle="Calculate exactly how much Stripe charges per transaction and your net payout for domestic and international payments."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Transaction Amount" value={fmt(total)} />
          <ResultCard label="Stripe Fee" value={fmt(feeAmount)} sub={type === "domestic" ? "2.9% + $0.30" : "3.9% + $0.30"} />
          <ResultCard label="Net Payout" value={fmt(netPayout)} highlight />
          <ResultCard label="Effective Fee Rate" value={pct(effectiveFeeRate)} />
          <ResultCard label="Charge to Net" value={fmt(chargeAmount)} sub="To receive your amount" />
          <ResultCard label="Surcharge Needed" value={fmt(surchargeNeeded)} sub="Pass fee to customer" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="amount" label="Transaction / Invoice Amount" value={amount} onChange={(e) => setAmount(e.target.value)} prefix="$" placeholder="500.00" step="0.01" helpText="Total amount charged to customer" />
        <SelectField
          id="type"
          label="Transaction Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={[
            { value: "domestic", label: "Domestic (US) — 2.9% + $0.30" },
            { value: "international", label: "International — 3.9% + $0.30" },
          ]}
        />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the Stripe Fee Calculator</h2>
      <p>
        Stripe is one of the world&apos;s most popular payment processing platforms, powering millions of businesses from startups to Fortune 500 companies. Understanding exactly how much Stripe charges per transaction is critical for accurate pricing, invoicing, and profit margin calculations. This calculator provides an instant breakdown of Stripe&apos;s processing fees and your actual net payout.
      </p>
      <p>
        Enter the <strong>total transaction or invoice amount</strong> — the full price you are charging your customer. Then select whether the transaction is <strong>Domestic (US)</strong> or <strong>International</strong>. Domestic US transactions incur Stripe&apos;s standard fee of <strong>2.9% + $0.30</strong>, while international transactions (where the card was issued outside the US) incur <strong>3.9% + $0.30</strong>. The calculator instantly displays your fee amount, net payout, effective fee rate, and even the reverse calculation showing how much you should charge to net your desired amount after fees.
      </p>
      <p>
        This tool is invaluable for freelancers sending invoices through Stripe, SaaS businesses evaluating payment processing costs, e-commerce merchants calculating per-order margins, and service businesses determining whether to absorb or pass through processing fees to clients.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <h3>Stripe Domestic Fee Structure</h3>
      <p>
        For standard US card transactions processed through Stripe, the fee formula is: <strong>Fee = (Transaction Amount × 2.9%) + $0.30</strong>. The 2.9% is a percentage-based component that scales with the transaction size, while the $0.30 is a fixed per-transaction charge. For a $100 transaction: Fee = ($100 × 0.029) + $0.30 = $2.90 + $0.30 = $3.20. Your net payout would be $96.80. The effective fee rate in this case is 3.20%, which is higher than the headline 2.9% because of the fixed $0.30 charge.
      </p>
      <h3>Stripe International Fee Structure</h3>
      <p>
        When processing payments from cards issued outside the United States, Stripe charges an additional 1% on top of the standard rate: <strong>Fee = (Transaction Amount × 3.9%) + $0.30</strong>. This additional percentage covers the costs of currency conversion and cross-border card network fees. For a $100 international transaction: Fee = ($100 × 0.039) + $0.30 = $3.90 + $0.30 = $4.20. Your net payout would be $95.80.
      </p>
      <h3>Reverse Fee Calculation</h3>
      <p>
        Many merchants want to know: &quot;How much should I charge to receive exactly $X after Stripe fees?&quot; The reverse formula is: <strong>Charge Amount = (Desired Net + $0.30) ÷ (1 − Fee Rate)</strong>. For example, to net exactly $500 on a domestic transaction: ($500 + $0.30) ÷ (1 − 0.029) = $500.30 ÷ 0.971 = $515.24. You would need to charge $515.24 for Stripe to deposit exactly $500 in your account. This is essential for accurate invoicing when you intend to pass processing fees to your clients.
      </p>
      <h3>Impact on Small vs Large Transactions</h3>
      <p>
        The fixed $0.30 per-transaction fee creates a disproportionate impact on smaller transactions. On a $5 transaction, the fee is $0.445 (8.9% effective rate), while on a $1,000 transaction, the fee is $29.30 (2.93% effective rate — much closer to the headline 2.9%). This is why businesses processing many small transactions (micro-payments, low-cost digital goods) may want to consider Stripe&apos;s micro-transaction pricing or alternative processors with lower fixed fees.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>How does Stripe compare to PayPal and Square for payment processing fees?</h3>
      <p>
        Stripe&apos;s standard US rate of 2.9% + $0.30 is identical to PayPal&apos;s standard online payment rate, making them directly comparable for most businesses. Square charges 2.6% + $0.10 for in-person payments (lower percentage, lower fixed fee) but 2.9% + $0.30 for online payments — matching Stripe. For international transactions, Stripe charges 3.9% + $0.30, while PayPal charges 3.49% + a fixed fee based on currency. Where Stripe differentiates is its developer-friendly API, superior documentation, and flexible integration options — making it the preferred choice for SaaS businesses, marketplaces, and custom e-commerce platforms. PayPal offers stronger brand recognition and consumer trust for small businesses. The best choice depends on your transaction volume, average order value, international exposure, and technical requirements. Many businesses use both processors to give customers payment flexibility.
      </p>
      <h3>Can I pass Stripe fees to my customers by adding a surcharge?</h3>
      <p>
        In many US states and countries, you are legally allowed to add a credit card surcharge to pass processing fees to customers. However, there are important restrictions. Under Visa and Mastercard network rules, surcharges cannot exceed 3% (or the actual merchant discount rate, whichever is lower) for consumer credit card transactions. Surcharging is prohibited on debit card transactions in the US. Additionally, several US states (including Connecticut, Massachusetts, and Puerto Rico) have laws restricting or prohibiting surcharges. If you choose to surcharge, you must clearly disclose the fee before the transaction is completed, both at the point of sale and on the receipt. Many businesses find that absorbing the fee and incorporating it into their pricing provides a better customer experience than adding visible surcharges, which can reduce conversion rates by 1–3% in e-commerce settings.
      </p>
      <h3>Does Stripe offer volume discounts for high-transaction businesses?</h3>
      <p>
        Yes — Stripe offers custom pricing for businesses processing more than $100,000 per month through its <strong>Stripe Enterprise</strong> and custom pricing programs. Volume discounts typically reduce the percentage-based fee (e.g., from 2.9% to 2.2%–2.5%) while keeping the fixed $0.30 per-transaction charge. Interchange-plus pricing is also available, where Stripe charges the actual interchange rate set by the card networks plus a fixed markup (often 0.4%–0.6% + $0.10). This model is significantly cheaper for businesses with high average order values. To qualify, contact Stripe&apos;s sales team with your monthly processing volume, average transaction size, and industry. Additionally, Stripe offers discounted rates for non-profits (2.2% + $0.30) and specific pricing for platforms using Stripe Connect for marketplace payments.
      </p>

      <h2>Related Tools</h2>
      <p>
        Check out these other helpful calculators for sellers and merchants:
      </p>
      <ul>
        <li><a href="/calculators/ebay-seller-fee-profit">eBay Seller Fee &amp; Profit Calculator</a> — Calculate eBay final value fees and your true net profit.</li>
        <li><a href="/calculators/ecommerce-net-profit-margin">E-Commerce Profit Margin Calculator</a> — Net profit, ROAS, and break-even analysis.</li>
        <li><a href="/calculators/freelancer-platform-fee-comparison">Freelancer Platform Fee Comparison</a> — Compare Upwork vs Fiverr fees side-by-side.</li>
        <li><a href="/blog/stripe-fee-calculator-2026">Stripe Fee Calculator 2026 Guide</a> — Full guide to Stripe processing fees.</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Stripe Fee Calculator",
            "url": "https://www.themetricapp.com/calculators/stripe-fee-merchant-calculator",
            "description": "Calculate Stripe processing fees for domestic and international transactions. See your net payout instantly.",
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
              { "@type": "ListItem", "position": 2, "name": "Stripe Fee Calculator", "item": "https://www.themetricapp.com/calculators/stripe-fee-merchant-calculator" }
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
                "name": "How does Stripe compare to PayPal and Square for payment processing fees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Stripe standard US rate of 2.9% + $0.30 is identical to PayPal standard online payment rate. Square charges 2.6% + $0.10 for in-person payments but 2.9% + $0.30 for online. For international transactions, Stripe charges 3.9% + $0.30."
                }
              },
              {
                "@type": "Question",
                "name": "Can I pass Stripe fees to my customers by adding a surcharge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In many US states and countries, you are legally allowed to add a credit card surcharge to pass processing fees to customers. However, surcharges cannot exceed 3% for consumer credit card transactions, and several US states restrict or prohibit surcharging."
                }
              },
              {
                "@type": "Question",
                "name": "Does Stripe offer volume discounts for high-transaction businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — Stripe offers custom pricing for businesses processing more than $100,000 per month through Stripe Enterprise. Volume discounts typically reduce the percentage-based fee while keeping the fixed $0.30 per-transaction charge."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

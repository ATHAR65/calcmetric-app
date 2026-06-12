import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "paypal-fee-calculator";
const CALC_NAME = "PayPal Fee Calculator 2026 — PayPal Fees";
const CALC_DESCRIPTION = "Calculate exact PayPal fees for any transaction type. Personal, business & international fees. Free, instant results.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "PayPal's fee structure varies significantly depending on the transaction type, your account type, and whether the payment is domestic or international. For standard commercial transactions (Goods & Services), PayPal charges <strong>3.49% + $0.49</strong> per transaction as of 2026. This is higher than the older 2.89% rate and the highest fixed fee among major payment processors.",
  "PayPal offers lower rates for specific use cases: <strong>QR code transactions</strong> in person cost 2.29% + $0.09, <strong>PayPal Checkout</strong> (online) is 3.49% + $0.49, and <strong>Pay with Venmo</strong> for merchants is 3.49% + $0.49. Standard credit/debit card payments through the PayPal Commerce Platform may qualify for rates as low as 2.59% + $0.49 depending on volume.",
  "Friends & Family payments are <strong>free for domestic transactions funded by bank account or PayPal balance</strong>. However, if the sender uses a credit or debit card for a Friends & Family payment, PayPal charges 2.99% + fixed fee. International Friends & Family transfers incur a fee regardless of funding source.",
  "International transactions add a <strong>1.5% cross-border fee</strong> on top of the standard transaction rate, plus a <strong>currency conversion spread of 3.0% to 4.0%</strong> above the mid-market exchange rate. For a $100 international payment, total fees can reach $8 to $9 depending on the funding source and currency pair. Merchants processing significant international volume should compare PayPal's effective rates against Wise or Stripe.",
];

const paypalRateTable = {
  title: "2026 PayPal Fee Schedule (US)",
  headers: ["Transaction Type", "Fee", "Notes"],
  rows: [
    ["PayPal Checkout (online)", "3.49% + $0.49", "Goods & Services"],
    ["QR Code (in-person)", "2.29% + $0.09", "In-store payments"],
    ["Standard card processing", "2.99% + $0.49", "Via Commerce Platform"],
    ["Friends & Family (domestic)", "Free", "Bank/balance funded"],
    ["Friends & Family (card-funded)", "2.99% + fixed", "Credit or debit card"],
    ["International surcharge", "+1.5%", "Cross-border transactions"],
    ["Currency conversion", "3.0%–4.0%", "Above mid-market rate"],
    ["PayPal Invoicing", "3.49% + $0.49", "Per paid invoice"],
    ["Micropayments", "4.99% + $0.09", "Transactions under $10"],
    ["Chargebacks", "$20.00", "Dispute fee, non-refundable"],
  ],
};

const paypalHowToSteps = [
  "Enter the transaction amount your customer will pay.",
  "Select the transaction type: Goods & Services, Friends & Family, invoiced, or QR code.",
  "Choose domestic or international, and whether currency conversion applies.",
  "Review the total fees, net payout, and effective percentage rate. Compare side-by-side with Stripe using our fee comparison tool.",
];

const staticFaqs = [
  { q: "What are PayPal's fees for selling in 2026?", a: "PayPal charges 3.49% + $0.49 per transaction for standard online Goods & Services payments. QR code in-person payments are cheaper at 2.29% + $0.09. These rates apply to US domestic transactions — international payments add 1.5% on top. There is no monthly fee for a standard PayPal Business account." },
  { q: "Does PayPal charge fees for Friends and Family?", a: "Domestic Friends & Family payments funded by bank account or PayPal balance are free. If the sender uses a credit or debit card, PayPal charges 2.99% + a fixed fee. International Friends & Family transfers always incur a fee, typically 5% of the amount with a minimum of $0.99 and a maximum of $4.99." },
  { q: "What is PayPal's international transaction fee?", a: "PayPal adds a 1.5% cross-border fee on top of the standard transaction rate for payments where the sender and receiver are in different countries. If currency conversion is needed, PayPal applies an additional spread of 3.0% to 4.0% above the mid-market exchange rate. For a $100 international sale, total fees can be $8 to $9." },
  { q: "Can I pass PayPal fees to customers?", a: "Yes, surcharging is permitted in most US states and many countries. You can add the PayPal fee to the invoice or checkout total. However, surcharging is prohibited in some jurisdictions (Connecticut, Massachusetts, Puerto Rico) and PayPal's Acceptable Use Policy requires that any surcharge must not exceed the actual cost of the payment method used." },
  { q: "Is PayPal or Stripe cheaper for online payments?", a: "Stripe is generally cheaper. Stripe charges 2.9% + $0.30 per transaction vs PayPal's 3.49% + $0.49. On a $50 transaction, Stripe costs $1.75 vs PayPal's $2.24 — a savings of $0.49 per sale. At 1,000 transactions per month, that is $490 in savings. PayPal's advantage is brand recognition and buyer trust, especially for consumer-facing marketplaces." },
  { q: "How long do PayPal payouts take?", a: "Standard bank withdrawals take 1 to 3 business days. Instant transfers to a linked debit card or bank account cost 1.75% of the amount (minimum $0.25, maximum $25). PayPal balance is available immediately for spending or sending within PayPal. Funds from new payments may be held for up to 21 days for new sellers until you establish a track record." },
];

const faqSchemaEntities = staticFaqs.map(f => ({
  "@type": "Question",
  "name": f.q,
  "acceptedAnswer": { "@type": "Answer", "text": f.a }
}));

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSchemaEntities,
  };

  return (
    <>
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema]} />
      <Calculator />
      <CalculatorStaticSeo
        title={CALC_NAME}
        description={CALC_DESCRIPTION}
        slug={CALC_SLUG}
        faqs={staticFaqs}
        content={seoContent}
        rateTable={paypalRateTable}
        howToSteps={paypalHowToSteps}
      />
    </>
  );
}

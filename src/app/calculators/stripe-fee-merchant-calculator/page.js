import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "stripe-fee-merchant-calculator";
const CALC_NAME = "Stripe Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate exact Stripe processing fees per transaction. See your net payout after Stripe's 2.9% + 30¢ and international fees. Free, instant.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Stripe's standard pricing for US-based businesses is <strong>2.9% + $0.30 per successful card charge</strong>. This applies to most domestic credit and debit card transactions processed through Stripe Payments. The percentage portion scales with the transaction amount while the fixed $0.30 fee stays the same regardless of sale size — which makes Stripe proportionally more expensive for low-value transactions.",
  "For a $10 transaction, Stripe takes $0.59 (5.9% effective rate). For a $100 transaction, the fee is $3.20 (3.2% effective rate). For a $1,000 transaction, the fee is $29.30 (2.93% effective rate). This sliding effective rate is important for businesses selling low-ticket items — at $5 per transaction, you are effectively paying <strong>8.8% in fees</strong>.",
  "International cards and currency conversion add extra costs. Stripe charges an additional <strong>1.5% for international cards</strong> and another <strong>1% for currency conversion</strong> if the payment requires it. A $100 international payment with currency conversion costs $5.70 in total fees (2.9% + 1.5% + 1% + $0.30).",
  "Stripe also offers volume discounts for businesses processing over $100,000 per month through <strong>Stripe Custom pricing</strong>. ACH Direct Debit payments have lower fees at 0.8% capped at $5.00. Stripe Invoicing adds 0.4% per paid invoice on top of card processing fees. Stripe Connect platforms can set their own fees and take a platform fee on top of Stripe's base rate.",
];

const stripeRateTable = {
  title: "2026 Stripe Fee Schedule",
  headers: ["Transaction Type", "Fee", "Notes"],
  rows: [
    ["Domestic card (standard)", "2.9% + $0.30", "Most US credit/debit cards"],
    ["International card", "3.9% + $0.30", "Additional 1% for non-US cards"],
    ["Currency conversion", "+1.0%", "On top of card processing fee"],
    ["ACH Direct Debit", "0.8%, max $5.00", "US bank transfers"],
    ["ACH Credit", "$1.00", "Per transfer"],
    ["Wire transfer", "$8.00", "Domestic wire"],
    ["Stripe Invoicing", "+0.4%", "Per paid invoice"],
    ["Instant Payouts", "1.0%, min $0.50", "To debit card or bank"],
    ["Disputes (chargebacks)", "$15.00", "Refunded if you win"],
    ["Radar (fraud prevention)", "$0.05–$0.07", "Per screened transaction"],
  ],
};

const stripeFormula = `Stripe Fee = (Transaction Amount × Rate%) + Fixed Fee
Standard: Fee = (Amount × 2.9%) + $0.30
International: Fee = (Amount × 3.9%) + $0.30
With conversion: Fee = (Amount × 4.9%) + $0.30
Net Payout = Transaction Amount − Stripe Fee

To charge customer the fee (reverse):
Amount to Charge = (Desired Payout + $0.30) ÷ (1 − 0.029)`;

const stripeHowToSteps = [
  "Enter your transaction amount — the price your customer pays.",
  "Select the transaction type: domestic card, international card, ACH, or invoiced payment.",
  "Toggle currency conversion if the payment is in a foreign currency.",
  "Review the fee breakdown, net payout, and effective fee percentage. Use the reverse calculator to find what to charge if you want to receive a specific net amount.",
];

const staticFaqs = [
  { q: "What does Stripe charge per transaction in 2026?", a: "Stripe's standard rate for US domestic card payments is 2.9% + $0.30 per successful transaction. There are no monthly fees, setup fees, or minimum processing requirements on the standard plan. You only pay when you process a payment." },
  { q: "How does Stripe charge for international cards?", a: "Stripe adds 1.5% on top of the standard 2.9% rate for cards issued outside the US, bringing the total to 4.4% + $0.30. If the payment also requires currency conversion, Stripe adds another 1.0%, for a total of 5.4% + $0.30. These fees apply automatically based on the card's country of issue." },
  { q: "Is Stripe cheaper than PayPal for businesses?", a: "For standard online card processing, Stripe (2.9% + $0.30) and PayPal (3.49% + $0.49) are close, but Stripe is cheaper per transaction. Stripe saves $0.19 on the fixed fee plus 0.59% on the percentage. For a $50 sale, Stripe charges $1.75 vs PayPal's $2.24 — a $0.49 difference per transaction that adds up significantly at volume." },
  { q: "Does Stripe charge monthly fees?", a: "No. Stripe's standard plan has no monthly fees, no setup fees, and no minimum processing requirements. You only pay the per-transaction fee when a payment is processed. Stripe does offer premium products (Stripe Tax, Stripe Atlas, Stripe Radar for Fraud Teams) that have additional costs, but the core payment processing has no recurring charges." },
  { q: "How do I pass Stripe fees to my customers?", a: "Calculate the total charge using the reverse formula: Amount = (Desired Net + $0.30) ÷ (1 − 0.029). For example, to receive exactly $100, charge $103.27. Note that surcharging credit card transactions is prohibited in some US states (Connecticut, Massachusetts, Puerto Rico) and regulated in others. Check your state laws and Stripe's terms before adding surcharges." },
  { q: "How long does Stripe take to pay out?", a: "Standard Stripe payouts arrive in 2 business days for US accounts. Stripe batches your daily transactions and initiates a bank transfer automatically. You can switch to weekly or monthly payout schedules in your dashboard. Instant Payouts are available for 1% of the payout amount (minimum $0.50) and arrive within minutes to a linked debit card." },
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
        formula={stripeFormula}
        rateTable={stripeRateTable}
        howToSteps={stripeHowToSteps}
      />
    </>
  );
}

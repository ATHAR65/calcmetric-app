import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "facebook-marketplace-fee-calculator";
const CALC_NAME = "Facebook Marketplace Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate Facebook Marketplace fees — the 10% shipped-checkout fee ($0.80 minimum) versus free local pickup — and your exact payout and profit either way.";

const seoContent = [
  "Facebook Marketplace fees depend on how you sell: <strong>local pickup is completely free</strong> (no listing fee, no commission), while <strong>shipped orders through checkout pay 10%</strong> of the buyer-paid total (item + shipping) with a <strong>$0.80 minimum</strong>.",
  "The shipped fee covers payment processing and purchase protection, and rose from 5% to 10% — factor it into pricing before enabling shipping.",
  "Rule of thumb: <strong>local pickup for heavy items</strong> (furniture, appliances — 0% fees, no packaging), <strong>shipping for small high-value items</strong> where the national audience lifts prices more than the 10% costs.",
];

const fbFormula = `Shipped: Fee = max(10% × (item + shipping), $0.80)
         Payout = total − Fee − your label
Local:   Fee = $0 · Payout = price

Example: $60 item
  Local pickup → keep $60.00
  Shipped (+$8 buyer shipping) → fee $6.80,
  payout after $8 label = $61.20`;

const fbRateTable = {
  title: "Facebook Marketplace Seller Fees (2026)",
  headers: ["Sale Method", "Fee", "Minimum", "Notes"],
  rows: [
    ["Local pickup", "$0", "—", "Cash/app payment outside checkout"],
    ["Shipped via checkout", "10% of buyer total", "$0.80", "Includes payment processing + protection"],
    ["Listing", "$0", "—", "Always free to list"],
  ],
};

const fbHowToSteps = [
  "Choose your sale method — shipped checkout or local pickup.",
  "Enter the item price (and buyer-paid shipping for shipped orders).",
  "Optionally add your item cost for true profit.",
  "Compare both methods to see exactly what shipping convenience costs.",
];

const staticFaqs = [
  { q: "How much does Facebook Marketplace charge sellers in 2026?", a: "Shipped checkout orders pay 10% of the buyer-paid total (item plus shipping) with a $0.80 minimum. Local pickup sales carry no fee at all, and listing is always free." },
  { q: "Is local pickup on Facebook Marketplace free?", a: "Yes — local deals settled in cash or a payment app outside Facebook checkout carry no Marketplace fee whatsoever." },
  { q: "How much do I keep on a $100 shipped Facebook Marketplace sale?", a: "With $10 buyer-paid shipping, the fee is 10% × $110 = $11, leaving a $99 payout before your shipping label cost." },
  { q: "Did Facebook Marketplace raise its selling fees?", a: "Yes. The shipped-order fee increased from 5% to 10% with a $0.80 minimum. Local pickup remains free." },
  { q: "Do I pay taxes on Facebook Marketplace sales?", a: "Reselling profit is taxable, and Meta issues Form 1099-K for checkout sales past the federal threshold. Selling your own used items at a loss is generally not taxable." },
];

const faqSchemaEntities = staticFaqs.map((f) => ({
  "@type": "Question",
  name: f.q,
  acceptedAnswer: { "@type": "Answer", text: f.a },
}));

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqSchemaEntities };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Facebook Marketplace Fee Calculator 2026 — Shipped vs Local Pickup",
    description: CALC_DESCRIPTION,
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    author: { "@type": "Organization", name: "TheMetricApp", url: "https://www.themetricapp.com" },
    publisher: { "@type": "Organization", name: "TheMetricApp", url: "https://www.themetricapp.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.themetricapp.com/calculators/${CALC_SLUG}` },
  };

  return (
    <>
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema, articleSchema]} />
      <Calculator />
      <CalculatorStaticSeo
        title={CALC_NAME}
        description={CALC_DESCRIPTION}
        slug={CALC_SLUG}
        faqs={staticFaqs}
        content={seoContent}
        formula={fbFormula}
        rateTable={fbRateTable}
        howToSteps={fbHowToSteps}
      />
    </>
  );
}

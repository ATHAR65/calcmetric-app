import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "whatnot-fee-calculator";
const CALC_NAME = "Whatnot Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate Whatnot's 8% commission plus 2.9% + $0.30 payment processing, your total fees, true payout, and profit from live selling.";

const seoContent = [
  "Whatnot charges US sellers an <strong>8% commission</strong> on the sold price plus <strong>2.9% + $0.30 payment processing</strong> on the total order value (including buyer-paid shipping). UK/EU sellers pay 6.67% + VAT instead of 8%.",
  "There are <strong>no listing fees and no subscriptions</strong> — fees apply only when an item sells. Giveaways carry no commission.",
  "A $50 live-auction sale costs about $6 all-in (~12% effective) — below eBay's ~13.6% and far below Poshmark's 20%, which is why cards, comics, sneakers, and vintage live selling has grown so fast on the platform.",
];

const whatnotFormula = `Commission = 8% × sold price
Processing = 2.9% × (sold + buyer shipping) + $0.30
Payout = sold price − Commission − Processing

Example: $50 card + $10 buyer shipping
  Commission = $4.00 · Processing = $2.04
  Payout = $43.96 (≈12.1% effective)`;

const whatnotRateTable = {
  title: "Whatnot Seller Fees (2026)",
  headers: ["Fee", "Amount", "Applies To", "Notes"],
  rows: [
    ["Commission", "8% (US/CA/AU)", "Sold price", "6.67% + VAT in UK/EU"],
    ["Payment processing", "2.9% + $0.30", "Total order value", "Includes buyer-paid shipping"],
    ["Listing / monthly", "$0", "—", "Pay only when items sell"],
    ["Giveaways", "No commission", "—", "Seller covers shipping"],
  ],
};

const whatnotHowToSteps = [
  "Enter the sold price from your auction or Buy It Now.",
  "Enter buyer-paid shipping — processing applies to the full order value.",
  "Optionally add your item cost for true profit.",
  "Review commission, processing, payout, and effective rate instantly.",
];

const staticFaqs = [
  { q: "How much does Whatnot take per sale in 2026?", a: "8% commission on the sold price plus 2.9% + $0.30 payment processing on the total order value including buyer-paid shipping — roughly 11.5–12% effective on a typical $50 sale." },
  { q: "Does Whatnot charge listing or monthly fees?", a: "No. There are no listing fees or subscriptions. Fees apply only when an item sells." },
  { q: "Do giveaways on Whatnot get charged commission?", a: "No commission applies to giveaway items, though the seller covers the shipping they offered." },
  { q: "Is Whatnot cheaper than eBay for collectibles?", a: "Generally yes — Whatnot's ~11–12% effective rate is below eBay's ~13.6% in most collectible categories, and live auctions often realize stronger prices for in-demand product." },
  { q: "Do I pay taxes on Whatnot earnings?", a: "Yes. Selling profit is self-employment income; Whatnot issues Form 1099-K past the federal threshold. Commissions, processing, shipping, and item costs are all deductible." },
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
    headline: "Whatnot Fee Calculator 2026 — Commission, Processing & Payout",
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
        formula={whatnotFormula}
        rateTable={whatnotRateTable}
        howToSteps={whatnotHowToSteps}
      />
    </>
  );
}

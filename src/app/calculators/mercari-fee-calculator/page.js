import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "mercari-fee-calculator";
const CALC_NAME = "Mercari Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate Mercari's flat 10% selling fee ($1 minimum, no payment processing charge since 2025), your exact payout, and net profit on any sale.";

const seoContent = [
  "Mercari's 2026 structure is a single <strong>flat 10% selling fee</strong> on the item price plus buyer-paid shipping, with a <strong>$1 minimum</strong>. The old 2.9% + $0.50 payment processing fee was <strong>eliminated in January 2025</strong> — the 10% is the only platform charge.",
  "The fee base includes <strong>shipping the buyer pays</strong>. If you offer free shipping, the label cost isn't part of the fee base but does come out of your payout — price accordingly.",
  "On a $50 item, Mercari takes $5.00 versus Poshmark's $10.00 and Depop US's ~$2.10 — mid-level fees with the broadest category coverage (electronics, toys, home goods, clothing).",
];

const mercariFormula = `Fee = max(10% × (item + buyer shipping), $1)
Payout = item + buyer shipping − Fee − your shipping cost
Profit = Payout − item cost

Example: $40 console, free shipping ($8 label), $10 cost
  Fee = $4.00 → Payout = $28.00 → Profit = $18.00 (45% margin)`;

const mercariRateTable = {
  title: "Mercari Seller Fees (2026)",
  headers: ["Fee", "Amount", "Applies To", "Notes"],
  rows: [
    ["Selling fee", "10% flat", "Item + buyer-paid shipping", "$1 minimum per sale"],
    ["Payment processing", "$0", "—", "Eliminated January 2025"],
    ["Listing fee", "$0", "—", "Free to list"],
  ],
};

const mercariHowToSteps = [
  "Enter your item price and any shipping the buyer pays.",
  "If you offer free shipping, enter the label cost you absorb.",
  "Optionally add your item cost for true profit.",
  "Review the 10% fee, payout, profit, and effective fee rate instantly.",
];

const staticFaqs = [
  { q: "What is Mercari's selling fee in 2026?", a: "A flat 10% of the item price plus buyer-paid shipping, with a $1 minimum per sale. There is no separate payment processing fee, and listing is free." },
  { q: "Does Mercari still charge a payment processing fee?", a: "No. Mercari eliminated the 2.9% + $0.50 processing fee in January 2025. The flat 10% selling fee is the only platform charge for sellers." },
  { q: "Does Mercari charge fees on shipping?", a: "Yes — the 10% applies to the combined item price and any shipping the buyer pays. Shipping costs you absorb on free-shipping listings reduce your payout but are not part of the fee base." },
  { q: "How much do I keep on a $100 Mercari sale?", a: "Mercari's fee is $10 (10%), leaving a $90 payout before any shipping you cover and before your item cost." },
  { q: "Do I pay taxes on Mercari income?", a: "Yes — reselling profit is taxable, and Mercari issues Form 1099-K past the federal threshold. Fees and item costs are deductible against your profit." },
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
    headline: "Mercari Fee Calculator 2026 — Flat 10% Fee, Payout & Profit",
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
        formula={mercariFormula}
        rateTable={mercariRateTable}
        howToSteps={mercariHowToSteps}
      />
    </>
  );
}

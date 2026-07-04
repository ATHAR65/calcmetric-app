import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "stockx-fee-calculator";
const CALC_NAME = "StockX Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate StockX seller fees by level — 8.0–9.5% transaction fee plus 3% payment processing — with shipping bonuses and your true payout on sneakers and collectibles.";

const seoContent = [
  "StockX charges a <strong>transaction fee of 8.0%–9.5%</strong> based on seller level plus a flat <strong>3% payment processing fee</strong>. New sellers start at Level 1 (9.5%); Level 4 (50+ sales) pays 8.0%.",
  "Level 3+ sellers can earn up to <strong>2% off through shipping bonuses</strong>: −1% for 95% on-time shipping and −1% for shipping 80% of orders within 36 hours.",
  "Sellers also pay <strong>$13–$16 shipping to the authentication center</strong>, making a Level 1 seller's all-in cost on a $220 sneaker roughly 18%. Leveling up and earning bonuses matters more on StockX than any other resale platform.",
];

const stockxFormula = `Transaction fee = level rate × price
  L1 9.5% · L2 9.0% · L3 8.5% · L4/L5 8.0%
  Shipping bonuses (L3+): up to −2%
Processing = 3% × price
Payout = price − fees − shipping to StockX

Example: Level 1, $220 sale, $14 shipping, $170 cost
  Fees = $20.90 + $6.60 = $27.50
  Payout = $178.50 → Profit = $8.50`;

const stockxRateTable = {
  title: "StockX Seller Fees by Level (2026)",
  headers: ["Level", "Transaction Fee", "+ Processing", "Combined"],
  rows: [
    ["Level 1 (new)", "9.5%", "3%", "12.5%"],
    ["Level 2", "9.0%", "3%", "12.0%"],
    ["Level 3", "8.5% (as low as 6.5% w/ bonuses)", "3%", "11.5%"],
    ["Level 4 (50+ sales)", "8.0% (as low as 6.0% w/ bonuses)", "3%", "11.0%"],
  ],
};

const stockxHowToSteps = [
  "Enter the price your ask sold at.",
  "Select your seller level from the StockX dashboard.",
  "Apply any shipping performance bonuses you've earned (Level 3+).",
  "Add your shipping cost to the authentication center and, optionally, item cost.",
  "Review fees, payout, profit, and your true all-in cost rate.",
];

const staticFaqs = [
  { q: "How much does StockX take per sale in 2026?", a: "A transaction fee of 8.0–9.5% depending on your seller level, plus 3% payment processing — 11–12.5% combined, before the $13–$16 cost of shipping to the authentication center." },
  { q: "How do I lower my StockX transaction fee?", a: "Level up through completed sales — Level 4 (50+ sales) pays 8.0% versus 9.5% at Level 1 — and earn shipping bonuses at Level 3+: up to 2% off for on-time and quick shipping." },
  { q: "Does StockX charge listing fees?", a: "No. Placing asks is free. Fees apply only when your item sells." },
  { q: "Who pays shipping on StockX?", a: "The seller pays shipping to StockX's authentication center (typically $13–$16 in the US). Buyer delivery shipping is charged to the buyer separately." },
  { q: "Do I pay taxes on StockX profits?", a: "Yes — flipping profit is taxable income, and StockX issues Form 1099-K past the federal threshold. Fees, shipping, and item costs are deductible." },
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
    headline: "StockX Fee Calculator 2026 — Seller Fees by Level & True Payout",
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
        formula={stockxFormula}
        rateTable={stockxRateTable}
        howToSteps={stockxHowToSteps}
      />
    </>
  );
}

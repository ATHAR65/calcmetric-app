import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "instacart-tax-calculator";
const CALC_NAME = "Instacart Tax Calculator 2026";
const CALC_DESCRIPTION = "Estimate Instacart shopper taxes — self-employment tax, the $0.725/mile deduction, the new OBBBA tips deduction for delivery drivers, and quarterly payments.";

const seoContent = [
  "Full-service Instacart shoppers are <strong>1099 contractors</strong>: nothing is withheld, and you owe <strong>15.3% SE tax</strong> on net profit plus federal income tax. Instacart issues a 1099-NEC including app-paid tips.",
  "The <strong>mileage deduction ($0.725/mile in 2026)</strong> is your biggest write-off — 12,000 business miles removes $8,700 from taxable profit. Insulated bags, parking, tolls, and phone share add more.",
  "New for 2025–2028: delivery drivers qualify for the <strong>OBBBA no-tax-on-tips deduction</strong> — reported customer tips (up to $25,000) are deductible from federal income tax, though SE tax still applies to them.",
];

const instacartFormula = `Net = batch pay + tips − (miles × $0.725) − expenses
SE Tax = Net × 92.35% × 15.3%
Taxable = Net − ½ SE − std deduction − 20% QBI − tips deduction
Federal Tax = brackets applied to Taxable

Example: $22K batch + $8K tips, 12K miles, $600 exp, single
  Mileage = $8,700 → Net = $20,700
  SE ≈ $2,925 · Federal ≈ $0 (tips deduction zeroes it)
  Total ≈ $2,925 → $731/quarter`;

const instacartRateTable = {
  title: "Instacart Shopper Deductions (2026)",
  headers: ["Deduction", "Amount", "Applies To", "Notes"],
  rows: [
    ["Standard mileage", "$0.725/mile", "All business miles", "Store runs, between-store, delivery routes"],
    ["OBBBA tips deduction", "Up to $25,000", "Reported customer tips", "Income tax only — SE tax still applies"],
    ["QBI deduction", "20% of qualified income", "Net profit", "Automatic for most shoppers"],
    ["Gear & phone", "Actual cost", "Bags, phone share, parking, tolls", "Keep receipts"],
  ],
};

const instacartHowToSteps = [
  "Enter your annual batch pay (excluding tips) and customer tips separately.",
  "Enter your business miles — shopping and delivery driving all counts.",
  "Add other expenses: insulated bags, phone share, parking, tolls.",
  "Review SE tax, the tips deduction effect, total tax, and your quarterly amount.",
];

const staticFaqs = [
  { q: "How much should Instacart shoppers set aside for taxes?", a: "After the mileage deduction, typically 15–20% of net profit for federal taxes. High-mileage shoppers often owe mostly SE tax, because mileage plus the new OBBBA tips deduction can reduce income tax to zero." },
  { q: "Do Instacart tips qualify for the no-tax-on-tips deduction?", a: "Yes — delivery drivers are on the IRS qualifying-occupations list for the OBBBA deduction (2025–2028). Reported tips up to $25,000 are deductible from federal income tax; self-employment tax still applies." },
  { q: "What mileage can Instacart shoppers deduct in 2026?", a: "All business miles at $0.725 per mile — driving to stores, between stores, and delivery routes. Ordinary commuting from home is generally not deductible." },
  { q: "Does Instacart send a 1099?", a: "Yes — a 1099-NEC once you earn $600+, including tips paid through the app. The IRS receives a copy." },
  { q: "Do Instacart shoppers need to pay quarterly taxes?", a: "If you expect to owe $1,000 or more for the year, yes — quarterly estimated payments in April, June, September, and January avoid underpayment penalties." },
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
    headline: "Instacart Tax Calculator 2026 — Shopper Taxes, Mileage & the Tips Deduction",
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
        formula={instacartFormula}
        rateTable={instacartRateTable}
        howToSteps={instacartHowToSteps}
      />
    </>
  );
}

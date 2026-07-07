import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "poshmark-fee-calculator";
const CALC_NAME = "Poshmark Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate Poshmark seller fees — the $2.95 flat fee under $15 or 20% commission at $15+ — plus your exact payout, net profit, and effective fee rate.";

const seoContent = [
  "Poshmark's 2026 fee structure is simple: a flat <strong>$2.95</strong> for sales under $15, or a <strong>20% commission</strong> for sales of $15 and above. That single fee covers payment processing and platform costs — there are no listing fees or subscriptions.",
  "The <strong>buyer pays shipping</strong> ($7.97 standard label), so shipping never reduces your payout unless you offer a discount. Your payout = sale price − fee; your profit = payout − what the item cost you.",
  "Poshmark's 20% is higher than Mercari's 10% or Depop's ~3.3% + $0.45, but includes shipping logistics and a strong fashion buyer base. Price above $15 where possible — the flat $2.95 makes low-price sales expensive in percentage terms.",
];

const poshFormula = `Fee = $2.95            (price < $15)
Fee = 20% × price      (price ≥ $15)

Payout = price − Fee
Profit = Payout − item cost

Example: $45 jacket, $12 cost
  Fee = $9.00 → Payout = $36.00 → Profit = $24.00 (53% margin)`;

const poshRateTable = {
  title: "Poshmark Seller Fees (2026)",
  headers: ["Sale Price", "Fee", "Effective Rate", "Notes"],
  rows: [
    ["Under $15", "$2.95 flat", "20%+ (higher on cheap items)", "Same flat fee at any price under $15"],
    ["$15 and above", "20% of price", "20%", "Includes payment processing"],
    ["Shipping", "$7.97 label", "Paid by buyer", "Not deducted from seller"],
  ],
};

const poshHowToSteps = [
  "Enter your sale price (the item price the buyer pays).",
  "Optionally enter your item cost to see true profit.",
  "Review the fee, payout, profit, effective fee rate, and margin instantly.",
  "Test prices around the $15 threshold to see how the flat fee changes your effective rate.",
];

const staticFaqs = [
  { q: "What are Poshmark's seller fees in 2026?", a: "A flat $2.95 for sales under $15, or a 20% commission for sales of $15 or more. The fee includes payment processing; there are no listing fees or subscriptions." },
  { q: "How do I calculate my Poshmark payout?", a: "Payout = sale price − Poshmark fee. For a $15+ sale the fee is 20% of the price, so payout = price × 0.80. For a sub-$15 sale, subtract the flat $2.95. Buyer-paid shipping is never deducted." },
  { q: "How much do I keep on a $50 Poshmark sale?", a: "Poshmark takes 20% ($10), so your payout is $40. Your profit is $40 minus whatever the item cost you to source." },
  { q: "Who pays shipping on Poshmark?", a: "The buyer pays the standard $7.97 expedited USPS label. Sellers only pay shipping when they voluntarily offer a shipping discount." },
  { q: "Does Poshmark charge fees on the shipping amount?", a: "No. The commission applies only to the item price. The buyer's shipping payment covers the label and is not part of the fee base." },
  { q: "Is Poshmark's 20% fee worth it compared to other apps?", a: "Poshmark's 20% is higher than Mercari's 10% or Depop's ~3.3% + $0.45, but it bundles the prepaid shipping label and an active social buyer base for fashion. Higher-priced apparel often still nets more on Poshmark because of stronger demand." },
  { q: "Do I pay taxes on Poshmark income?", a: "Reselling profit is taxable. Poshmark issues a 1099-K past the federal threshold. Selling personal items at a loss is generally not taxable, but buying to resell at a profit is." },
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
    headline: "Poshmark Fee Calculator 2026 — Seller Fees, Payout & Profit",
    description: CALC_DESCRIPTION,
    datePublished: "2026-07-04",
    dateModified: "2026-07-07",
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
        formula={poshFormula}
        rateTable={poshRateTable}
        howToSteps={poshHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

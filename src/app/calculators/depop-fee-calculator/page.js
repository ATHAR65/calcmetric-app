import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "depop-fee-calculator";
const CALC_NAME = "Depop Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate Depop's 2026 US fees — $0 selling fee, 3.3% + $0.45 payment processing on the total, and the optional 12% Boosted Listings fee — plus your exact payout and profit.";

const seoContent = [
  "Depop removed its 10% US selling fee in July 2024. In 2026, US sellers pay only <strong>payment processing of 3.3% + $0.45</strong> on the total transaction (item + shipping), making Depop the <strong>cheapest major clothing marketplace</strong>.",
  "The optional <strong>Boosted Listings fee is 12%</strong> of the item price and applies only when a sale is attributed to a boost you enabled — organic sales never pay it.",
  "On a $50 item with $5 shipping, Depop costs about <strong>$2.27</strong> versus $5.50 on Mercari and $10.00 on Poshmark. Depop's buyer base skews streetwear, vintage, and Y2K fashion.",
];

const depopFormula = `Processing = 3.3% × (item + shipping) + $0.45
Boost (optional) = 12% × item — only if sold via boost
Payout = item + shipping − Processing − Boost

Example: $50 jacket + $5 shipping, organic
  Processing = 3.3% × $55 + $0.45 = $2.27
  Payout = $52.73 (≈ 4.1% effective fee)`;

const depopRateTable = {
  title: "Depop US Seller Fees (2026)",
  headers: ["Fee", "Amount", "Applies To", "Notes"],
  rows: [
    ["Selling fee", "$0", "—", "10% fee removed July 2024"],
    ["Payment processing", "3.3% + $0.45", "Item + shipping", "Every sale"],
    ["Boosted Listings", "12% of item", "Boost-attributed sales only", "Optional; enable per listing"],
  ],
};

const depopHowToSteps = [
  "Enter your item price and the shipping charged to the buyer.",
  "Select whether the sale came through a Boosted Listing.",
  "Optionally add your item cost for true profit.",
  "Review processing, boost fee, payout, and effective rate instantly.",
];

const staticFaqs = [
  { q: "What fees does Depop charge US sellers in 2026?", a: "No selling fee. US sellers pay payment processing of 3.3% + $0.45 on the total transaction (item plus shipping), and an optional 12% Boosted Listings fee that applies only when a sale comes through a boost." },
  { q: "Did Depop remove its 10% selling fee?", a: "Yes. Depop removed the 10% US selling fee in July 2024 and moved to a buyer-side marketplace fee. Sellers now pay only payment processing plus optional boost fees." },
  { q: "How much do I keep on a $100 Depop sale?", a: "With $8 buyer-paid shipping, processing is 3.3% × $108 + $0.45 ≈ $4.01, so your payout is about $103.99 before your shipping label cost." },
  { q: "Is Depop cheaper than Poshmark and Mercari in 2026?", a: "Yes for US sellers — about 3.75% effective on a typical sale versus Mercari's 10% and Poshmark's 20%, unless you use Boosted Listings (which add 12%)." },
  { q: "Do I pay taxes on Depop income?", a: "Reselling profit is taxable, and Depop issues Form 1099-K past the federal threshold. Item costs, fees, and shipping are deductible against profit." },
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
    headline: "Depop Fee Calculator 2026 — $0 Selling Fee, Processing & Boost Fees",
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
        formula={depopFormula}
        rateTable={depopRateTable}
        howToSteps={depopHowToSteps}
      />
    </>
  );
}

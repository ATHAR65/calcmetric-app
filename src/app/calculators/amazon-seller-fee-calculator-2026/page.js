import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "amazon-seller-fee-calculator-2026";
const CALC_NAME = "Amazon Seller Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate Amazon FBA fees, referral fees, storage costs, and net profit per product. Free Amazon seller fee estimator for 2026. No signup.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Amazon charges sellers multiple fee layers: a <strong>referral fee</strong> (8–15% of sale price depending on category), <strong>FBA fulfillment fees</strong> (based on size and weight), <strong>monthly storage fees</strong>, and optionally a <strong>Professional selling plan</strong> at $39.99/month. Understanding each fee is critical for pricing products profitably.",
  "FBA fulfillment fees for 2026 range from <strong>$3.22 for small standard items</strong> (under 1 lb) to <strong>$9.73+ for large standard items</strong> (3+ lbs). Oversized items can cost $9.73–$150+ per unit to fulfill. Monthly storage fees are $0.87 per cubic foot (January–September) and $2.40 per cubic foot during Q4 peak (October–December). Long-term storage fees apply after 180 days.",
  "The referral fee is a percentage of the total sale price (including shipping). Common rates: <strong>Electronics 8%</strong>, <strong>Clothing & Accessories 17%</strong>, <strong>Home & Kitchen 15%</strong>, <strong>Books 15%</strong>, <strong>Grocery 8–15%</strong>. Most categories charge 15%. There is a minimum referral fee of $0.30 per item that applies when the percentage-based fee would be lower.",
  "To maintain healthy margins on Amazon, aim for a <strong>minimum 30% profit margin</strong> after all Amazon fees. A product selling for $25 with a $5 cost, $3.75 referral fee (15%), and $3.50 FBA fee leaves $12.75 profit before advertising. Amazon PPC (pay-per-click) advertising typically costs 15–25% of revenue for competitive categories, so factor that into profitability calculations.",
];

const amazonFormula = `Net Profit = Sale Price − Product Cost − Referral Fee − FBA Fee − Storage
Referral Fee = Sale Price × Category Rate (8–15%)
FBA Fee = Based on size tier + weight

Example: $29.99 product, $8 cost, Home & Kitchen category
  Referral Fee = $29.99 × 15% = $4.50
  FBA Fee (small standard, 12 oz) = $3.22
  Storage (1 month) = ~$0.15
  Net Profit = $29.99 − $8.00 − $4.50 − $3.22 − $0.15 = $14.12
  Profit Margin = 47.1%`;

const amazonRateTable = {
  title: "2026 Amazon Fee Structure",
  headers: ["Fee Type", "Amount", "Charged When"],
  rows: [
    ["Referral Fee", "8–15% of sale price", "Per item sold"],
    ["FBA Fulfillment (small standard)", "$3.22–$4.75", "Per unit shipped"],
    ["FBA Fulfillment (large standard)", "$5.90–$9.73+", "Per unit shipped"],
    ["Monthly Storage (Jan–Sep)", "$0.87/cu ft", "Monthly, per cu ft"],
    ["Monthly Storage (Oct–Dec)", "$2.40/cu ft", "Monthly, per cu ft"],
    ["Professional Plan", "$39.99/month", "Monthly subscription"],
    ["Individual Plan", "$0.99/item sold", "Per item (no monthly fee)"],
  ],
};

const amazonHowToSteps = [
  "Enter your product's sale price and cost of goods (manufacturing, wholesale, or sourcing cost per unit).",
  "Select your product category to apply the correct referral fee percentage (8–15%).",
  "Enter your product dimensions and weight for accurate FBA fulfillment fee calculation.",
  "Review your per-unit breakdown: referral fee, FBA fee, estimated storage, net profit, and profit margin percentage.",
];

const staticFaqs = [
  { q: "What is Amazon's referral fee?", a: "The referral fee is a percentage of the total sale price charged on every item sold. Most categories charge 15%, but Electronics is 8%, Clothing is 17%, and Grocery ranges from 8–15%. There is a minimum referral fee of $0.30 per item. This fee is the same for both FBA and FBM (Fulfilled by Merchant) sellers." },
  { q: "How are Amazon FBA fees calculated?", a: "FBA fees are based on product size tier and shipping weight. Small standard items (under 15\"×12\"×0.75\", under 1 lb) cost $3.22. Large standard items cost $5.90–$9.73+ depending on weight. Oversized items have their own fee schedule starting at $9.73. Amazon updates these rates annually, typically increasing 3–5%." },
  { q: "Is Amazon FBA worth it in 2026?", a: "Yes, for most sellers with products that have 30%+ margins after all fees. FBA provides Prime eligibility (critical for sales volume), customer service handling, and 2-day shipping. Products under $15 are harder to profit from due to the fixed FBA fee. The break-even point is typically around $12–15 sale price for small items." },
  { q: "What is the Individual vs Professional plan?", a: "Individual: no monthly fee, but $0.99 per item sold — best if selling fewer than 40 units/month. Professional: $39.99/month flat fee regardless of volume — best if selling 40+ units/month. Professional also unlocks advertising, reporting tools, and Buy Box eligibility. Most serious sellers choose Professional." },
  { q: "How do Amazon storage fees work?", a: "Monthly storage fees are $0.87 per cubic foot (January–September) and $2.40 per cubic foot (October–December peak season). Long-term storage fees apply to inventory stored over 180 days at $6.90 per cubic foot or $0.15 per unit (whichever is greater). Keep inventory lean — aim for 2–3 months of supply." },
  { q: "How does Amazon compare to Shopify and Etsy for sellers?", a: "Amazon: highest fees (30%+ of revenue) but massive built-in traffic and Prime eligibility. Shopify: lowest fees (5–8% of revenue) but you drive your own traffic. Etsy: moderate fees (~12%) with built-in marketplace of 90M+ buyers. Most successful sellers use Amazon as primary with Shopify as their own branded store." },
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
        formula={amazonFormula}
        rateTable={amazonRateTable}
        howToSteps={amazonHowToSteps}
      />
    </>
  );
}

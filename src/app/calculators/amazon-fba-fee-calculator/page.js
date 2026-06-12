import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "amazon-fba-fee-calculator";
const CALC_NAME = "Amazon FBA Fee Calculator 2026 — FBA";
const CALC_DESCRIPTION = "Calculate Amazon FBA fees including referral fees, fulfillment fees, and net profit per unit. Free 2026 FBA calculator for Amazon sellers.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Amazon FBA (Fulfillment by Amazon) charges sellers multiple fee layers that can significantly impact profit margins. Understanding each fee is essential before sourcing products. The three primary fees are the <strong>referral fee</strong> (a percentage of the sale price), the <strong>FBA fulfillment fee</strong> (picking, packing, and shipping), and <strong>monthly storage fees</strong> (per cubic foot per month).",
  "Referral fees vary by product category and typically range from <strong>8% to 15%</strong> of the total sale price including shipping. Most categories charge 15%, but some like personal computers (6%), Amazon device accessories (45%), and consumer electronics (8%) have different rates. There is a minimum referral fee of $0.30 per item in most categories.",
  "FBA fulfillment fees depend on the product's size tier and shipping weight. For 2026, standard-size items (under 20 lb, longest side under 18 inches) start at <strong>$3.22 for items under 2 oz</strong> and go up to $7.17+ for heavier items. Oversize items start at $9.73. Amazon also introduced a <strong>3.5% fuel and logistics surcharge</strong> on fulfillment fees in April 2026.",
  "Monthly storage fees are <strong>$0.87 per cubic foot</strong> from January through September and <strong>$2.40 per cubic foot</strong> from October through December (peak holiday season). Items stored longer than 365 days incur an additional aged inventory surcharge of $6.90 per cubic foot or $0.15 per unit, whichever is greater.",
];

const fbaRateTable = {
  title: "2026 Amazon FBA Fee Structure",
  headers: ["Fee Type", "Rate / Amount", "Applied To"],
  rows: [
    ["Referral Fee (most categories)", "15%", "Total sale price"],
    ["Referral Fee (electronics)", "8%", "Total sale price"],
    ["Minimum Referral Fee", "$0.30", "Per item"],
    ["FBA Fulfillment (small standard, ≤2 oz)", "$3.22", "Per unit shipped"],
    ["FBA Fulfillment (large standard, 1–2 lb)", "$5.90", "Per unit shipped"],
    ["Fuel & Logistics Surcharge", "3.5%", "On fulfillment fee"],
    ["Monthly Storage (Jan–Sep)", "$0.87/cu ft", "Per month"],
    ["Monthly Storage (Oct–Dec)", "$2.40/cu ft", "Per month"],
    ["Aged Inventory (365+ days)", "$6.90/cu ft or $0.15/unit", "Whichever is greater"],
  ],
};

const fbaHowToSteps = [
  "Enter your product's sale price on Amazon, including any shipping charges if applicable.",
  "Select your product category to apply the correct referral fee percentage (15% for most categories).",
  "Enter the product dimensions and shipping weight to determine the FBA size tier and fulfillment fee.",
  "Add your product cost (cost of goods sold) and any prep, labeling, or inbound shipping costs.",
  "Review the fee breakdown: referral fee, FBA fulfillment fee, fuel surcharge, storage estimate, and your net profit per unit with profit margin percentage.",
];

const staticFaqs = [
  { q: "Is the Amazon FBA calculator free to use?", a: "Yes, this tool is 100% free with no sign-up required. Use it as many times as needed to evaluate different products, categories, and pricing scenarios before committing to inventory." },
  { q: "Does this calculator include Amazon's 2026 fuel surcharge?", a: "Yes, the calculator includes the 3.5% fuel and logistics surcharge that Amazon applies to FBA fulfillment fees as of April 2026. This surcharge is calculated on top of the base fulfillment fee and is shown as a separate line item in your results." },
  { q: "How can I reduce my Amazon FBA fees?", a: "The most effective strategies are: reduce packaging dimensions to qualify for a smaller size tier (the difference between standard and oversize is dramatic), keep inventory fresh to avoid aged inventory surcharges, bundle low-price items to spread the fixed fulfillment fee across a higher sale price, choose categories with lower referral fees, and use Amazon's partnered carrier program for discounted inbound shipping." },
  { q: "What is a good profit margin for Amazon FBA?", a: "Most successful FBA sellers target a net profit margin of 15% to 30% after all Amazon fees, cost of goods, and inbound shipping. Margins below 15% leave little room for PPC advertising costs, returns, and price fluctuations. Private label products tend to have higher margins (25%+) than retail arbitrage or wholesale (10%–20%)." },
  { q: "How much does Amazon charge for returns?", a: "Amazon charges a return processing fee equal to the original fulfillment fee for most categories. For apparel and shoes, Amazon charges a return processing fee on all returns. Customer-damaged items may be disposed of or returned to you. Amazon deducts the referral fee refund from your account when processing a return." },
  { q: "What is the difference between FBA and FBM fees?", a: "FBA (Fulfillment by Amazon) charges referral fees plus fulfillment fees, storage fees, and optional services. FBM (Fulfilled by Merchant) only charges referral fees — you handle storage, packing, and shipping yourself. FBA products qualify for Prime and typically rank higher in search, but FBM can be more profitable for large, heavy, or slow-selling items where storage costs are high." },
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
        rateTable={fbaRateTable}
        howToSteps={fbaHowToSteps}
      />
    </>
  );
}

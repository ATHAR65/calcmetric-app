import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "us-import-tariff-calculator";
const CALC_NAME = "US Import Tariff Calculator 2026 — Duties";
const CALC_DESCRIPTION = "Calculate US import duties, tariffs, and total landed cost. Includes Section 301 China tariffs, Section 232 steel/aluminum, and de minimis rules. Free 2026 calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "US import duties are calculated as a percentage of the <strong>customs value</strong> (typically the transaction value — what you paid the supplier). Duty rates are determined by the product's <strong>HTS (Harmonized Tariff Schedule) code</strong>, a 10-digit classification number. Standard duty rates for most goods range from 0% to 25%, but special tariffs can push effective rates much higher.",
  "Imports from China face a <strong>20% baseline tariff</strong> plus additional Section 301 duties ranging from 7.5% to 100% depending on the product category. Electronics typically face 20–25% combined, textiles and apparel 20–32%, and certain strategic goods (EVs, semiconductors, solar cells) up to 100%. These tariffs have significantly increased costs for Amazon FBA and e-commerce sellers sourcing from China.",
  "<strong>Section 232 tariffs</strong> impose 25% on steel imports and 10% on aluminum imports from most countries, citing national security. These apply to raw materials and many manufactured goods containing significant steel or aluminum content. Some countries have negotiated quota-based exemptions, but most imports face the full rate.",
  "The <strong>de minimis threshold</strong> under Section 321 allows shipments valued under <strong>$800</strong> to enter the US duty-free. This exemption is widely used by direct-to-consumer e-commerce platforms and dropshippers. However, recent legislative proposals aim to restrict or eliminate de minimis for Chinese imports. Goods subject to antidumping or countervailing duties, and certain tariff exclusions, are not eligible for de minimis treatment.",
];

const tariffFormula = `Landed Cost = Product Cost + Shipping + Duty + MPF + HMF
Duty = Customs Value × (MFN Rate + Section 301 Rate)
MPF = 0.3464% of value (min $31.67, max $614.35)
HMF = 0.125% of value (ocean freight only)

Example: $10,000 shipment from China, 15% MFN + 20% Sec 301
  Duty = $10,000 × (15% + 20%) = $3,500
  MPF = $10,000 × 0.3464% = $34.64
  HMF = $10,000 × 0.125% = $12.50
  Total duties & fees = $3,547
  Landed cost = $10,000 + $1,500 shipping + $3,547 = $15,047`;

const tariffRateTable = {
  title: "2026 Key US Tariff Rates",
  headers: ["Tariff Type", "Rate", "Applies To"],
  rows: [
    ["MFN (Most Favored Nation)", "0–25%", "Standard rate by HTS code"],
    ["Section 301 (China)", "7.5–100%", "Most Chinese imports"],
    ["Section 232 (Steel)", "25%", "Steel from most countries"],
    ["Section 232 (Aluminum)", "10%", "Aluminum from most countries"],
    ["De minimis (Section 321)", "Duty-free", "Shipments under $800 value"],
    ["MPF (Merch. Processing)", "0.3464%", "All formal entries"],
  ],
};

const tariffHowToSteps = [
  "Enter your product's customs value (what you paid the supplier, in USD) and shipping cost.",
  "Select the country of origin and enter your HTS code (find it at hts.usitc.gov) or select a product category.",
  "The calculator applies the correct MFN duty rate plus any applicable Section 301, 232, or other special tariffs.",
  "Review the duty breakdown, MPF, HMF (if ocean freight), total landed cost, and effective tariff rate as a percentage of product cost.",
];

const staticFaqs = [
  { q: "What is the current US tariff rate on Chinese imports?", a: "Most Chinese imports face a 20% baseline tariff plus Section 301 duties ranging from 7.5% to 100% depending on product category. Common consumer goods typically face 20–35% combined rates. EVs face up to 100%, semiconductors up to 50%, and solar cells up to 50%. Check the USTR Section 301 list for specific product rates by HTS code." },
  { q: "What is the de minimis threshold for US imports?", a: "Shipments valued under $800 enter the US duty-free under Section 321 de minimis. This applies per person per day. However, de minimis does not apply to goods subject to antidumping/countervailing duties, certain FDA-regulated items, or goods from sanctioned countries. Legislative proposals in 2025–2026 may restrict de minimis for Chinese-origin goods." },
  { q: "What is the Section 232 tariff?", a: "Section 232 imposes 25% tariffs on steel imports and 10% on aluminum imports from most countries, based on national security grounds. These apply to raw materials and many manufactured goods with significant steel/aluminum content. Some countries (Australia, South Korea, etc.) have negotiated tariff-rate quotas that allow duty-free imports up to a certain volume." },
  { q: "How do tariffs affect e-commerce and Amazon FBA sellers?", a: "Tariffs directly increase your cost of goods sold (COGS). A product sourced from China at $5 with 35% combined tariffs costs $6.75 before shipping. This requires either absorbing the cost (lower margins) or raising prices (lower sales volume). Many sellers have diversified sourcing to Vietnam, India, or Mexico to reduce tariff exposure." },
  { q: "How do I find the HTS code for my product?", a: "Search at hts.usitc.gov (the official US International Trade Commission database). Enter your product description to find the 10-digit HTS code, which determines the duty rate. Customs brokers can also classify products for you. Misclassification can result in underpayment penalties or overpayment of duties." },
  { q: "Can I get a tariff refund or exemption?", a: "Drawback programs allow refunds of 99% of duties paid on imported goods that are subsequently exported. Foreign Trade Zones (FTZs) allow duty deferral or reduction. Tariff exclusion requests can be filed with the USTR for specific products. Goods qualifying under free trade agreements (USMCA, CAFTA-DR) may enter duty-free with proper documentation." },
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
        formula={tariffFormula}
        rateTable={tariffRateTable}
        howToSteps={tariffHowToSteps}
      />
    </>
  );
}

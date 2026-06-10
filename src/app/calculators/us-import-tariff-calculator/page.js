import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "us-import-tariff-calculator";
const CALC_NAME = "US Import Tariff Calculator 2026 — Duties";
const CALC_DESCRIPTION = "Calculate US import duties, tariffs, and total landed cost with Section 232 rates. Free 2026 import tariff calculator for Amazon FBA and e-commerce sellers.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is the current US tariff rate on Chinese imports?", a: "20% baseline + Section 301 duties; varies by product" },
  { q: "What is de minimis for US imports?", a: "Shipments under $800 enter duty-free under Section 321" },
  { q: "What is the Section 232 tariff?", a: "25% on steel, 10% on aluminum imports for national security" },
  { q: "How do tariffs affect e-commerce sellers?", a: "Increases COGS; may require price adjustments" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the current US tariff rate on Chinese imports?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "20% baseline + Section 301 duties; varies by product"
            }
          },
          {
            "@type": "Question",
            "name": "What is de minimis for US imports?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shipments under $800 enter duty-free under Section 321"
            }
          },
          {
            "@type": "Question",
            "name": "What is the Section 232 tariff?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "25% on steel, 10% on aluminum imports for national security"
            }
          },
          {
            "@type": "Question",
            "name": "How do tariffs affect e-commerce sellers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Increases COGS; may require price adjustments"
            }
          }
        ]
      };

    return (
    <>
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema]} />
      <Calculator />
      <CalculatorStaticSeo title={CALC_NAME} description={CALC_DESCRIPTION} slug={CALC_SLUG} faqs={staticFaqs} />
    </>
  );
}

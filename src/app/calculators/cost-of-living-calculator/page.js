import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "cost-of-living-calculator";
const CALC_NAME = "Cost of Living Calculator 2026 — Cities";
const CALC_DESCRIPTION = "Compare cost of living between any two US cities. Find the equivalent salary you need to maintain your lifestyle. Free city comparison calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is included in cost of living comparisons?", a: "Housing, food, transportation, utilities, healthcare, taxes" },
  { q: "Which US cities have the highest cost of living?", a: "NYC, San Francisco, Honolulu, Boston, Washington DC" },
  { q: "How much salary do I need to move to a new city?", a: "Use the calculator to find equivalent salary based on COL index" },
  { q: "Is cost of living higher in cities or suburbs?", a: "Cities generally 20-40% higher than suburbs" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is included in cost of living comparisons?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Housing, food, transportation, utilities, healthcare, taxes"
            }
          },
          {
            "@type": "Question",
            "name": "Which US cities have the highest cost of living?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NYC, San Francisco, Honolulu, Boston, Washington DC"
            }
          },
          {
            "@type": "Question",
            "name": "How much salary do I need to move to a new city?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the calculator to find equivalent salary based on COL index"
            }
          },
          {
            "@type": "Question",
            "name": "Is cost of living higher in cities or suburbs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cities generally 20-40% higher than suburbs"
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

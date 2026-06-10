import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "dividend-tax-calculator-2026";
const CALC_NAME = "Dividend Tax Calculator 2026 — UK Dividend";
const CALC_DESCRIPTION = "Calculate UK dividend tax instantly. Covers basic, higher & additional rate taxpayers. Free, no signup needed.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is the dividend allowance in 2026?", a: "£500" },
  { q: "How much tax do I pay on dividends?", a: "8.75% basic, 33.75% higher rate" },
  { q: "Are dividends taxed twice?", a: "Yes — corporation tax then dividend tax" },
  { q: "Is salary or dividends more tax-efficient?", a: "Usually a mix is most efficient" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the dividend allowance in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "£500"
            }
          },
          {
            "@type": "Question",
            "name": "How much tax do I pay on dividends?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "8.75% basic, 33.75% higher rate"
            }
          },
          {
            "@type": "Question",
            "name": "Are dividends taxed twice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — corporation tax then dividend tax"
            }
          },
          {
            "@type": "Question",
            "name": "Is salary or dividends more tax-efficient?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually a mix is most efficient"
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

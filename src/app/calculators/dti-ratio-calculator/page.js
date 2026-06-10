import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "dti-ratio-calculator";
const CALC_NAME = "Debt-to-Income Ratio Calculator 2026 — DTI";
const CALC_DESCRIPTION = "Calculate your debt-to-income ratio for mortgage and loan applications. Free DTI calculator with front-end, back-end ratios, and lender guidelines.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is a good DTI ratio?", a: "Below 36% is good; below 43% is required for most mortgages" },
  { q: "What is front-end vs back-end DTI?", a: "Front-end: housing costs only. Back-end: all debt payments." },
  { q: "How can I lower my DTI ratio?", a: "Pay down debt, increase income, or avoid taking on new debt" },
  { q: "Do all lenders use the same DTI limits?", a: "Most follow guidelines, but some allow up to 50% back-end DTI" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a good DTI ratio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Below 36% is good; below 43% is required for most mortgages"
            }
          },
          {
            "@type": "Question",
            "name": "What is front-end vs back-end DTI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Front-end: housing costs only. Back-end: all debt payments."
            }
          },
          {
            "@type": "Question",
            "name": "How can I lower my DTI ratio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pay down debt, increase income, or avoid taking on new debt"
            }
          },
          {
            "@type": "Question",
            "name": "Do all lenders use the same DTI limits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most follow guidelines, but some allow up to 50% back-end DTI"
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

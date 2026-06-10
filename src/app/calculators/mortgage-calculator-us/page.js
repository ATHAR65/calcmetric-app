import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "mortgage-calculator-us";
const CALC_NAME = "Mortgage Calculator US 2026 — Payments";
const CALC_DESCRIPTION = "Calculate your US mortgage payment, total interest, and amortization schedule. Free mortgage calculator. No signup.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "How is a mortgage payment calculated?", a: "Based on principal, rate, and term using amortization formula" },
  { q: "What is a good mortgage rate in 2026?", a: "Varies by credit score and market conditions" },
  { q: "What is PMI and when is it required?", a: "Private Mortgage Insurance required with less than 20% down" },
  { q: "How does loan term affect monthly payment?", a: "Shorter term = higher payment but less total interest" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is a mortgage payment calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Based on principal, rate, and term using amortization formula"
            }
          },
          {
            "@type": "Question",
            "name": "What is a good mortgage rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Varies by credit score and market conditions"
            }
          },
          {
            "@type": "Question",
            "name": "What is PMI and when is it required?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Private Mortgage Insurance required with less than 20% down"
            }
          },
          {
            "@type": "Question",
            "name": "How does loan term affect monthly payment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shorter term = higher payment but less total interest"
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

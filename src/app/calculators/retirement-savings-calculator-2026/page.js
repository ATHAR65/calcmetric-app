import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "retirement-savings-calculator-2026";
const CALC_NAME = "Retirement Savings Calculator 2026 — Track";
const CALC_DESCRIPTION = "Estimate if you're on track for retirement with the 4% rule, savings growth projections, and income replacement rate. Free 2026 retirement calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "How much do I need to retire comfortably?", a: "Depends on lifestyle — typically 25x annual expenses" },
  { q: "What is the 4% rule for retirement?", a: "Withdraw 4% of savings annually, adjusted for inflation" },
  { q: "How does compound interest help retirement savings?", a: "Earnings on earnings accelerate growth over decades" },
  { q: "What is a good retirement savings rate?", a: "15% of income including employer match" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much do I need to retire comfortably?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on lifestyle — typically 25x annual expenses"
            }
          },
          {
            "@type": "Question",
            "name": "What is the 4% rule for retirement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Withdraw 4% of savings annually, adjusted for inflation"
            }
          },
          {
            "@type": "Question",
            "name": "How does compound interest help retirement savings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Earnings on earnings accelerate growth over decades"
            }
          },
          {
            "@type": "Question",
            "name": "What is a good retirement savings rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "15% of income including employer match"
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

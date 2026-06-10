import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "savings-goal-calculator";
const CALC_NAME = "Savings Goal Calculator 2026 — Goal";
const CALC_DESCRIPTION = "Calculate how your savings grow with regular contributions and compound interest. Free savings goal calculator with year-by-year projections.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "How much should I save each month to reach my goal?", a: "Use the calculator — it depends on goal amount, timeline, and rate of return" },
  { q: "What is compound interest?", a: "Interest earned on both principal and accumulated interest" },
  { q: "How does compound interest grow over time?", a: "Exponentially — the earlier you start, the more you benefit" },
  { q: "What is a realistic investment return assumption?", a: "7-8% average annual return for stock market (before inflation)" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much should I save each month to reach my goal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the calculator — it depends on goal amount, timeline, and rate of return"
            }
          },
          {
            "@type": "Question",
            "name": "What is compound interest?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Interest earned on both principal and accumulated interest"
            }
          },
          {
            "@type": "Question",
            "name": "How does compound interest grow over time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Exponentially — the earlier you start, the more you benefit"
            }
          },
          {
            "@type": "Question",
            "name": "What is a realistic investment return assumption?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "7-8% average annual return for stock market (before inflation)"
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

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";
const CALC_SLUG = "credit-card-payoff-calculator";
const CALC_NAME = "Credit Card Payoff Calculator 2026";
const CALC_DESCRIPTION = "Compare snowball vs avalanche debt payoff methods. Calculate how long it takes to pay off credit card debt and how much interest you save with extra payments. Free 2026 calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "Should I use the snowball or avalanche method?", a: "Snowball: pay smallest balance first. Avalanche: pay highest APR first." },
  { q: "How much interest can I save by paying extra?", a: "Thousands — depends on balance, rate, and extra payment amount" },
  { q: "What is a good debt payoff timeline?", a: "Aim to pay off credit cards within 2-3 years" },
  { q: "Should I consolidate credit card debt?", a: "If you can get a lower APR, consolidation can save money" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Should I use the snowball or avalanche method?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Snowball: pay smallest balance first. Avalanche: pay highest APR first."
            }
          },
          {
            "@type": "Question",
            "name": "How much interest can I save by paying extra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Thousands — depends on balance, rate, and extra payment amount"
            }
          },
          {
            "@type": "Question",
            "name": "What is a good debt payoff timeline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aim to pay off credit cards within 2-3 years"
            }
          },
          {
            "@type": "Question",
            "name": "Should I consolidate credit card debt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you can get a lower APR, consolidation can save money"
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

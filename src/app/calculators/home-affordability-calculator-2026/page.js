import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "home-affordability-calculator-2026";
const CALC_NAME = "Home Affordability Calculator 2026";
const CALC_DESCRIPTION = "Find out how much house you can afford based on your income, debts & down payment. Free home affordability calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "How much house can I afford on $80,000 salary?", a: "Roughly $280,000–$320,000" },
  { q: "What is the 28/36 debt-to-income rule?", a: "Housing ≤28% of gross; total debt ≤36%" },
  { q: "How much down payment do I need for a house?", a: "Minimum 3–3.5% for conventional/FHA" },
  { q: "Does pre-approval affect my credit score?", a: "Small temporary impact from hard inquiry" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much house can I afford on $80,000 salary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roughly $280,000–$320,000"
            }
          },
          {
            "@type": "Question",
            "name": "What is the 28/36 debt-to-income rule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Housing ≤28% of gross; total debt ≤36%"
            }
          },
          {
            "@type": "Question",
            "name": "How much down payment do I need for a house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Minimum 3–3.5% for conventional/FHA"
            }
          },
          {
            "@type": "Question",
            "name": "Does pre-approval affect my credit score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Small temporary impact from hard inquiry"
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

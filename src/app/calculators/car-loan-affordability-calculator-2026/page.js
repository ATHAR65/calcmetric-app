import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "car-loan-affordability-calculator-2026";
const CALC_NAME = "Car Loan Affordability Calculator 2026";
const CALC_DESCRIPTION = "Calculate monthly car payments, total interest, and DTI analysis. Free 2026 car affordability calculator before you visit the dealership.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is a good APR for a car loan in 2026?", a: "Depends on credit score — prime rates around 5-7%" },
  { q: "How much car can I afford on my salary?", a: "Total car costs should be under 15% of monthly take-home pay" },
  { q: "What is the ideal car loan term?", a: "36-48 months to minimize interest and stay above water" },
  { q: "Should I lease or buy a car?", a: "Buy if you keep cars long-term; lease if you want lower payments and new cars" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a good APR for a car loan in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on credit score — prime rates around 5-7%"
            }
          },
          {
            "@type": "Question",
            "name": "How much car can I afford on my salary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Total car costs should be under 15% of monthly take-home pay"
            }
          },
          {
            "@type": "Question",
            "name": "What is the ideal car loan term?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "36-48 months to minimize interest and stay above water"
            }
          },
          {
            "@type": "Question",
            "name": "Should I lease or buy a car?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Buy if you keep cars long-term; lease if you want lower payments and new cars"
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

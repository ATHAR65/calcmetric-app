import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "new-york-paycheck-calculator-2026";
const CALC_NAME = "New York Paycheck Calculator 2026";
const CALC_DESCRIPTION = "Calculate your New York take-home pay after state, city, and federal taxes. Free NY paycheck estimator. No signup.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is New York state income tax rate?", a: "4% to 10.9% depending on income" },
  { q: "Does New York City have its own income tax?", a: "Yes, 3.078%–3.876%" },
  { q: "How much of my NY paycheck goes to taxes?", a: "Could be 35–45% total for high earners" },
  { q: "Is NYC tax different from NY state tax?", a: "Yes, NYC has an additional local tax" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is New York state income tax rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "4% to 10.9% depending on income"
            }
          },
          {
            "@type": "Question",
            "name": "Does New York City have its own income tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 3.078%–3.876%"
            }
          },
          {
            "@type": "Question",
            "name": "How much of my NY paycheck goes to taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Could be 35–45% total for high earners"
            }
          },
          {
            "@type": "Question",
            "name": "Is NYC tax different from NY state tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, NYC has an additional local tax"
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

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "texas-paycheck-calculator";
const CALC_NAME = "Texas Paycheck Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Texas take-home pay after federal taxes and FICA. No state income tax in TX. Free, instant results.";
const staticFaqs = [
  { q: "Does Texas have state income tax?", a: "No, Texas has no state income tax" },
  { q: "What percentage is taken out of a Texas paycheck?", a: "Federal + 7.65% FICA only" },
  { q: "How do I calculate my take-home pay in Texas?", a: "Gross − federal tax − FICA" },
  { q: "Does Texas have local payroll taxes?", a: "Some cities have minor taxes, mostly no" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does Texas have state income tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, Texas has no state income tax"
            }
          },
          {
            "@type": "Question",
            "name": "What percentage is taken out of a Texas paycheck?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Federal + 7.65% FICA only"
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate my take-home pay in Texas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gross − federal tax − FICA"
            }
          },
          {
            "@type": "Question",
            "name": "Does Texas have local payroll taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some cities have minor taxes, mostly no"
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

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "net-worth-calculator";
const CALC_NAME = "Net Worth Calculator 2026 — Health";
const CALC_DESCRIPTION = "Calculate your net worth by adding up all assets and liabilities. Free net worth tracker with asset allocation analysis.";
const staticFaqs = [
  { q: "What is a good net worth by age?", a: "Varies — standard rule is 1x salary by 30, 3x by 40, 6x by 50" },
  { q: "How often should I calculate my net worth?", a: "Quarterly or annually to track financial progress" },
  { q: "Is my home included in net worth?", a: "Yes, home value minus mortgage balance" },
  { q: "What is a negative net worth?", a: "When liabilities exceed assets — common for students and new graduates" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a good net worth by age?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Varies — standard rule is 1x salary by 30, 3x by 40, 6x by 50"
            }
          },
          {
            "@type": "Question",
            "name": "How often should I calculate my net worth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Quarterly or annually to track financial progress"
            }
          },
          {
            "@type": "Question",
            "name": "Is my home included in net worth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, home value minus mortgage balance"
            }
          },
          {
            "@type": "Question",
            "name": "What is a negative net worth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When liabilities exceed assets — common for students and new graduates"
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

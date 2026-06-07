import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "florida-paycheck-calculator-2026";
const CALC_NAME = "Florida Paycheck Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Florida take-home pay. No state income tax in FL. Free paycheck calculator with federal tax & FICA.";
const staticFaqs = [
  { q: "Does Florida have state income tax?", a: "No state income tax in Florida" },
  { q: "How much is taken from a Florida paycheck?", a: "Only federal taxes and FICA (7.65%)" },
  { q: "What is the Florida minimum wage in 2026?", a: "Check current FL minimum wage" },
  { q: "Is it better to live in Florida or Texas for taxes?", a: "Similar — both have no state income tax" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does Florida have state income tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No state income tax in Florida"
            }
          },
          {
            "@type": "Question",
            "name": "How much is taken from a Florida paycheck?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Only federal taxes and FICA (7.65%)"
            }
          },
          {
            "@type": "Question",
            "name": "What is the Florida minimum wage in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check current FL minimum wage"
            }
          },
          {
            "@type": "Question",
            "name": "Is it better to live in Florida or Texas for taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Similar — both have no state income tax"
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

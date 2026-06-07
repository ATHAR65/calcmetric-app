import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "uber-tax-calculator-2026";
const CALC_NAME = "Uber Driver Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Uber driver taxes in seconds. SE tax, quarterly estimates & mileage deductions. Free, instant.";
const staticFaqs = [
  { q: "Does Uber withhold taxes?", a: "No, you pay all taxes yourself" },
  { q: "How much should Uber drivers save for taxes?", a: "25–30% of net earnings" },
  { q: "Can Uber drivers deduct mileage?", a: "Yes, $0.70 per mile in 2026" },
  { q: "When does Uber send 1099?", a: "January, for drivers earning $600+" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does Uber withhold taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you pay all taxes yourself"
            }
          },
          {
            "@type": "Question",
            "name": "How much should Uber drivers save for taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "25–30% of net earnings"
            }
          },
          {
            "@type": "Question",
            "name": "Can Uber drivers deduct mileage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, $0.70 per mile in 2026"
            }
          },
          {
            "@type": "Question",
            "name": "When does Uber send 1099?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "January, for drivers earning $600+"
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

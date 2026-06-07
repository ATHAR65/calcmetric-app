import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "side-hustle-tax-calculator";
const CALC_NAME = "Side Hustle Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate taxes on your side hustle income instantly. Covers SE tax, deductions & quarterly payments. Free tool.";
const staticFaqs = [
  { q: "How much tax do I pay on side hustle income?", a: "15.3% SE tax + income tax" },
  { q: "Do I need to pay quarterly taxes on side hustle?", a: "Yes if you expect to owe $1,000+" },
  { q: "What side hustle expenses are deductible?", a: "Business-use expenses only" },
  { q: "Do I need a 1099 to report side hustle income?", a: "No, report all income even without 1099" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much tax do I pay on side hustle income?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "15.3% SE tax + income tax"
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to pay quarterly taxes on side hustle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes if you expect to owe $1,000+"
            }
          },
          {
            "@type": "Question",
            "name": "What side hustle expenses are deductible?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business-use expenses only"
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a 1099 to report side hustle income?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, report all income even without 1099"
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

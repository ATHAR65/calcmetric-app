import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "mortgage-refinance-calculator-2026";
const CALC_NAME = "Mortgage Refinance Calculator 2026";
const CALC_DESCRIPTION = "Calculate if refinancing your mortgage saves money. See break-even point, monthly savings & total interest saved. Free.";
const staticFaqs = [
  { q: "When should I refinance my mortgage?", a: "When new rate saves more than closing costs within 2–3 years" },
  { q: "What are refinancing closing costs?", a: "Typically 2–5% of loan amount" },
  { q: "How do I calculate my refinance break-even point?", a: "Closing costs ÷ monthly savings" },
  { q: "Does refinancing hurt your credit score?", a: "Temporarily yes, due to hard inquiry" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When should I refinance my mortgage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When new rate saves more than closing costs within 2–3 years"
            }
          },
          {
            "@type": "Question",
            "name": "What are refinancing closing costs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 2–5% of loan amount"
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate my refinance break-even point?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Closing costs ÷ monthly savings"
            }
          },
          {
            "@type": "Question",
            "name": "Does refinancing hurt your credit score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Temporarily yes, due to hard inquiry"
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

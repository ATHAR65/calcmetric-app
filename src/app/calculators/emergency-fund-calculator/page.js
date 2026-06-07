import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "emergency-fund-calculator";
const CALC_NAME = "Emergency Fund Calculator 2026 — Savings";
const CALC_DESCRIPTION = "Calculate your emergency fund target based on monthly expenses and income stability. Free emergency savings calculator with personalized recommendations.";
const staticFaqs = [
  { q: "How much emergency fund should I have?", a: "3–6 months of essential expenses" },
  { q: "Where should I keep my emergency fund?", a: "High-yield savings account for easy access" },
  { q: "Is $1,000 enough for an emergency fund?", a: "A good start, but aim for 3 months of expenses" },
  { q: "How quickly can I build an emergency fund?", a: "Depends on your savings rate — use the calculator to estimate" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much emergency fund should I have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3–6 months of essential expenses"
            }
          },
          {
            "@type": "Question",
            "name": "Where should I keep my emergency fund?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "High-yield savings account for easy access"
            }
          },
          {
            "@type": "Question",
            "name": "Is $1,000 enough for an emergency fund?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A good start, but aim for 3 months of expenses"
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can I build an emergency fund?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on your savings rate — use the calculator to estimate"
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

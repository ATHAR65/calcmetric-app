import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "solo-401k-contribution-calculator";
const CALC_NAME = "Solo 401k Contribution Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Solo 401k contribution limit for 2026. Covers employee deferrals, employer profit-sharing, and catch-up contributions. Free retirement calculator.";
const staticFaqs = [
  { q: "What is the Solo 401k contribution limit in 2026?", a: "$70,000 (or $77,500 with catch-up for age 50+)" },
  { q: "How are Solo 401k employer contributions calculated?", a: "Up to 25% of net self-employment income" },
  { q: "Can I have a Solo 401k and a regular 401k?", a: "Yes, but combined limits apply" },
  { q: "What is the SECURE 2.0 super catch-up?", a: "Ages 60–63: additional $10,000+ catch-up provision" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Solo 401k contribution limit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$70,000 (or $77,500 with catch-up for age 50+)"
            }
          },
          {
            "@type": "Question",
            "name": "How are Solo 401k employer contributions calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Up to 25% of net self-employment income"
            }
          },
          {
            "@type": "Question",
            "name": "Can I have a Solo 401k and a regular 401k?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but combined limits apply"
            }
          },
          {
            "@type": "Question",
            "name": "What is the SECURE 2.0 super catch-up?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ages 60–63: additional $10,000+ catch-up provision"
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

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "inflation-calculator";
const CALC_NAME = "Inflation Calculator 2026 — Purchasing Power";
const CALC_DESCRIPTION = "Calculate how inflation reduces your money's purchasing power over time. Free 2026 inflation calculator with historical CPI data and projections.";
const staticFaqs = [
  { q: "What is the current inflation rate in 2026?", a: "Check the latest CPI data from the Bureau of Labor Statistics" },
  { q: "How does inflation affect my savings?", a: "Reduces purchasing power — $100 today buys less in 10 years" },
  { q: "What was the historical average inflation rate?", a: "Approximately 3.3% over the last 100 years" },
  { q: "How do I protect against inflation?", a: "Invest in assets that outpace inflation (stocks, real estate, TIPS)" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the current inflation rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check the latest CPI data from the Bureau of Labor Statistics"
            }
          },
          {
            "@type": "Question",
            "name": "How does inflation affect my savings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Reduces purchasing power — $100 today buys less in 10 years"
            }
          },
          {
            "@type": "Question",
            "name": "What was the historical average inflation rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Approximately 3.3% over the last 100 years"
            }
          },
          {
            "@type": "Question",
            "name": "How do I protect against inflation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Invest in assets that outpace inflation (stocks, real estate, TIPS)"
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

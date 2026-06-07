import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "hourly-wage-calculator-us";
const CALC_NAME = "Hourly Wage to Annual Salary Calculator";
const CALC_DESCRIPTION = "Convert hourly wage to annual salary instantly. Calculate weekly, monthly & yearly earnings. Free US wage calculator.";
const staticFaqs = [
  { q: "How much is $20/hour annually?", a: "$41,600 per year (40hr/week)" },
  { q: "How many work hours in a year?", a: "2,080 standard (52 weeks × 40 hours)" },
  { q: "What is the US minimum wage in 2026?", a: "$7.25 federal, varies by state" },
  { q: "Should I negotiate hourly or salary?", a: "Depends on overtime expectations" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much is $20/hour annually?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$41,600 per year (40hr/week)"
            }
          },
          {
            "@type": "Question",
            "name": "How many work hours in a year?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2,080 standard (52 weeks × 40 hours)"
            }
          },
          {
            "@type": "Question",
            "name": "What is the US minimum wage in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$7.25 federal, varies by state"
            }
          },
          {
            "@type": "Question",
            "name": "Should I negotiate hourly or salary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on overtime expectations"
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

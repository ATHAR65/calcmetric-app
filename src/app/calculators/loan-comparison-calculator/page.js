import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "loan-comparison-calculator";
const CALC_NAME = "Loan Comparison Calculator 2026 — Compare";
const CALC_DESCRIPTION = "Compare two loans side-by-side with monthly payment, total interest, APR, and total cost. Free 2026 loan comparison calculator.";
const staticFaqs = [
  { q: "What is the difference between APR and interest rate?", a: "APR includes fees and costs; interest rate is just the loan rate" },
  { q: "How does loan term affect total cost?", a: "Longer term = lower payment but more total interest" },
  { q: "What is a good personal loan rate in 2026?", a: "Rates vary by credit; typical range 6-36%" },
  { q: "Should I compare loans by APR or monthly payment?", a: "APR gives the truest picture of total loan cost" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between APR and interest rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "APR includes fees and costs; interest rate is just the loan rate"
            }
          },
          {
            "@type": "Question",
            "name": "How does loan term affect total cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Longer term = lower payment but more total interest"
            }
          },
          {
            "@type": "Question",
            "name": "What is a good personal loan rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rates vary by credit; typical range 6-36%"
            }
          },
          {
            "@type": "Question",
            "name": "Should I compare loans by APR or monthly payment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "APR gives the truest picture of total loan cost"
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

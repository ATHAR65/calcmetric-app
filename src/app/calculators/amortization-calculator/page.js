import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "amortization-calculator";
const CALC_NAME = "Amortization Schedule Calculator 2026";
const CALC_DESCRIPTION = "Generate a complete amortization schedule for any loan. Monthly payments, total interest, and year-by-year principal vs interest breakdown. Free calculator.";
const staticFaqs = [
  { q: "What is an amortization schedule?", a: "A table showing each payment's breakdown into principal and interest" },
  { q: "How does extra payment affect amortization?", a: "Extra principal payments reduce total interest and shorten the loan term" },
  { q: "What happens if I make bi-weekly payments?", a: "You make one extra payment per year, paying off the loan faster" },
  { q: "Is amortization the same for all loans?", a: "No — mortgages use standard amortization; some loans use simple interest" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an amortization schedule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A table showing each payment's breakdown into principal and interest"
            }
          },
          {
            "@type": "Question",
            "name": "How does extra payment affect amortization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Extra principal payments reduce total interest and shorten the loan term"
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I make bi-weekly payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You make one extra payment per year, paying off the loan faster"
            }
          },
          {
            "@type": "Question",
            "name": "Is amortization the same for all loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No — mortgages use standard amortization; some loans use simple interest"
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

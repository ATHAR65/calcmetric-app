import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "mortgage-calculator-uk";
const CALC_NAME = "Mortgage Calculator UK 2025–26";
const CALC_DESCRIPTION = "Calculate UK mortgage repayments, total interest, and stamp duty costs. Free 2025–26 UK mortgage calculator with affordability analysis.";
const staticFaqs = [
  { q: "How is stamp duty calculated in the UK?", a: "0% up to £250,000; 5% on portion £250,001-£925,000; higher rates above" },
  { q: "What is the UK mortgage borrowing limit?", a: "Typically 4.5x annual income" },
  { q: "What is the average UK mortgage rate in 2026?", a: "Varies — check current Bank of England base rate" },
  { q: "How does the mortgage term affect affordability?", a: "Longer term = lower monthly payment but more total interest" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is stamp duty calculated in the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "0% up to £250,000; 5% on portion £250,001-£925,000; higher rates above"
            }
          },
          {
            "@type": "Question",
            "name": "What is the UK mortgage borrowing limit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 4.5x annual income"
            }
          },
          {
            "@type": "Question",
            "name": "What is the average UK mortgage rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Varies — check current Bank of England base rate"
            }
          },
          {
            "@type": "Question",
            "name": "How does the mortgage term affect affordability?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Longer term = lower monthly payment but more total interest"
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

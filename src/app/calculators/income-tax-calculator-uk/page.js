import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "income-tax-calculator-uk";
const CALC_NAME = "UK Income Tax Calculator 2025–26";
const CALC_DESCRIPTION = "Estimate your UK income tax and National Insurance for 2025-26. Covers PAYE, self-employed & dividend income. Free.";
const staticFaqs = [
  { q: "What is the personal tax allowance in 2025-26?", a: "£12,570" },
  { q: "How much National Insurance do I pay?", a: "Depends on employment type and income" },
  { q: "What are the UK tax brackets for 2025-26?", a: "20% basic, 40% higher, 45% additional" },
  { q: "How is self-employed income taxed in UK?", a: "Income tax + Class 2 & 4 NI" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the personal tax allowance in 2025-26?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "£12,570"
            }
          },
          {
            "@type": "Question",
            "name": "How much National Insurance do I pay?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on employment type and income"
            }
          },
          {
            "@type": "Question",
            "name": "What are the UK tax brackets for 2025-26?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "20% basic, 40% higher, 45% additional"
            }
          },
          {
            "@type": "Question",
            "name": "How is self-employed income taxed in UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Income tax + Class 2 & 4 NI"
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

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "irs-mileage-deduction-calculator";
const CALC_NAME = "IRS Mileage Deduction Calculator 2026";
const CALC_DESCRIPTION = "Calculate your IRS mileage deduction for 2026. Business $0.70/mile, medical & charity rates included. Free calculator.";
const staticFaqs = [
  { q: "What is the IRS mileage rate for 2026?", a: "$0.70 per mile for business use" },
  { q: "Can W-2 employees deduct mileage?", a: "Generally no, since Tax Cuts and Jobs Act 2017" },
  { q: "How do I track mileage for taxes?", a: "Use MileIQ, Stride, or a mileage log spreadsheet" },
  { q: "Can I deduct actual car expenses instead of mileage?", a: "Yes, but must choose one method consistently" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the IRS mileage rate for 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$0.70 per mile for business use"
            }
          },
          {
            "@type": "Question",
            "name": "Can W-2 employees deduct mileage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally no, since Tax Cuts and Jobs Act 2017"
            }
          },
          {
            "@type": "Question",
            "name": "How do I track mileage for taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use MileIQ, Stride, or a mileage log spreadsheet"
            }
          },
          {
            "@type": "Question",
            "name": "Can I deduct actual car expenses instead of mileage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but must choose one method consistently"
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

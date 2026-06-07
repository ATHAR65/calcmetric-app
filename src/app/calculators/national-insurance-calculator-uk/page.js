import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "national-insurance-calculator-uk";
const CALC_NAME = "National Insurance Calculator UK 2025–26";
const CALC_DESCRIPTION = "Calculate UK National Insurance for 2025–26. Covers Class 1 employee, Class 2 and Class 4 self-employed NI, and employer contributions. Free HMRC tool.";
const staticFaqs = [
  { q: "What is the Class 1 NI rate for employees?", a: "8% on earnings £12,570-£50,270; 2% above £50,270" },
  { q: "What is the Class 4 NI rate for self-employed?", a: "6% on profits £12,570-£50,270; 2% above £50,270" },
  { q: "Do I pay NI if I earn under £12,570?", a: "No, NI only applies above the threshold" },
  { q: "What is the employer NI rate?", a: "Employers pay 13.8% on earnings above £9,100" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Class 1 NI rate for employees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "8% on earnings £12,570-£50,270; 2% above £50,270"
            }
          },
          {
            "@type": "Question",
            "name": "What is the Class 4 NI rate for self-employed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "6% on profits £12,570-£50,270; 2% above £50,270"
            }
          },
          {
            "@type": "Question",
            "name": "Do I pay NI if I earn under £12,570?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, NI only applies above the threshold"
            }
          },
          {
            "@type": "Question",
            "name": "What is the employer NI rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Employers pay 13.8% on earnings above £9,100"
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

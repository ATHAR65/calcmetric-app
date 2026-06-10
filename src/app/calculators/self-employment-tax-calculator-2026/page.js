import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "self-employment-tax-calculator-2026";
const CALC_NAME = "Self-Employment Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate your self-employment tax instantly for 2026. Covers SE tax, deductions & quarterly payments. Free tool.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is the self-employment tax rate in 2026?", a: "15.3% on net earnings" },
  { q: "Can I deduct self-employment tax?", a: "Yes, 50% is deductible from gross income" },
  { q: "Do I pay SE tax if I earn under $600?", a: "Yes if net earnings exceed $400" },
  { q: "How do I pay self-employment tax?", a: "Quarterly estimated payments via Form 1040-ES" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the self-employment tax rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "15.3% on net earnings"
            }
          },
          {
            "@type": "Question",
            "name": "Can I deduct self-employment tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 50% is deductible from gross income"
            }
          },
          {
            "@type": "Question",
            "name": "Do I pay SE tax if I earn under $600?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes if net earnings exceed $400"
            }
          },
          {
            "@type": "Question",
            "name": "How do I pay self-employment tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Quarterly estimated payments via Form 1040-ES"
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

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "residential-solar-panel-roi";
const CALC_NAME = "Solar Panel ROI Calculator 2026 — Payback";
const CALC_DESCRIPTION = "Calculate your solar panel payback period, 25-year savings, and ROI with the 30% federal tax credit. Free 2026 solar ROI calculator for homeowners.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "Is solar worth it in 2026?", a: "With the 30% federal tax credit, most homes break even in 6-10 years" },
  { q: "What is the payback period for solar panels?", a: "Typically 6-12 years depending on location and electricity costs" },
  { q: "How long do solar panels last?", a: "25-30 years with gradual efficiency decline" },
  { q: "Does solar increase home value?", a: "Yes, studies show 3-4% increase in property value" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is solar worth it in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With the 30% federal tax credit, most homes break even in 6-10 years"
            }
          },
          {
            "@type": "Question",
            "name": "What is the payback period for solar panels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 6-12 years depending on location and electricity costs"
            }
          },
          {
            "@type": "Question",
            "name": "How long do solar panels last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "25-30 years with gradual efficiency decline"
            }
          },
          {
            "@type": "Question",
            "name": "Does solar increase home value?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, studies show 3-4% increase in property value"
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

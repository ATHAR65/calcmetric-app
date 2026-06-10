import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";
const CALC_SLUG = "gig-economy-net-income-calculator";
const CALC_NAME = "Gig Economy Net Income Calculator 2026";
const CALC_DESCRIPTION = "Calculate your actual take-home pay after expenses and taxes as a gig worker. Supports Uber, Lyft, DoorDash, Instacart, and more. Free 2026 gig economy calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "How do I calculate net income from gig work?", a: "Gross − expenses − SE tax − income tax" },
  { q: "Is gig income taxed more than regular income?", a: "Effectively yes, due to SE tax" },
  { q: "What expenses can gig workers deduct?", a: "Mileage, phone, equipment, platform fees" },
  { q: "Do I need to track income from multiple gigs?", a: "Yes, report all combined" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I calculate net income from gig work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gross − expenses − SE tax − income tax"
            }
          },
          {
            "@type": "Question",
            "name": "Is gig income taxed more than regular income?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Effectively yes, due to SE tax"
            }
          },
          {
            "@type": "Question",
            "name": "What expenses can gig workers deduct?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mileage, phone, equipment, platform fees"
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to track income from multiple gigs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, report all combined"
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

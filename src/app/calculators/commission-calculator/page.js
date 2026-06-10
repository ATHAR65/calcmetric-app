import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "commission-calculator";
const CALC_NAME = "Commission Calculator 2026";
const CALC_DESCRIPTION = "Calculate real estate agent commission earnings after brokerage splits. Free 2026 commission calculator with split model comparison.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is a typical real estate commission rate?", a: "5–6% of sale price, split between buyer's and seller's agents" },
  { q: "How do brokerage splits work?", a: "Agent receives a percentage of commission (e.g., 70/30 split)" },
  { q: "What is a 100% commission model?", a: "Agent keeps all commission but pays a monthly desk fee" },
  { q: "How much does a real estate agent earn per sale?", a: "Varies — use the calculator with your commission rate and split" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a typical real estate commission rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "5–6% of sale price, split between buyer's and seller's agents"
            }
          },
          {
            "@type": "Question",
            "name": "How do brokerage splits work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agent receives a percentage of commission (e.g., 70/30 split)"
            }
          },
          {
            "@type": "Question",
            "name": "What is a 100% commission model?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agent keeps all commission but pays a monthly desk fee"
            }
          },
          {
            "@type": "Question",
            "name": "How much does a real estate agent earn per sale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Varies — use the calculator with your commission rate and split"
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

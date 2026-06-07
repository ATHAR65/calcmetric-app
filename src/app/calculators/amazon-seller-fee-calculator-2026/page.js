import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "amazon-seller-fee-calculator-2026";
const CALC_NAME = "Amazon Seller Fee Calculator 2026 — FBA";
const CALC_DESCRIPTION = "Calculate Amazon FBA fees, referral fees & net profit per product. Free Amazon seller fee estimator. No signup.";
const staticFaqs = [
  { q: "What is Amazon's referral fee?", a: "Typically 8–15% depending on category" },
  { q: "How are Amazon FBA fees calculated?", a: "Based on product size tier and weight" },
  { q: "Is Amazon FBA worth it in 2026?", a: "Yes for most sellers at right margins" },
  { q: "What is the Individual vs Professional plan?", a: "Individual $0.99/sale; Professional $39.99/mo" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Amazon's referral fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 8–15% depending on category"
            }
          },
          {
            "@type": "Question",
            "name": "How are Amazon FBA fees calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Based on product size tier and weight"
            }
          },
          {
            "@type": "Question",
            "name": "Is Amazon FBA worth it in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes for most sellers at right margins"
            }
          },
          {
            "@type": "Question",
            "name": "What is the Individual vs Professional plan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Individual $0.99/sale; Professional $39.99/mo"
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

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "paypal-fee-calculator";
const CALC_NAME = "PayPal Fee Calculator 2026 — PayPal Fees";
const CALC_DESCRIPTION = "Calculate exact PayPal fees for any transaction type. Personal, business & international fees. Free, instant results.";
const staticFaqs = [
  { q: "What are PayPal's fees for selling?", a: "3.49% + fixed fee for G&S transactions" },
  { q: "Does PayPal charge fees for friends and family?", a: "No fees for F&F domestic USD" },
  { q: "What is PayPal's international fee?", a: "Additional 1.5%+ for cross-border" },
  { q: "Can I pass PayPal fees to customers?", a: "Yes, allowed in most regions" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are PayPal's fees for selling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3.49% + fixed fee for G&S transactions"
            }
          },
          {
            "@type": "Question",
            "name": "Does PayPal charge fees for friends and family?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No fees for F&F domestic USD"
            }
          },
          {
            "@type": "Question",
            "name": "What is PayPal's international fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Additional 1.5%+ for cross-border"
            }
          },
          {
            "@type": "Question",
            "name": "Can I pass PayPal fees to customers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, allowed in most regions"
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

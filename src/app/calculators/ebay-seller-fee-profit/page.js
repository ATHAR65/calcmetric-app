import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "ebay-seller-fee-profit";
const CALC_NAME = "eBay Seller Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate eBay final value fees and true net profit on any sale. Covers all categories and shipping. Free tool.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is eBay's final value fee in 2026?", a: "~13.25% for most categories + $0.30/order" },
  { q: "Does eBay charge fees on shipping?", a: "Yes, FVF applies to shipping amount too" },
  { q: "How do I increase eBay profit margins?", a: "Optimize pricing, use free listings allowance" },
  { q: "What is eBay Managed Payments?", a: "eBay handles all payments directly, no PayPal needed" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is eBay's final value fee in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "~13.25% for most categories + $0.30/order"
            }
          },
          {
            "@type": "Question",
            "name": "Does eBay charge fees on shipping?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, FVF applies to shipping amount too"
            }
          },
          {
            "@type": "Question",
            "name": "How do I increase eBay profit margins?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Optimize pricing, use free listings allowance"
            }
          },
          {
            "@type": "Question",
            "name": "What is eBay Managed Payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "eBay handles all payments directly, no PayPal needed"
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

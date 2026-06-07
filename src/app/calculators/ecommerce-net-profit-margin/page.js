import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "ecommerce-net-profit-margin";
const CALC_NAME = "E-Commerce Profit Margin Calculator 2026";
const CALC_DESCRIPTION = "Calculate your real e-commerce profit margin after platform fees, COGS & shipping. Works for Amazon, Shopify, eBay & Etsy.";
const staticFaqs = [
  { q: "What is a good profit margin for e-commerce?", a: "10–30% is typical; 20%+ is healthy" },
  { q: "How do I calculate net profit for online selling?", a: "Revenue minus all costs and fees" },
  { q: "What fees should I include in profit calculation?", a: "Platform fees, payment fees, shipping, returns" },
  { q: "What is the difference between gross and net margin?", a: "Gross excludes overhead; net includes all costs" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a good profit margin for e-commerce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "10–30% is typical; 20%+ is healthy"
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate net profit for online selling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Revenue minus all costs and fees"
            }
          },
          {
            "@type": "Question",
            "name": "What fees should I include in profit calculation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Platform fees, payment fees, shipping, returns"
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between gross and net margin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gross excludes overhead; net includes all costs"
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

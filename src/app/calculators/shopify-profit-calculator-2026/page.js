import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "shopify-profit-calculator-2026";
const CALC_NAME = "Shopify Profit Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Shopify store profit after fees, COGS & shipping. Compare Shopify plans. Free profit estimator.";
const staticFaqs = [
  { q: "What are Shopify's transaction fees?", a: "0% with Shopify Payments; 0.5–2% with external gateways" },
  { q: "How much does Shopify cost per month?", a: "Basic $39, Shopify $105, Advanced $399" },
  { q: "Is Shopify profitable for small businesses?", a: "Yes if margins are managed well" },
  { q: "What payment processor is cheapest with Shopify?", a: "Shopify Payments to avoid extra fees" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are Shopify's transaction fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "0% with Shopify Payments; 0.5–2% with external gateways"
            }
          },
          {
            "@type": "Question",
            "name": "How much does Shopify cost per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic $39, Shopify $105, Advanced $399"
            }
          },
          {
            "@type": "Question",
            "name": "Is Shopify profitable for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes if margins are managed well"
            }
          },
          {
            "@type": "Question",
            "name": "What payment processor is cheapest with Shopify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shopify Payments to avoid extra fees"
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

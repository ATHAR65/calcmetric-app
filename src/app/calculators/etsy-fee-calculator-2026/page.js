import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "etsy-fee-calculator-2026";
const CALC_NAME = "Etsy Fee Calculator 2026 — Etsy Fees";
const CALC_DESCRIPTION = "Calculate total Etsy fees per sale including listing, transaction & payment processing. Free Etsy profit calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What percentage does Etsy take from each sale?", a: "~9.75% + $0.20 listing + payment fees" },
  { q: "Does Etsy charge listing fees?", a: "Yes, $0.20 per listing, renewed every 4 months or when sold" },
  { q: "What is Etsy's transaction fee in 2026?", a: "6.5% of total sale price including shipping" },
  { q: "Is Etsy Plus worth it?", a: "$10/mo — only worth it at higher sales volumes" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What percentage does Etsy take from each sale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "~9.75% + $0.20 listing + payment fees"
            }
          },
          {
            "@type": "Question",
            "name": "Does Etsy charge listing fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, $0.20 per listing, renewed every 4 months or when sold"
            }
          },
          {
            "@type": "Question",
            "name": "What is Etsy's transaction fee in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "6.5% of total sale price including shipping"
            }
          },
          {
            "@type": "Question",
            "name": "Is Etsy Plus worth it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$10/mo — only worth it at higher sales volumes"
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

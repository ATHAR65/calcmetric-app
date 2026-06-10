import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "rental-property-roi-calculator";
const CALC_NAME = "Rental Property ROI Calculator 2026 — ROI";
const CALC_DESCRIPTION = "Calculate rental property cap rate, cash-on-cash return, NOI, and the 1% rule. Free 2026 rental property ROI calculator for real estate investors.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is a good cap rate for rental property?", a: "4-10% depending on market; higher in secondary markets" },
  { q: "What is cash-on-cash return?", a: "Annual pre-tax cash flow divided by total cash invested" },
  { q: "What is the 1% rule in real estate?", a: "Monthly rent should be at least 1% of purchase price" },
  { q: "What is NOI in real estate?", a: "Net Operating Income = rental income minus operating expenses" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a good cap rate for rental property?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "4-10% depending on market; higher in secondary markets"
            }
          },
          {
            "@type": "Question",
            "name": "What is cash-on-cash return?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Annual pre-tax cash flow divided by total cash invested"
            }
          },
          {
            "@type": "Question",
            "name": "What is the 1% rule in real estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Monthly rent should be at least 1% of purchase price"
            }
          },
          {
            "@type": "Question",
            "name": "What is NOI in real estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Net Operating Income = rental income minus operating expenses"
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

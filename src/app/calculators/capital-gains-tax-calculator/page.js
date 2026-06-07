import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "capital-gains-tax-calculator";
const CALC_NAME = "Capital Gains Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate your 2026 capital gains tax. Covers short-term, long-term rates, NIIT surcharge, and state taxes for stocks, crypto, and real estate.";
const staticFaqs = [
  { q: "What is the difference between short-term and long-term capital gains?", a: "Short-term (≤1 year) taxed as ordinary income. Long-term (>1 year) taxed at 0%, 15%, or 20%." },
  { q: "How does the 3.8% Net Investment Income Tax work?", a: "NIIT applies when MAGI exceeds $200K (single) or $250K (MFJ)" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between short-term and long-term capital gains?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Short-term (≤1 year) taxed as ordinary income. Long-term (>1 year) taxed at 0%, 15%, or 20%."
            }
          },
          {
            "@type": "Question",
            "name": "How does the 3.8% Net Investment Income Tax work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NIIT applies when MAGI exceeds $200K (single) or $250K (MFJ)"
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

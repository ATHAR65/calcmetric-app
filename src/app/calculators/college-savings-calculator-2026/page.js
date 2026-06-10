import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "college-savings-calculator-2026";
const CALC_NAME = "College Savings Calculator 2026 — 529 Plan";
const CALC_DESCRIPTION = "Calculate 529 plan growth, project college costs, and find your monthly savings target. Free 2026 college savings calculator with state tax deduction estimates.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "How much should I save for college?", a: "Depends on your child's age and target school type — use the calculator" },
  { q: "What is a 529 plan?", a: "State-sponsored education savings account with tax-free growth for qualified expenses" },
  { q: "What is the average cost of college in 2026?", a: "$25,000-$60,000/year depending on public vs private" },
  { q: "Can I use 529 funds for K-12 education?", a: "Yes, up to $10,000/year per beneficiary" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much should I save for college?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on your child's age and target school type — use the calculator"
            }
          },
          {
            "@type": "Question",
            "name": "What is a 529 plan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "State-sponsored education savings account with tax-free growth for qualified expenses"
            }
          },
          {
            "@type": "Question",
            "name": "What is the average cost of college in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$25,000-$60,000/year depending on public vs private"
            }
          },
          {
            "@type": "Question",
            "name": "Can I use 529 funds for K-12 education?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, up to $10,000/year per beneficiary"
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

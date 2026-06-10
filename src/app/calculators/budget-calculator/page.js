import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "budget-calculator";
const CALC_NAME = "Budget Calculator 2026 — Budget";
const CALC_DESCRIPTION = "Create a comprehensive monthly budget with 50/30/20 rule analysis. Free 2026 budget calculator with visual breakdowns for US households.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What is the 50/30/20 budget rule?", a: "50% needs, 30% wants, 20% savings/debt" },
  { q: "How much should I save each month?", a: "At least 20% of your after-tax income" },
  { q: "What counts as a need vs a want?", a: "Needs: housing, food, utilities, transport. Wants: dining, travel, entertainment." },
  { q: "How do I fix a budget deficit?", a: "Cut wants first, then find ways to reduce fixed costs" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the 50/30/20 budget rule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "50% needs, 30% wants, 20% savings/debt"
            }
          },
          {
            "@type": "Question",
            "name": "How much should I save each month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At least 20% of your after-tax income"
            }
          },
          {
            "@type": "Question",
            "name": "What counts as a need vs a want?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Needs: housing, food, utilities, transport. Wants: dining, travel, entertainment."
            }
          },
          {
            "@type": "Question",
            "name": "How do I fix a budget deficit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cut wants first, then find ways to reduce fixed costs"
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

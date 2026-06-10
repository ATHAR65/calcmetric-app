import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";
const CALC_SLUG = "student-loan-payoff-calculator";
const CALC_NAME = "Student Loan Payoff Calculator 2026";
const CALC_DESCRIPTION = "Calculate your student loan payments, total interest, and payoff timeline. See how extra payments save thousands on federal and private student loans. Free 2026 calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "Can I pay off student loans early without penalty?", a: "Federal loans: yes, no prepayment penalty" },
  { q: "Should I refinance my student loans?", a: "If you can get a lower rate, but you'll lose federal protections" },
  { q: "What is the standard student loan repayment term?", a: "10 years for most federal loans" },
  { q: "How do extra payments affect student loan payoff?", a: "Reduces total interest and shortens payoff timeline" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I pay off student loans early without penalty?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Federal loans: yes, no prepayment penalty"
            }
          },
          {
            "@type": "Question",
            "name": "Should I refinance my student loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you can get a lower rate, but you'll lose federal protections"
            }
          },
          {
            "@type": "Question",
            "name": "What is the standard student loan repayment term?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "10 years for most federal loans"
            }
          },
          {
            "@type": "Question",
            "name": "How do extra payments affect student loan payoff?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Reduces total interest and shortens payoff timeline"
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

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";
const CALC_SLUG = "small-business-tax-deduction-calculator";
const CALC_NAME = "Small Business Tax Deduction Calculator";
const CALC_DESCRIPTION = "Calculate your small business tax deductions, self-employment tax, QBI deduction, and estimated quarterly payments for 2026. Free tool for self-employed individuals.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "What can I deduct as a small business owner?", a: "Home office, vehicle, equipment, salaries, software" },
  { q: "What is the Section 179 deduction limit in 2026?", a: "Check current IRS limit (~$1.2M)" },
  { q: "Can I deduct my home office?", a: "Yes if used exclusively and regularly for business" },
  { q: "What is the QBI deduction?", a: "Up to 20% of qualified business income for pass-throughs" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What can I deduct as a small business owner?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Home office, vehicle, equipment, salaries, software"
            }
          },
          {
            "@type": "Question",
            "name": "What is the Section 179 deduction limit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check current IRS limit (~$1.2M)"
            }
          },
          {
            "@type": "Question",
            "name": "Can I deduct my home office?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes if used exclusively and regularly for business"
            }
          },
          {
            "@type": "Question",
            "name": "What is the QBI deduction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Up to 20% of qualified business income for pass-throughs"
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

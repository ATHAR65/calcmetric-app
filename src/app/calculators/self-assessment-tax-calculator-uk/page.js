import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";



const CALC_SLUG = "self-assessment-tax-calculator-uk";
const CALC_NAME = "Self Assessment Tax Calculator UK 2025–26";
const CALC_DESCRIPTION = "Estimate your UK Self Assessment tax bill for 2025–26. Covers income tax, Class 2 & 4 NI, and payments on account. Free HMRC-ready calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });
const staticFaqs = [
  { q: "When is the UK Self Assessment deadline?", a: "Online filing: Jan 31 following tax year end" },
  { q: "Do I need to file a Self Assessment tax return?", a: "If self-employed income over £1,000 or other untaxed income" },
  { q: "What are payments on account?", a: "Advance payments toward next year's tax bill, due Jan 31 and Jul 31" },
  { q: "Can I claim expenses on Self Assessment?", a: "Yes — allowable expenses reduce your taxable profit" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When is the UK Self Assessment deadline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Online filing: Jan 31 following tax year end"
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to file a Self Assessment tax return?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If self-employed income over £1,000 or other untaxed income"
            }
          },
          {
            "@type": "Question",
            "name": "What are payments on account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Advance payments toward next year's tax bill, due Jan 31 and Jul 31"
            }
          },
          {
            "@type": "Question",
            "name": "Can I claim expenses on Self Assessment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — allowable expenses reduce your taxable profit"
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

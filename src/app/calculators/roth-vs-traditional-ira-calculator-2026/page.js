import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "roth-vs-traditional-ira-calculator-2026";
const CALC_NAME = "Roth vs Traditional IRA Calculator 2026";
const CALC_DESCRIPTION = "Compare Roth IRA vs Traditional IRA side-by-side. See after-tax values, tax savings now, and which saves you more. Free IRA calculator.";
const staticFaqs = [
  { q: "What is the difference between Roth and Traditional IRA?", a: "Roth: post-tax contributions, tax-free withdrawals. Traditional: pre-tax contributions, taxed on withdrawal." },
  { q: "What are the IRA contribution limits in 2026?", a: "$7,000 ($8,000 if age 50+)" },
  { q: "Who should choose a Roth IRA?", a: "Those who expect higher taxes in retirement" },
  { q: "Can I have both a Roth and Traditional IRA?", a: "Yes, but combined contributions cannot exceed the annual limit" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between Roth and Traditional IRA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roth: post-tax contributions, tax-free withdrawals. Traditional: pre-tax contributions, taxed on withdrawal."
            }
          },
          {
            "@type": "Question",
            "name": "What are the IRA contribution limits in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$7,000 ($8,000 if age 50+)"
            }
          },
          {
            "@type": "Question",
            "name": "Who should choose a Roth IRA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Those who expect higher taxes in retirement"
            }
          },
          {
            "@type": "Question",
            "name": "Can I have both a Roth and Traditional IRA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but combined contributions cannot exceed the annual limit"
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

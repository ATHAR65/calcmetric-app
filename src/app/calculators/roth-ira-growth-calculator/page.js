import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "roth-ira-growth-calculator";
const CALC_NAME = "Roth IRA Growth Calculator 2026";
const CALC_DESCRIPTION = "Project your Roth IRA growth with compound interest and tax-free withdrawals. Free 2026 Roth IRA growth calculator.";
const staticFaqs = [
  { q: "What is the Roth IRA contribution limit in 2026?", a: "$7,000 ($8,000 if age 50+)" },
  { q: "Are Roth IRA withdrawals really tax-free?", a: "Yes, if account held for 5+ years and age 59½+" },
  { q: "Can I contribute to a Roth IRA if I have a 401(k)?", a: "Yes, but income limits may apply" },
  { q: "What is the backdoor Roth IRA strategy?", a: "Contribute to Traditional IRA, then convert to Roth" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Roth IRA contribution limit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$7,000 ($8,000 if age 50+)"
            }
          },
          {
            "@type": "Question",
            "name": "Are Roth IRA withdrawals really tax-free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if account held for 5+ years and age 59½+"
            }
          },
          {
            "@type": "Question",
            "name": "Can I contribute to a Roth IRA if I have a 401(k)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but income limits may apply"
            }
          },
          {
            "@type": "Question",
            "name": "What is the backdoor Roth IRA strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contribute to Traditional IRA, then convert to Roth"
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

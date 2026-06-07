import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "401k-retirement-calculator";
const CALC_NAME = "401(k) Retirement Calculator 2026";
const CALC_DESCRIPTION = "Project your 401(k) growth with employer matching and compound interest. Free retirement calculator with year-by-year projections.";
const staticFaqs = [
  { q: "What is the 401(k) contribution limit in 2026?", a: "$23,500 employee deferral ($31,000 with catch-up)" },
  { q: "How does employer matching work?", a: "Employer matches a percentage of your contributions up to a limit" },
  { q: "What happens to my 401(k) when I change jobs?", a: "Can roll over to IRA or new employer's plan" },
  { q: "When can I withdraw from my 401(k) without penalty?", a: "Age 59½ for penalty-free withdrawals" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the 401(k) contribution limit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$23,500 employee deferral ($31,000 with catch-up)"
            }
          },
          {
            "@type": "Question",
            "name": "How does employer matching work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Employer matches a percentage of your contributions up to a limit"
            }
          },
          {
            "@type": "Question",
            "name": "What happens to my 401(k) when I change jobs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Can roll over to IRA or new employer's plan"
            }
          },
          {
            "@type": "Question",
            "name": "When can I withdraw from my 401(k) without penalty?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Age 59½ for penalty-free withdrawals"
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

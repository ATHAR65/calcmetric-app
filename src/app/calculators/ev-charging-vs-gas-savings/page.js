import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "ev-charging-vs-gas-savings";
const CALC_NAME = "EV vs Gas Savings Calculator 2026 — Costs";
const CALC_DESCRIPTION = "Calculate annual savings switching from gas to electric vehicle. Compare charging vs fuel costs. Free EV savings calculator.";
const staticFaqs = [
  { q: "How much do you save driving an EV vs gas?", a: "Average $1,000-$2,500/year on fuel" },
  { q: "What is the EV tax credit in 2026?", a: "Up to $7,500 federal credit for qualifying vehicles" },
  { q: "How long to recoup the extra cost of an EV?", a: "Typically 3-5 years in fuel savings" },
  { q: "Is home charging cheaper than public charging?", a: "Yes, significantly cheaper at home rates" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much do you save driving an EV vs gas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Average $1,000-$2,500/year on fuel"
            }
          },
          {
            "@type": "Question",
            "name": "What is the EV tax credit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Up to $7,500 federal credit for qualifying vehicles"
            }
          },
          {
            "@type": "Question",
            "name": "How long to recoup the extra cost of an EV?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 3-5 years in fuel savings"
            }
          },
          {
            "@type": "Question",
            "name": "Is home charging cheaper than public charging?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, significantly cheaper at home rates"
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

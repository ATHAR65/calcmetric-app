import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "california-1099-tax-calculator";
const CALC_NAME = "California 1099 Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate your California 1099 freelance taxes for 2026 — federal self-employment tax (15.3%), income tax brackets, and CA state income tax rates up to 13.3%. Includes SDI and quarterly payment estimates.";
const staticFaqs = [
  { q: "How much is California self-employment tax?", a: "15.3% federal SE + CA state income tax" },
  { q: "Does California have state income tax for freelancers?", a: "Yes, 1% to 13.3% progressive" },
  { q: "When are California estimated taxes due?", a: "April 15, June 15, Sep 15, Jan 15" },
  { q: "What is SDI tax in California for self-employed?", a: "Optional for self-employed in CA" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much is California self-employment tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "15.3% federal SE + CA state income tax"
            }
          },
          {
            "@type": "Question",
            "name": "Does California have state income tax for freelancers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 1% to 13.3% progressive"
            }
          },
          {
            "@type": "Question",
            "name": "When are California estimated taxes due?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "April 15, June 15, Sep 15, Jan 15"
            }
          },
          {
            "@type": "Question",
            "name": "What is SDI tax in California for self-employed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Optional for self-employed in CA"
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

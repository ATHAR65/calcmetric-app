import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "doordash-tax-estimator";
const CALC_NAME = "DoorDash Tax Calculator 2026";
const CALC_DESCRIPTION = "Estimate your DoorDash taxes instantly. Calculate SE tax, quarterly payments & deductions. Free, no signup.";
const staticFaqs = [
  { q: "Does DoorDash take out taxes?", a: "No, you pay yourself as independent contractor" },
  { q: "How much to save for DoorDash taxes?", a: "25–30% of every payout" },
  { q: "When are quarterly taxes due?", a: "April 15, June 16, Sep 15, Jan 15" },
  { q: "What can I deduct as a Dasher?", a: "Mileage, phone, equipment" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does DoorDash take out taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you pay yourself as independent contractor"
            }
          },
          {
            "@type": "Question",
            "name": "How much to save for DoorDash taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "25–30% of every payout"
            }
          },
          {
            "@type": "Question",
            "name": "When are quarterly taxes due?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "April 15, June 16, Sep 15, Jan 15"
            }
          },
          {
            "@type": "Question",
            "name": "What can I deduct as a Dasher?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mileage, phone, equipment"
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

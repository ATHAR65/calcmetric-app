import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "stripe-fee-merchant-calculator";
const CALC_NAME = "Stripe Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate exact Stripe fees per transaction instantly. See your net payout after 2.9% + 30¢. Free, no signup.";
const staticFaqs = [
  { q: "What does Stripe charge per transaction?", a: "2.9% + $0.30 for standard cards" },
  { q: "How does Stripe charge for international cards?", a: "Additional 1.5% for international" },
  { q: "Is Stripe cheaper than PayPal?", a: "Similar rates; depends on use case" },
  { q: "Does Stripe charge monthly fees?", a: "No monthly fee on standard plan" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does Stripe charge per transaction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2.9% + $0.30 for standard cards"
            }
          },
          {
            "@type": "Question",
            "name": "How does Stripe charge for international cards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Additional 1.5% for international"
            }
          },
          {
            "@type": "Question",
            "name": "Is Stripe cheaper than PayPal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Similar rates; depends on use case"
            }
          },
          {
            "@type": "Question",
            "name": "Does Stripe charge monthly fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No monthly fee on standard plan"
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

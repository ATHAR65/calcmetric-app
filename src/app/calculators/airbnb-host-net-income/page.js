import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "airbnb-host-net-income";
const CALC_NAME = "Airbnb Host Net Income Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Airbnb net income after host fees, cleaning costs & taxes. Free Airbnb profit estimator for hosts.";
const staticFaqs = [
  { q: "How much does Airbnb charge hosts?", a: "3% standard split or up to 16% host-only" },
  { q: "Do I pay tax on Airbnb income?", a: "Yes, after 14-day rule if applicable" },
  { q: "What expenses can Airbnb hosts deduct?", a: "Mortgage interest, utilities, cleaning, depreciation" },
  { q: "What is the 14-day Airbnb tax rule?", a: "Renting under 14 days = tax-free in the US" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does Airbnb charge hosts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3% standard split or up to 16% host-only"
            }
          },
          {
            "@type": "Question",
            "name": "Do I pay tax on Airbnb income?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, after 14-day rule if applicable"
            }
          },
          {
            "@type": "Question",
            "name": "What expenses can Airbnb hosts deduct?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mortgage interest, utilities, cleaning, depreciation"
            }
          },
          {
            "@type": "Question",
            "name": "What is the 14-day Airbnb tax rule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Renting under 14 days = tax-free in the US"
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

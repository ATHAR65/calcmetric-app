import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "vat-calculator-uk";
const CALC_NAME = "VAT Calculator UK 2026 — VAT";
const CALC_DESCRIPTION = "Add or remove UK VAT at 20%, 5% or 0% instantly. Free VAT calculator for businesses and freelancers. No signup.";
const staticFaqs = [
  { q: "What is the UK VAT rate in 2026?", a: "Standard rate is 20%" },
  { q: "How do I calculate VAT from a gross price?", a: "Divide by 1.20 to find net" },
  { q: "When must I register for VAT in the UK?", a: "When turnover exceeds £90,000" },
  { q: "Can I reclaim VAT as a business?", a: "Yes, if VAT registered" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the UK VAT rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard rate is 20%"
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate VAT from a gross price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Divide by 1.20 to find net"
            }
          },
          {
            "@type": "Question",
            "name": "When must I register for VAT in the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When turnover exceeds £90,000"
            }
          },
          {
            "@type": "Question",
            "name": "Can I reclaim VAT as a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if VAT registered"
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

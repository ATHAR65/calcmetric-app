import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "crypto-tax-calculator-2026";
const CALC_NAME = "Crypto Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate your crypto capital gains tax for 2026. Covers short & long-term rates, income tax, and NFTs. Free tool.";
const staticFaqs = [
  { q: "Do I pay tax on crypto in the US?", a: "Yes, crypto is treated as property by IRS" },
  { q: "What is the crypto capital gains tax rate?", a: "0%, 15%, or 20% long-term; income rates short-term" },
  { q: "Do I owe tax if I didn't sell crypto?", a: "Generally no, only realized gains are taxed" },
  { q: "How do I report crypto on taxes?", a: "Schedule D + Form 8949" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I pay tax on crypto in the US?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, crypto is treated as property by IRS"
            }
          },
          {
            "@type": "Question",
            "name": "What is the crypto capital gains tax rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "0%, 15%, or 20% long-term; income rates short-term"
            }
          },
          {
            "@type": "Question",
            "name": "Do I owe tax if I didn't sell crypto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally no, only realized gains are taxed"
            }
          },
          {
            "@type": "Question",
            "name": "How do I report crypto on taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Schedule D + Form 8949"
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

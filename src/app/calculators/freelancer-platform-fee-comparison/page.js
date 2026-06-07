import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "freelancer-platform-fee-comparison";
const CALC_NAME = "Freelancer Platform Fee Comparison 2026";
const CALC_DESCRIPTION = "Compare freelancer platform fees across Upwork, Fiverr, and Toptal. Calculate your true net earnings after service fees and payment processing. Free tool.";
const staticFaqs = [
  { q: "Which freelancer platform has the lowest fees?", a: "Toptal has zero service fee for freelancers; Upwork and Fiverr charge 10-20%" },
  { q: "How do Upwork fees work?", a: "20% for first $500/client, then 5% for earnings over $10,000/client" },
  { q: "How do Fiverr fees work?", a: "Fiverr takes 20% of every transaction" },
  { q: "Does Toptal charge freelancers?", a: "Toptal does not charge freelancers — clients pay the platform fee" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which freelancer platform has the lowest fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Toptal has zero service fee for freelancers; Upwork and Fiverr charge 10-20%"
            }
          },
          {
            "@type": "Question",
            "name": "How do Upwork fees work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "20% for first $500/client, then 5% for earnings over $10,000/client"
            }
          },
          {
            "@type": "Question",
            "name": "How do Fiverr fees work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fiverr takes 20% of every transaction"
            }
          },
          {
            "@type": "Question",
            "name": "Does Toptal charge freelancers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Toptal does not charge freelancers — clients pay the platform fee"
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

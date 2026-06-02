import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the current inflation rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check the latest CPI data from the Bureau of Labor Statistics"
            }
          },
          {
            "@type": "Question",
            "name": "How does inflation affect my savings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Reduces purchasing power — $100 today buys less in 10 years"
            }
          },
          {
            "@type": "Question",
            "name": "What was the historical average inflation rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Approximately 3.3% over the last 100 years"
            }
          },
          {
            "@type": "Question",
            "name": "How do I protect against inflation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Invest in assets that outpace inflation (stocks, real estate, TIPS)"
            }
          }
        ]
      };

  return (
    <>
      <SchemaMarkup data={[faqSchema]} />
      <Calculator />
    </>
  );
}

import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is a mortgage payment calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Based on principal, rate, and term using amortization formula"
            }
          },
          {
            "@type": "Question",
            "name": "What is a good mortgage rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Varies by credit score and market conditions"
            }
          },
          {
            "@type": "Question",
            "name": "What is PMI and when is it required?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Private Mortgage Insurance required with less than 20% down"
            }
          },
          {
            "@type": "Question",
            "name": "How does loan term affect monthly payment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shorter term = higher payment but less total interest"
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

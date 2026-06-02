import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much house can I afford on $80,000 salary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roughly $280,000–$320,000"
            }
          },
          {
            "@type": "Question",
            "name": "What is the 28/36 debt-to-income rule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Housing ≤28% of gross; total debt ≤36%"
            }
          },
          {
            "@type": "Question",
            "name": "How much down payment do I need for a house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Minimum 3–3.5% for conventional/FHA"
            }
          },
          {
            "@type": "Question",
            "name": "Does pre-approval affect my credit score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Small temporary impact from hard inquiry"
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

import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a good APR for a car loan in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on credit score — prime rates around 5-7%"
            }
          },
          {
            "@type": "Question",
            "name": "How much car can I afford on my salary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Total car costs should be under 15% of monthly take-home pay"
            }
          },
          {
            "@type": "Question",
            "name": "What is the ideal car loan term?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "36-48 months to minimize interest and stay above water"
            }
          },
          {
            "@type": "Question",
            "name": "Should I lease or buy a car?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Buy if you keep cars long-term; lease if you want lower payments and new cars"
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

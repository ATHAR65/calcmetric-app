import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does Uber withhold taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you pay all taxes yourself"
            }
          },
          {
            "@type": "Question",
            "name": "How much should Uber drivers save for taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "25–30% of net earnings"
            }
          },
          {
            "@type": "Question",
            "name": "Can Uber drivers deduct mileage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, $0.70 per mile in 2026"
            }
          },
          {
            "@type": "Question",
            "name": "When does Uber send 1099?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "January, for drivers earning $600+"
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

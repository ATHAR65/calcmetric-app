import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are PayPal's fees for selling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3.49% + fixed fee for G&S transactions"
            }
          },
          {
            "@type": "Question",
            "name": "Does PayPal charge fees for friends and family?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No fees for F&F domestic USD"
            }
          },
          {
            "@type": "Question",
            "name": "What is PayPal's international fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Additional 1.5%+ for cross-border"
            }
          },
          {
            "@type": "Question",
            "name": "Can I pass PayPal fees to customers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, allowed in most regions"
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

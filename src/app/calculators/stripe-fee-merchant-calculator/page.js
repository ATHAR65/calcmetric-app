import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does Stripe charge per transaction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2.9% + $0.30 for standard cards"
            }
          },
          {
            "@type": "Question",
            "name": "How does Stripe charge for international cards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Additional 1.5% for international"
            }
          },
          {
            "@type": "Question",
            "name": "Is Stripe cheaper than PayPal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Similar rates; depends on use case"
            }
          },
          {
            "@type": "Question",
            "name": "Does Stripe charge monthly fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No monthly fee on standard plan"
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

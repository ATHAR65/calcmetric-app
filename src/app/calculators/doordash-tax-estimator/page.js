import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does DoorDash take out taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you pay yourself as independent contractor"
            }
          },
          {
            "@type": "Question",
            "name": "How much to save for DoorDash taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "25–30% of every payout"
            }
          },
          {
            "@type": "Question",
            "name": "When are quarterly taxes due?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "April 15, June 16, Sep 15, Jan 15"
            }
          },
          {
            "@type": "Question",
            "name": "What can I deduct as a Dasher?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mileage, phone, equipment"
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

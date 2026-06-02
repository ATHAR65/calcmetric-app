import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the IRS mileage rate for 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$0.70 per mile for business use"
            }
          },
          {
            "@type": "Question",
            "name": "Can W-2 employees deduct mileage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally no, since Tax Cuts and Jobs Act 2017"
            }
          },
          {
            "@type": "Question",
            "name": "How do I track mileage for taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use MileIQ, Stride, or a mileage log spreadsheet"
            }
          },
          {
            "@type": "Question",
            "name": "Can I deduct actual car expenses instead of mileage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but must choose one method consistently"
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

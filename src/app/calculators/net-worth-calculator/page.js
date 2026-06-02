import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a good net worth by age?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Varies — standard rule is 1x salary by 30, 3x by 40, 6x by 50"
            }
          },
          {
            "@type": "Question",
            "name": "How often should I calculate my net worth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Quarterly or annually to track financial progress"
            }
          },
          {
            "@type": "Question",
            "name": "Is my home included in net worth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, home value minus mortgage balance"
            }
          },
          {
            "@type": "Question",
            "name": "What is a negative net worth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When liabilities exceed assets — common for students and new graduates"
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

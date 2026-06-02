import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Class 1 NI rate for employees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "8% on earnings £12,570-£50,270; 2% above £50,270"
            }
          },
          {
            "@type": "Question",
            "name": "What is the Class 4 NI rate for self-employed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "6% on profits £12,570-£50,270; 2% above £50,270"
            }
          },
          {
            "@type": "Question",
            "name": "Do I pay NI if I earn under £12,570?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, NI only applies above the threshold"
            }
          },
          {
            "@type": "Question",
            "name": "What is the employer NI rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Employers pay 13.8% on earnings above £9,100"
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

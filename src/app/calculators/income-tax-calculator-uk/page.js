import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the personal tax allowance in 2025-26?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "£12,570"
            }
          },
          {
            "@type": "Question",
            "name": "How much National Insurance do I pay?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on employment type and income"
            }
          },
          {
            "@type": "Question",
            "name": "What are the UK tax brackets for 2025-26?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "20% basic, 40% higher, 45% additional"
            }
          },
          {
            "@type": "Question",
            "name": "How is self-employed income taxed in UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Income tax + Class 2 & 4 NI"
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

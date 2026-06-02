import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Solo 401k contribution limit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$70,000 (or $77,500 with catch-up for age 50+)"
            }
          },
          {
            "@type": "Question",
            "name": "How are Solo 401k employer contributions calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Up to 25% of net self-employment income"
            }
          },
          {
            "@type": "Question",
            "name": "Can I have a Solo 401k and a regular 401k?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but combined limits apply"
            }
          },
          {
            "@type": "Question",
            "name": "What is the SECURE 2.0 super catch-up?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ages 60–63: additional $10,000+ catch-up provision"
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

import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the self-employment tax rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "15.3% on net earnings"
            }
          },
          {
            "@type": "Question",
            "name": "Can I deduct self-employment tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 50% is deductible from gross income"
            }
          },
          {
            "@type": "Question",
            "name": "Do I pay SE tax if I earn under $600?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes if net earnings exceed $400"
            }
          },
          {
            "@type": "Question",
            "name": "How do I pay self-employment tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Quarterly estimated payments via Form 1040-ES"
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

import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a good profit margin for e-commerce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "10–30% is typical; 20%+ is healthy"
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate net profit for online selling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Revenue minus all costs and fees"
            }
          },
          {
            "@type": "Question",
            "name": "What fees should I include in profit calculation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Platform fees, payment fees, shipping, returns"
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between gross and net margin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gross excludes overhead; net includes all costs"
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

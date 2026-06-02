import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the UK VAT rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard rate is 20%"
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate VAT from a gross price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Divide by 1.20 to find net"
            }
          },
          {
            "@type": "Question",
            "name": "When must I register for VAT in the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When turnover exceeds £90,000"
            }
          },
          {
            "@type": "Question",
            "name": "Can I reclaim VAT as a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if VAT registered"
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

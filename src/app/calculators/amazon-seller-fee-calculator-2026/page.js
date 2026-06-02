import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Amazon's referral fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 8–15% depending on category"
            }
          },
          {
            "@type": "Question",
            "name": "How are Amazon FBA fees calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Based on product size tier and weight"
            }
          },
          {
            "@type": "Question",
            "name": "Is Amazon FBA worth it in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes for most sellers at right margins"
            }
          },
          {
            "@type": "Question",
            "name": "What is the Individual vs Professional plan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Individual $0.99/sale; Professional $39.99/mo"
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

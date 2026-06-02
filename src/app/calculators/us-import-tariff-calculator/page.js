import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the current US tariff rate on Chinese imports?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "20% baseline + Section 301 duties; varies by product"
            }
          },
          {
            "@type": "Question",
            "name": "What is de minimis for US imports?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shipments under $800 enter duty-free under Section 321"
            }
          },
          {
            "@type": "Question",
            "name": "What is the Section 232 tariff?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "25% on steel, 10% on aluminum imports for national security"
            }
          },
          {
            "@type": "Question",
            "name": "How do tariffs affect e-commerce sellers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Increases COGS; may require price adjustments"
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

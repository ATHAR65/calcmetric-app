import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is eBay's final value fee in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "~13.25% for most categories + $0.30/order"
            }
          },
          {
            "@type": "Question",
            "name": "Does eBay charge fees on shipping?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, FVF applies to shipping amount too"
            }
          },
          {
            "@type": "Question",
            "name": "How do I increase eBay profit margins?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Optimize pricing, use free listings allowance"
            }
          },
          {
            "@type": "Question",
            "name": "What is eBay Managed Payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "eBay handles all payments directly, no PayPal needed"
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

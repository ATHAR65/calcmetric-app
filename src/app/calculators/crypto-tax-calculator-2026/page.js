import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I pay tax on crypto in the US?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, crypto is treated as property by IRS"
            }
          },
          {
            "@type": "Question",
            "name": "What is the crypto capital gains tax rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "0%, 15%, or 20% long-term; income rates short-term"
            }
          },
          {
            "@type": "Question",
            "name": "Do I owe tax if I didn't sell crypto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally no, only realized gains are taxed"
            }
          },
          {
            "@type": "Question",
            "name": "How do I report crypto on taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Schedule D + Form 8949"
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

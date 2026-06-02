import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is stamp duty calculated in the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "0% up to £250,000; 5% on portion £250,001-£925,000; higher rates above"
            }
          },
          {
            "@type": "Question",
            "name": "What is the UK mortgage borrowing limit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 4.5x annual income"
            }
          },
          {
            "@type": "Question",
            "name": "What is the average UK mortgage rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Varies — check current Bank of England base rate"
            }
          },
          {
            "@type": "Question",
            "name": "How does the mortgage term affect affordability?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Longer term = lower monthly payment but more total interest"
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

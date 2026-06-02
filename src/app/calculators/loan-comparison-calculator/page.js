import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between APR and interest rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "APR includes fees and costs; interest rate is just the loan rate"
            }
          },
          {
            "@type": "Question",
            "name": "How does loan term affect total cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Longer term = lower payment but more total interest"
            }
          },
          {
            "@type": "Question",
            "name": "What is a good personal loan rate in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rates vary by credit; typical range 6-36%"
            }
          },
          {
            "@type": "Question",
            "name": "Should I compare loans by APR or monthly payment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "APR gives the truest picture of total loan cost"
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

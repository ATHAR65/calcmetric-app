import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much should I save each month to reach my goal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the calculator — it depends on goal amount, timeline, and rate of return"
            }
          },
          {
            "@type": "Question",
            "name": "What is compound interest?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Interest earned on both principal and accumulated interest"
            }
          },
          {
            "@type": "Question",
            "name": "How does compound interest grow over time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Exponentially — the earlier you start, the more you benefit"
            }
          },
          {
            "@type": "Question",
            "name": "What is a realistic investment return assumption?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "7-8% average annual return for stock market (before inflation)"
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

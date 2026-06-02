import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When should I refinance my mortgage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When new rate saves more than closing costs within 2–3 years"
            }
          },
          {
            "@type": "Question",
            "name": "What are refinancing closing costs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 2–5% of loan amount"
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate my refinance break-even point?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Closing costs ÷ monthly savings"
            }
          },
          {
            "@type": "Question",
            "name": "Does refinancing hurt your credit score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Temporarily yes, due to hard inquiry"
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

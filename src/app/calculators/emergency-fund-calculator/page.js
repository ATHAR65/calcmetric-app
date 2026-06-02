import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much emergency fund should I have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3–6 months of essential expenses"
            }
          },
          {
            "@type": "Question",
            "name": "Where should I keep my emergency fund?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "High-yield savings account for easy access"
            }
          },
          {
            "@type": "Question",
            "name": "Is $1,000 enough for an emergency fund?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A good start, but aim for 3 months of expenses"
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can I build an emergency fund?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on your savings rate — use the calculator to estimate"
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

import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the 50/30/20 budget rule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "50% needs, 30% wants, 20% savings/debt"
            }
          },
          {
            "@type": "Question",
            "name": "How much should I save each month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At least 20% of your after-tax income"
            }
          },
          {
            "@type": "Question",
            "name": "What counts as a need vs a want?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Needs: housing, food, utilities, transport. Wants: dining, travel, entertainment."
            }
          },
          {
            "@type": "Question",
            "name": "How do I fix a budget deficit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cut wants first, then find ways to reduce fixed costs"
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

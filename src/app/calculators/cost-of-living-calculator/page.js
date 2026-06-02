import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is included in cost of living comparisons?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Housing, food, transportation, utilities, healthcare, taxes"
            }
          },
          {
            "@type": "Question",
            "name": "Which US cities have the highest cost of living?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NYC, San Francisco, Honolulu, Boston, Washington DC"
            }
          },
          {
            "@type": "Question",
            "name": "How much salary do I need to move to a new city?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the calculator to find equivalent salary based on COL index"
            }
          },
          {
            "@type": "Question",
            "name": "Is cost of living higher in cities or suburbs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cities generally 20-40% higher than suburbs"
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

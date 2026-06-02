import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does Texas have state income tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, Texas has no state income tax"
            }
          },
          {
            "@type": "Question",
            "name": "What percentage is taken out of a Texas paycheck?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Federal + 7.65% FICA only"
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate my take-home pay in Texas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gross − federal tax − FICA"
            }
          },
          {
            "@type": "Question",
            "name": "Does Texas have local payroll taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some cities have minor taxes, mostly no"
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

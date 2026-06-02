import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much is $20/hour annually?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$41,600 per year (40hr/week)"
            }
          },
          {
            "@type": "Question",
            "name": "How many work hours in a year?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2,080 standard (52 weeks × 40 hours)"
            }
          },
          {
            "@type": "Question",
            "name": "What is the US minimum wage in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$7.25 federal, varies by state"
            }
          },
          {
            "@type": "Question",
            "name": "Should I negotiate hourly or salary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on overtime expectations"
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

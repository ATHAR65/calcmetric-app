import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is New York state income tax rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "4% to 10.9% depending on income"
            }
          },
          {
            "@type": "Question",
            "name": "Does New York City have its own income tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 3.078%–3.876%"
            }
          },
          {
            "@type": "Question",
            "name": "How much of my NY paycheck goes to taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Could be 35–45% total for high earners"
            }
          },
          {
            "@type": "Question",
            "name": "Is NYC tax different from NY state tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, NYC has an additional local tax"
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

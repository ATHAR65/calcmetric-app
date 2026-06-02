import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much tax do I pay on side hustle income?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "15.3% SE tax + income tax"
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to pay quarterly taxes on side hustle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes if you expect to owe $1,000+"
            }
          },
          {
            "@type": "Question",
            "name": "What side hustle expenses are deductible?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business-use expenses only"
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a 1099 to report side hustle income?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, report all income even without 1099"
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

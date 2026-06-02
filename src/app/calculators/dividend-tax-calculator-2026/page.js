import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the dividend allowance in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "£500"
            }
          },
          {
            "@type": "Question",
            "name": "How much tax do I pay on dividends?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "8.75% basic, 33.75% higher rate"
            }
          },
          {
            "@type": "Question",
            "name": "Are dividends taxed twice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — corporation tax then dividend tax"
            }
          },
          {
            "@type": "Question",
            "name": "Is salary or dividends more tax-efficient?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually a mix is most efficient"
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

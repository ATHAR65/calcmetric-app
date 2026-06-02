import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does Florida have state income tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No state income tax in Florida"
            }
          },
          {
            "@type": "Question",
            "name": "How much is taken from a Florida paycheck?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Only federal taxes and FICA (7.65%)"
            }
          },
          {
            "@type": "Question",
            "name": "What is the Florida minimum wage in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check current FL minimum wage"
            }
          },
          {
            "@type": "Question",
            "name": "Is it better to live in Florida or Texas for taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Similar — both have no state income tax"
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

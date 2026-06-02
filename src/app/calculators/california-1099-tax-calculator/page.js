import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much is California self-employment tax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "15.3% federal SE + CA state income tax"
            }
          },
          {
            "@type": "Question",
            "name": "Does California have state income tax for freelancers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 1% to 13.3% progressive"
            }
          },
          {
            "@type": "Question",
            "name": "When are California estimated taxes due?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "April 15, June 15, Sep 15, Jan 15"
            }
          },
          {
            "@type": "Question",
            "name": "What is SDI tax in California for self-employed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Optional for self-employed in CA"
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

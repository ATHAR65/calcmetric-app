import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is solar worth it in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With the 30% federal tax credit, most homes break even in 6-10 years"
            }
          },
          {
            "@type": "Question",
            "name": "What is the payback period for solar panels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 6-12 years depending on location and electricity costs"
            }
          },
          {
            "@type": "Question",
            "name": "How long do solar panels last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "25-30 years with gradual efficiency decline"
            }
          },
          {
            "@type": "Question",
            "name": "Does solar increase home value?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, studies show 3-4% increase in property value"
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

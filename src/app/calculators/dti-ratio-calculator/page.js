import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a good DTI ratio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Below 36% is good; below 43% is required for most mortgages"
            }
          },
          {
            "@type": "Question",
            "name": "What is front-end vs back-end DTI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Front-end: housing costs only. Back-end: all debt payments."
            }
          },
          {
            "@type": "Question",
            "name": "How can I lower my DTI ratio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pay down debt, increase income, or avoid taking on new debt"
            }
          },
          {
            "@type": "Question",
            "name": "Do all lenders use the same DTI limits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most follow guidelines, but some allow up to 50% back-end DTI"
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

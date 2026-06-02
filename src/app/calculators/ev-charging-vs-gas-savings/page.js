import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much do you save driving an EV vs gas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Average $1,000-$2,500/year on fuel"
            }
          },
          {
            "@type": "Question",
            "name": "What is the EV tax credit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Up to $7,500 federal credit for qualifying vehicles"
            }
          },
          {
            "@type": "Question",
            "name": "How long to recoup the extra cost of an EV?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 3-5 years in fuel savings"
            }
          },
          {
            "@type": "Question",
            "name": "Is home charging cheaper than public charging?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, significantly cheaper at home rates"
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

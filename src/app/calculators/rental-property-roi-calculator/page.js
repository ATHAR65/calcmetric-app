import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a good cap rate for rental property?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "4-10% depending on market; higher in secondary markets"
            }
          },
          {
            "@type": "Question",
            "name": "What is cash-on-cash return?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Annual pre-tax cash flow divided by total cash invested"
            }
          },
          {
            "@type": "Question",
            "name": "What is the 1% rule in real estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Monthly rent should be at least 1% of purchase price"
            }
          },
          {
            "@type": "Question",
            "name": "What is NOI in real estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Net Operating Income = rental income minus operating expenses"
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

import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does Airbnb charge hosts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3% standard split or up to 16% host-only"
            }
          },
          {
            "@type": "Question",
            "name": "Do I pay tax on Airbnb income?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, after 14-day rule if applicable"
            }
          },
          {
            "@type": "Question",
            "name": "What expenses can Airbnb hosts deduct?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mortgage interest, utilities, cleaning, depreciation"
            }
          },
          {
            "@type": "Question",
            "name": "What is the 14-day Airbnb tax rule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Renting under 14 days = tax-free in the US"
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

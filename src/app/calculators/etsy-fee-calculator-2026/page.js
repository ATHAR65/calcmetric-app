import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What percentage does Etsy take from each sale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "~9.75% + $0.20 listing + payment fees"
            }
          },
          {
            "@type": "Question",
            "name": "Does Etsy charge listing fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, $0.20 per listing, renewed every 4 months or when sold"
            }
          },
          {
            "@type": "Question",
            "name": "What is Etsy's transaction fee in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "6.5% of total sale price including shipping"
            }
          },
          {
            "@type": "Question",
            "name": "Is Etsy Plus worth it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$10/mo — only worth it at higher sales volumes"
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

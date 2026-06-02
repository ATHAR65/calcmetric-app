import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a typical real estate commission rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "5–6% of sale price, split between buyer's and seller's agents"
            }
          },
          {
            "@type": "Question",
            "name": "How do brokerage splits work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agent receives a percentage of commission (e.g., 70/30 split)"
            }
          },
          {
            "@type": "Question",
            "name": "What is a 100% commission model?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agent keeps all commission but pays a monthly desk fee"
            }
          },
          {
            "@type": "Question",
            "name": "How much does a real estate agent earn per sale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Varies — use the calculator with your commission rate and split"
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

import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much do I need to retire comfortably?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on lifestyle — typically 25x annual expenses"
            }
          },
          {
            "@type": "Question",
            "name": "What is the 4% rule for retirement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Withdraw 4% of savings annually, adjusted for inflation"
            }
          },
          {
            "@type": "Question",
            "name": "How does compound interest help retirement savings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Earnings on earnings accelerate growth over decades"
            }
          },
          {
            "@type": "Question",
            "name": "What is a good retirement savings rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "15% of income including employer match"
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

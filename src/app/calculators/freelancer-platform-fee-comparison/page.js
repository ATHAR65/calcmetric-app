import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which freelancer platform has the lowest fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Toptal has zero service fee for freelancers; Upwork and Fiverr charge 10-20%"
            }
          },
          {
            "@type": "Question",
            "name": "How do Upwork fees work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "20% for first $500/client, then 5% for earnings over $10,000/client"
            }
          },
          {
            "@type": "Question",
            "name": "How do Fiverr fees work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fiverr takes 20% of every transaction"
            }
          },
          {
            "@type": "Question",
            "name": "Does Toptal charge freelancers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Toptal does not charge freelancers — clients pay the platform fee"
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

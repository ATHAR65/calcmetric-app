import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much should I save for college?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depends on your child's age and target school type — use the calculator"
            }
          },
          {
            "@type": "Question",
            "name": "What is a 529 plan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "State-sponsored education savings account with tax-free growth for qualified expenses"
            }
          },
          {
            "@type": "Question",
            "name": "What is the average cost of college in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$25,000-$60,000/year depending on public vs private"
            }
          },
          {
            "@type": "Question",
            "name": "Can I use 529 funds for K-12 education?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, up to $10,000/year per beneficiary"
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

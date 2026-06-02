import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between short-term and long-term capital gains?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Short-term (≤1 year) taxed as ordinary income. Long-term (>1 year) taxed at 0%, 15%, or 20%."
            }
          },
          {
            "@type": "Question",
            "name": "How does the 3.8% Net Investment Income Tax work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NIIT applies when MAGI exceeds $200K (single) or $250K (MFJ)"
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

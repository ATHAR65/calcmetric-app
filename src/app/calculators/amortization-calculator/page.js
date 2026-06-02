import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an amortization schedule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A table showing each payment's breakdown into principal and interest"
            }
          },
          {
            "@type": "Question",
            "name": "How does extra payment affect amortization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Extra principal payments reduce total interest and shorten the loan term"
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I make bi-weekly payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You make one extra payment per year, paying off the loan faster"
            }
          },
          {
            "@type": "Question",
            "name": "Is amortization the same for all loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No — mortgages use standard amortization; some loans use simple interest"
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

import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Roth IRA contribution limit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$7,000 ($8,000 if age 50+)"
            }
          },
          {
            "@type": "Question",
            "name": "Are Roth IRA withdrawals really tax-free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if account held for 5+ years and age 59½+"
            }
          },
          {
            "@type": "Question",
            "name": "Can I contribute to a Roth IRA if I have a 401(k)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but income limits may apply"
            }
          },
          {
            "@type": "Question",
            "name": "What is the backdoor Roth IRA strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contribute to Traditional IRA, then convert to Roth"
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

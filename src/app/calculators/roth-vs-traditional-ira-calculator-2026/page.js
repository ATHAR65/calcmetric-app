import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between Roth and Traditional IRA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roth: post-tax contributions, tax-free withdrawals. Traditional: pre-tax contributions, taxed on withdrawal."
            }
          },
          {
            "@type": "Question",
            "name": "What are the IRA contribution limits in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$7,000 ($8,000 if age 50+)"
            }
          },
          {
            "@type": "Question",
            "name": "Who should choose a Roth IRA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Those who expect higher taxes in retirement"
            }
          },
          {
            "@type": "Question",
            "name": "Can I have both a Roth and Traditional IRA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but combined contributions cannot exceed the annual limit"
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

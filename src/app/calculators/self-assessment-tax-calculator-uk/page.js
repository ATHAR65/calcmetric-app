import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When is the UK Self Assessment deadline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Online filing: Jan 31 following tax year end"
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to file a Self Assessment tax return?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If self-employed income over £1,000 or other untaxed income"
            }
          },
          {
            "@type": "Question",
            "name": "What are payments on account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Advance payments toward next year's tax bill, due Jan 31 and Jul 31"
            }
          },
          {
            "@type": "Question",
            "name": "Can I claim expenses on Self Assessment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — allowable expenses reduce your taxable profit"
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

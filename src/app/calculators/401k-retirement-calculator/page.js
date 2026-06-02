import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the 401(k) contribution limit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$23,500 employee deferral ($31,000 with catch-up)"
            }
          },
          {
            "@type": "Question",
            "name": "How does employer matching work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Employer matches a percentage of your contributions up to a limit"
            }
          },
          {
            "@type": "Question",
            "name": "What happens to my 401(k) when I change jobs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Can roll over to IRA or new employer's plan"
            }
          },
          {
            "@type": "Question",
            "name": "When can I withdraw from my 401(k) without penalty?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Age 59½ for penalty-free withdrawals"
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

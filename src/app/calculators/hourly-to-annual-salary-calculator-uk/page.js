import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How many working hours per year in the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard 1,820 hours (35 hours/week × 52 weeks)"
            }
          },
          {
            "@type": "Question",
            "name": "What is the UK minimum wage in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "£12.21 for workers aged 21+ (National Living Wage)"
            }
          },
          {
            "@type": "Question",
            "name": "How does overtime affect my annual salary UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Overtime is typically paid at 1.25x or 1.5x your hourly rate"
            }
          },
          {
            "@type": "Question",
            "name": "Is holiday pay included in UK hourly rates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Statutory holiday is 5.6 weeks/year (28 days for full-time)"
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

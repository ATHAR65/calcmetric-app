import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";



const CALC_SLUG = "hourly-to-annual-salary-calculator-uk";
const CALC_NAME = "Hourly to Annual Salary Calculator UK";
const CALC_DESCRIPTION = "Convert your UK hourly wage to annual salary instantly. Includes standard hours, overtime, and statutory holiday pay for 2025–26. Free calculator.";
const staticFaqs = [
  { q: "How many working hours per year in the UK?", a: "Standard 1,820 hours (35 hours/week × 52 weeks)" },
  { q: "What is the UK minimum wage in 2026?", a: "£12.21 for workers aged 21+ (National Living Wage)" },
  { q: "How does overtime affect my annual salary UK?", a: "Overtime is typically paid at 1.25x or 1.5x your hourly rate" },
  { q: "Is holiday pay included in UK hourly rates?", a: "Statutory holiday is 5.6 weeks/year (28 days for full-time)" }
];

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
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema]} />
      <Calculator />
      <CalculatorStaticSeo title={CALC_NAME} description={CALC_DESCRIPTION} slug={CALC_SLUG} faqs={staticFaqs} />
    </>
  );
}

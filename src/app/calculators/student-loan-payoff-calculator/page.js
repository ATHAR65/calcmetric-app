import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";


export const metadata = {
  title: { absolute: "Student Loan Payoff Calculator 2026 | TheMetricApp" },
  description: "Calculate monthly payments, total interest, and payoff timeline for federal and private student loans. See how extra payments save thousands.",
  alternates: {
    canonical: "https://www.themetricapp.com/calculators/student-loan-payoff-calculator",
  },
  openGraph: {
    title: "Student Loan Payoff Calculator 2026 — Pay Off Loans Faster",
    description: "Calculate your student loan payments, total interest, and payoff date. See how extra monthly payments can save you thousands.",
    url: "https://www.themetricapp.com/calculators/student-loan-payoff-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/api/og?title=Student%20Loan%20Payoff%20Calculator%202026%20%E2%80%94%20Pay%20Off%20Loans%20Faster%20%7C%20TheMetricApp&description=Calculate%20your%20student%20loan%20payments%2C%20total%20interest%2C%20and%20payoff%20date.%20See%20how%20extra%20monthly%20payments%20can%20save%20you%20thousands.&type=website", width: 1200, height: 630, alt: "Student Loan Payoff Calculator 2026 — Pay Off Loans Faster | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Payoff Calculator 2026 — Pay Off Loans Faster",
    description: "Free calculator to estimate student loan payments, interest, and savings with extra payments.",
  },
};


const CALC_SLUG = "student-loan-payoff-calculator";
const CALC_NAME = "Student Loan Payoff Calculator 2026";
const CALC_DESCRIPTION = "Calculate your student loan payments, total interest, and payoff timeline. See how extra payments save thousands on federal and private student loans. Free 2026 calculator.";
const staticFaqs = [
  { q: "Can I pay off student loans early without penalty?", a: "Federal loans: yes, no prepayment penalty" },
  { q: "Should I refinance my student loans?", a: "If you can get a lower rate, but you'll lose federal protections" },
  { q: "What is the standard student loan repayment term?", a: "10 years for most federal loans" },
  { q: "How do extra payments affect student loan payoff?", a: "Reduces total interest and shortens payoff timeline" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I pay off student loans early without penalty?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Federal loans: yes, no prepayment penalty"
            }
          },
          {
            "@type": "Question",
            "name": "Should I refinance my student loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you can get a lower rate, but you'll lose federal protections"
            }
          },
          {
            "@type": "Question",
            "name": "What is the standard student loan repayment term?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "10 years for most federal loans"
            }
          },
          {
            "@type": "Question",
            "name": "How do extra payments affect student loan payoff?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Reduces total interest and shortens payoff timeline"
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

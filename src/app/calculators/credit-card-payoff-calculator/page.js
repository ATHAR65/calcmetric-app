import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";


export const metadata = {
  title: { absolute: "Credit Card Payoff Calculator 2026 | TheMetricApp" },
  description: "Compare snowball and avalanche debt payoff methods. Add multiple cards and see how extra payments save you thousands. Free calculator.",
  alternates: {
    canonical: "https://www.themetricapp.com/calculators/credit-card-payoff-calculator",
  },
  openGraph: {
    title: "Credit Card Payoff Calculator 2026 — Debt Payoff",
    description: "Compare snowball and avalanche debt payoff strategies with our free calculator. See how much interest you save with extra payments.",
    url: "https://www.themetricapp.com/calculators/credit-card-payoff-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/api/og?title=Credit%20Card%20Payoff%20Calculator%202026%20%E2%80%94%20Snowball%20vs%20Avalanche%20%7C%20TheMetricApp&description=Compare%20snowball%20and%20avalanche%20debt%20payoff%20strategies%20with%20our%20free%20calculator.%20See%20how%20much%20interest%20you%20save%20with%20extra%20payments.&type=website", width: 1200, height: 630, alt: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Credit Card Payoff Calculator 2026 — Debt Payoff",
    description: "Free calculator to compare debt payoff strategies and see how extra payments save you money.",
  },
};


const CALC_SLUG = "credit-card-payoff-calculator";
const CALC_NAME = "Credit Card Payoff Calculator 2026";
const CALC_DESCRIPTION = "Compare snowball vs avalanche debt payoff methods. Calculate how long it takes to pay off credit card debt and how much interest you save with extra payments. Free 2026 calculator.";
const staticFaqs = [
  { q: "Should I use the snowball or avalanche method?", a: "Snowball: pay smallest balance first. Avalanche: pay highest APR first." },
  { q: "How much interest can I save by paying extra?", a: "Thousands — depends on balance, rate, and extra payment amount" },
  { q: "What is a good debt payoff timeline?", a: "Aim to pay off credit cards within 2-3 years" },
  { q: "Should I consolidate credit card debt?", a: "If you can get a lower APR, consolidation can save money" }
];

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Should I use the snowball or avalanche method?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Snowball: pay smallest balance first. Avalanche: pay highest APR first."
            }
          },
          {
            "@type": "Question",
            "name": "How much interest can I save by paying extra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Thousands — depends on balance, rate, and extra payment amount"
            }
          },
          {
            "@type": "Question",
            "name": "What is a good debt payoff timeline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aim to pay off credit cards within 2-3 years"
            }
          },
          {
            "@type": "Question",
            "name": "Should I consolidate credit card debt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you can get a lower APR, consolidation can save money"
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

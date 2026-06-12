import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "home-affordability-calculator-2026";
const CALC_NAME = "Home Affordability Calculator 2026";
const CALC_DESCRIPTION = "Find out how much house you can afford based on income, debts, down payment, and current mortgage rates. Free home affordability calculator for 2026.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The <strong>28/36 rule</strong> is the foundation of home affordability. Lenders recommend spending no more than 28% of gross monthly income on housing costs (mortgage, taxes, insurance) and no more than 36% on total debt payments (housing + car loans, student loans, credit cards). On an $80,000 salary, 28% means a maximum housing payment of <strong>$1,867/month</strong>.",
  "At current 2026 mortgage rates of approximately <strong>6.5–7.0%</strong> for a 30-year fixed, an $80,000 household income with 10% down and no other debts supports a home price of roughly <strong>$280,000–$320,000</strong>. Every 1% increase in mortgage rates reduces purchasing power by approximately 10% — the difference between 6% and 7% rates is roughly $30,000 in home price.",
  "Down payment requirements vary by loan type: <strong>Conventional loans</strong> require 3–5% minimum (with PMI below 20%), <strong>FHA loans</strong> require 3.5% with a 580+ credit score, <strong>VA loans</strong> offer 0% down for eligible veterans, and <strong>USDA loans</strong> offer 0% down in qualified rural areas. A 20% down payment eliminates PMI, saving $100–$300/month.",
  "Beyond the mortgage, budget for <strong>property taxes</strong> (averaging 1.07% nationally, but 1.6–1.8% in Texas and under 0.5% in Hawaii), <strong>homeowner's insurance</strong> ($1,500–$3,500/year), <strong>PMI</strong> if under 20% down ($50–$250/month), and <strong>maintenance</strong> (budget 1% of home value per year). These costs can add $500–$1,200/month to your housing expense.",
];

const haFormula = `Max Monthly Payment = Gross Monthly Income × 28%
Max Home Price = Based on payment, rate, term, taxes, insurance

Example: $80,000 income, 7% rate, 30-year, 10% down
  Max monthly housing = $6,667 × 28% = $1,867
  Minus taxes/insurance (~$400) = $1,467 for mortgage
  Max loan amount ≈ $220,000
  With 10% down → Max home price ≈ $245,000`;

const haRateTable = {
  title: "Home Affordability by Income (7% Rate, 10% Down, 30-Year)",
  headers: ["Household Income", "Max Home Price", "Monthly Payment"],
  rows: [
    ["$50,000", "$175,000–$195,000", "$1,167"],
    ["$75,000", "$265,000–$290,000", "$1,750"],
    ["$100,000", "$355,000–$390,000", "$2,333"],
    ["$125,000", "$445,000–$490,000", "$2,917"],
    ["$150,000", "$535,000–$585,000", "$3,500"],
  ],
};

const haHowToSteps = [
  "Enter your gross annual household income (before taxes) — include all income sources for joint applications.",
  "Enter your monthly debt payments: car loans, student loans, credit cards, and any other recurring debt obligations.",
  "Enter your target down payment percentage and the current mortgage interest rate (check current rates at Freddie Mac).",
  "Review your maximum affordable home price, estimated monthly payment breakdown (principal, interest, taxes, insurance), and the DTI ratios lenders will evaluate.",
];

const staticFaqs = [
  { q: "How much house can I afford on $80,000 salary?", a: "Using the 28% rule with a 7% mortgage rate, 10% down payment, and standard property taxes and insurance, an $80,000 salary supports a home price of approximately $280,000–$320,000. This assumes minimal other debts — car payments, student loans, or credit card debt will reduce your budget." },
  { q: "What is the 28/36 debt-to-income rule?", a: "The 28/36 rule states that housing costs (mortgage, property taxes, insurance, HOA) should not exceed 28% of gross monthly income, and total debt payments (housing + all other debts) should not exceed 36%. Some lenders allow up to 43% DTI for qualified borrowers, but 28/36 is the safe guideline." },
  { q: "How much down payment do I need?", a: "Conventional loans: 3–5% minimum (PMI required below 20%). FHA loans: 3.5% with 580+ credit. VA loans: 0% for eligible veterans. USDA loans: 0% in qualified rural areas. A 20% down payment eliminates PMI ($50–$250/month savings) and gives you better rates and more equity from day one." },
  { q: "How do current mortgage rates affect affordability?", a: "Every 1% increase in mortgage rates reduces purchasing power by approximately 10%. At 6% on a $300,000 loan, the monthly payment is $1,799. At 7%, it jumps to $1,996 — $197 more per month, or $70,920 over 30 years. Check Freddie Mac for current average rates." },
  { q: "What costs beyond the mortgage should I budget for?", a: "Property taxes (0.5–1.8% of home value/year), homeowner's insurance ($1,500–$3,500/year), PMI if under 20% down ($50–$250/month), maintenance (1% of home value/year), HOA fees if applicable ($200–$600/month), and closing costs (2–5% of home price, one-time)." },
  { q: "Does pre-approval affect my credit score?", a: "Yes, but minimally. A mortgage pre-approval triggers a hard credit inquiry, which typically lowers your score by 5–10 points temporarily. Multiple mortgage inquiries within a 14–45 day window (depending on the scoring model) count as a single inquiry, so shop around in a concentrated timeframe." },
];

const faqSchemaEntities = staticFaqs.map(f => ({
  "@type": "Question",
  "name": f.q,
  "acceptedAnswer": { "@type": "Answer", "text": f.a }
}));

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSchemaEntities,
  };

  return (
    <>
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema]} />
      <Calculator />
      <CalculatorStaticSeo
        title={CALC_NAME}
        description={CALC_DESCRIPTION}
        slug={CALC_SLUG}
        faqs={staticFaqs}
        content={seoContent}
        formula={haFormula}
        rateTable={haRateTable}
        howToSteps={haHowToSteps}
      />
    </>
  );
}

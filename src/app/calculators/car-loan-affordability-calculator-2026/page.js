import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "car-loan-affordability-calculator-2026";
const CALC_NAME = "Car Loan Affordability Calculator 2026";
const CALC_DESCRIPTION = "Calculate monthly car payments, total interest, and DTI analysis. Free 2026 car affordability calculator before you visit the dealership.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The <strong>20/4/10 rule</strong> is the gold standard for car affordability: put <strong>20% down</strong>, finance for no more than <strong>4 years</strong>, and keep total car costs (payment + insurance + gas) under <strong>10% of gross monthly income</strong>. On a $60,000 salary, that means total car costs should stay under $500/month.",
  "Average new car loan rates in 2026 range from <strong>5.5% for excellent credit (750+)</strong> to <strong>12%+ for subprime (below 600)</strong>. Used car rates are typically 1–2% higher. The difference matters: on a $30,000 loan over 60 months, the interest cost at 5.5% is $4,352, while at 10% it is $8,498 — a <strong>$4,146 difference</strong> just from the rate.",
  "Longer loan terms (72–84 months) reduce monthly payments but dramatically increase total interest and risk being <strong>underwater</strong> (owing more than the car is worth). A $35,000 car financed at 7% for 72 months costs $598/month with $8,048 in interest; the same car at 48 months costs $838/month with only $5,242 in interest — saving <strong>$2,806</strong>.",
  "Beyond the loan payment, budget for <strong>insurance</strong> ($1,200–$2,400/year for full coverage), <strong>fuel</strong> ($150–$300/month), <strong>maintenance</strong> ($500–$1,000/year), and <strong>depreciation</strong> (new cars lose 20% of value in year one, 60% over 5 years). Total cost of ownership typically runs 1.5–2x the loan payment alone.",
];

const carFormula = `Monthly Payment = P × [r(1+r)^n] / [(1+r)^n − 1]
  P = loan amount (price − down payment − trade-in)
  r = monthly rate (APR ÷ 12)
  n = loan term in months

Example: $30,000 car, $6,000 down, 6.5% APR, 60 months
  Loan = $24,000
  r = 0.065 ÷ 12 = 0.00542
  Monthly Payment = $470
  Total Interest = $4,180
  Total Cost = $28,180`;

const carRateTable = {
  title: "2026 Average Auto Loan Rates by Credit Score",
  headers: ["Credit Score", "New Car APR", "Used Car APR", "Monthly on $25K/60mo"],
  rows: [
    ["750+ (Excellent)", "5.5–6.5%", "6.5–7.5%", "$477"],
    ["700–749 (Good)", "6.5–8.0%", "7.5–9.0%", "$492"],
    ["650–699 (Fair)", "8.0–11.0%", "9.0–13.0%", "$519"],
    ["600–649 (Poor)", "11.0–14.0%", "13.0–17.0%", "$556"],
    ["Below 600 (Subprime)", "14.0–20.0%", "17.0–25.0%", "$600+"],
  ],
};

const carHowToSteps = [
  "Enter the vehicle price, your down payment amount (aim for 20%), and trade-in value if applicable.",
  "Enter the loan APR (check your pre-approval rate) and desired loan term (36–72 months).",
  "Optionally enter your gross monthly income to see the DTI impact of the car payment.",
  "Review your monthly payment, total interest cost, total cost of the loan, and whether the payment fits the 10% gross income guideline.",
];

const staticFaqs = [
  { q: "What is a good APR for a car loan in 2026?", a: "For new cars: 5.5–6.5% with excellent credit (750+), 6.5–8.0% with good credit (700–749). For used cars: add 1–2% to these rates. Credit unions often offer the best rates (0.5–1% lower than banks). Always get pre-approved before visiting a dealership to have leverage in rate negotiations." },
  { q: "How much car can I afford on my salary?", a: "Follow the 20/4/10 rule: 20% down, 4-year max term, total car costs under 10% of gross monthly income. On a $60,000 salary ($5,000/month gross), total car costs (payment + insurance + gas) should stay under $500/month. On $80,000, under $667/month. This keeps your finances healthy." },
  { q: "What is the ideal car loan term?", a: "36–48 months is ideal — you minimize interest and stay above water on the loan. A 60-month term is acceptable for lower payments. Avoid 72–84 month terms: they save $100–$200/month but cost thousands more in interest and leave you underwater for years. You will likely need repairs before the loan is paid off." },
  { q: "Should I lease or buy a car?", a: "Buy if you keep cars 5+ years, drive more than 12,000 miles/year, or want to build equity. Lease if you prefer new cars every 3 years, drive under 12,000 miles/year, and want lower monthly payments. Leasing costs more long-term but provides warranty coverage and newer safety features." },
  { q: "How does the down payment affect my car loan?", a: "A larger down payment reduces your loan amount, monthly payment, total interest, and risk of being underwater. On a $30,000 car at 7% for 60 months: 0% down = $594/month ($5,627 interest); 20% ($6,000) down = $475/month ($4,501 interest). The 20% down saves $1,126 in interest and $119/month." },
  { q: "What is being underwater on a car loan?", a: "Being underwater means you owe more than the car is worth. New cars depreciate ~20% in year one. With 0% down on a $30,000 car, after one year you owe ~$25,500 but the car is worth ~$24,000. A 20% down payment provides a buffer against depreciation. Being underwater is a problem if you need to sell or the car is totaled." },
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
        formula={carFormula}
        rateTable={carRateTable}
        howToSteps={carHowToSteps}
      />
    </>
  );
}

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "loan-comparison-calculator";
const CALC_NAME = "Loan Comparison Calculator 2026 — Compare";
const CALC_DESCRIPTION = "Compare two loans side-by-side with monthly payment, total interest, APR, and total cost. Free 2026 loan comparison calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Comparing loans by monthly payment alone is misleading — a lower payment often means <strong>more total interest paid</strong> over the life of the loan. The true cost of a loan is the sum of all payments plus fees. A $25,000 personal loan at 8% for 5 years costs $5,416 in total interest; the same loan at 10% for 7 years costs $10,050 — <strong>nearly double</strong> despite only a 2% rate difference.",
  "The <strong>Annual Percentage Rate (APR)</strong> is the most important number for loan comparison because it includes origination fees, closing costs, and other charges beyond the base interest rate. A loan advertised at 6.5% interest with a 3% origination fee has an effective APR closer to 7.8%. Federal law (Truth in Lending Act) requires lenders to disclose APR for exactly this reason.",
  "Loan term length creates a <strong>monthly payment vs total cost tradeoff</strong>. On a $30,000 auto loan at 7%: a 48-month term costs $718/month and $4,478 total interest; a 72-month term costs $512/month but $6,879 total interest — <strong>$2,401 more</strong> for the convenience of a lower payment. Choose the shortest term you can comfortably afford.",
  "Before comparing loans, check your <strong>credit score</strong> — it determines the rates you qualify for. In 2026, typical personal loan APR ranges: excellent credit (750+): 6–12%; good (670–749): 10–18%; fair (580–669): 15–28%; poor (below 580): 25–36%. Improving your score by 50 points before applying can save thousands over the loan term.",
];

const loanFormula = `Monthly Payment = P × [r(1+r)^n] / [(1+r)^n − 1]
  P = principal (loan amount)
  r = monthly interest rate (APR ÷ 12)
  n = total number of payments

Total Interest = (Monthly Payment × n) − P
Total Cost = Total Interest + Fees

Example: $20,000 loan comparison
  Loan A: 7% APR, 36 months = $617/mo, $2,225 total interest
  Loan B: 9% APR, 60 months = $415/mo, $4,900 total interest
  Loan A saves $2,675 despite higher monthly payment`;

const loanRateTable = {
  title: "Personal Loan Rates by Credit Score (2026)",
  headers: ["Credit Score", "Rating", "Typical APR Range", "Monthly Payment ($20K, 5yr)"],
  rows: [
    ["750+", "Excellent", "6.0–12.0%", "$387–$445"],
    ["670–749", "Good", "10.0–18.0%", "$425–$508"],
    ["580–669", "Fair", "15.0–28.0%", "$476–$600"],
    ["Below 580", "Poor", "25.0–36.0%", "$572–$666"],
  ],
};

const loanHowToSteps = [
  "Enter Loan A details: principal amount, interest rate (or APR), loan term in months, and any origination fees.",
  "Enter Loan B details with the same fields for the second loan you are comparing.",
  "Review the side-by-side comparison: monthly payment, total interest paid, total cost (interest + fees), and payoff date.",
  "Choose the loan with the lowest total cost if you can afford the monthly payment, or the lowest APR if terms are similar.",
];

const staticFaqs = [
  { q: "What is the difference between APR and interest rate?", a: "The interest rate is the base cost of borrowing (the percentage charged on the principal). APR (Annual Percentage Rate) includes the interest rate PLUS origination fees, closing costs, and other lender charges, expressed as an annualized percentage. APR is always equal to or higher than the interest rate. Always compare loans using APR for the truest cost picture." },
  { q: "How does loan term affect total cost?", a: "Longer terms mean lower monthly payments but significantly more total interest. Example: $25,000 at 8% — a 3-year term costs $3,152 in interest; a 7-year term costs $7,646 in interest (2.4× more). The shorter term payment is $783/month vs $450/month. Choose the shortest term where the monthly payment fits comfortably in your budget." },
  { q: "What is a good personal loan rate in 2026?", a: "Rates depend heavily on credit score: excellent credit (750+) qualifies for 6–12% APR; good credit (670–749) gets 10–18%; fair credit (580–669) sees 15–28%; poor credit (below 580) faces 25–36%. Credit unions often offer 1–3% lower rates than online lenders. Always get quotes from at least 3 lenders — rate shopping within 14 days counts as one credit inquiry." },
  { q: "Should I compare loans by APR or monthly payment?", a: "Compare by APR first (lowest total cost), then check that the monthly payment fits your budget. A loan with a lower monthly payment but higher APR will cost more over time. The only exception: if you need the lowest possible payment for cash flow reasons and can refinance later when your finances improve." },
  { q: "What is an origination fee and how does it affect my loan?", a: "An origination fee is a one-time charge (typically 1–8% of the loan amount) deducted from your loan proceeds at disbursement. On a $20,000 loan with a 5% origination fee, you receive only $19,000 but repay $20,000 plus interest. This effectively raises your APR above the stated interest rate. Some lenders charge no origination fee — factor this into your comparison." },
  { q: "How many lenders should I compare before choosing a loan?", a: "Compare at least 3–5 lenders including a mix of banks, credit unions, and online lenders. Pre-qualify with soft credit checks (no score impact) to see estimated rates, then formally apply with your top 2–3 choices. Multiple hard inquiries within a 14-day window count as a single inquiry for scoring purposes, so rate-shop within that window." },
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
        formula={loanFormula}
        rateTable={loanRateTable}
        howToSteps={loanHowToSteps}
      />
    </>
  );
}

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "amortization-calculator";
const CALC_NAME = "Amortization Schedule Calculator 2026";
const CALC_DESCRIPTION = "Generate a complete amortization schedule for any loan. Monthly payments, total interest, and year-by-year principal vs interest breakdown. Free calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "An amortization schedule shows exactly how each monthly payment is split between <strong>principal (reducing your loan balance)</strong> and <strong>interest (the lender's profit)</strong>. In the early years of a mortgage, most of your payment goes to interest. On a $300,000 mortgage at 7% over 30 years, your first payment of $1,996 includes $1,750 in interest and only <strong>$246 toward principal</strong>.",
  "The <strong>front-loading of interest</strong> is the most important concept in amortization. On that same $300,000 loan at 7%: in year 1, you pay $20,790 in interest and only $3,162 in principal. By year 15, the split reverses — $11,400 in interest and $12,552 in principal. Over 30 years, total interest is <strong>$418,527</strong> — more than the original loan amount.",
  "Extra principal payments dramatically reduce total interest and loan duration. Adding just <strong>$200/month extra</strong> to a $300,000 mortgage at 7% saves $112,000 in interest and pays off the loan <strong>7 years early</strong> (23 years instead of 30). One extra payment per year achieves similar results — making 13 payments annually instead of 12 shaves off approximately 5 years.",
  "Bi-weekly payments are a popular strategy: pay half your monthly payment every two weeks. Since there are 26 bi-weekly periods per year, you make the equivalent of <strong>13 monthly payments</strong> instead of 12. On a $300,000 mortgage at 7%, bi-weekly payments save approximately $90,000 in interest and pay off the loan about 5 years early — with no change to your lifestyle budget.",
];

const amortFormula = `Monthly Payment = P × [r(1+r)^n] / [(1+r)^n − 1]
Interest Portion = Remaining Balance × Monthly Rate
Principal Portion = Monthly Payment − Interest Portion

Example: $300,000 mortgage at 7%, 30 years
  Monthly payment = $1,996
  Payment #1: Interest = $1,750 | Principal = $246
  Payment #180 (year 15): Interest = $950 | Principal = $1,046
  Payment #360 (final): Interest = $12 | Principal = $1,984
  Total interest paid = $418,527
  Total of all payments = $718,527`;

const amortRateTable = {
  title: "Amortization of $300,000 Mortgage at 7% — Year-by-Year Summary",
  headers: ["Year", "Annual Interest", "Annual Principal", "Remaining Balance"],
  rows: [
    ["Year 1", "$20,790", "$3,162", "$296,838"],
    ["Year 5", "$19,884", "$4,068", "$282,124"],
    ["Year 10", "$18,228", "$5,724", "$257,544"],
    ["Year 15", "$15,198", "$8,754", "$216,774"],
    ["Year 20", "$10,236", "$13,716", "$152,586"],
    ["Year 25", "$3,654", "$20,298", "$58,230"],
    ["Year 30", "$132", "$23,820", "$0"],
  ],
};

const amortHowToSteps = [
  "Enter your loan amount, interest rate, and loan term (in years or months).",
  "Optionally enter an extra monthly payment amount to see accelerated payoff projections.",
  "Review the complete month-by-month amortization schedule showing principal, interest, and remaining balance for each payment.",
  "Compare the total interest with and without extra payments, and see how many years you can shave off the loan term.",
];

const staticFaqs = [
  { q: "What is an amortization schedule?", a: "An amortization schedule is a complete payment-by-payment table showing how each installment is divided between principal (reducing loan balance) and interest (lender profit). Early payments are mostly interest; later payments are mostly principal. For a 30-year mortgage, the crossover point (where principal exceeds interest in each payment) typically occurs around year 18–22 depending on the rate." },
  { q: "How does extra payment affect amortization?", a: "Extra principal payments go directly toward reducing the loan balance, which reduces future interest charges. Adding $200/month extra to a $300,000 mortgage at 7% saves $112,000 in total interest and pays off the loan 7 years early. Even a single extra payment of $2,000 per year saves approximately $80,000 over the life of the loan. The earlier you make extra payments, the greater the impact." },
  { q: "What happens if I make bi-weekly payments?", a: "Bi-weekly payments (half your monthly amount every two weeks) result in 26 half-payments per year, which equals 13 full monthly payments instead of 12. That extra payment goes entirely to principal. On a $300,000 mortgage at 7%, bi-weekly payments save approximately $90,000 in interest and pay off the loan about 5 years early. Most lenders or third-party services can set this up." },
  { q: "Is amortization the same for all loans?", a: "No. Standard amortization (fixed monthly payments with changing principal/interest ratios) applies to most mortgages and installment loans. Interest-only loans require no principal payments initially (interest only for 5–10 years, then fully amortizing). Simple interest loans calculate interest daily on the remaining balance. ARM (adjustable-rate) loans re-amortize when the rate changes." },
  { q: "Why is so much of my payment going to interest?", a: "Interest is calculated on the remaining balance. Early in a loan, the balance is highest, so interest charges are largest. On a $300,000 loan at 7%, the first month's interest is $1,750 ($300,000 × 7% ÷ 12). As you pay down the balance, interest decreases and more of each payment goes to principal. This front-loading is why extra payments early in the loan have such a large impact." },
  { q: "How much total interest will I pay on my mortgage?", a: "On a 30-year mortgage at 7%, total interest is approximately 140% of the loan amount. Examples: $200,000 loan = $279,018 interest ($479,018 total paid); $300,000 loan = $418,527 interest ($718,527 total); $400,000 loan = $558,036 interest ($958,036 total). At 6%, total interest drops to about 116% of the loan amount — refinancing from 7% to 6% on $300,000 saves over $70,000." },
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
        formula={amortFormula}
        rateTable={amortRateTable}
        howToSteps={amortHowToSteps}
      />
    </>
  );
}

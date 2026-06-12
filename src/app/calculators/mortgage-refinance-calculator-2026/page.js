import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "mortgage-refinance-calculator-2026";
const CALC_NAME = "Mortgage Refinance Calculator 2026";
const CALC_DESCRIPTION = "Calculate if refinancing your mortgage saves money. See break-even point, monthly savings, total interest saved, and whether it is worth it. Free calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Refinancing replaces your current mortgage with a new one at a different rate, term, or both. The general rule: refinancing is worth it when you can <strong>lower your rate by at least 0.5–1.0%</strong> and plan to stay in the home long enough to recoup closing costs. On a $300,000 mortgage, dropping from 7% to 6% saves approximately <strong>$200/month</strong> and $72,000 over 30 years.",
  "Refinancing closing costs typically run <strong>2–5% of the loan amount</strong> ($6,000–$15,000 on a $300,000 loan). These costs include origination fees, appraisal ($400–$600), title insurance, recording fees, and attorney fees. The <strong>break-even point</strong> is when your monthly savings exceed the closing costs — typically 18–36 months for a 1% rate reduction.",
  "A <strong>rate-and-term refinance</strong> changes your interest rate and/or loan term without increasing the balance. A <strong>cash-out refinance</strong> lets you borrow against home equity (up to 80% LTV typically), receiving cash at closing — useful for home improvements or debt consolidation, but increases your mortgage balance and monthly payment.",
  "Shortening your term from 30 years to 15 years increases monthly payments but saves enormous interest. A $300,000 mortgage at 6.5% over 30 years costs $382,633 in interest. The same loan at 5.75% over 15 years costs only $147,774 in interest — saving <strong>$234,859</strong>. The monthly payment increases from $1,896 to $2,488 (+$592), but you own the home free and clear in half the time.",
];

const refiFormula = `Monthly Savings = Current Payment − New Payment
Break-Even = Closing Costs ÷ Monthly Savings
Total Interest Saved = Old Total Interest − New Total Interest − Closing Costs

Example: $300,000 remaining, 7% → 6%, 30-year to 30-year
  Current payment = $1,996/month
  New payment = $1,799/month
  Monthly savings = $197
  Closing costs = $9,000
  Break-even = $9,000 ÷ $197 = 45.7 months (3.8 years)
  If staying 10+ years: total savings = $14,640 net`;

const refiRateTable = {
  title: "Refinance Savings by Rate Drop ($300,000 Loan, 30-Year)",
  headers: ["Rate Drop", "Monthly Savings", "Break-Even (at $9K costs)", "10-Year Net Savings"],
  rows: [
    ["7.0% → 6.5%", "$101", "89 months", "$3,120"],
    ["7.0% → 6.0%", "$197", "46 months", "$14,640"],
    ["7.0% → 5.5%", "$289", "31 months", "$25,680"],
    ["7.5% → 6.0%", "$293", "31 months", "$26,160"],
    ["8.0% → 6.0%", "$385", "23 months", "$37,200"],
  ],
};

const refiHowToSteps = [
  "Enter your current mortgage details: remaining balance, interest rate, and remaining term.",
  "Enter the new loan terms: proposed interest rate, new loan term (15 or 30 years), and estimated closing costs.",
  "The calculator computes your new monthly payment, monthly savings, break-even point, and total interest savings.",
  "Compare rate-and-term refinance vs cash-out options, and evaluate whether the break-even point fits your plans to stay in the home.",
];

const staticFaqs = [
  { q: "When should I refinance my mortgage?", a: "Refinance when you can lower your rate by at least 0.5–1.0% AND plan to stay in the home past the break-even point (typically 2–4 years). Also consider refinancing to shorten your term (30-year to 15-year), to eliminate PMI (if you now have 20%+ equity), or to switch from adjustable-rate to fixed-rate during rising rate environments." },
  { q: "What are refinancing closing costs?", a: "Typically 2–5% of the new loan amount: $6,000–$15,000 on a $300,000 loan. Costs include loan origination fee (0.5–1%), appraisal ($400–$600), title insurance ($1,000–$2,000), recording fees, attorney fees, and prepaid items. Some lenders offer no-closing-cost refinances with a slightly higher rate (usually 0.25–0.5% higher)." },
  { q: "How do I calculate my refinance break-even point?", a: "Break-even = total closing costs ÷ monthly payment savings. For example: $9,000 in closing costs ÷ $200 monthly savings = 45 months (3.75 years). If you plan to stay in the home longer than 45 months, refinancing saves money. If you might move sooner, the closing costs may not be worth it." },
  { q: "Does refinancing hurt your credit score?", a: "Temporarily yes — the mortgage application triggers a hard credit inquiry (5–10 point drop). Multiple mortgage inquiries within 14–45 days count as one inquiry for scoring purposes, so shop around in a concentrated window. The new account also lowers your average account age. Scores typically recover within 3–6 months." },
  { q: "Should I refinance to a 15-year mortgage?", a: "If you can afford the higher payment, a 15-year refinance saves enormous interest. On a $300,000 loan: 30-year at 6.5% costs $382,633 in interest; 15-year at 5.75% costs $147,774. That is $234,859 in savings. Monthly payments increase by about $600, but you build equity much faster and own the home in half the time." },
  { q: "What is a cash-out refinance?", a: "A cash-out refinance replaces your mortgage with a larger loan, and you receive the difference in cash. Most lenders allow up to 80% loan-to-value (LTV). On a home worth $400,000 with $200,000 owed, you could borrow up to $320,000 and receive $120,000 in cash. Common uses: home improvements, debt consolidation, investment. The rate is typically 0.125–0.25% higher than a standard refinance." },
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
        formula={refiFormula}
        rateTable={refiRateTable}
        howToSteps={refiHowToSteps}
      />
    </>
  );
}

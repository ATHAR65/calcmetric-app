import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "student-loan-payoff-calculator";
const CALC_NAME = "Student Loan Payoff Calculator 2026";
const CALC_DESCRIPTION = "Calculate your student loan payments, total interest, and payoff timeline. See how extra payments save thousands on federal and private student loans. Free 2026 calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "With <strong>45 million Americans</strong> carrying student loan debt averaging over $39,000 per borrower, finding the right repayment strategy is critical. Federal student loan interest rates for 2025–2026 range from <strong>6.39% (undergraduate)</strong> to <strong>8.94% (PLUS loans)</strong>, making it essential to understand exactly what your loans will cost over time.",
  "The standard 10-year repayment plan minimizes total interest but requires higher monthly payments. On a $35,000 loan at 6.39%, the standard plan costs $395/month with $12,652 in total interest. An extended 25-year plan drops payments to $233/month but balloons interest to <strong>$34,910</strong> — nearly triple. Income-driven plans cap payments at 10–20% of discretionary income with forgiveness after 20–25 years.",
  "Extra payments are the most powerful tool for saving money. On a $35,000 loan at 6.39%, paying just <strong>$50 extra per month</strong> saves $3,237 in interest and pays off the loan 2.5 years early. Paying $100 extra saves $5,163 and shaves 3.8 years off repayment. On a $65,000 graduate loan at 7.94%, $200 extra per month saves nearly <strong>$10,000</strong>.",
  "Never refinance federal student loans into private loans — you permanently lose access to income-driven repayment, PSLF (Public Service Loan Forgiveness), deferment, and forbearance protections. Refinancing private loans with good credit (700+) from 8–12% APR down to 5–7% can save significantly. Always target the highest-rate loan first (avalanche method) for maximum savings.",
];

const slFormula = `Monthly Payment = P × [r(1+r)^n] / [(1+r)^n − 1]
  P = principal balance
  r = monthly interest rate (annual ÷ 12)
  n = number of months

Example: $35,000 at 6.39% for 10 years
  r = 0.0639 ÷ 12 = 0.005325
  n = 120 months
  Monthly Payment = $395
  Total Interest = $12,652
  Total Paid = $47,652`;

const slRateTable = {
  title: "2025–2026 Federal Student Loan Interest Rates",
  headers: ["Loan Type", "Interest Rate", "Typical Balance"],
  rows: [
    ["Direct Subsidized/Unsubsidized (Undergrad)", "6.39%", "$20,000–$31,000"],
    ["Direct Unsubsidized (Graduate)", "7.94%", "$40,000–$100,000"],
    ["Direct PLUS (Parent/Graduate)", "8.94%", "$30,000–$150,000"],
    ["Private Loans (variable)", "5%–14%", "Varies"],
  ],
};

const slHowToSteps = [
  "Enter your total student loan balance, interest rate, and current repayment term (typically 10 years for standard federal).",
  "Optionally enter an extra monthly payment amount to see how accelerated payments affect your timeline and savings.",
  "Review your monthly payment, total interest cost, payoff date, and the interest saved from extra payments.",
  "Compare different scenarios: try adjusting extra payment amounts to find the sweet spot between cash flow and interest savings.",
];

const staticFaqs = [
  { q: "What are the federal student loan rates for 2025–2026?", a: "Undergraduate Direct Loans: 6.39% fixed. Graduate Direct Unsubsidized: 7.94% fixed. Parent/Graduate PLUS: 8.94% fixed. These rates are set annually by Congress and remain fixed for the life of the loan." },
  { q: "How much does an extra $50/month save on student loans?", a: "On a $35,000 loan at 6.39%, paying $50 extra per month saves approximately $3,237 in interest and pays off the loan 2.5 years early. On a $65,000 loan at 7.94%, $50 extra saves approximately $3,200 and shaves 1.7 years off repayment." },
  { q: "Should I refinance my student loans?", a: "Refinance private loans if you can get a lower rate with good credit (700+). Never refinance federal loans — you permanently lose access to income-driven repayment, PSLF, deferment, and forbearance. If you have 8–12% private loans and can refinance to 5–7%, it can save thousands." },
  { q: "What is PSLF and who qualifies?", a: "Public Service Loan Forgiveness forgives remaining federal loan debt after 120 qualifying monthly payments (10 years) while working full-time for a government or non-profit employer. Only Direct Loans on income-driven repayment plans qualify. This can save borrowers tens of thousands of dollars." },
  { q: "Should I pay off student loans or invest?", a: "If your loan rate is 6%+, prioritize extra payments — it is a guaranteed 6%+ return. If your rate is under 4%, investing in index funds (historically 7–10% annual returns) may be better. At the current 6.39% undergraduate rate, paying extra is the safer choice." },
  { q: "What repayment plan should I choose?", a: "Standard 10-year if you can afford $395/month on $35,000 — it minimizes total interest. Income-driven (IDR) plans if you need lower payments (10–20% of discretionary income). Extended 25-year if you have $30,000+ and need breathing room, but expect to pay nearly 3x more interest." },
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
        formula={slFormula}
        rateTable={slRateTable}
        howToSteps={slHowToSteps}
      />
    </>
  );
}

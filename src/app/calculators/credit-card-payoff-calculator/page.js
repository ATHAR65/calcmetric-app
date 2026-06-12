import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "credit-card-payoff-calculator";
const CALC_NAME = "Credit Card Payoff Calculator 2026";
const CALC_DESCRIPTION = "Compare snowball vs avalanche debt payoff methods. Calculate how long it takes to pay off credit card debt and how much interest you save with extra payments. Free 2026 calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The average American carries <strong>$6,580 in credit card debt</strong>, and with average APRs exceeding 24% in 2026, minimum payments can trap borrowers in a cycle where most of each payment goes to interest. A $6,000 balance at 24% APR with a $150 minimum payment takes over <strong>7 years to pay off</strong> and costs $6,700+ in interest — more than the original balance.",
  "There are two proven strategies for paying off credit card debt: the <strong>Avalanche Method</strong> (pay off highest-APR cards first) saves the most money in total interest, while the <strong>Snowball Method</strong> (pay off smallest balances first) provides faster psychological wins. Research from Harvard Business School shows the snowball method leads to higher payoff rates because the momentum of eliminating balances keeps people motivated.",
  "The most powerful debt payoff tool is making <strong>extra payments above the minimum</strong>. Even $50 extra per month dramatically accelerates payoff. On a $6,000 balance at 24% APR, paying $200/month instead of $150 cuts the payoff time from 7+ years to <strong>3 years and 5 months</strong> and saves roughly $3,600 in interest. The calculator shows exactly how much each extra dollar saves.",
  "Balance transfer cards with <strong>0% introductory APR</strong> (typically 12–21 months) can save hundreds in interest if you can pay off the balance during the promo period. Transfer fees are usually 3%–5% of the amount transferred. A $6,000 balance transfer at 3% fee costs $180 upfront but saves $2,400+ in interest over 15 months compared to a 24% APR card. Make sure you can pay the full balance before the promo expires.",
];

const ccFormula = `Months to Pay Off = −log(1 − (Balance × Rate/12) / Payment) / log(1 + Rate/12)
Total Interest = (Monthly Payment × Months) − Balance
Interest Saved with Extra Payment = Old Total Interest − New Total Interest

Avalanche Order: Sort cards by APR (highest first)
Snowball Order: Sort cards by balance (smallest first)`;

const ccHowToSteps = [
  "Enter each credit card's current balance, APR (annual percentage rate), and minimum monthly payment.",
  "Enter how much total you can pay toward all credit cards each month (above the combined minimums).",
  "Select your payoff strategy: Avalanche (highest APR first) or Snowball (smallest balance first).",
  "Review the payoff timeline, total interest paid, interest savings versus minimum-only payments, and a month-by-month schedule showing each card's declining balance.",
];

const staticFaqs = [
  { q: "Should I use the snowball or avalanche method?", a: "The Avalanche method (paying highest-APR cards first) saves the most money in total interest. The Snowball method (paying smallest balances first) is psychologically motivating because you eliminate entire balances faster. If your APRs are similar across cards, use Snowball for motivation. If one card has a much higher APR, use Avalanche to avoid overpaying interest." },
  { q: "How much interest can I save by paying extra?", a: "The savings depend on your balance, APR, and extra payment amount. Example: $8,000 at 22% APR — minimum payments ($200/mo) cost $5,800 in total interest over 6.5 years. Paying $350/mo reduces total interest to $2,200 and payoff time to 2.5 years — saving $3,600. Every additional $50/month has an outsized impact because more of each payment goes toward principal." },
  { q: "What is a good debt payoff timeline?", a: "Financial advisors generally recommend paying off high-interest credit card debt within 2 to 3 years. If your timeline exceeds 5 years at current payment levels, consider increasing payments, transferring balances to a 0% APR card, or exploring a debt consolidation loan at a lower rate. Paying only minimums on high-APR debt can mean spending 10+ years in repayment." },
  { q: "Should I consolidate credit card debt?", a: "Consolidation makes sense if you can get a significantly lower interest rate. A personal loan at 10%–12% to pay off cards at 22%–26% saves substantial interest. Balance transfer cards with 0% intro APR are even better if you can pay off the balance during the promotional period. Avoid consolidation if it would extend your payoff timeline so much that total interest paid increases." },
  { q: "Does paying off credit cards improve my credit score?", a: "Yes, significantly. Credit utilization (balance divided by credit limit) is the second-largest factor in your credit score. Reducing utilization from 80% to under 30% can boost your score by 50–100 points. Keep cards open after paying them off — closing them reduces your total available credit and increases your utilization ratio on remaining cards." },
  { q: "Should I save money or pay off credit cards first?", a: "Pay off high-interest credit cards first. Credit card APRs of 20%–28% far exceed savings account returns of 4%–5%. Keep a small emergency fund ($1,000–$2,000) to avoid adding new debt, then direct all extra money to the highest-APR card. Once credit cards are paid off, build your full 3–6 month emergency fund." },
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
        formula={ccFormula}
        howToSteps={ccHowToSteps}
      />
    </>
  );
}

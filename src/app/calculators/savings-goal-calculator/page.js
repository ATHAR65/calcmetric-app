import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "savings-goal-calculator";
const CALC_NAME = "Savings Goal Calculator 2026";
const CALC_DESCRIPTION = "Calculate how your savings grow with regular contributions and compound interest. Free savings goal calculator with year-by-year projections.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Compound interest is called the <strong>eighth wonder of the world</strong> for good reason. At 7% annual return, $500/month grows to <strong>$121,000 in 10 years</strong>, $305,000 in 20 years, and <strong>$607,000 in 30 years</strong> — your contributions total only $180,000, meaning $427,000 comes from investment growth alone. The earlier you start, the more compound interest does the heavy lifting.",
  "The <strong>Rule of 72</strong> gives a quick estimate: divide 72 by your annual return rate to find how long it takes to double your money. At 7%, your money doubles every ~10.3 years. At 10%, every 7.2 years. A $10,000 investment at 7% becomes $20,000 in 10 years, $40,000 in 20 years, and $80,000 in 30 years — without adding a single dollar.",
  "Where you save matters as much as how much you save. In 2026: <strong>high-yield savings accounts</strong> earn 4.5–5.0% APY (great for short-term goals under 3 years), <strong>S&P 500 index funds</strong> average 10% historically (best for goals 5+ years away), and <strong>bond funds</strong> yield 4–6% (moderate risk, 3–5 year timeline). Match your savings vehicle to your time horizon.",
  "Automate your savings using the <strong>pay yourself first</strong> method: set up an automatic transfer on payday before you can spend the money. Research shows automating savings increases the average savings rate by <strong>73%</strong> compared to manual transfers. Even $200/month automated grows to $28,800 in 10 years at 5% APY — with zero effort after setup.",
];

const savingsFormula = `Future Value = P × (1+r)^n + PMT × [(1+r)^n − 1] / r
  P = initial deposit
  r = monthly interest rate
  n = number of months
  PMT = monthly contribution

Monthly Needed = Goal × r / [(1+r)^n − 1]

Example: $50,000 goal in 5 years, starting from $0
  At 5% HYSA: need $740/month
  At 7% investment: need $699/month
  At 10% investment: need $644/month
  Difference = $96/month savings by choosing 10% over 5%`;

const savingsRateTable = {
  title: "Growth of $500/month at Different Return Rates",
  headers: ["Time Period", "Total Contributed", "At 5% (HYSA)", "At 7% (Index Fund)", "At 10% (Aggressive)"],
  rows: [
    ["5 years", "$30,000", "$34,032", "$35,796", "$38,724"],
    ["10 years", "$60,000", "$77,641", "$86,580", "$102,422"],
    ["20 years", "$120,000", "$205,517", "$260,464", "$379,684"],
    ["30 years", "$180,000", "$416,129", "$607,067", "$1,130,244"],
  ],
};

const savingsHowToSteps = [
  "Enter your savings goal amount and target date (or number of years).",
  "Enter your starting balance and the monthly amount you plan to save.",
  "Select your expected annual return rate based on your savings vehicle (HYSA, bonds, stocks).",
  "Review the projected growth timeline, whether you will hit your goal, and the monthly contribution needed if there is a shortfall.",
];

const staticFaqs = [
  { q: "How much should I save each month to reach my goal?", a: "It depends on three factors: your goal amount, time horizon, and expected return rate. For a $50,000 goal in 5 years at 5% return, you need about $740/month. For the same goal in 10 years, only $323/month. Use the calculator with your specific numbers — even a 1% difference in return rate or adding 2 more years significantly reduces the monthly requirement." },
  { q: "What is compound interest?", a: "Compound interest is interest earned on both your original principal AND previously accumulated interest. Simple interest is calculated only on the principal. Example: $10,000 at 7% simple interest earns $700/year forever. At 7% compound interest, year 1 earns $700, year 2 earns $749, year 10 earns $1,378. Over 30 years, compound interest produces 7.6× your original amount vs 3.1× for simple interest." },
  { q: "How does compound interest grow over time?", a: "Exponentially — growth accelerates as your base gets larger. At 7% annual return: $10,000 becomes $19,672 in 10 years (doubled), $38,697 in 20 years (nearly 4×), and $76,123 in 30 years (nearly 8×). The last 10 years produced $37,426 in growth — nearly as much as the first 20 years combined. This is why starting early matters enormously." },
  { q: "What is a realistic investment return assumption?", a: "For planning purposes: HYSA/savings 4.5–5.0% (2026 rates, variable), US bonds 4–6%, S&P 500 index fund 7–8% after inflation (10% nominal historical average), aggressive growth 10–12% (higher risk). Use 7% for long-term stock market planning — it accounts for inflation. For conservative planning (retirement), use 6% to build in a safety margin." },
  { q: "Should I save in a HYSA or invest in the stock market?", a: "Time horizon is the deciding factor. Goals under 3 years: HYSA (4.5–5.0% guaranteed, no risk of loss). Goals 3–5 years: split between HYSA and conservative investments. Goals 5+ years: stock market index funds (higher returns compensate for short-term volatility). Never invest money you will need within 2 years — a market drop could force you to sell at a loss." },
  { q: "What is the pay yourself first method?", a: "Set up automatic transfers from checking to savings/investment on payday — before you have a chance to spend the money. This reverses the typical pattern (spend first, save leftovers) and treats savings as a non-negotiable expense. Start with 10–15% of take-home pay and increase by 1% every 6 months. Research shows automated savers accumulate 73% more than manual savers." },
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
        formula={savingsFormula}
        rateTable={savingsRateTable}
        howToSteps={savingsHowToSteps}
      />
    </>
  );
}

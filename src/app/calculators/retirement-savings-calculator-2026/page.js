import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "retirement-savings-calculator-2026";
const CALC_NAME = "Retirement Savings Calculator 2026";
const CALC_DESCRIPTION = "Estimate if you're on track for retirement with the 4% rule, savings growth projections, and income replacement rate. Free 2026 retirement calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The <strong>4% rule</strong> is the most widely used retirement planning guideline: withdraw 4% of your portfolio in year one of retirement, then adjust annually for inflation. To support $60,000 in annual retirement spending, you need <strong>$1,500,000 saved</strong> (25× annual expenses). For $80,000/year, target $2,000,000.",
  "The power of <strong>compound interest</strong> makes starting early critical. Investing $500/month starting at age 25 at 7% annual returns yields approximately <strong>$1,200,000 by age 65</strong>. Starting at 35 with the same $500/month yields only $567,000 — less than half. The decade of extra compounding nearly doubles the result.",
  "Financial advisors recommend saving <strong>15% of gross income</strong> for retirement (including employer match). The 2026 401(k) contribution limit is <strong>$23,500</strong> ($31,000 if age 50+). IRA limits are $7,000 ($8,000 if 50+). Maximizing tax-advantaged accounts before taxable investing ensures the most tax-efficient growth.",
  "Most retirees need to replace <strong>70–80% of pre-retirement income</strong> to maintain their lifestyle. Social Security replaces approximately 40% for average earners and 27% for high earners. The gap between Social Security and your target income must come from personal savings — this is your <strong>retirement savings gap</strong>.",
];

const retireFormula = `Retirement Target = Annual Expenses × 25 (4% rule)
Future Value = PMT × [(1+r)^n − 1] / r
  PMT = monthly contribution
  r = monthly return rate
  n = months until retirement

Example: $500/month, 7% return, 30 years
  FV = $500 × [(1.00583)^360 − 1] / 0.00583
  FV = $566,765
  At 4% rule, supports $22,670/year withdrawals`;

const retireRateTable = {
  title: "Retirement Savings Growth by Monthly Contribution (7% Return)",
  headers: ["Monthly Amount", "After 20 Years", "After 30 Years", "After 40 Years"],
  rows: [
    ["$200", "$104,000", "$227,000", "$480,000"],
    ["$500", "$260,000", "$567,000", "$1,200,000"],
    ["$1,000", "$520,000", "$1,134,000", "$2,400,000"],
    ["$1,500", "$781,000", "$1,701,000", "$3,600,000"],
    ["$2,000", "$1,041,000", "$2,268,000", "$4,800,000"],
  ],
};

const retireHowToSteps = [
  "Enter your current age, target retirement age, and current retirement savings balance.",
  "Enter your monthly contribution amount and expected annual investment return (7% is a common stock market assumption).",
  "Enter your estimated annual expenses in retirement (or use 70–80% of current income as a starting point).",
  "Review your projected savings at retirement, whether you meet the 4% rule target, your savings gap (if any), and how adjusting contributions or retirement age changes the outcome.",
];

const staticFaqs = [
  { q: "How much do I need to retire comfortably?", a: "Using the 4% rule, multiply your expected annual retirement expenses by 25. For $50,000/year in expenses, target $1,250,000. For $80,000/year, target $2,000,000. This provides a sustainable withdrawal rate that historically lasts 30+ years. Adjust higher if retiring before 60 or if you want extra safety margin." },
  { q: "What is the 4% rule for retirement?", a: "The 4% rule states that you can withdraw 4% of your retirement portfolio in the first year of retirement, then adjust the dollar amount annually for inflation. Based on the Trinity Study, this approach has a 95%+ success rate of lasting 30 years across historical market conditions. Some advisors now recommend 3.5% for added safety." },
  { q: "How does compound interest help retirement savings?", a: "Compound interest means your earnings generate their own earnings. At 7% annual return, $100,000 grows to $200,000 in ~10 years, $400,000 in ~20 years, and $800,000 in ~30 years — doubling roughly every decade. Starting 10 years earlier can nearly double your final balance because the last doublings are the largest in dollar terms." },
  { q: "What is a good retirement savings rate?", a: "Financial advisors recommend saving 15% of gross income for retirement, including employer 401(k) match. If your employer matches 4%, save at least 11% yourself. If you started late (after 35), aim for 20–25%. The 2026 401(k) limit is $23,500 ($31,000 age 50+) and IRA limit is $7,000 ($8,000 age 50+)." },
  { q: "How much will Social Security replace?", a: "Social Security replaces approximately 40% of pre-retirement income for average earners ($60,000/year), 27% for high earners ($150,000+), and up to 75% for low earners ($25,000/year). The maximum Social Security benefit at full retirement age (67) in 2026 is approximately $3,900/month ($46,800/year). You can estimate your benefit at ssa.gov." },
  { q: "Should I prioritize 401(k) or IRA?", a: "Contribute to your 401(k) up to the employer match first (it is free money). Then max out a Roth IRA ($7,000 for 2026) for tax-free growth. Then return to the 401(k) and contribute up to the $23,500 limit. After maxing both, use taxable brokerage accounts. This order maximizes tax-advantaged space and employer benefits." },
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
        formula={retireFormula}
        rateTable={retireRateTable}
        howToSteps={retireHowToSteps}
      />
    </>
  );
}

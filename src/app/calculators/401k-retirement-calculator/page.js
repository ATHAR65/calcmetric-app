import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "401k-retirement-calculator";
const CALC_NAME = "401(k) Retirement Calculator 2026";
const CALC_DESCRIPTION = "Project your 401(k) growth with employer matching and compound interest. Free retirement calculator with year-by-year projections and 2026 contribution limits.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "A 401(k) is an employer-sponsored retirement plan that lets you contribute pre-tax dollars from your paycheck. The money grows <strong>tax-deferred</strong> — you do not pay income tax on contributions or investment gains until you withdraw in retirement. For 2026, the employee contribution limit is <strong>$23,500</strong>, with an additional <strong>$7,500 catch-up contribution</strong> for workers age 50 and older, bringing the total to $31,000.",
  "The employer match is essentially <strong>free money</strong> and the most important factor in 401(k) growth. A typical match is 50% of your contributions up to 6% of your salary. If you earn $80,000 and contribute 6% ($4,800), your employer adds $2,400 — a guaranteed 50% return on that money. Not contributing enough to capture the full match is leaving guaranteed returns on the table.",
  "The total 401(k) contribution limit (employee + employer + after-tax) is <strong>$70,000 for 2026</strong> ($77,500 with catch-up). This ceiling matters for the mega backdoor Roth strategy: if your plan allows after-tax contributions and in-plan Roth conversions, you can contribute beyond the $23,500 employee limit and convert the after-tax portion to Roth.",
  "Compound growth is the engine of 401(k) wealth. Contributing $23,500 per year with a 4% employer match ($4,000 on a $100,000 salary) and 8% average returns produces roughly <strong>$2.5 million after 30 years</strong>. The first $500,000 takes about 15 years, but the second $500,000 takes only 6 years — demonstrating how compounding accelerates over time. Starting 10 years earlier roughly doubles your ending balance.",
];

const retirementRateTable = {
  title: "2026 401(k) Contribution Limits",
  headers: ["Limit Type", "Under 50", "Age 50+", "Notes"],
  rows: [
    ["Employee Deferral", "$23,500", "$31,000", "$7,500 catch-up"],
    ["Total (Employee + Employer + After-tax)", "$70,000", "$77,500", "Section 415(c) limit"],
    ["Employer Match (typical)", "3%–6% of salary", "Same", "Varies by employer plan"],
    ["Roth 401(k) Deferral", "$23,500", "$31,000", "Same limit as Traditional"],
  ],
};

const retirementFormula = `Future Value = Existing Balance × (1 + r)^n +
  Annual Contribution × [(1 + r)^n − 1] / r
Where:
  r = Expected annual return (e.g., 8%)
  n = Years until retirement
  Annual Contribution = Your deferral + Employer match

Required Monthly Savings = Target ÷ [(1 + r/12)^(n×12) − 1] × (r/12)`;

const retirementHowToSteps = [
  "Enter your current age, retirement age, and current 401(k) balance.",
  "Enter your annual salary and contribution percentage (or dollar amount). The calculator applies the 2026 limits.",
  "Enter your employer match formula (e.g., 50% match on first 6% of salary).",
  "Select your expected annual return rate and review the projection: total balance at retirement, total contributions vs growth, and a year-by-year breakdown.",
];

const staticFaqs = [
  { q: "What is the 401(k) contribution limit in 2026?", a: "The employee deferral limit is $23,500 for 2026. Workers age 50 and older can contribute an additional $7,500 in catch-up contributions, for a total of $31,000. The combined limit including employer contributions and after-tax money is $70,000 (or $77,500 with catch-up). These limits apply across all 401(k) accounts with a single employer." },
  { q: "How does employer matching work?", a: "Employer matching means your company contributes additional money to your 401(k) based on your own contributions. A common formula is 50% match on the first 6% of salary you contribute. If you earn $80,000 and contribute 6% ($4,800), your employer adds $2,400. Some employers use dollar-for-dollar matching up to 3%–4%. Always contribute at least enough to capture the full match." },
  { q: "What happens to my 401(k) when I change jobs?", a: "You have four options: leave it in your former employer's plan (if allowed), roll it over to your new employer's 401(k), roll it over to a Traditional IRA (most flexibility), or cash it out (worst option — triggers income tax plus a 10% early withdrawal penalty if under 59½). A direct rollover to an IRA avoids all taxes and penalties and gives you more investment choices." },
  { q: "When can I withdraw from my 401(k) without penalty?", a: "Penalty-free withdrawals begin at age 59½. The Rule of 55 allows penalty-free withdrawals if you leave your job in or after the year you turn 55 (from that specific employer's plan). Hardship withdrawals are available for certain emergencies but still incur income tax. 401(k) loans (up to $50,000 or 50% of vested balance) avoid taxes if repaid within 5 years." },
  { q: "Traditional 401(k) vs Roth 401(k) — which should I choose?", a: "Traditional 401(k) contributions reduce your taxable income now but you pay income tax on all withdrawals in retirement. Roth 401(k) contributions are made with after-tax dollars but withdrawals in retirement are completely tax-free. Choose Roth if you are in a lower tax bracket now than you expect in retirement. Many advisors recommend splitting contributions between both for tax diversification." },
  { q: "How much should I have in my 401(k) by age?", a: "Common benchmarks: 1× salary by 30, 3× by 40, 6× by 50, 8× by 60, and 10× by 67. On a $100,000 salary, that means $100K by 30, $300K by 40, $600K by 50, $800K by 60, and $1M by 67. These are guidelines — your actual target depends on your planned retirement age, expected Social Security, and desired retirement lifestyle." },
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
        formula={retirementFormula}
        rateTable={retirementRateTable}
        howToSteps={retirementHowToSteps}
      />
    </>
  );
}

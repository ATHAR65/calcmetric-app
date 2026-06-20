import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "budget-calculator";
const CALC_NAME = "Budget Calculator 2026";
const CALC_DESCRIPTION = "Create a comprehensive monthly budget with 50/30/20 rule analysis. Free 2026 budget calculator with visual breakdowns for US households.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The <strong>50/30/20 rule</strong> is the most widely recommended budgeting framework: allocate <strong>50% of after-tax income to needs</strong> (housing, utilities, groceries, insurance, minimum debt payments), <strong>30% to wants</strong> (dining out, entertainment, subscriptions, travel), and <strong>20% to savings and extra debt repayment</strong> (emergency fund, retirement, extra loan payments).",
  "For a household earning <strong>$5,000/month after taxes</strong>, the 50/30/20 breakdown is: $2,500 for needs, $1,500 for wants, and $1,000 for savings/debt. The biggest mistake people make is misclassifying wants as needs — a $200/month gym membership is a want, not a need. Your phone plan is a need; the premium unlimited plan upgrade is a want.",
  "Housing should not exceed <strong>30% of gross income</strong> (the traditional lending guideline) or 25–28% of after-tax income. In high-cost cities, housing often consumes 40–50% of income, forcing cuts in other categories. If housing exceeds 30%, reduce the 'wants' allocation first. The average US household spends: housing 33%, transportation 16%, food 13%, insurance/pensions 12%, healthcare 8%.",
  "The most effective budgeting method depends on your personality. <strong>Zero-based budgeting</strong>: assign every dollar a job until income minus expenses equals zero (best for detail-oriented people). <strong>Envelope method</strong>: use cash categories to prevent overspending (best for impulse spenders). <strong>Pay-yourself-first</strong>: automate savings, then spend the rest freely (best for people who hate tracking).",
];

const budgetFormula = `50/30/20 Budget Allocation:
  Needs = After-Tax Income × 50%
  Wants = After-Tax Income × 30%
  Savings/Debt = After-Tax Income × 20%

Example: $6,000/month after-tax income
  Needs (50%): $3,000
    Housing: $1,500 | Utilities: $250 | Groceries: $500
    Insurance: $350 | Transportation: $300 | Min debt: $100
  Wants (30%): $1,800
    Dining: $400 | Entertainment: $200 | Subscriptions: $100
    Shopping: $400 | Travel: $500 | Personal: $200
  Savings (20%): $1,200
    Emergency fund: $400 | Retirement: $600 | Extra debt: $200`;

const budgetRateTable = {
  title: "Average US Household Budget Breakdown (2026)",
  headers: ["Category", "Average %", "At $5,000/mo", "At $8,000/mo", "Recommended Max %"],
  rows: [
    ["Housing (rent/mortgage)", "33%", "$1,650", "$2,640", "28–30%"],
    ["Transportation", "16%", "$800", "$1,280", "10–15%"],
    ["Food (groceries + dining)", "13%", "$650", "$1,040", "10–15%"],
    ["Insurance & Pensions", "12%", "$600", "$960", "10–15%"],
    ["Healthcare", "8%", "$400", "$640", "5–10%"],
    ["Entertainment & Personal", "5%", "$250", "$400", "5–10%"],
    ["Savings & Debt Repayment", "8%", "$400", "$640", "20%+"],
  ],
};

const budgetHowToSteps = [
  "Enter your monthly after-tax income (take-home pay from all sources).",
  "Enter your monthly expenses by category: housing, utilities, groceries, transportation, insurance, debt payments, and discretionary spending.",
  "The calculator categorizes your spending into needs, wants, and savings, and compares it to the 50/30/20 guideline.",
  "Review where you are over or under budget, identify the biggest savings opportunities, and see your monthly surplus or deficit.",
];

const staticFaqs = [
  { q: "What is the 50/30/20 budget rule?", a: "A budgeting framework created by Senator Elizabeth Warren: 50% of after-tax income goes to needs (housing, utilities, groceries, insurance, minimum debt payments), 30% to wants (dining, entertainment, subscriptions, travel, shopping), and 20% to savings and extra debt repayment (emergency fund, retirement accounts, student loan overpayments). It is a guideline, not a strict rule — adjust percentages for your situation." },
  { q: "How much should I save each month?", a: "At least 20% of after-tax income is the standard recommendation. This includes retirement contributions (401k, IRA), emergency fund building, and extra debt payments. If you cannot save 20%, start wherever you can — even 5% ($250/month on $5,000 income). Increase by 1% every few months. The most important step is starting, not hitting a perfect percentage." },
  { q: "What counts as a need vs a want?", a: "Needs are expenses required for survival and basic functioning: housing (rent/mortgage), utilities (electricity, water, heat), basic groceries, health insurance, basic transportation to work, minimum debt payments, and essential childcare. Wants are everything that improves quality of life but is not essential: dining out, streaming services, gym memberships, vacations, premium phone plans, brand-name clothing, and hobbies." },
  { q: "How do I fix a budget deficit?", a: "First, audit subscriptions — the average American spends $219/month on subscriptions, often without realizing it. Second, reduce food spending (meal prep saves $200–$400/month vs dining out). Third, negotiate bills (insurance, internet, phone — calling to negotiate saves $50–$100/month on average). Fourth, address housing if it exceeds 30% of income (consider roommates, downsizing, or relocating)." },
  { q: "What is zero-based budgeting?", a: "Zero-based budgeting assigns every dollar of income to a specific category until income minus expenses equals exactly zero. Every dollar has a 'job' — whether that is rent, groceries, or emergency savings. This prevents money from disappearing into untracked spending. Tools like YNAB (You Need A Budget) are built on this method. It is the most detailed approach and works best for people who want full control." },
  { q: "How much should I spend on housing?", a: "The traditional guideline is no more than 30% of gross income (what lenders use to qualify you) or 25–28% of after-tax income. On $5,000/month take-home, that is $1,250–$1,400 for rent/mortgage including utilities. In high-cost cities this may not be realistic — if housing exceeds 35%, aggressively cut other spending categories or increase income through side work." },
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
        formula={budgetFormula}
        rateTable={budgetRateTable}
        howToSteps={budgetHowToSteps}
      />
    </>
  );
}

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "emergency-fund-calculator";
const CALC_NAME = "Emergency Fund Calculator 2026";
const CALC_DESCRIPTION = "Calculate your emergency fund target based on monthly expenses, income stability, and dependents. Free emergency savings calculator with personalized timeline.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Financial experts recommend an emergency fund covering <strong>3–6 months of essential expenses</strong> — not income, but the minimum you need to survive: rent/mortgage, utilities, groceries, insurance, transportation, and minimum debt payments. For a household spending $4,000/month on essentials, the target is <strong>$12,000–$24,000</strong>.",
  "Your ideal emergency fund size depends on <strong>income stability</strong>. Dual-income households with stable W-2 jobs may be fine with 3 months. Single-income households, freelancers, gig workers, and commission-based earners should target <strong>6–12 months</strong> due to higher income volatility. Self-employed workers face the added risk of business slowdowns and irregular client payments.",
  "Keep your emergency fund in a <strong>high-yield savings account (HYSA)</strong> earning 4.5–5.0% APY in 2026. Do not invest emergency funds in stocks, bonds, or other volatile assets — the point is immediate availability without risk of loss. Good HYSA options include online banks like Marcus, Ally, and Discover, which offer FDIC insurance and no minimum balance requirements.",
  "Building an emergency fund from zero: automate transfers of <strong>$200–$500/month</strong> to a dedicated HYSA. At $300/month, you reach a $3,600 starter fund in one year. Use tax refunds, bonuses, and side income to accelerate. The first $1,000 is the most critical milestone — it covers most common emergencies (car repair, medical copay, appliance replacement).",
];

const efFormula = `Emergency Fund Target = Monthly Essential Expenses × Months Needed
Months Needed:
  Dual income, stable jobs = 3 months
  Single income, stable = 4–6 months
  Freelancer/gig worker = 6–9 months
  Self-employed, variable income = 9–12 months

Example: $4,500/month essentials, single income
  Target = $4,500 × 6 = $27,000
  At $400/month savings = 67 months (5.6 years)
  At $400/month + $3,000 annual bonus = 52 months (4.3 years)`;

const efRateTable = {
  title: "Emergency Fund Targets by Situation",
  headers: ["Situation", "Months Needed", "At $3,500/mo Expenses", "At $5,000/mo Expenses"],
  rows: [
    ["Dual income, stable jobs", "3 months", "$10,500", "$15,000"],
    ["Single income, stable job", "6 months", "$21,000", "$30,000"],
    ["Freelancer / gig worker", "9 months", "$31,500", "$45,000"],
    ["Self-employed, variable", "12 months", "$42,000", "$60,000"],
    ["With dependents, add", "+1–2 months", "+$3,500–$7,000", "+$5,000–$10,000"],
  ],
};

const efHowToSteps = [
  "Enter your monthly essential expenses: rent/mortgage, utilities, groceries, insurance, transportation, and minimum debt payments.",
  "Select your income type: dual income, single income W-2, freelancer/gig, or self-employed with variable income.",
  "Enter your current emergency savings balance and how much you can save per month.",
  "Review your personalized target, current progress percentage, months to reach the goal, and strategies to accelerate savings.",
];

const staticFaqs = [
  { q: "How much emergency fund should I have?", a: "3–6 months of essential expenses is the standard guideline. Dual-income stable households can lean toward 3 months ($10,500–$15,000 for typical expenses). Single-income households, freelancers, and self-employed workers should target 6–12 months ($21,000–$60,000). Add 1–2 extra months if you have dependents." },
  { q: "Where should I keep my emergency fund?", a: "A high-yield savings account (HYSA) earning 4.5–5.0% APY is ideal. Your emergency fund must be liquid (accessible within 1–2 business days), FDIC-insured, and separate from your checking account to avoid spending temptation. Do not invest emergency funds in stocks or bonds — you need guaranteed availability." },
  { q: "Is $1,000 enough for an emergency fund?", a: "$1,000 is an excellent first milestone — it covers most common emergencies like car repairs ($500–$1,000), medical copays ($100–$500), and appliance replacement. However, it will not cover job loss, major medical bills, or significant home repairs. Continue building to 3–6 months of expenses after reaching $1,000." },
  { q: "How quickly can I build an emergency fund?", a: "At $300/month, you reach $3,600 in one year and $10,800 in three years. Accelerate with tax refunds (average $2,800), work bonuses, selling unused items, and side income. Many people reach a 3-month fund within 12–18 months by combining automated savings with lump-sum deposits from windfalls." },
  { q: "Should I pay off debt or build an emergency fund first?", a: "Build a $1,000–$2,000 starter emergency fund first, then attack high-interest debt (credit cards at 20%+), then complete your full emergency fund. Without even a small emergency fund, unexpected expenses get added to credit card debt, creating a cycle. The exception: always make minimum debt payments while building your emergency fund." },
  { q: "Does my emergency fund earn interest?", a: "Yes, in a high-yield savings account. At 5% APY, a $20,000 emergency fund earns approximately $1,000/year in interest — essentially free money for keeping your fund in the right account. Traditional bank savings accounts pay 0.01–0.10% ($2–$20/year on $20,000). The difference in interest alone justifies switching to an HYSA." },
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
        formula={efFormula}
        rateTable={efRateTable}
        howToSteps={efHowToSteps}
      />
    </>
  );
}

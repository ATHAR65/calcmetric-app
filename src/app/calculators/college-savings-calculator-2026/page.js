import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "college-savings-calculator-2026";
const CALC_NAME = "529 College Savings Calculator 2026";
const CALC_DESCRIPTION = "Calculate 529 plan growth, project college costs, and find your monthly savings target. Free 2026 college savings calculator with state tax deduction estimates.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The average cost of a 4-year degree in 2026 is approximately <strong>$100,000 for in-state public</strong> universities, <strong>$180,000 for out-of-state public</strong>, and <strong>$240,000+ for private</strong> institutions (including tuition, room, board, and fees). College costs have been rising approximately 3–5% per year, outpacing general inflation.",
  "A <strong>529 plan</strong> is a state-sponsored investment account with tax-free growth and tax-free withdrawals for qualified education expenses. Contributions are not federally deductible, but <strong>35+ states offer state income tax deductions</strong> (ranging from $2,000 to unlimited). The 2026 maximum contribution varies by state but is typically $300,000–$500,000 lifetime per beneficiary.",
  "Under <strong>SECURE 2.0</strong>, starting in 2024 unused 529 funds can be rolled into a <strong>Roth IRA</strong> for the beneficiary (up to $35,000 lifetime, subject to annual Roth contribution limits, and the 529 must have been open 15+ years). This eliminates one of the biggest concerns about 529 plans — the risk of over-saving.",
  "Starting early makes an enormous difference. Saving <strong>$300/month from birth</strong> at 7% annual returns accumulates approximately <strong>$119,000 by age 18</strong>. Starting at age 8 with the same $300/month yields only $51,000. The 10-year head start more than doubles the balance. Even $100/month from birth grows to ~$40,000 — enough to cover 40% of in-state public university costs.",
];

const collegeFormula = `Future College Cost = Current Cost × (1 + Inflation Rate)^Years
Monthly Savings = FV × r / [(1+r)^n − 1]
  FV = future college cost target
  r = monthly investment return
  n = months until college

Example: Newborn, targeting $120,000 (in-state public in 18 years)
  Current cost $100K × (1.04)^18 = ~$120,000 (at 4% inflation)
  At 7% return, need ~$300/month
  Total contributed = $64,800
  Investment growth = $55,200 (tax-free in 529)`;

const collegeRateTable = {
  title: "Estimated 4-Year College Costs (Starting 2026)",
  headers: ["School Type", "Current Cost", "In 10 Years", "In 18 Years"],
  rows: [
    ["In-State Public", "$100,000", "$148,000", "$203,000"],
    ["Out-of-State Public", "$180,000", "$267,000", "$365,000"],
    ["Private University", "$240,000", "$355,000", "$487,000"],
    ["Community College (2yr)", "$20,000", "$30,000", "$41,000"],
  ],
};

const collegeHowToSteps = [
  "Enter your child's current age (or years until college starts).",
  "Select the target school type (in-state public, out-of-state, private) for estimated future costs.",
  "Enter your current savings balance and expected monthly contribution amount.",
  "Review the projected college cost, your 529 balance at enrollment, the savings gap (if any), and the monthly savings needed to fully fund the goal.",
];

const staticFaqs = [
  { q: "How much should I save for college?", a: "Target varies by school type: approximately $120,000 for in-state public (in 18 years), $200,000+ for out-of-state, and $300,000+ for private. Even saving enough to cover 50–70% is valuable — financial aid, scholarships, and student contributions can cover the rest. Starting with $200–$400/month from birth gets most families to their goal." },
  { q: "What is a 529 plan?", a: "A 529 is a state-sponsored education savings account offering tax-free investment growth and tax-free withdrawals for qualified education expenses (tuition, room and board, books, computers, and up to $10,000/year for K-12). Over 35 states offer state income tax deductions for contributions. There are no income limits to contribute." },
  { q: "What is the average cost of college in 2026?", a: "For 2025–2026: in-state public averages $25,000/year ($100,000 for 4 years), out-of-state public averages $45,000/year ($180,000), and private university averages $60,000/year ($240,000). These include tuition, fees, room, and board. Costs rise approximately 3–5% annually." },
  { q: "Can I use 529 funds for K-12 education?", a: "Yes, up to $10,000 per year per beneficiary can be withdrawn tax-free for K-12 tuition at public, private, or religious schools. This was added by the Tax Cuts and Jobs Act of 2017. Note that some states do not conform to this federal provision and may tax K-12 withdrawals at the state level." },
  { q: "What happens to unused 529 funds?", a: "Under SECURE 2.0 (effective 2024), unused 529 funds can be rolled into a Roth IRA for the beneficiary — up to $35,000 lifetime, subject to annual Roth limits, and the 529 must have been open 15+ years. You can also change the beneficiary to another family member, use funds for graduate school, or withdraw with a 10% penalty plus income tax on earnings." },
  { q: "Do 529 plans affect financial aid?", a: "Parent-owned 529 plans are reported as a parental asset on FAFSA, which reduces aid eligibility by at most 5.64% of the account balance. On $50,000 in a 529, the maximum aid reduction is about $2,820. Grandparent-owned 529s no longer count as student income on the simplified FAFSA (effective 2024–25), making them more aid-friendly." },
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
        formula={collegeFormula}
        rateTable={collegeRateTable}
        howToSteps={collegeHowToSteps}
      />
    </>
  );
}

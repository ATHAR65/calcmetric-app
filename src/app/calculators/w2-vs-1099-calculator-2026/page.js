import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "w2-vs-1099-calculator-2026";
const CALC_NAME = "W-2 vs 1099 Calculator 2026";
const CALC_DESCRIPTION = "Compare your real take-home pay as a W-2 employee versus a 1099 independent contractor for 2026, including self-employment tax, QBI, benefits value, and the break-even contractor rate.";

const seoContent = [
  "A <strong>W-2 vs 1099 calculator</strong> reveals how much you actually keep as an employee versus an independent contractor on the same income. The biggest gap is <strong>self-employment tax</strong>: W-2 employees pay 7.65% FICA while their employer matches it, but 1099 contractors pay the full <strong>15.3%</strong> themselves.",
  "Contractors offset some of that with the <strong>QBI deduction</strong> (up to 20% of qualified business income), the deduction for half of self-employment tax, and the ability to write off <strong>business expenses</strong> that employees cannot. Even so, the loss of employer benefits — health insurance, 401(k) match, and paid time off — usually means a 1099 rate must be <strong>25–30% higher</strong> than a W-2 salary just to break even.",
  "This calculator shows side-by-side take-home pay, the dollar and percentage difference, and the exact <strong>break-even 1099 rate</strong> needed to match your total W-2 compensation including benefits.",
];

const w2Formula = `W-2 SIDE
  FICA = min(income, $176,100) × 6.2% + income × 1.45%
  Federal Tax = bracket_calc(income, filing status)
  State Tax = income × state rate
  Net W-2 = income − FICA − Federal − State
  Total W-2 Comp = Net W-2 + Benefits Value

1099 SIDE
  Adjusted Gross = income − business expenses
  SE Tax = Adjusted Gross × 0.9235 × 15.3%
  Taxable = Adjusted Gross − (SE Tax ÷ 2) − (20% QBI)
  Federal Tax = bracket_calc(Taxable, filing status)
  Net 1099 = Adjusted Gross − SE Tax − Federal − State

BREAK-EVEN 1099 RATE
  Solve for gross where Net 1099 = Total W-2 Comp
  Premium % = ((break-even gross − income) ÷ income) × 100`;

const w2RateTable = {
  title: "W-2 vs 1099 Key Tax Differences (2026)",
  headers: ["Item", "W-2 Employee", "1099 Contractor"],
  rows: [
    ["FICA / SE Tax", "7.65% (employer matches)", "15.3% (you pay both halves)"],
    ["Benefits", "Often provided (health, 401k, PTO)", "You buy your own"],
    ["Business expense deductions", "Generally none", "Yes — equipment, home office, mileage"],
    ["QBI deduction", "Not applicable", "Up to 20% of qualified income"],
    ["Tax payments", "Withheld by employer", "Quarterly estimated payments"],
    ["Rule of thumb", "Base salary", "≈ 25–30% higher to break even"],
  ],
};

const w2HowToSteps = [
  "Enter your annual income — it applies to both the W-2 and 1099 sides for a fair comparison.",
  "Select your filing status and your state (sets the approximate state income tax rate).",
  "Enter the value of W-2 employer benefits you would receive (health, 401(k) match, PTO).",
  "Enter any 1099 business expenses you could deduct as a contractor.",
  "Review the side-by-side breakdown, the take-home difference, and your break-even 1099 rate.",
];

const staticFaqs = [
  { q: "Should I take a W-2 or 1099 position?", a: "It depends on the pay difference and your circumstances. As a rule, a 1099 rate should be 25–30% higher than a comparable W-2 salary just to break even after self-employment tax and the loss of employer benefits. Compare your specific numbers — including state tax, benefits value, and deductible expenses — before deciding." },
  { q: "How much more should a 1099 contractor charge vs W-2?", a: "Typically 25–30% more than the equivalent W-2 salary to break even. This covers the employer's half of FICA (about 7.65%), the cost of buying your own health insurance, the lost 401(k) match, and unpaid time off. To genuinely come out ahead, aim above the break-even premium." },
  { q: "What is the self-employment tax rate for 1099 workers in 2026?", a: "The self-employment tax rate is 15.3% — 12.4% for Social Security (up to the wage base of $176,100) and 2.9% for Medicare — applied to 92.35% of your net self-employment income. You can deduct half of the SE tax when calculating your income tax." },
  { q: "Can 1099 workers deduct business expenses?", a: "Yes. Independent contractors can deduct ordinary and necessary business expenses such as equipment, software, supplies, a home office, and business mileage. These deductions lower both income tax and self-employment tax. W-2 employees generally cannot deduct unreimbursed work expenses." },
  { q: "What is the QBI deduction for 1099 contractors?", a: "The Qualified Business Income (QBI) deduction lets eligible self-employed individuals deduct up to 20% of their qualified business income, subject to income thresholds and business-type limitations. It meaningfully lowers the effective tax rate on 1099 earnings and is a key reason 1099 work can pay off for higher earners." },
];

const faqSchemaEntities = staticFaqs.map((f) => ({
  "@type": "Question",
  name: f.q,
  acceptedAnswer: { "@type": "Answer", text: f.a },
}));

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaEntities,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "W-2 vs 1099 Calculator 2026 — Compare Take-Home Pay as Employee vs Contractor",
    description: CALC_DESCRIPTION,
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
    author: { "@type": "Organization", name: "TheMetricApp", url: "https://www.themetricapp.com" },
    publisher: { "@type": "Organization", name: "TheMetricApp", url: "https://www.themetricapp.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.themetricapp.com/calculators/${CALC_SLUG}` },
  };

  return (
    <>
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema, articleSchema]} />
      <Calculator />
      <CalculatorStaticSeo
        title={CALC_NAME}
        description={CALC_DESCRIPTION}
        slug={CALC_SLUG}
        faqs={staticFaqs}
        content={seoContent}
        formula={w2Formula}
        rateTable={w2RateTable}
        howToSteps={w2HowToSteps}
      />
    </>
  );
}

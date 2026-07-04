import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "no-tax-on-tips-calculator-2026";
const CALC_NAME = "No Tax on Tips Calculator 2026";
const CALC_DESCRIPTION = "Estimate your federal income tax savings from the OBBBA $25,000 qualified tips deduction for 2026. Works for W-2 employees and self-employed tipped workers, with phase-out limits.";

const seoContent = [
  "The <strong>no tax on tips</strong> deduction under the One Big Beautiful Bill Act (OBBBA) lets workers in qualifying tipped occupations deduct up to <strong>$25,000 of reported tip income</strong> per year from federal taxable income. The cap is the same for every filing status.",
  "This is an <strong>above-the-line federal income tax deduction</strong> available for tax years <strong>2025 through 2028</strong>. Both W-2 employees and self-employed tipped workers qualify — but FICA or self-employment tax and most state income taxes still apply to tips in full.",
  "Higher earners face a <strong>phase-out</strong>: the deduction is reduced by <strong>$100 for every $1,000 of MAGI</strong> above $150,000 (single/HOH) or $300,000 (married filing jointly).",
];

const tipsFormula = `Deductible = min(Annual Qualified Tips, $25,000)

Phase-out (starts $150K single/HOH, $300K MFJ):
  reduction = ceil((MAGI − start) / $1,000) × $100
  Deductible = max(0, Deductible − reduction)

Self-employed: Deductible ≤ net income of the tipped business

Federal Tax Saved = Deductible × Marginal Tax Rate

Example: $1,500/mo tips × 12 = $18,000
  Under the cap → fully deductible
  Tax saved at 12% = $2,160 · at 22% = $3,960`;

const tipsRateTable = {
  title: "2026 OBBBA Tips Deduction Limits",
  headers: ["Filing Status", "Max Deduction", "Phase-Out Starts (MAGI)", "Reduction Rate"],
  rows: [
    ["Single", "$25,000", "$150,000", "$100 per $1,000 over"],
    ["Head of Household", "$25,000", "$150,000", "$100 per $1,000 over"],
    ["Married Filing Jointly", "$25,000", "$300,000", "$100 per $1,000 over"],
  ],
};

const tipsHowToSteps = [
  "Enter your average monthly tip income (cash + card tips you report).",
  "Enter how many months you worked this year (12 by default).",
  "Choose W-2 employee or self-employed — both qualify for the tips deduction.",
  "Select your filing status and enter your MAGI to apply the phase-out.",
  "Review your deductible amount and estimated federal income tax saved instantly.",
];

const staticFaqs = [
  { q: "What is the no tax on tips deduction for 2026?", a: "It is a federal income tax deduction under the One Big Beautiful Bill Act (OBBBA) that lets workers in qualifying tipped occupations deduct up to $25,000 of reported tip income per year, for tax years 2025 through 2028. The cap is the same for all filing statuses." },
  { q: "Are tips completely tax-free now?", a: "No. The deduction reduces federal income tax only. Social Security and Medicare (FICA) taxes, self-employment tax, and most state income taxes still apply to your tips in full." },
  { q: "Do self-employed workers qualify for the tips deduction?", a: "Yes — unlike the OBBBA overtime deduction, self-employed and 1099 workers in tipped occupations qualify. However, the deduction cannot exceed the net income of the business the tips came from." },
  { q: "What is the income limit for the tips deduction?", a: "The deduction phases out above $150,000 MAGI for single and head-of-household filers, or $300,000 for married filing jointly. It is reduced by $100 for every $1,000 of MAGI over the threshold." },
  { q: "Do cash tips count for the no tax on tips deduction?", a: "Yes, but only if properly reported — to your employer, or on your tax return if self-employed. Unreported tips do not qualify. Mandatory service charges (auto-gratuity) are wages, not tips, and never qualify." },
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
    headline: "No Tax on Tips Calculator 2026 — Estimate Your Federal Tax Savings",
    description: CALC_DESCRIPTION,
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
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
        formula={tipsFormula}
        rateTable={tipsRateTable}
        howToSteps={tipsHowToSteps}
      />
    </>
  );
}

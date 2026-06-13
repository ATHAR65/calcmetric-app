import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "no-tax-on-overtime-calculator-2026";
const CALC_NAME = "No Tax on Overtime Calculator 2026";
const CALC_DESCRIPTION = "Estimate your federal income tax savings on overtime pay under the OBBBA overtime deduction for 2026. W-2 employees only, with phase-out limits.";

const seoContent = [
  "The <strong>no tax on overtime</strong> deduction under the One Big Beautiful Bill Act (OBBBA) lets eligible W-2 employees deduct the <strong>half-time premium</strong> portion of their overtime pay — not the entire overtime paycheck. The maximum deduction is <strong>$12,500</strong> for single and head-of-household filers and <strong>$25,000</strong> for married couples filing jointly.",
  "This is an <strong>above-the-line federal income tax deduction</strong> available for tax years <strong>2025 through 2028</strong>. It reduces your taxable income, so the actual savings equal your deductible amount multiplied by your marginal tax bracket. FICA (Social Security and Medicare) and most state income taxes still apply to overtime in full.",
  "Higher earners face a <strong>phase-out</strong>. For single/HOH filers, the deduction phases out between <strong>$150,000 and $275,000</strong> of MAGI; for joint filers, between <strong>$300,000 and $550,000</strong>. Above the upper limit, the deduction is fully eliminated.",
];

const overtimeFormula = `Overtime Premium = Regular Rate × 0.5 × OT Hours/Week × Weeks
Deductible = min(Overtime Premium, Cap)
Cap = $12,500 (Single/HOH) or $25,000 (MFJ)

Phase-out (Single/HOH: $150K–$275K, MFJ: $300K–$550K):
  if MAGI > phase-out end: Deductible = 0
  else if MAGI > phase-out start:
    ratio = (MAGI − start) / (end − start)
    Deductible = Deductible × (1 − ratio)

Federal Tax Saved = Deductible × Marginal Tax Rate

Example: $25/hr, 10 OT hrs/wk, 52 weeks
  Premium = 25 × 0.5 × 10 × 52 = $6,500
  Tax saved at 22% = $1,430`;

const overtimeRateTable = {
  title: "2026 OBBBA Overtime Deduction Limits",
  headers: ["Filing Status", "Max Deduction", "Phase-Out Start (MAGI)", "Phase-Out End (MAGI)"],
  rows: [
    ["Single", "$12,500", "$150,000", "$275,000"],
    ["Head of Household", "$12,500", "$150,000", "$275,000"],
    ["Married Filing Jointly", "$25,000", "$300,000", "$550,000"],
  ],
};

const overtimeHowToSteps = [
  "Enter your regular hourly rate and your average overtime hours worked per week.",
  "Enter the number of weeks you work per year (52 by default).",
  "Select your filing status — this sets your deduction cap and phase-out thresholds.",
  "Enter your annual gross income / MAGI to apply the phase-out and find your marginal tax rate.",
  "Review your deductible amount and estimated federal income tax saved instantly.",
];

const staticFaqs = [
  { q: "What is the no tax on overtime rule in 2026?", a: "It is a federal income tax deduction under the One Big Beautiful Bill Act (OBBBA) that lets eligible W-2 employees deduct the half-time premium portion of their overtime pay, up to $12,500 (single/HOH) or $25,000 (married filing jointly), for tax years 2025 through 2028. It is not a full exemption — only the premium half of overtime is deductible, and only for federal income tax." },
  { q: "Who qualifies for the overtime tax deduction?", a: "W-2 employees who receive FLSA-qualifying overtime — generally non-exempt hourly workers paid time-and-a-half for hours over 40 per week. The deduction phases out for single and head-of-household filers between $150,000 and $275,000 of MAGI, and for joint filers between $300,000 and $550,000." },
  { q: "Does the overtime deduction apply to self-employed or 1099 workers?", a: "No. Independent contractors and self-employed individuals are not paid statutory overtime under the FLSA, so they cannot claim the OBBBA overtime deduction. Only W-2 employees receiving qualifying overtime pay are eligible." },
  { q: "Is my entire overtime paycheck tax-free under OBBBA?", a: "No. Only the premium half — the extra 0.5× above your regular rate — is deductible for federal income tax. FICA taxes (Social Security 6.2% + Medicare 1.45%) still apply to your full overtime wages, and most states do not conform, so state income tax still applies." },
  { q: "When does the no tax on overtime deduction expire?", a: "The deduction is temporary. It applies to tax years 2025, 2026, 2027, and 2028 only, unless Congress passes new legislation to extend it." },
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
    headline: "No Tax on Overtime Calculator 2026 — Estimate Your Federal Tax Savings",
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
        formula={overtimeFormula}
        rateTable={overtimeRateTable}
        howToSteps={overtimeHowToSteps}
      />
    </>
  );
}

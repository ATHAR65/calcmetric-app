import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "senior-tax-deduction-calculator-2026";
const CALC_NAME = "Senior Tax Deduction Calculator 2026";
const CALC_DESCRIPTION = "Estimate the $6,000 OBBBA senior bonus deduction for taxpayers 65 and older ($12,000 for qualifying couples), including the 6% MAGI phase-out and your total tax-free income for 2026.";

const seoContent = [
  "The <strong>OBBBA senior bonus deduction</strong> gives taxpayers <strong>65 and older</strong> an extra <strong>$6,000 deduction per person</strong> ($12,000 for a married couple where both qualify) for tax years <strong>2025 through 2028</strong> — on top of the standard deduction and the pre-existing age-65 add-on.",
  "Stacked together in 2026, a single senior can shield about <strong>$24,150</strong> of income from federal tax ($16,100 standard + $2,050 age-65 + $6,000 OBBBA); a couple both 65+ can shield about <strong>$47,500</strong>.",
  "The bonus deduction phases out at <strong>6% of MAGI</strong> above $75,000 (single/HOH) or $150,000 (MFJ), disappearing entirely around $175,000 for a single filer. You must be 65 by December 31 of the tax year, have a valid SSN, and file jointly if married.",
];

const seniorFormula = `Bonus = $6,000 × qualifying persons 65+
Reduction = 6% × max(0, MAGI − threshold)
  threshold: $75,000 (Single/HOH) · $150,000 (MFJ)
Deductible = max(0, Bonus − Reduction)

Total shielded income (2026):
  Standard Deduction + Age-65 Add-on + OBBBA Bonus
  Single 65+: $16,100 + $2,050 + $6,000 = $24,150
  MFJ both 65+: $32,200 + $3,300 + $12,000 = $47,500

Example: Single, 68, MAGI $100,000
  Reduction = 6% × $25,000 = $1,500
  Deductible = $6,000 − $1,500 = $4,500`;

const seniorRateTable = {
  title: "2026 OBBBA Senior Bonus Deduction",
  headers: ["Situation", "Max Bonus", "Phase-Out Starts (MAGI)", "Phase-Out Rate"],
  rows: [
    ["Single, 65+", "$6,000", "$75,000", "6% of excess"],
    ["Head of Household, 65+", "$6,000", "$75,000", "6% of excess"],
    ["MFJ, one spouse 65+", "$6,000", "$150,000", "6% of excess"],
    ["MFJ, both spouses 65+", "$12,000", "$150,000", "6% of excess"],
  ],
};

const seniorHowToSteps = [
  "Select your filing status.",
  "Confirm you (and your spouse, if filing jointly) are 65 or older by December 31, 2026.",
  "Enter your MAGI, including pensions, IRA withdrawals, and taxable Social Security.",
  "Review your bonus deduction after the 6% phase-out and the federal tax it saves.",
  "See your total shielded income when the standard deduction and age-65 add-on stack on top.",
];

const staticFaqs = [
  { q: "What is the extra tax deduction for seniors in 2026?", a: "Under the One Big Beautiful Bill Act, taxpayers 65 and older can claim a $6,000 bonus deduction per person ($12,000 for married couples where both qualify) for tax years 2025 through 2028. It stacks on top of the standard deduction and the pre-existing age-65 additional deduction." },
  { q: "What are the income limits for the $6,000 senior deduction?", a: "The deduction is reduced by 6% of MAGI above $75,000 for single and head-of-household filers, or $150,000 for married filing jointly. A single senior loses the deduction entirely at about $175,000 MAGI." },
  { q: "Does the senior deduction make Social Security tax-free?", a: "Not technically — the 0/50/85% Social Security taxability rules still apply. But for most middle-income retirees, the extra deduction offsets much or all of the federal tax owed on their benefits." },
  { q: "Do both spouses get the $6,000 deduction?", a: "Yes. If both spouses are 65 or older by year-end and file jointly, they can deduct $12,000 total. If only one qualifies, the deduction is $6,000." },
  { q: "Do I need to itemize to claim the senior bonus deduction?", a: "No. The OBBBA senior deduction is available whether you itemize or take the standard deduction, for tax years 2025 through 2028." },
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
    headline: "Senior Tax Deduction Calculator 2026 — $6,000 OBBBA Bonus for Age 65+",
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
        formula={seniorFormula}
        rateTable={seniorRateTable}
        howToSteps={seniorHowToSteps}
      />
    </>
  );
}

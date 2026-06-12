import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "solo-401k-contribution-calculator";
const CALC_NAME = "Solo 401k Contribution Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Solo 401k contribution limit for 2026. Covers employee deferrals, employer profit-sharing, catch-up, and SECURE 2.0 super catch-up. Free retirement calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "A Solo 401(k) — also called an Individual 401(k) or one-participant 401(k) — is a retirement plan for self-employed individuals with no full-time employees (other than a spouse). It allows the <strong>highest contribution limits of any retirement plan</strong> available to sole proprietors, making it the best option for maximizing tax-deferred retirement savings.",
  "The Solo 401(k) has two contribution components. The <strong>employee deferral</strong> allows up to $23,500 in 2026 (or $31,000 if age 50+). The <strong>employer profit-sharing contribution</strong> allows up to 25% of net self-employment income (after the SE tax deduction). Combined, the total cannot exceed <strong>$70,000</strong> ($77,500 with catch-up for age 50+).",
  "Under <strong>SECURE 2.0</strong>, workers aged 60–63 qualify for a <strong>super catch-up contribution</strong> starting in 2025. This allows an additional catch-up amount greater than the standard $7,500 — up to $11,250 for 2026. This means self-employed individuals aged 60–63 can defer up to $34,750 as their employee contribution alone.",
  "The employer contribution calculation for sole proprietors is slightly different than for employees. You calculate 25% of <strong>net self-employment income after the SE tax deduction</strong>. The formula: (Net SE Income) × 92.35% = Adjusted Income, then multiply by 20% (not 25% — the math works out to 20% of net after the deduction). On $150,000 net SE income, the employer contribution is approximately $27,000.",
];

const soloRateTable = {
  title: "2026 Solo 401(k) Contribution Limits",
  headers: ["Component", "Under 50", "Age 50–59 / 64+", "Age 60–63"],
  rows: [
    ["Employee Deferral", "$23,500", "$31,000", "$34,750"],
    ["Employer (25% of comp)", "Up to $46,500", "Up to $46,500", "Up to $35,250"],
    ["Total Maximum", "$70,000", "$77,500", "$70,000"],
    ["Roth Employee Deferral", "$23,500", "$31,000", "$34,750"],
  ],
};

const soloFormula = `Employee Deferral = Up to $23,500 ($31,000 if 50+, $34,750 if 60-63)
Employer Contribution = Net SE Income × 92.35% × 20%
  (Equivalent to 25% of net income after SE tax deduction)
Total = Employee + Employer (capped at $70,000 or $77,500)

Example on $120,000 net SE income:
  Adjusted = $120,000 × 92.35% = $110,820
  Employer = $110,820 × 20% = $22,164
  Total = $23,500 + $22,164 = $45,664`;

const soloHowToSteps = [
  "Enter your net self-employment income (Schedule C profit minus the deductible half of SE tax).",
  "Enter your age to determine the applicable employee deferral limit and catch-up eligibility.",
  "Select Traditional (pre-tax) or Roth (after-tax) for the employee deferral portion.",
  "Review the maximum employee deferral, employer profit-sharing amount, total contribution limit, and estimated tax savings.",
];

const staticFaqs = [
  { q: "What is the Solo 401(k) contribution limit in 2026?", a: "The total contribution limit is $70,000 for 2026 ($77,500 with standard catch-up for age 50+). This consists of up to $23,500 in employee deferrals plus up to 25% of net self-employment income as employer profit-sharing. Workers aged 60–63 qualify for the SECURE 2.0 super catch-up, allowing employee deferrals up to $34,750." },
  { q: "How are Solo 401(k) employer contributions calculated?", a: "For sole proprietors, the employer contribution is effectively 20% of net self-employment income (not 25%). The formula: Net SE Income × 92.35% (to account for the SE tax deduction) × 25% = the same as Net SE Income × 20%. On $100,000 net SE income, the employer contribution is approximately $18,587." },
  { q: "Can I have a Solo 401(k) and a regular 401(k)?", a: "Yes, but the employee deferral limit ($23,500) is a combined limit across all 401(k) plans. If you defer $15,000 to your employer's 401(k), you can only defer $8,500 more to your Solo 401(k). However, the employer contribution limits are separate — your Solo 401(k) employer contribution is based on your self-employment income regardless of your W-2 plan." },
  { q: "What is the SECURE 2.0 super catch-up?", a: "Starting in 2025, SECURE 2.0 allows workers aged 60 to 63 to make enhanced catch-up contributions. For 2026, the super catch-up amount is $11,250 (instead of the standard $7,500), allowing total employee deferrals of $34,750. This provision is temporary — it only applies during the 4-year window when you are ages 60–63. At age 64, you revert to the standard catch-up." },
  { q: "Solo 401(k) vs SEP-IRA — which is better?", a: "The Solo 401(k) is almost always better. Both allow 25% employer contributions (same dollar amount), but only the Solo 401(k) offers the additional employee deferral of $23,500. On $80,000 net SE income, a SEP-IRA maxes at ~$14,870, while a Solo 401(k) allows $14,870 + $23,500 = $38,370. The Solo 401(k) also offers Roth contributions and loan provisions." },
  { q: "When is the deadline to open and fund a Solo 401(k)?", a: "You must establish (open) the Solo 401(k) by December 31 of the tax year. Employee deferrals must be made by December 31. Employer contributions can be made up to your tax filing deadline plus extensions (October 15 for most filers). A SEP-IRA has the advantage of being openable up to the filing deadline, making it a backup if you miss the December 31 Solo 401(k) deadline." },
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
        formula={soloFormula}
        rateTable={soloRateTable}
        howToSteps={soloHowToSteps}
      />
    </>
  );
}

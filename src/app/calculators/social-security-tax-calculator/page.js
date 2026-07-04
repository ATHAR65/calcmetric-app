import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "social-security-tax-calculator";
const CALC_NAME = "Social Security Tax Calculator";
const CALC_DESCRIPTION = "Calculate how much of your Social Security benefits are taxable under the IRS 0%, 50%, and 85% combined-income rules, with exact worksheet math and 2026 marginal rates.";

const seoContent = [
  "Between <strong>0% and 85%</strong> of Social Security benefits can be federally taxable — never more than 85%. The taxable share depends on <strong>combined income</strong>: your other income + tax-exempt interest + half of your benefits.",
  "Thresholds (unchanged since the 1980s–90s and not inflation-indexed): <strong>Single/HOH</strong> — 0% below $25,000 combined income, up to 50% between $25,000–$34,000, up to 85% above $34,000. <strong>MFJ</strong> — $32,000 and $44,000.",
  "The 2025–2028 <strong>OBBBA $6,000 senior deduction</strong> does not change these rules, but it offsets much of the resulting tax for typical retirees 65 and older. Roth withdrawals and QCDs are the main levers for keeping combined income below the tiers.",
];

const ssFormula = `Combined Income = Other Income + Tax-Exempt Interest + 0.5 × SS

If CI ≤ base: taxable = $0
If base < CI ≤ upper:
  taxable = min(0.5 × (CI − base), 0.5 × SS)
If CI > upper:
  taxable = min(0.85 × (CI − upper) + min(0.5 × (upper − base), 0.5 × SS),
                0.85 × SS)

base/upper: $25K/$34K (Single/HOH) · $32K/$44K (MFJ)

Example: Single, $28,000 SS + $30,000 IRA withdrawal
  CI = 30,000 + 14,000 = $44,000
  taxable = min(0.85 × 10,000 + 4,500, 23,800) = $13,000 (46%)`;

const ssRateTable = {
  title: "Social Security Taxability Tiers (Combined Income)",
  headers: ["Filing Status", "0% Taxable Below", "Up to 50% Taxable", "Up to 85% Taxable Above"],
  rows: [
    ["Single / HOH", "$25,000", "$25,000 – $34,000", "$34,000"],
    ["Married Filing Jointly", "$32,000", "$32,000 – $44,000", "$44,000"],
    ["Married Filing Separately*", "$0", "—", "$0 (85% from first dollar)"],
  ],
};

const ssHowToSteps = [
  "Enter your annual Social Security benefits from Box 5 of your SSA-1099.",
  "Enter your other income: pensions, IRA/401(k) withdrawals, wages, interest, dividends.",
  "Add any tax-exempt municipal bond interest — it counts toward combined income.",
  "Select your filing status to set the $25K/$34K or $32K/$44K thresholds.",
  "Review your taxable amount, the percentage of benefits taxed, and estimated federal tax.",
];

const staticFaqs = [
  { q: "How much of my Social Security is taxable in 2026?", a: "Between 0% and 85%, depending on combined income (other income + tax-exempt interest + half your benefits). For single filers: 0% under $25,000, up to 50% between $25,000 and $34,000, and up to 85% above $34,000. For married filing jointly the thresholds are $32,000 and $44,000." },
  { q: "What is combined income for Social Security taxes?", a: "Combined (provisional) income is your adjusted gross income excluding Social Security, plus any tax-exempt interest, plus 50% of your annual Social Security benefits. The IRS uses it to determine what share of benefits is taxable." },
  { q: "Is Social Security ever 100% taxable?", a: "No. Federal law caps the taxable portion at 85% of your benefits, so at least 15% is always federally tax-free regardless of income." },
  { q: "Did the OBBBA make Social Security tax-free?", a: "No. The 0/50/85% taxability rules are unchanged. OBBBA added a separate $6,000 bonus deduction (2025–2028) for taxpayers 65 and older, which offsets much of the tax on benefits for typical retirees." },
  { q: "How can I reduce taxes on my Social Security benefits?", a: "Lower your combined income: use Roth withdrawals (they don't count), make qualified charitable distributions from IRAs after age 70½, spread large withdrawals across tax years, and remember municipal bond interest still counts toward combined income." },
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
    headline: "Social Security Tax Calculator — How Much of Your Benefits Are Taxable?",
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
        formula={ssFormula}
        rateTable={ssRateTable}
        howToSteps={ssHowToSteps}
      />
    </>
  );
}

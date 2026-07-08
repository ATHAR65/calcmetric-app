import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "federal-income-tax-calculator-2026";
const CALC_NAME = "Federal Income Tax Calculator 2026";
const CALC_DESCRIPTION = "Estimate your 2026 US federal income tax, effective and marginal rates, after-tax income, and refund or balance due using the latest IRS brackets and standard deduction.";

const seoContent = [
  "<strong>US federal income tax is progressive — income is taxed at increasing rates from 10% to 37%, not one flat rate.</strong> After subtracting the 2026 standard deduction ($16,100 single / $32,200 MFJ), each bracket applies only to the income that falls inside it.",
  "Your <strong>marginal rate</strong> is the bracket your last dollar hits; your <strong>effective rate</strong> is total tax ÷ total income, always lower. A single filer at $75,000 has a 22% marginal but roughly 10–12% effective rate.",
  "Pre-tax contributions to a 401(k), HSA, or traditional IRA cut taxable income at your marginal rate. This tool covers federal income tax only — FICA (7.65%), state tax, and credits are separate.",
];

const fitFormula = `Taxable = Gross − Adjustments − Standard Deduction
  2026 standard deduction: $16,100 single · $32,200 MFJ
Tax = sum of (income in each bracket × that rate)
  10% → 12% → 22% → 24% → 32% → 35% → 37%
Effective Rate = Tax ÷ Gross Income

Example: $75,000 single
  Taxable = $58,900 → Tax ≈ $8,000 (marginal 22%, effective ~10.6%)`;

const fitRateTable = {
  title: "2026 Federal Income Tax Brackets (Single)",
  headers: ["Taxable Income", "Marginal Rate", "MFJ Threshold"],
  rows: [
    ["$0 – $12,400", "10%", "$0 – $24,800"],
    ["$12,400 – $50,400", "12%", "$24,800 – $100,800"],
    ["$50,400 – $105,700", "22%", "$100,800 – $211,400"],
    ["$105,700 – $201,775", "24%", "$211,400 – $403,550"],
    ["$201,775 – $256,225", "32%", "$403,550 – $512,450"],
    ["$256,225 – $640,600", "35%", "$512,450 – $768,700"],
    ["Over $640,600", "37%", "Over $768,700"],
  ],
};

const fitHowToSteps = [
  "Enter your annual gross income.",
  "Select your filing status (single or married filing jointly).",
  "Add any pre-tax adjustments (401(k), HSA, traditional IRA) to lower taxable income.",
  "Optionally enter federal tax withheld to estimate your refund or balance due.",
  "Review your tax, taxable income, and effective and marginal rates.",
];

const staticFaqs = [
  { q: "How is federal income tax calculated for 2026?", a: "Subtract the standard deduction ($16,100 single / $32,200 MFJ) and any pre-tax adjustments from your gross income to get taxable income, then apply the 2026 brackets from 10% to 37%. Only the income within each bracket is taxed at that bracket's rate." },
  { q: "What is the difference between effective and marginal tax rate?", a: "Your marginal rate is the bracket your last dollar of income falls in (used for decisions like a raise). Your effective rate is total tax divided by total income — always lower because lower brackets and the standard deduction reduce the average." },
  { q: "What is the 2026 standard deduction?", a: "$16,100 for single filers and $32,200 for married filing jointly. Taxpayers 65 and older get an additional amount plus the new OBBBA senior bonus deduction." },
  { q: "Does this calculator include FICA and state taxes?", a: "No — it estimates federal income tax only. Social Security and Medicare (FICA, 7.65%) and state income taxes are separate. Tax credits like the Child Tax Credit and EITC are also not included." },
  { q: "How can I lower my federal income tax?", a: "Contribute to pre-tax accounts (401(k), HSA, traditional IRA), which reduce taxable income at your marginal rate. Self-employed filers can also use the QBI deduction and business expenses." },
];

const faqSchemaEntities = staticFaqs.map((f) => ({
  "@type": "Question",
  name: f.q,
  acceptedAnswer: { "@type": "Answer", text: f.a },
}));

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqSchemaEntities };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Federal Income Tax Calculator 2026 — Estimate Your Tax and Refund",
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
        formula={fitFormula}
        rateTable={fitRateTable}
        howToSteps={fitHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

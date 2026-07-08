import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "rmd-calculator-2026";
const CALC_NAME = "RMD Calculator 2026";
const CALC_DESCRIPTION = "Calculate your 2026 Required Minimum Distribution from traditional IRAs and 401(k)s using the IRS Uniform Lifetime Table, with SECURE 2.0 age rules and the missed-RMD penalty.";

const seoContent = [
  "<strong>A Required Minimum Distribution (RMD) is the minimum you must withdraw each year from tax-deferred retirement accounts starting at age 73.</strong> It equals your prior-year-end balance divided by an IRS life-expectancy factor.",
  "Under SECURE 2.0, RMDs start at <strong>age 73</strong> (born 1951–1959) or <strong>age 75</strong> (born 1960+). Roth IRAs have no RMDs during the owner's lifetime, and Roth 401(k)s no longer require them either.",
  "At age 75 the distribution period is 24.6, so a $500,000 balance requires a $20,325 RMD. Missing an RMD triggers a 25% excise tax on the shortfall (10% if corrected promptly) — one of the harshest penalties in the code.",
];

const rmdFormula = `RMD = Prior Year-End Balance ÷ IRS Distribution Period (by age)

Uniform Lifetime Table (selected):
  Age 73 → 26.5 · 75 → 24.6 · 80 → 20.2 · 85 → 16.0 · 90 → 12.2

Example: $500,000 at age 75
  RMD = 500,000 ÷ 24.6 = $20,325`;

const rmdRateTable = {
  title: "IRS Uniform Lifetime Table (Selected Ages)",
  headers: ["Age", "Distribution Period", "RMD % of Balance"],
  rows: [
    ["73", "26.5", "3.77%"],
    ["75", "24.6", "4.07%"],
    ["80", "20.2", "4.95%"],
    ["85", "16.0", "6.25%"],
    ["90", "12.2", "8.20%"],
  ],
};

const rmdHowToSteps = [
  "Enter your account balance as of December 31 last year.",
  "Enter your age this year (RMDs begin at 73 under SECURE 2.0).",
  "Review your RMD, withdrawal rate, and the penalty for missing it.",
  "Repeat for each traditional IRA or 401(k) — RMDs are calculated per account type.",
];

const staticFaqs = [
  { q: "What is a required minimum distribution (RMD)?", a: "An RMD is the minimum amount the IRS requires you to withdraw each year from tax-deferred retirement accounts like traditional IRAs and 401(k)s, starting at age 73. It equals your prior-year-end balance divided by an IRS life-expectancy factor." },
  { q: "At what age do RMDs start in 2026?", a: "Under SECURE 2.0, RMDs begin at age 73 for those born between 1951 and 1959, and at age 75 for anyone born in 1960 or later. Your first RMD can be delayed to April 1 of the following year." },
  { q: "How is my RMD calculated?", a: "Divide your account balance as of December 31 of the prior year by the IRS Uniform Lifetime Table factor for your age. At 75 the factor is 24.6, so $500,000 ÷ 24.6 = about $20,325." },
  { q: "What is the penalty for missing an RMD?", a: "Under SECURE 2.0 the excise tax is 25% of the amount you failed to withdraw, reduced to 10% if you correct the shortfall promptly and file the right form. It's one of the steepest penalties in the tax code." },
  { q: "Do Roth accounts have RMDs?", a: "Roth IRAs have no RMDs during the original owner's lifetime. Thanks to SECURE 2.0, Roth 401(k)s also no longer require RMDs starting in 2024. Traditional IRAs and 401(k)s still do." },
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
    headline: "RMD Calculator 2026 — Required Minimum Distribution from IRAs & 401(k)s",
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
        formula={rmdFormula}
        rateTable={rmdRateTable}
        howToSteps={rmdHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

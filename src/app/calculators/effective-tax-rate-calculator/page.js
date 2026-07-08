import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "effective-tax-rate-calculator";
const CALC_NAME = "Effective Tax Rate Calculator";
const CALC_DESCRIPTION = "Calculate your effective tax rate — the true percentage of income you pay — versus your marginal bracket, across federal, FICA, and state taxes.";

const seoContent = [
  "<strong>Your effective tax rate is total tax divided by gross income — the real share of your earnings that goes to tax.</strong> It's almost always lower than your marginal (top-bracket) rate because the progressive system taxes your first dollars at just 10%.",
  "A single filer at $85,000 sits in the 22% marginal bracket but pays roughly a 12% effective federal rate. Add FICA (7.65%) and state tax and the all-in effective rate for middle earners often lands near 25–30%.",
  "Marginal rate answers 'what will my next $1,000 be taxed at?'; effective rate answers 'what share of everything did I pay?'. Never refuse a raise fearing a bracket — only income above the threshold is taxed higher.",
];

const etrFormula = `Effective Rate = Total Tax ÷ Gross Income
Total Tax = Federal Income Tax + FICA + State Tax

FICA = 6.2% (up to ~$183,600) + 1.45% Medicare
Federal Income Tax = progressive brackets on (income − standard deduction)

Example: $85,000 single, W-2
  Federal ~$10,100 + FICA ~$6,500 = effective ~19.5% (federal-only ~12%)`;

const etrRateTable = {
  title: "Marginal vs Effective Rate (Single, Federal Only, 2026)",
  headers: ["Gross Income", "Marginal Rate", "Approx. Effective Rate"],
  rows: [
    ["$40,000", "12%", "~6%"],
    ["$75,000", "22%", "~10.6%"],
    ["$120,000", "24%", "~15%"],
    ["$250,000", "35%", "~24%"],
  ],
};

const etrHowToSteps = [
  "Enter your annual gross income and filing status.",
  "Choose whether to include FICA payroll tax (yes if you're a W-2 employee).",
  "Optionally add your total state income tax.",
  "Review your effective rate across all included taxes alongside your federal marginal rate.",
];

const staticFaqs = [
  { q: "What is an effective tax rate?", a: "Your effective tax rate is total tax paid divided by total income — the actual percentage of your earnings that goes to tax. It's lower than your marginal rate because progressive brackets tax your first dollars at just 10%." },
  { q: "How is effective tax rate different from marginal tax rate?", a: "Marginal rate is the bracket your last dollar falls in (used for decisions like a raise or bonus). Effective rate is your total tax divided by total income — the honest average for budgeting." },
  { q: "What is a typical effective tax rate?", a: "For federal income tax alone, most middle earners pay 8–15% effectively. Adding FICA (7.65%) and state tax, the all-in effective rate is often 25–30% for typical W-2 workers." },
  { q: "Should I include FICA in my effective tax rate?", a: "For a true picture of your paycheck, yes — FICA (Social Security + Medicare, 7.65%) comes out of every dollar of wages. Self-employed people pay both halves (15.3%) via self-employment tax." },
  { q: "Does a higher tax bracket mean all my income is taxed more?", a: "No. Only the income above each bracket threshold is taxed at the higher rate. A raise that pushes you into a new bracket never lowers your take-home pay." },
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
    headline: "Effective Tax Rate Calculator — Your Real Tax Rate Explained",
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
        formula={etrFormula}
        rateTable={etrRateTable}
        howToSteps={etrHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

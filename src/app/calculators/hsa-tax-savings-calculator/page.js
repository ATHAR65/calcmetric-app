import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "hsa-tax-savings-calculator";
const CALC_NAME = "HSA Tax Savings Calculator";
const CALC_DESCRIPTION = "Calculate the income tax and FICA savings from Health Savings Account contributions for 2026, with contribution limits and the true net cost of funding your HSA.";

const seoContent = [
  "<strong>An HSA is the only triple-tax-advantaged account in the US code: tax-deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses.</strong> No 401(k) or Roth IRA offers all three.",
  "2026 limits: <strong>$4,400 self-only</strong>, <strong>$8,750 family</strong>, plus a <strong>$1,000 catch-up</strong> at age 55+. Contributions cut taxable income at your marginal rate.",
  "Contributing through <strong>payroll</strong> (a Section 125 plan) also avoids the 7.65% FICA tax — a benefit you can't get on a 401(k) or IRA. In the 22% bracket, a payroll HSA dollar is discounted nearly 30%.",
];

const hsaFormula = `Income Tax Saved = Contribution × marginal rate
FICA Saved = Contribution × 7.65%  (payroll contributions only)
Total Saved = Income Tax Saved + FICA Saved
Net Cost = Contribution − Total Saved

Example: $4,400 payroll contribution, 22% bracket
  Income tax $968 + FICA $337 = $1,305 saved
  Net cost of $4,400 in HSA ≈ $3,095`;

const hsaRateTable = {
  title: "2026 HSA Contribution Limits",
  headers: ["Coverage", "Base Limit", "Age 55+ Catch-Up", "Total at 55+"],
  rows: [
    ["Self-only", "$4,400", "$1,000", "$5,400"],
    ["Family", "$8,750", "$1,000", "$9,750"],
  ],
};

const hsaHowToSteps = [
  "Enter your planned annual HSA contribution.",
  "Select your HDHP coverage type (self-only or family) and whether you're 55+.",
  "Choose whether you contribute through payroll (adds FICA savings).",
  "Enter your income and filing status to set your marginal rate.",
  "Review income tax saved, FICA saved, and the true net cost of funding your HSA.",
];

const staticFaqs = [
  { q: "How much does an HSA save on taxes?", a: "Contributions reduce taxable income at your marginal rate — for example, 22% of $4,400 is $968. If contributed through payroll, you also save 7.65% FICA ($337), for about $1,305 total on a $4,400 contribution." },
  { q: "What are the 2026 HSA contribution limits?", a: "$4,400 for self-only coverage and $8,750 for family coverage, plus a $1,000 catch-up contribution for those age 55 and older." },
  { q: "Why is an HSA triple-tax-advantaged?", a: "Contributions are tax-deductible, the balance grows tax-free, and withdrawals for qualified medical expenses are tax-free. No other US account offers all three benefits." },
  { q: "Should I contribute to my HSA through payroll?", a: "Yes if possible. Payroll (Section 125) HSA contributions also avoid the 7.65% FICA tax, a saving you cannot get by contributing directly or on a 401(k) or IRA." },
  { q: "Can I use an HSA for retirement?", a: "Yes. Invest the balance and pay medical costs out of pocket to let it compound. After age 65 you can withdraw for any purpose (taxed like a traditional IRA), while medical withdrawals remain tax-free." },
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
    headline: "HSA Tax Savings Calculator 2026 — The Triple Tax Benefit",
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
        formula={hsaFormula}
        rateTable={hsaRateTable}
        howToSteps={hsaHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

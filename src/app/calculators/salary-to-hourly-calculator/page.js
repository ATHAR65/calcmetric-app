import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "salary-to-hourly-calculator";
const CALC_NAME = "Salary to Hourly Calculator";
const CALC_DESCRIPTION = "Convert an annual salary into an equivalent hourly, daily, weekly, bi-weekly, and monthly wage — ideal for comparing job offers or setting freelance rates.";

const seoContent = [
  "<strong>To convert an annual salary to an hourly wage, divide the salary by the total hours worked in a year.</strong> A standard full-time year is 2,080 hours (40 × 52), so $65,000 equals about $31.25/hour.",
  "The quick shortcut: divide salary by 2,000 for a rough hourly rate. This calculator does the exact math for any hours-per-week and weeks-per-year, plus daily, weekly, bi-weekly, and monthly equivalents.",
  "Converting to hourly makes different jobs comparable: a $70,000 job at 55 hours/week (~$24.50/hr) pays less per hour than a $60,000 job at 40 hours (~$28.85/hr). All figures are gross, before tax.",
];

const sthFormula = `Hourly = Annual Salary ÷ (hours/week × weeks/year)
Standard full-time = 40 × 52 = 2,080 hours

Weekly = Hourly × hours/week
Monthly = Annual ÷ 12

Example: $65,000 ÷ 2,080 = $31.25/hour
  Weekly $1,250 · Monthly $5,417`;

const sthRateTable = {
  title: "Common Salaries as Hourly Pay (40 hrs/week)",
  headers: ["Annual Salary", "Hourly", "Weekly", "Monthly"],
  rows: [
    ["$40,000", "$19.23", "$769", "$3,333"],
    ["$65,000", "$31.25", "$1,250", "$5,417"],
    ["$85,000", "$40.87", "$1,635", "$7,083"],
    ["$120,000", "$57.69", "$2,308", "$10,000"],
  ],
};

const sthHowToSteps = [
  "Enter your gross annual salary.",
  "Enter your typical hours worked per week (40 for standard full-time).",
  "Enter weeks worked per year (use 50 if you take two unpaid weeks off).",
  "Review your hourly, daily, weekly, bi-weekly, and monthly equivalents instantly.",
];

const staticFaqs = [
  { q: "How do I convert my salary to an hourly wage?", a: "Divide your annual salary by the total hours you work in a year. For standard full-time work that's 2,080 hours (40 hours × 52 weeks), so a $65,000 salary equals about $31.25 per hour." },
  { q: "What is $65,000 a year per hour?", a: "About $31.25 per hour at 40 hours per week for 52 weeks. If you take two unpaid weeks off (50 weeks), it rises to about $32.50 per hour." },
  { q: "How many work hours are in a year?", a: "A standard full-time year is 2,080 hours (40 hours × 52 weeks). If you take two unpaid weeks off, it's 2,000 hours — which is also the basis for the 'divide by 2,000' shortcut." },
  { q: "Should I compare jobs by salary or hourly rate?", a: "Hourly rate reveals what salary alone hides — a higher salary requiring long hours can pay less per hour. But also weigh benefits, paid time off, and retirement matching, which hourly figures ignore." },
  { q: "Is this hourly rate before or after taxes?", a: "Before taxes. This shows gross pay. To see take-home pay after federal, state, and FICA taxes, run the figure through a paycheck calculator for your state." },
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
    headline: "Salary to Hourly Calculator — Convert Annual Pay Instantly",
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
        formula={sthFormula}
        rateTable={sthRateTable}
        howToSteps={sthHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "hourly-wage-calculator-us";
const CALC_NAME = "Hourly Wage to Annual Salary Calculator";
const CALC_DESCRIPTION = "Convert hourly wage to annual salary instantly. Calculate weekly, monthly & yearly earnings. Free US wage calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The standard conversion: <strong>hourly wage × 2,080 = annual salary</strong> (based on 40 hours/week × 52 weeks). A $20/hour wage equals $41,600/year; $25/hour equals $52,000; $30/hour equals $62,400. However, this assumes full-time work with no unpaid time off. If you get 2 weeks unpaid vacation, multiply by 2,000 hours instead (50 weeks × 40 hours).",
  "The federal minimum wage remains <strong>$7.25/hour ($15,080/year)</strong>, unchanged since 2009. However, 30+ states have higher minimums in 2026: Washington ($16.66), California ($16.50), New York ($16.00), Massachusetts ($15.00), and many cities have their own rates (Seattle $19.97, NYC $16.00, San Francisco $18.67). Always check your state and city minimum.",
  "Hourly workers can earn significantly more through <strong>overtime</strong>. The Fair Labor Standards Act (FLSA) requires <strong>1.5× pay for hours over 40/week</strong> for non-exempt employees. Working 50 hours/week at $25/hour: 40 regular hours ($1,000) + 10 overtime hours at $37.50 ($375) = $1,375/week or <strong>$71,500/year</strong> — 37% more than the base $52,000 salary equivalent.",
  "When comparing hourly wage to salary, factor in <strong>total compensation</strong>. Salaried employees often receive benefits worth 20–40% of base pay: employer health insurance ($7,000–$15,000/year value), 401(k) match (3–6% of salary), paid time off (10–20 days), and other perks. A $25/hour hourly position without benefits may be worth less than a $22/hour salaried position with full benefits.",
];

const wageFormula = `Annual Salary = Hourly Wage × Hours/Week × Weeks/Year
Monthly Salary = Annual Salary ÷ 12
Weekly Salary = Hourly Wage × Hours/Week
Daily Salary = Hourly Wage × Hours/Day

Standard: 2,080 hours/year (40 hrs × 52 weeks)
With 2 weeks unpaid PTO: 2,000 hours/year

Overtime: Hours over 40/week at 1.5× rate
  Example: $25/hr, 45 hrs/week
  Regular: 40 × $25 = $1,000
  OT: 5 × $37.50 = $187.50
  Weekly total: $1,187.50 ($61,750/year)`;

const wageRateTable = {
  title: "Hourly Wage to Annual Salary Conversion (40 hrs/week, 52 weeks)",
  headers: ["Hourly Wage", "Weekly", "Monthly", "Annual (2,080 hrs)", "After Fed Tax (~12%)"],
  rows: [
    ["$15.00", "$600", "$2,600", "$31,200", "$27,456"],
    ["$20.00", "$800", "$3,467", "$41,600", "$36,608"],
    ["$25.00", "$1,000", "$4,333", "$52,000", "$45,760"],
    ["$30.00", "$1,200", "$5,200", "$62,400", "$54,912"],
    ["$40.00", "$1,600", "$6,933", "$83,200", "$73,216"],
    ["$50.00", "$2,000", "$8,667", "$104,000", "$91,520"],
  ],
};

const wageHowToSteps = [
  "Enter your hourly wage rate (before taxes).",
  "Enter hours worked per week (standard is 40) and weeks per year (52, or 50 if you have 2 weeks unpaid time off).",
  "Optionally enter overtime hours per week to see total earnings including overtime pay at 1.5× rate.",
  "Review your daily, weekly, bi-weekly, monthly, and annual earnings — both gross and estimated after-tax amounts.",
];

const staticFaqs = [
  { q: "How much is $20/hour annually?", a: "$20/hour at 40 hours/week for 52 weeks equals $41,600 per year before taxes. After federal income tax (approximately 12% effective rate for this income level), FICA (7.65%), and average state tax (~4%), take-home is approximately $31,500–$33,000 per year or $2,625–$2,750 per month. The exact amount depends on your state, filing status, and deductions." },
  { q: "How many work hours in a year?", a: "Standard full-time: 2,080 hours (40 hours/week × 52 weeks). With 2 weeks paid vacation, you still earn for 2,080 hours but only work 2,000. With 2 weeks unpaid time off, you earn for 2,000 hours. Federal holidays (11 days) reduce actual working hours to approximately 1,928 for office workers, but your annual salary is still based on 2,080 hours." },
  { q: "What is the US minimum wage in 2026?", a: "The federal minimum wage is $7.25/hour ($15,080/year), unchanged since 2009. However, 30+ states have higher minimums: Washington $16.66, California $16.50, New York $16.00, Massachusetts $15.00, Arizona $14.70, Colorado $14.42. Many cities set even higher rates: Seattle $19.97, San Francisco $18.67, NYC $16.00. Your effective minimum wage is the highest of federal, state, and local." },
  { q: "Should I negotiate hourly or salary?", a: "If you regularly work over 40 hours/week, hourly may pay more because you earn overtime (1.5× for hours over 40). If you work exactly 40 hours, salary offers more stability and usually comes with better benefits (health insurance, 401k match, PTO). Rule of thumb: compare total compensation (salary + benefits value) rather than just the base number." },
  { q: "How do I convert annual salary to hourly rate?", a: "Divide annual salary by 2,080 (40 hours × 52 weeks). Examples: $50,000/year ÷ 2,080 = $24.04/hour; $75,000/year = $36.06/hour; $100,000/year = $48.08/hour. For quick math, drop the last three zeros and divide by 2: $60,000 → 60 ÷ 2 = $30/hour. This shortcut is accurate within a few percent." },
  { q: "What is overtime pay and who qualifies?", a: "Under the Fair Labor Standards Act, non-exempt employees must be paid 1.5× their regular rate for hours worked over 40 per week. Most hourly workers are non-exempt. Salaried workers earning under $43,888/year (2024 DOL threshold) are also eligible for overtime. Exempt employees (typically salaried professionals, managers, and executives earning over the threshold) do not qualify for overtime pay." },
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
        formula={wageFormula}
        rateTable={wageRateTable}
        howToSteps={wageHowToSteps}
      />
    </>
  );
}

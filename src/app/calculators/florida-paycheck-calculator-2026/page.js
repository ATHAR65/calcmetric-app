import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "florida-paycheck-calculator-2026";
const CALC_NAME = "Florida Paycheck Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Florida take-home pay. No state income tax in FL. Free paycheck calculator with federal tax brackets, FICA, and net pay for single and married filers.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Florida is one of nine US states with <strong>zero state income tax</strong> — enshrined in the state constitution. Workers in Florida keep every dollar of gross income minus federal deductions, making it one of the most tax-friendly states for employees, retirees, and self-employed professionals alike.",
  "A $75,000 salary in Florida is equivalent to an <strong>$82,000+ offer in New York or California</strong> after accounting for state income taxes. On a $100,000 salary, a Florida worker saves approximately $5,000–$7,000 per year compared to a New York resident. For high earners above $500,000, the annual savings can exceed $40,000.",
  "Florida generates revenue through a <strong>6% state sales tax</strong> (plus local discretionary surtaxes up to 1.5%), corporate income tax at 5.5%, property taxes, and tourism-related taxes. There are no local or municipal income taxes anywhere in Florida — your paycheck deductions are limited to federal income tax and FICA.",
  "The Florida minimum wage for 2026 is <strong>$14.00 per hour</strong>, continuing the annual $1.00 increases approved by voters in 2020 (Amendment 2). A full-time worker at minimum wage earns $29,120 annually, with a take-home of approximately $26,200 after federal taxes and FICA — an effective tax rate of just 10%.",
];

const flFormula = `Annual Gross = Hourly Wage × Hours/Week × 52
Taxable Income = Gross − Standard Deduction ($15,000 single / $30,000 married)
Federal Tax = Progressive brackets (10% to 37%)
FICA = 7.65% of Gross (6.2% SS + 1.45% Medicare)
Florida State Tax = $0

Example: $35/hr × 40 hrs × 52 = $72,800 gross (single)
  Taxable = $72,800 − $15,000 = $57,800
  Federal = $1,200 + $4,320 + $2,156 = $7,676
  FICA = $72,800 × 7.65% = $5,569
  Take-Home = $59,555 (81.8% of gross)`;

const flRateTable = {
  title: "Florida vs High-Tax States — $100,000 Salary Comparison",
  headers: ["State", "State Income Tax", "Annual Take-Home", "FL Advantage"],
  rows: [
    ["Florida", "$0", "~$78,500", "—"],
    ["New York (NYC)", "~$5,200 + $3,200 city", "~$70,100", "+$8,400/yr"],
    ["California", "~$5,800", "~$72,700", "+$5,800/yr"],
    ["New Jersey", "~$4,500", "~$74,000", "+$4,500/yr"],
    ["Texas", "$0", "~$78,500", "Same"],
  ],
};

const flHowToSteps = [
  "Enter your hourly wage — if salaried, divide annual salary by 2,080 for the hourly equivalent.",
  "Enter hours worked per week (40 for full-time). The calculator multiplies by 52 weeks for annual gross.",
  "Select filing status: Single ($15,000 standard deduction) or Married Filing Jointly ($30,000).",
  "Review your results: annual gross, federal tax, FICA, and take-home pay shown as annual, monthly, and bi-weekly. State tax confirms $0 for Florida.",
];

const staticFaqs = [
  { q: "Does Florida really have no state income tax?", a: "Yes — Florida's state constitution prohibits a personal income tax. The state generates revenue through a 6% sales tax, corporate income tax (5.5%), property taxes, and tourism taxes. There are no local or municipal income taxes anywhere in Florida either." },
  { q: "How much more take-home pay in Florida vs New York?", a: "A worker earning $100,000 takes home approximately $5,000–$7,000 more in Florida than New York due to NY state income tax (4%–10.9%) and NYC local tax (3.078%–3.876%). For high earners at $500,000+, the annual difference can exceed $40,000." },
  { q: "What is the Florida minimum wage in 2026?", a: "The Florida minimum wage is $14.00 per hour in 2026, following the annual $1.00 increases approved by voters in 2020 (Amendment 2). This is higher than the federal minimum wage of $7.25. A full-time worker at $14/hour earns $29,120 annually." },
  { q: "Are there any local income taxes in Florida?", a: "No — Florida has no local or municipal income taxes. Some counties charge a discretionary sales surtax (up to 1.5% on certain purchases), but there are no city or county income taxes deducted from your paycheck." },
  { q: "How does Florida compare to Texas for taxes?", a: "Both states have zero state income tax, so paycheck deductions are nearly identical. The main differences are property taxes (Texas averages 1.6–1.8% vs Florida ~0.86%), sales tax (Texas 6.25–8.25% vs Florida 6–7.5%), and homestead exemption rules. For take-home pay, they are essentially equal." },
  { q: "Do Florida retirees pay state tax on Social Security or pensions?", a: "No. Florida does not tax Social Security benefits, pension income, IRA withdrawals, or 401(k) distributions at the state level. This makes Florida one of the best states for retirement income, which is a major reason it has the second-largest retiree population in the US." },
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
        formula={flFormula}
        rateTable={flRateTable}
        howToSteps={flHowToSteps}
      />
    </>
  );
}

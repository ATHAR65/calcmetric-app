import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "texas-paycheck-calculator";
const CALC_NAME = "Texas Paycheck Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Texas take-home pay after federal taxes and FICA. No state income tax in TX. Free, instant results for single and married filers.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Texas is one of only nine US states that levies <strong>zero state income tax</strong>, making it one of the most financially advantageous places in America to earn a paycheck. While California charges up to 13.3% and New York up to 10.9%, Texas workers keep every dollar of gross income minus federal deductions — regardless of income level.",
  "Every W-2 employee in Texas still pays <strong>federal income tax</strong> (progressive rates from 10% to 37%) and <strong>FICA taxes</strong> (7.65% for Social Security and Medicare). On a $62,400 salary (single filer), federal income tax is approximately $5,448 and FICA is $4,774, leaving a take-home of about <strong>$52,178</strong> — an effective total tax rate of just 16.4%.",
  "Texas recoups revenue through other channels: <strong>property taxes averaging 1.60–1.80%</strong> of assessed home value (vs. the national average of ~1.07%), state sales tax of 6.25% plus local options up to 8.25%, and severance taxes on oil and gas. This trade-off means homeowners pay higher property taxes but wage earners keep more of every paycheck.",
  "On a $100,000 salary, a single filer in Texas pays approximately $16,500 in total taxes (federal + FICA), keeping <strong>$83,500</strong>. The same worker in California keeps only $75,500–$76,000 after state income tax. That is $7,500–$8,000 more per year in Texas — a difference that compounds substantially over a career.",
];

const txFormula = `Annual Gross = Hourly Wage × Hours/Week × 52
Taxable Income = Gross − Standard Deduction ($15,000 single / $30,000 married)
Federal Tax = Progressive brackets (10% to 37%)
FICA = 7.65% of Gross (6.2% SS + 1.45% Medicare)
Texas State Tax = $0

Example: $30/hr × 40 hrs × 52 = $62,400 gross (single)
  Taxable = $62,400 − $15,000 = $47,400
  Federal = $1,200 + $4,248 = $5,448
  FICA = $62,400 × 7.65% = $4,774
  Take-Home = $52,178 (83.6% of gross)`;

const txRateTable = {
  title: "2026 Federal Tax Brackets (Single Filer)",
  headers: ["Bracket", "Rate", "Tax on Bracket"],
  rows: [
    ["$0 – $12,000", "10%", "Up to $1,200"],
    ["$12,001 – $48,000", "12%", "Up to $4,320"],
    ["$48,001 – $103,000", "22%", "Up to $12,100"],
    ["$103,001 – $197,000", "24%", "Up to $22,560"],
    ["$197,001 – $250,000", "32%", "Up to $16,960"],
    ["$250,001 – $627,000", "35%", "Up to $131,950"],
    ["Over $627,000", "37%", "No cap"],
  ],
};

const txHowToSteps = [
  "Enter your hourly wage. If salaried, divide your annual salary by 2,080 (40 hours × 52 weeks) for the hourly equivalent.",
  "Enter hours worked per week — most full-time employees work 40, but part-time and overtime schedules work too.",
  "Select your filing status: Single ($15,000 standard deduction) or Married Filing Jointly ($30,000).",
  "Review your annual gross income, federal income tax, FICA, and net take-home pay displayed as annual, monthly, and bi-weekly amounts. State tax shows $0 for Texas.",
];

const staticFaqs = [
  { q: "How much tax do you pay on your paycheck in Texas in 2026?", a: "In Texas, you pay NO state income tax. Your only deductions are federal income tax (progressive brackets from 10% to 37%) and FICA (7.65% for Social Security + Medicare). Average effective tax rates range from 10–15% for most workers, significantly lower than high-tax states like California or New York." },
  { q: "How much will I take home on a $60,000 salary in Texas?", a: "For a single filer earning $60,000/year: federal income tax is approximately $5,360, FICA (7.65%) is $4,590, and state tax is $0. Annual take-home is approximately $50,050 or about $4,171 per month. A married filer would take home approximately $52,300 due to the larger standard deduction." },
  { q: "Why is there no state income tax in Texas?", a: "Texas relies on property taxes (averaging 1.60–1.80% of assessed value), state sales tax (6.25% plus local options up to 8.25%), and severance taxes on oil and gas production. Homeowners pay higher property taxes but wage earners keep more of every paycheck." },
  { q: "Is it better to work in Texas or California for tax purposes?", a: "Texas is significantly better. On a $100,000 salary, a single filer in Texas keeps approximately $83,500. In California, the same worker keeps only $75,500–$76,000 after state income tax — that is $7,500–$8,000 more per year in Texas." },
  { q: "Do I have to file a state tax return in Texas?", a: "No. Texas has no state income tax, so no state return is required. You still must file a federal return (Form 1040) with the IRS by April 15, 2026. If you work for a Texas employer but live in another state, you may need to file in your state of residence." },
  { q: "How do FICA taxes work for self-employed workers in Texas?", a: "Self-employed workers pay the full 15.3% self-employment tax (12.4% Social Security + 2.9% Medicare) instead of the 7.65% that W-2 employees pay. You can deduct half (7.65%) as an adjustment to income on your federal return. Texas does not tax self-employment income at the state level." },
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
        formula={txFormula}
        rateTable={txRateTable}
        howToSteps={txHowToSteps}
      />
    </>
  );
}

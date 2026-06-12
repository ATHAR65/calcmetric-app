import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "new-york-paycheck-calculator-2026";
const CALC_NAME = "New York Paycheck Calculator 2026";
const CALC_DESCRIPTION = "Calculate your New York take-home pay after federal, NY state, and NYC local taxes. Free NY paycheck estimator for single and married filers.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "New York has one of the <strong>highest combined tax burdens</strong> in the United States. Workers face federal income tax (10–37%), NY state income tax (4–10.9%), and for NYC residents, an additional city income tax (3.078–3.876%). A $100,000 earner in NYC can face an effective total tax rate of <strong>30–35%</strong>.",
  "New York state income tax uses <strong>9 progressive brackets</strong> ranging from 4% on the first $8,500 to 10.9% on income over $25 million. The 10.9% top rate (introduced as the millionaire's tax) applies to income above $25M, while most high earners pay 9.65% on income above $1,077,550. The standard deduction is $8,000 for single filers and $16,050 for married filing jointly.",
  "New York City imposes its own <strong>local income tax</strong> on residents at rates from 3.078% to 3.876%. This is on top of NY state tax. Yonkers residents pay a 16.75% surcharge on their NY state tax liability. These local taxes make NYC one of the highest-taxed cities in the country for wage earners.",
  "Moving from New York City to a no-tax state like Florida or Texas can save a worker earning $150,000 approximately <strong>$12,000–$15,000 per year</strong> in state and local income taxes. NY state tax on $150,000 is about $8,600, plus NYC tax of roughly $3,600. This tax differential is a major driver of the ongoing migration from New York to Sun Belt states.",
];

const nyFormula = `Annual Gross = Hourly Wage × Hours/Week × 52
Federal Tax = Progressive brackets (10% to 37%)
NY State Tax = 4% to 10.9% (9 brackets)
NYC Tax = 3.078% to 3.876% (NYC residents only)
FICA = 7.65% of Gross

Example: $50/hr × 40 hrs × 52 = $104,000 (single, NYC)
  Federal = ~$14,200
  NY State = ~$5,700
  NYC Tax = ~$3,200
  FICA = ~$7,956
  Take-Home = ~$72,944 (70.1% of gross)`;

const nyRateTable = {
  title: "2026 New York State Income Tax Brackets (Single)",
  headers: ["Income Range", "Rate", "Cumulative Tax"],
  rows: [
    ["$0 – $8,500", "4%", "$340"],
    ["$8,501 – $11,700", "4.5%", "$484"],
    ["$11,701 – $13,900", "5.25%", "$599"],
    ["$13,901 – $80,650", "5.5%", "$4,271"],
    ["$80,651 – $215,400", "6%", "$12,356"],
    ["$215,401 – $1,077,550", "6.85%", "$71,413"],
    ["$1,077,551+", "9.65%", "Varies"],
  ],
};

const nyHowToSteps = [
  "Enter your hourly wage or convert your salary to hourly (annual ÷ 2,080).",
  "Enter hours worked per week and select your filing status (Single or Married Filing Jointly).",
  "Indicate whether you live in NYC (adds city tax) or just NY state.",
  "Review your breakdown: federal tax, NY state tax, NYC tax (if applicable), FICA, and net take-home as annual, monthly, and bi-weekly amounts.",
];

const staticFaqs = [
  { q: "What is the New York state income tax rate in 2026?", a: "New York uses 9 progressive brackets from 4% to 10.9%. Most workers earning $50,000–$200,000 fall in the 5.5%–6.85% range. The top rate of 10.9% applies to income over $25 million. The standard deduction is $8,000 (single) or $16,050 (married filing jointly)." },
  { q: "Does New York City have its own income tax?", a: "Yes. NYC residents pay an additional local income tax of 3.078% to 3.876% on top of NY state tax. This is one of the highest local income taxes in the country. If you work in NYC but live outside the city (e.g., New Jersey or Connecticut), you do not pay NYC tax but may owe tax in your state of residence." },
  { q: "How much of my NY paycheck goes to taxes?", a: "For a $100,000 salary in NYC (single filer): federal tax ~$14,200, NY state ~$5,200, NYC ~$3,200, FICA ~$7,650 = total ~$30,250 in taxes, leaving ~$69,750 take-home (69.8% of gross). High earners at $300,000+ can face effective rates of 35–40%." },
  { q: "How much can I save moving from NYC to Florida or Texas?", a: "On a $150,000 salary, moving eliminates approximately $8,600 in NY state tax and $3,600 in NYC tax — saving $12,200 per year. On $300,000, the savings exceed $22,000 annually. Combined with lower cost of living in many no-tax states, total savings can reach $30,000+ per year." },
  { q: "Do I pay NY tax if I work remotely from another state?", a: "New York's 'convenience of the employer' rule may require you to pay NY tax even if you work remotely from another state, as long as your employer is based in New York and you're working remotely for your own convenience rather than the employer's necessity. This controversial rule has been challenged but remains in effect." },
  { q: "Is the Yonkers tax different from NYC tax?", a: "Yes. Yonkers residents pay a surcharge equal to 16.75% of their NY state tax liability (not 16.75% of income). For example, if your NY state tax is $5,000, your Yonkers surcharge is $837.50. Yonkers non-residents who work in Yonkers pay a 0.5% earnings tax on Yonkers-sourced income." },
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
        formula={nyFormula}
        rateTable={nyRateTable}
        howToSteps={nyHowToSteps}
      />
    </>
  );
}

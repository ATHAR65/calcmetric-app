import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "california-1099-tax-calculator";
const CALC_NAME = "California 1099 Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate your California 1099 freelance taxes for 2026 — federal self-employment tax (15.3%), income tax brackets, and CA state income tax rates up to 13.3%. Includes SDI and quarterly payment estimates.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "California freelancers and 1099 contractors face some of the highest combined tax rates in the country. You owe <strong>three layers of tax</strong>: federal income tax (10%–37%), self-employment tax (15.3%), and California state income tax (1%–13.3%). A freelancer earning $100,000 in net self-employment income could owe over $35,000 in combined taxes before deductions.",
  "California's state income tax uses a progressive system with <strong>nine brackets</strong> ranging from 1% to 13.3%. The top rate of 13.3% applies to taxable income over $1,000,000 for single filers. Most California freelancers earning between $50,000 and $150,000 fall in the 6% to 9.3% state bracket, on top of federal taxes.",
  "Unlike most states, California also charges a <strong>Mental Health Services Tax</strong> of 1% on taxable income over $1,000,000, bringing the effective top rate to 14.4%. California does not offer a standard deduction for state taxes if you itemize on your federal return — you must choose between the California standard deduction ($5,540 single / $11,080 joint for 2026) or itemizing.",
  "Self-employed Californians can optionally participate in <strong>State Disability Insurance (SDI)</strong>. Employees pay SDI through payroll (1.1% in 2026), but self-employed workers can elect coverage through the EDD's Voluntary Plan. Quarterly estimated payments to the state are due on the same dates as federal: April 15, June 16, September 15, and January 15.",
];

const caRateTable = {
  title: "2026 California Income Tax Brackets (Single Filer)",
  headers: ["Taxable Income", "State Rate", "Cumulative Tax"],
  rows: [
    ["$0 – $10,756", "1%", "$107.56"],
    ["$10,757 – $25,499", "2%", "$402.42"],
    ["$25,500 – $40,245", "4%", "$992.22"],
    ["$40,246 – $55,866", "6%", "$1,929.42"],
    ["$55,867 – $70,612", "8%", "$3,109.10"],
    ["$70,613 – $360,659", "9.3%", "$30,079.37"],
    ["$360,660 – $432,787", "10.3%", "$37,498.46"],
    ["$432,788 – $721,314", "11.3%", "$70,102.90"],
    ["$721,315 – $1,000,000+", "12.3%", "$104,391.21+"],
    ["Over $1,000,000", "13.3%", "Mental Health Services Tax"],
  ],
};

const caFormula = `Federal SE Tax = Net Income × 92.35% × 15.3%
Federal Income Tax = Taxable Income × Bracket Rate (10%–37%)
California State Tax = Taxable Income × CA Bracket Rate (1%–13.3%)
CA Standard Deduction = $5,540 (single) / $11,080 (joint)
Total Tax = Federal Income Tax + SE Tax + CA State Tax
Quarterly Payment = Total Estimated Tax ÷ 4`;

const caHowToSteps = [
  "Enter your total 1099 income from all California clients and sources.",
  "Enter your business deductions: home office, mileage ($0.70/mile), equipment, software, health insurance, and retirement contributions.",
  "Select your filing status — California follows federal filing statuses but has different bracket thresholds.",
  "Review the three-layer breakdown: federal income tax, federal SE tax (15.3%), and California state income tax. The calculator shows quarterly estimated payment amounts for both federal (IRS) and state (FTB) filings.",
];

const staticFaqs = [
  { q: "How much is California self-employment tax?", a: "California does not have its own self-employment tax — the 15.3% SE tax is a federal tax. However, California freelancers pay the 15.3% federal SE tax plus California state income tax (1% to 13.3%) plus federal income tax (10% to 37%). The combined effective rate for most California freelancers is 30% to 45% of net self-employment income." },
  { q: "Does California have state income tax for freelancers?", a: "Yes. California has the highest top marginal state income tax in the country at 13.3% (plus 1% Mental Health Services Tax on income over $1M). The rate is progressive: most freelancers earning $50K–$150K pay an effective state rate of 4% to 7%. This is on top of the 15.3% federal SE tax and federal income tax." },
  { q: "When are California estimated taxes due?", a: "California follows the same quarterly schedule as the IRS: April 15, June 16, September 15, and January 15. You file and pay using Form 540-ES to the Franchise Tax Board (FTB). Federal estimated payments are separate and go to the IRS via Form 1040-ES. You must make quarterly payments if you expect to owe $500+ in state tax." },
  { q: "What is SDI for self-employed in California?", a: "State Disability Insurance (SDI) provides short-term disability and paid family leave benefits. It is mandatory for W-2 employees (1.1% rate in 2026) but optional for the self-employed. You can elect coverage through the EDD Voluntary Plan, which gives you access to disability benefits and Paid Family Leave. The coverage costs 1.1% of net self-employment income." },
  { q: "Can I deduct California state taxes on my federal return?", a: "Yes, but with limits. The SALT (State and Local Tax) deduction is capped at $10,000 per year for federal returns. Since California freelancers often pay well over $10,000 in state income tax, you will likely hit this cap. The unused portion provides no federal benefit. This cap was extended through 2025 and is expected to continue in some form." },
  { q: "Is it better to move out of California for tax savings?", a: "Moving to a no-income-tax state like Texas, Florida, or Nevada could save you 5% to 13.3% in state taxes annually. A California freelancer earning $150,000 pays roughly $8,500 to $10,000 in CA state tax. However, California has a reputation for aggressive exit audits — if you maintain ties (home, business, family) in CA, the FTB may argue you are still a resident." },
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
        formula={caFormula}
        rateTable={caRateTable}
        howToSteps={caHowToSteps}
      />
    </>
  );
}

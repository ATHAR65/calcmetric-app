import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "cost-of-living-calculator";
const CALC_NAME = "Cost of Living Calculator 2026";
const CALC_DESCRIPTION = "Compare cost of living between any two US cities. Find the equivalent salary you need to maintain your lifestyle. Free city comparison calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Cost of living varies dramatically across the US. A <strong>$75,000 salary in Houston</strong> provides the same lifestyle as approximately <strong>$120,000 in San Francisco</strong> and $135,000 in Manhattan. Housing is the biggest driver — median rent for a 1-bedroom apartment ranges from $900 in Memphis to $3,500+ in San Francisco and New York City.",
  "The six categories that determine cost of living: <strong>housing (30–40%</strong> of most budgets, biggest variation between cities), <strong>food (10–15%)</strong>, <strong>transportation (10–15%</strong>, higher in car-dependent cities), <strong>healthcare (5–10%)</strong>, <strong>utilities (5–8%)</strong>, and <strong>taxes (varies by state)</strong>. A city can be expensive in one category and cheap in another — Houston has low housing but high transportation costs.",
  "The <strong>most expensive US cities</strong> in 2026: New York City (overall index 187, housing index 282), San Francisco (175, housing 264), Honolulu (169, housing 225), Boston (153, housing 208), and Washington DC (152, housing 196). The <strong>most affordable</strong>: Memphis (81), Oklahoma City (83), Wichita (84), Little Rock (85), and Birmingham (86). National average = 100.",
  "When evaluating a job offer in a new city, calculate your <strong>equivalent salary</strong>: (Current Salary × New City Index) ÷ Current City Index. Also factor in <strong>state income tax differences</strong> — moving from California (13.3% top rate) to Texas or Florida (0% state tax) can increase take-home pay by $5,000–$15,000 annually without any salary change.",
];

const colFormula = `Equivalent Salary = Current Salary × (New City COL Index ÷ Current City COL Index)

COL Index: 100 = national average
  Above 100 = more expensive than average
  Below 100 = less expensive than average

Example: $80,000 salary in Dallas (COL 95)
  Moving to San Francisco (COL 175):
  $80,000 × (175 ÷ 95) = $147,368 needed
  Moving to Memphis (COL 81):
  $80,000 × (81 ÷ 95) = $68,211 needed (same lifestyle)`;

const colRateTable = {
  title: "Cost of Living Index — Major US Cities (2026, National Average = 100)",
  headers: ["City", "Overall Index", "Housing Index", "Groceries Index", "$75K Equivalent"],
  rows: [
    ["New York City", "187", "282", "116", "$140,250"],
    ["San Francisco", "175", "264", "112", "$131,250"],
    ["Boston", "153", "208", "108", "$114,750"],
    ["Seattle", "148", "195", "113", "$111,000"],
    ["Denver", "113", "131", "103", "$84,750"],
    ["Houston", "95", "82", "96", "$71,250"],
    ["Memphis", "81", "62", "91", "$60,750"],
  ],
};

const colHowToSteps = [
  "Select your current city and enter your current salary or household income.",
  "Select the city you are comparing to (where you might move or a city you are considering).",
  "Review the equivalent salary needed, category-by-category breakdown (housing, food, transport, healthcare, taxes), and total monthly cost difference.",
  "Factor in state income tax differences and any employer cost-of-living adjustments to make a fully informed decision.",
];

const staticFaqs = [
  { q: "What is included in cost of living comparisons?", a: "Six major categories: housing (rent/mortgage, property tax, insurance — typically 30–40% of budget), food (groceries and dining out), transportation (car payments, insurance, gas, public transit), utilities (electricity, water, internet, phone), healthcare (insurance premiums, copays, out-of-pocket costs), and taxes (state income tax, sales tax, property tax). Housing differences drive most of the variation between cities." },
  { q: "Which US cities have the highest cost of living?", a: "In 2026: New York City (index 187, driven by housing at 282), San Francisco (175), Honolulu (169 — island shipping costs inflate everything), Boston (153), Washington DC (152), Los Angeles (148), and Seattle (148). The index uses 100 as the national average, so NYC costs 87% more than the average US city." },
  { q: "How much salary do I need to move to a new city?", a: "Use the formula: Current Salary × (New City Index ÷ Current City Index). For example, $80,000 in Dallas (index 95) requires $147,368 in San Francisco (index 175) for the same lifestyle. Also account for state tax differences — moving from Texas (0%) to California (up to 13.3%) reduces take-home pay significantly beyond the COL adjustment." },
  { q: "Is cost of living higher in cities or suburbs?", a: "Urban cores are typically 20–40% more expensive than suburbs, driven primarily by housing. However, suburbs have hidden costs: longer commutes (average $3,000–$8,000/year in gas, wear, and time), the need for multiple cars, and potentially higher childcare costs. Some people find that city living with no car and shorter commute is comparable in total cost to suburban life." },
  { q: "How do state taxes affect cost of living?", a: "Enormously. Seven states have no income tax: Texas, Florida, Nevada, Washington, Tennessee, Wyoming, and South Dakota. California's top rate is 13.3%, New York's is 10.9% (plus NYC adds 3.88%). For a $100,000 salary, the difference between Texas (0%) and California (9.3% effective rate) is approximately $9,300 per year in state income tax alone." },
  { q: "What is the best city for cost of living vs salary?", a: "Cities where salaries are high relative to living costs offer the best value. Top contenders in 2026: Austin TX (tech salaries, no state tax, moderate COL), Raleigh-Durham NC (growing tech hub, COL 97), Salt Lake City UT (low COL 97, growing job market), and Pittsburgh PA (very affordable COL 89 with solid healthcare and education sectors). Remote workers earn the biggest advantage by pairing high-COL salaries with low-COL cities." },
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
        formula={colFormula}
        rateTable={colRateTable}
        howToSteps={colHowToSteps}
      />
    </>
  );
}

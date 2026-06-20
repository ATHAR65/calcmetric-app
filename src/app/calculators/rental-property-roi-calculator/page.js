import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "rental-property-roi-calculator";
const CALC_NAME = "Rental Property ROI Calculator 2026";
const CALC_DESCRIPTION = "Calculate rental property cap rate, cash-on-cash return, NOI, and the 1% rule. Free 2026 rental property ROI calculator for real estate investors.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Evaluating a rental property requires multiple metrics because no single number tells the full story. The four most important are <strong>Cap Rate</strong> (unlevered return on property value), <strong>Cash-on-Cash Return</strong> (levered return on your actual cash invested), <strong>Net Operating Income</strong> (annual revenue minus operating expenses), and <strong>the 1% Rule</strong> (quick screening test).",
  "The <strong>Cap Rate</strong> (capitalization rate) equals Net Operating Income divided by the property's purchase price or market value. A cap rate of 6% means the property generates 6% of its value in net income per year, ignoring financing. Cap rates vary widely by market: 3%–5% in expensive metro areas (San Francisco, NYC), 6%–8% in mid-tier markets, and 8%–12% in secondary and tertiary markets.",
  "<strong>Cash-on-Cash Return</strong> measures the annual pre-tax cash flow divided by the total cash you invested (down payment + closing costs + rehab). This metric accounts for leverage and is often more relevant than cap rate for financed purchases. A property with a 5% cap rate can deliver 10%+ cash-on-cash returns with favorable financing. Most investors target a minimum cash-on-cash return of <strong>8% to 12%</strong>.",
  "Operating expenses for rental properties typically run <strong>35% to 50% of gross rent</strong>. Key expense categories: property taxes (0.5%–2.5% of value), insurance ($800–$2,500/year), maintenance and repairs (budget 1%–2% of property value annually), property management (8%–10% of collected rent), vacancy (budget 5%–8% of gross rent), and capital expenditures (roof, HVAC, water heater reserves).",
];

const roiFormula = `NOI = Gross Rental Income − Operating Expenses
Cap Rate = NOI ÷ Purchase Price × 100
Cash-on-Cash Return = Annual Cash Flow ÷ Total Cash Invested × 100
Annual Cash Flow = NOI − Annual Debt Service (mortgage payments)
1% Rule: Monthly Rent ≥ 1% of Purchase Price

GRM (Gross Rent Multiplier) = Purchase Price ÷ Annual Gross Rent`;

const roiRateTable = {
  title: "Typical Rental Property Expense Ranges",
  headers: ["Expense Category", "Typical Range", "Budget Rule"],
  rows: [
    ["Property Taxes", "0.5%–2.5% of value", "Varies by county/state"],
    ["Insurance", "$800–$2,500/year", "Get quotes before closing"],
    ["Maintenance & Repairs", "1%–2% of value/year", "$1 per sq ft per year"],
    ["Property Management", "8%–10% of rent", "If not self-managing"],
    ["Vacancy Reserve", "5%–8% of gross rent", "~1 month vacancy per year"],
    ["CapEx Reserve", "5%–10% of rent", "Roof, HVAC, appliances"],
    ["Total Operating Ratio", "35%–50% of rent", "50% rule as a quick estimate"],
  ],
};

const roiHowToSteps = [
  "Enter the purchase price, estimated rehab/renovation costs, closing costs, and your down payment amount.",
  "Enter the expected monthly rent and vacancy rate (typically 5%–8% for a conservative estimate).",
  "Enter operating expenses: property taxes, insurance, maintenance budget, property management fee, and CapEx reserves.",
  "Enter your mortgage terms (interest rate, term, down payment) for cash flow and cash-on-cash calculations.",
  "Review all metrics: NOI, cap rate, cash-on-cash return, monthly cash flow, 1% rule result, and break-even occupancy rate.",
];

const staticFaqs = [
  { q: "What is a good cap rate for rental property?", a: "A good cap rate depends on the market and risk level. In expensive metro areas (San Francisco, NYC, LA), 3%–5% cap rates are common. Mid-tier markets (Atlanta, Indianapolis, Kansas City) offer 6%–8%. Secondary markets and higher-risk areas can yield 8%–12%. Higher cap rates mean higher returns but often come with more management challenges and less appreciation potential." },
  { q: "What is cash-on-cash return?", a: "Cash-on-cash return is the annual pre-tax cash flow divided by the total cash you invested (down payment + closing costs + rehab costs). It measures the return on your actual money in the deal, not the property's total value. A property purchased for $200,000 with $50,000 cash invested that generates $5,000/year in cash flow has a 10% cash-on-cash return. Most investors target 8%–12%." },
  { q: "What is the 1% rule in real estate?", a: "The 1% rule says monthly rent should be at least 1% of the purchase price. A $200,000 property should rent for at least $2,000/month. This is a quick screening tool, not a definitive analysis — properties that pass the 1% rule deserve deeper analysis, while those that fail significantly are often poor investments. In expensive markets, the 1% rule is nearly impossible to meet." },
  { q: "What is NOI in real estate?", a: "Net Operating Income (NOI) is annual gross rental income minus all operating expenses (taxes, insurance, maintenance, management, vacancy). NOI does not include mortgage payments, income taxes, or depreciation. It measures the property's ability to generate income independent of how it is financed. NOI is the numerator in the cap rate formula and is the most important metric for comparing properties." },
  { q: "How much should I budget for maintenance?", a: "Budget 1% to 2% of the property's value per year for maintenance and repairs, or approximately $1 per square foot per year. A $250,000, 1,500 sq ft property needs $1,500–$5,000 annually. Older properties and those with deferred maintenance need more. Separately budget 5%–10% of rent for capital expenditures (roof every 25 years, HVAC every 15, water heater every 10, appliances every 10)." },
  { q: "Should I use a property manager or self-manage?", a: "Property managers charge 8%–10% of collected rent plus placement fees (50%–100% of first month's rent for new tenants). Self-managing saves $1,200–$2,400/year on a $2,000/month rental but requires time for tenant screening, maintenance coordination, rent collection, and legal compliance. Self-manage if you have 1–3 local properties and available time; use a manager for distant properties or larger portfolios." },
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
        formula={roiFormula}
        rateTable={roiRateTable}
        howToSteps={roiHowToSteps}
      />
    </>
  );
}

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "residential-solar-panel-roi";
const CALC_NAME = "Solar Panel ROI Calculator 2026 — Payback";
const CALC_DESCRIPTION = "Calculate your solar panel payback period, 25-year savings, and ROI with the 30% federal tax credit. Free 2026 solar ROI calculator for homeowners.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The average residential solar installation in the US costs <strong>$20,000–$35,000</strong> before incentives for a 6–10 kW system. After the 30% federal Investment Tax Credit (ITC), the net cost drops to <strong>$14,000–$24,500</strong>. With state incentives, SRECs, and utility rebates, some homeowners pay as little as $10,000–$15,000 out of pocket.",
  "Solar panels typically pay for themselves in <strong>6–12 years</strong> depending on electricity rates, sun exposure, and local incentives. In high-electricity-cost states like California ($0.30+/kWh), Massachusetts, and Connecticut, payback can be as fast as 5–7 years. In lower-cost states like Louisiana or Arkansas ($0.10–$0.12/kWh), payback extends to 10–14 years.",
  "Modern solar panels are warranted for <strong>25 years</strong> and often produce power for 30–35 years. They degrade approximately 0.5% per year, meaning a panel producing 400W at installation still produces ~350W at year 25. Over 25 years, a typical 8 kW system generates <strong>$40,000–$80,000</strong> in electricity savings depending on local rates.",
  "Solar installations increase home value by approximately <strong>3–4%</strong> according to Zillow research — about $15,000 for a median-priced home. Owned (not leased) solar systems are most attractive to buyers. In most states, solar panels are exempt from property tax increases, meaning the added value is not taxed. Solar homes also sell faster than comparable non-solar homes.",
];

const solarFormula = `Net Cost = System Cost − (30% Federal ITC) − State/Local Incentives
Annual Savings = kWh Produced × Electricity Rate
Payback Period = Net Cost ÷ Annual Savings
25-Year ROI = (Total Savings − Net Cost) ÷ Net Cost × 100

Example: 8 kW system, $28,000 cost, $0.18/kWh rate
  Federal ITC = $28,000 × 30% = $8,400
  Net Cost = $19,600
  Annual production = 11,000 kWh
  Annual savings = 11,000 × $0.18 = $1,980
  Payback = $19,600 ÷ $1,980 = 9.9 years
  25-year savings = ~$49,500 → ROI = 153%`;

const solarRateTable = {
  title: "Solar Payback by Electricity Rate (8 kW System, $28K Before ITC)",
  headers: ["Electricity Rate", "Annual Savings", "Payback Period", "25-Year Net Savings"],
  rows: [
    ["$0.12/kWh", "$1,320", "14.8 years", "$13,400"],
    ["$0.16/kWh", "$1,760", "11.1 years", "$24,400"],
    ["$0.20/kWh", "$2,200", "8.9 years", "$35,400"],
    ["$0.25/kWh", "$2,750", "7.1 years", "$49,150"],
    ["$0.30/kWh", "$3,300", "5.9 years", "$62,900"],
  ],
};

const solarHowToSteps = [
  "Enter your system size (kW) and total installation cost (get quotes from at least 3 installers).",
  "Enter your local electricity rate per kWh and estimated annual production (based on sun hours — check PVWatts.nrel.gov).",
  "Enter applicable incentives: the 30% federal ITC is automatic; add state credits, SRECs, and utility rebates if applicable.",
  "Review your net cost after incentives, annual electricity savings, payback period, 25-year total savings, and ROI percentage.",
];

const staticFaqs = [
  { q: "Is solar worth it in 2026?", a: "For most homeowners, yes. With the 30% federal tax credit, average payback is 6–10 years on a system that lasts 25–35 years. In states with electricity rates above $0.16/kWh, solar is almost always financially positive. Factors that reduce value: low electricity rates, heavy tree shading, north-facing roofs, and plans to move within 5 years." },
  { q: "What is the payback period for solar panels?", a: "Typically 6–12 years after the 30% federal ITC. High-electricity states (CA, MA, CT, NY at $0.25–$0.40/kWh) see 5–8 year payback. Low-cost states (LA, AR, WV at $0.10–$0.12/kWh) see 10–14 years. After payback, all electricity savings are pure profit for the remaining 15–20+ years of panel life." },
  { q: "How long do solar panels last?", a: "Solar panels are warranted for 25 years and typically produce power for 30–35 years. They degrade approximately 0.5% per year — a panel producing 400W at installation produces about 350W at year 25 (87.5% of original output). Inverters typically need replacement once at year 12–15 ($1,000–$2,500)." },
  { q: "Does solar increase home value?", a: "Yes. Zillow research shows solar panels increase home value by approximately 3–4% — about $15,000 for a median-priced US home. Owned systems (not leased) are most attractive to buyers. In most states, solar is exempt from property tax increases. Solar homes also sell 20% faster than comparable non-solar properties." },
  { q: "What is the federal solar tax credit in 2026?", a: "The Investment Tax Credit (ITC) provides a 30% credit on the total cost of a residential solar installation (panels, inverter, mounting, labor, battery storage). On a $28,000 system, the credit is $8,400. The 30% rate is guaranteed through 2032, then steps down to 26% in 2033 and 22% in 2034. It is a dollar-for-dollar tax credit, not a deduction." },
  { q: "Should I buy or lease solar panels?", a: "Buying maximizes long-term savings and home value. Leasing (or PPA) requires $0 upfront but the solar company owns the panels, claims the tax credit, and you pay a monthly fee. Over 25 years, buying saves 40–70% more than leasing. Leasing also complicates home sales. If you cannot afford to buy outright, solar loans (5–7% APR) still provide better returns than leasing." },
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
        formula={solarFormula}
        rateTable={solarRateTable}
        howToSteps={solarHowToSteps}
      />
    </>
  );
}

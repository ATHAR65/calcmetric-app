import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "ev-charging-vs-gas-savings";
const CALC_NAME = "EV vs Gas Savings Calculator 2026";
const CALC_DESCRIPTION = "Calculate annual savings switching from gas to electric vehicle. Compare charging vs fuel costs, maintenance savings, and tax credits. Free 2026 EV calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The average American drives <strong>13,500 miles per year</strong>. A gas car averaging 28 MPG at $3.50/gallon costs approximately $1,688 annually in fuel. An EV averaging 3.5 miles per kWh at $0.14/kWh (home charging) costs approximately <strong>$540</strong> — a savings of <strong>$1,148 per year</strong> on fuel alone.",
  "Home charging at off-peak residential rates (<strong>$0.10–$0.16 per kWh</strong>) is by far the cheapest way to charge an EV. Level 2 home charger installation costs $500–$2,000 but qualifies for a 30% federal tax credit (up to $1,000). Public DC fast charging costs $0.30–$0.60 per kWh — comparable to or more expensive than gas in some areas.",
  "EVs have <strong>dramatically lower maintenance costs</strong>: no oil changes, no transmission service, fewer brake replacements (regenerative braking), and fewer moving parts. Average annual maintenance for an EV is <strong>$600–$900</strong> vs <strong>$1,200–$1,800</strong> for a gas car. Over 5 years, EV owners save $3,000–$5,000 on maintenance alone.",
  "The federal EV tax credit offers up to <strong>$7,500 for new qualifying EVs</strong> and up to <strong>$4,000 for used EVs</strong> (must be priced under $25,000 with buyer income limits). Many states offer additional incentives: California up to $7,500, Colorado $5,000, New Jersey sales tax exemption, and others. Combined incentives can reach $10,000–$15,000.",
];

const evFormula = `Annual Gas Cost = (Miles ÷ MPG) × Gas Price per Gallon
Annual EV Cost = (Miles ÷ Mi/kWh) × Electricity Price per kWh
Annual Savings = Gas Cost − EV Cost

Example: 13,500 miles/year
  Gas (28 MPG, $3.50/gal): 13,500 ÷ 28 × $3.50 = $1,688
  EV (3.5 mi/kWh, $0.14/kWh): 13,500 ÷ 3.5 × $0.14 = $540
  Fuel Savings = $1,148/year
  + Maintenance savings ~$600/year
  Total annual savings ≈ $1,748`;

const evRateTable = {
  title: "EV vs Gas Annual Cost Comparison (13,500 miles/year)",
  headers: ["Cost Category", "Gas Car", "Electric Vehicle", "Annual Savings"],
  rows: [
    ["Fuel / Charging", "$1,688", "$540 (home)", "$1,148"],
    ["Maintenance", "$1,500", "$750", "$750"],
    ["Insurance", "$1,600", "$1,800", "−$200"],
    ["Registration", "$100", "$200 (EV fee)", "−$100"],
    ["Total Annual", "$4,888", "$3,290", "$1,598"],
  ],
};

const evHowToSteps = [
  "Enter your annual miles driven and current gas car's MPG (or select a common vehicle type).",
  "Enter your local gas price per gallon and electricity rate per kWh (check your utility bill).",
  "Select the EV efficiency (miles per kWh) or choose a specific EV model for accurate estimates.",
  "Review your annual fuel savings, maintenance savings, total cost of ownership comparison, and payback period for the EV price premium.",
];

const staticFaqs = [
  { q: "How much do you save driving an EV vs gas?", a: "On average, $1,000–$2,500 per year in combined fuel and maintenance savings. Fuel savings depend heavily on local gas and electricity prices. At $3.50/gallon gas and $0.14/kWh electricity, a driver covering 13,500 miles saves approximately $1,148 on fuel plus $600–$750 on maintenance annually." },
  { q: "What is the EV tax credit in 2026?", a: "Up to $7,500 federal tax credit for qualifying new EVs (MSRP limits: $55,000 for sedans, $80,000 for SUVs/trucks). Up to $4,000 for qualifying used EVs (price under $25,000, buyer income limits). The credit can be taken as a point-of-sale discount at the dealer. Many states offer additional credits of $1,000–$7,500." },
  { q: "How long to recoup the extra cost of an EV?", a: "Typically 3–5 years for mainstream EVs when factoring in the federal tax credit, fuel savings, and maintenance savings. Without the tax credit, payback extends to 5–8 years. A $35,000 EV vs a $28,000 gas equivalent (a $7,000 premium) with $7,500 credit and $1,750/year savings: payback is immediate with the credit." },
  { q: "Is home charging cheaper than public charging?", a: "Significantly. Home charging at $0.10–$0.16/kWh costs approximately $0.03–$0.05 per mile. Public Level 2 charging costs $0.20–$0.35/kWh. DC fast charging costs $0.30–$0.60/kWh ($0.09–$0.17 per mile) — comparable to gas in some areas. Home charging at off-peak rates is the cheapest way to fuel any vehicle." },
  { q: "How much does it cost to install a home EV charger?", a: "A Level 2 (240V) home charger costs $300–$800 for the unit plus $200–$1,200 for installation (varies by electrical panel capacity and distance). Total: $500–$2,000. The federal Alternative Fuel Vehicle Refueling Property Credit covers 30% of costs up to $1,000. Most Level 2 chargers add 25–30 miles of range per hour." },
  { q: "Do EVs really have lower maintenance costs?", a: "Yes — EVs eliminate oil changes ($50–$100 each, 2–3x/year), transmission service ($150–$300), spark plugs, timing belts, and exhaust system repairs. Regenerative braking extends brake pad life 2–3x. The main EV-specific cost is battery replacement ($5,000–$15,000), but most batteries are warranted for 8 years/100,000 miles and last much longer." },
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
        formula={evFormula}
        rateTable={evRateTable}
        howToSteps={evHowToSteps}
      />
    </>
  );
}

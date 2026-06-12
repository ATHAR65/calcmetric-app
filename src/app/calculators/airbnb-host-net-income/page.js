import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "airbnb-host-net-income";
const CALC_NAME = "Airbnb Host Net Income Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Airbnb net income after host fees, cleaning costs, taxes, and expenses. Free Airbnb profit estimator for hosts in 2026.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Airbnb uses two fee structures: the <strong>split-fee model</strong> (3% host fee + ~14% guest fee) and the <strong>host-only model</strong> (14–16% charged entirely to the host). Most hosts use the split-fee model where Airbnb deducts 3% from each booking payout. Professional hosts and property managers often use the host-only model for simpler guest pricing.",
  "Beyond Airbnb's service fee, hosts must account for <strong>cleaning costs</strong> ($50–$200 per turnover), <strong>supplies</strong> (toiletries, linens replacement), <strong>utilities</strong> (extra water, electricity, HVAC), <strong>maintenance</strong> (1–2% of property value annually), and <strong>insurance</strong>. These operating expenses typically consume 25–40% of gross booking revenue.",
  "The IRS <strong>14-day rule</strong> allows homeowners to rent their property for up to 14 days per year completely tax-free — no reporting required. Beyond 14 days, all rental income must be reported on Schedule E. Deductible expenses include mortgage interest (rental portion), property taxes, insurance, depreciation, cleaning, repairs, supplies, and Airbnb service fees.",
  "Average Airbnb occupancy rates in the US range from <strong>48% to 65%</strong> depending on market and season. Top-performing listings in tourist destinations average 70%+. After all expenses and taxes, most hosts net <strong>40–60% of gross booking revenue</strong>. A property generating $30,000/year in bookings typically nets $12,000–$18,000 after all costs.",
];

const airbnbFormula = `Net Income = Gross Bookings − Airbnb Fee − Expenses − Taxes
Airbnb Fee = Gross × 3% (split-fee) or 14–16% (host-only)

Example: $30,000 annual bookings, split-fee model
  Airbnb fee (3%) = $900
  Cleaning ($100 × 60 turnovers) = $6,000
  Utilities/supplies = $2,400
  Insurance = $1,200
  Maintenance = $1,500
  Net before tax = $18,000
  SE tax + income tax (~25%) = $4,500
  True net income = $13,500 (45% of gross)`;

const airbnbRateTable = {
  title: "Airbnb Host Expense Breakdown",
  headers: ["Expense", "Typical Cost", "% of Gross Revenue"],
  rows: [
    ["Airbnb service fee", "3% (split) or 14–16% (host-only)", "3–16%"],
    ["Cleaning per turnover", "$50–$200", "10–20%"],
    ["Utilities (extra)", "$100–$300/month", "5–10%"],
    ["Supplies & linens", "$50–$150/month", "2–5%"],
    ["Insurance (STR policy)", "$1,000–$3,000/year", "3–8%"],
    ["Maintenance & repairs", "1–2% of property value/year", "5–10%"],
  ],
};

const airbnbHowToSteps = [
  "Enter your nightly rate, average occupancy rate, and whether you use split-fee (3% host) or host-only (14–16%) pricing.",
  "Enter your per-turnover cleaning cost and average monthly operating expenses (utilities, supplies, insurance).",
  "Enter your mortgage payment (if applicable) and property tax for accurate net profit calculation.",
  "Review your annual gross bookings, total Airbnb fees, total expenses, estimated tax liability, and true net income.",
];

const staticFaqs = [
  { q: "How much does Airbnb charge hosts?", a: "Under the split-fee model (most common), Airbnb charges hosts 3% per booking and guests approximately 14%. Under the host-only model (used by professional managers), Airbnb charges hosts 14–16% with no separate guest fee. The split-fee model results in lower visible prices for guests but the same net to hosts." },
  { q: "Do I pay tax on Airbnb income?", a: "If you rent for more than 14 days per year, yes. All rental income must be reported on Schedule E (or Schedule C if you provide substantial services). You can deduct expenses proportional to rental use: mortgage interest, property taxes, insurance, depreciation, cleaning, supplies, utilities, and Airbnb fees. Renting 14 days or fewer per year is completely tax-free under the IRS 14-day rule." },
  { q: "What is the 14-day Airbnb tax rule?", a: "IRS Section 280A allows homeowners to rent their primary residence for up to 14 days per calendar year without reporting the income. The rental income is completely tax-free, but you also cannot deduct rental expenses for those days. This rule is popular for hosts near major events (Super Bowl, festivals, etc.)." },
  { q: "What expenses can Airbnb hosts deduct?", a: "Deductible expenses include: mortgage interest (rental-use portion), property taxes, homeowner's insurance, depreciation (27.5-year schedule for residential property), cleaning costs, supplies and toiletries, utilities, repairs and maintenance, Airbnb service fees, photography costs, and furnishing depreciation." },
  { q: "What is a good occupancy rate for Airbnb?", a: "Average US Airbnb occupancy is 48–65%. Properties in strong tourist markets average 65–75%. New listings typically need 3–6 months to build reviews and reach steady occupancy. To hit 70%+ occupancy, focus on competitive pricing, Superhost status, professional photos, and fast response times." },
  { q: "Is Airbnb profitable in 2026?", a: "Most hosts net 40–60% of gross booking revenue after all expenses and taxes. A property generating $30,000/year in bookings typically nets $12,000–$18,000. Profitability depends heavily on location, purchase price, financing costs, and local regulations. Markets with short-term rental restrictions or high property prices may have lower returns." },
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
        formula={airbnbFormula}
        rateTable={airbnbRateTable}
        howToSteps={airbnbHowToSteps}
      />
    </>
  );
}

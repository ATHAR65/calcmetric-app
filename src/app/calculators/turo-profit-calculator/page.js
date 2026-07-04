import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "turo-profit-calculator";
const CALC_NAME = "Turo Profit Calculator 2026";
const CALC_DESCRIPTION = "Estimate Turo host earnings by protection plan (70/80/90% share), minus your car payment and running costs — true monthly and annual net profit plus utilization.";

const seoContent = [
  "US Turo hosts keep <strong>70%, 80%, or 90%</strong> of the trip price depending on their earnings plan — more protection from Turo means a lower share. In dynamic-pricing cities the share ranges <strong>65–100%</strong> based on booking lead time.",
  "Profit = daily rate × booked days × plan share − car payment − cleaning/maintenance. The variable that matters most is <strong>utilization</strong>: 18 booked days can be profitable where 8 days loses money.",
  "Turo income is <strong>self-employment income</strong> (1099-K past the threshold). Depreciation from renter miles is the biggest hidden cost — and also the biggest tax deduction.",
];

const turoFormula = `Gross = daily rate × booked days
Host earnings = Gross × plan share (70/80/90%)
Net = Host earnings − car payment − other costs

Example: $55/day × 18 days, 80% plan
  Gross = $990 → Your share = $792
  Net = $792 − $380 payment − $150 costs = $262/mo (≈$3,144/yr)`;

const turoRateTable = {
  title: "Turo US Earnings Plans (2026)",
  headers: ["Plan", "Host Share", "Protection Trade-Off", "Best For"],
  rows: [
    ["More earnings", "90% (85–100% dynamic cities)", "Highest deductible on you", "Confident hosts, cheap-to-fix cars"],
    ["Balanced", "80% (75–90%)", "Middle ground", "Most hosts"],
    ["More peace of mind", "70% (65–80%)", "Lowest deductible", "Expensive vehicles, new hosts"],
  ],
};

const turoHowToSteps = [
  "Enter your average daily rate and realistic booked days per month.",
  "Select your earnings plan — the 70/80/90% host share.",
  "Add your monthly car payment and other running costs.",
  "Review your share vs Turo's, net monthly/annual profit, and utilization.",
];

const staticFaqs = [
  { q: "What percentage does Turo take from hosts?", a: "Turo keeps 10–30% depending on your earnings plan — hosts keep 70%, 80%, or 90%. In dynamic-pricing cities the host share ranges 65–100% based on how far in advance trips are booked." },
  { q: "How much can I make hosting one car on Turo?", a: "A $55/day car booked 18 days per month on the 80% plan pays the host $792 gross — typically $200–$400 of monthly profit after the car payment and running costs, before depreciation and taxes." },
  { q: "Which Turo earnings plan is best?", a: "The 80% Balanced plan fits most hosts. Pick 90% only if you can absorb a larger damage deductible; pick 70% for maximum protection on expensive vehicles." },
  { q: "Is Turo income taxable?", a: "Yes — hosting income is self-employment income and Turo issues a 1099-K past the federal threshold. Depreciation, cleaning, parking, and the business-use share of ownership costs are deductible." },
  { q: "Does Turo cover damage to my car?", a: "Every earnings plan includes physical damage reimbursement and liability coverage; the deductible and protection level vary by plan — that trade-off is exactly what the 70/80/90% share reflects." },
];

const faqSchemaEntities = staticFaqs.map((f) => ({
  "@type": "Question",
  name: f.q,
  acceptedAnswer: { "@type": "Answer", text: f.a },
}));

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqSchemaEntities };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Turo Profit Calculator 2026 — Real Host Earnings & Net Income",
    description: CALC_DESCRIPTION,
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    author: { "@type": "Organization", name: "TheMetricApp", url: "https://www.themetricapp.com" },
    publisher: { "@type": "Organization", name: "TheMetricApp", url: "https://www.themetricapp.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.themetricapp.com/calculators/${CALC_SLUG}` },
  };

  return (
    <>
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema, articleSchema]} />
      <Calculator />
      <CalculatorStaticSeo
        title={CALC_NAME}
        description={CALC_DESCRIPTION}
        slug={CALC_SLUG}
        faqs={staticFaqs}
        content={seoContent}
        formula={turoFormula}
        rateTable={turoRateTable}
        howToSteps={turoHowToSteps}
      />
    </>
  );
}

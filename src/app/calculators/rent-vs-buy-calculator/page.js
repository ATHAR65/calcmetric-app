import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "rent-vs-buy-calculator";
const CALC_NAME = "Rent vs Buy Calculator";
const CALC_DESCRIPTION = "Compare the true total cost of renting versus buying a home over your time horizon, including equity, home appreciation, carrying costs, and the opportunity cost of your down payment.";

const seoContent = [
  "<strong>Whether renting or buying is cheaper depends mostly on how long you'll stay — buying rarely wins if you move within about five years.</strong> Upfront and ~6% exit costs need time for appreciation and equity to overcome.",
  "This calculator models both fully: buying totals down payment, mortgage, tax, insurance, and maintenance minus your end equity; renting totals rising rent minus the investment gains on your down payment. Lower net cost wins.",
  "Rule of thumb: if a home costs more than ~20× the annual rent (price-to-rent ratio), renting is often the better financial deal. Years staying, mortgage rate, and rent-to-price ratio move the result most.",
];

const rvbFormula = `Net Buy Cost = down payment + mortgage payments + taxes/insurance/maintenance
             − (home equity at sale after 6% selling cost)
Net Rent Cost = total rent (grown yearly) − investment gains on down payment
Winner = lower net cost

Assumes: 3.5% appreciation, 3% rent growth, 6% invest return,
1.1% tax, 0.5% insurance, 1% maintenance`;

const rvbRateTable = {
  title: "How Time Horizon Changes the Answer",
  headers: ["Years Staying", "Typical Winner", "Why"],
  rows: [
    ["1–3 years", "Rent", "Buying costs can't be recovered so fast"],
    ["4–5 years", "Close / depends", "Break-even zone — rate & appreciation decide"],
    ["6–10 years", "Often buy", "Equity and appreciation outpace renting"],
    ["10+ years", "Usually buy", "Mortgage paid down, appreciation compounds"],
  ],
};

const rvbHowToSteps = [
  "Enter the home price and comparable monthly rent.",
  "Set your down payment percentage and mortgage rate.",
  "Enter how many years you expect to stay — the most important input.",
  "Review which option is cheaper and by how much, plus your equity at exit.",
];

const staticFaqs = [
  { q: "Is it cheaper to rent or buy a home?", a: "It depends mainly on how long you stay. Buying has large upfront and ~6% selling costs, so it usually only beats renting after about five years. Shorter stays, higher mortgage rates, and cheap rent all favor renting." },
  { q: "What is the price-to-rent ratio?", a: "It's the home price divided by the annual rent for a comparable property. A ratio above about 20 generally favors renting; below 15 generally favors buying, all else equal." },
  { q: "Does buying always build wealth?", a: "Not automatically. Equity and appreciation build wealth, but so does investing the down payment and monthly savings a renter keeps. If a renter invests the difference, renting can win financially." },
  { q: "How many years should I plan to stay before buying?", a: "A common guideline is at least five years, so appreciation and equity can offset the upfront and selling costs. The exact break-even depends on your rate, price, and local appreciation." },
  { q: "What costs does buying include beyond the mortgage?", a: "Property tax (~1.1%), homeowners insurance (~0.5%), maintenance (~1% of value per year), closing costs, and ~6% selling costs at exit. These are why buying needs time to pay off." },
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
    headline: "Rent vs Buy Calculator — Should You Buy or Keep Renting?",
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
        formula={rvbFormula}
        rateTable={rvbRateTable}
        howToSteps={rvbHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

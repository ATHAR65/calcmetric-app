import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "debt-snowball-vs-avalanche-calculator";
const CALC_NAME = "Debt Snowball vs Avalanche Calculator";
const CALC_DESCRIPTION = "Compare the debt snowball and debt avalanche payoff methods side by side to see which clears your debt faster and saves the most interest.";

const seoContent = [
  "<strong>The debt avalanche pays highest-interest debt first to minimize interest; the debt snowball pays the smallest balance first for motivating quick wins.</strong> Both roll each freed-up payment onto the next debt to accelerate payoff.",
  "Mathematically the avalanche always costs the least interest and usually finishes at least as fast. But the gap is often small, and many people stick with the snowball because early wins prevent burnout.",
  "The biggest lever is your extra payment — even $100/month more can cut years off high-interest debt. This calculator simulates both methods month by month across your debts.",
];

const dsFormula = `Both methods: pay minimums on all debts, put every extra dollar
on ONE target debt, then roll its payment to the next when cleared.

Avalanche target = highest APR first (least total interest)
Snowball target = smallest balance first (fastest first win)

Total interest and payoff time are simulated month by month.`;

const dsRateTable = {
  title: "Snowball vs Avalanche at a Glance",
  headers: ["Method", "Target Order", "Best For", "Trade-Off"],
  rows: [
    ["Avalanche", "Highest APR first", "Minimizing total interest", "Slower first psychological win"],
    ["Snowball", "Smallest balance first", "Motivation & momentum", "Slightly more interest"],
  ],
};

const dsHowToSteps = [
  "Enter each debt's balance, APR, and minimum monthly payment (up to three debts).",
  "Enter the extra amount you can pay each month above the minimums.",
  "Review total interest and payoff time for both methods.",
  "See how much the avalanche saves and how the timelines compare.",
];

const staticFaqs = [
  { q: "What is the difference between debt snowball and avalanche?", a: "The avalanche method targets your highest-interest debt first to minimize total interest paid. The snowball method targets your smallest balance first to score quick wins that build momentum. Both pay minimums on other debts and roll freed payments forward." },
  { q: "Which debt payoff method saves the most money?", a: "The debt avalanche always saves the most interest and usually finishes at least as fast, because it kills your most expensive debt first. The snowball can cost a bit more but many people find it easier to stick with." },
  { q: "Is the debt snowball or avalanche better?", a: "Avalanche is mathematically optimal. Snowball is psychologically easier for many people. If the interest difference is small, choose the method you'll actually follow through on — consistency beats optimization." },
  { q: "How much faster is paying extra on debt?", a: "Dramatically. Adding even $100–$300 per month above minimums can cut years off high-interest debt and save thousands in interest, because more of each payment goes to principal instead of interest." },
  { q: "Should I use a balance transfer with these methods?", a: "A 0% balance transfer can pause interest on high-rate credit card debt, letting your extra payments attack principal directly. Combine it with the snowball or avalanche for even faster payoff, but watch transfer fees and the promo end date." },
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
    headline: "Debt Snowball vs Avalanche Calculator — Which Payoff Method Wins?",
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
        formula={dsFormula}
        rateTable={dsRateTable}
        howToSteps={dsHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

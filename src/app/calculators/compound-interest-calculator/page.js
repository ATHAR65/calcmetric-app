import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "compound-interest-calculator";
const CALC_NAME = "Compound Interest Calculator";
const CALC_DESCRIPTION = "Calculate how your savings and investments grow over time with compound interest and regular monthly contributions, at any rate and compounding frequency.";

const seoContent = [
  "<strong>Compound interest is interest earned on both your principal and the interest it has already earned.</strong> Reinvesting every dollar of growth makes your balance snowball — at a 7% return money roughly doubles every 10 years.",
  "This calculator combines the compound-interest formula <strong>A = P(1 + r/n)^(nt)</strong> with the future value of your regular monthly deposits, so you see both what you contributed and what compounding added.",
  "Time is the biggest lever. $10,000 plus $300/month at 7% for 30 years grows to about $430,000 — over $312,000 of it pure compounding. Starting 10 years later cuts the result to roughly $190,000.",
];

const ciFormula = `A = P(1 + r/n)^(nt)   (lump sum)
FV_deposits = PMT × [((1 + i)^m − 1) / i]   (monthly deposits, i = r/12, m = 12t)
Future Value = A + FV_deposits

Example: $10,000 + $300/mo at 7% for 30 years
  Contributed = $118,000 → Future Value ≈ $430,000
  Interest earned ≈ $312,000`;

const ciRateTable = {
  title: "How $300/Month at 7% Grows Over Time",
  headers: ["Years", "Total Contributed", "Future Value", "Interest Earned"],
  rows: [
    ["10 years", "$36,000", "~$52,000", "~$16,000"],
    ["20 years", "$72,000", "~$156,000", "~$84,000"],
    ["30 years", "$108,000", "~$366,000", "~$258,000"],
    ["40 years", "$144,000", "~$787,000", "~$643,000"],
  ],
};

const ciHowToSteps = [
  "Enter your starting amount (initial deposit or current balance).",
  "Enter a regular monthly contribution.",
  "Enter your expected annual interest rate (7% is a common stock-market planning figure).",
  "Set the number of years and how often interest compounds.",
  "Review your future value, total contributed, and interest earned instantly.",
];

const staticFaqs = [
  { q: "What is compound interest?", a: "Compound interest is interest calculated on both your original principal and the interest already accumulated. Because growth is reinvested, the balance grows faster over time than with simple interest, which only pays on the principal." },
  { q: "How is compound interest calculated?", a: "The formula is A = P(1 + r/n)^(nt), where P is principal, r is the annual rate, n is compounding periods per year, and t is years. With regular deposits, a future-value-of-an-annuity term is added on top." },
  { q: "How often should interest compound?", a: "More frequent compounding grows money slightly faster, but the difference between monthly and daily is small. Compounding frequency matters far less than your rate of return and how long you stay invested." },
  { q: "What is a realistic interest rate to use?", a: "For long-term stock investing, 7% (after inflation) or about 10% (before inflation) is a common planning figure based on historical S&P 500 averages. High-yield savings accounts run lower, typically 4–5%." },
  { q: "Why does starting early matter so much?", a: "Because compounding accelerates over time, the earliest dollars earn the most total growth. Investing for 10 early years and stopping can beat investing for 30 later years, since the early money compounds far longer." },
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
    headline: "Compound Interest Calculator — Grow Your Savings Over Time",
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
        formula={ciFormula}
        rateTable={ciRateTable}
        howToSteps={ciHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

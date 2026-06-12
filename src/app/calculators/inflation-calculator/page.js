import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "inflation-calculator";
const CALC_NAME = "Inflation Calculator 2026 — Purchasing Power";
const CALC_DESCRIPTION = "Calculate how inflation reduces your money's purchasing power over time. Free 2026 inflation calculator with historical CPI data and projections.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Inflation silently erodes your purchasing power every year. At the historical average of <strong>3.3% annual inflation</strong>, $100 today will buy only $72 worth of goods in 10 years and just <strong>$37 in 30 years</strong>. This means a retiree who needs $50,000/year today will need approximately $100,000/year in 25 years to maintain the same standard of living.",
  "The <strong>Consumer Price Index (CPI)</strong>, published monthly by the Bureau of Labor Statistics, is the primary measure of US inflation. CPI tracks prices of ~80,000 items across 8 categories: food (13.4% weight), housing (44.4%), transportation (16.0%), medical care (6.5%), education (5.8%), apparel (2.6%), recreation (5.3%), and other (6.0%). Housing and food together account for nearly <strong>60% of the index</strong>.",
  "Recent US inflation: 2020: 1.2%, 2021: 4.7%, 2022: <strong>8.0%</strong> (40-year high), 2023: 4.1%, 2024: 2.9%, 2025: ~2.5%. The Federal Reserve targets <strong>2% annual inflation</strong> as the ideal rate — high enough to encourage spending and investment, low enough to maintain price stability. During the 2022 spike, everyday items like eggs rose 60% and gas rose 50%.",
  "To protect against inflation: invest in assets that historically outpace inflation — <strong>stocks average 10% nominal return</strong> (7% after inflation), <strong>real estate appreciates 3–5%</strong> plus rental income, and <strong>TIPS (Treasury Inflation-Protected Securities)</strong> adjust principal with CPI. Cash and standard savings accounts lose value in real terms unless the interest rate exceeds inflation.",
];

const inflationFormula = `Future Price = Current Price × (1 + Inflation Rate)^Years
Purchasing Power = Current Amount / (1 + Inflation Rate)^Years
Real Return = Nominal Return − Inflation Rate

Example: $100,000 salary, 3% average inflation
  In 10 years: need $134,392 to match today's $100,000
  In 20 years: need $180,611
  In 30 years: need $242,726

$500,000 retirement savings at 3% inflation:
  Real value in 10 years: $372,047
  Real value in 20 years: $276,838
  Real value in 30 years: $205,988`;

const inflationRateTable = {
  title: "US Inflation by Decade (CPI Annual Average)",
  headers: ["Decade", "Average Annual Inflation", "$100 at Start Worth at End", "Key Events"],
  rows: [
    ["1970s", "7.1%", "$197", "Oil crises, stagflation"],
    ["1980s", "5.5%", "$170", "Volcker rate hikes, disinflation"],
    ["1990s", "3.0%", "$134", "Goldilocks economy"],
    ["2000s", "2.6%", "$129", "Dot-com bust, housing bubble"],
    ["2010s", "1.8%", "$119", "Post-recession, low inflation era"],
    ["2020s (so far)", "4.5%", "$131 (thru 2025)", "COVID, supply chain, Fed hikes"],
  ],
};

const inflationHowToSteps = [
  "Enter the dollar amount and starting year (or use current year as default).",
  "Enter the target year or number of years to project forward or backward.",
  "Optionally adjust the inflation rate (defaults to historical 3.3% average or recent CPI data).",
  "See the adjusted value, total purchasing power lost, and equivalent salary needed to maintain your standard of living.",
];

const staticFaqs = [
  { q: "What is the current inflation rate in 2026?", a: "As of early 2026, US CPI inflation is running approximately 2.3–2.8% year-over-year, down significantly from the 8.0% peak in June 2022. The Federal Reserve's target is 2%. Check the Bureau of Labor Statistics (bls.gov/cpi) for the latest monthly CPI report, released around the 10th of each month with the prior month's data." },
  { q: "How does inflation affect my savings?", a: "Inflation reduces purchasing power — money in a 0.01% savings account loses about 3% of its real value annually. On $50,000 in a standard savings account at 3% inflation, you lose approximately $1,500 in purchasing power per year. A high-yield savings account earning 5% APY outpaces 3% inflation by 2%, preserving and slightly growing your real value." },
  { q: "What was the historical average inflation rate?", a: "The US historical average is approximately 3.3% per year over the last 100 years (1926–2026). However, this includes extreme periods: the 1970s averaged 7.1% and the 2010s averaged just 1.8%. For financial planning, most advisors use 2.5–3.0% as a forward-looking inflation assumption, reflecting the Fed's 2% target plus a small buffer." },
  { q: "How do I protect against inflation?", a: "Invest in assets that historically outpace inflation: S&P 500 index funds (10% nominal, ~7% real return), real estate (3–5% appreciation plus rental income), TIPS bonds (principal adjusts with CPI), and I Bonds (currently 3.11% composite rate, inflation-adjusted). Avoid holding large cash balances — keep only 3–6 months expenses in cash and invest the rest." },
  { q: "What are TIPS and I Bonds?", a: "TIPS (Treasury Inflation-Protected Securities) are government bonds whose principal value adjusts with CPI — if inflation is 3%, your $10,000 TIPS becomes $10,300 in principal. I Bonds are savings bonds with a composite rate (fixed + inflation adjustment), currently yielding 3.11%. Both protect against inflation with zero credit risk. I Bond limit: $10,000/year per person." },
  { q: "Does inflation affect retirement planning?", a: "Enormously. At 3% inflation, a $60,000/year retirement lifestyle will cost $108,000/year in 20 years and $146,000/year in 30 years. The 4% rule (withdrawing 4% of savings annually) already accounts for inflation adjustments. To retire on $60,000/year today, you need approximately $1.5 million — but in 20 years, you will need $2.7 million for the same purchasing power." },
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
        formula={inflationFormula}
        rateTable={inflationRateTable}
        howToSteps={inflationHowToSteps}
      />
    </>
  );
}

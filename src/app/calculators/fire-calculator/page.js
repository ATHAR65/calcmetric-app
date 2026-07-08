import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "fire-calculator";
const CALC_NAME = "FIRE Calculator";
const CALC_DESCRIPTION = "Calculate your FIRE number, years to financial independence, FIRE age, and Coast FIRE target based on your savings rate, annual expenses, expected returns, and withdrawal rate.";

const seoContent = [
  "<strong>Your FIRE number is usually 25 times your annual expenses — the amount needed to live off 4% withdrawals indefinitely.</strong> Spend $50,000/year and your FIRE number is $1.25 million.",
  "<strong>Coast FIRE</strong> is the amount you need invested today so it grows to your full FIRE number by age 65 with no further contributions. Hitting it means you can stop retirement saving and just cover current expenses.",
  "Savings rate is the dominant lever: saving 50% of income reaches FIRE in roughly 17 years at any income level, versus 40+ years at 10%. Cutting expenses both raises your rate and lowers your FIRE number.",
];

const fireFormula = `FIRE Number = Annual Expenses ÷ Safe Withdrawal Rate
  (4% rule → Expenses × 25)
Years to FIRE = time for (savings × (1+r) + annual contribution) to reach FIRE number
Coast FIRE Number = FIRE Number ÷ (1 + r)^(65 − current age)

Example: $50,000 expenses at 4% → FIRE number $1,250,000
  Age 30, need ~$186,000 today to Coast FIRE at 7% real return`;

const fireRateTable = {
  title: "Savings Rate vs Years to FIRE (from $0)",
  headers: ["Savings Rate", "Approx. Years to FIRE", "Note"],
  rows: [
    ["10%", "~51 years", "Traditional path"],
    ["25%", "~32 years", "Solid saver"],
    ["50%", "~17 years", "Classic FIRE target"],
    ["65%", "~10.5 years", "Aggressive / lean FIRE"],
  ],
};

const fireHowToSteps = [
  "Enter your current age and current invested savings.",
  "Enter your expected annual expenses in retirement (sets your FIRE number).",
  "Enter how much you invest each year.",
  "Set your expected real return and safe withdrawal rate (4% is standard).",
  "Review your FIRE number, years to FI, FIRE age, and Coast FIRE target.",
];

const staticFaqs = [
  { q: "What is a FIRE number?", a: "Your FIRE number is the portfolio size needed to live off investment withdrawals — typically 25 times your annual expenses, based on the 4% safe withdrawal rule. Spending $50,000/year means a FIRE number of $1.25 million." },
  { q: "What is the 4% rule?", a: "The 4% rule, from the Trinity Study, says you can withdraw 4% of your portfolio in the first year of retirement and adjust for inflation thereafter, with a high chance of the money lasting 30+ years. It implies a target of 25× annual expenses." },
  { q: "What is Coast FIRE?", a: "Coast FIRE is the amount you need invested today so that, with no further contributions, it grows to your full FIRE number by traditional retirement age. Once reached, you only need to cover current expenses and can stop saving for retirement." },
  { q: "How long does it take to reach FIRE?", a: "It depends almost entirely on your savings rate. Saving 50% of income reaches FIRE in about 17 years regardless of income; 25% takes about 32 years; 10% takes over 40 years." },
  { q: "What withdrawal rate should early retirees use?", a: "The classic 4% rule assumes a 30-year retirement. Early retirees planning for 40–50 years often use a more conservative 3.25–3.5% to reduce the risk of running out." },
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
    headline: "FIRE Calculator — Financial Independence, Retire Early & Coast FIRE",
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
        formula={fireFormula}
        rateTable={fireRateTable}
        howToSteps={fireHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

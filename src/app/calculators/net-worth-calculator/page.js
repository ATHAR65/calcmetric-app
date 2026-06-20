import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "net-worth-calculator";
const CALC_NAME = "Net Worth Calculator 2026";
const CALC_DESCRIPTION = "Calculate your net worth by adding up all assets and subtracting liabilities. Free net worth tracker with benchmarks by age and income.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Net worth is the single most important number in personal finance: <strong>Total Assets − Total Liabilities = Net Worth</strong>. It provides a complete snapshot of your financial health, unlike income alone. A person earning $200,000 with $300,000 in debt has a lower net worth than someone earning $60,000 with $100,000 in savings and no debt.",
  "The Fidelity guideline suggests saving <strong>1× your salary by age 30, 3× by 40, 6× by 50, and 10× by 67</strong>. The median net worth by age in the US (2024 Federal Reserve SCF data): under 35: <strong>$39,000</strong>; 35–44: <strong>$135,600</strong>; 45–54: <strong>$247,200</strong>; 55–64: <strong>$364,500</strong>; 65–74: <strong>$409,900</strong>.",
  "Assets to include: <strong>cash and savings</strong> (checking, savings, CDs), <strong>investments</strong> (401k, IRA, brokerage, HSA), <strong>real estate</strong> (home value minus mortgage = equity), <strong>vehicles</strong> (current market value), and other valuables (business equity, collectibles). Use current market values, not purchase prices.",
  "Liabilities to subtract: <strong>mortgage balance</strong>, student loans, car loans, credit card debt, personal loans, medical debt, and any other amounts owed. Tracking net worth quarterly or annually reveals your financial trajectory — a rising net worth means you are building wealth; a declining one signals a problem even if income is high.",
];

const nwFormula = `Net Worth = Total Assets − Total Liabilities

Assets include:
  Cash & savings + Investment accounts + Real estate equity
  + Vehicle values + Business equity + Other valuables

Liabilities include:
  Mortgage balance + Student loans + Car loans
  + Credit card debt + Personal loans + Medical debt

Example: $80,000 salary, age 35
  Assets: $45K savings + $85K 401(k) + $120K home equity = $250,000
  Liabilities: $180K mortgage + $25K student loans + $8K car = $213,000
  Net Worth = $250,000 − $213,000 = $37,000`;

const nwRateTable = {
  title: "Median Net Worth by Age (US, 2024 Federal Reserve SCF)",
  headers: ["Age Group", "Median Net Worth", "Fidelity Savings Target", "Top 25%"],
  rows: [
    ["Under 35", "$39,000", "1× salary", "$150,000+"],
    ["35–44", "$135,600", "3× salary", "$400,000+"],
    ["45–54", "$247,200", "6× salary", "$750,000+"],
    ["55–64", "$364,500", "8× salary", "$1,100,000+"],
    ["65–74", "$409,900", "10× salary", "$1,500,000+"],
  ],
};

const nwHowToSteps = [
  "Enter all assets: bank accounts, retirement accounts (401k, IRA, HSA), home value, vehicle values, and other investments.",
  "Enter all liabilities: mortgage balance, student loans, car loans, credit card balances, and any other debts.",
  "The calculator computes your net worth and shows your asset allocation breakdown (cash, investments, real estate, other).",
  "Compare your net worth to benchmarks for your age group and see which areas (paying down debt vs growing assets) will have the biggest impact.",
];

const staticFaqs = [
  { q: "What is a good net worth by age?", a: "The Fidelity guideline: 1× salary by 30, 3× by 40, 6× by 50, 10× by 67. Median US net worth: under 35 is $39,000, 35–44 is $135,600, 45–54 is $247,200. These are medians — the average is much higher due to extreme wealth concentration. Focus on consistent growth rather than hitting exact benchmarks." },
  { q: "How often should I calculate my net worth?", a: "Quarterly or annually is ideal. More frequent calculations are noise (market fluctuations). Annual tracking shows your real financial trajectory. Use a spreadsheet or app to track over time. The goal is a consistently rising trend line — dips during market downturns are normal." },
  { q: "Is my home included in net worth?", a: "Yes — include your home's current market value (check Zillow or recent comparable sales) minus your remaining mortgage balance. This gives you home equity. For a $400,000 home with a $280,000 mortgage, your home equity is $120,000. However, since you need somewhere to live, some planners track 'investable net worth' separately (excluding primary residence)." },
  { q: "What is a negative net worth?", a: "A negative net worth means your total liabilities exceed your total assets. This is very common for recent college graduates (student loans), new homeowners (large mortgage relative to savings), and medical debt situations. A negative net worth is not permanent — it typically reverses as you pay down debt and build savings over time." },
  { q: "What is the fastest way to increase net worth?", a: "Two approaches work simultaneously: reduce liabilities (pay off high-interest debt first — credit cards at 20%+ cost more than investments return) and grow assets (maximize retirement contributions, build emergency savings, invest consistently). Paying off a $10,000 credit card at 22% APR is equivalent to earning a 22% risk-free return." },
  { q: "Should I include retirement accounts in net worth?", a: "Yes, but note that pre-tax retirement accounts (Traditional 401k, Traditional IRA) have a future tax liability. A $500,000 Traditional 401(k) is worth approximately $375,000–$400,000 after taxes. Roth accounts are worth their full balance since withdrawals are tax-free. Some planners calculate both gross and after-tax net worth." },
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
        formula={nwFormula}
        rateTable={nwRateTable}
        howToSteps={nwHowToSteps}
      />
    </>
  );
}

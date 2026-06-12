import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "dti-ratio-calculator";
const CALC_NAME = "Debt-to-Income Ratio Calculator 2026 — DTI";
const CALC_DESCRIPTION = "Calculate your debt-to-income ratio for mortgage and loan applications. Free DTI calculator with front-end, back-end ratios, and lender guidelines.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Your <strong>debt-to-income ratio (DTI)</strong> is the percentage of your gross monthly income that goes toward debt payments. It is the single most important number lenders use to determine how much you can borrow. A DTI below <strong>36% is considered good</strong>; below 28% is excellent. Most mortgage lenders require a DTI of <strong>43% or less</strong> for conventional loans.",
  "There are two types of DTI: <strong>front-end DTI</strong> measures only housing costs (mortgage/rent, property tax, insurance, HOA) divided by gross income — lenders want this below <strong>28%</strong>. <strong>Back-end DTI</strong> includes ALL monthly debt obligations (housing + car loans + student loans + credit card minimums + personal loans) — lenders want this below <strong>36–43%</strong>.",
  "On a <strong>$6,000 gross monthly income</strong> with a target 36% back-end DTI, your maximum total debt payments are $2,160/month. If you already have $400 in car payments and $300 in student loans, only <strong>$1,460 remains for housing</strong> — which at 7% interest supports roughly a $220,000 mortgage. Every $100 in existing debt reduces your home buying power by approximately $15,000.",
  "To <strong>lower your DTI before applying</strong>: pay off credit cards (eliminating a $200 minimum payment drops DTI by 3.3% on $6,000 income), pay down car loans, consolidate student loans to reduce minimums, and avoid opening new credit lines within 6 months of applying. Increasing income also helps — a $500/month raise lowers DTI by about 2 percentage points at typical debt levels.",
];

const dtiFormula = `Front-End DTI = Monthly Housing Costs ÷ Gross Monthly Income × 100
Back-End DTI = Total Monthly Debt Payments ÷ Gross Monthly Income × 100

Debt payments include:
  Mortgage/rent + Car loans + Student loans
  + Credit card minimums + Personal loans + Child support

Example: $7,500 gross monthly income
  Housing: $1,800 (mortgage + tax + insurance)
  Car loan: $450 | Student loans: $350 | Credit cards: $150
  Front-end DTI = $1,800 ÷ $7,500 = 24%
  Back-end DTI = $2,750 ÷ $7,500 = 36.7%`;

const dtiRateTable = {
  title: "DTI Guidelines by Loan Type",
  headers: ["Loan Type", "Max Front-End DTI", "Max Back-End DTI", "Notes"],
  rows: [
    ["Conventional", "28%", "36–43%", "Best rates below 36%"],
    ["FHA", "31%", "43% (up to 50%)", "More flexible for first-time buyers"],
    ["VA", "No formal limit", "41% (flexible)", "Military/veteran benefit"],
    ["USDA", "29%", "41%", "Rural area loans"],
    ["Jumbo", "28%", "36–38%", "Stricter for large loans"],
  ],
};

const dtiHowToSteps = [
  "Enter your gross monthly income (before taxes) from all sources: salary, side income, rental income, etc.",
  "Enter your monthly housing costs: mortgage or rent payment, property taxes, homeowner's insurance, and HOA fees.",
  "Enter all other monthly debt payments: car loans, student loans, credit card minimums, personal loans, and child support.",
  "Review your front-end DTI, back-end DTI, which loan programs you qualify for, and how much additional borrowing capacity you have.",
];

const staticFaqs = [
  { q: "What is a good DTI ratio?", a: "Below 36% back-end DTI is considered good by most lenders and qualifies you for the best interest rates. Below 28% is excellent. Between 36–43% is acceptable for most conventional mortgages but may result in slightly higher rates. Above 43% makes it difficult to qualify for a conventional mortgage — FHA loans may allow up to 50% with strong compensating factors (high credit score, large down payment)." },
  { q: "What is front-end vs back-end DTI?", a: "Front-end DTI includes only housing costs (mortgage/rent payment, property tax, homeowner's insurance, HOA fees) divided by gross income. Lenders typically want this below 28%. Back-end DTI includes ALL monthly debt obligations — housing costs plus car payments, student loans, credit card minimums, personal loans, and child support. Lenders want this below 36–43% depending on the loan type." },
  { q: "How can I lower my DTI ratio?", a: "Three approaches: (1) Reduce debt — pay off credit cards or car loans to eliminate monthly payments. Paying off a $5,000 credit card with a $150 minimum drops DTI by 2.5% on $6,000 income. (2) Increase income — a raise, second job, or side income. A $1,000/month income increase can drop DTI by 5+ points. (3) Avoid new debt — do not finance a car or open credit cards within 6 months of a mortgage application." },
  { q: "Do all lenders use the same DTI limits?", a: "No. Conventional loans typically cap at 43% (some allow 45% with strong compensating factors). FHA allows up to 50%. VA loans have a guideline of 41% but no hard limit — they consider residual income instead. USDA caps at 41%. Jumbo loans are strictest at 36–38%. Individual lenders may have overlays (additional restrictions) beyond these program guidelines." },
  { q: "What debts are included in DTI calculation?", a: "Monthly minimum payments for: mortgage/rent, car loans, student loans, credit card minimum payments, personal loans, child support, alimony, and any other installment debt appearing on your credit report. NOT included: utilities, insurance (unless part of mortgage), groceries, phone bills, subscriptions, medical bills not in collections, or taxes (unless owed as an installment plan)." },
  { q: "How does DTI affect my mortgage approval?", a: "DTI is one of the three pillars of mortgage approval (along with credit score and down payment). A DTI of 25% gets you the best rates and highest approval odds. At 36%, you are still in good shape. At 43%, you are at the conventional limit — expect slightly higher rates. Above 43%, you will need an FHA loan or compensating factors. Every 5% increase in DTI roughly reduces your borrowing power by $30,000–$50,000." },
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
        formula={dtiFormula}
        rateTable={dtiRateTable}
        howToSteps={dtiHowToSteps}
      />
    </>
  );
}

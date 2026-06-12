import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "roth-vs-traditional-ira-calculator-2026";
const CALC_NAME = "Roth vs Traditional IRA Calculator 2026";
const CALC_DESCRIPTION = "Compare Roth IRA vs Traditional IRA side-by-side. See after-tax values, tax savings now vs later, and which IRA saves you more over time. Free calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The core difference: <strong>Traditional IRA</strong> contributions are tax-deductible now (reducing current taxable income), but withdrawals in retirement are taxed as ordinary income. <strong>Roth IRA</strong> contributions are made with after-tax dollars (no upfront deduction), but all withdrawals in retirement — including decades of growth — are <strong>completely tax-free</strong>.",
  "If your current tax rate is <strong>lower than your expected retirement tax rate</strong>, choose Roth — you pay taxes now at the lower rate and withdraw tax-free later. If your current rate is <strong>higher</strong>, choose Traditional — take the deduction now and pay taxes in retirement when your rate is lower. Most workers under 35 earning under $100,000 benefit more from Roth.",
  "The 2026 IRA contribution limit is <strong>$7,000</strong> ($8,000 if age 50+). This limit is shared between Roth and Traditional IRAs — you can split it but cannot exceed the total. Roth IRA income limits for 2026: full contribution if MAGI is under $150,000 (single) or $236,000 (married filing jointly). Above those thresholds, use the <strong>backdoor Roth</strong> strategy.",
  "Roth IRAs have a unique advantage: <strong>no Required Minimum Distributions (RMDs)</strong> during the owner's lifetime. Traditional IRAs require RMDs starting at age 73 (SECURE 2.0). Roth contributions (not earnings) can be withdrawn anytime without penalty, making them a flexible emergency backstop. These features make Roth IRAs superior for estate planning and financial flexibility.",
];

const iraFormula = `Traditional IRA: $7,000 × Tax Rate = Upfront Tax Savings
  Withdrawal taxed at retirement rate
Roth IRA: No upfront savings
  Withdrawal 100% tax-free

Example: $7,000/year for 30 years at 7% return
  Both grow to ~$661,000
  Traditional: $661,000 × 22% retirement tax = $145,420 tax
  After-tax value = $515,580
  Roth: $661,000 × 0% tax = $661,000 after-tax
  Roth advantage = $145,420 (if same tax bracket)`;

const iraRateTable = {
  title: "Roth vs Traditional IRA Comparison",
  headers: ["Feature", "Traditional IRA", "Roth IRA"],
  rows: [
    ["Tax on contributions", "Deductible (pre-tax)", "Not deductible (after-tax)"],
    ["Tax on withdrawals", "Taxed as ordinary income", "Tax-free"],
    ["2026 contribution limit", "$7,000 ($8,000 age 50+)", "$7,000 ($8,000 age 50+)"],
    ["Income limits", "No limit (deductibility phases out)", "$150K single / $236K married"],
    ["RMDs required", "Yes, starting age 73", "No RMDs during owner's lifetime"],
    ["Early withdrawal", "10% penalty + taxes", "Contributions anytime; earnings after 59½"],
  ],
};

const iraHowToSteps = [
  "Enter your current annual income, filing status, and marginal tax bracket.",
  "Enter your expected retirement tax bracket (often lower than current if income decreases in retirement).",
  "Enter your planned annual contribution and years until retirement.",
  "Compare the after-tax value of each IRA type at retirement, the total tax paid over your lifetime, and the net advantage of each option.",
];

const staticFaqs = [
  { q: "What is the difference between Roth and Traditional IRA?", a: "Traditional IRA: contributions are tax-deductible, reducing current taxable income; withdrawals in retirement are taxed as ordinary income. Roth IRA: contributions are after-tax (no deduction); all withdrawals in retirement are completely tax-free, including investment growth. The choice depends on whether you expect higher or lower taxes in retirement." },
  { q: "What are the IRA contribution limits in 2026?", a: "The combined limit for Traditional and Roth IRAs is $7,000 per year ($8,000 if age 50 or older). You can split between both types but the total cannot exceed $7,000/$8,000. If your MAGI exceeds $150,000 (single) or $236,000 (married), direct Roth contributions phase out — use the backdoor Roth strategy instead." },
  { q: "Who should choose a Roth IRA?", a: "Roth IRAs are generally better for: workers under 35 (decades of tax-free growth), anyone in a lower tax bracket now than expected in retirement, people who want no RMDs in retirement, high earners who can do backdoor Roth contributions, and anyone who values withdrawal flexibility (contributions can be accessed anytime)." },
  { q: "Can I have both a Roth and Traditional IRA?", a: "Yes. You can contribute to both in the same year, but the combined total cannot exceed $7,000 ($8,000 if 50+). For example, $4,000 to a Traditional and $3,000 to a Roth. Many people also have a Traditional IRA from 401(k) rollovers alongside an active Roth IRA. The key limit is the total annual contribution." },
  { q: "What is a backdoor Roth IRA?", a: "The backdoor Roth is a strategy for high earners who exceed Roth income limits. You contribute to a Traditional IRA (non-deductible) and then immediately convert it to a Roth IRA. The conversion is tax-free since the contribution was already after-tax. Caution: the pro-rata rule applies if you have existing pre-tax IRA balances." },
  { q: "When can I withdraw from a Roth IRA without penalty?", a: "Roth IRA contributions (not earnings) can be withdrawn anytime, at any age, without taxes or penalties. Earnings can be withdrawn tax-free after age 59½ if the account has been open 5+ years. Before 59½, earnings face a 10% penalty plus income tax (with exceptions for first home purchase up to $10,000, disability, and education expenses)." },
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
        formula={iraFormula}
        rateTable={iraRateTable}
        howToSteps={iraHowToSteps}
      />
    </>
  );
}

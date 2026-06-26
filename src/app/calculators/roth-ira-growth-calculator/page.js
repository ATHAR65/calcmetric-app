import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "roth-ira-growth-calculator";
const CALC_NAME = "Roth IRA Growth Calculator 2026";
const CALC_DESCRIPTION = "Project your Roth IRA growth with compound interest and tax-free withdrawals. Free 2026 Roth IRA calculator with contribution limits and income thresholds.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "A Roth IRA is a retirement account where you contribute after-tax dollars and all future growth and withdrawals are <strong>completely tax-free</strong>. Unlike a Traditional IRA, you get no upfront tax deduction, but your money grows tax-free for decades and you pay zero tax when you withdraw in retirement. For young investors and those expecting to be in a higher tax bracket later, the Roth IRA is one of the most powerful wealth-building tools available.",
  "The 2026 Roth IRA contribution limit is <strong>$7,500 per year</strong> ($8,600 if you are age 50 or older). However, your ability to contribute directly depends on your Modified Adjusted Gross Income (MAGI). Single filers can contribute the full amount if MAGI is under $153,000, with a phase-out up to $168,000. Married filing jointly, the range is $242,000 to $252,000. Above these limits, you cannot contribute directly but can use the backdoor Roth strategy.",
  "The power of the Roth IRA is <strong>tax-free compound growth</strong>. Contributing $7,500 per year starting at age 25 with an average 8% annual return produces roughly <strong>$2.0 million by age 65</strong> — all tax-free. The same investment in a taxable account at a 15% capital gains rate would yield about $1.6 million after taxes. That is a $400,000 difference purely from tax-free compounding.",
  "Roth IRAs also offer flexibility that other retirement accounts lack. You can withdraw your <strong>contributions (not earnings) at any time</strong> without taxes or penalties. There are <strong>no Required Minimum Distributions (RMDs)</strong> during your lifetime, so you can let the money grow indefinitely. And Roth IRAs can be inherited tax-free by your beneficiaries, making them excellent estate planning tools.",
];

const rothRateTable = {
  title: "2026 Roth IRA Income Limits",
  headers: ["Filing Status", "Full Contribution", "Phase-Out Range", "No Contribution"],
  rows: [
    ["Single / Head of Household", "MAGI < $153,000", "$153,000 – $168,000", "MAGI > $168,000"],
    ["Married Filing Jointly", "MAGI < $242,000", "$242,000 – $252,000", "MAGI > $252,000"],
    ["Married Filing Separately", "—", "$0 – $10,000", "MAGI > $10,000"],
  ],
};

const rothFormula = `Future Value = P × [(1 + r)^n − 1] / r × (1 + r)
Where:
  P = Annual contribution ($7,500 or $8,600 if 50+)
  r = Expected annual return (e.g., 0.08 for 8%)
  n = Number of years until retirement

Tax Savings vs Taxable Account:
  Roth: Withdraw 100% tax-free
  Taxable: Owe 15%–20% capital gains on growth`;

const rothHowToSteps = [
  "Enter your current age and target retirement age to set the growth timeline.",
  "Enter your current Roth IRA balance (or $0 if starting fresh) and annual contribution amount.",
  "Select your expected annual return rate — historically, the S&P 500 has averaged about 10% nominal (7%–8% inflation-adjusted).",
  "Review the projection: total contributions, total growth, and estimated tax savings versus a taxable brokerage account. The year-by-year table shows how compounding accelerates over time.",
];

const staticFaqs = [
  { q: "What is the Roth IRA contribution limit in 2026?", a: "The 2026 Roth IRA contribution limit is $7,500 per year, or $8,600 if you are age 50 or older (the extra $1,100 is the catch-up contribution). These limits apply across all your IRAs combined — if you have both a Traditional and Roth IRA, the total across both cannot exceed $7,500/$8,600." },
  { q: "Are Roth IRA withdrawals really tax-free?", a: "Yes, if you meet two conditions: your Roth IRA has been open for at least 5 years, and you are age 59½ or older. Qualified withdrawals of both contributions and earnings are completely federal-tax-free. You can always withdraw your contributions (not earnings) at any age without taxes or penalties since you already paid tax on that money." },
  { q: "Can I contribute to a Roth IRA if I have a 401(k)?", a: "Yes. Having a 401(k) does not prevent you from contributing to a Roth IRA. The two accounts have separate contribution limits ($24,500 for 401k, $7,500 for Roth IRA in 2026). However, your Roth IRA contribution may be limited or eliminated if your MAGI exceeds the income thresholds ($153,000–$168,000 single, $242,000–$252,000 married filing jointly)." },
  { q: "What is the backdoor Roth IRA strategy?", a: "The backdoor Roth is a legal strategy for high earners who exceed Roth IRA income limits. You contribute to a Traditional IRA (non-deductible) and then immediately convert it to a Roth IRA. There is no income limit on conversions. The main complication is the pro-rata rule: if you have existing pre-tax IRA balances, part of the conversion will be taxable. Rolling pre-tax IRA money into a 401(k) before converting avoids this." },
  { q: "Roth IRA vs Traditional IRA — which is better?", a: "Choose Roth if you expect your tax rate to be higher in retirement (younger workers, lower current income, tax rates likely to rise). Choose Traditional if you need the upfront tax deduction now (higher current tax bracket, expect lower income in retirement). A common strategy is to contribute to both: max out a Roth IRA for tax-free growth and use a Traditional 401(k) for the upfront deduction." },
  { q: "What happens to a Roth IRA when you die?", a: "Roth IRAs pass to beneficiaries tax-free. A surviving spouse can treat the inherited Roth as their own with no RMDs. Non-spouse beneficiaries must withdraw the full balance within 10 years under the SECURE Act, but all withdrawals are still tax-free. This makes Roth IRAs excellent estate planning vehicles — your heirs receive decades of growth with zero tax." },
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
        formula={rothFormula}
        rateTable={rothRateTable}
        howToSteps={rothHowToSteps}
      />
    </>
  );
}

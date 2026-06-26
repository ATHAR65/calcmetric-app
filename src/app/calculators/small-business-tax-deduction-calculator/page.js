import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "small-business-tax-deduction-calculator";
const CALC_NAME = "Small Business Tax Deduction Calculator";
const CALC_DESCRIPTION = "Calculate your small business tax deductions, self-employment tax, QBI deduction, and estimated quarterly payments for 2026. Free tool for self-employed individuals and sole proprietors.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Small business owners and sole proprietors can significantly reduce their tax bill through <strong>legitimate business deductions</strong>. Every dollar you deduct reduces your taxable income, which saves you money on both income tax and the 15.3% self-employment tax. A $1,000 deduction for someone in the 22% bracket saves roughly $373 ($220 income tax + $153 SE tax).",
  "The <strong>Qualified Business Income (QBI) deduction</strong> allows eligible sole proprietors, partnerships, and S-Corp shareholders to deduct up to <strong>20% of qualified business income</strong>. For 2026, the deduction phases out for specified service trades (law, accounting, consulting, health) when taxable income exceeds $191,950 (single) or $383,900 (married filing jointly). Non-service businesses can claim the full 20% at any income level.",
  "The <strong>Section 179 deduction</strong> lets you immediately expense qualifying business equipment and software rather than depreciating it over years. The 2026 limit is approximately <strong>$1,250,000</strong> with a phase-out starting at $3,130,000 in total equipment purchases. Qualifying items include computers, office furniture, vehicles (with limits), machinery, and off-the-shelf software. Bonus depreciation at 60% (for 2026) covers additional equipment costs.",
  "The <strong>home office deduction</strong> is available to anyone who uses a dedicated space in their home regularly and exclusively for business. The simplified method allows <strong>$5 per square foot, up to 300 sq ft ($1,500 max)</strong>. The regular method calculates actual expenses (mortgage/rent, utilities, insurance, repairs) based on the percentage of your home used for business. The regular method often yields a larger deduction but requires more recordkeeping.",
];

const deductionRateTable = {
  title: "Key 2026 Small Business Deduction Limits",
  headers: ["Deduction", "Limit / Rate", "Key Rules"],
  rows: [
    ["QBI Deduction", "Up to 20% of QBI", "Phase-out for service businesses above $191,950 (S)"],
    ["Section 179", "~$1,250,000", "Must be used in business >50% of time"],
    ["Bonus Depreciation", "60% (2026)", "Down from 80% in 2024"],
    ["Home Office (simplified)", "$5/sq ft, max $1,500", "Exclusive and regular business use"],
    ["Vehicle Mileage", "$0.725/mile", "Or actual expenses — choose one per vehicle"],
    ["De Minimis Safe Harbor", "$2,500/item", "Expense items under threshold immediately"],
    ["SEP-IRA Contribution", "25% of net income, max $72,000", "Deadline: tax filing date + extensions"],
    ["Solo 401(k)", "$24,500 + 25% employer, max $72,000", "Must open by Dec 31"],
    ["Health Insurance", "100% of premiums", "If no employer-sponsored plan available"],
  ],
};

const deductionHowToSteps = [
  "Enter your gross business revenue from all sources (1099-NEC, 1099-K, direct payments, sales).",
  "Enter each deduction category: home office, vehicle/mileage, supplies, equipment, software, insurance, professional services, and retirement contributions.",
  "The calculator applies the QBI deduction automatically based on your income and business type.",
  "Review your total deductions, taxable income, SE tax, income tax, QBI savings, and quarterly estimated payment amounts.",
];

const staticFaqs = [
  { q: "What can I deduct as a small business owner?", a: "Deductible expenses include: home office, vehicle mileage ($0.725/mile) or actual car expenses, office supplies, equipment and furniture (Section 179), software subscriptions, phone and internet (business %), advertising and marketing, professional services (accountant, lawyer), business insurance, employee wages and benefits, travel and meals (50%), continuing education, and retirement contributions (SEP-IRA, Solo 401k)." },
  { q: "What is the Section 179 deduction limit in 2026?", a: "The Section 179 deduction limit for 2026 is approximately $1,250,000. This allows you to fully expense qualifying business equipment, furniture, vehicles (with limits), and off-the-shelf software in the year of purchase instead of depreciating over time. The deduction begins to phase out when total equipment purchases exceed $3,130,000. The property must be used more than 50% for business." },
  { q: "Can I deduct my home office?", a: "Yes, if you use a dedicated space in your home regularly and exclusively for business. The simplified method allows $5 per square foot up to 300 sq ft ($1,500 maximum). The regular method calculates the business percentage of actual home expenses (rent/mortgage interest, utilities, insurance, repairs, depreciation). A 200 sq ft office in a 2,000 sq ft home = 10% of actual expenses." },
  { q: "What is the QBI deduction?", a: "The Qualified Business Income deduction allows eligible business owners to deduct up to 20% of their qualified business income. Sole proprietors, partners, and S-Corp shareholders qualify. For 2026, specified service trades (doctors, lawyers, accountants, consultants) face a phase-out starting at $191,950 (single) or $383,900 (MFJ). Below these thresholds, all business types get the full 20% deduction." },
  { q: "How much can I contribute to a Solo 401(k) or SEP-IRA?", a: "For 2026, the Solo 401(k) allows up to $24,500 as employee deferral plus 25% of net self-employment income as employer contribution, with a combined maximum of $72,000 ($80,000 if 50+). A SEP-IRA allows 25% of net self-employment income up to $72,000. The Solo 401(k) generally allows higher contributions at lower income levels because of the employee deferral component." },
  { q: "Should I track mileage or use actual vehicle expenses?", a: "The standard mileage rate ($0.725/mile in 2026) is simpler and usually better for most small business owners. It covers gas, insurance, maintenance, depreciation, and lease payments. The actual expense method requires tracking every receipt and calculating the business-use percentage. Actual expenses may be better if you drive a very expensive vehicle with high insurance and maintenance costs." },
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
        rateTable={deductionRateTable}
        howToSteps={deductionHowToSteps}
      />
    </>
  );
}

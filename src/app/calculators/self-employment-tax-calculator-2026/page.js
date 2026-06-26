import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";
import { buildHowToSchema } from "@/lib/calculatorSchema";

const CALC_SLUG = "self-employment-tax-calculator-2026";
const CALC_NAME = "Self-Employment Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate your self-employment tax instantly for 2026. Covers SE tax, deductions & quarterly payments. Free tool for freelancers, 1099 contractors, and gig workers.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Self-employment tax is the Social Security and Medicare tax that freelancers, independent contractors, and sole proprietors pay on their net earnings. Unlike W-2 employees who split these taxes 50/50 with their employer, self-employed individuals pay both halves — the employee portion and the employer portion — for a combined rate of <strong>15.3%</strong>.",
  "The 15.3% breaks down into two parts: <strong>12.4% for Social Security</strong> (applied to the first $184,500 of net self-employment income in 2026) and <strong>2.9% for Medicare</strong> (applied to all net self-employment income with no cap). If your income exceeds $200,000 as a single filer or $250,000 filing jointly, you also owe an additional <strong>0.9% Medicare surtax</strong> on earnings above those thresholds.",
  "Before calculating SE tax, the IRS lets you reduce your net self-employment income by <strong>7.65%</strong> (multiply by 92.35%). This adjustment mirrors the fact that employers don't pay FICA on their own matching contribution. After that, you can deduct <strong>50% of the SE tax you paid</strong> as an above-the-line deduction on your Form 1040, which reduces your adjusted gross income but not your SE tax itself.",
  "You must pay self-employment tax if your net earnings from self-employment are <strong>$400 or more</strong> per year. This applies to freelance income, 1099-NEC payments, gig economy earnings, sole proprietor business profits, and partnership income. The $400 threshold is much lower than the $600 threshold for receiving a 1099 form — you owe SE tax even if no 1099 is issued.",
];

const seFormula = `Net SE Income = Gross Income − Business Expenses
Taxable SE Base = Net SE Income × 92.35%
SE Tax = Taxable SE Base × 15.3%
  → Social Security = Taxable SE Base × 12.4% (up to $184,500)
  → Medicare = Taxable SE Base × 2.9% (no cap)
  → Additional Medicare = 0.9% on income over $200K/$250K
Deduction = SE Tax × 50% (reduces income tax, not SE tax)`;

const seRateTable = {
  title: "2026 Self-Employment Tax Rates",
  headers: ["Component", "Rate", "Wage Base / Cap", "Notes"],
  rows: [
    ["Social Security", "12.4%", "$184,500", "Only applies up to the wage base"],
    ["Medicare", "2.9%", "No cap", "Applies to all net SE income"],
    ["Additional Medicare", "0.9%", "Over $200K (S) / $250K (MFJ)", "Only on income above threshold"],
    ["Total SE Tax", "15.3%", "—", "Before the 92.35% adjustment"],
    ["Deductible Portion", "50%", "—", "Above-the-line deduction on 1040"],
  ],
};

const seHowToSteps = [
  "Enter your total self-employment gross income — this includes all 1099-NEC, 1099-K, and cash payments received for services or products.",
  "Enter your business deductions — home office, supplies, mileage ($0.725/mile in 2026), phone, internet, health insurance premiums, and retirement contributions.",
  "Select your filing status (Single, MFJ, MFS, HoH) to calculate your federal income tax brackets alongside SE tax.",
  "Review the breakdown: the calculator shows your SE tax, the 50% deduction, your effective tax rate, and quarterly estimated payment amounts with due dates.",
];

const staticFaqs = [
  { q: "What is the self-employment tax rate in 2026?", a: "The self-employment tax rate is 15.3% of net self-employment earnings, consisting of 12.4% for Social Security (on the first $184,500) and 2.9% for Medicare (on all earnings). Before applying this rate, you multiply your net income by 92.35% to get the taxable base." },
  { q: "Can I deduct self-employment tax on my return?", a: "Yes. You can deduct 50% of your self-employment tax as an above-the-line deduction on Form 1040. This reduces your adjusted gross income and your income tax, but it does not reduce the SE tax itself. For example, if you owe $14,000 in SE tax, you can deduct $7,000 from your gross income." },
  { q: "Do I owe SE tax if I earn under $600?", a: "Yes, if your net self-employment earnings exceed $400. The $600 threshold only determines whether a client must issue you a 1099-NEC form — it has no bearing on your tax obligation. You owe SE tax on any net self-employment income of $400 or more." },
  { q: "How do I make quarterly estimated tax payments?", a: "File Form 1040-ES and pay quarterly if you expect to owe $1,000 or more in combined income and SE tax. The 2026 due dates are April 15, June 16, September 15, and January 15 (2027). You can pay online at IRS.gov/payments, by phone, or by mailing a check with a 1040-ES voucher." },
  { q: "What is the 0.9% Additional Medicare Tax?", a: "Single filers earning over $200,000 and married-filing-jointly filers over $250,000 owe an extra 0.9% Medicare tax on self-employment income above those thresholds. This surtax is in addition to the standard 2.9% Medicare rate and is not shared with an employer." },
  { q: "Does SE tax apply to LLC and S-Corp owners?", a: "Single-member LLCs taxed as sole proprietors pay SE tax on all net business income. S-Corp owners pay SE tax only on their reasonable salary, not on distributions. Converting from sole proprietor to S-Corp can reduce SE tax for high earners, but requires paying yourself a reasonable wage." },
  { q: "What expenses reduce my self-employment tax?", a: "Any legitimate business expense that reduces net profit also reduces SE tax. Common deductions include the home office deduction, vehicle mileage ($0.725/mile in 2026), health insurance premiums, retirement contributions (SEP-IRA up to $72,000, Solo 401k up to $72,000), business supplies, software, and professional development." },
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

  const howToSchema = buildHowToSchema({
    name: "How to Calculate Self-Employment Tax in 2026",
    description: CALC_DESCRIPTION,
    url: `https://www.themetricapp.com/calculators/${CALC_SLUG}`,
    steps: seHowToSteps,
  });

  return (
    <>
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema, howToSchema]} />
      <Calculator />
      <CalculatorStaticSeo
        title={CALC_NAME}
        description={CALC_DESCRIPTION}
        slug={CALC_SLUG}
        faqs={staticFaqs}
        content={seoContent}
        formula={seFormula}
        rateTable={seRateTable}
        howToSteps={seHowToSteps}
      />
    </>
  );
}

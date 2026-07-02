import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "mortgage-calculator-uk";
const CALC_NAME = "Mortgage Calculator UK 2026";
const CALC_DESCRIPTION = "Calculate UK mortgage repayments, total interest, and stamp duty costs. Free 2026 UK mortgage calculator with affordability analysis.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "UK mortgage lenders typically allow borrowing of <strong>4–4.5× your annual income</strong>. On a £50,000 salary, you can borrow approximately £225,000. Joint applicants combine incomes: two earners at £40,000 each can borrow up to £360,000. Some specialist lenders offer 5–5.5× income multiples for high earners (£75,000+) or professionals (doctors, solicitors, accountants).",
  "<strong>Stamp Duty Land Tax (SDLT)</strong> in England and Northern Ireland (since 1 April 2025): 0% on the first £125,000, 2% on £125,001–£250,000, 5% on £250,001–£925,000, 10% on £925,001–£1,500,000, and 12% above £1,500,000. First-time buyers pay 0% up to £300,000 and 5% on £300,001–£500,000 (no relief above £500,000). Scotland uses LBTT and Wales uses LTT with different bands.",
  "UK mortgage types: <strong>fixed-rate</strong> (2, 3, or 5-year fixes are most common — your rate is locked regardless of Bank of England changes), <strong>tracker</strong> (follows Bank of England base rate + margin, e.g., base rate + 1%), and <strong>standard variable rate (SVR)</strong> (lender's default rate, typically 1–2% above base rate — avoid staying on SVR after your fix expires).",
  "The average UK house price is approximately <strong>£285,000</strong> (2025). With a 10% deposit (£28,500), you borrow £256,500. At a 4.5% fixed rate over 25 years, monthly repayments are approximately <strong>£1,415</strong>. Total interest over 25 years: £168,000. Increasing the deposit to 20% (£57,000) typically unlocks better rates — 0.3–0.5% lower — saving £20,000+ over the mortgage term.",
];

const ukMortFormula = `Monthly Payment = P × [r(1+r)^n] / [(1+r)^n − 1]
  P = loan amount (property price − deposit)
  r = monthly interest rate (annual rate ÷ 12)
  n = total months (term × 12)

Stamp Duty (England, standard rates since 1 April 2025):
  0% on first £125,000
  2% on £125,001–£250,000
  5% on £250,001–£925,000
  10% on £925,001–£1,500,000
  12% on everything above £1,500,000

Example: £300,000 property, 10% deposit, 4.5% rate, 25 years
  Loan = £270,000 | Monthly = £1,492
  Total repaid = £447,600 | Total interest = £177,600
  Stamp Duty = £5,000 (2% on £125K + 5% on £50K)`;

const ukMortRateTable = {
  title: "UK Mortgage Repayments by Property Price (4.5% Rate, 25 Years, 10% Deposit)",
  headers: ["Property Price", "Deposit (10%)", "Loan Amount", "Monthly Payment", "Total Interest"],
  rows: [
    ["£200,000", "£20,000", "£180,000", "£1,000", "£119,700"],
    ["£300,000", "£30,000", "£270,000", "£1,499", "£179,550"],
    ["£400,000", "£40,000", "£360,000", "£1,998", "£239,400"],
    ["£500,000", "£50,000", "£450,000", "£2,498", "£299,250"],
    ["£600,000", "£60,000", "£540,000", "£2,997", "£359,100"],
  ],
};

const ukMortHowToSteps = [
  "Enter the property price and your deposit amount (or deposit percentage).",
  "Enter the mortgage interest rate and term (typically 25 or 30 years).",
  "Select the repayment type: capital repayment (pay off the loan) or interest-only (pay only interest, repay capital at the end).",
  "Review monthly repayments, total interest over the term, stamp duty costs, and affordability based on income multiples.",
];

const staticFaqs = [
  { q: "How is stamp duty calculated in the UK?", a: "Stamp Duty Land Tax (England/NI) uses tiered bands (since 1 April 2025): 0% on the first £125,000, 2% on £125,001–£250,000, 5% on £250,001–£925,000, 10% on £925,001–£1,500,000, and 12% above £1,500,000. On a £350,000 property: £2,500 (2% band) + £5,000 (5% on £100K) = £7,500 total. First-time buyers get 0% up to £300,000 on properties costing £500,000 or less. Additional properties incur a 5% surcharge on all bands." },
  { q: "What is the UK mortgage borrowing limit?", a: "Most lenders allow 4–4.5× annual gross income. On £50,000 salary: £225,000 maximum borrowing. Joint applicants combine incomes. Some specialist lenders offer 5–5.5× for professionals (doctors, lawyers, accountants) or high earners above £75,000. Your actual borrowing limit also depends on credit score, existing debts, and the lender's affordability assessment of your spending." },
  { q: "What is the average UK mortgage rate in 2026?", a: "As of early 2026, average UK mortgage rates are approximately 4.0–5.0% for 2-year fixes and 3.8–4.5% for 5-year fixes. Tracker rates are typically Bank of England base rate (currently around 4.25%) plus 0.5–1.5%. Rates depend heavily on your loan-to-value (LTV) — borrowers with 40%+ deposits get the best rates, typically 0.5–1.0% lower than those with 10% deposits." },
  { q: "How does the mortgage term affect affordability?", a: "Longer terms mean lower monthly payments but significantly more total interest. On a £250,000 mortgage at 4.5%: 25-year term = £1,390/month (£166,800 interest); 30-year term = £1,267/month (£206,120 interest); 35-year term = £1,189/month (£249,780 interest). The 35-year term saves £201/month but costs £82,980 more in total interest." },
  { q: "Should I choose fixed or variable rate in the UK?", a: "Fixed rate if you want payment certainty and protection against rate rises — most popular choice in the UK (2-year or 5-year fixes). Variable/tracker if you believe rates will fall — trackers follow the Bank of England base rate directly. Standard variable rate (SVR) should be avoided — it is the lender's default rate after your deal expires and is typically 1–2% higher. Always remortgage before your fix ends." },
  { q: "What deposit do I need for a UK mortgage?", a: "Minimum 5% deposit for most lenders (e.g., £15,000 on a £300,000 property). However, 10% deposit unlocks better rates (0.3–0.5% lower), 15–20% gets the most competitive rates, and 25%+ qualifies for the very best deals. Help to Buy equity loans and Shared Ownership schemes can help first-time buyers with smaller deposits. The average first-time buyer deposit is approximately £53,000." },
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
        formula={ukMortFormula}
        rateTable={ukMortRateTable}
        howToSteps={ukMortHowToSteps}
      />
    </>
  );
}

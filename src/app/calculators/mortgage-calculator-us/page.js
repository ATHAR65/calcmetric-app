import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "mortgage-calculator-us";
const CALC_NAME = "Mortgage Calculator US 2026 — Payments";
const CALC_DESCRIPTION = "Calculate your US mortgage payment, total interest, and amortization schedule. Includes PMI, taxes, and insurance. Free mortgage calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "A mortgage payment consists of four components known as <strong>PITI</strong>: Principal (the loan amount you repay), Interest (the lender's charge for borrowing), Taxes (property taxes, typically 0.5%–2.5% of home value annually), and Insurance (homeowner's insurance plus PMI if applicable). The principal and interest portion is calculated using a standard amortization formula based on your loan amount, interest rate, and term.",
  "In 2026, the average 30-year fixed mortgage rate in the US fluctuates between <strong>6.2% and 7.1%</strong> depending on market conditions and borrower qualifications. A 15-year fixed rate typically runs 0.5%–0.75% lower. Adjustable-rate mortgages (ARMs) often start with lower introductory rates but carry the risk of future rate increases.",
  "If your down payment is less than 20% of the home price, lenders require <strong>Private Mortgage Insurance (PMI)</strong>, which typically costs 0.5% to 1.5% of the loan amount per year. On a $400,000 loan, PMI adds $167 to $500 per month. PMI can be removed once your loan-to-value ratio reaches 80% through payments or home appreciation — request cancellation from your lender in writing.",
  "The total cost of a mortgage is far more than the home price. A $350,000 home with a 30-year mortgage at 6.5% and 10% down means borrowing $315,000. Over 30 years, you will pay approximately <strong>$401,800 in interest alone</strong>, making the total cost $716,800 before taxes and insurance. A 15-year term at 5.8% on the same loan reduces total interest to roughly $159,000 — saving over $242,000.",
];

const mortgageFormula = `Monthly Payment (P&I) = L × [r(1+r)^n] / [(1+r)^n − 1]
Where:
  L = Loan amount (home price − down payment)
  r = Monthly interest rate (annual rate ÷ 12)
  n = Total number of payments (years × 12)

Total PITI = P&I + Monthly Property Tax + Monthly Insurance + PMI
Total Interest = (Monthly Payment × n) − Loan Amount`;

const mortgageHowToSteps = [
  "Enter the home purchase price and your down payment amount or percentage (e.g., 10% or $35,000).",
  "Enter the mortgage interest rate and loan term (30-year or 15-year are most common).",
  "Add your annual property tax rate (check your county assessor's website) and annual homeowner's insurance premium.",
  "Review the monthly PITI payment, total interest over the life of the loan, PMI estimate if applicable, and the full amortization schedule showing how your principal and interest split changes each month.",
];

const staticFaqs = [
  { q: "How is a mortgage payment calculated?", a: "The principal and interest portion uses the amortization formula: M = P[r(1+r)^n]/[(1+r)^n-1], where P is the loan amount, r is the monthly interest rate (annual ÷ 12), and n is the total number of payments (years × 12). Your total monthly payment (PITI) also includes property taxes, homeowner's insurance, and PMI if your down payment is under 20%." },
  { q: "What is a good mortgage rate in 2026?", a: "In 2026, a competitive 30-year fixed rate is in the low-to-mid 6% range for borrowers with credit scores of 740+. The best rates go to borrowers with 20%+ down payments, excellent credit, and low debt-to-income ratios. Rates vary daily — check current rates from multiple lenders and consider both points and APR when comparing offers." },
  { q: "What is PMI and when is it required?", a: "Private Mortgage Insurance (PMI) is required when your down payment is less than 20% of the home price. It protects the lender (not you) against default. PMI typically costs 0.5% to 1.5% of the loan amount per year. You can request PMI removal once your loan-to-value ratio reaches 80%, and your lender must automatically cancel it at 78% LTV." },
  { q: "How does the loan term affect total cost?", a: "A 15-year mortgage has higher monthly payments but dramatically lower total interest. Example: $300,000 at 6.5% — the 30-year monthly payment is $1,896 with $382,633 in total interest. The 15-year at 5.8% costs $2,502/month but only $150,420 in total interest, saving you $232,213. The tradeoff is $606 more per month in exchange for being mortgage-free 15 years sooner." },
  { q: "How much house can I afford?", a: "Most lenders follow the 28/36 rule: your mortgage payment (PITI) should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%. On a $100,000 salary, that means a maximum PITI of about $2,333/month. At 6.5% with 10% down, this supports a home price of roughly $350,000–$380,000 depending on taxes and insurance in your area." },
  { q: "Should I pay points to lower my rate?", a: "One discount point costs 1% of the loan amount and typically reduces your rate by 0.25%. On a $300,000 loan, one point costs $3,000 and saves about $45/month. The break-even point is 67 months (5.6 years). Points make sense if you plan to stay in the home longer than the break-even period. They do not make sense if you might refinance or sell within a few years." },
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
        formula={mortgageFormula}
        howToSteps={mortgageHowToSteps}
      />
    </>
  );
}

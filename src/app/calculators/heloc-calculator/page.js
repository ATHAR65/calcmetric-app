import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "heloc-calculator";
const CALC_NAME = "HELOC Calculator";
const CALC_DESCRIPTION = "Calculate your home equity line of credit limit, available borrowing power, interest-only draw payment, and fully-amortizing repayment payment.";

const seoContent = [
  "<strong>Most lenders let you borrow up to 80–90% of your home's value minus your mortgage balance</strong> — the combined loan-to-value (CLTV) limit. A $500,000 home with a $280,000 mortgage at 85% CLTV yields a $145,000 HELOC limit.",
  "A HELOC is a revolving credit line: draw what you need, pay interest only on what you use. It has a draw period (often 10 years, interest-only) then a repayment period (often 20 years) where payments jump to principal plus interest.",
  "HELOC rates are usually variable and tied to the prime rate, so payments can rise. Your home is collateral, so a HELOC suits ongoing or uncertain costs like a phased renovation — not everyday spending.",
];

const helocFormula = `Available Limit = (Home Value × Max CLTV%) − Mortgage Balance
Interest-Only Payment = Draw × (rate ÷ 12)
Repayment Payment = Draw × i / (1 − (1+i)^−n)   (i = rate/12, n = repay months)

Example: $500,000 home, $280,000 mortgage, 85% CLTV
  Limit = (0.85 × 500,000) − 280,000 = $145,000`;

const helocRateTable = {
  title: "HELOC vs Home Equity Loan vs Cash-Out Refi",
  headers: ["Option", "Rate Type", "Payout", "Best For"],
  rows: [
    ["HELOC", "Variable", "Revolving credit line", "Ongoing / uncertain costs"],
    ["Home equity loan", "Fixed", "Lump sum", "Known one-time expense"],
    ["Cash-out refinance", "Fixed", "Replaces mortgage", "When rates beat your current one"],
  ],
};

const helocHowToSteps = [
  "Enter your current home value and remaining mortgage balance.",
  "Set the lender's maximum combined loan-to-value (usually 80–90%).",
  "Enter the amount you want to draw and your HELOC rate.",
  "Review your available limit, interest-only payment, and repayment payment.",
];

const staticFaqs = [
  { q: "How much can I borrow with a HELOC?", a: "Typically up to 80–90% of your home's value minus your existing mortgage balance. For a $500,000 home with a $280,000 mortgage at 85% CLTV, your HELOC limit is about $145,000." },
  { q: "How is a HELOC payment calculated?", a: "During the draw period you often pay interest only: balance × (rate ÷ 12). In the repayment period the balance amortizes over the term, so the payment includes principal and is higher." },
  { q: "What is the difference between a HELOC and a home equity loan?", a: "A HELOC is a variable-rate revolving credit line you draw from as needed. A home equity loan is a fixed-rate lump sum. HELOCs suit ongoing costs; home equity loans suit a known one-time expense." },
  { q: "What happens when the HELOC draw period ends?", a: "You can no longer borrow, and the loan enters the repayment period (often 20 years). Payments rise because you now pay principal plus interest instead of interest only." },
  { q: "Is HELOC interest tax deductible?", a: "Interest may be deductible if the funds are used to buy, build, or substantially improve the home securing the loan, subject to IRS limits. Interest on funds used for other purposes generally is not." },
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
    headline: "HELOC Calculator — How Much Can You Borrow Against Your Home?",
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
        formula={helocFormula}
        rateTable={helocRateTable}
        howToSteps={helocHowToSteps}
        lastUpdated="July 2026"
      />
    </>
  );
}

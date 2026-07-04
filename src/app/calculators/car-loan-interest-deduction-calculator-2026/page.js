import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "car-loan-interest-deduction-calculator-2026";
const CALC_NAME = "Car Loan Interest Deduction Calculator 2026";
const CALC_DESCRIPTION = "Estimate your federal tax savings from the OBBBA car loan interest deduction — up to $10,000 per year on new US-assembled vehicles, with real amortization math and MAGI phase-out limits.";

const seoContent = [
  "The <strong>car loan interest deduction</strong> under the One Big Beautiful Bill Act (OBBBA) lets buyers of qualifying vehicles deduct up to <strong>$10,000 of loan interest per year</strong> for tax years <strong>2025 through 2028</strong>. It is above-the-line, so you don't need to itemize.",
  "Strict eligibility applies: the vehicle must be <strong>new</strong> (not used), have <strong>final assembly in the United States</strong>, be for <strong>personal use</strong>, weigh under 14,000 lbs, and the loan must originate <strong>after December 31, 2024</strong>. Leases and business vehicles are excluded.",
  "The deduction phases out fast: <strong>$200 per $1,000 of MAGI</strong> above $100,000 (single/HOH) or $200,000 (MFJ) — fully gone at $150,000 / $250,000. Most buyers save hundreds of dollars per year, not thousands, because the saving equals interest × marginal rate.",
];

const carFormula = `Monthly Payment = P × r / (1 − (1+r)^−n)   (r = APR/12)
First-Year Interest = Σ interest portion of first 12 payments
Deductible = min(First-Year Interest, $10,000)

Phase-out (starts $100K single/HOH, $200K MFJ):
  reduction = ceil((MAGI − start) / $1,000) × $200
  Deductible = max(0, Deductible − reduction)

Federal Tax Saved = Deductible × Marginal Tax Rate

Example: $42,000 at 7.5% APR, 60 months
  First-year interest ≈ $2,900
  Tax saved at 22% ≈ $640`;

const carRateTable = {
  title: "2026 OBBBA Car Loan Interest Deduction Limits",
  headers: ["Filing Status", "Max Deduction", "Phase-Out Start (MAGI)", "Fully Gone At"],
  rows: [
    ["Single", "$10,000", "$100,000", "$150,000"],
    ["Head of Household", "$10,000", "$100,000", "$150,000"],
    ["Married Filing Jointly", "$10,000", "$200,000", "$250,000"],
  ],
};

const carHowToSteps = [
  "Enter your loan amount, APR, and term — the calculator amortizes the loan to find your first-year interest.",
  "Confirm the vehicle qualifies: new, US-assembled, personal use, financed after Dec 31, 2024.",
  "Select your filing status.",
  "Enter your MAGI to apply the $200-per-$1,000 phase-out.",
  "Review your deductible interest and the federal tax you actually save.",
];

const staticFaqs = [
  { q: "How much car loan interest can I deduct in 2026?", a: "Up to $10,000 per year of interest on a qualifying new, US-assembled personal vehicle financed after December 31, 2024, for tax years 2025 through 2028. Your actual saving equals the deductible interest multiplied by your marginal tax rate — typically hundreds of dollars per year for most buyers." },
  { q: "Do used cars qualify for the car loan interest deduction?", a: "No. Only new vehicles qualify under OBBBA. Used vehicles, leased vehicles, and commercial/business vehicles are all excluded." },
  { q: "What are the income limits for the car loan interest deduction?", a: "The deduction phases out above $100,000 MAGI for single and head-of-household filers, or $200,000 for married filing jointly. It is reduced by $200 for every $1,000 over the limit, disappearing entirely at $150,000 / $250,000." },
  { q: "How do I know if my car was assembled in the US?", a: "Check the VIN — if it starts with 1, 4, or 5, the vehicle was assembled in the United States. You can also check the manufacturer's information label on the driver's door jamb or use the NHTSA VIN decoder." },
  { q: "Do I need to itemize to claim the car loan interest deduction?", a: "No. It is an above-the-line deduction, so you can claim it in addition to the standard deduction." },
];

const faqSchemaEntities = staticFaqs.map((f) => ({
  "@type": "Question",
  name: f.q,
  acceptedAnswer: { "@type": "Answer", text: f.a },
}));

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaEntities,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Car Loan Interest Deduction Calculator 2026 — OBBBA Tax Savings",
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
        formula={carFormula}
        rateTable={carRateTable}
        howToSteps={carHowToSteps}
      />
    </>
  );
}

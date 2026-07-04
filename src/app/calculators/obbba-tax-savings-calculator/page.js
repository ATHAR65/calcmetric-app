import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "obbba-tax-savings-calculator";
const CALC_NAME = "OBBBA Tax Savings Calculator 2026";
const CALC_DESCRIPTION = "Stack all four One Big Beautiful Bill Act deductions — no tax on tips, no tax on overtime, the $6,000 senior bonus, and car loan interest — with every cap and phase-out applied for 2026.";

const seoContent = [
  "The <strong>One Big Beautiful Bill Act</strong> created four above-the-line deductions for tax years <strong>2025–2028</strong>: <strong>tips</strong> (up to $25,000), <strong>overtime premium</strong> (up to $12,500/$25,000), the <strong>$6,000 senior bonus</strong> per person 65+, and <strong>car loan interest</strong> (up to $10,000 on new US-assembled vehicles).",
  "They <strong>stack</strong> — a tipped worker with overtime, or a retired couple with a new car loan, can claim multiple deductions in the same year, all while taking the standard deduction.",
  "Each deduction has its own MAGI phase-out: tips/overtime from $150K ($300K MFJ), senior from $75K ($150K MFJ) at 6%, and car loan interest from $100K ($200K MFJ) at the fastest rate — $200 per $1,000.",
];

const obbbaFormula = `Tips:     min(tips, $25,000) − $100/$1,000 over $150K ($300K MFJ)
Overtime: min(premium, $12.5K/$25K) × proportional phase-out
          ($150K–$275K single · $300K–$550K MFJ)
Senior:   $6,000 × persons 65+ − 6% × MAGI over $75K ($150K MFJ)
Car loan: min(interest, $10,000) − $200/$1,000 over $100K ($200K MFJ)

Total Deduction = Tips + Overtime + Senior + Car Loan
Federal Tax Saved = Total × Marginal Rate

Example (MFJ, MAGI $95,000):
  $12,000 tips + $4,000 OT premium + $2,800 car interest
  Total = $18,800 → saved at 12% marginal ≈ $2,256`;

const obbbaRateTable = {
  title: "OBBBA Deductions at a Glance (2025–2028)",
  headers: ["Deduction", "Max Amount", "Phase-Out Starts (Single / MFJ)", "Who Qualifies"],
  rows: [
    ["No Tax on Tips", "$25,000 (all statuses)", "$150,000 / $300,000", "W-2 + self-employed, tipped occupations"],
    ["No Tax on Overtime", "$12,500 / $25,000", "$150,000 / $300,000", "W-2 employees, FLSA overtime"],
    ["Senior Bonus", "$6,000 per person 65+", "$75,000 / $150,000", "Age 65+ by Dec 31"],
    ["Car Loan Interest", "$10,000", "$100,000 / $200,000", "New US-assembled personal vehicles"],
  ],
};

const obbbaHowToSteps = [
  "Select your filing status and enter your MAGI — every phase-out depends on them.",
  "Enter your annual reported tips, if any.",
  "Enter your annual overtime premium (the 0.5× portion only).",
  "Enter car loan interest paid this year on a qualifying new US-assembled vehicle.",
  "Mark whether you (and your spouse) are 65+, then review your stacked deductions and total federal tax saved.",
];

const staticFaqs = [
  { q: "Can I claim all four OBBBA deductions in the same year?", a: "Yes, if you meet each deduction's separate eligibility rules. Tips, overtime, the senior bonus, and car loan interest all stack, and all are above-the-line — claimable alongside the standard deduction for tax years 2025 through 2028." },
  { q: "Do the OBBBA deductions reduce Social Security or Medicare tax?", a: "No. All four reduce federal income tax only. FICA taxes, self-employment tax, and most state income taxes are unchanged." },
  { q: "What income limits apply to the OBBBA deductions?", a: "Tips and overtime phase out from $150,000 MAGI ($300,000 MFJ); the senior bonus from $75,000 ($150,000 MFJ) at 6% of the excess; and car loan interest from $100,000 ($200,000 MFJ) at $200 per $1,000 — the fastest phase-out of the four." },
  { q: "Do I need to itemize to claim the OBBBA deductions?", a: "No. All four are above-the-line deductions, so you can claim them together with the standard deduction." },
  { q: "When do the OBBBA deductions expire?", a: "All four apply to tax years 2025, 2026, 2027, and 2028 only, unless Congress passes an extension." },
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
    headline: "OBBBA Tax Savings Calculator 2026 — Stack All Four Deductions",
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
        formula={obbbaFormula}
        rateTable={obbbaRateTable}
        howToSteps={obbbaHowToSteps}
      />
    </>
  );
}

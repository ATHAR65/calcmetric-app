import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "onlyfans-tax-calculator";
const CALC_NAME = "OnlyFans Tax Calculator 2026";
const CALC_DESCRIPTION = "Estimate self-employment tax, federal income tax, quarterly payments, and after-tax take-home on OnlyFans earnings — with the 20% platform fee deducted correctly.";

const seoContent = [
  "OnlyFans earnings are <strong>self-employment income</strong>: you owe 15.3% SE tax plus federal income tax at your bracket. OnlyFans issues a <strong>1099-NEC</strong> at $600+ — reporting your <strong>gross earnings before the 20% platform cut</strong>.",
  "The <strong>20% platform fee is a deductible business expense</strong>, along with equipment, lighting, home studio, internet share, software, and promo costs. You're taxed on net profit, not on money OnlyFans kept.",
  "Plan for <strong>25–30% of net income</strong> going to federal taxes (plus state), paid via quarterly estimates in April, June, September, and January if you'll owe $1,000+.",
];

const ofFormula = `Net Profit = Gross − 20% platform fee − expenses
SE Tax = Net × 92.35% × 15.3%
Taxable = Net − ½ SE tax − standard deduction − 20% QBI
Federal Tax = brackets applied to Taxable
Quarterly = (SE + Federal) ÷ 4

Example: $60,000 gross, $5,000 expenses, single
  Net = $43,000 → SE ≈ $6,076 → Federal ≈ $1,656
  Total ≈ $7,732 (≈18% of net) → $1,933/quarter`;

const ofRateTable = {
  title: "OnlyFans Creator Taxes at a Glance (2026)",
  headers: ["Tax", "Rate", "Applies To", "Notes"],
  rows: [
    ["Self-employment tax", "15.3%", "92.35% of net profit", "Social Security + Medicare"],
    ["Federal income tax", "10–37%", "Taxable income", "After std deduction + QBI"],
    ["Platform fee", "20% (deductible)", "Gross earnings", "1099 reports gross, fee is an expense"],
    ["State income tax", "0–13%", "Varies", "Not included in this estimate"],
  ],
};

const ofHowToSteps = [
  "Enter your gross annual OnlyFans earnings (before the 20% cut — matches your 1099).",
  "Enter business expenses: equipment, lighting, home studio, software, promo.",
  "Select your filing status.",
  "Review SE tax, federal tax, quarterly payment, and after-tax take-home.",
];

const staticFaqs = [
  { q: "How much tax do I pay on OnlyFans income?", a: "Typically 20–35% of net profit federally once self-employment tax (15.3%) and income tax combine, plus state tax. A single filer netting $43,000 owes roughly $8,000 in federal taxes for 2026." },
  { q: "Does OnlyFans send a 1099?", a: "Yes — OnlyFans (Fenix International) issues a 1099-NEC when you earn $600 or more, reporting gross earnings before the 20% platform cut. The IRS receives a copy." },
  { q: "Is the OnlyFans 20% fee tax deductible?", a: "Yes. Because the 1099 reports gross earnings, the 20% platform fee is deducted as a business expense on Schedule C — you are only taxed on what you actually received." },
  { q: "Do OnlyFans creators need to pay quarterly taxes?", a: "If you expect to owe $1,000 or more for the year, yes — quarterly estimated payments in April, June, September, and January avoid IRS underpayment penalties." },
  { q: "What can OnlyFans creators write off?", a: "Cameras, lighting, phones (business share), props and costumes used solely for content, home studio space, internet share, editing software, subscriptions, marketing, and agency fees. Everyday clothing and general beauty expenses generally don't qualify." },
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
    headline: "OnlyFans Tax Calculator 2026 — SE Tax, Federal Tax & Quarterly Payments",
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
        formula={ofFormula}
        rateTable={ofRateTable}
        howToSteps={ofHowToSteps}
      />
    </>
  );
}

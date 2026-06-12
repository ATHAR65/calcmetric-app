import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "gig-economy-net-income-calculator";
const CALC_NAME = "Gig Economy Net Income Calculator 2026";
const CALC_DESCRIPTION = "Calculate your actual take-home pay after expenses and taxes as a gig worker. Supports Uber, Lyft, DoorDash, Instacart, and more. Free 2026 gig economy calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Gig workers face a <strong>higher effective tax rate</strong> than traditional employees because they pay both the employee and employer portions of FICA — a combined 15.3% self-employment tax (12.4% Social Security + 2.9% Medicare) on top of federal income tax. A W-2 employee pays 7.65% FICA; a gig worker pays double that on the same gross income.",
  "The key to maximizing gig income is aggressive expense tracking. The <strong>IRS standard mileage rate for 2026 is $0.70 per mile</strong> — a DoorDash driver logging 25,000 miles deducts $17,500, which can eliminate most or all SE tax. Other deductible expenses include phone costs (business percentage), hot bags, phone mounts, car washes, and platform-specific equipment.",
  "Most gig workers earn from <strong>multiple platforms simultaneously</strong> — driving Uber and DoorDash, delivering for Instacart and Amazon Flex, or freelancing on Fiverr and Upwork. All income must be reported and combined on Schedule C. Each platform sends a 1099-NEC (or 1099-K) for earnings above $600, but you must report all income even below that threshold.",
  "Quarterly estimated tax payments are required if you expect to owe <strong>$1,000 or more</strong> in tax for the year. Payments are due April 15, June 15, September 15, and January 15. Missing quarterly payments triggers an underpayment penalty. A safe harbor rule: pay at least 100% of last year's tax liability (110% if AGI exceeded $150,000) to avoid penalties.",
];

const gigFormula = `Net Gig Income = Gross Earnings − Business Expenses
SE Tax = Net Income × 92.35% × 15.3%
Income Tax = (Net Income − ½ SE Tax − Standard Deduction) × Tax Rate

Example: $45,000 gross, $12,000 expenses (mileage + supplies)
  Net = $45,000 − $12,000 = $33,000
  SE Tax = $33,000 × 92.35% × 15.3% = $4,661
  Taxable = $33,000 − $2,330 − $15,000 = $15,670
  Federal Tax = ~$1,727
  True Take-Home = $45,000 − $12,000 − $4,661 − $1,727 = $26,612`;

const gigRateTable = {
  title: "Gig Platform Earnings vs True Take-Home (2026)",
  headers: ["Gross Earnings", "Expenses", "SE Tax", "Income Tax", "Net Take-Home"],
  rows: [
    ["$25,000", "$8,000", "$2,460", "$450", "$14,090"],
    ["$45,000", "$12,000", "$4,661", "$1,727", "$26,612"],
    ["$65,000", "$16,000", "$6,862", "$3,959", "$38,179"],
    ["$85,000", "$20,000", "$9,063", "$6,828", "$49,109"],
  ],
};

const gigHowToSteps = [
  "Enter your total gross earnings across all gig platforms (Uber, DoorDash, Instacart, freelance, etc.).",
  "Enter your total business expenses: mileage ($0.70/mile), phone, supplies, platform fees, and other deductible costs.",
  "Enter your filing status and any other income (W-2 job, spouse income) for accurate tax bracket calculation.",
  "Review your net income after SE tax and income tax, your effective tax rate, and quarterly estimated payment amounts.",
];

const staticFaqs = [
  { q: "How do I calculate net income from gig work?", a: "Start with gross earnings from all platforms. Subtract business expenses (mileage at $0.70/mile is the biggest deduction for drivers). From that net income, subtract self-employment tax (15.3% on 92.35% of net income) and federal income tax (based on your bracket after the standard deduction). The remainder is your true take-home." },
  { q: "Is gig income taxed more than regular employment?", a: "Effectively yes. Gig workers pay 15.3% self-employment tax (both employee and employer FICA), while W-2 employees pay only 7.65% (the employer covers the other half). However, gig workers can deduct business expenses that employees cannot, and they deduct half of SE tax from income. After deductions, the gap narrows." },
  { q: "What expenses can gig workers deduct?", a: "Mileage ($0.70/mile for 2026 — the largest deduction for drivers), phone and data plan (business percentage), hot bags and delivery equipment, car washes, phone mounts, parking and tolls, platform fees, health insurance premiums (if self-employed), and a portion of home office if used for administrative work." },
  { q: "Do I need to make quarterly estimated tax payments?", a: "Yes, if you expect to owe $1,000 or more in tax for the year. Quarterly payments are due April 15, June 15, September 15, and January 15. Missing payments triggers underpayment penalties. Set aside 25–30% of net gig income for taxes, or pay 100% of last year's total tax liability in equal quarterly installments." },
  { q: "How do I report income from multiple gig platforms?", a: "All gig income is combined on a single Schedule C (Profit or Loss From Business) on your federal tax return. Each platform that paid you $600+ sends a 1099-NEC or 1099-K. You must report ALL income, even amounts below $600 that don't receive a 1099. Track income and expenses separately per platform for your own records." },
  { q: "What is the self-employment tax rate in 2026?", a: "The SE tax rate is 15.3% — composed of 12.4% for Social Security (on the first $176,100 of net SE earnings) and 2.9% for Medicare (no cap). An additional 0.9% Medicare surtax applies on SE earnings above $200,000 (single) or $250,000 (married). You can deduct half of SE tax as an adjustment to income." },
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
        formula={gigFormula}
        rateTable={gigRateTable}
        howToSteps={gigHowToSteps}
      />
    </>
  );
}

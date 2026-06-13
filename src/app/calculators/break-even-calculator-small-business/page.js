import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "break-even-calculator-small-business";
const CALC_NAME = "Break-Even Calculator for Small Business";
const CALC_DESCRIPTION = "Find how many units you need to sell to cover fixed and variable costs, with contribution margin analysis for small business and e-commerce in 2026.";

const seoContent = [
  "A <strong>break-even calculator</strong> tells you the exact number of units you must sell each month to cover all your costs — the point where revenue equals expenses and profit begins. It is the foundation of pricing, budgeting, and growth planning for any small business or e-commerce store.",
  "The math hinges on <strong>contribution margin</strong>: selling price minus variable cost per unit. Divide your monthly <strong>fixed costs</strong> (rent, software, salaries, insurance) by that margin and you get your break-even units. For example, $800 in fixed costs and a $23 contribution margin means you break even at about <strong>35 units</strong> a month.",
  "For e-commerce, true variable cost must include <strong>shipping, packaging, payment processing, platform fees, and returns</strong> — not just product cost. Leaving these out makes break-even look far easier than it really is.",
];

const breakEvenFormula = `Contribution Margin = Selling Price − Variable Cost per Unit
Contribution Margin % = (Contribution Margin ÷ Selling Price) × 100
Break-Even Units = Fixed Costs ÷ Contribution Margin
Break-Even Revenue = Break-Even Units × Selling Price
Units for Target Profit = (Fixed Costs + Target Profit) ÷ Contribution Margin

Example: $35 price, $12 COGS, $800/mo fixed costs
  Contribution Margin = $35 − $12 = $23 (65.7%)
  Break-Even Units = $800 ÷ $23 ≈ 35 units/month
  Break-Even Revenue ≈ $1,217/month`;

const breakEvenRateTable = {
  title: "Contribution Margin Health Bands",
  headers: ["Contribution Margin %", "Status", "What It Means"],
  rows: [
    ["Above 30%", "Healthy (green)", "Comfortable cushion; break even on fewer units"],
    ["15% – 30%", "Moderate (amber)", "Workable, but watch costs and volume"],
    ["Below 15%", "Thin (red)", "High volume required; little room for error"],
  ],
};

const breakEvenHowToSteps = [
  "Enter your total fixed costs per month (rent, software, salaries, insurance).",
  "Enter your variable cost per unit (COGS, packaging, shipping, fees).",
  "Enter your selling price per unit — it must exceed your variable cost.",
  "Optionally enter a target monthly profit to see the units needed to reach it.",
  "Review your break-even units, break-even revenue, and color-coded contribution margin instantly.",
];

const staticFaqs = [
  { q: "What is a break-even point in business?", a: "The break-even point is the sales volume at which total revenue equals total costs, so you make neither a profit nor a loss. Every unit sold beyond the break-even point generates profit, and every unit below it represents a loss. It is the minimum you must sell each month to stay solvent." },
  { q: "How do I calculate break-even for an e-commerce product?", a: "Divide your monthly fixed costs by your contribution margin — the selling price minus all variable costs. For e-commerce, variable cost must include product cost, shipping, packaging, payment processing (about 3%), platform fees, and an allowance for returns. The result is the number of units you must sell to break even." },
  { q: "What is contribution margin and why does it matter?", a: "Contribution margin is selling price minus variable cost per unit — the money left over from each sale to cover fixed costs and generate profit. A higher contribution margin means each sale does more work, so you break even on fewer units and have more resilience during slow months." },
  { q: "What is a good break-even point for a small business?", a: "There is no universal figure, but a healthy business reaches break-even using well under half of its realistic monthly sales capacity, leaving room for profit and slow periods. A contribution margin above 30% generally signals a comfortable position, while below 15% means you need high volume to survive." },
  { q: "How do I lower my break-even point?", a: "Raise your selling price, reduce variable costs (negotiate supplier pricing, cut shipping and packaging costs), or trim fixed costs such as unused software. Because break-even units equal fixed costs divided by contribution margin, improving either side of that ratio lowers the number of units you must sell." },
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
    headline: "Break-Even Calculator for Small Business & E-Commerce 2026",
    description: CALC_DESCRIPTION,
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
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
        formula={breakEvenFormula}
        rateTable={breakEvenRateTable}
        howToSteps={breakEvenHowToSteps}
      />
    </>
  );
}

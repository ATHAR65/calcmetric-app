import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "shopify-profit-calculator-2026";
const CALC_NAME = "Shopify Profit Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Shopify store profit after subscription, payment processing fees, COGS & shipping. Compare Shopify plans. Free profit estimator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Shopify charges a <strong>monthly subscription fee</strong> plus <strong>payment processing fees</strong> per transaction. Unlike Amazon or Etsy, Shopify does not charge a percentage-based marketplace commission — but you do pay credit card processing rates that vary by plan: 2.9% + $0.30 (Basic), 2.7% + $0.30 (Shopify), or 2.5% + $0.30 (Advanced) through Shopify Payments.",
  "If you use an external payment gateway instead of Shopify Payments, Shopify adds a <strong>third-party transaction fee</strong>: 2% on Basic, 1% on Shopify, and 0.5% on Advanced. This fee is on top of whatever the external gateway charges. Using Shopify Payments eliminates this extra fee entirely, making it the most cost-effective option for most merchants.",
  "Your true Shopify profit depends on four cost layers: <strong>subscription</strong> ($39–$399/month), <strong>payment processing</strong> (2.5%–2.9% + $0.30), <strong>cost of goods sold</strong> (materials, manufacturing, wholesale cost), and <strong>shipping</strong> (actual postage, packaging, Shopify Shipping discounts). Many new store owners underestimate shipping costs and payment processing, which can eat 10%–15% of revenue.",
  "Shopify Shipping offers discounted rates from USPS, UPS, and DHL: up to <strong>88% off UPS rates</strong> and up to 77% off USPS rates. Shopify also provides a free <strong>Shopify POS Lite</strong> for in-person selling. For stores processing over $1M annually, Shopify Plus starts at $2,300/month with lower processing fees and advanced features.",
];

const shopifyRateTable = {
  title: "2026 Shopify Plan Comparison",
  headers: ["Feature", "Basic ($39/mo)", "Shopify ($105/mo)", "Advanced ($399/mo)"],
  rows: [
    ["Online card rate", "2.9% + $0.30", "2.7% + $0.30", "2.5% + $0.30"],
    ["In-person card rate", "2.6% + $0.10", "2.5% + $0.10", "2.4% + $0.10"],
    ["Third-party gateway fee", "2.0%", "1.0%", "0.5%"],
    ["Staff accounts", "2", "5", "15"],
    ["Shipping discount", "Up to 77%", "Up to 88%", "Up to 88%"],
    ["Reports", "Basic", "Standard", "Advanced + custom"],
  ],
};

const shopifyHowToSteps = [
  "Select your Shopify plan (Basic, Shopify, or Advanced) to set the correct fee rates.",
  "Enter your average order value, monthly order volume, and whether you use Shopify Payments or a third-party gateway.",
  "Enter your cost of goods sold (COGS) per unit and average shipping cost per order.",
  "Review your monthly breakdown: subscription cost, total processing fees, COGS, shipping, and net profit with margin percentage.",
];

const staticFaqs = [
  { q: "What are Shopify's transaction fees?", a: "With Shopify Payments, there is no additional transaction fee — you only pay credit card processing: 2.9% + $0.30 (Basic), 2.7% + $0.30 (Shopify), or 2.5% + $0.30 (Advanced). If you use an external gateway like PayPal or Stripe, Shopify adds 2%, 1%, or 0.5% on top depending on your plan." },
  { q: "How much does Shopify cost per month?", a: "Shopify's plans are: Basic at $39/month, Shopify at $105/month, and Advanced at $399/month (billed monthly). Annual billing saves 25%. Shopify Starter ($5/month) allows selling through social media and links but does not include a full online store. Shopify Plus for high-volume merchants starts at $2,300/month." },
  { q: "Is Shopify profitable for small businesses?", a: "Yes, but margins depend on your product cost and volume. Shopify's total fees (subscription + processing) typically run 5%–8% of revenue — much lower than Amazon's 30%+ or Etsy's 12%+. The trade-off is you must drive your own traffic (SEO, ads, social media). Most profitable Shopify stores have product margins of 40%+ and spend 15%–25% of revenue on customer acquisition." },
  { q: "What payment processor is cheapest with Shopify?", a: "Shopify Payments is the cheapest option because it eliminates the third-party transaction fee. If Shopify Payments is not available in your country, compare external gateway rates carefully — PayPal (3.49% + $0.49) plus Shopify's 2% surcharge (Basic plan) means total fees of 5.49% + $0.49. Stripe (2.9% + $0.30) plus 2% surcharge is 4.9% + $0.30." },
  { q: "How does Shopify compare to Etsy and Amazon for sellers?", a: "Shopify: lowest fees (5%–8% of revenue), full brand control, no marketplace traffic — you drive your own. Etsy: moderate fees (~12%), built-in marketplace with 90M+ buyers, limited branding. Amazon: highest fees (30%+), massive traffic and Prime eligibility, but heavy competition and no customer data access. Most successful sellers use Shopify as their primary store with Amazon/Etsy as supplemental channels." },
  { q: "Should I upgrade from Basic to the Shopify plan?", a: "Upgrade when the savings on processing fees exceed the extra subscription cost. The break-even is approximately $5,000/month in sales: the 0.2% processing rate difference saves $10/month on $5,000 in sales, while the plan costs $66 more. Above $33,000/month in sales, upgrading saves more than $66/month. The Shopify plan also includes better reports and more staff accounts." },
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
        rateTable={shopifyRateTable}
        howToSteps={shopifyHowToSteps}
      />
    </>
  );
}

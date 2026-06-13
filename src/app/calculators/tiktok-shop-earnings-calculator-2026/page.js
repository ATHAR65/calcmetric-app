import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "tiktok-shop-earnings-calculator-2026";
const CALC_NAME = "TikTok Shop Earnings Calculator 2026";
const CALC_DESCRIPTION = "Estimate your net TikTok Shop earnings after referral fees, affiliate commissions, COGS, and shipping costs for 2026.";

const seoContent = [
  "A <strong>TikTok Shop earnings calculator</strong> shows your real net profit after every cost TikTok and your business take from a sale — the <strong>referral (commission) fee</strong>, optional <strong>affiliate commission</strong>, product cost (COGS), and shipping. In 2026, TikTok Shop referral fees typically range from about <strong>2% to 20% by category</strong>, with many categories around <strong>8%</strong>.",
  "Affiliate sales add another layer: when creators promote your product, you pay a commission you set (commonly 5–20%) on top of the referral fee. That means a product that looks profitable on COGS alone can break even — or lose money — once creator commissions and shipping are included.",
  "This calculator combines all fees into a clear per-unit and per-month breakdown, including your <strong>net margin percentage</strong>, and warns you when a product&apos;s margin turns negative or falls below 10%.",
];

const tiktokFormula = `Referral Fee = Selling Price × (Referral % ÷ 100)
Affiliate Fee = Selling Price × (Affiliate % ÷ 100)   // if enabled
Total Fees = Referral Fee + Affiliate Fee + Shipping
Gross Profit = Selling Price − COGS
Net Profit / Unit = Gross Profit − Total Fees
Monthly Net = Net Profit / Unit × Units Sold
Net Margin % = (Net Profit / Unit ÷ Selling Price) × 100

Example: $29.99 price, $9 COGS, 8% referral, 10% affiliate, $0 shipping
  Referral = $2.40 | Affiliate = $3.00
  Net / Unit = $29.99 − $9 − $2.40 − $3.00 = $15.59 (52% margin)`;

const tiktokRateTable = {
  title: "TikTok Shop Cost Layers (2026)",
  headers: ["Cost", "Typical Range", "Applied To"],
  rows: [
    ["Referral / Commission Fee", "2% – 20% (≈8%)", "Order value, varies by category"],
    ["Affiliate Commission", "5% – 20% (seller set)", "Order value, when creators drive the sale"],
    ["Shipping", "Varies / often subsidized", "Per order, if absorbed by seller"],
    ["COGS", "Your product + packaging", "Per unit"],
  ],
};

const tiktokHowToSteps = [
  "Enter your product selling price and your product cost (COGS).",
  "Set the TikTok referral fee with the slider (default 8%, range 2–20% by category).",
  "Toggle affiliate commission on and set the percentage if creators promote your product.",
  "Add a shipping cost per unit if you absorb it, then enter your monthly units sold.",
  "Review the per-unit and monthly net profit, net margin, and any low-margin warning instantly.",
];

const staticFaqs = [
  { q: "What percentage does TikTok Shop take from sellers in 2026?", a: "TikTok Shop charges a referral (commission) fee that varies by product category, generally ranging from about 2% to 20%, with many categories around 8%. New sellers may receive a promotional reduced rate for an introductory period. Always confirm your exact category rate in the TikTok Shop Seller Center." },
  { q: "How does TikTok affiliate commission work for shop sellers?", a: "Sellers set an affiliate commission rate (commonly 5–20%) that is paid to creators when their videos or live streams drive a sale. This commission is in addition to the TikTok referral fee and is deducted from your per-unit profit, so it must be factored into your pricing." },
  { q: "Is TikTok Shop profitable compared to Amazon or Etsy?", a: "TikTok Shop's referral fee is often lower than Amazon's roughly 15% referral fee and competitive with Etsy's ~6.5% transaction fee plus processing. However, affiliate commissions can raise your effective cost above Amazon's. TikTok's strength is discovery-driven, viral volume, while Amazon and Etsy are search-driven. Profitability depends on your margins and product." },
  { q: "What are TikTok Shop referral fees by category?", a: "Referral fees differ by product category and can range from roughly 2% to 20%. Categories such as electronics, apparel, beauty, and home each have their own rate, so check the current fee schedule for your specific category in the Seller Center before pricing your product." },
  { q: "How do I calculate my net profit on TikTok Shop?", a: "Net profit per unit equals selling price minus COGS, minus the TikTok referral fee, minus any affiliate commission, minus shipping. Multiply by units sold to get your monthly net. This calculator performs the full breakdown automatically and shows your net margin percentage." },
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
    headline: "TikTok Shop Earnings Calculator 2026 — Calculate Fees & Net Profit",
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
        formula={tiktokFormula}
        rateTable={tiktokRateTable}
        howToSteps={tiktokHowToSteps}
      />
    </>
  );
}

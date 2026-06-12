import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "ebay-seller-fee-profit";
const CALC_NAME = "eBay Seller Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate eBay final value fees and true net profit on any sale. Covers all categories, shipping, and promoted listings. Free tool.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "eBay charges sellers a <strong>final value fee (FVF)</strong> on every sale, calculated as a percentage of the total transaction amount including shipping. For most categories, the FVF is <strong>13.25% + $0.30 per order</strong>. Some categories have lower rates: books and media (14.6%), musical instruments (6.35%), and heavy equipment (3.0%). The fee applies to the total amount the buyer pays, including any shipping charges.",
  "All payments on eBay go through <strong>eBay Managed Payments</strong> — PayPal is no longer an option for sellers. Payment processing is built into the final value fee, so there is no separate credit card processing charge. eBay deposits your earnings directly to your bank account on a regular schedule (daily for Top Rated sellers, otherwise within 2 business days after delivery confirmation).",
  "Sellers receive <strong>250 free fixed-price listings per month</strong> (zero insertion fee). After using your free allowance, each additional listing costs $0.35. Auction-style listings get a smaller free allowance. If you run an eBay Store, you get significantly more free listings: 250/month for Starter ($4.95/mo), 1,000 for Basic ($21.95/mo), and 10,000+ for Premium ($59.95/mo) and above.",
  "Optional fees include <strong>Promoted Listings</strong> (you set an ad rate, typically 2%–15%, charged only when a buyer clicks your ad and purchases within 30 days) and <strong>international shipping through eBay's Global Shipping Program</strong> (eBay handles customs and international postage; you ship only to the Kentucky GSP hub domestically).",
];

const ebayRateTable = {
  title: "2026 eBay Fee Schedule",
  headers: ["Fee Type", "Rate", "Notes"],
  rows: [
    ["Final Value Fee (most categories)", "13.25% + $0.30", "On total sale + shipping"],
    ["Books, DVDs, Music", "14.6% + $0.30", "Higher rate"],
    ["Musical Instruments", "6.35% + $0.30", "Lower rate"],
    ["Sneakers (authenticated)", "8.0% + $0.30", "Authenticated category"],
    ["Insertion Fee (over free allowance)", "$0.35", "Per listing"],
    ["Free Listings (no Store)", "250/month", "Fixed-price only"],
    ["Promoted Listings Standard", "2%–15%", "Ad rate you set, pay per sale"],
    ["International Fee", "+1.65%", "Cross-border transactions"],
  ],
};

const ebayHowToSteps = [
  "Enter the item sale price and shipping charge (or $0 for free shipping).",
  "Select the product category to apply the correct final value fee percentage.",
  "Enter your cost of goods and actual shipping cost to calculate true net profit.",
  "Review the fee breakdown: final value fee, per-order charge, promoted listing fee if applicable, and your net profit with margin percentage.",
];

const staticFaqs = [
  { q: "What is eBay's final value fee in 2026?", a: "The standard final value fee for most categories is 13.25% of the total sale amount (item price + shipping) plus $0.30 per order. This includes payment processing — there is no separate credit card fee. Some categories have higher or lower rates: books at 14.6%, musical instruments at 6.35%, and sneakers at 8.0%." },
  { q: "Does eBay charge fees on shipping?", a: "Yes. The final value fee is calculated on the total order amount, which includes the shipping charge paid by the buyer. If you sell an item for $50 with $10 shipping, eBay's 13.25% fee applies to the full $60 ($7.95 + $0.30 = $8.25 in fees). This is why many sellers offer free shipping and build shipping costs into the item price." },
  { q: "How do I increase eBay profit margins?", a: "Key strategies: use your 250 free listings before paying insertion fees, keep items in high-margin categories, optimize shipping costs with eBay labels (discounted USPS/FedEx rates), maintain Top Rated Seller status for a 10% FVF discount, avoid unnecessary promoted listing spend, and bundle items to reduce per-order fees." },
  { q: "What is eBay Managed Payments?", a: "Managed Payments is eBay's payment system that replaced PayPal. All buyer payments go through eBay, which deposits funds directly to your bank account. Processing fees are included in the final value fee (no separate card processing charge). Top Rated sellers receive daily payouts; others get payouts within 2 business days of confirmed delivery." },
  { q: "How does eBay compare to Amazon fees?", a: "eBay's total fee of about 13.5% is significantly lower than Amazon's total fees, which can reach 30%+ when you combine the 15% referral fee with FBA fulfillment and storage fees. However, eBay provides no fulfillment service — you handle storage, packing, and shipping. eBay is typically better for used items, collectibles, and one-off sales; Amazon for new products at scale." },
  { q: "What is the eBay Top Rated Seller discount?", a: "Top Rated Sellers who ship with tracking within 1 business day and maintain less than 0.5% defect rate receive a 10% discount on final value fees. On a $100 sale, this saves about $1.33. To qualify, you need at least 100 transactions and $1,000 in sales over 12 months, plus consistently excellent performance metrics." },
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
        rateTable={ebayRateTable}
        howToSteps={ebayHowToSteps}
      />
    </>
  );
}

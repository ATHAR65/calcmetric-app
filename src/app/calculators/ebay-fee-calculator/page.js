import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { siteUrl } from "@/lib/siteConfig";

const CALC_SLUG = "ebay-fee-calculator";
const CALC_NAME = "eBay Fee Calculator";
const PAGE_TITLE = "eBay Fee Calculator 2026 – Selling Fees & Profit (UK & US)";
const CALC_DESCRIPTION =
  "Work out eBay final value fees and your true net profit on any sale in seconds — category-specific UK & US rates. Free, no sign-up.";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: CALC_DESCRIPTION,
  alternates: { canonical: `${siteUrl}/calculators/${CALC_SLUG}` },
  openGraph: {
    title: PAGE_TITLE,
    description: CALC_DESCRIPTION,
    url: `${siteUrl}/calculators/${CALC_SLUG}`,
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(CALC_NAME)}&description=${encodeURIComponent(CALC_DESCRIPTION)}&type=calculator`,
        width: 1200,
        height: 630,
        alt: CALC_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: CALC_DESCRIPTION,
    creator: "@themetricapp",
  },
};

const seoContent = [
  "eBay charges sellers a <strong>final value fee (FVF)</strong> on every sale — a percentage of the total amount the buyer pays (including any shipping they cover) plus a small fixed fee per order. In the US, most categories are charged <strong>13.25% + $0.30</strong>, with books, movies and music at 14.6%. On eBay UK, business sellers pay roughly <strong>12.8% + £0.30</strong> for most categories, with books and media closer to 9.2%.",
  "Since 2021, eBay has run its own <strong>managed payments</strong> system, so payment processing is bundled into the final value fee. There is no longer a separate PayPal fee to add on top — the percentage you see already includes card and payment processing. This calculator surfaces the processing slice embedded in your FVF so you can see exactly where the money goes.",
  "Your <strong>net profit</strong> is what remains after eBay&apos;s fees and your own costs: <em>Net Profit = Sale Price − Total eBay Fees − Item Cost − Shipping Cost</em>. The profit margin expresses that as a percentage of the sale price, which is the single most useful number for pricing and sourcing decisions.",
  "A major 2024 change: <strong>private (non-business) sellers on eBay UK now sell for free</strong> — no final value or insertion fees on most categories. Business sellers and all US sellers still pay the standard final value fee, which is what this calculator models.",
];

const rateTable = {
  title: "2024–2025 eBay Final Value Fees",
  headers: ["Marketplace / Category", "Final Value Fee", "Per-Order Fee"],
  rows: [
    ["eBay US — Most categories", "13.25%", "$0.30"],
    ["eBay US — Books, Movies & Music", "14.60%", "$0.30"],
    ["eBay UK (business) — Most categories", "12.80%", "£0.30"],
    ["eBay UK (business) — Books & Media", "9.20%", "£0.30"],
    ["eBay UK (private sellers)", "Free since Oct 2024", "—"],
    ["Payment processing", "Included in FVF", "—"],
  ],
};

const howToSteps = [
  "Choose your marketplace — £ eBay UK or $ eBay US — to apply the correct fee structure and currency.",
  "Enter the sale price (the total amount the buyer pays, including any shipping they cover).",
  "Select the item category to apply the right final value fee percentage.",
  "Add your item cost and shipping cost to calculate true net profit and margin.",
  "Read the breakdown instantly: final value fee, total eBay fees, net profit, and profit margin.",
];

const staticFaqs = [
  {
    q: "How are eBay fees calculated?",
    a: "eBay fees are calculated as a final value fee — a percentage of the total amount the buyer pays (item price plus any shipping they cover) — plus a small fixed fee per order. For most US categories this is 13.25% + $0.30; on eBay UK business accounts it is around 12.8% + £0.30. Because eBay uses managed payments, card and payment processing are already included in that percentage, so there is nothing extra to add.",
  },
  {
    q: "What is the eBay final value fee?",
    a: "The final value fee (FVF) is eBay's main selling fee, charged only when your item sells. It is a percentage of the total transaction amount plus a fixed per-order fee. The standard US rate is 13.25% for most categories (14.6% for books, movies and music), while eBay UK business sellers pay about 12.8% for most categories. The FVF includes payment processing, so it replaces the old eBay-fee-plus-PayPal-fee model.",
  },
  {
    q: "How much does eBay charge per sale in the UK?",
    a: "For UK business sellers, eBay charges roughly 12.8% of the total sale plus a £0.30 fixed fee per order on most categories, with lower rates for books and media (around 9.2%). Since October 2024, private (non-business) sellers on eBay UK pay no selling fees on most categories — the buyer covers a small regulatory fee instead. This calculator models the business-seller fee structure.",
  },
  {
    q: "How do I calculate my profit after eBay fees?",
    a: "Subtract every cost from your sale price: Net Profit = Sale Price − Total eBay Fees − Item Cost − Shipping Cost. For example, a £50 sale with a 12.8% + £0.30 fee (£6.70), a £15 item cost and £4 postage leaves £24.30 net profit — a 48.6% margin. This calculator does the maths instantly and also shows your effective fee rate so you can compare listings.",
  },
  {
    q: "Are eBay fees different for business sellers?",
    a: "Yes. On eBay UK the difference is significant: private sellers now sell for free on most categories, while business sellers pay the standard final value fee (around 12.8% + £0.30). Business sellers may also subscribe to an eBay Shop for reduced fees and more free listings. In the US, business and individual sellers pay the same final value fee, but high-volume sellers can qualify for Top Rated Seller discounts.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: staticFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
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
        rateTable={rateTable}
        howToSteps={howToSteps}
      />
    </>
  );
}

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { siteUrl } from "@/lib/siteConfig";

const CALC_SLUG = "amazon-fba-calculator";
const CALC_NAME = "Amazon FBA Calculator";
const PAGE_TITLE = "Amazon FBA Calculator 2026 – FBA Fees & Profit (UK & US)";
const CALC_DESCRIPTION =
  "See your real Amazon profit per unit in seconds — referral fees, FBA fulfilment fees, ROI and margin for UK & US sellers. Free, no sign-up.";

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
  "Selling on Amazon with <strong>Fulfilment by Amazon (FBA)</strong> means two main fees come out of every sale: the <strong>referral fee</strong> (a percentage of the sale price) and the <strong>FBA fulfilment fee</strong> (a flat per-unit charge for picking, packing and shipping). This calculator estimates both, then subtracts your cost of goods to show net profit, profit margin and return on investment (ROI).",
  "The <strong>referral fee</strong> is typically <strong>15% for most categories</strong>, dropping to 8% for consumer electronics and computers, and rising to 17% for clothing and accessories. A minimum referral fee of $0.30 (£0.25) applies to low-priced items. These percentages are the same on Amazon US and Amazon UK.",
  "The <strong>FBA fulfilment fee</strong> depends on your product&apos;s size tier and weight. Amazon sorts items into small standard, large standard and oversize tiers based on dimensions and weight, then charges a flat fee per unit. Enter your length, width, height and weight — in cm/kg or inches/lb — and the calculator classifies the size tier automatically.",
  "Your <strong>net profit</strong> is <em>Sale Price − Referral Fee − FBA Fulfilment Fee − Cost of Goods</em>. ROI is net profit divided by your cost of goods. A healthy FBA product usually targets a margin above 15–20% and an ROI above 50–100% after all Amazon fees, leaving room for PPC advertising and returns.",
];

const rateTable = {
  title: "2024–2025 Amazon Referral Fees by Category",
  headers: ["Category", "Referral Fee", "Minimum Fee"],
  rows: [
    ["Most categories", "15%", "$0.30 / £0.25"],
    ["Consumer Electronics", "8%", "$0.30 / £0.25"],
    ["Computers", "8%", "$0.30 / £0.25"],
    ["Clothing & Accessories", "17%", "$0.30 / £0.25"],
    ["Home & Kitchen", "15%", "$0.30 / £0.25"],
    ["Toys & Games", "15%", "$0.30 / £0.25"],
  ],
};

const howToSteps = [
  "Choose your marketplace — £ Amazon UK or $ Amazon US — and your preferred units (cm/in and kg/lb).",
  "Enter the product sale price and select the category to set the referral fee rate.",
  "Add the cost of goods (your landed cost per unit).",
  "Enter the product dimensions and weight so the calculator can estimate the FBA fulfilment fee from the size tier.",
  "Review your referral fee, FBA fee, total Amazon fees, net profit, margin and ROI instantly.",
];

const staticFaqs = [
  {
    q: "How does Amazon FBA calculate fees?",
    a: "Amazon FBA charges two core fees per sale: a referral fee (a percentage of the total sale price, usually 15%) and a fulfilment fee (a flat per-unit charge based on your product's size tier and weight). Amazon sorts products into small standard, large standard and oversize tiers using dimensions and weight, then applies a fixed fee. Optional charges such as monthly storage and long-term storage are billed separately.",
  },
  {
    q: "What is the Amazon referral fee?",
    a: "The referral fee is Amazon's commission on each sale, charged as a percentage of the total price (item plus any shipping the buyer pays). Most categories are 15%, but consumer electronics and computers are 8%, and clothing and accessories are 17%. A minimum referral fee of $0.30 (£0.25) applies to inexpensive items. The same percentages apply on Amazon US and Amazon UK.",
  },
  {
    q: "How much does Amazon FBA cost per unit?",
    a: "For a typical small-to-medium standard-size item, the FBA fulfilment fee is roughly $3–$6 (about £2–£4) per unit, depending on size and weight. Add the referral fee (usually 15% of the sale price) and you can expect total Amazon fees of around 25–35% of the sale price for many products. Heavier or oversize items cost considerably more to fulfil.",
  },
  {
    q: "Is Amazon FBA profitable in 2025?",
    a: "Amazon FBA can be profitable in 2025, but margins are tighter than in earlier years because of higher referral and fulfilment fees plus rising advertising costs. Successful sellers typically target a net margin above 15–20% and an ROI above 50–100% after all Amazon fees. Sourcing well, choosing the right category, and keeping products in efficient size tiers are the biggest levers — use this calculator to check the numbers before you buy inventory.",
  },
  {
    q: "What is the difference between FBA and FBM fees?",
    a: "With FBA (Fulfilment by Amazon) you pay a referral fee plus an FBA fulfilment fee, and Amazon stores, picks, packs and ships your orders. With FBM (Fulfilment by Merchant) you pay the same referral fee but no FBA fulfilment fee — instead you cover your own packing and postage. FBA usually wins the Buy Box more easily and qualifies for Prime, while FBM can be cheaper for large, heavy or slow-selling items where FBA fees are high.",
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

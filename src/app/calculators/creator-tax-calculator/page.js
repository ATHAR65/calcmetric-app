import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "creator-tax-calculator";
const CALC_NAME = "Content Creator Tax Calculator 2026";
const CALC_DESCRIPTION = "Estimate self-employment tax, federal income tax, quarterly payments, and take-home on YouTube, Twitch, TikTok, sponsorship, and membership income.";

const seoContent = [
  "All creator income — <strong>AdSense, Twitch subs and bits, TikTok Creator Rewards, sponsorships, affiliates, donations, memberships, merch</strong> — is self-employment income: 15.3% SE tax plus federal income tax. Platforms issue 1099s at $600+.",
  "Even <strong>free products from brand deals are taxable</strong> at fair market value. In exchange, your gear, software, editors, home studio, and internet share are deductible, and most creators get the <strong>20% QBI deduction</strong>.",
  "Set aside <strong>25–30% of net income</strong> for federal taxes and pay quarterly (April, June, September, January) if you'll owe $1,000+.",
];

const creatorFormula = `Net Profit = all creator income − expenses
SE Tax = Net × 92.35% × 15.3%
Taxable = Net − ½ SE − standard deduction − 20% QBI
Federal Tax = brackets applied to Taxable
Quarterly = (SE + Federal) ÷ 4

Example: $30K payouts + $15K sponsors + $5K members, $8K expenses
  Net = $42,000 → SE ≈ $5,934 → Federal ≈ $1,567
  Total ≈ $7,501 (≈17.9% of net) → $1,875/quarter`;

const creatorRateTable = {
  title: "Creator Taxes at a Glance (2026)",
  headers: ["Income Type", "Taxable?", "1099 Issuer", "Notes"],
  rows: [
    ["AdSense / platform payouts", "Yes", "Google / Amazon / TikTok", "1099 at $600+"],
    ["Sponsorships & brand deals", "Yes", "Brand or agency", "Free products count at FMV"],
    ["Bits, tips, donations", "Yes", "Platform", "\"Donation\" label doesn't matter"],
    ["Merch profit", "Yes", "—", "Revenue − product costs"],
  ],
};

const creatorHowToSteps = [
  "Enter your annual platform payouts as received (AdSense, Twitch, TikTok).",
  "Add sponsorship/brand income and other income (merch, tips, Patreon).",
  "Enter your business expenses for the year.",
  "Select filing status and review SE tax, federal tax, and your quarterly amount.",
];

const staticFaqs = [
  { q: "Do YouTubers and streamers have to pay taxes?", a: "Yes. All creator income is self-employment income subject to 15.3% SE tax plus federal income tax. Platforms issue 1099s once you earn $600+, and the IRS receives copies." },
  { q: "How much should content creators set aside for taxes?", a: "25–30% of net income is the safe rule for federal taxes, plus your state's rate. If you'll owe $1,000+, pay quarterly estimates in April, June, September, and January." },
  { q: "Are free products from brand deals taxable?", a: "Yes — products received in exchange for content count as taxable income at their fair market value, even when no cash changes hands." },
  { q: "Can creators deduct their PC, camera, and software?", a: "Yes, to the extent of business use. Equipment can often be fully expensed in the year of purchase under Section 179 or bonus depreciation." },
  { q: "Do Twitch bits and donations count as taxable income?", a: "Yes — bits, donations, tips, and channel memberships are all taxable business income regardless of being called donations." },
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
    headline: "Content Creator Tax Calculator 2026 — YouTube, Twitch & TikTok Taxes",
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
        formula={creatorFormula}
        rateTable={creatorRateTable}
        howToSteps={creatorHowToSteps}
      />
    </>
  );
}

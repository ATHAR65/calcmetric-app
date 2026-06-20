import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "etsy-fee-calculator-2026";
const CALC_NAME = "Etsy Fee Calculator 2026";
const CALC_DESCRIPTION = "Calculate total Etsy fees per sale including listing, transaction & payment processing. Free Etsy profit calculator for sellers.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Etsy charges sellers multiple fees that stack on top of each other. The three core fees are: a <strong>$0.20 listing fee</strong> per item (charged when you list and when you renew, every 4 months), a <strong>6.5% transaction fee</strong> on the total sale price (including shipping), and a <strong>3% + $0.25 payment processing fee</strong> through Etsy Payments. Together these fees total roughly <strong>12% to 13% of your sale price</strong>.",
  "The 6.5% transaction fee is Etsy's largest mandatory fee and applies to the <strong>total order amount including shipping charges</strong>. If you sell a $30 item with $5 shipping, Etsy takes 6.5% of $35 = $2.28 in transaction fees alone. This is why many sellers build shipping costs into the item price and offer \"free shipping\" — the transaction fee applies either way, but free shipping items rank higher in Etsy search.",
  "Etsy Payments processing varies by country. In the US, it is <strong>3% + $0.25 per transaction</strong>. This processes credit cards, debit cards, PayPal, Apple Pay, Google Pay, and Etsy gift cards. You cannot opt out of Etsy Payments in most countries — it is mandatory for all sellers in supported regions.",
  "Optional fees include <strong>Etsy Ads</strong> (you set a daily budget, minimum $1/day, and pay per click), <strong>Offsite Ads</strong> (15% fee on sales driven by Etsy's external advertising — mandatory for sellers earning $10,000+/year, optional below that threshold), and <strong>Etsy Plus</strong> ($10/month for advanced shop customization, restock notifications, and credits for listings and Etsy Ads).",
];

const etsyRateTable = {
  title: "2026 Etsy Fee Breakdown",
  headers: ["Fee Type", "Amount", "Applied To"],
  rows: [
    ["Listing Fee", "$0.20", "Per listing (every 4 months or per sale)"],
    ["Transaction Fee", "6.5%", "Total sale price + shipping"],
    ["Payment Processing (US)", "3% + $0.25", "Per transaction via Etsy Payments"],
    ["Offsite Ads (if applicable)", "15% or 12%", "On sales from Etsy's external ads"],
    ["Etsy Ads (optional)", "CPC varies", "Per click, you set daily budget"],
    ["Etsy Plus (optional)", "$10/month", "Advanced features, 15 listing credits"],
    ["Currency Conversion", "2.5%", "For sales in non-shop currency"],
    ["Regulatory Operating Fee", "0.6%–1.2%", "Varies by country"],
  ],
};

const etsyFormula = `Total Etsy Fees = Listing Fee + Transaction Fee + Processing Fee
Listing Fee = $0.20 per item sold (+ $0.20 per multi-quantity)
Transaction Fee = (Item Price + Shipping Price) × 6.5%
Processing Fee = (Item Price + Shipping) × 3% + $0.25
Net Profit = Sale Price − Etsy Fees − Cost of Goods − Shipping Cost`;

const etsyHowToSteps = [
  "Enter your item's sale price and the shipping price you charge (or $0 for free shipping).",
  "Enter your cost of goods — materials, packaging, labels, and your time if you want to factor in labor.",
  "Select whether Offsite Ads apply (mandatory if you earn $10,000+/year on Etsy).",
  "Review the fee breakdown: listing fee, transaction fee, processing fee, and your net profit per sale with margin percentage.",
];

const staticFaqs = [
  { q: "What percentage does Etsy take from each sale?", a: "Etsy takes approximately 12% to 13% of each sale when you combine the 6.5% transaction fee, 3% + $0.25 payment processing fee, and $0.20 listing fee. If Offsite Ads are active and drive the sale, Etsy takes an additional 15% (or 12% for shops earning $10,000+/year). On a $25 item with $5 free shipping built in, total Etsy fees are roughly $3.30." },
  { q: "Does Etsy charge listing fees?", a: "Yes. Etsy charges $0.20 per listing, and listings expire and renew automatically every 4 months (another $0.20). When an item sells, the listing fee is also charged again. For multi-quantity listings, each unit sold triggers a new $0.20 listing fee. The listing fee applies whether or not your item sells." },
  { q: "What is Etsy's transaction fee in 2026?", a: "Etsy's transaction fee is 6.5% of the total order amount, which includes the item price plus shipping charges. This is Etsy's largest mandatory fee. If you sell a $50 item with $8 shipping, the transaction fee is $3.77 (6.5% of $58). This fee was raised from 5% to 6.5% in 2022 and has remained at that level." },
  { q: "Is Etsy Plus worth it for sellers?", a: "Etsy Plus costs $10/month and gives you 15 listing credits ($3 value), $5 in Etsy Ads credits, advanced shop customization, and restock request features. It is only worth it if you actively use Etsy Ads and have a high-traffic shop. The listing and ad credits cover $8 of the $10 cost, so you are paying about $2/month for the extra features. Most small sellers skip it." },
  { q: "Can I avoid Etsy Offsite Ads fees?", a: "If your shop earned under $10,000 in the past 365 days, you can opt out of Offsite Ads in your shop settings. If you earned $10,000 or more, Offsite Ads are mandatory and you pay 12% (instead of 15%) on any sale attributed to Etsy's external advertising on Google, Facebook, Instagram, and Pinterest. There is no way to opt out once you exceed the threshold." },
  { q: "How do Etsy fees compare to Amazon and Shopify?", a: "Etsy's ~12% total fee is lower than Amazon's ~15% referral fee + FBA fulfillment fees (which can total 30%+). Shopify charges $39/month (Basic plan) plus 2.9% + $0.30 per transaction with no listing or transaction percentage fee — making Shopify cheaper at higher volumes. Etsy's advantage is built-in marketplace traffic; Shopify requires you to drive your own traffic." },
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
        formula={etsyFormula}
        rateTable={etsyRateTable}
        howToSteps={etsyHowToSteps}
      />
    </>
  );
}

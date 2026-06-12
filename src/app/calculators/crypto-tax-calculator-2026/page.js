import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "crypto-tax-calculator-2026";
const CALC_NAME = "Crypto Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate your crypto capital gains tax for 2026. Covers short & long-term rates, staking income, NFTs, and DeFi. Free tool.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The IRS classifies cryptocurrency as <strong>property</strong>, not currency. Every time you sell, trade, spend, or exchange crypto, it triggers a taxable event. This includes swapping Bitcoin for Ethereum, spending crypto on purchases, selling for USD, and receiving crypto as payment for services. Simply holding crypto or transferring between your own wallets is not taxable.",
  "Capital gains tax on crypto follows the same short-term/long-term rules as stocks. <strong>Short-term gains</strong> (held 1 year or less) are taxed at your ordinary income rate (10%–37%). <strong>Long-term gains</strong> (held over 1 year) are taxed at preferential rates of 0%, 15%, or 20%. The holding period starts the day after you acquire the asset. High earners may also owe the 3.8% Net Investment Income Tax (NIIT).",
  "Starting in 2026, centralized crypto exchanges are required to report transactions on <strong>Form 1099-DA</strong> (Digital Assets). This means the IRS will have a direct record of your crypto sales. You report crypto capital gains on <strong>Schedule D and Form 8949</strong>. Crypto received as income (mining, staking, airdrops, payment for services) is reported as ordinary income at fair market value on the date received.",
  "Common taxable crypto events people miss: <strong>staking rewards</strong> are taxed as ordinary income when received; <strong>airdrops</strong> are taxable income at fair market value; <strong>DeFi yields</strong> and liquidity pool rewards are income; <strong>NFT sales</strong> are capital gains (or collectibles at 28% if held as art); and <strong>crypto-to-crypto swaps</strong> are taxable even though no fiat currency is involved.",
];

const cryptoRateTable = {
  title: "2026 Crypto Tax Rates",
  headers: ["Event Type", "Tax Treatment", "Rate"],
  rows: [
    ["Sell crypto (held ≤1 year)", "Short-term capital gain", "10%–37% (ordinary income)"],
    ["Sell crypto (held >1 year)", "Long-term capital gain", "0%, 15%, or 20%"],
    ["Crypto-to-crypto swap", "Capital gain/loss", "Same as sell"],
    ["Staking rewards", "Ordinary income", "10%–37% when received"],
    ["Mining income", "Ordinary income + SE tax", "10%–37% + 15.3%"],
    ["Airdrop received", "Ordinary income", "Fair market value at receipt"],
    ["NFT sale (collectible)", "Capital gain", "Up to 28%"],
    ["DeFi yield/LP rewards", "Ordinary income", "10%–37% when received"],
    ["Gift crypto", "No tax event", "Recipient inherits cost basis"],
  ],
};

const cryptoHowToSteps = [
  "Enter the purchase price (cost basis) and sale price for each crypto transaction, or import your total gains/losses.",
  "Select short-term or long-term holding period for each position.",
  "Add any crypto income: staking rewards, mining income, airdrops, or payment received in crypto (valued at fair market value on the date received).",
  "Review your total capital gains tax, income tax on crypto earnings, and combined tax bill. The calculator accounts for the $3,000 annual loss deduction limit.",
];

const staticFaqs = [
  { q: "Do I pay tax on crypto in the US?", a: "Yes. The IRS treats cryptocurrency as property. Selling, trading, swapping, or spending crypto triggers capital gains tax. Receiving crypto as income (mining, staking, airdrops, payment for work) is taxed as ordinary income. Simply buying and holding crypto is not a taxable event. The IRS now requires you to answer a crypto question on Form 1040." },
  { q: "What is the crypto capital gains tax rate for 2026?", a: "Short-term gains (held 1 year or less) are taxed at your ordinary income rate, from 10% to 37%. Long-term gains (held over 1 year) are taxed at 0%, 15%, or 20% depending on your income. The 0% rate applies to single filers with taxable income under $48,350. High earners may also owe the 3.8% NIIT surtax." },
  { q: "Do I owe tax if I did not sell my crypto?", a: "Generally no. Holding crypto (HODLing) is not a taxable event. However, you do owe tax if you received crypto through staking, mining, airdrops, or as payment — that is income at the time of receipt regardless of whether you sell. Transferring crypto between your own wallets is also not taxable." },
  { q: "How do I report crypto on my tax return?", a: "Report crypto capital gains and losses on Schedule D and Form 8949. List each transaction: date acquired, date sold, proceeds, cost basis, and gain/loss. Crypto income (staking, mining, payments) goes on Schedule 1 or Schedule C if self-employed. Starting in 2026, exchanges send Form 1099-DA directly to the IRS." },
  { q: "Can I use crypto losses to offset other income?", a: "Crypto losses first offset crypto gains. If total capital losses exceed total gains, you can deduct up to $3,000 per year ($1,500 married filing separately) against ordinary income. Excess losses carry forward to future tax years. Note: the wash sale rule does not currently apply to crypto (unlike stocks), but legislation to close this gap has been proposed." },
  { q: "Is staking crypto taxable?", a: "Yes. Staking rewards are taxed as ordinary income at fair market value when you receive them. If you earn $500 in ETH staking rewards, that is $500 of taxable income regardless of what happens to the price later. When you eventually sell the staked crypto, you owe capital gains tax on any appreciation above the fair market value at the time you received it." },
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
        rateTable={cryptoRateTable}
        howToSteps={cryptoHowToSteps}
      />
    </>
  );
}

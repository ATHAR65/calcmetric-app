import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "capital-gains-tax-calculator";
const CALC_NAME = "Capital Gains Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate your 2026 capital gains tax. Covers short-term, long-term rates, NIIT surcharge, and state taxes for stocks, crypto, and real estate.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Capital gains tax applies when you sell an asset for more than you paid for it. The tax rate depends on how long you held the asset. <strong>Short-term capital gains</strong> (assets held one year or less) are taxed at your ordinary income tax rate, which can be as high as 37% for 2026. <strong>Long-term capital gains</strong> (assets held longer than one year) receive preferential tax rates of 0%, 15%, or 20% depending on your taxable income and filing status.",
  "In addition to the base capital gains rates, high earners may owe the <strong>3.8% Net Investment Income Tax (NIIT)</strong>. This surtax applies when your modified adjusted gross income exceeds $200,000 (single) or $250,000 (married filing jointly). It applies to the lesser of your net investment income or the amount your MAGI exceeds the threshold.",
  "Capital losses can offset capital gains dollar for dollar. If your total capital losses exceed your gains, you can deduct up to <strong>$3,000 per year</strong> ($1,500 if married filing separately) against ordinary income. Unused losses carry forward to future tax years indefinitely.",
  "Certain assets receive special treatment: primary residences qualify for the <strong>Section 121 exclusion</strong> ($250K single / $500K married), collectibles are taxed at a flat 28%, and qualified small business stock (Section 1202) may be partially or fully excludable. Crypto assets including Bitcoin, Ethereum, and NFTs are treated as property and follow standard short-term/long-term capital gains rules.",
];

const cgFormula = `Capital Gain = Sale Price − Cost Basis − Selling Costs
Cost Basis = Purchase Price + Improvements + Buying Costs
Short-Term Tax = Capital Gain × Ordinary Income Rate (10%–37%)
Long-Term Tax = Capital Gain × Preferential Rate (0%, 15%, or 20%)
NIIT = 3.8% × lesser of (Net Investment Income, MAGI − Threshold)`;

const cgRateTable = {
  title: "2026 Long-Term Capital Gains Tax Brackets",
  headers: ["Filing Status", "0% Rate", "15% Rate", "20% Rate"],
  rows: [
    ["Single", "Up to $48,350", "$48,351 – $533,400", "Over $533,400"],
    ["Married Filing Jointly", "Up to $96,700", "$96,701 – $600,050", "Over $600,050"],
    ["Married Filing Separately", "Up to $48,350", "$48,351 – $300,025", "Over $300,025"],
    ["Head of Household", "Up to $64,750", "$64,751 – $566,700", "Over $566,700"],
  ],
};

const cgHowToSteps = [
  "Enter the sale price and your cost basis (purchase price plus improvements and transaction costs).",
  "Select short-term or long-term holding period. Short-term is one year or less; long-term is more than one year.",
  "Enter your filing status and total taxable income so the calculator can determine your applicable bracket.",
  "Review the results: your capital gain amount, federal tax owed, NIIT if applicable, and effective tax rate.",
];

const staticFaqs = [
  { q: "What is the difference between short-term and long-term capital gains?", a: "Short-term capital gains apply to assets held one year or less and are taxed at your ordinary income tax rate (10% to 37% in 2026). Long-term capital gains apply to assets held longer than one year and are taxed at preferential rates of 0%, 15%, or 20% depending on your income. The holding period starts the day after you acquire the asset." },
  { q: "How does the 3.8% Net Investment Income Tax work?", a: "NIIT applies when your modified adjusted gross income exceeds $200,000 (single) or $250,000 (married filing jointly). The tax is 3.8% of the lesser of your net investment income or the amount your MAGI exceeds the threshold. Net investment income includes capital gains, dividends, interest, rental income, and royalties." },
  { q: "How are crypto capital gains taxed in 2026?", a: "Cryptocurrency is treated as property by the IRS. Selling, trading, or spending crypto triggers a taxable event. Short-term crypto gains (held ≤1 year) are taxed as ordinary income. Long-term crypto gains (held >1 year) are taxed at 0%, 15%, or 20%. Starting in 2026, centralized exchanges report transactions on Form 1099-DA." },
  { q: "Can I offset capital gains with losses?", a: "Yes. Capital losses offset capital gains dollar for dollar — short-term losses offset short-term gains first, then long-term gains, and vice versa. If total losses exceed total gains, you can deduct up to $3,000 per year ($1,500 married filing separately) against ordinary income. Remaining losses carry forward to future years." },
  { q: "What is the Section 121 home sale exclusion?", a: "If you sell your primary residence and have lived in it for at least 2 of the past 5 years, you can exclude up to $250,000 in capital gains (single) or $500,000 (married filing jointly) from taxation. This exclusion can be used once every two years. Gains exceeding the exclusion are taxed at applicable capital gains rates." },
  { q: "Do I owe capital gains tax on inherited assets?", a: "Inherited assets receive a stepped-up basis equal to fair market value at the date of the decedent's death. You only owe capital gains tax on appreciation after inheritance. For example, if you inherit stock worth $100,000 and sell for $110,000, your taxable gain is $10,000 regardless of what the original owner paid." },
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
        formula={cgFormula}
        rateTable={cgRateTable}
        howToSteps={cgHowToSteps}
      />
    </>
  );
}

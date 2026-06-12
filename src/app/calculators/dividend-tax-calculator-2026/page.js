import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "dividend-tax-calculator-2026";
const CALC_NAME = "Dividend Tax Calculator 2026 — UK Dividend";
const CALC_DESCRIPTION = "Calculate UK dividend tax for 2026/27. Covers basic, higher and additional rate taxpayers, the £500 allowance, and salary vs dividend planning for directors.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "UK dividends are taxed at rates separate from employment income: <strong>8.75% for basic rate</strong> taxpayers, <strong>33.75% for higher rate</strong>, and <strong>39.35% for additional rate</strong>. Every individual receives a <strong>£500 dividend allowance</strong> (reduced from £1,000 in 2023/24), meaning the first £500 of dividend income is tax-free regardless of your tax band.",
  "Dividends are taxed after your personal allowance and other income. If your salary uses up the personal allowance (£12,570) and basic rate band (up to £50,270), dividends will be taxed at the higher rate from the first pound above the allowance. This <strong>stacking order</strong> is critical for tax planning — dividends sit on top of employment income.",
  "Company directors commonly pay themselves a small salary (typically £12,570 to use the personal allowance) and take the rest as dividends. This is tax-efficient because dividends avoid <strong>National Insurance</strong> entirely — saving 8% employee NI and 13.8% employer NI compared to salary. On £50,000 of income, the salary-plus-dividends strategy saves approximately <strong>£5,000–£7,000</strong> per year.",
  "Dividends are effectively taxed twice: the company pays <strong>25% Corporation Tax</strong> on profits before distributing dividends, then you pay dividend tax on what you receive. The combined effective tax rate on £100 of company profit distributed as dividends is approximately 46.3% for higher-rate taxpayers (25% CT + 33.75% on the remaining £75).",
];

const divFormula = `Dividend Tax = (Dividends − £500 Allowance) × Tax Rate
  Basic rate: 8.75%
  Higher rate: 33.75%
  Additional rate: 39.35%

Example: £30,000 dividends, higher-rate taxpayer
  Taxable = £30,000 − £500 = £29,500
  Tax = £29,500 × 33.75% = £9,956`;

const divRateTable = {
  title: "2025/26 UK Dividend Tax Rates",
  headers: ["Band", "Income Range", "Dividend Rate"],
  rows: [
    ["Dividend Allowance", "First £500", "0%"],
    ["Basic Rate", "£12,571 – £50,270", "8.75%"],
    ["Higher Rate", "£50,271 – £125,140", "33.75%"],
    ["Additional Rate", "Over £125,140", "39.35%"],
  ],
};

const divHowToSteps = [
  "Enter your total annual dividend income from all sources (company dividends, investment trusts, funds).",
  "Enter your other income (salary, rental, etc.) so the calculator can determine which tax band your dividends fall into.",
  "The calculator automatically applies the £500 dividend allowance and the correct marginal rate.",
  "Review your dividend tax liability, effective rate, and net dividend income after tax.",
];

const staticFaqs = [
  { q: "What is the UK dividend allowance in 2025/26?", a: "The dividend allowance is £500 per year for 2025/26. This was reduced from £1,000 in 2023/24 and £2,000 in 2022/23. The first £500 of dividend income is tax-free regardless of your income tax band. Any dividends above £500 are taxed at 8.75% (basic), 33.75% (higher), or 39.35% (additional rate)." },
  { q: "How much tax do I pay on £20,000 of dividends?", a: "It depends on your other income. If you have a salary of £12,570 (using the personal allowance), £20,000 of dividends falls within the basic rate band. Tax = (£20,000 − £500 allowance) × 8.75% = £1,706. If you earn £50,000 salary, the dividends push into the higher rate band: tax is approximately £6,581." },
  { q: "Are dividends taxed twice in the UK?", a: "Effectively yes. The company pays 25% Corporation Tax on profits before distributing dividends. You then pay dividend tax on what you receive. On £100 of company profit, after 25% CT you receive £75, then pay dividend tax on that. The combined rate for a higher-rate taxpayer is approximately 46.3%." },
  { q: "Is it more tax-efficient to take salary or dividends?", a: "A mix is usually optimal. Take salary up to the personal allowance (£12,570) to build NI credits, then take dividends above that to avoid National Insurance (8% employee + 13.8% employer NI). On £50,000 total income, this strategy saves approximately £5,000–£7,000 compared to taking all salary." },
  { q: "Do I need to declare dividends to HMRC?", a: "Yes, if your dividends exceed £500 (the allowance). You can report through Self Assessment, or if dividends are between £500 and £10,000, you can call HMRC to have your tax code adjusted. Dividends within an ISA or pension are completely tax-free and do not need to be reported." },
  { q: "Are dividends in an ISA tax-free?", a: "Yes. Dividends received on shares held within a Stocks and Shares ISA are completely tax-free — no dividend tax and no capital gains tax. The annual ISA allowance is £20,000 for 2025/26. This makes ISAs extremely valuable for dividend investors, especially higher and additional rate taxpayers." },
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
        formula={divFormula}
        rateTable={divRateTable}
        howToSteps={divHowToSteps}
      />
    </>
  );
}

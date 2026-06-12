import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "income-tax-calculator-uk";
const CALC_NAME = "UK Income Tax Calculator 2025–26";
const CALC_DESCRIPTION = "Estimate your UK income tax and National Insurance for 2025-26. Covers PAYE, self-employed & dividend income with HMRC rates. Free.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The UK income tax system uses a <strong>Personal Allowance and three tax bands</strong>. For the 2025/26 tax year, the Personal Allowance is <strong>£12,570</strong> — you pay no income tax on the first £12,570 you earn. Above that, the Basic Rate is 20% on income from £12,571 to £50,270, the Higher Rate is 40% on income from £50,271 to £125,140, and the Additional Rate is 45% on income above £125,140.",
  "An important quirk: your Personal Allowance reduces by <strong>£1 for every £2 earned over £100,000</strong>. This effectively creates a hidden 60% tax band between £100,000 and £125,140. For example, someone earning £110,000 loses £5,000 of their Personal Allowance, meaning that extra £10,000 of income is taxed at 40% plus the lost allowance — an effective 60% marginal rate on that band.",
  "National Insurance contributions (NICs) add to the tax burden. Employed workers pay <strong>Class 1 NICs: 8% on earnings between £12,570 and £50,270</strong>, plus 2% on earnings above £50,270 (2025/26 rates). Self-employed workers pay Class 4 NICs: 6% on profits between £12,570 and £50,270, plus 2% above £50,270, and a flat Class 2 contribution of £3.45 per week if profits exceed £12,570.",
  "Dividend income has its own tax rates and a separate <strong>£500 tax-free dividend allowance</strong> (reduced from £1,000 in 2024/25). Above the allowance, dividends are taxed at 8.75% (basic rate), 33.75% (higher rate), or 39.35% (additional rate). Company directors who pay themselves a small salary plus dividends often structure this to minimize NICs while staying within the basic rate band.",
];

const ukRateTable = {
  title: "2025/26 UK Income Tax Bands",
  headers: ["Band", "Taxable Income", "Rate"],
  rows: [
    ["Personal Allowance", "Up to £12,570", "0%"],
    ["Basic Rate", "£12,571 – £50,270", "20%"],
    ["Higher Rate", "£50,271 – £125,140", "40%"],
    ["Additional Rate", "Over £125,140", "45%"],
    ["Hidden 60% band", "£100,000 – £125,140", "~60% effective"],
    ["Class 1 NI (employed)", "£12,571 – £50,270", "8%"],
    ["Class 1 NI (above UEL)", "Over £50,270", "2%"],
    ["Class 4 NI (self-employed)", "£12,571 – £50,270", "6%"],
  ],
};

const ukHowToSteps = [
  "Enter your annual gross income before any deductions or tax.",
  "Select your employment type: employed (PAYE), self-employed, or director taking salary plus dividends.",
  "Enter any pension contributions, student loan plan, and whether you have the Marriage Allowance transfer.",
  "Review your breakdown: income tax, National Insurance, student loan repayments, take-home pay, and effective tax rate. The calculator shows monthly and weekly equivalents.",
];

const staticFaqs = [
  { q: "What is the Personal Allowance for 2025-26?", a: "The Personal Allowance for the 2025/26 tax year is £12,570. You pay no income tax on the first £12,570 you earn. However, the allowance reduces by £1 for every £2 of income above £100,000, disappearing entirely at £125,140. The Personal Allowance has been frozen at £12,570 since 2021/22." },
  { q: "How much National Insurance do I pay?", a: "Employed workers pay Class 1 NICs: 8% on earnings between £12,570 and £50,270, and 2% on earnings above £50,270. Self-employed workers pay Class 4 NICs: 6% on profits between £12,570 and £50,270, and 2% above £50,270, plus Class 2 at £3.45/week. Employers also pay 13.8% on earnings above £9,100 (not deducted from your pay)." },
  { q: "What are the UK tax brackets for 2025-26?", a: "The three main tax bands are: Basic Rate at 20% (£12,571–£50,270), Higher Rate at 40% (£50,271–£125,140), and Additional Rate at 45% (over £125,140). Scottish taxpayers have different bands with rates from 19% to 48%. The Personal Allowance (£12,570) is tax-free." },
  { q: "How is self-employed income taxed in the UK?", a: "Self-employed income is subject to income tax at the same rates as employment income (20%/40%/45%) plus Class 4 National Insurance (6% on profits £12,570–£50,270, 2% above). You file a Self Assessment tax return by 31 January following the end of the tax year. Payments on account are due 31 January and 31 July each year." },
  { q: "What is the 60% tax trap?", a: "When your income exceeds £100,000, your Personal Allowance reduces by £1 for every £2 earned over £100,000. Between £100,000 and £125,140, you effectively pay 40% tax plus lose the 20% value of the Personal Allowance — a 60% marginal rate. Strategies to avoid this include increasing pension contributions or making Gift Aid donations to reduce adjusted net income below £100,000." },
  { q: "How does the Marriage Allowance work?", a: "If one partner earns less than £12,570 and the other is a basic rate taxpayer, you can transfer up to £1,260 of unused Personal Allowance to the higher earner, saving up to £252 per year in tax. Both partners must be married or in a civil partnership. The lower earner applies through HMRC online, and the tax saving is applied through the higher earner's tax code." },
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
        rateTable={ukRateTable}
        howToSteps={ukHowToSteps}
      />
    </>
  );
}

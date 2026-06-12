import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "self-assessment-tax-calculator-uk";
const CALC_NAME = "Self Assessment Tax Calculator UK 2025–26";
const CALC_DESCRIPTION = "Estimate your UK Self Assessment tax bill for 2025–26. Covers income tax, Class 2 & 4 NI, and payments on account. Free HMRC-ready calculator.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "If you are self-employed, a landlord, or have untaxed income above £1,000, you must file a <strong>Self Assessment tax return</strong> with HMRC. The tax year runs from <strong>6 April to 5 April</strong>. For 2025–26, you must register by 5 October 2026 and submit your return online by <strong>31 January 2027</strong>. Late filing incurs an automatic £100 penalty, rising to £10/day after 3 months.",
  "Self-employed workers pay three taxes: <strong>Income Tax</strong> (20% basic rate on £12,571–£50,270, 40% higher rate on £50,271–£125,140, 45% additional rate above £125,140), <strong>Class 2 National Insurance</strong> (£3.45/week if profits exceed £12,570), and <strong>Class 4 National Insurance</strong> (6% on profits between £12,570–£50,270, plus 2% above £50,270).",
  "<strong>Payments on account</strong> are advance payments toward next year's tax bill. If your Self Assessment bill is over £1,000 and less than 80% was collected through PAYE, HMRC requires two payments on account — each 50% of the previous year's bill. Due dates: <strong>31 January</strong> (with the balance) and <strong>31 July</strong>. First year can be a shock — you may pay 150% of your normal bill (current year + first payment on account).",
  "Common <strong>allowable expenses</strong> that reduce your taxable profit: office costs (stationery, phone, internet), travel (business mileage at 45p/mile for first 10,000 miles), clothing (uniforms or protective equipment only), professional subscriptions, marketing costs, and the <strong>trading allowance</strong> (£1,000 tax-free if total self-employed income is below £1,000). You can claim simplified expenses using flat rates or actual costs.",
];

const saFormula = `Self Assessment Tax Bill = Income Tax + Class 2 NI + Class 4 NI

Income Tax (2025–26):
  Personal Allowance: £12,570 (0%)
  Basic Rate: £12,571–£50,270 (20%)
  Higher Rate: £50,271–£125,140 (40%)
  Additional Rate: above £125,140 (45%)

Class 4 NI:
  £12,570–£50,270: 6%
  Above £50,270: 2%

Example: £45,000 self-employed profit
  Income Tax: (£45,000 − £12,570) × 20% = £6,486
  Class 2 NI: £3.45 × 52 = £179
  Class 4 NI: (£45,000 − £12,570) × 6% = £1,946
  Total tax bill: £8,611`;

const saRateTable = {
  title: "Self Assessment Tax Bill by Profit Level (2025–26)",
  headers: ["Annual Profit", "Income Tax", "Class 2 NI", "Class 4 NI", "Total Tax Bill", "Effective Rate"],
  rows: [
    ["£20,000", "£1,486", "£179", "£446", "£2,111", "10.6%"],
    ["£30,000", "£3,486", "£179", "£1,046", "£4,711", "15.7%"],
    ["£45,000", "£6,486", "£179", "£1,946", "£8,611", "19.1%"],
    ["£60,000", "£11,432", "£179", "£2,457", "£14,068", "23.4%"],
    ["£80,000", "£19,432", "£179", "£2,857", "£22,468", "28.1%"],
  ],
};

const saHowToSteps = [
  "Enter your total self-employed income (gross revenue before expenses).",
  "Enter your allowable business expenses to calculate taxable profit.",
  "Add any other income sources (employment, rental, dividends, savings interest).",
  "Review your income tax, Class 2 and Class 4 National Insurance, total tax bill, payments on account for next year, and payment deadlines.",
];

const staticFaqs = [
  { q: "When is the UK Self Assessment deadline?", a: "Key dates for 2025–26 tax year: register by 5 October 2026 if filing for the first time. Paper returns due 31 October 2026. Online returns due 31 January 2027. Payment of tax owed due 31 January 2027. Second payment on account due 31 July 2027. Late filing penalty: £100 immediately, then £10/day after 3 months (up to £900), plus further penalties at 6 and 12 months." },
  { q: "Do I need to file a Self Assessment tax return?", a: "You must file if: you are self-employed with income over £1,000, you are a company director, you have untaxed income (rental, foreign, savings interest above your allowance), your income exceeds £100,000, you need to claim tax relief on pension contributions or charitable donations, or you are a higher-rate taxpayer with capital gains. When in doubt, check HMRC's online tool." },
  { q: "What are payments on account?", a: "Payments on account are advance payments toward your next year's tax bill. Each payment is 50% of the previous year's bill. Due 31 January (with your balance) and 31 July. Example: if your 2024–25 bill was £8,000, you pay two payments on account of £4,000 each for 2025–26. If your actual bill is different, a balancing payment (or refund) is made on 31 January. You can apply to reduce payments on account if income has dropped." },
  { q: "Can I claim expenses on Self Assessment?", a: "Yes — allowable expenses reduce your taxable profit. Common claims: office supplies and equipment, business phone and internet (business portion), travel costs (45p/mile for first 10,000 miles, 25p after), professional subscriptions and training, marketing and advertising, accountancy fees, and use of home as office (£6/week flat rate or proportional actual costs). Keep receipts for 5 years." },
  { q: "What is the trading allowance?", a: "The trading allowance gives £1,000 tax-free for self-employed or miscellaneous income. If your total self-employed gross income is under £1,000, you owe no tax and do not need to register for Self Assessment. If income exceeds £1,000, you can either deduct the £1,000 allowance instead of actual expenses (useful if expenses are low) or deduct actual expenses — you cannot use both." },
  { q: "How much National Insurance do self-employed pay?", a: "Two classes: Class 2 NI is £3.45/week (£179.40/year) if profits exceed £12,570 — this counts toward state pension entitlement. Class 4 NI is 6% on profits between £12,570 and £50,270, plus 2% on profits above £50,270. On £45,000 profit: Class 2 = £179 + Class 4 = £1,946, total NI = £2,125. These rates were reduced from 9%/2% to 6%/2% in April 2024." },
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
        formula={saFormula}
        rateTable={saRateTable}
        howToSteps={saHowToSteps}
      />
    </>
  );
}

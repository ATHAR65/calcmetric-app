import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "uber-tax-calculator-2026";
const CALC_NAME = "Uber Driver Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate your Uber driver taxes in seconds. SE tax, quarterly estimates & mileage deductions for rideshare and delivery drivers. Free, instant.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Uber classifies drivers as <strong>independent contractors</strong>, meaning no taxes are withheld from your earnings. You are responsible for paying federal income tax, self-employment tax (15.3%), and state income tax on your net Uber earnings. Uber sends a <strong>1099-NEC</strong> in January if you earned $600 or more, and a <strong>1099-K</strong> if your gross ride/delivery payments exceeded the reporting threshold.",
  "Your taxable Uber income is your <strong>gross earnings minus business deductions</strong>. Uber's annual tax summary (available in the app under Tax Information) shows your gross fares, Uber service fees, tolls collected, and tips. The amount on your 1099 is your gross fare amount before Uber's commission — you cannot deduct Uber's service fee separately because the 1099 already reflects the gross amount.",
  "The <strong>IRS standard mileage deduction</strong> is the most valuable write-off for Uber drivers. At $0.725 per mile in 2026, a driver logging 30,000 business miles deducts $21,750. This covers gas, insurance, maintenance, depreciation, and lease payments. You must keep a mileage log — the IRS requires the date, destination, business purpose, and miles for each trip. Apps like Everlance, Stride, and Gridwise track automatically.",
  "Beyond mileage, Uber drivers can deduct: <strong>phone and data plan</strong> (business use percentage), car washes, roadside assistance (AAA), phone mounts and chargers, water and snacks for passengers, parking and tolls during rides, and health insurance premiums if you have no employer-sponsored plan. If you drive for both Uber and Uber Eats, all miles driven for either service count as business miles.",
];

const uberHowToSteps = [
  "Enter your total Uber gross earnings — find this in the Uber app under Account → Tax Information → Annual Tax Summary.",
  "Enter total business miles driven while online on the Uber platform. Include miles driving to pickup locations, during trips, and between ride requests.",
  "Add other deductions: phone bill (business percentage), car washes, parking, tolls, phone accessories, and health insurance.",
  "Review your estimated SE tax (15.3%), federal income tax, and quarterly estimated payment amounts with IRS due dates.",
];

const staticFaqs = [
  { q: "Does Uber withhold taxes from my earnings?", a: "No. Uber does not withhold federal income tax, Social Security, Medicare, or state taxes. As an independent contractor, you must calculate and pay all taxes yourself. The IRS requires quarterly estimated payments (Form 1040-ES) if you expect to owe $1,000 or more for the year." },
  { q: "How much should Uber drivers save for taxes?", a: "Save 25% to 30% of your net earnings (after the mileage deduction) for taxes. This covers the 15.3% self-employment tax plus federal income tax at your bracket rate. If you live in a state with income tax, save an additional 3% to 10%. Many drivers set up an automatic transfer of 30% from every Uber payout to a dedicated tax savings account." },
  { q: "Can Uber drivers deduct mileage?", a: "Yes. The 2026 IRS standard mileage rate is $0.725 per business mile. This covers all vehicle costs — gas, insurance, maintenance, depreciation, and lease payments. Business miles include driving to pickups, during rides, between requests while online, and driving for Uber Eats deliveries. Commuting from home to your first ride is not deductible. You must maintain a written mileage log." },
  { q: "When does Uber send tax forms?", a: "Uber issues 1099-NEC forms by January 31 for drivers who earned $600 or more in non-ride payments (bonuses, referrals). Uber issues 1099-K forms for gross ride and delivery payments exceeding the federal reporting threshold. Both forms are available in the Uber app and mailed to your address on file. Your Annual Tax Summary with full earnings breakdown is also available in January." },
  { q: "Can I deduct Uber's service fee on my taxes?", a: "No, and you should not try to. Uber's 1099 reports your gross fare amount (what the rider paid), but Uber's service fee is already taken before the money reaches you. The amount you actually received is your taxable income. Your Annual Tax Summary shows both gross fares and Uber fees, and your actual net income is what you use for Schedule C." },
  { q: "Do I need to pay taxes if I only drive part-time?", a: "Yes, if your net self-employment income exceeds $400 for the year. Even part-time Uber earnings of $500 trigger self-employment tax. However, the mileage deduction often significantly reduces or eliminates the tax on small amounts of Uber income. A part-time driver earning $5,000 with 8,000 business miles has $5,600 in mileage deductions — resulting in zero taxable Uber income." },
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
        howToSteps={uberHowToSteps}
      />
    </>
  );
}

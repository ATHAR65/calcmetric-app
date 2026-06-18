import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "doordash-tax-estimator";
const CALC_NAME = "DoorDash Tax Calculator 2026";
const CALC_DESCRIPTION = "Estimate your DoorDash taxes instantly. Calculate SE tax, quarterly payments & deductions for Dashers. Free, no signup.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "DoorDash classifies all delivery drivers as <strong>independent contractors</strong>, not employees. This means DoorDash does not withhold federal income tax, Social Security, Medicare, or state taxes from your earnings. You are responsible for reporting all DoorDash income and paying taxes yourself, including the 15.3% self-employment tax.",
  "As a Dasher, you will receive a <strong>1099-NEC form</strong> from DoorDash if you earned $600 or more during the tax year. However, you owe taxes on all DoorDash income regardless of whether you receive a 1099 — even earnings under $600 are taxable. DoorDash reports payments through Stripe, and you can access your annual earnings summary in the Dasher app under the Earnings tab.",
  "Most full-time Dashers should set aside <strong>25% to 30% of every payout</strong> for taxes. This covers the 15.3% self-employment tax plus federal income tax at your bracket rate. If you live in a state with income tax (like California, New York, or Illinois), save an additional 3% to 10% depending on your state rate.",
  "The biggest tax advantage for Dashers is the <strong>IRS standard mileage deduction</strong>. For 2026, you can deduct $0.70 per business mile driven. This covers gas, insurance, maintenance, and depreciation. The average full-time Dasher drives 25,000 to 35,000 miles per year, which translates to $17,500 to $24,500 in deductions. You must track miles with an app like Everlance, Stride, or the DoorDash mileage tracker to claim this deduction.",
];

const ddRateTable = {
  title: "How Much to Set Aside for DoorDash Taxes (2026)",
  headers: ["Annual Net Earnings", "Federal + SE Tax", "Recommended Set-Aside"],
  rows: [
    ["Under $11,600", "~15.3% (SE tax only)", "20% of payouts"],
    ["$11,600 – $47,150", "15.3% SE + 12% income", "25% of payouts"],
    ["$47,150 – $100,525", "15.3% SE + 22% income", "30% of payouts"],
    ["Over $100,525", "15.3% SE + 24%+ income", "33% of payouts"],
    ["+ State income tax", "Varies by state", "Add 3% – 10%"],
  ],
};

const ddFormula = `DoorDash Taxable Income = Total Earnings − Business Deductions
Key Deductions:
  Mileage: Business Miles × $0.70 (2026 IRS rate)
  Phone: Business use % × Annual phone cost
  Hot bags, car accessories, phone mounts
Self-Employment Tax = Taxable Income × 92.35% × 15.3%
Quarterly Payment = (Estimated Annual Tax) ÷ 4`;

const ddHowToSteps = [
  "Enter your total DoorDash earnings — find this in the Dasher app under Earnings → Annual Summary, or on your 1099-NEC.",
  "Enter your total business miles driven while dashing (including miles to the restaurant and to the customer). The calculator applies the 2026 rate of $0.70/mile.",
  "Add any other deductions: phone bill (business percentage), hot bags, car phone mount, parking, tolls, and health insurance premiums if self-employed.",
  "Review your estimated SE tax, federal income tax, quarterly payment amounts, and effective tax rate. The calculator shows exactly how much to set aside from each payout.",
];

const staticFaqs = [
  { q: "Does DoorDash take out taxes from my pay?", a: "No. DoorDash does not withhold any taxes from your earnings because you are classified as an independent contractor (not an employee). You are responsible for paying your own federal income tax, self-employment tax (15.3%), and state income tax. DoorDash will send you a 1099-NEC if you earned $600 or more." },
  { q: "How much should I save for DoorDash taxes?", a: "Most Dashers should save 25% to 30% of their gross earnings for taxes. This covers the 15.3% self-employment tax plus your federal income tax bracket (typically 12% to 22% for most gig workers). If you live in a state with income tax, add another 3% to 10%. Setting aside money from every payout prevents a surprise tax bill." },
  { q: "When are quarterly estimated tax payments due for 2026?", a: "The IRS requires quarterly payments if you expect to owe $1,000 or more. The 2026 due dates are: Q1 — April 15, 2026; Q2 — June 16, 2026; Q3 — September 15, 2026; Q4 — January 15, 2027. Pay online at IRS.gov/payments using Direct Pay (free) or debit/credit card. Missing payments incurs a penalty of about 8% annually on the underpayment." },
  { q: "What expenses can I deduct as a DoorDash driver?", a: "The most valuable deduction is mileage: $0.70 per business mile in 2026, covering all vehicle costs. Other deductions include your phone bill (business use percentage), insulated delivery bags, car phone mounts, parking fees and tolls during deliveries, car washes, health insurance premiums (if self-employed), and a portion of your mobile data plan. You cannot deduct commuting miles from home to your first delivery." },
  { q: "Do I need to file taxes if I only made a little from DoorDash?", a: "Yes, if your net self-employment income exceeds $400. The $600 threshold only applies to whether DoorDash must issue a 1099 — it does not determine your tax obligation. Even $500 in net DoorDash earnings triggers self-employment tax. If DoorDash is your only income and net earnings are under $400, you do not owe SE tax but may still need to file a return." },
  { q: "Can I use the standard mileage rate and actual expenses together?", a: "No, you must choose one method per vehicle per year. The standard mileage rate ($0.70/mile in 2026) is simpler and usually better for gig drivers because it covers gas, insurance, repairs, and depreciation in one rate. The actual expense method requires tracking every receipt and is typically only better if you have a very expensive vehicle with high maintenance costs." },
  { q: "How do I track DoorDash mileage for taxes?", a: "Use a mileage tracking app like Everlance, Stride, or MileIQ that automatically logs trips using GPS. Start tracking from when you leave for your first delivery to when you finish your last delivery. Include miles driving to restaurants, to customers, and between orders while waiting. The IRS requires a written log with dates, destinations, business purpose, and miles driven." },
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
        formula={ddFormula}
        rateTable={ddRateTable}
        howToSteps={ddHowToSteps}
      />
    </>
  );
}

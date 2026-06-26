import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "irs-mileage-deduction-calculator";
const CALC_NAME = "IRS Mileage Deduction Calculator 2026";
const CALC_DESCRIPTION = "Calculate your IRS mileage deduction for 2026. Business $0.725/mile, medical $0.205/mile, charity $0.14/mile. Free calculator for self-employed and gig workers.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "The IRS standard mileage rate allows self-employed individuals and business owners to deduct a set amount per mile driven for business purposes. For 2026, the business mileage rate is <strong>$0.725 per mile</strong>. This rate covers all vehicle costs including gas, oil, insurance, registration, depreciation, and lease payments. It is the simplest way to claim a vehicle deduction without tracking individual expenses.",
  "The standard mileage rate changes annually based on a study of fixed and variable vehicle operating costs. The 2026 rate of $0.725/mile is up from $0.70 in 2025, reflecting increased fuel and insurance costs. For comparison: <strong>medical and moving mileage</strong> (limited to active-duty military) is $0.205/mile, and <strong>charitable mileage</strong> is $0.14/mile (set by statute, rarely changes).",
  "To claim the mileage deduction, you must keep a <strong>contemporaneous mileage log</strong> that records the date, destination, business purpose, and miles driven for each trip. The IRS does not accept estimates or reconstructions. Mileage tracking apps like Everlance, Stride, MileIQ, and Gridwise automatically record trips using GPS and satisfy IRS record-keeping requirements.",
  "The mileage deduction is often the largest single tax deduction for gig workers, delivery drivers, and real estate agents. A DoorDash driver logging 30,000 business miles deducts <strong>$21,750</strong> — often enough to eliminate most or all SE tax on their earnings. A real estate agent driving 20,000 business miles deducts $14,500. The key is consistent tracking: untracked miles are lost deductions.",
];

const mileageRateTable = {
  title: "2026 IRS Standard Mileage Rates",
  headers: ["Purpose", "Rate per Mile", "Who Can Claim"],
  rows: [
    ["Business", "$0.725", "Self-employed, business owners, Schedule C filers"],
    ["Medical", "$0.205", "Driving to/from medical appointments (itemized)"],
    ["Charitable", "$0.14", "Driving for qualified charitable organizations"],
    ["Moving (military only)", "$0.205", "Active-duty military members with PCS orders"],
  ],
};

const mileageFormula = `Mileage Deduction = Business Miles × $0.725
Tax Savings = Mileage Deduction × (Income Tax Rate + 15.3% SE Tax Rate)

Example: 25,000 business miles at 22% bracket:
  Deduction = 25,000 × $0.725 = $18,125
  Income tax savings = $18,125 × 22% = $3,988
  SE tax savings = $18,125 × 15.3% × 92.35% = $2,561
  Total savings = ~$6,549`;

const mileageHowToSteps = [
  "Enter your total business miles driven in 2026 (commuting to a regular workplace does not count — only miles for business purposes).",
  "Optionally add medical and charitable miles for a complete deduction summary.",
  "Enter your tax bracket so the calculator can estimate your actual dollar savings from the deduction.",
  "Review your total mileage deduction, estimated income tax savings, estimated SE tax savings, and equivalent hourly value of your tracked miles.",
];

const staticFaqs = [
  { q: "What is the IRS mileage rate for 2026?", a: "The standard mileage rate for business use is $0.725 per mile for 2026. Medical and military moving mileage is $0.205 per mile. Charitable mileage is $0.14 per mile (set by Congress, not the IRS). The business rate covers gas, maintenance, insurance, registration, and depreciation — you cannot claim these expenses separately if you use the standard rate." },
  { q: "Can W-2 employees deduct mileage?", a: "Generally no. The Tax Cuts and Jobs Act of 2017 suspended the unreimbursed employee expense deduction through 2025. W-2 employees cannot deduct business mileage on federal returns even if their employer does not reimburse them. Self-employed individuals (Schedule C), active-duty military (moving), and certain performing artists are the main groups who can claim mileage. Some states (like California and New York) still allow employee mileage deductions on state returns." },
  { q: "How do I track mileage for taxes?", a: "The IRS requires a written record with four details for each trip: date, destination (or area), business purpose, and miles driven. The easiest method is a mileage tracking app (Everlance, Stride, MileIQ, Gridwise, or Hurdlr) that uses your phone's GPS to log trips automatically. You can also use a paper logbook or spreadsheet. The key is tracking trips as they happen — reconstructing logs at year-end is not IRS-compliant." },
  { q: "Can I deduct actual car expenses instead of mileage?", a: "Yes, but you must choose one method per vehicle per year. The actual expense method requires tracking gas, oil, insurance, registration, repairs, lease payments or depreciation, and then calculating the business-use percentage. The standard mileage rate is simpler and usually wins for drivers with moderate vehicle costs. The actual expense method may be better for expensive vehicles with high insurance and maintenance." },
  { q: "What miles count as business miles?", a: "Business miles include driving to meet clients, traveling to a job site, running business errands, and driving between workplaces. Commuting from your home to a regular office does not count. However, if your home is your principal place of business (home office), drives from home to any business location are deductible. Gig workers can deduct miles from the first pickup/delivery to the last, including miles between orders." },
  { q: "Can I claim mileage and the home office deduction?", a: "Yes, both deductions are available simultaneously. In fact, having a home office strengthens your mileage deduction because it makes your home your principal place of business. This means drives from your home to any business destination (client meetings, co-working spaces, supply stores) become deductible business miles rather than non-deductible commuting." },
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
        formula={mileageFormula}
        rateTable={mileageRateTable}
        howToSteps={mileageHowToSteps}
      />
    </>
  );
}

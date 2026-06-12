import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "freelancer-platform-fee-comparison";
const CALC_NAME = "Freelancer Platform Fee Comparison 2026";
const CALC_DESCRIPTION = "Compare freelancer platform fees across Upwork, Fiverr, Toptal, and Freelancer.com. Calculate your true net earnings after all fees. Free tool.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Freelancer platform fees can consume <strong>5% to 20%</strong> of your gross earnings, making platform choice one of the most impactful financial decisions for independent professionals. On $50,000 in annual freelance revenue, the difference between a 20% fee (Fiverr) and a 5% fee (Upwork long-term client) is <strong>$7,500 per year</strong>.",
  "Upwork uses a <strong>sliding scale</strong>: 20% on the first $500 billed to each client, 10% on $500.01–$10,000, and 5% on lifetime billings above $10,000 per client. This heavily rewards long-term client relationships. A freelancer billing $5,000/month to one client pays an effective rate of just <strong>6.4%</strong> after the first few months.",
  "Fiverr charges a flat <strong>20% service fee</strong> on every transaction, regardless of client history or volume. On a $500 gig, Fiverr takes $100. There is no sliding scale or volume discount. Fiverr also charges a $1 processing fee on orders under $50. This makes Fiverr the most expensive major platform for established freelancers.",
  "Toptal charges <strong>zero fees to freelancers</strong> — clients pay the platform premium instead. However, Toptal is highly selective (accepting only ~3% of applicants) and sets rates for you. Freelancer.com charges 10% (or 3% for preferred freelancers). Direct client relationships (no platform) eliminate fees entirely but require your own marketing, contracts, and payment processing.",
];

const freelancerFormula = `Net Earnings = Gross − Platform Fee − Payment Processing
Upwork: 20% (first $500/client) → 10% ($500–$10K) → 5% ($10K+)
Fiverr: 20% flat on all transactions
Toptal: 0% (client pays platform fee)
Freelancer.com: 10% or 3% (preferred)

Example: $5,000 project on Upwork (new client)
  First $500: $500 × 20% = $100
  Next $4,500: $4,500 × 10% = $450
  Total fee = $550 (11% effective)
  Same project on Fiverr: $5,000 × 20% = $1,000`;

const freelancerRateTable = {
  title: "2026 Freelancer Platform Fee Comparison",
  headers: ["Platform", "Fee Structure", "On $5,000 Project", "On $50,000/Year"],
  rows: [
    ["Upwork", "20%→10%→5% sliding", "$550 (11%)", "$4,100 (~8.2%)"],
    ["Fiverr", "20% flat", "$1,000 (20%)", "$10,000 (20%)"],
    ["Toptal", "0% to freelancer", "$0", "$0"],
    ["Freelancer.com", "10% (or 3% preferred)", "$500 (10%)", "$5,000 (10%)"],
    ["Direct (no platform)", "0% + payment processing", "~$150 (3%)", "~$1,500 (3%)"],
  ],
};

const freelancerHowToSteps = [
  "Enter your expected project value or annual freelance revenue.",
  "Select the platforms you want to compare (Upwork, Fiverr, Toptal, Freelancer.com, direct).",
  "For Upwork, indicate whether this is a new client or an existing relationship (affects sliding scale tier).",
  "Review the side-by-side comparison: fees charged, net earnings, and effective fee percentage for each platform.",
];

const staticFaqs = [
  { q: "Which freelancer platform has the lowest fees?", a: "Toptal charges zero fees to freelancers (clients pay the premium), but accepts only ~3% of applicants. For most freelancers, Upwork's sliding scale becomes cheapest for long-term clients — dropping to 5% after $10,000 billed per client. Fiverr is consistently the most expensive at a flat 20% on every transaction." },
  { q: "How do Upwork fees work?", a: "Upwork charges per-client sliding fees: 20% on the first $500 billed to each client, 10% on $500.01–$10,000, and 5% on lifetime billings above $10,000 with that client. The tiers reset per client. A freelancer with one client billing $5,000/month pays about 6.4% effective after the first two months. Multiple small clients mean more revenue at the 20% tier." },
  { q: "How do Fiverr fees work?", a: "Fiverr takes a flat 20% of every transaction, with no volume discounts or sliding scale. On a $100 gig, you receive $80. On a $5,000 gig, you receive $4,000. Fiverr also charges a $1 processing fee on orders under $50. The 20% rate makes Fiverr significantly more expensive than Upwork for large or repeat-client projects." },
  { q: "Does Toptal charge freelancers?", a: "No — Toptal charges zero service fees to freelancers. The client pays Toptal's markup (typically 30–60% above the freelancer's rate). However, Toptal is extremely selective, accepting about 3% of applicants through a rigorous screening process. Toptal also sets hourly rate ranges for each skill level, limiting pricing flexibility." },
  { q: "When should I go direct instead of using a platform?", a: "Go direct when you have a reliable pipeline (referrals, content marketing, networking). Direct clients mean 0% platform fees (just 2.9% payment processing). The trade-off: you handle contracts, invoicing, dispute resolution, and marketing yourself. Most successful freelancers use platforms for client acquisition, then transition long-term clients to direct relationships." },
  { q: "How do payment processing fees compare across platforms?", a: "Upwork: free for direct deposit, 1% for instant transfer. Fiverr: free withdrawal to bank (5–14 days), $3 fee for PayPal/Payoneer. Freelancer.com: varies by withdrawal method. Direct freelancing with Stripe or PayPal: 2.9% + $0.30 per transaction. Platform fees already include payment processing — these are additional withdrawal fees." },
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
        formula={freelancerFormula}
        rateTable={freelancerRateTable}
        howToSteps={freelancerHowToSteps}
      />
    </>
  );
}

import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "commission-calculator";
const CALC_NAME = "Commission Calculator 2026";
const CALC_DESCRIPTION = "Calculate real estate agent commission earnings after brokerage splits. Free 2026 commission calculator with split model comparison.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Real estate commission is typically <strong>5–6% of the sale price</strong>, split between the listing agent and buyer's agent. On a $400,000 home at 6% commission, the total commission is $24,000 — usually $12,000 per side. After the brokerage split, the agent's take-home is significantly less. Following the 2024 NAR settlement, buyer agent commissions are now separately negotiated.",
  "Brokerage commission splits determine how much an agent actually earns. <strong>New agents</strong> typically start at a 50/50 or 60/40 split (agent/broker). <strong>Experienced agents</strong> negotiate 70/30 to 80/20 splits. <strong>Top producers</strong> may reach 90/10 or move to a 100% commission model where they pay a flat monthly desk fee ($500–$2,000) and keep all commission.",
  "After the brokerage split, agents must still cover expenses: <strong>E&O insurance</strong> ($300–$500/year), MLS fees ($500–$1,200/year), marketing costs ($2,000–$10,000/year), continuing education ($200–$500/year), and self-employment tax (15.3%). A $12,000 gross commission at a 70/30 split becomes $8,400 after the broker split, then approximately <strong>$5,880 after taxes and expenses</strong>.",
  "The 2024 <strong>NAR settlement</strong> changed commission structures significantly. Buyer agent compensation is no longer displayed on MLS listings, and buyers now sign representation agreements specifying their agent's fee. Sellers can still offer buyer agent compensation, but it is negotiated separately. Many buyer's agents now charge 2–3% or a flat fee ($3,000–$7,000) rather than the traditional commission split.",
];

const commFormula = `Agent Take-Home = Sale Price × Commission Rate × Side Split × Brokerage Split − Expenses

Example: $400,000 sale, 6% total commission, 50/50 side split
  Total commission = $400,000 × 6% = $24,000
  One side (listing or buyer) = $12,000
  Agent at 70/30 brokerage split = $12,000 × 70% = $8,400
  Less self-employment tax (15.3%) = $8,400 − $1,285 = $7,115
  Less per-transaction expenses (~$500) = $6,615 net`;

const commRateTable = {
  title: "Agent Earnings by Brokerage Split Model ($400K Sale, 3% Per Side)",
  headers: ["Split Model", "Gross Commission", "Broker Takes", "Agent Gross", "After SE Tax"],
  rows: [
    ["50/50 (new agent)", "$12,000", "$6,000", "$6,000", "$5,082"],
    ["70/30 (experienced)", "$12,000", "$3,600", "$8,400", "$7,115"],
    ["80/20 (top producer)", "$12,000", "$2,400", "$9,600", "$8,131"],
    ["90/10 (high volume)", "$12,000", "$1,200", "$10,800", "$9,147"],
    ["100% ($1,500 desk fee)", "$12,000", "$1,500 flat", "$10,500", "$8,893"],
  ],
};

const commHowToSteps = [
  "Enter the property sale price and the total commission rate (typically 5–6%).",
  "Select the side split (how commission is divided between listing and buyer's agent — usually 50/50).",
  "Enter your brokerage split percentage (e.g., 70/30 means you keep 70%).",
  "Review your gross commission, take-home after brokerage split, estimated self-employment tax, and net earnings per transaction.",
];

const staticFaqs = [
  { q: "What is a typical real estate commission rate?", a: "Historically 5–6% of the sale price, split between buyer's and seller's agents (2.5–3% each side). After the 2024 NAR settlement, commission rates are more negotiable than ever. Discount brokerages offer 1–1.5% listing fees. Buyer agent fees are now separately negotiated — some charge 2–3%, others use flat fees of $3,000–$7,000." },
  { q: "How do brokerage splits work?", a: "The brokerage split determines how commission is divided between the agent and their broker. A 70/30 split means the agent keeps 70% and the broker gets 30%. New agents often start at 50/50, experienced agents negotiate 70/30 to 80/20, and top producers may reach 90/10. Some brokerages offer 100% commission models where agents pay a flat monthly desk fee instead." },
  { q: "What is a 100% commission model?", a: "In a 100% commission model, the agent keeps all commission from each transaction but pays the brokerage a flat monthly desk fee ($500–$2,000) plus a per-transaction fee ($200–$500). This model benefits high-volume agents who close many deals — if you close 15+ transactions per year, 100% commission typically earns more than an 80/20 split." },
  { q: "How much does a real estate agent earn per sale?", a: "On a $400,000 sale at 3% per side with a 70/30 split: gross commission is $12,000, agent keeps $8,400 before taxes. After 15.3% self-employment tax and ~$500 in transaction expenses, net take-home is approximately $6,600. The median US home price is ~$410,000, and the median agent closes 8–12 transactions per year." },
  { q: "How did the 2024 NAR settlement change commissions?", a: "The settlement eliminated the requirement to display buyer agent compensation on MLS listings. Buyers now sign representation agreements specifying their agent's fee before touring homes. Sellers can still offer buyer agent compensation, but it is negotiated separately. This has led to more fee competition — some buyer's agents now charge flat fees or reduced percentages." },
  { q: "What expenses do real estate agents have?", a: "Annual agent expenses typically total $8,000–$25,000: E&O insurance ($300–$500), MLS fees ($500–$1,200), NAR/association dues ($500–$800), marketing/advertising ($2,000–$10,000), continuing education ($200–$500), technology tools ($1,000–$3,000), and vehicle costs. Plus 15.3% self-employment tax on net earnings. Agents are independent contractors, not employees." },
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
        formula={commFormula}
        rateTable={commRateTable}
        howToSteps={commHowToSteps}
      />
    </>
  );
}

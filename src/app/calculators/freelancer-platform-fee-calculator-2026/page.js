import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";

const CALC_SLUG = "freelancer-platform-fee-calculator-2026";
const CALC_NAME = "Freelancer Platform Fee Calculator 2026";
const CALC_DESCRIPTION = "Compare freelancer platform fees across Fiverr, Upwork, Toptal, Contra, and PeoplePerHour and calculate your real take-home pay after fees for 2026.";

const seoContent = [
  "A <strong>freelancer platform fee calculator</strong> shows your real take-home pay after each marketplace takes its cut. In 2026, <strong>Toptal and Contra charge freelancers 0%</strong>, <strong>Upwork</strong> uses a per-client sliding scale (20% → 10% → 5%), and <strong>Fiverr</strong> and <strong>PeoplePerHour</strong> charge a flat <strong>20%</strong>.",
  "The difference is significant. On a $5,000 project, Fiverr&apos;s 20% fee costs <strong>$1,000</strong>, while a long-term Upwork client at 5% costs just <strong>$250</strong> — and on Toptal or Contra you keep the full amount. Over a year of freelancing, platform choice can be worth thousands of dollars in extra income.",
  "This calculator compares all five platforms side by side for any project value and highlights the option with the highest net pay, so you can list each piece of work where it earns you the most.",
];

const freelancerFormula = `Net Take-Home = Project Value − Platform Fee
Platform Fee = Project Value × Fee Rate

Fiverr: 20% flat
Upwork: 20% (new) / 10% ($500+) / 5% ($10K+) per client
Toptal: 0% (client pays the platform premium)
Contra: 0% (commission-free)
PeoplePerHour: 20% (new work)

Example: $5,000 project
  Fiverr (20%):  fee $1,000  →  net $4,000
  Upwork (5%):   fee   $250  →  net $4,750
  Toptal (0%):   fee     $0  →  net $5,000`;

const freelancerRateTable = {
  title: "2026 Freelancer Platform Fees (to the Freelancer)",
  headers: ["Platform", "Fee to Freelancer", "On a $2,500 Project", "Net Take-Home"],
  rows: [
    ["Fiverr", "20% flat", "$500", "$2,000"],
    ["Upwork (new client)", "20%", "$500", "$2,000"],
    ["Upwork (returning $500+)", "10%", "$250", "$2,250"],
    ["Upwork (long-term $10K+)", "5%", "$125", "$2,375"],
    ["Toptal", "0%", "$0", "$2,500"],
    ["Contra", "0%", "$0", "$2,500"],
    ["PeoplePerHour", "20%", "$500", "$2,000"],
  ],
};

const freelancerHowToSteps = [
  "Enter your project value — the total amount the client pays.",
  "Select the platforms you want to compare using the checkboxes (all are on by default).",
  "Choose your Upwork client tier (new 20%, returning 10%, or long-term 5%).",
  "Review each platform's fee and net take-home, with a green badge on the highest-paying option.",
  "Check the difference between the best and worst platform to quantify your choice.",
];

const staticFaqs = [
  { q: "Which freelance platform has the lowest fees in 2026?", a: "Toptal and Contra charge freelancers 0% — Toptal bills the client a premium instead, and Contra is commission-free. Among platforms that take a percentage, Upwork is cheapest for long-term clients at 5%, while Fiverr and PeoplePerHour charge a flat 20%." },
  { q: "Does Upwork charge a flat fee or sliding scale?", a: "Upwork uses a per-client sliding scale. You pay 20% on the first $500 billed to a client, 10% on billings from $500.01 to $10,000, and 5% on lifetime billings above $10,000 with that client. Concentrating work with fewer clients lowers your effective rate." },
  { q: "Is Contra really free for freelancers?", a: "Yes. Contra is commission-free for freelancers — it does not take a percentage of your project value. It earns revenue through premium memberships and optional add-on services instead of charging a service fee on your work." },
  { q: "How much does Fiverr take from your earnings?", a: "Fiverr takes a flat 20% of every order, with no volume discounts. On a $100 gig you receive $80, and on a $1,000 gig you receive $800. Withdrawal fees may also apply depending on your payout method." },
  { q: "Can I negotiate platform fees on Upwork or Fiverr?", a: "You cannot negotiate the published service fee directly. However, you can reduce your effective rate on Upwork by concentrating billings with a single client to reach the 10% and 5% tiers, and you can offset fees on any platform by pricing your services to absorb them." },
];

const faqSchemaEntities = staticFaqs.map((f) => ({
  "@type": "Question",
  name: f.q,
  acceptedAnswer: { "@type": "Answer", text: f.a },
}));

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaEntities,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Freelancer Platform Fee Calculator 2026 — Fiverr vs Upwork vs Toptal vs Contra",
    description: CALC_DESCRIPTION,
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
    author: { "@type": "Organization", name: "TheMetricApp", url: "https://www.themetricapp.com" },
    publisher: { "@type": "Organization", name: "TheMetricApp", url: "https://www.themetricapp.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.themetricapp.com/calculators/${CALC_SLUG}` },
  };

  return (
    <>
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema, articleSchema]} />
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

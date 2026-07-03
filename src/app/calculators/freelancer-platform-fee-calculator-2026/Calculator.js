"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const PLATFORMS = [
  { key: "fiverr", name: "Fiverr", note: "20% flat" },
  { key: "upwork", name: "Upwork", note: "20% / 10% / 5%" },
  { key: "toptal", name: "Toptal", note: "0% to freelancer" },
  { key: "contra", name: "Contra", note: "0% commission-free" },
  { key: "pph", name: "PeoplePerHour", note: "20% (new work)" },
];

function feeRate(key, upworkTier) {
  switch (key) {
    case "fiverr":
      return 0.20;
    case "upwork":
      return upworkTier; // 0.20 / 0.10 / 0.05
    case "toptal":
      return 0;
    case "contra":
      return 0;
    case "pph":
      return 0.20;
    default:
      return 0;
  }
}

export default function Calculator() {
  const [projectValue, setProjectValue] = useState("");
  const [selected, setSelected] = useState({ fiverr: true, upwork: true, toptal: true, contra: true, pph: true });
  const [upworkTier, setUpworkTier] = useState("0.20");

  const value = parseFloat(projectValue) || 0;
  const error = projectValue !== "" && value < 0 ? "Project value can't be negative." : "";

  const tier = parseFloat(upworkTier);

  const results = PLATFORMS.filter((p) => selected[p.key]).map((p) => {
    const rate = feeRate(p.key, tier);
    const fee = value * rate;
    const net = value - fee;
    return { ...p, rate, fee, net };
  });

  const best = results.reduce((acc, r) => (acc === null || r.net > acc.net ? r : acc), null);
  const worst = results.reduce((acc, r) => (acc === null || r.net < acc.net ? r : acc), null);
  const spread = best && worst ? best.net - worst.net : 0;

  const schemaData = {
    name: "Freelancer Platform Fee Calculator 2026",
    description: "Compare Fiverr, Upwork, Toptal, Contra, and PeoplePerHour fees to find your real take-home pay.",
    url: "https://www.themetricapp.com/calculators/freelancer-platform-fee-calculator-2026",
  };

  return (
    <CalculatorShell
      title="Freelancer Platform Fee Calculator (2026)"
      subtitle="Compare your real take-home pay across Fiverr, Upwork, Toptal, Contra, and PeoplePerHour — side by side, instantly."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          {value <= 0 ? (
            <p className="text-center text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
              Enter a project value to compare platform fees.
            </p>
          ) : results.length === 0 ? (
            <p className="text-center text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
              Select at least one platform to compare.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((r) => {
                  const isBest = best && r.key === best.key;
                  return (
                    <div
                      key={r.key}
                      className={`rounded-xl border-2 p-5 text-center ${isBest ? "border-green-500 bg-green-50" : "border-[var(--color-border)] bg-[var(--color-bg-secondary)]"}`}
                    >
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <p className="text-sm font-bold text-[#1d1a33]" style={{ fontFamily: "var(--font-heading)" }}>{r.name}</p>
                        {isBest && (
                          <span className="rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Best</span>
                        )}
                      </div>
                      <p className="text-xs text-[#5d5a78] mb-2">Fee {(r.rate * 100).toFixed(0)}% &middot; {fmt(r.fee)}</p>
                      <p className="text-3xl font-extrabold text-[#1d1a33]" style={{ fontFamily: "var(--font-heading)" }}>{fmt(r.net)}</p>
                      <p className="text-xs text-[#928fab] mt-1">Net take-home</p>
                    </div>
                  );
                })}
              </div>
              {best && worst && best.key !== worst.key && (
                <div className="rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-center text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
                  Difference between best ({best.name}) and worst ({worst.name}): <strong className="text-[#7c3aed]">{fmt(spread)}</strong>
                </div>
              )}
            </>
          )}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="projectValue" label="Project Value" value={projectValue} onChange={(e) => setProjectValue(e.target.value)} prefix="$" placeholder="2500" helpText="Total amount the client pays" />
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
        <SelectField
          id="upworkTier"
          label="Upwork Client Tier"
          value={upworkTier}
          onChange={(e) => setUpworkTier(e.target.value)}
          options={[
            { value: "0.20", label: "New client (20%)" },
            { value: "0.10", label: "Returning $500+ (10%)" },
            { value: "0.05", label: "Long-term $10K+ (5%)" },
          ]}
          helpText="Upwork uses a per-client sliding scale"
        />
      </div>
      <div className="mt-5">
        <p className="text-sm text-[#5d5a78] mb-3" style={{ fontFamily: "var(--font-body)" }}>Platforms to compare</p>
        <div className="flex flex-wrap gap-3">
          {PLATFORMS.map((p) => (
            <label key={p.key} className="flex items-center gap-2 rounded-lg border border-[#e7e5f3] bg-[#f6f5fc] px-3 py-2 cursor-pointer text-sm text-[#1d1a33]" style={{ fontFamily: "var(--font-body)" }}>
              <input
                type="checkbox"
                checked={selected[p.key]}
                onChange={(e) => setSelected({ ...selected, [p.key]: e.target.checked })}
                className="h-4 w-4 accent-[#7c3aed]"
              />
              <span className="font-medium">{p.name}</span>
              <span className="text-xs text-[#928fab]">{p.note}</span>
            </label>
          ))}
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300"><strong>Last Updated:</strong> June 2026</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Author:</strong> Financial Metrics Team</span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://www.upwork.com/resources/freelancer-service-fees" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Upwork Fees</a>
            {" · "}
            <a href="https://www.toptal.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Toptal</a>
          </span>
        </div>
      </div>

      <h2>Which Freelance Platform Has the Lowest Fees in 2026?</h2>
      <p>
        In 2026, the <strong>freelancer platform fee</strong> you pay can swing your take-home pay by thousands of dollars a year. The lowest-fee options are <strong>Toptal and Contra, which charge freelancers 0%</strong> — Toptal bills the client a premium instead, while Contra runs a commission-free model funded by other services. Among the platforms that do charge freelancers, <strong>Upwork</strong> is cheapest for established client relationships thanks to its sliding scale, while <strong>Fiverr</strong> and <strong>PeoplePerHour</strong> sit at a flat 20%.
      </p>
      <p>
        This calculator compares your real net earnings on Fiverr, Upwork, Toptal, Contra, and PeoplePerHour for any project value, so you can decide where to list a given piece of work. The &quot;best&quot; platform depends on the project size, your client history, and whether the platform&apos;s traffic and tools justify its cut.
      </p>

      <h2>How to Use This Freelancer Fee Calculator</h2>
      <p>
        Enter your <strong>project value</strong> — the total amount the client pays. Use the checkboxes to choose which platforms to compare (all are selected by default). For Upwork, pick your <strong>client tier</strong>: new clients pay 20%, returning clients past $500 pay 10%, and long-term clients past $10,000 pay just 5%. The calculator instantly shows the fee and net take-home for each platform and highlights the highest net with a green &quot;Best&quot; badge, plus the dollar gap between your best and worst options.
      </p>

      <h2>Platform Fee Breakdown — Fiverr, Upwork, Toptal, Contra, PeoplePerHour</h2>
      <p>
        <strong>Fiverr</strong> charges a flat <strong>20% service fee</strong> on every order, with no volume discounts. <strong>Upwork</strong> uses a <strong>per-client sliding scale</strong>: 20% on a new client, dropping to 10% and then 5% as your lifetime billings with that client grow. <strong>Toptal</strong> charges the freelancer <strong>0%</strong> — the client pays Toptal&apos;s markup — but the network is highly selective. <strong>Contra</strong> is <strong>commission-free (0%)</strong> for freelancers, monetizing through premium memberships and add-ons instead. <strong>PeoplePerHour</strong> charges <strong>20%</strong> on new work, with lower rates as you build a billing history with a buyer.
      </p>

      <h2>Fiverr vs Upwork — Which is Better for Freelancers?</h2>
      <p>
        Fiverr and Upwork are the two giants, and the right choice depends on how you work. <strong>Fiverr&apos;s gig model</strong> brings buyers to you — you publish fixed-price service packages and clients order directly, which suits productized, high-volume services like logo design or voiceover. The trade-off is the flat 20% cut on every order, forever. <strong>Upwork&apos;s bidding model</strong> requires you to submit proposals (and buy Connects to do so), but its sliding scale rewards loyalty: once you cross $10,000 with a client you pay only 5%, making Upwork dramatically cheaper for ongoing, high-value relationships. Many freelancers use Fiverr to win first-time buyers and Upwork to nurture long-term retainer clients.
      </p>

      <h2>How Toptal and Contra Changed the Game with Zero Freelancer Fees</h2>
      <p>
        <strong>Toptal</strong> and <strong>Contra</strong> proved freelancers do not have to surrender 20% of every invoice. Toptal flips the fee onto the client by charging a premium on top of your rate, so your full quoted rate lands in your pocket — but you must pass its rigorous screening (only a small percentage of applicants are accepted). <strong>Contra</strong> takes a different route: it is <strong>commission-free</strong>, earning revenue from optional premium features rather than a cut of your work. For freelancers with their own client pipeline, these zero-fee platforms can mean keeping the entire project value instead of losing hundreds or thousands to commissions.
      </p>

      <h2>How to Reduce Your Platform Fees Over Time</h2>
      <p>
        First, <strong>concentrate work with fewer clients</strong> on Upwork so you reach the 10% and 5% tiers faster instead of restarting at 20% with every new buyer. Second, <strong>price for the fee</strong>: if you need to net $75/hour on a 20% platform, quote $93.75/hour. Third, <strong>graduate proven clients to lower-fee or direct arrangements</strong> where the platform&apos;s terms allow it. Fourth, consider <strong>zero-fee platforms like Toptal and Contra</strong> for your highest-value work. Finally, track your <strong>effective fee rate</strong> across platforms each quarter — small differences compound into a meaningful raise over a year of freelancing.
      </p>

      <h2>Common Mistakes Freelancers Make About Platform Fees</h2>
      <p>
        The most common error is <strong>quoting the same price everywhere</strong>, which means you silently earn less on higher-fee platforms. Another is <strong>ignoring withdrawal and processing fees</strong> that stack on top of the headline service fee. Many freelancers also <strong>underestimate the value of the sliding scale</strong>, scattering work across many one-off clients and never escaping Upwork&apos;s 20% tier. Use the calculator before you accept a project so the fee is a deliberate decision, not a surprise.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>Which freelance platform has the lowest fees in 2026?</h3>
      <p>Toptal and Contra charge freelancers 0%. Among platforms that take a cut, Upwork is cheapest for long-term clients (as low as 5%), while Fiverr and PeoplePerHour charge a flat 20%.</p>
      <h3>Does Upwork charge a flat fee or sliding scale?</h3>
      <p>Upwork uses a per-client sliding scale: 20% on a new client, 10% after $500 in lifetime billings with that client, and 5% after $10,000.</p>
      <h3>Is Contra really free for freelancers?</h3>
      <p>Yes. Contra is commission-free for freelancers and earns revenue from premium memberships and add-on services rather than taking a percentage of your projects.</p>
      <h3>How much does Fiverr take from your earnings?</h3>
      <p>Fiverr takes a flat 20% of every order. On a $500 gig you receive $400; there are no volume discounts.</p>
      <h3>Can I negotiate platform fees on Upwork or Fiverr?</h3>
      <p>You cannot negotiate the published service fee directly, but you can lower your effective rate on Upwork by concentrating billings with a client to reach the 10% and 5% tiers, and by pricing your services to absorb the fee.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</a> — Estimate the 15.3% SE tax on freelance income.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Federal, SE, and quarterly tax for gig income.</li>
        <li><a href="/calculators/small-business-tax-deduction-calculator">Small Business Tax Deduction Calculator</a> — Find write-offs and QBI savings.</li>
      </ul>

      <RelatedCalculators currentPage="freelancer-platform-fee-calculator-2026" />
    </>
  );
}

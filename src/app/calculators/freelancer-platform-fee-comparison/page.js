"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function FreelancerPlatformFeeComparison() {
  const [contract, setContract] = useState("");

  const value = parseFloat(contract) || 0;

  // Upwork: 10% flat fee
  const upworkFee = value * 0.10;
  const upworkNet = value - upworkFee;

  // Fiverr: 20% seller fee
  const fiverrFee = value * 0.20;
  const fiverrNet = value - fiverrFee;

  const savings = fiverrFee - upworkFee;
  const savingsPct = value > 0 ? (savings / value) * 100 : 0;

  const schemaData = {
    name: "Freelancer Platform Fee Comparison Calculator",
    description: "Compare Upwork vs Fiverr fees side-by-side and see which freelancing platform maximizes your net earnings.",
    url: "https://calcmetric.com/calculators/freelancer-platform-fee-comparison",
  };

  return (
    <CalculatorShell
      title="Freelancer Platform Fee Comparison"
      subtitle="Compare Upwork vs Fiverr fees side-by-side and discover which platform keeps more money in your pocket."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border-2 border-green-500 bg-white p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-green-600 mb-1">Upwork (10% fee)</p>
              <p className="text-sm text-slate-500 mb-2">Fee: {fmt(upworkFee)}</p>
              <p className="text-3xl font-extrabold text-slate-900">{fmt(upworkNet)}</p>
              <p className="text-xs text-slate-400 mt-1">Your Net Earnings</p>
            </div>
            <div className="rounded-xl border-2 border-orange-400 bg-white p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-1">Fiverr (20% fee)</p>
              <p className="text-sm text-slate-500 mb-2">Fee: {fmt(fiverrFee)}</p>
              <p className="text-3xl font-extrabold text-slate-900">{fmt(fiverrNet)}</p>
              <p className="text-xs text-slate-400 mt-1">Your Net Earnings</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ResultCard label="You Save on Upwork" value={fmt(savings)} highlight sub="vs Fiverr" />
            <ResultCard label="Savings %" value={savingsPct.toFixed(1) + "%"} sub="Of contract value" />
          </div>
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="max-w-md mx-auto">
        <InputField id="contract" label="Contract / Project Value" value={contract} onChange={(e) => setContract(e.target.value)} prefix="$" placeholder="2500" helpText="Total amount the client pays" />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the Freelancer Platform Fee Comparison Calculator</h2>
      <p>
        Choosing the right freelancing platform can mean the difference of thousands of dollars in annual earnings. Upwork and Fiverr are the two dominant global freelancing marketplaces, but their fee structures are fundamentally different — and most freelancers do not fully understand how much they are paying. This calculator provides an instant, side-by-side comparison of your net earnings on both platforms.
      </p>
      <p>
        Simply enter your <strong>total contract or project value</strong> — the amount the client pays for your services. The calculator instantly shows you the fee each platform deducts and your resulting net earnings. This allows you to make data-driven decisions about where to list your services, how to price your work, and whether the traffic and tools each platform provides justify their fees.
      </p>
      <p>
        Whether you are a web developer, graphic designer, writer, virtual assistant, or digital marketer, understanding platform fees is essential for pricing your services profitably. A $5,000 project has very different take-home amounts depending on which platform facilitates the transaction.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <h3>Upwork Fee Structure (10% Flat Fee)</h3>
      <p>
        As of 2023, Upwork simplified its fee structure to a <strong>flat 10% service fee</strong> on all freelancer earnings, regardless of lifetime billings with a specific client. Previously, Upwork used a sliding scale (20% on the first $500, 10% on $500–$10K, 5% on $10K+), but the new flat rate applies universally. For a $2,500 contract: <strong>Fee = $2,500 × 10% = $250</strong>. Your net payout is <strong>$2,250</strong>. Upwork also charges a $0.15 fee per Connects used to submit proposals, and freelancers must purchase Connects (starting at $0.15 each, with most proposals requiring 2–16 Connects).
      </p>
      <h3>Fiverr Fee Structure (20% Seller Fee)</h3>
      <p>
        Fiverr charges sellers a <strong>flat 20% service fee</strong> on every order. This is double Upwork&apos;s rate and one of the highest fees in the freelancing industry. For a $2,500 order: <strong>Fee = $2,500 × 20% = $500</strong>. Your net payout is <strong>$2,000</strong>. That is $250 less than you would earn on Upwork for the exact same project. Additionally, Fiverr imposes a 14-day clearance period before funds become available for withdrawal, and charges withdrawal fees ($1 for PayPal, $3 for bank transfer, $5 for Fiverr Revenue Card).
      </p>
      <h3>Annual Impact Analysis</h3>
      <p>
        The fee difference compounds significantly over a full year. A freelancer earning $60,000 in gross annual billings would pay $6,000 in Upwork fees (netting $54,000) versus $12,000 in Fiverr fees (netting $48,000). That is a <strong>$6,000 annual difference</strong> — enough for a vacation, significant investment contribution, or several months of living expenses. Over a 5-year freelancing career, the cumulative difference at this income level would be $30,000.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>If Upwork is cheaper, why do freelancers still use Fiverr?</h3>
      <p>
        Despite higher fees, Fiverr offers several advantages that attract freelancers. First, Fiverr&apos;s <strong>marketplace model</strong> means buyers come to you — freelancers create &quot;gigs&quot; (service listings) that buyers discover through search, reducing the time spent writing proposals. On Upwork, freelancers actively bid on client-posted jobs, which requires significant effort in proposal writing. Second, Fiverr&apos;s <strong>buyer traffic</strong> is enormous, particularly for creative services like logo design, video editing, and voiceover work. Many freelancers report higher order volume on Fiverr despite lower per-project earnings. Third, Fiverr&apos;s <strong>gig-based structure</strong> makes it easy to productize services with fixed prices, packages, and add-ons, creating a more predictable income stream. The ideal strategy for many freelancers is to use both platforms — Fiverr for high-volume, productized services and Upwork for larger, custom projects where the lower fee makes a bigger impact.
      </p>
      <h3>Are there ways to reduce or avoid platform fees entirely?</h3>
      <p>
        Both Upwork and Fiverr prohibit taking client relationships off-platform to avoid fees, and violating this policy can result in permanent account suspension. However, there are legitimate strategies to minimize fee impact. On Upwork, you can negotiate higher rates with clients to account for the 10% fee — many experienced freelancers add 10-15% to their rates specifically to offset platform costs. On Fiverr, offer tiered packages where the premium tier includes higher margins to compensate for the 20% cut. For freelancers earning consistently, building a <strong>personal website and direct client pipeline</strong> (through LinkedIn, content marketing, or referrals) allows you to work with clients directly using payment tools like Stripe (2.9% + $0.30) or PayPal (2.99% + $0.49), dramatically reducing your effective fee rate to under 3%.
      </p>
      <h3>How should I factor platform fees into my freelance pricing strategy?</h3>
      <p>
        The golden rule is: <strong>never set your price based on what you want to earn — set it based on what you want to net after fees</strong>. If your target hourly rate is $75/hour and you are on Upwork (10% fee), you should charge $83.33/hour ($83.33 × 0.90 = $75). On Fiverr (20% fee), you would need to charge $93.75/hour ($93.75 × 0.80 = $75). Many freelancers make the mistake of pricing their services the same across both platforms, which means they effectively earn 10% less per hour on Fiverr. Additionally, consider the time cost of each platform — if you spend 5 hours per week writing Upwork proposals versus 1 hour optimizing Fiverr gigs, factor that unpaid time into your effective hourly rate calculation. The most successful freelancers track their total platform-related costs (fees + time investment + subscription costs) and calculate a true &quot;platform efficiency ratio&quot; to determine where their time is best spent.
      </p>
    </>
  );
}

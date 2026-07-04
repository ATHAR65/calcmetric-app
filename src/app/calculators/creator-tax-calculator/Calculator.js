"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

const SINGLE_BRACKETS = [
  [12400, 0.10],
  [50400, 0.12],
  [105700, 0.22],
  [201775, 0.24],
  [256225, 0.32],
  [640600, 0.35],
  [Infinity, 0.37],
];
const STD = { single: 16100, mfj: 32200 };

function federalTax(taxable, filing) {
  const mult = filing === "mfj" ? 2 : 1;
  let tax = 0;
  let prev = 0;
  for (const [cap, rate] of SINGLE_BRACKETS) {
    const upper = cap * mult;
    if (taxable > prev) {
      tax += (Math.min(taxable, upper) - prev) * rate;
      prev = upper;
    } else break;
  }
  return tax;
}

export default function Calculator() {
  const [adRevenue, setAdRevenue] = useState("");
  const [sponsorships, setSponsorships] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [filing, setFiling] = useState("single");

  const ads = parseFloat(adRevenue) || 0;
  const spon = parseFloat(sponsorships) || 0;
  const other = parseFloat(otherIncome) || 0;
  const exp = parseFloat(expenses) || 0;

  const errors = {};
  if (adRevenue !== "" && ads < 0) errors.adRevenue = "Revenue can't be negative.";
  if (sponsorships !== "" && spon < 0) errors.sponsorships = "Amount can't be negative.";
  if (otherIncome !== "" && other < 0) errors.otherIncome = "Amount can't be negative.";
  if (expenses !== "" && exp < 0) errors.expenses = "Expenses can't be negative.";

  const gross = ads + spon + other;
  const netProfit = Math.max(0, gross - exp);

  const seBase = netProfit * 0.9235;
  const seTax = seBase * 0.153;
  const halfSE = seTax / 2;
  const qbi = Math.max(0, (netProfit - halfSE) * 0.20);
  const taxable = Math.max(0, netProfit - halfSE - (STD[filing] || STD.single) - qbi);
  const fedTax = federalTax(taxable, filing);

  const totalTax = seTax + fedTax;
  const quarterly = totalTax / 4;
  const takeHome = netProfit - totalTax;
  const effRate = netProfit > 0 ? (totalTax / netProfit) * 100 : 0;

  const schemaData = {
    name: "Content Creator Tax Calculator 2026",
    description: "Estimate self-employment and federal taxes on YouTube, Twitch, and TikTok income, with quarterly payment amounts.",
    url: "https://www.themetricapp.com/calculators/creator-tax-calculator",
  };

  return (
    <CalculatorShell
      title="Content Creator Tax Calculator (2026)"
      subtitle="YouTube AdSense, Twitch subs, TikTok Creator Rewards, sponsorships — estimate the SE tax and federal income tax on your creator income, and what to set aside quarterly."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Net Creator Profit" value={fmt(netProfit)} sub="Income − expenses" />
          <ResultCard label="Self-Employment Tax" value={fmt(seTax)} sub="15.3% on 92.35% of net" />
          <ResultCard label="Federal Income Tax" value={fmt(fedTax)} sub="After std deduction & QBI" />
          <ResultCard label="Total Est. Tax" value={fmt(totalTax)} highlight sub={pct(effRate) + " of net profit"} />
          <ResultCard label="Quarterly Payment" value={fmt(quarterly)} sub="Due 4x per year" />
          <ResultCard label="After-Tax Take-Home" value={fmt(takeHome)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="adRevenue" label="Platform Payouts (Annual)" value={adRevenue} onChange={(e) => setAdRevenue(e.target.value)} prefix="$" placeholder="30000" helpText="AdSense, Twitch payouts, TikTok Creator Rewards — as received" />
          {errors.adRevenue && <p className="text-xs text-red-500 mt-1">{errors.adRevenue}</p>}
        </div>
        <div>
          <InputField id="sponsorships" label="Sponsorships & Brand Deals" value={sponsorships} onChange={(e) => setSponsorships(e.target.value)} prefix="$" placeholder="15000" helpText="Direct deals, affiliate income, UGC work" />
          {errors.sponsorships && <p className="text-xs text-red-500 mt-1">{errors.sponsorships}</p>}
        </div>
        <div>
          <InputField id="otherIncome" label="Other Creator Income" value={otherIncome} onChange={(e) => setOtherIncome(e.target.value)} prefix="$" placeholder="5000" helpText="Merch profit, donations/tips, channel memberships, Patreon" />
          {errors.otherIncome && <p className="text-xs text-red-500 mt-1">{errors.otherIncome}</p>}
        </div>
        <div>
          <InputField id="expenses" label="Business Expenses (Annual)" value={expenses} onChange={(e) => setExpenses(e.target.value)} prefix="$" placeholder="8000" helpText="Camera, PC, software, editors, home studio, internet share" />
          {errors.expenses && <p className="text-xs text-red-500 mt-1">{errors.expenses}</p>}
        </div>
        <SelectField
          id="filing"
          label="Filing Status"
          value={filing}
          onChange={(e) => setFiling(e.target.value)}
          options={[
            { value: "single", label: "Single" },
            { value: "mfj", label: "Married Filing Jointly" },
          ]}
          helpText="Assumes creating is your main income; standard deduction applied"
        />
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> Platforms issue 1099s (YouTube/Google, Twitch/Amazon, TikTok) at $600+. Free products from brand deals count as income at fair market value. Estimate excludes state tax; includes the 20% QBI deduction. Not tax advice.
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300"><strong>Last Updated:</strong> July 2026</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Author:</strong> Financial Metrics Team</span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS SE Tax</a>
          </span>
        </div>
      </div>

      <h2>How Are YouTubers, Streamers, and TikTokers Taxed?</h2>
      <p>
        All creator income — <strong>AdSense, Twitch subs and bits, TikTok Creator Rewards, sponsorships, affiliate commissions, donations, memberships, merch profit</strong> — is <strong>self-employment income</strong>. You owe 15.3% SE tax on net profit plus federal income tax at your bracket, and platforms send the IRS a <strong>1099</strong> once you cross $600. Even <strong>free products from brand deals count as taxable income</strong> at fair market value.
      </p>
      <p>
        The upside of business treatment: your camera, PC, editing software, editor payments, home studio, and internet share are all <strong>deductible</strong>, and most creators qualify for the <strong>20% QBI deduction</strong> on top.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your annual <strong>platform payouts</strong> (as received), <strong>sponsorship/brand income</strong>, <strong>other income</strong> (merch, tips, Patreon), and <strong>expenses</strong>. You&apos;ll see net profit, SE tax, federal income tax, total tax, the quarterly amount to set aside, and your true after-tax take-home.
      </p>

      <h2>The Math, With a Worked Example</h2>
      <p>
        <strong>Example:</strong> A streamer earns $30,000 in platform payouts, $15,000 in sponsorships, $5,000 in memberships, with $8,000 of expenses — net profit <strong>$42,000</strong>. SE tax ≈ <strong>$5,934</strong>. After half-SE, the standard deduction, and QBI, federal tax ≈ <strong>$1,567</strong>. Total ≈ <strong>$7,501</strong> (about 17.9% of net), or <strong>$1,875 per quarter</strong>.
      </p>

      <h2>Creator Deductions Checklist</h2>
      <p>
        <strong>Gear:</strong> cameras, mics, lights, PC/laptop, capture cards, phones (business share). <strong>Software:</strong> editing suites, streaming tools, music licensing, stock assets. <strong>People:</strong> editors, thumbnail artists, managers (issue them 1099s if you pay $600+). <strong>Space:</strong> home studio under home-office rules. <strong>Growth:</strong> ads, collabs travel, conference tickets. Track everything from the first month — the most common creator mistake is reconstructing a year of expenses in April.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>Do YouTubers and streamers have to pay taxes?</h3>
      <p>Yes — all creator income is self-employment income subject to 15.3% SE tax plus income tax. Platforms issue 1099s at $600+ and the IRS receives copies.</p>
      <h3>How much should creators set aside for taxes?</h3>
      <p>25–30% of net income is the safe rule for federal taxes; add your state's rate on top. Pay quarterly if you'll owe $1,000+.</p>
      <h3>Are free products from brand deals taxable?</h3>
      <p>Yes — products received in exchange for content count as income at fair market value, even with no cash involved.</p>
      <h3>Can I deduct my gaming PC or camera?</h3>
      <p>Yes, to the extent it's used for the business. Equipment can often be fully expensed in the purchase year under Section 179 / bonus depreciation.</p>
      <h3>Do Twitch bits and donations count as income?</h3>
      <p>Yes — bits, donations, tips, and memberships are all taxable business income, regardless of the word "donation."</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/onlyfans-tax-calculator">OnlyFans Tax Calculator</a> — Platform-fee-aware creator taxes.</li>
        <li><a href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</a> — The 15.3% SE tax in detail.</li>
        <li><a href="/calculators/tiktok-shop-earnings-calculator-2026">TikTok Shop Earnings Calculator</a> — Selling products on TikTok.</li>
      </ul>

      <RelatedCalculators currentPage="creator-tax-calculator" />
    </>
  );
}

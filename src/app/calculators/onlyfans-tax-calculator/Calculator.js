"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

// 2026 federal brackets (Single); MFJ ≈ double. Standard deduction 2026.
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
  const [grossEarnings, setGrossEarnings] = useState("");
  const [expenses, setExpenses] = useState("");
  const [filing, setFiling] = useState("single");

  const gross = parseFloat(grossEarnings) || 0;
  const exp = parseFloat(expenses) || 0;

  const errors = {};
  if (grossEarnings !== "" && gross < 0) errors.grossEarnings = "Earnings can't be negative.";
  if (expenses !== "" && exp < 0) errors.expenses = "Expenses can't be negative.";

  // OnlyFans keeps 20%; creator receives 80%. The 1099-NEC reports the GROSS,
  // and the 20% platform fee is deducted as a business expense.
  const platformFee = gross * 0.20;
  const creatorPayout = gross * 0.80;
  const netProfit = Math.max(0, gross - platformFee - exp);

  // SE tax: 92.35% of net × 15.3%
  const seBase = netProfit * 0.9235;
  const seTax = seBase * 0.153;
  const halfSE = seTax / 2;

  // Federal income tax: net − half SE − standard deduction − 20% QBI
  const qbi = Math.max(0, (netProfit - halfSE) * 0.20);
  const taxable = Math.max(0, netProfit - halfSE - (STD[filing] || STD.single) - qbi);
  const fedTax = federalTax(taxable, filing);

  const totalTax = seTax + fedTax;
  const quarterly = totalTax / 4;
  const takeHome = netProfit - totalTax;
  const effRate = netProfit > 0 ? (totalTax / netProfit) * 100 : 0;

  const schemaData = {
    name: "OnlyFans Tax Calculator 2026",
    description: "Estimate self-employment and federal income tax on your OnlyFans earnings, with the 20% platform fee and expenses deducted.",
    url: "https://www.themetricapp.com/calculators/onlyfans-tax-calculator",
  };

  return (
    <CalculatorShell
      title="OnlyFans Tax Calculator (2026)"
      subtitle="Estimate what you owe on OnlyFans income — SE tax, federal income tax, quarterly payments — with the 20% platform fee and your expenses deducted properly."
      schemaData={schemaData}
      noAds
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Net Business Profit" value={fmt(netProfit)} sub="After 20% fee & expenses" />
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
          <InputField id="grossEarnings" label="Gross OnlyFans Earnings (Annual)" value={grossEarnings} onChange={(e) => setGrossEarnings(e.target.value)} prefix="$" placeholder="60000" helpText="Before OnlyFans' 20% cut — what subscribers actually paid (matches your 1099)" />
          {errors.grossEarnings && <p className="text-xs text-red-500 mt-1">{errors.grossEarnings}</p>}
        </div>
        <div>
          <InputField id="expenses" label="Business Expenses (Annual)" value={expenses} onChange={(e) => setExpenses(e.target.value)} prefix="$" placeholder="5000" helpText="Equipment, props, lighting, internet share, home studio, software" />
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
          helpText="Assumes OnlyFans is your main income; standard deduction applied"
        />
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> Your 1099-NEC reports gross earnings before OnlyFans&apos; 20% cut — the fee is deducted here as a business expense automatically. Estimate excludes state income tax. Includes the 20% QBI deduction. Not tax advice; consult a CPA for your situation.
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

      <h2>Do You Pay Taxes on OnlyFans Income?</h2>
      <p>
        Yes — OnlyFans earnings are <strong>self-employment income</strong>, taxed exactly like any freelance business. You owe <strong>self-employment tax (15.3%)</strong> covering Social Security and Medicare, plus <strong>federal income tax</strong> at your bracket, plus state tax in most states. OnlyFans (Fenix International) issues a <strong>1099-NEC</strong> when you earn $600+ — and the IRS gets a copy, so unreported income is quickly flagged.
      </p>
      <p>
        A crucial detail: the 1099 reports your <strong>gross earnings before OnlyFans&apos; 20% cut</strong>. If subscribers paid $60,000, your 1099 says $60,000 even though you received $48,000. The <strong>20% platform fee is a deductible business expense</strong> — this calculator handles that automatically, so you&apos;re never taxed on money OnlyFans kept.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your <strong>gross annual earnings</strong> (before the 20% cut — the number your 1099 will show), your <strong>business expenses</strong>, and your filing status. You&apos;ll see your net profit, SE tax, federal income tax (with the standard deduction and 20% QBI deduction applied), total tax, the <strong>quarterly payment</strong> to set aside, and your true after-tax take-home.
      </p>

      <h2>The Math, With a Worked Example</h2>
      <p>
        <strong>Example:</strong> $60,000 gross, $5,000 expenses, single. Platform fee = $12,000, so net profit = <strong>$43,000</strong>. SE tax = $43,000 × 92.35% × 15.3% ≈ <strong>$6,076</strong>. After half-SE, the standard deduction, and QBI, federal income tax ≈ <strong>$1,656</strong>. Total ≈ <strong>$7,732</strong> — about 18% of net, or <strong>$1,933 per quarter</strong>. Setting aside 25–30% of every payout is the safe habit.
      </p>

      <h2>What Can OnlyFans Creators Deduct?</h2>
      <p>
        Anything <strong>ordinary and necessary</strong> for the business: cameras, lighting, phones (business-use share), props and costumes used solely for content, a <strong>home studio</strong> under the home-office rules, internet share, editing software and subscriptions, marketing and promo costs, agency or management fees, and the automatic 20% platform fee. Personal-use items (everyday clothing, cosmetic procedures, rent for space you also live in without a dedicated area) generally don&apos;t qualify. Keep receipts — creator audits have increased as the sector has grown.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>How much tax do I pay on OnlyFans income?</h3>
      <p>Typically 20–35% of net profit once SE tax (15.3%) and federal income tax combine — plus state tax. On $43,000 of net profit a single filer owes roughly $8,000 federally in 2026.</p>
      <h3>Does OnlyFans send a 1099?</h3>
      <p>Yes — a 1099-NEC when you earn $600 or more in a year, reporting your gross earnings before the platform's 20% cut. The IRS receives a copy.</p>
      <h3>Is the OnlyFans 20% fee tax deductible?</h3>
      <p>Yes. Because your 1099 reports gross earnings, the 20% platform fee is deducted as a business expense on Schedule C, so you're only taxed on what you actually received.</p>
      <h3>Do I need to pay quarterly taxes as a creator?</h3>
      <p>If you expect to owe $1,000+ for the year, yes — quarterly estimated payments (April, June, September, January) avoid underpayment penalties.</p>
      <h3>Can I deduct outfits and beauty expenses?</h3>
      <p>Only items used exclusively for content creation (costumes, props) qualify. Everyday clothing, general beauty treatments, and dual-use items are generally not deductible.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/creator-tax-calculator">Content Creator Tax Calculator</a> — YouTube, Twitch, and TikTok income taxes.</li>
        <li><a href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</a> — The 15.3% SE tax in detail.</li>
        <li><a href="/calculators/no-tax-on-tips-calculator-2026">No Tax on Tips Calculator</a> — Tips deduction for qualifying occupations.</li>
      </ul>

      <RelatedCalculators currentPage="onlyfans-tax-calculator" />
    </>
  );
}

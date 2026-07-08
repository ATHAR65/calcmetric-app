"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(2) + "%";

// IRS Uniform Lifetime Table (2022+) distribution periods by age.
const UNIFORM = {
  73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1, 80: 20.2,
  81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2, 87: 14.4, 88: 13.7,
  89: 12.9, 90: 12.2, 91: 11.5, 92: 10.8, 93: 10.1, 94: 9.5, 95: 8.9, 96: 8.4,
  97: 7.8, 98: 7.3, 99: 6.8, 100: 6.4,
};

export default function Calculator() {
  const [balance, setBalance] = useState("");
  const [age, setAge] = useState("");

  const bal = parseFloat(balance) || 0;
  const a = parseInt(age) || 0;

  const errors = {};
  if (balance !== "" && bal < 0) errors.balance = "Balance can't be negative.";
  if (age !== "" && (a < 1 || a > 120)) errors.age = "Enter a valid age.";

  const rmdAge = a >= 73;
  const divisor = UNIFORM[Math.min(Math.max(a, 73), 100)] || 6.4;
  const rmd = rmdAge && bal > 0 ? bal / divisor : 0;
  const rmdPct = bal > 0 ? (rmd / bal) * 100 : 0;
  const monthly = rmd / 12;
  const penaltyIfMissed = rmd * 0.25; // SECURE 2.0: 25% excise tax (10% if corrected timely)

  const schemaData = {
    name: "RMD Calculator 2026",
    description: "Calculate your 2026 Required Minimum Distribution from IRAs and 401(k)s using the IRS Uniform Lifetime Table.",
    url: "https://www.themetricapp.com/calculators/rmd-calculator-2026",
  };

  return (
    <CalculatorShell
      title="RMD Calculator (2026)"
      subtitle="Calculate your Required Minimum Distribution from traditional IRAs and 401(k)s using the IRS Uniform Lifetime Table — and avoid the steep penalty for missing it."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Your 2026 RMD" value={rmdAge ? fmt(rmd) : "$0.00"} highlight sub={rmdAge ? "Must withdraw this year" : "No RMD before age 73"} />
          <ResultCard label="Withdrawal Rate" value={rmdAge ? pct(rmdPct) : "—"} sub="Of account balance" />
          <ResultCard label="Monthly Equivalent" value={rmdAge ? fmt(monthly) : "$0.00"} sub="If taken evenly" />
          <ResultCard label="IRS Distribution Period" value={rmdAge ? divisor.toFixed(1) : "—"} sub={"Uniform Lifetime, age " + (a || "—")} />
          <ResultCard label="Penalty If Missed" value={rmdAge ? fmt(penaltyIfMissed) : "$0.00"} sub="25% excise tax (10% if fixed)" />
          <ResultCard label="Account Balance" value={fmt(bal)} sub="Prior Dec 31 value" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="balance" label="Account Balance (Prior Dec 31)" value={balance} onChange={(e) => setBalance(e.target.value)} prefix="$" placeholder="500000" helpText="Total IRA/401(k) balance on December 31 of last year" />
          {errors.balance && <p className="text-xs text-red-500 mt-1">{errors.balance}</p>}
        </div>
        <div>
          <InputField id="age" label="Your Age This Year" value={age} onChange={(e) => setAge(e.target.value)} placeholder="75" helpText="RMDs begin at age 73 under SECURE 2.0 (75 if born 1960+)" />
          {errors.age && <p className="text-xs text-red-500 mt-1">{errors.age}</p>}
          {age !== "" && a < 73 && <p className="text-xs text-teal-600 mt-1">No RMD required yet — they start at age 73.</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> Uses the IRS Uniform Lifetime Table (most account owners). If your sole beneficiary is a spouse more than 10 years younger, a different table applies. Roth IRAs have no RMDs for the original owner. Missing an RMD triggers a 25% excise tax (10% if corrected promptly).
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
            <strong>Source:</strong>{" "}
            <a href="https://www.irs.gov/retirement-plans/required-minimum-distributions-rmds" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS RMD Rules</a>
          </span>
        </div>
      </div>

      <h2>What Is a Required Minimum Distribution?</h2>
      <p>
        <strong>A Required Minimum Distribution (RMD) is the minimum amount you must withdraw each year from tax-deferred retirement accounts once you reach age 73.</strong> The IRS requires it so the taxes deferred for decades in traditional IRAs and 401(k)s finally get paid. Your RMD equals your prior-year-end balance divided by a life-expectancy factor from the IRS Uniform Lifetime Table — at 75, that factor is 24.6, so a $500,000 balance requires a <strong>$20,325</strong> withdrawal.
      </p>

      <h2>How to Use This RMD Calculator</h2>
      <p>
        Enter your <strong>account balance as of December 31 last year</strong> and your <strong>age this year</strong>. The calculator applies the correct IRS distribution period and shows your RMD, the equivalent withdrawal rate, a monthly figure, and the penalty you&apos;d face for missing it.
      </p>

      <h2>When Do RMDs Start? (SECURE 2.0 Rules)</h2>
      <p>
        Under <strong>SECURE 2.0</strong>, RMDs begin at <strong>age 73</strong> for those born 1951–1959, and rise to <strong>age 75</strong> for anyone born in 1960 or later. Your first RMD can be delayed until April 1 of the year after you turn 73 — but then you&apos;d take two in one year. <strong>Roth IRAs have no RMDs</strong> during the original owner&apos;s lifetime, and thanks to SECURE 2.0, Roth 401(k)s no longer require them either.
      </p>

      <h2>The Penalty and How to Reduce RMDs</h2>
      <p>
        Miss an RMD and the IRS charges a <strong>25% excise tax</strong> on the shortfall (reduced to 10% if you correct it promptly) — one of the harshest penalties in the tax code. To shrink future RMDs, consider <a href="/calculators/roth-vs-traditional-ira-calculator-2026">Roth conversions</a> in lower-income years before 73, or Qualified Charitable Distributions that satisfy the RMD without adding to taxable income. Large RMDs also affect how much of your <a href="/calculators/social-security-tax-calculator">Social Security is taxable</a> — plan withdrawals together.
      </p>
    </>
  );
}

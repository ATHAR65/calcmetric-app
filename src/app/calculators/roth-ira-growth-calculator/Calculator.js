"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtDecimal = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [balance, setBalance] = useState("10000");
  const [monthly, setMonthly] = useState("500");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [years, setYears] = useState("30");
  const [age, setAge] = useState("35");
  const [taxBracket, setTaxBracket] = useState("22");

  const currentBalance = parseFloat(balance) || 0;
  const monthlyContrib = parseFloat(monthly) || 0;
  const rate = parseFloat(annualReturn) || 0;
  const periods = parseInt(years) || 0;
  const currentAge = parseInt(age) || 0;
  const taxRate = parseFloat(taxBracket) || 0;

  const annualContrib = monthlyContrib * 12;
  const totalMonths = periods * 12;
  const monthlyRate = rate / 100 / 12;

  // Future value of Roth IRA (after-tax contributions, tax-free growth)
  let futureValue = 0;
  let totalContributions = 0;
  let totalGrowth = 0;

  if (monthlyRate > 0) {
    const growthFactor = Math.pow(1 + monthlyRate, totalMonths);
    futureValue = currentBalance * growthFactor + monthlyContrib * ((growthFactor - 1) / monthlyRate);
  } else {
    futureValue = currentBalance + monthlyContrib * totalMonths;
  }

  totalContributions = currentBalance + annualContrib * periods;
  totalGrowth = futureValue - totalContributions;

  // Tax-free withdrawal estimate (4% rule)
  const monthlyTaxFreeIncome = futureValue * 0.04 / 12;

  // Equivalent traditional IRA pre-tax value (to show Roth advantage)
  // For Roth: you pay tax now on contributions, withdraw tax-free
  // For Traditional: contributions are pre-tax, but you pay tax on withdrawals
  // The tax savings on Roth contributions (opportunity cost)
  const yearlyTaxSavingsRoth = annualContrib * (taxRate / 100); // How much MORE you pay vs traditional
  // But Roth withdrawals are tax-free, so we need to compare after-tax values
  const traditionalAfterTax = futureValue * (1 - taxRate / 100);
  const rothAfterTax = futureValue; // Already tax-free
  const rothAdvantage = rothAfterTax - traditionalAfterTax;

  // Yearly timeline
  const timeline = [];
  for (let y = 1; y <= periods; y++) {
    const m = y * 12;
    let val = 0;
    if (monthlyRate > 0) {
      const gf = Math.pow(1 + monthlyRate, m);
      val = currentBalance * gf + monthlyContrib * ((gf - 1) / monthlyRate);
    } else {
      val = currentBalance + monthlyContrib * m;
    }
    timeline.push({ year: y, value: val, age: currentAge + y });
  }

  const schemaData = {
    name: "Roth IRA Growth Calculator 2026",
    description: "Project your Roth IRA growth with compound interest, tax-free withdrawals, and contribution strategies. Free 2026 Roth IRA growth calculator for retirement planning.",
    url: "https://www.themetricapp.com/calculators/roth-ira-growth-calculator",
  };

  return (
    <CalculatorShell
      title="Roth IRA Growth Calculator 2026 — Tax-Free Compound Growth Projection"
      subtitle="Estimate how your Roth IRA will grow over time with compound interest. See your projected tax-free balance, total contributions, investment growth, and estimated monthly retirement income — all completely tax-free."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Projected Roth IRA Balance" value={fmt(futureValue)} sub={`Tax-free at age ${currentAge + periods}`} highlight />
            <ResultCard label="Your Contributions" value={fmt(totalContributions)} sub={`$${monthlyContrib}/month`} />
            <ResultCard label="Investment Growth" value={fmt(totalGrowth)} sub={`At ${rate}% annual return`} />
            <ResultCard label="Tax-Free Monthly Income" value={fmt(monthlyTaxFreeIncome)} sub="4% withdrawal rule — tax-free!" />
            <ResultCard label="Roth Advantage vs Traditional" value={fmt(rothAdvantage)} sub={`In ${taxRate}% tax bracket — you keep more`} />
            <ResultCard label="Annual Contribution" value={fmt(annualContrib)} sub={`2026 limit: $7,000 ($8,000 if 50+)`} />
          </div>

          {/* Roth vs Traditional comparison */}
          <div className="mt-4 p-4 bg-[#EEF2FF] dark:bg-[#6366F1]/10 rounded-xl border border-[#6366F1]/15">
            <p className="text-sm font-semibold text-[#6366F1] mb-3">⚖️ Roth IRA vs Traditional IRA — After-Tax Comparison</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-green-200 dark:border-green-700">
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wider">Roth IRA (Tax-Free)</p>
                <p className="text-lg font-bold text-[#111827] dark:text-white mt-1">{fmt(rothAfterTax)}</p>
                <p className="text-xs text-[#64748B]">Withdraw tax-free in retirement</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-amber-200 dark:border-amber-700">
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Traditional IRA (Taxable)</p>
                <p className="text-lg font-bold text-[#111827] dark:text-white mt-1">{fmt(traditionalAfterTax)}</p>
                <p className="text-xs text-[#64748B]">After {taxRate}% tax on withdrawal</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          {timeline.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#6366F1] mb-3">📈 Growth Over Time</p>
              <div className="space-y-1.5">
                {timeline.map((pt) => {
                  const maxVal = timeline[timeline.length - 1].value;
                  const pct = maxVal > 0 ? (pt.value / maxVal) * 100 : 0;
                  return (
                    <div key={pt.year} className="flex items-center gap-3 text-sm">
                      <span className="w-24 text-right text-[#64748B] shrink-0">Age {pt.age}</span>
                      <div className="flex-1 h-6 rounded-md bg-[#F1F5F9] dark:bg-slate-700 overflow-hidden">
                        <div
                          className="h-full rounded-md bg-gradient-to-r from-[#6366F1] to-[#818CF8] transition-all duration-500 flex items-center px-2"
                          style={{ width: Math.max(2, pct) + "%" }}
                        >
                          <span className="text-xs font-semibold text-white whitespace-nowrap">{fmt(pt.value)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="balance" label="Current Roth IRA Balance" value={balance} onChange={(e) => setBalance(e.target.value)} prefix="$" placeholder="10000" helpText="What you have saved so far" />
        <InputField id="monthly" label="Monthly Contribution" value={monthly} onChange={(e) => setMonthly(e.target.value)} prefix="$" placeholder="500" helpText="How much you add each month" />
        <InputField id="annualReturn" label="Expected Annual Return" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} suffix="%" placeholder="7" helpText="Long-term average ~7% for S&P 500" />
        <InputField id="years" label="Years Until Retirement" value={years} onChange={(e) => setYears(e.target.value)} suffix="years" placeholder="30" helpText="How many years of growth" />
        <InputField id="age" label="Your Current Age" value={age} onChange={(e) => setAge(e.target.value)} suffix="years" placeholder="35" helpText="Used to show age milestones" />
        <InputField id="taxBracket" label="Your Tax Bracket" value={taxBracket} onChange={(e) => setTaxBracket(e.target.value)} suffix="%" placeholder="22" helpText="Your current federal tax rate" />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300"><strong>Last Updated:</strong> May 2026</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Author:</strong> Financial Metrics Team</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Sources:</strong>{" "}
            <a href="https://www.irs.gov/retirement-plans/roth-iras" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS — Roth IRAs</a>
            {" · "}
            <a href="https://www.investopedia.com/terms/r/rothira.asp" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Investopedia — Roth IRA Guide</a>
          </span>
        </div>
      </div>

      <h2>How to Use the Roth IRA Growth Calculator</h2>
      <p>Enter your <strong>current Roth IRA balance</strong>, <strong>monthly contribution</strong>, <strong>expected annual return</strong>, <strong>years until retirement</strong>, and <strong>tax bracket</strong>. The calculator shows your projected balance, total contributions, investment growth, and a Roth vs Traditional comparison.</p>
      <p>The Roth IRA is unique because contributions are made with after-tax dollars, but all withdrawals in retirement are <strong>completely tax-free</strong> — including all the growth!</p>

      <h2>Roth IRA Formula & Methodology</h2>
      <p><strong>Future Value = P × (1 + r)^n + PMT × [((1 + r)^n − 1) / r]</strong></p>
      <p>Where P = current balance, PMT = monthly contribution, r = monthly return rate, n = months. The Roth advantage is calculated by comparing after-tax withdrawals from a Roth IRA (tax-free) vs a Traditional IRA (taxed at your current rate).</p>

      <h2>2026 Roth IRA Contribution Limits</h2>
      <ul>
        <li>Under 50: <strong>$7,000/year</strong></li>
        <li>Age 50+: <strong>$8,000/year</strong> (includes $1,000 catch-up)</li>
        <li>Income limits for direct contributions: Single MAGI under $161,000 (phase-out starts at $146,000), Married filing jointly under $240,000 (phase-out starts at $230,000)</li>
        <li>Backdoor Roth IRA strategy available for high earners — contribute to Traditional IRA then convert to Roth</li>
      </ul>

      <h2>Why a Roth IRA is Powerful</h2>
      <ul>
        <li><strong>Tax-free growth:</strong> All investment gains grow tax-free — no capital gains tax, no dividend tax, no tax on withdrawals</li>
        <li><strong>Tax-free withdrawals:</strong> In retirement, every dollar you withdraw is completely tax-free</li>
        <li><strong>No RMDs:</strong> Unlike Traditional IRAs, Roth IRAs have no Required Minimum Distributions</li>
        <li><strong>Flexibility:</strong> You can withdraw contributions (not earnings) at any time without penalty</li>
      </ul>

      <h2>Roth IRA vs Traditional IRA: Which is Better?</h2>
      <p><strong>Roth IRA is better if:</strong> You expect to be in a higher tax bracket in retirement, you want tax-free income, you want to avoid RMDs, or you're early in your career (lower tax bracket now).</p>
      <p><strong>Traditional IRA is better if:</strong> You need the tax deduction now (higher current tax bracket), you expect lower income in retirement, or you need to reduce your AGI for other tax benefits.</p>

      <h2>Related Tools</h2>
      <ul>
        <li><Link href="/calculators/roth-vs-traditional-ira-calculator-2026">Roth vs Traditional IRA Calculator</Link> — Detailed comparison</li>
        <li><Link href="/calculators/401k-retirement-calculator">401(k) Retirement Calculator</Link> — Employer-sponsored retirement</li>
        <li><Link href="/calculators/solo-401k-contribution-calculator">Solo 401k Contribution Calculator</Link> — For self-employed</li>
        <li><Link href="/calculators/retirement-savings-calculator-2026">Retirement Savings Calculator</Link> — Full retirement planning</li>
      </ul>

      <RelatedCalculators currentPage="roth-ira-growth-calculator" />
    </>
  );
}

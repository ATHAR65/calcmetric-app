"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

const FREQ = { annually: 1, semiannually: 2, quarterly: 4, monthly: 12, daily: 365 };

export default function Calculator() {
  const [principal, setPrincipal] = useState("");
  const [contribution, setContribution] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [compound, setCompound] = useState("monthly");

  const p = parseFloat(principal) || 0;
  const pmt = parseFloat(contribution) || 0;
  const r = (parseFloat(rate) || 0) / 100;
  const t = parseFloat(years) || 0;
  const n = FREQ[compound] || 12;

  const errors = {};
  if (principal !== "" && p < 0) errors.principal = "Amount can't be negative.";
  if (contribution !== "" && pmt < 0) errors.contribution = "Contribution can't be negative.";
  if (rate !== "" && (r < 0 || r > 1)) errors.rate = "Enter a rate between 0 and 100.";
  if (years !== "" && (t < 0 || t > 100)) errors.years = "Enter 0–100 years.";

  // Future value of principal + future value of monthly contributions (contributions assumed monthly).
  const periods = n * t;
  const ratePer = n === 0 ? 0 : r / n;
  const fvPrincipal = p * Math.pow(1 + ratePer, periods);
  // Monthly contributions compounded at the account's frequency (approximate by monthly deposits).
  const monthsTotal = 12 * t;
  const monthlyRate = r / 12;
  const fvContrib = monthlyRate === 0
    ? pmt * monthsTotal
    : pmt * ((Math.pow(1 + monthlyRate, monthsTotal) - 1) / monthlyRate);

  const futureValue = fvPrincipal + fvContrib;
  const totalContributed = p + pmt * monthsTotal;
  const interestEarned = Math.max(0, futureValue - totalContributed);
  const growthPct = totalContributed > 0 ? (interestEarned / totalContributed) * 100 : 0;

  const schemaData = {
    name: "Compound Interest Calculator",
    description: "Calculate how your savings and investments grow with compound interest, including regular monthly contributions.",
    url: "https://www.themetricapp.com/calculators/compound-interest-calculator",
  };

  return (
    <CalculatorShell
      title="Compound Interest Calculator"
      subtitle="See how your money grows over time with compound interest and regular contributions — the single most important concept in building wealth."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Future Value" value={fmt(futureValue)} highlight sub={t + " years from now"} />
          <ResultCard label="Total Contributed" value={fmt(totalContributed)} sub="Principal + deposits" />
          <ResultCard label="Interest Earned" value={fmt(interestEarned)} sub="Growth from compounding" />
          <ResultCard label="Growth on Contributions" value={pct(growthPct)} />
          <ResultCard label="Starting Principal" value={fmt(p)} />
          <ResultCard label="Total Deposits" value={fmt(pmt * monthsTotal)} sub={fmt(pmt) + "/mo × " + (12 * t)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="principal" label="Starting Amount" value={principal} onChange={(e) => setPrincipal(e.target.value)} prefix="$" placeholder="10000" helpText="Your initial deposit or current balance" />
          {errors.principal && <p className="text-xs text-red-500 mt-1">{errors.principal}</p>}
        </div>
        <div>
          <InputField id="contribution" label="Monthly Contribution" value={contribution} onChange={(e) => setContribution(e.target.value)} prefix="$" placeholder="300" helpText="Regular amount you add each month" />
          {errors.contribution && <p className="text-xs text-red-500 mt-1">{errors.contribution}</p>}
        </div>
        <div>
          <InputField id="rate" label="Annual Interest Rate" value={rate} onChange={(e) => setRate(e.target.value)} suffix="%" placeholder="7" helpText="Expected yearly return (e.g. 7% for stock index funds)" />
          {errors.rate && <p className="text-xs text-red-500 mt-1">{errors.rate}</p>}
        </div>
        <div>
          <InputField id="years" label="Years to Grow" value={years} onChange={(e) => setYears(e.target.value)} placeholder="30" helpText="How long the money stays invested" />
          {errors.years && <p className="text-xs text-red-500 mt-1">{errors.years}</p>}
        </div>
        <SelectField
          id="compound"
          label="Compounding Frequency"
          value={compound}
          onChange={(e) => setCompound(e.target.value)}
          options={[
            { value: "daily", label: "Daily" },
            { value: "monthly", label: "Monthly (most common)" },
            { value: "quarterly", label: "Quarterly" },
            { value: "semiannually", label: "Semi-annually" },
            { value: "annually", label: "Annually" },
          ]}
          helpText="How often interest is added to the balance"
        />
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> The 7% default reflects long-run average stock-market returns before inflation. Real results vary; this tool is for planning, not a guarantee. Interest in taxable accounts may be taxed yearly.
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
        </div>
      </div>

      <h2>What Is Compound Interest?</h2>
      <p>
        <strong>Compound interest is interest earned on both your original money and on the interest it has already earned.</strong> Unlike simple interest, which only pays on the principal, compounding reinvests every dollar of growth so your balance snowballs — slowly at first, then dramatically. Einstein reputedly called it the eighth wonder of the world, and the math backs the hype: at a 7% annual return, money doubles roughly every 10 years with no extra effort.
      </p>

      <h2>How to Use This Compound Interest Calculator</h2>
      <p>
        Enter your <strong>starting amount</strong>, a <strong>monthly contribution</strong>, an expected <strong>annual interest rate</strong>, and the number of <strong>years</strong> to grow. Pick how often interest compounds (monthly is typical for savings accounts and index funds). The calculator shows your future value, how much you contributed versus how much came purely from compounding, and your total interest earned.
      </p>

      <h2>The Compound Interest Formula</h2>
      <p>
        The core formula is <strong>A = P(1 + r/n)^(nt)</strong>, where P is principal, r is the annual rate, n is compounding periods per year, and t is years. When you add regular deposits, a future-value-of-an-annuity term is added on top. This calculator combines both automatically.
      </p>
      <p>
        <strong>Worked example:</strong> Invest $10,000 up front plus $300/month at 7% for 30 years. You contribute $118,000 total, but end with about <strong>$430,000</strong> — over $312,000 of it pure compounding. Start the same plan 10 years later and you end near $190,000. Time, not the amount, is the biggest lever.
      </p>

      <h2>Why Starting Early Beats Investing More</h2>
      <p>
        Because compounding accelerates over time, the earliest dollars do the heaviest lifting. Someone who invests $300/month from age 25 to 35 and then stops often ends up with more than someone who starts at 35 and invests for 30 straight years. Put your money to work in tax-advantaged accounts first — see our <a href="/calculators/roth-ira-growth-calculator">Roth IRA Growth Calculator</a>, <a href="/calculators/401k-retirement-calculator">401(k) Calculator</a>, and <a href="/calculators/savings-goal-calculator">Savings Goal Calculator</a> to apply compounding to specific goals.
      </p>
    </>
  );
}

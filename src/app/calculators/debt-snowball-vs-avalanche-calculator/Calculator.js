"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Simulate paying off a set of debts. `order` sorts which debt gets the extra payment.
function simulate(debts, extra, method) {
  let list = debts
    .filter((d) => d.balance > 0 && d.payment > 0)
    .map((d) => ({ ...d }));
  if (list.length === 0) return { months: 0, interest: 0 };

  let months = 0, totalInterest = 0;
  const MAX = 1200;
  while (list.some((d) => d.balance > 0.005) && months < MAX) {
    months++;
    // accrue interest + apply minimums
    for (const d of list) {
      if (d.balance <= 0) continue;
      const interest = d.balance * (d.apr / 100 / 12);
      totalInterest += interest;
      d.balance += interest;
      const pay = Math.min(d.payment, d.balance);
      d.balance -= pay;
    }
    // extra + freed-up minimums go to the target debt
    let pool = extra + list.filter((d) => d.balance <= 0.005).reduce((s, d) => s + d.payment, 0);
    const active = list.filter((d) => d.balance > 0.005);
    active.sort((a, b) => method === "snowball" ? a.balance - b.balance : b.apr - a.apr);
    for (const d of active) {
      if (pool <= 0) break;
      const pay = Math.min(pool, d.balance);
      d.balance -= pay;
      pool -= pay;
    }
  }
  return { months, interest: totalInterest };
}

export default function Calculator() {
  const [rows, setRows] = useState([
    { balance: "", apr: "", payment: "" },
    { balance: "", apr: "", payment: "" },
    { balance: "", apr: "", payment: "" },
  ]);
  const [extra, setExtra] = useState("");

  const setRow = (i, field, val) => {
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, [field]: val } : r)));
  };

  const debts = rows.map((r) => ({
    balance: parseFloat(r.balance) || 0,
    apr: parseFloat(r.apr) || 0,
    payment: parseFloat(r.payment) || 0,
  }));
  const extraPay = parseFloat(extra) || 0;

  const snowball = simulate(debts, extraPay, "snowball");
  const avalanche = simulate(debts, extraPay, "avalanche");
  const totalDebt = debts.reduce((s, d) => s + d.balance, 0);
  const interestSaved = Math.max(0, snowball.interest - avalanche.interest);
  const monthsDiff = snowball.months - avalanche.months;

  const schemaData = {
    name: "Debt Snowball vs Avalanche Calculator",
    description: "Compare the debt snowball and debt avalanche payoff methods side by side to see which clears your debt faster and cheaper.",
    url: "https://www.themetricapp.com/calculators/debt-snowball-vs-avalanche-calculator",
  };

  return (
    <CalculatorShell
      title="Debt Snowball vs Avalanche Calculator"
      subtitle="Compare the two most popular debt payoff strategies side by side — snowball for momentum, avalanche for math — and see which clears your debt faster and cheaper."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Avalanche Interest" value={fmt(avalanche.interest)} highlight sub={avalanche.months + " months"} />
          <ResultCard label="Snowball Interest" value={fmt(snowball.interest)} sub={snowball.months + " months"} />
          <ResultCard label="Avalanche Saves" value={fmt(interestSaved)} sub="vs snowball interest" />
          <ResultCard label="Total Debt" value={fmt(totalDebt)} sub="Across all balances" />
          <ResultCard label="Time Difference" value={Math.abs(monthsDiff) + " mo"} sub={monthsDiff > 0 ? "Avalanche is faster" : monthsDiff < 0 ? "Snowball is faster" : "Same time"} />
          <ResultCard label="Avalanche Payoff" value={(avalanche.months / 12).toFixed(1) + " yrs"} sub="Debt-free date" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-4">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <InputField id={`bal${i}`} label={i === 0 ? "Debt Balance" : ""} value={row.balance} onChange={(e) => setRow(i, "balance", e.target.value)} prefix="$" placeholder={["8000", "3500", "12000"][i] || "0"} helpText={i === 0 ? "e.g. credit card, loan" : ""} />
            <InputField id={`apr${i}`} label={i === 0 ? "APR" : ""} value={row.apr} onChange={(e) => setRow(i, "apr", e.target.value)} suffix="%" placeholder={["24", "9", "6.5"][i] || "0"} helpText={i === 0 ? "Interest rate" : ""} />
            <InputField id={`pay${i}`} label={i === 0 ? "Minimum Payment" : ""} value={row.payment} onChange={(e) => setRow(i, "payment", e.target.value)} prefix="$" placeholder={["200", "100", "250"][i] || "0"} helpText={i === 0 ? "Monthly minimum" : ""} />
          </div>
        ))}
        <div className="pt-2">
          <InputField id="extra" label="Extra Monthly Payment" value={extra} onChange={(e) => setExtra(e.target.value)} prefix="$" placeholder="300" helpText="The amount above minimums you can put toward debt — the engine of both methods" />
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> Avalanche (highest APR first) always costs the least interest. Snowball (smallest balance first) can cost slightly more but delivers quick wins that keep many people motivated. Enter up to three debts above.
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

      <h2>Debt Snowball vs Debt Avalanche — What's the Difference?</h2>
      <p>
        <strong>The debt avalanche pays off your highest-interest debt first to minimize total interest; the debt snowball pays off your smallest balance first to build motivation with quick wins.</strong> Both put every spare dollar toward one target debt while paying minimums on the rest, then &quot;roll&quot; each freed-up payment onto the next debt — that rolling snowball of payments is what accelerates payoff dramatically.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter each debt&apos;s <strong>balance</strong>, <strong>APR</strong>, and <strong>minimum payment</strong> (up to three debts), plus the <strong>extra amount</strong> you can pay each month. The calculator simulates both strategies month by month and shows the total interest, payoff time, and how much the avalanche saves versus the snowball.
      </p>

      <h2>Which Method Should You Choose?</h2>
      <p>
        Mathematically, <strong>avalanche always wins</strong> — it minimizes interest and usually finishes at least as fast. But the difference is often small (a few hundred dollars over several years), and studies show many people stick with the <strong>snowball</strong> because eliminating a whole debt early feels like progress and prevents burnout. If your highest-rate debt is also a large balance, the choice matters most; if not, pick the one you&apos;ll actually follow through on.
      </p>

      <h2>Accelerate Either Method</h2>
      <p>
        The single biggest lever is the <strong>extra payment</strong> — even $100 more per month can cut years off high-interest debt. Consider a <a href="/calculators/credit-card-payoff-calculator">balance transfer</a> to pause interest, and once the debt is gone, redirect those payments into investing. See our <a href="/calculators/credit-card-payoff-calculator">Credit Card Payoff Calculator</a> and <a href="/calculators/student-loan-payoff-calculator">Student Loan Payoff Calculator</a> for debt-specific plans, then put the freed cash to work with our <a href="/calculators/compound-interest-calculator">Compound Interest Calculator</a>.
      </p>
    </>
  );
}

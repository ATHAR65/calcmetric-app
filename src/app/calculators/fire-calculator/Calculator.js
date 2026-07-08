"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function Calculator() {
  const [age, setAge] = useState("");
  const [current, setCurrent] = useState("");
  const [expenses, setExpenses] = useState("");
  const [annualSaving, setAnnualSaving] = useState("");
  const [rate, setRate] = useState("7");
  const [withdrawal, setWithdrawal] = useState("4");

  const a = parseFloat(age) || 0;
  const cur = parseFloat(current) || 0;
  const exp = parseFloat(expenses) || 0;
  const save = parseFloat(annualSaving) || 0;
  const r = (parseFloat(rate) || 0) / 100;
  const wr = (parseFloat(withdrawal) || 0) / 100;

  const errors = {};
  if (age !== "" && (a < 0 || a > 100)) errors.age = "Enter a valid age.";
  if (current !== "" && cur < 0) errors.current = "Amount can't be negative.";
  if (expenses !== "" && exp < 0) errors.expenses = "Expenses can't be negative.";
  if (annualSaving !== "" && save < 0) errors.annualSaving = "Savings can't be negative.";
  if (withdrawal !== "" && (wr <= 0 || wr > 0.2)) errors.withdrawal = "Enter 1–20%.";

  const fireNumber = wr > 0 ? exp / wr : 0;

  // Years to FIRE: grow current + annual savings at r until reaching fireNumber
  let bal = cur, years = 0;
  const MAX = 80;
  if (fireNumber > 0 && (cur < fireNumber)) {
    while (bal < fireNumber && years < MAX) {
      bal = bal * (1 + r) + save;
      years++;
    }
  }
  const reached = bal >= fireNumber && fireNumber > 0;
  const fireAge = reached ? a + years : 0;

  // Coast FIRE: amount needed NOW so that, with no further contributions, it grows
  // to the FIRE number by age 65.
  const yearsTo65 = Math.max(0, 65 - a);
  const coastNumber = fireNumber / Math.pow(1 + r, yearsTo65);
  const coastReached = cur >= coastNumber && coastNumber > 0;

  const schemaData = {
    name: "FIRE Calculator",
    description: "Calculate your FIRE number, years to financial independence, and Coast FIRE target based on your savings rate and expenses.",
    url: "https://www.themetricapp.com/calculators/fire-calculator",
  };

  return (
    <CalculatorShell
      title="FIRE Calculator"
      subtitle="Find your FIRE number, how many years until financial independence, and your Coast FIRE target — the amount that lets you stop saving and still retire on time."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Your FIRE Number" value={fmt(fireNumber)} highlight sub={"Expenses ÷ " + withdrawal + "% rule"} />
          <ResultCard label="Years to FIRE" value={reached ? years + " yrs" : "80+ yrs"} sub={reached ? "At current savings rate" : "Increase savings"} />
          <ResultCard label="FIRE Age" value={reached ? Math.round(fireAge) : "—"} sub={reached ? "Age you reach FI" : "Not reached by 80"} />
          <ResultCard label="Coast FIRE Number" value={fmt(coastNumber)} sub={"Needed now to coast to 65"} />
          <ResultCard label="Coast FIRE Status" value={coastReached ? "Reached ✓" : "Not yet"} sub={coastReached ? "You can stop saving" : "Keep contributing"} />
          <ResultCard label="Annual Withdrawal at FI" value={fmt(exp)} sub={"At " + withdrawal + "% of FIRE number"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="age" label="Current Age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="30" helpText="Used for FIRE age and Coast FIRE" />
          {errors.age && <p className="text-xs text-red-500 mt-1">{errors.age}</p>}
        </div>
        <div>
          <InputField id="current" label="Current Invested Savings" value={current} onChange={(e) => setCurrent(e.target.value)} prefix="$" placeholder="80000" helpText="Total in retirement and brokerage accounts" />
          {errors.current && <p className="text-xs text-red-500 mt-1">{errors.current}</p>}
        </div>
        <div>
          <InputField id="expenses" label="Annual Expenses in Retirement" value={expenses} onChange={(e) => setExpenses(e.target.value)} prefix="$" placeholder="50000" helpText="What you expect to spend per year once retired" />
          {errors.expenses && <p className="text-xs text-red-500 mt-1">{errors.expenses}</p>}
        </div>
        <div>
          <InputField id="annualSaving" label="Annual Amount You Invest" value={annualSaving} onChange={(e) => setAnnualSaving(e.target.value)} prefix="$" placeholder="30000" helpText="How much you add to investments each year" />
          {errors.annualSaving && <p className="text-xs text-red-500 mt-1">{errors.annualSaving}</p>}
        </div>
        <div>
          <InputField id="rate" label="Expected Annual Return" value={rate} onChange={(e) => setRate(e.target.value)} suffix="%" placeholder="7" helpText="Real (after-inflation) return, ~7% for stocks" />
        </div>
        <div>
          <InputField id="withdrawal" label="Safe Withdrawal Rate" value={withdrawal} onChange={(e) => setWithdrawal(e.target.value)} suffix="%" placeholder="4" helpText="The 4% rule is the classic FIRE assumption" />
          {errors.withdrawal && <p className="text-xs text-red-500 mt-1">{errors.withdrawal}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> The 4% rule (25× annual expenses) comes from the Trinity Study and assumes a 30-year retirement. Early retirees often use 3.25–3.5% for longer horizons. Returns are modeled as real (after inflation); markets are not guaranteed.
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

      <h2>What Is Your FIRE Number?</h2>
      <p>
        <strong>Your FIRE number is the amount you need invested to live off withdrawals forever — usually 25 times your annual expenses, based on the 4% safe withdrawal rule.</strong> If you spend $50,000 a year, your FIRE number is $1.25 million. Once your portfolio hits that figure, a 4% annual withdrawal ($50,000) should sustain a 30-year-plus retirement without running out, according to the Trinity Study.
      </p>

      <h2>How to Use This FIRE Calculator</h2>
      <p>
        Enter your <strong>age</strong>, <strong>current invested savings</strong>, expected <strong>annual expenses in retirement</strong>, and how much you <strong>invest each year</strong>. Set your expected return and withdrawal rate. The calculator returns your FIRE number, the years and age at which you reach it, and your Coast FIRE target.
      </p>

      <h2>What Is Coast FIRE?</h2>
      <p>
        <strong>Coast FIRE is the amount you need invested today so that, without adding another dollar, it grows to your full FIRE number by traditional retirement age.</strong> Once you hit Coast FIRE, your existing investments &quot;coast&quot; to the finish line — you only need to earn enough to cover current expenses and can stop retirement saving entirely. It&apos;s a popular milestone because it buys freedom to take a lower-paying but more fulfilling job.
      </p>

      <h2>The Levers That Move Your FIRE Date</h2>
      <p>
        Your <strong>savings rate</strong> is the dominant factor — saving 50% of income reaches FIRE in roughly 17 years regardless of income level, versus 40+ years at a 10% rate. Cutting expenses does double duty: it raises your savings rate <em>and</em> lowers your FIRE number. Model the growth side with our <a href="/calculators/compound-interest-calculator">Compound Interest Calculator</a> and fund it tax-efficiently using our <a href="/calculators/roth-vs-traditional-ira-calculator-2026">Roth vs Traditional IRA</a> and <a href="/calculators/401k-retirement-calculator">401(k) calculators</a>.
      </p>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function Calculator() {
  const [income, setIncome] = useState("5000");
  const [housing, setHousing] = useState("1500");
  const [food, setFood] = useState("500");
  const [transport, setTransport] = useState("400");
  const [utilities, setUtilities] = useState("250");
  const [insurance, setInsurance] = useState("300");
  const [debt, setDebt] = useState("400");
  const [entertainment, setEntertainment] = useState("200");
  const [savings, setSavings] = useState("500");
  const [other, setOther] = useState("300");

  const monthlyIncome = parseFloat(income) || 0;
  const expenses = {
    housing: parseFloat(housing) || 0,
    food: parseFloat(food) || 0,
    transport: parseFloat(transport) || 0,
    utilities: parseFloat(utilities) || 0,
    insurance: parseFloat(insurance) || 0,
    debt: parseFloat(debt) || 0,
    entertainment: parseFloat(entertainment) || 0,
    savings: parseFloat(savings) || 0,
    other: parseFloat(other) || 0,
  };

  const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);
  const remaining = monthlyIncome - totalExpenses;
  const savingsRate = monthlyIncome > 0 ? (expenses.savings / monthlyIncome) * 100 : 0;
  const housingRate = monthlyIncome > 0 ? (expenses.housing / monthlyIncome) * 100 : 0;
  const needsTotal = expenses.housing + expenses.food + expenses.transport + expenses.utilities + expenses.insurance;
  const wantsTotal = expenses.entertainment + expenses.other;
  const needsRate = monthlyIncome > 0 ? (needsTotal / monthlyIncome) * 100 : 0;
  const wantsRate = monthlyIncome > 0 ? (wantsTotal / monthlyIncome) * 100 : 0;
  const debtRate = monthlyIncome > 0 ? (expenses.debt / monthlyIncome) * 100 : 0;

  const schemaData = {
    name: "Budget Calculator 2026",
    description: "Create a detailed monthly budget to track income, expenses, and savings. Free 2026 budget calculator with 50/30/20 rule analysis and category breakdowns.",
    url: "https://www.themetricapp.com/calculators/budget-calculator",
  };

  return (
    <CalculatorShell
      title="Budget Calculator 2026 — Track Your Income, Expenses &amp; Savings Goals"
      subtitle="Create a comprehensive monthly budget to understand your spending patterns, track your savings rate, and optimize your finances with the 50/30/20 rule breakdown."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Monthly Income" value={fmt(monthlyIncome)} highlight />
            <ResultCard label="Total Expenses" value={fmt(totalExpenses)} sub={`${monthlyIncome > 0 ? ((totalExpenses / monthlyIncome) * 100).toFixed(1) : 0}% of income`} />
            <ResultCard label="Remaining" value={fmt(remaining)} sub={remaining >= 0 ? "✅ On track!" : "⚠️ Overspending"} />
            <ResultCard label="Savings Rate" value={`${savingsRate.toFixed(1)}%`} sub={savingsRate >= 20 ? "✅ Great!" : savingsRate >= 10 ? "👍 Good" : "⚠️ Low"} />
            <ResultCard label="Housing Costs" value={fmt(expenses.housing)} sub={`${housingRate.toFixed(1)}% of income (target < 30%)`} />
            <ResultCard label="Debt Payments" value={fmt(expenses.debt)} sub={`${debtRate.toFixed(1)}% of income`} />
          </div>

          {/* 50/30/20 Rule */}
          <div className="mt-4 p-4 bg-[#EEF2FF] dark:bg-[#6366F1]/10 rounded-xl border border-[#6366F1]/15">
            <p className="text-sm font-semibold text-[#6366F1] mb-3">📊 50/30/20 Rule Analysis</p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-[#111827] dark:text-[#F9FAFB]">Needs (50% target)</span>
                  <span className={needsRate <= 55 ? "text-green-600" : "text-red-600"}>{needsRate.toFixed(1)}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-[#6366F1] rounded-full transition-all" style={{ width: Math.min(needsRate, 100) + "%" }} />
                </div>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">Housing, food, transport, utilities, insurance: {fmt(needsTotal)}</p>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-[#111827] dark:text-[#F9FAFB]">Wants (30% target)</span>
                  <span className={wantsRate <= 35 ? "text-green-600" : "text-red-600"}>{wantsRate.toFixed(1)}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F59E0B] rounded-full transition-all" style={{ width: Math.min(wantsRate, 100) + "%" }} />
                </div>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">Entertainment, shopping, other: {fmt(wantsTotal)}</p>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-[#111827] dark:text-[#F9FAFB]">Savings (20% target)</span>
                  <span className={savingsRate >= 15 ? "text-green-600" : "text-red-600"}>{savingsRate.toFixed(1)}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0D9488] rounded-full transition-all" style={{ width: Math.min(savingsRate, 100) + "%" }} />
                </div>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">Savings & debt payments: {fmt(expenses.savings)} saved</p>
              </div>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-[#6366F1] mb-3">Expense Breakdown</p>
            <div className="space-y-1.5">
              {Object.entries(expenses).map(([key, val]) => {
                const pct = totalExpenses > 0 ? (val / totalExpenses) * 100 : 0;
                const labels = { housing: "🏠 Housing", food: "🍕 Food & Groceries", transport: "🚗 Transport", utilities: "💡 Utilities", insurance: "🛡️ Insurance", debt: "💳 Debt Payments", entertainment: "🎬 Entertainment", savings: "🏦 Savings", other: "📦 Other" };
                return (
                  <div key={key} className="flex items-center gap-3 text-sm">
                    <span className="w-36 text-right text-[#64748B] shrink-0">{labels[key]}</span>
                    <div className="flex-1 h-6 rounded-md bg-[#F1F5F9] dark:bg-slate-700 overflow-hidden">
                      <div className="h-full rounded-md bg-gradient-to-r from-[#6366F1] to-[#818CF8] transition-all duration-500 flex items-center px-2" style={{ width: Math.max(2, pct) + "%" }}>
                        <span className="text-xs font-semibold text-white whitespace-nowrap">{fmt(val)}</span>
                      </div>
                    </div>
                    <span className="w-12 text-right text-[#94A3B8] shrink-0">{pct.toFixed(0)}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="income" label="Monthly Income (After Tax)" value={income} onChange={(e) => setIncome(e.target.value)} prefix="$" placeholder="5000" helpText="Your net monthly take-home pay" />
        <InputField id="housing" label="Housing" value={housing} onChange={(e) => setHousing(e.target.value)} prefix="$" placeholder="1500" helpText="Rent/mortgage, property tax, HOA" />
        <InputField id="food" label="Food & Groceries" value={food} onChange={(e) => setFood(e.target.value)} prefix="$" placeholder="500" helpText="Groceries, dining out, meal delivery" />
        <InputField id="transport" label="Transportation" value={transport} onChange={(e) => setTransport(e.target.value)} prefix="$" placeholder="400" helpText="Gas, public transit, rideshares, parking" />
        <InputField id="utilities" label="Utilities" value={utilities} onChange={(e) => setUtilities(e.target.value)} prefix="$" placeholder="250" helpText="Electricity, water, internet, phone" />
        <InputField id="insurance" label="Insurance" value={insurance} onChange={(e) => setInsurance(e.target.value)} prefix="$" placeholder="300" helpText="Health, auto, renters/home, life" />
        <InputField id="debt" label="Debt Payments" value={debt} onChange={(e) => setDebt(e.target.value)} prefix="$" placeholder="400" helpText="Credit cards, loans, student loans" />
        <InputField id="entertainment" label="Entertainment" value={entertainment} onChange={(e) => setEntertainment(e.target.value)} prefix="$" placeholder="200" helpText="Streaming, hobbies, travel, shopping" />
        <InputField id="savings" label="Savings & Investments" value={savings} onChange={(e) => setSavings(e.target.value)} prefix="$" placeholder="500" helpText="401k, IRA, emergency fund, HYSA" />
        <InputField id="other" label="Other Expenses" value={other} onChange={(e) => setOther(e.target.value)} prefix="$" placeholder="300" helpText="Clothing, gifts, subscriptions, misc" />
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
            <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">CFPB — Consumer Financial Protection Bureau</a>
          </span>
        </div>
      </div>

      <h2>How to Use the Budget Calculator</h2>
      <p>Enter your <strong>monthly after-tax income</strong> and all your <strong>monthly expenses</strong> categorized by type. The calculator instantly shows your total spending, remaining money, savings rate, and a detailed 50/30/20 rule analysis.</p>
      <p>The results include a visual expense breakdown, color-coded progress bars for needs/wants/savings, and personalized feedback on your savings rate.</p>

      <h2>Budget Formula & Methodology</h2>
      <p><strong>Remaining = Income − Total Expenses</strong></p>
      <p><strong>Savings Rate = Savings ÷ Income × 100</strong></p>
      <p><strong>50/30/20 Rule:</strong> 50% of income for needs, 30% for wants, 20% for savings and debt repayment (popularized by Sen. Elizabeth Warren). This calculator also tracks housing costs separately since they should ideally be under 30% of income.</p>

      <h2>The 50/30/20 Budget Rule Explained</h2>
      <p>The 50/30/20 rule is a simple but powerful budgeting framework:</p>
      <ul>
        <li><strong>50% — Needs:</strong> Housing, food, transportation, utilities, insurance, minimum debt payments. These are essential expenses you cannot avoid.</li>
        <li><strong>30% — Wants:</strong> Entertainment, dining out, travel, shopping, hobbies, subscriptions. These improve quality of life but can be cut if needed.</li>
        <li><strong>20% — Savings & Debt Repayment:</strong> Retirement contributions, emergency fund, extra debt payments, investments. This builds your financial future.</li>
      </ul>

      <h2>Budgeting Tips for 2026</h2>
      <ul>
        <li><strong>Track every dollar for 30 days:</strong> You cannot improve what you do not measure. Use this calculator to establish a baseline.</li>
        <li><strong>Aim for a 20% savings rate:</strong> If you save 20% of your income and invest it at 7%, you replace your income in ~35 years.</li>
        <li><strong>Keep housing under 30%:</strong> If your housing costs exceed 30% of income, consider downsizing or finding a roommate.</li>
        <li><strong>Automate your savings:</strong> Set up automatic transfers to your 401(k) and savings accounts on payday so you never see the money.</li>
        <li><strong>Review subscriptions quarterly:</strong> The average American spends $273/month on subscriptions. Cancel unused ones.</li>
      </ul>

      <h2>Related Tools</h2>
      <ul>
        <li><Link href="/calculators/emergency-fund-calculator">Emergency Fund Calculator</Link> — Build your safety net.</li>
        <li><Link href="/calculators/savings-goal-calculator">Savings Goal Calculator</Link> — Project your savings growth.</li>
        <li><Link href="/calculators/dti-ratio-calculator">Debt-to-Income Ratio Calculator</Link> — Understand your debt load.</li>
      </ul>

      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide to budgeting, read our blog post:{" "}
          <a href="/blog/budget-calculator" className="text-teal-400 underline hover:text-teal-300 transition-colors">Budget Calculator Guide 2026</a>.
        </p>
      </div>

      <RelatedCalculators currentPage="budget-calculator" />
    </>
  );
}

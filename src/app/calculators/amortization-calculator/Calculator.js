"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import SelectField from "@/components/SelectField";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtDecimal = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState("30000");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState("5");
  const [startDate, setStartDate] = useState("2026-06");

  const amount = parseFloat(loanAmount) || 0;
  const rate = parseFloat(interestRate) || 0;
  const term = parseInt(loanTerm) || 5;
  const monthlyRate = rate / 100 / 12;
  const numPayments = term * 12;

  // Monthly payment
  let monthlyPayment = 0;
  if (monthlyRate > 0 && numPayments > 0) {
    monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  } else if (amount > 0) {
    monthlyPayment = amount / numPayments;
  }

  const totalPayment = monthlyPayment * numPayments;
  const totalInterest = totalPayment - amount;

  // Full amortization schedule
  let balance = amount;
  const schedule = [];
  let cumulativeInterest = 0;

  for (let year = 1; year <= term; year++) {
    let yearlyPrincipal = 0;
    let yearlyInterest = 0;
    for (let m = 0; m < 12; m++) {
      if (balance <= 0) break;
      const intPortion = balance * monthlyRate;
      const prinPortion = monthlyPayment - intPortion;
      yearlyInterest += intPortion;
      yearlyPrincipal += prinPortion;
      balance -= prinPortion;
    }
    cumulativeInterest += yearlyInterest;
    schedule.push({
      year,
      principal: yearlyPrincipal,
      interest: yearlyInterest,
      balance: Math.max(0, balance),
      totalPaid: yearlyPrincipal + yearlyInterest,
      cumulativeInterest,
      remainingInterest: totalInterest - cumulativeInterest,
    });
  }

  // Payoff date
  const startParts = startDate.split("-");
  const startYear = parseInt(startParts[0]) || 2026;
  const startMonth = parseInt(startParts[1]) || 6;
  const payoffYear = startYear + term;
  const payoffMonth = startMonth;
  const payoffLabel = `${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][payoffMonth - 1] || "Jun"} ${payoffYear}`;

  // Interest savings by paying extra
  const extraPayment = monthlyPayment * 1.5; // 50% extra
  let extraBalance = amount;
  let extraMonths = 0;
  let extraTotalInterest = 0;
  while (extraBalance > 0 && extraMonths < 600) {
    const intPortion = extraBalance * monthlyRate;
    const prinPortion = extraPayment - intPortion;
    extraTotalInterest += intPortion;
    extraBalance -= prinPortion;
    extraMonths++;
  }
  const extraYears = Math.floor(extraMonths / 12);
  const extraRemMonths = extraMonths % 12;
  const interestSaved = totalInterest - extraTotalInterest;

  const schemaData = {
    name: "Amortization Schedule Calculator 2026",
    description: "Generate a full amortization schedule for any loan. Calculate monthly payments, total interest, payoff date, and see a year-by-year principal vs interest breakdown. Free 2026 amortization calculator.",
    url: "https://www.themetricapp.com/calculators/amortization-calculator",
  };

  return (
    <CalculatorShell
      title="Amortization Schedule Calculator 2026 — Full Loan Payment Breakdown"
      subtitle="Generate a complete amortization schedule for any loan. See monthly payments, total interest, payoff date, and a year-by-year breakdown of principal vs interest. Plus, see how extra payments save you money."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Monthly Payment" value={fmtDecimal(monthlyPayment)} highlight />
            <ResultCard label="Total Payment" value={fmt(totalPayment)} sub={`Over ${term} years`} />
            <ResultCard label="Total Interest" value={fmt(totalInterest)} sub={`${totalInterest > 0 ? ((totalInterest / amount) * 100).toFixed(1) : 0}% of principal`} />
            <ResultCard label="Payoff Date" value={payoffLabel} sub="Full loan term" />
            <ResultCard label="Principal" value={fmt(amount)} />
            <ResultCard label="Interest Paid Yr 1" value={fmt(schedule[0]?.interest || 0)} sub={`${schedule[0] ? ((schedule[0].interest / monthlyPayment / 12) * 100).toFixed(0) : 0}% of Yr 1 payments`} />
          </div>

          {/* Extra payment comparison */}
          {totalInterest > 0 && (
            <div className="mt-4 p-4 bg-[#EEF2FF] dark:bg-[#6366F1]/10 rounded-xl border border-[#6366F1]/15">
              <p className="text-sm font-semibold text-[#6366F1] mb-3">⚡ Extra Payment Impact</p>
              <p className="text-sm text-[#64748B] mb-2">Pay <strong>{fmtDecimal(extraPayment)}/month</strong> (50% extra = {fmtDecimal(Math.round(extraPayment - monthlyPayment))} more):</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-center">
                  <p className="text-xs text-[#94A3B8]">Payoff</p>
                  <p className="text-sm font-bold text-green-600">{extraYears}yr {extraRemMonths}mo</p>
                </div>
                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-center">
                  <p className="text-xs text-[#94A3B8]">Total Interest</p>
                  <p className="text-sm font-bold text-green-600">{fmt(extraTotalInterest)}</p>
                </div>
                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-center">
                  <p className="text-xs text-[#94A3B8]">Interest Saved</p>
                  <p className="text-sm font-bold text-[#6366F1]">{fmt(interestSaved)}</p>
                </div>
              </div>
            </div>
          )}

          {/* Full Amortization Schedule */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-[#6366F1] mb-3">📊 Full Amortization Schedule</p>
            <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC] dark:bg-slate-800">
                    <th className="px-4 py-2.5 text-left font-semibold text-[#0F172A] dark:text-white">Year</th>
                    <th className="px-4 py-2.5 text-right font-semibold text-[#0F172A] dark:text-white">Principal</th>
                    <th className="px-4 py-2.5 text-right font-semibold text-[#0F172A] dark:text-white">Interest</th>
                    <th className="px-4 py-2.5 text-right font-semibold text-[#0F172A] dark:text-white">Total Paid</th>
                    <th className="px-4 py-2.5 text-right font-semibold text-[#0F172A] dark:text-white">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((yr) => (
                    <tr key={yr.year} className="border-t border-[#E2E8F0] hover:bg-[#F8FAFC] dark:hover:bg-slate-800/50">
                      <td className="px-4 py-2 font-medium">{yr.year}</td>
                      <td className="px-4 py-2 text-right text-green-600">{fmt(Math.round(yr.principal))}</td>
                      <td className="px-4 py-2 text-right text-amber-600">{fmt(Math.round(yr.interest))}</td>
                      <td className="px-4 py-2 text-right">{fmt(Math.round(yr.totalPaid))}</td>
                      <td className="px-4 py-2 text-right font-medium">{fmt(Math.round(yr.balance))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Visual bars for first 5 years */}
            <div className="mt-4 space-y-1.5">
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">Principal vs Interest (First {Math.min(5, term)} years)</p>
              {schedule.slice(0, 5).map((yr) => {
                const totalPct = yr.principal + yr.interest > 0 ? (yr.principal / (yr.principal + yr.interest)) * 100 : 50;
                return (
                  <div key={yr.year} className="flex items-center gap-3 text-sm">
                    <span className="w-12 text-right text-[#64748B] shrink-0">Yr {yr.year}</span>
                    <div className="flex-1 h-5 rounded-md bg-[#F1F5F9] dark:bg-slate-700 overflow-hidden flex">
                      <div className="h-full bg-[#6366F1] transition-all flex items-center px-2 shrink-0" style={{ width: Math.max(2, totalPct) + "%" }}>
                        <span className="text-xs font-semibold text-white whitespace-nowrap">{fmt(Math.round(yr.principal))}</span>
                      </div>
                      <div className="h-full bg-[#F59E0B] transition-all flex items-center px-2 shrink-0" style={{ width: Math.max(2, 100 - totalPct) + "%" }}>
                        <span className="text-xs font-semibold text-white whitespace-nowrap">{fmt(Math.round(yr.interest))}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center gap-4 mt-1 text-xs text-[#94A3B8]">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#6366F1]"></span> Principal</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#F59E0B]"></span> Interest</span>
              </div>
            </div>
          </div>
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="loanAmount" label="Loan Amount" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} prefix="$" placeholder="30000" helpText="Total loan principal" />
        <InputField id="interestRate" label="Annual Interest Rate" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} suffix="%" placeholder="6.5" helpText="Your loan's APR" />
        <SelectField id="loanTerm" label="Loan Term" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} options={[
          { value: "1", label: "1 Year" },
          { value: "2", label: "2 Years" },
          { value: "3", label: "3 Years" },
          { value: "5", label: "5 Years" },
          { value: "7", label: "7 Years" },
          { value: "10", label: "10 Years" },
          { value: "15", label: "15 Years" },
          { value: "20", label: "20 Years" },
          { value: "30", label: "30 Years" },
        ]} />
        <InputField id="startDate" label="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} type="month" placeholder="2026-06" helpText="When the loan begins" />
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
            <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-an-amortization-schedule-en-773/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">CFPB — Amortization Schedule</a>
            {" · "}
            <a href="https://www.investopedia.com/terms/a/amortization.asp" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Investopedia — Amortization</a>
          </span>
        </div>
      </div>

      <h2>How to Use the Amortization Calculator</h2>
      <p>Enter the <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>loan term</strong>, and <strong>start date</strong>. The calculator instantly generates your monthly payment, total interest, and a complete year-by-year amortization schedule showing principal vs interest breakdown for each year.</p>

      <h2>Amortization Formula</h2>
      <p><strong>M = P × [r(1+r)^n] / [(1+r)^n − 1]</strong></p>
      <p>Each payment splits into interest (current balance × monthly rate) and principal (payment − interest). As the balance decreases, more of each payment goes toward principal — this is amortization in action.</p>

      <h2>Related Tools</h2>
      <ul>
        <li><Link href="/calculators/mortgage-calculator-us">Mortgage Calculator (US)</Link> — PITI with PMI</li>
        <li><Link href="/calculators/car-loan-affordability-calculator-2026">Car Loan Affordability Calculator</Link> — Auto loan budgeting</li>
        <li><Link href="/calculators/loan-comparison-calculator">Loan Comparison Calculator</Link> — Compare two loans</li>
      </ul>

      <RelatedCalculators currentPage="amortization-calculator" />
    </>
  );
}

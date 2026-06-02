"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function Calculator() {
  const [monthlyIncome, setMonthlyIncome] = useState("6000");
  const [mortgageRent, setMortgageRent] = useState("1800");
  const [propertyTax, setPropertyTax] = useState("0");
  const [hoaFees, setHoaFees] = useState("0");
  const [carLoan, setCarLoan] = useState("400");
  const [studentLoan, setStudentLoan] = useState("300");
  const [creditCard, setCreditCard] = useState("200");
  const [otherDebt, setOtherDebt] = useState("200");

  const income = parseFloat(monthlyIncome) || 0;
  const housing = parseFloat(mortgageRent) || 0;
  const propTax = parseFloat(propertyTax) || 0;
  const hoa = parseFloat(hoaFees) || 0;
  const car = parseFloat(carLoan) || 0;
  const student = parseFloat(studentLoan) || 0;
  const cc = parseFloat(creditCard) || 0;
  const other = parseFloat(otherDebt) || 0;

  // Front-end DTI: housing costs only
  const housingTotal = housing + propTax + hoa;
  const frontEndDTI = income > 0 ? (housingTotal / income) * 100 : 0;

  // Back-end DTI: all debt payments
  const totalDebt = housingTotal + car + student + cc + other;
  const backEndDTI = income > 0 ? (totalDebt / income) * 100 : 0;

  const getRating = (dti, type) => {
    if (type === "front") {
      if (dti <= 28) return { label: "Excellent", color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/20" };
      if (dti <= 36) return { label: "Good", color: "text-amber-600", bg: "bg-amber-100 dark:bg-amber-900/20" };
      if (dti <= 43) return { label: "Fair", color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/20" };
      return { label: "High", color: "text-red-600", bg: "bg-red-100 dark:bg-red-900/20" };
    }
    if (dti <= 36) return { label: "Excellent", color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/20" };
    if (dti <= 43) return { label: "Good", color: "text-amber-600", bg: "bg-amber-100 dark:bg-amber-900/20" };
    if (dti <= 50) return { label: "Fair", color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/20" };
    return { label: "High Risk", color: "text-red-600", bg: "bg-red-100 dark:bg-red-900/20" };
  };

  const frontRating = getRating(frontEndDTI, "front");
  const backRating = getRating(backEndDTI, "back");

  // Max affordable home payment (28% front-end, 36% back-end)
  const maxHousing28 = income * 0.28;
  const maxTotal36 = income * 0.36;
  const remainingAfterOther = Math.max(0, maxTotal36 - (car + student + cc + other));
  const maxAffordableHousing = Math.min(maxHousing28, remainingAfterOther);

  // Debt breakdown for visual
  const debts = [
    { label: "Housing", value: housingTotal },
    { label: "Car Loan", value: car },
    { label: "Student Loan", value: student },
    { label: "Credit Cards", value: cc },
    { label: "Other Debt", value: other },
  ];

  const schemaData = {
    name: "Debt-to-Income (DTI) Ratio Calculator 2026",
    description: "Calculate your debt-to-income ratio for mortgage and loan applications. Free 2026 DTI calculator with front-end and back-end ratios, lender guidelines, and affordability analysis.",
    url: "https://www.themetricapp.com/calculators/dti-ratio-calculator",
  };

  return (
    <CalculatorShell
      title="Debt-to-Income Ratio Calculator (2026)"
      subtitle="Calculate your debt-to-income (DTI) ratio for mortgage applications, personal loans, and auto financing. See both front-end (housing) and back-end (total debt) DTI ratios with lender guidelines and max affordable payment estimates."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Monthly Income" value={fmt(income)} highlight />
            <ResultCard label="Total Debt Payments" value={fmt(totalDebt)} sub={`${backEndDTI.toFixed(1)}% of income`} />
            <ResultCard label="Remaining Income" value={fmt(income - totalDebt)} sub={income - totalDebt > 0 ? "✅ Positive cash flow" : "⚠️ Negative cash flow"} />
          </div>

          {/* DTI Gauges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-[#E2E8F0] dark:border-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">Front-End DTI (Housing)</p>
              <div className="flex items-end gap-3">
                <p className="text-3xl font-bold text-[#111827] dark:text-white">{frontEndDTI.toFixed(1)}%</p>
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${frontRating.bg} ${frontRating.color}`}>{frontRating.label}</span>
              </div>
              <div className="mt-3 h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    frontEndDTI <= 28 ? "bg-green-500" : frontEndDTI <= 36 ? "bg-amber-500" : frontEndDTI <= 43 ? "bg-orange-500" : "bg-red-500"
                  }`}
                  style={{ width: Math.min(frontEndDTI, 60) * 1.5 + "%" }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#94A3B8] mt-1">
                <span>Target: ≤28%</span>
                <span>Max: 36%</span>
              </div>
              <p className="text-xs text-[#64748B] mt-2">Housing costs: {fmt(housingTotal)}/mo</p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-[#E2E8F0] dark:border-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">Back-End DTI (Total Debt)</p>
              <div className="flex items-end gap-3">
                <p className="text-3xl font-bold text-[#111827] dark:text-white">{backEndDTI.toFixed(1)}%</p>
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${backRating.bg} ${backRating.color}`}>{backRating.label}</span>
              </div>
              <div className="mt-3 h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    backEndDTI <= 36 ? "bg-green-500" : backEndDTI <= 43 ? "bg-amber-500" : backEndDTI <= 50 ? "bg-orange-500" : "bg-red-500"
                  }`}
                  style={{ width: Math.min(backEndDTI, 60) * 1.5 + "%" }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#94A3B8] mt-1">
                <span>Target: ≤36%</span>
                <span>Max: 43-50%</span>
              </div>
              <p className="text-xs text-[#64748B] mt-2">Total debt: {fmt(totalDebt)}/mo</p>
            </div>
          </div>

          {/* Debt Breakdown */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-[#6366F1] mb-3">💰 Debt Breakdown</p>
            <div className="space-y-1.5">
              {debts.filter(d => d.value > 0).map((d) => {
                const pct = totalDebt > 0 ? (d.value / totalDebt) * 100 : 0;
                return (
                  <div key={d.label} className="flex items-center gap-3 text-sm">
                    <span className="w-28 text-right text-[#64748B] shrink-0">{d.label}</span>
                    <div className="flex-1 h-6 rounded-md bg-[#F1F5F9] dark:bg-slate-700 overflow-hidden">
                      <div className="h-full rounded-md bg-gradient-to-r from-[#6366F1] to-[#818CF8] transition-all flex items-center px-2" style={{ width: Math.max(2, pct) + "%" }}>
                        <span className="text-xs font-semibold text-white whitespace-nowrap">{fmt(d.value)}</span>
                      </div>
                    </div>
                    <span className="w-12 text-right text-[#94A3B8] shrink-0">{pct.toFixed(0)}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Max Affordable Housing */}
          {maxAffordableHousing > 0 && (
            <div className="mt-4 p-4 bg-[#EEF2FF] dark:bg-[#6366F1]/10 rounded-xl border border-[#6366F1]/15">
              <p className="text-sm font-semibold text-[#6366F1] mb-2">🏡 Max Affordable Housing Payment</p>
              <p className="text-2xl font-bold text-[#111827] dark:text-white">{fmt(maxAffordableHousing)}/month</p>
              <p className="text-xs text-[#64748B] mt-1">Based on 28% front-end DTI and 36% back-end DTI limits (lender guidelines)</p>
            </div>
          )}

          {/* Lender Guidelines */}
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-[#E2E8F0] dark:border-slate-700">
            <p className="text-sm font-semibold text-[#111827] dark:text-white mb-3">📋 DTI Guidelines for Common Loan Types</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#64748B]">Conventional Loan (Fannie Mae/Freddie Mac)</span>
                <span className="font-semibold text-green-600">≤ 36% (max 45-50%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">FHA Loan</span>
                <span className="font-semibold text-amber-600">≤ 43% (max 50%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">VA Loan</span>
                <span className="font-semibold text-green-600">≤ 41% (no strict limit)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">USDA Loan</span>
                <span className="font-semibold text-amber-600">≤ 29/41%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Auto Loan</span>
                <span className="font-semibold text-green-600">≤ 36% preferred</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Personal Loan</span>
                <span className="font-semibold text-green-600">≤ 36% preferred</span>
              </div>
            </div>
          </div>
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="monthlyIncome" label="Monthly Gross Income" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)} prefix="$" placeholder="6000" helpText="Your gross monthly income before taxes" />
        <InputField id="mortgageRent" label="Mortgage / Rent" value={mortgageRent} onChange={(e) => setMortgageRent(e.target.value)} prefix="$" placeholder="1800" helpText="Monthly mortgage or rent payment" />
        <InputField id="propertyTax" label="Property Tax / Mo" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} prefix="$" placeholder="0" helpText="Monthly property tax (if not in mortgage)" />
        <InputField id="hoaFees" label="HOA Fees" value={hoaFees} onChange={(e) => setHoaFees(e.target.value)} prefix="$" placeholder="0" helpText="Monthly HOA or condo fees" />
        <InputField id="carLoan" label="Car Loan Payment" value={carLoan} onChange={(e) => setCarLoan(e.target.value)} prefix="$" placeholder="400" helpText="Monthly auto loan payment" />
        <InputField id="studentLoan" label="Student Loan Payment" value={studentLoan} onChange={(e) => setStudentLoan(e.target.value)} prefix="$" placeholder="300" helpText="Monthly student loan payment" />
        <InputField id="creditCard" label="Credit Card Minimum" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} prefix="$" placeholder="200" helpText="Total minimum credit card payments" />
        <InputField id="otherDebt" label="Other Debt Payments" value={otherDebt} onChange={(e) => setOtherDebt(e.target.value)} prefix="$" placeholder="200" helpText="Personal loans, medical debt, etc." />
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
            <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-why-is-the-43-debt-to-income-ratio-important-en-1791/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">CFPB — DTI Ratio Guide</a>
            {" · "}
            <a href="https://www.investopedia.com/terms/d/dti.asp" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Investopedia — DTI Ratio</a>
          </span>
        </div>
      </div>

      <h2>How to Use the DTI Ratio Calculator</h2>
      <p>Enter your <strong>monthly gross income</strong> and all your <strong>monthly debt payments</strong>. The calculator instantly shows both front-end (housing) and back-end (total debt) DTI ratios with color-coded gauges, lender guideline comparisons, and your max affordable housing payment.</p>

      <h2>DTI Formulas</h2>
      <p><strong>Front-End DTI = Housing Costs ÷ Gross Monthly Income × 100</strong></p>
      <p><strong>Back-End DTI = Total Debt Payments ÷ Gross Monthly Income × 100</strong></p>

      <h2>Related Tools</h2>
      <ul>
        <li><Link href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</Link> — How much house you can afford</li>
        <li><Link href="/calculators/mortgage-calculator-us">Mortgage Calculator (US)</Link> — Full PITI breakdown</li>
        <li><Link href="/calculators/car-loan-affordability-calculator-2026">Car Loan Affordability Calculator</Link> — Auto loan budgeting</li>
        <li><Link href="/calculators/credit-card-payoff-calculator">Credit Card Payoff Calculator</Link> — Debt payoff strategies</li>
      </ul>

      <RelatedCalculators currentPage="dti-ratio-calculator" />
    </>
  );
}

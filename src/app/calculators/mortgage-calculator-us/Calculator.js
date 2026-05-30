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
  const [homePrice, setHomePrice] = useState("400000");
  const [downPayment, setDownPayment] = useState("20");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState("30");
  const [propertyTax, setPropertyTax] = useState("1.2");
  const [insurance, setInsurance] = useState("1200");
  const [pmi, setPmi] = useState("0.5");

  const price = parseFloat(homePrice) || 0;
  const downPct = parseFloat(downPayment) || 0;
  const rate = parseFloat(interestRate) || 0;
  const term = parseInt(loanTerm) || 30;
  const taxRate = parseFloat(propertyTax) || 0;
  const annualInsurance = parseFloat(insurance) || 0;
  const pmiRate = parseFloat(pmi) || 0;

  const downAmt = price * (downPct / 100);
  const loanAmt = price - downAmt;
  const monthlyRate = rate / 100 / 12;
  const numPayments = term * 12;

  // Monthly principal & interest
  let monthlyPI = 0;
  if (monthlyRate > 0 && numPayments > 0) {
    monthlyPI = loanAmt * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  } else if (loanAmt > 0) {
    monthlyPI = loanAmt / numPayments;
  }

  const monthlyTax = (price * (taxRate / 100)) / 12;
  const monthlyInsurance = annualInsurance / 12;
  const monthlyPMI = downPct < 20 ? (loanAmt * (pmiRate / 100)) / 12 : 0;
  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI;
  const totalPayment = totalMonthly * numPayments;
  const totalInterest = totalPayment - loanAmt;
  const totalTaxesPaid = monthlyTax * numPayments;
  const totalPMIPaid = monthlyPMI * numPayments;

  // Amortization schedule (first 5 years preview)
  const amortSchedule = [];
  let balance = loanAmt;
  for (let y = 1; y <= Math.min(5, term); y++) {
    let yearlyInterest = 0;
    let yearlyPrincipal = 0;
    for (let m = 0; m < 12; m++) {
      const intPortion = balance * monthlyRate;
      const prinPortion = monthlyPI - intPortion;
      yearlyInterest += intPortion;
      yearlyPrincipal += prinPortion;
      balance -= prinPortion;
    }
    amortSchedule.push({ year: y, principal: yearlyPrincipal, interest: yearlyInterest, balance: Math.max(0, balance) });
  }

  const schemaData = {
    name: "Mortgage Calculator (US) 2026",
    description: "Calculate monthly mortgage payments including principal, interest, taxes, insurance, and PMI. Free 2026 US mortgage payment calculator with amortization schedule.",
    url: "https://www.themetricapp.com/calculators/mortgage-calculator-us",
  };

  return (
    <CalculatorShell
      title="Mortgage Calculator (US) 2026 — Full Monthly Payment Breakdown with PITI &amp; PMI"
      subtitle="Calculate your full monthly mortgage payment including principal, interest, property taxes, homeowners insurance, and PMI. See your amortization schedule and total interest paid over the life of the loan."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Monthly Payment (PITI)" value={fmt(totalMonthly)} sub={`${fmt(price)} at ${rate}% for ${term} years`} highlight />
            <ResultCard label="Principal & Interest" value={fmt(monthlyPI)} sub="Loan payment only" />
            <ResultCard label="Down Payment" value={fmt(downAmt)} sub={`${downPct}% down`} />
            <ResultCard label="Total Interest Paid" value={fmt(totalInterest)} sub="Over full loan term" />
            <ResultCard label="Property Taxes" value={fmt(monthlyTax)} sub={`${taxRate}% annual rate`} />
            {monthlyPMI > 0 && <ResultCard label="PMI (Monthly)" value={fmt(monthlyPMI)} sub="Until 20% equity" />}
          </div>

          {/* Amortization Preview */}
          {amortSchedule.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#6366F1] mb-3">📊 First 5 Years Amortization</p>
              <div className="space-y-1.5">
                {amortSchedule.map((yr) => {
                  const totalPct = monthlyPI * 12;
                  const prinPct = totalPct > 0 ? (yr.principal / totalPct) * 100 : 0;
                  return (
                    <div key={yr.year} className="flex items-center gap-3 text-sm">
                      <span className="w-16 text-right text-[#64748B] shrink-0">Year {yr.year}</span>
                      <div className="flex-1 h-6 rounded-md bg-[#F1F5F9] dark:bg-slate-700 overflow-hidden flex">
                        <div className="h-full bg-[#6366F1] transition-all duration-500 flex items-center px-2 shrink-0" style={{ width: Math.max(2, prinPct) + "%" }}>
                          <span className="text-xs font-semibold text-white whitespace-nowrap">{fmt(Math.round(yr.principal))}</span>
                        </div>
                        <div className="h-full bg-[#F59E0B] transition-all duration-500 flex items-center px-2 shrink-0" style={{ width: Math.max(2, 100 - prinPct - 2) + "%" }}>
                          <span className="text-xs font-semibold text-white whitespace-nowrap">{fmt(Math.round(yr.interest))}</span>
                        </div>
                      </div>
                      <span className="w-24 text-right text-[#94A3B8] shrink-0">Bal: {fmt(Math.round(yr.balance))}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-4 mt-2 text-xs text-[#94A3B8]">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#6366F1]"></span> Principal</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#F59E0B]"></span> Interest</span>
              </div>
            </div>
          )}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="homePrice" label="Home Price" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} prefix="$" placeholder="400000" helpText="Purchase price of the home" />
        <InputField id="downPayment" label="Down Payment" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} suffix="%" placeholder="20" helpText="Percentage of purchase price" />
        <InputField id="interestRate" label="Interest Rate" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} suffix="%" placeholder="6.5" helpText="Current 30-year fixed mortgage rate" />
        <SelectField id="loanTerm" label="Loan Term" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} options={[
          { value: "30", label: "30-Year Fixed" },
          { value: "20", label: "20-Year Fixed" },
          { value: "15", label: "15-Year Fixed" },
          { value: "10", label: "10-Year Fixed" },
        ]} />
        <InputField id="propertyTax" label="Property Tax Rate" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} suffix="%" placeholder="1.2" helpText="Annual property tax % (US avg ~1.1%)" />
        <InputField id="insurance" label="Annual Home Insurance" value={insurance} onChange={(e) => setInsurance(e.target.value)} prefix="$" placeholder="1200" helpText="Yearly homeowners insurance premium" />
      </div>
      {downPct < 20 && (
        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">⚠️ PMI Required</p>
          <p className="text-xs text-gray-600 dark:text-slate-400 mt-1">Since your down payment is under 20%, Private Mortgage Insurance (PMI) will be required.</p>
        </div>
      )}
      {downPct < 20 && (
        <div className="mt-4">
          <InputField id="pmi" label="PMI Rate" value={pmi} onChange={(e) => setPmi(e.target.value)} suffix="%" placeholder="0.5" helpText="Typical PMI: 0.3%-1.5% of loan annually" />
        </div>
      )}
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
            <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">CFPB — Owning a Home</a>
            {" · "}
            <a href="https://www.freddiemac.com/pmms" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Freddie Mac — PMMS</a>
          </span>
        </div>
      </div>

      <h2>How to Use the Mortgage Calculator</h2>
      <p>Enter the <strong>home price</strong>, <strong>down payment percentage</strong>, <strong>interest rate</strong>, and <strong>loan term</strong>. Add your <strong>property tax rate</strong> and <strong>annual insurance</strong> costs. If your down payment is under 20%, PMI is included.</p>
      <p>The calculator breaks down your total monthly payment into principal, interest, taxes, insurance, and PMI. It also shows total interest over the loan life and a 5-year amortization preview.</p>

      <h2>Mortgage Formula</h2>
      <p><strong>M = P × [r(1+r)^n] / [(1+r)^n − 1]</strong></p>
      <p>PITI = Principal & Interest + Property Taxes + Insurance + PMI</p>

      <h2>2026 Mortgage Rate Outlook</h2>
      <p>As of May 2026, 30-year fixed mortgage rates are approximately 6-7%, 15-year fixed rates around 5.5-6.5%, and ARM rates starting at 5-6%. Rates remain elevated due to Fed policy, but home prices continue rising in most markets.</p>

      <h2>Key Considerations for Home Buyers</h2>
      <ul>
        <li><strong>The 28/36 rule:</strong> Your housing payment should not exceed 28% of gross income. Total debt payments should not exceed 36%.</li>
        <li><strong>PMI:</strong> If your down payment is under 20%, PMI costs 0.3%-1.5% of the loan amount annually. It automatically cancels when you reach 22% equity.</li>
        <li><strong>Property taxes:</strong> Average US rate is ~1.1%, but varies widely by state (NJ ~2.4%, HI ~0.3%).</li>
        <li><strong>Closing costs:</strong> Typically 2-5% of the purchase price, including appraisal, origination, title insurance, and transfer taxes.</li>
      </ul>

      <h2>Related Tools</h2>
      <ul>
        <li><Link href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</Link> — How much house can you afford?</li>
        <li><Link href="/calculators/mortgage-refinance-calculator-2026">Mortgage Refinance Calculator</Link> — Is refinancing right for you?</li>
        <li><Link href="/calculators/amortization-calculator">Amortization Calculator</Link> — Full amortization schedule.</li>
      </ul>

      <RelatedCalculators currentPage="mortgage-calculator-us" />
    </>
  );
}

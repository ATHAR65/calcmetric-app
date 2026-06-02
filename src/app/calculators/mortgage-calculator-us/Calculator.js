"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import SelectField from "@/components/SelectField";
import RelatedCalculators from "@/components/RelatedCalculators";
import QuickAnswer from "@/components/QuickAnswer";
import AuthorBar from "@/components/AuthorBar";
import ComparisonTable from "@/components/ComparisonTable";

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
      title="US Mortgage Calculator (2026)"
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
  const termRows = [
    { label: "Monthly Payment (P&I)", values: ["$2,398", "$3,375"] },
    { label: "Total Interest Paid", values: ["$463,353", "$207,575"] },
    { label: "Interest Savings vs 30-yr", values: ["—", "$255,778"] },
    { label: "Years to Pay Off", values: ["30 years", "15 years"] },
    { label: "Income Needed (28% rule)", values: ["~$103,000/yr", "~$145,000/yr"] },
    { label: "Equity After 5 Years", values: ["~$28,000", "~$75,000"] },
  ];

  const downPaymentRows = [
    { label: "Down Payment Amount", values: ["$12,000 (3%)", "$20,000 (5%)", "$80,000 (20%)"] },
    { label: "Loan Amount", values: ["$388,000", "$380,000", "$320,000"] },
    { label: "Monthly P&I (6.5%)", values: ["$2,453", "$2,403", "$2,023"] },
    { label: "PMI Required?", values: ["Yes (~$194/mo)", "Yes (~$190/mo)", "No"] },
    { label: "Total Monthly (PITI+PMI)", values: ["~$3,147", "~$3,093", "~$2,523"] },
    { label: "PMI Drops Off At", values: ["~Year 10", "~Year 9", "N/A"] },
  ];

  return (
    <>
      <AuthorBar
        updated="June 2026"
        author="TheMetricApp Financial Team"
        reviewer="Verified against CFPB & Freddie Mac data"
        sources={[
          { name: "CFPB — Owning a Home", url: "https://www.consumerfinance.gov/owning-a-home/" },
          { name: "Freddie Mac PMMS", url: "https://www.freddiemac.com/pmms" },
        ]}
      />

      <QuickAnswer text="On a $400,000 home with 20% down at 6.5% for 30 years, your monthly mortgage payment (principal + interest) is approximately $2,023. Add property taxes (~$367/mo), homeowners insurance (~$100/mo), and your total PITI payment is roughly $2,490/month." />

      <h2>How to Use the Mortgage Calculator</h2>
      <p>Enter the <strong>home price</strong>, <strong>down payment percentage</strong>, <strong>interest rate</strong>, and <strong>loan term</strong>. Add your <strong>property tax rate</strong> and <strong>annual insurance</strong> costs. If your down payment is under 20%, PMI is automatically included.</p>
      <p>The calculator instantly breaks down your total monthly payment into principal, interest, taxes, insurance, and PMI (PITI). It also shows total interest over the loan life and a 5-year amortization preview so you can see how your balance decreases over time.</p>

      <h2>Mortgage Payment Formula</h2>
      <p>The standard amortization formula used by every lender:</p>
      <p><strong>M = P × [r(1+r)^n] / [(1+r)^n − 1]</strong></p>
      <ul>
        <li><strong>M</strong> = Monthly principal + interest payment</li>
        <li><strong>P</strong> = Loan amount (home price − down payment)</li>
        <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12)</li>
        <li><strong>n</strong> = Total number of payments (years × 12)</li>
      </ul>
      <p><strong>Example:</strong> $320,000 loan at 6.5% for 30 years → r = 0.065/12 = 0.005417, n = 360. Monthly P&I = $2,023. Total interest over 30 years = $408,280.</p>
      <p>Your full PITI payment adds: property taxes + homeowners insurance + PMI (if applicable).</p>

      <h2>15-Year vs 30-Year Mortgage: Which Is Better?</h2>
      <p>On a <strong>$400,000 loan at 6.0%</strong>, here is how the two most common loan terms compare:</p>
      <ComparisonTable
        headers={["Metric", "30-Year Fixed", "15-Year Fixed"]}
        rows={termRows}
        highlightCol={2}
        caption="Comparison based on $400,000 loan at 6.0% interest rate"
      />
      <p>The 15-year saves <strong>$255,778 in interest</strong> but requires $977 more per month. If you can afford the higher payment, the 15-year is almost always the better financial decision long-term.</p>

      <h2>Down Payment Impact: 3% vs 5% vs 20%</h2>
      <p>On a <strong>$400,000 home at 6.5% for 30 years</strong>, your down payment dramatically affects your monthly cost:</p>
      <ComparisonTable
        headers={["Metric", "3% Down (FHA)", "5% Down", "20% Down"]}
        rows={downPaymentRows}
        highlightCol={3}
        caption="Comparison based on $400,000 home at 6.5% for 30 years"
      />
      <p>The 20% down payment saves you <strong>~$624/month</strong> vs 3% down — that is $7,488/year. If you can reach 20%, do it.</p>

      <h2>2026 Mortgage Rate Outlook</h2>
      <p>As of June 2026, 30-year fixed mortgage rates are approximately <strong>6.25%–6.75%</strong>. Here is what is driving rates and what to expect:</p>
      <ul>
        <li><strong>Federal Reserve:</strong> The Fed held rates steady through early 2026. Potential cuts are expected in late 2026, which would gradually lower mortgage rates.</li>
        <li><strong>15-year fixed:</strong> Currently ~5.5%–6.0% — roughly 0.5–0.75% lower than 30-year rates.</li>
        <li><strong>ARM rates:</strong> 5/1 ARMs starting around 5.5%–6.0% — attractive if you plan to move within 5–7 years.</li>
        <li><strong>Rate lock strategy:</strong> Lock your rate when you find a property. Most lenders offer 30–60 day locks. Some offer float-down options if rates drop during your lock period.</li>
      </ul>

      <h2>Key Considerations for Home Buyers</h2>
      <ul>
        <li><strong>The 28/36 rule:</strong> Your housing payment (PITI) should not exceed 28% of gross monthly income. Total debt payments should not exceed 36%. Lenders use this to qualify you.</li>
        <li><strong>PMI:</strong> Required when down payment is under 20%. Costs 0.3%–1.5% of the loan annually. Automatically cancels when you reach 22% equity (or request cancellation at 20%).</li>
        <li><strong>Property taxes:</strong> US average is ~1.1% annually, but varies widely — New Jersey averages 2.4%, Hawaii averages 0.3%. Always check your specific county rate.</li>
        <li><strong>Closing costs:</strong> Typically 2%–5% of the purchase price. On a $400,000 home, budget $8,000–$20,000 for appraisal, origination fees, title insurance, and prepaid escrow.</li>
        <li><strong>Credit score impact:</strong> A 740+ score gets you the best rates. Going from 680 to 740 can save 0.5%–0.75% on your rate — that is $100–$150/month on a $400,000 loan.</li>
        <li><strong>Maintenance budget:</strong> Budget 1%–2% of home value annually for repairs and maintenance. A $400,000 home needs $4,000–$8,000/year set aside.</li>
      </ul>

      <h2>Common Mortgage Mistakes to Avoid</h2>
      <ul>
        <li><strong>Not shopping multiple lenders.</strong> Getting quotes from 3–5 lenders can save 0.25%–0.5% on your rate — worth $20,000–$40,000 over 30 years on a $400,000 loan.</li>
        <li><strong>Ignoring total PITI.</strong> Many buyers focus only on the principal + interest payment and forget taxes, insurance, and PMI. Always calculate the full PITI.</li>
        <li><strong>Changing jobs before closing.</strong> Lenders verify employment right before closing. A job change can delay or kill your loan approval.</li>
        <li><strong>Opening new credit accounts.</strong> New credit inquiries lower your score and increase your DTI. Avoid any new credit from pre-approval to closing.</li>
        <li><strong>Skipping the home inspection.</strong> A $400–$600 inspection can reveal $10,000–$50,000 in hidden problems. Never skip it.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div className="not-prose space-y-3 my-6">
        {[
          {
            q: "How is a mortgage payment calculated?",
            a: "Using the amortization formula: M = P × [r(1+r)^n] / [(1+r)^n − 1]. For a $320,000 loan at 6.5% for 30 years: monthly rate r = 0.005417, n = 360 payments. Monthly P&I = $2,023. Your full PITI payment adds property taxes, insurance, and PMI if applicable.",
          },
          {
            q: "What is a good mortgage rate in 2026?",
            a: "As of June 2026, a good rate for a 30-year fixed mortgage is 6.25%–6.5% for borrowers with 740+ credit scores and 20% down. Rates above 7% are considered high. Rates below 6% would be excellent in the current market. Always compare at least 3–5 lenders.",
          },
          {
            q: "What is PMI and when is it required?",
            a: "Private Mortgage Insurance (PMI) protects the lender if you default. It is required when your down payment is less than 20% of the home's value. PMI typically costs 0.3%–1.5% of the loan amount per year. On a $380,000 loan, that is $95–$475/month. PMI automatically cancels when you reach 22% equity.",
          },
          {
            q: "How does loan term affect monthly payment?",
            a: "A shorter term means higher monthly payments but dramatically less total interest. On a $400,000 loan at 6%: 30-year = $2,398/month ($463k total interest). 15-year = $3,375/month ($207k total interest). The 15-year saves $255,778 in interest but costs $977 more per month.",
          },
          {
            q: "How much house can I afford on $100,000 salary?",
            a: "Using the 28% rule: $100,000/12 = $8,333/month gross. Max PITI = $8,333 × 0.28 = $2,333/month. At 6.5% for 30 years with 20% down, that supports a home price of roughly $350,000–$380,000. Use our Home Affordability Calculator for a precise number based on your debts and down payment.",
          },
          {
            q: "What credit score do I need for a mortgage?",
            a: "Conventional loans: minimum 620, best rates at 740+. FHA loans: minimum 580 (500 with 10% down). VA loans: no official minimum (lenders typically require 620). USDA loans: minimum 640. A 740+ score can save you 0.5%–1% on your rate — worth $100–$200/month on a $400,000 loan.",
          },
          {
            q: "What are closing costs and how much should I expect?",
            a: "Closing costs typically range from 2%–5% of the loan amount. On a $400,000 home: $8,000–$20,000. These include loan origination fees (0.5%–1%), appraisal ($400–$700), title insurance ($1,000–$2,000), escrow fees, recording fees, and prepaid items (property taxes and insurance escrow). You can negotiate for the seller to cover some closing costs.",
          },
        ].map((faq, i) => (
          <details key={i} className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden dark:bg-slate-800/40 dark:border-slate-700">
            <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#0F172A] dark:text-slate-100 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors list-none">
              <span>{faq.q}</span>
              <svg className="h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <div className="px-5 pb-4 pt-1 text-sm text-[#64748B] dark:text-slate-300 leading-relaxed border-t border-[#F1F5F9] dark:border-slate-700">{faq.a}</div>
          </details>
        ))}
      </div>

      <h2>Related Tools</h2>
      <ul>
        <li><Link href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</Link> — How much house can you afford based on your income and debts?</li>
        <li><Link href="/calculators/mortgage-refinance-calculator-2026">Mortgage Refinance Calculator</Link> — Should you refinance? See your break-even point and savings.</li>
        <li><Link href="/calculators/amortization-calculator">Amortization Calculator</Link> — Full amortization schedule with every payment broken down.</li>
        <li><Link href="/calculators/dti-ratio-calculator">DTI Ratio Calculator</Link> — Calculate your debt-to-income ratio before applying.</li>
      </ul>

      <RelatedCalculators currentPage="mortgage-calculator-us" />
    </>
  );
}

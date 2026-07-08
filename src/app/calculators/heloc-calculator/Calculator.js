"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [homeValue, setHomeValue] = useState("");
  const [mortgageBalance, setMortgageBalance] = useState("");
  const [maxCltv, setMaxCltv] = useState("85");
  const [drawAmount, setDrawAmount] = useState("");
  const [rate, setRate] = useState("8.5");
  const [repayYears, setRepayYears] = useState("20");

  const value = parseFloat(homeValue) || 0;
  const balance = parseFloat(mortgageBalance) || 0;
  const cltv = (parseFloat(maxCltv) || 0) / 100;
  const draw = parseFloat(drawAmount) || 0;
  const r = (parseFloat(rate) || 0) / 100;
  const repay = parseFloat(repayYears) || 0;

  const errors = {};
  if (homeValue !== "" && value < 0) errors.homeValue = "Value can't be negative.";
  if (mortgageBalance !== "" && balance < 0) errors.mortgageBalance = "Balance can't be negative.";
  if (maxCltv !== "" && (cltv < 0 || cltv > 1)) errors.maxCltv = "Enter 0–100%.";
  if (drawAmount !== "" && draw < 0) errors.drawAmount = "Amount can't be negative.";
  if (rate !== "" && (r < 0 || r > 1)) errors.rate = "Enter 0–100%.";

  const totalEquity = Math.max(0, value - balance);
  const maxBorrow = Math.max(0, value * cltv - balance);
  const overLimit = draw > maxBorrow;
  const effectiveDraw = Math.min(draw, maxBorrow);

  const mRate = r / 12;
  const interestOnly = effectiveDraw * mRate;
  const repayMonths = repay * 12;
  const repayPayment = effectiveDraw > 0 && mRate > 0
    ? (effectiveDraw * mRate) / (1 - Math.pow(1 + mRate, -repayMonths))
    : (repayMonths > 0 ? effectiveDraw / repayMonths : 0);

  const schemaData = {
    name: "HELOC Calculator",
    description: "Calculate your home equity line of credit limit, available borrowing power, and monthly interest-only and repayment payments.",
    url: "https://www.themetricapp.com/calculators/heloc-calculator",
  };

  return (
    <CalculatorShell
      title="HELOC Calculator"
      subtitle="Find how much you can borrow against your home equity, plus your interest-only draw payment and your fully-amortizing repayment payment."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Available HELOC Limit" value={fmt(maxBorrow)} highlight sub={maxCltv + "% CLTV cap"} />
          <ResultCard label="Total Home Equity" value={fmt(totalEquity)} sub="Value minus mortgage" />
          <ResultCard label="Interest-Only Payment" value={fmt(interestOnly)} sub="During draw period" />
          <ResultCard label="Repayment Payment" value={fmt(repayPayment)} sub={"Over " + repay + " years"} />
          <ResultCard label="Amount Drawn" value={fmt(effectiveDraw)} sub={overLimit ? "Capped at limit" : "Within limit"} />
          <ResultCard label="Remaining Credit" value={fmt(Math.max(0, maxBorrow - effectiveDraw))} sub="Still available" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="homeValue" label="Current Home Value" value={homeValue} onChange={(e) => setHomeValue(e.target.value)} prefix="$" placeholder="500000" helpText="Estimated market value of your home" />
          {errors.homeValue && <p className="text-xs text-red-500 mt-1">{errors.homeValue}</p>}
        </div>
        <div>
          <InputField id="mortgageBalance" label="Mortgage Balance" value={mortgageBalance} onChange={(e) => setMortgageBalance(e.target.value)} prefix="$" placeholder="280000" helpText="What you still owe on your first mortgage" />
          {errors.mortgageBalance && <p className="text-xs text-red-500 mt-1">{errors.mortgageBalance}</p>}
        </div>
        <div>
          <InputField id="maxCltv" label="Max Combined LTV" value={maxCltv} onChange={(e) => setMaxCltv(e.target.value)} suffix="%" placeholder="85" helpText="Most lenders allow 80–90% of home value" />
          {errors.maxCltv && <p className="text-xs text-red-500 mt-1">{errors.maxCltv}</p>}
        </div>
        <div>
          <InputField id="drawAmount" label="Amount You Want to Borrow" value={drawAmount} onChange={(e) => setDrawAmount(e.target.value)} prefix="$" placeholder="50000" helpText="The draw you plan to use" />
          {errors.drawAmount && <p className="text-xs text-red-500 mt-1">{errors.drawAmount}</p>}
          {overLimit && <p className="text-xs text-amber-600 mt-1">Above your limit — capped at {fmt(maxBorrow)}.</p>}
        </div>
        <div>
          <InputField id="rate" label="HELOC Interest Rate" value={rate} onChange={(e) => setRate(e.target.value)} suffix="%" placeholder="8.5" helpText="HELOCs are usually variable, tied to the prime rate" />
          {errors.rate && <p className="text-xs text-red-500 mt-1">{errors.rate}</p>}
        </div>
        <div>
          <InputField id="repayYears" label="Repayment Term" value={repayYears} onChange={(e) => setRepayYears(e.target.value)} suffix="yrs" placeholder="20" helpText="Repayment period after the draw phase (often 20 years)" />
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> HELOC rates are usually variable, so payments can rise. During the draw period (often 10 years) you may pay interest only; afterward the balance amortizes. Your home is collateral — missed payments risk foreclosure.
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

      <h2>How Much Can You Borrow With a HELOC?</h2>
      <p>
        <strong>Most lenders let you borrow up to 80–90% of your home&apos;s value minus your existing mortgage balance.</strong> This is the combined loan-to-value (CLTV) limit. If your home is worth $500,000, your mortgage balance is $280,000, and the lender allows 85% CLTV, your HELOC limit is (0.85 × $500,000) − $280,000 = <strong>$145,000</strong>. A HELOC is a revolving credit line — you draw what you need, when you need it, and only pay interest on the balance you use.
      </p>

      <h2>How to Use This HELOC Calculator</h2>
      <p>
        Enter your <strong>home value</strong>, <strong>mortgage balance</strong>, and the lender&apos;s <strong>max CLTV</strong>. Add the amount you want to <strong>draw</strong> and the <strong>rate</strong>. The calculator shows your available credit line, your interest-only payment during the draw period, and your fully-amortizing payment once repayment begins.
      </p>

      <h2>Draw Period vs Repayment Period</h2>
      <p>
        A HELOC has two phases. During the <strong>draw period</strong> (typically 10 years) you can borrow and repay freely, often paying interest only — which keeps payments low but builds no equity. When the <strong>repayment period</strong> begins (often 20 years), you can no longer draw and must pay principal plus interest, so the monthly payment can jump sharply. Plan for that step-up before it hits.
      </p>

      <h2>HELOC vs Home Equity Loan vs Cash-Out Refinance</h2>
      <p>
        A <strong>HELOC</strong> is flexible and variable-rate — best for ongoing or uncertain costs like a phased renovation. A <strong>home equity loan</strong> gives a fixed lump sum at a fixed rate — better for a known one-time expense. A <strong>cash-out refinance</strong> replaces your whole mortgage — worth considering only if today&apos;s rates beat your current one. Compare the trade-offs with our <a href="/calculators/mortgage-refinance-calculator-2026">Mortgage Refinance Calculator</a> and <a href="/calculators/mortgage-calculator-us">Mortgage Calculator</a>.
      </p>
    </>
  );
}

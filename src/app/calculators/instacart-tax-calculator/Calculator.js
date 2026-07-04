"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

const MILEAGE_RATE = 0.725; // IRS business rate 2026
const SINGLE_BRACKETS = [
  [12400, 0.10],
  [50400, 0.12],
  [105700, 0.22],
  [201775, 0.24],
  [256225, 0.32],
  [640600, 0.35],
  [Infinity, 0.37],
];
const STD = { single: 16100, mfj: 32200 };

function federalTax(taxable, filing) {
  const mult = filing === "mfj" ? 2 : 1;
  let tax = 0;
  let prev = 0;
  for (const [cap, rate] of SINGLE_BRACKETS) {
    const upper = cap * mult;
    if (taxable > prev) {
      tax += (Math.min(taxable, upper) - prev) * rate;
      prev = upper;
    } else break;
  }
  return tax;
}

export default function Calculator() {
  const [basePay, setBasePay] = useState("");
  const [tips, setTips] = useState("");
  const [miles, setMiles] = useState("");
  const [otherExpenses, setOtherExpenses] = useState("");
  const [filing, setFiling] = useState("single");

  const base = parseFloat(basePay) || 0;
  const tip = parseFloat(tips) || 0;
  const mi = parseFloat(miles) || 0;
  const other = parseFloat(otherExpenses) || 0;

  const errors = {};
  if (basePay !== "" && base < 0) errors.basePay = "Earnings can't be negative.";
  if (tips !== "" && tip < 0) errors.tips = "Tips can't be negative.";
  if (miles !== "" && mi < 0) errors.miles = "Miles can't be negative.";
  if (otherExpenses !== "" && other < 0) errors.otherExpenses = "Expenses can't be negative.";

  const gross = base + tip;
  const mileageDeduction = mi * MILEAGE_RATE;
  const netProfit = Math.max(0, gross - mileageDeduction - other);

  // SE tax
  const seTax = netProfit * 0.9235 * 0.153;
  const halfSE = seTax / 2;

  // OBBBA tips deduction: delivery drivers are a qualifying tipped occupation.
  // Deduction limited to reported tips (≤ $25K) and can't exceed net profit.
  const tipsDeduction = Math.min(tip, 25000, netProfit);

  const qbi = Math.max(0, (netProfit - halfSE) * 0.20);
  const taxable = Math.max(0, netProfit - halfSE - (STD[filing] || STD.single) - qbi - tipsDeduction);
  const fedTax = federalTax(taxable, filing);

  const totalTax = seTax + fedTax;
  const quarterly = totalTax / 4;
  const takeHome = netProfit - totalTax;
  const effRate = netProfit > 0 ? (totalTax / netProfit) * 100 : 0;

  const schemaData = {
    name: "Instacart Tax Calculator 2026",
    description: "Estimate Instacart shopper taxes — SE tax, mileage deduction at $0.725/mile, OBBBA tips deduction, and quarterly payments.",
    url: "https://www.themetricapp.com/calculators/instacart-tax-calculator",
  };

  return (
    <CalculatorShell
      title="Instacart Tax Calculator (2026)"
      subtitle="Full-service shopper? Estimate SE tax and federal tax with the $0.725/mile deduction — plus the new OBBBA no-tax-on-tips deduction that delivery drivers qualify for."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Net Profit" value={fmt(netProfit)} sub="After mileage & expenses" />
          <ResultCard label="Mileage Deduction" value={fmt(mileageDeduction)} sub={mi.toLocaleString() + " mi × $0.725"} />
          <ResultCard label="OBBBA Tips Deduction" value={fmt(tipsDeduction)} sub="New for 2025–2028" />
          <ResultCard label="Self-Employment Tax" value={fmt(seTax)} sub="15.3% on 92.35% of net" />
          <ResultCard label="Total Est. Tax" value={fmt(totalTax)} highlight sub={pct(effRate) + " of net profit"} />
          <ResultCard label="Quarterly Payment" value={fmt(quarterly)} sub={"Take-home: " + fmt(takeHome)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="basePay" label="Batch Pay (Annual, Excl. Tips)" value={basePay} onChange={(e) => setBasePay(e.target.value)} prefix="$" placeholder="22000" helpText="Base batch earnings, promos, and bumps" />
          {errors.basePay && <p className="text-xs text-red-500 mt-1">{errors.basePay}</p>}
        </div>
        <div>
          <InputField id="tips" label="Customer Tips (Annual)" value={tips} onChange={(e) => setTips(e.target.value)} prefix="$" placeholder="8000" helpText="Reported tips — these get the new OBBBA deduction" />
          {errors.tips && <p className="text-xs text-red-500 mt-1">{errors.tips}</p>}
        </div>
        <div>
          <InputField id="miles" label="Business Miles (Annual)" value={miles} onChange={(e) => setMiles(e.target.value)} placeholder="12000" helpText="Shopping + delivery miles — your biggest deduction" />
          {errors.miles && <p className="text-xs text-red-500 mt-1">{errors.miles}</p>}
        </div>
        <div>
          <InputField id="otherExpenses" label="Other Expenses (Annual)" value={otherExpenses} onChange={(e) => setOtherExpenses(e.target.value)} prefix="$" placeholder="600" helpText="Insulated bags, phone share, parking, tolls" />
          {errors.otherExpenses && <p className="text-xs text-red-500 mt-1">{errors.otherExpenses}</p>}
        </div>
        <SelectField
          id="filing"
          label="Filing Status"
          value={filing}
          onChange={(e) => setFiling(e.target.value)}
          options={[
            { value: "single", label: "Single" },
            { value: "mfj", label: "Married Filing Jointly" },
          ]}
          helpText="Assumes Instacart is your main income; standard deduction applied"
        />
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> Full-service shoppers are 1099 contractors. Delivery drivers are on the IRS qualifying-occupations list for the 2025–2028 tips deduction — but tips must be reported, and the deduction can&apos;t exceed your net business income. Excludes state tax. Not tax advice.
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
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS Mileage Rates</a>
          </span>
        </div>
      </div>

      <h2>How Do Instacart Shopper Taxes Work in 2026?</h2>
      <p>
        Full-service Instacart shoppers are <strong>1099 independent contractors</strong> — nothing is withheld from batch pay or tips. You owe <strong>self-employment tax (15.3%)</strong> on net profit plus federal income tax, and Instacart reports your earnings on a <strong>1099-NEC</strong> (the IRS gets a copy, including tips paid through the app).
      </p>
      <p>
        Two deductions do the heavy lifting in 2026. First, <strong>mileage at $0.725 per business mile</strong> — 12,000 miles wipes $8,700 off your taxable profit. Second, the new <strong>OBBBA no-tax-on-tips deduction</strong>: delivery drivers are on the IRS qualifying-occupations list, so your reported customer tips (up to $25,000) are deductible from federal income tax for 2025–2028. Tips still incur SE tax — but the income-tax side largely disappears for typical shoppers.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your annual <strong>batch pay</strong> (excluding tips), <strong>customer tips</strong>, <strong>business miles</strong>, and other expenses (insulated bags, phone share, parking). You&apos;ll see your mileage deduction, the OBBBA tips deduction, SE tax, total tax, quarterly amount, and true take-home.
      </p>

      <h2>The Math, With a Worked Example</h2>
      <p>
        <strong>Example:</strong> $22,000 batch pay + $8,000 tips, 12,000 miles, $600 expenses, single. Mileage deduction = <strong>$8,700</strong>; net profit = <strong>$20,700</strong>. SE tax ≈ <strong>$2,925</strong>. With the standard deduction, QBI, and the $8,000 tips deduction, taxable income falls to zero — federal income tax ≈ <strong>$0</strong>. Total ≈ $2,925 (all SE tax), about <strong>$731 per quarter</strong>. Without the OBBBA tips deduction the bill would be a few hundred dollars higher.
      </p>

      <h2>Mistakes Instacart Shoppers Make</h2>
      <p>
        <strong>Not tracking miles</strong> — the single costliest error; use a mileage app from day one, because shopping-to-delivery-to-next-store miles all count. <strong>Skipping quarterly payments</strong> — owe $1,000+ and you&apos;ll face penalties in April. <strong>Forgetting tips still owe SE tax</strong> — the OBBBA deduction removes income tax on tips, not the 15.3%. <strong>Missing small deductions</strong> — insulated bags, parking, tolls, and the business share of your phone plan add up. And keep batch screenshots: app totals and 1099s occasionally disagree.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>How much should Instacart shoppers set aside for taxes?</h3>
      <p>After the mileage deduction, typically 15–20% of net profit for federal taxes. High-mileage shoppers often owe mostly SE tax, since mileage plus the new tips deduction can zero out income tax.</p>
      <h3>Do Instacart tips get the no-tax-on-tips deduction?</h3>
      <p>Yes — delivery drivers are on the IRS qualifying-occupations list for the OBBBA tips deduction (2025–2028). Reported tips up to $25,000 are deductible from federal income tax, though SE tax still applies.</p>
      <h3>What mileage can Instacart shoppers deduct?</h3>
      <p>All business miles at $0.725/mile in 2026 — driving to the store, shopping trips between stores, and delivery routes. Commuting from home to your first zone is generally not deductible.</p>
      <h3>Does Instacart send a 1099?</h3>
      <p>Yes — a 1099-NEC for $600+ in earnings, including app-paid tips. The IRS receives a copy.</p>
      <h3>Do I need to pay quarterly taxes as a shopper?</h3>
      <p>If you'll owe $1,000+ for the year, yes — estimated payments in April, June, September, and January avoid underpayment penalties.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/doordash-tax-estimator">DoorDash Tax Estimator</a> — Same math for delivery driving.</li>
        <li><a href="/calculators/no-tax-on-tips-calculator-2026">No Tax on Tips Calculator</a> — The OBBBA tips deduction in detail.</li>
        <li><a href="/calculators/irs-mileage-deduction-calculator">IRS Mileage Deduction Calculator</a> — Maximize your mileage write-off.</li>
      </ul>

      <RelatedCalculators currentPage="instacart-tax-calculator" />
    </>
  );
}

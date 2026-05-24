"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function ResidentialSolarPanelROI() {
  const [bill, setBill] = useState("");
  const [systemCost, setSystemCost] = useState("");
  const [creditEnabled, setCreditEnabled] = useState(true);

  const monthlyBill = parseFloat(bill) || 0;
  const grossCost = parseFloat(systemCost) || 0;

  const federalCredit = creditEnabled ? grossCost * 0.30 : 0;
  const netSystemCost = grossCost - federalCredit;
  const annualSavings = monthlyBill * 12;
  const paybackYears = annualSavings > 0 ? netSystemCost / annualSavings : 0;
  const twentyFiveYearSavings = annualSavings * 25 - netSystemCost;
  const roi25Year = netSystemCost > 0 ? (twentyFiveYearSavings / netSystemCost) * 100 : 0;
  const monthlyPayback = annualSavings > 0 ? netSystemCost / (annualSavings / 12) : 0;

  const schemaData = {
    name: "Residential Solar Panel ROI Calculator",
    description: "Calculate your solar panel payback period, savings, and return on investment with the 30% federal tax credit.",
    url: "https://themetricapp.com/calculators/residential-solar-panel-roi",
  };

  return (
    <CalculatorShell
      title="Residential Solar Panel ROI Calculator"
      subtitle="Estimate your solar panel payback period, 25-year savings, and ROI with the 30% federal tax credit."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Gross System Cost" value={fmt(grossCost)} />
          <ResultCard label="Federal Tax Credit (30%)" value={"−" + fmt(federalCredit)} sub={creditEnabled ? "ITC Applied" : "Not Applied"} />
          <ResultCard label="Net System Cost" value={fmt(netSystemCost)} />
          <ResultCard label="Annual Savings" value={fmt(annualSavings)} sub="Electricity bill offset" />
          <ResultCard label="Payback Period" value={paybackYears > 0 ? paybackYears.toFixed(1) + " yrs" : "—"} highlight />
          <ResultCard label="25-Year Net Savings" value={fmt(twentyFiveYearSavings)} highlight />
          <ResultCard label="25-Year ROI" value={roi25Year > 0 ? roi25Year.toFixed(0) + "%" : "—"} />
          <ResultCard label="Months to Payback" value={monthlyPayback > 0 ? Math.ceil(monthlyPayback).toString() : "—"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <InputField id="bill" label="Avg Monthly Electric Bill" value={bill} onChange={(e) => setBill(e.target.value)} prefix="$" placeholder="180" helpText="Your current monthly bill" />
        <InputField id="systemCost" label="Solar System Cost" value={systemCost} onChange={(e) => setSystemCost(e.target.value)} prefix="$" placeholder="25000" helpText="Total installed price" />
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-slate-700">Federal Tax Credit (30%)</label>
          <button
            onClick={() => setCreditEnabled(!creditEnabled)}
            className={`w-full rounded-lg border px-4 py-3 text-sm font-semibold transition-all ${
              creditEnabled
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-300 bg-white text-slate-500"
            }`}
          >
            {creditEnabled ? "✓ Enabled — 30% ITC Applied" : "Disabled — No Credit"}
          </button>
          <p className="text-xs text-slate-400">IRA 2022 Solar Investment Tax Credit</p>
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the Solar Panel ROI Calculator</h2>
      <p>
        Installing solar panels is one of the largest home improvement investments most homeowners will make, with typical residential systems costing $15,000–$35,000 before incentives. This calculator helps you determine whether solar makes financial sense for your specific situation by estimating your payback period, long-term savings, and return on investment over the typical 25-year lifespan of modern solar panels.
      </p>
      <p>
        Enter your <strong>average monthly electric bill</strong> — this represents the amount you would save each month by generating your own electricity. For the most accurate estimate, use your average bill across all 12 months (summer bills are typically higher due to air conditioning). Next, enter the <strong>total cost of the solar system</strong>, which includes panels, inverters, mounting hardware, wiring, permits, and installation labor. Get quotes from at least 3 local solar installers or use platforms like EnergySage for competitive pricing. Finally, toggle the <strong>Federal Tax Credit</strong> on or off — the 30% Investment Tax Credit (ITC) under the Inflation Reduction Act of 2022 reduces your system cost significantly and applies to systems installed through 2032.
      </p>
      <p>
        The calculator instantly shows your net cost after the tax credit, annual electricity savings, payback period in years, 25-year net savings, and total ROI. Most homeowners in high-sunshine areas achieve payback within 6–10 years, followed by 15–19 years of essentially free electricity.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <h3>Step 1: Apply the Federal Solar Tax Credit (30% ITC)</h3>
      <p>
        The <strong>Residential Clean Energy Credit</strong> (formerly the Solar Investment Tax Credit) allows homeowners to deduct 30% of the total cost of a solar energy system from their federal taxes. This is a dollar-for-dollar tax credit, not a deduction — meaning it directly reduces the amount of tax you owe. For a $25,000 system: <strong>Credit = $25,000 × 30% = $7,500</strong>. Your net out-of-pocket cost drops to $17,500. If your tax liability is less than $7,500 in the year of installation, you can carry the remaining credit forward to future tax years. The 30% rate is locked in through 2032, then steps down to 26% in 2033 and 22% in 2034.
      </p>
      <h3>Step 2: Calculate Annual Electricity Savings</h3>
      <p>
        <strong>Annual Savings = Monthly Electric Bill × 12</strong>. This assumes your solar system is sized to offset 100% of your electricity consumption, which is the standard design goal for most residential installations. A homeowner paying $180/month saves $2,160/year. Note that actual savings may vary based on net metering policies (how your utility credits excess solar production), time-of-use rate structures, and seasonal production variations. In most US states with favorable net metering, a properly sized system offsets 90–100% of annual electricity costs.
      </p>
      <h3>Step 3: Calculate Payback Period</h3>
      <p>
        <strong>Payback Period (years) = Net System Cost ÷ Annual Savings</strong>. Using our example: $17,500 ÷ $2,160 = <strong>8.1 years</strong>. After the payback period, every year of solar production is essentially pure savings. With modern panels warrantied for 25–30 years and many lasting 35+ years with minimal degradation, the post-payback savings window is substantial.
      </p>
      <h3>Step 4: Calculate 25-Year Net Savings and ROI</h3>
      <p>
        <strong>25-Year Net Savings = (Annual Savings × 25) − Net System Cost</strong>. Using our example: ($2,160 × 25) − $17,500 = $54,000 − $17,500 = <strong>$36,500 in net savings</strong> over the panel lifespan. <strong>ROI = (Net Savings ÷ Net System Cost) × 100</strong> = ($36,500 ÷ $17,500) × 100 = <strong>208.6% ROI</strong>. This does not account for electricity rate increases (which historically average 2–3% annually), meaning real-world savings are likely even higher.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Is solar worth it in 2024 with current electricity prices and incentives?</h3>
      <p>
        For most US homeowners, solar panels are an excellent investment in 2024. The combination of the 30% federal tax credit (locked in through 2032), declining panel costs (down 70% over the past decade), rising electricity rates (up 15%+ in many states since 2020), and 25-year panel warranties make the financial case stronger than ever. The average US homeowner saves $20,000–$40,000 over 25 years after accounting for system costs. States with the best solar economics include California, Arizona, Texas, Florida, and Colorado due to high sunshine hours and favorable net metering policies. Even in less sunny states like New York and Massachusetts, strong state incentives and high electricity rates make solar financially attractive. The primary exceptions are homes with heavy shading, north-facing roofs, or very low electricity bills (under $75/month), where the payback period may extend beyond 15 years.
      </p>
      <h3>What happens to solar panels when I sell my home?</h3>
      <p>
        Solar panels consistently increase home resale values. A study by the Lawrence Berkeley National Laboratory found that homes with owned (not leased) solar systems sell for a premium of approximately <strong>$4 per watt of installed capacity</strong>. For a typical 8 kW system, that translates to a $32,000 increase in home value — often exceeding the net cost of the system. Homes with solar also tend to sell faster than comparable non-solar homes. However, leased solar systems or Power Purchase Agreements (PPAs) can complicate home sales, as the buyer must agree to assume the lease terms. For maximum resale value and simplicity, purchasing your solar system outright (or through a solar loan) is strongly recommended over leasing.
      </p>
      <h3>How does the 30% federal tax credit actually work?</h3>
      <p>
        The federal solar tax credit is a <strong>non-refundable tax credit</strong> that directly reduces your federal income tax liability dollar-for-dollar. Here is how it works in practice: if you install a $25,000 solar system in 2024, you can claim a $7,500 credit on your 2024 federal tax return (filed in early 2025). If you owed $10,000 in federal taxes, the credit reduces your tax bill to $2,500. If you owed only $5,000 in taxes, you would use $5,000 of the credit in 2024 and carry the remaining $2,500 forward to your 2025 tax return. The credit applies to the total installed cost, including panels, inverters, mounting hardware, wiring, labor, permits, and even battery storage systems (like Tesla Powerwall). You claim it using <strong>IRS Form 5695</strong> attached to your standard 1040 return. Note: this is a tax credit, not a rebate — you must have sufficient tax liability to use it. Consult your tax professional to ensure proper claiming.
      </p>
    </>
  );
}

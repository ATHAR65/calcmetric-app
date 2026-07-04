"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

export default function Calculator() {
  const [dailyRate, setDailyRate] = useState("");
  const [daysBooked, setDaysBooked] = useState("");
  const [plan, setPlan] = useState("80");
  const [carPayment, setCarPayment] = useState("");
  const [otherCosts, setOtherCosts] = useState("");

  const rate = parseFloat(dailyRate) || 0;
  const days = parseFloat(daysBooked) || 0;
  const share = (parseFloat(plan) || 80) / 100;
  const payment = parseFloat(carPayment) || 0;
  const costs = parseFloat(otherCosts) || 0;

  const errors = {};
  if (dailyRate !== "" && rate < 0) errors.dailyRate = "Rate can't be negative.";
  if (daysBooked !== "" && (days < 0 || days > 31)) errors.daysBooked = "Enter 0–31 days.";
  if (carPayment !== "" && payment < 0) errors.carPayment = "Payment can't be negative.";
  if (otherCosts !== "" && costs < 0) errors.otherCosts = "Costs can't be negative.";

  const grossMonthly = rate * days;
  const hostEarnings = grossMonthly * share;
  const turoShare = grossMonthly - hostEarnings;
  const netMonthly = hostEarnings - payment - costs;
  const netAnnual = netMonthly * 12;
  const utilization = (days / 30) * 100;

  const schemaData = {
    name: "Turo Profit Calculator 2026",
    description: "Estimate Turo host earnings by protection plan (70–90% share), minus car payment and costs, monthly and annually.",
    url: "https://www.themetricapp.com/calculators/turo-profit-calculator",
  };

  return (
    <CalculatorShell
      title="Turo Profit Calculator (2026)"
      subtitle="Estimate your real Turo host income — earnings plan share, car payment, cleaning and maintenance — monthly and annually."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Gross Bookings / Month" value={fmt(grossMonthly)} sub={days + " days × " + fmt(rate)} />
          <ResultCard label="Your Share" value={fmt(hostEarnings)} sub={plan + "% earnings plan"} />
          <ResultCard label="Turo's Share" value={fmt(turoShare)} sub={(100 - parseFloat(plan)) + "% + protection"} />
          <ResultCard label="Net Profit / Month" value={fmt(netMonthly)} highlight sub="After payment & costs" />
          <ResultCard label="Net Profit / Year" value={fmt(netAnnual)} />
          <ResultCard label="Utilization" value={pct(utilization)} sub="Days booked vs 30" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="dailyRate" label="Average Daily Rate" value={dailyRate} onChange={(e) => setDailyRate(e.target.value)} prefix="$" placeholder="55.00" helpText="Your average trip price per day" />
          {errors.dailyRate && <p className="text-xs text-red-500 mt-1">{errors.dailyRate}</p>}
        </div>
        <div>
          <InputField id="daysBooked" label="Days Booked Per Month" value={daysBooked} onChange={(e) => setDaysBooked(e.target.value)} placeholder="18" helpText="Typical active hosts see 15–22 booked days" />
          {errors.daysBooked && <p className="text-xs text-red-500 mt-1">{errors.daysBooked}</p>}
        </div>
        <SelectField
          id="plan"
          label="Earnings Plan (Host Share)"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          options={[
            { value: "90", label: "90% — More earnings (you carry more risk)" },
            { value: "80", label: "80% — Balanced (most common)" },
            { value: "70", label: "70% — More peace of mind" },
          ]}
          helpText="Higher protection from Turo = lower host share"
        />
        <div>
          <InputField id="carPayment" label="Monthly Car Payment" value={carPayment} onChange={(e) => setCarPayment(e.target.value)} prefix="$" placeholder="380.00" helpText="Loan or lease payment on this vehicle" />
          {errors.carPayment && <p className="text-xs text-red-500 mt-1">{errors.carPayment}</p>}
        </div>
        <div className="sm:col-span-2">
          <InputField id="otherCosts" label="Other Monthly Costs" value={otherCosts} onChange={(e) => setOtherCosts(e.target.value)} prefix="$" placeholder="150.00" helpText="Cleaning, maintenance reserve, parking, personal insurance" />
          {errors.otherCosts && <p className="text-xs text-red-500 mt-1">{errors.otherCosts}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> US host shares are 70/80/90% by earnings plan (some dynamic-pricing cities range 65–100%). Turo income is self-employment income — depreciation is usually the biggest hidden cost <em>and</em> the biggest tax deduction. Verified July 2026.
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
            <strong>Source:</strong>{" "}
            <a href="https://help.turo.com/en_us/earnings-and-host-share-r1zDrNlNc" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Turo Host Earnings</a>
          </span>
        </div>
      </div>

      <h2>How Much Do Turo Hosts Actually Make in 2026?</h2>
      <p>
        Your Turo income = <strong>daily rate × booked days × your earnings-plan share</strong>, minus real ownership costs. US hosts keep <strong>70%, 80%, or 90%</strong> of the trip price depending on the protection plan: take more protection from Turo and keep less, carry more risk yourself and keep more. In several dynamic-pricing cities the share ranges 65–100% based on how far ahead trips are booked — the &quot;More earnings&quot; plan can hit <strong>100%</strong> for trips booked 28+ days out.
      </p>
      <p>
        The killer variable isn&apos;t the share — it&apos;s <strong>utilization</strong>. A $55/day car booked 18 days at 80% grosses $792/month to you; booked 8 days, just $352, which likely doesn&apos;t cover the car payment.
      </p>

      <h2>How to Use This Calculator</h2>
      <p>
        Enter your <strong>average daily rate</strong> and realistic <strong>booked days per month</strong>, pick your <strong>earnings plan</strong>, then add the <strong>car payment</strong> and other monthly costs (cleaning, maintenance reserve, parking). You&apos;ll see gross bookings, your share versus Turo&apos;s, and true net profit monthly and annually.
      </p>

      <h2>The Math, With a Worked Example</h2>
      <p>
        <strong>Example:</strong> A Camry listed at <strong>$55/day</strong>, booked <strong>18 days</strong> on the 80% plan, with a $380 payment and $150 of monthly costs. Gross = $990. Your share = <strong>$792</strong>. Net = $792 − $380 − $150 = <strong>$262/month</strong> (~$3,144/year) — before depreciation and taxes. The same car at 90% share nets $361/month, but you&apos;d carry a larger damage deductible.
      </p>

      <h2>What First-Time Hosts Underestimate</h2>
      <p>
        <strong>Depreciation</strong> — renters add 1,000+ miles/month; at ~$0.10–0.15/mile of value loss that&apos;s $100–150 of invisible cost (though it becomes a large <strong>tax deduction</strong>). <strong>Turn-around time</strong> — cleaning and charging/fueling between trips caps real utilization. <strong>Seasonality</strong> — many markets do 25 booked days in summer, 10 in January. <strong>Taxes</strong> — Turo issues a 1099-K; income is self-employment income, but mileage/depreciation, cleaning, and the car&apos;s business-use share of costs are deductible. Run your net through our <a href="/calculators/self-employment-tax-calculator-2026">SE tax calculator</a>.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What percentage does Turo take from hosts?</h3>
      <p>Turo keeps 10–30% depending on your earnings plan (hosts keep 70/80/90%). In dynamic-pricing cities the host share ranges 65–100% based on booking lead time.</p>
      <h3>How much can I make hosting one car on Turo?</h3>
      <p>A $55/day car booked 18 days/month on the 80% plan grosses $792 to the host — typically $200–$400/month of profit after the car payment and running costs, before depreciation.</p>
      <h3>Which Turo earnings plan is best?</h3>
      <p>The 80% Balanced plan suits most hosts. Choose 90% only if you can absorb a large damage deductible; choose 70% for maximum peace of mind on expensive vehicles.</p>
      <h3>Is Turo income taxable?</h3>
      <p>Yes — it's self-employment income and Turo issues a 1099-K past the federal threshold. Depreciation, cleaning, parking, and the business share of ownership costs are deductible.</p>
      <h3>Does Turo cover damage to my car?</h3>
      <p>Each earnings plan includes physical damage reimbursement and liability coverage, with the deductible and protection level varying by plan — that's exactly what the 70/80/90% share trade-off buys.</p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/airbnb-host-net-income">Airbnb Host Net Income</a> — The property version of this math.</li>
        <li><a href="/calculators/car-loan-affordability-calculator-2026">Car Loan Affordability Calculator</a> — Before you buy a Turo fleet car.</li>
        <li><a href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</a> — Taxes on your hosting profit.</li>
      </ul>

      <RelatedCalculators currentPage="turo-profit-calculator" />
    </>
  );
}

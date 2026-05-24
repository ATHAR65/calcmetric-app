"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function AirbnbHostNetIncome() {
  const [rate, setRate] = useState("");
  const [nights, setNights] = useState("");
  const [cleaning, setCleaning] = useState("");
  const [expenses, setExpenses] = useState("");

  const nightlyRate = parseFloat(rate) || 0;
  const nightsBooked = parseFloat(nights) || 0;
  const cleaningFee = parseFloat(cleaning) || 0;
  const fixedExpenses = parseFloat(expenses) || 0;

  // Monthly revenue
  const totalNightlyRevenue = nightlyRate * nightsBooked;
  // Let's say cleaning fee is charged per stay, and on average there are (nightsBooked / 3) stays per month
  const estimatedStays = Math.max(1, Math.round(nightsBooked / 3));
  const totalCleaningRevenue = nightsBooked > 0 ? cleaningFee * estimatedStays : 0;
  const grossRevenue = totalNightlyRevenue + totalCleaningRevenue;

  // Airbnb Host Fee: 3% of the booking subtotal (nightly rate + cleaning fee)
  const airbnbFee = grossRevenue * 0.03;

  // Total operating expenses
  // Here we assume cleaning cost = cleaning revenue (passed to cleaners)
  const totalOperatingCosts = totalCleaningRevenue + fixedExpenses;

  // Net Operating Income (NOI)
  const netOperatingIncome = grossRevenue - airbnbFee - totalOperatingCosts;
  const annualNOI = netOperatingIncome * 12;

  const occupancyRate = (nightsBooked / 30) * 100;

  const schemaData = {
    name: "Airbnb Host Net Income Calculator",
    description: "Estimate your Airbnb net operating income after host fees, cleaning costs, and mortgage expenses.",
    url: "https://themetricapp.com/calculators/airbnb-host-net-income",
  };

  return (
    <CalculatorShell
      title="Airbnb Host Net Income Calculator"
      subtitle="Calculate your true monthly and annual profit as an Airbnb host after fees and expenses."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ResultCard label="Gross Monthly Rev" value={fmt(grossRevenue)} sub={`Nights + Cleaning`} />
          <ResultCard label="Airbnb Host Fee (3%)" value={fmt(airbnbFee)} />
          <ResultCard label="Total Monthly Exp" value={fmt(totalOperatingCosts)} sub="Cleaning + Fixed" />
          <ResultCard label="Monthly Net Profit" value={fmt(netOperatingIncome)} highlight />
          <ResultCard label="Annual Net Profit" value={fmt(annualNOI)} highlight />
          <ResultCard label="Occupancy Rate" value={occupancyRate.toFixed(1) + "%"} sub="Based on 30 days" />
          <ResultCard label="Est. Stays / Mo" value={nightsBooked > 0 ? estimatedStays.toString() : "0"} sub="Avg 3 nights/stay" />
          <ResultCard label="Break-Even Nights" value={fixedExpenses > 0 ? Math.ceil((fixedExpenses + totalCleaningRevenue) / (nightlyRate * 0.97)).toString() : "0"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="rate" label="Average Nightly Rate" value={rate} onChange={(e) => setRate(e.target.value)} prefix="$" placeholder="150" />
        <InputField id="nights" label="Nights Booked / Month" value={nights} onChange={(e) => setNights(e.target.value)} suffix="nights" placeholder="20" helpText="Max 31" />
        <InputField id="cleaning" label="Cleaning Fee (Per Stay)" value={cleaning} onChange={(e) => setCleaning(e.target.value)} prefix="$" placeholder="75" helpText="Charged to guest" />
        <InputField id="expenses" label="Monthly Fixed Expenses" value={expenses} onChange={(e) => setExpenses(e.target.value)} prefix="$" placeholder="1200" helpText="Mortgage, utilities, insurance" />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the Airbnb Host Net Income Calculator</h2>
      <p>
        Running a successful short-term rental on Airbnb is more complex than just collecting nightly rates. Between platform fees, cleaning costs, mortgages, utilities, and insurance, finding your true Net Operating Income (NOI) is essential. This calculator provides a precise monthly and annual breakdown of your Airbnb profitability, helping you understand your actual cash flow and optimize your pricing strategy.
      </p>
      <p>
        Enter your <strong>Average Nightly Rate</strong> — the base price you charge guests per night. Next, input your estimated <strong>Nights Booked per Month</strong> (your occupancy). Then, enter the <strong>Cleaning Fee</strong> you charge per stay. (The calculator assumes an average stay length of 3 nights to estimate how many cleaning fees you collect in a month). Finally, input your <strong>Monthly Fixed Expenses</strong> — this should include your mortgage or rent, property taxes, HOA fees, utilities (water, electricity, internet), insurance, and any software subscriptions.
      </p>
      <p>
        The tool instantly computes your gross monthly revenue, the 3% Airbnb Host Fee, your total monthly expenses (including the cost of cleaning, which is assumed to equal the cleaning fee you charge), and your true monthly and annual Net Profit. It also calculates your occupancy rate and the number of break-even nights required to cover your fixed costs.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <h3>Airbnb Host Fee (3%)</h3>
      <p>
        Airbnb typically charges hosts a <strong>3% flat fee</strong> on the booking subtotal. The subtotal includes the nightly rate and any cleaning fees, but excludes Airbnb&apos;s guest service fee and local taxes. For example, if a guest books 3 nights at $150/night with a $75 cleaning fee, the subtotal is $525. Your host fee is $525 × 3% = $15.75. (Note: Some hosts, particularly property managers or those using strict cancellation policies, may opt into a &quot;Host-only fee&quot; structure where the host pays 14-16% and the guest pays 0%, but 3% is the standard for individual hosts).
      </p>
      <h3>Gross Revenue vs. Net Revenue</h3>
      <p>
        <strong>Gross Revenue</strong> is the total amount collected from the guest before Airbnb takes its cut. It equals (Nightly Rate × Nights Booked) + Total Cleaning Fees Collected. <strong>Net Revenue</strong> is what actually lands in your bank account: Gross Revenue minus the 3% Host Fee.
      </p>
      <h3>Operating Expenses &amp; Net Operating Income (NOI)</h3>
      <p>
        Your <strong>Operating Expenses</strong> consist of variable costs (like cleaning, supplies, and wear-and-tear) and fixed costs (mortgage, insurance, utilities). In this calculator, we assume the cleaning fee collected is entirely passed on to your cleaning crew (a common industry standard). <strong>Net Operating Income (NOI) = Net Revenue − Operating Expenses</strong>. If your NOI is negative, the property is operating at a loss, and you must inject personal capital to cover the mortgage and utilities.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Is a 3% host fee the only fee Airbnb charges?</h3>
      <p>
        For most individual hosts using the split-fee structure, yes, the host fee is a flat 3% of the booking subtotal. However, Airbnb also charges a <strong>Guest Service Fee</strong> (typically around 14.2% of the booking subtotal), which is added to the guest&apos;s total checkout price. While you don&apos;t pay the guest service fee directly, it increases the total price of your listing, which can impact your booking conversion rate. If you operate in regions like Europe or use specific property management software connected via API, Airbnb may require you to use the &quot;Host-only fee&quot; structure, which deducts a flat 14-16% from your payout, completely removing the guest fee.
      </p>
      <h3>What is a good occupancy rate for an Airbnb?</h3>
      <p>
        Occupancy rates vary wildly based on seasonality, location, and property type. A beach house might see 95% occupancy in July and 15% in January. In general, urban markets or year-round vacation destinations target <strong>60% to 75% annual occupancy</strong>. A 60% occupancy rate means your property is booked roughly 18 days per month. Lower occupancy isn&apos;t necessarily bad if your nightly rate is high enough to achieve your target revenue. Many experienced hosts prefer 50% occupancy at a premium rate rather than 90% occupancy at a discount rate, as fewer guests mean less wear-and-tear, lower utility usage, and fewer operational headaches.
      </p>
      <h3>How can I increase my net profit without raising my nightly rate?</h3>
      <p>
        If raising your base rate lowers your occupancy too much, consider these strategies to boost your bottom line: <strong>1) Decrease turnover costs</strong>: Negotiate a flat monthly rate with your cleaning team, or handle some turnovers yourself. <strong>2) Implement dynamic pricing</strong>: Use software like PriceLabs or Wheelhouse to automatically adjust rates daily based on local demand, events, and seasonality. <strong>3) Reduce utility bills</strong>: Install smart thermostats (like Nest or Ecobee) to automatically turn off HVAC systems when the property is empty. <strong>4) Add up-sells</strong>: Offer early check-in, late check-out, pet fees, or equipment rentals (bikes, kayaks) for an additional charge. These add-ons are often pure profit and are not subject to the 3% host fee if collected separately (e.g., through the Airbnb Resolution Center).
      </p>
    </>
  );
}

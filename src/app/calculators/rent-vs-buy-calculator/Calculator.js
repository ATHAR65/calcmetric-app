"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function Calculator() {
  const [homePrice, setHomePrice] = useState("");
  const [downPct, setDownPct] = useState("20");
  const [rate, setRate] = useState("6.5");
  const [rent, setRent] = useState("");
  const [years, setYears] = useState("7");

  const price = parseFloat(homePrice) || 0;
  const down = (parseFloat(downPct) || 0) / 100;
  const r = (parseFloat(rate) || 0) / 100;
  const monthlyRent = parseFloat(rent) || 0;
  const t = parseFloat(years) || 0;

  const errors = {};
  if (homePrice !== "" && price < 0) errors.homePrice = "Price can't be negative.";
  if (downPct !== "" && (down < 0 || down > 1)) errors.downPct = "Enter 0–100%.";
  if (rate !== "" && (r < 0 || r > 1)) errors.rate = "Enter 0–100%.";
  if (rent !== "" && monthlyRent < 0) errors.rent = "Rent can't be negative.";
  if (years !== "" && (t < 1 || t > 40)) errors.years = "Enter 1–40 years.";

  // Assumptions (typical US, 2026)
  const APPRECIATION = 0.035, RENT_GROWTH = 0.03, INVEST_RETURN = 0.06;
  const PROP_TAX = 0.011, INSURANCE = 0.005, MAINT = 0.01, SELL_COST = 0.06;

  const downPayment = price * down;
  const loan = price - downPayment;
  const n = 360; // 30-year loan
  const mRate = r / 12;
  const payment = loan > 0 && mRate > 0
    ? (loan * mRate) / (1 - Math.pow(1 + mRate, -n))
    : loan / n;

  // --- BUYING ---
  let balance = loan;
  let buyOutflow = downPayment;
  const months = Math.round(t * 12);
  for (let i = 0; i < months; i++) {
    const interest = balance * mRate;
    balance -= payment - interest;
    buyOutflow += payment;
  }
  // annual carrying costs (tax, insurance, maintenance) grow with home value roughly
  const carrying = price * (PROP_TAX + INSURANCE + MAINT) * t;
  buyOutflow += carrying;
  const endHomeValue = price * Math.pow(1 + APPRECIATION, t);
  const equity = endHomeValue * (1 - SELL_COST) - Math.max(0, balance);
  const netBuyCost = buyOutflow - equity;

  // --- RENTING ---
  let rentPaid = 0;
  let curRent = monthlyRent;
  for (let y = 0; y < t; y++) {
    rentPaid += curRent * 12;
    curRent *= 1 + RENT_GROWTH;
  }
  // down payment + monthly buy/rent difference invested; simplify: invest down payment only
  const investEnd = downPayment * Math.pow(1 + INVEST_RETURN, t);
  const investGain = investEnd - downPayment;
  const netRentCost = rentPaid - investGain;

  const difference = netRentCost - netBuyCost; // positive = buying cheaper
  const buyingWins = difference > 0;

  const schemaData = {
    name: "Rent vs Buy Calculator",
    description: "Compare the total cost of renting versus buying a home over time, including equity, appreciation, and opportunity cost.",
    url: "https://www.themetricapp.com/calculators/rent-vs-buy-calculator",
  };

  return (
    <CalculatorShell
      title="Rent vs Buy Calculator"
      subtitle="Compare the true total cost of renting versus buying over your time horizon — including equity, appreciation, carrying costs, and the opportunity cost of your down payment."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label={buyingWins ? "Buying Wins By" : "Renting Wins By"} value={fmt(Math.abs(difference))} highlight sub={"Over " + t + " years"} />
          <ResultCard label="Net Cost to Buy" value={fmt(netBuyCost)} sub="Outflow minus equity" />
          <ResultCard label="Net Cost to Rent" value={fmt(netRentCost)} sub="Rent minus investment gain" />
          <ResultCard label="Monthly Mortgage (P&I)" value={fmt(payment)} sub="30-yr loan" />
          <ResultCard label="Home Equity at Exit" value={fmt(equity)} sub="After 6% selling cost" />
          <ResultCard label="Down Payment" value={fmt(downPayment)} sub={(down * 100).toFixed(0) + "% down"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputField id="homePrice" label="Home Price" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} prefix="$" placeholder="400000" helpText="Purchase price of the home you'd buy" />
          {errors.homePrice && <p className="text-xs text-red-500 mt-1">{errors.homePrice}</p>}
        </div>
        <div>
          <InputField id="rent" label="Monthly Rent" value={rent} onChange={(e) => setRent(e.target.value)} prefix="$" placeholder="2200" helpText="Rent for a comparable home today" />
          {errors.rent && <p className="text-xs text-red-500 mt-1">{errors.rent}</p>}
        </div>
        <div>
          <InputField id="downPct" label="Down Payment" value={downPct} onChange={(e) => setDownPct(e.target.value)} suffix="%" placeholder="20" helpText="Percentage of the price you'd put down" />
          {errors.downPct && <p className="text-xs text-red-500 mt-1">{errors.downPct}</p>}
        </div>
        <div>
          <InputField id="rate" label="Mortgage Rate" value={rate} onChange={(e) => setRate(e.target.value)} suffix="%" placeholder="6.5" helpText="30-year fixed APR" />
          {errors.rate && <p className="text-xs text-red-500 mt-1">{errors.rate}</p>}
        </div>
        <div className="sm:col-span-2">
          <InputField id="years" label="Years You'll Stay" value={years} onChange={(e) => setYears(e.target.value)} placeholder="7" helpText="The single most important input — buying rarely wins under ~5 years" />
          {errors.years && <p className="text-xs text-red-500 mt-1">{errors.years}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Assumptions:</strong> 3.5% home appreciation, 3% annual rent growth, 6% investment return on the invested down payment, 1.1% property tax, 0.5% insurance, 1% maintenance, 6% selling costs. Adjust the inputs to match your market.
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

      <h2>Is It Better to Rent or Buy a Home?</h2>
      <p>
        <strong>Whether renting or buying is cheaper depends mostly on how long you'll stay — buying rarely wins if you move within about five years.</strong> Buying carries large upfront costs (down payment, closing) and exit costs (~6% to sell), so you need enough time for appreciation and equity to outweigh them. Renting stays flexible and lets you invest the money you'd have tied up in a down payment.
      </p>

      <h2>How This Calculator Compares the Two</h2>
      <p>
        It models the full picture, not just rent versus mortgage. For <strong>buying</strong>, it totals your down payment, mortgage payments, property tax, insurance, and maintenance, then subtracts the equity you'd walk away with after selling costs. For <strong>renting</strong>, it totals your rent (grown each year) and subtracts the investment gains from putting your down payment in the market instead. The lower net cost wins.
      </p>

      <h2>The Numbers That Decide It</h2>
      <p>
        Four inputs move the result most: <strong>years you'll stay</strong> (longer favors buying), <strong>mortgage rate</strong> (higher favors renting), the <strong>rent-to-price ratio</strong> (cheap rent favors renting), and <strong>expected appreciation</strong>. A common rule of thumb — the &quot;price-to-rent ratio&quot; — says if a home costs more than ~20× the annual rent, renting is often the better financial deal. Fine-tune the mortgage side with our <a href="/calculators/mortgage-calculator-us">Mortgage Calculator</a> and <a href="/calculators/home-affordability-calculator-2026">Home Affordability Calculator</a>.
      </p>

      <h2>Beyond the Math</h2>
      <p>
        The calculator answers the financial question, but not the whole one. Buying offers stability, forced savings, and freedom to renovate; renting offers mobility and no exposure to a housing downturn or surprise repairs. If the net costs are close, let lifestyle break the tie. Whatever you choose, invest the difference — a renter who banks the savings can come out ahead of a buyer. See our <a href="/calculators/compound-interest-calculator">Compound Interest Calculator</a> to model that.
      </p>
    </>
  );
}

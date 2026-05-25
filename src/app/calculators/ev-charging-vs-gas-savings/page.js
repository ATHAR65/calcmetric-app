"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function EVChargingVsGasSavings() {
  const [mileage, setMileage] = useState("");
  const [gasPrice, setGasPrice] = useState("");
  const [mpg, setMpg] = useState("");
  const [elecRate, setElecRate] = useState("");
  const [evEfficiency, setEvEfficiency] = useState("");

  const monthlyMiles = parseFloat(mileage) || 0;
  const gasPricePerGal = parseFloat(gasPrice) || 0;
  const carMPG = parseFloat(mpg) || 0;
  const electricityRate = parseFloat(elecRate) || 0;
  const kwhPerMile = parseFloat(evEfficiency) || 0;

  // Gas cost
  const monthlyGallons = carMPG > 0 ? monthlyMiles / carMPG : 0;
  const monthlyGasCost = monthlyGallons * gasPricePerGal;
  const annualGasCost = monthlyGasCost * 12;

  // EV cost
  const monthlyKWh = monthlyMiles * kwhPerMile;
  const monthlyEVCost = monthlyKWh * electricityRate;
  const annualEVCost = monthlyEVCost * 12;

  // Savings
  const monthlySavings = monthlyGasCost - monthlyEVCost;
  const annualSavings = annualGasCost - annualEVCost;
  const savingsPct = monthlyGasCost > 0 ? (monthlySavings / monthlyGasCost) * 100 : 0;
  const fiveYearSavings = annualSavings * 5;

  const schemaData = {
    name: "EV Charging vs Gas Savings Calculator",
    description: "Calculate how much you save monthly and annually by switching from gasoline to electric vehicle charging.",
    url: "https://www.themetricapp.com/calculators/ev-charging-vs-gas-savings",
  };

  return (
    <CalculatorShell
      title="EV Charging vs Gas Savings Calculator"
      subtitle="Calculate your monthly and annual savings by switching from gas to electric vehicle charging."
      schemaData={schemaData}
      results={
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border-2 border-red-300 bg-white p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">⛽ Gas Vehicle</p>
              <p className="text-2xl font-extrabold text-slate-900">{fmt(monthlyGasCost)}<span className="text-sm font-normal text-slate-400">/mo</span></p>
              <p className="text-sm text-slate-500 mt-1">{fmt(annualGasCost)} / year</p>
            </div>
            <div className="rounded-xl border-2 border-green-500 bg-white p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-green-600 mb-1">⚡ Electric Vehicle</p>
              <p className="text-2xl font-extrabold text-slate-900">{fmt(monthlyEVCost)}<span className="text-sm font-normal text-slate-400">/mo</span></p>
              <p className="text-sm text-slate-500 mt-1">{fmt(annualEVCost)} / year</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ResultCard label="Monthly Savings" value={fmt(monthlySavings)} highlight />
            <ResultCard label="Annual Savings" value={fmt(annualSavings)} highlight />
            <ResultCard label="5-Year Savings" value={fmt(fiveYearSavings)} />
            <ResultCard label="Savings %" value={savingsPct.toFixed(0) + "%"} sub="vs gas costs" />
          </div>
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <InputField id="mileage" label="Monthly Mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} suffix="miles" placeholder="1200" />
        <InputField id="gasPrice" label="Gas Price per Gallon" value={gasPrice} onChange={(e) => setGasPrice(e.target.value)} prefix="$" placeholder="3.50" step="0.01" />
        <InputField id="mpg" label="Car MPG (Gas Vehicle)" value={mpg} onChange={(e) => setMpg(e.target.value)} suffix="mpg" placeholder="28" />
        <InputField id="elecRate" label="Electricity Rate" value={elecRate} onChange={(e) => setElecRate(e.target.value)} prefix="$" suffix="/kWh" placeholder="0.13" step="0.01" />
        <InputField id="evEfficiency" label="EV Efficiency" value={evEfficiency} onChange={(e) => setEvEfficiency(e.target.value)} suffix="kWh/mile" placeholder="0.30" step="0.01" helpText="Avg EV: 0.25–0.35" />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the EV Charging vs Gas Savings Calculator</h2>
      <p>
        One of the biggest financial questions for car buyers in 2024 is whether switching from a gasoline vehicle to an electric vehicle (EV) will actually save money on fuel costs. While EVs have higher upfront purchase prices, their significantly lower fuel and maintenance costs often result in substantial long-term savings. This calculator quantifies exactly how much you can save by comparing your current gas costs to the equivalent electricity costs of charging an EV.
      </p>
      <p>
        Enter your <strong>monthly mileage</strong> — the average number of miles you drive each month. The US average is approximately 1,124 miles per month (13,500 miles/year). Next, enter the <strong>current gas price per gallon</strong> in your area and your gas vehicle&apos;s <strong>fuel efficiency (MPG)</strong>. Then enter your <strong>local electricity rate</strong> (found on your utility bill, typically $0.10–$0.20/kWh in the US) and the <strong>EV efficiency</strong> in kWh per mile (most EVs range from 0.25–0.35 kWh/mile, with the Tesla Model 3 averaging about 0.26 and larger SUV EVs around 0.35).
      </p>
      <p>
        The calculator instantly compares monthly and annual costs for both scenarios, showing your projected monthly savings, annual savings, five-year savings, and the percentage reduction in fuel costs. This data helps you make an informed decision about whether an EV purchase makes financial sense for your driving habits and local energy costs.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <h3>Gas Vehicle Cost Formula</h3>
      <p>
        <strong>Monthly Gas Cost = (Monthly Miles ÷ MPG) × Gas Price per Gallon</strong>. For example, 1,200 miles/month ÷ 28 MPG = 42.86 gallons × $3.50/gallon = <strong>$150.00/month</strong> ($1,800/year). The key variable is your vehicle&apos;s MPG — a truck getting 18 MPG costs significantly more than a sedan getting 35 MPG for the same mileage.
      </p>
      <h3>EV Charging Cost Formula</h3>
      <p>
        <strong>Monthly EV Cost = Monthly Miles × EV Efficiency (kWh/mile) × Electricity Rate ($/kWh)</strong>. For example, 1,200 miles × 0.30 kWh/mile = 360 kWh × $0.13/kWh = <strong>$46.80/month</strong> ($561.60/year). EV charging at home during off-peak hours can reduce this further, with some utilities offering EV-specific time-of-use rates as low as $0.04–$0.08/kWh overnight.
      </p>
      <h3>Savings Calculation</h3>
      <p>
        <strong>Monthly Savings = Monthly Gas Cost − Monthly EV Cost</strong>. Using our example: $150.00 − $46.80 = <strong>$103.20/month</strong> in savings, or $1,238.40/year. Over 5 years, that is $6,192 in fuel savings alone — not counting the additional $2,000–$4,000 in maintenance savings (EVs have no oil changes, fewer brake replacements due to regenerative braking, and far fewer moving parts). Over 10 years, total savings can exceed $15,000–$20,000.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>How much does it really cost to charge an EV at home vs a public charging station?</h3>
      <p>
        Home charging is dramatically cheaper than public fast charging. The US average residential electricity rate is approximately $0.13/kWh, which means charging a typical EV with a 60 kWh battery from 20% to 80% costs about $4.68. In contrast, DC fast charging stations (like Tesla Superchargers, Electrify America, or ChargePoint) typically charge $0.30–$0.50/kWh, making the same charge cost $10.80–$18.00. Some premium stations charge per-minute rates that can push costs even higher, approaching $0.60/kWh equivalent. This is why approximately 80% of EV charging occurs at home — the cost advantage is overwhelming. Installing a Level 2 home charger (240V) costs $500–$2,000 including installation, but dramatically reduces charge time from 24+ hours on a standard 120V outlet to 6–10 hours overnight. Many EV owners set their vehicles to charge during off-peak hours (typically midnight to 6 AM) to take advantage of the lowest electricity rates.
      </p>
      <h3>Do EVs actually save money when you factor in the higher purchase price?</h3>
      <p>
        The total cost of ownership (TCO) analysis strongly favors EVs over a 7–10 year ownership period, though the break-even timeline depends on several factors. A comparable EV typically costs $5,000–$15,000 more than its gas equivalent, but the <strong>federal tax credit of up to $7,500</strong> (under the Inflation Reduction Act) and various state incentives can reduce this gap to $0–$7,500. Combined with fuel savings of $1,000–$2,500/year, maintenance savings of $500–$1,000/year, and potentially lower insurance rates, most EV buyers break even within 3–5 years. After the break-even point, every additional year of ownership represents pure savings. Additionally, EV battery technology continues improving — modern EV batteries are warrantied for 8 years/100,000 miles and many last well beyond 200,000 miles with less than 10% degradation, making long-term ownership increasingly economical.
      </p>
      <h3>How do electricity rates vary across the US, and how does that affect EV savings?</h3>
      <p>
        US electricity rates vary significantly by state and utility provider. The cheapest electricity is found in states like Louisiana ($0.084/kWh), Oklahoma ($0.087/kWh), and Idaho ($0.089/kWh), where EV charging costs can be as low as $25–$35/month for average drivers. The most expensive electricity is in Hawaii ($0.32/kWh), Connecticut ($0.22/kWh), and Massachusetts ($0.22/kWh), where monthly charging costs can reach $80–$115. However, even in the most expensive states, EV charging still costs significantly less than gasoline. In Hawaii, where gas averages $4.50+/gallon and electricity is $0.32/kWh, an EV driver still saves approximately 40–50% on fuel costs compared to a gas vehicle. The savings are most dramatic in states with both high gas prices and low electricity rates, such as Oregon, Washington, and Virginia. Solar panel owners who charge their EVs from home solar achieve the ultimate savings scenario — effectively driving on free fuel once their solar system is paid off.
      </p>

      <h2>Related Tools</h2>
      <p>
        Check out these other helpful calculators for energy savings:
      </p>
      <ul>
        <li><a href="/calculators/residential-solar-panel-roi">Residential Solar Panel ROI Calculator</a> — Calculate solar payback period and 25-year savings.</li>
        <li><a href="/calculators/ecommerce-net-profit-margin">E-Commerce Profit Margin Calculator</a> — Net profit, ROAS, and break-even analysis.</li>
        <li><a href="/blog/ev-charging-vs-gas-savings-2026">EV Charging vs Gas Savings 2026 Guide</a> — Full guide to EV vs gas cost comparison.</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does it really cost to charge an EV at home vs a public charging station?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Home charging is dramatically cheaper than public fast charging. The US average residential electricity rate is approximately $0.13/kWh, while DC fast charging stations typically charge $0.30-$0.50/kWh. About 80% of EV charging occurs at home."
                }
              },
              {
                "@type": "Question",
                "name": "Do EVs actually save money when you factor in the higher purchase price?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Total cost of ownership strongly favors EVs over 7-10 years. The federal tax credit of up to $7,500 and various state incentives reduce the price gap. Combined with fuel savings of $1,000-$2,500/year, most EV buyers break even within 3-5 years."
                }
              },
              {
                "@type": "Question",
                "name": "How do electricity rates vary across the US, and how does that affect EV savings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "US electricity rates vary significantly by state. The cheapest is Louisiana ($0.084/kWh) and the most expensive is Hawaii ($0.32/kWh). Even in expensive states, EV charging costs significantly less than gasoline."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

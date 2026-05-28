"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtNoCents = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function Calculator() {
  const [price, setPrice] = useState("");
  const [downPct, setDownPct] = useState("20");
  const [rate, setRate] = useState("6.5");
  const [rent, setRent] = useState("");
  const [taxes, setTaxes] = useState("");
  const [insurance, setInsurance] = useState("");
  const [mgmtPct, setMgmtPct] = useState("10");
  const [vacancyPct, setVacancyPct] = useState("8");
  const [maintenance, setMaintenance] = useState("");
  const [hoa, setHoa] = useState("");
  const [closingCosts, setClosingCosts] = useState("");
  const [otherExpenses, setOtherExpenses] = useState("");

  const purchasePrice = parseFloat(price) || 0;
  const downPercent = parseFloat(downPct) || 20;
  const interestRate = parseFloat(rate) || 6.5;
  const monthlyRent = parseFloat(rent) || 0;
  const annualTaxes = parseFloat(taxes) || 0;
  const annualInsurance = parseFloat(insurance) || 0;
  const mgmtPercent = parseFloat(mgmtPct) || 10;
  const vacancyPercent = parseFloat(vacancyPct) || 8;
  const monthlyMaintenance = parseFloat(maintenance) || 0;
  const monthlyHoa = parseFloat(hoa) || 0;
  const closingCost = parseFloat(closingCosts) || 0;
  const monthlyOther = parseFloat(otherExpenses) || 0;

  // Cash invested
  const downPayment = purchasePrice * (downPercent / 100);
  const totalCashInvested = downPayment + closingCost;

  // Mortgage payment (P&I)
  const loanAmount = purchasePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = 30 * 12; // 30-year amortization
  const monthlyPI = loanAmount > 0
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    : 0;
  const annualDebtService = monthlyPI * 12;

  // Income
  const grossAnnualIncome = monthlyRent * 12;
  const vacancyLoss = grossAnnualIncome * (vacancyPercent / 100);
  const effectiveGrossIncome = grossAnnualIncome - vacancyLoss;

  // Operating expenses (annual)
  const annualMgmtFees = effectiveGrossIncome * (mgmtPercent / 100);
  const annualMaintenance = monthlyMaintenance * 12;
  const annualHoa = monthlyHoa * 12;
  const annualOther = monthlyOther * 12;
  const totalOperatingExpenses = annualMgmtFees + annualTaxes + annualInsurance + annualMaintenance + annualHoa + annualOther;

  // NOI
  const netOperatingIncome = effectiveGrossIncome - totalOperatingExpenses;
  const monthlyNOI = netOperatingIncome / 12;

  // Cash flow
  const annualPreTaxCashFlow = netOperatingIncome - annualDebtService;
  const monthlyCashFlow = annualPreTaxCashFlow / 12;

  // Key metrics
  const capRate = purchasePrice > 0 ? (netOperatingIncome / purchasePrice) * 100 : 0;
  const cashOnCash = totalCashInvested > 0 ? (annualPreTaxCashFlow / totalCashInvested) * 100 : 0;
  const dscr = annualDebtService > 0 ? netOperatingIncome / annualDebtService : 0;
  const grossRentMultiplier = grossAnnualIncome > 0 ? purchasePrice / grossAnnualIncome : 0;

  // 1% rule check
  const onePercentCheck = purchasePrice > 0 ? (monthlyRent / purchasePrice) * 100 : 0;
  const onePercentPass = onePercentCheck >= 1;

  // Total monthly expenses for cash flow display
  const totalMonthlyExpenses = (annualDebtService + totalOperatingExpenses) / 12;

  const schemaData = {
    name: "Rental Property ROI Calculator",
    description: "Calculate cap rate, cash-on-cash return, NOI, and DSCR for any rental property investment.",
    url: "https://www.themetricapp.com/calculators/rental-property-roi-calculator",
  };

  return (
    <CalculatorShell
      title="Rental Property ROI Calculator 2026 — Cap Rate, Cash-on-Cash Return & NOI"
      subtitle="Analyze any rental property investment with cap rate, cash-on-cash return, NOI, DSCR, and the 1% rule — instant results."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          {/* Key ROI Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <ResultCard label="Cap Rate" value={capRate.toFixed(2) + "%"} highlight />
            <ResultCard label="Cash-on-Cash Return" value={cashOnCash.toFixed(2) + "%"} highlight />
            <ResultCard label="DSCR" value={dscr.toFixed(2)} sub={dscr >= 1.25 ? "✅ Lender Preferred" : dscr >= 1 ? "⚠️ Breakeven" : "❌ Below 1.0"} />
            <ResultCard label="Gross Rent Multiplier" value={grossRentMultiplier.toFixed(1) + "x"} />
            <ResultCard label="1% Rule" value={onePercentCheck.toFixed(2) + "%"} sub={onePercentPass ? "✅ Passes" : "❌ Below 1%"} />
          </div>

          {/* Monthly Cash Flow */}
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 dark:bg-[#0F172A] dark:border-[#1E293B]">
            <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4">Monthly Cash Flow Breakdown</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1">Gross Rent</p>
                <p className="text-lg font-extrabold text-[#0F172A] dark:text-[#F1F5F9]">{fmt(monthlyRent)}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1">Mortgage (P&amp;I)</p>
                <p className="text-lg font-extrabold text-[#0F172A] dark:text-[#F1F5F9]">{fmt(monthlyPI)}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1">Operating Exp</p>
                <p className="text-lg font-extrabold text-[#0F172A] dark:text-[#F1F5F9]">{fmt(totalOperatingExpenses / 12)}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1">Monthly Cash Flow</p>
                <p className={`text-lg font-extrabold ${monthlyCashFlow >= 0 ? "text-[#0D9488]" : "text-red-500"}`}>
                  {fmt(monthlyCashFlow)}
                </p>
              </div>
            </div>
          </div>

          {/* Annual Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <ResultCard label="Total Cash Invested" value={fmtNoCents(totalCashInvested)} />
            <ResultCard label="Annual NOI" value={fmtNoCents(netOperatingIncome)} />
            <ResultCard label="Annual Debt Service" value={fmtNoCents(annualDebtService)} />
            <ResultCard label="Annual Cash Flow" value={fmtNoCents(annualPreTaxCashFlow)} highlight />
          </div>
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField id="price" label="Purchase Price" value={price} onChange={(e) => setPrice(e.target.value)} prefix="$" placeholder="350000" />
        <InputField id="downPct" label="Down Payment" value={downPct} onChange={(e) => setDownPct(e.target.value)} suffix="%" placeholder="20" helpText="20% standard for investment" />
        <InputField id="rate" label="Interest Rate" value={rate} onChange={(e) => setRate(e.target.value)} suffix="%" placeholder="6.5" helpText="30-yr fixed investment rate" />
        <InputField id="rent" label="Monthly Rent" value={rent} onChange={(e) => setRent(e.target.value)} prefix="$" placeholder="2500" />
        <InputField id="taxes" label="Annual Property Taxes" value={taxes} onChange={(e) => setTaxes(e.target.value)} prefix="$" placeholder="4200" helpText="Annual amount" />
        <InputField id="insurance" label="Annual Insurance" value={insurance} onChange={(e) => setInsurance(e.target.value)} prefix="$" placeholder="1200" helpText="Annual amount" />
        <InputField id="mgmtPct" label="Property Mgmt Fee" value={mgmtPct} onChange={(e) => setMgmtPct(e.target.value)} suffix="%" placeholder="10" helpText="% of effective income" />
        <InputField id="vacancyPct" label="Vacancy Rate" value={vacancyPct} onChange={(e) => setVacancyPct(e.target.value)} suffix="%" placeholder="8" helpText="Typical 5–10%" />
        <InputField id="maintenance" label="Maintenance / Mo" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} prefix="$" placeholder="200" helpText="Routine + CapEx reserve" />
        <InputField id="hoa" label="HOA Dues / Mo" value={hoa} onChange={(e) => setHoa(e.target.value)} prefix="$" placeholder="0" />
        <InputField id="closingCosts" label="Closing Costs" value={closingCosts} onChange={(e) => setClosingCosts(e.target.value)} prefix="$" placeholder="5000" helpText="One-time purchase costs" />
        <InputField id="otherExpenses" label="Other Monthly Exp" value={otherExpenses} onChange={(e) => setOtherExpenses(e.target.value)} prefix="$" placeholder="0" helpText="Utilities, landscaping, etc." />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      {/* E-E-A-T Signals: Last Updated, Author, Sources */}
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Last Updated:</strong> May 2026
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Author:</strong> Financial Metrics Team
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://www.irs.gov/publications/p527" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              IRS Publication 527
            </a>
            {" · "}
            <a href="https://www.fanniemae.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Fannie Mae Guidelines
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Rental Property ROI Calculator</h2>
      <p>
        Analyzing a rental property investment requires more than just comparing the monthly rent to the mortgage payment. To truly understand whether a property will generate wealth, you need to evaluate multiple financial metrics — cap rate, cash-on-cash return, Net Operating Income (NOI), and the Debt Service Coverage Ratio (DSCR). This calculator gives you a comprehensive, instant analysis of any single-family or multi-unit residential rental property in the US market.
      </p>
      <p>
        Start by entering the <strong>Purchase Price</strong> and <strong>Down Payment percentage</strong> — most investment properties require at least 20% down, though some lenders offer 15% down for single-family rentals with strong credit. Enter your expected <strong>Interest Rate</strong> (investment property rates in mid-2026 are approximately 6.0–6.5% for a 30-year fixed loan). Then input your <strong>Monthly Rent</strong> — this should be the gross rent you expect to charge tenants, not accounting for vacancies yet.
      </p>
      <p>
        Next, fill in your operating expenses: <strong>Annual Property Taxes</strong>, <strong>Annual Insurance</strong> (landlord insurance policies typically cost 15–25% more than standard homeowner insurance), <strong>Property Management Fee</strong> (8–12% of effective rent is standard for long-term rentals), <strong>Vacancy Rate</strong> (conservatively 5–10%), <strong>Monthly Maintenance/CapEx</strong> (budget at least 5–10% of gross rent), <strong>HOA Dues</strong> if applicable, and <strong>Other Monthly Expenses</strong> like utilities, landscaping, or pest control. Finally, enter your estimated <strong>Closing Costs</strong> — typically 2–5% of the purchase price for loans, including lender fees, appraisal, title insurance, and attorney fees.
      </p>
      <p>
        The calculator instantly computes <strong>10 key metrics</strong>: Cap Rate, Cash-on-Cash Return, DSCR, Gross Rent Multiplier, 1% Rule check, total cash invested, monthly cash flow, annual NOI, annual debt service, and a full monthly breakdown showing gross rent, mortgage payment, operating expenses, and net monthly cash flow in a color-coded summary.
      </p>

      <h2>Detailed Formula Breakdown</h2>

      <h3>Net Operating Income (NOI)</h3>
      <p>
        <strong>NOI</strong> is the foundational metric of rental property analysis. NOI = (Gross Annual Rent × (1 − Vacancy Rate)) − Total Annual Operating Expenses. Operating expenses include property management fees, taxes, insurance, maintenance, HOA, and other costs — but <strong>NOI excludes mortgage debt service</strong>. NOI represents the property's raw income-generating potential before financing costs. A positive NOI means the property can cover its operating expenses from rental income alone. Lenders use NOI to calculate DSCR and assess loan risk.
      </p>

      <h3>Cap Rate</h3>
      <p>
        <strong>Cap Rate = NOI ÷ Purchase Price × 100</strong>. Cap rate measures the unleveraged return on a property — the return you would get if you paid cash with no mortgage. A cap rate of 6% means the property generates 6% of its purchase price in NOI per year. In 2026, cap rates for residential rental properties typically range from 4% in hot urban markets (San Francisco, NYC) to 8–10% in secondary and tertiary markets (Midwest, Sun Belt). Higher cap rates generally indicate higher risk or lower property appreciation potential. Cap rate is the single best metric for comparing investment properties of similar types in different markets.
      </p>

      <h3>Cash-on-Cash Return</h3>
      <p>
        <strong>Cash-on-Cash Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested × 100</strong>. This is the most important metric for leveraged investors. Total Cash Invested includes your down payment plus closing costs and any upfront renovation costs. The cash-on-cash return tells you the actual return on the cash you physically put into the deal. A 8–12% cash-on-cash return is generally considered good for long-term residential rentals, while 15%+ is considered excellent. For example, if you invest $75,000 (down payment + closing) and earn $6,000 per year in cash flow, your cash-on-cash return is 8%.
      </p>

      <h3>Debt Service Coverage Ratio (DSCR)</h3>
      <p>
        <strong>DSCR = NOI ÷ Annual Debt Service</strong>. DSCR measures how well the property's income covers its mortgage payments. A DSCR of 1.25 means the property generates 25% more income than needed to pay the mortgage — the standard minimum most lenders require for investment property loans. A DSCR below 1.0 means the property does not generate enough income to cover its mortgage, requiring you to inject personal funds each month. A DSCR above 1.5 is considered very strong by most lenders and may qualify you for better interest rates or higher loan amounts.
      </p>

      <h3>The 1% Rule</h3>
      <p>
        <strong>1% Rule: Monthly Rent ≥ 1% of Purchase Price</strong>. This is a quick back-of-the-envelope screening tool used by experienced investors. If a $300,000 property rents for $3,000/month (1% of purchase price), it passes the rule and is worth a deeper financial analysis. A property renting for $2,400/month (0.8%) may still be a good investment in an appreciating market, but it fails the quick cash-flow screen. The 1% rule is a starting point, not a definitive analysis — many successful investors target 0.8–1.2% depending on their market strategy.
      </p>

      <h2>Data Sources & Methodology</h2>
      <p>
        Our Rental Property ROI Calculator uses standard real estate investment formulas and industry benchmarks recognized by US lenders and investors. All figures are verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>DSCR Guidelines:</strong> Minimum 1.25 ratio per{" "}
          <a href="https://www.fanniemae.com/multifamily/underwriting/debt-service-coverage-ratio" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Fannie Mae DSCR Requirements
          </a>
          . Conventional lenders typically require 1.0–1.25.
        </li>
        <li>
          <strong>Rental Property Tax Rules:</strong> Income and expense reporting from{" "}
          <a href="https://www.irs.gov/publications/p527" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Publication 527
          </a>
          . Depreciation rules from IRS Publication 946.
        </li>
        <li>
          <strong>Cap Rate Benchmarks:</strong> Market data from{" "}
          <a href="https://www.ncreif.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            NCREIF Property Index
          </a>
          . Typical residential cap rates: 4–10%.
        </li>
        <li>
          <strong>Property Management:</strong> Industry standard 8–12% fee per{" "}
          <a href="https://www.narem.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            NAREM Standards
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> NOI = Effective Gross Income − Total Operating Expenses. Cap Rate = NOI ÷ Purchase Price × 100. Cash-on-Cash = Annual Pre-Tax Cash Flow ÷ Total Cash Invested × 100. DSCR = NOI ÷ Annual Debt Service. Monthly cash flow = (Effective Gross Income − Operating Expenses − Debt Service) ÷ 12. The 1% Rule checks if Monthly Rent ≥ 1% of Purchase Price. All results are estimates — consult a qualified real estate advisor for investment decisions.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>

      <h3>What is a good cap rate for a rental property in 2026?</h3>
      <p>
        A "good" cap rate depends entirely on your investment strategy and local market. In 2026, Class A properties in prime urban locations (NYC, San Francisco, Seattle) typically trade at 3.5–5% cap rates — lower returns but stronger appreciation potential. Class B properties in growing secondary markets (Nashville, Charlotte, Phoenix) usually offer 5–7% cap rates with balanced cash flow and appreciation. Class C properties in tertiary markets or distressed neighborhoods may offer 8–12% cap rates but come with higher tenant turnover, maintenance costs, and slower appreciation. Most long-term buy-and-hold investors target 6–8% cap rates for single-family rentals. If you are prioritizing cash flow over appreciation, look for cap rates above 7%.
      </p>

      <h3>How much should I budget for property management?</h3>
      <p>
        Professional property management companies in the US typically charge 8–12% of the monthly rent collected for long-term residential rentals. Some charge a flat monthly fee (e.g., $100–$200/month for a single-family home) instead of a percentage. Most also charge a leasing fee of 50–100% of one month's rent when a new tenant moves in. If you self-manage, you save the management fee but must account for your own time, tenant screening costs, legal compliance, and after-hours maintenance calls. For out-of-state investors or portfolios of 5+ units, professional management is almost always worth the cost. For a single local property, self-management can significantly boost your cash-on-cash return.
      </p>

      <h3>What does a DSCR under 1.0 mean for my investment?</h3>
      <p>
        A DSCR below 1.0 means your property's NOI is less than its annual mortgage payments — you are losing money on the property before accounting for any of your personal expenses. This is often called "negative cash flow" or "carrying a property." Some investors intentionally accept negative cash flow in high-appreciation markets (like San Francisco or Austin) betting that property value growth will outpace the annual cash losses. However, most conventional lenders require a DSCR of at least 1.0–1.25 to approve an investment property loan. If your DSCR is below 1.0, you have three options: increase rent, reduce expenses, or refinance to a lower interest rate. If none of those are possible, the property is likely not a sound investment under current market conditions.
      </p>

      <h3>Should I use a 15-year or 30-year mortgage for my rental property?</h3>
      <p>
        A 30-year fixed-rate mortgage is the standard choice for long-term rental property investors. The lower monthly payment maximizes monthly cash flow and improves your cash-on-cash return, debt-to-income ratio, and DSCR — making it easier to qualify for additional investment properties. A 15-year mortgage builds equity faster and saves significantly on total interest, but the higher monthly payment reduces cash flow and may push your DSCR below lender minimums. As a rule of thumb: use a 30-year mortgage if your primary goal is cash flow and portfolio growth; use a 15-year mortgage if the property cash flows strongly enough to handle the higher payment and you want to own the property free-and-clear faster.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed examples, strategies, and expert tips on rental property investment analysis, read our full guide:{" "}
          <a href="/blog/rental-property-roi-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Rental Property ROI 2026 Guide
          </a>
          . This companion article covers additional investment strategies, tax benefits, and real-world case studies not included in the calculator.
        </p>
      </div>

      <h2>Related Tools</h2>
      <p>
        Check out these other helpful calculators for real estate investors and property owners:
      </p>
      <ul>
        <li><a href="/calculators/airbnb-host-net-income">Airbnb Host Net Income Calculator</a> — Estimate short-term rental profits after fees and expenses.</li>
        <li><a href="/calculators/mortgage-calculator-uk">Mortgage Calculator UK</a> — Estimate monthly repayments, stamp duty, and borrowing affordability for UK property.</li>
        <li><a href="/calculators/texas-paycheck-calculator">Texas Paycheck Calculator</a> — Calculate take-home pay with zero state income tax.</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Rental Property ROI Calculator",
            "url": "https://www.themetricapp.com/calculators/rental-property-roi-calculator",
            "description": "Calculate cap rate, cash-on-cash return, NOI, and DSCR for any rental property investment.",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" },
              { "@type": "ListItem", "position": 2, "name": "Rental Property ROI Calculator", "item": "https://www.themetricapp.com/calculators/rental-property-roi-calculator" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a good cap rate for a rental property in 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A good cap rate depends on your investment strategy. Class A properties in urban markets typically trade at 3.5-5% cap rates with stronger appreciation. Class B properties in secondary markets offer 5-7% with balanced cash flow and appreciation. Class C properties in tertiary markets may offer 8-12% but with higher risk. Most buy-and-hold investors target 6-8%."
                }
              },
              {
                "@type": "Question",
                "name": "How much should I budget for property management?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Professional property management companies typically charge 8-12% of monthly rent collected for long-term residential rentals, plus a leasing fee of 50-100% of one month's rent when a new tenant moves in."
                }
              },
              {
                "@type": "Question",
                "name": "What does a DSCR under 1.0 mean for my investment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A DSCR below 1.0 means the property's NOI is less than its annual mortgage payments, indicating negative cash flow. Most lenders require a DSCR of at least 1.0-1.25 to approve an investment property loan."
                }
              },
              {
                "@type": "Question",
                "name": "Should I use a 15-year or 30-year mortgage for my rental property?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A 30-year fixed-rate mortgage is the standard choice for long-term rental investors. The lower monthly payment maximizes cash flow and improves cash-on-cash return and DSCR. A 15-year mortgage builds equity faster but reduces cash flow significantly."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

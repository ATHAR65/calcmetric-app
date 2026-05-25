"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// 2025 Federal Tax Brackets (Single / Married Filing Jointly)
const federalBrackets = {
  single: [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 },
  ],
  married: [
    { min: 0, max: 23850, rate: 0.10 },
    { min: 23850, max: 96950, rate: 0.12 },
    { min: 96950, max: 206700, rate: 0.22 },
    { min: 206700, max: 394600, rate: 0.24 },
    { min: 394600, max: 501050, rate: 0.32 },
    { min: 501050, max: 751600, rate: 0.35 },
    { min: 751600, max: Infinity, rate: 0.37 },
  ],
};

const standardDeduction = { single: 15000, married: 30000 };

function calcFederalTax(income, status) {
  const brackets = federalBrackets[status];
  let tax = 0;
  for (const b of brackets) {
    if (income <= b.min) break;
    const taxable = Math.min(income, b.max) - b.min;
    tax += taxable * b.rate;
  }
  return tax;
}

export default function TexasPaycheckCalculator() {
  const [wage, setWage] = useState("");
  const [hours, setHours] = useState("");
  const [status, setStatus] = useState("single");

  const hourlyWage = parseFloat(wage) || 0;
  const weeklyHours = parseFloat(hours) || 0;

  const weeklyGross = hourlyWage * weeklyHours;
  const annualGross = weeklyGross * 52;
  const deduction = standardDeduction[status];
  const taxableIncome = Math.max(0, annualGross - deduction);
  const federalTax = calcFederalTax(taxableIncome, status);
  const ficaTax = annualGross * 0.0765;
  const totalTax = federalTax + ficaTax;
  const annualNet = annualGross - totalTax;
  const monthlyNet = annualNet / 12;
  const biweeklyNet = annualNet / 26;
  const effectiveRate = annualGross > 0 ? (totalTax / annualGross) * 100 : 0;

  const schemaData = {
    name: "Texas Paycheck Calculator",
    description: "Calculate your take-home pay in Texas with federal income tax, FICA, and zero state income tax.",
    url: "https://www.themetricapp.com/calculators/texas-paycheck-calculator",
  };

  return (
    <CalculatorShell
      title="Texas Paycheck Calculator 2026 — Calculate Take-Home Pay with Zero State Income Tax"
      subtitle="Calculate your Texas take-home pay — zero state income tax, just federal taxes and FICA."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ResultCard label="Annual Gross" value={fmt(annualGross)} />
          <ResultCard label="Federal Income Tax" value={fmt(federalTax)} />
          <ResultCard label="FICA (7.65%)" value={fmt(ficaTax)} sub="SS 6.2% + Medicare 1.45%" />
          <ResultCard label="State Tax (TX)" value="$0.00" sub="Texas: 0% state tax" />
          <ResultCard label="Annual Take-Home" value={fmt(annualNet)} highlight />
          <ResultCard label="Monthly Take-Home" value={fmt(monthlyNet)} highlight />
          <ResultCard label="Bi-Weekly Take-Home" value={fmt(biweeklyNet)} />
          <ResultCard label="Effective Tax Rate" value={effectiveRate.toFixed(1) + "%"} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <InputField id="wage" label="Hourly Wage" value={wage} onChange={(e) => setWage(e.target.value)} prefix="$" placeholder="25.00" step="0.01" />
        <InputField id="hours" label="Hours Worked / Week" value={hours} onChange={(e) => setHours(e.target.value)} suffix="hrs" placeholder="40" />
        <SelectField
          id="status"
          label="Filing Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={[
            { value: "single", label: "Single" },
            { value: "married", label: "Married Filing Jointly" },
          ]}
        />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the Texas Paycheck Calculator</h2>
      <p>
        Texas is one of only nine US states that levies <strong>zero state income tax</strong>, making it one of the most financially advantageous states for workers. This calculator helps you determine your exact take-home pay based on your hourly wage, weekly hours, and federal filing status. Whether you are evaluating a job offer, negotiating a raise, or planning your household budget, this tool provides an instant breakdown of all federal deductions.
      </p>
      <p>
        To use this calculator, enter your <strong>hourly wage</strong> — the gross amount your employer pays you per hour before any deductions. Next, enter the <strong>number of hours you work per week</strong>. Most full-time employees work 40 hours, but overtime or part-time schedules are equally valid. Finally, select your <strong>filing status</strong>: Single or Married Filing Jointly. Your filing status determines your standard deduction amount and which federal tax brackets apply to your income.
      </p>
      <p>
        The calculator instantly computes your annual gross income, federal income tax (using the progressive 2025 brackets), FICA taxes (Social Security and Medicare), and your resulting take-home pay displayed as annual, monthly, and bi-weekly amounts. Since Texas has no state income tax, your total deductions will be lower than in states like California or New York, resulting in more money in your pocket.
      </p>

      <h2>Detailed Tax/Fee Formula Breakdown</h2>
      <p>
        Understanding how your paycheck is calculated requires knowledge of the federal tax system. Here is a step-by-step breakdown of every deduction applied to your gross earnings in Texas.
      </p>
      <h3>Step 1: Calculate Annual Gross Income</h3>
      <p>
        Your annual gross income is your hourly wage multiplied by hours per week, multiplied by 52 weeks. For example, $25/hour × 40 hours/week × 52 weeks = $52,000 per year. This is your total compensation before any taxes or deductions.
      </p>
      <h3>Step 2: Apply the Standard Deduction</h3>
      <p>
        Before calculating federal income tax, the IRS allows you to subtract the <strong>standard deduction</strong> from your gross income. For 2025, the standard deduction is <strong>$15,000 for Single filers</strong> and <strong>$30,000 for Married Filing Jointly</strong>. This reduces the portion of your income that is subject to federal tax. Using our example: $52,000 − $15,000 = $37,000 in taxable income for a Single filer.
      </p>
      <h3>Step 3: Apply Federal Income Tax Brackets</h3>
      <p>
        The US uses a <strong>progressive (marginal) tax system</strong>, meaning different portions of your income are taxed at different rates. For a Single filer with $37,000 in taxable income in 2025: the first $11,925 is taxed at 10% ($1,192.50), and the remaining $25,075 is taxed at 12% ($3,009). Total federal income tax: $4,201.50. You are NOT taxed at your highest bracket rate on all your income — only on the income within that bracket range.
      </p>
      <h3>Step 4: Calculate FICA Taxes</h3>
      <p>
        FICA (Federal Insurance Contributions Act) taxes fund Social Security and Medicare. Every W-2 employee pays <strong>7.65% of gross income</strong> toward FICA: 6.2% for Social Security (on the first $176,100 of earnings) and 1.45% for Medicare (no income cap). Using our example: $52,000 × 7.65% = $3,978. Your employer also pays a matching 7.65%, but that does not reduce your paycheck.
      </p>
      <h3>Step 5: Texas State Income Tax — $0</h3>
      <p>
        Texas does not impose a state income tax. This means the only deductions from your paycheck are federal income tax and FICA. Compared to a state like California (which can charge up to 13.3% state income tax), a Texas worker keeps significantly more of each dollar earned. This is a major reason Texas consistently attracts workers and businesses from high-tax states.
      </p>
      <h3>Step 6: Calculate Take-Home Pay</h3>
      <p>
        Your take-home pay is your annual gross income minus total federal income tax and FICA. Divide by 12 for monthly take-home, or by 26 for bi-weekly (the most common pay schedule). Using our full example: $52,000 − $4,256 − $3,978 = $43,766 annual take-home, or approximately $3,647/month.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Why is Texas considered a tax-friendly state for workers?</h3>
      <p>
        Texas is one of only nine states (along with Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Washington, and Wyoming) that does not levy a state income tax on wages. This means Texas workers only pay federal income tax and FICA contributions, keeping a larger percentage of their gross earnings compared to workers in high-tax states like California (up to 13.3%), New York (up to 10.9%), or New Jersey (up to 10.75%). For a worker earning $75,000 annually, the difference between Texas and California can amount to $4,000–$6,000+ in additional take-home pay per year. However, it is worth noting that Texas compensates for the lack of income tax with higher property taxes (averaging 1.60%–1.80% of assessed value) and an 8.25% combined state and local sales tax in many areas.
      </p>
      <h3>How does filing status affect my take-home pay?</h3>
      <p>
        Your filing status determines two critical factors: your <strong>standard deduction amount</strong> and your <strong>tax bracket thresholds</strong>. Married Filing Jointly filers receive a standard deduction of $30,000 (double the Single deduction of $15,000), and their tax bracket ranges are significantly wider. This means a married couple can earn substantially more before hitting higher tax rates. For example, a Single filer hits the 22% bracket at $48,475 in taxable income, while Married Filing Jointly filers do not reach 22% until $96,950. If one spouse earns significantly more than the other, filing jointly almost always results in lower total taxes due to income splitting across wider brackets.
      </p>
      <h3>Does this calculator account for overtime pay and additional withholdings?</h3>
      <p>
        This calculator provides a baseline estimate using standard hourly wages and regular hours. It does not currently account for overtime pay (1.5× for hours beyond 40/week under FLSA), pre-tax deductions like 401(k) contributions, health insurance premiums, or HSA contributions, which would further reduce your taxable income and potentially your tax liability. Additionally, some employers withhold additional amounts per your W-4 elections. For the most accurate paycheck estimate, subtract any pre-tax deductions from your gross income before using this calculator, and remember that actual withholding may differ from the annualized tax calculation shown here due to employer payroll processing methods. Despite these nuances, this tool provides an excellent framework for understanding how federal taxes and FICA affect your Texas paycheck.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed examples, strategies, and expert tips on Texas paycheck calculations, read our full guide:{" "}
          <a href="/blog/texas-paycheck-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Texas Paycheck Calculator 2026 Guide
          </a>
          . This companion article covers additional tax scenarios, withholding strategies, and real-world case studies not included in the calculator.
        </p>
      </div>

      <h2>Related Tools</h2>
      <p>
        Check out these other helpful calculators for workers and freelancers:
      </p>
      <ul>
        <li><a href="/calculators/california-1099-tax-calculator">California 1099 Tax Calculator</a> — Calculate self-employment, federal, and California state taxes on freelance income.</li>
        <li><a href="/calculators/doordash-tax-estimator">DoorDash Tax Estimator</a> — Estimate self-employment taxes with mileage deductions.</li>
        <li><a href="/calculators/freelancer-platform-fee-comparison">Freelancer Platform Fee Comparison</a> — Compare Upwork vs Fiverr fees side-by-side.</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Texas Paycheck Calculator",
            "url": "https://www.themetricapp.com/calculators/texas-paycheck-calculator",
            "description": "Calculate your take-home pay in Texas with federal income tax, FICA, and zero state income tax.",
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
              { "@type": "ListItem", "position": 2, "name": "Texas Paycheck Calculator", "item": "https://www.themetricapp.com/calculators/texas-paycheck-calculator" }
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
                "name": "Why is Texas considered a tax-friendly state for workers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Texas is one of only nine states that does not levy a state income tax on wages. Texas workers only pay federal income tax and FICA contributions, keeping a larger percentage of their gross earnings compared to workers in high-tax states like California, New York, or New Jersey."
                }
              },
              {
                "@type": "Question",
                "name": "How does filing status affect my take-home pay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your filing status determines two critical factors: your standard deduction amount and your tax bracket thresholds. Married Filing Jointly filers receive a standard deduction of $29,200 (double the Single deduction of $14,600), and their tax bracket ranges are significantly wider."
                }
              },
              {
                "@type": "Question",
                "name": "Does this calculator account for overtime pay and additional withholdings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This calculator provides a baseline estimate using standard hourly wages and regular hours. It does not currently account for overtime pay, pre-tax deductions like 401(k) contributions, health insurance premiums, or HSA contributions, which would further reduce your taxable income."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

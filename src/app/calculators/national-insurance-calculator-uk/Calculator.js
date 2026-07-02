"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmtGBP = (n) =>
  "£" + Number(n || 0).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [employmentType, setEmploymentType] = useState("employed");
  const [salary, setSalary] = useState("");
  const [profits, setProfits] = useState("");
  const [employeeCount, setEmployeeCount] = useState("1");
  const [eaEligible, setEaEligible] = useState("no");

  const annualSalary = parseFloat(salary) || 0;
  const annualProfits = parseFloat(profits) || 0;

  // Class 1 Employee NI (2026-27 — rates and thresholds unchanged from 2025-26)
  const pt = 12570;   // Primary Threshold
  const uel = 50270;  // Upper Earnings Limit

  let class1NI = 0;
  if (annualSalary > pt) {
    const betweenPTandUEL = Math.min(annualSalary, uel) - pt;
    const aboveUEL = Math.max(0, annualSalary - uel);
    class1NI = betweenPTandUEL * 0.08 + aboveUEL * 0.02;
  }

  // Class 2 NI is not payable since April 2024: profits above the Small
  // Profits Threshold earn a qualifying State Pension year automatically
  // ("treated as paid"). Below the SPT, voluntary Class 2 is optional.
  const smallProfitsThreshold = 7105; // 2026-27
  const class2TreatedAsPaid = annualProfits >= smallProfitsThreshold;
  const class2NI = 0;

  // Class 4 Self-Employed NI (2026-27)
  const class4Lower = 12570;
  const class4Upper = 50270;
  let class4NI = 0;
  if (annualProfits > class4Lower) {
    const betweenLowerAndUpper = Math.min(annualProfits, class4Upper) - class4Lower;
    const aboveUpper = Math.max(0, annualProfits - class4Upper);
    class4NI = betweenLowerAndUpper * 0.06 + aboveUpper * 0.02;
  }

  // Employer NI / Class 1 secondary (15% on earnings above the £5,000
  // secondary threshold since 6 April 2025; unchanged for 2026-27).
  const secondaryThreshold = 5000;
  const employerRate = 0.15;
  const employmentAllowance = 10500; // per business, per year (2026-27)

  // Per-employee employer NI — also shown as a secondary figure in "employed" mode.
  let employerNI = 0;
  if (annualSalary > secondaryThreshold) {
    employerNI = (annualSalary - secondaryThreshold) * employerRate;
  }

  // Employer mode: total cost across N employees, net of Employment Allowance.
  const numEmployees = Math.max(0, parseInt(employeeCount, 10) || 0);
  const totalEmployerNI = employerNI * numEmployees;
  const allowanceApplied =
    eaEligible === "yes" ? Math.min(employmentAllowance, totalEmployerNI) : 0;
  const netEmployerNI = Math.max(0, totalEmployerNI - allowanceApplied);
  const totalEmploymentCost = annualSalary * numEmployees + netEmployerNI;

  const schemaData = {
    name: "UK National Insurance Calculator (2026/27)",
    description: "Calculate Class 1 employee NI, Class 4 self-employed NI, and employer NI contributions. Accurate HMRC rates.",
    url: "https://www.themetricapp.com/calculators/national-insurance-calculator-uk",
  };

  return (
    <>
      <CalculatorShell
        title="UK National Insurance Calculator (2026/27)"
        subtitle="Calculate your National Insurance contributions for the 2026/27 tax year. Supports Class 1 (employee), Class 4 (self-employed), and employer NI."
        schemaData={schemaData}
        results={
          employmentType === "employed" ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <ResultCard label="Gross Annual Salary" value={fmtGBP(annualSalary)} sub="Before deductions" />
              <ResultCard label="Employee NI (Class 1)" value={fmtGBP(class1NI)} sub="8% + 2% above UEL" highlight />
              <ResultCard label="Monthly Deduction" value={fmtGBP(class1NI / 12)} sub="Per payslip" />
              <ResultCard label="Employer NI" value={fmtGBP(employerNI)} sub="15% above £5,000" />
              <ResultCard label="NI Rate (Effective)" value={annualSalary > 0 ? ((class1NI / annualSalary) * 100).toFixed(1) + "%" : "0%"} sub="Of gross salary" />
              <ResultCard label="Annual after NI" value={fmtGBP(annualSalary - class1NI)} sub="Before income tax" />
            </div>
          ) : employmentType === "self-employed" ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <ResultCard label="Annual Profits" value={fmtGBP(annualProfits)} sub="Self-employment" />
              <ResultCard label="Class 2 NI" value={class2TreatedAsPaid ? "£0.00" : "Voluntary"} sub={class2TreatedAsPaid ? "Treated as paid — no charge" : "Optional £3.65/week below £7,105"} highlight />
              <ResultCard label="Class 4 NI" value={fmtGBP(class4NI)} sub="6% + 2% above UEL" highlight />
              <ResultCard label="Total NI (SE)" value={fmtGBP(class2NI + class4NI)} sub="Class 4 (Class 2 treated as paid)" />
              <ResultCard label="Monthly NI" value={fmtGBP((class2NI + class4NI) / 12)} sub="Per month" />
              <ResultCard label="Profits after NI" value={fmtGBP(annualProfits - class2NI - class4NI)} sub="Before income tax" />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <ResultCard label="Employer NI / Employee" value={fmtGBP(employerNI)} sub="15% above £5,000" />
              <ResultCard label="Employees" value={String(numEmployees)} sub="Headcount" />
              <ResultCard label="Total Employer NI" value={fmtGBP(totalEmployerNI)} sub="Before allowance" highlight />
              <ResultCard label="Employment Allowance" value={allowanceApplied > 0 ? "−" + fmtGBP(allowanceApplied) : "Not claimed"} sub="Up to £10,500/yr" />
              <ResultCard label="Net Employer NI Cost" value={fmtGBP(netEmployerNI)} sub="After allowance" highlight />
              <ResultCard label="Total Employment Cost" value={fmtGBP(totalEmploymentCost)} sub="Salary + employer NI" />
            </div>
          )
        }
        seoContent={<SEOContent />}
      >
        <div className="space-y-5">
          <SelectField
            id="empType"
            label="Employment Type"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            options={[
              { value: "employed", label: "Employed (Class 1 NI)" },
              { value: "self-employed", label: "Self-Employed (Class 4 NI)" },
              { value: "employer", label: "Employer (Class 1 secondary NI)" },
            ]}
          />
          {employmentType === "employed" ? (
            <InputField
              id="salary"
              label="Gross Annual Salary (£)"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              prefix="£"
              placeholder="50000"
              step="100"
            />
          ) : employmentType === "self-employed" ? (
            <InputField
              id="profits"
              label="Annual Self-Employed Profits (£)"
              value={profits}
              onChange={(e) => setProfits(e.target.value)}
              prefix="£"
              placeholder="40000"
              step="100"
              helpText="Your profit after allowable expenses"
            />
          ) : (
            <>
              <InputField
                id="salary"
                label="Gross Annual Salary per Employee (£)"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                prefix="£"
                placeholder="35000"
                step="100"
                helpText="Employer NI is charged at 15% on pay above £5,000"
              />
              <InputField
                id="employeeCount"
                label="Number of Employees"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(e.target.value)}
                placeholder="1"
                step="1"
              />
              <SelectField
                id="eaEligible"
                label="Claim Employment Allowance?"
                value={eaEligible}
                onChange={(e) => setEaEligible(e.target.value)}
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes — eligible (up to £10,500/yr)" },
                ]}
              />
            </>
          )}
        </div>
      </CalculatorShell>
    </>
  );
}

function SEOContent() {
  return (
    <>
      {/* E-E-A-T Signals: Last Updated, Author, Sources */}
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Last Updated:</strong> July 2026
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Author:</strong> Financial Metrics Team
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://www.gov.uk/national-insurance-rates-letters" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              HMRC NI Rates
            </a>
            {" · "}
            <a href="https://www.gov.uk/self-employed-national-insurance-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              HMRC Self-Employed NI
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the National Insurance Calculator UK</h2>
      <p>
        National Insurance is one of those deductions that quietly takes a significant chunk of your income, yet it&apos;s often overlooked when calculating your true take-home pay. This calculator gives you an instant, accurate breakdown of exactly how much NI you&apos;ll pay — whether you&apos;re employed or self-employed — for the 2026/27 tax year.
      </p>
      <p>
        Start by selecting your <strong>employment type</strong>. If you&apos;re employed, enter your <strong>gross annual salary</strong> — the calculator will show your Class 1 employee NI, your employer&apos;s NI contribution (paid by them on your behalf), and your effective NI rate. If you&apos;re self-employed, enter your <strong>annual profits</strong> (after allowable expenses). The calculator shows your Class 4 NI contributions, confirms whether your Class 2 record is covered automatically, and gives your total NI bill and your profits after NI.
      </p>

      <h2>Detailed National Insurance Formula Breakdown</h2>
      <h3>Class 1 (Employee) NI</h3>
      <p>
        If you&apos;re employed, you pay <strong>8%</strong> on earnings between £12,570 and £50,270, and <strong>2%</strong> on everything above £50,270. For a £60,000 salary: £37,700 (between £12,570 and £50,270) × 8% = £3,016, plus £9,730 (above £50,270) × 2% = £195. Total Class 1 NI: <strong>£3,211</strong>.
      </p>
      <h3>Class 2 (Self-Employed) NI</h3>
      <p>
        Class 2 NI is <strong>no longer a compulsory payment</strong>. Since April 2024, if your profits are above the Small Profits Threshold (<strong>£7,105</strong> for 2026/27) you are treated as having paid Class 2 automatically — your State Pension record builds at no cost. If your profits are below £7,105, you can pay voluntary Class 2 at <strong>£3.65 per week</strong> (£189.80 per year) to protect your National Insurance record.
      </p>
      <h3>Class 4 (Self-Employed) NI</h3>
      <p>
        Self-employed people pay <strong>6%</strong> on profits between £12,570 and £50,270, and <strong>2%</strong> on profits above £50,270. For £45,000 profits: £32,430 (between £12,570 and £45,000) × 6% = <strong>£1,946</strong> in Class 4 NI.
      </p>
      <h3>Employer NI</h3>
      <p>
        Your employer pays <strong>15%</strong> on your earnings above £5,000 per year — both the rate (up from 13.8%) and the £5,000 secondary threshold (down from £9,100) took effect on 6 April 2025. For a £50,000 salary: £45,000 × 15% = <strong>£6,750</strong> in employer NI. Eligible businesses can offset up to <strong>£10,500</strong> of their total employer NI bill with the Employment Allowance. This is a cost to your employer and part of your total employment package — it doesn&apos;t come out of your salary directly but affects what employers can afford to pay you.
      </p>

      <h2>Real-Life Examples</h2>
      <h3>Example 1 — Employed, £35,000 Salary</h3>
      <p>
        On £35,000 as an employee, your Class 1 NI is: 8% of (£35,000 − £12,570) = 8% of £22,430 = <strong>£1,794</strong> per year. That&apos;s about £150 per month. Your employer pays an additional 15% of (£35,000 − £5,000) = <strong>£4,500</strong> in employer NI.
      </p>
      <h3>Example 2 — Self-Employed, £40,000 Profits</h3>
      <p>
        As a self-employed freelancer with £40,000 profits: Class 2 NI = <strong>£0</strong> (treated as paid, since profits exceed £7,105). Class 4 NI = 6% of (£40,000 − £12,570) = 6% of £27,430 = <strong>£1,646</strong>. Total NI: <strong>£1,646</strong>. This is significantly less than an employee on the same income would pay, partly because self-employed people don&apos;t get the same contributory benefits (like Jobseeker&apos;s Allowance).
      </p>
      <h3>Example 3 — Employed, £85,000 Salary (Higher Rate)</h3>
      <p>
        On £85,000: NI at 8% on £37,700 (£50,270 − £12,570) = <strong>£3,016</strong>. NI at 2% on £34,730 (£85,000 − £50,270) = <strong>£695</strong>. Total Class 1 NI: <strong>£3,711</strong> per year, or about £309 per month.
      </p>

      <h2>Key Things to Know About UK National Insurance in 2026/27</h2>
      <ul>
        <li><strong>Class 1 rate cut:</strong> The main employee rate was cut from 12% to 8% in January 2024 and remains at 8% for 2026/27. This puts roughly £450 back into the pocket of the average earner.</li>
        <li><strong>Class 2 effectively abolished:</strong> Since April 2024, self-employed workers with profits above the Small Profits Threshold (£7,105 for 2026/27) no longer pay Class 2 — they are treated as having paid it, keeping full State Pension credits. Voluntary Class 2 (£3.65/week) remains available for those below the threshold.</li>
        <li><strong>Class 4 rate cut:</strong> The self-employed Class 4 rate was cut from 9% to 6% in April 2024 and remains at 6% for 2026/27, saving the average sole trader roughly £700 per year.</li>
        <li><strong>NI contributions count toward State Pension:</strong> You need at least 35 qualifying years of NI contributions to receive the full State Pension. Missing years can be filled with voluntary contributions.</li>
        <li><strong>Employer NI rose in April 2025:</strong> From 6 April 2025 the employer (Class 1 secondary) rate increased from 13.8% to <strong>15%</strong> and the secondary threshold dropped from £9,100 to <strong>£5,000</strong>, making it more expensive to hire. The Employment Allowance rose to £10,500 to help smaller employers offset the increase.</li>
      </ul>

      <h2>Data Sources & Methodology</h2>
      <p>
        Our National Insurance Calculator UK uses the official 2026/27 NI rates and thresholds from HM Revenue &amp; Customs. All figures are verified as of July 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Class 1 (Employee) NI:</strong> Rates and thresholds from{" "}
          <a href="https://www.gov.uk/national-insurance-rates-letters" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            HMRC National Insurance Rates
          </a>
          . 8% on earnings between £12,570–£50,270, 2% above £50,270.
        </li>
        <li>
          <strong>Class 2 (Self-Employed) NI:</strong> Treated as paid when profits exceed the £7,105 Small Profits Threshold; voluntary rate £3.65 per week, confirmed by{" "}
          <a href="https://www.gov.uk/self-employed-national-insurance-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            HMRC Self-Employed NI
          </a>
          .
        </li>
        <li>
          <strong>Class 4 (Self-Employed) NI:</strong> 6% between £12,570–£50,270, 2% above — from{" "}
          <a href="https://www.gov.uk/self-employed-national-insurance-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            HMRC Class 4 NI
          </a>
          .
        </li>
        <li>
          <strong>Employer NI:</strong> 15% on earnings above £5,000 (from 6 April 2025) per the{" "}
          <a href="https://www.gov.uk/employer-national-insurance-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            HMRC Employer NI Guide
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Class 1 NI = (Min(salary, UEL) − PT) × 8% + Max(0, salary − UEL) × 2%. Class 2 NI = £0 (treated as paid when profits exceed £7,105; voluntary £3.65/week below that). Class 4 NI = (Min(profits, £50,270) − £12,570) × 6% + Max(0, profits − £50,270) × 2%. Employer NI = (salary − £5,000) × 15%, less Employment Allowance (up to £10,500) for eligible businesses. All results are estimates — your actual NI may vary based on your exact employment circumstances and benefits in kind.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: What is the current National Insurance rate in the UK?</strong><br />
        A: For employees (Class 1): 8% on earnings between £12,570 and £50,270, and 2% above £50,270. For self-employed (Class 4): 6% on profits between £12,570 and £50,270, and 2% above £50,270. Class 2 is treated as paid at no cost when profits exceed £7,105.
      </p>
      <p>
        <strong>Q: Do I pay National Insurance if I&apos;m self-employed?</strong><br />
        A: Yes. Self-employed people pay Class 4 NI (6% on profits between £12,570 and £50,270, 2% above) on their annual profits through Self Assessment. Class 2 is no longer a separate payment — profits above £7,105 earn a qualifying State Pension year automatically.
      </p>
      <p>
        <strong>Q: What&apos;s the difference between Class 1, Class 2, and Class 4 NI?</strong><br />
        A: Class 1 is paid by employees and deducted through PAYE. Class 2 is a flat weekly amount that is now treated as paid for most self-employed people (voluntary below £7,105 profits). Class 4 is a percentage of profits paid by self-employed people. Both employees and self-employed people get different benefits from their contributions. Use TheMetricApp.com for an instant, accurate result.
      </p>
      <p>
        <strong>Q: How many years of NI contributions do I need for the full State Pension?</strong><br />
        A: You need 35 qualifying years of NI contributions or credits to receive the full State Pension. If you have fewer than 35 years, your pension will be proportionally reduced. You need at least 10 qualifying years to get any State Pension at all.
      </p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/income-tax-calculator-uk">Income Tax Calculator UK</a> — Calculate PAYE and take-home pay including NI.</li>
        <li><a href="/calculators/self-assessment-tax-calculator-uk">Self Assessment Tax Calculator UK</a> — Estimate your total tax bill as a sole trader.</li>
        <li><a href="/calculators/vat-calculator-uk">VAT Calculator UK</a> — Add or remove 20% VAT instantly for UK businesses.</li>
        <li><a href="/calculators/hourly-to-annual-salary-calculator-uk">Hourly to Annual Salary UK</a> — Convert your hourly rate to annual salary.</li>
      </ul>

      <RelatedCalculators currentPage="national-insurance-calculator-uk" />
    </>
  );
}

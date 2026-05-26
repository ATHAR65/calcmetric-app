"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmtGBP = (n) =>
  "£" + Number(n || 0).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [employmentType, setEmploymentType] = useState("employed");
  const [salary, setSalary] = useState("");
  const [profits, setProfits] = useState("");

  const annualSalary = parseFloat(salary) || 0;
  const annualProfits = parseFloat(profits) || 0;

  // Class 1 Employee NI (2025-26)
  const pt = 12570;   // Primary Threshold
  const uel = 50270;  // Upper Earnings Limit

  let class1NI = 0;
  if (annualSalary > pt) {
    const betweenPTandUEL = Math.min(annualSalary, uel) - pt;
    const aboveUEL = Math.max(0, annualSalary - uel);
    class1NI = betweenPTandUEL * 0.08 + aboveUEL * 0.02;
  }

  // Class 2 Self-Employed NI (2025-26)
  const class2Threshold = 12570;  // Small Profits Threshold
  const class2WeeklyRate = 3.45;
  let class2NI = 0;
  if (annualProfits > class2Threshold) {
    class2NI = class2WeeklyRate * 52;
  }

  // Class 4 Self-Employed NI (2025-26)
  const class4Lower = 12570;
  const class4Upper = 50270;
  let class4NI = 0;
  if (annualProfits > class4Lower) {
    const betweenLowerAndUpper = Math.min(annualProfits, class4Upper) - class4Lower;
    const aboveUpper = Math.max(0, annualProfits - class4Upper);
    class4NI = betweenLowerAndUpper * 0.06 + aboveUpper * 0.02;
  }

  // Employer NI (Class 1 secondary)
  const employerThreshold = 9100; // Secondary Threshold
  let employerNI = 0;
  if (annualSalary > employerThreshold) {
    employerNI = (annualSalary - employerThreshold) * 0.138;
  }

  const schemaData = {
    name: "UK National Insurance Calculator (2025–26)",
    description: "Calculate Class 1 employee NI, Class 2 and Class 4 self-employed NI, and employer NI contributions. Accurate HMRC rates.",
    url: "https://www.themetricapp.com/calculators/national-insurance-calculator-uk",
  };

  return (
    <>
      <CalculatorShell
        title="UK National Insurance Calculator (2025–26) — Class 1, 2 &amp; 4 NI Contributions"
        subtitle="Calculate your National Insurance contributions for the 2025–26 tax year. Supports Class 1 (employee), Class 2 &amp; 4 (self-employed), and employer NI."
        schemaData={schemaData}
        results={
          employmentType === "employed" ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <ResultCard label="Gross Annual Salary" value={fmtGBP(annualSalary)} sub="Before deductions" />
              <ResultCard label="Employee NI (Class 1)" value={fmtGBP(class1NI)} sub="8% + 2% above UEL" highlight />
              <ResultCard label="Monthly Deduction" value={fmtGBP(class1NI / 12)} sub="Per payslip" />
              <ResultCard label="Employer NI" value={fmtGBP(employerNI)} sub="Paid by employer" />
              <ResultCard label="NI Rate (Effective)" value={annualSalary > 0 ? ((class1NI / annualSalary) * 100).toFixed(1) + "%" : "0%"} sub="Of gross salary" />
              <ResultCard label="Annual after NI" value={fmtGBP(annualSalary - class1NI)} sub="Before income tax" />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <ResultCard label="Annual Profits" value={fmtGBP(annualProfits)} sub="Self-employment" />
              <ResultCard label="Class 2 NI" value={fmtGBP(class2NI)} sub={`£3.45/week`} highlight />
              <ResultCard label="Class 4 NI" value={fmtGBP(class4NI)} sub="6% + 2% above UEL" highlight />
              <ResultCard label="Total NI (SE)" value={fmtGBP(class2NI + class4NI)} sub="Class 2 + Class 4" />
              <ResultCard label="Monthly NI" value={fmtGBP((class2NI + class4NI) / 12)} sub="Per month" />
              <ResultCard label="Profits after NI" value={fmtGBP(annualProfits - class2NI - class4NI)} sub="Before income tax" />
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
              { value: "self-employed", label: "Self-Employed (Class 2 & 4 NI)" },
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
          ) : (
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
          )}
        </div>
      </CalculatorShell>
    </>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the National Insurance Calculator UK</h2>
      <p>
        National Insurance is one of those deductions that quietly takes a significant chunk of your income, yet it&apos;s often overlooked when calculating your true take-home pay. This calculator gives you an instant, accurate breakdown of exactly how much NI you&apos;ll pay — whether you&apos;re employed or self-employed — for the 2025–26 tax year.
      </p>
      <p>
        Start by selecting your <strong>employment type</strong>. If you&apos;re employed, enter your <strong>gross annual salary</strong> — the calculator will show your Class 1 employee NI, your employer&apos;s NI contribution (paid by them on your behalf), and your effective NI rate. If you&apos;re self-employed, enter your <strong>annual profits</strong> (after allowable expenses). The calculator shows your Class 2 and Class 4 NI contributions, plus your total NI bill and your profits after NI.
      </p>

      <h2>Detailed National Insurance Formula Breakdown</h2>
      <h3>Class 1 (Employee) NI</h3>
      <p>
        If you&apos;re employed, you pay <strong>8%</strong> on earnings between £12,570 and £50,270, and <strong>2%</strong> on everything above £50,270. For a £60,000 salary: £37,700 (between £12,570 and £50,270) × 8% = £3,016, plus £9,730 (above £50,270) × 2% = £195. Total Class 1 NI: <strong>£3,211</strong>.
      </p>
      <h3>Class 2 (Self-Employed) NI</h3>
      <p>
        If you&apos;re self-employed and your profits exceed £12,570, you pay a flat <strong>£3.45 per week</strong> (£179.40 per year). This contribution entitles you to certain state benefits, including the State Pension. If your profits are below £12,570, you can choose to pay voluntary Class 2 contributions to protect your National Insurance record.
      </p>
      <h3>Class 4 (Self-Employed) NI</h3>
      <p>
        In addition to Class 2, self-employed people pay <strong>6%</strong> on profits between £12,570 and £50,270, and <strong>2%</strong> on profits above £50,270. For £45,000 profits: £32,430 (between £12,570 and £45,000) × 6% = <strong>£1,946</strong> in Class 4 NI.
      </p>
      <h3>Employer NI</h3>
      <p>
        Your employer pays <strong>13.8%</strong> on your earnings above £9,100 per year. For a £50,000 salary: £40,900 × 13.8% = <strong>£5,644</strong> in employer NI. This is a cost to your employer and part of your total employment package — it doesn&apos;t come out of your salary directly but affects what employers can afford to pay you.
      </p>

      <h2>Real-Life Examples</h2>
      <h3>Example 1 — Employed, £35,000 Salary</h3>
      <p>
        On £35,000 as an employee, your Class 1 NI is: 8% of (£35,000 − £12,570) = 8% of £22,430 = <strong>£1,794</strong> per year. That&apos;s about £150 per month. Your employer pays an additional 13.8% of (£35,000 − £9,100) = <strong>£3,574</strong> in employer NI.
      </p>
      <h3>Example 2 — Self-Employed, £40,000 Profits</h3>
      <p>
        As a self-employed freelancer with £40,000 profits: Class 2 NI = £3.45 × 52 = <strong>£179</strong>. Class 4 NI = 6% of (£40,000 − £12,570) = 6% of £27,430 = <strong>£1,646</strong>. Total NI: <strong>£1,825</strong>. This is significantly less than an employee on the same income would pay, partly because self-employed people don&apos;t get the same contributory benefits (like Jobseeker&apos;s Allowance).
      </p>
      <h3>Example 3 — Employed, £85,000 Salary (Higher Rate)</h3>
      <p>
        On £85,000: NI at 8% on £37,700 (£50,270 − £12,570) = <strong>£3,016</strong>. NI at 2% on £34,730 (£85,000 − £50,270) = <strong>£695</strong>. Total Class 1 NI: <strong>£3,711</strong> per year, or about £309 per month.
      </p>

      <h2>Key Things to Know About UK National Insurance in 2025–26</h2>
      <ul>
        <li><strong>Class 1 rate cut:</strong> The main employee rate was cut from 12% to 8% in January 2024 and remains at 8% for 2025–26. This puts roughly £450 back into the pocket of the average earner.</li>
        <li><strong>Class 2 abolished (but not for everyone):</strong> The government planned to abolish Class 2 NI from April 2024, but the legislation hasn&apos;t fully taken effect. For 2025–26, Class 2 remains at £3.45/week for those with profits over £12,570.</li>
        <li><strong>Class 4 rate cut:</strong> The self-employed Class 4 rate was cut from 9% to 6% in April 2024 and remains at 6% for 2025–26, saving the average sole trader roughly £700 per year.</li>
        <li><strong>NI contributions count toward State Pension:</strong> You need at least 35 qualifying years of NI contributions to receive the full State Pension. Missing years can be filled with voluntary contributions.</li>
        <li><strong>Employer NI is rising:</strong> From April 2025, the employer NI rate increased from 13.8% to 15%, making it more expensive for businesses to hire employees.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: What is the current National Insurance rate in the UK?</strong><br />
        A: For employees (Class 1): 8% on earnings between £12,570 and £50,270, and 2% above £50,270. For self-employed (Class 4): 6% on profits between £12,570 and £50,270, and 2% above £50,270. Plus Class 2 at £3.45/week.
      </p>
      <p>
        <strong>Q: Do I pay National Insurance if I&apos;m self-employed?</strong><br />
        A: Yes. Self-employed people pay Class 2 NI (£3.45 per week) and Class 4 NI (6% on profits between £12,570 and £50,270, 2% above) on their annual profits. You&apos;ll report and pay these through your Self Assessment tax return.
      </p>
      <p>
        <strong>Q: What&apos;s the difference between Class 1, Class 2, and Class 4 NI?</strong><br />
        A: Class 1 is paid by employees and deducted through PAYE. Class 2 is a flat weekly amount paid by self-employed people. Class 4 is a percentage of profits paid by self-employed people. Both employees and self-employed people get different benefits from their contributions. Use TheMetricApp.com for an instant, accurate result.
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
    </>
  );
}

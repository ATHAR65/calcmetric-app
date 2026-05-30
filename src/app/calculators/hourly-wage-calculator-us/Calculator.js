"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import SelectField from "@/components/SelectField";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtDecimal = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [hourlyRate, setHourlyRate] = useState("25");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");
  const [overtimeRate, setOvertimeRate] = useState("1.5");
  const [overtimeHours, setOvertimeHours] = useState("0");
  const [filingStatus, setFilingStatus] = useState("single");

  const rate = parseFloat(hourlyRate) || 0;
  const hours = parseFloat(hoursPerWeek) || 0;
  const weeks = parseFloat(weeksPerYear) || 0;
  const otRate = parseFloat(overtimeRate) || 1.5;
  const otHours = parseFloat(overtimeHours) || 0;

  // Regular pay
  const regularWeekly = rate * hours;
  const regularAnnual = regularWeekly * weeks;

  // Overtime pay
  const otWeekly = otHours > 0 ? rate * otRate * otHours : 0;
  const otAnnual = otWeekly * weeks;

  // Total
  const totalWeekly = regularWeekly + otWeekly;
  const totalAnnual = regularAnnual + otAnnual;
  const totalMonthly = totalAnnual / 12;
  const totalBiweekly = totalWeekly * 2;
  const totalDaily = hours > 0 ? totalWeekly / 5 : 0;

  // FICA (Social Security + Medicare = 7.65%)
  const ficaRate = 0.0765;
  const ssLimit = 176100; // 2026 Social Security wage base (estimated)
  const ssTaxable = Math.min(totalAnnual, ssLimit);
  const ficaAnnual = totalAnnual * ficaRate; // simplified
  const medicareAdditional = totalAnnual > 200000 ? (totalAnnual - 200000) * 0.009 : 0;

  // Federal tax estimate (simplified 2026 brackets)
  const standardDeduction = filingStatus === "single" ? 15000 : 30000;
  const taxableIncome = Math.max(0, totalAnnual - standardDeduction);
  let federalTax = 0;
  if (filingStatus === "single") {
    const brackets = [[11925, 0.10], [48475, 0.12], [103350, 0.22], [197300, 0.24], [250525, 0.32], [626350, 0.35], [Infinity, 0.37]];
    let prev = 0;
    for (const [limit, bracketRate] of brackets) {
      if (taxableIncome > prev) {
        federalTax += (Math.min(taxableIncome, limit) - prev) * bracketRate;
      }
      if (taxableIncome <= limit) break;
      prev = limit;
    }
  }

  const afterTaxAnnual = totalAnnual - ficaAnnual - medicareAdditional - federalTax;
  const afterTaxMonthly = afterTaxAnnual / 12;
  const afterTaxWeekly = afterTaxAnnual / weeks;

  const schemaData = {
    name: "Hourly Wage Calculator (US) 2026",
    description: "Convert your hourly wage to annual, monthly, weekly, and daily salary with overtime and tax estimates. Free 2026 US hourly wage calculator with FICA and federal tax withholding.",
    url: "https://www.themetricapp.com/calculators/hourly-wage-calculator-us",
  };

  return (
    <CalculatorShell
      title="Hourly Wage Calculator (US) 2026 — Hourly to Annual Salary Converter with Overtime &amp; Taxes"
      subtitle="Convert your hourly wage to annual, monthly, bi-weekly, and daily salary. Includes overtime at time-and-a-half, double time, FICA taxes, and estimated federal withholding based on your filing status."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ResultCard label="Annual Salary" value={fmt(totalAnnual)} highlight />
            <ResultCard label="Monthly Pay" value={fmt(totalMonthly)} />
            <ResultCard label="Bi-Weekly Pay" value={fmt(totalBiweekly)} />
            <ResultCard label="Weekly Pay" value={fmt(totalWeekly)} sub={`${hours} hrs regular + ${otHours} hrs OT`} />
            <ResultCard label="Daily Pay (8hr)" value={fmt(totalDaily)} sub="5-day work week" />
            <ResultCard label="Hourly Rate" value={fmtDecimal(rate)} sub={`${hours}h/wk × ${weeks}wks/yr`} />
          </div>

          {/* Tax Breakdown */}
          <div className="mt-4 p-4 bg-[#EEF2FF] dark:bg-[#6366F1]/10 rounded-xl border border-[#6366F1]/15">
            <p className="text-sm font-semibold text-[#6366F1] mb-3">💰 Estimated Tax Breakdown</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-center">
                <p className="text-xs text-[#94A3B8]">Gross Annual</p>
                <p className="text-sm font-bold text-[#111827] dark:text-white">{fmt(totalAnnual)}</p>
              </div>
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-center">
                <p className="text-xs text-[#94A3B8]">FICA (7.65%)</p>
                <p className="text-sm font-bold text-amber-600">{fmt(ficaAnnual)}</p>
              </div>
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-center">
                <p className="text-xs text-[#94A3B8]">Federal Tax</p>
                <p className="text-sm font-bold text-amber-600">{fmt(federalTax)}</p>
              </div>
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-center">
                <p className="text-xs text-[#94A3B8]">Take-Home</p>
                <p className="text-sm font-bold text-green-600">{fmt(afterTaxAnnual)}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-[#94A3B8]">
              <span>Filing: {filingStatus === "single" ? "Single" : "Married Filing Jointly"}</span>
              <span>·</span>
              <span>Std Deduction: ${filingStatus === "single" ? "15,000" : "30,000"}</span>
              <span>·</span>
              <span>Taxable: {fmt(taxableIncome)}</span>
            </div>
          </div>

          {/* Rate conversions */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-[#E2E8F0] text-center">
              <p className="text-xs text-[#94A3B8]">Hourly</p>
              <p className="text-lg font-bold text-[#6366F1]">{fmtDecimal(rate)}</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-[#E2E8F0] text-center">
              <p className="text-xs text-[#94A3B8]">Daily (8h)</p>
              <p className="text-lg font-bold text-[#111827] dark:text-white">{fmtDecimal(rate * 8)}</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-[#E2E8F0] text-center">
              <p className="text-xs text-[#94A3B8]">Weekly</p>
              <p className="text-lg font-bold text-[#111827] dark:text-white">{fmtDecimal(regularWeekly)}</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-[#E2E8F0] text-center">
              <p className="text-xs text-[#94A3B8]">Annual</p>
              <p className="text-lg font-bold text-[#111827] dark:text-white">{fmt(totalAnnual)}</p>
            </div>
          </div>
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="hourlyRate" label="Hourly Wage" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} prefix="$" placeholder="25" helpText="Your base hourly rate" />
        <InputField id="hoursPerWeek" label="Hours Per Week" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} suffix="hours" placeholder="40" helpText="Regular hours per week" />
        <InputField id="weeksPerYear" label="Weeks Per Year" value={weeksPerYear} onChange={(e) => setWeeksPerYear(e.target.value)} suffix="weeks" placeholder="52" helpText="Weeks worked per year" />
        <SelectField id="filingStatus" label="Filing Status" value={filingStatus} onChange={(e) => setFilingStatus(e.target.value)} options={[
          { value: "single", label: "Single" },
          { value: "married", label: "Married Filing Jointly" },
        ]} />
      </div>
      <div className="mt-5 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700">
        <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-3">⏰ Overtime Settings</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField id="overtimeHours" label="OT Hours Per Week" value={overtimeHours} onChange={(e) => setOvertimeHours(e.target.value)} suffix="hours" placeholder="0" helpText="Weekly overtime hours" />
          <SelectField id="overtimeRate" label="OT Rate" value={overtimeRate} onChange={(e) => setOvertimeRate(e.target.value)} options={[
            { value: "1.5", label: "Time and a Half (1.5x)" },
            { value: "2", label: "Double Time (2x)" },
          ]} />
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300"><strong>Last Updated:</strong> May 2026</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Author:</strong> Financial Metrics Team</span>
          <span className="text-gray-600 dark:text-slate-300"><strong>Sources:</strong>{" "}
            <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">DOL — FLSA Overtime Rules</a>
            {" · "}
            <a href="https://www.irs.gov/individuals/tax-withholding" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">IRS — Tax Withholding</a>
          </span>
        </div>
      </div>

      <h2>How to Use the Hourly Wage Calculator</h2>
      <p>Enter your <strong>hourly wage</strong>, <strong>hours per week</strong>, and <strong>weeks per year</strong>. Add overtime hours and rate if applicable. The calculator shows your salary at every frequency and provides estimated tax breakdown with FICA and federal withholding.</p>

      <h2>Formulas</h2>
      <p><strong>Annual Salary = Hourly Rate × Hours/Week × Weeks/Year</strong></p>
      <ul>
        <li>Monthly = Annual ÷ 12</li>
        <li>Bi-Weekly = Weekly × 2</li>
        <li>Daily = Weekly ÷ 5 (for 5-day work week)</li>
        <li>Overtime = Rate × OT Rate × OT Hours/Week × Weeks/Year</li>
      </ul>

      <h2>Related Tools</h2>
      <ul>
        <li><Link href="/calculators/texas-paycheck-calculator">Texas Paycheck Calculator</Link> — Take-home pay in TX</li>
        <li><Link href="/calculators/new-york-paycheck-calculator-2026">New York Paycheck Calculator</Link> — Take-home pay in NY</li>
        <li><Link href="/calculators/florida-paycheck-calculator-2026">Florida Paycheck Calculator</Link> — Take-home pay in FL</li>
      </ul>

      <RelatedCalculators currentPage="hourly-wage-calculator-us" />
    </>
  );
}

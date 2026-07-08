"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [salary, setSalary] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");

  const annual = parseFloat(salary) || 0;
  const hpw = parseFloat(hoursPerWeek) || 0;
  const wpy = parseFloat(weeksPerYear) || 0;

  const errors = {};
  if (salary !== "" && annual < 0) errors.salary = "Salary can't be negative.";
  if (hoursPerWeek !== "" && (hpw <= 0 || hpw > 168)) errors.hoursPerWeek = "Enter 1–168 hours.";
  if (weeksPerYear !== "" && (wpy <= 0 || wpy > 52)) errors.weeksPerYear = "Enter 1–52 weeks.";

  const totalHours = hpw * wpy;
  const hourly = totalHours > 0 ? annual / totalHours : 0;
  const daily = hourly * (hpw / 5 || 8);
  const weekly = hourly * hpw;
  const biweekly = weekly * 2;
  const monthly = annual / 12;

  const schemaData = {
    name: "Salary to Hourly Calculator",
    description: "Convert an annual salary to an equivalent hourly, daily, weekly, and monthly wage.",
    url: "https://www.themetricapp.com/calculators/salary-to-hourly-calculator",
  };

  return (
    <CalculatorShell
      title="Salary to Hourly Calculator"
      subtitle="Convert any annual salary into an equivalent hourly, daily, weekly, and monthly wage — perfect for comparing job offers or freelance rates."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Hourly Rate" value={fmt(hourly)} highlight sub={totalHours.toLocaleString() + " hrs/year"} />
          <ResultCard label="Daily Pay" value={fmt(daily)} sub={"Per " + (hpw / 5 || 8).toFixed(1) + "-hr day"} />
          <ResultCard label="Weekly Pay" value={fmt(weekly)} sub={hpw + " hrs/week"} />
          <ResultCard label="Bi-Weekly Pay" value={fmt(biweekly)} sub="Every 2 weeks" />
          <ResultCard label="Monthly Pay" value={fmt(monthly)} sub="Gross, before tax" />
          <ResultCard label="Annual Salary" value={fmt(annual)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="sm:col-span-2">
          <InputField id="salary" label="Annual Salary" value={salary} onChange={(e) => setSalary(e.target.value)} prefix="$" placeholder="65000" helpText="Your gross yearly salary before taxes" />
          {errors.salary && <p className="text-xs text-red-500 mt-1">{errors.salary}</p>}
        </div>
        <div>
          <InputField id="hoursPerWeek" label="Hours Per Week" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} placeholder="40" helpText="Standard full-time is 40" />
          {errors.hoursPerWeek && <p className="text-xs text-red-500 mt-1">{errors.hoursPerWeek}</p>}
        </div>
        <div>
          <InputField id="weeksPerYear" label="Weeks Worked Per Year" value={weeksPerYear} onChange={(e) => setWeeksPerYear(e.target.value)} placeholder="52" helpText="Use 50 if you take 2 unpaid weeks off" />
          {errors.weeksPerYear && <p className="text-xs text-red-500 mt-1">{errors.weeksPerYear}</p>}
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e7e5f3] bg-[#f6f5fc] p-4 text-sm text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>
        <strong className="text-[#1d1a33]">Note:</strong> These are gross (pre-tax) figures. To see take-home pay after federal, state, and FICA taxes, use a paycheck calculator. Salaried roles often include benefits an hourly rate does not.
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

      <h2>How Do You Convert Salary to Hourly Pay?</h2>
      <p>
        <strong>To convert an annual salary to an hourly wage, divide the salary by the total hours you work in a year.</strong> The standard full-time year is 40 hours × 52 weeks = 2,080 hours, so a $65,000 salary equals about <strong>$31.25 per hour</strong>. The quick shortcut: divide your salary by 2,000 for a rough hourly figure ($65,000 → ~$32.50).
      </p>

      <h2>How to Use This Salary to Hourly Calculator</h2>
      <p>
        Enter your <strong>annual salary</strong>, your typical <strong>hours per week</strong>, and the <strong>weeks you work per year</strong> (use 50 if you take two unpaid weeks off). The calculator instantly shows your equivalent hourly, daily, weekly, bi-weekly, and monthly pay — all gross figures before tax.
      </p>

      <h2>Why Convert Salary to Hourly?</h2>
      <p>
        Converting to an hourly rate makes very different jobs comparable. A $70,000 salary that demands 55-hour weeks (~$24.50/hr) actually pays less per hour than a $60,000 role at 40 hours (~$28.85/hr). Freelancers use the reverse math to set rates — remember to mark up for self-employment tax, unpaid time off, and benefits you now fund yourself. See our <a href="/calculators/hourly-wage-calculator-us">Hourly Wage Calculator</a> for the reverse conversion and our <a href="/calculators/self-employment-tax-calculator-2026">Self-Employment Tax Calculator</a> for freelance planning.
      </p>

      <h2>Salaried vs Hourly — What the Number Doesn't Show</h2>
      <p>
        An hourly equivalent ignores what often matters most: paid time off, health insurance, retirement matching, and job stability. A salaried role at a lower hourly-equivalent can still come out ahead once a 401(k) match and paid leave are counted. Use this tool as a starting comparison, then layer in benefits. To see real take-home after taxes, run the figure through a <a href="/calculators/texas-paycheck-calculator">paycheck calculator</a>.
      </p>
    </>
  );
}

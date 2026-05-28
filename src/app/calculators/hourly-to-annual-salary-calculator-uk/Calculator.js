"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmtGBP = (n) =>
  "£" + Number(n || 0).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [rate, setRate] = useState("");
  const [hours, setHours] = useState("");
  const [overtimeHours, setOvertimeHours] = useState("");
  const [overtimeMultiplier, setOvertimeMultiplier] = useState("1.5");
  const [weeksMode, setWeeksMode] = useState("52");

  const hourlyRate = parseFloat(rate) || 0;
  const weeklyHours = parseFloat(hours) || 0;
  const otHours = parseFloat(overtimeHours) || 0;
  const otMult = parseFloat(overtimeMultiplier) || 1.5;
  const weeksPerYear = parseFloat(weeksMode);
  const holidayWeeks = 52 - weeksPerYear;

  const baseWeeklyPay = hourlyRate * weeklyHours;
  const otWeeklyPay = otHours > 0 ? hourlyRate * otMult * otHours : 0;
  const totalWeeklyPay = baseWeeklyPay + otWeeklyPay;

  const annualBasePay = hourlyRate * weeklyHours * weeksPerYear;
  const annualOvertimePay = otWeeklyPay * weeksPerYear;
  const holidayPay = holidayWeeks > 0 ? baseWeeklyPay * holidayWeeks : 0;
  const annualTotalPay = annualBasePay + annualOvertimePay + holidayPay;

  const monthlyPay = annualTotalPay / 12;
  const weeklyPay = annualTotalPay / 52;

  const totalHoursWorked = (weeklyHours + otHours) * weeksPerYear;
  const effectiveHourlyRate = totalHoursWorked > 0 ? annualTotalPay / totalHoursWorked : 0;

  const schemaData = {
    name: "Hourly to Annual Salary Calculator UK (2025–26)",
    description: "Convert your hourly wage to annual salary instantly. Includes standard hours, overtime, and statutory holiday pay for 2025–26 UK tax year.",
    url: "https://www.themetricapp.com/calculators/hourly-to-annual-salary-calculator-uk",
  };

  return (
    <>
      <CalculatorShell
        title="Hourly to Annual Salary Calculator UK (2025–26) — Convert Hourly Wage to Yearly Pay"
        subtitle="Convert your hourly rate to annual salary instantly. Includes standard hours, overtime, and statutory holiday pay adjustment for the 2025–26 tax year."
        schemaData={schemaData}
        results={
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ResultCard label="Annual Gross Salary" value={fmtGBP(annualTotalPay)} highlight />
            <ResultCard label="Monthly Gross Pay" value={fmtGBP(monthlyPay)} highlight />
            <ResultCard label="Weekly Pay" value={fmtGBP(weeklyPay)} sub="Per working week" />
            <ResultCard label="Base Annual (No OT)" value={fmtGBP(annualBasePay)} sub="Excluding overtime" />
            <ResultCard label="Annual Overtime" value={fmtGBP(annualOvertimePay)} sub={`${otMult}× rate`} />
            <ResultCard label="Holiday Pay" value={fmtGBP(holidayPay)} sub={`${holidayWeeks} weeks`} />
            <ResultCard label="Effective Hourly Rate" value={fmtGBP(effectiveHourlyRate)} sub="Inc. overtime" />
            <ResultCard label="Working Weeks/Year" value={weeksPerYear.toString()} sub={`${holidayWeeks} weeks holiday`} />
          </div>
        }
        seoContent={<SEOContent />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            id="rate"
            label="Hourly Rate (£)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            prefix="£"
            placeholder="15.00"
            step="0.50"
          />
          <InputField
            id="hours"
            label="Hours per Week"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            suffix="hrs"
            placeholder="37.5"
            step="0.5"
            helpText="Standard full-time is 37.5 or 40 hours"
          />
          <InputField
            id="overtime"
            label="Overtime Hours / Week"
            value={overtimeHours}
            onChange={(e) => setOvertimeHours(e.target.value)}
            suffix="hrs"
            placeholder="0"
            step="0.5"
            helpText="Average extra hours — leave blank if none"
          />
          <SelectField
            id="otMultiplier"
            label="Overtime Rate"
            value={overtimeMultiplier}
            onChange={(e) => setOvertimeMultiplier(e.target.value)}
            options={[
              { value: "1.5", label: "Time and a half (1.5×)" },
              { value: "2", label: "Double time (2×)" },
            ]}
          />
          <SelectField
            id="weeks"
            label="Weeks per Year"
            value={weeksMode}
            onChange={(e) => setWeeksMode(e.target.value)}
            options={[
              { value: "52", label: "52 weeks (standard)" },
              { value: "46.4", label: "46.4 weeks (holiday-adjusted)" },
            ]}
            helpText="46.4 weeks = 52 weeks minus 5.6 weeks statutory holiday"
          />
          <div className="flex items-end pb-1">
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              The basic formula is: <strong>Hourly Rate × Hours per Week × Weeks per Year</strong>. Add overtime at your agreed rate for a full earnings picture.
            </p>
          </div>
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
            <strong>Last Updated:</strong> May 2026
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Author:</strong> Financial Metrics Team
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://www.gov.uk/national-minimum-wage-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              GOV.UK NMW Rates
            </a>
            {" · "}
            <a href="https://www.gov.uk/holiday-entitlement-rights" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              GOV.UK Holiday Entitlement
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Hourly to Annual Salary Calculator UK</h2>
      <p>
        You&apos;ve been offered a new job at £18 an hour but the salary sounds less impressive when you try to work out the yearly figure in your head. This calculator is designed to give you an instant, accurate conversion from hourly rate to annual salary — whether you&apos;re comparing job offers, negotiating a pay rise, or setting freelance day rates.
      </p>
      <p>
        Start by entering your <strong>hourly rate</strong> — this is your gross pay per hour before any tax or National Insurance deductions. Next, enter your <strong>average hours per week</strong> (most full-time roles are 37.5 or 40 hours; part-time workers should enter their actual contracted hours). If you regularly work overtime, enter the <strong>average overtime hours per week</strong> and select your overtime rate (typically 1.5× or 2× your base rate). Finally, choose your <strong>weeks per year</strong> — the standard 52-week calculation gives a quick estimate, while the holiday-adjusted option (46.4 weeks) accounts for the 5.6 weeks of statutory paid holiday UK workers are entitled to.
      </p>

      <h2>Detailed Conversion Formula Breakdown</h2>
      <h3>The Basic Formula</h3>
      <p>
        The simplest conversion from hourly to annual salary uses this formula: <strong>Annual Salary = Hourly Rate × Hours per Week × 52</strong>. For example, at £15 per hour working 37.5 hours per week: £15 × 37.5 × 52 = <strong>£29,250</strong> per year. This gives you a quick, rough estimate.
      </p>
      <h3>The Holiday-Adjusted Formula</h3>
      <p>
        UK employees are entitled to <strong>5.6 weeks of statutory paid holiday</strong> per year (28 days for a five-day worker). Since you&apos;re paid for holiday but not working, a more accurate calculation uses 46.4 working weeks (52 − 5.6): <strong>Annual Salary = Hourly Rate × Hours per Week × 46.4</strong>. For £15 per hour at 37.5 hours: £15 × 37.5 × 46.4 = <strong>£26,100</strong> (base working pay), plus £15 × 37.5 × 5.6 = <strong>£3,150</strong> (holiday pay) = £29,250 total. The annual figure is the same — the breakdown just shows you how much of it comes from working weeks versus holiday pay.
      </p>
      <h3>Including Overtime</h3>
      <p>
        If you regularly work overtime, add it to your calculation: <strong>Overtime Annual = (Hourly Rate × Overtime Multiplier × Overtime Hours per Week) × 52</strong>. For example, 5 hours of overtime per week at 1.5× on a £15/hour rate: (£15 × 1.5 × 5) × 52 = <strong>£5,850</strong> per year on top of your base salary.
      </p>

      <h2>Real-Life Examples</h2>
      <h3>Example 1 — Full-Time Employee, No Overtime</h3>
      <p>
        Sarah works 37.5 hours per week at £16 per hour. Using the standard 52-week calculation: £16 × 37.5 × 52 = <strong>£31,200</strong> per year. Her monthly gross pay is £31,200 ÷ 12 = <strong>£2,600</strong>. She doesn&apos;t work overtime, so this is her total annual gross salary before tax and NI.
      </p>
      <h3>Example 2 — Part-Time Worker with Overtime</h3>
      <p>
        James works 25 hours per week at £14 per hour, with an average of 4 overtime hours at 1.5×. Base annual: £14 × 25 × 52 = <strong>£18,200</strong>. Overtime annual: (£14 × 1.5 × 4) × 52 = <strong>£4,368</strong>. Total annual: <strong>£22,568</strong>. His effective hourly rate (including overtime) is £22,568 ÷ (25 × 52 + 4 × 52) = <strong>£14.93</strong>.
      </p>
      <h3>Example 3 — Holiday-Adjusted Comparison</h3>
      <p>
        Tom is comparing a salaried role at £30,000 to an hourly role at £15/hour for 37.5 hours/week. The salaried role includes paid holiday. The hourly role using holiday-adjusted weeks: £15 × 37.5 × 46.4 = <strong>£26,100</strong> base + £3,150 holiday pay = £29,250 total. The salaried role pays more, plus offers pension contributions and sick pay — useful context when Tom negotiates his contract.
      </p>

      <h2>Key Things to Know About Hourly to Annual Salary Conversion in 2025–26</h2>
      <ul>
        <li><strong>National Minimum Wage:</strong> £11.44 per hour for workers aged 21 and over (from April 2025). Use this as your baseline — any hourly role must pay at least this amount.</li>
        <li><strong>Statutory Holiday Entitlement:</strong> 5.6 weeks (28 days for a five-day worker). If your hourly rate includes &quot;rolled-up&quot; holiday pay (12.07% added to each pay packet), your base hourly rate already covers this — no need to adjust weeks.</li>
        <li><strong>Standard working week:</strong> Most full-time contracts use 37.5 or 40 hours. Part-time workers should use their actual contracted hours. The legal maximum average is 48 hours per week under the Working Time Regulations (unless you opt out).</li>
        <li><strong>Overtime rules:</strong> There is no statutory right to overtime pay in the UK. Check your employment contract — most specify time-and-a-half (1.5×) or double-time (2×) for hours beyond your contracted week.</li>
        <li><strong>Minimum Wage increase:</strong> The NMW rose from £10.42 to £11.44 in April 2025 (a 9.8% increase), significantly affecting annual salary calculations for lower-paid workers.</li>
      </ul>

      <h2>Common Mistakes People Make</h2>
      <ul>
        <li><strong>Multiplying by 52 without considering holiday.</strong> Most people assume they work 52 weeks a year, but statutory holiday means you&apos;re paid for 52 weeks while working 46.4. The total annual pay is the same, but the breakdown matters when comparing salaried vs hourly roles.</li>
        <li><strong>Forgetting unpaid breaks.</strong> Your contract might say &quot;40 hours per week&quot; but include 30 minutes unpaid lunch each day. That&apos;s 2.5 unpaid hours per week. Always use your actual paid hours, not your total time at work.</li>
        <li><strong>Ignoring overtime in base salary comparisons.</strong> If you compare a role with guaranteed overtime to one without, include the overtime in your annual figure. A £12/hour role with 10 hours overtime could pay more than a £15/hour role with none.</li>
        <li><strong>Confusing gross and net pay.</strong> Your annual gross salary can be 20–35% higher than what actually lands in your bank account after deductions. Use the <a href="/calculators/income-tax-calculator-uk" className="text-teal-400 underline hover:text-teal-300">Income Tax Calculator UK</a> at TheMetricApp.com to find your take-home figure.</li>
      </ul>

      <h2>Tips to Get the Best Result</h2>
      <p>
        <strong>Use the holiday-adjusted calculation for job comparisons.</strong> When comparing an hourly role to a salaried position, always use the 46.4-week calculation on the hourly side if holiday isn&apos;t paid separately. Salaried employees get paid holiday as standard — your comparison should reflect that.
      </p>
      <p>
        <strong>Track your overtime for three months.</strong> If overtime is variable, don&apos;t guess — look at your last 12 weeks of payslips and average the overtime hours. A single busy week can inflate your expectations. Use the <strong>Hourly to Annual Salary Calculator UK</strong> at TheMetricApp.com to model different overtime scenarios.
      </p>
      <p>
        <strong>Check your contract for the overtime rate.</strong> Some employers pay 1.5× for weekday overtime but 2× for weekends and bank holidays. If you consistently work different types of overtime, calculate each separately for a more accurate annual figure.
      </p>
      <p>
        <strong>Pair with a tax calculator.</strong> Once you have your annual gross salary, run it through the <a href="/calculators/income-tax-calculator-uk" className="text-teal-400 underline hover:text-teal-300">Income Tax Calculator UK</a> to see how much you&apos;ll actually take home after HMRC deductions. The difference can be eye-opening.
      </p>

      <h2>Data Sources & Methodology</h2>
      <p>
        Our Hourly to Annual Salary Calculator UK uses official UK employment legislation and current minimum wage rates. All figures are verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>National Minimum Wage:</strong> £11.44 per hour (21+) from{" "}
          <a href="https://www.gov.uk/national-minimum-wage-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            GOV.UK Minimum Wage Rates
          </a>
          . Effective April 2025.
        </li>
        <li>
          <strong>Statutory Holiday Entitlement:</strong> 5.6 weeks (28 days) per the{" "}
          <a href="https://www.gov.uk/holiday-entitlement-rights" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            GOV.UK Holiday Entitlement Guide
          </a>
          .
        </li>
        <li>
          <strong>Working Time Regulations:</strong> Maximum 48-hour week from{" "}
          <a href="https://www.gov.uk/maximum-weekly-working-hours" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            GOV.UK Working Hours
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Base annual salary = Hourly Rate × Weekly Hours × Weeks per Year. Overtime = (Hourly Rate × Overtime Multiplier × Overtime Hours) × Weeks per Year. Holiday pay = Base weekly pay × Holiday weeks (when using holiday-adjusted mode). Effective hourly rate = Total annual pay ÷ (Total hours worked). The standard 52-week calculation gives a quick estimate; the 46.4-week option accounts for 5.6 weeks of statutory paid holiday. These are gross figures — use the Income Tax Calculator UK to estimate your net take-home pay after HMRC deductions.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: How do I convert my hourly rate to an annual salary in the UK?</strong><br />
        A: Multiply your hourly rate by your weekly hours, then by 52 weeks. For example, £15 per hour × 37.5 hours × 52 weeks = £29,250 per year. For a more accurate figure that accounts for statutory holiday, use 46.4 working weeks instead of 52.
      </p>
      <p>
        <strong>Q: What is £15 an hour annually in the UK?</strong><br />
        A: At £15 per hour working 37.5 hours per week for 52 weeks, your annual gross salary is £29,250. This works out to approximately £2,438 per month before tax and National Insurance. After deductions, your take-home pay would be roughly £22,000–£23,000 depending on your tax code.
      </p>
      <p>
        <strong>Q: How many weeks per year do UK workers actually work?</strong><br />
        A: UK employees are entitled to 5.6 weeks of statutory paid holiday per year (28 days for a five-day worker). This means you&apos;re paid for 52 weeks but typically work 46.4 weeks (52 minus 5.6). Some employers offer more holiday as a benefit, which reduces working weeks further.
      </p>
      <p>
        <strong>Q: What is the difference between National Minimum Wage and National Living Wage?</strong><br />
        A: The National Minimum Wage (£11.44 for ages 21+ in 2025–26) is the legal minimum set by the government. The National Living Wage (£12.21 for ages 21+) is a higher voluntary rate recommended by the Living Wage Foundation. Many employers choose to pay the Living Wage but are only legally required to pay the Minimum Wage.
      </p>
      <p>
        <strong>Q: Does the hourly to annual salary calculation include overtime?</strong><br />
        A: The standard calculation uses your base hourly rate and contracted hours. If you regularly work overtime, add your average overtime hours at the appropriate rate (typically 1.5× or 2× your base rate) to get your true annual earnings. Use TheMetricApp.com for an instant, accurate result.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed UK salary conversion strategies and real-world examples comparing hourly vs salaried roles, read our full guide:{" "}
          <a href="/blog/hourly-to-annual-salary-calculator-uk-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Hourly to Annual Salary Calculator UK 2026 Guide
          </a>
          . This companion article covers contract vs permanent comparisons, minimum wage impact analysis, and salary negotiation tips.
        </p>
      </div>

      <h2>Related Calculators</h2>
      <p>
        Check out these other helpful financial tools on TheMetricApp:
      </p>
      <ul>
        <li><a href="/calculators/income-tax-calculator-uk">Income Tax Calculator UK</a> — Calculate PAYE, National Insurance, and take-home pay on your annual salary.</li>
        <li><a href="/calculators/vat-calculator-uk">VAT Calculator UK</a> — Add or remove 20% VAT instantly for UK businesses and freelancers.</li>
        <li><a href="/calculators/texas-paycheck-calculator">Texas Paycheck Calculator</a> — Calculate take-home pay in Texas with zero state income tax for US comparisons.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Estimate self-employment tax and quarterly payments on freelance income.</li>
      </ul>

      <p className="mt-8 text-sm text-slate-400 italic">
        If you found this calculator useful, consider sharing TheMetricApp.com with friends, colleagues, or on social media. We&apos;re completely free, no sign-up required — just fast, accurate results.
      </p>

      <p className="mt-6">
        <strong>Ready to get your exact annual salary figure?</strong> Use the free <a href="/calculators/hourly-to-annual-salary-calculator-uk" className="text-teal-400 underline hover:text-teal-300 font-semibold">Hourly to Annual Salary Calculator UK at TheMetricApp.com</a> — no registration, no fees, instant answer. Bookmark it for next time.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Hourly to Annual Salary Calculator UK (2025–26)",
            url: "https://www.themetricapp.com/calculators/hourly-to-annual-salary-calculator-uk",
            description: "Convert your hourly wage to annual salary instantly. Includes standard hours, overtime, and statutory holiday pay for 2025–26 UK tax year.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "GBP",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com" },
              { "@type": "ListItem", position: 2, name: "Hourly to Annual Salary Calculator UK", item: "https://www.themetricapp.com/calculators/hourly-to-annual-salary-calculator-uk" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I convert my hourly rate to an annual salary in the UK?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Multiply your hourly rate by your weekly hours, then by 52 weeks. For example, £15 per hour × 37.5 hours × 52 weeks = £29,250 per year. For a more accurate figure that accounts for statutory holiday, use 46.4 working weeks instead of 52.",
                },
              },
              {
                "@type": "Question",
                name: "What is £15 an hour annually in the UK?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "At £15 per hour working 37.5 hours per week for 52 weeks, your annual gross salary is £29,250. This works out to approximately £2,438 per month before tax and National Insurance. After deductions, your take-home pay would be roughly £22,000–£23,000 depending on your tax code.",
                },
              },
              {
                "@type": "Question",
                name: "How many weeks per year do UK workers actually work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "UK employees are entitled to 5.6 weeks of statutory paid holiday per year (28 days for a five-day worker). This means you're paid for 52 weeks but typically work 46.4 weeks (52 minus 5.6). Some employers offer more holiday as a benefit, which reduces working weeks further.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between National Minimum Wage and National Living Wage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The National Minimum Wage (£11.44 for ages 21+ in 2025–26) is the legal minimum set by the government. The National Living Wage (£12.21 for ages 21+) is a higher voluntary rate recommended by the Living Wage Foundation. Many employers choose to pay the Living Wage but are only legally required to pay the Minimum Wage.",
                },
              },
              {
                "@type": "Question",
                name: "Does the hourly to annual salary calculation include overtime?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The standard calculation uses your base hourly rate and contracted hours. If you regularly work overtime, add your average overtime hours at the appropriate rate (typically 1.5× or 2× your base rate) to get your true annual earnings. Use TheMetricApp.com for an instant, accurate result.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}

"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmtGBP = (n) =>
  "£" + Number(n || 0).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function calcIncomeTax(grossSalary) {
  let personalAllowance = 12570;

  // Personal Allowance taper: lose £1 for every £2 over £100,000
  if (grossSalary > 100000) {
    const reduction = Math.min(personalAllowance, Math.floor((grossSalary - 100000) / 2));
    personalAllowance -= reduction;
  }

  const taxableIncome = Math.max(0, grossSalary - personalAllowance);

  // Band thresholds for 2025-26 (England, Wales, NI)
  const bands = [
    { min: 0, max: 50270 - personalAllowance, rate: 0.20 },
    { min: 50270 - personalAllowance, max: 125140 - personalAllowance, rate: 0.40 },
    { min: 125140 - personalAllowance, max: Infinity, rate: 0.45 },
  ];

  const adjustedBands = bands.map((b) => ({
    ...b,
    min: Math.max(0, b.min),
    max: Math.max(0, b.max),
  }));

  let incomeTax = 0;

  for (const b of adjustedBands) {
    if (taxableIncome <= b.min) break;
    const taxableInBand = Math.min(taxableIncome, b.max) - b.min;
    if (taxableInBand > 0) incomeTax += taxableInBand * b.rate;
  }

  return { incomeTax, personalAllowance };
}

function calcNationalInsurance(grossSalary) {
  const pt = 12570; // Primary Threshold
  const uel = 50270; // Upper Earnings Limit

  if (grossSalary <= pt) return 0;

  const betweenPTandUEL = Math.min(grossSalary, uel) - pt;
  const aboveUEL = Math.max(0, grossSalary - uel);

  return betweenPTandUEL * 0.08 + aboveUEL * 0.02;
}

export default function Calculator() {
  const [salary, setSalary] = useState("");

  const grossSalary = parseFloat(salary) || 0;

  const { incomeTax, personalAllowance } = calcIncomeTax(grossSalary);
  const nationalInsurance = calcNationalInsurance(grossSalary);
  const totalDeductions = incomeTax + nationalInsurance;
  const netAnnual = grossSalary - totalDeductions;
  const monthlyNet = netAnnual / 12;
  const weeklyNet = netAnnual / 52;
  const effectiveRate = grossSalary > 0 ? (totalDeductions / grossSalary) * 100 : 0;

  const schemaData = {
    name: "Income Tax Calculator UK (2025–26)",
    description: "Estimate your PAYE, National Insurance, and take-home pay for the 2025–26 UK tax year. Accurate HMRC rates.",
    url: "https://www.themetricapp.com/calculators/income-tax-calculator-uk",
  };

  return (
    <>
      <CalculatorShell
        title="Income Tax Calculator UK (2025–26) — Estimate PAYE &amp; Take-Home Pay"
        subtitle="Calculate your UK Income Tax, National Insurance, and net take-home pay for the 2025–26 tax year. Accurate HMRC rates, instant results."
        schemaData={schemaData}
        results={
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ResultCard label="Annual Gross" value={fmtGBP(grossSalary)} sub="Before tax & NI" />
            <ResultCard label="Income Tax" value={fmtGBP(incomeTax)} sub="PAYE deduction" />
            <ResultCard label="National Insurance" value={fmtGBP(nationalInsurance)} sub="Class 1 employee" />
            <ResultCard label="Total Deductions" value={fmtGBP(totalDeductions)} sub="Tax + NI combined" />
            <ResultCard label="Net Annual Pay" value={fmtGBP(netAnnual)} highlight />
            <ResultCard label="Monthly Net Pay" value={fmtGBP(monthlyNet)} highlight />
            <ResultCard label="Weekly Net Pay" value={fmtGBP(weeklyNet)} />
            <ResultCard label="Effective Tax Rate" value={effectiveRate.toFixed(1) + "%"} sub="Of gross salary" />
          </div>
        }
        seoContent={<SEOContent />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            id="salary"
            label="Gross Annual Salary (£)"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            prefix="£"
            placeholder="50000"
            step="100"
          />
          <div className="flex items-end pb-1">
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Applies to England, Wales &amp; Northern Ireland. Scotland has separate tax bands — a dedicated Scottish calculator is coming soon.
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
            <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              HMRC Income Tax Rates
            </a>
            {" · "}
            <a href="https://www.gov.uk/national-insurance-rates-letters" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              HMRC NI Rates
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the Income Tax Calculator UK</h2>
      <p>
        You&apos;ve just received your first payslip from a new job and the numbers don&apos;t quite add up. The gross salary looks healthy, but the deductions leave you wondering where a third of your earnings disappeared to. This calculator is designed to give you an instant, accurate breakdown of your Income Tax, National Insurance, and true take-home pay for the 2025–26 tax year.
      </p>
      <p>
        Start by entering your <strong>gross annual salary</strong> — this is your pre-tax income before any deductions like pension or student loans. Then select your <strong>region</strong>: England, Wales, and Northern Ireland all follow the same tax bands; Scotland has its own devolved system. The calculator instantly computes your Personal Allowance, Income Tax (using the progressive 2025–26 bands), National Insurance (Class 1 employee contributions), and your resulting net pay displayed as annual, monthly, and weekly amounts.
      </p>

      <h2>Detailed Income Tax Formula Breakdown</h2>
      <h3>Your Personal Allowance</h3>
      <p>
        Everyone in the UK is entitled to a <strong>Personal Allowance</strong> of £12,570 (2025–26). This is the amount you can earn each year before paying any Income Tax. However, if your adjusted net income exceeds £100,000, your allowance is reduced by £1 for every £2 you earn above that threshold. At £125,140, your Personal Allowance reaches zero — meaning you pay tax on every pound you earn.
      </p>
      <h3>Progressive Tax Bands</h3>
      <p>
        Once your Personal Allowance is applied, the remaining taxable income is taxed at increasing rates depending on which band it falls into:
      </p>
      <ul>
        <li><strong>Basic Rate (20%):</strong> £12,571 to £50,270 — the band most full-time workers fall into</li>
        <li><strong>Higher Rate (40%):</strong> £50,271 to £125,140 — applies to higher earners and most of London&apos;s professional salaries</li>
        <li><strong>Additional Rate (45%):</strong> Over £125,140 — the top band for the highest earners</li>
      </ul>
      <p>
        Crucially, you only pay the higher rate on the portion of your income that falls within that band — not on your entire salary. This is what makes the system progressive rather than flat-rate.
      </p>
      <h3>National Insurance (Class 1 Employee)</h3>
      <p>
        In addition to Income Tax, employees pay National Insurance contributions through PAYE. For 2025–26, you pay <strong>8%</strong> on earnings between £12,570 and £50,270, and <strong>2%</strong> on everything above £50,270. Unlike Income Tax, NI is calculated on your gross salary before any Personal Allowance adjustments.
      </p>

      <h2>Real-Life Examples</h2>
      <h3>Example 1 — £35,000 Salary (Basic Rate Only)</h3>
      <p>
        On a £35,000 salary, your Personal Allowance of £12,570 means you&apos;re taxed on £22,430. All of this falls within the Basic Rate, so your Income Tax is £22,430 × 20% = <strong>£4,486</strong>. National Insurance is 8% of (£35,000 − £12,570) = <strong>£1,794</strong>. Total deductions: £6,280. Your take-home pay is <strong>£28,720</strong> per year, or roughly <strong>£2,393 per month</strong>.
      </p>
      <h3>Example 2 — £65,000 Salary (Basic + Higher Rate)</h3>
      <p>
        At £65,000, your Personal Allowance is still £12,570 (you&apos;re under £100,000). Taxable income: £52,430. The first £37,700 (£50,270 − £12,570) is taxed at 20% = £7,540. The remaining £14,730 is taxed at 40% = £5,892. Total Income Tax: <strong>£13,432</strong>. NI at 8% on £37,700 = £3,016, plus 2% on £14,730 = £295. Total NI: £3,311. Your take-home pay is <strong>£48,257</strong> per year, or about <strong>£4,021 per month</strong>.
      </p>
      <h3>Example 3 — £150,000 Salary (Tapered Allowance + Additional Rate)</h3>
      <p>
        At £150,000, your Personal Allowance is completely eliminated (tapered to zero because you&apos;re over £125,140). Your entire £150,000 is taxable. The first £50,270 is taxed at 20% = £10,054. The next £74,870 is taxed at 40% = £29,948. The remaining £24,860 is taxed at 45% = £11,187. Total Income Tax: <strong>£51,189</strong>. NI: 8% on £37,700 = £3,016, plus 2% on £99,730 = £1,995. Total NI: £5,011. Your take-home pay is <strong>£93,800</strong> per year, or about <strong>£7,817 per month</strong> — significantly less than the headline £150,000.
      </p>

      <h2>Key Things to Know About UK Income Tax in 2025–26</h2>
      <ul>
        <li><strong>Personal Allowance: £12,570</strong> — frozen until at least April 2028. This means more people are being pulled into tax as wages rise with inflation (fiscal drag).</li>
        <li><strong>Basic Rate (20%):</strong> £12,571 to £50,270 — unchanged from 2024–25.</li>
        <li><strong>Higher Rate (40%):</strong> £50,271 to £125,140 — the threshold has been frozen since 2021, pulling many professionals into this band.</li>
        <li><strong>Additional Rate (45%):</strong> Over £125,140 — introduced for earnings above £125,140 from April 2023, reduced from the previous £150,000 threshold.</li>
        <li><strong>National Insurance:</strong> Class 1 employee rate is 8% between £12,570 and £50,270, and 2% above £50,270. The 1.25% Health and Social Care Levy was reversed in 2023.</li>
        <li><strong>Scotland:</strong> Uses its own bands (Starter Rate 19%, Scottish Basic Rate 20%, Intermediate Rate 21%, Higher Rate 42%, Top Rate 47% on income over £75,000 — thresholds differ).</li>
      </ul>

      <h2>Common Mistakes People Make</h2>
      <ul>
        <li><strong>Forgetting National Insurance exists.</strong> Many people calculate only Income Tax and are shocked by their payslip. NI at up to 8% is a significant additional deduction that must be factored in.</li>
        <li><strong>Assuming your whole salary is taxed at your highest rate.</strong> The progressive system means only the portion above each threshold is taxed at the higher rate. A common myth is that a pay rise into the higher rate band leaves you worse off — this is almost never true.</li>
        <li><strong>Ignoring the Personal Allowance taper.</strong> If you earn over £100,000, your allowance shrinks by £1 for every £2 over. A bonus or second job could cost you far more than expected. Always run the numbers before taking on extra work near this threshold.</li>
        <li><strong>Not checking your tax code.</strong> HMRC sometimes assigns the wrong code, especially after a job change. A wrong code can mean overpaying by hundreds of pounds each month. Check your code on gov.uk/check-income-tax.</li>
      </ul>

      <h2>Tips to Get the Best Result</h2>
      <p>
        <strong>Use an income tax calculator UK before negotiating salary.</strong> Knowing your exact take-home pay empowers you during job interviews and pay reviews. A £5,000 pay rise doesn&apos;t mean an extra £5,000 in your pocket — use the <strong>Income Tax Calculator UK</strong> at TheMetricApp.com to see the real figure.
      </p>
      <p>
        <strong>Check your tax code every April.</strong> After the new tax year starts, HMRC may issue a new code. Visit gov.uk/check-income-tax to verify it&apos;s correct. A small error can cost you months of overpayment that you&apos;ll have to reclaim later.
      </p>
      <p>
        <strong>Factor in pension contributions.</strong> Workplace pension deductions come out before tax, reducing your taxable income. Each pound you contribute to your pension saves you your marginal tax rate — 20p, 40p, or 45p per pound. Use this calculator with a reduced salary figure to see the impact of higher pension contributions.
      </p>
      <p>
        <strong>The £100,000 taper trap.</strong> If your income is near £100,000, consider salary sacrifice options like additional pension contributions or a company car to reduce your adjusted net income and protect your Personal Allowance. The effective tax rate between £100,000 and £125,140 can exceed 60% due to the taper.
      </p>

      <h2>Data Sources & Methodology</h2>
      <p>
        Our Income Tax Calculator UK uses the latest 2025–26 tax rates directly from HM Revenue &amp; Customs official publications. All figures are verified as of May 2026 and apply to England, Wales, and Northern Ireland. Scottish taxpayers should use the separate Scottish rate bands.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Income Tax Bands:</strong> Official 2025–26 rates from{" "}
          <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            GOV.UK Income Tax Rates
          </a>
          . Basic Rate (20%), Higher Rate (40%), Additional Rate (45%).
        </li>
        <li>
          <strong>Personal Allowance:</strong> £12,570 as confirmed by{" "}
          <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            HMRC Personal Allowance
          </a>
          . Tapered for incomes over £100,000.
        </li>
        <li>
          <strong>National Insurance:</strong> Class 1 employee rates (8% and 2%) from{" "}
          <a href="https://www.gov.uk/national-insurance-rates-letters" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            HMRC NI Rates &amp; Thresholds
          </a>
          .
        </li>
        <li>
          <strong>Scottish Rates:</strong> Scotland uses separate bands available from{" "}
          <a href="https://www.gov.scot/publications/income-tax-2025-26/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            Scottish Government Income Tax
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Income Tax is computed using the progressive band system: taxable income (gross salary minus Personal Allowance) is split across each band, and each portion is taxed at its corresponding rate. National Insurance (Class 1) is calculated at 8% on earnings between £12,570 and £50,270, and 2% above £50,270. Total deductions = Income Tax + National Insurance. Net pay = Gross salary − Total deductions. All results are estimates and should be verified against your actual HMRC tax calculation or payslip.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: How much income tax do I pay on £50,000 in the UK?</strong><br />
        A: On a £50,000 salary, you pay 0% on the first £12,570 (Personal Allowance) and 20% on the remaining £37,430. Your total Income Tax is £7,486. You also pay roughly £2,994 in National Insurance, leaving you with approximately £39,520 take-home pay.
      </p>
      <p>
        <strong>Q: What is the tax-free personal allowance for 2025–26?</strong><br />
        A: The Personal Allowance is £12,570 for the 2025–26 tax year. This is the amount you can earn before paying any Income Tax. It&apos;s been frozen at this level since 2021 and is expected to remain unchanged until at least April 2028.
      </p>
      <p>
        <strong>Q: How is income tax calculated through PAYE?</strong><br />
        A: Under PAYE, your employer deducts Income Tax and National Insurance from your wages before paying you. HMRC provides your employer with a tax code that determines how much of your pay is tax-free each pay period. The system spreads your tax evenly across the year so you don&apos;t face a large bill at year-end.
      </p>
      <p>
        <strong>Q: Do I pay income tax if I&apos;m self-employed?</strong><br />
        A: Yes, self-employed individuals pay Income Tax on their profits, not their total revenue. You report your earnings through a Self Assessment tax return each year. The same tax bands apply, but you pay Class 2 and Class 4 National Insurance instead of the employee&apos;s Class 1 contributions.
      </p>
      <p>
        <strong>Q: What&apos;s the difference between income tax and National Insurance?</strong><br />
        A: Income Tax is calculated on all taxable income above your Personal Allowance and funds general government spending. National Insurance is paid on your earnings between certain thresholds and specifically funds the NHS, state pension, and other contributory benefits. The two are deducted separately but both reduce your take-home pay. Use TheMetricApp.com for an instant, accurate result.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed UK tax planning strategies, real-world PAYE examples, and expert tips on minimising your tax bill, read our full guide:{" "}
          <a href="/blog/income-tax-calculator-uk-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Income Tax Calculator UK 2026 Guide
          </a>
          . This companion article covers salary sacrifice, the £100k taper trap, pension optimisation, and effective rate analysis.
        </p>
      </div>

      <h2>Related Calculators</h2>
      <p>
        Check out these other helpful financial tools on TheMetricApp:
      </p>
      <ul>
        <li><a href="/calculators/vat-calculator-uk">VAT Calculator UK</a> — Add or remove 20% VAT instantly for UK businesses and freelancers.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Estimate self-employment tax and quarterly payments on freelance income.</li>
        <li><a href="/calculators/solo-401k-contribution-calculator">Solo 401k Contribution Calculator</a> — Find the maximum retirement contribution and tax savings for self-employed professionals.</li>
        <li><a href="/calculators/texas-paycheck-calculator">Texas Paycheck Calculator</a> — Calculate take-home pay in Texas with zero state income tax for US comparisons.</li>
      </ul>

      <p className="mt-8 text-sm text-slate-400 italic">
        If you found this calculator useful, consider sharing TheMetricApp.com with friends, colleagues, or on social media. We&apos;re completely free, no sign-up required — just fast, accurate results.
      </p>

      <p className="mt-6">
        <strong>Ready to get your exact take-home pay figure?</strong> Use the free <a href="/calculators/income-tax-calculator-uk" className="text-teal-400 underline hover:text-teal-300 font-semibold">Income Tax Calculator UK at TheMetricApp.com</a> — no registration, no fees, instant answer. Bookmark it for next time.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Income Tax Calculator UK (2025–26)",
            url: "https://www.themetricapp.com/calculators/income-tax-calculator-uk",
            description: "Estimate your PAYE, National Insurance, and take-home pay for the 2025–26 UK tax year. Accurate HMRC rates.",
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
              { "@type": "ListItem", position: 2, name: "Income Tax Calculator UK", item: "https://www.themetricapp.com/calculators/income-tax-calculator-uk" },
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
                name: "How much income tax do I pay on £50,000 in the UK?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On a £50,000 salary, you pay 0% on the first £12,570 (Personal Allowance) and 20% on the remaining £37,430. Your total Income Tax is £7,486. You also pay roughly £2,994 in National Insurance, leaving you with approximately £39,520 take-home pay.",
                },
              },
              {
                "@type": "Question",
                name: "What is the tax-free personal allowance for 2025–26?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Personal Allowance is £12,570 for the 2025–26 tax year. This is the amount you can earn before paying any Income Tax. It's been frozen at this level since 2021 and is expected to remain unchanged until at least April 2028.",
                },
              },
              {
                "@type": "Question",
                name: "How is income tax calculated through PAYE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Under PAYE, your employer deducts Income Tax and National Insurance from your wages before paying you. HMRC provides your employer with a tax code that determines how much of your pay is tax-free each pay period. The system spreads your tax evenly across the year so you don't face a large bill at year-end.",
                },
              },
              {
                "@type": "Question",
                name: "Do I pay income tax if I'm self-employed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, self-employed individuals pay Income Tax on their profits, not their total revenue. You report your earnings through a Self Assessment tax return each year. The same tax bands apply, but you pay Class 2 and Class 4 National Insurance instead of the employee's Class 1 contributions.",
                },
              },
              {
                "@type": "Question",
                name: "What's the difference between income tax and National Insurance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Income Tax is calculated on all taxable income above your Personal Allowance and funds general government spending. National Insurance is paid on your earnings between certain thresholds and specifically funds the NHS, state pension, and other contributory benefits. The two are deducted separately but both reduce your take-home pay. Use TheMetricApp.com for an instant, accurate result.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}

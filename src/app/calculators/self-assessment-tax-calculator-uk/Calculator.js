"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmtGBP = (n) =>
  "£" + Number(n || 0).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [profits, setProfits] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [pensionContrib, setPensionContrib] = useState("");

  const selfEmployedProfits = parseFloat(profits) || 0;
  const otherInc = parseFloat(otherIncome) || 0;
  const pension = parseFloat(pensionContrib) || 0;

  const totalIncome = selfEmployedProfits + otherInc - pension;

  // Income Tax 2025-26
  let personalAllowance = 12570;
  if (totalIncome > 100000) {
    const reduction = Math.min(personalAllowance, Math.floor((totalIncome - 100000) / 2));
    personalAllowance -= reduction;
  }
  const taxableIncome = Math.max(0, totalIncome - personalAllowance);

  let incomeTax = 0;
  if (taxableIncome > 0) {
    const basicBand = Math.min(taxableIncome, 50270 - personalAllowance > 0 ? 50270 - personalAllowance : 0);
    const higherBand = Math.min(taxableIncome - basicBand, Math.max(0, 125140 - personalAllowance - basicBand));
    const additionalBand = Math.max(0, taxableIncome - basicBand - higherBand);

    incomeTax = basicBand * 0.20 + higherBand * 0.40 + additionalBand * 0.45;
  }

  // Class 2 NI
  const class2NI = selfEmployedProfits > 12570 ? 3.45 * 52 : 0;

  // Class 4 NI
  let class4NI = 0;
  if (selfEmployedProfits > 12570) {
    const between = Math.min(selfEmployedProfits, 50270) - 12570;
    const above = Math.max(0, selfEmployedProfits - 50270);
    class4NI = between * 0.06 + above * 0.02;
  }

  const totalNI = class2NI + class4NI;
  const totalTaxBill = incomeTax + totalNI;
  const netIncome = totalIncome - totalTaxBill;
  const effectiveRate = totalIncome > 0 ? (totalTaxBill / totalIncome) * 100 : 0;

  // Payments on Account (simplified: 2 x 50% of previous year's tax bill, minus Class 2 NI)
  const poaBase = totalTaxBill - class2NI;
  const firstPOA = poaBase * 0.5;
  const secondPOA = poaBase * 0.5;
  const totalDueJan = totalTaxBill + firstPOA;

  const schemaData = {
    name: "Self Assessment Tax Calculator UK (2025–26)",
    description: "Estimate your Self Assessment tax bill, Class 2 & 4 NI, and payments on account. Accurate HMRC rates for sole traders and freelancers.",
    url: "https://www.themetricapp.com/calculators/self-assessment-tax-calculator-uk",
  };

  return (
    <>
      <CalculatorShell
        title="Self Assessment Tax Calculator UK (2025–26) — Tax Return Estimator"
        subtitle="Estimate your Self Assessment tax bill for the 2025–26 tax year. Includes Income Tax, Class 2 &amp; Class 4 National Insurance, and Payments on Account for sole traders and freelancers."
        schemaData={schemaData}
        results={
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ResultCard label="Total Income" value={fmtGBP(totalIncome)} sub="Profits + other income" />
            <ResultCard label="Personal Allowance" value={fmtGBP(personalAllowance)} sub="Tax-free amount" />
            <ResultCard label="Income Tax" value={fmtGBP(incomeTax)} sub="PAYE equivalent" />
            <ResultCard label="Class 2 NI" value={fmtGBP(class2NI)} sub="£3.45/week" />
            <ResultCard label="Class 4 NI" value={fmtGBP(class4NI)} sub="6% + 2%" />
            <ResultCard label="Total Tax & NI" value={fmtGBP(totalTaxBill)} highlight />
            <ResultCard label="Net Income" value={fmtGBP(netIncome)} sub="After tax & NI" highlight />
            <ResultCard label="Effective Rate" value={effectiveRate.toFixed(1) + "%"} sub="Of total income" />
            <ResultCard label="1st Payment on Account" value={fmtGBP(firstPOA)} sub="Due 31 Jan" />
            <ResultCard label="2nd Payment on Account" value={fmtGBP(secondPOA)} sub="Due 31 Jul" />
            <ResultCard label="Total Due 31 Jan" value={fmtGBP(totalDueJan)} sub="Tax + 1st POA" />
            <ResultCard label="Balancing Payment" value={fmtGBP(secondPOA)} sub="Due 31 Jul" />
          </div>
        }
        seoContent={<SEOContent />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            id="profits"
            label="Self-Employed Profits (£)"
            value={profits}
            onChange={(e) => setProfits(e.target.value)}
            prefix="£"
            placeholder="40000"
            step="100"
            helpText="After allowable expenses"
          />
          <InputField
            id="otherIncome"
            label="Other Income (£)"
            value={otherIncome}
            onChange={(e) => setOtherIncome(e.target.value)}
            prefix="£"
            placeholder="0"
            step="100"
            helpText="Employment, rental, dividends"
          />
          <InputField
            id="pension"
            label="Pension Contributions (£)"
            value={pensionContrib}
            onChange={(e) => setPensionContrib(e.target.value)}
            prefix="£"
            placeholder="0"
            step="100"
            helpText="Relief at source or net pay"
          />
          <div className="flex items-end pb-1">
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Payments on Account are advance payments towards your next tax bill. You pay 50% of your previous year&apos;s tax (minus Class 2 NI) on 31 January and another 50% on 31 July.
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
      <h2>How to Use the Self Assessment Tax Calculator UK</h2>
      <p>
        Filing your Self Assessment tax return can feel overwhelming — especially when you&apos;re trying to work out how much you&apos;ll actually owe HMRC. This calculator gives you an instant, accurate estimate of your total tax bill for the 2025–26 tax year, including Income Tax, Class 2 and Class 4 National Insurance, and Payments on Account.
      </p>
      <p>
        Start by entering your <strong>self-employed profits</strong> — this is your total income from self-employment minus any allowable expenses (not your total revenue). Next, enter any <strong>other income</strong> you have from employment, rental properties, dividends, or savings interest. If you make <strong>pension contributions</strong>, enter the amount — these reduce your taxable income. The calculator instantly shows your tax breakdown: Personal Allowance, Income Tax, Class 2 and Class 4 NI, total tax bill, net income, and your Payments on Account schedule.
      </p>

      <h2>Detailed Self Assessment Formula Breakdown</h2>
      <h3>Income Tax</h3>
      <p>
        Your total income (self-employed profits + other income − pension contributions) minus your Personal Allowance (£12,570) is your taxable income. The same progressive bands apply: 20% on £12,571–£50,270, 40% on £50,271–£125,140, and 45% above £125,140. If your income exceeds £100,000, your Personal Allowance is reduced by £1 for every £2 above the threshold — creating an effective tax rate of up to 60% in the taper zone.
      </p>
      <h3>National Insurance (Self-Employed)</h3>
      <p>
        Self-employed people pay <strong>Class 2 NI</strong> of £3.45 per week (£179.40 per year) if their profits exceed £12,570, and <strong>Class 4 NI</strong> of 6% on profits between £12,570 and £50,270, plus 2% on profits above £50,270. Both are calculated on your self-employed profits only — not on other income sources.
      </p>
      <h3>Payments on Account</h3>
      <p>
        If your tax bill (excluding Class 2 NI) is over £1,000, HMRC expects you to make Payments on Account towards the next year. Each payment is 50% of your previous year&apos;s tax bill (minus certain deductions). The first POA is due by 31 January (alongside the balancing payment for the previous year), and the second by 31 July.
      </p>

      <h2>Real-Life Examples</h2>
      <h3>Example 1 — Sole Trader, £35,000 Profits</h3>
      <p>
        On £35,000 self-employed profits with no other income: Personal Allowance: £12,570. Taxable income: £22,430. Income Tax: £22,430 × 20% = <strong>£4,486</strong>. Class 2 NI: £179. Class 4 NI: 6% of (£35,000 − £12,570) = <strong>£1,346</strong>. Total tax: <strong>£6,011</strong>. Net income: <strong>£28,989</strong>. Payments on Account: two payments of roughly £2,916 each.
      </p>
      <h3>Example 2 — Freelancer with Other Income, £50,000 Total</h3>
      <p>
        £40,000 self-employed profits + £10,000 rental income = £50,000 total. Personal Allowance: £12,570. Taxable: £37,430. Income Tax: £37,430 × 20% = <strong>£7,486</strong>. Class 2 NI: £179. Class 4 NI: 6% of (£40,000 − £12,570) = <strong>£1,646</strong>. Total tax: <strong>£9,311</strong>. Net income: <strong>£40,689</strong>.
      </p>

      <h2>Key Things to Know About Self Assessment in 2025–26</h2>
      <ul>
        <li><strong>Filing deadline:</strong> Your 2025–26 tax return must be filed online by 31 January 2027. Paper returns have an earlier deadline of 31 October 2026.</li>
        <li><strong>Payment deadlines:</strong> Balancing payment for 2025–26 plus first POA for 2026–27 are due by 31 January 2027. Second POA due 31 July 2027.</li>
        <li><strong>Late filing penalty:</strong> £100 immediately if your return is late, with escalating penalties after 3, 6, and 12 months.</li>
        <li><strong>Interest on late payments:</strong> HMRC charges interest on late payments at the Bank of England base rate plus 2.5%.</li>
        <li><strong>MTD for Income Tax:</strong> Making Tax Digital for Income Tax is being phased in from April 2026 for sole traders and landlords with income over £50,000.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: Do I need to file a Self Assessment tax return?</strong><br />
        A: You must file a Self Assessment return if you&apos;re self-employed with profits over £1,000, a partner in a business partnership, or if you have untaxed income over £2,500 from rentals, investments, or foreign income. Check HMRC&apos;s online tool to confirm.
      </p>
      <p>
        <strong>Q: What are Payments on Account?</strong><br />
        A: Payments on Account are advance payments towards your next year&apos;s tax bill. You pay 50% of your previous year&apos;s tax bill (excluding certain deductions) on 31 January and another 50% on 31 July. If your tax bill is under £1,000, you don&apos;t need to make Payments on Account. Use TheMetricApp.com for an instant, accurate result.
      </p>
      <p>
        <strong>Q: How do I reduce my Self Assessment tax bill?</strong><br />
        A: Maximise allowable expenses (office costs, travel, equipment, professional subscriptions), make pension contributions (which reduce your taxable income), use the Marriage Allowance if applicable, and claim all available reliefs including the Trading Allowance (£1,000 tax-free trading income).
      </p>
      <p>
        <strong>Q: What happens if I miss the Self Assessment deadline?</strong><br />
        A: You&apos;ll receive an automatic £100 penalty if your return is up to 3 months late. After 3 months, daily penalties of £10 per day (up to £900) apply. After 6 months, you&apos;ll face an additional £300 or 5% of the tax due (whichever is higher). Late payment interest also accrues from the original deadline.
      </p>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/national-insurance-calculator-uk">National Insurance Calculator UK</a> — Detailed breakdown of Class 1, 2 & 4 NI contributions.</li>
        <li><a href="/calculators/income-tax-calculator-uk">Income Tax Calculator UK</a> — Calculate PAYE and take-home pay for employees.</li>
        <li><a href="/calculators/vat-calculator-uk">VAT Calculator UK</a> — Add or remove 20% VAT instantly for UK businesses.</li>
        <li><a href="/calculators/hourly-to-annual-salary-calculator-uk">Hourly to Annual Salary UK</a> — Convert your hourly rate to annual salary.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Estimate taxes on gig economy and freelance income.</li>
      </ul>
    </>
  );
}

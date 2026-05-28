"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmtGBP = (n) =>
  "£" + Number(n || 0).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("20");
  const [mode, setMode] = useState("add");

  const amt = parseFloat(amount) || 0;
  const vatRate = parseFloat(rate) / 100;

  let netAmount, vatAmount, grossAmount;

  if (mode === "add") {
    netAmount = amt;
    vatAmount = amt * vatRate;
    grossAmount = amt + vatAmount;
  } else {
    grossAmount = amt;
    netAmount = amt / (1 + vatRate);
    vatAmount = grossAmount - netAmount;
  }

  const effectiveRate = grossAmount > 0 ? (vatAmount / grossAmount) * 100 : 0;

  const schemaData = {
    name: "VAT Calculator UK",
    description: "Add or remove 20% VAT instantly. Get net, gross and VAT figures for any amount, accurate for 2025–26 HMRC rules.",
    url: "https://www.themetricapp.com/calculators/vat-calculator-uk",
  };

  return (
    <>
      <CalculatorShell
        title="VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly"
        subtitle="Calculate VAT for any amount in seconds — add VAT to a net price or remove it from a gross figure. Accurate for the 2025–26 UK tax year."
        schemaData={schemaData}
        results={
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ResultCard label={mode === "add" ? "Net Amount" : "Net (Excl. VAT)"} value={fmtGBP(netAmount)} sub={mode === "add" ? "Before VAT" : "Excluding VAT"} />
            <ResultCard label="VAT Amount" value={fmtGBP(vatAmount)} sub={`${rate}% rate`} highlight={vatAmount > 0} />
            <ResultCard label={mode === "remove" ? "Gross Amount" : "Gross (Incl. VAT)"} value={fmtGBP(grossAmount)} sub={mode === "remove" ? "Including VAT" : "After VAT"} />
            <ResultCard label="Effective VAT Rate" value={effectiveRate.toFixed(2) + "%"} sub="Of gross amount" />
          </div>
        }
        seoContent={<SEOContent />}
      >
        <div className="space-y-5">
          <InputField
            id="amount"
            label={mode === "add" ? "Net Amount (£)" : "Gross Amount (£)"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            prefix="£"
            placeholder="100.00"
            step="0.01"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <SelectField
              id="rate"
              label="VAT Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              options={[
                { value: "20", label: "20% (Standard Rate)" },
                { value: "5", label: "5% (Reduced Rate)" },
              ]}
            />
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Calculation Mode</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="add"
                    checked={mode === "add"}
                    onChange={() => setMode("add")}
                    className="accent-[#0D9488]"
                  />
                  <span className="text-sm text-[#0F172A]">Add VAT</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="remove"
                    checked={mode === "remove"}
                    onChange={() => setMode("remove")}
                    className="accent-[#0D9488]"
                  />
                  <span className="text-sm text-[#0F172A]">Remove VAT</span>
                </label>
              </div>
            </div>
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
            <a href="https://www.gov.uk/vat" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              HMRC VAT Guidance
            </a>
            {" · "}
            <a href="https://www.gov.uk/vat-registration-thresholds" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              GOV.UK VAT Thresholds
            </a>
          </span>
        </div>
      </div>

      <h2>How to Use the VAT Calculator UK</h2>
      <p>
        You&apos;ve just invoiced a client for £1,000 and they ask, &quot;Is that including VAT?&quot; Suddenly you&apos;re scrambling to work out the 20% on top. It&apos;s a scenario every sole trader, freelancer, and small business owner in the UK knows well. This calculator is designed to give you an instant, accurate answer every time — whether you&apos;re adding VAT to a quote or removing it from a receipt.
      </p>
      <p>
        Start by entering your <strong>amount</strong>. If you&apos;re quoting a client and need to include VAT, select &quot;Add VAT&quot; and enter your net price. If you&apos;ve received a payment that already includes VAT and you need to find the net figure, select &quot;Remove VAT&quot;. Choose the <strong>VAT rate</strong> — 20% for most goods and services, or 5% for reduced-rate items like domestic fuel and energy-saving materials. The results appear instantly: net amount, VAT amount, gross amount, and the effective VAT rate as a percentage of the gross figure.
      </p>

      <h2>Detailed VAT Formula Breakdown</h2>
      <h3>Adding VAT to a Net Price</h3>
      <p>
        When you need to charge a client the VAT-inclusive price, use this formula: <strong>Gross Amount = Net Amount × (1 + VAT Rate ÷ 100)</strong>. For the standard 20% rate, this simplifies to <strong>Gross = Net × 1.20</strong>. For example, if your consulting fee is £500 net: £500 × 1.20 = <strong>£600 gross</strong>. The VAT portion is £600 − £500 = <strong>£100</strong>.
      </p>
      <h3>Removing VAT from a Gross Price</h3>
      <p>
        When you&apos;ve been paid an amount that includes VAT and need to find the net figure, use: <strong>Net Amount = Gross Amount ÷ (1 + VAT Rate ÷ 100)</strong>. For 20% VAT: <strong>Net = Gross ÷ 1.20</strong>. For example, a client pays you £600 including VAT: £600 ÷ 1.20 = <strong>£500 net</strong>. The VAT portion is £600 − £500 = <strong>£100</strong>.
      </p>
      <h3>Common Pitfall: Using the Wrong Divisor</h3>
      <p>
        Some people mistakenly multiply the gross amount by 0.8 to remove 20% VAT. This gives the wrong answer. <strong>£120 × 0.8 = £96</strong> (incorrect net), but <strong>£120 ÷ 1.20 = £100</strong> (correct net). The 0.8 method would understate your net revenue by £4 on every £120 transaction — errors that compound quickly across many invoices.
      </p>

      <h2>Real-Life Scenarios</h2>
      <h3>Case 1 — Freelancer Quoting a Client</h3>
      <p>
        Sarah is a freelance graphic designer in Manchester. She quotes £800 for a branding project. Her client asks for a VAT-inclusive price. Sarah adds 20% VAT: £800 × 1.20 = <strong>£960</strong>. She invoices £960, of which £160 is VAT that she must remit to HMRC on her next VAT return. Her net revenue remains £800.
      </p>
      <h3>Case 2 — Small Business Reconciling Expenses</h3>
      <p>
        Tom runs a small marketing agency and receives a £2,400 invoice from a software vendor. The invoice states &quot;Including VAT.&quot; Tom needs to know the net cost for his accounts. Using the remove-VAT formula: £2,400 ÷ 1.20 = <strong>£2,000 net</strong>. The £400 VAT is reclaimable as input tax, so the true cost to his business is £2,000.
      </p>
      <h3>Case 3 — E-Commerce Seller Pricing Products</h3>
      <p>
        Emma sells handmade furniture online. She wants to price a dining table at £750 including VAT. She needs to know her net revenue: £750 ÷ 1.20 = <strong>£625</strong>. The £125 is VAT she must charge and later pay to HMRC. This helps Emma set her target margins correctly.
      </p>

      <h2>Key Things to Know About UK VAT in 2025–26</h2>
      <p>
        The UK VAT system has remained stable for the 2025–26 tax year, but there are crucial rules every business should understand:
      </p>
      <ul>
        <li><strong>Standard rate: 20%</strong> — applies to most goods and services including consulting, software, retail, hospitality, and professional services.</li>
        <li><strong>Reduced rate: 5%</strong> — covers domestic fuel and power, children&apos;s car seats, some energy-saving materials, and mobility aids for older people.</li>
        <li><strong>Zero rate: 0%</strong> — applies to most food and drink (excluding restaurant meals and alcohol), children&apos;s clothing and footwear, books and newspapers, and public transport.</li>
        <li><strong>Registration threshold: £90,000</strong> — you must register for VAT if your taxable turnover exceeds £90,000 over a rolling 12-month period.</li>
        <li><strong>Deregistration threshold: £88,000</strong> — you can cancel your registration if turnover falls below this amount and you expect it to stay below.</li>
        <li><strong>Flat Rate Scheme</strong> — available for businesses with turnover under £150,000; you pay a fixed percentage based on your industry sector.</li>
      </ul>
      <p>
        The £90,000 threshold was frozen by the government and remains unchanged from 2024–25. Many tax professionals expect an increase in future years, but for now the rules hold steady. Always check the latest <a href="https://www.gov.uk/vat" className="text-teal-400 underline hover:text-teal-300" target="_blank" rel="noopener noreferrer">HMRC VAT guidance on GOV.UK</a> for official updates.
      </p>

      <h2>Common Mistakes People Make</h2>
      <ul>
        <li><strong>Confusing gross and net when quoting clients.</strong> You quote £1,000 but forget to say &quot;plus VAT&quot; — now you&apos;re eating the £200 yourself. Always state whether prices include or exclude VAT in writing.</li>
        <li><strong>Using the wrong divisor to remove VAT.</strong> Multiplying the gross by 0.8 gives the wrong answer. The correct calculation is <strong>gross ÷ 1.20</strong>.</li>
        <li><strong>Forgetting to check if a supplier is VAT-registered.</strong> If they aren&apos;t, you can&apos;t reclaim the input tax on their invoice. Always verify their VAT number before claiming.</li>
        <li><strong>Not registering on time.</strong> HMRC gives you 30 days from the end of the month in which your turnover exceeds £90,000. Miss the deadline and you could face penalties.</li>
      </ul>

      <h2>Tips to Get the Best Result</h2>
      <p>
        <strong>Use a dedicated VAT calculator UK tool.</strong> Mental maths is fine for single figures, but when you&apos;re processing multiple invoices or quotes, a dedicated tool eliminates human error. TheMetricApp&apos;s VAT calculator handles both adding and removing VAT in one go.
      </p>
      <p>
        <strong>Double-check the rate.</strong> Most transactions are 20%, but if you sell reduced-rate items like domestic fuel or energy-saving materials, make sure you&apos;re using 5% instead. Incorrect rates on invoices can trigger HMRC queries.
      </p>
      <p>
        <strong>Keep a running total of your 12-month turnover.</strong> The £90,000 threshold is based on a rolling 12 months, not the tax year. Many businesses accidentally exceed it mid-year without realising. Set a quarterly reminder to check your total.
      </p>
      <p>
        <strong>Save your calculations.</strong> Each time you use the calculator, note the result in your accounting software or spreadsheet. It creates an audit trail and makes VAT return filing much smoother.
      </p>

      <h2>Data Sources & Methodology</h2>
      <p>
        Our VAT Calculator UK uses the official HMRC VAT rates and thresholds for the 2025–26 tax year. All data is verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>VAT Rates:</strong> Standard (20%), Reduced (5%), and Zero (0%) rates from{" "}
          <a href="https://www.gov.uk/vat" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            HMRC VAT Guidance
          </a>
          .
        </li>
        <li>
          <strong>Registration Threshold:</strong> £90,000 turnover limit confirmed by{" "}
          <a href="https://www.gov.uk/vat-registration-thresholds" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            GOV.UK VAT Thresholds
          </a>
          .
        </li>
        <li>
          <strong>Flat Rate Scheme:</strong> Industry-specific percentages available from{" "}
          <a href="https://www.gov.uk/vat-flat-rate-scheme" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            HMRC Flat Rate Scheme
          </a>
          .
        </li>
        <li>
          <strong>Making Tax Digital:</strong> MTD requirements from{" "}
          <a href="https://www.gov.uk/government/collections/making-tax-digital-for-vat" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            HMRC MTD for VAT
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> To add VAT: Gross = Net × (1 + Rate÷100). For 20%: Gross = Net × 1.20. To remove VAT: Net = Gross ÷ (1 + Rate÷100). For 20%: Net = Gross ÷ 1.20. The effective VAT rate = (VAT Amount ÷ Gross Amount) × 100%. For standard 20% VAT, the effective rate on the gross figure is 16.67% (e.g., £20 VAT ÷ £120 Gross = 16.67%). All results are estimates for informational purposes — always consult a qualified accountant for your specific VAT obligations.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: What is the current VAT rate in the UK for 2025–26?</strong><br />
        A: The standard VAT rate remains 20%. There is also a reduced rate of 5% and a zero rate of 0% for specific goods and services like children&apos;s clothing, most food, and public transport.
      </p>
      <p>
        <strong>Q: How do I calculate VAT on a price?</strong><br />
        A: To add VAT, multiply the net price by 1.20 (for 20% VAT). To remove VAT, divide the gross price by 1.20. For example, £100 net becomes £120 gross; £120 gross splits into £100 net and £20 VAT.
      </p>
      <p>
        <strong>Q: At what turnover do I need to register for VAT?</strong><br />
        A: You must register for VAT when your taxable turnover exceeds £90,000 over a rolling 12-month period. You have 30 days from the end of the month you exceeded the threshold to notify HMRC.
      </p>
      <p>
        <strong>Q: When should I use a 5% VAT rate instead of 20%?</strong><br />
        A: The 5% reduced rate applies to specific items including domestic fuel and power, children&apos;s car seats, some energy-saving materials, and certain mobility aids for older people. Most other goods and services are charged at 20%.
      </p>
      <p>
        <strong>Q: Can I voluntarily register for VAT if my turnover is below £90,000?</strong><br />
        A: Yes, you can register voluntarily. This is often beneficial if you make mostly zero-rated supplies (you can reclaim input VAT) or if you want to appear more established to clients. Use TheMetricApp.com for an instant, accurate result.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed VAT guidance, rates, filing rules, and real-world examples for UK freelancers and small businesses, read our full guide:{" "}
          <a href="/blog/vat-calculator-uk-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            VAT Calculator UK 2026 Guide
          </a>
          . This companion article covers Flat Rate Scheme scenarios, MTD compliance, and industry-specific VAT rules.
        </p>
      </div>

      <h2>Related Calculators</h2>
      <p>
        Check out these other helpful financial tools on TheMetricApp:
      </p>
      <ul>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Calculate self-employment tax and quarterly payments on freelance income.</li>
        <li><a href="/calculators/california-1099-tax-calculator">California 1099 Tax Calculator</a> — Estimate federal and state self-employment taxes for US freelancers.</li>
        <li><a href="/calculators/paypal-fee-calculator">PayPal Fee Calculator</a> — Calculate PayPal fees and net payout for UK and US merchants.</li>
        <li><a href="/calculators/ecommerce-net-profit-margin">E-Commerce Profit Margin Calculator</a> — Calculate net profit after all fees and costs.</li>
      </ul>

      <p className="mt-8 text-sm text-slate-400 italic">
        If you found this calculator useful, consider sharing TheMetricApp.com with friends, colleagues, or on social media. We&apos;re completely free, no sign-up required — just fast, accurate results.
      </p>

      <p className="mt-6">
        <strong>Ready to get your exact VAT figure?</strong> Use the free <a href="/calculators/vat-calculator-uk" className="text-teal-400 underline hover:text-teal-300 font-semibold">VAT Calculator UK at TheMetricApp.com</a> — no registration, no fees, instant answer. Bookmark it for next time.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "VAT Calculator UK",
            url: "https://www.themetricapp.com/calculators/vat-calculator-uk",
            description: "Add or remove 20% VAT instantly. Get net, gross and VAT figures for any amount, accurate for 2025–26 HMRC rules.",
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
              { "@type": "ListItem", position: 2, name: "VAT Calculator UK", item: "https://www.themetricapp.com/calculators/vat-calculator-uk" },
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
                name: "What is the current VAT rate in the UK for 2025–26?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The standard VAT rate remains 20%. There is also a reduced rate of 5% and a zero rate of 0% for specific goods and services like children's clothing, most food, and public transport.",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate VAT on a price?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To add VAT, multiply the net price by 1.20 (for 20% VAT). To remove VAT, divide the gross price by 1.20. For example, £100 net becomes £120 gross; £120 gross splits into £100 net and £20 VAT.",
                },
              },
              {
                "@type": "Question",
                name: "At what turnover do I need to register for VAT?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You must register for VAT when your taxable turnover exceeds £90,000 over a rolling 12-month period. You have 30 days from the end of the month you exceeded the threshold to notify HMRC.",
                },
              },
              {
                "@type": "Question",
                name: "When should I use a 5% VAT rate instead of 20%?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 5% reduced rate applies to specific items including domestic fuel and power, children's car seats, some energy-saving materials, and certain mobility aids for older people. Most other goods and services are charged at 20%.",
                },
              },
              {
                "@type": "Question",
                name: "Can I voluntarily register for VAT if my turnover is below £90,000?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you can register voluntarily. This is often beneficial if you make mostly zero-rated supplies (you can reclaim input VAT) or if you want to appear more established to clients. Use TheMetricApp.com for an instant, accurate result.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}

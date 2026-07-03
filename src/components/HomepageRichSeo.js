import Link from "next/link";

/**
 * Server-rendered rich text for the homepage to improve text-to-HTML ratio.
 */
export default function HomepageRichSeo() {
  const faqs = [
    {
      q: "Are TheMetricApp calculators free to use in the UK?",
      a: "Yes — every calculator on TheMetricApp is completely free with no sign-up, subscription, or hidden charges. You can run unlimited calculations for UK income tax, National Insurance, VAT, salary conversions, mortgages, and self-employment income without creating an account or sharing personal data.",
    },
    {
      q: "Do your UK calculators use current HMRC tax rates?",
      a: "Our UK tools are updated for the 2026/27 tax year, including income tax bands, National Insurance thresholds, VAT at 20%, and the National Living Wage. We review figures when HMRC publishes new rates each autumn, so you can rely on the outputs for budgeting, job offers, and small business planning.",
    },
    {
      q: "Can I use these calculators if I am self-employed or have a side hustle?",
      a: "Absolutely. TheMetricApp includes dedicated tools for self-assessment tax, gig economy net income, side hustle tax, and platform fee comparisons. Whether you drive for Uber, sell on Etsy, or freelance through Upwork, you can estimate tax, National Insurance, and take-home pay before submitting your HMRC Self Assessment return.",
    },
    {
      q: "How accurate are the results from these financial calculators?",
      a: "Results are based on published HMRC and IRS rates and standard formulae used by accountants and payroll software. They are designed for planning and comparison — not as a substitute for professional advice. Complex situations involving pension salary sacrifice, benefits in kind, or multiple income sources may need a qualified adviser.",
    },
  ];

  return (
    <article
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6"
      aria-label="About TheMetricApp financial calculators"
    >
      <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 sm:p-10 shadow-[0_1px_4px_rgba(29,26,51,0.04)] space-y-10">
        <section>
          <h2
            className="text-2xl font-bold text-[#1d1a33] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How to Use TheMetricApp
          </h2>
          <p
            className="text-[#475569] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Choose a calculator from the grid above — for example, the{" "}
            <Link href="/calculators/income-tax-calculator-uk" className="text-[#7c3aed] hover:underline font-medium">
              UK Income Tax Calculator
            </Link>
            ,{" "}
            <Link href="/calculators/hourly-to-annual-salary-calculator-uk" className="text-[#7c3aed] hover:underline font-medium">
              Hourly to Annual Salary Converter
            </Link>
            , or{" "}
            <Link href="/calculators/vat-calculator-uk" className="text-[#7c3aed] hover:underline font-medium">
              VAT Calculator
            </Link>
            . Enter your figures into the input fields and review the instant breakdown. Adjust any value to compare scenarios — such as a higher hourly rate, additional overtime, or a different tax code — without refreshing the page or signing in.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-[#1d1a33] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Are Online Financial Calculators?
          </h2>
          <p
            className="text-[#475569] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Online financial calculators are free tools that apply official tax tables, fee schedules, and
            standard formulae to your own numbers — so you can see take-home pay, tax liability, profit
            margins, or loan repayments in seconds. Unlike spreadsheets, they require no setup: you enter
            your hourly rate, gross income, or sale price and receive a clear breakdown of deductions,
            National Insurance, VAT, and net results. TheMetricApp hosts more than 55 calculators covering
            UK payroll, US self-employment tax, e-commerce fees, mortgages, retirement savings, and
            inflation — all updated for 2026.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-[#1d1a33] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why This Matters in the UK
          </h2>
          <p
            className="text-[#475569] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            With PAYE, Self Assessment, VAT registration, and rising living costs, UK workers and small
            business owners need quick answers before accepting a job offer, setting freelance rates, or
            registering for Making Tax Digital. A £15 hourly rate might sound attractive until you convert
            it to an annual salary and subtract income tax and National Insurance. Our UK-focused tools
            use HMRC bands and thresholds so you can negotiate pay, plan quarterly tax payments, and
            compare employed versus self-employed income with confidence.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-[#1d1a33] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div key={faq.q} className={i > 0 ? "mt-6 pt-6 border-t border-[#e7e5f3]" : ""}>
              <h3
                className="text-base font-semibold text-[#1d1a33] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {faq.q}
              </h3>
              <p
                className="text-[#475569] leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </section>
      </div>
    </article>
  );
}

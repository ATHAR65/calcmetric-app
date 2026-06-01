import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Self Assessment Tax Calculator UK 2026: Complete Guide to Tax Returns, NI & Payments on Account",
  description:
    "Free Self Assessment tax calculator UK guide for 2025–26. Estimate your tax bill, Class 2 & 4 NI, and payments on account. Accurate HMRC rates for sole traders and freelancers.",
  keywords: [
    "self assessment tax calculator uk",
    "self assessment calculator uk",
    "uk self employed tax calculator",
    "self assessment tax return calculator",
    "payments on account",
    "sole trader tax calculator uk",
    "self employed tax calculator 2025-26",
    "hmrc self assessment calculator",
  ],
  openGraph: {
    title: "Self Assessment Tax Calculator UK 2026: Complete Guide to Tax Returns, NI & Payments on Account",
    description:
      "Free Self Assessment tax calculator UK guide for 2025–26. Estimate your tax bill, Class 2 & 4 NI, and payments on account.",
    url: siteUrl + "/blog/self-assessment-tax-calculator-uk-2026",
    siteName: "TheMetricApp",
    type: "article",
    publishedTime: "2026-05-26",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Self Assessment Tax Calculator UK 2026" }],
  },
  alternates: {
    canonical: siteUrl + "/blog/self-assessment-tax-calculator-uk-2026",
  },
  twitter: {
    title: "Self Assessment Tax Calculator UK 2026: Complete Guide to Tax Returns, NI & Payments on Account | TheMetricApp",
  },
};

export default function SelfAssessmentTaxCalculatorUKBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need to file a Self Assessment tax return?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You must file a Self Assessment return if you're self-employed with profits over £1,000, a partner in a business partnership, or if you have untaxed income over £2,500 from rentals, investments, or foreign income. Check HMRC's online tool to confirm.",
        },
      },
      {
        "@type": "Question",
        name: "What are Payments on Account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payments on Account are advance payments towards your next year's tax bill. You pay 50% of your previous year's tax bill (excluding certain deductions) on 31 January and another 50% on 31 July. If your tax bill is under £1,000, you don't need to make Payments on Account.",
        },
      },
      {
        "@type": "Question",
        name: "How do I reduce my Self Assessment tax bill?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maximise allowable expenses (office costs, travel, equipment, professional subscriptions), make pension contributions (which reduce your taxable income), use the Marriage Allowance if applicable, and claim all available reliefs including the Trading Allowance (£1,000 tax-free trading income).",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I miss the Self Assessment deadline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You'll receive an automatic £100 penalty if your return is up to 3 months late. After 3 months, daily penalties of £10 per day (up to £900) apply. After 6 months, you'll face an additional £300 or 5% of the tax due (whichever is higher). Late payment interest also accrues.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Self Assessment filing deadline for 2025–26?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your 2025–26 tax return must be filed online by 31 January 2027. Paper returns have an earlier deadline of 31 October 2026. The balancing payment for 2025–26 plus the first Payment on Account for 2026–27 are also due by 31 January 2027.",
        },
      },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Self Assessment Tax Calculator UK 2026: Complete Guide to Tax Returns, NI & Payments on Account",
    description:
      "Free Self Assessment tax calculator UK guide for 2025–26. Estimate your tax bill, Class 2 & 4 NI, and payments on account.",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    author: { "@type": "Organization", name: "TheMetricApp Team" },
    publisher: { "@type": "Organization", name: "TheMetricApp", logo: { "@type": "ImageObject", url: "https://www.themetricapp.com/themetric-logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.themetricapp.com/blog/self-assessment-tax-calculator-uk-2026" },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.themetricapp.com/blog" },
      { "@type": "ListItem", position: 3, name: "Self Assessment Tax Calculator UK 2026", item: "https://www.themetricapp.com/blog/self-assessment-tax-calculator-uk-2026" },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />
      <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[#64748B]">Self Assessment Tax Calculator UK 2026</span>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Tax Tools</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">May 2026</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">10 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Self Assessment Tax Calculator UK 2026: Complete Guide to Tax Returns, NI &amp; Payments on Account
        </h1>
        <p className="text-lg text-[#64748B] leading-relaxed">
          Estimate your Self Assessment tax bill for the 2025–26 tax year. Includes Income Tax,
          Class 2 &amp; Class 4 National Insurance, and Payments on Account for sole traders and
          freelancers. Real examples and expert tax-saving strategies.
        </p>
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#E2E8F0] text-sm text-[#94A3B8]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold text-xs">M</div>
          <div><p className="font-medium text-[#0F172A]">TheMetricApp Team</p><p>Last Updated: May 26, 2026</p></div>
        </div>
      </header>
      <div className="prose prose-slate max-w-none prose-headings:text-[#0F172A] prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#475569] prose-p:leading-relaxed prose-a:text-[#6366F1] prose-a:font-medium hover:prose-a:text-[#4F46E5] prose-strong:text-[#0F172A] prose-ul:text-[#475569] prose-ol:text-[#475569] prose-li:leading-relaxed">
        <h2>Introduction</h2>
        <p>
          Filing your Self Assessment tax return is one of those annual tasks that every sole trader
          and freelancer dreads. It is not just the paperwork — it is the uncertainty of not knowing
          how much you will owe HMRC until you sit down and crunch the numbers. Will you have enough
          set aside? Will you need to make Payments on Account? Have you claimed all the expenses
          and reliefs you are entitled to?
        </p>
        <p>
          These questions keep thousands of self-employed people up at night, especially as the
          31 January deadline approaches. The reality is that a typical sole trader with £35,000 in
          profits will owe roughly £6,000 in Income Tax and National Insurance — and if they haven&apos;t
          been setting money aside all year, that bill can be a devastating shock.
        </p>
        <p>
          That is why we built the{' '}
          <Link href="/calculators/self-assessment-tax-calculator-uk">
            <strong>Self Assessment Tax Calculator UK</strong>
          </Link>
          . This tool gives you an instant, accurate estimate of your total tax bill for the
          2025–26 tax year, including Income Tax, Class 2 and Class 4 National Insurance, and
          your Payments on Account schedule.
        </p>
        <p>
          This guide walks you through exactly how to use the calculator, explains every formula,
          and gives you real-world examples and expert strategies to reduce your tax bill.
        </p>

        <h2>How to Use This Calculator</h2>
        <p>
          The{' '}
          <Link href="/calculators/self-assessment-tax-calculator-uk">
            <strong>Self Assessment Tax Calculator UK</strong>
          </Link>{' '}
          is designed to be comprehensive but simple. Here is exactly how to use it:
        </p>
        <ol>
          <li><strong>Enter Your Self-Employed Profits</strong> — This is your total income from self-employment minus any allowable expenses (not your total revenue).</li>
          <li><strong>Enter Other Income (Optional)</strong> — Add any other income from employment, rental properties, dividends, or savings interest.</li>
          <li><strong>Enter Pension Contributions (Optional)</strong> — These reduce your taxable income and your overall tax bill.</li>
          <li><strong>Read Your Results</strong> — The calculator instantly shows your Personal Allowance, Income Tax, Class 2 and Class 4 NI, total tax bill, net income, effective tax rate, and your Payments on Account schedule.</li>
        </ol>
        <p>
          Pair this with our{' '}
          <Link href="/calculators/national-insurance-calculator-uk"><strong>National Insurance Calculator UK</strong></Link>{' '}
          for a detailed NI breakdown, or{' '}
          <Link href="/calculators/income-tax-calculator-uk"><strong>Income Tax Calculator UK</strong></Link>{' '}
          if you also have employment income.
        </p>

        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white text-2xl">📊</div>
            <div>
              <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
              <p className="text-sm text-[#64748B] mb-3">Enter your profits and other income to see your complete Self Assessment tax bill in seconds.</p>
              <Link href="/calculators/self-assessment-tax-calculator-uk"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors shadow-sm">
                Open Self Assessment Tax Calculator UK
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <h2>Complete Self Assessment Formula Breakdown</h2>

        <h3>Step 1: Calculate Total Income</h3>
        <p><strong>Total Income = Self-Employed Profits + Other Income − Pension Contributions</strong></p>
        <p><strong>Example:</strong> £40,000 profits + £5,000 rental income − £3,000 pension = <strong>£42,000</strong></p>

        <h3>Step 2: Apply Personal Allowance</h3>
        <p>The standard Personal Allowance for 2025–26 is <strong>£12,570</strong>. However, if your total income exceeds £100,000, your allowance is reduced by £1 for every £2 above the threshold. At £125,140 or above, your Personal Allowance is £0.</p>
        <p><strong>Example:</strong> On £42,000 total income: Personal Allowance = £12,570. Taxable income = £42,000 − £12,570 = <strong>£29,430</strong>.</p>

        <h3>Step 3: Calculate Income Tax</h3>
        <p>The 2025–26 Income Tax bands are:</p>
        <ul>
          <li><strong>Basic rate (20%):</strong> £12,571 – £50,270</li>
          <li><strong>Higher rate (40%):</strong> £50,271 – £125,140</li>
          <li><strong>Additional rate (45%):</strong> Above £125,140</li>
        </ul>
        <p><strong>Example:</strong> On £42,000: Taxable income £29,430 × 20% = <strong>£5,886</strong> in Income Tax.</p>

        <h3>Step 4: Calculate National Insurance</h3>
        <p><strong>Class 2 NI:</strong> £3.45 × 52 = <strong>£179</strong> (if profits exceed £12,570)</p>
        <p><strong>Class 4 NI:</strong> 6% on profits between £12,570 and £50,270, 2% above</p>
        <p><strong>Example:</strong> On £40,000 profits: Class 4 = 6% of (£40,000 − £12,570) = <strong>£1,646</strong></p>

        <h3>Step 5: Calculate Payments on Account</h3>
        <p>If your total tax bill (minus Class 2 NI) exceeds £1,000, you must make Payments on Account. Each payment is 50% of your previous year&apos;s tax bill (minus certain deductions).</p>
        <p><strong>Example:</strong> Total tax = £5,886 + £179 + £1,646 = £7,711. POA base = £7,711 − £179 = £7,532. First POA = £7,532 × 50% = <strong>£3,766</strong> (due 31 Jan). Second POA = <strong>£3,766</strong> (due 31 Jul). Total due 31 Jan: £7,711 + £3,766 = <strong>£11,477</strong>.</p>

        <h2>Real-Life Examples</h2>
        <h3>Scenario 1 — Sole Trader, £35,000 Profits</h3>
        <p>Personal Allowance: £12,570. Taxable: £22,430. Income Tax: <strong>£4,486</strong>. Class 2 NI: £179. Class 4 NI: 6% of (£35,000 − £12,570) = <strong>£1,346</strong>. Total tax: <strong>£6,011</strong>. Net income: <strong>£28,989</strong>. Effective rate: 17.2%.</p>

        <h3>Scenario 2 — Freelancer with Rental Income, £50,000 Total</h3>
        <p>£40,000 profits + £10,000 rental income = £50,000. Personal Allowance: £12,570. Taxable: £37,430. Income Tax: <strong>£7,486</strong>. Class 2 NI: £179. Class 4 NI: 6% of (£40,000 − £12,570) = <strong>£1,646</strong>. Total tax: <strong>£9,311</strong>. Net: <strong>£40,689</strong>.</p>

        <h3>Scenario 3 — Higher Earner, £80,000 Profits</h3>
        <p>Personal Allowance: £12,570 (tapered: £80k − £100k = no taper yet, full allowance applies). Taxable: £67,430. Income Tax: 20% on £37,700 = £7,540, 40% on £29,730 = £11,892. Total Income Tax: <strong>£19,432</strong>. Class 2: £179. Class 4: 6% on £37,700 = £2,262, 2% on £29,730 = £595. Total Class 4: <strong>£2,857</strong>. Total tax: <strong>£22,468</strong>. Net: <strong>£57,532</strong>.</p>

        <h2>Key Things to Know About Self Assessment in 2025–26</h2>
        <ul>
          <li><strong>Filing deadline:</strong> 31 January 2027 for online returns. Paper returns by 31 October 2026.</li>
          <li><strong>Late penalties:</strong> £100 immediately, then escalating penalties after 3, 6, and 12 months.</li>
          <li><strong>Payment deadlines:</strong> Balancing payment + first POA due 31 Jan 2027. Second POA due 31 July 2027.</li>
          <li><strong>MTD for Income Tax:</strong> Making Tax Digital is being phased in from April 2026 for sole traders with income over £50,000.</li>
          <li><strong>Interest on late payments:</strong> HMRC charges interest at the Bank of England base rate plus 2.5%.</li>
        </ul>

        <h2>Tips to Reduce Your Self Assessment Tax Bill</h2>
        <ol>
          <li><strong>Maximise allowable expenses:</strong> Claim every legitimate business expense — office costs, travel, equipment, professional subscriptions, and use of home as office.</li>
          <li><strong>Make pension contributions:</strong> Pension contributions reduce your taxable income. A £5,000 pension contribution on £45,000 profits saves you £1,000 in Income Tax and £300 in Class 4 NI.</li>
          <li><strong>Use the Trading Allowance:</strong> If your self-employed income is under £1,000, you don&apos;t need to register or file a return (it is covered by the trading allowance).</li>
          <li><strong>Claim the Marriage Allowance:</strong> If your income is under £50,270 and your partner&apos;s income is under £12,570, you can transfer 10% of their unused Personal Allowance to you.</li>
          <li><strong>Use tax-efficient investments:</strong> ISAs, EIS, SEIS, and VCT investments can reduce your tax bill while growing your wealth.</li>
        </ol>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-8">
          {[
            { q: "Do I need to file a Self Assessment tax return?", a: "You must file if you're self-employed with profits over £1,000, a partner in a business partnership, or have untaxed income over £2,500 from rentals, investments, or foreign income." },
            { q: "What are Payments on Account?", a: "Advance payments towards your next year's tax bill. You pay 50% of your previous year's tax bill on 31 January and another 50% on 31 July. If your tax bill is under £1,000, you don't need to make them." },
            { q: "How do I reduce my Self Assessment tax bill?", a: "Maximise allowable expenses, make pension contributions, use the Trading Allowance, claim Marriage Allowance, and invest through tax-efficient vehicles." },
            { q: "What happens if I miss the Self Assessment deadline?", a: "Automatic £100 penalty if up to 3 months late. After 3 months: £10/day penalties (up to £900). After 6 months: additional £300 or 5% of tax due. Late payment interest also accrues." },
            { q: "What is the Self Assessment filing deadline for 2025–26?", a: "31 January 2027 for online returns. Paper returns by 31 October 2026. The balancing payment plus first POA are also due by 31 January 2027." },
          ].map((faq, i) => (
            <details key={i} className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all duration-200 hover:border-[#6366F1]/30">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#0F172A] hover:text-[#6366F1] transition-colors list-none">
                <span>{faq.q}</span>
                <svg className="h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-5 pb-4 pt-1 text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9]">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>Conclusion</h2>
        <p>
          Filing your Self Assessment return doesn&apos;t have to be stressful. Our{' '}
          <Link href="/calculators/self-assessment-tax-calculator-uk">
            <strong>Self Assessment Tax Calculator UK</strong>
          </Link>{' '}
          gives you an instant, accurate estimate of your tax bill so you can plan ahead and avoid
          surprises.
        </p>
        <p><strong>Your next steps:</strong></p>
        <ol>
          <li>Open the <Link href="/calculators/self-assessment-tax-calculator-uk"><strong>Self Assessment Tax Calculator UK</strong></Link> and run your numbers right now.</li>
          <li>Set aside the estimated tax in a separate savings account so you are ready when the bill arrives.</li>
          <li>Check your NI with our <Link href="/calculators/national-insurance-calculator-uk"><strong>National Insurance Calculator UK</strong></Link>.</li>
          <li>If you also have employment income, use the <Link href="/calculators/income-tax-calculator-uk"><strong>Income Tax Calculator UK</strong></Link> for your PAYE position.</li>
        </ol>
      </div>

      <section className="mt-16 pt-10 border-t border-[#E2E8F0]">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Pinterest-Style Image Ideas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { prompt: "Infographic 'Self Assessment 2025-26 UK'. Step-by-step: 1) Calculate profits 2) Add other income 3) Apply Personal Allowance £12,570 4) Pay 20%/40%/45% tax 5) Add Class 2 & 4 NI 6) Payments on Account. Teal and white. Pinterest pin.", label: "Self Assessment Steps" },
            { prompt: "Calendar showing key Self Assessment dates: 31 Oct 2026 paper deadline, 31 Jan 2027 online + payment deadline, 31 Jul 2027 second POA. Modern flat calendar design. Pinterest vertical pin.", label: "Key Dates Calendar" },
            { prompt: "Bold text on UK flag: '5 Ways to Reduce Your Self Assessment Tax Bill'. Expenses, pension, trading allowance, marriage allowance, tax-efficient investments. Teal and navy. Pinterest vertical pin.", label: "5 Ways to Reduce Tax" },
          ].map((image, i) => (
            <div key={i} className="rounded-xl border border-[#E2E8F0] bg-white p-4 hover:shadow-lg hover:border-[#6366F1]/20 transition-all duration-200">
              <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#EEF2FF] to-white border border-[#E2E8F0] flex items-center justify-center mb-3">
                <div className="text-center px-3">
                  <div className="text-3xl mb-2">{["📋", "📅", "💡"][i]}</div>
                  <p className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">Image Suggestion {i + 1}</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#0F172A] mb-1.5">{image.label}</p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{image.prompt}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold">M</div>
          <div>
            <p className="font-bold text-[#0F172A] mb-1">TheMetricApp Team</p>
            <p className="text-sm text-[#64748B] leading-relaxed">TheMetricApp provides free, accurate financial calculators for workers, freelancers, and business owners in the US and UK.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

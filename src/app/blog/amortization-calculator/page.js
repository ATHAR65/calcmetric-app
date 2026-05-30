import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Free Amortization Schedule Calculator 2026: See Every Payment, Interest & Principal Breakdown",
  description:
    "Free amortization schedule calculator for 2026. Generate a complete payment schedule showing principal vs interest for any loan. Compare different loan terms and see how extra payments save thousands in interest.",
  keywords: [
    "amortization calculator",
    "amortization schedule",
    "loan amortization calculator",
    "mortgage amortization",
    "amortization table",
    "principal vs interest calculator",
    "extra payment calculator",
    "loan repayment schedule",
    "mortgage amortization schedule",
    "car loan amortization",
    "loan interest calculator",
    "amortization formula",
  ],
  alternates: {
    canonical: `${siteUrl}/blog/amortization-calculator`,
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "TheMetricApp",
    title: "Free Amortization Schedule Calculator 2026: See Every Payment | TheMetricApp",
    description:
      "Free amortization schedule calculator. Generate a complete payment schedule showing principal vs interest for any loan.",
    url: "https://www.themetricapp.com/blog/amortization-calculator",
    publishedTime: "2026-05-30",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Free Amortization Schedule Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Amortization Schedule Calculator 2026 | TheMetricApp",
    description:
      "Free amortization schedule calculator. See every payment's principal vs interest breakdown.",
  },
};

export default function BlogPost() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an amortization schedule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An amortization schedule is a complete table showing every loan payment over the life of a loan. Each row shows the payment number, total payment amount, how much goes to principal, how much goes to interest, and the remaining loan balance. It shows you exactly how your loan is being paid off over time. In the early years, most of your payment goes to interest. In later years, most goes to principal.",
        },
      },
      {
        "@type": "Question",
        name: "How does amortization work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amortization works through a mathematical formula that calculates a fixed monthly payment that will pay off the loan over the specified term. Each month: (1) Interest is calculated on the current outstanding balance, (2) The remaining portion of your payment reduces the principal. Early in the loan, the balance is high so most of the payment goes to interest. As the balance decreases, more of your payment goes to principal — this is called the amortization curve.",
        },
      },
      {
        "@type": "Question",
        name: "How do extra payments affect amortization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Extra payments directly reduce the principal balance, which means less interest accrues in future months. This creates a snowball effect — paying extra early in the loan saves the most interest. For example, on a $300,000, 30-year mortgage at 6.5%: one extra payment of $100/month saves $40,688 in interest and pays off the loan 4.5 years early. Two extra payments of $200/month saves $63,704 and pays it off 7.6 years early.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the difference between amortizing and non-amortizing loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amortizing loans (mortgages, car loans, personal loans) have regular payments that gradually pay down both principal and interest over time. The loan is fully paid off by the end of the term. Non-amortizing loans (interest-only, balloon loans) have payments that only cover interest for a period, with the full principal due at the end. Interest-only loans have lower payments initially but require a large lump sum at maturity.",
        },
      },
      {
        "@type": "Question",
        "name": "How can I pay off my loan faster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Strategies to pay off loans faster: (1) Make biweekly payments instead of monthly — 26 half-payments = 13 full payments per year instead of 12. (2) Round up your payment to the nearest $50 or $100. (3) Make one extra payment per year. (4) Apply windfalls (bonuses, tax refunds, gifts) directly to principal. (5) Refinance to a shorter term if rates have dropped. Use our amortization calculator to see the impact of each strategy.",
        },
      },
      {
        "@type": "Question",
        name: "What is the amortization formula?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The monthly payment is calculated as: M = P × [r(1+r)^n] / [(1+r)^n − 1], where M is monthly payment, P is loan amount, r is monthly interest rate (annual rate/12), and n is total number of payments (years × 12). The amortization schedule then calculates each month: Interest payment = Current Balance × r. Principal payment = M − Interest payment. New Balance = Current Balance − Principal payment.",
        },
      },
      {
        "@type": "Question",
        name: "What types of loans use amortization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most consumer loans use amortization: fixed-rate mortgages, adjustable-rate mortgages (after initial period), car loans, auto loans, personal loans, student loans (standard repayment), business loans, and equipment financing. Credit cards do NOT use amortization — they use revolving credit with minimum payments. Interest-only loans and balloon mortgages are the main exceptions that don't fully amortize.",
        },
      },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Free Amortization Schedule Calculator 2026: See Every Payment, Interest & Principal Breakdown",
    description:
      "Free amortization schedule calculator for 2026. Generate a complete payment schedule showing principal vs interest for any loan.",
    datePublished: "2026-05-30",
    dateModified: "2026-05-30",
    author: { "@type": "Organization", name: "TheMetricApp Team" },
    publisher: { "@type": "Organization", name: "TheMetricApp", logo: { "@type": "ImageObject", url: "https://themetricapp.com/logo.svg" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://themetricapp.com/blog/amortization-calculator" },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://themetricapp.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://themetricapp.com/blog" },
      { "@type": "ListItem", position: 3, name: "Amortization Calculator", item: "https://themetricapp.com/blog/amortization-calculator" },
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
        <span className="text-[#64748B]">Amortization Calculator</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Loans & Mortgages</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">May 2026</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">11 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Free Amortization Schedule Calculator 2026: See Every Payment, Interest & Principal Breakdown
        </h1>
        <p className="text-lg text-[#64748B] leading-relaxed">
          Amortization is the process of paying off a loan through regular payments over time. Understanding how each payment splits between principal and interest is essential for making smart borrowing decisions and saving thousands in interest.
        </p>
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#E2E8F0] text-sm text-[#94A3B8]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold text-xs">M</div>
          <div>
            <p className="font-medium text-[#0F172A]">TheMetricApp Team</p>
            <p>Last Updated: May 30, 2026</p>
          </div>
        </div>
      </header>

      <div className="prose prose-slate max-w-none prose-headings:text-[#0F172A] prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#475569] prose-p:leading-relaxed prose-a:text-[#6366F1] prose-a:font-medium hover:prose-a:text-[#4F46E5] prose-strong:text-[#0F172A] prose-ul:text-[#475569] prose-ol:text-[#475569] prose-li:leading-relaxed">
        <h2>Introduction</h2>
        <p>
          Every loan is built on the same principle: you borrow money now and pay it back over time with interest. But how much of each payment goes to interest versus principal? That's where an <strong>amortization schedule</strong> comes in.
        </p>
        <p>
          Our <Link href="/calculators/amortization-calculator"><strong>Amortization Schedule Calculator</strong></Link> generates a complete payment-by-payment breakdown for any loan. Enter the loan amount, interest rate, and term — and see exactly how every dollar is allocated over the life of the loan. Want to see the impact of extra payments? The calculator shows you how much interest you save and how early you'll be debt-free.
        </p>

        <h2>How to Use the Amortization Calculator</h2>
        <p>
          The <Link href="/calculators/amortization-calculator"><strong>Amortization Schedule Calculator</strong></Link> is powerful yet simple:
        </p>
        <ol>
          <li><strong>Loan Amount</strong> — The total amount you're borrowing.</li>
          <li><strong>Interest Rate</strong> — The annual interest rate on your loan.</li>
          <li><strong>Loan Term</strong> — How long you have to repay the loan (in years).</li>
          <li><strong>Start Date</strong> — When your loan begins.</li>
          <li><strong>Extra Payment (Optional)</strong> — Any additional amount you want to pay each month toward principal.</li>
        </ol>
        <p>
          Results include your monthly payment, total interest paid, a complete year-by-year amortization schedule, and a visual breakdown of principal vs interest over time.
        </p>

        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white text-2xl">📊</div>
            <div>
              <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Amortization Calculator Now</p>
              <p className="text-sm text-[#64748B] mb-3">Generate a complete payment schedule with principal vs interest breakdown.</p>
              <Link href="/calculators/amortization-calculator" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors shadow-sm">
                Open Amortization Calculator
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <h2>Amortization Formula</h2>
        <h3>Monthly Payment</h3>
        <p><strong>M = P × [r(1+r)^n] / [(1+r)^n − 1]</strong></p>
        <p>Where:</p>
        <ul>
          <li><strong>M</strong> = Monthly payment</li>
          <li><strong>P</strong> = Loan principal</li>
          <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12)</li>
          <li><strong>n</strong> = Total number of payments (years × 12)</li>
        </ul>

        <h3>Each Payment Calculation</h3>
        <ul>
          <li><strong>Interest Payment</strong> = Current Balance × r</li>
          <li><strong>Principal Payment</strong> = M − Interest Payment</li>
          <li><strong>New Balance</strong> = Current Balance − Principal Payment</li>
        </ul>

        <h3>Example — $300,000 Mortgage at 6.5% for 30 Years</h3>
        <ul>
          <li>Monthly payment: <strong>$1,896</strong></li>
          <li><strong>Year 1:</strong> Payment #1: $1,625 interest + $271 principal. Balance: $299,729</li>
          <li><strong>Year 5:</strong> Payment #60: $1,567 interest + $329 principal. Balance: $282,761</li>
          <li><strong>Year 15:</strong> Payment #180: $1,299 interest + $597 principal. Balance: $234,141</li>
          <li><strong>Year 25:</strong> Payment #300: $759 interest + $1,137 principal. Balance: $136,013</li>
          <li><strong>Year 30:</strong> Payment #360: $10 interest + $1,886 principal. Balance: $0</li>
          <li><strong>Total interest paid over 30 years: $382,633</strong></li>
        </ul>

        <h2>The Power of Extra Payments</h2>
        <p>Adding just a small amount to your monthly payment can dramatically reduce your total interest and payoff time:</p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-[#E2E8F0]">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Extra Monthly</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Total Interest Paid</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Interest Saved</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Payoff Time</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Years Saved</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">$0</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$382,633</td>
                <td className="border border-[#E2E8F0] px-4 py-3">—</td>
                <td className="border border-[#E2E8F0] px-4 py-3">30 years</td>
                <td className="border border-[#E2E8F0] px-4 py-3">—</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">$50</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$313,507</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$69,126</td>
                <td className="border border-[#E2E8F0] px-4 py-3">25.8 years</td>
                <td className="border border-[#E2E8F0] px-4 py-3">4.2 years</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">$100</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$263,557</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$119,076</td>
                <td className="border border-[#E2E8F0] px-4 py-3">22.7 years</td>
                <td className="border border-[#E2E8F0] px-4 py-3">7.3 years</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">$200</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$197,343</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$185,290</td>
                <td className="border border-[#E2E8F0] px-4 py-3">17.7 years</td>
                <td className="border border-[#E2E8F0] px-4 py-3">12.3 years</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">$500</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$103,509</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$279,124</td>
                <td className="border border-[#E2E8F0] px-4 py-3">10.6 years</td>
                <td className="border border-[#E2E8F0] px-4 py-3">19.4 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Real-Life Scenarios</h2>

        <h3>Scenario 1: Car Loan ($35,000 at 6% for 5 Years)</h3>
        <ul>
          <li>Monthly payment: <strong>$677</strong></li>
          <li>Total interest: <strong>$5,581</strong></li>
          <li>With $50 extra/month: save $676 in interest, pay off 4 months early</li>
          <li>With $100 extra/month: save $1,182 in interest, pay off 8 months early</li>
        </ul>

        <h3>Scenario 2: Student Loans ($45,000 at 5% for 10 Years)</h3>
        <ul>
          <li>Monthly payment: <strong>$477</strong></li>
          <li>Total interest: <strong>$12,283</strong></li>
          <li>With $50 extra/month: save $2,724 in interest, pay off 1.8 years early</li>
          <li>Refinance to 3.5%: monthly $445, total interest $8,398 — save $3,885</li>
        </ul>

        <h3>Scenario 3: Mortgage with Biweekly Payments</h3>
        <p><strong>$350,000 at 6.75% for 30 years</strong></p>
        <ul>
          <li>Standard monthly payment: <strong>$2,270</strong></li>
          <li>Biweekly payment: <strong>$1,135</strong> every 2 weeks (26 payments = 13 months/year)</li>
          <li>Result: 1 extra full payment per year</li>
          <li>Total interest with standard: <strong>$467,214</strong></li>
          <li>Total interest with biweekly: <strong>$363,634</strong></li>
          <li><strong>Interest saved: $103,580</strong></li>
          <li>Loan paid off in <strong>24.5 years</strong> instead of 30</li>
        </ul>

        <h2>Types of Amortization</h2>
        <ul>
          <li><strong>Full Amortization:</strong> Regular payments that pay off the loan completely by the end of the term. Standard for mortgages, car loans, personal loans.</li>
          <li><strong>Partial Amortization:</strong> Payments cover interest and some principal, but a balloon payment is due at the end. Common in commercial real estate.</li>
          <li><strong>Negative Amortization:</strong> Payments don't cover the interest due, so the loan balance increases over time. Risky — avoid if possible.</li>
          <li><strong>Interest-Only:</strong> Payments only cover interest for a set period (typically 5-10 years), then fully amortize for the remaining term.</li>
        </ul>

        <h2>7 Tips for Using Amortization to Your Advantage</h2>
        <ol>
          <li><strong>Make biweekly payments.</strong> Pay half your monthly payment every 2 weeks. This results in 13 full payments per year instead of 12 — shaving years off your loan.</li>
          <li><strong>Round up your payment.</strong> If your payment is $1,896, round to $2,000. The extra $104/month goes directly to principal and saves thousands.</li>
          <li><strong>Apply windfalls to principal.</strong> Tax refunds, bonuses, and gifts should go directly to your loan principal. Use our calculator to see the impact.</li>
          <li><strong>Refinance when rates drop.</strong> A 1% rate reduction on a $300,000 mortgage saves $187/month and $67,000+ in interest over 30 years.</li>
          <li><strong>Choose a shorter term if affordable.</strong> A 15-year mortgage typically has a 0.5-1% lower rate than a 30-year and saves hundreds of thousands in interest.</li>
          <li><strong>Understand the early years.</strong> On a 30-year mortgage, in year 1 you pay ~90% interest and only ~10% principal. Don't be discouraged — this is normal amortization.</li>
          <li><strong>Use our calculator before refinancing.</strong> Compare your current amortization schedule with a proposed new loan to see the true break-even point.</li>
        </ol>
        
        <p>
          Use the Amortization Calculator alongside our{' '}
          <Link href="/calculators/mortgage-calculator-us"><strong>Mortgage Calculator</strong></Link>{' '}
          for home loans, or the{' '}
          <Link href="/calculators/loan-comparison-calculator"><strong>Loan Comparison Calculator</strong></Link>{' '}
          to compare different loan options side-by-side.
        </p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-8">
          {[
            { q: "What is an amortization schedule?", a: "A complete table showing every payment on a loan: payment number, amount, principal portion, interest portion, and remaining balance. Shows how your loan is paid off over time." },
            { q: "How does amortization work?", a: "Each month, interest is calculated on the current balance. The rest of your payment goes to principal. Early on, most goes to interest. Later, most goes to principal." },
            { q: "How do extra payments affect amortization?", a: "Extra payments directly reduce principal, reducing future interest. On a $300k loan at 6.5%: $100/month extra saves $119k in interest and pays off 7.3 years early." },
            { q: "What's the difference between amortizing and non-amortizing loans?", a: "Amortizing: regular payments pay down both principal and interest, fully repaid at term end. Non-amortizing: interest-only or balloon payments where principal is due as a lump sum." },
            { q: "How can I pay off my loan faster?", a: "Biweekly payments (13 payments/year), round up payments, apply windfalls to principal, refinance to shorter term. Use our calculator to see exactly how much each strategy saves." },
            { q: "What is the amortization formula?", a: "M = P × [r(1+r)^n] / [(1+r)^n − 1]. P = loan amount, r = monthly rate, n = total payments. Then each month: interest = balance × r, principal = M − interest." },
            { q: "What types of loans use amortization?", a: "Mortgages, car loans, personal loans, student loans (standard), business loans. Credit cards do NOT use amortization — they use revolving credit." },
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
          An amortization schedule is the most transparent way to understand your loan. It shows exactly where your money goes each month and empowers you to make strategic decisions — like adding extra payments or refinancing — that save thousands. Our <Link href="/calculators/amortization-calculator"><strong>Amortization Schedule Calculator</strong></Link> puts this power in your hands.
        </p>
        <ol>
          <li>Use our <Link href="/calculators/amortization-calculator"><strong>Amortization Calculator</strong></Link> to see your complete payment schedule.</li>
          <li>Experiment with extra payments to see how much interest you can save.</li>
          <li>If rates have dropped since you took out your loan, compare refinancing options.</li>
          <li>Set up automatic extra payments to accelerate your payoff — even $50/month makes a difference.</li>
        </ol>
      </div>

      <section className="mt-16 pt-10 border-t border-[#E2E8F0]">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Pinterest-Style Image Ideas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { prompt: "Amortization schedule breakdown: Early payments (mostly interest) vs late payments (mostly principal). Visual pie charts showing the shift over time. 1000x1500px.", label: "Amortization Curve" },
            { prompt: "Extra payment power: $0 extra vs $100 extra vs $200 extra on $300k loan. Dramatic comparison of interest savings. 1000x1500px.", label: "Extra Payment Power" },
            { prompt: "Biweekly vs monthly mortgage payments: How biweekly saves $103k in interest. Side-by-side comparison. 1000x1500px.", label: "Biweekly Savings" },
            { prompt: "Amortization formula visual: M = P[r(1+r)^n]/[(1+r)^n-1]. Clean formula breakdown with labeled components. 1000x1500px.", label: "Amortization Formula" },
            { prompt: "Loan types comparison: Full amortization, Interest-only, Balloon, Negative amortization. Visual showing balance over time. 1000x1500px.", label: "Loan Types" },
            { prompt: "7 ways to pay off your loan faster: Biweekly, Round up, Windfalls, Refinance, Shorter term. Actionable tips list. 1000x1500px.", label: "Pay Off Faster" },
          ].map((image, i) => (
            <div key={i} className="rounded-xl border border-[#E2E8F0] bg-white p-4 hover:shadow-lg hover:border-[#6366F1]/20 transition-all duration-200">
              <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#EEF2FF] to-white border border-[#E2E8F0] flex items-center justify-center mb-3">
                <div className="text-center px-3">
                  <div className="text-3xl mb-2">{["📊", "💰", "📅", "📝", "🏦", "✅"][i]}</div>
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
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white text-xl font-bold">📊</div>
          <div>
            <p className="font-bold text-[#0F172A] mb-2">Data Sources & Methodology</p>
            <ul className="text-sm text-[#64748B] leading-relaxed space-y-1 list-disc list-inside">
              <li><a href="https://www.investopedia.com/terms/a/amortization.asp" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Investopedia — Amortization Definition</a></li>
              <li><a href="https://www.consumerfinance.gov/ask-cfpb/what-is-amortization-en-294/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">CFPB — What is Amortization?</a></li>
            </ul>
            <p className="text-sm text-[#64748B] mt-2"><strong>Last Updated:</strong> May 2026. Calculations use standard amortization formula assuming consistent monthly payments.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold">M</div>
          <div>
            <p className="font-bold text-[#0F172A] mb-1">TheMetricApp Team</p>
            <p className="text-sm text-[#64748B] leading-relaxed">TheMetricApp provides free, accurate financial calculators for consumers, families, and business owners. Our loan tools help you understand every dollar you borrow.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Mortgage Calculator 2026 | TheMetricApp" },
  description:
    "Free US mortgage calculator for 2026. Estimate your monthly mortgage payment including principal, interest, taxes, insurance, and PMI. Compare 15-year vs 30-year terms and see how interest rates affect affordability.",
  keywords: [
    "mortgage calculator 2026",
    "free mortgage calculator",
    "home loan calculator",
    "monthly mortgage payment",
    "30 year mortgage calculator",
    "15 year mortgage calculator",
    "mortgage payment estimator",
    "home affordability calculator",
    "mortgage interest rate calculator",
    "fixed rate mortgage",
    "FHA loan calculator",
    "conventional loan calculator",
    "PITI calculator",
  ],
  alternates: {
    canonical: `${siteUrl}/blog/mortgage-calculator-us`,
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "TheMetricApp",
    title: "Free Mortgage Calculator 2026: Estimate Monthly",
    description:
      "Free US mortgage calculator for 2026. Estimate your monthly payment including taxes, insurance, and PMI.",
    url: "https://www.themetricapp.com/blog/mortgage-calculator-us",
    publishedTime: "2026-05-30",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Free%20Mortgage%20Calculator%202026%3A%20Estimate%20Monthly%20Payments%2C%20Interest%20%26%20Affordability&description=Free%20US%20mortgage%20calculator%20for%202026.%20Estimate%20your%20monthly%20payment%20including%20taxes%2C%20insurance%2C%20and%20PMI.&type=article", width: 1200, height: 630, alt: "Free Mortgage Calculator 2026: Estimate Monthly Payments, Interest & Affordability" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Mortgage Calculator 2026: Monthly Payment Estimator",
    description:
      "Free US mortgage calculator. Estimate monthly payments including taxes, insurance, and PMI.",
  },
};

export default function BlogPost() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How are monthly mortgage payments calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monthly mortgage payments use the amortization formula: M = P × [r(1+r)^n] / [(1+r)^n − 1], where P = loan amount, r = monthly interest rate (annual rate / 12), and n = total number of payments (years × 12). Your total monthly payment also includes property taxes, homeowners insurance, and PMI (if applicable), commonly referred to as PITI (Principal, Interest, Taxes, Insurance).",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a 15-year and 30-year mortgage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 30-year mortgage has lower monthly payments but you pay significantly more interest over the life of the loan. A 15-year mortgage has higher monthly payments (about 60-70% more) but you build equity much faster and pay roughly half the total interest. For example, on a $400,000 loan at 6.5%: 30-year = $2,528/month ($910k total interest). 15-year = $3,485/month ($227k total interest). The 15-year saves $683,000 in interest.",
        },
      },
      {
        "@type": "Question",
        name: "How much house can I afford?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The general rule is: your total housing payment (PITI) should not exceed 28% of your gross monthly income, and your total debt-to-income (DTI) ratio should stay under 36%. For a $100,000 salary ($8,333/month gross), that means a max housing payment of $2,333/month. At current 2026 interest rates (~6.5%), that translates to roughly a $350,000-$400,000 home with 20% down. Use our mortgage calculator and affordability tools to run your specific numbers.",
        },
      },
      {
        "@type": "Question",
        name: "What is PMI and how do I avoid it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Private Mortgage Insurance (PMI) protects the lender if you default. It's required when your down payment is less than 20% of the home's value. PMI typically costs 0.3% to 1.5% of the loan amount per year. For a $400,000 loan, that's $100-$500/month. You can avoid PMI by: (1) making a 20% down payment, (2) using a piggyback loan (80/10/10 structure), (3) requesting PMI cancellation when you reach 20% equity, or (4) using an FHA loan with MIP instead.",
        },
      },
      {
        "@type": "Question",
        name: "What credit score do I need for a mortgage in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Conventional loans: minimum 620, best rates at 740+. FHA loans: minimum 580 (500 with 10% down). VA loans: no minimum (lender typically requires 620). USDA loans: minimum 640. In 2026, with rates staying elevated, having a 740+ credit score can save you 0.5-1% on your interest rate. On a $400,000 loan, that's $100-$200/month in savings. Check your credit report before applying and correct any errors.",
        },
      },
      {
        "@type": "Question",
        name: "Should I choose a fixed-rate or adjustable-rate mortgage (ARM)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fixed-rate mortgages offer payment stability — your rate never changes. Best for: long-term homeowners, those who prefer predictability, and when rates are low. Adjustable-rate mortgages (ARMs) start with a lower rate that adjusts after a fixed period (e.g., 5/1 ARM fixed for 5 years, then adjusts annually). Best for: short-term homeowners (3-7 years), those expecting rates to drop, or buyers who need a lower initial payment. In 2026, with rates at 6-7%, ARMs offer initial rates ~1% lower but carry future uncertainty.",
        },
      },
      {
        "@type": "Question",
        name: "What are closing costs and how much should I expect to pay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Closing costs typically range from 2% to 5% of the loan amount. On a $400,000 home, expect to pay $8,000-$20,000 in closing costs. These include: loan origination fees, appraisal, title insurance, escrow fees, recording fees, credit report, property survey, and prepaid items (property taxes and homeowners insurance escrow). You can negotiate for the seller to pay some closing costs or roll them into the loan (though this increases your monthly payment).",
        },
      },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Free Mortgage Calculator 2026: Estimate Monthly Payments, Interest & Affordability",
    description:
      "Free US mortgage calculator for 2026. Estimate your monthly payment including taxes, insurance, and PMI.",
    datePublished: "2026-05-30",
    dateModified: "2026-05-30",
    author: { "@type": "Person", name: "TheMetricApp Team", url: "https://www.themetricapp.com/authors/themetricapp-team/", sameAs: ["https://www.themetricapp.com/authors/themetricapp-team/"] },
    publisher: { "@type": "Organization", name: "TheMetricApp", logo: { "@type": "ImageObject", url: "https://www.themetricapp.com/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.themetricapp.com/blog/mortgage-calculator-us" },
  image: "https://www.themetricapp.com/api/og?title=mortgage%20calculator%20us&type=article",
  }

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.themetricapp.com/blog" },
      { "@type": "ListItem", position: 3, name: "Mortgage Calculator US", item: "https://www.themetricapp.com/blog/mortgage-calculator-us" },
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
        <span className="text-[#64748B]">Mortgage Calculator 2026</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Home Buying</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">May 2026</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">14 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Free Mortgage Calculator 2026: Estimate Monthly Payments, Interest & Affordability
        </h1>
        <p className="text-lg text-[#64748B] leading-relaxed">
          Buying a home is the biggest financial decision most people will ever make. Understanding your true monthly payment — including principal, interest, taxes, and insurance — is essential before you start house hunting. Our free mortgage calculator gives you instant, accurate estimates.
        </p>
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#E2E8F0] text-sm text-[#94A3B8]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold text-xs">M</div>
          <div>
            <p className="font-medium text-[#0F172A]">TheMetricApp Team</p>
            <p>Last Updated: May 30, 2026</p>
          </div>
        </div>
      </header>

      

        

      

        <CalculatorEmbed slug="mortgage-calculator-us" />

      <div className="prose prose-slate max-w-none prose-headings:text-[#0F172A] prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#475569] prose-p:leading-relaxed prose-a:text-[#6366F1] prose-a:font-medium hover:prose-a:text-[#4F46E5] prose-strong:text-[#0F172A] prose-ul:text-[#475569] prose-ol:text-[#475569] prose-li:leading-relaxed">
        <h2>Introduction</h2>
        <p>
          A mortgage is likely the largest loan you'll ever take — and the most complex. Your monthly payment isn't just principal and interest. It includes property taxes, homeowners insurance, and potentially PMI, HOA fees, and more. Understanding each component helps you make an informed decision about how much house you can truly afford.
        </p>
        <p>
          Our <Link href="/calculators/mortgage-calculator-us"><strong>US Mortgage Calculator</strong></Link> gives you a complete picture. Enter the home price, down payment, interest rate, and loan term — and instantly see your full monthly breakdown including taxes, insurance, and PMI.
        </p>

        <h2>How to Use the Mortgage Calculator</h2>
        <p>
          The <Link href="/calculators/mortgage-calculator-us"><strong>Mortgage Calculator</strong></Link> is easy to use:
        </p>
        <ol>
          <li><strong>Home Price</strong> — The purchase price of the home you're considering.</li>
          <li><strong>Down Payment</strong> — The amount you'll pay upfront (as a percentage or dollar amount).</li>
          <li><strong>Interest Rate</strong> — Current mortgage rate (2026 rates are approximately 6-7% for 30-year fixed).</li>
          <li><strong>Loan Term</strong> — 30 years (lower payments) or 15 years (build equity faster).</li>
          <li><strong>Annual Property Taxes</strong> — Typically 0.5-2% of home value depending on location.</li>
          <li><strong>Annual Home Insurance</strong> — Typically $800-$2,000/year depending on location and coverage.</li>
          <li><strong>PMI</strong> — Applicable if down payment is less than 20%.</li>
          <li><strong>HOA Fees</strong> — Monthly fees if applicable (condos, townhouses, planned communities).</li>
        </ol>
        <p>
          Results update instantly showing your monthly PITI payment, total interest paid over the loan term, and a full amortization schedule.
        </p>

        
        <h2>Mortgage Formula Breakdown</h2>
        <h3>Standard Amortization Formula</h3>
        <p><strong>M = P × [r(1+r)^n] / [(1+r)^n − 1]</strong></p>
        <p>Where:</p>
        <ul>
          <li><strong>M</strong> = Monthly principal + interest payment</li>
          <li><strong>P</strong> = Loan amount (home price − down payment)</li>
          <li><strong>r</strong> = Monthly interest rate (annual rate / 12)</li>
          <li><strong>n</strong> = Total number of payments (years × 12)</li>
        </ul>

        <h3>Example Calculation</h3>
        <p><strong>$450,000 home, 20% down ($90,000), 6.5% rate, 30-year fixed</strong></p>
        <ul>
          <li>Loan amount: $360,000</li>
          <li>Monthly rate: 6.5% / 12 = 0.5417%</li>
          <li>Number of payments: 30 × 12 = 360</li>
          <li><strong>Principal + Interest: $2,275/month</strong></li>
          <li>Property taxes (1.2%): $450/month</li>
          <li>Home insurance: $100/month</li>
          <li>No PMI (20% down)</li>
          <li><strong>Total monthly payment: $2,825/month</strong></li>
          <li>Total interest over 30 years: <strong>$459,000</strong></li>
          <li>Total cost of home: $360,000 + $459,000 + $90,000 down = <strong>$909,000</strong></li>
        </ul>

        <h2>15-Year vs 30-Year Mortgage Comparison</h2>
        <p>On a <strong>$400,000 loan at 6.0%</strong>:</p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-[#E2E8F0]">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Metric</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">30-Year Fixed</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">15-Year Fixed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">Monthly Payment (P&I)</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$2,398</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$3,375</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">Total Interest Paid</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$463,353</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$207,575</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">Interest Savings</td>
                <td className="border border-[#E2E8F0] px-4 py-3">Baseline</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$255,778</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">Years to Pay Off</td>
                <td className="border border-[#E2E8F0] px-4 py-3">30 years</td>
                <td className="border border-[#E2E8F0] px-4 py-3">15 years</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">Income Needed (28% DTI)</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$102,771</td>
                <td className="border border-[#E2E8F0] px-4 py-3">$144,643</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Mortgage Rates in 2026: What to Expect</h2>
        <p>
          As of mid-2026, 30-year fixed mortgage rates are hovering around <strong>6.25% - 6.75%</strong>. Here's what's driving rates and how to navigate the current market:
        </p>
        <ul>
          <li><strong>Federal Reserve Policy:</strong> The Fed held rates steady through early 2026, with potential rate cuts expected in late 2026. Mortgage rates typically move in anticipation of Fed changes.</li>
          <li><strong>Inflation:</strong> Core inflation remains above the Fed's 2% target, keeping upward pressure on mortgage rates.</li>
          <li><strong>Housing Supply:</strong> Low inventory continues to drive home prices higher, making affordability a challenge despite moderating rates.</li>
          <li><strong>Rate Lock Strategy:</strong> Consider locking your rate when you find a property. Most lenders offer 30-60 day rate locks. Some offer float-down options if rates drop during your lock period.</li>
        </ul>

        <h2>Real-Life Scenarios</h2>

        <h3>Scenario 1: First-Time Buyer with 5% Down</h3>
        <p><strong>$350,000 home, 5% down ($17,500), 6.75% rate, 30-year fixed</strong></p>
        <ul>
          <li>Loan amount: $332,500</li>
          <li>P&I payment: $2,157/month</li>
          <li>Property taxes (1.1%): $321/month</li>
          <li>Home insurance: $100/month</li>
          <li>PMI (0.8%): $222/month</li>
          <li><strong>Total monthly: $2,800/month</strong></li>
          <li>Income needed (28% DTI): <strong>$120,000/year</strong></li>
          <li>Tip: PMI drops automatically when you reach 20% equity (~year 9-10 with normal appreciation).</li>
        </ul>

        <h3>Scenario 2: Move-Up Buyer with 20% Down</h3>
        <p><strong>$550,000 home, 20% down ($110,000), 6.5% rate, 30-year fixed</strong></p>
        <ul>
          <li>Loan amount: $440,000</li>
          <li>P&I payment: $2,781/month</li>
          <li>Property taxes (1.3%): $596/month</li>
          <li>Home insurance: $125/month</li>
          <li>No PMI</li>
          <li><strong>Total monthly: $3,502/month</strong></li>
          <li>Income needed: <strong>$150,000/year</strong></li>
          <li>Available cash from sale of previous home covers down payment + closing costs.</li>
        </ul>

        <h3>Scenario 3: 15-Year Mortgage for Fast Equity</h3>
        <p><strong>$400,000 home, 20% down ($80,000), 5.75% rate, 15-year fixed</strong></p>
        <ul>
          <li>Loan amount: $320,000</li>
          <li>P&I payment: $2,658/month</li>
          <li>Property taxes (1.2%): $400/month</li>
          <li>Home insurance: $100/month</li>
          <li><strong>Total monthly: $3,158/month</strong></li>
          <li>Total interest: <strong>$158,440</strong> vs $463,353 on a 30-year — saves <strong>$304,913</strong></li>
          <li>Home paid off in 15 years — own it free and clear by age 52 if buying at 37.</li>
        </ul>

        <h2>10 Tips for Getting the Best Mortgage</h2>
        <ol>
          <li><strong>Shop multiple lenders.</strong> Get quotes from at least 3-5 lenders. A 0.25% rate difference on a $400,000 loan saves $20,000+ over 30 years.</li>
          <li><strong>Improve your credit score above 740.</strong> The best rates go to borrowers with 740+ scores. Check your credit report 6 months before applying and correct errors.</li>
          <li><strong>Save for a 20% down payment.</strong> Avoid PMI ($100-500/month), get better rates, and have more equity from day one.</li>
          <li><strong>Consider discount points.</strong> Paying 1% of the loan amount in points typically lowers your rate by 0.25%. Break-even is usually 3-5 years.</li>
          <li><strong>Get pre-approved, not pre-qualified.</strong> Pre-approval means the lender has verified your income, assets, and credit. Sellers take pre-approved buyers more seriously.</li>
          <li><strong>Lock your rate strategically.</strong> If rates are trending up, lock early. If stable or declining, consider a float-down option.</li>
          <li><strong>Don't make major financial changes before closing.</strong> Don't change jobs, open new credit cards, take out new loans, or make large deposits without lender approval.</li>
          <li><strong>Understand all closing costs.</strong> Ask for a Loan Estimate from each lender and compare the total cost (not just the rate).</li>
          <li><strong>Consider an ARM if staying short-term.</strong> 5/1 or 7/1 ARMs offer lower initial rates and make sense if you plan to move within 5-7 years.</li>
          <li><strong>Factor in maintenance costs.</strong> Budget 1-2% of home value annually for maintenance and repairs. A $400,000 home needs $4,000-$8,000/year set aside.</li>
        </ol>

        <p>
          Use these strategies alongside our{' '}
          <Link href="/calculators/home-affordability-calculator"><strong>Home Affordability Calculator</strong></Link>{' '}
          to determine your budget, and the{' '}
          <Link href="/calculators/dti-ratio-calculator"><strong>DTI Ratio Calculator</strong></Link>{' '}
          to understand how lenders will evaluate your application.
        </p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-8">
          {[
            { q: "How are monthly mortgage payments calculated?", a: "M = P × [r(1+r)^n] / [(1+r)^n − 1]. P = loan amount, r = monthly rate, n = total payments. Plus property taxes, insurance, PMI, and HOA fees." },
            { q: "What is the difference between 15-year and 30-year mortgage?", a: "30-year: lower payments ($2,398/mo on $400k), more total interest ($463k). 15-year: higher payments ($3,375/mo), much less interest ($207k). 15-year saves $255k+ in interest." },
            { q: "How much house can I afford?", a: "Keep PITI under 28% of gross income and total debt under 36%. For $100k salary: max $2,333/month housing payment = ~$350k-$400k home with 20% down." },
            { q: "What is PMI and how do I avoid it?", a: "PMI (Private Mortgage Insurance) protects the lender when down payment is under 20%. Avoid by: 20% down payment, piggyback loan, or requesting cancellation at 20% equity." },
            { q: "What credit score do I need for a mortgage in 2026?", a: "Conventional: 620 minimum, 740+ for best rates. FHA: 580 minimum. VA: no minimum. A 740+ score saves 0.5-1% on rate — $100-200/month on a $400k loan." },
            { q: "Fixed-rate vs ARM: which is better?", a: "Fixed: predictable, best for long-term owners. ARM: lower initial rate, best for short-term (3-7 years). In 2026, ARMs ~1% lower than fixed. Consider your timeline." },
            { q: "What are closing costs and how much?", a: "2-5% of loan amount. On $400k: $8k-$20k. Includes origination fees, appraisal, title insurance, escrow, prepaid taxes and insurance. Can be paid by seller or rolled into loan." },
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
          Understanding your true mortgage payment is the first step to making a smart home purchase. Our <Link href="/calculators/mortgage-calculator-us"><strong>Mortgage Calculator</strong></Link> gives you a complete breakdown so you can shop for homes with confidence, knowing exactly what your monthly payment will be.
        </p>
        <ol>
          <li>Use our <Link href="/calculators/mortgage-calculator-us"><strong>Mortgage Calculator</strong></Link> to estimate payments for homes in your target price range.</li>
          <li>Check the <Link href="/calculators/home-affordability-calculator"><strong>Home Affordability Calculator</strong></Link> to confirm your budget.</li>
          <li>Get pre-approved with at least 3 lenders to compare rates and terms.</li>
          <li>Start saving for your down payment and closing costs today.</li>
        </ol>
      </div>

      <section className="mt-16 pt-10 border-t border-[#E2E8F0]">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Pinterest-Style Image Ideas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { prompt: "Mortgage payment breakdown pie chart: Principal, Interest, Taxes, Insurance, PMI. Indigo color scheme. Modern infographic design. 1000x1500px.", label: "PITI Breakdown" },
            { prompt: "15-year vs 30-year mortgage comparison: lower payments vs faster equity. Side-by-side visual with interest savings highlighted. 1000x1500px.", label: "15 vs 30 Year" },
            { prompt: "How mortgage rates affect affordability: 5% vs 6% vs 7% on $400k loan. Dramatic monthly payment difference. 1000x1500px.", label: "Rate Impact" },
            { prompt: "Steps to buy a home: Pre-approval → House hunt → Offer → Appraisal → Closing. Clean timeline with icons. 1000x1500px.", label: "Home Buying Steps" },
            { prompt: "Down payment strategies: 3% FHA, 5% conventional, 10%, 20%. Pros and cons of each level. Visual comparison. 1000x1500px.", label: "Down Payment Guide" },
            { prompt: "Mortgage closing costs explained: Origination, Appraisal, Title, Escrow. Simple breakdown with average costs. 1000x1500px.", label: "Closing Costs" },
          ].map((image, i) => (
            <div key={i} className="rounded-xl border border-[#E2E8F0] bg-white p-4 hover:shadow-lg hover:border-[#6366F1]/20 transition-all duration-200">
              <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#EEF2FF] to-white border border-[#E2E8F0] flex items-center justify-center mb-3">
                <div className="text-center px-3">
                  <div className="text-3xl mb-2">{["🏠", "📊", "💰", "📋", "💵", "📝"][i]}</div>
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
              <li><a href="https://www.freddiemac.com/pmms" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Freddie Mac — Primary Mortgage Market Survey</a></li>
              <li><a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Consumer Financial Protection Bureau — Owning a Home</a></li>
              <li><a href="https://www.bankrate.com/mortgages/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Bankrate — Mortgage Rates</a></li>
            </ul>
            <p className="text-sm text-[#64748B] mt-2"><strong>Last Updated:</strong> May 2026. Rates reflect mid-2026 market conditions. Actual rates vary by lender, location, and borrower profile.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold">M</div>
          <div>
            <p className="font-bold text-[#0F172A] mb-1">TheMetricApp Team</p>
            <p className="text-sm text-[#64748B] leading-relaxed">TheMetricApp provides free, accurate financial calculators for consumers, families, and business owners. Our mortgage tools help you make informed home buying decisions.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

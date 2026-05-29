import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Mortgage Calculator UK 2026: Complete Guide to Monthly Repayments, Stamp Duty & Affordability",
  description:
    "Free mortgage calculator UK guide for 2025–26. Estimate monthly repayments, total interest, stamp duty costs, and borrowing affordability. Accurate rates, instant results.",
  keywords: [
    "mortgage calculator uk",
    "uk mortgage calculator 2025-26",
    "monthly mortgage payment calculator",
    "stamp duty calculator uk",
    "mortgage affordability calculator",
    "how much can I borrow mortgage",
    "first time buyer mortgage calculator",
    "mortgage repayment calculator uk",
  ],
  openGraph: {
    title: "Mortgage Calculator UK 2026: Complete Guide to Monthly Repayments, Stamp Duty & Affordability",
    description:
      "Free mortgage calculator UK guide for 2025–26. Estimate monthly repayments, total interest, stamp duty costs, and borrowing affordability.",
    url: siteUrl + "/blog/mortgage-calculator-uk-2026",
    siteName: "TheMetricApp",
    type: "article",
    publishedTime: "2026-05-26",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Mortgage Calculator UK 2026" }],
  },
  alternates: {
    canonical: siteUrl + "/blog/mortgage-calculator-uk-2026",
  },
  twitter: {
    title: "Mortgage Calculator UK 2026: Complete Guide to Monthly Repayments, Stamp Duty & Affordability | TheMetricApp",
  },
};

export default function MortgageCalculatorUKBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much deposit do I need for a mortgage in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most lenders require at least 5% deposit (95% LTV), but 10% gives you access to much better rates. For the best rates, aim for 20-25% deposit (75-80% LTV). First-time buyers can take advantage of 95% mortgage schemes backed by the government.",
        },
      },
      {
        "@type": "Question",
        name: "What is stamp duty and how much will I pay in 2025–26?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stamp Duty Land Tax (SDLT) is a tax on property purchases in England and Northern Ireland. You pay 0% on the first £250,000, 5% on £250,001–£925,000, 10% on £925,001–£1.5M, and 12% above £1.5M. First-time buyers get relief: 0% up to £425,000 and 5% on the portion between £425,000 and £625,000.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I borrow for a mortgage in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most lenders offer 4–4.5× your annual income. For a joint application, it's typically 4× the higher income plus 1× the lower income, or 4.5× combined. Some lenders use more flexible affordability assessments. Use a mortgage affordability calculator to estimate your maximum borrowing.",
        },
      },
      {
        "@type": "Question",
        name: "What is the current mortgage interest rate in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In 2025–26, average 2-year fixed mortgage rates are around 4.5%, with 5-year fixed rates slightly lower at 4.2%. Tracker rates are typically 0.5–1% above the Bank of England base rate. Your actual rate depends on your credit score, LTV, and the lender.",
        },
      },
      {
        "@type": "Question",
        name: "Should I choose a 2-year or 5-year fixed rate mortgage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 2-year fix offers lower initial rates and flexibility to remortgage sooner. A 5-year fix provides payment stability but typically has slightly higher rates and early repayment charges if you want to switch. If you expect rates to fall, a 2-year fix is better. If you want certainty, choose 5 years.",
        },
      },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Mortgage Calculator UK 2026: Complete Guide to Monthly Repayments, Stamp Duty & Affordability",
    description:
      "Free mortgage calculator UK guide for 2025–26. Estimate monthly repayments, total interest, stamp duty costs, and borrowing affordability.",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    author: {
      "@type": "Organization",
      name: "TheMetricApp Team",
    },
    publisher: {
      "@type": "Organization",
      name: "TheMetricApp",
      logo: {
        "@type": "ImageObject",
        url: "https://www.themetricapp.com/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.themetricapp.com/blog/mortgage-calculator-uk-2026",
    },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.themetricapp.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mortgage Calculator UK 2026",
        item: "https://www.themetricapp.com/blog/mortgage-calculator-uk-2026",
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[#64748B]">Mortgage Calculator UK 2026</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Property</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">May 2026</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">12 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Mortgage Calculator UK 2026: Complete Guide to Monthly Repayments, Stamp Duty &amp; Affordability
        </h1>

        <p className="text-lg text-[#64748B] leading-relaxed">
          Calculate your monthly mortgage payments, total interest payable, stamp duty costs, and
          borrowing affordability for the 2025–26 UK property market. Includes real examples,
          formula breakdowns, and expert tips for first-time buyers.
        </p>

        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#E2E8F0] text-sm text-[#94A3B8]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold text-xs">M</div>
          <div>
            <p className="font-medium text-[#0F172A]">TheMetricApp Team</p>
            <p>Last Updated: May 26, 2026</p>
          </div>
        </div>
      </header>

      {/* Article content */}
      <div className="prose prose-slate max-w-none prose-headings:text-[#0F172A] prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#475569] prose-p:leading-relaxed prose-a:text-[#6366F1] prose-a:font-medium hover:prose-a:text-[#4F46E5] prose-strong:text-[#0F172A] prose-ul:text-[#475569] prose-ol:text-[#475569] prose-li:leading-relaxed">

        {/* 1. Introduction */}
        <h2>Introduction</h2>
        <p>
          Buying a home is the single biggest financial commitment most people will ever make. Yet
          when you start looking at mortgage rates, deposit sizes, and stamp duty thresholds, it is
          easy to feel overwhelmed by the sheer number of variables. A seemingly small difference in
          interest rates — say, 4.5% versus 5% — can cost you tens of thousands of pounds over a
          25-year term. And that is before you even think about stamp duty, lender arrangement fees,
          and valuation costs.
        </p>
        <p>
          That is why we built the{' '}
          <Link href="/calculators/mortgage-calculator-uk">
            <strong>Mortgage Calculator UK</strong>
          </Link>
          . This tool gives you an instant, accurate picture of your true mortgage costs — including
          monthly repayments, total interest over the term, stamp duty, and loan-to-value (LTV)
          ratio. It handles first-time buyer relief, different mortgage terms from 15 to 40 years,
          and gives you a clear breakdown of every cost involved.
        </p>
        <p>
          This guide walks you through exactly how to use the calculator, explains every formula
          behind the numbers, and gives you real-world examples for the 2025–26 property market.
        </p>

        {/* 2. How to Use This Calculator */}
        <h2>How to Use This Calculator</h2>
        <p>
          The{' '}
          <Link href="/calculators/mortgage-calculator-uk">
            <strong>Mortgage Calculator UK</strong>
          </Link>{' '}
          is designed to be fast and comprehensive. Here is exactly how to use it:
        </p>
        <ol>
          <li>
            <strong>Enter the Property Price</strong> — Input the purchase price of the property you
            are considering. For a realistic estimate, look at properties in your target area on
            Rightmove or Zoopla.
          </li>
          <li>
            <strong>Enter Your Deposit Amount</strong> — This is the cash you have saved for the
            purchase. A 10–20% deposit is typical, though first-time buyers can sometimes buy with
            as little as 5%.
          </li>
          <li>
            <strong>Enter the Interest Rate</strong> — Use the rate you have been quoted by a
            lender, or a current average rate (around 4.5% for a 2-year fix in 2025–26) as a
            benchmark.
          </li>
          <li>
            <strong>Choose Your Mortgage Term</strong> — 25 years is the standard, but longer terms
            (30–40 years) mean lower monthly payments at the cost of more total interest.
          </li>
          <li>
            <strong>Check First-Time Buyer Status</strong> — If you are a first-time buyer, tick the
            box to see your stamp duty relief, which can save you thousands.
          </li>
          <li>
            <strong>Read Your Results</strong> — The calculator instantly shows your monthly
            payment, total repayment, total interest, stamp duty, LTV ratio, and deposit percentage.
          </li>
        </ol>

        <p>
          For a full picture of your home-buying budget, pair this calculator with our{' '}
          <Link href="/calculators/income-tax-calculator-uk">
            <strong>Income Tax Calculator UK</strong>
          </Link>{' '}
          to understand your take-home pay and what you can realistically afford in monthly payments.
        </p>

        {/* Calculator embed suggestion */}
        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white text-2xl">🏡</div>
            <div>
              <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
              <p className="text-sm text-[#64748B] mb-3">
                Enter the property price, deposit, and interest rate to see your monthly payments,
                stamp duty, and total interest in seconds.
              </p>
              <Link
                href="/calculators/mortgage-calculator-uk"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors shadow-sm"
              >
                Open Mortgage Calculator UK
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Complete Formula Breakdown */}
        <h2>Complete Formula Breakdown (With 2025–26 UK Examples)</h2>
        <p>
          Understanding the maths behind your mortgage helps you compare deals, negotiate with
          lenders, and plan your finances with confidence. Here is every formula the calculator uses,
          explained step by step with real UK examples.
        </p>

        <h3>Step 1: Calculate the Loan Amount</h3>
        <p>
          <strong>Loan Amount = Property Price − Deposit</strong>
        </p>
        <p>
          <strong>Example:</strong> You are buying a <strong>£300,000</strong> property with a{' '}
          <strong>£60,000 deposit</strong> (20%).
          <br />
          Loan Amount = £300,000 − £60,000 = <strong>£240,000</strong>
        </p>

        <h3>Step 2: Calculate the Loan-to-Value (LTV) Ratio</h3>
        <p>
          <strong>LTV = (Loan Amount ÷ Property Price) × 100</strong>
        </p>
        <p>
          <strong>Example:</strong> £240,000 ÷ £300,000 × 100 = <strong>80% LTV</strong>
        </p>
        <p>
          LTV is one of the most important factors lenders use to set your interest rate. A lower
          LTV means you are borrowing less relative to the property value, which reduces the
          lender&apos;s risk. Typically:
        </p>
        <ul>
          <li><strong>60% LTV (40% deposit):</strong> Best available rates</li>
          <li><strong>75% LTV (25% deposit):</strong> Very good rates</li>
          <li><strong>80% LTV (20% deposit):</strong> Standard competitive rates</li>
          <li><strong>90% LTV (10% deposit):</strong> Higher rates, may need MIG</li>
          <li><strong>95% LTV (5% deposit):</strong> Highest rates, limited options</li>
        </ul>

        <h3>Step 3: Calculate Monthly Mortgage Payments</h3>
        <p>
          Monthly payments are calculated using the standard amortisation formula:
        </p>
        <p>
          <strong>M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]</strong>
        </p>
        <p>Where:</p>
        <ul>
          <li><strong>M</strong> = Monthly payment</li>
          <li><strong>P</strong> = Loan amount (£240,000)</li>
          <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12, e.g., 4.5% ÷ 12 = 0.00375)</li>
          <li><strong>n</strong> = Number of monthly payments (term × 12, e.g., 25 × 12 = 300)</li>
        </ul>
        <p>
          <strong>Example:</strong> £240,000 loan at 4.5% over 25 years:
        </p>
        <ul>
          <li>Monthly rate: 4.5% ÷ 12 = 0.00375</li>
          <li>Number of payments: 25 × 12 = 300</li>
          <li>Monthly payment: <strong>£1,334</strong></li>
        </ul>

        <h3>Step 4: Calculate Total Repayment and Total Interest</h3>
        <p>
          <strong>Total Repayment = Monthly Payment × Number of Payments</strong><br />
          <strong>Total Interest = Total Repayment − Loan Amount</strong>
        </p>
        <p>
          <strong>Example:</strong>
        </p>
        <ul>
          <li>Total Repayment: £1,334 × 300 = <strong>£400,267</strong></li>
          <li>Total Interest: £400,267 − £240,000 = <strong>£160,267</strong></li>
        </ul>
        <p>
          This means over 25 years, you will pay £160,267 in interest alone — more than 66% of your
          original loan amount. This is why getting the best possible interest rate and considering a
          shorter term can save you tens of thousands of pounds.
        </p>

        <h3>Step 5: Calculate Stamp Duty (SDLT)</h3>
        <p>
          Stamp Duty Land Tax in England and Northern Ireland uses a progressive band system. For a
          non-first-time buyer:
        </p>
        <ul>
          <li>0% on the first £250,000</li>
          <li>5% on £250,001 – £925,000</li>
          <li>10% on £925,001 – £1,500,000</li>
          <li>12% on amounts above £1,500,000</li>
        </ul>
        <p>
          <strong>Example (non-first-time buyer, £300,000 property):</strong>
        </p>
        <ul>
          <li>0% on £250,000 = £0</li>
          <li>5% on £50,000 (£300,000 − £250,000) = <strong>£2,500</strong></li>
          <li>Total Stamp Duty: <strong>£2,500</strong></li>
        </ul>
        <p>
          <strong>First-time buyer relief:</strong> If you are a first-time buyer purchasing a
          property up to £625,000:
        </p>
        <ul>
          <li>0% on the first £425,000</li>
          <li>5% on the portion between £425,000 and £625,000</li>
        </ul>
        <p>
          For a £300,000 property, a first-time buyer pays <strong>£0 stamp duty</strong> — saving
          £2,500 compared to a non-first-time buyer.
        </p>

        {/* 4. Real-Life Examples */}
        <h2>Real-Life Examples: Three UK Mortgage Scenarios for 2025–26</h2>

        <h3>Scenario 1: First-Time Buyer — Manchester, £250,000 Flat</h3>
        <p>
          Tom and Sarah are first-time buyers purchasing a two-bedroom flat in Manchester for
          <strong>£250,000</strong>. They have saved a <strong>10% deposit (£25,000)</strong> and
          secured a <strong>4.5% interest rate</strong> on a <strong>30-year term</strong>.
        </p>
        <ul>
          <li>Loan Amount: £250,000 − £25,000 = <strong>£225,000</strong></li>
          <li>LTV: 90%</li>
          <li>Monthly Payment: <strong>£1,140</strong></li>
          <li>Total Repayment: £1,140 × 360 = <strong>£410,400</strong></li>
          <li>Total Interest: £410,400 − £225,000 = <strong>£185,400</strong></li>
          <li>Stamp Duty: <strong>£0</strong> (first-time buyer relief up to £425,000)</li>
        </ul>
        <p>
          With their combined income of £55,000, their monthly payment of £1,140 is affordable at
          roughly 25% of their take-home pay. By choosing a 30-year term over 25 years, they save
          £135 per month on their payment but will pay an extra £34,000 in interest over the life
          of the mortgage.
        </p>

        <h3>Scenario 2: Moving Up — Birmingham, £400,000 House</h3>
        <p>
          James and Emma are selling their first home and moving to a larger family home in
          Birmingham for <strong>£400,000</strong>. They have <strong>£100,000 equity</strong> from
          their sale (25% deposit) and have locked in a <strong>4.2% 5-year fixed rate</strong> on a
          <strong>25-year term</strong>.
        </p>
        <ul>
          <li>Loan Amount: £400,000 − £100,000 = <strong>£300,000</strong></li>
          <li>LTV: 75%</li>
          <li>Monthly Payment: <strong>£1,617</strong></li>
          <li>Total Repayment: £1,617 × 300 = <strong>£485,100</strong></li>
          <li>Total Interest: £485,100 − £300,000 = <strong>£185,100</strong></li>
          <li>Stamp Duty: 0% on £250k + 5% on £150k = <strong>£7,500</strong></li>
        </ul>
        <p>
          Their 75% LTV qualifies them for the best available rates. The 5-year fix gives them
          payment certainty while their children are young. The £7,500 stamp duty is a significant
          upfront cost they have budgeted for as part of the moving process.
        </p>

        <h3>Scenario 3: Buy-to-Let Investor — Leeds, £180,000 Property</h3>
        <p>
          Priya is a buy-to-let investor purchasing a one-bedroom flat in Leeds for
          <strong>£180,000</strong> with a <strong>25% deposit (£45,000)</strong> at a
          <strong>5% interest rate</strong> on a <strong>25-year term</strong>.
        </p>
        <ul>
          <li>Loan Amount: £180,000 − £45,000 = <strong>£135,000</strong></li>
          <li>LTV: 75%</li>
          <li>Monthly Payment: <strong>£789</strong></li>
          <li>Total Repayment: £789 × 300 = <strong>£236,700</strong></li>
          <li>Total Interest: £236,700 − £135,000 = <strong>£101,700</strong></li>
          <li>Stamp Duty: 0% on £250k = <strong>£0</strong> (under £250k threshold, plus 3% surcharge for BTL)</li>
        </ul>
        <p>
          Note: Buy-to-let properties incur a 3% SDLT surcharge on top of standard rates. For a
          £180,000 purchase, the total stamp duty is 3% of £180,000 = <strong>£5,400</strong>.
          Priya expects £850/month in rent, giving her a positive cash flow of £61/month before
          maintenance costs and letting agent fees.
        </p>

        {/* 5. Key Things to Know */}
        <h2>Key Things to Know About UK Mortgages in 2025–26</h2>
        <ul>
          <li><strong>Interest rates are stabilising:</strong> After the sharp rises of 2022–23, mortgage rates have settled at 4–5% for 2025–26. The Bank of England base rate is expected to remain steady through mid-2026.</li>
          <li><strong>Affordability tests are strict:</strong> Most lenders cap borrowing at 4.5× your annual income. Some go up to 5.5× for high earners or certain professions like doctors and accountants.</li>
          <li><strong>5-year fixes are popular:</strong> With rates stabilising, many buyers are choosing 5-year fixes for payment certainty. The rate difference between 2-year and 5-year fixes has narrowed to just 0.3%.</li>
          <li><strong>First-time buyer schemes:</strong> The 95% mortgage guarantee scheme and Help to Buy equity loan (in some regions) are still available, making it possible to buy with a 5% deposit.</li>
          <li><strong>Stamp duty thresholds:</strong> The £250,000 0% band and first-time buyer relief up to £425,000 are now permanent features of the SDLT system.</li>
        </ul>

        {/* 6. Tips to Get the Best Result */}
        <h2>Tips to Get the Best Mortgage Deal in 2025–26</h2>
        <ol>
          <li>
            <strong>Improve your credit score before applying.</strong> Check your credit report on
            Experian, Equifax, and TransUnion. Pay off credit card balances, correct any errors, and
            register on the electoral roll. A 50-point improvement can make a 0.5% difference in
            your offered rate.
          </li>
          <li>
            <strong>Save for at least a 10% deposit.</strong> A 10% deposit (90% LTV) vs a 5%
            deposit (95% LTV) typically means a 0.75–1% lower interest rate. On a £225,000 loan,
            that saves you £1,700–£2,250 per year in interest.
          </li>
          <li>
            <strong>Consider a longer term to start, then overpay.</strong> A 35-year term gives you
            lower mandatory monthly payments, but most lenders allow overpayments of up to 10% per
            year without penalty. This flexibility lets you pay off your mortgage faster when you
            can afford it.
          </li>
          <li>
            <strong>Get an Agreement in Principle (AIP) early.</strong> An AIP from a lender shows
            sellers and estate agents you are serious and financially qualified. It is free and
            doesn&apos;t affect your credit score if done through a soft search.
          </li>
          <li>
            <strong>Use a mortgage broker.</strong> A whole-of-market broker can access deals not
            available directly to consumers. Their fee (typically £300–£500 or a percentage of the
            loan) is often offset by the better rate they secure.
          </li>
          <li>
            <strong>Factor in all upfront costs.</strong> Beyond the deposit and stamp duty, budget
            for valuation fees (£200–£1,500), solicitor fees (£800–£2,000), survey costs
            (£500–£1,500), and lender arrangement fees (£0–£2,000). The{' '}
            <Link href="/calculators/mortgage-calculator-uk">
              <strong>Mortgage Calculator UK</strong>
            </Link>{' '}
            helps you plan these costs.
          </li>
        </ol>

        {/* 7. Common Mistakes to Avoid */}
        <h2>Common Mistakes People Make When Getting a UK Mortgage</h2>
        <ol>
          <li>
            <strong>Focusing only on the monthly payment.</strong> A lower monthly payment on a
            longer term means paying significantly more interest overall. Always check the total
            repayment figure alongside the monthly amount.
          </li>
          <li>
            <strong>Not comparing the total cost of different rates.</strong> A 2-year fix at 4.2%
            with a £999 fee might be cheaper overall than a 5-year fix at 4.5% with no fee — or vice
            versa. Use the calculator to compare total costs over the initial period.
          </li>
          <li>
            <strong>Forgetting about lender arrangement fees.</strong> Some lenders charge £0–£999
            arrangement fees, while others charge up to £2,000. These can be added to the loan
            amount (increasing your monthly payments and total interest) or paid upfront.
          </li>
          <li>
            <strong>Ignoring early repayment charges (ERCs).</strong> Most fixed-rate mortgages have
            ERCs of 1–5% of the outstanding balance if you want to switch or pay off the mortgage
            during the fixed period. A 1% ERC on a £200,000 balance is £2,000.
          </li>
          <li>
            <strong>Not getting a survey.</strong> A basic mortgage valuation from the lender only
            checks the property is worth what you are paying. A full building survey (Level 2 or 3)
            can uncover structural issues that cost thousands to fix.
          </li>
        </ol>

        {/* 8. FAQ Section */}
        <h2>Frequently Asked Questions</h2>

        <div className="not-prose space-y-4 my-8">
          {[
            {
              q: "How much deposit do I need for a mortgage in the UK?",
              a: "Most lenders require at least 5% deposit (95% LTV), but 10% gives you access to much better rates. For the best rates, aim for 20-25% deposit (75-80% LTV). First-time buyers can take advantage of 95% mortgage schemes backed by the government.",
            },
            {
              q: "What is stamp duty and how much will I pay in 2025–26?",
              a: "Stamp Duty Land Tax (SDLT) is a tax on property purchases in England and Northern Ireland. You pay 0% on the first £250,000, 5% on £250,001–£925,000, 10% on £925,001–£1.5M, and 12% above £1.5M. First-time buyers get relief: 0% up to £425,000 and 5% on the portion between £425,000 and £625,000.",
            },
            {
              q: "How much can I borrow for a mortgage in the UK?",
              a: "Most lenders offer 4–4.5× your annual income. For a joint application, it's typically 4× the higher income plus 1× the lower income, or 4.5× combined. Some lenders use more flexible affordability assessments.",
            },
            {
              q: "What is the current mortgage interest rate in the UK?",
              a: "In 2025–26, average 2-year fixed mortgage rates are around 4.5%, with 5-year fixed rates slightly lower at 4.2%. Tracker rates are typically 0.5–1% above the Bank of England base rate.",
            },
            {
              q: "Should I choose a 2-year or 5-year fixed rate mortgage?",
              a: "A 2-year fix offers lower initial rates and flexibility to remortgage sooner. A 5-year fix provides payment stability but typically has slightly higher rates and early repayment charges if you want to switch. If you expect rates to fall, a 2-year fix is better.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all duration-200 hover:border-[#6366F1]/30"
            >
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

        {/* 9. Conclusion */}
        <h2>Conclusion</h2>
        <p>
          Getting a mortgage is one of the most complex financial decisions you will make, but
          understanding the numbers gives you the confidence to negotiate the best deal. Our{' '}
          <Link href="/calculators/mortgage-calculator-uk">
            <strong>Mortgage Calculator UK</strong>
          </Link>{' '}
          puts all the key information at your fingertips — monthly payments, total interest, stamp
          duty, and LTV ratio — in one instant result.
        </p>
        <p>
          <strong>Your next steps:</strong>
        </p>
        <ol>
          <li>
            Open the{' '}
            <Link href="/calculators/mortgage-calculator-uk">
              <strong>Mortgage Calculator UK</strong>
            </Link>{' '}
            and run your numbers right now.
          </li>
          <li>
            Check your take-home pay with our{' '}
            <Link href="/calculators/income-tax-calculator-uk">
              <strong>Income Tax Calculator UK</strong>
            </Link>{' '}
            to confirm what you can afford.
          </li>
          <li>
            If you are self-employed, estimate your tax bill with our{' '}
            <Link href="/calculators/self-assessment-tax-calculator-uk">
              <strong>Self Assessment Tax Calculator UK</strong>
            </Link>
            .
          </li>
          <li>
            Get an Agreement in Principle from a lender or broker before you start viewing properties.
          </li>
        </ol>
      </div>

      {/* Pinterest-Style Image Prompts */}
      <section className="mt-16 pt-10 border-t border-[#E2E8F0]">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Pinterest-Style Image Ideas for This Article</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { prompt: "A clean infographic titled 'Mortgage Formula UK' showing: M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1] with example: £240,000 loan at 4.5% over 25 years = £1,334/month. GBP symbols. UK flag. Minimal teal and white design. Pinterest vertical pin, 1000x1500px.", label: "Mortgage Formula" },
            { prompt: "Bar chart showing stamp duty bands for 2025–26: 0% up to £250k, 5% £250k-£925k, 10% £925k-£1.5M, 12% above. Side note: 'First-time buyers: 0% up to £425k'. British flag. Teal and slate colours. Pinterest vertical pin, 1000x1500px.", label: "Stamp Duty Bands 2025-26" },
            { prompt: "LTV comparison infographic: 60% LTV = best rates, 75% LTV = good rates, 80% LTV = standard, 90% LTV = higher rates, 95% LTV = limited options. Each with a small house icon. Modern flat design. Pinterest vertical pin, 1000x1500px.", label: "LTV Guide" },
            { prompt: "Bold text overlay on UK cityscape: '6 Tips to Get the Best Mortgage Deal in 2026'. List: improve credit, 10%+ deposit, consider overpayments, get AIP early, use a broker, factor in all costs. Teal and navy tones. Pinterest vertical pin, 1000x1500px.", label: "6 Mortgage Tips" },
            { prompt: "Comparison: 2-year fix vs 5-year fix. 2-year: lower initial rate, flexibility, can remortgage sooner. 5-year: payment stability, slightly higher rate, ERCs. Which is right for you? Green vs blue colour split. Pinterest vertical pin, 1000x1500px.", label: "2-Year vs 5-Year Fix" },
            { prompt: "Checklist-style pin titled '5 Common Mortgage Mistakes to Avoid'. Red X items: focusing only on monthly payment, ignoring total cost, forgetting fees, missing ERCs, not getting a survey. Minimal teal design. Pinterest vertical pin, 1000x1500px.", label: "Mortgage Mistakes" },
          ].map((image, i) => (
            <div key={i} className="rounded-xl border border-[#E2E8F0] bg-white p-4 hover:shadow-lg hover:border-[#6366F1]/20 transition-all duration-200">
              <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#EEF2FF] to-white border border-[#E2E8F0] flex items-center justify-center mb-3">
                <div className="text-center px-3">
                  <div className="text-3xl mb-2">{["🏡", "📊", "📈", "💡", "⚖️", "✅"][i]}</div>
                  <p className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">Image Suggestion {i + 1}</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#0F172A] mb-1.5">{image.label}</p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{image.prompt}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#94A3B8] mt-6 italic">Use these prompts with Midjourney, DALL·E, or Canva AI to create Pinterest-optimised vertical pins (1000×1500px) that drive traffic to your calculator page.</p>
      </section>

      {/* Data Sources & Methodology */}
      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <h3 className="text-lg font-bold text-[#0F172A] mb-4">📚 Data Sources &amp; Methodology</h3>
        <ul className="space-y-3 text-sm text-[#475569]">
          <li className="flex gap-2">
            <span className="text-[#6366F1] mt-1 shrink-0">•</span>
            <span>
              Mortgage repayment calculations use the standard amortization formula. Interest rate data sourced from the Bank of England base rate and average UK mortgage rates from UK Finance and Moneyfacts for 2025–2026.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#6366F1] mt-1 shrink-0">•</span>
            <span>
              Stamp Duty Land Tax (SDLT) calculations based on current HMRC thresholds and rates for England and Northern Ireland. Separate rates apply for Scotland (LBTT) and Wales (LTT). Figures verified against official UK Government guidance.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#6366F1] mt-1 shrink-0">•</span>
            <span>
              Affordability estimates based on standard lender criteria (typically 4–4.5× annual income). Actual borrowing capacity varies by lender, credit profile, and current market conditions. Always consult a qualified mortgage adviser.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-xs text-[#94A3B8] border-t border-[#E2E8F0] pt-4">
          <strong>Disclaimer:</strong> This content is for informational and educational purposes only and does not constitute financial, tax, or legal advice. Consult a qualified professional for advice tailored to your specific situation.
        </p>
      </div>

      {/* Author bio */}
      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold">M</div>
          <div>
            <p className="font-bold text-[#0F172A] mb-1">TheMetricApp Team</p>
            <p className="text-sm text-[#64748B] leading-relaxed">
              TheMetricApp provides free, accurate financial calculators for workers, freelancers,
              and business owners in the US and UK. Our tools help you make smarter money decisions
              — from mortgage calculations and tax estimates to profit margins and fee comparisons.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

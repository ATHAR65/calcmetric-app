import Link from "next/link";
import CalculatorGrid from "@/components/CalculatorGrid";
import HomepageRichSeo from "@/components/HomepageRichSeo";
import { blogPosts } from "@/lib/siteConfig";
import { getCategoryStyle } from "@/lib/blogCategories";

const calculators = [
  // NEW CALCULATORS — June 13, 2026 (shown first under the "New" category)
  { href: "/calculators/no-tax-on-overtime-calculator-2026", title: "No Tax on Overtime Calculator", desc: "Estimate your federal income tax savings on overtime pay under the OBBBA deduction for 2026. W-2 employees only, with phase-out limits.", icon: "⏱️", tag: "New" },
  { href: "/calculators/freelancer-platform-fee-calculator-2026", title: "Freelancer Platform Fee Calculator", desc: "Compare your real take-home pay after Fiverr, Upwork, Toptal, Contra, and PeoplePerHour fees. Free 2026 freelancer fee comparison.", icon: "💼", tag: "New" },
  { href: "/calculators/break-even-calculator-small-business", title: "Break-Even Calculator", desc: "Find how many units you need to sell to cover fixed and variable costs, with contribution margin analysis for small business and e-commerce.", icon: "⚖️", tag: "New" },
  { href: "/calculators/tiktok-shop-earnings-calculator-2026", title: "TikTok Shop Earnings Calculator", desc: "Estimate your net TikTok Shop earnings after referral fees, affiliate commissions, COGS, and shipping. Built for TikTok sellers and creators.", icon: "🎵", tag: "New" },
  { href: "/calculators/w2-vs-1099-calculator-2026", title: "W-2 vs 1099 Calculator", desc: "Compare your real take-home pay as a W-2 employee versus a 1099 independent contractor. Includes SE tax, QBI, benefits value, and break-even rate.", icon: "🧾", tag: "New" },
  { href: "/calculators/doordash-tax-estimator", title: "DoorDash Tax Estimator", desc: "Estimate your self-employment taxes, mileage deductions, and net earnings as a DoorDash driver.", icon: "🚗", tag: "Gig Economy" },
  { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", desc: "Calculate your take-home pay in Texas with federal tax brackets, FICA, and zero state income tax.", icon: "🤠", tag: "Paycheck" },
  { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", desc: "Compute self-employment, federal, and CA state income taxes on your 1099 freelance income.", icon: "☀️", tag: "Self-Employment" },
  { href: "/calculators/stripe-fee-merchant-calculator", title: "Stripe Fee Calculator", desc: "See exactly how much Stripe charges per transaction and calculate your net payout instantly.", icon: "💳", tag: "Merchant Fees" },
  { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", desc: "Calculate gross profit, net profit, margin percentage, and ROI for any product you sell online.", icon: "📦", tag: "E-Commerce" },
  { href: "/calculators/freelancer-platform-fee-comparison", title: "Freelancer Fee Comparison", desc: "Compare Upwork vs Fiverr fees side-by-side and see which platform gives you more net earnings.", icon: "💼", tag: "Freelancing" },
  { href: "/calculators/ev-charging-vs-gas-savings", title: "EV vs Gas Savings", desc: "Calculate your monthly and annual savings by switching from gas to electric vehicle charging.", icon: "⚡", tag: "Automotive" },
  { href: "/calculators/residential-solar-panel-roi", title: "Solar Panel ROI", desc: "Estimate your solar panel payback period, savings, and return on investment with the 30% federal credit.", icon: "🌞", tag: "Energy" },
  { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", desc: "Calculate eBay final value fees and your true net profit after all selling and shipping costs.", icon: "🏷️", tag: "Marketplace" },
  { href: "/calculators/airbnb-host-net-income", title: "Airbnb Host Net Income", desc: "Estimate your Airbnb net operating income after host fees, cleaning, and mortgage expenses.", icon: "🏠", tag: "Real Estate" },
  { href: "/calculators/us-import-tariff-calculator", title: "US Import Tariff Calculator", desc: "Calculate US import duties, Section 232 tariffs, MPF, HMF and total landed cost for any country.", icon: "🛃", tag: "Import & Trade" },
  { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", desc: "Estimate taxes on Uber, DoorDash, Fiverr, Etsy and Airbnb income. Includes SE tax and deductions.", icon: "💰", tag: "Gig Economy" },
  { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", desc: "Calculate your IRS mileage deduction at $0.725/mile for business, $0.205 for medical and $0.14 for charity.", icon: "🚗", tag: "Tax Deductions" },
  { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", desc: "Find your maximum Solo 401k contribution and tax savings. Covers SECURE 2.0 super catch-up for ages 60-63.", icon: "🏦", tag: "Retirement" },
  { href: "/calculators/paypal-fee-calculator", title: "PayPal Fee Calculator", desc: "Calculate exact PayPal fees, net payout and compare vs Stripe for any transaction type.", icon: "💳", tag: "Merchant Fees" },
  { href: "/calculators/vat-calculator-uk", title: "VAT Calculator UK", desc: "Add or remove 20% VAT instantly. Calculate net, gross, and VAT amounts for UK businesses and freelancers.", icon: "🇬🇧", tag: "Tax Tools" },
  { href: "/calculators/income-tax-calculator-uk", title: "Income Tax Calculator UK", desc: "Calculate UK Income Tax, National Insurance, and take-home pay for 2025-26. Accurate HMRC PAYE rates.", icon: "🇬🇧", tag: "Tax Tools" },
  { href: "/calculators/hourly-to-annual-salary-calculator-uk", title: "Hourly to Annual Salary UK", desc: "Convert your hourly rate to annual salary instantly. Includes standard hours, overtime, and statutory holiday pay.", icon: "💷", tag: "Tax Tools" },
  { href: "/calculators/mortgage-calculator-uk", title: "Mortgage Calculator UK", desc: "Estimate monthly repayments, total interest, stamp duty, and borrowing affordability for UK property.", icon: "🏡", tag: "Property" },
  { href: "/calculators/national-insurance-calculator-uk", title: "National Insurance Calculator UK", desc: "Calculate Class 1, 2 & 4 National Insurance contributions. Accurate HMRC rates for employees and self-employed.", icon: "📋", tag: "Tax Tools" },
  { href: "/calculators/self-assessment-tax-calculator-uk", title: "Self Assessment Tax Calculator UK", desc: "Estimate your Self Assessment tax bill, Class 2 & 4 NI, and payments on account for sole traders.", icon: "📊", tag: "Tax Tools" },
  { href: "/calculators/amazon-fba-fee-calculator", title: "Amazon FBA Fee Calculator", desc: "Calculate Amazon FBA fees, referral fees, fulfillment fees, and net profit per unit for 2026 sellers.", icon: "📦", tag: "E-Commerce" },
  { href: "/calculators/rental-property-roi-calculator", title: "Rental Property ROI Calculator", desc: "Calculate cap rate, cash-on-cash return, NOI, DSCR, and the 1% rule for any rental property investment.", icon: "📊", tag: "Real Estate" },
  { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", desc: "Calculate your 2026 capital gains tax liability. Estimate short-term and long-term gains taxes with federal brackets, NIIT, and state tax adjustments.", icon: "💰", tag: "Tax Tools" },
  { href: "/calculators/uber-tax-calculator-2026", title: "Uber Tax Calculator", desc: "Estimate self-employment taxes, mileage deductions, and quarterly payments for Uber drivers and rideshare workers.", icon: "🚗", tag: "Gig Economy" },
  { href: "/calculators/self-employment-tax-calculator-2026", title: "Self Employment Tax Calculator", desc: "Calculate your self-employment tax (15.3%) with Social Security and Medicare portions for 1099 workers.", icon: "💼", tag: "Self-Employment" },
  { href: "/calculators/new-york-paycheck-calculator-2026", title: "New York Paycheck Calculator", desc: "Calculate take-home pay in New York after federal withholding, FICA, and NY state income tax.", icon: "🗽", tag: "Paycheck" },
  { href: "/calculators/florida-paycheck-calculator-2026", title: "Florida Paycheck Calculator", desc: "Calculate take-home pay in Florida — no state income tax means more money in your pocket.", icon: "🌴", tag: "Paycheck" },
  { href: "/calculators/etsy-fee-calculator-2026", title: "Etsy Fee Calculator", desc: "Calculate Etsy seller fees including listing, transaction, and payment processing costs.", icon: "🧶", tag: "Marketplace" },
  { href: "/calculators/shopify-profit-calculator-2026", title: "Shopify Profit Calculator", desc: "Calculate Shopify store profits after subscription, transaction fees, COGS, and marketing costs.", icon: "🛒", tag: "E-Commerce" },
  { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", desc: "Calculate how much house you can afford based on income, down payment, debts, and interest rates.", icon: "🏡", tag: "Real Estate" },
  { href: "/calculators/dividend-tax-calculator-2026", title: "Dividend Tax Calculator", desc: "Calculate taxes on qualified and ordinary dividends with federal brackets, NIIT, and state tax.", icon: "📈", tag: "Tax Tools" },
  { href: "/calculators/amazon-seller-fee-calculator-2026", title: "Amazon Seller Fee Calculator", desc: "Calculate Amazon FBM referral fees, closing fees, and net profit for marketplace sellers.", icon: "📦", tag: "Marketplace" },
  { href: "/calculators/crypto-tax-calculator-2026", title: "Crypto Tax Calculator", desc: "Calculate cryptocurrency capital gains taxes for short-term and long-term crypto trades.", icon: "₿", tag: "Tax Tools" },
  { href: "/calculators/small-business-tax-deduction-calculator", title: "Small Business Tax Deduction Calculator", desc: "Calculate your small business tax deductions, SE tax, QBI deduction, and quarterly payments for 2026.", icon: "💼", tag: "Self-Employment" },
  { href: "/calculators/gig-economy-net-income-calculator", title: "Gig Economy Net Income Calculator", desc: "Calculate your actual take-home pay after mileage, expenses, and SE tax for Uber, DoorDash, and more.", icon: "🚗", tag: "Gig Economy" },
  { href: "/calculators/credit-card-payoff-calculator", title: "Credit Card Payoff Calculator", desc: "Compare snowball vs avalanche debt payoff methods. Add multiple cards and see how extra payments save you thousands.", icon: "💳", tag: "Debt Payoff" },
  { href: "/calculators/student-loan-payoff-calculator", title: "Student Loan Payoff Calculator", desc: "Calculate student loan payments, total interest, and payoff timeline. See how extra payments save thousands.", icon: "🎓", tag: "Debt Payoff" },
  { href: "/calculators/car-loan-affordability-calculator-2026", title: "Car Loan Affordability Calculator", desc: "Calculate monthly car payments, total interest, and whether a car fits your budget with DTI analysis and total cost of ownership.", icon: "🚘", tag: "Auto & Loans" },
  { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", desc: "Project your retirement savings growth, monthly income using the 4% rule, and income replacement rate.", icon: "🏦", tag: "Retirement" },
  { href: "/calculators/college-savings-calculator-2026", title: "College Savings Calculator", desc: "Project 529 plan growth, estimate college costs, calculate state tax deductions, and find your monthly savings target.", icon: "🎓", tag: "Savings & Education" },
  { href: "/calculators/roth-vs-traditional-ira-calculator-2026", title: "Roth vs Traditional IRA Calculator", desc: "Compare Roth IRA vs Traditional IRA side-by-side to see which account type saves you more at retirement.", icon: "🏦", tag: "Retirement" },
  { href: "/calculators/emergency-fund-calculator", title: "Emergency Fund Calculator", desc: "Calculate your emergency fund target based on monthly expenses, income stability, and current savings.", icon: "🆘", tag: "Personal Finance" },
  { href: "/calculators/net-worth-calculator", title: "Net Worth Calculator", desc: "Calculate your net worth by adding up all assets and liabilities with asset allocation analysis.", icon: "📊", tag: "Personal Finance" },
  { href: "/calculators/mortgage-refinance-calculator-2026", title: "Mortgage Refinance Calculator", desc: "Calculate savings, break-even point, and total interest when refinancing your mortgage.", icon: "🏠", tag: "Real Estate" },
  { href: "/calculators/loan-comparison-calculator", title: "Loan Comparison Calculator", desc: "Compare two loans side-by-side with monthly payment, total interest, APR, and total cost.", icon: "💰", tag: "Loans" },
  { href: "/calculators/savings-goal-calculator", title: "Savings Goal Calculator", desc: "Project how your savings grow with regular contributions and compound interest.", icon: "🎯", tag: "Savings & Planning" },
  { href: "/calculators/inflation-calculator", title: "Inflation Calculator", desc: "See how inflation erodes your purchasing power over time with year-by-year breakdowns.", icon: "📈", tag: "Savings & Planning" },
  { href: "/calculators/cost-of-living-calculator", title: "Cost of Living Calculator", desc: "Compare the cost of living between two cities and see how much salary you need to maintain your lifestyle.", icon: "🏙️", tag: "Personal Finance" },
  { href: "/calculators/commission-calculator", title: "Commission Calculator", desc: "Calculate commission earnings with tiered rates, splits, draws, and bonuses.", icon: "💼", tag: "Personal Finance" },
  { href: "/calculators/401k-retirement-calculator", title: "401(k) Retirement Calculator", desc: "Project your 401(k) growth with employer match, catch-up contributions, and compound interest.", icon: "🏦", tag: "Retirement" },
  { href: "/calculators/budget-calculator", title: "Budget Calculator", desc: "Create a personal budget with the 50/30/20 rule — track income, expenses, and savings goals.", icon: "📋", tag: "Personal Finance" },
  { href: "/calculators/mortgage-calculator-us", title: "Mortgage Calculator US", desc: "Calculate monthly US mortgage payments with PITI, PMI, and a full amortization schedule.", icon: "🏡", tag: "Real Estate" },
  { href: "/calculators/roth-ira-growth-calculator", title: "Roth IRA Growth Calculator", desc: "Project your Roth IRA growth with annual contributions and tax-free compound interest.", icon: "📈", tag: "Retirement" },
  { href: "/calculators/amortization-calculator", title: "Amortization Calculator", desc: "See your full loan amortization schedule with principal vs interest breakdown.", icon: "📊", tag: "Loans" },
  { href: "/calculators/hourly-wage-calculator-us", title: "Hourly Wage Calculator US", desc: "Convert hourly wage to annual, monthly, and weekly salary with overtime calculations.", icon: "💵", tag: "Paycheck" },
  { href: "/calculators/dti-ratio-calculator", title: "DTI Ratio Calculator", desc: "Calculate front-end and back-end debt-to-income ratios for mortgage and loan approvals.", icon: "📉", tag: "Loans" },
];

const tickerTools = [
  "DoorDash Tax Estimator", "Texas Paycheck Calculator", "California 1099 Tax",
  "Stripe Fee Calculator", "E-Commerce Profit Margin", "eBay Fee & Profit",
  "Airbnb Host Income", "Side Hustle Tax", "IRS Mileage Deduction",
  "Solo 401k Calculator", "UK Income Tax", "VAT Calculator UK",
  "Crypto Tax Calculator", "Roth IRA Growth", "Mortgage Calculator US",
  "401(k) Retirement", "Budget Calculator", "Home Affordability",
];

const faqs = [
  {
    q: "Are the calculators on TheMetricApp free?",
    a: "Yes — every calculator on TheMetricApp is 100% free. No sign-up, no credit card, no hidden fees. Just instant, accurate financial calculations for freelancers, sellers, and business owners in the US and UK.",
  },
  {
    q: "How accurate are these financial calculators?",
    a: "Our calculators use the latest 2026 tax rates, fee schedules, and financial formulas from official sources including the IRS, HMRC, Shopify, Stripe, PayPal, Etsy, Amazon, and the CFPB. Results are estimates — for professional tax or legal advice, consult a qualified accountant.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account needed. All calculators work instantly in your browser with no sign-up, no email required, and no data stored. Your numbers never leave your device.",
  },
  {
    q: "Which calculators do you offer for UK users?",
    a: 'We offer several UK-specific tools: <a href="/calculators/vat-calculator-uk" class="underline" style="color:var(--color-gold)">VAT Calculator UK</a>, <a href="/calculators/income-tax-calculator-uk" class="underline" style="color:var(--color-gold)">Income Tax Calculator UK</a>, <a href="/calculators/national-insurance-calculator-uk" class="underline" style="color:var(--color-gold)">National Insurance Calculator UK</a>, <a href="/calculators/self-assessment-tax-calculator-uk" class="underline" style="color:var(--color-gold)">Self Assessment Tax Calculator UK</a>, <a href="/calculators/mortgage-calculator-uk" class="underline" style="color:var(--color-gold)">Mortgage Calculator UK</a>, and more.',
  },
  {
    q: "How often are tax rates and fee schedules updated?",
    a: "All calculators are updated annually (or as rates change) to reflect the latest tax brackets, fee schedules, and financial regulations. Each calculator page displays its last updated date and cites official sources for full transparency.",
  },
];

const featuredBlogPosts = blogPosts.slice(0, 6);

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a.replace(/<[^>]*>/g, "") },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TheMetricApp",
    url: "https://www.themetricapp.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.themetricapp.com/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    description:
      "Free online financial calculators and tax estimators for freelancers, gig workers, sellers, and small business owners.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TheMetricApp",
    url: "https://www.themetricapp.com",
    logo: "https://www.themetricapp.com/logo.png",
    sameAs: ["https://twitter.com/themetricapp"],
    description:
      "Free financial calculators, tax estimators, and business tools for freelancers, sellers, and self-employed professionals.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ========== UTILITY BAR ========== */}
      <div className="text-center py-2 text-[12.5px] tracking-wide" style={{ background: "var(--color-navy-deep)", color: "rgba(255,255,255,0.7)" }}>
        100% Free &nbsp;&middot;&nbsp; No Sign-Up &nbsp;&middot;&nbsp; <b style={{ color: "var(--color-gold-soft)", fontWeight: 600 }}>2026 Rates Updated</b> &nbsp;&middot;&nbsp; US &amp; UK Markets
      </div>

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-bg-main)" }}>
        <div
          className="mx-auto max-w-6xl px-4 sm:px-6"
          style={{ background: "radial-gradient(1000px 380px at 10% -10%, rgba(124,58,237,0.07) 0%, transparent 60%)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_470px] gap-14 items-center py-16 lg:py-[70px]">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.08em] uppercase mb-6" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)" }}>
                <span className="w-[26px] h-[1.5px] inline-block" style={{ background: "var(--color-gold)" }} />
                55+ free financial tools
              </div>

              <h1 className="text-[42px] sm:text-[58px] leading-[1.04] tracking-[-0.025em] font-semibold mb-6" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}>
                Free financial calculators{" "}
                <em className="brand-gradient-text" style={{ fontStyle: "italic" }}>for the self-employed.</em>
              </h1>

              <p className="text-[18px] max-w-[470px] mb-8 leading-relaxed" style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
                Fast, accurate tools for taxes, fees, profits, savings and ROI — built for freelancers, gig workers, sellers and small business. No sign-up, no clutter, just the numbers.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3.5 mb-8">
                <a
                  href="#calculators"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "var(--brand-gradient)", color: "#fff", fontFamily: "var(--font-body)" }}
                >
                  Explore All Tools
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold rounded-lg border transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "transparent", color: "var(--color-navy)", borderColor: "var(--color-border)", fontFamily: "var(--font-body)" }}
                >
                  Read Our Guides
                </a>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                {["Instant results", "No account needed", "🇺🇸 & 🇬🇧 covered"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 text-[13.5px] font-semibold rounded-full px-3.5 py-1.5 border"
                    style={{ color: "var(--color-navy)", background: "var(--color-bg-tertiary)", borderColor: "var(--color-border)", fontFamily: "var(--font-body)" }}
                  >
                    <span className="w-[7px] h-[7px] rounded-full inline-block" style={{ background: "var(--color-gold)" }} />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Hero Calculator Card (Vault navy) */}
            <div className="hidden lg:block">
              <div className="rounded-[18px] p-7 text-white" style={{ background: "linear-gradient(140deg, #1e3a8a 0%, #4c1d95 100%)", boxShadow: "0 30px 60px -24px rgba(76,29,149,0.55)" }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-[34px] h-[34px] rounded-[9px] grid place-items-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                      <span className="w-[14px] h-[14px] border-2 rounded block" style={{ borderColor: "var(--color-gold)" }} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold" style={{ fontFamily: "var(--font-body)" }}>Self-Employment Tax</h3>
                      <small className="text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>2026 &middot; estimate</small>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em]" style={{ color: "var(--color-gold-soft)" }}>
                    <span className="w-[7px] h-[7px] rounded-full" style={{ background: "var(--color-gold)" }} />
                    Live
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 mb-5">
                  {[
                    ["Net 1099 income", "$82,000"],
                    ["SE tax (15.3%)", "$11,585"],
                    ["Federal income tax", "$9,240"],
                    ["QBI deduction", "−$5,100"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between text-[13.5px]">
                      <span style={{ color: "rgba(255,255,255,0.6)" }}>{k}</span>
                      <span className="font-semibold">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-[13px] p-5 flex items-end justify-between" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div>
                    <small className="text-[12.5px] block mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Estimated total tax to set aside</small>
                    <div className="text-[38px] font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>$12,450</div>
                  </div>
                  <div className="text-[12px] font-semibold rounded-md px-2.5 py-1.5" style={{ color: "var(--color-gold-soft)", border: "1px solid rgba(167,139,250,0.45)" }}>
                    Quarterly ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE ========== */}
      <div className="border-t border-b overflow-hidden py-4" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-tertiary)" }}>
        <div className="flex whitespace-nowrap" style={{ width: "max-content", animation: "ticker 38s linear infinite" }}>
          {[...Array(2)].map((_, arrIdx) => (
            <div key={arrIdx} className="flex items-center shrink-0">
              {tickerTools.map((tool, i) => (
                <span key={i} className="inline-flex items-center gap-6 px-6 text-[15px] font-semibold" style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}>
                  {tool}
                  <span className="w-[5px] h-[5px] rounded-full inline-block" style={{ background: "var(--color-gold)" }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ========== STAT STRIP ========== */}
      <section className="border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4">
          {[
            ["55", "+", "Free calculators"],
            ["100", "%", "Free to use"],
            ["2026", "", "Updated rates"],
            ["US", "+UK", "Markets covered"],
          ].map(([n, sym, label], i) => (
            <div key={i} className="text-center py-10 border-r last:border-r-0" style={{ borderColor: "var(--color-border)" }}>
              <div className="text-[40px] font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)", letterSpacing: "-0.02em" }}>
                {n}<span style={{ color: "var(--color-gold)" }}>{sym}</span>
              </div>
              <small className="text-[14px]" style={{ color: "var(--color-text-secondary)" }}>{label}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ========== WHY THEMETRICAPP ========== */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center mb-11 max-w-[660px] mx-auto">
          <div className="inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.08em] uppercase mb-4 justify-center" style={{ color: "var(--color-gold)" }}>
            <span className="w-[26px] h-[1.5px] inline-block" style={{ background: "var(--color-gold)" }} />
            Why TheMetricApp
          </div>
          <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight mb-3.5" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
            Built for real people who need fast, reliable answers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Instant results, no sign-up", desc: "Every calculator runs immediately in your browser. No accounts, no emails, no data collection — just type your numbers and get answers.", iconType: "bolt" },
            { title: "2026 tax rates & fee data", desc: "Updated with the latest IRS brackets, HMRC rates, and platform fees from Shopify, Stripe, PayPal, Etsy and Amazon.", iconType: "gauge" },
            { title: "US & UK tools", desc: "Country-specific calculators for income tax, National Insurance, VAT, mortgages and take-home pay across both markets.", iconType: "globe" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
              <div className="w-[50px] h-[50px] rounded-xl grid place-items-center mb-5" style={{ background: "var(--color-navy)" }}>
                {item.iconType === "bolt" && (
                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none"><path d="M8 0L0 12h6l-2 8 8-12H6l2-8z" fill="#c4b5fd" /></svg>
                )}
                {item.iconType === "gauge" && (
                  <span className="w-5 h-5 rounded-full border-[2.5px]" style={{ borderColor: "var(--color-gold)" }} />
                )}
                {item.iconType === "globe" && (
                  <span className="relative w-5 h-5 rounded-full border-[2.5px]" style={{ borderColor: "var(--color-gold)" }}>
                    <span className="absolute inset-[-2.5px] rounded-full border-[2.5px]" style={{ borderColor: "var(--color-gold)", left: "5px", right: "5px" }} />
                  </span>
                )}
              </div>
              <h3 className="text-[20px] font-semibold mb-2.5" style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}>{item.title}</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section style={{ background: "var(--color-bg-tertiary)" }}>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-11">
            <div className="inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.08em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
              <span className="w-[26px] h-[1.5px] inline-block" style={{ background: "var(--color-gold)" }} />
              Browse by category
            </div>
            <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight mb-3.5" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
              Find the right tool fast
            </h2>
            <p className="text-[17px]" style={{ color: "var(--color-text-secondary)" }}>
              Organized by the topics that matter to you — start with a category and drill in.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Gig Economy & Self-Employment", desc: "Taxes, mileage and net income for Uber, DoorDash, freelancers and side hustles.", count: "9 calculators", href: "/calculators/side-hustle-tax-calculator" },
              { title: "Taxes & Payroll", desc: "Federal, state and self-employment tax with 2026 rates, brackets and deductions.", count: "12 calculators", href: "/calculators/california-1099-tax-calculator" },
              { title: "Merchant Fees & E-Commerce", desc: "True profit after Stripe, PayPal, eBay, Amazon, Etsy and Shopify fees.", count: "10 calculators", href: "/calculators/stripe-fee-merchant-calculator" },
              { title: "Real Estate & Property", desc: "Home affordability, rental ROI, mortgage refinancing and loan comparisons.", count: "8 calculators", href: "/calculators/rental-property-roi-calculator" },
              { title: "Retirement & Savings", desc: "Solo 401k, IRA comparisons, savings goals and inflation projections.", count: "9 calculators", href: "/calculators/retirement-savings-calculator-2026" },
              { title: "UK Financial Tools", desc: "Income tax, National Insurance, VAT, mortgages and salary conversions.", count: "7 calculators", href: "/calculators/income-tax-calculator-uk" },
            ].map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group rounded-2xl border p-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 block"
                style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)", textDecoration: "none" }}
              >
                <h3 className="text-[19px] font-semibold mb-2 flex items-center justify-between" style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}>
                  {cat.title}
                  <span style={{ color: "var(--color-gold)" }}>→</span>
                </h3>
                <p className="text-[14.5px] mb-3.5 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{cat.desc}</p>
                <div className="text-[13px] font-bold tracking-wide" style={{ color: "var(--color-navy)" }}>{cat.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CALCULATOR GRID ========== */}
      <CalculatorGrid calculators={calculators} />

      {/* ========== BLOG ========== */}
      <section style={{ background: "var(--color-bg-tertiary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight mb-3" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
                Latest from Our Blog
              </h2>
              <p className="text-[17px] max-w-xl" style={{ color: "var(--color-text-secondary)" }}>
                Expert guides, tax tips, and in-depth explanations to help you make smarter financial decisions.
              </p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: "var(--color-gold)" }}>
              View All Posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogPosts.map((post, i) => {
              const catStyle = getCategoryStyle(post.category);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}
                >
                  <div className={`h-[180px] bg-gradient-to-br ${catStyle.gradient} flex items-center justify-center`} role="img" aria-label={`${post.category} article`}>
                    <span className="text-5xl opacity-30" aria-hidden="true">{catStyle.emoji}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "var(--color-text-muted)" }}>
                      <time dateTime={new Date(post.date).toISOString().split("T")[0]}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-[18px] font-semibold mb-2 leading-snug transition-colors" style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}>
                      {post.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed line-clamp-3 mb-4" style={{ color: "var(--color-text-secondary)" }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--color-gold)" }}>
                      <span>Read Article</span>
                      <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: "var(--color-gold)" }}>
              View All Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== RICH SEO CONTENT ========== */}
      <HomepageRichSeo />

      {/* ========== FAQ ========== */}
      <section style={{ background: "var(--color-bg-tertiary)" }}>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.08em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
                <span className="w-[26px] h-[1.5px] inline-block" style={{ background: "var(--color-gold)" }} />
                FAQ
              </div>
              <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight mb-3.5" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
                Common questions
              </h2>
              <p className="text-[17px]" style={{ color: "var(--color-text-secondary)" }}>
                Everything about using the free tools.
              </p>
            </div>
            <div className="flex flex-col">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-t py-5.5" style={{ borderColor: "var(--color-border)" }}>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <h4 className="text-[17px] font-semibold group-hover:text-[var(--color-gold)] transition-colors" style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}>{faq.q}</h4>
                      <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform duration-200" style={{ color: "var(--color-text-muted)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </summary>
                    <div className="mt-2 text-[14.5px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }} dangerouslySetInnerHTML={{ __html: faq.a }} />
                  </details>
                </div>
              ))}
              <div className="border-b" style={{ borderColor: "var(--color-border)" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import CalculatorGrid from "@/components/CalculatorGrid";

const calculators = [
  {
    href: "/calculators/doordash-tax-estimator",
    title: "DoorDash Tax Estimator",
    desc: "Estimate your self-employment taxes, mileage deductions, and net earnings as a DoorDash driver.",
    icon: "🚗",
    tag: "Gig Economy",
  },
  {
    href: "/calculators/texas-paycheck-calculator",
    title: "Texas Paycheck Calculator",
    desc: "Calculate your take-home pay in Texas with federal tax brackets, FICA, and zero state income tax.",
    icon: "🤠",
    tag: "Paycheck",
  },
  {
    href: "/calculators/california-1099-tax-calculator",
    title: "California 1099 Tax Calculator",
    desc: "Compute self-employment, federal, and CA state income taxes on your 1099 freelance income.",
    icon: "☀️",
    tag: "Self-Employment",
  },
  {
    href: "/calculators/stripe-fee-merchant-calculator",
    title: "Stripe Fee Calculator",
    desc: "See exactly how much Stripe charges per transaction and calculate your net payout instantly.",
    icon: "💳",
    tag: "Merchant Fees",
  },
  {
    href: "/calculators/ecommerce-net-profit-margin",
    title: "E-Commerce Profit Margin",
    desc: "Calculate gross profit, net profit, margin percentage, and ROI for any product you sell online.",
    icon: "📦",
    tag: "E-Commerce",
  },
  {
    href: "/calculators/freelancer-platform-fee-comparison",
    title: "Freelancer Fee Comparison",
    desc: "Compare Upwork vs Fiverr fees side-by-side and see which platform gives you more net earnings.",
    icon: "💼",
    tag: "Freelancing",
  },
  {
    href: "/calculators/ev-charging-vs-gas-savings",
    title: "EV vs Gas Savings",
    desc: "Calculate your monthly and annual savings by switching from gas to electric vehicle charging.",
    icon: "⚡",
    tag: "Automotive",
  },
  {
    href: "/calculators/residential-solar-panel-roi",
    title: "Solar Panel ROI",
    desc: "Estimate your solar panel payback period, savings, and return on investment with the 30% federal credit.",
    icon: "🌞",
    tag: "Energy",
  },
  {
    href: "/calculators/ebay-seller-fee-profit",
    title: "eBay Seller Fee & Profit",
    desc: "Calculate eBay final value fees and your true net profit after all selling and shipping costs.",
    icon: "🏷️",
    tag: "Marketplace",
  },
  {
    href: "/calculators/airbnb-host-net-income",
    title: "Airbnb Host Net Income",
    desc: "Estimate your Airbnb net operating income after host fees, cleaning, and mortgage expenses.",
    icon: "🏠",
    tag: "Real Estate",
  },
  {
    href: "/calculators/us-import-tariff-calculator",
    title: "US Import Tariff Calculator",
    desc: "Calculate US import duties, Section 232 tariffs, MPF, HMF and total landed cost for any country.",
    icon: "🛃",
    tag: "Import & Trade",
  },
  {
    href: "/calculators/side-hustle-tax-calculator",
    title: "Side Hustle Tax Calculator",
    desc: "Estimate taxes on Uber, DoorDash, Fiverr, Etsy and Airbnb income. Includes SE tax and deductions.",
    icon: "💰",
    tag: "Gig Economy",
  },
  {
    href: "/calculators/irs-mileage-deduction-calculator",
    title: "IRS Mileage Deduction Calculator",
    desc: "Calculate your IRS mileage deduction at $0.67/mile for business, $0.21 for medical and $0.14 for charity.",
    icon: "🚗",
    tag: "Tax Deductions",
  },
  {
    href: "/calculators/solo-401k-contribution-calculator",
    title: "Solo 401k Contribution Calculator",
    desc: "Find your maximum Solo 401k contribution and tax savings. Covers SECURE 2.0 super catch-up for ages 60-63.",
    icon: "🏦",
    tag: "Retirement",
  },
  {
    href: "/calculators/paypal-fee-calculator",
    title: "PayPal Fee Calculator",
    desc: "Calculate exact PayPal fees, net payout and compare vs Stripe for any transaction type.",
    icon: "💳",
    tag: "Merchant Fees",
  },
  {
    href: "/calculators/vat-calculator-uk",
    title: "VAT Calculator UK",
    desc: "Add or remove 20% VAT instantly. Calculate net, gross, and VAT amounts for UK businesses and freelancers.",
    icon: "🇬🇧",
    tag: "Tax Tools",
  },
  {
    href: "/calculators/income-tax-calculator-uk",
    title: "Income Tax Calculator UK",
    desc: "Calculate UK Income Tax, National Insurance, and take-home pay for 2025-26. Accurate HMRC PAYE rates.",
    icon: "🇬🇧",
    tag: "Tax Tools",
  },
  {
    href: "/calculators/hourly-to-annual-salary-calculator-uk",
    title: "Hourly to Annual Salary UK",
    desc: "Convert your hourly rate to annual salary instantly. Includes standard hours, overtime, and statutory holiday pay.",
    icon: "💷",
    tag: "Tax Tools",
  },
  {
    href: "/calculators/mortgage-calculator-uk",
    title: "Mortgage Calculator UK",
    desc: "Estimate monthly repayments, total interest, stamp duty, and borrowing affordability for UK property.",
    icon: "🏡",
    tag: "Property",
  },
  {
    href: "/calculators/national-insurance-calculator-uk",
    title: "National Insurance Calculator UK",
    desc: "Calculate Class 1, 2 & 4 National Insurance contributions. Accurate HMRC rates for employees and self-employed.",
    icon: "📋",
    tag: "Tax Tools",
  },
  {
    href: "/calculators/self-assessment-tax-calculator-uk",
    title: "Self Assessment Tax Calculator UK",
    desc: "Estimate your Self Assessment tax bill, Class 2 & 4 NI, and payments on account for sole traders.",
    icon: "📊",
    tag: "Tax Tools",
  },
  {
    href: "/calculators/amazon-fba-fee-calculator",
    title: "Amazon FBA Fee Calculator",
    desc: "Calculate Amazon FBA fees, referral fees, fulfillment fees, and net profit per unit for 2026 sellers.",
    icon: "📦",
    tag: "E-Commerce",
  },
  {
    href: "/calculators/rental-property-roi-calculator",
    title: "Rental Property ROI Calculator",
    desc: "Calculate cap rate, cash-on-cash return, NOI, DSCR, and the 1% rule for any rental property investment.",
    icon: "📊",
    tag: "Real Estate",
  },
  {
    href: "/calculators/capital-gains-tax-calculator",
    title: "Capital Gains Tax Calculator",
    desc: "Calculate your 2026 capital gains tax liability. Estimate short-term and long-term gains taxes with federal brackets, NIIT, and state tax adjustments.",
    icon: "💰",
    tag: "Tax Tools",
  },
  {
    href: "/calculators/uber-tax-calculator-2026",
    title: "Uber Tax Calculator",
    desc: "Estimate self-employment taxes, mileage deductions, and quarterly payments for Uber drivers and rideshare workers.",
    icon: "🚗",
    tag: "Gig Economy",
  },
  {
    href: "/calculators/self-employment-tax-calculator-2026",
    title: "Self Employment Tax Calculator",
    desc: "Calculate your self-employment tax (15.3%) with Social Security and Medicare portions for 1099 workers.",
    icon: "💼",
    tag: "Self-Employment",
  },
  {
    href: "/calculators/new-york-paycheck-calculator-2026",
    title: "New York Paycheck Calculator",
    desc: "Calculate take-home pay in New York after federal withholding, FICA, and NY state income tax.",
    icon: "🗽",
    tag: "Paycheck",
  },
  {
    href: "/calculators/florida-paycheck-calculator-2026",
    title: "Florida Paycheck Calculator",
    desc: "Calculate take-home pay in Florida — no state income tax means more money in your pocket.",
    icon: "🌴",
    tag: "Paycheck",
  },
  {
    href: "/calculators/etsy-fee-calculator-2026",
    title: "Etsy Fee Calculator",
    desc: "Calculate Etsy seller fees including listing, transaction, and payment processing costs.",
    icon: "🧶",
    tag: "Marketplace",
  },
  {
    href: "/calculators/shopify-profit-calculator-2026",
    title: "Shopify Profit Calculator",
    desc: "Calculate Shopify store profits after subscription, transaction fees, COGS, and marketing costs.",
    icon: "🛒",
    tag: "E-Commerce",
  },
  {
    href: "/calculators/home-affordability-calculator-2026",
    title: "Home Affordability Calculator",
    desc: "Calculate how much house you can afford based on income, down payment, debts, and interest rates.",
    icon: "🏡",
    tag: "Real Estate",
  },
  {
    href: "/calculators/dividend-tax-calculator-2026",
    title: "Dividend Tax Calculator",
    desc: "Calculate taxes on qualified and ordinary dividends with federal brackets, NIIT, and state tax.",
    icon: "📈",
    tag: "Tax Tools",
  },
  {
    href: "/calculators/amazon-seller-fee-calculator-2026",
    title: "Amazon Seller Fee Calculator",
    desc: "Calculate Amazon FBM referral fees, closing fees, and net profit for marketplace sellers.",
    icon: "📦",
    tag: "Marketplace",
  },
  {
    href: "/calculators/crypto-tax-calculator-2026",
    title: "Crypto Tax Calculator",
    desc: "Calculate cryptocurrency capital gains taxes for short-term and long-term crypto trades.",
    icon: "₿",
    tag: "Tax Tools",
  },
  {
    href: "/calculators/small-business-tax-deduction-calculator",
    title: "Small Business Tax Deduction Calculator",
    desc: "Calculate your small business tax deductions, SE tax, QBI deduction, and quarterly payments for 2026.",
    icon: "💼",
    tag: "Self-Employment",
  },
  {
    href: "/calculators/gig-economy-net-income-calculator",
    title: "Gig Economy Net Income Calculator",
    desc: "Calculate your actual take-home pay after mileage, expenses, and SE tax for Uber, DoorDash, and more.",
    icon: "🚗",
    tag: "Gig Economy",
  },
  {
    href: "/calculators/credit-card-payoff-calculator",
    title: "Credit Card Payoff Calculator",
    desc: "Compare snowball vs avalanche debt payoff methods. Add multiple cards and see how extra payments save you thousands.",
    icon: "💳",
    tag: "Debt Payoff",
  },
  {
    href: "/calculators/student-loan-payoff-calculator",
    title: "Student Loan Payoff Calculator",
    desc: "Calculate student loan payments, total interest, and payoff timeline. See how extra payments save thousands.",
    icon: "🎓",
    tag: "Debt Payoff",
  },
  {
    href: "/calculators/car-loan-affordability-calculator-2026",
    title: "Car Loan Affordability Calculator",
    desc: "Calculate monthly car payments, total interest, and whether a car fits your budget with DTI analysis and total cost of ownership.",
    icon: "🚘",
    tag: "Auto & Loans",
  },
  {
    href: "/calculators/retirement-savings-calculator-2026",
    title: "Retirement Savings Calculator",
    desc: "Project your retirement savings growth, monthly income using the 4% rule, and income replacement rate.",
    icon: "🏦",
    tag: "Retirement",
  },
  {
    href: "/calculators/college-savings-calculator-2026",
    title: "College Savings Calculator",
    desc: "Project 529 plan growth, estimate college costs, calculate state tax deductions, and find your monthly savings target.",
    icon: "🎓",
    tag: "Savings & Education",
  },
  {
    href: "/calculators/roth-vs-traditional-ira-calculator-2026",
    title: "Roth vs Traditional IRA Calculator",
    desc: "Compare Roth IRA vs Traditional IRA side-by-side to see which account type saves you more at retirement.",
    icon: "🏦",
    tag: "Retirement",
  },
  {
    href: "/calculators/emergency-fund-calculator",
    title: "Emergency Fund Calculator",
    desc: "Calculate your emergency fund target based on monthly expenses, income stability, and current savings.",
    icon: "🆘",
    tag: "Personal Finance",
  },
  {
    href: "/calculators/net-worth-calculator",
    title: "Net Worth Calculator",
    desc: "Calculate your net worth by adding up all assets and liabilities with asset allocation analysis.",
    icon: "📊",
    tag: "Personal Finance",
  },
  {
    href: "/calculators/mortgage-refinance-calculator-2026",
    title: "Mortgage Refinance Calculator",
    desc: "Calculate savings, break-even point, and total interest when refinancing your mortgage.",
    icon: "🏠",
    tag: "Real Estate",
  },
  {
    href: "/calculators/loan-comparison-calculator",
    title: "Loan Comparison Calculator",
    desc: "Compare two loans side-by-side with monthly payment, total interest, APR, and total cost.",
    icon: "💰",
    tag: "Loans",
  },
  {
    href: "/calculators/savings-goal-calculator",
    title: "Savings Goal Calculator",
    desc: "Project how your savings grow with regular contributions and compound interest.",
    icon: "🎯",
    tag: "Savings & Planning",
  },
  {
    href: "/calculators/inflation-calculator",
    title: "Inflation Calculator",
    desc: "See how inflation erodes your purchasing power over time with year-by-year breakdowns.",
    icon: "📈",
    tag: "Savings & Planning",
  },
  {
    href: "/calculators/cost-of-living-calculator",
    title: "Cost of Living Calculator",
    desc: "Compare the cost of living between two cities and see how much salary you need to maintain your lifestyle.",
    icon: "🏙️",
    tag: "Personal Finance",
  },
  {
    href: "/calculators/commission-calculator",
    title: "Commission Calculator",
    desc: "Calculate commission earnings with tiered rates, splits, draws, and bonuses.",
    icon: "💼",
    tag: "Personal Finance",
  },
  {
    href: "/calculators/401k-retirement-calculator",
    title: "401(k) Retirement Calculator",
    desc: "Project your 401(k) growth with employer match, catch-up contributions, and compound interest.",
    icon: "🏦",
    tag: "Retirement",
  },
  {
    href: "/calculators/budget-calculator",
    title: "Budget Calculator",
    desc: "Create a personal budget with the 50/30/20 rule — track income, expenses, and savings goals.",
    icon: "📋",
    tag: "Personal Finance",
  },
  {
    href: "/calculators/mortgage-calculator-us",
    title: "Mortgage Calculator US",
    desc: "Calculate monthly US mortgage payments with PITI, PMI, and a full amortization schedule.",
    icon: "🏡",
    tag: "Real Estate",
  },
  {
    href: "/calculators/roth-ira-growth-calculator",
    title: "Roth IRA Growth Calculator",
    desc: "Project your Roth IRA growth with annual contributions and tax-free compound interest.",
    icon: "📈",
    tag: "Retirement",
  },
  {
    href: "/calculators/amortization-calculator",
    title: "Amortization Calculator",
    desc: "See your full loan amortization schedule with principal vs interest breakdown.",
    icon: "📊",
    tag: "Loans",
  },
  {
    href: "/calculators/hourly-wage-calculator-us",
    title: "Hourly Wage Calculator US",
    desc: "Convert hourly wage to annual, monthly, and weekly salary with overtime calculations.",
    icon: "💵",
    tag: "Paycheck",
  },
  {
    href: "/calculators/dti-ratio-calculator",
    title: "DTI Ratio Calculator",
    desc: "Calculate front-end and back-end debt-to-income ratios for mortgage and loan approvals.",
    icon: "📉",
    tag: "Loans",
  },
];

const categories = [
  {
    title: "Gig Economy & Self-Employment",
    desc: "Calculate taxes, mileage deductions, and net income for Uber, DoorDash, freelancers, and side hustles.",
    tools: ["🚗", "💰", "💼"],
    href: "/calculators/side-hustle-tax-calculator",
  },
  {
    title: "Taxes & Payroll",
    desc: "Federal, state, and self-employment tax calculators with 2026 rates, brackets, and deductions.",
    tools: ["☀️", "🗽", "🌴"],
    href: "/calculators/california-1099-tax-calculator",
  },
  {
    title: "Merchant Fees & E-Commerce",
    desc: "Calculate true profits after Stripe, PayPal, eBay, Amazon, Etsy, and Shopify fees.",
    tools: ["💳", "📦", "🛒"],
    href: "/calculators/stripe-fee-merchant-calculator",
  },
  {
    title: "Real Estate & Property",
    desc: "Evaluate home affordability, rental property ROI, mortgage refinancing, and loan comparisons.",
    tools: ["🏡", "📊", "🏠"],
    href: "/calculators/rental-property-roi-calculator",
  },
  {
    title: "Retirement & Savings",
    desc: "Plan for retirement with Solo 401k, IRA comparisons, savings goals, and inflation projections.",
    tools: ["🏦", "🎓", "🎯"],
    href: "/calculators/retirement-savings-calculator-2026",
  },
  {
    title: "UK Financial Tools",
    desc: "UK-specific calculators for income tax, National Insurance, VAT, mortgages, and salary conversions.",
    tools: ["🇬🇧", "📋", "💷"],
    href: "/calculators/income-tax-calculator-uk",
  },
];

const featuredBlogPosts = [
  {
    href: "/blog/self-employment-tax-tips-2026",
    title: "Self-Employment Tax Tips for 2026",
    excerpt: "Essential strategies for freelancers to reduce their SE tax bill — mileage deductions, home office write-offs, Solo 401k contributions, and the QBI deduction.",
    date: "May 15, 2026",
  },
  {
    href: "/blog/stripe-vs-paypal-fees-2026",
    title: "Stripe vs PayPal Fees in 2026",
    excerpt: "Which payment processor is cheaper? We break down the real cost of accepting payments with Stripe and PayPal, including hidden fees and international rates.",
    date: "May 8, 2026",
  },
  {
    href: "/blog/is-solar-worth-it-2026",
    title: "Is Solar Power Worth It in 2026?",
    excerpt: "With the 30% federal tax credit locked in through 2032 and rising electricity rates, we crunched the numbers for every state to find payback periods.",
    date: "April 28, 2026",
  },
];

const trustItems = [
  { label: "100% Free", desc: "No sign-up, no credit card, no data collection" },
  { label: "Instant Results", desc: "Calculations run in your browser — no page reloads" },
  { label: "2026 Updated", desc: "Latest tax rates, fee schedules, and formulas" },
  { label: "US & UK", desc: "Country-specific tools for both markets" },
];

const whyChoose = [
  {
    icon: "⚡",
    title: "Instant Results, No Sign-Up",
    desc: "All calculators work immediately in your browser. No accounts, no emails, no data collection — just type your numbers and get answers.",
  },
  {
    icon: "📊",
    title: "2026 Tax Rates & Fee Data",
    desc: "Updated annually with the latest IRS brackets, HMRC rates, and platform fee schedules from Shopify, Stripe, PayPal, Etsy, Amazon, and more.",
  },
  {
    icon: "🌍",
    title: "US & UK Tools",
    desc: "Covering both US and UK markets with country-specific calculators for taxes, National Insurance, VAT, mortgages, and take-home pay.",
  },
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
    a: 'We offer several UK-specific tools: <a href="/calculators/vat-calculator-uk" class="text-[#6366F1] dark:text-[#818CF8] underline">VAT Calculator UK</a>, <a href="/calculators/income-tax-calculator-uk" class="text-[#6366F1] dark:text-[#818CF8] underline">Income Tax Calculator UK</a>, <a href="/calculators/national-insurance-calculator-uk" class="text-[#6366F1] dark:text-[#818CF8] underline">National Insurance Calculator UK</a>, <a href="/calculators/self-assessment-tax-calculator-uk" class="text-[#6366F1] dark:text-[#818CF8] underline">Self Assessment Tax Calculator UK</a>, <a href="/calculators/mortgage-calculator-uk" class="text-[#6366F1] dark:text-[#818CF8] underline">Mortgage Calculator UK</a>, and more.',
  },
  {
    q: "How often are tax rates and fee schedules updated?",
    a: "All calculators are updated annually (or as rates change) to reflect the latest tax brackets, fee schedules, and financial regulations. Each calculator page displays its last updated date and cites official sources for full transparency.",
  },
];

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
    logo: "https://www.themetricapp.com/logo.svg",
    sameAs: ["https://twitter.com/themetricapp"],
    description:
      "Free financial calculators, tax estimators, and business tools for freelancers, sellers, and self-employed professionals.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF2FF] via-[#F9FAFB] to-[#F9FAFB] dark:from-[#0B0F19] dark:via-[#0B0F19] dark:to-[#0B0F19]">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#6366F1]/5 blur-3xl dark:bg-[#6366F1]/10" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/5 blur-3xl dark:bg-[#8B5CF6]/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 sm:px-6 text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E5E7EB] px-4 py-1.5 text-sm font-medium text-[#6B7280] mb-8 shadow-sm dark:bg-[#111827] dark:border-[#334155] dark:text-[#9CA3AF]">
            <span className="flex h-2 w-2 rounded-full bg-[#6366F1]" />
            100% Free — No Sign-Up Required
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-[#111827] dark:text-[#F9FAFB] leading-tight">
            Free Financial Calculators
            <br />
            <span className="text-gradient">for Freelancers &amp; Business Owners</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#6B7280] dark:text-[#9CA3AF] max-w-3xl mx-auto mb-10 leading-relaxed">
            Fast, accurate, and free online calculators for taxes, fees, profits, savings, and ROI.
            No sign-up, no ads clutter — just the numbers you need to make smarter financial decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#calculators"
              className="inline-flex items-center gap-2 rounded-xl bg-[#6366F1] text-white font-semibold px-7 py-3.5 text-base shadow-md shadow-[#6366F1]/20 hover:bg-[#4F46E5] hover:-translate-y-0.5 transition-all"
            >
              Explore All Tools
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] font-semibold px-7 py-3.5 text-base shadow-sm hover:bg-[#F9FAFB] hover:border-[#D1D5DB] transition-all dark:bg-[#111827] dark:border-[#334155] dark:text-[#F9FAFB] dark:hover:bg-[#0B0F19] dark:hover:border-[#6B7280]"
            >
              Read Our Guides
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#6366F1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <div className="text-left">
                  <p className="text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">{item.label}</p>
                  <p className="text-xs text-[#9CA3AF] dark:text-[#6B7280]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] dark:text-[#F9FAFB] tracking-tight mb-4">
            Why TheMetricApp?
          </h2>
          <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
            Built for real people who need fast, reliable financial answers without the hassle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChoose.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm hover:shadow-md transition-shadow dark:bg-[#111827] dark:border-[#1E293B]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#EEF2FF] text-2xl mb-5 dark:bg-[#6366F1]/15">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111827] dark:text-[#F9FAFB] mb-3">{item.title}</h3>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="bg-[#F3F4F6] dark:bg-[#0B0F19] border-y border-[#E5E7EB] dark:border-[#1E293B]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] dark:text-[#F9FAFB] tracking-tight mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
              Find the right tool fast — organized by the topics that matter to you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#111827] dark:border-[#1E293B]"
              >
                <div className="flex gap-2 mb-4">
                  {cat.tools.map((emoji, i) => (
                    <span key={i} className="text-lg">{emoji}</span>
                  ))}
                </div>
                <h3 className="text-base font-bold text-[#111827] dark:text-[#F9FAFB] mb-2 group-hover:text-[#6366F1] dark:group-hover:text-[#818CF8] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                  {cat.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CALCULATOR GRID ========== */}
      <CalculatorGrid calculators={calculators} />

      {/* ========== BLOG ========== */}
      <section className="bg-[#F3F4F6] dark:bg-[#0B0F19] border-y border-[#E5E7EB] dark:border-[#1E293B]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] dark:text-[#F9FAFB] tracking-tight mb-3">
                Latest from Our Blog
              </h2>
              <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-xl">
                Expert guides, tax tips, and in-depth explanations to help you make smarter financial decisions.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] dark:text-[#818CF8] dark:hover:text-[#A78BFA] transition-colors"
            >
              View All Posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#111827] dark:border-[#1E293B]"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6366F1] dark:text-[#818CF8] mb-3">
                  {post.date}
                </p>
                <h3 className="text-base font-bold text-[#111827] dark:text-[#F9FAFB] mb-2 group-hover:text-[#6366F1] dark:group-hover:text-[#818CF8] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#6366F1] dark:text-[#818CF8]">
                  <span>Read More</span>
                  <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] dark:text-[#818CF8] dark:hover:text-[#A78BFA] transition-colors"
            >
              View All Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] dark:text-[#F9FAFB] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-xl mx-auto">
            Common questions about using our free online calculators and tax tools.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden transition-all dark:bg-[#111827] dark:border-[#1E293B]"
            >
              <summary className="flex items-center justify-between px-6 py-5 text-base font-semibold text-[#111827] dark:text-[#F9FAFB] cursor-pointer hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <svg
                  className="w-5 h-5 shrink-0 text-[#9CA3AF] group-open:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div
                className="px-6 pb-5 text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.a }}
              />
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

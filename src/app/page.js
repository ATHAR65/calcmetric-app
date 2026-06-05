import Link from "next/link";
import CalculatorGrid from "@/components/CalculatorGrid";
import { blogPosts } from "@/lib/siteConfig";

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
    a: 'We offer several UK-specific tools: <a href="/calculators/vat-calculator-uk" class="text-[#E8521A] underline">VAT Calculator UK</a>, <a href="/calculators/income-tax-calculator-uk" class="text-[#E8521A] underline">Income Tax Calculator UK</a>, <a href="/calculators/national-insurance-calculator-uk" class="text-[#E8521A] underline">National Insurance Calculator UK</a>, <a href="/calculators/self-assessment-tax-calculator-uk" class="text-[#E8521A] underline">Self Assessment Tax Calculator UK</a>, <a href="/calculators/mortgage-calculator-uk" class="text-[#E8521A] underline">Mortgage Calculator UK</a>, and more.',
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
      <section className="relative overflow-hidden bg-[#FAF8F4]">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[80px] items-center"
            style={{ padding: "88px 56px 72px" }}
          >
            {/* Left: Hero Content */}
            <div>
              {/* Micro tags */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#E8E3DA] px-3.5 py-1.5 text-[11px] uppercase font-semibold tracking-wider text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: "#059669", boxShadow: "0 0 0 0 rgba(5,150,105,0.4)", animation: "pulse-dot 2s infinite" }} />
                  100% Free
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#E8E3DA] px-3.5 py-1.5 text-[11px] uppercase font-semibold tracking-wider text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  ⚡ Instant Results
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#E8E3DA] px-3.5 py-1.5 text-[11px] uppercase font-semibold tracking-wider text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  🇺🇸 🇬🇧 US & UK
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[66px] font-extrabold tracking-[-2.5px] leading-[1.1] text-[#1A1410] mb-6" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
                Free Financial Calculators <br />
                <em style={{ color: "#E8521A", fontStyle: "italic" }}>for the Self-Employed</em>
              </h1>

              <p className="text-lg text-[#8A7F72] max-w-xl mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                Fast, accurate, and free online calculators for taxes, fees, profits, savings, and ROI.
                No sign-up, no ads clutter — just the numbers you need to make smarter financial decisions.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#calculators"
                  className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white bg-[#1A1410] rounded-[100px] transition-all duration-300 hover:bg-[#E8521A] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(232,82,26,0.3)]"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
                >
                  Explore All Tools
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-[#1A1410] bg-white border border-[#E8E3DA] rounded-[100px] transition-all duration-300 hover:bg-[#FAF8F4] hover:-translate-y-[2px] hover:shadow-md"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
                >
                  Read Our Guides
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Floating Mock Calculator */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main calculator card */}
                <div className="rounded-[18px] bg-white border border-[#E8E3DA] p-6 shadow-[0_1px_4px_rgba(26,20,16,0.04)]" style={{ animation: "floatUD 4s ease-in-out infinite" }}>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-3 h-3 rounded-full bg-[#E8521A]" />
                    <div className="w-3 h-3 rounded-full bg-[#C4BAB0]" />
                    <div className="w-3 h-3 rounded-full bg-[#E8E3DA]" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-24 bg-[#F0EDE8] rounded-full" />
                    <div className="h-10 w-full bg-[#FAF8F4] rounded-[10px] border border-[#E8E3DA]" />
                    <div className="h-3 w-20 bg-[#F0EDE8] rounded-full" />
                    <div className="h-10 w-full bg-[#FAF8F4] rounded-[10px] border border-[#E8E3DA]" />
                    <div className="h-12 w-full bg-[#1A1410] rounded-[12px] flex items-center justify-center">
                      <span className="text-white text-sm font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>Calculate</span>
                    </div>
                    <div className="h-16 w-full bg-[#1A1410] rounded-[16px] flex items-center justify-center mt-2">
                      <div className="text-center">
                        <div className="text-[10px] uppercase text-[#8A7F72] tracking-wider">Your Result</div>
                        <div className="text-[28px] font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                          $<span style={{ color: "#E8521A" }}>12,450</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge 1 - UK */}
                <div className="absolute -right-6 top-8 rounded-[14px] bg-[#B45309] text-white px-4 py-3 shadow-lg" style={{ animation: "floatUD2 5s ease-in-out infinite" }}>
                  <div className="text-[10px] uppercase opacity-80 tracking-wider">UK Tax Ready</div>
                  <div className="text-sm font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>🇬🇧 HMRC Rates</div>
                </div>

                {/* Floating badge 2 - Tools */}
                <div className="absolute -left-4 bottom-16 rounded-[14px] bg-[#1A1410] text-white px-4 py-3 shadow-lg" style={{ animation: "floatUD 6s ease-in-out infinite" }}>
                  <div className="text-[10px] uppercase opacity-80 tracking-wider">Total Tools</div>
                  <div className="text-sm font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    <span style={{ color: "#E8521A" }}>55+</span> Calculators
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TICKER ========== */}
      <div className="bg-[#1A1410] py-3.5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "ticker 28s linear infinite" }}>
          {[...Array(2)].map((_, arrIdx) => (
            <div key={arrIdx} className="flex items-center gap-8 mx-4 shrink-0">
              {tickerTools.map((tool, i) => (
                <span key={i} className="inline-flex items-center gap-3 text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(250,248,244,0.35)" }}>
                  {tool}
                  <span style={{ color: "#E8521A" }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ========== STATS BAND ========== */}
      <section className="bg-white border-t border-b border-[#E8E3DA]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              <p className="text-[30px] font-extrabold text-[#1A1410]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
                55<span style={{ color: "#E8521A" }}>+</span>
              </p>
              <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Free Calculators</p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              <p className="text-[30px] font-extrabold text-[#1A1410]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
                100<span style={{ color: "#E8521A" }}>%</span>
              </p>
              <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Free to Use</p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              <p className="text-[30px] font-extrabold text-[#1A1410]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
                2026
              </p>
              <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Updated Rates</p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
              <p className="text-[30px] font-extrabold text-[#1A1410]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
                US<span style={{ color: "#E8521A" }}>+</span>UK
              </p>
              <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Markets Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
            Why TheMetricApp?
          </h2>
          <p className="text-lg text-[#8A7F72] max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Built for real people who need fast, reliable financial answers without the hassle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
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
          ].map((item, i) => (
            <div
              key={item.title}
              className="card-green-line rounded-[18px] border border-[#E8E3DA] bg-white p-8 shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[5px] hover:scale-[1.01] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300"
              style={{
                animation: `fadeUp 0.6s ease-out ${0.1 + i * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FAF8F4] border border-[#E8E3DA] text-2xl mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A1410] mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>{item.title}</h3>
              <p className="text-sm text-[#8A7F72] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="bg-[#F0EDE8] border-y border-[#E8E3DA]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
              Browse by Category
            </h2>
            <p className="text-lg text-[#8A7F72] max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Find the right tool fast — organized by the topics that matter to you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Gig Economy & Self-Employment", desc: "Calculate taxes, mileage deductions, and net income for Uber, DoorDash, freelancers, and side hustles.", tools: ["🚗", "💰", "💼"], href: "/calculators/side-hustle-tax-calculator" },
              { title: "Taxes & Payroll", desc: "Federal, state, and self-employment tax calculators with 2026 rates, brackets, and deductions.", tools: ["☀️", "🗽", "🌴"], href: "/calculators/california-1099-tax-calculator" },
              { title: "Merchant Fees & E-Commerce", desc: "Calculate true profits after Stripe, PayPal, eBay, Amazon, Etsy, and Shopify fees.", tools: ["💳", "📦", "🛒"], href: "/calculators/stripe-fee-merchant-calculator" },
              { title: "Real Estate & Property", desc: "Evaluate home affordability, rental property ROI, mortgage refinancing, and loan comparisons.", tools: ["🏡", "📊", "🏠"], href: "/calculators/rental-property-roi-calculator" },
              { title: "Retirement & Savings", desc: "Plan for retirement with Solo 401k, IRA comparisons, savings goals, and inflation projections.", tools: ["🏦", "🎓", "🎯"], href: "/calculators/retirement-savings-calculator-2026" },
              { title: "UK Financial Tools", desc: "UK-specific calculators for income tax, National Insurance, VAT, mortgages, and salary conversions.", tools: ["🇬🇧", "📋", "💷"], href: "/calculators/income-tax-calculator-uk" },
            ].map((cat, i) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group rounded-[18px] border border-[#E8E3DA] bg-white p-6 shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[3px] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300"
                style={{
                  animation: `fadeUp 0.6s ease-out ${0.1 + i * 0.07}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="flex gap-2 mb-4">
                  {cat.tools.map((emoji, j) => (
                    <span key={j} className="text-lg">{emoji}</span>
                  ))}
                </div>
                <h3 className="text-base font-bold text-[#1A1410] mb-2 group-hover:text-[#E8521A] transition-colors" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                  {cat.title}
                </h3>
                <p className="text-sm text-[#8A7F72] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
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
      <section className="bg-[#F0EDE8] border-y border-[#E8E3DA]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                Latest from Our Blog
              </h2>
              <p className="text-lg text-[#8A7F72] max-w-xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                Expert guides, tax tips, and in-depth explanations to help you make smarter financial decisions.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8521A] hover:text-[#D04A16] transition-colors"
            >
              View All Posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-[18px] border border-[#E8E3DA] bg-white shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[5px] hover:scale-[1.01] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300 overflow-hidden"
                style={{
                  animation: `fadeUp 0.6s ease-out ${0.1 + i * 0.07}s forwards`,
                  opacity: 0,
                }}
              >
                {/* Top image area */}
                <div className="h-[180px] bg-gradient-to-br from-[#E8521A]/20 to-[#E8521A]/5 flex items-center justify-center">
                  <span className="text-5xl opacity-50">📊</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#C4BAB0] mb-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1A1410] mb-2 group-hover:text-[#E8521A] transition-colors leading-snug" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-[#8A7F72] leading-relaxed line-clamp-3 mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#E8521A]">
                    <span>Read Article</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8521A] hover:text-[#D04A16] transition-colors"
            >
              View All Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#8A7F72] max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Common questions about using our free online calculators and tax tools.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-[18px] border border-[#E8E3DA] bg-white overflow-hidden transition-all"
            >
              <summary className="flex items-center justify-between px-6 py-5 text-base font-semibold text-[#1A1410] cursor-pointer hover:text-[#E8521A] transition-colors [&::-webkit-details-marker]:hidden" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
                <span>{faq.q}</span>
                <svg
                  className="w-5 h-5 shrink-0 text-[#C4BAB0] group-open:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div
                className="px-6 pb-5 text-[#8A7F72] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                dangerouslySetInnerHTML={{ __html: faq.a }}
              />
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

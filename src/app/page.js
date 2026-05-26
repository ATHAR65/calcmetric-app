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
    desc: "Calculate UK Income Tax, National Insurance, and take-home pay for 2025–26. Accurate HMRC PAYE rates.",
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
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TheMetricApp",
    "url": "https://www.themetricapp.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.themetricapp.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "description": "Free, fast, and accurate financial calculators for taxes, fees, profits, and savings.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TheMetricApp",
    "url": "https://www.themetricapp.com",
    "logo": "https://www.themetricapp.com/logo.svg",
    "sameAs": ["https://twitter.com/themetricapp"],
    "description": "Free, fast, and accurate financial calculators for taxes, fees, profits, and savings.",
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0djJoLTJ2LTJoMnptMCAyMHYyaC0ydi0yaDJ6bTAtMjB2Mmgtdi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#0D9488] animate-pulse" />
            100% Free — No Sign-Up Required
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Free Financial
            <br />
            <span className="text-[#0D9488]">Calculators</span> for Freelancers, Sellers &amp; Business Owners
          </h1>
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Free, instant, and accurate financial calculations for taxes, fees, profits, and savings.
            Trusted by freelancers, sellers, and business owners across the US &amp; UK.
          </p>
          <a
            href="#calculators"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0D9488] text-white font-bold px-8 py-4 text-lg shadow-lg shadow-[#0D9488]/30 hover:bg-[#0F766E] hover:-translate-y-0.5 transition-all"
          >
            Explore All Tools ↓
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Calculator Grid */}
      <CalculatorGrid calculators={calculators} />
    </>
  );
}

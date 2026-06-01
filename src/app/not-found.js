import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found | TheMetricApp",
  description:
    "The page you are looking for does not exist or has been moved. Browse our free financial calculators or visit the homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

const suggestedPages = [
  { href: "/calculators/side-hustle-tax-calculator", label: "Side Hustle Tax Calculator", icon: "💰" },
  { href: "/calculators/stripe-fee-merchant-calculator", label: "Stripe Fee Calculator", icon: "💳" },
  { href: "/calculators/income-tax-calculator-uk", label: "Income Tax Calculator UK", icon: "🇬🇧" },
  { href: "/calculators/amazon-fba-fee-calculator", label: "Amazon FBA Fee Calculator", icon: "📦" },
  { href: "/calculators/car-loan-affordability-calculator-2026", label: "Car Loan Affordability Calculator", icon: "🚘" },
  { href: "/calculators/401k-retirement-calculator", label: "401(k) Retirement Calculator", icon: "🏦" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog & Guides" },
  { href: "/faq", label: "FAQ Help Desk" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Support" },
];

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="text-center">
        {/* 404 Visual */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-[#EEF2FF] dark:bg-[#6366F1]/10 mb-8">
          <span className="text-5xl">🔍</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl font-display font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mb-3">
          404
        </h1>
        <p className="text-lg sm:text-xl text-[#6B7280] dark:text-[#9CA3AF] max-w-lg mx-auto mb-2">
          This page doesn&apos;t exist.
        </p>
        <p className="text-sm text-[#9CA3AF] dark:text-[#6B7280] max-w-md mx-auto mb-10">
          The link might be broken, the page may have been moved, or you may have typed the wrong address.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#6366F1] text-white font-semibold px-6 py-3 text-base shadow-md shadow-[#6366F1]/20 hover:bg-[#4F46E5] hover:-translate-y-0.5 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Go to Homepage
          </Link>
          <Link
            href="/#calculators"
            className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] font-semibold px-6 py-3 text-base shadow-sm hover:bg-[#F9FAFB] hover:border-[#D1D5DB] transition-all dark:bg-[#111827] dark:border-[#334155] dark:text-[#F9FAFB] dark:hover:bg-[#0B0F19] dark:hover:border-[#6B7280]"
          >
            Browse All Calculators
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Popular Calculators Grid */}
        <div className="border-t border-[#E5E7EB] dark:border-[#1E293B] pt-14">
          <h2 className="text-xl font-display font-bold text-[#111827] dark:text-[#F9FAFB] mb-2">
            Popular Calculators You Might Be Looking For
          </h2>
          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-8 max-w-lg mx-auto">
            Try one of our most-used free financial tools below.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {suggestedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 dark:bg-[#111827] dark:border-[#1E293B] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
              >
                <span className="text-xl shrink-0">{page.icon}</span>
                <span className="text-sm font-semibold text-[#111827] dark:text-[#F9FAFB] text-left leading-snug">
                  {page.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Resource Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {resourceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6366F1] hover:text-[#4F46E5] dark:text-[#818CF8] dark:hover:text-[#A78BFA] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

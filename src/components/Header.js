"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SearchModal from "./SearchModal";
import ThemeToggle from "./ThemeToggle";

const calculators = [
  { href: "/calculators/doordash-tax-estimator", title: "DoorDash Tax Estimator", icon: "🚗", tag: "Gig Economy" },
  { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠", tag: "Paycheck" },
  { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️", tag: "Self-Employment" },
  { href: "/calculators/stripe-fee-merchant-calculator", title: "Stripe Fee Calculator", icon: "💳", tag: "Merchant Fees" },
  { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦", tag: "E-Commerce" },
  { href: "/calculators/freelancer-platform-fee-comparison", title: "Freelancer Fee Comparison", icon: "💼", tag: "Freelancing" },
  { href: "/calculators/ev-charging-vs-gas-savings", title: "EV vs Gas Savings", icon: "⚡", tag: "Automotive" },
  { href: "/calculators/residential-solar-panel-roi", title: "Solar Panel ROI", icon: "🌞", tag: "Energy" },
  { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️", tag: "Marketplace" },
  { href: "/calculators/airbnb-host-net-income", title: "Airbnb Host Net Income", icon: "🏠", tag: "Real Estate" },
  { href: "/calculators/us-import-tariff-calculator", title: "US Import Tariff Calculator", icon: "🛃", tag: "Import & Trade" },
  { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰", tag: "Gig Economy" },
  { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗", tag: "Tax Deductions" },
  { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦", tag: "Retirement" },
  { href: "/calculators/paypal-fee-calculator", title: "PayPal Fee Calculator", icon: "💳", tag: "Merchant Fees" },
  { href: "/calculators/vat-calculator-uk", title: "VAT Calculator UK", icon: "🇬🇧", tag: "Tax Tools" },
  { href: "/calculators/income-tax-calculator-uk", title: "Income Tax Calculator UK", icon: "🇬🇧", tag: "Tax Tools" },
  { href: "/calculators/uber-tax-calculator-2026", title: "Uber Tax Calculator", icon: "🚗", tag: "Gig Economy" },
  { href: "/calculators/new-york-paycheck-calculator-2026", title: "New York Paycheck Calculator", icon: "🗽", tag: "Paycheck" },
  { href: "/calculators/florida-paycheck-calculator-2026", title: "Florida Paycheck Calculator", icon: "🌴", tag: "Paycheck" },
  { href: "/calculators/etsy-fee-calculator-2026", title: "Etsy Fee Calculator", icon: "🧶", tag: "Marketplace" },
  { href: "/calculators/shopify-profit-calculator-2026", title: "Shopify Profit Calculator", icon: "🛒", tag: "E-Commerce" },
  { href: "/calculators/self-employment-tax-calculator-2026", title: "Self Employment Tax Calculator", icon: "💼", tag: "Self-Employment" },
  { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", icon: "🏡", tag: "Real Estate" },
  { href: "/calculators/dividend-tax-calculator-2026", title: "Dividend Tax Calculator", icon: "📈", tag: "Tax Tools" },
  { href: "/calculators/amazon-seller-fee-calculator-2026", title: "Amazon Seller Fee Calculator", icon: "📦", tag: "Marketplace" },
  { href: "/calculators/crypto-tax-calculator-2026", title: "Crypto Tax Calculator", icon: "₿", tag: "Tax Tools" },
  { href: "/calculators/small-business-tax-deduction-calculator", title: "Small Business Tax Deduction Calculator", icon: "💼", tag: "Self-Employment" },
  { href: "/calculators/gig-economy-net-income-calculator", title: "Gig Economy Net Income Calculator", icon: "🚗", tag: "Gig Economy" },
  { href: "/calculators/credit-card-payoff-calculator", title: "Credit Card Payoff Calculator", icon: "💳", tag: "Debt Payoff" },
  { href: "/calculators/student-loan-payoff-calculator", title: "Student Loan Payoff Calculator", icon: "🎓", tag: "Debt Payoff" },
  { href: "/calculators/car-loan-affordability-calculator-2026", title: "Car Loan Affordability Calculator", icon: "🚘", tag: "Auto & Loans" },
  { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦", tag: "Retirement" },
  { href: "/calculators/college-savings-calculator-2026", title: "College Savings Calculator", icon: "🎓", tag: "Savings & Education" },
  { href: "/calculators/roth-vs-traditional-ira-calculator-2026", title: "Roth vs Traditional IRA Calculator", icon: "🏦", tag: "Retirement" },
  { href: "/calculators/emergency-fund-calculator", title: "Emergency Fund Calculator", icon: "🆘", tag: "Personal Finance" },
  { href: "/calculators/net-worth-calculator", title: "Net Worth Calculator", icon: "📊", tag: "Personal Finance" },
  { href: "/calculators/mortgage-refinance-calculator-2026", title: "Mortgage Refinance Calculator", icon: "🏠", tag: "Real Estate" },
  { href: "/calculators/loan-comparison-calculator", title: "Loan Comparison Calculator", icon: "💰", tag: "Loans" },
  { href: "/calculators/savings-goal-calculator", title: "Savings Goal Calculator", icon: "🎯", tag: "Savings & Planning" },
  { href: "/calculators/inflation-calculator", title: "Inflation Calculator", icon: "📈", tag: "Savings & Planning" },
  { href: "/calculators/cost-of-living-calculator", title: "Cost of Living Calculator", icon: "🏙️", tag: "Personal Finance" },
  { href: "/calculators/commission-calculator", title: "Commission Calculator", icon: "💼", tag: "Personal Finance" },
  { href: "/calculators/401k-retirement-calculator", title: "401(k) Retirement Calculator", icon: "🏦", tag: "Retirement" },
  { href: "/calculators/budget-calculator", title: "Budget Calculator", icon: "📋", tag: "Personal Finance" },
  { href: "/calculators/mortgage-calculator-us", title: "Mortgage Calculator US", icon: "🏡", tag: "Real Estate" },
  { href: "/calculators/roth-ira-growth-calculator", title: "Roth IRA Growth Calculator", icon: "📈", tag: "Retirement" },
  { href: "/calculators/amortization-calculator", title: "Amortization Calculator", icon: "📊", tag: "Loans" },
  { href: "/calculators/hourly-wage-calculator-us", title: "Hourly Wage Calculator US", icon: "💵", tag: "Paycheck" },
  { href: "/calculators/dti-ratio-calculator", title: "DTI Ratio Calculator", icon: "📉", tag: "Loans" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const categoryOrder = [
  "Gig Economy", "Tax Tools", "Self-Employment", "Paycheck",
  "Merchant Fees", "E-Commerce", "Marketplace", "Real Estate",
  "Retirement", "Debt Payoff", "Personal Finance", "Savings & Planning",
  "Auto & Loans", "Loans", "Energy", "Freelancing",
  "Import & Trade", "Tax Deductions", "Automotive",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [calcDropdownOpen, setCalcDropdownOpen] = useState(false);
  const [mobileCalcOpen, setMobileCalcOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCalcDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setCalcDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const groupedCalculators = calculators.reduce((acc, calc) => {
    if (!acc[calc.tag]) acc[calc.tag] = [];
    acc[calc.tag].push(calc);
    return acc;
  }, {});

  const sortedCategories = categoryOrder.filter((tag) => groupedCalculators[tag]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-[12px] border-b border-[var(--color-border)]"
          : "bg-white/95 backdrop-blur-[12px] border-b border-transparent"
      } ${mounted ? "animate-fadeIn" : ""}`}
      style={mounted ? { animation: "fadeIn 0.5s ease-out" } : {}}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo — Vault: navy mark with gold dot */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div
            className="relative flex h-9 w-9 items-center justify-center rounded-[10px] text-white text-sm font-bold transition-all duration-300 group-hover:scale-105"
            style={{ background: "var(--color-navy)", fontFamily: "'Spectral', serif", fontWeight: 700 }}
          >
            M
            <span className="absolute right-[5px] bottom-[5px] w-[5px] h-[5px] rounded-full" style={{ background: "var(--color-gold)" }} />
          </div>
          <span className="text-lg font-extrabold tracking-tight" style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-navy)" }}>
            TheMetric<span style={{ color: "var(--color-gold)" }}>App</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Calculators Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setCalcDropdownOpen(true)}
            onMouseLeave={() => setCalcDropdownOpen(false)}
          >
            <button
              onClick={() => setCalcDropdownOpen(!calcDropdownOpen)}
              className="relative flex items-center gap-1.5 px-3 py-2 text-[15px] font-semibold transition-colors duration-200 group"
              style={{ color: "var(--color-text-secondary)" }}
              aria-expanded={calcDropdownOpen}
              aria-haspopup="true"
            >
              <span className="relative hover:text-[var(--color-navy)]">
                Calculators
                <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ background: "var(--color-gold)" }} />
              </span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${calcDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <div
              role="menu"
              aria-label="Calculator categories"
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[720px] origin-top transition-all duration-200 ${
                calcDropdownOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_10px_40px_rgba(13,39,66,0.08),0_2px_8px_rgba(13,39,66,0.04)] overflow-hidden">
                <div className="grid grid-cols-3 gap-px" style={{ background: "var(--color-bg-tertiary)" }}>
                  {sortedCategories.map((tag) => (
                    <div key={tag} className="bg-white p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 px-2" style={{ color: "var(--color-gold)", fontFamily: "'Public Sans', sans-serif" }}>
                        {tag}
                      </p>
                      <div className="space-y-0.5">
                        {groupedCalculators[tag].map((calc) => (
                          <Link
                            key={calc.href}
                            href={calc.href}
                            onClick={() => setCalcDropdownOpen(false)}
                            className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm transition-colors duration-150"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            <span className="text-base shrink-0">{calc.icon}</span>
                            <span className="font-medium leading-tight hover:text-[var(--color-navy)]" style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 500 }}>{calc.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[var(--color-border)] bg-white px-4 py-2.5">
                  <Link
                    href="/#calculators"
                    onClick={() => setCalcDropdownOpen(false)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: "var(--color-gold)" }}
                  >
                    View All Calculators
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-[15px] font-semibold transition-colors duration-200 group"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <span className="relative hover:text-[var(--color-navy)]">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ background: "var(--color-gold)" }} />
              </span>
            </Link>
          ))}

          <SearchModal />
          <ThemeToggle />
          <span className="mx-2 h-5 w-px" style={{ background: "var(--color-border)" }} />

          <Link
            href="/#calculators"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "var(--color-navy)", fontFamily: "'Public Sans', sans-serif" }}
          >
            Explore Tools
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-1 md:hidden">
          <Link
            href="/#calculators"
            className="inline-flex items-center gap-1 px-4 py-2 text-sm font-bold text-white rounded-lg transition-all duration-300"
            style={{ background: "var(--color-navy)" }}
          >
            Explore
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200"
            style={{ color: "var(--color-text-secondary)" }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col gap-1 px-4 pb-5 pt-2 border-t border-[var(--color-border)] bg-white/95 backdrop-blur-md">
          <div>
            <button
              onClick={() => setMobileCalcOpen(!mobileCalcOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200"
              style={{ color: "var(--color-text-secondary)" }}
              aria-expanded={mobileCalcOpen}
            >
              Calculators
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileCalcOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileCalcOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-4 pt-1 pb-2 space-y-0.5">
                {calculators.map((calc) => (
                  <Link
                    key={calc.href}
                    href={calc.href}
                    onClick={() => { setMobileOpen(false); setMobileCalcOpen(false); }}
                    className="flex items-center gap-2.5 rounded-lg px-4 py-2 text-sm transition-colors duration-150"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span className="text-base shrink-0">{calc.icon}</span>
                    <span className="font-medium">{calc.title}</span>
                  </Link>
                ))}
                <Link
                  href="/#calculators"
                  onClick={() => { setMobileOpen(false); setMobileCalcOpen(false); }}
                  className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
                  style={{ color: "var(--color-gold)" }}
                >
                  View All Calculators →
                </Link>
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

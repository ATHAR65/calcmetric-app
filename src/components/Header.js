"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const calculators = [
  {
    href: "/calculators/doordash-tax-estimator",
    title: "DoorDash Tax Estimator",
    icon: "🚗",
    tag: "Gig Economy",
  },
  {
    href: "/calculators/texas-paycheck-calculator",
    title: "Texas Paycheck Calculator",
    icon: "🤠",
    tag: "Paycheck",
  },
  {
    href: "/calculators/california-1099-tax-calculator",
    title: "California 1099 Tax Calculator",
    icon: "☀️",
    tag: "Self-Employment",
  },
  {
    href: "/calculators/stripe-fee-merchant-calculator",
    title: "Stripe Fee Calculator",
    icon: "💳",
    tag: "Merchant Fees",
  },
  {
    href: "/calculators/ecommerce-net-profit-margin",
    title: "E-Commerce Profit Margin",
    icon: "📦",
    tag: "E-Commerce",
  },
  {
    href: "/calculators/freelancer-platform-fee-comparison",
    title: "Freelancer Fee Comparison",
    icon: "💼",
    tag: "Freelancing",
  },
  {
    href: "/calculators/ev-charging-vs-gas-savings",
    title: "EV vs Gas Savings",
    icon: "⚡",
    tag: "Automotive",
  },
  {
    href: "/calculators/residential-solar-panel-roi",
    title: "Solar Panel ROI",
    icon: "🌞",
    tag: "Energy",
  },
  {
    href: "/calculators/ebay-seller-fee-profit",
    title: "eBay Seller Fee & Profit",
    icon: "🏷️",
    tag: "Marketplace",
  },
  {
    href: "/calculators/airbnb-host-net-income",
    title: "Airbnb Host Net Income",
    icon: "🏠",
    tag: "Real Estate",
  },
  {
    href: "/calculators/us-import-tariff-calculator",
    title: "US Import Tariff Calculator",
    icon: "🛃",
    tag: "Import & Trade",
  },
  {
    href: "/calculators/side-hustle-tax-calculator",
    title: "Side Hustle Tax Calculator",
    icon: "💰",
    tag: "Gig Economy",
  },
  {
    href: "/calculators/irs-mileage-deduction-calculator",
    title: "IRS Mileage Deduction Calculator",
    icon: "🚗",
    tag: "Tax Deductions",
  },
  {
    href: "/calculators/solo-401k-contribution-calculator",
    title: "Solo 401k Contribution Calculator",
    icon: "🏦",
    tag: "Retirement",
  },
  {
    href: "/calculators/paypal-fee-calculator",
    title: "PayPal Fee Calculator",
    icon: "💳",
    tag: "Merchant Fees",
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [calcDropdownOpen, setCalcDropdownOpen] = useState(false);
  const [mobileCalcOpen, setMobileCalcOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close desktop dropdown when clicking outside
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

  // Group calculators by tag
  const groupedCalculators = calculators.reduce((acc, calc) => {
    if (!acc[calc.tag]) acc[calc.tag] = [];
    acc[calc.tag].push(calc);
    return acc;
  }, {});

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]"
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group shrink-0"
        >
          <img
            src="/logo.svg"
            alt="TheMetricApp"
            width="160"
            height="40"
            className="h-10 w-auto"
            loading="eager"
          />
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
              className="relative flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-[#64748B] hover:text-[#0D9488] transition-colors duration-200 after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-[#0D9488] after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
              aria-expanded={calcDropdownOpen}
              aria-haspopup="true"
            >
              Calculators
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  calcDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Mega-menu dropdown */}
            <div
              className={`absolute left-0 top-full mt-1 w-[640px] origin-top-left transition-all duration-200 ${
                calcDropdownOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-xl shadow-[#0F172A]/10 overflow-hidden">
                <div className="grid grid-cols-2 gap-px bg-[#F1F5F9]">
                  {Object.entries(groupedCalculators).map(([tag, calcs]) => (
                    <div key={tag} className="bg-white p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-2 px-2">
                        {tag}
                      </p>
                      <div className="space-y-0.5">
                        {calcs.map((calc) => (
                          <Link
                            key={calc.href}
                            href={calc.href}
                            onClick={() => setCalcDropdownOpen(false)}
                            className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-[#475569] hover:text-[#0D9488] hover:bg-[#F0FDFA] transition-colors duration-150"
                          >
                            <span className="text-base shrink-0">{calc.icon}</span>
                            <span className="font-medium leading-tight">{calc.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#E2E8F0] bg-white px-4 py-2.5">
                  <Link
                    href="/#calculators"
                    onClick={() => setCalcDropdownOpen(false)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] transition-colors"
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

          {/* Rest of nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3.5 py-2 text-sm font-medium text-[#64748B] hover:text-[#0D9488] transition-colors duration-200 after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-[#0D9488] after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative flex h-9 w-9 items-center justify-center rounded-lg text-[#64748B] hover:text-[#0D9488] hover:bg-[#F0FDFA] transition-colors duration-200"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-5 pt-2 border-t border-[#E2E8F0] bg-white/95 backdrop-blur-md">
          {/* Mobile Calculators accordion */}
          <div>
            <button
              onClick={() => setMobileCalcOpen(!mobileCalcOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-[#64748B] hover:text-[#0D9488] hover:bg-[#F0FDFA] transition-colors duration-200"
              aria-expanded={mobileCalcOpen}
            >
              Calculators
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileCalcOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileCalcOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pt-1 pb-2 space-y-0.5">
                {calculators.map((calc) => (
                  <Link
                    key={calc.href}
                    href={calc.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileCalcOpen(false);
                    }}
                    className="flex items-center gap-2.5 rounded-lg px-4 py-2 text-sm text-[#475569] hover:text-[#0D9488] hover:bg-[#F0FDFA] transition-colors duration-150"
                  >
                    <span className="text-base shrink-0">{calc.icon}</span>
                    <span className="font-medium">{calc.title}</span>
                  </Link>
                ))}
                <Link
                  href="/#calculators"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileCalcOpen(false);
                  }}
                  className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] transition-colors"
                >
                  View All Calculators →
                </Link>
              </div>
            </div>
          </div>

          {/* Rest of mobile nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-[#64748B] hover:text-[#0D9488] hover:bg-[#F0FDFA] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

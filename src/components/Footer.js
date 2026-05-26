import Link from "next/link";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white border-t border-[#1E293B]">
      {/* Mega Footer Columns */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-[#1E293B] pb-12 mb-10">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white font-bold text-sm shadow-md shadow-[#0D9488]/10">
                M
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                The<span className="text-[#0D9488]">Metric</span>App
              </span>
            </Link>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Free, fast, and accurate financial estimators and business calculators. Built specifically for freelancers, gig workers, and online merchants to calculate true profits, taxes, and fees.
            </p>
            <div className="flex gap-4.5 text-xs text-[#64748B] pt-2">
              <span className="font-semibold text-teal-500 uppercase tracking-widest">100% Free</span>
              <span>•</span>
              <span className="font-semibold text-teal-500 uppercase tracking-widest">No Sign-Up Required</span>
            </div>
          </div>

          {/* Column 2: Tax Calculators */}
          <div>
            <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-4">
              Tax Tools
            </h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link href="/calculators/california-1099-tax-calculator" className="hover:text-white transition-colors">
                  California 1099 Tax
                </Link>
              </li>
              <li>
                <Link href="/calculators/doordash-tax-estimator" className="hover:text-white transition-colors">
                  DoorDash Driver Tax
                </Link>
              </li>
              <li>
                <Link href="/calculators/side-hustle-tax-calculator" className="hover:text-white transition-colors">
                  Side Hustle Tax
                </Link>
              </li>
              <li>
                <Link href="/calculators/texas-paycheck-calculator" className="hover:text-white transition-colors">
                  Texas Paycheck
                </Link>
              </li>
              <li>
                <Link href="/calculators/irs-mileage-deduction-calculator" className="hover:text-white transition-colors">
                  IRS Mileage Deduction
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Fee & Business Calculators */}
          <div>
            <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-4">
              Merchant & Fees
            </h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link href="/calculators/stripe-fee-merchant-calculator" className="hover:text-white transition-colors">
                  Stripe Fees
                </Link>
              </li>
              <li>
                <Link href="/calculators/paypal-fee-calculator" className="hover:text-white transition-colors">
                  PayPal Fee
                </Link>
              </li>
              <li>
                <Link href="/calculators/ebay-seller-fee-profit" className="hover:text-white transition-colors">
                  eBay Seller Fees
                </Link>
              </li>
              <li>
                <Link href="/calculators/ecommerce-net-profit-margin" className="hover:text-white transition-colors">
                  E-Commerce Margin
                </Link>
              </li>
              <li>
                <Link href="/calculators/airbnb-host-net-income" className="hover:text-white transition-colors">
                  Airbnb Host Profit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Guides & Company */}
          <div>
            <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Guides & Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ Help Desk
                </Link>
              </li>
              <li>
                <Link href="/tools/gig-economy-tax-guide" className="hover:text-white transition-colors">
                  Gig Economy Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            &copy; <CopyrightYear /> TheMetricApp. All rights reserved. Calculations are for estimation purposes only and do not constitute professional tax, financial, or legal advice.
          </p>
          <div className="flex gap-4 shrink-0">
            <Link href="/terms" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

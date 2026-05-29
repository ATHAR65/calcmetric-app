import Link from "next/link";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white border-t border-[#1E293B] dark:bg-[#060B16] dark:border-[#1E293B] transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-[#1E293B] pb-12 mb-10">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold text-sm shadow-md shadow-[#6366F1]/20">
                M
              </div>
              <span className="text-xl font-bold tracking-tight">
                The<span className="text-[#818CF8]">Metric</span>App
              </span>
            </Link>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
              Free, fast, and accurate financial calculators and tax estimators. Built for freelancers, gig workers, sellers, and small business owners.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#6B7280] pt-2">
              <span className="font-semibold text-[#818CF8] uppercase tracking-widest">100% Free</span>
              <span className="text-[#374151]">•</span>
              <span className="font-semibold text-[#818CF8] uppercase tracking-widest">No Sign-Up</span>
              <span className="text-[#374151]">•</span>
              <span className="font-semibold text-[#818CF8] uppercase tracking-widest">2026 Updated</span>
            </div>
          </div>

          {/* Column 2: Tax Tools */}
          <div>
            <h4 className="text-sm font-bold text-[#818CF8] uppercase tracking-wider mb-4">Tax Tools</h4>
            <ul className="space-y-2.5 text-sm text-[#9CA3AF]">
              <li><Link href="/calculators/california-1099-tax-calculator" className="hover:text-white transition-colors">California 1099 Tax</Link></li>
              <li><Link href="/calculators/doordash-tax-estimator" className="hover:text-white transition-colors">DoorDash Driver Tax</Link></li>
              <li><Link href="/calculators/side-hustle-tax-calculator" className="hover:text-white transition-colors">Side Hustle Tax</Link></li>
              <li><Link href="/calculators/texas-paycheck-calculator" className="hover:text-white transition-colors">Texas Paycheck</Link></li>
              <li><Link href="/calculators/irs-mileage-deduction-calculator" className="hover:text-white transition-colors">IRS Mileage Deduction</Link></li>
              <li><Link href="/calculators/self-employment-tax-calculator-2026" className="hover:text-white transition-colors">Self Employment Tax</Link></li>
              <li><Link href="/calculators/capital-gains-tax-calculator" className="hover:text-white transition-colors">Capital Gains Tax</Link></li>
              <li><Link href="/calculators/vat-calculator-uk" className="hover:text-white transition-colors">VAT Calculator UK</Link></li>
            </ul>
          </div>

          {/* Column 3: Business */}
          <div>
            <h4 className="text-sm font-bold text-[#818CF8] uppercase tracking-wider mb-4">Business Tools</h4>
            <ul className="space-y-2.5 text-sm text-[#9CA3AF]">
              <li><Link href="/calculators/stripe-fee-merchant-calculator" className="hover:text-white transition-colors">Stripe Fee Calculator</Link></li>
              <li><Link href="/calculators/paypal-fee-calculator" className="hover:text-white transition-colors">PayPal Fee Calculator</Link></li>
              <li><Link href="/calculators/ebay-seller-fee-profit" className="hover:text-white transition-colors">eBay Seller Fees</Link></li>
              <li><Link href="/calculators/ecommerce-net-profit-margin" className="hover:text-white transition-colors">E-Commerce Profit Margin</Link></li>
              <li><Link href="/calculators/amazon-fba-fee-calculator" className="hover:text-white transition-colors">Amazon FBA Fees</Link></li>
              <li><Link href="/calculators/shopify-profit-calculator-2026" className="hover:text-white transition-colors">Shopify Profit</Link></li>
              <li><Link href="/calculators/credit-card-payoff-calculator" className="hover:text-white transition-colors">Credit Card Payoff</Link></li>
              <li><Link href="/calculators/student-loan-payoff-calculator" className="hover:text-white transition-colors">Student Loan Payoff</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-sm font-bold text-[#818CF8] uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-[#9CA3AF]">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Guides</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ Help Desk</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>
            &copy; <CopyrightYear /> TheMetricApp. All rights reserved. Calculations are for estimation purposes only and do not constitute professional tax, financial, or legal advice.
          </p>
          <div className="flex gap-4 shrink-0">
            <Link href="/terms" className="hover:text-[#818CF8] transition-colors">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-[#818CF8] transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

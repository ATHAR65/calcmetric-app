import Link from "next/link";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <footer className="bg-[#1A1410] text-white transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">        {/* Newsletter */}
        <div className="border-b border-[#2A2420] pb-10 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                Stay Updated
              </h3>
              <p className="text-sm text-[#8A7F72] mt-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                Get the latest tax rates, fee updates, and financial tips.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2" action="#">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 rounded-[100px] bg-white border border-[#E8E3DA] px-5 py-2.5 text-sm text-[#1A1410] placeholder:text-[#C4BAB0] focus:border-[#1A1410] focus:shadow-[0_0_0_3px_rgba(26,20,16,0.06)] outline-none transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <button
                type="submit"
                className="rounded-[100px] bg-[#E8521A] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#D04A16] transition-all shrink-0"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-[#2A2420] pb-12 mb-10">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8521A] text-white font-bold text-sm shadow-md">
                M
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                TheMetricApp
              </span>
            </Link>
            <p className="text-sm text-[#8A7F72] leading-relaxed max-w-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Free, fast, and accurate financial calculators and tax estimators. Built for freelancers, gig workers, sellers, and small business owners.
            </p>
            <div className="flex flex-wrap gap-4 text-xs pt-2">
              <span className="font-semibold text-[#E8521A] uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>100% Free</span>
              <span className="text-[#5A4F45]">•</span>
              <span className="font-semibold text-[#E8521A] uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>No Sign-Up</span>
              <span className="text-[#5A4F45]">•</span>
              <span className="font-semibold text-[#E8521A] uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>2026 Updated</span>
            </div>
          </div>

          {/* Column 2: Tax Tools */}
          <div>
            <h4 className="text-sm font-bold text-[#E8521A] uppercase tracking-wider mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Tax Tools</h4>
            <ul className="space-y-2.5 text-sm text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              <li><Link href="/calculators/self-employment-tax-calculator-2026" className="hover:text-white/70 transition-colors">Self Employment Tax</Link></li>
              <li><Link href="/calculators/irs-mileage-deduction-calculator" className="hover:text-white/70 transition-colors">IRS Mileage Deduction</Link></li>
              <li><Link href="/calculators/capital-gains-tax-calculator" className="hover:text-white/70 transition-colors">Capital Gains Tax</Link></li>
              <li><Link href="/calculators/dividend-tax-calculator-2026" className="hover:text-white/70 transition-colors">Dividend Tax</Link></li>
              <li><Link href="/calculators/crypto-tax-calculator-2026" className="hover:text-white/70 transition-colors">Crypto Tax</Link></li>
              <li><Link href="/calculators/california-1099-tax-calculator" className="hover:text-white/70 transition-colors">California 1099 Tax</Link></li>
              <li><Link href="/calculators/vat-calculator-uk" className="hover:text-white/70 transition-colors">VAT Calculator UK</Link></li>
              <li><Link href="/calculators/income-tax-calculator-uk" className="hover:text-white/70 transition-colors">Income Tax UK</Link></li>
            </ul>
          </div>

          {/* Column 3: E-Commerce & Marketplace */}
          <div>
            <h4 className="text-sm font-bold text-[#E8521A] uppercase tracking-wider mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>E-Commerce</h4>
            <ul className="space-y-2.5 text-sm text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              <li><Link href="/calculators/stripe-fee-merchant-calculator" className="hover:text-white/70 transition-colors">Stripe Fee Calculator</Link></li>
              <li><Link href="/calculators/paypal-fee-calculator" className="hover:text-white/70 transition-colors">PayPal Fee Calculator</Link></li>
              <li><Link href="/calculators/amazon-fba-fee-calculator" className="hover:text-white/70 transition-colors">Amazon FBA Fees</Link></li>
              <li><Link href="/calculators/ebay-seller-fee-profit" className="hover:text-white/70 transition-colors">eBay Seller Fees</Link></li>
              <li><Link href="/calculators/etsy-fee-calculator-2026" className="hover:text-white/70 transition-colors">Etsy Fee Calculator</Link></li>
              <li><Link href="/calculators/shopify-profit-calculator-2026" className="hover:text-white/70 transition-colors">Shopify Profit</Link></li>
              <li><Link href="/calculators/ecommerce-net-profit-margin" className="hover:text-white/70 transition-colors">E-Commerce Profit</Link></li>
              <li><Link href="/calculators/us-import-tariff-calculator" className="hover:text-white/70 transition-colors">Import Tariff Calculator</Link></li>
            </ul>
          </div>

          {/* Column 4: Real Estate & Retirement */}
          <div>
            <h4 className="text-sm font-bold text-[#E8521A] uppercase tracking-wider mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Real Estate</h4>
            <ul className="space-y-2.5 text-sm text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              <li><Link href="/calculators/mortgage-calculator-us" className="hover:text-white/70 transition-colors">Mortgage Calculator</Link></li>
              <li><Link href="/calculators/home-affordability-calculator-2026" className="hover:text-white/70 transition-colors">Home Affordability</Link></li>
              <li><Link href="/calculators/mortgage-refinance-calculator-2026" className="hover:text-white/70 transition-colors">Mortgage Refinance</Link></li>
              <li><Link href="/calculators/rental-property-roi-calculator" className="hover:text-white/70 transition-colors">Rental Property ROI</Link></li>
              <li><Link href="/calculators/airbnb-host-net-income" className="hover:text-white/70 transition-colors">Airbnb Host Income</Link></li>
              <li><Link href="/calculators/residential-solar-panel-roi" className="hover:text-white/70 transition-colors">Solar Panel ROI</Link></li>
              <li><Link href="/calculators/ev-charging-vs-gas-savings" className="hover:text-white/70 transition-colors">EV vs Gas Savings</Link></li>
              <li><Link href="/calculators/401k-retirement-calculator" className="hover:text-white/70 transition-colors">401(k) Calculator</Link></li>
            </ul>
          </div>

          {/* Column 5: Loans & Savings */}
          <div>
            <h4 className="text-sm font-bold text-[#E8521A] uppercase tracking-wider mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Loans & Savings</h4>
            <ul className="space-y-2.5 text-sm text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              <li><Link href="/calculators/credit-card-payoff-calculator" className="hover:text-white/70 transition-colors">Credit Card Payoff</Link></li>
              <li><Link href="/calculators/student-loan-payoff-calculator" className="hover:text-white/70 transition-colors">Student Loan Payoff</Link></li>
              <li><Link href="/calculators/car-loan-affordability-calculator-2026" className="hover:text-white/70 transition-colors">Car Loan Affordability</Link></li>
              <li><Link href="/calculators/loan-comparison-calculator" className="hover:text-white/70 transition-colors">Loan Comparison</Link></li>
              <li><Link href="/calculators/amortization-calculator" className="hover:text-white/70 transition-colors">Amortization Calculator</Link></li>
              <li><Link href="/calculators/retirement-savings-calculator-2026" className="hover:text-white/70 transition-colors">Retirement Savings</Link></li>
              <li><Link href="/calculators/roth-vs-traditional-ira-calculator-2026" className="hover:text-white/70 transition-colors">Roth vs Traditional IRA</Link></li>
              <li><Link href="/calculators/savings-goal-calculator" className="hover:text-white/70 transition-colors">Savings Goal</Link></li>
            </ul>
          </div>

          {/* Column 6: Resources */}
          <div>
            <h4 className="text-sm font-bold text-[#E8521A] uppercase tracking-wider mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Resources</h4>
            <ul className="space-y-2.5 text-sm text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              <li><Link href="/calculators" className="hover:text-white/70 transition-colors">All Calculators</Link></li>
              <li><Link href="/blog" className="hover:text-white/70 transition-colors">Blog & Guides</Link></li>
              <li><Link href="/faq" className="hover:text-white/70 transition-colors">FAQ Help Desk</Link></li>
              <li><Link href="/about" className="hover:text-white/70 transition-colors">About Us</Link></li>
              <li><Link href="/editorial-policy" className="hover:text-white/70 transition-colors">Editorial Policy</Link></li>
              <li><Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5A4F45]">
          <p>
            &copy; <CopyrightYear /> TheMetricApp. All rights reserved. Calculations are for estimation purposes only and do not constitute professional tax, financial, or legal advice.
          </p>
          <div className="flex gap-4 shrink-0">
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

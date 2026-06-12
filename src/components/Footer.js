import Link from "next/link";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <footer className="transition-colors duration-300" style={{ background: "var(--color-navy-deep)", color: "rgba(255,255,255,0.62)" }}>
      {/* Newsletter */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[22px] p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10 -mt-14 relative z-10 text-white" style={{
          background: "var(--color-navy)",
          backgroundImage: "radial-gradient(600px 240px at 88% 0%, rgba(199,154,75,0.18) 0%, transparent 60%)",
        }}>
          <div>
            <h3 className="text-[26px] sm:text-[30px] font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Stay updated</h3>
            <p className="text-[16px]" style={{ color: "rgba(255,255,255,0.7)" }}>Get the latest tax rates, fee updates, and financial tips.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2.5" action="#">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 md:w-[280px] rounded-[9px] px-4 py-3.5 text-[15px] text-white outline-none transition-all"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.06)",
                fontFamily: "var(--font-body)",
              }}
            />
            <button
              type="submit"
              className="rounded-[9px] px-6 py-3.5 text-[15px] font-bold shrink-0 transition-all hover:opacity-90"
              style={{ background: "var(--color-gold)", color: "var(--color-navy-deep)", fontFamily: "var(--font-body)" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="relative flex h-9 w-9 items-center justify-center rounded-[10px] text-white text-sm font-bold"
                style={{ background: "var(--color-navy)", border: "1px solid rgba(255,255,255,0.15)", fontFamily: "'Spectral', serif", fontWeight: 700 }}
              >
                M
                <span className="absolute right-[5px] bottom-[5px] w-[5px] h-[5px] rounded-full" style={{ background: "var(--color-gold)" }} />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white" style={{ fontFamily: "var(--font-body)", fontWeight: 800 }}>
                TheMetric<span style={{ color: "var(--color-gold)" }}>App</span>
              </span>
            </Link>
            <p className="text-[14px] max-w-[260px] mt-4" style={{ color: "rgba(255,255,255,0.62)" }}>
              Free, fast and accurate financial calculators and tax estimators for freelancers, gig workers, sellers and small business.
            </p>
          </div>

          {/* Tax Tools */}
          <div>
            <h5 className="text-[13px] font-bold text-white mb-4 tracking-wide" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>Tax Tools</h5>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><Link href="/calculators/self-employment-tax-calculator-2026" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Self Employment Tax</Link></li>
              <li><Link href="/calculators/irs-mileage-deduction-calculator" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>IRS Mileage Deduction</Link></li>
              <li><Link href="/calculators/crypto-tax-calculator-2026" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Crypto Tax</Link></li>
              <li><Link href="/calculators/vat-calculator-uk" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>VAT Calculator UK</Link></li>
            </ul>
          </div>

          {/* E-Commerce */}
          <div>
            <h5 className="text-[13px] font-bold text-white mb-4 tracking-wide" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>E-Commerce</h5>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><Link href="/calculators/stripe-fee-merchant-calculator" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Stripe Fee Calculator</Link></li>
              <li><Link href="/calculators/paypal-fee-calculator" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>PayPal Fee Calculator</Link></li>
              <li><Link href="/calculators/amazon-fba-fee-calculator" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Amazon FBA Fees</Link></li>
              <li><Link href="/calculators/shopify-profit-calculator-2026" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Shopify Profit</Link></li>
            </ul>
          </div>

          {/* Real Estate */}
          <div>
            <h5 className="text-[13px] font-bold text-white mb-4 tracking-wide" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>Real Estate</h5>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><Link href="/calculators/mortgage-calculator-us" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Mortgage Calculator</Link></li>
              <li><Link href="/calculators/home-affordability-calculator-2026" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Home Affordability</Link></li>
              <li><Link href="/calculators/rental-property-roi-calculator" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Rental Property ROI</Link></li>
              <li><Link href="/calculators/airbnb-host-net-income" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Airbnb Host Income</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-[13px] font-bold text-white mb-4 tracking-wide" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>Resources</h5>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><Link href="/#calculators" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>All Calculators</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Blog &amp; Guides</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.58)" }}>Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-[13px]">
          <span>&copy; <CopyrightYear /> TheMetricApp. Estimates only — not professional financial advice.</span>
          <span>Made for the self-employed.</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { siteUrl, calculators } from "@/lib/siteConfig";

const ecomTags = ["E-Commerce", "Merchant Fees", "Marketplace"];
const hubCalculators = calculators.filter((c) => ecomTags.includes(c.tag));

const seen = new Set();
const uniqueCalcs = hubCalculators.filter((c) => {
  if (seen.has(c.href)) return false;
  seen.add(c.href);
  return true;
});

export const metadata = {
  title: "E-Commerce Calculators (2026) — Fees, Profit, Margins & Seller Tools | TheMetricApp",
  description:
    "Free e-commerce calculators for 2026. Calculate net profit margins, marketplace fees (Amazon, eBay, Etsy, Shopify), payment processing costs (Stripe, PayPal), and ROI for online sellers.",
  alternates: { canonical: `${siteUrl}/calculators/ecommerce/` },
  openGraph: {
    title: "E-Commerce Calculators (2026) — Fees, Profit, Margins & Seller Tools | TheMetricApp",
    description: "Free e-commerce calculators for 2026 — net profit margins, marketplace fees, payment processing costs, and seller profitability tools.",
    url: `${siteUrl}/calculators/ecommerce/`, siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=E-Commerce%20Calculators%202026&description=Calculate%20net%20profit%20margins%2C%20marketplace%20fees%2C%20and%20payment%20processing%20costs%20for%20online%20sellers.&type=website", width: 1200, height: 630, alt: "E-Commerce Calculators 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Calculators (2026) | TheMetricApp",
    description: "Free e-commerce calculators — net profit margins, marketplace fees, and payment processing costs for online sellers.",
    images: ["/api/og?title=E-Commerce%20Calculators%202026&description=Calculate%20net%20profit%20margins%2C%20marketplace%20fees%2C%20and%20payment%20processing%20costs%20for%20online%20sellers.&type=website"],
  },
};

export default function EcommerceHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Calculators", item: `${siteUrl}/calculators/ecommerce/` },
      { "@type": "ListItem", position: 3, name: "E-Commerce Calculators", item: `${siteUrl}/calculators/ecommerce/` },
    ],
  };
  const collectionSchema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "E-Commerce Calculators (2026)",
    description: "Free e-commerce calculators for 2026 — profit margins, marketplace fees (Amazon, eBay, Etsy, Shopify), payment processing (Stripe, PayPal), and ROI analysis for online sellers.",
    url: `${siteUrl}/calculators/ecommerce/`,
    mainEntity: { "@type": "ItemList", itemListElement: uniqueCalcs.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: `${siteUrl}${c.href}`, name: c.title })) },
  };
  const faqs = [
    { q: "How do I calculate my e-commerce profit margin?", a: "Net profit margin = (Revenue − COGS − Marketplace Fees − Payment Fees − Shipping − Marketing − Taxes) ÷ Revenue × 100. For example, if you sell a $50 product with $20 COGS, $10 in fees/shipping, and $5 in marketing: profit = $15, margin = 30%. Use our E-Commerce Profit Margin Calculator for a full breakdown." },
    { q: "What are the typical fees for selling on Amazon vs eBay vs Etsy?", a: "Amazon FBA: 15% referral fee + fulfillment fees. eBay: 13.25% final value fee + $0.30 per order. Etsy: 6.5% transaction fee + $0.20 listing fee + 3%+ payment processing. Shopify: 2.9% + $0.30 if using Shopify Payments (lower with higher plans). Each platform has unique fee structures — use our specialized calculators for exact numbers." },
    { q: "How much does Stripe charge per transaction?", a: "Stripe charges 2.9% + $0.30 per successful transaction for most businesses. International cards add +1.5%, currency conversion adds +1%, and manually entered cards add +0.5%. For a $100 US transaction: fee = $3.20. For a $100 international transaction: fee = $4.70. Use our Stripe Fee Calculator for exact figures." },
    { q: "How can I increase my e-commerce profitability?", a: "Key strategies: (1) Increase average order value with bundles, (2) negotiate supplier pricing, (3) reduce return rates with better descriptions, (4) optimize shipping with discounted labels, (5) focus on the 20% of products driving 80% of profit, and (6) raise prices strategically — a 5-10% increase often has minimal impact on conversion rates." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <nav className="flex items-center gap-2 text-sm text-[#C4BAB0] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Link href="/" className="hover:text-[#E8521A] transition-colors">Home</Link><span>/</span><span className="text-[#8A7F72]">E-Commerce Calculators</span>
        </nav>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8521A]/10 border border-[#E8521A]/20 px-4 py-1.5 text-sm font-semibold text-[#E8521A] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>📦 E-Commerce Hub</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>E-Commerce Calculators (2026)</h1>
          <p className="text-lg text-[#8A7F72] max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Free calculators for online sellers. Calculate net profit margins, marketplace fees (Amazon, eBay, Etsy, Shopify), payment processing costs (Stripe, PayPal), and true ROI for every product you sell.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Amazon", "eBay", "Etsy", "Shopify", "Stripe", "PayPal"].map((cat) => (
            <span key={cat} className="inline-flex items-center rounded-full bg-white border border-[#E8E3DA] px-3.5 py-1.5 text-xs font-semibold text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>{cat}</span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueCalcs.map((calc, i) => (
            <Link key={calc.href} href={calc.href}
              className="group rounded-[18px] border border-[#E8E3DA] bg-white p-6 shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[3px] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300"
              style={{ animation: `fadeUp 0.5s ease-out ${0.05 + i * 0.04}s forwards`, opacity: 0 }}>
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0">{calc.icon}</span>
                <div>
                  <span className="inline-flex items-center rounded-full bg-[#E8521A]/10 px-2 py-0.5 text-[10px] font-semibold text-[#E8521A] uppercase tracking-wider mb-1">{calc.tag}</span>
                  <h3 className="text-base font-bold text-[#1A1410] mb-1.5 group-hover:text-[#E8521A] transition-colors" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>{calc.title}</h3>
                  <p className="text-xs text-[#8A7F72] leading-relaxed line-clamp-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{calc.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>{uniqueCalcs.length}</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">Calculators</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>6</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">Platforms</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>2026</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">Fee Schedules</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>Free</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">No Sign-Up</p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1A1410] text-center mb-8" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>E-Commerce FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-[14px] border border-[#E8E3DA] bg-white overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#1A1410] hover:text-[#E8521A] transition-colors list-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <span>{faq.q}</span>
                  <svg className="h-4 w-4 shrink-0 text-[#C4BAB0] transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 pt-1 text-sm text-[#8A7F72] leading-relaxed border-t border-[#E8E3DA]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#1A1410] mb-6" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>Explore More Calculators</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/calculators/tax/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">🏛️ Tax</Link>
            <Link href="/calculators/gig-economy/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">🚗 Gig Economy</Link>
            <Link href="/calculators/real-estate/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">🏡 Real Estate</Link>
            <Link href="/calculators/retirement/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">🏦 Retirement</Link>
            <Link href="/calculators/personal-finance/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">📊 Personal Finance</Link>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { siteUrl, calculators } from "@/lib/siteConfig";

const realEstateTags = ["Real Estate"];
const hubCalculators = calculators.filter((c) => realEstateTags.includes(c.tag));

const seen = new Set();
const uniqueCalcs = hubCalculators.filter((c) => {
  if (seen.has(c.href)) return false;
  seen.add(c.href);
  return true;
});

export const metadata = {
  title: { absolute: "Real Estate Calculators (2026) | TheMetricApp" },
  description:
    "Free real estate calculators for 2026. Calculate mortgage payments, rental property ROI, home affordability, refinance savings, and property investment returns. Accurate US and UK tools.",
  alternates: { canonical: `${siteUrl}/calculators/real-estate/` },
  openGraph: {
    title: "Real Estate Calculators (2026)",
    description: "Free real estate calculators for 2026 — mortgage payments, rental property ROI, home affordability, refinance, and more.",
    url: `${siteUrl}/calculators/real-estate/`,
    siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Real%20Estate%20Calculators%202026&description=Calculate%20mortgage%20payments%2C%20rental%20property%20ROI%2C%20home%20affordability%2C%20and%20refinance%20savings.&type=website", width: 1200, height: 630, alt: "Real Estate Calculators 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Calculators (2026) | TheMetricApp",
    description: "Free real estate calculators for 2026 — mortgage, rental property ROI, home affordability, refinance.",
    images: ["/api/og?title=Real%20Estate%20Calculators%202026&description=Calculate%20mortgage%20payments%2C%20rental%20property%20ROI%2C%20home%20affordability%2C%20and%20refinance%20savings.&type=website"],
  },
};

export default function RealEstateHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "WebPage", "@id": `${siteUrl}/` } },
      { "@type": "ListItem", position: 2, name: "Calculators", item: { "@type": "WebPage", "@id": `${siteUrl}/calculators` } },
      { "@type": "ListItem", position: 3, name: "Real Estate Calculators" },
    ],
  };
  const collectionSchema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Real Estate Calculators (2026)",
    description: "Free real estate calculators for 2026 — mortgage payments, rental property ROI, home affordability, mortgage refinance, and property investment analysis.",
    url: `${siteUrl}/calculators/real-estate/`,
    mainEntity: { "@type": "ItemList", itemListElement: uniqueCalcs.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: `${siteUrl}${c.href}`, name: c.title })) },
  };
  const faqs = [
    { q: "How is a mortgage payment calculated?", a: "Using the amortization formula M = P × [r(1+r)^n] / [(1+r)^n − 1]. For a $400,000 home at 6.5% with 20% down: monthly P&I = $2,023. Add property taxes (~$367/mo), insurance (~$100/mo), and PMI if under 20% down. Use our Mortgage Calculator US for an exact breakdown." },
    { q: "What is a good cap rate for rental property?", a: "A good cap rate typically ranges from 4% to 10% depending on the market. In expensive coastal markets (NYC, SF, LA), cap rates of 3-5% are common. In Midwest and Sun Belt markets, cap rates of 6-10% are achievable. The national average is around 6-7% for single-family rentals." },
    { q: "How much house can I afford on my salary?", a: "Lenders use the 28/36 rule: your housing payment (PITI) should not exceed 28% of gross monthly income. On a $100,000 salary: max PITI = $2,333/month. At 6.5% for 30 years with 20% down, that supports roughly a $350,000-$380,000 home. Use our Home Affordability Calculator for a precise number." },
    { q: "Should I refinance my mortgage?", a: "A good rule of thumb: refinance if you can lower your rate by at least 1% and plan to stay in the home for 3+ years. Calculate your break-even point by dividing closing costs by monthly savings. If closing costs are $6,000 and you save $200/month, break-even is 30 months. Use our Mortgage Refinance Calculator." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <nav className="flex items-center gap-2 text-sm text-[#928fab] mb-8" style={{ fontFamily: "var(--font-body)" }}>
          <Link href="/" className="hover:text-[#7c3aed] transition-colors">Home</Link><span>/</span><span className="text-[#5d5a78]">Real Estate Calculators</span>
        </nav>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 px-4 py-1.5 text-sm font-semibold text-[#7c3aed] mb-4" style={{ fontFamily: "var(--font-heading)" }}>🏡 Real Estate Hub</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1a33] tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}>Real Estate Calculators (2026)</h1>
          <p className="text-lg text-[#5d5a78] max-w-3xl mx-auto" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Free calculators for home buyers, real estate investors, and property owners. Calculate mortgage payments, rental property returns, home affordability, and refinance savings with <strong>2026 rates</strong>.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Mortgage", "Rental Property", "Home Buying", "Refinance", "Real Estate Investing"].map((cat) => (
            <span key={cat} className="inline-flex items-center rounded-full bg-white border border-[#e7e5f3] px-3.5 py-1.5 text-xs font-semibold text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>{cat}</span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueCalcs.map((calc, i) => (
            <Link key={calc.href} href={calc.href}
              className="group rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-[0_1px_4px_rgba(29,26,51,0.04)] hover:-translate-y-[3px] hover:shadow-[0_20px_56px_rgba(29,26,51,0.13)] transition-all duration-300"
              style={{ animation: `fadeUp 0.5s ease-out ${0.05 + i * 0.06}s forwards`, opacity: 0 }}>
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0">{calc.icon}</span>
                <div>
                  <span className="inline-flex items-center rounded-full bg-[#7c3aed]/10 px-2 py-0.5 text-[10px] font-semibold text-[#7c3aed] uppercase tracking-wider mb-1">{calc.tag}</span>
                  <h3 className="text-base font-bold text-[#1d1a33] mb-1.5 group-hover:text-[#7c3aed] transition-colors" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>{calc.title}</h3>
                  <p className="text-xs text-[#5d5a78] leading-relaxed line-clamp-2" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{calc.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
            <p className="text-2xl font-extrabold text-[#7c3aed]" style={{ fontFamily: "var(--font-heading)" }}>{uniqueCalcs.length}</p>
            <p className="text-[11px] uppercase tracking-widest text-[#928fab] mt-1">Calculators</p>
          </div>
          <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
            <p className="text-2xl font-extrabold text-[#7c3aed]" style={{ fontFamily: "var(--font-heading)" }}>US+UK</p>
            <p className="text-[11px] uppercase tracking-widest text-[#928fab] mt-1">Markets</p>
          </div>
          <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
            <p className="text-2xl font-extrabold text-[#7c3aed]" style={{ fontFamily: "var(--font-heading)" }}>2026</p>
            <p className="text-[11px] uppercase tracking-widest text-[#928fab] mt-1">Updated Rates</p>
          </div>
          <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
            <p className="text-2xl font-extrabold text-[#7c3aed]" style={{ fontFamily: "var(--font-heading)" }}>Free</p>
            <p className="text-[11px] uppercase tracking-widest text-[#928fab] mt-1">No Sign-Up</p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1d1a33] text-center mb-8" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Real Estate FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-[14px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#1d1a33] hover:text-[#7c3aed] transition-colors list-none" style={{ fontFamily: "var(--font-heading)" }}>
                  <span>{faq.q}</span>
                  <svg className="h-4 w-4 shrink-0 text-[#928fab] transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 pt-1 text-sm text-[#5d5a78] leading-relaxed border-t border-[#e7e5f3]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#1d1a33] mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Explore More Calculators</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/calculators/tax/" className="inline-flex items-center gap-2 rounded-[100px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[#1d1a33] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all">🏛️ Tax</Link>
            <Link href="/calculators/gig-economy/" className="inline-flex items-center gap-2 rounded-[100px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[#1d1a33] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all">🚗 Gig Economy</Link>
            <Link href="/calculators/retirement/" className="inline-flex items-center gap-2 rounded-[100px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[#1d1a33] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all">🏦 Retirement</Link>
            <Link href="/calculators/personal-finance/" className="inline-flex items-center gap-2 rounded-[100px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[#1d1a33] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all">📊 Personal Finance</Link>
            <Link href="/calculators/ecommerce/" className="inline-flex items-center gap-2 rounded-[100px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[#1d1a33] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all">📦 E-Commerce</Link>
          </div>
        </div>
      </div>
    </>
  );
}

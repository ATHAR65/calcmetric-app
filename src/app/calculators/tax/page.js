import Link from "next/link";
import { siteUrl, calculators } from "@/lib/siteConfig";

const taxTags = ["Tax Tools", "Self-Employment", "Tax Deductions", "Import & Trade"];
const hubCalculators = calculators.filter((c) => taxTags.includes(c.tag));

// Deduplicate by href
const seen = new Set();
const uniqueCalcs = hubCalculators.filter((c) => {
  if (seen.has(c.href)) return false;
  seen.add(c.href);
  return true;
});

export const metadata = {
  title: { absolute: "Free Tax Calculators (2026) | TheMetricApp" },
  description:
    "Free 2026 tax calculators for US and UK taxpayers. Calculate self-employment tax, capital gains tax, income tax, VAT, deductions, and quarterly payments. Accurate IRS and HMRC rates.",
  alternates: { canonical: `${siteUrl}/calculators/tax/` },
  openGraph: {
    title: "Free Tax Calculators (2026)",
    description:
      "Free 2026 tax calculators for US and UK taxpayers. Calculate self-employment tax, capital gains, income tax, VAT, deductions, and quarterly payments.",
    url: `${siteUrl}/calculators/tax/`,
    siteName: "TheMetricApp",
    type: "website",
    images: [
      {
        url: "/api/og?title=Free%20Tax%20Calculators%202026&description=Calculate%20self-employment%20tax%2C%20capital%20gains%2C%20income%20tax%2C%20VAT%2C%20and%20quarterly%20payments%20with%20free%202026%20calculators.&type=website",
        width: 1200,
        height: 630,
        alt: "Free Tax Calculators 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Tax Calculators (2026) | TheMetricApp",
    description:
      "Free 2026 tax calculators for self-employment tax, capital gains, income tax, VAT, deductions, and quarterly payments.",
    images: [
      "/api/og?title=Free%20Tax%20Calculators%202026&description=Calculate%20self-employment%20tax%2C%20capital%20gains%2C%20income%20tax%2C%20VAT%2C%20and%20quarterly%20payments%20with%20free%202026%20calculators.&type=website",
    ],
  },
};

export default function TaxHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "WebPage", "@id": `${siteUrl}/` } },
      { "@type": "ListItem", position: 2, name: "Calculators", item: { "@type": "WebPage", "@id": `${siteUrl}/calculators` } },
      { "@type": "ListItem", position: 3, name: "Tax Calculators" },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Tax Calculators (2026)",
    description:
      "Comprehensive collection of free 2026 tax calculators for US and UK taxpayers. Self-employment tax, capital gains tax, income tax, VAT, and deductions.",
    url: `${siteUrl}/calculators/tax/`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: uniqueCalcs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteUrl}${c.href}`,
        name: c.title,
      })),
    },
  };

  const faqs = [
    {
      q: "What is self-employment tax and how is it calculated?",
      a: "Self-employment tax (SE tax) is 15.3% — 12.4% for Social Security (on income up to $184,500 in 2026) plus 2.9% for Medicare (no cap). It is calculated on 92.35% of your net self-employment income. If you earn $65,000 net, you owe approximately $9,177 in SE tax. Use our Self-Employment Tax Calculator for an exact figure.",
    },
    {
      q: "What are the capital gains tax rates for 2026?",
      a: "Long-term capital gains (assets held >1 year) are taxed at 0%, 15%, or 20% depending on your income. Short-term gains are taxed at ordinary income rates (10%-37%). Single filers with income under $49,450 pay 0% on long-term gains. High earners also face a 3.8% Net Investment Income Tax (NIIT).",
    },
    {
      q: "Do I need to pay quarterly estimated taxes?",
      a: "Yes, if you expect to owe $1,000 or more in taxes for the year as a self-employed individual. Quarterly payments are due April 15, June 16, September 15, and January 15 (2027). Missing these deadlines can result in underpayment penalties of approximately 7% per year on the underpaid amount.",
    },
    {
      q: "What business deductions can reduce my tax bill?",
      a: "Common deductions include: mileage ($0.725/mile for 2026), home office (dedicated space only), health insurance premiums, retirement contributions (Solo 401k, SEP IRA), software and subscriptions, professional development, marketing costs, and the employer-equivalent half of your SE tax (deductible from AGI).",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#C4BAB0] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Link href="/" className="hover:text-[#E8521A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#8A7F72]">Tax Calculators</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8521A]/10 border border-[#E8521A]/20 px-4 py-1.5 text-sm font-semibold text-[#E8521A] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            🏛️ Tax Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
            Free Tax Calculators (2026)
          </h1>
          <p className="text-lg text-[#8A7F72] max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Calculate self-employment tax, capital gains tax, income tax, VAT, deductions, and quarterly estimated payments.
            All calculators use <strong>2026 IRS and HMRC rates</strong> — accurate, fast, and completely free.
          </p>
        </div>

        {/* Category Sub-Nav */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Self-Employment", "Tax Tools", "Tax Deductions", "Import & Trade"].map((cat) => (
            <span key={cat} className="inline-flex items-center rounded-full bg-white border border-[#E8E3DA] px-3.5 py-1.5 text-xs font-semibold text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>
              {cat}
            </span>
          ))}
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueCalcs.map((calc, i) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group rounded-[18px] border border-[#E8E3DA] bg-white p-6 shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[3px] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300"
              style={{
                animation: `fadeUp 0.5s ease-out ${0.05 + i * 0.04}s forwards`,
                opacity: 0,
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0">{calc.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center rounded-full bg-[#E8521A]/10 px-2 py-0.5 text-[10px] font-semibold text-[#E8521A] uppercase tracking-wider">
                      {calc.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#1A1410] mb-1.5 group-hover:text-[#E8521A] transition-colors" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                    {calc.title}
                  </h3>
                  <p className="text-xs text-[#8A7F72] leading-relaxed line-clamp-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    {calc.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>{uniqueCalcs.length}</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">Tax Calculators</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>2026</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">Updated Rates</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>US+UK</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">Markets Covered</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>Free</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">No Sign-Up</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1A1410] text-center mb-8" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
            Tax Calculator FAQs
          </h2>
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

        {/* Related Hubs */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#1A1410] mb-6" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
            Explore More Calculators
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/calculators/gig-economy/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">🚗 Gig Economy</Link>
            <Link href="/calculators/real-estate/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">🏡 Real Estate</Link>
            <Link href="/calculators/retirement/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">🏦 Retirement</Link>
            <Link href="/calculators/personal-finance/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">📊 Personal Finance</Link>
            <Link href="/calculators/ecommerce/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">📦 E-Commerce</Link>
          </div>
        </div>
      </div>
    </>
  );
}

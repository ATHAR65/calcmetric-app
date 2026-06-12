import Link from "next/link";
import { siteUrl, calculators } from "@/lib/siteConfig";

const retTags = ["Retirement", "Savings & Education"];
const hubCalculators = calculators.filter((c) => retTags.includes(c.tag));

const seen = new Set();
const uniqueCalcs = hubCalculators.filter((c) => {
  if (seen.has(c.href)) return false;
  seen.add(c.href);
  return true;
});

export const metadata = {
  title: { absolute: "Retirement Calculators (2026) | TheMetricApp" },
  description:
    "Free retirement calculators for 2026. Project 401(k) and IRA growth, compare Roth vs Traditional IRA, plan college savings with 529 plans, and calculate your retirement income with the 4% rule.",
  alternates: { canonical: `${siteUrl}/calculators/retirement/` },
  openGraph: {
    title: "Retirement Calculators (2026)",
    description: "Free retirement calculators for 2026 — 401(k) growth, Roth vs Traditional IRA, college savings, Solo 401k, and retirement income planning.",
    url: `${siteUrl}/calculators/retirement/`, siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Retirement%20Calculators%202026&description=Project%20401(k)%20and%20IRA%20growth%2C%20compare%20Roth%20vs%20Traditional%20IRA%2C%20plan%20college%20savings.&type=website", width: 1200, height: 630, alt: "Retirement Calculators 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retirement Calculators (2026) | TheMetricApp",
    description: "Free retirement calculators — 401(k), IRA comparison, college savings, Solo 401k, and retirement income planning.",
    images: ["/api/og?title=Retirement%20Calculators%202026&description=Project%20401(k)%20and%20IRA%20growth%2C%20compare%20Roth%20vs%20Traditional%20IRA%2C%20plan%20college%20savings.&type=website"],
  },
};

export default function RetirementHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "WebPage", "@id": `${siteUrl}/` } },
      { "@type": "ListItem", position: 2, name: "Calculators", item: { "@type": "WebPage", "@id": `${siteUrl}/calculators` } },
      { "@type": "ListItem", position: 3, name: "Retirement Calculators" },
    ],
  };
  const collectionSchema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Retirement Calculators (2026)",
    description: "Free retirement calculators for 2026 — 401(k) growth with employer match, Roth vs Traditional IRA comparison, college savings with 529 plans, Solo 401k, and retirement income planning.",
    url: `${siteUrl}/calculators/retirement/`,
    mainEntity: { "@type": "ItemList", itemListElement: uniqueCalcs.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: `${siteUrl}${c.href}`, name: c.title })) },
  };
  const faqs = [
    { q: "How much should I save for retirement?", a: "A common rule of thumb: save 15% of your pre-tax income annually, including any employer match. By age 30, aim to have 1× your salary saved. By 40: 3×. By 50: 6×. By 60: 8×. By 67: 10×. These are guidelines — use our Retirement Savings Calculator for a personalized projection." },
    { q: "Roth IRA vs Traditional IRA: which is better?", a: "Choose Roth if you expect to be in a higher tax bracket in retirement (pay taxes now at a lower rate). Choose Traditional if you want a tax break now and expect lower income in retirement. Roth IRA offers tax-free withdrawals, no RMDs, and more flexibility. For most young professionals, Roth is the better choice. Use our Roth vs Traditional IRA Calculator to compare." },
    { q: "What is the 4% rule for retirement withdrawals?", a: "The 4% rule states you can withdraw 4% of your retirement savings in the first year, then adjust for inflation each year, with a high probability your savings will last 30+ years. On a $1M portfolio: $40,000/year. This includes Social Security and other income sources. The rule is a guideline — actual withdrawal rates depend on market conditions." },
    { q: "How does a 529 college savings plan work?", a: "A 529 plan is a tax-advantaged savings account for education expenses. Contributions grow tax-free, and withdrawals for qualified expenses (tuition, room & board, books) are tax-free. State tax deductions vary — some states offer deductions on contributions up to $10,000/year. Funds can be transferred to another family member if unused. Use our College Savings Calculator to plan." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <nav className="flex items-center gap-2 text-sm text-[#C4BAB0] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Link href="/" className="hover:text-[#E8521A] transition-colors">Home</Link><span>/</span><span className="text-[#8A7F72]">Retirement Calculators</span>
        </nav>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8521A]/10 border border-[#E8521A]/20 px-4 py-1.5 text-sm font-semibold text-[#E8521A] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>🏦 Retirement Hub</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>Retirement Calculators (2026)</h1>
          <p className="text-lg text-[#8A7F72] max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Free calculators to plan your financial future. Project 401(k) and IRA growth with compound interest, compare Roth vs Traditional IRA, plan college savings with 529 plans, and maximize Solo 401k contributions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["401(k)", "IRA", "Roth IRA", "Solo 401k", "College Savings", "Retirement Planning"].map((cat) => (
            <span key={cat} className="inline-flex items-center rounded-full bg-white border border-[#E8E3DA] px-3.5 py-1.5 text-xs font-semibold text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>{cat}</span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueCalcs.map((calc, i) => (
            <Link key={calc.href} href={calc.href}
              className="group rounded-[18px] border border-[#E8E3DA] bg-white p-6 shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[3px] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300"
              style={{ animation: `fadeUp 0.5s ease-out ${0.05 + i * 0.08}s forwards`, opacity: 0 }}>
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
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>$70k</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">Max 401(k)+Match</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>4%</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">Safe Withdrawal Rate</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>Free</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">No Sign-Up</p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1A1410] text-center mb-8" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>Retirement Planning FAQs</h2>
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
            <Link href="/calculators/personal-finance/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">📊 Personal Finance</Link>
            <Link href="/calculators/ecommerce/" className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all">📦 E-Commerce</Link>
          </div>
        </div>
      </div>
    </>
  );
}

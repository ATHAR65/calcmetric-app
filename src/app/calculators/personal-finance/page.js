import Link from "next/link";
import { siteUrl, calculators } from "@/lib/siteConfig";

const financeTags = ["Personal Finance", "Debt Payoff", "Loans", "Savings & Planning", "Auto & Loans", "Paycheck"];
const hubCalculators = calculators.filter((c) => financeTags.includes(c.tag));

const seen = new Set();
const uniqueCalcs = hubCalculators.filter((c) => {
  if (seen.has(c.href)) return false;
  seen.add(c.href);
  return true;
});

export const metadata = {
  title: { absolute: "Personal Finance Calculators (2026) | TheMetricApp" },
  description:
    "Free personal finance calculators for 2026. Budget with the 50/30/20 rule, calculate net worth, pay off debt faster with snowball/avalanche, compare loans, and reach your savings goals.",
  alternates: { canonical: `${siteUrl}/calculators/personal-finance/` },
  openGraph: {
    title: "Personal Finance Calculators (2026)",
    description: "Free personal finance calculators for 2026 — budget, debt payoff, net worth, savings goals, loan comparison, and inflation.",
    url: `${siteUrl}/calculators/personal-finance/`, siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Personal%20Finance%20Calculators%202026&description=Budget%2C%20debt%20payoff%2C%20net%20worth%2C%20savings%20goals%2C%20and%20loan%20comparison%20calculators.&type=website", width: 1200, height: 630, alt: "Personal Finance Calculators 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Finance Calculators (2026) | TheMetricApp",
    description: "Free personal finance calculators for 2026 — budget, debt payoff, net worth, savings goals, and more.",
    images: ["/api/og?title=Personal%20Finance%20Calculators%202026&description=Budget%2C%20debt%20payoff%2C%20net%20worth%2C%20savings%20goals%2C%20and%20loan%20comparison%20calculators.&type=website"],
  },
};

export default function PersonalFinanceHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "WebPage", "@id": `${siteUrl}/` } },
      { "@type": "ListItem", position: 2, name: "Calculators", item: { "@type": "WebPage", "@id": `${siteUrl}/calculators` } },
      { "@type": "ListItem", position: 3, name: "Personal Finance Calculators" },
    ],
  };
  const collectionSchema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Personal Finance Calculators (2026)",
    description: "Free personal finance calculators for 2026 — budget planner, debt snowball/avalanche, net worth tracker, savings goal, loan comparison, inflation, and more.",
    url: `${siteUrl}/calculators/personal-finance/`,
    mainEntity: { "@type": "ItemList", itemListElement: uniqueCalcs.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: `${siteUrl}${c.href}`, name: c.title })) },
  };
  const faqs = [
    { q: "How does the 50/30/20 budget rule work?", a: "The 50/30/20 rule divides after-tax income into three categories: 50% for needs (housing, food, utilities, transport), 30% for wants (entertainment, dining out, shopping), and 20% for savings and debt repayment. This simple framework helps you balance spending and saving without detailed tracking." },
    { q: "Snowball vs avalanche: which debt payoff method is better?", a: "The avalanche method (highest APR first) saves the most interest mathematically. The snowball method (smallest balance first) has higher completion rates due to psychological wins from paying off accounts quickly. Studies show snowball has ~78% completion vs ~65% for avalanche. Both beat minimum payments by years." },
    { q: "How much should I have in my emergency fund?", a: "Financial experts recommend 3-6 months of essential expenses. For single-income households or variable-income workers (gig economy, freelancers), aim for 6-9 months. Calculate your target: monthly essential expenses × desired months. Use our Emergency Fund Calculator for a personalized recommendation." },
    { q: "How does inflation affect my savings?", a: "Inflation erodes purchasing power. At 3% annual inflation, $100 today will be worth only $74 in 10 years. High inflation (5-7% as seen in 2022-2023) dramatically accelerates this erosion. Consider I Bonds, TIPS, or diversified investments to protect against inflation risk." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <nav className="flex items-center gap-2 text-sm text-[#928fab] mb-8" style={{ fontFamily: "var(--font-body)" }}>
          <Link href="/" className="hover:text-[#7c3aed] transition-colors">Home</Link><span>/</span><span className="text-[#5d5a78]">Personal Finance Calculators</span>
        </nav>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 px-4 py-1.5 text-sm font-semibold text-[#7c3aed] mb-4" style={{ fontFamily: "var(--font-heading)" }}>📊 Finance Hub</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1a33] tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}>Personal Finance Calculators (2026)</h1>
          <p className="text-lg text-[#5d5a78] max-w-3xl mx-auto" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Free personal finance tools to budget smarter, pay off debt faster, build savings, compare loans, and protect against inflation. All calculators are <strong>100% free — no sign-up needed</strong>.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Budgeting", "Debt Payoff", "Net Worth", "Savings", "Loans", "Inflation"].map((cat) => (
            <span key={cat} className="inline-flex items-center rounded-full bg-white border border-[#e7e5f3] px-3.5 py-1.5 text-xs font-semibold text-[#5d5a78]" style={{ fontFamily: "var(--font-body)" }}>{cat}</span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueCalcs.map((calc, i) => (
            <Link key={calc.href} href={calc.href}
              className="group rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-[0_1px_4px_rgba(29,26,51,0.04)] hover:-translate-y-[3px] hover:shadow-[0_20px_56px_rgba(29,26,51,0.13)] transition-all duration-300"
              style={{ animation: `fadeUp 0.5s ease-out ${0.05 + i * 0.04}s forwards`, opacity: 0 }}>
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
            <p className="text-[11px] uppercase tracking-widest text-[#928fab] mt-1">Free Calculators</p>
          </div>
          <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
            <p className="text-2xl font-extrabold text-[#7c3aed]" style={{ fontFamily: "var(--font-heading)" }}>2026</p>
            <p className="text-[11px] uppercase tracking-widest text-[#928fab] mt-1">Updated Data</p>
          </div>
          <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
            <p className="text-2xl font-extrabold text-[#7c3aed]" style={{ fontFamily: "var(--font-heading)" }}>100%</p>
            <p className="text-[11px] uppercase tracking-widest text-[#928fab] mt-1">Free to Use</p>
          </div>
          <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
            <p className="text-2xl font-extrabold text-[#7c3aed]" style={{ fontFamily: "var(--font-heading)" }}>US+UK</p>
            <p className="text-[11px] uppercase tracking-widest text-[#928fab] mt-1">Tools</p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1d1a33] text-center mb-8" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Personal Finance FAQs</h2>
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
            <Link href="/calculators/real-estate/" className="inline-flex items-center gap-2 rounded-[100px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[#1d1a33] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all">🏡 Real Estate</Link>
            <Link href="/calculators/retirement/" className="inline-flex items-center gap-2 rounded-[100px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[#1d1a33] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all">🏦 Retirement</Link>
            <Link href="/calculators/ecommerce/" className="inline-flex items-center gap-2 rounded-[100px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[#1d1a33] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all">📦 E-Commerce</Link>
          </div>
        </div>
      </div>
    </>
  );
}

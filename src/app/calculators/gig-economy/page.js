import Link from "next/link";
import { siteUrl, calculators } from "@/lib/siteConfig";

const gigTags = ["Gig Economy", "Freelancing"];
const hubCalculators = calculators.filter((c) => gigTags.includes(c.tag));

const seen = new Set();
const uniqueCalcs = hubCalculators.filter((c) => {
  if (seen.has(c.href)) return false;
  seen.add(c.href);
  return true;
});

export const metadata = {
  title: { absolute: "Gig Economy Calculators (2026) | TheMetricApp" },
  description:
    "Free gig economy calculators for 2026. Estimate taxes, mileage deductions, and net income for Uber, DoorDash, Lyft, Instacart, and freelancers. Compare platform fees and maximize your earnings.",
  alternates: { canonical: `${siteUrl}/calculators/gig-economy/` },
  openGraph: {
    title: "Gig Economy Calculators (2026)",
    description:
      "Free gig economy calculators for 2026. Estimate taxes, mileage deductions, and net income for Uber, DoorDash, Lyft, Instacart, and freelancers.",
    url: `${siteUrl}/calculators/gig-economy/`,
    siteName: "TheMetricApp",
    type: "website",
    images: [{
      url: "/api/og?title=Gig%20Economy%20Calculators%202026&description=Estimate%20taxes%2C%20mileage%20deductions%2C%20and%20net%20income%20for%20Uber%2C%20DoorDash%2C%20and%20freelancers.&type=website",
      width: 1200, height: 630, alt: "Gig Economy Calculators 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gig Economy Calculators (2026) | TheMetricApp",
    description: "Free gig economy calculators for 2026 — taxes, mileage deductions, and net income for Uber, DoorDash, and freelancers.",
    images: ["/api/og?title=Gig%20Economy%20Calculators%202026&description=Estimate%20taxes%2C%20mileage%20deductions%2C%20and%20net%20income%20for%20Uber%2C%20DoorDash%2C%20and%20freelancers.&type=website"],
  },
};

export default function GigEconomyHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Calculators", item: `${siteUrl}/calculators/gig-economy/` },
      { "@type": "ListItem", position: 3, name: "Gig Economy Calculators", item: `${siteUrl}/calculators/gig-economy/` },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Gig Economy Calculators (2026)",
    description: "Free gig economy calculators for Uber, DoorDash, Lyft, Instacart, and freelance workers. Calculate taxes, mileage deductions, net income, and platform fees.",
    url: `${siteUrl}/calculators/gig-economy/`,
    mainEntity: { "@type": "ItemList", itemListElement: uniqueCalcs.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: `${siteUrl}${c.href}`, name: c.title })) },
  };

  const faqs = [
    { q: "How are gig workers taxed?",
      a: "Gig workers are classified as independent contractors (1099-NEC). You pay 15.3% self-employment tax (12.4% Social Security + 2.9% Medicare) on net earnings plus federal income tax. Unlike W-2 employees, taxes are not withheld from your pay — you must make quarterly estimated payments." },
    { q: "What is the mileage deduction for gig drivers?",
      a: "The IRS standard mileage rate is $0.67 per business mile for 2026. This covers gas, depreciation, insurance, maintenance, and repairs. A full-time DoorDash driver driving 450 miles/week can deduct ~$15,678 annually, reducing taxable income by over 25%." },
    { q: "How much should gig workers set aside for taxes?",
      a: "Set aside 25-30% of your net earnings (after deductions) for taxes. This covers 15.3% self-employment tax plus federal income tax (10-12% for most gig workers in lower brackets). If you live in a state with income tax, add 3-10% more." },
    { q: "Do I need to pay quarterly estimated taxes?",
      a: "Yes, if you expect to owe $1,000 or more in taxes. Quarterly payments for gig income are due April 15, June 16, September 15, and January 15. Missing deadlines triggers underpayment penalties (~7% annually on the underpaid amount)." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <nav className="flex items-center gap-2 text-sm text-[#C4BAB0] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Link href="/" className="hover:text-[#E8521A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#8A7F72]">Gig Economy Calculators</span>
        </nav>

        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8521A]/10 border border-[#E8521A]/20 px-4 py-1.5 text-sm font-semibold text-[#E8521A] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            🚗 Gig Economy Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
            Gig Economy Calculators (2026)
          </h1>
          <p className="text-lg text-[#8A7F72] max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Free calculators for gig workers, rideshare drivers, delivery workers, and freelancers.
            Estimate taxes, mileage deductions, net income, and compare platform fees using <strong>2026 IRS rates</strong>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Gig Economy", "Freelancing", "Rideshare", "Delivery", "Self-Employment"].map((cat) => (
            <span key={cat} className="inline-flex items-center rounded-full bg-white border border-[#E8E3DA] px-3.5 py-1.5 text-xs font-semibold text-[#8A7F72]" style={{ fontFamily: "'Inter', sans-serif" }}>{cat}</span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueCalcs.map((calc, i) => (
            <Link key={calc.href} href={calc.href}
              className="group rounded-[18px] border border-[#E8E3DA] bg-white p-6 shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[3px] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300"
              style={{ animation: `fadeUp 0.5s ease-out ${0.05 + i * 0.06}s forwards`, opacity: 0 }}>
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
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">Gig Calculators</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>$0.67/mi</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">Mileage Rate</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>15.3%</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">SE Tax Rate</p>
          </div>
          <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-5">
            <p className="text-2xl font-extrabold text-[#E8521A]" style={{ fontFamily: "'Outfit', sans-serif" }}>Free</p>
            <p className="text-[11px] uppercase tracking-widest text-[#C4BAB0] mt-1">No Sign-Up</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1A1410] text-center mb-8" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>Gig Economy FAQs</h2>
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

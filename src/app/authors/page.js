import Link from "next/link";
import { siteUrl } from "@/lib/siteConfig";
import { authors } from "@/lib/authors";

export const metadata = {
  title: { absolute: "Our Team | TheMetricApp" },
  description:
    "Meet the team of financial experts, CPAs, and analysts behind TheMetricApp's free calculators. Sarah Chen CPA, Michael Torres CFP, James Wilson MBA, and Priya Patel.",
  alternates: { canonical: `${siteUrl}/authors/` },
  openGraph: {
    title: "Our Team — TheMetricApp Experts",
    description: "Meet the financial experts behind TheMetricApp's free calculators — CPAs, CFPs, and analysts.",
    url: `${siteUrl}/authors/`, siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Meet%20Our%20Team%20%7C%20TheMetricApp&description=Financial%20experts%20behind%20our%20free%20calculators%20—%20CPAs%2C%20CFPs%2C%20and%20analysts.&type=website", width: 1200, height: 630, alt: "TheMetricApp Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | TheMetricApp",
    description: "Meet the financial experts behind TheMetricApp's free calculators.",
    images: ["/api/og?title=Meet%20Our%20Team%20%7C%20TheMetricApp&description=Financial%20experts%20behind%20our%20free%20calculators%20—%20CPAs%2C%20CFPs%2C%20and%20analysts.&type=website"],
  },
};

export default function AuthorsPage() {
  const teamMembers = Object.values(authors);

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Our Team", item: `${siteUrl}/authors/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8521A]/10 border border-[#E8521A]/20 px-4 py-1.5 text-sm font-semibold text-[#E8521A] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            👥 Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
            Meet the Experts Behind TheMetricApp
          </h1>
          <p className="text-lg text-[#8A7F72] max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Our calculators and guides are built by a team of financial professionals with decades of combined
            experience in tax preparation, financial planning, e-commerce, and the gig economy.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((author, i) => (
            <div
              key={author.slug}
              className="rounded-[18px] border border-[#E8E3DA] bg-white p-6 sm:p-8 shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300"
              style={{ animation: `fadeUp 0.5s ease-out ${0.1 + i * 0.1}s forwards`, opacity: 0 }}
            >
              <div className="flex items-start gap-5 mb-5">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-[#E8521A]/10 flex items-center justify-center text-2xl shrink-0 border border-[#E8E3DA]">
                  {["👩‍💼", "👨‍💼", "👨‍💻", "👩‍💻"][i]}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1A1410]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                    {author.name}
                  </h2>
                  <p className="text-sm text-[#E8521A] font-semibold mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {author.title}
                  </p>
                  {author.linkedin && (
                    <a href={author.linkedin} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#8A7F72] hover:text-[#E8521A] transition-colors mt-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-[#8A7F72] leading-relaxed mb-5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                {author.bio}
              </p>

              <div>
                <p className="text-xs font-semibold text-[#1A1410] uppercase tracking-wider mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Areas of Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((exp) => (
                    <span key={exp} className="inline-flex items-center rounded-full bg-[#F0EDE8] px-2.5 py-1 text-[11px] font-medium text-[#8A7F72]">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Policy Link */}
        <div className="mt-14 text-center rounded-[18px] border border-[#E8E3DA] bg-[#FAF8F4] p-8">
          <h2 className="text-xl font-bold text-[#1A1410] mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
            Our Editorial Standards
          </h2>
          <p className="text-sm text-[#8A7F72] max-w-2xl mx-auto mb-5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Every calculator and guide on TheMetricApp is researched, written, and reviewed by our team
            following strict editorial guidelines. Learn more about our research process, data sources,
            and commitment to accuracy.
          </p>
          <Link
            href="/editorial-policy"
            className="inline-flex items-center gap-2 rounded-[100px] bg-[#1A1410] text-white font-semibold px-6 py-3 text-sm hover:bg-[#E8521A] hover:-translate-y-[1px] hover:shadow-[0_8px_32px_rgba(232,82,26,0.3)] transition-all"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
          >
            Read Our Editorial Policy →
          </Link>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { siteUrl, calculators } from "@/lib/siteConfig";
import { authors, calculatorAuthorMap } from "@/lib/authors";

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const author = authors[params.slug];
  if (!author) return { title: "Author Not Found" };

  return {
    title: `${author.name} — ${author.title} | TheMetricApp`,
    description: `Meet ${author.name}, ${author.title} at TheMetricApp. Expert in ${author.expertise.slice(0, 3).join(", ")}.`,
    alternates: { canonical: `${siteUrl}/authors/${author.slug}/` },
    openGraph: {
      title: `${author.name} — ${author.title} | TheMetricApp`,
      description: `Meet ${author.name}, ${author.title} at TheMetricApp.`,
      url: `${siteUrl}/authors/${author.slug}/`,
      siteName: "TheMetricApp",
      type: "profile",
    },
  };
}

export default function AuthorProfilePage({ params }) {
  const author = authors[params.slug];
  if (!author) notFound();

  // Find calculators this author covers based on tag mapping
  const authorTags = Object.entries(calculatorAuthorMap)
    .filter(([, slug]) => slug === author.slug)
    .map(([tag]) => tag);

  const authorCalcs = calculators.filter((c) => authorTags.includes(c.tag));

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Our Team", item: `${siteUrl}/authors/` },
      { "@type": "ListItem", position: 3, name: author.name, item: `${siteUrl}/authors/${author.slug}/` },
    ],
  };

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.title,
    url: `${siteUrl}/authors/${author.slug}/`,
    knowsAbout: author.expertise,
    sameAs: author.linkedin ? [author.linkedin] : [],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#C4BAB0] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Link href="/" className="hover:text-[#E8521A] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/authors/" className="hover:text-[#E8521A] transition-colors">Our Team</Link>
          <span>/</span>
          <span className="text-[#8A7F72]">{author.name}</span>
        </nav>

        {/* Profile Header */}
        <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-6 sm:p-10 shadow-[0_1px_4px_rgba(26,20,16,0.04)] mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-[#E8521A]/10 flex items-center justify-center text-4xl shrink-0 border border-[#E8E3DA]">
              {author.slug === "sarah-chen" ? "👩‍💼" : author.slug === "michael-torres" ? "👨‍💼" : author.slug === "james-wilson" ? "👨‍💻" : "👩‍💻"}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1410]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
                {author.name}
              </h1>
              <p className="text-base text-[#E8521A] font-semibold mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                {author.title}
              </p>
              <p className="text-sm text-[#8A7F72] leading-relaxed mt-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                {author.bio}
              </p>
              {author.linkedin && (
                <a href={author.linkedin} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#8A7F72] hover:text-[#E8521A] transition-colors mt-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  View LinkedIn Profile
                </a>
              )}
            </div>
          </div>

          {/* Expertise */}
          <div className="mt-6 pt-6 border-t border-[#E8E3DA]">
            <h2 className="text-sm font-semibold text-[#1A1410] uppercase tracking-wider mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Areas of Expertise
            </h2>
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((exp) => (
                <span key={exp} className="inline-flex items-center rounded-full bg-[#F0EDE8] px-3 py-1.5 text-xs font-medium text-[#8A7F72]">
                  {exp}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Calculators by this Author */}
        {authorCalcs.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-[#1A1410] mb-5" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
              Calculators by {author.shortName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {authorCalcs.map((calc) => (
                <Link key={calc.href} href={calc.href}
                  className="group rounded-[14px] border border-[#E8E3DA] bg-white p-4 shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(26,20,16,0.1)] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{calc.icon}</span>
                    <div>
                      <span className="inline-flex items-center rounded-full bg-[#E8521A]/10 px-2 py-0.5 text-[10px] font-semibold text-[#E8521A] uppercase tracking-wider mb-1">{calc.tag}</span>
                      <h3 className="text-sm font-bold text-[#1A1410] group-hover:text-[#E8521A] transition-colors" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>{calc.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Team */}
        <div className="mt-10 text-center">
          <Link href="/authors/"
            className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white px-6 py-3 text-sm font-semibold text-[#1A1410] hover:border-[#E8521A] hover:text-[#E8521A] transition-all"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
            ← Back to Our Team
          </Link>
        </div>
      </div>
    </>
  );
}

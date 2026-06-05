import Link from "next/link";
import { blogPosts } from "@/lib/siteConfig";

export const metadata = {
  title: "Blog — Financial Calculators & Guides",
  description:
    "Read the latest financial tips, tax guides, and calculator tutorials from TheMetricApp team covering DoorDash taxes, eBay fees, Texas paychecks, solar ROI, EV savings, freelancer fees, and import tariffs.",
  alternates: {
    canonical: "https://www.themetricapp.com/blog",
  },
  openGraph: {
    title: "Blog — Financial Calculators & Guides | TheMetricApp",
    description:
      "Read the latest financial tips, tax guides, and calculator tutorials from TheMetricApp team.",
    url: "https://www.themetricapp.com/blog",
    siteName: "TheMetricApp",
    type: "website",
  },
  twitter: {
    title: "Blog — Financial Calculators & Guides | TheMetricApp",
    card: "summary_large_image",
  },
};

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
          TheMetricApp Blog
        </h1>
        <p className="text-lg text-[#8A7F72] max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Financial tips, tax guides, and insights to help you make smarter money decisions.
        </p>
        <p className="text-sm text-[#C4BAB0] mt-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          {blogPosts.length} articles covering taxes, e-commerce, real estate, retirement, and more.
        </p>
      </div>

      {/* Blog Grid — 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <article
            key={post.slug}
            className="group relative flex flex-col rounded-[18px] border border-[#E8E3DA] bg-white shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[5px] hover:scale-[1.01] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300 overflow-hidden"
            style={{
              animation: `fadeUp 0.6s ease-out ${0.05 + i * 0.05}s forwards`,
              opacity: 0,
            }}
          >
            {/* Top image area */}
            <div className="h-[180px] bg-gradient-to-br from-[#E8521A]/20 to-[#E8521A]/5 flex items-center justify-center">
              <span className="text-5xl opacity-40">📊</span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              {/* Category Tag */}
              <span className="inline-flex self-start items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider text-[#E8521A] mb-3" style={{ background: "rgba(232,82,26,0.18)" }}>
                {post.category}
              </span>

              {/* Date + read time */}
              <div className="flex items-center gap-2 text-xs text-[#C4BAB0] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-[18px] font-bold text-[#1A1410] mb-2 leading-snug group-hover:text-[#E8521A] transition-colors" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                  {post.title}
                </Link>
              </h2>
              <p className="text-[13px] text-[#8A7F72] leading-relaxed flex-1 mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                {post.excerpt}
              </p>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-[#F0EDE8] px-2 py-0.5 text-[10px] font-medium text-[#8A7F72]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Read More */}
              <div className="flex items-center gap-1 text-sm font-semibold text-[#E8521A] mt-auto pt-4 border-t border-[#E8E3DA]">
                <span>Read Article</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State Hint */}
      <div className="mt-16 text-center rounded-[18px] border border-dashed border-[#E8E3DA] bg-[#FAF8F4] p-8">
        <p className="text-sm text-[#C4BAB0]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          More articles coming soon. Have a topic you&apos;d like us to cover?{" "}
          <Link
            href="/contact"
            className="text-[#E8521A] hover:text-[#D04A16] underline font-medium"
          >
            Let us know
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

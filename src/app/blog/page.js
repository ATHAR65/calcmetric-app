import Link from "next/link";
import { blogPosts } from "@/lib/siteConfig";
import { getCategoryStyle } from "@/lib/blogCategories";

export const metadata = {
  title: { absolute: "Blog — Financial Calculators & Guides | TheMetricApp" },
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
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}>
          TheMetricApp Blog
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          Financial tips, tax guides, and insights to help you make smarter money decisions.
        </p>
        <p className="text-sm text-[var(--color-text-muted)] mt-2" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          {blogPosts.length} articles covering taxes, e-commerce, real estate, retirement, and more.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => {
          const style = getCategoryStyle(post.category);
          return (
            <article
              key={post.slug}
              className="group relative flex flex-col rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] shadow-[0_1px_4px_rgba(29,26,51,0.04)] hover:-translate-y-[5px] hover:scale-[1.01] hover:shadow-[0_20px_56px_rgba(29,26,51,0.13)] transition-all duration-300 overflow-hidden"
              style={{
                animation: `fadeUp 0.6s ease-out ${0.05 + i * 0.05}s forwards`,
                opacity: 0,
              }}
            >
              {/* Category-unique image area */}
              <div
                className={`h-[180px] bg-gradient-to-br ${style.gradient} flex items-center justify-center relative`}
                role="img"
                aria-label={`${post.category} illustration`}
              >
                <span className="text-6xl opacity-30" aria-hidden="true">{style.emoji}</span>
                <span
                  className="absolute top-3 right-3 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] uppercase font-semibold tracking-wider text-white"
                  style={{ backgroundColor: style.color }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Date + read time */}
                <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  <time dateTime={new Date(post.date).toISOString().split("T")[0]}>{post.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-[18px] font-bold text-[var(--color-text-primary)] mb-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                  <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-4 line-clamp-3" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  {post.excerpt}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Article tags">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-[var(--color-bg-tertiary)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Read More */}
                <div className="flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] mt-auto pt-4 border-t border-[var(--color-border)]">
                  <span>Read Article</span>
                  <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Empty State */}
      <div className="mt-16 text-center rounded-[18px] border border-dashed border-[var(--color-border)] bg-[var(--color-bg-main)] p-8">
        <p className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          More articles coming soon. Have a topic you&apos;d like us to cover?{" "}
          <Link
            href="/contact"
            className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] underline font-medium"
          >
            Let us know
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

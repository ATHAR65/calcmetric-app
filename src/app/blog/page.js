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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          TheMetricApp Blog
        </h1>
        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
          Financial tips, tax guides, and insights to help you make smarter money decisions.
        </p>
        <p className="text-sm text-[#94A3B8] mt-2">
          {blogPosts.length} articles covering taxes, e-commerce, real estate, retirement, and more.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col rounded-2xl border border-[#E2E8F0] bg-white shadow-sm hover:shadow-xl hover:shadow-[#6366F1]/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Category Tag */}
            <div className="px-6 pt-6 pb-2">
              <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-xs font-semibold text-[#6366F1]">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-6 pb-6">
              <h2 className="text-lg font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#6366F1] transition-colors">
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1 mb-4">
                {post.excerpt}
              </p>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-[#F1F5F9] px-2 py-0.5 text-xs font-medium text-[#64748B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-[#94A3B8] border-t border-[#F1F5F9] pt-4 mt-auto">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State Hint */}
      <div className="mt-16 text-center rounded-2xl border border-dashed border-[#E2E8F0] bg-white/50 p-8">
        <p className="text-sm text-[#94A3B8]">
          More articles coming soon. Have a topic you&apos;d like us to cover?{" "}
          <Link
            href="/contact"
            className="text-[#6366F1] hover:text-[#4F46E5] underline font-medium"
          >
            Let us know
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

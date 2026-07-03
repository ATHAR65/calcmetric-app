import Link from "next/link";
import { calculators } from "@/lib/siteConfig";

const siteUrl = "https://www.themetricapp.com";

export default function BlogLayout({ children, params }) {
  const slug = params?.slug;
  let mentionedCalculators = [];

  if (slug) {
    const calcSlug = slug.replace('-2026', '').replace('-guide', '').replace('-calculator', '');
    mentionedCalculators = calculators.filter(calc => {
      const calcKey = calc.href.replace('/calculators/', '');
      return slug.includes(calcKey) || calcKey.includes(slug.replace('-2026', ''));
    }).slice(0, 4);
  }

  return (
    <>
      {mentionedCalculators.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 border-t border-[#E2E8F0]">
          <h2 className="text-xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
            Calculators Mentioned in This Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {mentionedCalculators.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="flex items-center gap-3 rounded-lg border border-[#E2E8F0] bg-white p-3 hover:border-[#6366F1]/30 hover:shadow-md transition-all duration-200"
              >
                <span className="text-2xl shrink-0">{calc.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#0F172A] truncate" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                    {calc.title}
                  </p>
                  <p className="text-xs text-[#94A3B8] truncate" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    {calc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      {children}
    </>
  );
}
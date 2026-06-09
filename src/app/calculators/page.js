import Link from "next/link";
import { calculators } from "@/lib/siteConfig";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "All Financial Calculators — Free Tools | TheMetricApp" },
  description: "Browse 60+ free financial calculators for taxes, paychecks, e-commerce, real estate, retirement, and more. US & UK tools. No signup, instant results.",
  alternates: {
    canonical: siteUrl + "/calculators",
  },
  openGraph: {
    title: "All Financial Calculators — Free Tools | TheMetricApp",
    description: "Browse 60+ free financial calculators for taxes, paychecks, e-commerce, real estate, retirement, and more.",
    url: siteUrl + "/calculators",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=All%20Financial%20Calculators%20%E2%80%94%20Free%20Tools&description=Browse%2060%2B%20free%20financial%20calculators%20for%20taxes%2C%20paychecks%2C%20e-commerce%2C%20real%20estate%2C%20retirement%2C%20and%20more.&type=website", width: 1200, height: 630, alt: "All Financial Calculators — Free Tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Financial Calculators — Free Tools | TheMetricApp",
  },
};

const categoryOrder = [
  "Tax Tools",
  "Self-Employment",
  "Gig Economy",
  "Paycheck",
  "Merchant Fees",
  "E-Commerce",
  "Marketplace",
  "Real Estate",
  "Retirement",
  "Savings & Education",
  "Savings & Planning",
  "Loans",
  "Auto & Loans",
  "Debt Payoff",
  "Personal Finance",
  "Tax Deductions",
  "Import & Trade",
  "Freelancing",
  "Automotive",
  "Energy",
  "Property",
];

function getCategoryGroups() {
  const groups = {};
  calculators.forEach((calc) => {
    const tag = calc.tag || "Other";
    if (!groups[tag]) groups[tag] = [];
    groups[tag].push(calc);
  });

  const sortedTags = Object.keys(groups).sort((a, b) => {
    const idxA = categoryOrder.indexOf(a);
    const idxB = categoryOrder.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b);
  });

  return sortedTags.map((tag) => ({ tag, calculators: groups[tag] }));
}

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: calculators.map((calc, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: calc.title,
    url: siteUrl + calc.href,
    description: calc.desc,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Calculators", item: siteUrl + "/calculators" },
  ],
};

export default function CalculatorsIndex() {
  const categories = getCategoryGroups();
  const totalCalculators = calculators.length;

  return (
    <>
      <SchemaMarkup data={[itemListSchema, breadcrumbSchema]} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
            All Financial Calculators
          </h1>
          <p className="text-lg text-[#8A7F72] max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            {totalCalculators}+ free calculators for taxes, fees, profits, savings, and ROI. No sign-up, no ads — just accurate numbers.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map(({ tag, calculators: catCalcs }, catIndex) => (
            <section key={tag} style={{ animation: `fadeUp 0.6s ease-out ${0.1 + catIndex * 0.05}s forwards`, opacity: 0 }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#1A1410] tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                  {tag}
                  <span className="ml-3 text-base font-normal text-[#C4BAB0]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    ({catCalcs.length})
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catCalcs.map((calc, i) => (
                  <Link
                    key={calc.href}
                    href={calc.href}
                    className="group relative flex items-center gap-4 rounded-[18px] border border-[#E8E3DA] bg-white p-5 shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[3px] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300"
                    style={{ animation: `fadeUp 0.4s ease-out ${0.1 + i * 0.03}s forwards`, opacity: 0 }}
                  >
                    <span className="text-2xl shrink-0">{calc.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#1A1410] truncate group-hover:text-[#E8521A] transition-colors" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
                        {calc.title}
                      </h3>
                      <p className="text-sm text-[#8A7F72] truncate mt-0.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                        {calc.desc}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-[#C4BAB0] group-hover:text-[#E8521A] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-[18px] border border-dashed border-[#E8E3DA] bg-[#FAF8F4] p-8 text-center">
          <p className="text-sm text-[#C4BAB0]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Can't find the calculator you need?{" "}
            <Link href="/contact" className="text-[#E8521A] hover:text-[#D04A16] underline font-medium">
              Let us know
            </Link>
            {" — we're always adding new tools."}
          </p>
        </div>
      </div>
    </>
  );
}
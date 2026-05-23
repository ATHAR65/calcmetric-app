import AdSlot from "./AdSlot";
import Disclaimer from "./Disclaimer";
import SchemaMarkup from "./SchemaMarkup";

export default function CalculatorShell({
  title,
  subtitle,
  schemaData,
  children,
  results,
  seoContent,
}) {
  return (
    <>
      <SchemaMarkup data={schemaData} />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* AdSense Slot — Above Calculator */}
        <AdSlot position="top" />

        {/* Calculator Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-lg shadow-[#0F172A]/5 p-6 sm:p-8">
          {children}
        </div>

        {/* Results Section */}
        {results && (
          <div className="mt-8 rounded-2xl border border-[#0D9488]/20 bg-gradient-to-br from-[#F0FDFA] to-white p-6 sm:p-8 shadow-lg shadow-[#0D9488]/5">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D9488] text-white text-xs">✓</span>
              Your Results
            </h2>
            {results}
          </div>
        )}

        {/* AdSense Slot — Below Results */}
        <AdSlot position="bottom" />

        {/* SEO Content */}
        <article className="seo-content mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-sm">
          {seoContent}
        </article>

        {/* Disclaimer */}
        <Disclaimer />
      </div>
    </>
  );
}

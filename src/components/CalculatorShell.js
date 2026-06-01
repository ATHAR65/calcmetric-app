"use client";

import Link from "next/link";
import AdSlot from "./AdSlot";
import Disclaimer from "./Disclaimer";
import SchemaMarkup from "./SchemaMarkup";
import { useCalculatorEmbedded } from "./CalculatorContext";

const siteUrl = "https://www.themetricapp.com";

// Generate breadcrumb schema from the current route
function getBreadcrumbData(pathname, pageTitle) {
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ position: 1, name: "Home", item: siteUrl }];
  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += "/" + segment;
    const name =
      index === segments.length - 1
        ? pageTitle
        : segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    items.push({
      position: index + 2,
      name,
      item: siteUrl + currentPath,
    });
  });
  return {
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export default function CalculatorShell({
  title,
  subtitle,
  schemaData,
  children,
  results,
  seoContent,
  currentRoute,
}) {
  const { embedded } = useCalculatorEmbedded();

  // Embedded mode: render only the calculator form + results (for blog embeds)
  if (embedded) {
    return (
      <>
        {schemaData && (
          <SchemaMarkup
            data={[
              {
                "@type": "WebApplication",
                applicationCategory: "FinanceApplication",
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
                ...schemaData,
              },
            ]}
          />
        )}
        {/* Calculator Form */}
        <div className="p-6">{children}</div>
        {/* Results */}
        {results && (
          <div className="px-6 pb-6">
            <h2 className="text-lg font-bold text-[#111827] dark:text-[#F9FAFB] mb-5 flex items-center gap-2 transition-colors duration-300">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6366F1] text-white text-xs">
                ✓
              </span>
              Your Results
            </h2>
            {results}
          </div>
        )}
      </>
    );
  }
  const path =
    currentRoute ||
    (title
      ? "/calculators/" +
        title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "")
      : "");
  const breadcrumbSchema = getBreadcrumbData(path, title || "Calculator");
  const calcSchema = schemaData
    ? {
        "@type": "WebApplication",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        ...schemaData,
      }
    : null;
  const mergedSchema = calcSchema
    ? [calcSchema, breadcrumbSchema]
    : [breadcrumbSchema];

  return (
    <>
      <SchemaMarkup data={mergedSchema} />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-16">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm text-[#9CA3AF] mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#6366F1] transition-colors">
            Home
          </Link>
          <svg
            className="w-3.5 h-3.5 text-[#D1D5DB]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="text-[#6B7280] truncate max-w-[200px] sm:max-w-none">
            {title}
          </span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] dark:text-[#F9FAFB] tracking-tight mb-3 transition-colors duration-300">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto transition-colors duration-300">
              {subtitle}
            </p>
          )}
        </div>

        {/* AdSense Slot — Top */}
        <AdSlot position="top" />

        {/* Calculator Card */}
        <div className="rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03)] p-6 sm:p-8 dark:bg-[#111827] dark:border-[#1E293B] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-colors duration-300">
          {children}
        </div>

        {/* Results Section */}
        {results && (
          <div className="mt-8 rounded-2xl border border-[#6366F1]/15 bg-gradient-to-br from-[#EEF2FF] to-white p-6 sm:p-8 shadow-sm dark:from-[#6366F1]/10 dark:to-[#111827] dark:border-[#6366F1]/10 transition-colors duration-300">
            <h2 className="text-lg font-bold text-[#111827] dark:text-[#F9FAFB] mb-5 flex items-center gap-2 transition-colors duration-300">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6366F1] text-white text-xs">
                ✓
              </span>
              Your Results
            </h2>
            {results}
          </div>
        )}

        {/* AdSense Slot — Bottom */}
        <AdSlot position="bottom" />

        {/* SEO Content */}
        <article className="seo-content mt-10 rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-10 shadow-sm dark:bg-[#111827] dark:border-[#1E293B] transition-colors duration-300">
          {seoContent}
        </article>

        {/* Disclaimer */}
        <Disclaimer />
      </div>
    </>
  );
}

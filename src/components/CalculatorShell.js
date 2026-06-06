"use client";

import Link from "next/link";
import AdSlot from "./AdSlot";
import Disclaimer from "./Disclaimer";
import SchemaMarkup from "./SchemaMarkup";
import RatingWidget from "./RatingWidget";
import { useCalculatorEmbedded } from "./CalculatorContext";
import { getAggregateRatingSchema } from "@/lib/ratings";

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
            <h2 className="text-lg font-bold text-[#1A1410] mb-5 flex items-center gap-2 transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8521A] text-white text-xs">
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
  const calcSlug = path.replace("/calculators/", "");
  const aggRating = getAggregateRatingSchema(calcSlug);
  const calcSchema = schemaData
    ? {
        "@type": "SoftwareApplication",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        ...(aggRating && { aggregateRating: aggRating }),
        ...schemaData,
      }
    : null;

  // HowTo schema
  const howToTitle = title || "Calculator";
  const howToDesc = subtitle || "Use this free online calculator to estimate your finances instantly.";
  const howToSchema = {
    "@type": "HowTo",
    name: howToTitle,
    description: howToDesc,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Enter Your Information",
        text: "Fill in your financial details such as income, expenses, rates, and amounts.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Review Your Results",
        text: "View your instant calculation results including totals, breakdowns, and projections.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Adjust and Compare",
        text: "Change any input to see how different scenarios affect your results in real time.",
      },
    ],
  };

  const mergedSchema = calcSchema
    ? [calcSchema, breadcrumbSchema, howToSchema]
    : [breadcrumbSchema, howToSchema];

  return (
    <>
      <SchemaMarkup data={mergedSchema} />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-16">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm text-[#8A7F72] mb-8"
          aria-label="Breadcrumb"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Link href="/" className="hover:text-[#E8521A] transition-colors">
            Home
          </Link>
          <svg
            className="w-3.5 h-3.5 text-[#C4BAB0]"
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
          <span className="text-[#8A7F72] truncate max-w-[200px] sm:max-w-none">
            {title}
          </span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-3 transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-[#8A7F72] max-w-2xl mx-auto transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* AdSense Slot — Top */}
        <AdSlot position="top" />

        {/* Calculator Card */}
        <div className="rounded-[18px] border border-[#E8E3DA] bg-white shadow-[0_1px_4px_rgba(26,20,16,0.04)] p-6 sm:p-8 transition-colors duration-300">
          {children}
        </div>

        {/* Results Section */}
        {results && (
          <div className="mt-8 rounded-[18px] border border-[#E8E3DA] bg-white p-6 sm:p-8 shadow-[0_1px_4px_rgba(26,20,16,0.04)] transition-colors duration-300">
            <h2 className="text-lg font-bold text-[#1A1410] mb-5 flex items-center gap-2 transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8521A] text-white text-xs">
                ✓
              </span>
              Your Results
            </h2>
            {results}
          </div>
        )}

        {/* Rating Widget */}
        <div className="mt-8">
          <RatingWidget slug={calcSlug} />
        </div>

        {/* AdSense Slot — Bottom */}
        <AdSlot position="bottom" />

        {/* SEO Content */}
        <article className="seo-content mt-10 rounded-[18px] border border-[#E8E3DA] bg-white p-6 sm:p-10 shadow-[0_1px_4px_rgba(26,20,16,0.04)] transition-colors duration-300">
          {seoContent}
        </article>

        {/* Disclaimer */}
        <Disclaimer />
      </div>
    </>
  );
}

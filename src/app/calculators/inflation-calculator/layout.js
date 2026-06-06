const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Inflation Calculator 2026 — Purchasing Power | TheMetricApp" },
  description: "Calculate how inflation reduces your money's purchasing power over time. Free 2026 inflation calculator with historical CPI data and projections.",
  keywords: [
    "inflation calculator",
    "inflation rate calculator",
    "purchasing power calculator",
    "inflation impact calculator",
    "future value inflation",
    "CPI calculator",
    "money value calculator",
    "personal finance calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/inflation-calculator" },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Inflation Calculator 2026 — How Inflation Affects Your",
    description: "Calculate how inflation reduces the purchasing power of your money over time. Free 2026 inflation calculator with year-by-year projections.",
    url: siteUrl + "/calculators/inflation-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Inflation%20Calculator%202026%20%E2%80%94%20How%20Inflation%20Affects%20Your%20Purchasing%20Power%20%7C%20TheMetricApp&description=Calculate%20how%20inflation%20reduces%20the%20purchasing%20power%20of%20your%20money%20over%20time.%20Free%202026%20inflation%20calculator%20with%20year-by-year%20projections.&type=website", width: 1200, height: 630, alt: "Inflation Calculator 2026 — How Inflation Affects Your Purchasing Power | TheMetricApp" }],
  },
  twitter: {
    title: "Inflation Calculator 2026 — Purchasing Power Over Time" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

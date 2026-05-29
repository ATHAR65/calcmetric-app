const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Inflation Calculator 2026 — How Inflation Affects Your Purchasing Power | TheMetricApp",
  description:
    "Calculate how inflation reduces the purchasing power of your money over time. Free 2026 inflation calculator with year-by-year projections and historical inflation data.",
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
  openGraph: {
    title: "Inflation Calculator 2026 — How Inflation Affects Your Purchasing Power | TheMetricApp",
    description: "Calculate how inflation reduces the purchasing power of your money over time. Free 2026 inflation calculator with year-by-year projections.",
    url: siteUrl + "/calculators/inflation-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Inflation Calculator 2026 — Free Purchasing Power Projection Tool" }],
  },
  twitter: { title: "Inflation Calculator 2026 — How Inflation Affects Your Purchasing Power | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

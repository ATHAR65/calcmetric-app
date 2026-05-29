const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Net Worth Calculator 2026 — What Is Your Total Financial Picture? | TheMetricApp",
  description:
    "Calculate your net worth by adding up all assets and liabilities. Free 2026 net worth tracker with asset allocation analysis and debt-to-asset ratio.",
  keywords: [
    "net worth calculator",
    "net worth tracker",
    "calculate net worth",
    "personal net worth calculator",
    "asset liability calculator",
    "financial health calculator",
    "net worth by age",
    "personal finance tools",
  ],
  alternates: { canonical: siteUrl + "/calculators/net-worth-calculator" },
  openGraph: {
    title: "Net Worth Calculator 2026 — What Is Your Total Financial Picture? | TheMetricApp",
    description: "Calculate your net worth by adding up all assets and liabilities. Free 2026 net worth tracker with asset allocation analysis.",
    url: siteUrl + "/calculators/net-worth-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Net Worth Calculator 2026 — Free Personal Finance Tool" }],
  },
  twitter: { title: "Net Worth Calculator 2026 — What Is Your Total Financial Picture? | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

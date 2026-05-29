const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Cost of Living Calculator 2026 — Compare Cities & Find Your Equivalent Salary | TheMetricApp",
  description:
    "Compare the cost of living between any two US cities. Calculate the equivalent salary you need to maintain your standard of living when relocating. Free 2026 cost of living calculator with city index data.",
  keywords: [
    "cost of living calculator",
    "cost of living comparison",
    "city comparison calculator",
    "relocation salary calculator",
    "equivalent salary calculator",
    "cost of living index",
    "moving to new city",
    "salary comparison by city",
  ],
  alternates: { canonical: siteUrl + "/calculators/cost-of-living-calculator" },
  openGraph: {
    title: "Cost of Living Calculator 2026 — Compare Cities & Find Your Equivalent Salary | TheMetricApp",
    description: "Compare the cost of living between any two US cities. Calculate the equivalent salary you need to maintain your standard of living when relocating.",
    url: siteUrl + "/calculators/cost-of-living-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Cost of Living Calculator 2026 — Free City Comparison Tool" }],
  },
  twitter: { title: "Cost of Living Calculator 2026 — Compare Cities & Find Your Equivalent Salary | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

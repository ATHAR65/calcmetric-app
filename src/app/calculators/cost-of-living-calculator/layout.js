const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Cost of Living Calculator 2026 — Compare Cities & Salaries",
  description: "Compare cost of living between any two US cities. Find the equivalent salary you need to maintain your lifestyle. Free city comparison calculator.",
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
    images: [{ url: "/api/og?title=Cost%20of%20Living%20Calculator%202026%20%E2%80%94%20Compare%20Cities%20%26%20Find%20Your%20Equivalent%20Salary%20%7C%20TheMetricApp&description=Compare%20the%20cost%20of%20living%20between%20any%20two%20US%20cities.%20Calculate%20the%20equivalent%20salary%20you%20need%20to%20maintain%20your%20standard%20of%20living%20when%20relocating.&type=website", width: 1200, height: 630, alt: "Cost of Living Calculator 2026 — Compare Cities & Find Your Equivalent Salary | TheMetricApp" }],
  },
  twitter: {
    title: "Cost of Living Calculator 2026 — Compare Cities & Salaries | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

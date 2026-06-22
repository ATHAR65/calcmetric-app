const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "W-2 vs 1099 Calculator 2026 — Take-Home Pay | TheMetricApp" },
  description:
    "Free W-2 vs 1099 calculator for 2026. Compare your real take-home pay as a W-2 employee versus a 1099 independent contractor. Includes SE tax, benefits value, and deductions.",
  keywords: [
    "w2 vs 1099 calculator",
    "w2 employee vs contractor take home pay",
    "should I take w2 or 1099 calculator",
    "freelancer vs employee net pay comparison 2026",
    "1099 vs w2 difference calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/w2-vs-1099-calculator-2026" },
  dateModified: "2026-06-13",
  openGraph: {
    title: "W-2 vs 1099 Calculator 2026 — Employee vs Contractor Pay",
    description:
      "Compare your real take-home pay as a W-2 employee versus a 1099 contractor. Includes SE tax, QBI, benefits value, and your break-even contractor rate.",
    url: siteUrl + "/calculators/w2-vs-1099-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-13T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=W-2%20vs%201099%20Calculator%202026&description=Compare%20take-home%20pay%20as%20a%20W-2%20employee%20versus%20a%201099%20contractor.&type=article", width: 1200, height: 630, alt: "W-2 vs 1099 Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "W-2 vs 1099 Calculator 2026 — Employee vs Contractor Pay",
    description: "Compare your real take-home pay as a W-2 employee versus a 1099 independent contractor.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Commission Calculator 2026 | TheMetricApp" },
  description: "Calculate real estate agent commission earnings after brokerage splits. Free 2026 commission calculator with split model comparison.",
  keywords: [
    "commission calculator",
    "real estate commission calculator",
    "agent commission calculator",
    "commission split calculator",
    "real estate agent earnings",
    "brokerage split calculator",
    "real estate income calculator",
    "commission rate calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/commission-calculator" },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Commission Calculator 2026 — Real Estate Agent",
    description: "Calculate real estate agent commission earnings. Estimate your take-home pay after brokerage splits and project annual income from property sales.",
    url: siteUrl + "/calculators/commission-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Commission%20Calculator%202026%20%E2%80%94%20Real%20Estate%20Agent%20Commission%20%26%20Split%20Calculator%20%7C%20TheMetricApp&description=Calculate%20real%20estate%20agent%20commission%20earnings.%20Estimate%20your%20take-home%20pay%20after%20brokerage%20splits%20and%20project%20annual%20income%20from%20property%20sales.&type=website", width: 1200, height: 630, alt: "Commission Calculator 2026 — Real Estate Agent Commission & Split Calculator | TheMetricApp" }],
  },
  twitter: {
    title: "Commission Calculator 2026 — Real Estate Agent" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

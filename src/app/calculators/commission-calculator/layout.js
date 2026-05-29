const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Commission Calculator 2026 — Real Estate Agent Commission & Split Calculator | TheMetricApp",
  description:
    "Calculate real estate agent commission earnings with our free 2026 commission calculator. Estimate your take-home pay after brokerage splits, compare split models, and project annual income from property sales.",
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
  openGraph: {
    title: "Commission Calculator 2026 — Real Estate Agent Commission & Split Calculator | TheMetricApp",
    description: "Calculate real estate agent commission earnings. Estimate your take-home pay after brokerage splits and project annual income from property sales.",
    url: siteUrl + "/calculators/commission-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Commission Calculator 2026 — Free Real Estate Agent Earnings Tool" }],
  },
  twitter: { title: "Commission Calculator 2026 — Real Estate Agent Commission & Split Calculator | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

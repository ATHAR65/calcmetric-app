const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "OnlyFans Tax Calculator 2026 — SE Tax & Quarterly Payments | TheMetricApp" },
  description:
    "Free OnlyFans tax calculator for 2026. Estimate self-employment tax, federal income tax, and quarterly payments — with the 20% platform fee deducted correctly.",
  keywords: [
    "onlyfans tax calculator",
    "onlyfans taxes 2026",
    "how much tax do onlyfans creators pay",
    "onlyfans 1099 calculator",
    "creator self employment tax calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/onlyfans-tax-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "OnlyFans Tax Calculator 2026 — What You Actually Owe",
    description:
      "SE tax, federal tax, and quarterly estimates on OnlyFans income — with the 20% platform fee handled correctly.",
    url: siteUrl + "/calculators/onlyfans-tax-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=OnlyFans%20Tax%20Calculator%202026&description=SE%20tax%2C%20federal%20tax%2C%20and%20quarterly%20estimates%20for%20creators.&type=article", width: 1200, height: 630, alt: "OnlyFans Tax Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Tax Calculator 2026",
    description: "What creators actually owe — SE tax, federal tax, quarterly estimates.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

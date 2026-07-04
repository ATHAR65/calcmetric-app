const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Facebook Marketplace Fee Calculator 2026 — 10% Shipped / Free Local | TheMetricApp" },
  description:
    "Free Facebook Marketplace fee calculator for 2026. Shipped orders pay 10% ($0.80 min); local pickup is free. See your exact payout and profit both ways.",
  keywords: [
    "facebook marketplace fee calculator",
    "facebook marketplace seller fees 2026",
    "how much does facebook marketplace take",
    "facebook marketplace shipping fee",
    "fb marketplace payout calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/facebook-marketplace-fee-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Facebook Marketplace Fee Calculator 2026 — Shipped vs Local",
    description:
      "10% shipped-checkout fee vs free local pickup — calculate your exact payout both ways.",
    url: siteUrl + "/calculators/facebook-marketplace-fee-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Facebook%20Marketplace%20Fee%20Calculator%202026&description=10%25%20shipped%20fee%20vs%20free%20local%20pickup%20%E2%80%94%20your%20exact%20payout.&type=article", width: 1200, height: 630, alt: "Facebook Marketplace Fee Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Marketplace Fee Calculator 2026",
    description: "10% shipped vs free local pickup — see your exact payout.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

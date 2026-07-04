const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Depop Fee Calculator 2026 — $0 Selling Fee + Processing | TheMetricApp" },
  description:
    "Free Depop fee calculator for 2026. US sellers pay no selling fee — just 3.3% + $0.45 processing (and optional 12% boost). See your exact payout and profit.",
  keywords: [
    "depop fee calculator",
    "depop seller fees 2026",
    "how much does depop take",
    "depop payout calculator",
    "depop boosted listing fee",
  ],
  alternates: { canonical: siteUrl + "/calculators/depop-fee-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Depop Fee Calculator 2026 — $0 Selling Fee, Processing & Boost",
    description:
      "Depop's 2026 US fees: no selling fee, 3.3% + $0.45 processing, optional 12% boost. Calculate your exact payout.",
    url: siteUrl + "/calculators/depop-fee-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Depop%20Fee%20Calculator%202026&description=%240%20selling%20fee%20%2B%203.3%25%20processing%20%E2%80%94%20your%20exact%20payout.&type=article", width: 1200, height: 630, alt: "Depop Fee Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Depop Fee Calculator 2026",
    description: "The cheapest clothing marketplace in 2026 — see your exact payout.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

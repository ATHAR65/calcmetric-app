const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "StockX Fee Calculator 2026 — Seller Fees by Level | TheMetricApp" },
  description:
    "Free StockX fee calculator for 2026. Transaction fees by seller level (8–9.5%), 3% processing, shipping bonuses, and your true payout on sneakers and collectibles.",
  keywords: [
    "stockx fee calculator",
    "stockx seller fees 2026",
    "how much does stockx take",
    "stockx payout calculator",
    "stockx seller level fees",
  ],
  alternates: { canonical: siteUrl + "/calculators/stockx-fee-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "StockX Fee Calculator 2026 — Fees by Seller Level & True Payout",
    description:
      "8–9.5% transaction fee + 3% processing, level bonuses, and shipping — see what you actually keep.",
    url: siteUrl + "/calculators/stockx-fee-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=StockX%20Fee%20Calculator%202026&description=Fees%20by%20seller%20level%20%2B%203%25%20processing%20%E2%80%94%20your%20true%20payout.&type=article", width: 1200, height: 630, alt: "StockX Fee Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "StockX Fee Calculator 2026",
    description: "Fees by seller level + 3% processing — your true sneaker payout.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

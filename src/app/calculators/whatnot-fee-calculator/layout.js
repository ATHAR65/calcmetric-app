const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Whatnot Fee Calculator 2026 — 8% + Processing | TheMetricApp" },
  description:
    "Free Whatnot fee calculator for 2026. Calculate the 8% commission plus 2.9% + $0.30 payment processing and your true payout from live selling.",
  keywords: [
    "whatnot fee calculator",
    "whatnot seller fees 2026",
    "how much does whatnot take",
    "whatnot payout calculator",
    "live selling fees whatnot",
  ],
  alternates: { canonical: siteUrl + "/calculators/whatnot-fee-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Whatnot Fee Calculator 2026 — Commission, Processing & Payout",
    description:
      "Whatnot's 8% + 2.9% + $0.30 fee math for live sellers — see your true payout per sale.",
    url: siteUrl + "/calculators/whatnot-fee-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Whatnot%20Fee%20Calculator%202026&description=8%25%20commission%20%2B%20processing%20%E2%80%94%20your%20true%20live-selling%20payout.&type=article", width: 1200, height: 630, alt: "Whatnot Fee Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatnot Fee Calculator 2026",
    description: "8% + 2.9% + $0.30 — see your true live-selling payout.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

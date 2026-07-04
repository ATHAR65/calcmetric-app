const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Mercari Fee Calculator 2026 — Flat 10% Fee & Payout | TheMetricApp" },
  description:
    "Free Mercari fee calculator for 2026. Calculate the flat 10% selling fee ($1 minimum, no processing fee), your exact payout, and net profit on any sale.",
  keywords: [
    "mercari fee calculator",
    "mercari seller fees 2026",
    "how much does mercari take",
    "mercari payout calculator",
    "mercari profit calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/mercari-fee-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Mercari Fee Calculator 2026 — Flat 10% Fee, Payout & Profit",
    description:
      "Mercari's flat 10% fee explained — no processing charge since 2025. See your exact payout and profit.",
    url: siteUrl + "/calculators/mercari-fee-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Mercari%20Fee%20Calculator%202026&description=Flat%2010%25%20fee%20%E2%80%94%20see%20your%20exact%20payout%20and%20profit.&type=article", width: 1200, height: 630, alt: "Mercari Fee Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercari Fee Calculator 2026",
    description: "Flat 10% fee, no processing charge — your payout and profit instantly.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

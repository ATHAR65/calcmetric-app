const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Poshmark Fee Calculator 2026 — Seller Fees & Payout | TheMetricApp" },
  description:
    "Free Poshmark fee calculator for 2026. See the $2.95 flat fee or 20% commission, your exact payout, net profit, and effective fee rate on any sale.",
  keywords: [
    "poshmark fee calculator",
    "poshmark seller fees 2026",
    "how much does poshmark take",
    "poshmark payout calculator",
    "poshmark profit calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/poshmark-fee-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Poshmark Fee Calculator 2026 — Fees, Payout & Profit",
    description:
      "Calculate Poshmark's $2.95 / 20% seller fees and your true payout and profit instantly.",
    url: siteUrl + "/calculators/poshmark-fee-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Poshmark%20Fee%20Calculator%202026&description=See%20exactly%20what%20Poshmark%20takes%20and%20your%20true%20payout.&type=article", width: 1200, height: 630, alt: "Poshmark Fee Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poshmark Fee Calculator 2026",
    description: "The $2.95 / 20% fee math, your payout, and profit — instantly.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

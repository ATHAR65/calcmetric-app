const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Compound Interest Calculator — Grow Your Savings | TheMetricApp" },
  description:
    "Free compound interest calculator. See how your savings and investments grow over time with regular contributions, any rate, and any compounding frequency.",
  keywords: [
    "compound interest calculator",
    "investment growth calculator",
    "compound interest with monthly contributions",
    "savings compound calculator",
    "future value calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/compound-interest-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Compound Interest Calculator — Grow Your Savings Over Time",
    description:
      "See how compounding and regular contributions grow your money. Free, instant, no sign-up.",
    url: siteUrl + "/calculators/compound-interest-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Compound%20Interest%20Calculator&description=See%20how%20your%20money%20grows%20with%20compound%20interest.&type=article", width: 1200, height: 630, alt: "Compound Interest Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Interest Calculator",
    description: "See how compounding and contributions grow your money over time.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

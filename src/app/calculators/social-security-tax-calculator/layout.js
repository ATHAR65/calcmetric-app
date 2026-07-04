const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Social Security Tax Calculator 2026 — How Much Is Taxable? | TheMetricApp" },
  description:
    "Free Social Security tax calculator. Find how much of your benefits are taxable under the IRS 0%, 50%, and 85% combined-income rules, with exact worksheet math for 2026.",
  keywords: [
    "social security tax calculator",
    "how much of my social security is taxable calculator",
    "social security taxable amount calculator 2026",
    "combined income social security calculator",
    "provisional income calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/social-security-tax-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Social Security Tax Calculator — 0% / 50% / 85% Rules",
    description:
      "Calculate exactly how much of your Social Security benefits are taxable using the IRS combined-income worksheet, updated for 2026.",
    url: siteUrl + "/calculators/social-security-tax-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Social%20Security%20Tax%20Calculator&description=How%20much%20of%20your%20benefits%20are%20taxable%3F%200%25%20%2F%2050%25%20%2F%2085%25%20rules%20explained.&type=article", width: 1200, height: 630, alt: "Social Security Tax Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Security Tax Calculator — 0% / 50% / 85% Rules",
    description: "Find how much of your Social Security is taxable with exact IRS worksheet math.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Federal Income Tax Calculator 2026 — Estimate Your Tax | TheMetricApp" },
  description:
    "Free 2026 federal income tax calculator. Estimate your tax, effective and marginal rates, take-home pay, and refund using the latest IRS brackets and standard deduction.",
  keywords: [
    "federal income tax calculator",
    "federal income tax calculator 2026",
    "income tax estimator 2026",
    "tax bracket calculator",
    "how much federal tax do i owe",
  ],
  alternates: { canonical: siteUrl + "/calculators/federal-income-tax-calculator-2026" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Federal Income Tax Calculator 2026 — Estimate Your Tax",
    description:
      "Estimate your 2026 federal income tax, effective and marginal rates, and refund. Free and instant.",
    url: siteUrl + "/calculators/federal-income-tax-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Federal%20Income%20Tax%20Calculator%202026&description=Estimate%20your%20tax%2C%20effective%20%26%20marginal%20rates%2C%20and%20refund.&type=article", width: 1200, height: 630, alt: "Federal Income Tax Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Federal Income Tax Calculator 2026",
    description: "Estimate your 2026 federal tax, rates, and refund with current IRS brackets.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

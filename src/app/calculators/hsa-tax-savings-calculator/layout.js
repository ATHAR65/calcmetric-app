const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "HSA Tax Savings Calculator 2026 — Triple Tax Benefit | TheMetricApp" },
  description:
    "Free HSA tax savings calculator for 2026. See income tax and FICA savings from Health Savings Account contributions, with 2026 limits and the net cost of funding.",
  keywords: [
    "hsa tax savings calculator",
    "hsa contribution tax savings 2026",
    "health savings account calculator",
    "hsa tax benefit calculator",
    "how much does an hsa save on taxes",
  ],
  alternates: { canonical: siteUrl + "/calculators/hsa-tax-savings-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "HSA Tax Savings Calculator 2026 — Triple Tax Benefit",
    description:
      "See your income tax and FICA savings from HSA contributions, with 2026 limits and net cost.",
    url: siteUrl + "/calculators/hsa-tax-savings-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=HSA%20Tax%20Savings%20Calculator%202026&description=Income%20tax%20%2B%20FICA%20savings%20from%20HSA%20contributions.&type=article", width: 1200, height: 630, alt: "HSA Tax Savings Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSA Tax Savings Calculator 2026",
    description: "Income tax + FICA savings from HSA contributions, with 2026 limits.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

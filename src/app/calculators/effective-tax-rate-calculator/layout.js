const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Effective Tax Rate Calculator — Your Real Tax Rate | TheMetricApp" },
  description:
    "Free effective tax rate calculator. See the actual percentage of income you pay across federal, FICA, and state taxes — and how it compares to your marginal bracket.",
  keywords: [
    "effective tax rate calculator",
    "effective vs marginal tax rate",
    "real tax rate calculator",
    "average tax rate calculator",
    "total tax rate calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/effective-tax-rate-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Effective Tax Rate Calculator — Your Real Tax Rate",
    description:
      "See the actual share of income you pay across federal, FICA, and state taxes vs your marginal bracket.",
    url: siteUrl + "/calculators/effective-tax-rate-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Effective%20Tax%20Rate%20Calculator&description=Your%20real%20tax%20rate%20across%20federal%2C%20FICA%2C%20and%20state.&type=article", width: 1200, height: 630, alt: "Effective Tax Rate Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Effective Tax Rate Calculator",
    description: "Your real effective tax rate across federal, FICA, and state taxes.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

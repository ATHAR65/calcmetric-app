const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "RMD Calculator 2026 — Required Minimum Distribution | TheMetricApp" },
  description:
    "Free 2026 RMD calculator. Calculate your Required Minimum Distribution from traditional IRAs and 401(k)s using the IRS Uniform Lifetime Table and SECURE 2.0 age rules.",
  keywords: [
    "rmd calculator",
    "rmd calculator 2026",
    "required minimum distribution calculator",
    "ira rmd calculator",
    "401k rmd calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/rmd-calculator-2026" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "RMD Calculator 2026 — Required Minimum Distribution",
    description:
      "Calculate your 2026 RMD from IRAs and 401(k)s with the IRS Uniform Lifetime Table.",
    url: siteUrl + "/calculators/rmd-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=RMD%20Calculator%202026&description=Your%20Required%20Minimum%20Distribution%20from%20IRAs%20and%20401(k)s.&type=article", width: 1200, height: 630, alt: "RMD Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RMD Calculator 2026",
    description: "Calculate your Required Minimum Distribution with the IRS Uniform Lifetime Table.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

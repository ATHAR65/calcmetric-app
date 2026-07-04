const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "No Tax on Tips Calculator 2026 | TheMetricApp" },
  description:
    "Free no tax on tips calculator for 2026. Estimate your federal income tax savings from the OBBBA $25,000 qualified tips deduction. W-2 and self-employed tipped workers, with phase-out limits.",
  keywords: [
    "no tax on tips calculator 2026",
    "tip tax deduction calculator OBBBA",
    "tips tax free 2026 calculator",
    "OBBBA tips deduction calculator",
    "how much tax do I save on tips",
  ],
  alternates: { canonical: siteUrl + "/calculators/no-tax-on-tips-calculator-2026" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "No Tax on Tips Calculator 2026 — Federal Tax Savings",
    description:
      "Estimate your federal income tax savings on tip income under OBBBA. Includes the $25,000 cap and income phase-out limits for 2026.",
    url: siteUrl + "/calculators/no-tax-on-tips-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=No%20Tax%20on%20Tips%20Calculator%202026&description=Estimate%20your%20federal%20income%20tax%20savings%20on%20tip%20income%20under%20OBBBA.&type=article", width: 1200, height: 630, alt: "No Tax on Tips Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Tax on Tips Calculator 2026 — Federal Tax Savings",
    description: "Estimate your tips tax deduction under OBBBA for 2026. W-2 and self-employed tipped workers.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

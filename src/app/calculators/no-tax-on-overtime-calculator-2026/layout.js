const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "No Tax on Overtime Calculator 2026 — Estimate Your Federal Tax Savings | TheMetricApp" },
  description:
    "Free no tax on overtime calculator for 2026. Estimate your federal income tax savings under the One Big Beautiful Bill Act (OBBBA). W-2 employees only. Includes phase-out limits.",
  keywords: [
    "no tax on overtime calculator 2026",
    "overtime tax deduction calculator OBBBA",
    "overtime pay tax savings 2026",
    "OBBBA overtime pay calculator",
    "how much overtime tax do I save",
  ],
  alternates: { canonical: siteUrl + "/calculators/no-tax-on-overtime-calculator-2026" },
  dateModified: "2026-06-13",
  openGraph: {
    title: "No Tax on Overtime Calculator 2026 — Federal Tax Savings",
    description:
      "Estimate your federal income tax savings on overtime pay under OBBBA. Includes the $12,500 / $25,000 caps and income phase-out limits for 2026.",
    url: siteUrl + "/calculators/no-tax-on-overtime-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-13T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=No%20Tax%20on%20Overtime%20Calculator%202026&description=Estimate%20your%20federal%20income%20tax%20savings%20on%20overtime%20pay%20under%20OBBBA.&type=article", width: 1200, height: 630, alt: "No Tax on Overtime Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Tax on Overtime Calculator 2026 — Federal Tax Savings",
    description: "Estimate your overtime tax deduction under OBBBA for 2026. W-2 employees only.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

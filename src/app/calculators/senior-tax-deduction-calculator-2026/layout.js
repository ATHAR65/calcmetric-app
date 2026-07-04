const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Senior Tax Deduction Calculator 2026 — $6,000 OBBBA Bonus | TheMetricApp" },
  description:
    "Free senior tax deduction calculator for 2026. Estimate the $6,000 OBBBA bonus deduction for age 65+ ($12,000 for couples), the 6% phase-out, and your total tax-free income.",
  keywords: [
    "senior tax deduction calculator 2026",
    "$6000 senior deduction calculator",
    "OBBBA senior bonus deduction",
    "tax deduction for seniors over 65 2026",
    "social security tax deduction 65 and older",
  ],
  alternates: { canonical: siteUrl + "/calculators/senior-tax-deduction-calculator-2026" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Senior Tax Deduction Calculator 2026 — $6,000 OBBBA Bonus for 65+",
    description:
      "Estimate the new $6,000 senior bonus deduction ($12,000 for couples), the 6% MAGI phase-out, and your total shielded income for 2026.",
    url: siteUrl + "/calculators/senior-tax-deduction-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Senior%20Tax%20Deduction%20Calculator%202026&description=Estimate%20the%20%246%2C000%20OBBBA%20bonus%20deduction%20for%20age%2065%2B.&type=article", width: 1200, height: 630, alt: "Senior Tax Deduction Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Tax Deduction Calculator 2026 — $6,000 OBBBA Bonus",
    description: "Age 65+? Estimate your new $6,000 bonus deduction and total tax-free income for 2026.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

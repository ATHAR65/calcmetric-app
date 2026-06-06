const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "California 1099 Tax Calculator 2026 — Free CA Freelance Tax Estimator",
  description: "Calculate your California 1099 freelance taxes for 2026 — federal self-employment tax (15.3%), income tax brackets, and CA state income tax rates up to 13.3%. Includes SDI and quarterly payment estimates.",
  keywords: ["California 1099 tax calculator", "California self employment tax", "CA freelance tax", "1099 tax estimator California"],
  alternates: {
    canonical: siteUrl + "/calculators/california-1099-tax-calculator",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "California 1099 Tax Calculator 2026 — SE & State Tax | TheMetricApp",
    description:
      "Calculate self-employment tax, federal income tax, and California state income tax on your 1099 freelance income. Free 2026 tax calculator for CA freelancers.",
    url: siteUrl + "/calculators/california-1099-tax-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=California%201099%20Tax%20Calculator%202026%20%E2%80%94%20SE%20%26%20State%20Tax%20%7C%20TheMetricApp&description=Calculate%20self-employment%20tax%2C%20federal%20income%20tax%2C%20and%20California%20state%20income%20tax%20on%20your%201099%20freelance%20income.%20Free%202026%20tax%20calculator%20for%20CA%20freelancers.&type=website", width: 1200, height: 630, alt: "California 1099 Tax Calculator 2026 — SE & State Tax | TheMetricApp" }],
  },
  twitter: {
    title: "California 1099 Tax Calculator 2026 — Free CA Freelance Tax Estimator | TheMetricApp",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_US",
  },
};

export default function Layout({ children }) {
  return children;
}

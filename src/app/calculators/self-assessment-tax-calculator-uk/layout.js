const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Self Assessment Tax Calculator UK 2025–26 | TheMetricApp" },
  description:
    "Estimate your UK Self Assessment tax bill for 2025–26. Covers income tax, Class 2 & 4 NI, and payments on account. Free HMRC-ready calculator.",
  keywords: [
    "self assessment tax calculator uk",
    "self assessment calculator 2025-26",
    "tax return calculator uk",
    "sole trader tax calculator",
    "how much tax will i pay self employed uk",
    "self assessment tax return estimator",
  ],
  alternates: {
    languages: {
      "en-gb": siteUrl + "/calculators/self-assessment-tax-calculator-uk",
      "en-us": siteUrl + "/calculators/self-assessment-tax-calculator-uk",
    },
    canonical: siteUrl + "/calculators/self-assessment-tax-calculator-uk",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Self Assessment Tax Calculator UK 2025–26 — Tax Return",
    description:
    "Free Self Assessment tax calculator UK for 2025–26. Estimate your tax bill, Class 2 & 4 NI, and payments on account — Free, no signup required.",
    url: siteUrl + "/calculators/self-assessment-tax-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Self%20Assessment%20Tax%20Calculator%20UK%202025%E2%80%9326%20%E2%80%94%20Tax%20Return%20Estimator%20%7C%20TheMetricApp&description=Free%20Self%20Assessment%20tax%20calculator%20UK%20for%202025%E2%80%9326.%20Estimate%20your%20tax%20bill%2C%20Class%202%20%26%204%20NI%2C%20and%20payments%20on%20account.&type=website", width: 1200, height: 630, alt: "Self Assessment Tax Calculator UK 2025–26 — Tax Return Estimator" }],
  },
  twitter: {
    title: "Self Assessment Tax Calculator UK 2025–26 — Tax Return",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_GB",
    "og:country-name": "United Kingdom",
  },
};

export default function Layout({ children }) {
  return children;
}

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Self Assessment Tax Calculator UK 2025–26 — Tax Return Estimator | TheMetricApp",
  description:
    "Free Self Assessment tax calculator UK for 2025–26. Estimate your tax bill, Class 2 & 4 NI, and payments on account. Accurate HMRC rates for sole traders and freelancers.",
  keywords: [
    "self assessment tax calculator uk",
    "self assessment calculator 2025-26",
    "tax return calculator uk",
    "sole trader tax calculator",
    "how much tax will i pay self employed uk",
    "self assessment tax return estimator",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/self-assessment-tax-calculator-uk",
  },
  openGraph: {
    title: "Self Assessment Tax Calculator UK 2025–26 — Tax Return Estimator | TheMetricApp",
    description:
      "Free Self Assessment tax calculator UK for 2025–26. Estimate your tax bill, Class 2 & 4 NI, and payments on account.",
    url: siteUrl + "/calculators/self-assessment-tax-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Self Assessment Tax Calculator UK 2025–26 | TheMetricApp" }],
  },
  twitter: {
    title: "Self Assessment Tax Calculator UK 2025–26 — Tax Return Estimator | TheMetricApp",
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

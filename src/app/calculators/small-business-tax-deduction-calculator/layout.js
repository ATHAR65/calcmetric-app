const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Small Business Tax Deduction Calculator 2026 — Free Tax Estimator",
  description: "Calculate your small business tax deductions, self-employment tax, QBI deduction, and estimated quarterly payments for 2026. Free tool for self-employed individuals.",
  keywords: [
    "small business tax calculator",
    "self employment tax calculator",
    "QBI deduction calculator",
    "business expense tracker",
    "quarterly estimated tax calculator",
    "small business deductions 2026",
    "self employed tax estimator",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/small-business-tax-deduction-calculator",
  },
  openGraph: {
    title: "Small Business Tax Deduction Calculator 2026 — Free SE Tax Estimator | TheMetricApp",
    description:
      "Calculate your small business tax deductions, self-employment tax, QBI deduction, and estimated quarterly payments for 2026. Free tool.",
    url: siteUrl + "/calculators/small-business-tax-deduction-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Small%20Business%20Tax%20Deduction%20Calculator%202026%20%E2%80%94%20Free%20SE%20Tax%20Estimator%20%7C%20TheMetricApp&description=Calculate%20your%20small%20business%20tax%20deductions%2C%20SE%20tax%2C%20QBI%20deduction%2C%20and%20quarterly%20payments%20for%202026.&type=website", width: 1200, height: 630, alt: "Small Business Tax Deduction Calculator 2026 — Free SE Tax Estimator | TheMetricApp" }],
  },
  twitter: {
    title: "Small Business Tax Deduction Calculator 2026 — Free Tax Estimator | TheMetricApp",
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

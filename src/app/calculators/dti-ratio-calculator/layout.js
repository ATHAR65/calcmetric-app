const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Debt-to-Income Ratio Calculator 2026 — Front-End & Back-End DTI | TheMetricApp",
  description:
    "Calculate your debt-to-income (DTI) ratio for mortgage and loan applications. Free 2026 DTI calculator with front-end, back-end ratios, color-coded gauges, and lender guidelines.",
  keywords: [
    "dti calculator",
    "debt to income ratio calculator",
    "debt to income calculator",
    "dti ratio calculator",
    "mortgage dti calculator",
    "front end dti",
    "back end dti",
    "debt ratio calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/dti-ratio-calculator" },
  openGraph: {
    title: "Debt-to-Income Ratio Calculator 2026 — Front-End & Back-End DTI | TheMetricApp",
    description: "Calculate your debt-to-income ratio for mortgage and loan applications. Free 2026 DTI calculator with front-end and back-end analysis.",
    url: siteUrl + "/calculators/dti-ratio-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "DTI Ratio Calculator 2026 — Free Debt-to-Income Tool" }],
  },
  twitter: { title: "Debt-to-Income Ratio Calculator 2026 — Front-End & Back-End DTI | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Debt-to-Income Ratio Calculator 2026 — DTI | TheMetricApp" },
  description:
    "Calculate your debt-to-income ratio for mortgage and loan applications. Free DTI calculator with front-end, back-end ratios, and lender guidelines.",
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
  dateModified: "2026-06-06",
  openGraph: {
    title: "Debt-to-Income Ratio Calculator 2026 — Front-End &",
    description:
    "Calculate your debt-to-income ratio for mortgage and loan applications. Free 2026 DTI calculator with front-end and back-end analysis.",
    url: siteUrl + "/calculators/dti-ratio-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Debt-to-Income%20Ratio%20Calculator%202026%20%E2%80%94%20Front-End%20%26%20Back-End%20DTI%20%7C%20TheMetricApp&description=Calculate%20your%20debt-to-income%20ratio%20for%20mortgage%20and%20loan%20applications.%20Free%202026%20DTI%20calculator%20with%20front-end%20and%20back-end%20analysis.&type=website", width: 1200, height: 630, alt: "Debt-to-Income Ratio Calculator 2026 — Front-End & Back-End DTI" }],
  },
  twitter: {
    title: "Debt-to-Income Ratio Calculator 2026 — Front-End &" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

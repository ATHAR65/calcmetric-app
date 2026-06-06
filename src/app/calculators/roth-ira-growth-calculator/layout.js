const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Roth IRA Growth Calculator 2026 — Project Tax-Free Savings",
  description: "Project your Roth IRA growth with compound interest and tax-free withdrawals. Free 2026 Roth IRA growth calculator.",
  keywords: [
    "roth ira calculator",
    "roth ira growth calculator",
    "roth ira projection calculator",
    "retirement calculator 2026",
    "tax free retirement calculator",
    "roth ira compound interest calculator",
    "roth vs traditional ira",
    "roth ira savings calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/roth-ira-growth-calculator" },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Roth IRA Growth Calculator 2026 — Project Tax-Free Retirement Savings | TheMetricApp",
    description: "Project your Roth IRA growth with compound interest and tax-free withdrawals. Free 2026 Roth IRA growth calculator.",
    url: siteUrl + "/calculators/roth-ira-growth-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Roth%20IRA%20Growth%20Calculator%202026%20%E2%80%94%20Project%20Tax-Free%20Retirement%20Savings%20%7C%20TheMetricApp&description=Project%20your%20Roth%20IRA%20growth%20with%20compound%20interest%20and%20tax-free%20withdrawals.%20Free%202026%20Roth%20IRA%20growth%20calculator.&type=website", width: 1200, height: 630, alt: "Roth IRA Growth Calculator 2026 — Project Tax-Free Retirement Savings | TheMetricApp" }],
  },
  twitter: {
    title: "Roth IRA Growth Calculator 2026 — Project Tax-Free Savings | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

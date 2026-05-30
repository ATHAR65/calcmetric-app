const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Roth IRA Growth Calculator 2026 — Project Tax-Free Retirement Savings | TheMetricApp",
  description:
    "Project your Roth IRA growth with compound interest and tax-free withdrawals. Free 2026 Roth IRA growth calculator with year-by-year timeline and Roth vs Traditional comparison.",
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
  openGraph: {
    title: "Roth IRA Growth Calculator 2026 — Project Tax-Free Retirement Savings | TheMetricApp",
    description: "Project your Roth IRA growth with compound interest and tax-free withdrawals. Free 2026 Roth IRA growth calculator.",
    url: siteUrl + "/calculators/roth-ira-growth-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Roth IRA Growth Calculator 2026 — Free Retirement Tool" }],
  },
  twitter: { title: "Roth IRA Growth Calculator 2026 — Project Tax-Free Retirement Savings | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

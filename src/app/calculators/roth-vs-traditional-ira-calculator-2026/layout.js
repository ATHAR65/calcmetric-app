const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Roth vs Traditional IRA Calculator 2026 — Compare IRA Types & Tax Savings | TheMetricApp",
  description:
    "Compare Roth IRA vs Traditional IRA side-by-side. Calculate after-tax values at retirement, tax savings now, and see which account type saves you more money. Free 2026 IRA comparison calculator.",
  keywords: [
    "Roth vs Traditional IRA calculator 2026",
    "Roth IRA vs Traditional IRA comparison",
    "IRA tax savings calculator",
    "which IRA is better",
    "backdoor Roth IRA",
    "IRA contribution limits 2026",
  ],
  alternates: { canonical: siteUrl + "/calculators/roth-vs-traditional-ira-calculator-2026" },
  openGraph: {
    title: "Roth vs Traditional IRA Calculator 2026 — Compare IRA Types & Tax Savings | TheMetricApp",
    description: "Free Roth vs Traditional IRA calculator. Compare after-tax values at retirement, see your tax savings, and find the best IRA for your situation.",
    url: siteUrl + "/calculators/roth-vs-traditional-ira-calculator-2026",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Roth vs Traditional IRA Calculator 2026 — Compare After-Tax Retirement Savings" }],
  },
  twitter: { title: "Roth vs Traditional IRA Calculator 2026 — Compare IRA Types & Tax Savings | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Dividend Tax Calculator 2026 — Qualified & Ordinary Dividend Tax | TheMetricApp",
  description:
    "Calculate dividend taxes for qualified and ordinary dividends in 2026. Free dividend tax calculator with federal brackets, NIIT, and state tax estimates.",
  keywords: ["dividend tax calculator", "qualified dividends tax rate", "ordinary dividend tax", "NIIT dividend tax", "investment tax calculator"],
  alternates: { canonical: siteUrl + "/calculators/dividend-tax-calculator-2026" },
  openGraph: {
    title: "Dividend Tax Calculator 2026 — Qualified & Ordinary Dividend Tax | TheMetricApp",
    description: "Calculate dividend taxes for qualified and ordinary dividends in 2026. Free dividend tax calculator with federal brackets and NIIT.",
    url: siteUrl + "/calculators/dividend-tax-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Dividend Tax Calculator 2026 — Qualified & Ordinary Dividend Tax Calculator" }],
  },
  twitter: { title: "Dividend Tax Calculator 2026 — Qualified & Ordinary Dividend Tax | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Dividend Tax Calculator 2026 — UK Dividend Income Tax Estimator",
  description: "Calculate UK dividend tax instantly. Covers basic, higher & additional rate taxpayers. Free, no signup needed.",
  keywords: ["dividend tax calculator", "qualified dividends tax rate", "ordinary dividend tax", "NIIT dividend tax", "investment tax calculator"],
  alternates: { canonical: siteUrl + "/calculators/dividend-tax-calculator-2026" },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Dividend Tax Calculator 2026 — Qualified & Ordinary Dividend Tax | TheMetricApp",
    description: "Calculate dividend taxes for qualified and ordinary dividends in 2026. Free dividend tax calculator with federal brackets and NIIT.",
    url: siteUrl + "/calculators/dividend-tax-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Dividend%20Tax%20Calculator%202026%20%E2%80%94%20Qualified%20%26%20Ordinary%20Dividend%20Tax%20%7C%20TheMetricApp&description=Calculate%20dividend%20taxes%20for%20qualified%20and%20ordinary%20dividends%20in%202026.%20Free%20dividend%20tax%20calculator%20with%20federal%20brackets%20and%20NIIT.&type=website", width: 1200, height: 630, alt: "Dividend Tax Calculator 2026 — Qualified & Ordinary Dividend Tax | TheMetricApp" }],
  },
  twitter: {
    title: "Dividend Tax Calculator 2026 — UK Dividend Income Tax Estimator | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

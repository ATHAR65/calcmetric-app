const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Dividend Tax Calculator 2026 — US & UK Rates | Free" },
  description:
    "Calculate 2026 dividend tax in seconds — US qualified & ordinary dividends, plus new UK 2026/27 rates (10.75% / 35.75%). Free, no sign-up.",
  keywords: ["dividend tax calculator", "qualified dividends tax rate", "ordinary dividend tax", "uk dividend tax 2026-27", "NIIT dividend tax", "investment tax calculator"],
  alternates: { canonical: siteUrl + "/calculators/dividend-tax-calculator-2026" },
  dateModified: "2026-07-03",
  openGraph: {
    title: "Dividend Tax Calculator 2026 — Qualified & Ordinary",
    description:
    "Calculate dividend taxes for qualified and ordinary dividends in 2026. Free dividend tax calculator with federal brackets and NIIT.",
    url: siteUrl + "/calculators/dividend-tax-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Dividend%20Tax%20Calculator%202026%20%E2%80%94%20Qualified%20%26%20Ordinary%20Dividend%20Tax%20%7C%20TheMetricApp&description=Calculate%20dividend%20taxes%20for%20qualified%20and%20ordinary%20dividends%20in%202026.%20Free%20dividend%20tax%20calculator%20with%20federal%20brackets%20and%20NIIT.&type=website", width: 1200, height: 630, alt: "Dividend Tax Calculator 2026 — Qualified & Ordinary Dividend Tax" }],
  },
  twitter: {
    title: "Dividend Tax Calculator 2026 — UK Dividend Income Tax" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

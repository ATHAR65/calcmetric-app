const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Crypto Tax Calculator 2026 | TheMetricApp" },
  description:
    "Calculate your crypto capital gains tax for 2026. Covers short & long-term rates, income tax, and NFTs. Free tool — Free, no signup required.",
  keywords: ["crypto tax calculator", "cryptocurrency tax calculator", "Bitcoin tax calculator", "crypto capital gains tax", "crypto tax reporting"],
  alternates: { canonical: siteUrl + "/calculators/crypto-tax-calculator-2026" },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Crypto Tax Calculator 2026 — Cryptocurrency Capital",
    description:
    "Calculate cryptocurrency taxes for 2026 including short and long-term capital gains on Bitcoin, Ethereum, and crypto trades.",
    url: siteUrl + "/calculators/crypto-tax-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Crypto%20Tax%20Calculator%202026%20%E2%80%94%20Cryptocurrency%20Capital%20Gains%20Tax%20%7C%20TheMetricApp&description=Calculate%20cryptocurrency%20taxes%20for%202026%20including%20short%20and%20long-term%20capital%20gains%20on%20Bitcoin%2C%20Ethereum%2C%20and%20crypto%20trades.&type=website", width: 1200, height: 630, alt: "Crypto Tax Calculator 2026 — Cryptocurrency Capital Gains Tax" }],
  },
  twitter: {
    title: "Crypto Tax Calculator 2026 — Capital Gains & Income" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

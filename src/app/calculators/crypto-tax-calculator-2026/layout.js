const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Crypto Tax Calculator 2026 — Cryptocurrency Capital Gains Tax | TheMetricApp",
  description:
    "Calculate cryptocurrency taxes for 2026 including short-term and long-term capital gains on Bitcoin, Ethereum, and other crypto trades. Free crypto tax calculator.",
  keywords: ["crypto tax calculator", "cryptocurrency tax calculator", "Bitcoin tax calculator", "crypto capital gains tax", "crypto tax reporting"],
  alternates: { canonical: siteUrl + "/calculators/crypto-tax-calculator-2026" },
  openGraph: {
    title: "Crypto Tax Calculator 2026 — Cryptocurrency Capital Gains Tax | TheMetricApp",
    description: "Calculate cryptocurrency taxes for 2026 including short and long-term capital gains on Bitcoin, Ethereum, and crypto trades.",
    url: siteUrl + "/calculators/crypto-tax-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Crypto Tax Calculator 2026 — Cryptocurrency Capital Gains Tax" }],
  },
  twitter: { title: "Crypto Tax Calculator 2026 — Cryptocurrency Capital Gains Tax | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

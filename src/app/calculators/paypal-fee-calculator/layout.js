const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "PayPal Fee Calculator 2026 — Instant Net Payout & Surcharge Tool | TheMetricApp",
  description:
    "Calculate exact PayPal fees for any transaction. Covers standard 3.49% + $0.49, friends and family, international, invoicing and micropayment rates. Free 2026 PayPal fee estimator.",
  keywords:
    "paypal fee calculator 2026, paypal transaction fee calculator, paypal merchant fees, paypal vs stripe fees, paypal invoice fee calculator",
  alternates: {
    canonical: siteUrl + "/calculators/paypal-fee-calculator",
  },
  openGraph: {
    title: "PayPal Fee Calculator 2026 — Instant Net Payout & Surcharge Tool | TheMetricApp",
    description:
      "Calculate exact PayPal fees for any transaction. Covers standard 3.49% + $0.49, friends and family, international, invoicing and micropayment rates. Free 2026 PayPal fee estimator.",
    url: siteUrl + "/calculators/paypal-fee-calculator",
    type: "website",
    siteName: "TheMetricApp",
    images: [{ url: siteUrl + "/og-default.svg", width: 1200, height: 630, alt: "PayPal Fee Calculator 2026 — Calculate Fees, Net Payout & Compare vs Stripe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PayPal Fee Calculator 2026 — Instant Net Payout & Surcharge Tool | TheMetricApp",
    description:
      "Calculate exact PayPal fees for any transaction. Covers standard 3.49% + $0.49, friends and family, international, invoicing and micropayment rates.",
    images: [siteUrl + "/og-default.svg"],
    creator: "@themetricapp",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_US",
  },
};

export default function Layout({ children }) {
  return children;
}

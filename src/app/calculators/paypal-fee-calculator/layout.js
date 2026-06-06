const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "PayPal Fee Calculator 2026 — Calculate Net After PayPal Fees",
  description: "Calculate exact PayPal fees for any transaction type. Personal, business & international fees. Free, instant results.",
  keywords:
    "paypal fee calculator 2026, paypal transaction fee calculator, paypal merchant fees, paypal vs stripe fees, paypal invoice fee calculator",
  alternates: {
    canonical: siteUrl + "/calculators/paypal-fee-calculator",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "PayPal Fee Calculator 2026 — Instant Net Payout & Surcharge Tool | TheMetricApp",
    description:
      "Calculate exact PayPal fees for any transaction. Covers standard 3.49% + $0.49, friends and family, international, invoicing and micropayment rates. Free 2026 PayPal fee estimator.",
    url: siteUrl + "/calculators/paypal-fee-calculator",
    type: "website",
    siteName: "TheMetricApp",
    images: [{ url: "/api/og?title=PayPal%20Fee%20Calculator%202026%20%E2%80%94%20Instant%20Net%20Payout%20%26%20Surcharge%20Tool%20%7C%20TheMetricApp&description=Calculate%20exact%20PayPal%20fees%20for%20any%20transaction.%20Covers%20standard%203.49%25%20%2B%20%240.49%2C%20friends%20and%20family%2C%20international%2C%20invoicing%20and%20micropayment%20rates.%20Free%202026%20PayPal%20fee%20estimator.&type=website", width: 1200, height: 630, alt: "PayPal Fee Calculator 2026 — Instant Net Payout & Surcharge Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PayPal Fee Calculator 2026 — Instant Net Payout & Surcharge Tool | TheMetricApp",
    description:
      "Calculate exact PayPal fees for any transaction. Covers standard 3.49% + $0.49, friends and family, international, invoicing and micropayment rates.",
    images: ["/api/og?title=PayPal%20Fee%20Calculator%202026%20%E2%80%94%20Instant%20Net%20Payout%20%26%20Surcharge%20Tool%20%7C%20TheMetricApp&description=Calculate%20exact%20PayPal%20fees%20for%20any%20transaction.%20Covers%20standard%203.49%25%20%2B%20%240.49%2C%20friends%20and%20family%2C%20international%2C%20invoicing%20and%20micropayment%20rates.%20Free%202026%20PayPal%20fee%20estimator.&type=website"],
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

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Stripe Fee Calculator 2026 — Net Payout After Fees | TheMetricApp",
  description:
    "Calculate exact Stripe fees per transaction and your true net payout instantly. Free 2026 Stripe fee calculator for US & UK merchants. No signup required.",
  keywords: ["Stripe fee calculator", "Stripe processing fees", "Stripe merchant fees", "payment processing calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/stripe-fee-merchant-calculator",
  },
  openGraph: {
    title: "Stripe Fee Calculator 2026 — Net Payout After Fees | TheMetricApp",
    description:
      "Calculate exact Stripe fees per transaction and your true net payout instantly. Free 2026 Stripe fee calculator for US & UK merchants.",
    url: siteUrl + "/calculators/stripe-fee-merchant-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Stripe Fee Calculator 2026 — Calculate Processing Fees & Net Payout Instantly" }],
  },
  twitter: {
    title: "Stripe Fee Calculator 2026 — Net Payout After Fees | TheMetricApp",
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

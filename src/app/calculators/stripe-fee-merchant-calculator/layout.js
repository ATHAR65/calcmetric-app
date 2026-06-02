const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Stripe Fee Calculator 2026 — Calculate Net Payout After Fees | TheMetricApp",
  description: "Calculate exact Stripe fees per transaction instantly. See your net payout after 2.9% + 30¢. Free, no signup.",
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
    images: [{ url: "/api/og?title=Stripe%20Fee%20Calculator%202026%20%E2%80%94%20Net%20Payout%20After%20Fees%20%7C%20TheMetricApp&description=Calculate%20exact%20Stripe%20fees%20per%20transaction%20and%20your%20true%20net%20payout%20instantly.%20Free%202026%20Stripe%20fee%20calculator%20for%20US%20%26%20UK%20merchants.&type=website", width: 1200, height: 630, alt: "Stripe Fee Calculator 2026 — Net Payout After Fees | TheMetricApp" }],
  },
  twitter: {
    title: "Stripe Fee Calculator 2026 — Calculate Net Payout After Fees | TheMetricApp",
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

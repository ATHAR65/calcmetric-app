import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "PayPal Fee Calculator 2026 — Calculate Fees, Net Payout & Compare vs Stripe",
  description: "Calculate exact PayPal fees for any transaction. Covers standard 3.49% + $0.49, friends and family, international, invoicing and micropayment rates.",
  alternates: {
    canonical: "/calculators/paypal-fee-calculator",
  },
  openGraph: {
    title: "PayPal Fee Calculator 2026 — Calculate Fees, Net Payout & Compare vs Stripe | TheMetricApp",
    description: "Calculate exact PayPal fees for any transaction. Covers standard 3.49% + $0.49, friends and family, international, invoicing and micropayment rates.",
    url: "https://www.themetricapp.com/calculators/paypal-fee-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PayPal Fee Calculator 2026 — Calculate Fees, Net Payout & Compare vs Stripe | TheMetricApp",
    description: "Calculate exact PayPal fees for any transaction. Covers standard 3.49% + $0.49, friends and family, international, invoicing and micropayment rates.",
  },
};

export default function Page() {
  return <Calculator />;
}

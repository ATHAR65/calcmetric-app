import Calculator from "./Calculator";


export const metadata = {
  title: "Stripe Fee Calculator 2026 — Calculate Processing Fees & Net Payout Instantly",
  description: "Calculate Stripe processing fees for domestic and international transactions. See your net payout instantly.",
  alternates: {
    canonical: "/calculators/stripe-fee-merchant-calculator",
  },
  openGraph: {
    title: "Stripe Fee Calculator 2026 — Calculate Processing Fees & Net Payout Instantly | TheMetricApp",
    description: "Calculate Stripe processing fees for domestic and international transactions. See your net payout instantly.",
    url: "https://www.themetricapp.com/calculators/stripe-fee-merchant-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stripe Fee Calculator 2026 — Calculate Processing Fees & Net Payout Instantly | TheMetricApp",
    description: "Calculate Stripe processing fees for domestic and international transactions. See your net payout instantly.",
  },
};

export default function Page() {
  return <Calculator />;
}

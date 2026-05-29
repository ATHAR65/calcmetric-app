import Calculator from "./Calculator";

export const metadata = {
  title: "Gig Economy Net Income Calculator 2026 — Take-Home Pay After Expenses & Taxes",
  description: "Free gig economy net income calculator for 2026. Calculate your actual take-home pay after mileage deductions, business expenses, and self-employment taxes for Uber, DoorDash, Instacart, Lyft, and more.",
  alternates: {
    canonical: "https://www.themetricapp.com/calculators/gig-economy-net-income-calculator",
  },
  openGraph: {
    title: "Gig Economy Net Income Calculator 2026 — Free Tool | TheMetricApp",
    description: "See your true hourly rate after mileage deductions, expenses, and SE tax. Free 2026 gig worker income calculator.",
    url: "https://www.themetricapp.com/calculators/gig-economy-net-income-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Gig Economy Net Income Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gig Economy Net Income Calculator 2026 — Free Tool | TheMetricApp",
    description: "Calculate your gig worker take-home pay for 2026. Uber, DoorDash, Instacart & more.",
  },
};

export default function Page() {
  return <Calculator />;
}

import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "Airbnb Net Income Calculator 2026 — Calculate Host Profit After Fees & Expenses",
  description: "Estimate your Airbnb net operating income after host fees, cleaning costs, and mortgage expenses.",
  alternates: {
    canonical: "/calculators/airbnb-host-net-income",
  },
  openGraph: {
    title: "Airbnb Net Income Calculator 2026 — Calculate Host Profit After Fees & Expenses | TheMetricApp",
    description: "Estimate your Airbnb net operating income after host fees, cleaning costs, and mortgage expenses.",
    url: "https://www.themetricapp.com/calculators/airbnb-host-net-income",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbnb Net Income Calculator 2026 — Calculate Host Profit After Fees & Expenses | TheMetricApp",
    description: "Estimate your Airbnb net operating income after host fees, cleaning costs, and mortgage expenses.",
  },
};

export default function Page() {
  return <Calculator />;
}

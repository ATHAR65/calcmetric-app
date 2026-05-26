import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "EV vs Gas Savings Calculator 2026 — Compare Electric Vehicle & Gas Fuel Costs",
  description: "Calculate how much you save monthly and annually by switching from gasoline to electric vehicle charging.",
  alternates: {
    canonical: "/calculators/ev-charging-vs-gas-savings",
  },
  openGraph: {
    title: "EV vs Gas Savings Calculator 2026 — Compare Electric Vehicle & Gas Fuel Costs | TheMetricApp",
    description: "Calculate how much you save monthly and annually by switching from gasoline to electric vehicle charging.",
    url: "https://www.themetricapp.com/calculators/ev-charging-vs-gas-savings",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EV vs Gas Savings Calculator 2026 — Compare Electric Vehicle & Gas Fuel Costs | TheMetricApp",
    description: "Calculate how much you save monthly and annually by switching from gasoline to electric vehicle charging.",
  },
};

export default function Page() {
  return <Calculator />;
}

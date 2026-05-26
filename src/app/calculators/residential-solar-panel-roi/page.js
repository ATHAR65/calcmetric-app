import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "Solar Panel ROI Calculator 2026 — Calculate Payback Period & Savings with 30% Tax Credit",
  description: "Calculate your solar panel payback period, savings, and return on investment with the 30% federal tax credit.",
  alternates: {
    canonical: "/calculators/residential-solar-panel-roi",
  },
  openGraph: {
    title: "Solar Panel ROI Calculator 2026 — Calculate Payback Period & Savings with 30% Tax Credit | TheMetricApp",
    description: "Calculate your solar panel payback period, savings, and return on investment with the 30% federal tax credit.",
    url: "https://www.themetricapp.com/calculators/residential-solar-panel-roi",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Panel ROI Calculator 2026 — Calculate Payback Period & Savings with 30% Tax Credit | TheMetricApp",
    description: "Calculate your solar panel payback period, savings, and return on investment with the 30% federal tax credit.",
  },
};

export default function Page() {
  return <Calculator />;
}

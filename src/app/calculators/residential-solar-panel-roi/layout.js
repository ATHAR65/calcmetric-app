const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Solar Panel ROI Calculator 2026 — Payback & Savings | TheMetricApp",
  description:
    "Calculate your solar panel payback period, 25-year savings, and ROI with the 30% federal tax credit. Free 2026 solar ROI calculator for US homeowners.",
  keywords: ["solar panel ROI calculator", "solar panel savings", "solar payback period", "residential solar calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/residential-solar-panel-roi",
  },
  openGraph: {
    title: "Solar Panel ROI Calculator 2026 — Payback & Savings | TheMetricApp",
    description:
      "Calculate your solar panel payback period, 25-year savings, and ROI with the 30% federal tax credit. Free 2026 solar ROI calculator for US homeowners.",
    url: siteUrl + "/calculators/residential-solar-panel-roi",
    siteName: "TheMetricApp",
    type: "website",
  },
  twitter: {
    title: "Solar Panel ROI Calculator 2026 — Payback & Savings | TheMetricApp",
  },
};

export default function Layout({ children }) {
  return children;
}

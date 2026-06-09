const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Solar Panel ROI Calculator 2026 — Payback | TheMetricApp" },
  description:
    "Calculate your solar panel payback period, 25-year savings, and ROI with the 30% federal tax credit. Free 2026 solar ROI calculator for homeowners.",
  keywords: ["solar panel ROI calculator", "solar panel savings", "solar payback period", "residential solar calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/residential-solar-panel-roi",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Solar Panel ROI Calculator 2026 — Payback & Savings",
    description:
    "Calculate your solar panel payback period, 25-year savings, and ROI with the 30% federal tax credit. Free 2026 solar ROI calculator for US homeowners.",
    url: siteUrl + "/calculators/residential-solar-panel-roi",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Solar%20Panel%20ROI%20Calculator%202026%20%E2%80%94%20Payback%20%26%20Savings%20%7C%20TheMetricApp&description=Calculate%20your%20solar%20panel%20payback%20period%2C%2025-year%20savings%2C%20and%20ROI%20with%20the%2030%25%20federal%20tax%20credit.%20Free%202026%20solar%20ROI%20calculator%20for%20US%20homeowners.&type=website", width: 1200, height: 630, alt: "Solar Panel ROI Calculator 2026 — Payback & Savings" }],
  },
  twitter: {
    title: "Solar Panel ROI Calculator 2026 — Payback & 25-Year ...",
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

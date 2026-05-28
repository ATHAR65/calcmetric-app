const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Rental Property ROI Calculator 2026 — Cap Rate & Cash-on-Cash Return | TheMetricApp",
  description:
    "Calculate rental property cap rate, cash-on-cash return, NOI, DSCR, and the 1% rule. Free 2026 rental property ROI calculator for US real estate investors.",
  keywords: ["rental property ROI calculator", "cap rate calculator", "cash on cash return", "real estate investment calculator", "NOI calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/rental-property-roi-calculator",
  },
  openGraph: {
    title: "Rental Property ROI Calculator 2026 — Cap Rate & Cash-on-Cash Return | TheMetricApp",
    description:
      "Calculate rental property cap rate, cash-on-cash return, NOI, DSCR, and the 1% rule. Free 2026 rental property ROI calculator for US real estate investors.",
    url: siteUrl + "/calculators/rental-property-roi-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Rental Property ROI Calculator 2026 — Calculate Cap Rate, Cash-on-Cash Return & NOI" }],
  },
  twitter: {
    title: "Rental Property ROI Calculator 2026 — Cap Rate & Cash-on-Cash Return | TheMetricApp",
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

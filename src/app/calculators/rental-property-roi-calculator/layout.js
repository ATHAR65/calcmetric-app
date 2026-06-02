const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Rental Property ROI Calculator 2026 — Cap Rate & Cash-on-Cash",
  description: "Calculate rental property cap rate, cash-on-cash return, NOI, and the 1% rule. Free 2026 rental property ROI calculator for real estate investors.",
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
    images: [{ url: "/api/og?title=Rental%20Property%20ROI%20Calculator%202026%20%E2%80%94%20Cap%20Rate%20%26%20Cash-on-Cash%20Return%20%7C%20TheMetricApp&description=Calculate%20rental%20property%20cap%20rate%2C%20cash-on-cash%20return%2C%20NOI%2C%20DSCR%2C%20and%20the%201%25%20rule.%20Free%202026%20rental%20property%20ROI%20calculator%20for%20US%20real%20estate%20investors.&type=website", width: 1200, height: 630, alt: "Rental Property ROI Calculator 2026 — Cap Rate & Cash-on-Cash Return | TheMetricApp" }],
  },
  twitter: {
    title: "Rental Property ROI Calculator 2026 — Cap Rate & Cash-on-Cash | TheMetricApp",
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

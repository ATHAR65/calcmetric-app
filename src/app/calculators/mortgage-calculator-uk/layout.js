const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Mortgage Calculator UK 2025–26 — Monthly Repayments, Stamp Duty & Affordability | TheMetricApp",
  description:
    "Free mortgage calculator UK for 2025–26. Estimate monthly repayments, total interest, stamp duty costs, and borrowing affordability. Accurate rates, instant results.",
  keywords: [
    "mortgage calculator uk",
    "uk mortgage calculator 2026",
    "monthly mortgage payment calculator uk",
    "stamp duty calculator uk",
    "how much can i borrow mortgage uk",
    "mortgage affordability calculator uk",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/mortgage-calculator-uk",
  },
  openGraph: {
    title: "Mortgage Calculator UK 2025–26 — Monthly Repayments, Stamp Duty & Affordability | TheMetricApp",
    description:
      "Free mortgage calculator UK for 2025–26. Estimate monthly repayments, total interest, stamp duty costs, and borrowing affordability.",
    url: siteUrl + "/calculators/mortgage-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Mortgage Calculator UK 2025–26 | TheMetricApp" }],
  },
  twitter: {
    title: "Mortgage Calculator UK 2025–26 — Monthly Repayments, Stamp Duty & Affordability | TheMetricApp",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_GB",
    "og:country-name": "United Kingdom",
  },
};

export default function Layout({ children }) {
  return children;
}

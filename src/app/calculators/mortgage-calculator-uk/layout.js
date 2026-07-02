const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Mortgage Calculator UK 2026 — Repayments & Stamp Duty" },
  description:
    "See your monthly UK mortgage repayment, total interest, and 2026 stamp duty in seconds — with first-time buyer relief and LTV. Free, no sign-up.",
  keywords: [
    "mortgage calculator uk",
    "uk mortgage calculator 2026",
    "monthly mortgage payment calculator uk",
    "stamp duty calculator uk",
    "how much can i borrow mortgage uk",
    "mortgage affordability calculator uk",
  ],
  alternates: {
    languages: {
      "en-gb": siteUrl + "/calculators/mortgage-calculator-uk",
      "en-us": siteUrl + "/calculators/mortgage-calculator-uk",
    },
    canonical: siteUrl + "/calculators/mortgage-calculator-uk",
  },
  dateModified: "2026-07-03",
  openGraph: {
    title: "Mortgage Calculator UK 2026 — Monthly Repayments, Stamp Duty & Affordability",
    description:
    "Free mortgage calculator UK for 2026. Estimate monthly repayments, total interest, stamp duty costs, and borrowing affordability.",
    url: siteUrl + "/calculators/mortgage-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Mortgage%20Calculator%20UK%202026%20%E2%80%94%20Monthly%20Repayments%2C%20Stamp%20Duty%20%26%20Affordability%20%7C%20TheMetricApp&description=Free%20mortgage%20calculator%20UK%20for%202026.%20Estimate%20monthly%20repayments%2C%20total%20interest%2C%20stamp%20duty%20costs%2C%20and%20borrowing%20affordability.&type=website", width: 1200, height: 630, alt: "Mortgage Calculator UK 2026 — Monthly Repayments, Stamp Duty & Affordability" }],
  },
  twitter: {
    title: "Mortgage Calculator UK 2026 — Monthly Repayments &",
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

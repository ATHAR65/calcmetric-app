const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "VAT Calculator UK 2026 — Add or Remove VAT Instantly",
  description: "Add or remove UK VAT at 20%, 5% or 0% instantly. Free VAT calculator for businesses and freelancers. No signup.",
  keywords: ["vat calculator uk", "add vat to price", "remove vat calculator", "20% vat calculator", "vat rate uk 2025", "how to calculate vat uk"],
  alternates: {
    languages: {
      "en-gb": siteUrl + "/calculators/vat-calculator-uk",
      "en-us": siteUrl + "/calculators/vat-calculator-uk",
    },
    canonical: siteUrl + "/calculators/vat-calculator-uk",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly | TheMetricApp",
    description:
      "Free VAT calculator UK — add or remove 20% VAT instantly. Get net, gross and VAT figures for any amount, accurate for 2025-26 HMRC rules.",
    url: siteUrl + "/calculators/vat-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=VAT%20Calculator%20UK%20(2025%E2%80%9326)%20%E2%80%94%20Add%20or%20Remove%2020%25%20VAT%20Instantly%20%7C%20TheMetricApp&description=Free%20VAT%20calculator%20UK%20%E2%80%94%20add%20or%20remove%2020%25%20VAT%20instantly.%20Get%20net%2C%20gross%20and%20VAT%20figures%20for%20any%20amount%2C%20accurate%20for%202025-26%20HMRC%20rules.&type=website", width: 1200, height: 630, alt: "VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly | TheMetricApp" }],
  },
  twitter: {
    title: "VAT Calculator UK 2026 — Add or Remove VAT Instantly | TheMetricApp",
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

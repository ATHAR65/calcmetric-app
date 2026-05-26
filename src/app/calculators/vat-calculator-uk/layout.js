const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly | TheMetricApp",
  description:
    "Free VAT calculator UK — add or remove 20% VAT instantly. Get net, gross and VAT figures for any amount, accurate for 2025-26 HMRC rules. No sign-up required.",
  keywords: ["vat calculator uk", "add vat to price", "remove vat calculator", "20% vat calculator", "vat rate uk 2025", "how to calculate vat uk"],
  alternates: {
    canonical: siteUrl + "/calculators/vat-calculator-uk",
  },
  openGraph: {
    title: "VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly | TheMetricApp",
    description:
      "Free VAT calculator UK — add or remove 20% VAT instantly. Get net, gross and VAT figures for any amount, accurate for 2025-26 HMRC rules.",
    url: siteUrl + "/calculators/vat-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly | TheMetricApp" }],
  },
  twitter: {
    title: "VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly | TheMetricApp",
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

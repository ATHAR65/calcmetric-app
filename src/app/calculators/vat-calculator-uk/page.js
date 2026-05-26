import Calculator from "./Calculator";


export const metadata = {
  title: "VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly | TheMetricApp",
  description: "Free VAT calculator UK — add or remove 20% VAT instantly. Get net, gross and VAT figures for any amount, accurate for 2025-26 HMRC rules.",
  alternates: {
    canonical: "/calculators/vat-calculator-uk",
  },
  openGraph: {
    title: "VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly | TheMetricApp",
    description: "Free VAT calculator UK — add or remove 20% VAT instantly. Get net, gross and VAT figures for any amount, accurate for 2025-26 HMRC rules.",
    url: "https://www.themetricapp.com/calculators/vat-calculator-uk",
    siteName: "TheMetricApp",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAT Calculator UK (2025–26) — Add or Remove 20% VAT Instantly | TheMetricApp",
    description: "Free VAT calculator UK — add or remove 20% VAT instantly. Get net, gross and VAT figures for any amount, accurate for 2025-26 HMRC rules.",
  },
};

export default function Page() {
  return <Calculator />;
}

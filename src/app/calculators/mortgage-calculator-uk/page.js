import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "Mortgage Calculator UK 2025–26 — Monthly Repayments, Stamp Duty & Affordability | TheMetricApp",
  description: "Free mortgage calculator UK for 2025–26. Estimate monthly repayments, total interest, stamp duty costs, and borrowing affordability. Accurate rates, instant results.",
  alternates: {
    canonical: "/calculators/mortgage-calculator-uk",
  },
  openGraph: {
    title: "Mortgage Calculator UK 2025–26 — Monthly Repayments, Stamp Duty & Affordability | TheMetricApp",
    description: "Free mortgage calculator UK for 2025–26. Estimate monthly repayments, total interest, stamp duty costs, and borrowing affordability.",
    url: "https://www.themetricapp.com/calculators/mortgage-calculator-uk",
    siteName: "TheMetricApp",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Mortgage Calculator UK 2025–26 | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Calculator UK 2025–26 — Monthly Repayments, Stamp Duty & Affordability | TheMetricApp",
    description: "Free mortgage calculator UK for 2025–26. Estimate monthly repayments, total interest, stamp duty costs, and borrowing affordability.",
  },
};

export default function Page() {
  return <Calculator />;
}

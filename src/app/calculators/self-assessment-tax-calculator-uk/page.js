import Calculator from "./Calculator";

export const metadata = {
  title: "Self Assessment Tax Calculator UK 2025–26 — Tax Return Estimator | TheMetricApp",
  description: "Free Self Assessment tax calculator UK for 2025–26. Estimate your tax bill, Class 2 & 4 NI, and payments on account. Accurate HMRC rates for sole traders and freelancers.",
  alternates: {
    canonical: "/calculators/self-assessment-tax-calculator-uk",
  },
  openGraph: {
    title: "Self Assessment Tax Calculator UK 2025–26 — Tax Return Estimator | TheMetricApp",
    description: "Free Self Assessment tax calculator UK for 2025–26. Estimate your tax bill, Class 2 & 4 NI, and payments on account.",
    url: "https://www.themetricapp.com/calculators/self-assessment-tax-calculator-uk",
    siteName: "TheMetricApp",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Self Assessment Tax Calculator UK 2025–26 | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Self Assessment Tax Calculator UK 2025–26 — Tax Return Estimator | TheMetricApp",
    description: "Free Self Assessment tax calculator UK for 2025–26. Estimate your tax bill, Class 2 & 4 NI, and payments on account.",
  },
};

export default function Page() {
  return <Calculator />;
}

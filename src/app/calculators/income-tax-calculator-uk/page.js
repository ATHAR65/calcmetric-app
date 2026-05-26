import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "Income Tax Calculator UK (2025–26) — Estimate PAYE & Take-Home Pay | TheMetricApp",
  description: "Free income tax calculator UK — estimate PAYE, NI, and take-home pay for 2025–26. Accurate HMRC rates, instant results, no sign-up.",
  alternates: {
    canonical: "/calculators/income-tax-calculator-uk",
  },
  openGraph: {
    title: "Income Tax Calculator UK (2025–26) — Estimate PAYE & Take-Home Pay | TheMetricApp",
    description: "Free income tax calculator UK — estimate PAYE, NI, and take-home pay for 2025–26. Accurate HMRC rates, instant results, no sign-up.",
    url: "https://www.themetricapp.com/calculators/income-tax-calculator-uk",
    siteName: "TheMetricApp",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Income Tax Calculator UK (2025–26) — Estimate PAYE & Take-Home Pay | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Calculator UK (2025–26) — Estimate PAYE & Take-Home Pay | TheMetricApp",
    description: "Free income tax calculator UK — estimate PAYE, NI, and take-home pay for 2025–26. Accurate HMRC rates, instant results, no sign-up.",
  },
};

export default function Page() {
  return <Calculator />;
}

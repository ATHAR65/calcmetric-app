const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Income Tax Calculator UK (2025–26) — Estimate PAYE & Take-Home Pay | TheMetricApp",
  description:
    "Free income tax calculator UK — estimate PAYE, NI, and take-home pay for 2025–26. Accurate HMRC rates, instant results, no sign-up required.",
  keywords: [
    "income tax calculator uk",
    "uk income tax calculator 2026",
    "how much income tax do i pay",
    "paye tax calculator",
    "tax calculator uk 2025-26",
    "take home pay calculator uk",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/income-tax-calculator-uk",
  },
  openGraph: {
    title: "Income Tax Calculator UK (2025–26) — Estimate PAYE & Take-Home Pay | TheMetricApp",
    description:
      "Free income tax calculator UK — estimate PAYE, NI, and take-home pay for 2025–26. Accurate HMRC rates, instant results, no sign-up required.",
    url: siteUrl + "/calculators/income-tax-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Income Tax Calculator UK (2025–26) — Estimate PAYE & Take-Home Pay | TheMetricApp" }],
  },
  twitter: {
    title: "Income Tax Calculator UK (2025–26) — Estimate PAYE & Take-Home Pay | TheMetricApp",
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

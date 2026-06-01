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
    images: [{ url: "/api/og?title=Income%20Tax%20Calculator%20UK%20(2025%E2%80%9326)%20%E2%80%94%20Estimate%20PAYE%20%26%20Take-Home%20Pay%20%7C%20TheMetricApp&description=Free%20income%20tax%20calculator%20UK%20%E2%80%94%20estimate%20PAYE%2C%20NI%2C%20and%20take-home%20pay%20for%202025%E2%80%9326.%20Accurate%20HMRC%20rates%2C%20instant%20results%2C%20no%20sign-up%20required.&type=website", width: 1200, height: 630, alt: "Income Tax Calculator UK (2025–26) — Estimate PAYE & Take-Home Pay | TheMetricApp" }],
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

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "UK Income Tax Calculator 2026/27 — Take-Home Pay (HMRC)" },
  description:
    "See your 2026/27 UK take-home pay in seconds — Income Tax, National Insurance, and the 60% trap over £100k, at current HMRC rates. Free, no sign-up.",
  keywords: [
    "income tax calculator uk",
    "uk income tax calculator 2026",
    "how much income tax do i pay",
    "paye tax calculator",
    "tax calculator uk 2026-27",
    "take home pay calculator uk",
  ],
  alternates: {
    languages: {
      "en-gb": siteUrl + "/calculators/income-tax-calculator-uk",
      "en-us": siteUrl + "/calculators/income-tax-calculator-uk",
    },
    canonical: siteUrl + "/calculators/income-tax-calculator-uk",
  },
  dateModified: "2026-07-03",
  openGraph: {
    title: "Income Tax Calculator UK (2026/27) — Estimate PAYE & Take-Home Pay",
    description:
    "Free income tax calculator UK — estimate PAYE, NI, and take-home pay for 2026/27. Accurate HMRC rates, instant results, no sign-up required.",
    url: siteUrl + "/calculators/income-tax-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Income%20Tax%20Calculator%20UK%20(2026%2F27)%20%E2%80%94%20Estimate%20PAYE%20%26%20Take-Home%20Pay&description=Free%20income%20tax%20calculator%20UK%20%E2%80%94%20estimate%20PAYE%2C%20NI%2C%20and%20take-home%20pay%20for%202026%2F27.%20Accurate%20HMRC%20rates%2C%20instant%20results%2C%20no%20sign-up%20required.&type=website", width: 1200, height: 630, alt: "Income Tax Calculator UK (2026/27) — Estimate PAYE & Take-Home Pay" }],
  },
  twitter: {
    title: "UK Income Tax Calculator 2026/27 — HMRC Tax Estimator",
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

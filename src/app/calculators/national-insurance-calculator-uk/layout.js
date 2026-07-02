const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "National Insurance Calculator UK 2026/27 — Free NI Check" },
  description:
    "Work out your 2026/27 UK National Insurance in seconds. Class 1 employee, Class 4 self-employed, and employer NI at current HMRC rates. Free, no sign-up.",
  keywords: [
    "national insurance calculator uk",
    "ni calculator uk",
    "class 1 national insurance calculator",
    "self employed national insurance calculator",
    "national insurance 2026-27",
    "how much national insurance do i pay",
  ],
  alternates: {
    languages: {
      "en-gb": siteUrl + "/calculators/national-insurance-calculator-uk",
      "en-us": siteUrl + "/calculators/national-insurance-calculator-uk",
    },
    canonical: siteUrl + "/calculators/national-insurance-calculator-uk",
  },
  dateModified: "2026-07-03",
  openGraph: {
    title: "National Insurance Calculator UK 2026/27 — Class 1, 2 & 4",
    description:
    "Free UK National Insurance calculator for 2026/27. Calculate Class 1 employee NI, Class 4 self-employed NI, and employer contributions at HMRC rates.",
    url: siteUrl + "/calculators/national-insurance-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=National%20Insurance%20Calculator%20UK%202026%2F27%20%E2%80%94%20Class%201%2C%202%20%26%204%20NI%20Contributions&description=Free%20UK%20National%20Insurance%20calculator%20for%202026%2F27.%20Calculate%20Class%201%20employee%20NI%2C%20Class%204%20self-employed%20NI%2C%20and%20employer%20contributions.&type=website", width: 1200, height: 630, alt: "National Insurance Calculator UK 2026/27 — Class 1, 2 & 4 NI Contributions" }],
  },
  twitter: {
    title: "National Insurance Calculator UK 2026/27 — Free NI Check",
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

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "National Insurance Calculator UK 2025–26 — Class 1, 2 & 4 NI",
  description: "Calculate UK National Insurance for 2025–26. Covers Class 1 employee, Class 2 and Class 4 self-employed NI, and employer contributions. Free HMRC tool.",
  keywords: [
    "national insurance calculator uk",
    "ni calculator uk",
    "class 1 national insurance calculator",
    "self employed national insurance calculator",
    "national insurance 2025-26",
    "how much national insurance do i pay",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/national-insurance-calculator-uk",
  },
  openGraph: {
    title: "UK National Insurance Calculator 2025–26 — Class 1, 2 & 4 NI Contributions | TheMetricApp",
    description:
      "Free UK National Insurance calculator for 2025–26. Calculate Class 1 employee NI, Class 2 and Class 4 self-employed NI, and employer contributions.",
    url: siteUrl + "/calculators/national-insurance-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=UK%20National%20Insurance%20Calculator%202025%E2%80%9326%20%E2%80%94%20Class%201%2C%202%20%26%204%20NI%20Contributions%20%7C%20TheMetricApp&description=Free%20UK%20National%20Insurance%20calculator%20for%202025%E2%80%9326.%20Calculate%20Class%201%20employee%20NI%2C%20Class%202%20and%20Class%204%20self-employed%20NI%2C%20and%20employer%20contributions.&type=website", width: 1200, height: 630, alt: "UK National Insurance Calculator 2025–26 — Class 1, 2 & 4 NI Contributions | TheMetricApp" }],
  },
  twitter: {
    title: "National Insurance Calculator UK 2025–26 — Class 1, 2 & 4 NI | TheMetricApp",
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

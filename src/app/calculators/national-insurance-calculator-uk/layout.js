const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "UK National Insurance Calculator 2025–26 — Class 1, 2 & 4 NI Contributions | TheMetricApp",
  description:
    "Free UK National Insurance calculator for 2025–26. Calculate Class 1 employee NI, Class 2 and Class 4 self-employed NI, and employer contributions. Accurate HMRC rates, instant results.",
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
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "UK National Insurance Calculator 2025–26 | TheMetricApp" }],
  },
  twitter: {
    title: "UK National Insurance Calculator 2025–26 — Class 1, 2 & 4 NI Contributions | TheMetricApp",
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

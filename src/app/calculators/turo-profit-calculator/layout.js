const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Turo Profit Calculator 2026 — Host Earnings & Net Income | TheMetricApp" },
  description:
    "Free Turo profit calculator for 2026. Estimate host earnings by plan (70/80/90% share), minus car payment and costs — monthly and annual net profit.",
  keywords: [
    "turo profit calculator",
    "turo host income calculator",
    "how much do turo hosts make",
    "turo earnings calculator 2026",
    "turo host share percentage",
  ],
  alternates: { canonical: siteUrl + "/calculators/turo-profit-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Turo Profit Calculator 2026 — Real Host Earnings",
    description:
      "Daily rate × booked days × your plan share − real costs. See true monthly and annual Turo profit.",
    url: siteUrl + "/calculators/turo-profit-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Turo%20Profit%20Calculator%202026&description=Host%20share%2C%20car%20payment%2C%20real%20costs%20%E2%80%94%20true%20net%20profit.&type=article", width: 1200, height: 630, alt: "Turo Profit Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turo Profit Calculator 2026",
    description: "70/80/90% host share, real costs — your true Turo profit.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

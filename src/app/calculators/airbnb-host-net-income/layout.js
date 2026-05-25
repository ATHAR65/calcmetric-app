const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Airbnb Host Net Income Calculator 2026 — NOI & Profit | TheMetricApp",
  description:
    "Calculate your Airbnb net operating income after host fees (3%), cleaning costs, and fixed expenses. Free 2026 Airbnb profit calculator for US & UK hosts.",
  keywords: ["Airbnb profit calculator", "Airbnb net income", "Airbnb host fees", "short term rental ROI"],
  alternates: {
    canonical: siteUrl + "/calculators/airbnb-host-net-income",
  },
  openGraph: {
    title: "Airbnb Host Net Income Calculator 2026 — NOI & Profit | TheMetricApp",
    description:
      "Calculate your Airbnb net operating income after host fees (3%), cleaning costs, and fixed expenses. Free 2026 Airbnb profit calculator for US & UK hosts.",
    url: siteUrl + "/calculators/airbnb-host-net-income",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Airbnb Host Net Income Calculator 2026 — Calculate NOI & Monthly Profit After Fees" }],
  },
  twitter: {
    title: "Airbnb Host Net Income Calculator 2026 — NOI & Profit | TheMetricApp",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_US",
  },
};

export default function Layout({ children }) {
  return children;
}

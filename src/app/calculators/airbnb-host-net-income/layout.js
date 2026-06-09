const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Airbnb Host Net Income Calculator 2026 | TheMetricApp" },
  description:
    "Calculate your Airbnb net income after host fees, cleaning costs & taxes. Free Airbnb profit estimator for hosts — Free, no signup required.",
  keywords: ["Airbnb profit calculator", "Airbnb net income", "Airbnb host fees", "short term rental ROI"],
  alternates: {
    canonical: siteUrl + "/calculators/airbnb-host-net-income",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Airbnb Host Net Income Calculator 2026 — NOI & Profit",
    description:
    "Calculate your Airbnb net operating income after host fees (3%), cleaning costs, and fixed expenses. Free 2026 Airbnb profit calculator for US & UK hosts.",
    url: siteUrl + "/calculators/airbnb-host-net-income",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Airbnb%20Host%20Net%20Income%20Calculator%202026%20%E2%80%94%20NOI%20%26%20Profit%20%7C%20TheMetricApp&description=Calculate%20your%20Airbnb%20net%20operating%20income%20after%20host%20fees%20(3%25)%2C%20cleaning%20costs%2C%20and%20fixed%20expenses.%20Free%202026%20Airbnb%20profit%20calculator%20for%20US%20%26%20UK%20hosts.&type=website", width: 1200, height: 630, alt: "Airbnb Host Net Income Calculator 2026 — NOI & Profit" }],
  },
  twitter: {
    title: "Airbnb Host Net Income Calculator 2026 — Profit After",
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

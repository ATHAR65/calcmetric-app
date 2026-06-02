const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Gig Economy Net Income Calculator 2026 — Take-Home Pay After Taxes | TheMetricApp",
  description: "Calculate your actual take-home pay after expenses and taxes as a gig worker. Supports Uber, Lyft, DoorDash, Instacart, and more. Free 2026 gig economy calculator.",
  keywords: [
    "gig economy calculator",
    "gig worker net income",
    "Uber take home pay",
    "DoorDash net income",
    "rideshare profit calculator",
    "gig economy taxes",
    "1099 income calculator",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/gig-economy-net-income-calculator",
  },
  openGraph: {
    title: "Gig Economy Net Income Calculator 2026 — True Take-Home Pay | TheMetricApp",
    description:
      "See your true hourly rate after mileage deductions, business expenses, and self-employment taxes for Uber, DoorDash, Instacart, and more. Free calculator.",
    url: siteUrl + "/calculators/gig-economy-net-income-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Gig%20Economy%20Net%20Income%20Calculator%202026%20%E2%80%94%20True%20Take-Home%20Pay%20%7C%20TheMetricApp&description=See%20your%20true%20hourly%20rate%20after%20mileage%20deductions%2C%20expenses%2C%20and%20self-employment%20taxes%20for%20gig%20workers.&type=website", width: 1200, height: 630, alt: "Gig Economy Net Income Calculator 2026 — True Take-Home Pay | TheMetricApp" }],
  },
  twitter: {
    title: "Gig Economy Net Income Calculator 2026 — Take-Home Pay After Taxes | TheMetricApp",
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

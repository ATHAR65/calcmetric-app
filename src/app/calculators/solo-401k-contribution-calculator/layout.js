const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Solo 401k Contribution Calculator 2026 | TheMetricApp" },
  description:
    "Calculate your Solo 401k contribution limit for 2026. Covers employee deferrals, employer profit-sharing, and catch-up contributions. Free retirement calcula...",
  keywords:
    "solo 401k calculator 2026, solo 401k contribution limit 2026, self employed retirement calculator, solo 401k max contribution, 1099 retirement savings calculator",
  alternates: {
    canonical: siteUrl + "/calculators/solo-401k-contribution-calculator",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Solo 401k Contribution Calculator 2026 — Max Retirement",
    description:
    "Calculate your maximum Solo 401k contribution for 2026. Covers employee and employer contributions up to $70,000 limit. Free retirement calculator for freela...",
    url: siteUrl + "/calculators/solo-401k-contribution-calculator",
    type: "website",
    siteName: "TheMetricApp",
    images: [{ url: "/api/og?title=Solo%20401k%20Contribution%20Calculator%202026%20%E2%80%94%20Max%20Retirement%20Savings%20%7C%20TheMetricApp&description=Calculate%20your%20maximum%20Solo%20401k%20contribution%20for%202026.%20Covers%20employee%20and%20employer%20contributions%20up%20to%20%2470%2C000%20limit.%20Free%20retirement%20calculator%20for%20freelancers%2C%201099%20contractors%20and%20self-employed.&type=website", width: 1200, height: 630, alt: "Solo 401k Contribution Calculator 2026 — Max Retirement Savings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo 401k Contribution Calculator 2026 — Max Retirement",
    description:
    "Calculate your maximum Solo 401k contribution for 2026. Covers employee and employer contributions up to $70,000 limit — Free, no signup required.",
    images: ["/api/og?title=Solo%20401k%20Contribution%20Calculator%202026%20%E2%80%94%20Max%20Retirement%20Savings%20%7C%20TheMetricApp&description=Calculate%20your%20maximum%20Solo%20401k%20contribution%20for%202026.%20Covers%20employee%20and%20employer%20contributions%20up%20to%20%2470%2C000%20limit.%20Free%20retirement%20calculator%20for%20freelancers%2C%201099%20contractors%20and%20self-employed.&type=website"],
    creator: "@themetricapp",
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

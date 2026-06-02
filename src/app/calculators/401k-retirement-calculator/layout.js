const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "401(k) Retirement Calculator 2026 — Plan Your Nest Egg | TheMetricApp",
  description: "Project your 401(k) growth with employer matching and compound interest. Free retirement calculator with year-by-year projections.",
  keywords: [
    "401k calculator",
    "401k retirement calculator",
    "401k growth calculator",
    "retirement calculator 2026",
    "employer match calculator",
    "401k projection calculator",
    "retirement planning calculator",
    "401k savings calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/401k-retirement-calculator" },
  openGraph: {
    title: "401(k) Retirement Calculator 2026 — Project Your Retirement Nest Egg | TheMetricApp",
    description: "Project your 401(k) retirement savings with employer matching and compound interest. Free 2026 401(k) calculator with personalized projections.",
    url: siteUrl + "/calculators/401k-retirement-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=401(k)%20Retirement%20Calculator%202026%20%E2%80%94%20Project%20Your%20Retirement%20Nest%20Egg%20%7C%20TheMetricApp&description=Project%20your%20401(k)%20retirement%20savings%20with%20employer%20matching%20and%20compound%20interest.%20Free%202026%20401(k)%20calculator%20with%20personalized%20projections.&type=website", width: 1200, height: 630, alt: "401(k) Retirement Calculator 2026 — Project Your Retirement Nest Egg | TheMetricApp" }],
  },
  twitter: {
    title: "401(k) Retirement Calculator 2026 — Plan Your Nest Egg | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

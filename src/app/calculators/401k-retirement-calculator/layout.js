const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "401(k) Retirement Calculator 2026 — Project Your Retirement Nest Egg | TheMetricApp",
  description:
    "Project your 401(k) retirement savings with employer matching and compound interest. Free 2026 401(k) calculator with personalized projections and year-by-year growth timeline.",
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
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "401(k) Retirement Calculator 2026 — Free Retirement Planning Tool" }],
  },
  twitter: { title: "401(k) Retirement Calculator 2026 — Project Your Retirement Nest Egg | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }

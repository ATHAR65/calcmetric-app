const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Solo 401k Contribution Calculator 2026 — Max Retirement Savings | TheMetricApp",
  description:
    "Calculate your maximum Solo 401k contribution for 2026. Covers employee and employer contributions up to $70,000 limit. Free retirement calculator for freelancers, 1099 contractors and self-employed.",
  keywords:
    "solo 401k calculator 2026, solo 401k contribution limit 2026, self employed retirement calculator, solo 401k max contribution, 1099 retirement savings calculator",
  alternates: {
    canonical: siteUrl + "/calculators/solo-401k-contribution-calculator",
  },
  openGraph: {
    title: "Solo 401k Contribution Calculator 2026 — Max Retirement Savings | TheMetricApp",
    description:
      "Calculate your maximum Solo 401k contribution for 2026. Covers employee and employer contributions up to $70,000 limit. Free retirement calculator for freelancers, 1099 contractors and self-employed.",
    url: siteUrl + "/calculators/solo-401k-contribution-calculator",
    type: "website",
    siteName: "TheMetricApp",
    images: [{ url: siteUrl + "/og-default.svg", width: 1200, height: 630, alt: "Solo 401k Contribution Calculator 2026 — Calculate Max Retirement Contributions & Tax Savings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo 401k Contribution Calculator 2026 — Max Retirement Savings | TheMetricApp",
    description:
      "Calculate your maximum Solo 401k contribution for 2026. Covers employee and employer contributions up to $70,000 limit.",
    images: [siteUrl + "/og-default.svg"],
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

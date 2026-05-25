const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "California 1099 Tax Calculator 2026 — SE & State Tax | TheMetricApp",
  description:
    "Calculate self-employment tax, federal income tax, and California state income tax on your 1099 freelance income. Free 2026 tax calculator for CA freelancers.",
  keywords: ["California 1099 tax calculator", "California self employment tax", "CA freelance tax", "1099 tax estimator California"],
  alternates: {
    canonical: siteUrl + "/calculators/california-1099-tax-calculator",
  },
  openGraph: {
    title: "California 1099 Tax Calculator 2026 — SE & State Tax | TheMetricApp",
    description:
      "Calculate self-employment tax, federal income tax, and California state income tax on your 1099 freelance income. Free 2026 tax calculator for CA freelancers.",
    url: siteUrl + "/calculators/california-1099-tax-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "California 1099 Tax Calculator 2026 — Calculate SE Tax, Federal & CA State Income Tax" }],
  },
  twitter: {
    title: "California 1099 Tax Calculator 2026 — SE & State Tax | TheMetricApp",
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

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Self Employment Tax Calculator 2026 — SE Tax Rate & Deductions | TheMetricApp",
  description:
    "Calculate your self-employment tax (15.3%) for 2026. Free SE tax calculator for freelancers, gig workers, and independent contractors. Includes deductions and quarterly estimates.",
  keywords: ["self employment tax calculator", "SE tax calculator 2026", "self employed taxes", "1099 tax calculator", "independent contractor tax"],
  alternates: {
    canonical: siteUrl + "/calculators/self-employment-tax-calculator-2026",
  },
  openGraph: {
    title: "Self Employment Tax Calculator 2026 — SE Tax Rate & Deductions | TheMetricApp",
    description:
      "Calculate your self-employment tax (15.3%) for 2026. Free SE tax calculator for freelancers, gig workers, and independent contractors. Includes deductions and quarterly estimates.",
    url: siteUrl + "/calculators/self-employment-tax-calculator-2026",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Self Employment Tax Calculator 2026 — Calculate SE Tax Rate, Deductions & Quarterly Payments" }],
  },
  twitter: {
    title: "Self Employment Tax Calculator 2026 — SE Tax Rate & Deductions | TheMetricApp",
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

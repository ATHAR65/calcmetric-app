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
    images: [{ url: "/api/og?title=Self%20Employment%20Tax%20Calculator%202026%20%E2%80%94%20SE%20Tax%20Rate%20%26%20Deductions%20%7C%20TheMetricApp&description=Calculate%20your%20self-employment%20tax%20(15.3%25)%20for%202026.%20Free%20SE%20tax%20calculator%20for%20freelancers%2C%20gig%20workers%2C%20and%20independent%20contractors.%20Includes%20deductions%20and%20quarterly%20estimates.&type=website", width: 1200, height: 630, alt: "Self Employment Tax Calculator 2026 — SE Tax Rate & Deductions | TheMetricApp" }],
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

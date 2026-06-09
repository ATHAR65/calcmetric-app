const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Capital Gains Tax Calculator 2026 | TheMetricApp" },
  description:
    "Calculate your 2026 capital gains tax. Covers short-term, long-term rates, NIIT surcharge, and state taxes for stocks, crypto, and real estate.",
  keywords: [
    "capital gains tax calculator 2026",
    "long term capital gains tax",
    "short term capital gains tax",
    "capital gains tax brackets 2026",
    "niit tax calculator",
    "investment tax calculator",
    "crypto tax calculator",
    "stock sale tax estimator",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/capital-gains-tax-calculator",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Capital Gains Tax Calculator 2026",
    description:
    "Calculate your 2026 capital gains tax. Federal brackets, NIIT surcharge, and state tax for stocks, crypto, and real estate.",
    url: "https://www.themetricapp.com/calculators/capital-gains-tax-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/api/og?title=Capital%20Gains%20Tax%20Calculator%202026%20%7C%20TheMetricApp&description=Calculate%20your%202026%20capital%20gains%20tax.%20Federal%20brackets%2C%20NIIT%20surcharge%2C%20and%20state%20tax%20for%20stocks%2C%20crypto%2C%20and%20real%20estate.&type=website", width: 1200, height: 630, alt: "Capital Gains Tax Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Gains Tax Calculator 2026",
    description:
    "Calculate your 2026 capital gains tax. Federal brackets, NIIT surcharge, and state tax for stocks, crypto, and real estate.",
  },
};

export default function Layout({ children }) {
  return children;
}

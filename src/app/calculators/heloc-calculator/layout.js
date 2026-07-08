const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "HELOC Calculator — Home Equity Line of Credit | TheMetricApp" },
  description:
    "Free HELOC calculator. Find how much you can borrow against your home equity, plus your interest-only draw payment and fully-amortizing repayment payment.",
  keywords: [
    "heloc calculator",
    "home equity line of credit calculator",
    "how much can i borrow heloc",
    "heloc payment calculator",
    "home equity borrowing calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/heloc-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "HELOC Calculator — Home Equity Line of Credit",
    description:
      "Find your HELOC borrowing limit and monthly payments, draw period and repayment.",
    url: siteUrl + "/calculators/heloc-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=HELOC%20Calculator&description=How%20much%20can%20you%20borrow%20against%20your%20home%20equity%3F&type=article", width: 1200, height: 630, alt: "HELOC Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HELOC Calculator",
    description: "Find your home equity line of credit limit and monthly payments.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

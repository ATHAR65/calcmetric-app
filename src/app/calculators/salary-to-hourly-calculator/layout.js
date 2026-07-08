const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Salary to Hourly Calculator — Convert Annual Pay | TheMetricApp" },
  description:
    "Free salary to hourly calculator. Convert any annual salary into an equivalent hourly, daily, weekly, bi-weekly, and monthly wage instantly.",
  keywords: [
    "salary to hourly calculator",
    "annual salary to hourly",
    "convert salary to hourly wage",
    "hourly rate from salary",
    "salary per hour calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/salary-to-hourly-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Salary to Hourly Calculator — Convert Annual Pay Instantly",
    description:
      "Turn any annual salary into hourly, daily, weekly, and monthly pay. Free and instant.",
    url: siteUrl + "/calculators/salary-to-hourly-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Salary%20to%20Hourly%20Calculator&description=Convert%20annual%20salary%20to%20hourly%2C%20daily%2C%20weekly%20%26%20monthly%20pay.&type=article", width: 1200, height: 630, alt: "Salary to Hourly Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary to Hourly Calculator",
    description: "Convert annual salary to hourly, daily, weekly, and monthly pay.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}

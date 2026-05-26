const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Hourly to Annual Salary Calculator UK (2025–26) — Convert Hourly Wage to Yearly Pay | TheMetricApp",
  description:
    "Free hourly to annual salary calculator UK — convert your hourly wage to yearly pay instantly. Includes standard hours, overtime, and statutory holiday pay for 2025–26.",
  keywords: [
    "hourly to annual salary calculator uk",
    "hourly rate to annual salary uk",
    "convert hourly wage to yearly salary",
    "hourly pay calculator uk",
    "£15 an hour annual salary",
    "hourly rate yearly salary calculator",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/hourly-to-annual-salary-calculator-uk",
  },
  openGraph: {
    title: "Hourly to Annual Salary Calculator UK (2025–26) — Convert Hourly Wage to Yearly Pay | TheMetricApp",
    description:
      "Free hourly to annual salary calculator UK — convert your hourly wage to yearly pay instantly. Includes standard hours, overtime, and statutory holiday pay for 2025–26.",
    url: siteUrl + "/calculators/hourly-to-annual-salary-calculator-uk",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Hourly to Annual Salary Calculator UK (2025–26) — Convert Hourly Wage to Yearly Pay | TheMetricApp" }],
  },
  twitter: {
    title: "Hourly to Annual Salary Calculator UK (2025–26) — Convert Hourly Wage to Yearly Pay | TheMetricApp",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_GB",
    "og:country-name": "United Kingdom",
  },
};

export default function Layout({ children }) {
  return children;
}

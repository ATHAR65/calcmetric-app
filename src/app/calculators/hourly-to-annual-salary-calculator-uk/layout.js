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
    images: [{ url: "/api/og?title=Hourly%20to%20Annual%20Salary%20Calculator%20UK%20(2025%E2%80%9326)%20%E2%80%94%20Convert%20Hourly%20Wage%20to%20Yearly%20Pay%20%7C%20TheMetricApp&description=Free%20hourly%20to%20annual%20salary%20calculator%20UK%20%E2%80%94%20convert%20your%20hourly%20wage%20to%20yearly%20pay%20instantly.%20Includes%20standard%20hours%2C%20overtime%2C%20and%20statutory%20holiday%20pay%20for%202025%E2%80%9326.&type=website", width: 1200, height: 630, alt: "Hourly to Annual Salary Calculator UK (2025–26) — Convert Hourly Wage to Yearly Pay | TheMetricApp" }],
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

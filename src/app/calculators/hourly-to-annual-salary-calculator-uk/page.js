import Calculator from "./Calculator";


export const metadata = {
  title: "Hourly to Annual Salary Calculator UK (2025–26) — Convert Hourly Wage to Yearly Pay | TheMetricApp",
  description: "Free hourly to annual salary calculator UK — convert your hourly wage to yearly pay instantly. Includes standard hours, overtime, and statutory holiday pay for 2025–26.",
  alternates: {
    canonical: "/calculators/hourly-to-annual-salary-calculator-uk",
  },
  openGraph: {
    title: "Hourly to Annual Salary Calculator UK (2025–26) — Convert Hourly Wage to Yearly Pay | TheMetricApp",
    description: "Free hourly to annual salary calculator UK — convert your hourly wage to yearly pay instantly. Includes standard hours, overtime, and statutory holiday pay for 2025–26.",
    url: "https://www.themetricapp.com/calculators/hourly-to-annual-salary-calculator-uk",
    siteName: "TheMetricApp",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Hourly to Annual Salary Calculator UK (2025–26) — Convert Hourly Wage to Yearly Pay | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hourly to Annual Salary Calculator UK (2025–26) — Convert Hourly Wage to Yearly Pay | TheMetricApp",
    description: "Free hourly to annual salary calculator UK — convert your hourly wage to yearly pay instantly. Includes standard hours, overtime, and statutory holiday pay for 2025–26.",
  },
};

export default function Page() {
  return <Calculator />;
}

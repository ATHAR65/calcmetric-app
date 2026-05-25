const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "IRS Mileage Deduction Calculator 2026 — $0.67/Mile Tax Savings | TheMetricApp",
  description:
    "Calculate your IRS standard mileage deduction for 2026. Covers business $0.67/mile, medical $0.21/mile and charity $0.14/mile rates. Free tool for gig workers, freelancers and small businesses.",
  keywords: ["IRS mileage deduction calculator 2026", "standard mileage rate 2026", "mileage tax deduction calculator", "business mileage calculator", "$0.67 per mile calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/irs-mileage-deduction-calculator",
  },
  openGraph: {
    title: "IRS Mileage Deduction Calculator 2026 — $0.67/Mile Tax Savings | TheMetricApp",
    description:
      "Calculate your IRS standard mileage deduction for 2026. Covers business $0.67/mile, medical $0.21/mile and charity $0.14/mile rates.",
    url: siteUrl + "/calculators/irs-mileage-deduction-calculator",
    siteName: "TheMetricApp",
    type: "website",
  },
  twitter: {
    title: "IRS Mileage Deduction Calculator 2026 — $0.67/Mile Tax Savings | TheMetricApp",
  },
};

export default function Layout({ children }) {
  return children;
}

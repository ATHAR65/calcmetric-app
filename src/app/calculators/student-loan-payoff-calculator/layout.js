const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Student Loan Payoff Calculator 2026 — Free Loan Repayment Estimator | TheMetricApp",
  description: "Calculate your student loan payments, total interest, and payoff timeline. See how extra payments save thousands on federal and private student loans. Free 2026 calculator.",
  keywords: [
    "student loan calculator",
    "student loan payoff calculator",
    "student loan repayment calculator",
    "federal student loan rates 2026",
    "how to pay off student loans faster",
    "student loan interest calculator",
    "college debt calculator",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/student-loan-payoff-calculator",
  },
  openGraph: {
    title: "Student Loan Payoff Calculator 2026 — Free Repayment & Interest Estimator | TheMetricApp",
    description:
      "Calculate your monthly student loan payments, total interest over the life of the loan, and see how extra payments can save you thousands. Free 2026 calculator.",
    url: siteUrl + "/calculators/student-loan-payoff-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Student%20Loan%20Payoff%20Calculator%202026%20%E2%80%94%20Free%20Repayment%20%26%20Interest%20Estimator%20%7C%20TheMetricApp&description=Calculate%20your%20student%20loan%20payments%2C%20total%20interest%2C%20and%20see%20how%20extra%20payments%20save%20thousands.&type=website", width: 1200, height: 630, alt: "Student Loan Payoff Calculator 2026 — Free Repayment & Interest Estimator | TheMetricApp" }],
  },
  twitter: {
    title: "Student Loan Payoff Calculator 2026 — Free Loan Repayment Estimator | TheMetricApp",
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

import Calculator from "./Calculator";

export const metadata = {
  title: "Student Loan Payoff Calculator 2026 — Calculate Payments, Interest & Payoff Date",
  description: "Free student loan payoff calculator for 2026. Calculate monthly payments, total interest, and payoff timeline for federal and private student loans. See how extra payments save thousands.",
  alternates: {
    canonical: "/calculators/student-loan-payoff-calculator",
  },
  openGraph: {
    title: "Student Loan Payoff Calculator 2026 — Pay Off Loans Faster | TheMetricApp",
    description: "Calculate your student loan payments, total interest, and payoff date. See how extra monthly payments can save you thousands.",
    url: "https://www.themetricapp.com/calculators/student-loan-payoff-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Student Loan Payoff Calculator 2026 — Calculate Payments & Interest" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Payoff Calculator 2026 — Pay Off Loans Faster",
    description: "Free calculator to estimate student loan payments, interest, and savings with extra payments.",
  },
};

export default function Page() {
  return <Calculator />;
}

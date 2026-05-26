import Calculator from "./Calculator";


export const metadata = {
  title: "Side Hustle Tax Calculator 2026 — Calculate Gig Income, SE Tax & Quarterly Payments",
  description: "Calculate taxes on your side hustle income instantly. Covers Uber, DoorDash, Fiverr, Etsy, Airbnb and freelance 1099 income.",
  alternates: {
    canonical: "/calculators/side-hustle-tax-calculator",
  },
  openGraph: {
    title: "Side Hustle Tax Calculator 2026 — Calculate Gig Income, SE Tax & Quarterly Payments | TheMetricApp",
    description: "Calculate taxes on your side hustle income instantly. Covers Uber, DoorDash, Fiverr, Etsy, Airbnb and freelance 1099 income.",
    url: "https://www.themetricapp.com/calculators/side-hustle-tax-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Side Hustle Tax Calculator 2026 — Calculate Gig Income, SE Tax & Quarterly Payments | TheMetricApp",
    description: "Calculate taxes on your side hustle income instantly. Covers Uber, DoorDash, Fiverr, Etsy, Airbnb and freelance 1099 income.",
  },
};

export default function Page() {
  return <Calculator />;
}

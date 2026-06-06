import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export const metadata = {
  title: { absolute: "Gig Economy Net Income Calculator 2026 | TheMetricApp" },
  description: "Find your real take-home pay from gig work after taxes and expenses. Covers Uber, DoorDash, Fiverr & more.",
  alternates: {
    canonical: "https://www.themetricapp.com/calculators/gig-economy-net-income-calculator",
  },
  openGraph: {
    title: "Gig Economy Net Income Calculator 2026 — Tool",
    description: "See your true hourly rate after mileage deductions, expenses, and SE tax. Free 2026 gig worker income calculator.",
    url: "https://www.themetricapp.com/calculators/gig-economy-net-income-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/api/og?title=Gig%20Economy%20Net%20Income%20Calculator%202026%20%E2%80%94%20Free%20Tool%20%7C%20TheMetricApp&description=See%20your%20true%20hourly%20rate%20after%20mileage%20deductions%2C%20expenses%2C%20and%20SE%20tax.%20Free%202026%20gig%20worker%20income%20calculator.&type=website", width: 1200, height: 630, alt: "Gig Economy Net Income Calculator 2026 — Free Tool | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gig Economy Net Income Calculator 2026 — Tool",
    description: "Calculate your gig worker take-home pay for 2026. Uber, DoorDash, Instacart & more.",
  },
};

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I calculate net income from gig work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gross − expenses − SE tax − income tax"
            }
          },
          {
            "@type": "Question",
            "name": "Is gig income taxed more than regular income?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Effectively yes, due to SE tax"
            }
          },
          {
            "@type": "Question",
            "name": "What expenses can gig workers deduct?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mileage, phone, equipment, platform fees"
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to track income from multiple gigs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, report all combined"
            }
          }
        ]
      };

  return (
    <>
      <SchemaMarkup data={[faqSchema]} />
      <Calculator />
    </>
  );
}

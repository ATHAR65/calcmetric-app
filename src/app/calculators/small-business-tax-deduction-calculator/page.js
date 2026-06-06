import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";


export const metadata = {
  title: { absolute: "Small Business Tax Deduction Calculator | TheMetricApp" },
  description: "Find every tax deduction for your small business. Calculate total write-offs and tax savings instantly. Free tool.",
  alternates: {
    canonical: "https://www.themetricapp.com/calculators/small-business-tax-deduction-calculator",
  },
  openGraph: {
    title: "Small Business Tax Deduction Calculator 2026 — Tax Tool",
    description: "Calculate your small business tax deductions including SE tax, QBI, mileage, and home office. Free 2026 tax estimator for self-employed.",
    url: "https://www.themetricapp.com/calculators/small-business-tax-deduction-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/api/og?title=Small%20Business%20Tax%20Deduction%20Calculator%202026%20%E2%80%94%20Free%20Tax%20Tool%20%7C%20TheMetricApp&description=Calculate%20your%20small%20business%20tax%20deductions%20including%20SE%20tax%2C%20QBI%2C%20mileage%2C%20and%20home%20office.%20Free%202026%20tax%20estimator%20for%20self-employed.&type=website", width: 1200, height: 630, alt: "Small Business Tax Deduction Calculator 2026 — Free Tax Tool | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Tax Deduction Calculator 2026 — Tax Tool",
    description: "Calculate your small business tax deductions for 2026. SE tax, QBI, mileage & more. Free tool.",
  },
};

export default function Page() {
  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What can I deduct as a small business owner?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Home office, vehicle, equipment, salaries, software"
            }
          },
          {
            "@type": "Question",
            "name": "What is the Section 179 deduction limit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check current IRS limit (~$1.2M)"
            }
          },
          {
            "@type": "Question",
            "name": "Can I deduct my home office?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes if used exclusively and regularly for business"
            }
          },
          {
            "@type": "Question",
            "name": "What is the QBI deduction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Up to 20% of qualified business income for pass-throughs"
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

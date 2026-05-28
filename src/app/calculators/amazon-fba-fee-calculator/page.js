import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the Amazon FBA calculator free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this tool is 100% free with no sign-up required. Use it as many times as needed to evaluate different products, categories, and pricing scenarios."
        }
      },
      {
        "@type": "Question",
        "name": "Does this calculator include Amazon's new 2026 fuel surcharge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the calculator includes the new 3.5% fuel and logistics surcharge that Amazon introduced on April 17, 2026. This surcharge is applied to the FBA fulfillment fee."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reduce my Amazon FBA fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reduce packaging weight, decrease package dimensions, avoid long-term storage, bundle products, choose higher-margin categories, and optimize pricing to cover all fees."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" },
      { "@type": "ListItem", "position": 2, "name": "Amazon FBA Fee Calculator", "item": "https://www.themetricapp.com/calculators/amazon-fba-fee-calculator" }
    ]
  };

  return (
    <>
      <SchemaMarkup data={[faqSchema, breadcrumbSchema]} />
      <Calculator />
    </>
  );
}

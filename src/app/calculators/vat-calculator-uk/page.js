import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "vat-calculator-uk";
const CALC_NAME = "VAT Calculator UK 2026";
const CALC_DESCRIPTION = "Add or remove UK VAT at 20%, 5% or 0% instantly. Free VAT calculator for businesses and freelancers. Covers registration thresholds and Flat Rate Scheme.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "Value Added Tax (VAT) is a consumption tax charged on most goods and services sold in the UK. The <strong>standard rate is 20%</strong>, applied to the majority of products and services. A <strong>reduced rate of 5%</strong> applies to home energy (gas and electricity), children's car seats, and some health products. A <strong>zero rate (0%)</strong> applies to most food, children's clothing, books, and newspapers.",
  "You must register for VAT if your taxable turnover exceeds <strong>£90,000 in any rolling 12-month period</strong> (the 2025/26 threshold). You can also register voluntarily below this threshold, which allows you to reclaim VAT on business purchases. Voluntary registration makes sense if you sell primarily to VAT-registered businesses (they can reclaim the VAT you charge) or if your input VAT exceeds your output VAT.",
  "To add VAT to a net price, multiply by 1.20 (for standard rate). To remove VAT from a gross (VAT-inclusive) price, divide by 1.20. For example: a product priced at £100 net becomes <strong>£120 including VAT</strong>. A VAT-inclusive price of £120 contains £100 net + £20 VAT. The VAT fraction for 20% is 1/6 of the gross price (£120 ÷ 6 = £20).",
  "The <strong>Flat Rate Scheme</strong> simplifies VAT for businesses with turnover under £150,000. Instead of tracking VAT on every purchase, you pay a fixed percentage of gross turnover (the rate depends on your business type, ranging from 4% to 16.5%). In your first year of VAT registration, you get a 1% discount. The scheme can save time but may not always save money — compare your flat rate payment against standard scheme results.",
];

const vatRateTable = {
  title: "2026 UK VAT Rates",
  headers: ["Rate", "Percentage", "Applies To"],
  rows: [
    ["Standard", "20%", "Most goods and services"],
    ["Reduced", "5%", "Home energy, children's car seats, sanitary products"],
    ["Zero-rated", "0%", "Most food, children's clothing, books, newspapers"],
    ["Exempt", "N/A", "Financial services, education, health services"],
    ["Registration threshold", "£90,000", "Rolling 12-month taxable turnover"],
    ["Flat Rate Scheme limit", "£150,000", "Turnover eligibility ceiling"],
  ],
};

const vatHowToSteps = [
  "Enter an amount and select whether it is net (excluding VAT) or gross (including VAT).",
  "Select the VAT rate: 20% standard, 5% reduced, or a custom rate.",
  "The calculator instantly shows the net amount, VAT amount, and gross amount.",
  "For business use, review the quarterly VAT return estimate based on your typical monthly sales.",
];

const staticFaqs = [
  { q: "What is the UK VAT rate in 2026?", a: "The standard VAT rate is 20% and applies to most goods and services. The reduced rate of 5% applies to domestic energy, children's car seats, and certain health products. Zero-rated items (0%) include most food, children's clothing, books, and newspapers. Some services like financial services and education are VAT-exempt." },
  { q: "How do I calculate VAT from a gross price?", a: "To extract VAT from a VAT-inclusive price at the standard 20% rate, divide the gross amount by 6. For example, £120 gross ÷ 6 = £20 VAT, leaving £100 net. Alternatively, divide by 1.20 to get the net amount (£120 ÷ 1.20 = £100), then subtract: £120 − £100 = £20 VAT. For the 5% reduced rate, divide by 1.05." },
  { q: "When must I register for VAT in the UK?", a: "You must register when your taxable turnover exceeds £90,000 in any rolling 12-month period, or when you expect to exceed £90,000 in the next 30 days alone. You must register within 30 days of exceeding the threshold. Late registration can result in penalties and backdated VAT liability. You can also register voluntarily below £90,000 if it benefits your business." },
  { q: "Can I reclaim VAT as a business?", a: "Yes, if you are VAT-registered. You can reclaim VAT on business purchases (input VAT) by deducting it from the VAT you collect on sales (output VAT). You file a VAT return (usually quarterly) and pay HMRC the difference. If your input VAT exceeds output VAT (common for exporters), HMRC refunds the difference. You must keep VAT invoices for all claims." },
  { q: "What is the Flat Rate Scheme?", a: "The Flat Rate Scheme is an HMRC simplification for small businesses with turnover under £150,000. Instead of calculating VAT on every sale and purchase, you pay a fixed percentage of your gross (VAT-inclusive) turnover. Rates vary by business type: IT consultants pay 14.5%, general retailers pay 4%, and general contractors pay 9.5%. In your first VAT-registered year, you get an additional 1% discount." },
  { q: "How does Making Tax Digital affect VAT?", a: "Making Tax Digital (MTD) for VAT requires all VAT-registered businesses to keep digital records and submit VAT returns using MTD-compatible software. You can no longer submit VAT returns manually through the HMRC website. Compatible software includes Xero, QuickBooks, FreeAgent, and Sage. MTD for VAT has been mandatory for all VAT-registered businesses since April 2022." },
];

const faqSchemaEntities = staticFaqs.map(f => ({
  "@type": "Question",
  "name": f.q,
  "acceptedAnswer": { "@type": "Answer", "text": f.a }
}));

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSchemaEntities,
  };

  return (
    <>
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema]} />
      <Calculator />
      <CalculatorStaticSeo
        title={CALC_NAME}
        description={CALC_DESCRIPTION}
        slug={CALC_SLUG}
        faqs={staticFaqs}
        content={seoContent}
        rateTable={vatRateTable}
        howToSteps={vatHowToSteps}
      />
    </>
  );
}

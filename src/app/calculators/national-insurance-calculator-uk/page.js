import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "national-insurance-calculator-uk";
const CALC_NAME = "National Insurance Calculator UK 2025–26";
const CALC_DESCRIPTION = "Calculate UK National Insurance for 2025–26. Covers Class 1 employee, Class 2 and Class 4 self-employed NI, and employer contributions. Free HMRC tool.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "National Insurance Contributions (NICs) fund the UK state pension, Jobseeker's Allowance, and other benefits. There are multiple classes of NI, and which you pay depends on whether you are employed, self-employed, or an employer. NICs are separate from income tax and have their own thresholds and rates.",
  "Employed workers pay <strong>Class 1 NICs</strong>: 8% on earnings between £12,570 and £50,270 per year (the Primary Threshold to the Upper Earnings Limit), and 2% on earnings above £50,270. Your employer deducts NICs automatically through PAYE. On a £40,000 salary, your annual employee NI contribution is approximately <strong>£2,194</strong>.",
  "Self-employed workers pay <strong>Class 4 NICs</strong> on profits: 6% between £12,570 and £50,270, and 2% above £50,270. They also pay <strong>Class 2 NICs</strong> at a flat rate of £3.45 per week (£179.40/year) if profits exceed £12,570. Class 2 is collected through Self Assessment. The combined NI burden for self-employed workers is lower than for employees, but they also receive fewer benefit entitlements.",
  "Employers pay <strong>Class 1 secondary NICs</strong> at 13.8% on employee earnings above the Secondary Threshold of £9,100 (2025/26). This is a significant additional cost on top of wages. For a £40,000 employee, employer NI costs approximately <strong>£4,264 per year</strong>. Employers also pay 13.8% Class 1A NICs on most employee benefits-in-kind (company cars, private medical insurance, etc.).",
];

const niRateTable = {
  title: "2025/26 National Insurance Rates",
  headers: ["Class", "Who Pays", "Rate", "Thresholds"],
  rows: [
    ["Class 1 (employee)", "Employed workers", "8%", "£12,570 – £50,270"],
    ["Class 1 (employee, above UEL)", "Employed workers", "2%", "Above £50,270"],
    ["Class 1 (employer)", "Employers", "13.8%", "Above £9,100"],
    ["Class 2 (self-employed)", "Self-employed", "£3.45/week", "If profits > £12,570"],
    ["Class 4 (self-employed)", "Self-employed", "6%", "£12,570 – £50,270"],
    ["Class 4 (above UPL)", "Self-employed", "2%", "Above £50,270"],
    ["Class 1A (employer)", "Employers", "13.8%", "On benefits-in-kind"],
  ],
};

const niHowToSteps = [
  "Select your employment type: employed (PAYE), self-employed, or director.",
  "Enter your annual gross salary or self-employment profits.",
  "The calculator applies the correct NI class and thresholds automatically.",
  "Review your annual and monthly NI contributions, your employer's NI cost, and the impact on your total take-home pay.",
];

const staticFaqs = [
  { q: "What is the Class 1 NI rate for employees in 2025-26?", a: "Employees pay 8% on earnings between £12,570 and £50,270, and 2% on earnings above £50,270. These rates were reduced from 10% and 2% in January 2024. NI is deducted automatically through PAYE before you receive your pay. On a £35,000 salary, you pay approximately £1,794 in employee NI per year." },
  { q: "What is the Class 4 NI rate for self-employed?", a: "Self-employed workers pay Class 4 NI at 6% on profits between £12,570 and £50,270, and 2% on profits above £50,270. They also pay Class 2 NI at £3.45 per week (£179.40/year) if profits exceed £12,570. Both are collected through Self Assessment. The self-employed NI rates are lower than employee rates but provide fewer benefit entitlements." },
  { q: "Do I pay NI if I earn under £12,570?", a: "No. The Primary Threshold for employee NI and the Lower Profits Limit for self-employed Class 4 NI are both £12,570 for 2025/26. Earnings below this amount are NI-free. However, employees earning between £6,396 and £12,570 are treated as if they paid NI (building pension credits) without actually paying — this is the Lower Earnings Limit protection." },
  { q: "What is the employer NI rate?", a: "Employers pay Class 1 secondary NICs at 13.8% on employee earnings above the Secondary Threshold of £9,100. This is a hidden cost of employment that employees do not see on their payslip. For a £50,000 employee, employer NI costs approximately £5,644 per year. Employers also pay 13.8% Class 1A NI on most benefits-in-kind provided to employees." },
  { q: "How does NI affect my state pension?", a: "You need 35 qualifying years of NI contributions to receive the full new State Pension (£221.20/week in 2025/26). A qualifying year requires earnings above the Lower Earnings Limit (£6,396) if employed, or profits above £12,570 if self-employed. You can check your NI record and state pension forecast at gov.uk. Voluntary Class 3 contributions (£17.45/week) can fill gaps." },
  { q: "Is NI changing under the new government budget?", a: "The employer NI threshold was lowered from £9,100 and the rate of 13.8% applies from this threshold. The employee rates of 8%/2% have remained stable since the reductions in 2024. Always check the latest HMRC guidance for the current tax year, as NI thresholds and rates can change in the Autumn Statement or Spring Budget." },
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
        rateTable={niRateTable}
        howToSteps={niHowToSteps}
      />
    </>
  );
}

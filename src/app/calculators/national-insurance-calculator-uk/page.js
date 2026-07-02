import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "national-insurance-calculator-uk";
const CALC_NAME = "National Insurance Calculator UK 2026/27";
const CALC_DESCRIPTION = "Work out your 2026/27 UK National Insurance in seconds — Class 1 employee, Class 4 self-employed, and employer NI at current HMRC rates. Free, no sign-up.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "National Insurance Contributions (NICs) fund the UK state pension, Jobseeker's Allowance, and other benefits. There are multiple classes of NI, and which you pay depends on whether you are employed, self-employed, or an employer. NICs are separate from income tax and have their own thresholds and rates.",
  "Employed workers pay <strong>Class 1 NICs</strong>: 8% on earnings between £12,570 and £50,270 per year (the Primary Threshold to the Upper Earnings Limit), and 2% on earnings above £50,270. Your employer deducts NICs automatically through PAYE. On a £40,000 salary, your annual employee NI contribution is approximately <strong>£2,194</strong>.",
  "Self-employed workers pay <strong>Class 4 NICs</strong> on profits: 6% between £12,570 and £50,270, and 2% above £50,270, collected through Self Assessment. <strong>Class 2 NICs are no longer compulsory</strong>: since April 2024, anyone with profits above the Small Profits Threshold (£7,105 for 2026/27) is treated as having paid Class 2 automatically, keeping their State Pension record intact at no cost. Those with profits below £7,105 can pay voluntary Class 2 at £3.65 per week to protect their record. The combined NI burden for self-employed workers is lower than for employees, but they also receive fewer benefit entitlements.",
  "Employers pay <strong>Class 1 secondary NICs</strong> at 15% on employee earnings above the Secondary Threshold of £5,000 (both the rate and threshold changed on 6 April 2025 and remain in force for 2026/27). This is a significant additional cost on top of wages. For a £40,000 employee, employer NI costs approximately <strong>£5,250 per year</strong>. Eligible businesses can offset up to £10,500 of their total employer NI with the Employment Allowance — and from April 2026 the previous £100,000 eligibility cap is removed, so all eligible employers can claim. Employers also pay 15% Class 1A NICs on most employee benefits-in-kind (company cars, private medical insurance, etc.).",
];

const niRateTable = {
  title: "2026/27 National Insurance Rates",
  headers: ["Class", "Who Pays", "Rate", "Thresholds"],
  rows: [
    ["Class 1 (employee)", "Employed workers", "8%", "£12,570 – £50,270"],
    ["Class 1 (employee, above UEL)", "Employed workers", "2%", "Above £50,270"],
    ["Class 1 (employer)", "Employers", "15%", "Above £5,000"],
    ["Class 2 (voluntary)", "Self-employed below £7,105 profits", "£3.65/week", "Treated as paid above £7,105"],
    ["Class 4 (self-employed)", "Self-employed", "6%", "£12,570 – £50,270"],
    ["Class 4 (above UPL)", "Self-employed", "2%", "Above £50,270"],
    ["Class 1A (employer)", "Employers", "15%", "On benefits-in-kind"],
  ],
};

const niHowToSteps = [
  "Select your employment type: employed (PAYE), self-employed, or employer.",
  "Enter your annual gross salary or self-employment profits.",
  "The calculator applies the correct NI class and thresholds automatically.",
  "Review your annual and monthly NI contributions, your employer's NI cost, and the impact on your total take-home pay.",
];

const staticFaqs = [
  { q: "What is the Class 1 NI rate for employees in 2026/27?", a: "Employees pay 8% on earnings between £12,570 and £50,270, and 2% on earnings above £50,270 — unchanged from 2025/26, with thresholds frozen. NI is deducted automatically through PAYE before you receive your pay. On a £35,000 salary, you pay approximately £1,794 in employee NI per year." },
  { q: "What is the Class 4 NI rate for self-employed in 2026/27?", a: "Self-employed workers pay Class 4 NI at 6% on profits between £12,570 and £50,270, and 2% on profits above £50,270, collected through Self Assessment. Class 2 NI is no longer compulsory: profits above the Small Profits Threshold (£7,105) earn a qualifying State Pension year automatically at no cost, and those below it can pay voluntary Class 2 at £3.65 per week." },
  { q: "Do I pay NI if I earn under £12,570?", a: "No. The Primary Threshold for employee NI and the Lower Profits Limit for self-employed Class 4 NI are both £12,570 for 2026/27. Earnings below this amount are NI-free. However, employees earning between £6,708 and £12,570 are treated as if they paid NI (building pension credits) without actually paying — this is the Lower Earnings Limit protection." },
  { q: "What is the employer NI rate in 2026/27?", a: "Employers pay Class 1 secondary NICs at 15% on employee earnings above the Secondary Threshold of £5,000 — the rates introduced on 6 April 2025 continue for 2026/27. This is a hidden cost of employment that employees do not see on their payslip. For a £50,000 employee, employer NI costs approximately £6,750 per year. Eligible businesses can offset up to £10,500 of this with the Employment Allowance, and from April 2026 the £100,000 eligibility cap is removed. Employers also pay 15% Class 1A NI on most benefits-in-kind provided to employees." },
  { q: "How does NI affect my state pension?", a: "You need 35 qualifying years of NI contributions to receive the full new State Pension (£241.30/week in 2026/27). A qualifying year requires earnings above the Lower Earnings Limit if employed, or profits above the Small Profits Threshold (£7,105) if self-employed. You can check your NI record and state pension forecast at gov.uk. Voluntary Class 3 contributions (£18.40/week in 2026/27) can fill gaps." },
  { q: "Did National Insurance change for the 2026/27 tax year?", a: "The headline rates are unchanged for 2026/27: employees pay 8%/2%, self-employed pay 6%/2% Class 4, and employers pay 15% above £5,000. Thresholds remain frozen at £12,570 (Primary Threshold) and £50,270 (Upper Earnings Limit). The main changes are the removal of the £100,000 Employment Allowance eligibility cap and, from 6 April 2026, the end of voluntary Class 2 contributions for periods spent abroad. Always check the latest HMRC guidance, as rates can change in the Autumn Statement or Spring Budget." },
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

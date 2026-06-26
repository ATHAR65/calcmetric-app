import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";
import { buildCalculatorMetadata } from "@/lib/calculatorMeta";

const CALC_SLUG = "side-hustle-tax-calculator";
const CALC_NAME = "Side Hustle Tax Calculator 2026";
const CALC_DESCRIPTION = "Calculate taxes on your side hustle income instantly. Covers SE tax, deductions & quarterly payments for people with a W-2 job plus extra income. Free tool.";
export const metadata = buildCalculatorMetadata({ slug: CALC_SLUG, name: CALC_NAME, description: CALC_DESCRIPTION });

const seoContent = [
  "If you earn money from a side hustle in addition to your regular W-2 job, that extra income is subject to <strong>self-employment tax (15.3%)</strong> plus income tax at your marginal rate. The key difference between W-2 and side hustle income: your employer pays half of Social Security and Medicare on your salary, but on side hustle income you pay the full 15.3% yourself.",
  "For someone in the 22% federal tax bracket with a side hustle, the effective tax rate on side hustle income is approximately <strong>35% to 40%</strong> (15.3% SE tax + 22% income tax, minus the 50% SE tax deduction). This means if your side hustle earns $10,000, you can expect to owe $3,500 to $4,000 in additional taxes. State income tax adds more in most states.",
  "The IRS requires quarterly estimated tax payments if you expect to owe <strong>$1,000 or more</strong> in taxes beyond what is withheld from your W-2 job. Alternatively, you can increase your W-2 withholding to cover side hustle taxes — submit a new W-4 to your employer requesting extra withholding. This is often simpler than filing quarterly payments and avoids the risk of underpayment penalties.",
  "Common deductible side hustle expenses include: home office (simplified method: $5/sq ft, max 300 sq ft = $1,500), internet and phone (business percentage), supplies and equipment, software subscriptions, mileage ($0.725/mile in 2026), professional development, and health insurance premiums if not covered by your employer. Keep receipts and separate business transactions in a dedicated bank account.",
];

const sideHustleHowToSteps = [
  "Enter your W-2 salary (so the calculator knows your income tax bracket and can estimate the marginal impact of side hustle income).",
  "Enter your total side hustle gross revenue from all sources — freelance, gig work, selling online, consulting, tutoring, etc.",
  "Enter business deductions: home office, mileage, supplies, software, phone, internet (business % only).",
  "Review your additional tax owed: SE tax on side hustle income, extra income tax at your marginal rate, and recommended quarterly payment amounts.",
];

const staticFaqs = [
  { q: "How much tax do I pay on side hustle income?", a: "Side hustle income is subject to 15.3% self-employment tax (Social Security + Medicare) plus income tax at your marginal federal rate (typically 12%–32% depending on your total income). After the 50% SE tax deduction, most side hustlers pay an effective rate of 25% to 40% on their extra income. State income tax adds to this in most states." },
  { q: "Do I need to pay quarterly taxes on my side hustle?", a: "Yes, if you expect to owe $1,000 or more in taxes beyond your W-2 withholding. The 2026 quarterly due dates are April 15, June 16, September 15, and January 15 (2027). An alternative is to increase your W-2 withholding by filing a new W-4 with your employer — add extra withholding on Line 4(c) to cover your estimated side hustle tax." },
  { q: "What side hustle expenses are deductible?", a: "Any expense that is ordinary and necessary for your side hustle is deductible. Common deductions: home office ($5/sq ft simplified method, max $1,500), vehicle mileage ($0.725/mile in 2026), phone and internet (business percentage), supplies, equipment under $2,500 (de minimis safe harbor), software subscriptions, professional development, and health insurance if not employer-covered." },
  { q: "Do I need a 1099 to report side hustle income?", a: "No. You must report all side hustle income on your tax return regardless of whether you receive a 1099. Clients must send you a 1099-NEC if they paid you $600 or more, but even $200 in freelance income with no 1099 is taxable. Report all self-employment income on Schedule C (Profit or Loss from Business) of your Form 1040." },
  { q: "Can I deduct side hustle losses against my W-2 income?", a: "Yes, if your side hustle is a legitimate business (not a hobby). Business losses on Schedule C reduce your overall adjusted gross income, which can lower the tax on your W-2 income. However, the IRS may challenge repeated losses as a hobby — the general rule is your business should show a profit in 3 out of 5 years, though this is not an absolute test." },
  { q: "Should I form an LLC for my side hustle?", a: "An LLC is not required for tax deductions — sole proprietors get the same deductions. An LLC provides liability protection (separating personal and business assets) and can look more professional to clients. For tax purposes, a single-member LLC is treated the same as a sole proprietorship (Schedule C) unless you elect S-Corp taxation, which is typically only beneficial above $40K–$50K in net profit." },
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
        howToSteps={sideHustleHowToSteps}
      />
    </>
  );
}

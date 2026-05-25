"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(2) + "%";

export default function IRSMileageDeductionCalculator() {
  const [purpose, setPurpose] = useState("business");
  const [weeklyMiles, setWeeklyMiles] = useState("");
  const [weeksPerYear, setWeeksPerYear] = useState("52");
  const [bracket, setBracket] = useState("22");

  const rates = { business: 0.67, medical: 0.21, charity: 0.14 };
  const mileRate = rates[purpose] || 0.67;
  const weeks = parseFloat(weeksPerYear) || 52;
  const milesWeekly = parseFloat(weeklyMiles) || 0;
  const taxBracket = parseFloat(bracket) / 100 || 0.22;

  const totalAnnualMiles = milesWeekly * weeks;
  const grossDeduction = totalAnnualMiles * mileRate;
  const taxSavings = grossDeduction * taxBracket;
  const monthlyDeduction = grossDeduction / 12;
  const monthlyTaxSavings = taxSavings / 12;
  const perMileTaxSaving = mileRate * taxBracket;

  const schemaData = {
    name: "IRS Mileage Deduction Calculator",
    description: "Calculate your IRS standard mileage deduction for 2026. Covers business $0.67/mile, medical $0.21/mile and charity $0.14/mile rates.",
    url: "https://www.themetricapp.com/calculators/irs-mileage-deduction-calculator",
  };

  return (
    <CalculatorShell
      title="IRS Mileage Deduction Calculator"
      subtitle="Calculate your exact IRS standard mileage deduction for 2026 — business at $0.67/mile, medical at $0.21/mile, and charity at $0.14/mile."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Total Annual Miles" value={totalAnnualMiles.toLocaleString("en-US")} sub={`${milesWeekly} mi/wk × ${weeks} wks`} />
          <ResultCard label="IRS Rate Per Mile" value={fmt(mileRate)} sub={purpose === "business" ? "Business $0.67" : purpose === "medical" ? "Medical $0.21" : "Charity $0.14"} />
          <ResultCard label="Gross Annual Deduction" value={fmt(grossDeduction)} highlight />
          <ResultCard label="Estimated Tax Savings" value={fmt(taxSavings)} sub={`At ${bracket}% bracket`} />
          <ResultCard label="Monthly Deduction" value={fmt(monthlyDeduction)} />
          <ResultCard label="Monthly Tax Savings" value={fmt(monthlyTaxSavings)} />
          <ResultCard label="Tax Saving Per Mile" value={fmt(perMileTaxSaving)} />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SelectField
          id="purpose"
          label="Mileage Purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          options={[
            { value: "business", label: "Business — $0.67/mile" },
            { value: "medical", label: "Medical/Moving — $0.21/mile" },
            { value: "charity", label: "Charity — $0.14/mile" },
          ]}
        />
        <InputField id="weeklyMiles" label="Weekly Miles Driven" value={weeklyMiles} onChange={(e) => setWeeklyMiles(e.target.value)} suffix="miles" placeholder="100" min="0" />
        <InputField id="weeksPerYear" label="Weeks Per Year" value={weeksPerYear} onChange={(e) => setWeeksPerYear(e.target.value)} suffix="weeks" placeholder="52" min="1" max="52" helpText="52 for year-round, fewer if seasonal" />
        <SelectField
          id="bracket"
          label="Your Federal Tax Bracket"
          value={bracket}
          onChange={(e) => setBracket(e.target.value)}
          options={[
            { value: "10", label: "10% bracket" },
            { value: "12", label: "12% bracket" },
            { value: "22", label: "22% bracket" },
            { value: "24", label: "24% bracket" },
            { value: "32", label: "32% bracket" },
            { value: "35", label: "35% bracket" },
            { value: "37", label: "37% bracket" },
          ]}
          helpText="Your marginal federal tax rate"
        />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the IRS Mileage Deduction Calculator</h2>
      <p>
        The IRS standard mileage rate is one of the most valuable tax deductions available to gig workers, freelancers, sales professionals, small business owners, and anyone who drives for work. In 2026, the rate is $0.67 per mile for business use — meaning every mile you drive for work can reduce your taxable income by $0.67. This calculator makes it easy to see exactly how much you can save.
      </p>
      <p>
        Start by selecting your <strong>Mileage Purpose</strong>: Business ($0.67/mile), Medical/Moving ($0.21/mile), or Charity ($0.14/mile). Enter your <strong>Weekly Miles Driven</strong> and <strong>Weeks Per Year</strong> (defaults to 52). Then select your <strong>Federal Tax Bracket</strong> — the calculator uses this to estimate your actual tax savings (since the deduction reduces your taxable income at your marginal rate). The tool instantly computes your total annual miles, gross deduction, estimated tax savings, monthly breakdown, and the tax saving per mile.
      </p>
      <p>
        This is essential for DoorDash drivers and Uber drivers tracking delivery miles, real estate agents visiting properties, traveling nurses claiming medical mileage, freelancers driving to client meetings, and anyone who uses their personal vehicle for business purposes. The difference between claiming the standard mileage rate and not tracking your miles can be thousands of dollars in tax savings.
      </p>

      <h2>Detailed Mileage Deduction Formula Breakdown</h2>
      <h3>IRS Standard Mileage Rates (2026)</h3>
      <p>
        The IRS sets three standard mileage rates each year based on comprehensive studies of vehicle operating costs: <strong>Business: $0.67 per mile</strong> (covers gas, maintenance, depreciation, insurance, registration), <strong>Medical/Moving: $0.21 per mile</strong> (for driving to medical appointments or moving for a job), and <strong>Charity: $0.14 per mile</strong> (for driving on behalf of charitable organizations). The business rate of $0.67 is up 1 cent from 2025 reflecting moderate increases in fuel and maintenance costs.
      </p>
      <h3>How the Deduction Works</h3>
      <p>
        Gross Deduction = Total Annual Miles × IRS Rate Per Mile. If you drive 100 business miles per week for 52 weeks: 5,200 miles × $0.67 = $3,484 annual deduction. Tax Savings = Gross Deduction × Your Marginal Tax Rate. At the 22% tax bracket: $3,484 × 0.22 = $766 tax savings. This means driving 100 miles per week for business saves you approximately $766 in federal income tax per year.
      </p>
      <h3>Standard Mileage vs Actual Expenses</h3>
      <p>
        You have two options for deducting vehicle expenses: <strong>Standard Mileage Rate</strong> (simple: track only miles) or <strong>Actual Expenses</strong> (track gas, oil changes, tires, repairs, insurance, depreciation, registration). The standard mileage rate is almost always better for gig workers who drive a lot of miles because it includes depreciation that you might not capture with actual expenses. However, if you drive an older, fully-paid-off vehicle with low operating costs, the actual expenses method might yield a higher deduction. You must choose one method per vehicle — you cannot use both. The first year you use a vehicle for business, you can choose either method. In subsequent years, you can switch from standard mileage to actual expenses but not from actual expenses to standard mileage (without IRS permission).
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>What is the IRS standard mileage rate for 2026?</h3>
      <p>
        The 2026 IRS standard mileage rates are: <strong>$0.67 per mile for business use</strong> (up 1 cent from 2025), <strong>$0.21 per mile for medical or moving purposes</strong> (unchanged from 2025), and <strong>$0.14 per mile for charitable service</strong> (set by law and rarely changes). These rates are typically announced by the IRS in late December for the following year. The rates are based on an annual study by the IRS of the fixed and variable costs of operating a vehicle, including depreciation, insurance, maintenance, repairs, tires, fuel, and registration fees. The business rate applies to vehicles used for work purposes — driving to client meetings, delivering goods, or traveling between work sites — but does NOT cover commuting between your home and regular workplace.
      </p>
      <h3>What qualifies as a deductible business mile?</h3>
      <p>
        Deductible business miles include: driving between two different work locations (e.g., from your office to a client site), driving to meet with customers or clients, driving to business-related events or conferences, driving to pick up supplies or inventory, driving to deliver orders or products (for delivery drivers), and driving between your home and a temporary work location (if the assignment is expected to last less than one year). <strong>Non-deductible miles include:</strong> commuting between your home and your regular place of business (this is considered personal commuting, not business), driving for purely personal errands, and driving your vehicle for a job as a full-time delivery driver where the vehicle is provided by your employer (your employer should be deducting the costs). The key distinction: if you are going FROM your home to your first business stop of the day or FROM your last business stop back home, those commuting miles are NOT deductible.
      </p>
      <h3>Standard mileage vs actual expenses — which gives a bigger deduction?</h3>
      <p>
        For most gig workers and small business owners, the <strong>standard mileage rate gives a bigger deduction</strong> because it includes a depreciation component that real-world expenses often miss. For example, a 2023 Toyota Camry driven 15,000 business miles: Standard mileage = 15,000 × $0.67 = $10,050 deduction. Actual expenses: 15,000 miles at 30 mpg = 500 gallons × $3.50 = $1,750 in gas, plus $800 insurance, $150 oil changes, $800 tires and maintenance, $100 registration, and $3,500 depreciation (straight-line estimate) = $7,100 total. In this case, standard mileage ($10,050) beats actual expenses ($7,100) by $2,950. However, if you drive an older vehicle with low depreciation, actual expenses may win. The best approach: run both calculations in your first year, then stick with whichever gives the larger deduction.
      </p>
      <h3>Do I need to keep a mileage log for the IRS?</h3>
      <p>
        <strong>Yes — the IRS requires contemporaneous mileage records.</strong> You need to document each business trip: date, starting and ending odometer readings, destination, business purpose, and total miles. A paper logbook kept in your glove box works. But digital mileage tracking apps like Stride, MileIQ, Everlance, or QuickBooks Self-Employed are far easier and more IRS-compliant (they automatically log trips via GPS and let you classify each trip as business or personal). If you are audited, the IRS will ask for your mileage log. Without one, they may disallow your entire mileage deduction. Courts have consistently upheld the IRS position that a reconstructed log (created after the fact) is not sufficient — you must have recorded miles at or near the time of each trip.
      </p>
      <h3>Can I deduct mileage AND other car expenses together?</h3>
      <p>
        <strong>No — you must choose either the standard mileage rate OR actual expenses for each vehicle.</strong> You cannot claim the standard mileage deduction AND also deduct individual expenses like gas, insurance, repairs, or depreciation. The standard mileage rate is meant to cover ALL vehicle operating costs. However, there are a few expenses you can deduct separately even when using the standard mileage rate: parking fees and tolls (these are separate from the mileage rate), business-related vehicle loan interest (if you are self-employed), and personal property taxes on the vehicle (if assessed as a percentage of value). You can also deduct the full cost of any business-related vehicle modifications (wraps, racks, signage) as separate business expenses.
      </p>
      <h3>What is the 2026 medical and moving mileage rate?</h3>
      <p>
        The 2026 medical mileage rate is <strong>$0.21 per mile</strong> for driving to obtain medical care (doctor visits, dentist, hospital, therapy, pharmacy for prescriptions). The moving mileage rate (for active-duty military members only, following the Tax Cuts and Jobs Act elimination of the moving expense deduction for non-military taxpayers) is also $0.21 per mile. To claim the medical mileage deduction, you must itemize deductions on Schedule A, and your total medical expenses (including mileage) must exceed 7.5% of your Adjusted Gross Income. For each medical trip, record the date, the medical provider&apos;s address, the purpose of the visit, and the round-trip miles. A single round trip to a specialist 50 miles away generates a $10.50 medical mileage deduction.
      </p>
      <h3>What apps can I use to track mileage for taxes?</h3>
      <p>
        The top mileage tracking apps in 2026 include: <strong>Stride</strong> (free, designed for gig workers, auto-detects trips, classifies by IRS category), <strong>MileIQ</strong> ($5.99/month for unlimited trips, robust IRS reporting), <strong>Everlance</strong> (free for basic, $8/month for premium with receipt scanning), <strong>QuickBooks Self-Employed</strong> ($15/month, integrates with TurboTax and QuickBooks accounting), <strong>Hurdlr</strong> (free for basic, $8/month for mileage + expense tracking), and <strong>TripLog</strong> (free for basic, $4.99/month for unlimited). Most offer automatic trip detection via GPS — you simply swipe left or right to classify each trip as business or personal. At tax time, these apps generate a standard IRS-compliant mileage log report. The cost of the app itself is a deductible business expense. For most gig workers, Stride (free) or QuickBooks Self-Employed (if you already use QuickBooks) are the best choices.
      </p>
      <h3>Can I claim mileage for driving to my regular job?</h3>
      <p>
        <strong>No — commuting between your home and your regular place of work is not deductible.</strong> The IRS considers the first and last trip of each workday to be personal commuting, regardless of distance. However, there are important exceptions: if you have a <strong>home office</strong> that qualifies as your principal place of business, then driving from your home office to a client meeting IS deductible (your commute starts from your home office, not your home). If you work at a <strong>temporary work location</strong> (expected to last less than one year), driving between your home and that location IS deductible. If you are a gig worker with no regular office (like an Uber driver), your first trip of the day to pick up your first passenger and your last trip home after dropping off your last passenger are generally considered commuting miles and are NOT deductible. The miles you drive while carrying passengers or en route to pick up a passenger ARE deductible.
      </p>

      <h2>Related Tools</h2>
      <p>Check out these other helpful calculators for mileage deductions and tax savings:</p>
      <ul>
        <li><a href="/calculators/doordash-tax-estimator">DoorDash Tax Estimator</a> — Calculate self-employment taxes and mileage deductions for delivery drivers.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Full gig economy tax estimator with mileage and expense deductions.</li>
        <li><a href="/calculators/california-1099-tax-calculator">California 1099 Tax Calculator</a> — California-specific 1099 tax calculations for freelancers.</li>
        <li><a href="/blog/irs-mileage-deduction-calculator-2026">IRS Mileage Deduction 2026 Guide</a> — Complete guide to the mileage deduction.</li>
      </ul>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "What is the IRS standard mileage rate for 2026?", acceptedAnswer: { "@type": "Answer", text: "The 2026 rates are $0.67/mile for business, $0.21/mile for medical/moving, and $0.14/mile for charity. The business rate is up 1 cent from 2025." } },
        { "@type": "Question", name: "What qualifies as a deductible business mile?", acceptedAnswer: { "@type": "Answer", text: "Deductible miles include driving between work locations, to client meetings, to business events, to pick up supplies, and to deliver orders. Commuting between home and regular workplace is NOT deductible." } },
        { "@type": "Question", name: "Standard mileage vs actual expenses — which is better?", acceptedAnswer: { "@type": "Answer", text: "For most gig workers, the standard mileage rate ($0.67/mile) gives a bigger deduction because it includes depreciation. However, older vehicles may benefit from the actual expenses method." } },
        { "@type": "Question", name: "Do I need to keep a mileage log for the IRS?", acceptedAnswer: { "@type": "Answer", text: "Yes — the IRS requires contemporaneous records of date, odometer readings, destination, business purpose, and miles for each trip. Digital apps like Stride or MileIQ are recommended." } },
        { "@type": "Question", name: "Can I deduct mileage AND other car expenses together?", acceptedAnswer: { "@type": "Answer", text: "No — you must choose either standard mileage or actual expenses per vehicle. You cannot use both methods for the same vehicle. Parking fees and tolls can be deducted separately." } },
        { "@type": "Question", name: "What is the 2026 medical and moving mileage rate?", acceptedAnswer: { "@type": "Answer", text: "The 2026 medical/moving rate is $0.21/mile. Medical mileage is deductible if you itemize and total medical expenses exceed 7.5% of AGI. Moving mileage is only for active-duty military." } },
        { "@type": "Question", name: "What apps can I use to track mileage for taxes?", acceptedAnswer: { "@type": "Answer", text: "Top mileage tracking apps include Stride (free), MileIQ ($5.99/month), Everlance, QuickBooks Self-Employed, Hurdlr, and TripLog. Most offer automatic GPS trip detection." } },
        { "@type": "Question", name: "Can I claim mileage for driving to my regular job?", acceptedAnswer: { "@type": "Answer", text: "No — commuting between home and regular workplace is not deductible. Exceptions include having a qualified home office or driving to a temporary work location (under one year)." } },
      ] }) }} />
    </>
  );
}

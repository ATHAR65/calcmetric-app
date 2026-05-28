import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Hourly to Annual Salary Calculator UK 2026: Complete Guide & Free Tool",
  description:
    "Free hourly to annual salary calculator UK 2026 guide. Convert your hourly wage to yearly pay instantly. Includes standard hours, overtime, holiday pay, and HMRC compliance for UK workers.",
  keywords: [
    "hourly to annual salary calculator uk",
    "hourly rate to annual salary uk",
    "convert hourly wage to yearly salary",
    "hourly pay calculator uk",
    "£15 an hour annual salary",
    "uk salary calculator 2026",
    "hourly rate yearly salary calculator",
    "national minimum wage uk 2026",
  ],
  openGraph: {
    title: "Hourly to Annual Salary Calculator UK 2026: Complete Guide & Free Tool",
    description:
      "Free hourly to annual salary calculator UK 2026 guide. Convert your hourly wage to yearly pay instantly. Includes standard hours, overtime, holiday pay, and HMRC compliance for UK workers.",
    url: siteUrl + "/blog/hourly-to-annual-salary-calculator-uk-2026",
    siteName: "TheMetricApp",
    type: "article",
    publishedTime: "2026-05-26",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Hourly to Annual Salary Calculator UK 2026" }],
  },
  alternates: {
    canonical: siteUrl + "/blog/hourly-to-annual-salary-calculator-uk-2026",
  },
  twitter: {
    title: "Hourly to Annual Salary Calculator UK 2026: Complete Guide & Free Tool | TheMetricApp",
  },
};

export default function HourlyToAnnualSalaryBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I convert my hourly rate to an annual salary in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multiply your hourly rate by your weekly hours, then by 52 weeks. For example, £15 per hour × 37.5 hours × 52 weeks = £29,250 per year. For a more accurate figure that accounts for statutory holiday (5.6 weeks), use 46.4 working weeks instead of 52. The annual total is the same either way — the breakdown just shows how much comes from working weeks versus holiday pay.",
        },
      },
      {
        "@type": "Question",
        name: "What is £15 an hour annually in the UK for 2025–26?",
        acceptedAnswer: {
          "@type": "Answer",
          "text": "At £15 per hour working 37.5 hours per week for 52 weeks, your annual gross salary is £29,250. This works out to approximately £2,438 per month before tax and National Insurance. After HMRC deductions (Income Tax and NI), your take-home pay would be roughly £22,000–£23,000 depending on your tax code and pension contributions.",
        },
      },
      {
        "@type": "Question",
        "name": "How many weeks per year do UK workers actually work?",
        acceptedAnswer: {
          "@type": "Answer",
          "text": "UK employees are entitled to 5.6 weeks of statutory paid holiday per year (28 days for a five-day worker). This means you're paid for 52 weeks but typically work 46.4 weeks (52 minus 5.6). Some employers offer more holiday as a benefit, which reduces working weeks further. The annual salary remains the same — your pay is simply spread across all 52 weeks of the year.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the National Minimum Wage in the UK for 2025–26?",
        acceptedAnswer: {
          "@type": "Answer",
          "text": "For the 2025–26 tax year, the National Living Wage (ages 21 and over) is £12.21 per hour. The National Minimum Wage for 18–20 year olds is £10.00, and for under-18s and apprentices it is £7.55. These rates took effect from April 1, 2025 and are enforced by HMRC. Any hourly role must legally pay at least these amounts.",
        },
      },
      {
        "@type": "Question",
        "name": "Does the hourly to annual salary calculation include overtime?",
        acceptedAnswer: {
          "@type": "Answer",
          "text": "The standard calculation uses your base hourly rate and contracted hours. If you regularly work overtime, add your average overtime hours at the appropriate rate (typically 1.5× or 2× your base rate) to get your true annual earnings. Use TheMetricApp.com's Hourly to Annual Salary Calculator UK for an instant, accurate result that includes overtime at your chosen multiplier.",
        },
      },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Hourly to Annual Salary Calculator UK 2026: Complete Guide & Free Tool",
    description:
      "Free hourly to annual salary calculator UK 2026 guide. Convert your hourly wage to yearly pay instantly. Includes standard hours, overtime, holiday pay, and HMRC compliance for UK workers.",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    author: {
      "@type": "Organization",
      name: "TheMetricApp Team",
    },
    publisher: {
      "@type": "Organization",
      name: "TheMetricApp",
      logo: {
        "@type": "ImageObject",
        url: "https://www.themetricapp.com/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.themetricapp.com/blog/hourly-to-annual-salary-calculator-uk-2026",
    },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.themetricapp.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hourly to Annual Salary Calculator UK 2026",
        item: "https://www.themetricapp.com/blog/hourly-to-annual-salary-calculator-uk-2026",
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#0D9488] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#0D9488] transition-colors">
          Blog
        </Link>
        <span>/</span>
        <span className="text-[#64748B]">Hourly to Annual Salary Calculator UK 2026</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#F0FDFA] px-3 py-1 text-xs font-semibold text-[#0D9488]">
            Salary &amp; Payroll
          </span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">
            May 2026
          </span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">
            10 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Hourly to Annual Salary Calculator UK 2026: Complete Guide &amp; Free Tool
        </h1>

        <p className="text-lg text-[#64748B] leading-relaxed">
          Convert your hourly wage to annual salary instantly with our free UK calculator.
          Includes overtime pay, statutory holiday adjustment, National Minimum Wage compliance,
          and real-world examples for the 2025–26 tax year.
        </p>

        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#E2E8F0] text-sm text-[#94A3B8]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white font-bold text-xs">
            M
          </div>
          <div>
            <p className="font-medium text-[#0F172A]">TheMetricApp Team</p>
            <p>Last Updated: May 26, 2026</p>
          </div>
        </div>
      </header>

      {/* Article content */}
      <div className="prose prose-slate max-w-none prose-headings:text-[#0F172A] prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#475569] prose-p:leading-relaxed prose-a:text-[#0D9488] prose-a:font-medium hover:prose-a:text-[#0F766E] prose-strong:text-[#0F172A] prose-ul:text-[#475569] prose-ol:text-[#475569] prose-li:leading-relaxed">

        {/* 1. Introduction */}
        <h2>Introduction</h2>
        <p>
          You&apos;ve just been offered a new job at £18 an hour. It sounds decent enough, but when you try
          to work out whether that is a fair annual salary — and how it compares to the £35,000 permanent
          role you&apos;re also considering — things get complicated. Do you multiply by 37.5 hours or 40?
          What about holiday pay? And does overtime change the picture?
        </p>
        <p>
          This is exactly the scenario thousands of UK workers face every day. Whether you are a
          full-time employee, a part-time worker, a freelancer setting your day rate, or someone
          comparing hourly contracts against salaried positions, knowing how to convert your hourly
          rate to an annual salary is an essential skill. The calculation is simple on the surface,
          but most people get it wrong by forgetting holiday entitlement, unpaid breaks, or the
          impact of overtime.
        </p>
        <p>
          That is why we built the{' '}
          <Link href="/calculators/hourly-to-annual-salary-calculator-uk">
            <strong>Hourly to Annual Salary Calculator UK</strong>
          </Link>
          . This tool gives you an instant, accurate conversion from hourly rate to yearly pay —
          including overtime at your chosen multiplier and a holiday-adjusted mode that accounts for
          the 5.6 weeks of statutory paid leave UK workers are entitled to. This guide walks you
          through every aspect of the calculation so you can understand exactly how your annual
          salary is determined and make smarter career and financial decisions.
        </p>

        {/* 2. How to Use This Calculator */}
        <h2>How to Use This Calculator</h2>
        <p>
          The{' '}
          <Link href="/calculators/hourly-to-annual-salary-calculator-uk">
            <strong>Hourly to Annual Salary Calculator UK</strong>
          </Link>{' '}
          is designed to be fast and straightforward. Here is exactly how to use it:
        </p>
        <ol>
          <li>
            <strong>Enter Your Hourly Rate</strong> — Input the gross amount your employer pays you
            per hour before any deductions (Income Tax, National Insurance, pension contributions).
            If you are salaried, divide your annual salary by your weekly hours × 52 to get your
            equivalent hourly rate.
          </li>
          <li>
            <strong>Enter Your Weekly Hours</strong> — Most full-time UK contracts are 37.5 or 40
            hours per week. Part-time workers should enter their actual contracted hours. Make sure
            you use your <em>paid</em> hours, not your total time at work (exclude unpaid lunch breaks).
          </li>
          <li>
            <strong>Add Overtime (Optional)</strong> — If you regularly work overtime, enter the
            average overtime hours per week and select your overtime rate (typically 1.5× for
            time-and-a-half or 2× for double time). The calculator will compute this automatically.
          </li>
          <li>
            <strong>Choose Your Weeks Mode</strong> — Select "52 weeks (standard)" for a quick
            estimate, or "46.4 weeks (holiday-adjusted)" if you want to see the breakdown between
            working weeks and holiday pay. The total annual figure is the same either way.
          </li>
          <li>
            <strong>Read Your Results</strong> — The calculator instantly shows your annual gross
            salary, monthly pay, weekly pay, overtime earnings, holiday pay, and your effective
            hourly rate including overtime. All figures are displayed in GBP (£).
          </li>
        </ol>

        <p>
          For a complete picture of your take-home pay after HMRC deductions, pair this calculator
          with our{' '}
          <Link href="/calculators/income-tax-calculator-uk">
            <strong>Income Tax Calculator UK</strong>
          </Link>{' '}
          to see exactly how much you will keep after Income Tax and National Insurance. And if you
          run a business on the side, our{' '}
          <Link href="/calculators/vat-calculator-uk">
            <strong>VAT Calculator UK</strong>
          </Link>{' '}
          helps you manage your VAT obligations.
        </p>

        {/* Calculator embed suggestion */}
        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#F0FDFA] to-white p-6 my-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0D9488] text-white text-2xl">
              💷
            </div>
            <div>
              <p className="font-bold text-[#0F172A] text-lg mb-1">
                Try the Calculator Now
              </p>
              <p className="text-sm text-[#64748B] mb-3">
                Enter your hourly rate and weekly hours to see your exact annual salary in seconds.
                Includes overtime and holiday pay adjustment.
              </p>
              <Link
                href="/calculators/hourly-to-annual-salary-calculator-uk"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#0D9488] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0F766E] transition-colors shadow-sm"
              >
                Open Hourly to Annual Salary Calculator UK
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Complete Formula Breakdown */}
        <h2>Complete Formula Breakdown (With 2025–26 UK Examples)</h2>
        <p>
          Understanding the maths behind the conversion helps you verify the numbers, negotiate
          with confidence, and avoid costly mistakes. Here is every formula the calculator uses,
          explained step by step with real UK examples.
        </p>

        <h3>Step 1: Calculate Annual Gross Income</h3>
        <p>
          <strong>Annual Gross Salary = Hourly Rate × Hours per Week × Weeks per Year</strong>
        </p>
        <p>
          <strong>Example:</strong> You earn <strong>£16/hour</strong> and work{' '}
          <strong>37.5 hours per week</strong> for 52 weeks.
          <br />
          Annual Gross = £16 × 37.5 × 52 = <strong>£31,200</strong>
        </p>
        <p>
          This £31,200 is your total compensation before any deductions for Income Tax, National
          Insurance, or pension contributions. From this number, HMRC will take their share based
          on the progressive tax bands for 2025–26.
        </p>

        <h3>Step 2: Account for Holiday Pay</h3>
        <p>
          UK employees are entitled to <strong>5.6 weeks of statutory paid holiday</strong> per year
          (28 days for a five-day worker). This means you are paid for 52 weeks but only physically
          work 46.4 weeks. The calculation splits your total pay into two components:
        </p>
        <ul>
          <li><strong>Working weeks pay:</strong> £16 × 37.5 × 46.4 = <strong>£27,840</strong></li>
          <li><strong>Holiday pay:</strong> £16 × 37.5 × 5.6 = <strong>£3,360</strong></li>
          <li><strong>Total:</strong> £27,840 + £3,360 = <strong>£31,200</strong></li>
        </ul>
        <p>
          The annual total is identical whether you use 52 weeks or 46.4 weeks — the breakdown just
          shows you how much of your salary comes from working versus holiday. This distinction
          becomes important when comparing hourly roles to salaried positions.
        </p>

        <h3>Step 3: Add Overtime Pay</h3>
        <p>
          <strong>Overtime Annual Pay = (Hourly Rate × Overtime Multiplier × Overtime Hours per Week) × 52</strong>
        </p>
        <p>
          <strong>Example:</strong> You regularly work <strong>5 hours of overtime per week</strong>
          at <strong>1.5× (time-and-a-half)</strong> on your £16/hour rate:
        </p>
        <ul>
          <li>Overtime hourly rate: £16 × 1.5 = <strong>£24/hour</strong></li>
          <li>Weekly overtime: £24 × 5 = <strong>£120</strong></li>
          <li>Annual overtime: £120 × 52 = <strong>£6,240</strong></li>
          <li><strong>Total Annual Salary: £31,200 + £6,240 = £37,440</strong></li>
        </ul>
        <p>
          Note: For the holiday-adjusted calculation, overtime is only applied to working weeks
          (46.4), not holiday weeks, since you do not work during holiday. The calculator handles
          this distinction automatically.
        </p>

        <h3>Step 4: Calculate Monthly and Weekly Breakdown</h3>
        <p>
          <strong>Monthly Pay = Annual Salary ÷ 12</strong><br />
          <strong>Weekly Pay = Annual Salary ÷ 52</strong>
        </p>
        <p>
          Using our example with overtime (£37,440):
        </p>
        <ul>
          <li>Monthly gross: £37,440 ÷ 12 = <strong>£3,120</strong></li>
          <li>Weekly gross: £37,440 ÷ 52 = <strong>£720</strong></li>
        </ul>
        <p>
          These monthly and weekly figures are what you will see on your payslip before any
          deductions for Income Tax and National Insurance. Your actual take-home pay will be
          lower — typically 20–30% less depending on your tax code and pension contributions.
        </p>

        <h3>Step 5: Calculate Effective Hourly Rate</h3>
        <p>
          <strong>Effective Hourly Rate = Total Annual Pay ÷ Total Hours Worked</strong>
        </p>
        <p>
          This is a useful metric for comparing roles with different overtime patterns. Using our
          example:
        </p>
        <ul>
          <li>Total hours worked: (37.5 + 5) × 46.4 = <strong>1,972 hours</strong></li>
          <li>Effective hourly rate: £37,440 ÷ 1,972 = <strong>£18.99/hour</strong></li>
        </ul>
        <p>
          Your effective rate (£18.99) is higher than your base rate (£16) because it factors in
          the overtime premium and holiday pay. This is the number to use when comparing this role
          against salaried positions or freelance contracts.
        </p>

        {/* 4. UK Minimum Wage & Legal Requirements */}
        <h2>UK National Minimum Wage and Legal Requirements for 2025–26</h2>
        <p>
          Understanding the legal minimum pay rates is essential when calculating annual salaries
          from hourly wages. From April 1, 2025, the following rates apply across the UK:
        </p>
        <ul>
          <li><strong>National Living Wage (21+):</strong> £12.21 per hour — the highest-ever rate, taking over from the previous £11.44 National Minimum Wage for this age group. A full-time worker (37.5 hrs/wk) at this rate earns £12.21 × 37.5 × 52 = <strong>£23,810 annually</strong>.</li>
          <li><strong>National Minimum Wage (18–20):</strong> £10.00 per hour — a full-time worker at this rate earns £10.00 × 37.5 × 52 = <strong>£19,500 annually</strong>.</li>
          <li><strong>National Minimum Wage (Under 18):</strong> £7.55 per hour.</li>
          <li><strong>Apprentice Rate:</strong> £7.55 per hour (applies to apprentices under 19, or those aged 19+ in their first year of apprenticeship).</li>
        </ul>
        <p>
          These rates are enforced by HMRC, and employers who pay below the legal minimum face
          penalties, back-pay orders, and potential prosecution. Any hourly role you consider must
          pay at least the rate applicable to your age group.
        </p>

        <h3>Maximum Working Hours and Opt-Out Agreements</h3>
        <p>
          Under the Working Time Regulations 1998, UK workers cannot be forced to work more than an
          average of <strong>48 hours per week</strong> (calculated over a 17-week reference period).
          However, you can sign a voluntary opt-out agreement if you want to work more. This is common
          in industries like finance, law, and construction. When calculating your annual salary with
          overtime, make sure your combined hours (base + overtime) do not exceed 48 hours per week
          on average unless you have signed an opt-out.
        </p>

        {/* 5. Real-Life Examples */}
        <h2>Real-Life Examples: Three UK Salary Scenarios for 2025–26</h2>

        <h3>Scenario 1: Full-Time Office Worker — Manchester</h3>
        <p>
          Emma works as a customer service manager in Manchester, earning <strong>£14.50/hour</strong>,
          working <strong>37.5 hours per week</strong>. She does not work overtime.
        </p>
        <ul>
          <li>Annual Gross: £14.50 × 37.5 × 52 = <strong>£28,275</strong></li>
          <li>Holiday Pay: £14.50 × 37.5 × 5.6 = <strong>£3,045</strong></li>
          <li>Monthly Gross: £28,275 ÷ 12 = <strong>£2,356</strong></li>
          <li>Income Tax (est.): ~£3,141 (basic rate on ~£15,705 taxable income)</li>
          <li>National Insurance (est.): ~£1,256 (8% on earnings above £12,570)</li>
          <li><strong>Estimated Take-Home: ~£23,878 per year (~£1,990 per month)</strong></li>
        </ul>
        <p>
          Emma&apos;s effective tax rate is approximately 15.6%. She can comfortably afford a one-bedroom
          flat in Manchester (average £950–£1,100/month) while saving for a house deposit. Compared to
          a similar role in London paying £17/hour, Emma actually has more disposable income due to
          Manchester&apos;s significantly lower cost of living and rent prices.
        </p>

        <h3>Scenario 2: Skilled Tradesperson with Regular Overtime — Birmingham</h3>
        <p>
          Mark is an electrician in Birmingham earning <strong>£19/hour</strong> for his base
          <strong>40-hour week</strong>, plus an average of <strong>6 overtime hours per week</strong>
          at <strong>1.5× time-and-a-half</strong>.
        </p>
        <ul>
          <li>Base Annual: £19 × 40 × 52 = <strong>£39,520</strong></li>
          <li>Overtime Annual: (£19 × 1.5 × 6) × 52 = <strong>£8,892</strong></li>
          <li><strong>Total Annual Gross: £48,412</strong></li>
          <li>Monthly Gross: £48,412 ÷ 12 = <strong>£4,034</strong></li>
          <li>Effective Hourly Rate: £48,412 ÷ (46 × 46.4) = <strong>£22.68/hour</strong></li>
          <li>Income Tax (est.): ~£7,886 (20% higher rate portion on income above £50,270)</li>
          <li>National Insurance (est.): ~£3,027 (8% up to £50,270, 2% above)</li>
          <li><strong>Estimated Take-Home: ~£37,499 per year (~£3,125 per month)</strong></li>
        </ul>
        <p>
          Mark&apos;s overtime significantly boosts his annual income — his effective rate of £22.68/hour
          is 19% higher than his base rate. However, he is close to the higher-rate tax threshold
          (£50,270), so additional overtime would be taxed at 40% (plus 2% NI), meaning he keeps
          only 58p of every extra £1 earned. This is a common scenario where using the calculator
          to model different overtime levels helps with financial planning.
        </p>

        <h3>Scenario 3: Part-Time Retail Worker with Variable Hours — Leeds</h3>
        <p>
          Priya works part-time at a clothing retailer in Leeds earning <strong>£11.50/hour</strong>,
          working <strong>22 hours per week</strong> (just above the National Living Wage of £12.21
          for under-21s — Priya is 19).
        </p>
        <ul>
          <li>Annual Gross: £11.50 × 22 × 52 = <strong>£13,156</strong></li>
          <li>Personal Allowance: £12,570 (tax-free)</li>
          <li>Taxable Income: £13,156 − £12,570 = <strong>£586</strong></li>
          <li>Income Tax: £586 × 20% = <strong>£117</strong></li>
          <li>National Insurance: £586 × 8% = <strong>£47</strong></li>
          <li><strong>Estimated Take-Home: ~£12,992 per year (~£1,083 per month)</strong></li>
        </ul>
        <p>
          Priya benefits enormously from the personal allowance — £12,570 of her income is completely
          tax-free, and she pays only the basic rate on the small amount above that. Her effective tax
          rate is just 1.2%. If Priya increases her hours to 25 per week (£14,950 annually), she
          would still pay very little tax. This illustrates why understanding the personal allowance
          is so important for part-time workers considering increasing their hours.
        </p>

        {/* 6. Tips to Get the Best Result */}
        <h2>Tips to Maximise Your Hourly to Annual Salary Calculations</h2>
        <ol>
          <li>
            <strong>Use the holiday-adjusted calculation when comparing job offers.</strong> When
            comparing an hourly role against a salaried position, always use the 46.4-week calculation
            on the hourly side. Salaried employees get paid holiday as standard — your comparison
            should reflect that. The calculator&apos;s holiday-adjusted mode does this automatically.
          </li>
          <li>
            <strong>Track your overtime for at least 12 weeks.</strong> Don&apos;t guess your average
            overtime hours based on a single busy week. Review your last 12 weeks of payslips and
            calculate the true average. Use the{' '}
            <Link href="/calculators/hourly-to-annual-salary-calculator-uk">
              <strong>Hourly to Annual Salary Calculator UK</strong>
            </Link>{' '}
            to model different overtime scenarios and see how small changes in overtime hours impact
            your annual income.
          </li>
          <li>
            <strong>Check your contract for the exact overtime rate.</strong> Some employers pay
            1.5× for weekday overtime but 2× for weekends and bank holidays. If you consistently
            work different types of overtime, calculate each separately using the calculator for a
            more accurate annual figure.
          </li>
          <li>
            <strong>Account for unpaid breaks.</strong> Your contract might say "40 hours per week"
            but include a 30-minute unpaid lunch each day. That is 2.5 unpaid hours per week, or
            130 hours per year — worth £1,950 at £15/hour. Always use your actual paid hours, not
            your total time at work.
          </li>
          <li>
            <strong>Factor in pension contributions.</strong> If your employer offers a workplace
            pension (auto-enrolment), your minimum contribution is 5% and your employer contributes
            at least 3%. This reduces your take-home pay but builds long-term savings. The calculator
            focuses on gross pay — use our{' '}
            <Link href="/calculators/income-tax-calculator-uk">
              <strong>Income Tax Calculator UK</strong>
            </Link>{' '}
            for net pay after all deductions.
          </li>
          <li>
            <strong>Revisit your numbers when your rate changes.</strong> If you get a pay rise,
            switch jobs, or change your hours, re-run the calculation. A small hourly increase of
            £1 can mean an extra £1,950–£2,080 per year at full-time hours — enough to cover a
            significant portion of your annual bills.
          </li>
          <li>
            <strong>Use the calculator for salary negotiations.</strong> When negotiating a pay
            rise or discussing a new role, having an accurate annual figure ready shows you have
            done your homework. Use the free{' '}
            <Link href="/calculators/hourly-to-annual-salary-calculator-uk">
              <strong>Hourly to Annual Salary Calculator UK</strong>
            </Link>{' '}
            at TheMetricApp.com to generate your numbers in seconds.
          </li>
        </ol>

        {/* 7. Common Mistakes to Avoid */}
        <h2>Common Mistakes People Make When Converting Hourly to Annual Salary</h2>
        <ol>
          <li>
            <strong>Multiplying by 52 without considering holiday.</strong> Most people assume they
            work 52 weeks a year, but statutory holiday means you are paid for 52 weeks while
            working 46.4. The total annual pay is the same either way, but using 52 weeks in a
            comparison against a salaried role can be misleading if the salaried role explicitly
            includes paid holiday.
          </li>
          <li>
            <strong>Forgetting unpaid breaks.</strong> Your contract may say "40 hours per week"
            but include unpaid breaks. If you have a 30-minute unpaid lunch 5 days per week, your
            actual paid hours are 37.5, not 40. Using the wrong hours figure can overstate your
            annual salary by 6.7% or more.
          </li>
          <li>
            <strong>Ignoring overtime in base salary comparisons.</strong> When comparing two job
            offers, a role with a lower base rate but guaranteed overtime could pay more than a
            higher base rate with no overtime. Always use the calculator to model the total
            compensation including expected overtime.
          </li>
          <li>
            <strong>Confusing gross and net pay.</strong> Your annual gross salary can be 20–35%
            higher than what actually lands in your bank account after HMRC deductions (Income Tax,
            National Insurance, pension). A £30,000 gross salary typically yields £22,000–£24,000
            take-home. Use the{' '}
            <Link href="/calculators/income-tax-calculator-uk">
              <strong>Income Tax Calculator UK</strong>
            </Link>{' '}
            to see your net figure.
          </li>
          <li>
            <strong>Not checking the National Minimum Wage.</strong> Any hourly role must pay at
            least the legal minimum for your age group (£12.21 for 21+, £10.00 for 18–20 in 2025–26).
            If an employer offers less, they are breaking the law. Report them to HMRC.
          </li>
          <li>
            <strong>Assuming all overtime is paid at the same rate.</strong> UK employment law does
            not guarantee overtime pay — check your contract. Common rates are 1.5× (weekday),
            2× (weekend/bank holiday), or "time off in lieu" (TOIL) instead of pay. Each scenario
            gives a different annual figure.
          </li>
        </ol>

        {/* 8. FAQ Section */}
        <h2>Frequently Asked Questions</h2>

        <div className="not-prose space-y-4 my-8">
          {[
            {
              q: "How do I convert my hourly rate to an annual salary in the UK?",
              a: "Multiply your hourly rate by your weekly hours, then by 52 weeks. For example, £15 per hour × 37.5 hours × 52 weeks = £29,250 per year. For a more accurate figure that accounts for statutory holiday (5.6 weeks), use 46.4 working weeks instead of 52. The annual total is the same either way — the breakdown just shows how much comes from working weeks versus holiday pay.",
            },
            {
              q: "What is £15 an hour annually in the UK for 2025–26?",
              a: "At £15 per hour working 37.5 hours per week for 52 weeks, your annual gross salary is £29,250. This works out to approximately £2,438 per month before tax and National Insurance. After HMRC deductions (Income Tax and NI), your take-home pay would be roughly £22,000–£23,000 depending on your tax code and pension contributions.",
            },
            {
              q: "How many weeks per year do UK workers actually work?",
              a: "UK employees are entitled to 5.6 weeks of statutory paid holiday per year (28 days for a five-day worker). This means you're paid for 52 weeks but typically work 46.4 weeks (52 minus 5.6). Some employers offer more holiday as a benefit, which reduces working weeks further. The annual salary remains the same — your pay is simply spread across all 52 weeks of the year.",
            },
            {
              q: "What is the National Minimum Wage in the UK for 2025–26?",
              a: "For the 2025–26 tax year, the National Living Wage (ages 21 and over) is £12.21 per hour. The National Minimum Wage for 18–20 year olds is £10.00, and for under-18s and apprentices it is £7.55. These rates took effect from April 1, 2025 and are enforced by HMRC. Any hourly role must legally pay at least these amounts.",
            },
            {
              q: "Does the hourly to annual salary calculation include overtime?",
              a: "The standard calculation uses your base hourly rate and contracted hours. If you regularly work overtime, add your average overtime hours at the appropriate rate (typically 1.5× or 2× your base rate) to get your true annual earnings. Use TheMetricApp.com's Hourly to Annual Salary Calculator UK for an instant, accurate result that includes overtime at your chosen multiplier.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all duration-200 hover:border-[#0D9488]/30"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#0F172A] hover:text-[#0D9488] transition-colors list-none">
                <span>{faq.q}</span>
                <svg
                  className="h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-5 pb-4 pt-1 text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9]">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* 9. Conclusion */}
        <h2>Conclusion: Know Your Annual Salary, Maximise Your Earnings</h2>
        <p>
          Converting your hourly rate to an annual salary is one of the most fundamental financial
          calculations you will make as a UK worker. Whether you are evaluating a new job offer,
          negotiating a pay rise, setting freelance day rates, or simply trying to budget more
          accurately, having an instant, reliable conversion at your fingertips saves time and
          prevents expensive mistakes.
        </p>
        <p>
          Our{' '}
          <Link href="/calculators/hourly-to-annual-salary-calculator-uk">
            <strong>Hourly to Annual Salary Calculator UK</strong>
          </Link>{' '}
          gives you a complete, instant analysis of your annual pay in under 30 seconds. From base
          salary and overtime calculations to holiday pay breakdowns and effective hourly rates —
          everything you need to understand your true earnings is one click away.
        </p>
        <p>
          <strong>Your next steps:</strong>
        </p>
        <ol>
          <li>
            Open the{' '}
            <Link href="/calculators/hourly-to-annual-salary-calculator-uk">
              <strong>Hourly to Annual Salary Calculator UK</strong>
            </Link>{' '}
            and run your numbers right now.
          </li>
          <li>
            Check your take-home pay using our{' '}
            <Link href="/calculators/income-tax-calculator-uk">
              <strong>Income Tax Calculator UK</strong>
            </Link>{' '}
            — the difference between gross and net can be eye-opening.
          </li>
          <li>
            If you run a business or freelance on the side, use our{' '}
            <Link href="/calculators/vat-calculator-uk">
              <strong>VAT Calculator UK</strong>
            </Link>{' '}
            to stay compliant with HMRC.
          </li>
          <li>
            Revisit your numbers annually — as the National Minimum Wage rises and your career
            progresses, your calculations should be updated too.
          </li>
          <li>
            Share TheMetricApp.com with colleagues and friends who might find these free tools
            useful. No sign-up required, just fast, accurate results.
          </li>
        </ol>
        <p>
          For further reading, explore our{' '}
          <Link href="/blog">
            <strong>Blog</strong>
          </Link>{' '}
          for more UK financial guides, and check out our full range of free calculators across{' '}
          <Link href="/">
            <strong>TheMetricApp</strong>
          </Link>
          .
        </p>
      </div>

      {/* Pinterest-Style Image Prompts */}
      <section className="mt-16 pt-10 border-t border-[#E2E8F0]">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">
          Pinterest-Style Image Ideas for This Article
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              prompt:
                "A clean infographic titled 'Hourly to Annual Salary UK Formula' showing: Hourly Rate × Hours per Week × 52 Weeks = Annual Salary. Example: £15 × 37.5 × 52 = £29,250. Side note: 'Holiday adjustment: 46.4 weeks also available.' GBP symbols. UK flag. Minimal teal and white design. Pinterest vertical pin, 1000x1500px.",
              label: "Hourly to Annual Formula",
            },
            {
              prompt:
                "Comparison infographic: 52 weeks vs 46.4 weeks (holiday-adjusted). Left side: £15 × 37.5 × 52 = £29,250. Right side split into 'Working weeks £26,100' and 'Holiday pay £3,150' totalling £29,250. Bold 'Same total, clearer breakdown' text. GBP symbols. Pinterest vertical pin, 1000x1500px.",
              label: "Standard vs Holiday-Adjusted Comparison",
            },
            {
              prompt:
                "A 5-step visual guide: Step 1 'Enter Hourly Rate', Step 2 'Enter Weekly Hours', Step 3 'Add Overtime (optional)', Step 4 'Choose 52 or 46.4 weeks', Step 5 'See Your Annual Salary'. Each step with a simple icon. Modern flat design with teal and slate colours. Pinterest vertical pin, 1000x1500px.",
              label: "5-Step Calculator Guide",
            },
            {
              prompt:
                "Bold text overlay on a UK cityscape photo (London skyline): '7 Tips to Maximise Your UK Salary in 2026'. List: use holiday adjustment, track overtime, check contract rates, account for breaks, factor in pension, revisit after pay rises, use a calculator for negotiations. Teal and navy tones. Pinterest vertical pin, 1000x1500px.",
              label: "7 Tips to Maximise Your Salary",
            },
            {
              prompt:
                "Bar chart showing 2025–26 UK minimum wage rates by age: National Living Wage (21+) £12.21, 18-20 £10.00, Under 18 £7.55, Apprentice £7.55. Green bars for NLW, grey for others. UK flag icon. Clean white background. Pinterest pin format, 1000x1500px.",
              label: "UK Minimum Wage Rates 2025–26 Chart",
            },
            {
              prompt:
                "A checklist-style pin titled '6 Common UK Salary Calculation Mistakes to Avoid'. Each item with red X: multiplying by 52 without holiday, forgetting unpaid breaks, ignoring overtime, confusing gross vs net, not checking NMW, assuming all overtime is same rate. Minimal teal and white design. Pinterest vertical pin, 1000x1500px.",
              label: "Salary Calculation Mistakes Checklist",
            },
          ].map((image, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#E2E8F0] bg-white p-4 hover:shadow-lg hover:border-[#0D9488]/20 transition-all duration-200"
            >
              <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#F0FDFA] to-white border border-[#E2E8F0] flex items-center justify-center mb-3">
                <div className="text-center px-3">
                  <div className="text-3xl mb-2">
                    {["🧮", "📊", "📋", "💡", "📈", "✅"][i]}
                  </div>
                  <p className="text-xs font-semibold text-[#0D9488] uppercase tracking-wider">
                    Image Suggestion {i + 1}
                  </p>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#0F172A] mb-1.5">{image.label}</p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{image.prompt}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#94A3B8] mt-6 italic">
          Use these prompts with Midjourney, DALL·E, or Canva AI to create Pinterest-optimised
          vertical pins (1000×1500px) that drive traffic to your calculator page.
        </p>
      </section>

      {/* Data Sources & Methodology */}
      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <h3 className="text-lg font-bold text-[#0F172A] mb-4">📚 Data Sources &amp; Methodology</h3>
        <ul className="space-y-3 text-sm text-[#475569]">
          <li className="flex gap-2">
            <span className="text-[#0D9488] mt-1 shrink-0">•</span>
            <span>
              Salary and wage conversion formulas based on standard UK working hours (37.5 hours/week, 52 weeks/year) as defined by HMRC and the Office for National Statistics (ONS).
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#0D9488] mt-1 shrink-0">•</span>
            <span>
              Statutory holiday pay and overtime calculations reference the UK Employment Rights Act 1996 and the Working Time Regulations 1998, including the 5.6 weeks (28 days) statutory holiday entitlement.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#0D9488] mt-1 shrink-0">•</span>
            <span>
              National Minimum Wage and National Living Wage figures sourced from UK Government publications for the 2025–2026 tax year. Actual wages may vary by industry, age, and location.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-xs text-[#94A3B8] border-t border-[#E2E8F0] pt-4">
          <strong>Disclaimer:</strong> This content is for informational and educational purposes only and does not constitute financial, tax, or legal advice. Consult a qualified professional for advice tailored to your specific situation.
        </p>
      </div>

      {/* Author bio */}
      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white font-bold">
            M
          </div>
          <div>
            <p className="font-bold text-[#0F172A] mb-1">TheMetricApp Team</p>
            <p className="text-sm text-[#64748B] leading-relaxed">
              TheMetricApp provides free, accurate financial calculators for workers, freelancers,
              and business owners in the US and UK. Our tools help you make smarter money decisions
              — from salary conversions and tax estimates to profit margins and fee comparisons.
              Every calculator is built with transparency, accuracy, and your financial success in
              mind.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";

export const metadata = {
  title: { absolute: "About Us — Free Financial Calculators | TheMetricApp" },
  description:
    "Learn about TheMetricApp — who we are, how we build our financial calculators, where we source our data, and why millions of freelancers and small business owners trust our tools.",
  alternates: {
    canonical: "https://www.themetricapp.com/about",
  },
  openGraph: {
    title: "About Us | TheMetricApp",
    description:
      "Learn about TheMetricApp — who we are, how we build our financial calculators, where we source our data, and why millions of freelancers and small business owners trust our tools.",
    url: "https://www.themetricapp.com/about",
    siteName: "TheMetricApp",
    type: "website",
  },
  twitter: {
    title: "About Us | TheMetricApp",
    card: "summary_large_image",
  },
};

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
        <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
        <span>/</span>
        <span style={{ color: "var(--color-text-secondary)" }}>About</span>
      </nav>

      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}>
          About TheMetricApp
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)" }}>
          Free, accurate financial tools built for the self-employed, by people who understand the math.
        </p>
      </div>

      <div className="space-y-6">
        {/* Our Story */}
        <div className="rounded-[18px] border bg-white p-6 sm:p-10" style={{ borderColor: "var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
          <article className="seo-content">
            <h2>Our Story</h2>
            <p>
              TheMetricApp started in 2024 with a frustration every freelancer knows: trying to figure out
              how much money you actually keep after taxes and platform fees. The existing online calculators
              were either outdated, hidden behind paywalls, or built for traditional W-2 employees rather
              than the growing workforce of independent contractors, gig workers, and online sellers.
            </p>
            <p>
              We set out to build something different: a <strong>comprehensive library of financial
              calculators that are always free, always current, and always accurate</strong>. Every tool
              on TheMetricApp is designed for the specific needs of self-employed professionals, from
              DoorDash drivers estimating quarterly taxes to Etsy sellers calculating true profit margins
              after every fee.
            </p>
            <p>
              Today, TheMetricApp hosts <strong>85+ specialized financial calculators</strong> covering
              US and UK tax systems, e-commerce platform fees, real estate analysis, retirement planning,
              and more. We update every calculator when tax brackets, fee structures, or government
              regulations change, so you are always working with the latest numbers.
            </p>
          </article>
        </div>

        {/* Mission */}
        <div className="rounded-[18px] border bg-white p-6 sm:p-10" style={{ borderColor: "var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
          <article className="seo-content">
            <h2>Our Mission</h2>
            <p>
              Financial literacy starts with clarity. Too many self-employed workers overpay taxes,
              underestimate platform fees, or make major financial decisions based on guesswork. Our
              mission is to <strong>eliminate financial guesswork for independent workers</strong> by
              providing transparent, real-time calculators that break down every fee, tax bracket, and
              deduction.
            </p>
            <p>
              We believe that a DoorDash driver should have access to the same quality of financial
              analysis tools as someone who can afford a personal accountant. That is why TheMetricApp
              is and will always remain <strong>100% free</strong> with no paywalls, no subscription
              tiers, no premium features, and no mandatory sign-ups.
            </p>
          </article>
        </div>

        {/* What We Offer */}
        <div className="rounded-[18px] border bg-white p-6 sm:p-10" style={{ borderColor: "var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
          <article className="seo-content">
            <h2>What We Offer</h2>
            <p>
              Our platform features <strong>85+ financial calculators</strong> organized into categories
              that match how real people think about their money:
            </p>
            <ul>
              <li><strong>Tax calculators</strong> &mdash; Self-employment tax (15.3% SE rate), capital gains (short-term and long-term), crypto tax, dividend tax, state-specific income tax for California, Texas, New York, and Florida</li>
              <li><strong>Gig economy tools</strong> &mdash; DoorDash, Uber, and general 1099 contractor tax estimators with mileage deduction calculations at the 2026 IRS standard rate of $0.70/mile</li>
              <li><strong>E-commerce fee calculators</strong> &mdash; Amazon FBA fees (referral + fulfillment + storage), eBay final value fees, Etsy listing and transaction fees, Shopify subscription and payment processing costs</li>
              <li><strong>Payment processing</strong> &mdash; Stripe (2.9% + $0.30), PayPal (3.49% + $0.49), and side-by-side fee comparisons so you can choose the cheapest processor for your business</li>
              <li><strong>UK financial tools</strong> &mdash; Income tax with 2026/27 HMRC bands, National Insurance contributions, VAT (standard 20%), self-assessment, hourly-to-annual salary conversion, and UK mortgage calculators</li>
              <li><strong>Real estate</strong> &mdash; US and UK mortgage calculators, home affordability, rental property ROI with cap rate and cash-on-cash return, Airbnb host net income, refinance break-even analysis</li>
              <li><strong>Retirement planning</strong> &mdash; 401(k) growth projections, Solo 401(k) contribution limits ($23,500 employee + 25% employer in 2026), Roth IRA compound growth, Roth vs Traditional comparison</li>
              <li><strong>Debt and loans</strong> &mdash; Credit card payoff timelines, student loan repayment strategies, car loan affordability, loan comparison tools, and amortization schedules</li>
              <li><strong>Personal finance</strong> &mdash; Budget planning, emergency fund targets (3-6 months of expenses), net worth tracking, inflation impact, and cost-of-living comparisons between US cities</li>
            </ul>
            <p>
              Every calculator runs entirely in your browser using client-side JavaScript. <strong>None
              of your financial data is ever sent to our servers</strong>, which means your sensitive
              numbers never leave your device.
            </p>
          </article>
        </div>

        {/* How We Source Our Data */}
        <div className="rounded-[18px] border bg-white p-6 sm:p-10" style={{ borderColor: "var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
          <article className="seo-content">
            <h2>How We Source Our Data</h2>
            <p>
              Accuracy is non-negotiable. Every number in our calculators comes from an authoritative,
              publicly verifiable source. Here is where we get our data:
            </p>
            <ul>
              <li><strong>US federal tax rates and brackets</strong> &mdash; IRS Revenue Procedures and Publication 15-T, updated annually when the IRS releases inflation-adjusted figures (typically October/November for the following tax year)</li>
              <li><strong>Self-employment tax</strong> &mdash; IRS Schedule SE instructions: 15.3% combined rate (12.4% Social Security on income up to $176,100 in 2026, plus 2.9% Medicare with no cap)</li>
              <li><strong>State tax data</strong> &mdash; Official state tax authority publications for California (FTB), Texas (no income tax), New York (DTF), and Florida (no income tax)</li>
              <li><strong>UK tax rates</strong> &mdash; HMRC published rates and thresholds for the 2026/27 tax year, including Personal Allowance, basic/higher/additional rate bands, and National Insurance Class 1 and Class 4 contributions</li>
              <li><strong>Platform fees</strong> &mdash; Official fee schedules published by Stripe, PayPal, Amazon Seller Central, eBay, Etsy, Shopify, Upwork, and Fiverr, verified quarterly</li>
              <li><strong>Retirement contribution limits</strong> &mdash; IRS Notice on COLA increases for retirement plans: $23,500 employee 401(k) limit, $7,000 IRA limit ($8,000 if 50+) for 2026</li>
              <li><strong>Mileage rates</strong> &mdash; IRS standard mileage rate announcement (IR-2025-XX): $0.70 per mile for business use in 2026</li>
              <li><strong>Mortgage and interest rates</strong> &mdash; Freddie Mac Primary Mortgage Market Survey and Bank of England base rate publications</li>
            </ul>
            <p>
              When a source is updated, we update our calculators within 48 hours. Every calculator page
              displays a "Last updated" date so you can verify you are using current figures.
            </p>
          </article>
        </div>

        {/* Editorial Standards */}
        <div className="rounded-[18px] border bg-white p-6 sm:p-10" style={{ borderColor: "var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
          <article className="seo-content">
            <h2>Our Editorial Standards</h2>
            <p>
              Every calculator and article on TheMetricApp follows a strict editorial process:
            </p>
            <ul>
              <li><strong>Research</strong> &mdash; We identify the authoritative primary source for every data point (IRS publications, HMRC guidance, platform fee pages) before writing any content or building any formula</li>
              <li><strong>Build and verify</strong> &mdash; Calculator formulas are tested against known outputs. For example, our self-employment tax calculator is verified against IRS Form 1040-ES worksheets and Publication 505 examples</li>
              <li><strong>Cross-reference</strong> &mdash; We compare our results against established tools from TurboTax, H&amp;R Block, NerdWallet, and MoneySavingExpert to ensure our estimates fall within acceptable ranges</li>
              <li><strong>Review</strong> &mdash; Content is reviewed for accuracy, clarity, and helpfulness before publication. We follow the principles outlined in our <Link href="/editorial-policy" className="text-[var(--color-gold)] hover:underline">Editorial Policy</Link></li>
              <li><strong>Update</strong> &mdash; We monitor IRS announcements, HMRC updates, and platform fee changes to keep every calculator current throughout the year</li>
            </ul>
            <p>
              For a detailed explanation of how we create and maintain content, read our
              full <Link href="/editorial-policy" className="text-[var(--color-gold)] hover:underline">Editorial Policy</Link>.
            </p>
          </article>
        </div>

        {/* Trust & Transparency */}
        <div className="rounded-[18px] border bg-white p-6 sm:p-10" style={{ borderColor: "var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
          <article className="seo-content">
            <h2>Trust and Transparency</h2>
            <p>
              We take your trust seriously. Here is how we operate:
            </p>
            <ul>
              <li><strong>No data collection</strong> &mdash; Our calculators run entirely in your browser. We do not collect, store, or transmit your financial inputs. There are no accounts, no saved calculations, and no tracking of what numbers you enter.</li>
              <li><strong>No paywalls</strong> &mdash; Every calculator and article is free and always will be. We are supported by non-intrusive display advertising.</li>
              <li><strong>No affiliate bias</strong> &mdash; When we compare platforms (e.g., Stripe vs PayPal fees), our comparisons use real fee schedules without favoring any partner. We do not accept payment to recommend specific financial products.</li>
              <li><strong>Clear disclaimers</strong> &mdash; We are not certified financial advisors, CPAs, or tax attorneys. Our tools are designed for estimation and educational purposes. We always recommend consulting a qualified professional for decisions involving significant money.</li>
            </ul>
          </article>
        </div>

        {/* Our Audience */}
        <div className="rounded-[18px] border bg-white p-6 sm:p-10" style={{ borderColor: "var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
          <article className="seo-content">
            <h2>Who Uses TheMetricApp</h2>
            <p>
              TheMetricApp is built for people who earn money outside of traditional employment:
            </p>
            <ul>
              <li><strong>Freelancers and contractors</strong> &mdash; Web developers, writers, designers, and consultants who receive 1099 income and need to estimate quarterly tax payments</li>
              <li><strong>Gig economy workers</strong> &mdash; Uber, Lyft, DoorDash, and Instacart drivers who need to track mileage deductions and set aside the right amount for self-employment tax</li>
              <li><strong>Online sellers</strong> &mdash; Amazon FBA sellers, eBay resellers, Etsy shop owners, and Shopify merchants who need to understand their true profit after every platform fee</li>
              <li><strong>Small business owners</strong> &mdash; Sole proprietors and LLC members who manage their own taxes, retirement contributions, and business deductions</li>
              <li><strong>UK workers and self-employed</strong> &mdash; Anyone navigating PAYE, Self Assessment, National Insurance, VAT registration, and Making Tax Digital requirements</li>
              <li><strong>First-time homebuyers and investors</strong> &mdash; People researching mortgage affordability, rental property returns, and refinancing decisions</li>
            </ul>
            <p>
              Whether you are filing your first 1099 or managing a six-figure e-commerce business,
              our calculators give you the clarity to make confident financial decisions.
            </p>
          </article>
        </div>

        {/* Contact CTA */}
        <div className="rounded-[18px] border bg-white p-6 sm:p-10 text-center" style={{ borderColor: "var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}>
            Questions or Suggestions?
          </h2>
          <p className="mb-6 max-w-lg mx-auto" style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)" }}>
            We are always improving our calculators and adding new tools. If you have feedback,
            found an error, or want to suggest a new calculator, we would love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--color-navy)", fontFamily: "var(--font-body)" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

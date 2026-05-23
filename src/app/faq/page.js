import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about WiseFinanceCalc's free financial calculators — how they work, accuracy, privacy, regional support, and more.",
};

const faqCategories = [
  {
    category: "About the Calculators",
    questions: [
      {
        q: "How do your calculators work?",
        a: "All of our calculators run entirely in your browser using client-side JavaScript. When you enter a number, the calculation happens instantly on your device — no data is sent to our servers, no page reload is needed, and nothing is stored or tracked. This makes them fast, private, and reliable even with a slow internet connection.",
      },
      {
        q: "How accurate are the calculations?",
        a: "Our calculators are built using current, publicly available data from official sources — IRS tax brackets and rates, state tax authorities (e.g., California Franchise Tax Board, Texas Comptroller), platform fee schedules (Stripe, eBay, Airbnb, Upwork, Fiverr), and government incentive programs (IRA Solar Tax Credit, CA Clean Vehicle Rebate). We update our calculators whenever these sources change. However, individual circumstances vary, and our tools are designed for estimation and educational purposes — not as a substitute for professional advice.",
      },
      {
        q: "Can I use the results for my tax return or financial filing?",
        a: "Our calculators provide estimates to help you plan and understand your finances. They are not a substitute for professional tax preparation software or advice from a qualified CPA, tax attorney, or financial advisor. Always consult a professional for your specific financial situation, especially when filing taxes or making significant financial decisions.",
      },
      {
        q: "How often do you update tax brackets and fee structures?",
        a: "We update our calculators as soon as new data becomes available. Tax brackets are typically updated annually (IRS inflation adjustments, state tax changes), while platform fees (Stripe, eBay, etc.) are updated whenever the provider announces changes. We monitor official sources and update within days of any published changes.",
      },
    ],
  },
  {
    category: "Privacy & Data",
    questions: [
      {
        q: "Do you store the numbers I enter into the calculators?",
        a: "No. All calculations happen in your browser. The numbers you enter are never sent to our servers, never stored in a database, and never accessible to us or any third party. Once you close or refresh the page, all entered values are cleared. This is a core design principle of WiseFinanceCalc.",
      },
      {
        q: "Why does the site use cookies?",
        a: 'Like most websites, we use cookies for essential functionality and to serve advertisements through Google AdSense. We do not use cookies to track the numbers you enter into calculators. You can learn more about our cookie usage in our <a href="/privacy-policy" class="text-[#0D9488] hover:text-[#0F766E] underline">Privacy Policy</a> and manage your preferences through our cookie consent banner.',
      },
      {
        q: "Do you sell my data?",
        a: "No. We do not sell, rent, or share your personal information with third parties for their own marketing purposes. We use Google AdSense to display ads, which may use cookies for personalized advertising, but you can opt out of personalized ads through your Google Ads Settings.",
      },
    ],
  },
  {
    category: "Regional Availability",
    questions: [
      {
        q: "Do you have UK-specific calculators?",
        a: "Yes! Several of our calculators work for UK users out of the box, including the Airbnb Host Net Income, eBay Seller Fee & Profit, Freelancer Platform Fee Comparison, Stripe Fee Calculator, EV vs Gas Savings, and E-Commerce Net Profit Margin calculators. We are actively expanding our UK-specific offerings with region-adjusted tax logic and currency options.",
      },
      {
        q: "Which calculators are US-only?",
        a: "Three of our calculators are currently US-specific: the DoorDash Tax Estimator (built around IRS self-employment tax rules), the Texas Paycheck Calculator (US federal tax brackets with Texas-specific zero state income tax), and the California 1099 Tax Calculator (CA state tax brackets and IRS self-employment tax). We are exploring UK equivalents for these.",
      },
      {
        q: "Will you add calculators for other countries?",
        a: 'We are actively expanding! Our roadmap includes calculators tailored for Canada, Australia, and select EU markets. If you have a specific request, please reach out through our <a href="/contact" class="text-[#0D9488] hover:text-[#0F766E] underline">Contact page</a>.',
      },
    ],
  },
  {
    category: "Using the Site",
    questions: [
      {
        q: "Is WiseFinanceCalc really free?",
        a: "Yes — 100% free. No paywalls, no subscription tiers, no premium features, no sign-up required. Our calculators are supported by non-intrusive advertisements through Google AdSense. You can use every calculator as many times as you want, completely free, forever.",
      },
      {
        q: "Can I use WiseFinanceCalc on my phone or tablet?",
        a: "Absolutely. The entire site is fully responsive and works on any device — desktop, tablet, and mobile. All calculators are designed with touch-friendly inputs and adapt to any screen size.",
      },
      {
        q: "What if my calculator shows a result I don't understand?",
        a: 'Each calculator page includes a detailed explanation section below the results that breaks down the formulas and assumptions used. If you still have questions, feel free to <a href="/contact" class="text-[#0D9488] hover:text-[#0F766E] underline">contact us</a> and we will be happy to explain.',
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "Do I need to create an account?",
        a: "No. WiseFinanceCalc does not require any account creation, email sign-up, or login. Simply open any calculator and start using it immediately.",
      },
      {
        q: "Can I link to or embed a calculator on my own website?",
        a: 'You are welcome to link to any WiseFinanceCalc calculator page from your website or blog. However, embedding our calculators in an iframe or reproducing our content without attribution is not permitted. Please see our <a href="/terms" class="text-[#0D9488] hover:text-[#0F766E] underline">Terms &amp; Conditions</a> for details.',
      },
      {
        q: "What browsers do you support?",
        a: "WiseFinanceCalc works on all modern browsers — Chrome, Firefox, Safari, and Edge (latest two versions). Our calculators use standard JavaScript and CSS that is widely supported. If you are using an older browser, some features may not work as expected.",
      },
    ],
  },
  {
    category: "Suggestions & Feedback",
    questions: [
      {
        q: "Can I request a new calculator?",
        a: 'Absolutely! We love hearing from our users. If there is a calculator you would find useful, please <a href="/contact" class="text-[#0D9488] hover:text-[#0F766E] underline">let us know</a> with details about what you would like it to calculate and which region it should target. We prioritize new calculators based on user demand.',
      },
      {
        q: "I found a bug or error. How do I report it?",
        a: 'Please <a href="/contact" class="text-[#0D9488] hover:text-[#0F766E] underline">contact us</a> with a description of the issue, which calculator you were using, the values you entered, and what result you expected. We typically fix reported bugs within 24–48 hours.',
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
          Everything you need to know about WiseFinanceCalc&apos;s calculators — how they
          work, your privacy, regional support, and more.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-6">
        {faqCategories.map((category) => (
          <div
            key={category.category}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-6">
              {category.category}
            </h2>
            <div className="space-y-6">
              {category.questions.map((item) => (
                <div
                  key={item.q}
                  className="border-b border-[#F1F5F9] pb-6 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-[#0F172A] mb-2">
                    {item.q}
                  </h3>
                  <div
                    className="text-sm sm:text-base text-[#475569] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Still have questions? */}
      <div className="mt-12 text-center rounded-2xl border border-[#0D9488]/20 bg-[#F0FDFA] p-8 shadow-sm">
        <h2 className="text-xl font-bold text-[#0F172A] mb-2">
          Still have questions?
        </h2>
        <p className="text-[#64748B] mb-4">
          We are happy to help. Reach out and we will get back to you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0D9488] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0D9488]/20 hover:bg-[#0F766E] hover:shadow-xl hover:shadow-[#0D9488]/20 transition-all duration-200"
        >
          Contact Us
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export const relatedCalculators = {
  // US Tax Calculators
  "texas-paycheck-calculator": [
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
  ],
  "california-1099-tax-calculator": [
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
  ],
  "irs-mileage-deduction-calculator": [
    { href: "/calculators/doordash-tax-estimator", title: "DoorDash Tax Estimator", icon: "🚗" },
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/ev-charging-vs-gas-savings", title: "EV vs Gas Savings", icon: "⚡" },
  ],
  "side-hustle-tax-calculator": [
    { href: "/calculators/doordash-tax-estimator", title: "DoorDash Tax Estimator", icon: "🚗" },
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
  ],
  "doordash-tax-estimator": [
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
  ],
  "capital-gains-tax-calculator": [
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/self-assessment-tax-calculator-uk", title: "Self Assessment Tax UK", icon: "📊" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
    { href: "/calculators/rental-property-roi-calculator", title: "Rental Property ROI Calculator", icon: "📊" },
  ],
  "solo-401k-contribution-calculator": [
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
  ],
  
  // E-commerce Calculators
  "paypal-fee-calculator": [
    { href: "/calculators/stripe-fee-merchant-calculator", title: "Stripe Fee Calculator", icon: "💳" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/freelancer-platform-fee-comparison", title: "Freelancer Fee Comparison", icon: "💼" },
  ],
  "stripe-fee-merchant-calculator": [
    { href: "/calculators/paypal-fee-calculator", title: "PayPal Fee Calculator", icon: "💳" },
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/amazon-fba-fee-calculator", title: "Amazon FBA Fee Calculator", icon: "📦" },
  ],
  "ebay-seller-fee-profit": [
    { href: "/calculators/amazon-fba-fee-calculator", title: "Amazon FBA Fee Calculator", icon: "📦" },
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/paypal-fee-calculator", title: "PayPal Fee Calculator", icon: "💳" },
    { href: "/calculators/stripe-fee-merchant-calculator", title: "Stripe Fee Calculator", icon: "💳" },
  ],
  "amazon-fba-fee-calculator": [
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/us-import-tariff-calculator", title: "US Import Tariff Calculator", icon: "🛃" },
    { href: "/calculators/paypal-fee-calculator", title: "PayPal Fee Calculator", icon: "💳" },
  ],
  "ecommerce-net-profit-margin": [
    { href: "/calculators/amazon-fba-fee-calculator", title: "Amazon FBA Fee Calculator", icon: "📦" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/stripe-fee-merchant-calculator", title: "Stripe Fee Calculator", icon: "💳" },
    { href: "/calculators/paypal-fee-calculator", title: "PayPal Fee Calculator", icon: "💳" },
  ],
  "freelancer-platform-fee-comparison": [
    { href: "/calculators/paypal-fee-calculator", title: "PayPal Fee Calculator", icon: "💳" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
  ],

  // Real Estate / Investment Calculators
  "rental-property-roi-calculator": [
    { href: "/calculators/airbnb-host-net-income", title: "Airbnb Host Net Income", icon: "🏠" },
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
    { href: "/calculators/residential-solar-panel-roi", title: "Solar Panel ROI", icon: "🌞" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
  ],
  "airbnb-host-net-income": [
    { href: "/calculators/rental-property-roi-calculator", title: "Rental Property ROI Calculator", icon: "📊" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
  ],
  "residential-solar-panel-roi": [
    { href: "/calculators/ev-charging-vs-gas-savings", title: "EV vs Gas Savings", icon: "⚡" },
    { href: "/calculators/rental-property-roi-calculator", title: "Rental Property ROI Calculator", icon: "📊" },
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
  ],
  "ev-charging-vs-gas-savings": [
    { href: "/calculators/residential-solar-panel-roi", title: "Solar Panel ROI", icon: "🌞" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
    { href: "/calculators/us-import-tariff-calculator", title: "US Import Tariff Calculator", icon: "🛃" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
  ],

  // UK Calculators
  "income-tax-calculator-uk": [
    { href: "/calculators/national-insurance-calculator-uk", title: "National Insurance Calculator UK", icon: "📋" },
    { href: "/calculators/self-assessment-tax-calculator-uk", title: "Self Assessment Tax UK", icon: "📊" },
    { href: "/calculators/vat-calculator-uk", title: "VAT Calculator UK", icon: "🇬🇧" },
    { href: "/calculators/mortgage-calculator-uk", title: "Mortgage Calculator UK", icon: "🏡" },
  ],
  "national-insurance-calculator-uk": [
    { href: "/calculators/income-tax-calculator-uk", title: "Income Tax Calculator UK", icon: "🇬🇧" },
    { href: "/calculators/self-assessment-tax-calculator-uk", title: "Self Assessment Tax UK", icon: "📊" },
    { href: "/calculators/vat-calculator-uk", title: "VAT Calculator UK", icon: "🇬🇧" },
    { href: "/calculators/hourly-to-annual-salary-calculator-uk", title: "Hourly to Annual Salary UK", icon: "💷" },
  ],
  "self-assessment-tax-calculator-uk": [
    { href: "/calculators/income-tax-calculator-uk", title: "Income Tax Calculator UK", icon: "🇬🇧" },
    { href: "/calculators/national-insurance-calculator-uk", title: "National Insurance Calculator UK", icon: "📋" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
  ],
  "vat-calculator-uk": [
    { href: "/calculators/income-tax-calculator-uk", title: "Income Tax Calculator UK", icon: "🇬🇧" },
    { href: "/calculators/self-assessment-tax-calculator-uk", title: "Self Assessment Tax UK", icon: "📊" },
    { href: "/calculators/national-insurance-calculator-uk", title: "National Insurance Calculator UK", icon: "📋" },
    { href: "/calculators/us-import-tariff-calculator", title: "US Import Tariff Calculator", icon: "🛃" },
  ],
  "mortgage-calculator-uk": [
    { href: "/calculators/income-tax-calculator-uk", title: "Income Tax Calculator UK", icon: "🇬🇧" },
    { href: "/calculators/national-insurance-calculator-uk", title: "National Insurance Calculator UK", icon: "📋" },
    { href: "/calculators/rental-property-roi-calculator", title: "Rental Property ROI Calculator", icon: "📊" },
    { href: "/calculators/vat-calculator-uk", title: "VAT Calculator UK", icon: "🇬🇧" },
  ],
  "hourly-to-annual-salary-calculator-uk": [
    { href: "/calculators/income-tax-calculator-uk", title: "Income Tax Calculator UK", icon: "🇬🇧" },
    { href: "/calculators/national-insurance-calculator-uk", title: "National Insurance Calculator UK", icon: "📋" },
    { href: "/calculators/self-assessment-tax-calculator-uk", title: "Self Assessment Tax UK", icon: "📊" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
  ],

  // Special/Other
  "us-import-tariff-calculator": [
    { href: "/calculators/amazon-fba-fee-calculator", title: "Amazon FBA Fee Calculator", icon: "📦" },
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/vat-calculator-uk", title: "VAT Calculator UK", icon: "🇬🇧" },
  ],

  // NEW May 2026 Calculators
  "uber-tax-calculator-2026": [
    { href: "/calculators/doordash-tax-estimator", title: "DoorDash Tax Estimator", icon: "🚗" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
  ],
  "self-employment-tax-calculator-2026": [
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
  ],
  "new-york-paycheck-calculator-2026": [
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
    { href: "/calculators/florida-paycheck-calculator-2026", title: "Florida Paycheck Calculator", icon: "🌴" },
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
  ],
  "florida-paycheck-calculator-2026": [
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
    { href: "/calculators/new-york-paycheck-calculator-2026", title: "New York Paycheck Calculator", icon: "🗽" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
  ],
  "etsy-fee-calculator-2026": [
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/paypal-fee-calculator", title: "PayPal Fee Calculator", icon: "💳" },
    { href: "/calculators/amazon-fba-fee-calculator", title: "Amazon FBA Fee Calculator", icon: "📦" },
  ],
  "shopify-profit-calculator-2026": [
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/stripe-fee-merchant-calculator", title: "Stripe Fee Calculator", icon: "💳" },
    { href: "/calculators/paypal-fee-calculator", title: "PayPal Fee Calculator", icon: "💳" },
    { href: "/calculators/amazon-fba-fee-calculator", title: "Amazon FBA Fee Calculator", icon: "📦" },
  ],
  "home-affordability-calculator-2026": [
    { href: "/calculators/mortgage-calculator-uk", title: "Mortgage Calculator UK", icon: "🏡" },
    { href: "/calculators/rental-property-roi-calculator", title: "Rental Property ROI Calculator", icon: "📊" },
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
  ],
  "dividend-tax-calculator-2026": [
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
    { href: "/calculators/crypto-tax-calculator-2026", title: "Crypto Tax Calculator", icon: "₿" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
  ],
  "amazon-seller-fee-calculator-2026": [
    { href: "/calculators/amazon-fba-fee-calculator", title: "Amazon FBA Fee Calculator", icon: "📦" },
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/us-import-tariff-calculator", title: "US Import Tariff Calculator", icon: "🛃" },
  ],
  "crypto-tax-calculator-2026": [
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
    { href: "/calculators/dividend-tax-calculator-2026", title: "Dividend Tax Calculator", icon: "📈" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
  ],

  // NEW Batch 1 — May 28, 2026
  "small-business-tax-deduction-calculator": [
    { href: "/calculators/self-employment-tax-calculator-2026", title: "Self Employment Tax Calculator", icon: "💼" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
  ],
  "gig-economy-net-income-calculator": [
    { href: "/calculators/doordash-tax-estimator", title: "DoorDash Tax Estimator", icon: "🚗" },
    { href: "/calculators/uber-tax-calculator-2026", title: "Uber Tax Calculator", icon: "🚗" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
  ],

  // NEW Batch 2 — May 28, 2026
  "credit-card-payoff-calculator": [
    { href: "/calculators/student-loan-payoff-calculator", title: "Student Loan Payoff Calculator", icon: "🎓" },
    { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", icon: "🏡" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
    { href: "/calculators/mortgage-calculator-uk", title: "Mortgage Calculator UK", icon: "🏡" },
  ],
  "student-loan-payoff-calculator": [
    { href: "/calculators/credit-card-payoff-calculator", title: "Credit Card Payoff Calculator", icon: "💳" },
    { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", icon: "🏡" },
    { href: "/calculators/mortgage-calculator-uk", title: "Mortgage Calculator UK", icon: "🏡" },
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
  ],

  // NEW Phase 3 — May 29, 2026
  "car-loan-affordability-calculator-2026": [
    { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", icon: "🏡" },
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/credit-card-payoff-calculator", title: "Credit Card Payoff Calculator", icon: "💳" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
  ],
  "retirement-savings-calculator-2026": [
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
    { href: "/calculators/car-loan-affordability-calculator-2026", title: "Car Loan Affordability Calculator", icon: "🚘" },
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
  ],
};

export default function RelatedCalculators({ currentPage }) {
  const links = relatedCalculators[currentPage] || [];
  if (links.length === 0) return null;

  return (
    <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
      <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">🔗 Related Tools</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-teal-300 hover:bg-teal-800/30 transition-colors"
          >
            <span className="text-base shrink-0">{link.icon}</span>
            <span className="font-medium">{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

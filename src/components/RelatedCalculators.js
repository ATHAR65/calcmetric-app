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

  // NEW July 4, 2026 — Marketplace & creator cluster
  "poshmark-fee-calculator": [
    { href: "/calculators/mercari-fee-calculator", title: "Mercari Fee Calculator", icon: "🛍️" },
    { href: "/calculators/depop-fee-calculator", title: "Depop Fee Calculator", icon: "🧥" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
  ],
  "mercari-fee-calculator": [
    { href: "/calculators/poshmark-fee-calculator", title: "Poshmark Fee Calculator", icon: "👗" },
    { href: "/calculators/depop-fee-calculator", title: "Depop Fee Calculator", icon: "🧥" },
    { href: "/calculators/facebook-marketplace-fee-calculator", title: "Facebook Marketplace Fees", icon: "🏪" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
  ],
  "depop-fee-calculator": [
    { href: "/calculators/poshmark-fee-calculator", title: "Poshmark Fee Calculator", icon: "👗" },
    { href: "/calculators/mercari-fee-calculator", title: "Mercari Fee Calculator", icon: "🛍️" },
    { href: "/calculators/etsy-fee-calculator-2026", title: "Etsy Fee Calculator", icon: "🧶" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
  ],
  "whatnot-fee-calculator": [
    { href: "/calculators/stockx-fee-calculator", title: "StockX Fee Calculator", icon: "👟" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/mercari-fee-calculator", title: "Mercari Fee Calculator", icon: "🛍️" },
    { href: "/calculators/self-employment-tax-calculator-2026", title: "Self Employment Tax Calculator", icon: "💼" },
  ],
  "stockx-fee-calculator": [
    { href: "/calculators/whatnot-fee-calculator", title: "Whatnot Fee Calculator", icon: "📺" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
  ],
  "facebook-marketplace-fee-calculator": [
    { href: "/calculators/mercari-fee-calculator", title: "Mercari Fee Calculator", icon: "🛍️" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/poshmark-fee-calculator", title: "Poshmark Fee Calculator", icon: "👗" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
  ],
  "onlyfans-tax-calculator": [
    { href: "/calculators/creator-tax-calculator", title: "Content Creator Tax Calculator", icon: "🎬" },
    { href: "/calculators/self-employment-tax-calculator-2026", title: "Self Employment Tax Calculator", icon: "💼" },
    { href: "/calculators/no-tax-on-tips-calculator-2026", title: "No Tax on Tips Calculator", icon: "💵" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
  ],
  "creator-tax-calculator": [
    { href: "/calculators/onlyfans-tax-calculator", title: "OnlyFans Tax Calculator", icon: "📱" },
    { href: "/calculators/tiktok-shop-earnings-calculator-2026", title: "TikTok Shop Earnings Calculator", icon: "🎵" },
    { href: "/calculators/self-employment-tax-calculator-2026", title: "Self Employment Tax Calculator", icon: "💼" },
    { href: "/calculators/small-business-tax-deduction-calculator", title: "Small Business Tax Deductions", icon: "💼" },
  ],
  "turo-profit-calculator": [
    { href: "/calculators/airbnb-host-net-income", title: "Airbnb Host Net Income", icon: "🏠" },
    { href: "/calculators/car-loan-affordability-calculator-2026", title: "Car Loan Affordability Calculator", icon: "🚘" },
    { href: "/calculators/self-employment-tax-calculator-2026", title: "Self Employment Tax Calculator", icon: "💼" },
    { href: "/calculators/ev-charging-vs-gas-savings", title: "EV vs Gas Savings", icon: "⚡" },
  ],
  "instacart-tax-calculator": [
    { href: "/calculators/doordash-tax-estimator", title: "DoorDash Tax Estimator", icon: "🚗" },
    { href: "/calculators/no-tax-on-tips-calculator-2026", title: "No Tax on Tips Calculator", icon: "💵" },
    { href: "/calculators/irs-mileage-deduction-calculator", title: "IRS Mileage Deduction Calculator", icon: "🚗" },
    { href: "/calculators/gig-economy-net-income-calculator", title: "Gig Economy Net Income", icon: "🚗" },
  ],

  // NEW July 4, 2026 — OBBBA cluster
  "no-tax-on-tips-calculator-2026": [
    { href: "/calculators/no-tax-on-overtime-calculator-2026", title: "No Tax on Overtime Calculator", icon: "⏱️" },
    { href: "/calculators/obbba-tax-savings-calculator", title: "OBBBA Tax Savings Calculator", icon: "🏛️" },
    { href: "/calculators/self-employment-tax-calculator-2026", title: "Self Employment Tax Calculator", icon: "💼" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
  ],
  "car-loan-interest-deduction-calculator-2026": [
    { href: "/calculators/car-loan-affordability-calculator-2026", title: "Car Loan Affordability Calculator", icon: "🚘" },
    { href: "/calculators/obbba-tax-savings-calculator", title: "OBBBA Tax Savings Calculator", icon: "🏛️" },
    { href: "/calculators/loan-comparison-calculator", title: "Loan Comparison Calculator", icon: "💰" },
    { href: "/calculators/amortization-calculator", title: "Amortization Calculator", icon: "📊" },
  ],
  "senior-tax-deduction-calculator-2026": [
    { href: "/calculators/social-security-tax-calculator", title: "Social Security Tax Calculator", icon: "🧓" },
    { href: "/calculators/obbba-tax-savings-calculator", title: "OBBBA Tax Savings Calculator", icon: "🏛️" },
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/401k-retirement-calculator", title: "401(k) Retirement Calculator", icon: "🏦" },
  ],
  "social-security-tax-calculator": [
    { href: "/calculators/senior-tax-deduction-calculator-2026", title: "Senior Tax Deduction Calculator", icon: "👴" },
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/roth-vs-traditional-ira-calculator-2026", title: "Roth vs Traditional IRA", icon: "🏦" },
    { href: "/calculators/obbba-tax-savings-calculator", title: "OBBBA Tax Savings Calculator", icon: "🏛️" },
  ],
  "obbba-tax-savings-calculator": [
    { href: "/calculators/no-tax-on-tips-calculator-2026", title: "No Tax on Tips Calculator", icon: "💵" },
    { href: "/calculators/no-tax-on-overtime-calculator-2026", title: "No Tax on Overtime Calculator", icon: "⏱️" },
    { href: "/calculators/senior-tax-deduction-calculator-2026", title: "Senior Tax Deduction Calculator", icon: "👴" },
    { href: "/calculators/car-loan-interest-deduction-calculator-2026", title: "Car Loan Interest Deduction", icon: "🚙" },
  ],

  // NEW June 22, 2026 — Marketplace fee calculators
  "ebay-fee-calculator": [
    { href: "/calculators/amazon-fba-calculator", title: "Amazon FBA Calculator", icon: "📦" },
    { href: "/calculators/ebay-seller-fee-profit", title: "eBay Seller Fee & Profit", icon: "🏷️" },
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/paypal-fee-calculator", title: "PayPal Fee Calculator", icon: "💳" },
  ],
  "amazon-fba-calculator": [
    { href: "/calculators/amazon-seller-fee-calculator-2026", title: "Amazon Seller Fee Calculator", icon: "📦" },
    { href: "/calculators/ebay-fee-calculator", title: "eBay Fee Calculator", icon: "🏷️" },
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/us-import-tariff-calculator", title: "US Import Tariff Calculator", icon: "🛃" },
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
    { href: "/calculators/roth-vs-traditional-ira-calculator-2026", title: "Roth vs Traditional IRA Calculator", icon: "🏦" },
    { href: "/calculators/car-loan-affordability-calculator-2026", title: "Car Loan Affordability Calculator", icon: "🚘" },
    { href: "/calculators/college-savings-calculator-2026", title: "College Savings Calculator", icon: "🎓" },
  ],

  // NEW Phase 4 — May 29, 2026
  "college-savings-calculator-2026": [
    { href: "/calculators/roth-vs-traditional-ira-calculator-2026", title: "Roth vs Traditional IRA Calculator", icon: "🏦" },
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
    { href: "/calculators/car-loan-affordability-calculator-2026", title: "Car Loan Affordability Calculator", icon: "🚘" },
  ],
  "roth-vs-traditional-ira-calculator-2026": [
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/college-savings-calculator-2026", title: "College Savings Calculator", icon: "🎓" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
    { href: "/calculators/capital-gains-tax-calculator", title: "Capital Gains Tax Calculator", icon: "📈" },
  ],

  // NEW Phase 5 — May 30, 2026
  "emergency-fund-calculator": [
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/net-worth-calculator", title: "Net Worth Calculator", icon: "📊" },
    { href: "/calculators/credit-card-payoff-calculator", title: "Credit Card Payoff Calculator", icon: "💳" },
    { href: "/calculators/small-business-tax-deduction-calculator", title: "Small Business Tax Deduction Calculator", icon: "💼" },
  ],
  "net-worth-calculator": [
    { href: "/calculators/emergency-fund-calculator", title: "Emergency Fund Calculator", icon: "🆘" },
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/credit-card-payoff-calculator", title: "Credit Card Payoff Calculator", icon: "💳" },
    { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", icon: "🏡" },
  ],

  // NEW Phase 5 Day 2 — May 30, 2026
  "mortgage-refinance-calculator-2026": [
    { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", icon: "🏡" },
    { href: "/calculators/loan-comparison-calculator", title: "Loan Comparison Calculator", icon: "💰" },
    { href: "/calculators/rental-property-roi-calculator", title: "Rental Property ROI Calculator", icon: "📊" },
    { href: "/calculators/mortgage-calculator-uk", title: "Mortgage Calculator UK", icon: "🏡" },
  ],
  "loan-comparison-calculator": [
    { href: "/calculators/mortgage-refinance-calculator-2026", title: "Mortgage Refinance Calculator", icon: "🏠" },
    { href: "/calculators/car-loan-affordability-calculator-2026", title: "Car Loan Affordability Calculator", icon: "🚘" },
    { href: "/calculators/credit-card-payoff-calculator", title: "Credit Card Payoff Calculator", icon: "💳" },
    { href: "/calculators/student-loan-payoff-calculator", title: "Student Loan Payoff Calculator", icon: "🎓" },
  ],

  // NEW Day 3 — May 30, 2026
  "savings-goal-calculator": [
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/college-savings-calculator-2026", title: "College Savings Calculator", icon: "🎓" },
    { href: "/calculators/emergency-fund-calculator", title: "Emergency Fund Calculator", icon: "🆘" },
    { href: "/calculators/inflation-calculator", title: "Inflation Calculator", icon: "📈" },
  ],
  "inflation-calculator": [
    { href: "/calculators/savings-goal-calculator", title: "Savings Goal Calculator", icon: "🎯" },
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", icon: "🏡" },
    { href: "/calculators/emergency-fund-calculator", title: "Emergency Fund Calculator", icon: "🆘" },
  ],

  // NEW Day 4 — May 30, 2026
  "cost-of-living-calculator": [
    { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", icon: "🏡" },
    { href: "/calculators/inflation-calculator", title: "Inflation Calculator", icon: "📈" },
    { href: "/calculators/emergency-fund-calculator", title: "Emergency Fund Calculator", icon: "🆘" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
  ],
  "commission-calculator": [
    { href: "/calculators/small-business-tax-deduction-calculator", title: "Small Business Tax Deduction Calculator", icon: "💼" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/freelancer-platform-fee-comparison", title: "Freelancer Fee Comparison", icon: "💼" },
    { href: "/calculators/savings-goal-calculator", title: "Savings Goal Calculator", icon: "🎯" },
  ],

  // NEW June 2026 — 7 New Calculators
  "401k-retirement-calculator": [
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/roth-ira-growth-calculator", title: "Roth IRA Growth Calculator", icon: "📈" },
    { href: "/calculators/solo-401k-contribution-calculator", title: "Solo 401k Contribution Calculator", icon: "🏦" },
    { href: "/calculators/college-savings-calculator-2026", title: "College Savings Calculator", icon: "🎓" },
  ],
  "budget-calculator": [
    { href: "/calculators/emergency-fund-calculator", title: "Emergency Fund Calculator", icon: "🆘" },
    { href: "/calculators/savings-goal-calculator", title: "Savings Goal Calculator", icon: "🎯" },
    { href: "/calculators/net-worth-calculator", title: "Net Worth Calculator", icon: "📊" },
    { href: "/calculators/inflation-calculator", title: "Inflation Calculator", icon: "📈" },
  ],
  "mortgage-calculator-us": [
    { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", icon: "🏡" },
    { href: "/calculators/mortgage-refinance-calculator-2026", title: "Mortgage Refinance Calculator", icon: "🏠" },
    { href: "/calculators/amortization-calculator", title: "Amortization Calculator", icon: "📊" },
    { href: "/calculators/dti-ratio-calculator", title: "DTI Ratio Calculator", icon: "📉" },
  ],
  "roth-ira-growth-calculator": [
    { href: "/calculators/roth-vs-traditional-ira-calculator-2026", title: "Roth vs Traditional IRA Calculator", icon: "🏦" },
    { href: "/calculators/retirement-savings-calculator-2026", title: "Retirement Savings Calculator", icon: "🏦" },
    { href: "/calculators/401k-retirement-calculator", title: "401(k) Retirement Calculator", icon: "🏦" },
    { href: "/calculators/college-savings-calculator-2026", title: "College Savings Calculator", icon: "🎓" },
  ],
  "amortization-calculator": [
    { href: "/calculators/mortgage-calculator-us", title: "Mortgage Calculator US", icon: "🏡" },
    { href: "/calculators/loan-comparison-calculator", title: "Loan Comparison Calculator", icon: "💰" },
    { href: "/calculators/car-loan-affordability-calculator-2026", title: "Car Loan Affordability Calculator", icon: "🚘" },
    { href: "/calculators/student-loan-payoff-calculator", title: "Student Loan Payoff Calculator", icon: "🎓" },
  ],
  "hourly-wage-calculator-us": [
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
    { href: "/calculators/new-york-paycheck-calculator-2026", title: "New York Paycheck Calculator", icon: "🗽" },
    { href: "/calculators/florida-paycheck-calculator-2026", title: "Florida Paycheck Calculator", icon: "🌴" },
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
  ],
  "dti-ratio-calculator": [
    { href: "/calculators/home-affordability-calculator-2026", title: "Home Affordability Calculator", icon: "🏡" },
    { href: "/calculators/car-loan-affordability-calculator-2026", title: "Car Loan Affordability Calculator", icon: "🚘" },
    { href: "/calculators/mortgage-calculator-us", title: "Mortgage Calculator US", icon: "🏡" },
    { href: "/calculators/mortgage-refinance-calculator-2026", title: "Mortgage Refinance Calculator", icon: "🏠" },
  ],

  // NEW June 13, 2026 Batch
  "no-tax-on-overtime-calculator-2026": [
    { href: "/calculators/no-tax-on-tips-calculator-2026", title: "No Tax on Tips Calculator", icon: "💵" },
    { href: "/calculators/obbba-tax-savings-calculator", title: "OBBBA Tax Savings Calculator", icon: "🏛️" },
    { href: "/calculators/texas-paycheck-calculator", title: "Texas Paycheck Calculator", icon: "🤠" },
    { href: "/calculators/hourly-wage-calculator-us", title: "Hourly Wage Calculator US", icon: "💵" },
  ],
  "freelancer-platform-fee-calculator-2026": [
    { href: "/calculators/self-employment-tax-calculator-2026", title: "Self Employment Tax Calculator", icon: "💼" },
    { href: "/calculators/side-hustle-tax-calculator", title: "Side Hustle Tax Calculator", icon: "💰" },
    { href: "/calculators/small-business-tax-deduction-calculator", title: "Small Business Tax Deduction Calculator", icon: "💼" },
    { href: "/calculators/freelancer-platform-fee-comparison", title: "Freelancer Fee Comparison", icon: "💼" },
  ],
  "break-even-calculator-small-business": [
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/shopify-profit-calculator-2026", title: "Shopify Profit Calculator", icon: "🛒" },
    { href: "/calculators/amazon-seller-fee-calculator-2026", title: "Amazon Seller Fee Calculator", icon: "📦" },
    { href: "/calculators/commission-calculator", title: "Commission Calculator", icon: "💼" },
  ],
  "tiktok-shop-earnings-calculator-2026": [
    { href: "/calculators/etsy-fee-calculator-2026", title: "Etsy Fee Calculator", icon: "🧶" },
    { href: "/calculators/amazon-seller-fee-calculator-2026", title: "Amazon Seller Fee Calculator", icon: "📦" },
    { href: "/calculators/ecommerce-net-profit-margin", title: "E-Commerce Profit Margin", icon: "📦" },
    { href: "/calculators/shopify-profit-calculator-2026", title: "Shopify Profit Calculator", icon: "🛒" },
  ],
  "w2-vs-1099-calculator-2026": [
    { href: "/calculators/self-employment-tax-calculator-2026", title: "Self Employment Tax Calculator", icon: "💼" },
    { href: "/calculators/california-1099-tax-calculator", title: "California 1099 Tax Calculator", icon: "☀️" },
    { href: "/calculators/small-business-tax-deduction-calculator", title: "Small Business Tax Deduction Calculator", icon: "💼" },
    { href: "/calculators/no-tax-on-overtime-calculator-2026", title: "No Tax on Overtime Calculator", icon: "⏱️" },
  ],
};

export default function RelatedCalculators({ currentPage }) {
  const links = relatedCalculators[currentPage] || [];
  if (links.length === 0) return null;

  return (
    <div className="mt-10 p-5 bg-[#f6f5fc] border border-[#e7e5f3] rounded-2xl">
      <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
        <svg className="w-4 h-4 inline mr-1.5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
        Related Tools
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-[#5d5a78] hover:text-[#7c3aed] hover:bg-[#f6f5fc] transition-colors duration-150"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            <span className="text-base shrink-0">{link.icon}</span>
            <span className="font-medium leading-tight">{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

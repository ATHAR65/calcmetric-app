/**
 * SEO Week 1 Fixes — Title Tags, Meta Descriptions, H1s & FAQ Schemas
 *
 * Reads each calculator's layout.js, page.js, and Calculator.js
 * then applies the plan.md specs for Week 1.
 *
 * Run: node scripts/seo-week1-fixes.js
 */

const fs = require("fs");
const path = require("path");

const CALC_DIR = path.join(__dirname, "..", "src", "app", "calculators");
const siteUrl = "https://www.themetricapp.com";

// ============================================================
// MASTER SPEC — from plan.md for ALL ~50+ calculators
// ============================================================
const specs = {
  "doordash-tax-estimator": {
    title: "DoorDash Tax Calculator 2026 — Free 1099 & SE Tax Estimator | TheMetricApp",
    meta: "Estimate your DoorDash taxes instantly. Calculate SE tax, quarterly payments & deductions. Free, no signup.",
    h1: "DoorDash Tax Calculator for Dashers (2026)"
  },
  "side-hustle-tax-calculator": {
    title: "Side Hustle Tax Calculator 2026 — Free 1099 Income Tax Estimator | TheMetricApp",
    meta: "Calculate taxes on your side hustle income instantly. Covers SE tax, deductions & quarterly payments. Free tool.",
    h1: "Side Hustle Tax Calculator (2026)"
  },
  "uber-tax-calculator-2026": {
    title: "Uber Driver Tax Calculator 2026 — Free 1099 & SE Tax Estimator | TheMetricApp",
    meta: "Calculate your Uber driver taxes in seconds. SE tax, quarterly estimates & mileage deductions. Free, instant.",
    h1: "Uber Driver Tax Calculator (2026)"
  },
  "gig-economy-net-income-calculator": {
    title: "Gig Economy Net Income Calculator 2026 — Take-Home Pay After Taxes | TheMetricApp",
    meta: "Find your real take-home pay from gig work after taxes and expenses. Covers Uber, DoorDash, Fiverr & more.",
    h1: "Gig Economy Net Income Calculator (2026)"
  },
  "vat-calculator-uk": {
    title: "VAT Calculator UK 2026 — Add or Remove VAT Instantly | TheMetricApp",
    meta: "Add or remove UK VAT at 20%, 5% or 0% instantly. Free VAT calculator for businesses and freelancers. No signup.",
    h1: "UK VAT Calculator (2026)"
  },
  "income-tax-calculator-uk": {
    title: "UK Income Tax Calculator 2025–26 — Free HMRC Tax Estimator | TheMetricApp",
    meta: "Estimate your UK income tax and National Insurance for 2025-26. Covers PAYE, self-employed & dividend income. Free.",
    h1: "UK Income Tax Calculator 2025–26"
  },
  "dividend-tax-calculator-2026": {
    title: "Dividend Tax Calculator 2026 — UK Dividend Income Tax Estimator | TheMetricApp",
    meta: "Calculate UK dividend tax instantly. Covers basic, higher & additional rate taxpayers. Free, no signup needed.",
    h1: "UK Dividend Tax Calculator (2026)"
  },
  "crypto-tax-calculator-2026": {
    title: "Crypto Tax Calculator 2026 — Free Capital Gains & Income Tax Estimator | TheMetricApp",
    meta: "Calculate your crypto capital gains tax for 2026. Covers short & long-term rates, income tax, and NFTs. Free tool.",
    h1: "Crypto Tax Calculator (2026)"
  },
  "california-1099-tax-calculator": {
    title: "California 1099 Tax Calculator 2026 — Free CA Freelance Tax Estimator | TheMetricApp",
    meta: "Calculate California 1099 and self-employment taxes for 2026. Covers CA state tax, SDI, and federal SE tax. Free.",
    h1: "California 1099 Tax Calculator (2026)"
  },
  "self-employment-tax-calculator-2026": {
    title: "Self-Employment Tax Calculator 2026 — Free SE Tax Estimator | TheMetricApp",
    meta: "Calculate your self-employment tax instantly for 2026. Covers SE tax, deductions & quarterly payments. Free tool.",
    h1: "Self-Employment Tax Calculator (2026)"
  },
  "small-business-tax-deduction-calculator": {
    title: "Small Business Tax Deduction Calculator 2026 — Maximize Write-Offs | TheMetricApp",
    meta: "Find every tax deduction for your small business. Calculate total write-offs and tax savings instantly. Free tool.",
    h1: "Small Business Tax Deduction Calculator (2026)"
  },
  "texas-paycheck-calculator": {
    title: "Texas Paycheck Calculator 2026 — Free TX Take-Home Pay Estimator | TheMetricApp",
    meta: "Calculate your Texas take-home pay after federal taxes and FICA. No state income tax in TX. Free, instant results.",
    h1: "Texas Paycheck Calculator (2026)"
  },
  "new-york-paycheck-calculator-2026": {
    title: "New York Paycheck Calculator 2026 — Free NY Take-Home Pay Estimator | TheMetricApp",
    meta: "Calculate your New York take-home pay after state, city, and federal taxes. Free NY paycheck estimator. No signup.",
    h1: "New York Paycheck Calculator (2026)"
  },
  "florida-paycheck-calculator-2026": {
    title: "Florida Paycheck Calculator 2026 — Free FL Take-Home Pay Estimator | TheMetricApp",
    meta: "Calculate your Florida take-home pay. No state income tax in FL. Free paycheck calculator with federal tax & FICA.",
    h1: "Florida Paycheck Calculator (2026)"
  },
  "hourly-wage-calculator-us": {
    title: "Hourly Wage to Annual Salary Calculator 2026 — Free US Converter | TheMetricApp",
    meta: "Convert hourly wage to annual salary instantly. Calculate weekly, monthly & yearly earnings. Free US wage calculator.",
    h1: "Hourly Wage to Annual Salary Calculator (2026)"
  },
  "stripe-fee-merchant-calculator": {
    title: "Stripe Fee Calculator 2026 — Calculate Net Payout After Fees | TheMetricApp",
    meta: "Calculate exact Stripe fees per transaction instantly. See your net payout after 2.9% + 30¢. Free, no signup.",
    h1: "Stripe Fee Calculator (2026)"
  },
  "paypal-fee-calculator": {
    title: "PayPal Fee Calculator 2026 — Calculate Net After PayPal Fees | TheMetricApp",
    meta: "Calculate exact PayPal fees for any transaction type. Personal, business & international fees. Free, instant results.",
    h1: "PayPal Fee Calculator (2026)"
  },
  "ecommerce-net-profit-margin": {
    title: "E-Commerce Profit Margin Calculator 2026 — True Net Profit After Fees | TheMetricApp",
    meta: "Calculate your real e-commerce profit margin after platform fees, COGS & shipping. Works for Amazon, Shopify, eBay & Etsy.",
    h1: "E-Commerce Profit Margin Calculator (2026)"
  },
  "shopify-profit-calculator-2026": {
    title: "Shopify Profit Calculator 2026 — Net Profit After Fees & COGS | TheMetricApp",
    meta: "Calculate your Shopify store profit after fees, COGS & shipping. Compare Shopify plans. Free profit estimator.",
    h1: "Shopify Profit Calculator (2026)"
  },
  "ebay-seller-fee-profit": {
    title: "eBay Seller Fee Calculator 2026 — Final Value Fee & Net Profit | TheMetricApp",
    meta: "Calculate eBay final value fees and true net profit on any sale. Covers all categories and shipping. Free tool.",
    h1: "eBay Seller Fee & Profit Calculator (2026)"
  },
  "etsy-fee-calculator-2026": {
    title: "Etsy Fee Calculator 2026 — Listing, Transaction & Payment Fees | TheMetricApp",
    meta: "Calculate total Etsy fees per sale including listing, transaction & payment processing. Free Etsy profit calculator.",
    h1: "Etsy Fee Calculator (2026)"
  },
  "amazon-seller-fee-calculator-2026": {
    title: "Amazon Seller Fee Calculator 2026 — FBA Fees & Net Profit | TheMetricApp",
    meta: "Calculate Amazon FBA fees, referral fees & net profit per product. Free Amazon seller fee estimator. No signup.",
    h1: "Amazon Seller Fee Calculator (2026)"
  },
  "airbnb-host-net-income": {
    title: "Airbnb Host Net Income Calculator 2026 — Profit After Fees & Tax | TheMetricApp",
    meta: "Calculate your Airbnb net income after host fees, cleaning costs & taxes. Free Airbnb profit estimator for hosts.",
    h1: "Airbnb Host Net Income Calculator (2026)"
  },
  "home-affordability-calculator-2026": {
    title: "Home Affordability Calculator 2026 — How Much House Can I Afford? | TheMetricApp",
    meta: "Find out how much house you can afford based on your income, debts & down payment. Free home affordability calculator.",
    h1: "Home Affordability Calculator (2026)"
  },
  "mortgage-refinance-calculator-2026": {
    title: "Mortgage Refinance Calculator 2026 — Should You Refinance? | TheMetricApp",
    meta: "Calculate if refinancing your mortgage saves money. See break-even point, monthly savings & total interest saved. Free.",
    h1: "Mortgage Refinance Calculator (2026)"
  },
  "mortgage-calculator-us": {
    title: "Mortgage Calculator US 2026 — Monthly Payment & Total Interest | TheMetricApp",
    meta: "Calculate your US mortgage payment, total interest, and amortization schedule. Free mortgage calculator. No signup.",
    h1: "US Mortgage Calculator (2026)"
  },
  "solo-401k-contribution-calculator": {
    title: "Solo 401k Contribution Calculator 2026 — Max Out Retirement Savings | TheMetricApp",
    meta: "Calculate your Solo 401k contribution limit for 2026. Covers employee deferrals, employer profit-sharing, and catch-up contributions. Free retirement calculator.",
    h1: "Solo 401k Contribution Calculator (2026)"
  },
  "retirement-savings-calculator-2026": {
    title: "Retirement Savings Calculator 2026 — Are You on Track? | TheMetricApp",
    meta: "Estimate if you're on track for retirement with the 4% rule, savings growth projections, and income replacement rate. Free 2026 retirement calculator.",
    h1: "Retirement Savings Calculator (2026)"
  },
  "roth-vs-traditional-ira-calculator-2026": {
    title: "Roth vs Traditional IRA Calculator 2026 — Which Is Better? | TheMetricApp",
    meta: "Compare Roth IRA vs Traditional IRA side-by-side. See after-tax values, tax savings now, and which saves you more. Free IRA calculator.",
    h1: "Roth vs Traditional IRA Calculator (2026)"
  },
  "401k-retirement-calculator": {
    title: "401(k) Retirement Calculator 2026 — Plan Your Nest Egg | TheMetricApp",
    meta: "Project your 401(k) growth with employer matching and compound interest. Free retirement calculator with year-by-year projections.",
    h1: "401(k) Retirement Calculator (2026)"
  },
  "roth-ira-growth-calculator": {
    title: "Roth IRA Growth Calculator 2026 — Project Tax-Free Savings | TheMetricApp",
    meta: "Project your Roth IRA growth with compound interest and tax-free withdrawals. Free 2026 Roth IRA growth calculator.",
    h1: "Roth IRA Growth Calculator (2026)"
  },
  "credit-card-payoff-calculator": {
    title: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche | TheMetricApp",
    meta: "Compare snowball and avalanche debt payoff methods. Add multiple cards and see how extra payments save you thousands. Free calculator.",
    h1: "Credit Card Payoff Calculator (2026)"
  },
  "student-loan-payoff-calculator": {
    title: "Student Loan Payoff Calculator 2026 — Pay Off Loans Faster | TheMetricApp",
    meta: "Calculate monthly payments, total interest, and payoff timeline for federal and private student loans. See how extra payments save thousands.",
    h1: "Student Loan Payoff Calculator (2026)"
  },
  "emergency-fund-calculator": {
    title: "Emergency Fund Calculator 2026 — How Much Should You Save? | TheMetricApp",
    meta: "Calculate your emergency fund target based on monthly expenses and income stability. Free emergency savings calculator with personalized recommendations.",
    h1: "Emergency Fund Calculator (2026)"
  },
  "net-worth-calculator": {
    title: "Net Worth Calculator 2026 — Track Your Financial Health | TheMetricApp",
    meta: "Calculate your net worth by adding up all assets and liabilities. Free net worth tracker with asset allocation analysis.",
    h1: "Net Worth Calculator (2026)"
  },
  "cost-of-living-calculator": {
    title: "Cost of Living Calculator 2026 — Compare Cities & Salaries | TheMetricApp",
    meta: "Compare cost of living between any two US cities. Find the equivalent salary you need to maintain your lifestyle. Free city comparison calculator.",
    h1: "Cost of Living Calculator (2026)"
  },
  "commission-calculator": {
    title: "Commission Calculator 2026 — Real Estate Agent Commission & Split | TheMetricApp",
    meta: "Calculate real estate agent commission earnings after brokerage splits. Free 2026 commission calculator with split model comparison.",
    h1: "Commission Calculator (2026)"
  },
  "budget-calculator": {
    title: "Budget Calculator 2026 — Track Income, Expenses & Savings | TheMetricApp",
    meta: "Create a comprehensive monthly budget with 50/30/20 rule analysis. Free 2026 budget calculator with visual breakdowns for US households.",
    h1: "Budget Calculator (2026)"
  },
  "savings-goal-calculator": {
    title: "Savings Goal Calculator 2026 — Reach Your Financial Target | TheMetricApp",
    meta: "Calculate how your savings grow with regular contributions and compound interest. Free savings goal calculator with year-by-year projections.",
    h1: "Savings Goal Calculator (2026)"
  },
  "inflation-calculator": {
    title: "Inflation Calculator 2026 — Purchasing Power Over Time | TheMetricApp",
    meta: "Calculate how inflation reduces your money's purchasing power over time. Free 2026 inflation calculator with historical CPI data and projections.",
    h1: "Inflation Calculator (2026)"
  },
  "car-loan-affordability-calculator-2026": {
    title: "Car Loan Affordability Calculator 2026 — Can You Afford That Car? | TheMetricApp",
    meta: "Calculate monthly car payments, total interest, and DTI analysis. Free 2026 car affordability calculator before you visit the dealership.",
    h1: "Car Loan Affordability Calculator (2026)"
  },
  "loan-comparison-calculator": {
    title: "Loan Comparison Calculator 2026 — Compare Side-by-Side | TheMetricApp",
    meta: "Compare two loans side-by-side with monthly payment, total interest, APR, and total cost. Free 2026 loan comparison calculator.",
    h1: "Loan Comparison Calculator (2026)"
  },
  "amortization-calculator": {
    title: "Amortization Schedule Calculator 2026 — Full Payment Breakdown | TheMetricApp",
    meta: "Generate a complete amortization schedule for any loan. Monthly payments, total interest, and year-by-year principal vs interest breakdown. Free calculator.",
    h1: "Amortization Schedule Calculator (2026)"
  },
  "dti-ratio-calculator": {
    title: "Debt-to-Income Ratio Calculator 2026 — Front-End & Back-End DTI | TheMetricApp",
    meta: "Calculate your debt-to-income ratio for mortgage and loan applications. Free DTI calculator with front-end, back-end ratios, and lender guidelines.",
    h1: "Debt-to-Income Ratio Calculator (2026)"
  },
  "residential-solar-panel-roi": {
    title: "Solar Panel ROI Calculator 2026 — Payback & 25-Year Savings | TheMetricApp",
    meta: "Calculate your solar panel payback period, 25-year savings, and ROI with the 30% federal tax credit. Free 2026 solar ROI calculator for homeowners.",
    h1: "Solar Panel ROI Calculator (2026)"
  },
  "freelancer-platform-fee-comparison": {
    title: "Freelancer Platform Fee Comparison 2026 — Upwork vs Fiverr vs Toptal | TheMetricApp",
    meta: "Compare freelancer platform fees across Upwork, Fiverr, and Toptal. Calculate your true net earnings after service fees and payment processing. Free tool.",
    h1: "Freelancer Platform Fee Comparison (2026)"
  },
  "us-import-tariff-calculator": {
    title: "US Import Tariff Calculator 2026 — Duties & Landed Cost | TheMetricApp",
    meta: "Calculate US import duties, tariffs, and total landed cost with Section 232 rates. Free 2026 import tariff calculator for Amazon FBA and e-commerce sellers.",
    h1: "US Import Tariff Calculator (2026)"
  },
  "irs-mileage-deduction-calculator": {
    title: "IRS Mileage Deduction Calculator 2026 — Business, Medical & Charity | TheMetricApp",
    meta: "Calculate your IRS mileage deduction for 2026. Business $0.70/mile, medical & charity rates included. Free calculator.",
    h1: "IRS Mileage Deduction Calculator (2026)"
  },
  "ev-charging-vs-gas-savings": {
    title: "EV vs Gas Savings Calculator 2026 — Monthly & Annual Cost Comparison | TheMetricApp",
    meta: "Calculate annual savings switching from gas to electric vehicle. Compare charging vs fuel costs. Free EV savings calculator.",
    h1: "EV vs Gas Savings Calculator (2026)"
  },
  "amazon-fba-fee-calculator": {
    title: "Amazon FBA Fee Calculator 2026 — FBA Fees & Net Profit | TheMetricApp",
    meta: "Calculate Amazon FBA fees including referral fees, fulfillment fees, and net profit per unit. Free 2026 FBA calculator for Amazon sellers.",
    h1: "Amazon FBA Fee Calculator (2026)"
  },
  "capital-gains-tax-calculator": {
    title: "Capital Gains Tax Calculator 2026 — Short & Long-Term Gain Taxes | TheMetricApp",
    meta: "Calculate your 2026 capital gains tax. Covers short-term, long-term rates, NIIT surcharge, and state taxes for stocks, crypto, and real estate.",
    h1: "Capital Gains Tax Calculator (2026)"
  },
  "college-savings-calculator-2026": {
    title: "College Savings Calculator 2026 — 529 Plan & Education Funding | TheMetricApp",
    meta: "Calculate 529 plan growth, project college costs, and find your monthly savings target. Free 2026 college savings calculator with state tax deduction estimates.",
    h1: "College Savings Calculator (2026)"
  },
  "rental-property-roi-calculator": {
    title: "Rental Property ROI Calculator 2026 — Cap Rate & Cash-on-Cash | TheMetricApp",
    meta: "Calculate rental property cap rate, cash-on-cash return, NOI, and the 1% rule. Free 2026 rental property ROI calculator for real estate investors.",
    h1: "Rental Property ROI Calculator (2026)"
  },
  "hourly-to-annual-salary-calculator-uk": {
    title: "Hourly to Annual Salary Calculator UK 2025–26 — Free UK Converter | TheMetricApp",
    meta: "Convert your UK hourly wage to annual salary instantly. Includes standard hours, overtime, and statutory holiday pay for 2025–26. Free calculator.",
    h1: "Hourly to Annual Salary UK Calculator (2025–26)"
  },
  "mortgage-calculator-uk": {
    title: "Mortgage Calculator UK 2025–26 — Monthly Repayments & Stamp Duty | TheMetricApp",
    meta: "Calculate UK mortgage repayments, total interest, and stamp duty costs. Free 2025–26 UK mortgage calculator with affordability analysis.",
    h1: "UK Mortgage Calculator (2025–26)"
  },
  "national-insurance-calculator-uk": {
    title: "National Insurance Calculator UK 2025–26 — Class 1, 2 & 4 NI | TheMetricApp",
    meta: "Calculate UK National Insurance for 2025–26. Covers Class 1 employee, Class 2 and Class 4 self-employed NI, and employer contributions. Free HMRC tool.",
    h1: "UK National Insurance Calculator (2025–26)"
  },
  "self-assessment-tax-calculator-uk": {
    title: "Self Assessment Tax Calculator UK 2025–26 — Tax Return Estimator | TheMetricApp",
    meta: "Estimate your UK Self Assessment tax bill for 2025–26. Covers income tax, Class 2 & 4 NI, and payments on account. Free HMRC-ready calculator.",
    h1: "Self Assessment Tax Calculator UK (2025–26)"
  }
};

// ============================================================
// FAQ SCHEMA per calculator (from plan.md)
// ============================================================
const faqs = {
  "doordash-tax-estimator": [
    { q: "Does DoorDash take out taxes?", a: "No, you pay yourself as independent contractor" },
    { q: "How much to save for DoorDash taxes?", a: "25–30% of every payout" },
    { q: "When are quarterly taxes due?", a: "April 15, June 16, Sep 15, Jan 15" },
    { q: "What can I deduct as a Dasher?", a: "Mileage, phone, equipment" }
  ],
  "side-hustle-tax-calculator": [
    { q: "How much tax do I pay on side hustle income?", a: "15.3% SE tax + income tax" },
    { q: "Do I need to pay quarterly taxes on side hustle?", a: "Yes if you expect to owe $1,000+" },
    { q: "What side hustle expenses are deductible?", a: "Business-use expenses only" },
    { q: "Do I need a 1099 to report side hustle income?", a: "No, report all income even without 1099" }
  ],
  "uber-tax-calculator-2026": [
    { q: "Does Uber withhold taxes?", a: "No, you pay all taxes yourself" },
    { q: "How much should Uber drivers save for taxes?", a: "25–30% of net earnings" },
    { q: "Can Uber drivers deduct mileage?", a: "Yes, $0.70 per mile in 2026" },
    { q: "When does Uber send 1099?", a: "January, for drivers earning $600+" }
  ],
  "gig-economy-net-income-calculator": [
    { q: "How do I calculate net income from gig work?", a: "Gross − expenses − SE tax − income tax" },
    { q: "Is gig income taxed more than regular income?", a: "Effectively yes, due to SE tax" },
    { q: "What expenses can gig workers deduct?", a: "Mileage, phone, equipment, platform fees" },
    { q: "Do I need to track income from multiple gigs?", a: "Yes, report all combined" }
  ],
  "vat-calculator-uk": [
    { q: "What is the UK VAT rate in 2026?", a: "Standard rate is 20%" },
    { q: "How do I calculate VAT from a gross price?", a: "Divide by 1.20 to find net" },
    { q: "When must I register for VAT in the UK?", a: "When turnover exceeds £90,000" },
    { q: "Can I reclaim VAT as a business?", a: "Yes, if VAT registered" }
  ],
  "income-tax-calculator-uk": [
    { q: "What is the personal tax allowance in 2025-26?", a: "£12,570" },
    { q: "How much National Insurance do I pay?", a: "Depends on employment type and income" },
    { q: "What are the UK tax brackets for 2025-26?", a: "20% basic, 40% higher, 45% additional" },
    { q: "How is self-employed income taxed in UK?", a: "Income tax + Class 2 & 4 NI" }
  ],
  "dividend-tax-calculator-2026": [
    { q: "What is the dividend allowance in 2026?", a: "£500" },
    { q: "How much tax do I pay on dividends?", a: "8.75% basic, 33.75% higher rate" },
    { q: "Are dividends taxed twice?", a: "Yes — corporation tax then dividend tax" },
    { q: "Is salary or dividends more tax-efficient?", a: "Usually a mix is most efficient" }
  ],
  "crypto-tax-calculator-2026": [
    { q: "Do I pay tax on crypto in the US?", a: "Yes, crypto is treated as property by IRS" },
    { q: "What is the crypto capital gains tax rate?", a: "0%, 15%, or 20% long-term; income rates short-term" },
    { q: "Do I owe tax if I didn't sell crypto?", a: "Generally no, only realized gains are taxed" },
    { q: "How do I report crypto on taxes?", a: "Schedule D + Form 8949" }
  ],
  "california-1099-tax-calculator": [
    { q: "How much is California self-employment tax?", a: "15.3% federal SE + CA state income tax" },
    { q: "Does California have state income tax for freelancers?", a: "Yes, 1% to 13.3% progressive" },
    { q: "When are California estimated taxes due?", a: "April 15, June 15, Sep 15, Jan 15" },
    { q: "What is SDI tax in California for self-employed?", a: "Optional for self-employed in CA" }
  ],
  "self-employment-tax-calculator-2026": [
    { q: "What is the self-employment tax rate in 2026?", a: "15.3% on net earnings" },
    { q: "Can I deduct self-employment tax?", a: "Yes, 50% is deductible from gross income" },
    { q: "Do I pay SE tax if I earn under $600?", a: "Yes if net earnings exceed $400" },
    { q: "How do I pay self-employment tax?", a: "Quarterly estimated payments via Form 1040-ES" }
  ],
  "small-business-tax-deduction-calculator": [
    { q: "What can I deduct as a small business owner?", a: "Home office, vehicle, equipment, salaries, software" },
    { q: "What is the Section 179 deduction limit in 2026?", a: "Check current IRS limit (~$1.2M)" },
    { q: "Can I deduct my home office?", a: "Yes if used exclusively and regularly for business" },
    { q: "What is the QBI deduction?", a: "Up to 20% of qualified business income for pass-throughs" }
  ],
  "texas-paycheck-calculator": [
    { q: "Does Texas have state income tax?", a: "No, Texas has no state income tax" },
    { q: "What percentage is taken out of a Texas paycheck?", a: "Federal + 7.65% FICA only" },
    { q: "How do I calculate my take-home pay in Texas?", a: "Gross − federal tax − FICA" },
    { q: "Does Texas have local payroll taxes?", a: "Some cities have minor taxes, mostly no" }
  ],
  "new-york-paycheck-calculator-2026": [
    { q: "What is New York state income tax rate?", a: "4% to 10.9% depending on income" },
    { q: "Does New York City have its own income tax?", a: "Yes, 3.078%–3.876%" },
    { q: "How much of my NY paycheck goes to taxes?", a: "Could be 35–45% total for high earners" },
    { q: "Is NYC tax different from NY state tax?", a: "Yes, NYC has an additional local tax" }
  ],
  "florida-paycheck-calculator-2026": [
    { q: "Does Florida have state income tax?", a: "No state income tax in Florida" },
    { q: "How much is taken from a Florida paycheck?", a: "Only federal taxes and FICA (7.65%)" },
    { q: "What is the Florida minimum wage in 2026?", a: "Check current FL minimum wage" },
    { q: "Is it better to live in Florida or Texas for taxes?", a: "Similar — both have no state income tax" }
  ],
  "hourly-wage-calculator-us": [
    { q: "How much is $20/hour annually?", a: "$41,600 per year (40hr/week)" },
    { q: "How many work hours in a year?", a: "2,080 standard (52 weeks × 40 hours)" },
    { q: "What is the US minimum wage in 2026?", a: "$7.25 federal, varies by state" },
    { q: "Should I negotiate hourly or salary?", a: "Depends on overtime expectations" }
  ],
  "stripe-fee-merchant-calculator": [
    { q: "What does Stripe charge per transaction?", a: "2.9% + $0.30 for standard cards" },
    { q: "How does Stripe charge for international cards?", a: "Additional 1.5% for international" },
    { q: "Is Stripe cheaper than PayPal?", a: "Similar rates; depends on use case" },
    { q: "Does Stripe charge monthly fees?", a: "No monthly fee on standard plan" }
  ],
  "paypal-fee-calculator": [
    { q: "What are PayPal's fees for selling?", a: "3.49% + fixed fee for G&S transactions" },
    { q: "Does PayPal charge fees for friends and family?", a: "No fees for F&F domestic USD" },
    { q: "What is PayPal's international fee?", a: "Additional 1.5%+ for cross-border" },
    { q: "Can I pass PayPal fees to customers?", a: "Yes, allowed in most regions" }
  ],
  "ecommerce-net-profit-margin": [
    { q: "What is a good profit margin for e-commerce?", a: "10–30% is typical; 20%+ is healthy" },
    { q: "How do I calculate net profit for online selling?", a: "Revenue minus all costs and fees" },
    { q: "What fees should I include in profit calculation?", a: "Platform fees, payment fees, shipping, returns" },
    { q: "What is the difference between gross and net margin?", a: "Gross excludes overhead; net includes all costs" }
  ],
  "shopify-profit-calculator-2026": [
    { q: "What are Shopify's transaction fees?", a: "0% with Shopify Payments; 0.5–2% with external gateways" },
    { q: "How much does Shopify cost per month?", a: "Basic $39, Shopify $105, Advanced $399" },
    { q: "Is Shopify profitable for small businesses?", a: "Yes if margins are managed well" },
    { q: "What payment processor is cheapest with Shopify?", a: "Shopify Payments to avoid extra fees" }
  ],
  "ebay-seller-fee-profit": [
    { q: "What is eBay's final value fee in 2026?", a: "~13.25% for most categories + $0.30/order" },
    { q: "Does eBay charge fees on shipping?", a: "Yes, FVF applies to shipping amount too" },
    { q: "How do I increase eBay profit margins?", a: "Optimize pricing, use free listings allowance" },
    { q: "What is eBay Managed Payments?", a: "eBay handles all payments directly, no PayPal needed" }
  ],
  "etsy-fee-calculator-2026": [
    { q: "What percentage does Etsy take from each sale?", a: "~9.75% + $0.20 listing + payment fees" },
    { q: "Does Etsy charge listing fees?", a: "Yes, $0.20 per listing, renewed every 4 months or when sold" },
    { q: "What is Etsy's transaction fee in 2026?", a: "6.5% of total sale price including shipping" },
    { q: "Is Etsy Plus worth it?", a: "$10/mo — only worth it at higher sales volumes" }
  ],
  "amazon-seller-fee-calculator-2026": [
    { q: "What is Amazon's referral fee?", a: "Typically 8–15% depending on category" },
    { q: "How are Amazon FBA fees calculated?", a: "Based on product size tier and weight" },
    { q: "Is Amazon FBA worth it in 2026?", a: "Yes for most sellers at right margins" },
    { q: "What is the Individual vs Professional plan?", a: "Individual $0.99/sale; Professional $39.99/mo" }
  ],
  "airbnb-host-net-income": [
    { q: "How much does Airbnb charge hosts?", a: "3% standard split or up to 16% host-only" },
    { q: "Do I pay tax on Airbnb income?", a: "Yes, after 14-day rule if applicable" },
    { q: "What expenses can Airbnb hosts deduct?", a: "Mortgage interest, utilities, cleaning, depreciation" },
    { q: "What is the 14-day Airbnb tax rule?", a: "Renting under 14 days = tax-free in the US" }
  ],
  "home-affordability-calculator-2026": [
    { q: "How much house can I afford on $80,000 salary?", a: "Roughly $280,000–$320,000" },
    { q: "What is the 28/36 debt-to-income rule?", a: "Housing ≤28% of gross; total debt ≤36%" },
    { q: "How much down payment do I need for a house?", a: "Minimum 3–3.5% for conventional/FHA" },
    { q: "Does pre-approval affect my credit score?", a: "Small temporary impact from hard inquiry" }
  ],
  "mortgage-refinance-calculator-2026": [
    { q: "When should I refinance my mortgage?", a: "When new rate saves more than closing costs within 2–3 years" },
    { q: "What are refinancing closing costs?", a: "Typically 2–5% of loan amount" },
    { q: "How do I calculate my refinance break-even point?", a: "Closing costs ÷ monthly savings" },
    { q: "Does refinancing hurt your credit score?", a: "Temporarily yes, due to hard inquiry" }
  ],
  "mortgage-calculator-us": [
    { q: "How is a mortgage payment calculated?", a: "Based on principal, rate, and term using amortization formula" },
    { q: "What is a good mortgage rate in 2026?", a: "Varies by credit score and market conditions" },
    { q: "What is PMI and when is it required?", a: "Private Mortgage Insurance required with less than 20% down" },
    { q: "How does loan term affect monthly payment?", a: "Shorter term = higher payment but less total interest" }
  ],
  "solo-401k-contribution-calculator": [
    { q: "What is the Solo 401k contribution limit in 2026?", a: "$70,000 (or $77,500 with catch-up for age 50+)" },
    { q: "How are Solo 401k employer contributions calculated?", a: "Up to 25% of net self-employment income" },
    { q: "Can I have a Solo 401k and a regular 401k?", a: "Yes, but combined limits apply" },
    { q: "What is the SECURE 2.0 super catch-up?", a: "Ages 60–63: additional $10,000+ catch-up provision" }
  ],
  "retirement-savings-calculator-2026": [
    { q: "How much do I need to retire comfortably?", a: "Depends on lifestyle — typically 25x annual expenses" },
    { q: "What is the 4% rule for retirement?", a: "Withdraw 4% of savings annually, adjusted for inflation" },
    { q: "How does compound interest help retirement savings?", a: "Earnings on earnings accelerate growth over decades" },
    { q: "What is a good retirement savings rate?", a: "15% of income including employer match" }
  ],
  "roth-vs-traditional-ira-calculator-2026": [
    { q: "What is the difference between Roth and Traditional IRA?", a: "Roth: post-tax contributions, tax-free withdrawals. Traditional: pre-tax contributions, taxed on withdrawal." },
    { q: "What are the IRA contribution limits in 2026?", a: "$7,000 ($8,000 if age 50+)" },
    { q: "Who should choose a Roth IRA?", a: "Those who expect higher taxes in retirement" },
    { q: "Can I have both a Roth and Traditional IRA?", a: "Yes, but combined contributions cannot exceed the annual limit" }
  ],
  "401k-retirement-calculator": [
    { q: "What is the 401(k) contribution limit in 2026?", a: "$23,500 employee deferral ($31,000 with catch-up)" },
    { q: "How does employer matching work?", a: "Employer matches a percentage of your contributions up to a limit" },
    { q: "What happens to my 401(k) when I change jobs?", a: "Can roll over to IRA or new employer's plan" },
    { q: "When can I withdraw from my 401(k) without penalty?", a: "Age 59½ for penalty-free withdrawals" }
  ],
  "roth-ira-growth-calculator": [
    { q: "What is the Roth IRA contribution limit in 2026?", a: "$7,000 ($8,000 if age 50+)" },
    { q: "Are Roth IRA withdrawals really tax-free?", a: "Yes, if account held for 5+ years and age 59½+" },
    { q: "Can I contribute to a Roth IRA if I have a 401(k)?", a: "Yes, but income limits may apply" },
    { q: "What is the backdoor Roth IRA strategy?", a: "Contribute to Traditional IRA, then convert to Roth" }
  ],
  "credit-card-payoff-calculator": [
    { q: "Should I use the snowball or avalanche method?", a: "Snowball: pay smallest balance first. Avalanche: pay highest APR first." },
    { q: "How much interest can I save by paying extra?", a: "Thousands — depends on balance, rate, and extra payment amount" },
    { q: "What is a good debt payoff timeline?", a: "Aim to pay off credit cards within 2-3 years" },
    { q: "Should I consolidate credit card debt?", a: "If you can get a lower APR, consolidation can save money" }
  ],
  "student-loan-payoff-calculator": [
    { q: "Can I pay off student loans early without penalty?", a: "Federal loans: yes, no prepayment penalty" },
    { q: "Should I refinance my student loans?", a: "If you can get a lower rate, but you'll lose federal protections" },
    { q: "What is the standard student loan repayment term?", a: "10 years for most federal loans" },
    { q: "How do extra payments affect student loan payoff?", a: "Reduces total interest and shortens payoff timeline" }
  ],
  "emergency-fund-calculator": [
    { q: "How much emergency fund should I have?", a: "3–6 months of essential expenses" },
    { q: "Where should I keep my emergency fund?", a: "High-yield savings account for easy access" },
    { q: "Is $1,000 enough for an emergency fund?", a: "A good start, but aim for 3 months of expenses" },
    { q: "How quickly can I build an emergency fund?", a: "Depends on your savings rate — use the calculator to estimate" }
  ],
  "net-worth-calculator": [
    { q: "What is a good net worth by age?", a: "Varies — standard rule is 1x salary by 30, 3x by 40, 6x by 50" },
    { q: "How often should I calculate my net worth?", a: "Quarterly or annually to track financial progress" },
    { q: "Is my home included in net worth?", a: "Yes, home value minus mortgage balance" },
    { q: "What is a negative net worth?", a: "When liabilities exceed assets — common for students and new graduates" }
  ],
  "cost-of-living-calculator": [
    { q: "What is included in cost of living comparisons?", a: "Housing, food, transportation, utilities, healthcare, taxes" },
    { q: "Which US cities have the highest cost of living?", a: "NYC, San Francisco, Honolulu, Boston, Washington DC" },
    { q: "How much salary do I need to move to a new city?", a: "Use the calculator to find equivalent salary based on COL index" },
    { q: "Is cost of living higher in cities or suburbs?", a: "Cities generally 20-40% higher than suburbs" }
  ],
  "commission-calculator": [
    { q: "What is a typical real estate commission rate?", a: "5–6% of sale price, split between buyer's and seller's agents" },
    { q: "How do brokerage splits work?", a: "Agent receives a percentage of commission (e.g., 70/30 split)" },
    { q: "What is a 100% commission model?", a: "Agent keeps all commission but pays a monthly desk fee" },
    { q: "How much does a real estate agent earn per sale?", a: "Varies — use the calculator with your commission rate and split" }
  ],
  "budget-calculator": [
    { q: "What is the 50/30/20 budget rule?", a: "50% needs, 30% wants, 20% savings/debt" },
    { q: "How much should I save each month?", a: "At least 20% of your after-tax income" },
    { q: "What counts as a need vs a want?", a: "Needs: housing, food, utilities, transport. Wants: dining, travel, entertainment." },
    { q: "How do I fix a budget deficit?", a: "Cut wants first, then find ways to reduce fixed costs" }
  ],
  "savings-goal-calculator": [
    { q: "How much should I save each month to reach my goal?", a: "Use the calculator — it depends on goal amount, timeline, and rate of return" },
    { q: "What is compound interest?", a: "Interest earned on both principal and accumulated interest" },
    { q: "How does compound interest grow over time?", a: "Exponentially — the earlier you start, the more you benefit" },
    { q: "What is a realistic investment return assumption?", a: "7-8% average annual return for stock market (before inflation)" }
  ],
  "inflation-calculator": [
    { q: "What is the current inflation rate in 2026?", a: "Check the latest CPI data from the Bureau of Labor Statistics" },
    { q: "How does inflation affect my savings?", a: "Reduces purchasing power — $100 today buys less in 10 years" },
    { q: "What was the historical average inflation rate?", a: "Approximately 3.3% over the last 100 years" },
    { q: "How do I protect against inflation?", a: "Invest in assets that outpace inflation (stocks, real estate, TIPS)" }
  ],
  "car-loan-affordability-calculator-2026": [
    { q: "What is a good APR for a car loan in 2026?", a: "Depends on credit score — prime rates around 5-7%" },
    { q: "How much car can I afford on my salary?", a: "Total car costs should be under 15% of monthly take-home pay" },
    { q: "What is the ideal car loan term?", a: "36-48 months to minimize interest and stay above water" },
    { q: "Should I lease or buy a car?", a: "Buy if you keep cars long-term; lease if you want lower payments and new cars" }
  ],
  "loan-comparison-calculator": [
    { q: "What is the difference between APR and interest rate?", a: "APR includes fees and costs; interest rate is just the loan rate" },
    { q: "How does loan term affect total cost?", a: "Longer term = lower payment but more total interest" },
    { q: "What is a good personal loan rate in 2026?", a: "Rates vary by credit; typical range 6-36%" },
    { q: "Should I compare loans by APR or monthly payment?", a: "APR gives the truest picture of total loan cost" }
  ],
  "amortization-calculator": [
    { q: "What is an amortization schedule?", a: "A table showing each payment's breakdown into principal and interest" },
    { q: "How does extra payment affect amortization?", a: "Extra principal payments reduce total interest and shorten the loan term" },
    { q: "What happens if I make bi-weekly payments?", a: "You make one extra payment per year, paying off the loan faster" },
    { q: "Is amortization the same for all loans?", a: "No — mortgages use standard amortization; some loans use simple interest" }
  ],
  "dti-ratio-calculator": [
    { q: "What is a good DTI ratio?", a: "Below 36% is good; below 43% is required for most mortgages" },
    { q: "What is front-end vs back-end DTI?", a: "Front-end: housing costs only. Back-end: all debt payments." },
    { q: "How can I lower my DTI ratio?", a: "Pay down debt, increase income, or avoid taking on new debt" },
    { q: "Do all lenders use the same DTI limits?", a: "Most follow guidelines, but some allow up to 50% back-end DTI" }
  ],
  "residential-solar-panel-roi": [
    { q: "Is solar worth it in 2026?", a: "With the 30% federal tax credit, most homes break even in 6-10 years" },
    { q: "What is the payback period for solar panels?", a: "Typically 6-12 years depending on location and electricity costs" },
    { q: "How long do solar panels last?", a: "25-30 years with gradual efficiency decline" },
    { q: "Does solar increase home value?", a: "Yes, studies show 3-4% increase in property value" }
  ],
  "freelancer-platform-fee-comparison": [
    { q: "Which freelancer platform has the lowest fees?", a: "Toptal has zero service fee for freelancers; Upwork and Fiverr charge 10-20%" },
    { q: "How do Upwork fees work?", a: "20% for first $500/client, then 5% for earnings over $10,000/client" },
    { q: "How do Fiverr fees work?", a: "Fiverr takes 20% of every transaction" },
    { q: "Does Toptal charge freelancers?", a: "Toptal does not charge freelancers — clients pay the platform fee" }
  ],
  "us-import-tariff-calculator": [
    { q: "What is the current US tariff rate on Chinese imports?", a: "20% baseline + Section 301 duties; varies by product" },
    { q: "What is de minimis for US imports?", a: "Shipments under $800 enter duty-free under Section 321" },
    { q: "What is the Section 232 tariff?", a: "25% on steel, 10% on aluminum imports for national security" },
    { q: "How do tariffs affect e-commerce sellers?", a: "Increases COGS; may require price adjustments" }
  ],
  "irs-mileage-deduction-calculator": [
    { q: "What is the IRS mileage rate for 2026?", a: "$0.70 per mile for business use" },
    { q: "Can W-2 employees deduct mileage?", a: "Generally no, since Tax Cuts and Jobs Act 2017" },
    { q: "How do I track mileage for taxes?", a: "Use MileIQ, Stride, or a mileage log spreadsheet" },
    { q: "Can I deduct actual car expenses instead of mileage?", a: "Yes, but must choose one method consistently" }
  ],
  "ev-charging-vs-gas-savings": [
    { q: "How much do you save driving an EV vs gas?", a: "Average $1,000-$2,500/year on fuel" },
    { q: "What is the EV tax credit in 2026?", a: "Up to $7,500 federal credit for qualifying vehicles" },
    { q: "How long to recoup the extra cost of an EV?", a: "Typically 3-5 years in fuel savings" },
    { q: "Is home charging cheaper than public charging?", a: "Yes, significantly cheaper at home rates" }
  ],
  "amazon-fba-fee-calculator": [
    { q: "Is the Amazon FBA calculator free to use?", a: "Yes, 100% free with no sign-up required" },
    { q: "Does this calculator include Amazon's new 2026 fuel surcharge?", a: "Yes, includes the 3.5% fuel and logistics surcharge" },
    { q: "How can I reduce my Amazon FBA fees?", a: "Reduce packaging weight, bundle products, optimize category selection" }
  ],
  "capital-gains-tax-calculator": [
    { q: "What is the difference between short-term and long-term capital gains?", a: "Short-term (≤1 year) taxed as ordinary income. Long-term (>1 year) taxed at 0%, 15%, or 20%." },
    { q: "How does the 3.8% Net Investment Income Tax work?", a: "NIIT applies when MAGI exceeds $200K (single) or $250K (MFJ)" }
  ],
  "college-savings-calculator-2026": [
    { q: "How much should I save for college?", a: "Depends on your child's age and target school type — use the calculator" },
    { q: "What is a 529 plan?", a: "State-sponsored education savings account with tax-free growth for qualified expenses" },
    { q: "What is the average cost of college in 2026?", a: "$25,000-$60,000/year depending on public vs private" },
    { q: "Can I use 529 funds for K-12 education?", a: "Yes, up to $10,000/year per beneficiary" }
  ],
  "rental-property-roi-calculator": [
    { q: "What is a good cap rate for rental property?", a: "4-10% depending on market; higher in secondary markets" },
    { q: "What is cash-on-cash return?", a: "Annual pre-tax cash flow divided by total cash invested" },
    { q: "What is the 1% rule in real estate?", a: "Monthly rent should be at least 1% of purchase price" },
    { q: "What is NOI in real estate?", a: "Net Operating Income = rental income minus operating expenses" }
  ],
  "hourly-to-annual-salary-calculator-uk": [
    { q: "How many working hours per year in the UK?", a: "Standard 1,820 hours (35 hours/week × 52 weeks)" },
    { q: "What is the UK minimum wage in 2026?", a: "£12.21 for workers aged 21+ (National Living Wage)" },
    { q: "How does overtime affect my annual salary UK?", a: "Overtime is typically paid at 1.25x or 1.5x your hourly rate" },
    { q: "Is holiday pay included in UK hourly rates?", a: "Statutory holiday is 5.6 weeks/year (28 days for full-time)" }
  ],
  "mortgage-calculator-uk": [
    { q: "How is stamp duty calculated in the UK?", a: "0% up to £250,000; 5% on portion £250,001-£925,000; higher rates above" },
    { q: "What is the UK mortgage borrowing limit?", a: "Typically 4.5x annual income" },
    { q: "What is the average UK mortgage rate in 2026?", a: "Varies — check current Bank of England base rate" },
    { q: "How does the mortgage term affect affordability?", a: "Longer term = lower monthly payment but more total interest" }
  ],
  "national-insurance-calculator-uk": [
    { q: "What is the Class 1 NI rate for employees?", a: "8% on earnings £12,570-£50,270; 2% above £50,270" },
    { q: "What is the Class 4 NI rate for self-employed?", a: "6% on profits £12,570-£50,270; 2% above £50,270" },
    { q: "Do I pay NI if I earn under £12,570?", a: "No, NI only applies above the threshold" },
    { q: "What is the employer NI rate?", a: "Employers pay 13.8% on earnings above £9,100" }
  ],
  "self-assessment-tax-calculator-uk": [
    { q: "When is the UK Self Assessment deadline?", a: "Online filing: Jan 31 following tax year end" },
    { q: "Do I need to file a Self Assessment tax return?", a: "If self-employed income over £1,000 or other untaxed income" },
    { q: "What are payments on account?", a: "Advance payments toward next year's tax bill, due Jan 31 and Jul 31" },
    { q: "Can I claim expenses on Self Assessment?", a: "Yes — allowable expenses reduce your taxable profit" }
  ]
};

// ============================================================
// HELPERS
// ============================================================

const SITE_URL_VAR = "siteUrl";

function quote(s) {
  return JSON.stringify(s);
}

/**
 * Update layout.js with new title and description.
 * Preserves existing structure (siteUrl variable usage etc.)
 */
function updateLayout(filePath, slug) {
  const spec = specs[slug];
  if (!spec) return null;

  let content = fs.readFileSync(filePath, "utf-8");

  // Replace title
  content = content.replace(
    /title:\s*"[^"]*"/,
    `title: ${quote(spec.title)}`
  );

  // Replace description (the multiline description)
  content = content.replace(
    /description:\s*"[^"]*"/,
    `description: ${quote(spec.meta)}`
  );

  // Update OpenGraph title
  content = content.replace(
    /og:\s*\{\s*title:\s*"[^"]*"/,
    `og: {\n    title: ${quote(spec.title)}`
  );

  // Update OpenGraph description
  content = content.replace(
    /\n\s*og:\s*\{[^}]*description:\s*"[^"]*"/s,
    (match) => {
      return match.replace(
        /description:\s*"[^"]*"/,
        `description: ${quote(spec.meta)}`
      );
    }
  );

  // Update twitter title
  content = content.replace(
    /twitter:\s*\{\s*title:\s*"[^"]*"/,
    `twitter: {\n    title: ${quote(spec.title)}`
  );

  fs.writeFileSync(filePath, content, "utf-8");
  return "layout";
}

/**
 * Update page.js — add FAQ schema via SchemaMarkup
 * If the page already imports SchemaMarkup, we need to handle carefully.
 */
function updatePage(filePath, slug) {
  const faqList = faqs[slug];
  if (!faqList || faqList.length === 0) return null;

  let content = fs.readFileSync(filePath, "utf-8");

  // Check if already has SchemaMarkup
  const hasSchemaMarkup = content.includes('import SchemaMarkup from "@/components/SchemaMarkup"');

  // Generate FAQ JSON
  const faqSchemaStr = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  }, null, 2).replace(/\n/g, "\n      ");

  if (!hasSchemaMarkup) {
    // Add SchemaMarkup import and FAQ schema
    // Find the return statement to insert before it
    const returnMatch = content.match(/\s+return\s+</);
    if (!returnMatch) return null;

    const insertBefore = returnMatch.index;
    const importLine = `import SchemaMarkup from "@/components/SchemaMarkup";\n`;

    const faqComponent = `
  const faqSchema = ${faqSchemaStr};

  return (
    <>
      <SchemaMarkup data={[faqSchema]} />
`;

    // Add import at top if not present
    const existingImport = content.match(/^import /m);
    if (existingImport) {
      const importEnd = content.lastIndexOf(";", content.indexOf("\n\n", existingImport.index));
      const afterImports = content.indexOf("\n\n", importEnd) > -1 ? content.indexOf("\n\n", importEnd) : importEnd + 1;
      content = content.slice(0, afterImports) + "\n" + importLine + content.slice(afterImports);
    }

    // Replace return with SchemaMarkup wrapper
    content = content.replace(
      /\s+return\s+<\s*Calculator\s*\/\s*>/,
      faqComponent + "      <Calculator />\n    </>"
    );

    // Also need to add the closing </> after Calculator
    // The replace above adds the opening <>, so the closing </> needs to follow

    fs.writeFileSync(filePath, content, "utf-8");
    return "page-with-faq";
  }

  return null;
}

/**
 * Update Calculator.js — update H1 (title prop passed to CalculatorShell)
 */
function updateCalculator(filePath, slug) {
  const spec = specs[slug];
  if (!spec) return null;

  let content = fs.readFileSync(filePath, "utf-8");

  // Replace the title prop in CalculatorShell
  // Pattern: title="..." or title='...'
  const titleRegex = /title="[^"]*"/;
  if (titleRegex.test(content)) {
    content = content.replace(titleRegex, `title=${quote(spec.h1)}`);
    fs.writeFileSync(filePath, content, "utf-8");
    return "calculator";
  }

  // Try single-quotes
  const titleRegex2 = /title='[^']*'/;
  if (titleRegex2.test(content)) {
    content = content.replace(titleRegex2, `title=${quote(spec.h1)}`);
    fs.writeFileSync(filePath, content, "utf-8");
    return "calculator";
  }

  return null;
}

// ============================================================
// MAIN
// ============================================================

const calculatorDirs = fs.readdirSync(CALC_DIR).filter((d) => {
  const stat = fs.statSync(path.join(CALC_DIR, d));
  return stat.isDirectory();
});

let layoutUpdated = 0;
let pageUpdated = 0;
let calculatorUpdated = 0;
let errors = [];

calculatorDirs.forEach((slug) => {
  if (!specs[slug]) {
    // Silently skip calculators not in spec
    return;
  }

  const layoutPath = path.join(CALC_DIR, slug, "layout.js");
  const pagePath = path.join(CALC_DIR, slug, "page.js");
  const calcPath = path.join(CALC_DIR, slug, "Calculator.js");

  try {
    // 1. Update layout.js metadata (title, description)
    if (fs.existsSync(layoutPath)) {
      // Skip if the metadata is in page.js instead (credit-card-payoff, student-loan-payoff, etc.)
      const pageContent = fs.existsSync(pagePath) ? fs.readFileSync(pagePath, "utf-8") : "";
      const hasMetadataInPage = pageContent.includes("export const metadata");
      
      if (!hasMetadataInPage) {
        const result = updateLayout(layoutPath, slug);
        if (result) layoutUpdated++;
      }
    }

    // 2. Update page.js metadata (for pages that have metadata there)
    if (fs.existsSync(pagePath)) {
      let pageContent = fs.readFileSync(pagePath, "utf-8");
      if (pageContent.includes("export const metadata")) {
        // This page has metadata — update it directly
        pageContent = pageContent.replace(
          /title:\s*"[^"]*"/,
          `title: ${quote(specs[slug].title)}`
        );
        pageContent = pageContent.replace(
          /description:\s*"[^"]*"/,
          `description: ${quote(specs[slug].meta)}`
        );
        // Also update OG title/description
        pageContent = pageContent.replace(
          /og:\s*\{\s*title:\s*"[^"]*"/,
          `og: {\n    title: ${quote(specs[slug].title)}`
        );
        pageContent = pageContent.replace(
          /twitter:\s*\{\s*title:\s*"[^"]*"/,
          `twitter: {\n    title: ${quote(specs[slug].title)}`
        );
        fs.writeFileSync(pagePath, pageContent, "utf-8");
        layoutUpdated++;
      }

      // Add FAQ schema to page.js
      const faqResult = updatePage(pagePath, slug);
      if (faqResult) pageUpdated++;
    }

    // 3. Update Calculator.js H1 (title prop)
    if (fs.existsSync(calcPath)) {
      const result = updateCalculator(calcPath, slug);
      if (result) calculatorUpdated++;
    }
  } catch (err) {
    errors.push({ slug, error: err.message });
  }
});

console.log("=== SEO Week 1 Fixes Complete ===");
console.log(`Calculators processed: ${Object.keys(specs).length}`);
console.log(`Layouts/Pages updated (title+meta): ${layoutUpdated}`);
console.log(`Pages with FAQ schema added: ${pageUpdated}`);
console.log(`Calculators H1 updated: ${calculatorUpdated}`);
if (errors.length > 0) {
  console.log(`\nErrors (${errors.length}):`);
  errors.forEach((e) => console.log(`  ${e.slug}: ${e.error}`));
}
console.log("\nDone!");

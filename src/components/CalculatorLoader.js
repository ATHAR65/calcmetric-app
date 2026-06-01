"use client";

import dynamic from "next/dynamic";

/**
 * Map of blog/calculator slugs to their dynamically imported calculator components.
 * This mapping must be kept in sync with scripts/embed-calculators-in-blogs.js
 */
const calculatorComponents = {
  "capital-gains-tax-calculator-2026": dynamic(() =>
    import("@/app/calculators/capital-gains-tax-calculator/Calculator")
  ),
  "rental-property-roi-calculator-2026": dynamic(() =>
    import("@/app/calculators/rental-property-roi-calculator/Calculator")
  ),
  "amazon-fba-fee-calculator-2026": dynamic(() =>
    import("@/app/calculators/amazon-fba-fee-calculator/Calculator")
  ),
  "hourly-to-annual-salary-calculator-uk-2026": dynamic(() =>
    import("@/app/calculators/hourly-to-annual-salary-calculator-uk/Calculator")
  ),
  "us-import-tariff-calculator-2026": dynamic(() =>
    import("@/app/calculators/us-import-tariff-calculator/Calculator")
  ),
  "side-hustle-tax-calculator-2026": dynamic(() =>
    import("@/app/calculators/side-hustle-tax-calculator/Calculator")
  ),
  "irs-mileage-deduction-calculator-2026": dynamic(() =>
    import("@/app/calculators/irs-mileage-deduction-calculator/Calculator")
  ),
  "solo-401k-contribution-calculator-2026": dynamic(() =>
    import("@/app/calculators/solo-401k-contribution-calculator/Calculator")
  ),
  "paypal-fee-calculator-2026": dynamic(() =>
    import("@/app/calculators/paypal-fee-calculator/Calculator")
  ),
  "texas-paycheck-calculator-2026": dynamic(() =>
    import("@/app/calculators/texas-paycheck-calculator/Calculator")
  ),
  "airbnb-host-net-income-2026": dynamic(() =>
    import("@/app/calculators/airbnb-host-net-income/Calculator")
  ),
  "residential-solar-panel-roi-2026": dynamic(() =>
    import("@/app/calculators/residential-solar-panel-roi/Calculator")
  ),
  "ev-charging-vs-gas-savings-2026": dynamic(() =>
    import("@/app/calculators/ev-charging-vs-gas-savings/Calculator")
  ),
  "freelancer-platform-fee-comparison-2026": dynamic(() =>
    import("@/app/calculators/freelancer-platform-fee-comparison/Calculator")
  ),
  "california-1099-tax-calculator-2026": dynamic(() =>
    import("@/app/calculators/california-1099-tax-calculator/Calculator")
  ),
  "doordash-tax-estimator-2026": dynamic(() =>
    import("@/app/calculators/doordash-tax-estimator/Calculator")
  ),
  "stripe-fee-calculator-2026": dynamic(() =>
    import("@/app/calculators/stripe-fee-merchant-calculator/Calculator")
  ),
  "ebay-seller-fee-profit-2026": dynamic(() =>
    import("@/app/calculators/ebay-seller-fee-profit/Calculator")
  ),
  "ecommerce-profit-margin-calculator-2026": dynamic(() =>
    import("@/app/calculators/ecommerce-net-profit-margin/Calculator")
  ),
  "small-business-tax-deduction-calculator-2026": dynamic(() =>
    import("@/app/calculators/small-business-tax-deduction-calculator/Calculator")
  ),
  "gig-economy-net-income-calculator-2026": dynamic(() =>
    import("@/app/calculators/gig-economy-net-income-calculator/Calculator")
  ),
  "credit-card-payoff-calculator-2026": dynamic(() =>
    import("@/app/calculators/credit-card-payoff-calculator/Calculator")
  ),
  "student-loan-payoff-calculator-2026": dynamic(() =>
    import("@/app/calculators/student-loan-payoff-calculator/Calculator")
  ),
  "car-loan-affordability-calculator-2026": dynamic(() =>
    import("@/app/calculators/car-loan-affordability-calculator-2026/Calculator")
  ),
  "retirement-savings-calculator-2026": dynamic(() =>
    import("@/app/calculators/retirement-savings-calculator-2026/Calculator")
  ),
  "college-savings-calculator-2026": dynamic(() =>
    import("@/app/calculators/college-savings-calculator-2026/Calculator")
  ),
  "roth-vs-traditional-ira-calculator-2026": dynamic(() =>
    import("@/app/calculators/roth-vs-traditional-ira-calculator-2026/Calculator")
  ),
  "emergency-fund-calculator": dynamic(() =>
    import("@/app/calculators/emergency-fund-calculator/Calculator")
  ),
  "net-worth-calculator": dynamic(() =>
    import("@/app/calculators/net-worth-calculator/Calculator")
  ),
  "mortgage-refinance-calculator-2026": dynamic(() =>
    import("@/app/calculators/mortgage-refinance-calculator-2026/Calculator")
  ),
  "loan-comparison-calculator": dynamic(() =>
    import("@/app/calculators/loan-comparison-calculator/Calculator")
  ),
  "savings-goal-calculator": dynamic(() =>
    import("@/app/calculators/savings-goal-calculator/Calculator")
  ),
  "inflation-calculator": dynamic(() =>
    import("@/app/calculators/inflation-calculator/Calculator")
  ),
  "cost-of-living-calculator": dynamic(() =>
    import("@/app/calculators/cost-of-living-calculator/Calculator")
  ),
  "commission-calculator": dynamic(() =>
    import("@/app/calculators/commission-calculator/Calculator")
  ),
  "401k-retirement-calculator": dynamic(() =>
    import("@/app/calculators/401k-retirement-calculator/Calculator")
  ),
  "budget-calculator": dynamic(() =>
    import("@/app/calculators/budget-calculator/Calculator")
  ),
  "mortgage-calculator-us": dynamic(() =>
    import("@/app/calculators/mortgage-calculator-us/Calculator")
  ),
  "roth-ira-growth-calculator": dynamic(() =>
    import("@/app/calculators/roth-ira-growth-calculator/Calculator")
  ),
  "amortization-calculator": dynamic(() =>
    import("@/app/calculators/amortization-calculator/Calculator")
  ),
  "hourly-wage-calculator-us": dynamic(() =>
    import("@/app/calculators/hourly-wage-calculator-us/Calculator")
  ),
  "dti-ratio-calculator": dynamic(() =>
    import("@/app/calculators/dti-ratio-calculator/Calculator")
  ),
  "amazon-seller-fee-calculator-2026": dynamic(() =>
    import("@/app/calculators/amazon-seller-fee-calculator-2026/Calculator")
  ),
  "crypto-tax-calculator-2026": dynamic(() =>
    import("@/app/calculators/crypto-tax-calculator-2026/Calculator")
  ),
  "dividend-tax-calculator-2026": dynamic(() =>
    import("@/app/calculators/dividend-tax-calculator-2026/Calculator")
  ),
  "etsy-fee-calculator-2026": dynamic(() =>
    import("@/app/calculators/etsy-fee-calculator-2026/Calculator")
  ),
  "florida-paycheck-calculator-2026": dynamic(() =>
    import("@/app/calculators/florida-paycheck-calculator-2026/Calculator")
  ),
  "home-affordability-calculator-2026": dynamic(() =>
    import("@/app/calculators/home-affordability-calculator-2026/Calculator")
  ),
  "new-york-paycheck-calculator-2026": dynamic(() =>
    import("@/app/calculators/new-york-paycheck-calculator-2026/Calculator")
  ),
  "shopify-profit-calculator-2026": dynamic(() =>
    import("@/app/calculators/shopify-profit-calculator-2026/Calculator")
  ),
  "uber-tax-calculator-2026": dynamic(() =>
    import("@/app/calculators/uber-tax-calculator-2026/Calculator")
  ),
  "mortgage-calculator-uk-2026": dynamic(() =>
    import("@/app/calculators/mortgage-calculator-uk/Calculator")
  ),
  "national-insurance-calculator-uk-2026": dynamic(() =>
    import("@/app/calculators/national-insurance-calculator-uk/Calculator")
  ),
  "self-assessment-tax-calculator-uk-2026": dynamic(() =>
    import("@/app/calculators/self-assessment-tax-calculator-uk/Calculator")
  ),
  "income-tax-calculator-uk-2026": dynamic(() =>
    import("@/app/calculators/income-tax-calculator-uk/Calculator")
  ),
  "vat-calculator-uk-2026": dynamic(() =>
    import("@/app/calculators/vat-calculator-uk/Calculator")
  ),
};

export default function CalculatorLoader({ slug }) {
  const Component = calculatorComponents[slug];
  if (!Component) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        Calculator not found for: {slug}
      </div>
    );
  }
  return <Component />;
}

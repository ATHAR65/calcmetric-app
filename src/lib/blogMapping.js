import { blogPosts } from "./siteConfig";

const blogSlugIndex = new Map(blogPosts.map((p) => [p.slug, p]));

const calcToBlogSlug = {
  "doordash-tax-estimator": "doordash-tax-estimator-2026",
  "texas-paycheck-calculator": "texas-paycheck-calculator-2026",
  "california-1099-tax-calculator": "california-1099-tax-calculator-2026",
  "stripe-fee-merchant-calculator": "stripe-fee-calculator-2026",
  "ecommerce-net-profit-margin": "ecommerce-profit-margin-calculator-2026",
  "freelancer-platform-fee-comparison": "freelancer-platform-fee-comparison-2026",
  "ev-charging-vs-gas-savings": "ev-charging-vs-gas-savings-2026",
  "residential-solar-panel-roi": "residential-solar-panel-roi-2026",
  "ebay-seller-fee-profit": "ebay-seller-fee-profit-2026",
  "airbnb-host-net-income": "airbnb-host-net-income-2026",
  "rental-property-roi-calculator": "rental-property-roi-calculator-2026",
  "us-import-tariff-calculator": "us-import-tariff-calculator-2026",
  "side-hustle-tax-calculator": "side-hustle-tax-calculator-2026",
  "irs-mileage-deduction-calculator": "irs-mileage-deduction-calculator-2026",
  "solo-401k-contribution-calculator": "solo-401k-contribution-calculator-2026",
  "paypal-fee-calculator": "paypal-fee-calculator-2026",
  "vat-calculator-uk": "vat-calculator-uk-2026",
  "income-tax-calculator-uk": "income-tax-calculator-uk-2026",
  "hourly-to-annual-salary-calculator-uk": "hourly-to-annual-salary-calculator-uk-2026",
  "capital-gains-tax-calculator": "capital-gains-tax-calculator-2026",
  "uber-tax-calculator-2026": "uber-tax-calculator-2026",
  "new-york-paycheck-calculator-2026": "new-york-paycheck-calculator-2026",
  "florida-paycheck-calculator-2026": "florida-paycheck-calculator-2026",
  "etsy-fee-calculator-2026": "etsy-fee-calculator-2026",
  "shopify-profit-calculator-2026": "shopify-profit-calculator-2026",
  "self-employment-tax-calculator-2026": "self-employment-tax-tips-2026",
  "home-affordability-calculator-2026": "home-affordability-calculator-2026",
  "dividend-tax-calculator-2026": "dividend-tax-calculator-2026",
  "amazon-seller-fee-calculator-2026": "amazon-seller-fee-calculator-2026",
  "crypto-tax-calculator-2026": "crypto-tax-calculator-2026",
  "small-business-tax-deduction-calculator": "small-business-tax-deduction-calculator-2026",
  "gig-economy-net-income-calculator": "gig-economy-net-income-calculator-2026",
  "credit-card-payoff-calculator": "credit-card-payoff-calculator-2026",
  "student-loan-payoff-calculator": "student-loan-payoff-calculator-2026",
  "car-loan-affordability-calculator-2026": "car-loan-affordability-calculator-2026",
  "retirement-savings-calculator-2026": "retirement-savings-calculator-2026",
  "college-savings-calculator-2026": "college-savings-calculator-2026",
  "roth-vs-traditional-ira-calculator-2026": "roth-vs-traditional-ira-calculator-2026",
  "emergency-fund-calculator": "emergency-fund-calculator",
  "net-worth-calculator": "net-worth-calculator",
  "mortgage-refinance-calculator-2026": "mortgage-refinance-calculator-2026",
  "loan-comparison-calculator": "loan-comparison-calculator",
  "savings-goal-calculator": "savings-goal-calculator",
  "inflation-calculator": "inflation-calculator",
  "cost-of-living-calculator": "cost-of-living-calculator",
  "commission-calculator": "commission-calculator",
  "401k-retirement-calculator": "401k-retirement-calculator",
  "budget-calculator": "budget-calculator",
  "mortgage-calculator-us": "mortgage-calculator-us",
  "roth-ira-growth-calculator": "roth-ira-growth-calculator",
  "amortization-calculator": "amortization-calculator",
  "hourly-wage-calculator-us": "hourly-wage-calculator-us",
  "dti-ratio-calculator": "dti-ratio-calculator",
  "mortgage-calculator-uk": "mortgage-calculator-uk-2026",
  "national-insurance-calculator-uk": "national-insurance-calculator-uk-2026",
  "self-assessment-tax-calculator-uk": "self-assessment-tax-calculator-uk-2026",
  "amazon-fba-fee-calculator": "amazon-fba-fee-calculator-2026",
};

export function getBlogSlugForCalculator(calcSlug) {
  const blogSlug = calcToBlogSlug[calcSlug];
  if (!blogSlug) return null;
  if (!blogSlugIndex.has(blogSlug)) return null;
  return blogSlug;
}

export function getBlogPostForCalculator(calcSlug) {
  const blogSlug = getBlogSlugForCalculator(calcSlug);
  if (!blogSlug) return null;
  return blogSlugIndex.get(blogSlug);
}

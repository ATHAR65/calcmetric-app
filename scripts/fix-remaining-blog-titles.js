const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "..", "src", "app", "blog");
const fixes = {
  "budget-calculator": "Budget Calculator 2026: Complete Guide | TheMetricApp",
  "savings-goal-calculator": "Savings Goal Calculator 2026: Complete Guide | TheMetricApp",
  "loan-comparison-calculator": "Loan Comparison Calculator 2026: Complete Guide | TheMetricApp",
  "retirement-savings-calculator-2026": "Retirement Savings Calculator 2026: Complete Guide | TheMetricApp",
  "emergency-fund-calculator": "Emergency Fund Calculator 2026: Complete Guide | TheMetricApp",
  "cost-of-living-calculator": "Cost of Living Calculator 2026: Complete Guide | TheMetricApp",
  "dividend-tax-calculator-2026": "Dividend Tax Calculator 2026: Complete Guide | TheMetricApp",
  "amazon-fba-fee-calculator-2026": "Amazon FBA Fee Calculator 2026: Complete Guide | TheMetricApp",
  "amazon-seller-fee-calculator-2026": "Amazon Seller Fee Calculator 2026: Complete Guide | TheMetricApp",
  "rental-property-roi-calculator-2026": "Rental Property ROI Calculator 2026: Complete Guide | TheMetricApp",
  "us-import-tariff-calculator-2026": "US Import Tariff Calculator 2026: Complete Guide | TheMetricApp",
  "college-savings-calculator-2026": "College Savings Calculator 2026: Complete Guide | TheMetricApp",
};

for (const [slug, title] of Object.entries(fixes)) {
  const p = path.join(blogDir, slug, "page.js");
  if (!fs.existsSync(p)) continue;
  let c = fs.readFileSync(p, "utf8");
  c = c.replace(/title:\s*\{\s*absolute:\s*"[^"]+"/, `title: { absolute: "${title}"`);
  fs.writeFileSync(p, c);
  console.log("Title fixed:", slug);
}

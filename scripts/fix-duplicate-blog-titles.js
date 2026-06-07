/**
 * Fix duplicate title tags: differentiate blog titles and point canonicals to calculator URLs.
 * Run: node scripts/fix-duplicate-blog-titles.js
 */
const fs = require("fs");
const path = require("path");

const siteRoot = path.resolve(__dirname, "..");
const blogDir = path.join(siteRoot, "src", "app", "blog");
const calcDir = path.join(siteRoot, "src", "app", "calculators");
const siteUrl = "https://www.themetricapp.com";

function parseCalcTitle(calcSlug) {
  const layoutPath = path.join(calcDir, calcSlug, "layout.js");
  if (!fs.existsSync(layoutPath)) return null;
  const content = fs.readFileSync(layoutPath, "utf8");
  const m = content.match(/title:\s*\{\s*absolute:\s*"([^"]+)"/);
  return m ? m[1] : null;
}

// Map blog folder -> calculator slug
const BLOG_TO_CALC = {
  "amortization-calculator": "amortization-calculator",
  "irs-mileage-deduction-calculator-2026": "irs-mileage-deduction-calculator",
  "side-hustle-tax-calculator-2026": "side-hustle-tax-calculator",
  "small-business-tax-deduction-calculator-2026": "small-business-tax-deduction-calculator",
  "capital-gains-tax-calculator-2026": "capital-gains-tax-calculator",
  "ebay-seller-fee-profit-2026": "ebay-seller-fee-profit",
  "car-loan-affordability-calculator-2026": "car-loan-affordability-calculator-2026",
  "home-affordability-calculator-2026": "home-affordability-calculator-2026",
  "retirement-savings-calculator-2026": "retirement-savings-calculator-2026",
  "student-loan-payoff-calculator-2026": "student-loan-payoff-calculator",
  "texas-paycheck-calculator-2026": "texas-paycheck-calculator",
  "florida-paycheck-calculator-2026": "florida-paycheck-calculator-2026",
  "new-york-paycheck-calculator-2026": "new-york-paycheck-calculator-2026",
  "mortgage-refinance-calculator-2026": "mortgage-refinance-calculator-2026",
  "college-savings-calculator-2026": "college-savings-calculator-2026",
  "roth-ira-growth-calculator": "roth-ira-growth-calculator",
  "gig-economy-net-income-calculator-2026": "gig-economy-net-income-calculator",
  "airbnb-host-net-income-2026": "airbnb-host-net-income",
  "loan-comparison-calculator": "loan-comparison-calculator",
  "savings-goal-calculator": "savings-goal-calculator",
  "budget-calculator": "budget-calculator",
  "inflation-calculator": "inflation-calculator",
  "amazon-fba-fee-calculator-2026": "amazon-fba-fee-calculator",
  "amazon-seller-fee-calculator-2026": "amazon-seller-fee-calculator-2026",
  "shopify-profit-calculator-2026": "shopify-profit-calculator-2026",
  "crypto-tax-calculator-2026": "crypto-tax-calculator-2026",
  "dividend-tax-calculator-2026": "dividend-tax-calculator-2026",
  "credit-card-payoff-calculator-2026": "credit-card-payoff-calculator",
  "emergency-fund-calculator": "emergency-fund-calculator",
  "cost-of-living-calculator": "cost-of-living-calculator",
  "401k-retirement-calculator": "401k-retirement-calculator",
  "commission-calculator": "commission-calculator",
  "hourly-wage-calculator-us": "hourly-wage-calculator-us",
  "mortgage-calculator-us": "mortgage-calculator-us",
  "rental-property-roi-calculator-2026": "rental-property-roi-calculator",
  "ecommerce-profit-margin-calculator-2026": "ecommerce-net-profit-margin",
  "california-1099-tax-calculator-2026": "california-1099-tax-calculator",
  "roth-vs-traditional-ira-calculator-2026": "roth-vs-traditional-ira-calculator-2026",
  "us-import-tariff-calculator-2026": "us-import-tariff-calculator",
};

function normalizeTitle(t) {
  return t
    .replace(/\s*\|\s*TheMetricApp\s*$/, "")
    .replace(/[—–-]/g, " ")
    .replace(/:\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

let fixed = 0;
for (const [blogSlug, calcSlug] of Object.entries(BLOG_TO_CALC)) {
  const pagePath = path.join(blogDir, blogSlug, "page.js");
  if (!fs.existsSync(pagePath)) continue;

  const calcTitle = parseCalcTitle(calcSlug);
  if (!calcTitle) continue;

  let content = fs.readFileSync(pagePath, "utf8");
  const blogTitleMatch = content.match(/title:\s*\{\s*absolute:\s*"([^"]+)"/);
  if (!blogTitleMatch) continue;

  const blogTitle = blogTitleMatch[1];
  const calcNorm = normalizeTitle(calcTitle);
  const blogNorm = normalizeTitle(blogTitle);

  // Check if titles are duplicates or very similar
  const isDuplicate =
    blogTitle === calcTitle ||
    blogNorm === calcNorm ||
    blogNorm.includes(calcNorm.slice(0, 30)) ||
    calcNorm.includes(blogNorm.slice(0, 30));

  if (!isDuplicate && !content.includes(`canonical: \`\${siteUrl}/calculators/`)) {
    // Still fix canonical to calculator if pointing to blog
    const canonicalBlog = content.match(/canonical:\s*`\$\{siteUrl\}\/blog\/[^`]+`/);
    if (canonicalBlog) {
      content = content.replace(
        /alternates:\s*\{\s*canonical:\s*`[^`]+`/,
        `alternates: { canonical: \`\${siteUrl}/calculators/${calcSlug}\``
      );
      fs.writeFileSync(pagePath, content, "utf8");
      fixed++;
      console.log(`Canonical fixed: ${blogSlug}`);
    }
    continue;
  }

  // Make blog title unique by adding "Guide"
  let newTitle = blogTitle;
  if (blogTitle === calcTitle || blogNorm === calcNorm) {
    const base = blogTitle.replace(/\s*\|\s*TheMetricApp\s*$/, "");
    if (!base.toLowerCase().includes("guide")) {
      newTitle = `${base}: Complete Guide | TheMetricApp`;
    }
  }

  content = content.replace(
    /title:\s*\{\s*absolute:\s*"[^"]+"/,
    `title: { absolute: "${newTitle}"`
  );

  // Point canonical to calculator URL
  content = content.replace(
    /alternates:\s*\{[^}]*canonical:\s*`[^`]+`/,
    `alternates: { canonical: \`\${siteUrl}/calculators/${calcSlug}\``
  );

  // Also fix openGraph url if pointing to blog
  content = content.replace(
    new RegExp(`url: "https://www.themetricapp.com/blog/${blogSlug}"`, "g"),
    `url: "https://www.themetricapp.com/calculators/${calcSlug}"`
  );

  fs.writeFileSync(pagePath, content, "utf8");
  fixed++;
  console.log(`Fixed: ${blogSlug} → "${newTitle}"`);
}

console.log(`Done. Fixed ${fixed} blog pages.`);

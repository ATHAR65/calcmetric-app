/**
 * embed-calculators-in-blogs.js
 *
 * For each blog post that has a matching calculator, this script:
 * 1. Adds CalculatorEmbed import
 * 2. Replaces CTA "Try the Calculator" sections with the embedded calculator
 *
 * Note: CalculatorLoader handles all dynamic imports internally.
 * Blog pages only need: import CalculatorEmbed and <CalculatorEmbed slug="..." />
 */

const fs = require("fs");
const path = require("path");

// Blog Slug → Calculator Directory mapping
const BLOG_TO_CALC = {
  "capital-gains-tax-calculator-2026": "capital-gains-tax-calculator",
  "rental-property-roi-calculator-2026": "rental-property-roi-calculator",
  "amazon-fba-fee-calculator-2026": "amazon-fba-fee-calculator",
  "hourly-to-annual-salary-calculator-uk-2026": "hourly-to-annual-salary-calculator-uk",
  "us-import-tariff-calculator-2026": "us-import-tariff-calculator",
  "side-hustle-tax-calculator-2026": "side-hustle-tax-calculator",
  "irs-mileage-deduction-calculator-2026": "irs-mileage-deduction-calculator",
  "solo-401k-contribution-calculator-2026": "solo-401k-contribution-calculator",
  "paypal-fee-calculator-2026": "paypal-fee-calculator",
  "texas-paycheck-calculator-2026": "texas-paycheck-calculator",
  "airbnb-host-net-income-2026": "airbnb-host-net-income",
  "residential-solar-panel-roi-2026": "residential-solar-panel-roi",
  "ev-charging-vs-gas-savings-2026": "ev-charging-vs-gas-savings",
  "freelancer-platform-fee-comparison-2026": "freelancer-platform-fee-comparison",
  "california-1099-tax-calculator-2026": "california-1099-tax-calculator",
  "doordash-tax-estimator-2026": "doordash-tax-estimator",
  "stripe-fee-calculator-2026": "stripe-fee-merchant-calculator",
  "ebay-seller-fee-profit-2026": "ebay-seller-fee-profit",
  "ecommerce-profit-margin-calculator-2026": "ecommerce-net-profit-margin",
  "small-business-tax-deduction-calculator-2026": "small-business-tax-deduction-calculator",
  "gig-economy-net-income-calculator-2026": "gig-economy-net-income-calculator",
  "credit-card-payoff-calculator-2026": "credit-card-payoff-calculator",
  "student-loan-payoff-calculator-2026": "student-loan-payoff-calculator",
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
  "amazon-seller-fee-calculator-2026": "amazon-seller-fee-calculator-2026",
  "crypto-tax-calculator-2026": "crypto-tax-calculator-2026",
  "dividend-tax-calculator-2026": "dividend-tax-calculator-2026",
  "etsy-fee-calculator-2026": "etsy-fee-calculator-2026",
  "florida-paycheck-calculator-2026": "florida-paycheck-calculator-2026",
  "home-affordability-calculator-2026": "home-affordability-calculator-2026",
  "new-york-paycheck-calculator-2026": "new-york-paycheck-calculator-2026",
  "shopify-profit-calculator-2026": "shopify-profit-calculator-2026",
  "uber-tax-calculator-2026": "uber-tax-calculator-2026",
  "mortgage-calculator-uk-2026": "mortgage-calculator-uk",
  "national-insurance-calculator-uk-2026": "national-insurance-calculator-uk",
  "self-assessment-tax-calculator-uk-2026": "self-assessment-tax-calculator-uk",
  "income-tax-calculator-uk-2026": "income-tax-calculator-uk",
  "vat-calculator-uk-2026": "vat-calculator-uk",
};

const PROJECT_ROOT = path.resolve(__dirname, "..");

const CTA_DIV_START = '<div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">';

// Process a single blog page
function processBlogPage(blogSlug) {
  const blogDir = path.join(PROJECT_ROOT, "src", "app", "blog", blogSlug);
  const pageFile = path.join(blogDir, "page.js");

  if (!fs.existsSync(pageFile)) {
    console.log(`  ⚠️  No page.js found at blog/${blogSlug}`);
    return false;
  }

  let content = fs.readFileSync(pageFile, "utf-8");

  // --- Step 1: Remove old inline dynamic imports if present ---
  // Remove: import dynamic from "next/dynamic";
  content = content.replace(/^import dynamic from "next\/dynamic";\n/gm, "");
  // Remove: const Calculator = dynamic(() => import("..."), { ssr: false });
  content = content.replace(/^const Calculator = dynamic\(\(\) => import\("[^"]+"\), \{ ssr: false \}\);\n/gm, "");

  // --- Step 2: Remove old CalculatorEmbed patterns (with children) ---
  // Remove multi-line: <CalculatorEmbed slug="...">\n  <Calculator />\n</CalculatorEmbed>
  content = content.replace(
    /<CalculatorEmbed slug="[^"]+">\s*\n\s*<Calculator\s*\/>\s*\n\s*<\/CalculatorEmbed>/g,
    ""
  );

  // --- Step 3: Remove CTA sections ---
  let previousContent = "";
  while (previousContent !== content) {
    previousContent = content;
    const startIdx = content.indexOf(CTA_DIV_START);
    if (startIdx === -1) break;

    const endIdx = findMatchingClosingDiv(content, startIdx);
    if (endIdx === -1) {
      console.log(`  ⚠️  Could not find matching </div> for CTA in ${blogSlug}`);
      break;
    }

    const afterEnd = content[endIdx + 6] === "\n" ? endIdx + 7 : endIdx + 6;
    content = content.slice(0, startIdx) + content.slice(afterEnd);
  }

  // --- Step 4: Insert CalculatorEmbed after header ---
  // First check if we already have the new-style embed
  if (content.includes('<CalculatorEmbed slug="')) {
    console.log(`  ⏭️  Already has new embed: ${blogSlug}`);
    fs.writeFileSync(pageFile, content, "utf-8");
    return true;
  }

  const headerEndIdx = content.indexOf("</header>");
  let insertPoint = -1;

  if (headerEndIdx !== -1) {
    insertPoint = headerEndIdx + 9;
    while (insertPoint < content.length && /[\s\n\r]/.test(content[insertPoint])) {
      insertPoint++;
    }
  }

  if (insertPoint === -1) {
    const articleOpenIdx = content.indexOf("<article");
    if (articleOpenIdx !== -1) {
      const articleCloseBracket = content.indexOf(">", articleOpenIdx);
      insertPoint = articleCloseBracket + 1;
    } else {
      const proseIdx = content.indexOf('className="prose');
      if (proseIdx !== -1) {
        const proseCloseBracket = content.indexOf(">", proseIdx);
        insertPoint = proseCloseBracket + 2;
      }
    }
  }

  if (insertPoint === -1) {
    console.log(`  ❌ Could not find insertion point in ${blogSlug}`);
    return false;
  }

  const embedBlock = `\n\n        <CalculatorEmbed slug="${blogSlug}" />\n\n      `;
  content = content.slice(0, insertPoint) + embedBlock + content.slice(insertPoint);

  // --- Step 5: Add CalculatorEmbed import if not present ---
  if (!content.includes('import CalculatorEmbed from "@/components/CalculatorEmbed"')) {
    const importLines = content.match(/^import .+ from .+$/gm);
    if (importLines) {
      const lastImport = importLines[importLines.length - 1];
      const lastImportIdx = content.lastIndexOf(lastImport);
      const afterImport = lastImportIdx + lastImport.length;
      content = content.slice(0, afterImport) +
        '\nimport CalculatorEmbed from "@/components/CalculatorEmbed";' +
        content.slice(afterImport);
    } else {
      content = 'import CalculatorEmbed from "@/components/CalculatorEmbed";\n\n' + content;
    }
  }

  // Clean up: Remove multiple consecutive blank lines (3+ → 2 max)
  content = content.replace(/\n{4,}/g, "\n\n\n");

  fs.writeFileSync(pageFile, content, "utf-8");
  console.log(`  ✅ ${blogSlug}: Embedded calculator`);
  return true;
}

function findMatchingClosingDiv(content, startIdx) {
  let depth = 0;
  const openTagEnd = content.indexOf(">", startIdx);
  if (openTagEnd === -1) return -1;
  let i = openTagEnd + 1;

  while (i < content.length) {
    const nextOpen = content.indexOf("<div", i);
    const nextClose = content.indexOf("</div>", i);

    if (nextClose === -1) return -1;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      i = nextOpen + 4;
    } else {
      if (depth === 0) return nextClose;
      depth--;
      i = nextClose + 6;
    }
  }
  return -1;
}

// Main execution
function main() {
  console.log("\n🚀 Starting blog → calculator embed process...\n");

  const entries = Object.entries(BLOG_TO_CALC);
  console.log(`📊 ${entries.length} blog→calculator mappings found\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const [blogSlug] of entries) {
    try {
      const result = processBlogPage(blogSlug);
      if (result) successCount++;
      else errorCount++;
    } catch (err) {
      console.log(`  ❌ ${blogSlug}: Error — ${err.message}`);
      errorCount++;
    }
  }

  console.log(`\n📋 Summary:`);
  console.log(`   ✅ Updated: ${successCount}`);
  console.log(`   ⚠️  Errors: ${errorCount}`);
  console.log(`\n✨ Done!\n`);
}

main();

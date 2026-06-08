const fs = require('fs');
const path = require('path');

const siteRoot = path.resolve(__dirname, '..');

// Find all layout.js and page.js files under src/app
function findFiles(dir, fileName) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && item.name !== 'node_modules' && item.name !== '.next') {
      results.push(...findFiles(fullPath, fileName));
    } else if (item.name === fileName) {
      results.push(fullPath);
    }
  }
  return results;
}

const layoutFiles = findFiles(path.join(siteRoot, 'src', 'app'), 'layout.js');
const pageFiles = findFiles(path.join(siteRoot, 'src', 'app'), 'page.js');
const allFiles = [...layoutFiles, ...pageFiles];

const MAX_TITLE_LENGTH = 43; // So final title with " | TheMetricApp" = ≤60 chars

let totalFixed = 0;
let totalFilesModified = 0;

for (const filePath of allFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  const relPath = path.relative(siteRoot, filePath).replace(/\\/g, '/');
  
  // Skip root layout.js
  if (relPath === 'src/app/layout.js') continue;
  
  // Skip non-content pages
  if (relPath.includes('error.js') || relPath.includes('loading.js') || relPath.includes('not-found.js') || relPath.includes('sitemap.js')) continue;
  
  // Strategy: Find all title: "..." patterns and fix ones that are too long
  // We need to handle three types:
  // 1. Top-level title: "..." (main page title - most important)
  // 2. openGraph: { title: "..." }
  // 3. twitter: { title: "..." }
  
  // Use a line-by-line approach with state tracking
  const lines = content.split('\n');
  const newLines = [];
  let inOpenGraph = false;
  let inTwitter = false;
  let braceDepth = 0;
  let fileModified = false;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Track context: are we inside openGraph or twitter blocks?
    if (line.includes('openGraph:') && !line.includes('//')) {
      inOpenGraph = true;
      inTwitter = false;
      braceDepth = 0;
    }
    if (line.includes('twitter:') && !line.includes('//') && !line.includes('twitterCard')) {
      inTwitter = true;
      inOpenGraph = false;
      braceDepth = 0;
    }
    
    // Track brace depth for nested objects
    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }
    
    // Reset context when we exit a block
    if (braceDepth <= 0 && (inOpenGraph || inTwitter)) {
      if (braceDepth <= 0) {
        inOpenGraph = false;
        inTwitter = false;
      }
    }
    
    // Match title: "..." patterns (both single and double quotes, and template literals)
    const titleMatch = line.match(/^(\s*title:\s*)(".*?")(.*)$/);
    if (!titleMatch) {
      // Also try single quotes
      const titleMatchSingle = line.match(/^(\s*title:\s*)('.*?')(.*)$/);
      if (titleMatchSingle) {
        const [, prefix, titleStr, suffix] = titleMatchSingle;
        const rawTitle = titleStr.slice(1, -1); // Remove quotes
        const finalTitleLength = rawTitle.length + 17; // +17 for " | TheMetricApp"
        
        if (finalTitleLength > 60 && !inOpenGraph && !inTwitter) {
          const newTitle = shortenTitle(rawTitle);
          if (newTitle !== rawTitle) {
            line = `${prefix}'${newTitle}'${suffix}`;
            fileModified = true;
            totalFixed++;
            console.log(`[FIXED] ${relPath}: "${rawTitle}" (${rawTitle.length}) → "${newTitle}" (${newTitle.length})`);
          }
        }
      }
      newLines.push(line);
      continue;
    }
    
    const [, prefix, titleStr, suffix] = titleMatch;
    const rawTitle = titleStr.slice(1, -1); // Remove quotes
    const finalTitleLength = rawTitle.length + 17; // +17 for " | TheMetricApp"
    
    if (finalTitleLength > 60) {
      let newTitle;
      
      if (inOpenGraph || inTwitter) {
        // For OG/Twitter titles, allow slightly longer but still try to shorten
        if (rawTitle.length > 60) {
          newTitle = shortenTitle(rawTitle, true);
        } else {
          newLines.push(line);
          continue;
        }
      } else {
        // Main title - must be ≤43 chars
        newTitle = shortenTitle(rawTitle);
      }
      
      if (newTitle !== rawTitle) {
        line = `${prefix}"${newTitle}"${suffix}`;
        fileModified = true;
        totalFixed++;
        const context = inOpenGraph ? ' (OG)' : inTwitter ? ' (Twitter)' : ' (main)';
        console.log(`[FIXED] ${relPath}${context}: "${rawTitle}" (${rawTitle.length}) → "${newTitle}" (${newTitle.length})`);
      }
    }
    
    newLines.push(line);
  }
  
  if (fileModified) {
    const newContent = newLines.join('\n');
    fs.writeFileSync(filePath, newContent, 'utf8');
    totalFilesModified++;
  }
}

console.log(`\n=== Summary ===`);
console.log(`Files modified: ${totalFilesModified}`);
console.log(`Titles fixed: ${totalFixed}`);

function shortenTitle(title, isOgOrTwitter = false) {
  let short = title;
  
  // Remove "| TheMetricApp" suffix if present (template adds it for main title)
  // But for OG/Twitter, we might want to keep it
  if (!isOgOrTwitter) {
    short = short.replace(/\s*\|\s*TheMetricApp\s*$/, '');
  }
  
  const maxLen = isOgOrTwitter ? 60 : MAX_TITLE_LENGTH;
  
  // If already within limits, return as-is
  if (short.length <= maxLen) return short;
  
  // Strategy 1: Remove "Free " prefix
  let candidate = short.replace(/^Free\s+/, '');
  if (candidate.length <= maxLen) return candidate;
  
  // Strategy 2: Remove "Complete Guide to " or "Complete Guide"
  candidate = short.replace(/:\s*Complete Guide to\s+/, ': ');
  candidate = candidate.replace(/:\s*Complete Guide/, '');
  if (candidate.length <= maxLen) return candidate;
  
  // Strategy 3: For blog-style titles, remove everything after ":"
  // but keep a short description
  if (short.includes(':')) {
    const colonIdx = short.indexOf(':');
    const beforeColon = short.substring(0, colonIdx).trim();
    if (beforeColon.length <= maxLen) {
      // Try to add a short suffix
      const afterColon = short.substring(colonIdx + 1).trim();
      const shortSuffix = shortenDescription(afterColon);
      const candidate3 = `${beforeColon}: ${shortSuffix}`;
      if (candidate3.length <= maxLen) return candidate3;
      return beforeColon;
    }
  }
  
  // Strategy 4: For " — " separated titles, keep first part
  if (short.includes(' — ')) {
    const dashIdx = short.indexOf(' — ');
    const beforeDash = short.substring(0, dashIdx).trim();
    if (beforeDash.length <= maxLen) {
      // Try to add a short suffix
      const afterDash = short.substring(dashIdx + 3).trim();
      const shortSuffix = shortenDescription(afterDash);
      const candidate4 = `${beforeDash} — ${shortSuffix}`;
      if (candidate4.length <= maxLen) return candidate4;
      return beforeDash;
    }
    // Even the first part is too long, try to shorten it
    if (beforeDash.length > maxLen) {
      return shortenFurther(beforeDash, maxLen);
    }
  }
  
  // Strategy 5: Truncate as last resort
  return shortenFurther(short, maxLen);
}

function shortenDescription(desc) {
  // Shorten common long descriptions
  let short = desc;
  
  // Remove "| TheMetricApp" 
  short = short.replace(/\s*\|\s*TheMetricApp\s*$/, '');
  
  // Shorten common phrases
  const replacements = [
    [/Self-Employment Tax Calculator/g, 'SE Tax Calculator'],
    [/Self-Employment Tax/g, 'SE Tax'],
    [/Commission & Split Calculator/g, 'Commission & Split'],
    [/Commission Calculator/g, 'Commission Calc'],
    [/Contribution Calculator/g, 'Contribution Calc'],
    [/Comparison Calculator/g, 'Comparison Calc'],
    [/Affordability Calculator/g, 'Affordability Calc'],
    [/Calculator/g, 'Calc'],
    [/Paycheck Calculator/g, 'Paycheck Calc'],
    [/Mortgage Calculator/g, 'Mortgage Calc'],
    [/Retirement Calculator/g, 'Retirement Calc'],
    [/Savings Calculator/g, 'Savings Calc'],
    [/Income Calculator/g, 'Income Calc'],
    [/Tax Calculator/g, 'Tax Calc'],
    [/Fee Calculator/g, 'Fee Calc'],
    [/Growth Calculator/g, 'Growth Calc'],
    [/Loan Calculator/g, 'Loan Calc'],
    [/Cost Calculator/g, 'Cost Calc'],
    [/Price Calculator/g, 'Price Calc'],
    [/Deduction Calculator/g, 'Deduction Calc'],
    [/Estimator/g, 'Estimator'],
    [/Platform Fee Comparison/g, 'Platform Fees'],
    [/Free\s+/g, ''],
    [/How Much House Can I Afford\?/g, 'Affordability'],
    [/How Much Should You Save\?/g, 'Savings Goal'],
    [/Track Your Financial Health/g, 'Financial Health'],
    [/Track Income, Expenses & Savings/g, 'Budget Tool'],
    [/Compare Cities & Salaries/g, 'City Comparison'],
    [/Compare Side-by-Side/g, 'Comparison'],
    [/Front-End & Back-End DTI/g, 'DTI Analysis'],
    [/Business, Medical & Charity/g, 'Deductions'],
    [/Qualified & Ordinary Dividend Tax/g, 'Dividend Tax'],
    [/UK Dividend Income Tax Estimator/g, 'UK Dividend Tax'],
    [/Class 1, 2 & 4 NI/g, 'NI Rates'],
    [/Monthly Repayments & Stamp Duty/g, 'Payments & SDLT'],
    [/Monthly Payment & Total Interest/g, 'Payments & Interest'],
    [/Short & Long-Term Gain Taxes/g, 'Capital Gains'],
    [/Snowball vs Avalanche/g, 'Debt Payoff'],
    [/Final Value Fee & Net Profit/g, 'Fees & Profit'],
    [/Listing, Transaction & Payment Fees/g, 'Etsy Fees'],
    [/Cost of Ownership/g, 'Cost Compare'],
    [/Monthly & Annual Cost Comparison/g, 'Cost Compare'],
    [/Take-Home Pay After Taxes/g, 'Take-Home Pay'],
    [/True Net Profit After Fees/g, 'Net Profit'],
    [/Margin, ROAS & ROI/g, 'Profit Metrics'],
    [/How Inflation Affects Your Purchasing Power/g, 'Purchasing Power'],
    [/Purchasing Power Over Time/g, 'Purchasing Power'],
    [/Are You on Track\?/g, 'Track Progress'],
    [/Are You on Track for Retirement\?/g, 'Retirement Track'],
    [/Project Tax-Free Savings/g, 'Tax-Free Growth'],
    [/Project Tax-Free Retirement Savings/g, 'Tax-Free Growth'],
    [/Compare IRA Types & Tax Savings/g, 'IRA Comparison'],
    [/Which Is Better\?/g, 'IRA Compare'],
    [/Reach Your Financial Target Faster/g, 'Savings Goal'],
    [/Reach Your Financial Target/g, 'Savings Goal'],
    [/Free Loan Repayment Estimator/g, 'Repayment Tool'],
    [/Free Repayment & Interest Estimator/g, 'Repayment Tool'],
    [/Tax Return Estimator/g, 'Tax Return'],
    [/SE Tax Rate & Deductions/g, 'SE Tax Guide'],
    [/Free SE Tax Estimator/g, 'SE Tax Tool'],
    [/Free CA Freelance Tax Estimator/g, 'CA Freelance Tax'],
    [/SE & State Tax/g, 'CA Tax'],
    [/Self-Employment Taxes & Deductions/g, 'SE Taxes'],
    [/Free 1099 & SE Tax Estimator/g, '1099 Tax Tool'],
    [/SE Tax & Mileage Deductions/g, 'SE Tax'],
    [/Net Payout After Fees/g, 'Net Payout'],
    [/Instant Net Payout & Surcharge Tool/g, 'Net Payout'],
    [/Calculate Net After PayPal Fees/g, 'PayPal Fees'],
    [/Calculate Net Payout After Fees/g, 'Net Payout'],
    [/Real Estate Agent Commission & Split/g, 'Agent Commission'],
    [/Real Estate Agent Commission/g, 'Agent Commission'],
    [/529 Plan & Education Funding/g, '529 Plan'],
    [/529 Plan Projection/g, '529 Growth'],
    [/Nest Egg/g, 'Savings'],
    [/Upwork vs Fiverr vs Toptal/g, 'Upwork vs Fiverr'],
    [/Upwork vs Fiverr Fees/g, 'Upwork vs Fiverr'],
    [/Payback & 25-Year Savings/g, 'Payback & Savings'],
    [/Payback & Savings/g, 'Payback ROI'],
    [/Cap Rate & Cash-on-Cash Return/g, 'ROI Metrics'],
    [/Cap Rate & Cash-on-Cash/g, 'ROI Metrics'],
    [/Duties & Landed Cost/g, 'Duties & Costs'],
    [/Duty & Landed Cost/g, 'Duties'],
    [/Add or Remove VAT Instantly/g, 'VAT Tool'],
    [/Add or Remove 20% VAT Instantly/g, 'VAT Tool'],
    [/Free UK Converter/g, 'UK Converter'],
    [/Free US Converter/g, 'US Converter'],
    [/Free FL Take-Home Pay Estimator/g, 'FL Paycheck'],
    [/Take-Home Pay No State Tax/g, 'FL Paycheck'],
    [/Free TX Take-Home Pay Estimator/g, 'TX Paycheck'],
    [/Take-Home Pay After Tax/g, 'Take-Home Pay'],
    [/Take-Home Pay After NY State Tax/g, 'NY Paycheck'],
    [/Free NY Take-Home Pay Estimator/g, 'NY Paycheck'],
    [/Free HMRC Tax Estimator/g, 'HMRC Tool'],
    [/Can You Afford That Car\?/g, 'Car Budget'],
    [/Max Out Retirement Savings/g, 'Max Savings'],
    [/Max Retirement Savings/g, 'Max Savings'],
    [/Compare Cities & Find Your Equivalent Salary/g, 'City Compare'],
    [/True Take-Home Pay/g, 'Take-Home Pay'],
    [/Gig Income Tax Estimator/g, 'Gig Tax'],
    [/Free 1099 Income Tax Estimator/g, '1099 Tax'],
    [/FBA Fees & Net Profit/g, 'FBA Fees'],
    [/Referral Fees & Net Profit/g, 'Referral Fees'],
  ];
  
  for (const [pattern, replacement] of replacements) {
    short = short.replace(pattern, replacement);
  }
  
  // Clean up extra spaces
  short = short.replace(/\s+/g, ' ').trim();
  
  // Remove trailing "| TheMetricApp" again
  short = short.replace(/\s*\|\s*TheMetricApp\s*$/, '');
  
  return short;
}

function shortenFurther(title, maxLen) {
  // Aggressive shortening
  let short = title;
  
  // Remove year variants
  short = short.replace(/\s*2025–26/g, '');
  short = short.replace(/\s*2026/g, '');
  
  if (short.length <= maxLen) return short;
  
  // Remove parenthetical content
  short = short.replace(/\s*\([^)]*\)/g, '');
  
  if (short.length <= maxLen) return short;
  
  // Truncate at word boundary
  if (short.length > maxLen) {
    short = short.substring(0, maxLen);
    // Find last space to avoid cutting words
    const lastSpace = short.lastIndexOf(' ');
    if (lastSpace > maxLen - 10) {
      short = short.substring(0, lastSpace);
    }
  }
  
  return short.trim();
}

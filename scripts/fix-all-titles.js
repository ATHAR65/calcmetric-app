const fs = require('fs');
const path = require('path');

const siteRoot = path.resolve(__dirname, '..');
const MAX_CHILD_TITLE = 43; // 43 + 17 (" | TheMetricApp") = 60

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

let totalFixed = 0;
let totalFilesModified = 0;

for (const filePath of allFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(siteRoot, filePath).replace(/\\/g, '/');

  // Skip root layout
  if (relPath === 'src/app/layout.js') continue;

  const originalContent = content;

  // ===== STRATEGY: Direct string replacement for the main title =====
  // Find the first `title: "..."` that is NOT inside openGraph or twitter
  // We do this by finding the metadata export block and extracting the top-level title

  // Step 1: Find the main title string using a state-machine approach on the raw content
  const lines = content.split('\n');
  let mainTitleIdx = -1;
  let mainTitleOld = '';
  let mainTitleLineIdx = -1;
  let braceCount = 0;
  let inMetadata = false;
  let inNested = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect start of metadata export
    if (line.match(/export\s+(const|var|let)\s+metadata\s*=/)) {
      inMetadata = true;
      braceCount = 0;
    }

    if (inMetadata) {
      // Track braces
      for (const ch of line) {
        if (ch === '{') braceCount++;
        if (ch === '}') braceCount--;
      }

      // Detect nested blocks (openGraph, twitter, other, alternates, etc.)
      if (line.match(/^\s*(openGraph|twitter|other|alternates|robots|icons)\s*:/)) {
        inNested = true;
      }

      // Reset nested when we see a closing brace at the right level
      if (inNested && line.match(/^\s*\}/)) {
        inNested = false;
      }

      // Find the main title (not inside nested blocks)
      if (!inNested && mainTitleIdx === -1) {
        const titleMatch = line.match(/^(\s*title:\s*)"([^"]+)"(.*)$/);
        if (titleMatch) {
          mainTitleIdx = i;
          mainTitleOld = titleMatch[2];
          mainTitleLineIdx = i;
          break; // Found the main title, stop
        }
      }

      // Exit metadata block
      if (braceCount <= 0 && inMetadata && mainTitleIdx !== -1) break;
      if (braceCount <= 0 && inMetadata && i > 5) break;
    }
  }

  if (mainTitleIdx === -1) continue;

  // Step 2: Check if the main title + template suffix is too long
  const finalLen = mainTitleOld.length + 17;
  if (finalLen <= 60) continue;

  // Step 3: Generate a shortened title
  const mainTitleNew = shortenMainTitle(mainTitleOld);
  if (mainTitleNew === mainTitleOld) continue;

  // Step 4: Replace the main title in the content
  // Use the exact old string to replace
  const oldTitleLine = lines[mainTitleLineIdx];
  const newTitleLine = oldTitleLine.replace(
    `"${mainTitleOld}"`,
    `"${mainTitleNew}"`
  );
  lines[mainTitleLineIdx] = newTitleLine;

  // Step 5: Also fix OG and Twitter titles if they're too long
  content = lines.join('\n');
  content = fixOgTwitterTitles(content);

  // Step 6: Write back if changed
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFilesModified++;
    totalFixed++;
    console.log(`[FIXED] ${relPath}:`);
    console.log(`  Main: "${mainTitleOld}" (${mainTitleOld.length}) → "${mainTitleNew}" (${mainTitleNew.length})`);
  }
}

console.log(`\n=== Summary ===`);
console.log(`Files modified: ${totalFilesModified}`);
console.log(`Main titles fixed: ${totalFixed}`);

// ===== SHORTENING FUNCTIONS =====

function shortenMainTitle(title) {
  let t = title;

  // Remove "| TheMetricApp" if present
  t = t.replace(/\s*\|\s*TheMetricApp\s*$/, '');
  if (t.length <= MAX_CHILD_TITLE) return t;

  // For blog-style titles (with ":"), try to shorten
  if (t.includes(':') && !t.includes(' — ')) {
    // "Calculator Name 2026: Long Description"
    const colonIdx = t.indexOf(':');
    const base = t.substring(0, colonIdx).trim();
    const desc = t.substring(colonIdx + 1).trim();

    // Try: "Calculator Name 2026: Short Desc"
    const shortDesc = makeShortDesc(desc);
    const candidate = `${base}: ${shortDesc}`;
    if (candidate.length <= MAX_CHILD_TITLE) return candidate;

    // Try: just the base
    if (base.length <= MAX_CHILD_TITLE) return base;

    // Try removing "Free " prefix
    const baseNoFree = base.replace(/^Free\s+/, '');
    if (baseNoFree.length <= MAX_CHILD_TITLE) return baseNoFree;

    // Aggressive: truncate base
    return truncateToFit(base, MAX_CHILD_TITLE);
  }

  // For " — " separated titles: "Calculator Name 2026 — Description"
  if (t.includes(' — ')) {
    const dashIdx = t.indexOf(' — ');
    const base = t.substring(0, dashIdx).trim();
    const desc = t.substring(dashIdx + 3).trim();

    // Try: "Calculator Name 2026 — Short Desc"
    const shortDesc = makeShortDesc(desc);
    const candidate = `${base} — ${shortDesc}`;
    if (candidate.length <= MAX_CHILD_TITLE) return candidate;

    // Try: just the base
    if (base.length <= MAX_CHILD_TITLE) return base;

    // Try removing "Free " prefix
    const baseNoFree = base.replace(/^Free\s+/, '');
    if (baseNoFree.length <= MAX_CHILD_TITLE) return baseNoFree;

    // Aggressive: truncate base
    return truncateToFit(base, MAX_CHILD_TITLE);
  }

  // No separator - just truncate
  return truncateToFit(t, MAX_CHILD_TITLE);
}

function makeShortDesc(desc) {
  let d = desc;

  // Remove "| TheMetricApp"
  d = d.replace(/\s*\|\s*TheMetricApp\s*$/, '');

  // Common shortening patterns
  const patterns = [
    // Very long descriptions → short
    [/Complete Guide to\s+/g, ''],
    [/Complete Guide/g, 'Guide'],
    [/Free\s+/g, ''],
    // Calculator-specific
    [/Self-Employment Tax Calculator/g, 'SE Tax Calc'],
    [/Self-Employment Tax/g, 'SE Tax'],
    [/Commission & Split Calculator/g, 'Commission'],
    [/Contribution Calculator/g, 'Contributions'],
    [/Comparison Calculator/g, 'Comparison'],
    [/Affordability Calculator/g, 'Affordability'],
    [/Paycheck Calculator/g, 'Paycheck'],
    [/Mortgage Calculator/g, 'Mortgage'],
    [/Retirement Calculator/g, 'Retirement'],
    [/Savings Calculator/g, 'Savings'],
    [/Fee Calculator/g, 'Fees'],
    [/Tax Calculator/g, 'Tax'],
    [/Loan Calculator/g, 'Loan'],
    [/Calculator/g, 'Calc'],
    // Descriptions
    [/Real Estate Agent Commission & Split/g, 'Agent Commission'],
    [/Real Estate Agent Commission/g, 'Agent Commission'],
    [/How Much House Can I Afford\?/g, 'Affordability'],
    [/How Much Should You Save\?/g, 'Savings Goal'],
    [/Track Your Financial Health/g, 'Health'],
    [/Track Income, Expenses & Savings/g, 'Budget'],
    [/Compare Cities & Salaries/g, 'Cities'],
    [/Compare Side-by-Side/g, 'Compare'],
    [/Front-End & Back-End DTI/g, 'DTI'],
    [/Business, Medical & Charity/g, 'Deductions'],
    [/UK Dividend Income Tax Estimator/g, 'UK Dividend'],
    [/Class 1, 2 & 4 NI/g, 'NI Rates'],
    [/Monthly Repayments & Stamp Duty/g, 'Payments & SDLT'],
    [/Monthly Payment & Total Interest/g, 'Payments'],
    [/Short & Long-Term Gain Taxes/g, 'Capital Gains'],
    [/Snowball vs Avalanche/g, 'Debt Payoff'],
    [/Final Value Fee & Net Profit/g, 'Fees & Profit'],
    [/Listing, Transaction & Payment Fees/g, 'Etsy Fees'],
    [/Cost of Ownership/g, 'Costs'],
    [/Monthly & Annual Cost Comparison/g, 'Cost Compare'],
    [/Take-Home Pay After Taxes/g, 'Take-Home'],
    [/True Net Profit After Fees/g, 'Net Profit'],
    [/Margin, ROAS & ROI/g, 'Profit Metrics'],
    [/Purchasing Power Over Time/g, 'Purchasing Power'],
    [/Are You on Track\?/g, 'Track'],
    [/Are You on Track for Retirement\?/g, 'Retirement'],
    [/Project Tax-Free Savings/g, 'Tax-Free Growth'],
    [/Compare IRA Types & Tax Savings/g, 'IRA Compare'],
    [/Which Is Better\?/g, 'Compare'],
    [/Reach Your Financial Target Faster/g, 'Goal'],
    [/Reach Your Financial Target/g, 'Goal'],
    [/Free Loan Repayment Estimator/g, 'Repayment'],
    [/Free Repayment & Interest Estimator/g, 'Repayment'],
    [/Tax Return Estimator/g, 'Tax Return'],
    [/SE Tax Rate & Deductions/g, 'SE Tax'],
    [/Free SE Tax Estimator/g, 'SE Tax'],
    [/Free CA Freelance Tax Estimator/g, 'CA Freelance'],
    [/SE & State Tax/g, 'CA Tax'],
    [/Self-Employment Taxes & Deductions/g, 'SE Taxes'],
    [/Free 1099 & SE Tax Estimator/g, '1099 Tax'],
    [/SE Tax & Mileage Deductions/g, 'SE Tax'],
    [/Net Payout After Fees/g, 'Net Payout'],
    [/Instant Net Payout & Surcharge Tool/g, 'Net Payout'],
    [/Calculate Net After PayPal Fees/g, 'PayPal Fees'],
    [/Calculate Net Payout After Fees/g, 'Net Payout'],
    [/529 Plan & Education Funding/g, '529 Plan'],
    [/529 Plan Projection/g, '529 Growth'],
    [/Nest Egg/g, 'Savings'],
    [/Upwork vs Fiverr vs Toptal/g, 'Upwork vs Fiverr'],
    [/Upwork vs Fiverr Fees/g, 'Upwork vs Fiverr'],
    [/Payback & 25-Year Savings/g, 'Payback'],
    [/Payback & Savings/g, 'ROI'],
    [/Cap Rate & Cash-on-Cash Return/g, 'ROI'],
    [/Cap Rate & Cash-on-Cash/g, 'ROI'],
    [/Duties & Landed Cost/g, 'Duties'],
    [/Duty & Landed Cost/g, 'Duties'],
    [/Add or Remove VAT Instantly/g, 'VAT'],
    [/Add or Remove 20% VAT Instantly/g, 'VAT'],
    [/Free UK Converter/g, 'UK'],
    [/Free US Converter/g, 'US'],
    [/Free FL Take-Home Pay Estimator/g, 'FL'],
    [/Take-Home Pay No State Tax/g, 'FL'],
    [/Free TX Take-Home Pay Estimator/g, 'TX'],
    [/Take-Home Pay After Tax/g, 'Take-Home'],
    [/Free NY Take-Home Pay Estimator/g, 'NY'],
    [/Take-Home Pay After NY State Tax/g, 'NY'],
    [/Free HMRC Tax Estimator/g, 'HMRC'],
    [/Can You Afford That Car\?/g, 'Budget'],
    [/Max Out Retirement Savings/g, 'Max'],
    [/Max Retirement Savings/g, 'Max'],
    [/True Take-Home Pay/g, 'Take-Home'],
    [/Gig Income Tax Estimator/g, 'Gig Tax'],
    [/Free 1099 Income Tax Estimator/g, '1099 Tax'],
    [/FBA Fees & Net Profit/g, 'FBA'],
    [/Referral Fees & Net Profit/g, 'Referral'],
    // Generic cleanup
    [/\s+/g, ' '],
  ];

  for (const [pat, rep] of patterns) {
    d = d.replace(pat, rep);
  }

  d = d.trim();

  // If still too long, truncate
  if (d.length > 15) {
    d = d.substring(0, 15).trim();
  }

  return d;
}

function truncateToFit(str, maxLen) {
  if (str.length <= maxLen) return str;
  const truncated = str.substring(0, maxLen);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxLen - 10) {
    return truncated.substring(0, lastSpace);
  }
  return truncated;
}

function fixOgTwitterTitles(content) {
  // Fix openGraph.title and twitter.title that exceed 60 chars
  // These don't get the template suffix, so they should be ≤60 chars on their own

  const lines = content.split('\n');
  let inBlock = '';
  let blockBraceDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track which block we're in
    if (line.match(/^\s*openGraph\s*:/)) {
      inBlock = 'og';
      blockBraceDepth = 0;
    } else if (line.match(/^\s*twitter\s*:/)) {
      inBlock = 'tw';
      blockBraceDepth = 0;
    }

    if (inBlock) {
      for (const ch of line) {
        if (ch === '{') blockBraceDepth++;
        if (ch === '}') blockBraceDepth--;
      }
      if (blockBraceDepth <= 0 && line.match(/\}/)) {
        inBlock = '';
      }
    }

    // Find title lines in OG/Twitter blocks
    if (inBlock) {
      const titleMatch = line.match(/^(\s*title:\s*)"([^"]+)"(.*)$/);
      if (titleMatch) {
        const [, prefix, title, suffix] = titleMatch;
        if (title.length > 60) {
          // Shorten: remove "| TheMetricApp" first
          let shortTitle = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
          if (shortTitle.length > 60) {
            // Truncate at a word boundary
            shortTitle = shortTitle.substring(0, 57);
            const lastSpace = shortTitle.lastIndexOf(' ');
            if (lastSpace > 45) {
              shortTitle = shortTitle.substring(0, lastSpace);
            }
            shortTitle = shortTitle.trim();
          }
          if (shortTitle !== title) {
            lines[i] = `${prefix}"${shortTitle}"${suffix}`;
          }
        }
      }
    }
  }

  return lines.join('\n');
}

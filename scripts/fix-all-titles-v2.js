const fs = require('fs');
const path = require('path');

const siteRoot = path.resolve(__dirname, '..');
const MAX_CHILD = 43; // + 17 (" | TheMetricApp") = 60

function findFiles(dir, fileName) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fp = path.join(dir, item.name);
    if (item.isDirectory() && !['node_modules', '.next', '.git'].includes(item.name)) {
      results.push(...findFiles(fp, fileName));
    } else if (item.name === fileName) {
      results.push(fp);
    }
  }
  return results;
}

const allFiles = [
  ...findFiles(path.join(siteRoot, 'src', 'app'), 'layout.js'),
  ...findFiles(path.join(siteRoot, 'src', 'app'), 'page.js'),
];

let fixed = 0;

for (const filePath of allFiles) {
  const relPath = path.relative(siteRoot, filePath).replace(/\\/g, '/');
  if (relPath === 'src/app/layout.js') continue;

  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  // === FIX 1: Main title (first title: "..." in the file, at top level) ===
  // Strategy: find the first `title: "` that appears BEFORE any `openGraph` or `twitter`
  const metaIdx = content.indexOf('export const metadata');
  if (metaIdx === -1) continue;

  // Find the first title: " after the metadata export
  const afterMeta = content.substring(metaIdx);
  const titleRegex = /title:\s*"([^"]+)"/;
  const tm = afterMeta.match(titleRegex);
  if (!tm) continue;

  const oldTitle = tm[1];
  const finalLen = oldTitle.length + 17;

  if (finalLen > 60) {
    const newTitle = shorten(oldTitle);
    if (newTitle !== oldTitle && newTitle.length <= MAX_CHILD) {
      // Replace only the FIRST occurrence of this specific title string
      const searchStr = `title: "${oldTitle}"`;
      const replaceStr = `title: "${newTitle}"`;
      // Only replace the first occurrence (which is the main title)
      const idx = content.indexOf(searchStr);
      if (idx !== -1) {
        content = content.substring(0, idx) + replaceStr + content.substring(idx + searchStr.length);
        console.log(`[MAIN] ${relPath}:`);
        console.log(`  "${oldTitle}" (${oldTitle.length}) → "${newTitle}" (${newTitle.length})`);
      }
    }
  }

  // === FIX 2: OG and Twitter titles ===
  // Find all title: "..." inside openGraph and twitter blocks
  const lines = content.split('\n');
  let inBlock = '';
  let depth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/^\s*openGraph\s*:/.test(line)) { inBlock = 'og'; depth = 0; }
    if (/^\s*twitter\s*:/.test(line)) { inBlock = 'tw'; depth = 0; }

    if (inBlock) {
      for (const ch of line) { if (ch === '{') depth++; if (ch === '}') depth--; }
      if (depth <= 0 && /\}/.test(line)) { inBlock = ''; }

      const tm2 = line.match(/title:\s*"([^"]+)"/);
      if (tm2 && tm2[1].length > 60) {
        let t = tm2[1].replace(/\s*\|\s*TheMetricApp\s*$/, '');
        if (t.length > 60) {
          // Truncate at word boundary
          t = t.substring(0, 57);
          const sp = t.lastIndexOf(' ');
          if (sp > 45) t = t.substring(0, sp);
        }
        if (t !== tm2[1]) {
          lines[i] = lines[i].replace(`"${tm2[1]}"`, `"${t}"`);
          console.log(`  [${inBlock.toUpperCase()}] ${relPath}: "${tm2[1]}" (${tm2[1].length}) → "${t}" (${t.length})`);
        }
      }
    }
  }

  content = lines.join('\n');

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixed++;
  }
}

console.log(`\n=== Files modified: ${fixed} ===`);

// ===== SHORTENING =====
function shorten(title) {
  let t = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
  if (t.length <= MAX_CHILD) return t;

  // Blog-style: "Name: Description"
  if (t.includes(':') && !t.includes(' — ')) {
    const ci = t.indexOf(':');
    const base = t.substring(0, ci).trim();
    const desc = t.substring(ci + 1).trim();
    const sd = shortDesc(desc);
    const c1 = `${base}: ${sd}`;
    if (c1.length <= MAX_CHILD) return c1;
    const baseNF = base.replace(/^Free\s+/, '');
    if (baseNF.length <= MAX_CHILD) return baseNF;
    if (base.length <= MAX_CHILD) return base;
    return fit(base, MAX_CHILD);
  }

  // Dash-style: "Name — Description"
  if (t.includes(' — ')) {
    const di = t.indexOf(' — ');
    const base = t.substring(0, di).trim();
    const desc = t.substring(di + 3).trim();
    const sd = shortDesc(desc);
    const c1 = `${base} — ${sd}`;
    if (c1.length <= MAX_CHILD) return c1;
    const baseNF = base.replace(/^Free\s+/, '');
    if (baseNF.length <= MAX_CHILD) return baseNF;
    if (base.length <= MAX_CHILD) return base;
    return fit(base, MAX_CHILD);
  }

  return fit(t, MAX_CHILD);
}

function shortDesc(d) {
  d = d.replace(/\s*\|\s*TheMetricApp\s*$/, '');
  const p = [
    [/Complete Guide to\s+/g, ''], [/Complete Guide/g, 'Guide'], [/Free\s+/g, ''],
    [/[Ss]elf-[Ee]mployment [Tt]ax [Cc]alculator/g, 'SE Tax'], [/[Ss]elf-[Ee]mployment [Tt]ax/g, 'SE Tax'],
    [/[Cc]ommission & [Ss]plit [Cc]alculator/g, 'Commission'], [/[Cc]ommission [Cc]alculator/g, 'Commission'],
    [/[Cc]ontribution [Cc]alculator/g, 'Contributions'], [/[Cc]omparison [Cc]alculator/g, 'Comparison'],
    [/[Aa]ffordability [Cc]alculator/g, 'Affordability'], [/[Pp]aycheck [Cc]alculator/g, 'Paycheck'],
    [/[Mm]ortgage [Cc]alculator/g, 'Mortgage'], [/[Rr]etirement [Cc]alculator/g, 'Retirement'],
    [/[Ss]avings [Cc]alculator/g, 'Savings'], [/[Ff]ee [Cc]alculator/g, 'Fees'],
    [/[Tt]ax [Cc]alculator/g, 'Tax'], [/[Ll]oan [Cc]alculator/g, 'Loan'],
    [/[Cc]alculator/g, 'Calc'],
    [/Real Estate Agent Commission & Split/g, 'Agent Commission'],
    [/How Much House Can I Afford\?/g, 'Affordability'],
    [/How Much Should You Save\?/g, 'Savings'],
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
    [/Monthly & Annual Cost Comparison/g, 'Costs'],
    [/Take-Home Pay After Taxes/g, 'Take-Home'],
    [/True Net Profit After Fees/g, 'Net Profit'],
    [/Margin, ROAS & ROI/g, 'Profit'],
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
    [/\s+/g, ' '],
  ];
  for (const [r, s] of p) d = d.replace(r, s);
  d = d.trim();
  if (d.length > 15) d = d.substring(0, 15).trim();
  return d;
}

function fit(s, max) {
  if (s.length <= max) return s;
  s = s.substring(0, max);
  const sp = s.lastIndexOf(' ');
  return sp > max - 10 ? s.substring(0, sp) : s;
}

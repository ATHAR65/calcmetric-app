const fs = require('fs');
const path = require('path');

const siteRoot = path.resolve(__dirname, '..');
const siteUrl = 'https://www.themetricapp.com';

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

const blogFiles = findFiles(path.join(siteRoot, 'src', 'app', 'blog'), 'page.js');
let fixed = 0;

for (const filePath of blogFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  // Fix 1: Make all image URLs absolute (relative /api/og? → absolute)
  content = content.replace(
    /"image":\s*"\/api\/og\?/g,
    `"image": "${siteUrl}/api/og?`
  );

  // Fix 2: Also fix image in inline script tags (solo-401k, paypal-fee style)
  content = content.replace(
    /image:\s*"\/api\/og\?/g,
    `image: "${siteUrl}/api/og?`
  );

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixed++;
    console.log(`[FIXED] ${path.relative(siteRoot, filePath).replace(/\\/g, '/')}`);
  }
}

// Fix mid-word title truncation in layout.js and page.js files
const allFiles = [
  ...findFiles(path.join(siteRoot, 'src', 'app'), 'layout.js'),
  ...findFiles(path.join(siteRoot, 'src', 'app'), 'page.js'),
];

let titlesFixed = 0;
for (const filePath of allFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  // Find absolute titles that were truncated mid-word
  // Pattern: title: { absolute: "...Powe | TheMetricApp" } or similar
  content = content.replace(
    /title:\s*\{\s*absolute:\s*"([^"]+)"\s*\}/g,
    (match, title) => {
      // Check for common mid-word truncations
      const fixes = {
        'Purchasing Powe |': 'Purchasing Power |',
        'Rates & S |': 'Fees & Savings |',
        'Calculating & I |': 'Calculating & Improving |',
        'Adding, Removin |': 'Adding & Removing |',
        'Processing Fees |': 'Processing Fees |',
        'Real Estate Age |': 'Real Estate Agent |',
        'Cryptocurrency |': 'Crypto Tax Guide |',
        'Seller Fees & N |': 'Etsy Seller Fees |',
        'ROI Guide |': 'Solar ROI Guide |',
        'SE Taxes & Mile |': 'SE Taxes & Mileage |',
      };

      let fixedTitle = title;
      for (const [bad, good] of Object.entries(fixes)) {
        if (fixedTitle.includes(bad)) {
          fixedTitle = fixedTitle.replace(bad, good);
          break;
        }
      }

      // Ensure still ≤ 60 chars
      if (fixedTitle.length > 60) {
        // Trim from the brand suffix side
        const brandIdx = fixedTitle.indexOf(' | TheMetricApp');
        if (brandIdx > 0) {
          const base = fixedTitle.substring(0, brandIdx);
          const maxBase = 60 - ' | TheMetricApp'.length;
          if (base.length > maxBase) {
            const trimmed = base.substring(0, maxBase);
            const lastSpace = trimmed.lastIndexOf(' ');
            fixedTitle = (lastSpace > maxBase - 10 ? trimmed.substring(0, lastSpace) : trimmed) + ' | TheMetricApp';
          }
        }
      }

      if (fixedTitle !== title && fixedTitle.length <= 60) {
        return `title: { absolute: "${fixedTitle}" }`;
      }
      return match;
    }
  );

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    titlesFixed++;
    console.log(`[TITLE] ${path.relative(siteRoot, filePath).replace(/\\/g, '/')}`);
  }
}

console.log(`\nBlog files fixed: ${fixed}`);
console.log(`Titles fixed: ${titlesFixed}`);

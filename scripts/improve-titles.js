const fs = require('fs');
const path = require('path');

const siteRoot = path.resolve(__dirname, '..');

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

  // Find the main title in metadata export
  const metaIdx = content.indexOf('export const metadata');
  if (metaIdx === -1) continue;

  const afterMeta = content.substring(metaIdx);

  // Check if title is already using absolute format
  if (afterMeta.match(/title:\s*\{\s*absolute:/)) continue;

  // Find the first title: "..." (main title, before openGraph/twitter)
  const titleMatch = afterMeta.match(/title:\s*"([^"]+)"/);
  if (!titleMatch) continue;

  const currentTitle = titleMatch[1];

  // Check if this title needs the brand suffix but doesn't have it
  // The root layout template is "%s | TheMetricApp" which adds 17 chars
  // For better SEO, we want the title to include the brand and be descriptive
  // Using absolute: bypasses the template

  // Only fix titles that are too short (missing brand) or could be improved
  // Skip if already has good length with brand
  const hasBrand = currentTitle.includes('| TheMetricApp') || currentTitle.includes('TheMetricApp');
  if (hasBrand) continue;

  // This title doesn't have the brand - it's using the template to add it
  // Convert to absolute title with brand included, keeping it ≤60 chars
  const newTitle = `${currentTitle} | TheMetricApp`;
  if (newTitle.length > 60) {
    // Too long with brand, try to shorten
    // Keep the essential part and add brand
    const base = currentTitle.substring(0, 60 - 17 - 3).trim(); // -17 for brand, -3 for buffer
    const lastSpace = base.lastIndexOf(' ');
    const shortBase = lastSpace > 30 ? base.substring(0, lastSpace) : base;
    const absTitle = `${shortBase} | TheMetricApp`;
    if (absTitle.length <= 60) {
      // Replace title: "old" with title: { absolute: "new" }
      const searchStr = `title: "${currentTitle}"`;
      const replaceStr = `title: { absolute: "${absTitle}" }`;
      const idx = content.indexOf(searchStr);
      if (idx !== -1) {
        content = content.substring(0, idx) + replaceStr + content.substring(idx + searchStr.length);
        console.log(`[TITLE] ${relPath}: "${currentTitle}" (${currentTitle.length}) → absolute "${absTitle}" (${absTitle.length})`);
        fixed++;
      }
    }
  } else {
    // Fits with brand - convert to absolute
    const searchStr = `title: "${currentTitle}"`;
    const replaceStr = `title: { absolute: "${newTitle}" }`;
    const idx = content.indexOf(searchStr);
    if (idx !== -1) {
      content = content.substring(0, idx) + replaceStr + content.substring(idx + searchStr.length);
      console.log(`[TITLE] ${relPath}: "${currentTitle}" (${currentTitle.length}) → absolute "${newTitle}" (${newTitle.length})`);
      fixed++;
    }
  }

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log(`\nTitles improved: ${fixed}`);

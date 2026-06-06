const fs = require('fs');
const path = require('path');

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

const srcDir = path.join(__dirname, '..', 'src', 'app');
const files = [...findFiles(srcDir, 'layout.js'), ...findFiles(srcDir, 'page.js')];

let count = 0;
const results = [];

for (const file of files) {
  if (file.endsWith(path.join('src', 'app', 'layout.js'))) continue;
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(path.join(__dirname, '..'), file).replace(/\\/g, '/');

  // Find the main title - the first title: "..." after metadata export
  // Look for the pattern: title: "..." that is NOT inside openGraph or twitter
  const lines = content.split('\n');
  let foundTitle = false;
  let inBlock = '';

  for (const line of lines) {
    if (foundTitle) break;

    // Track which block we're in
    if (line.match(/^\s*openGraph:/)) { inBlock = 'og'; continue; }
    if (line.match(/^\s*twitter:/)) { inBlock = 'tw'; continue; }
    if (inBlock && line.match(/^\s*\}/)) { inBlock = ''; continue; }

    // Find title line that is NOT in openGraph or twitter
    if (!inBlock) {
      const m = line.match(/title:\s*"([^"]+)"/);
      if (m) {
        foundTitle = true;
        const title = m[1];
        // The root layout template is "%s | TheMetricApp" (17 chars added)
        const finalLen = title.length + 17;
        if (finalLen > 60) {
          count++;
          results.push({ file: relPath, titleLen: title.length, finalLen, title });
        }
      }
    }
  }
}

console.log('Files with titles exceeding 60 chars (including template suffix):');
console.log('='.repeat(80));
for (const r of results) {
  console.log(`${r.finalLen} chars | ${r.file}`);
  console.log(`  Title (${r.titleLen}): "${r.title}"`);
}
console.log('='.repeat(80));
console.log(`TOTAL: ${count} pages with titles too long`);

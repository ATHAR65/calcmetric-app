const fs = require('fs');
const lines = fs.readFileSync('src/components/Header.js', 'utf8').split('\n');

let openDivLines = [];
let closeCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Find opening div tags (not self-closing)
  const openMatches = [...line.matchAll(/<div\b[^>]*>/g)];
  for (const m of openMatches) {
    // Check if it's self-closing
    const tag = m[0];
    if (!tag.endsWith('/>')) {
      openDivLines.push(i + 1);
    }
  }
  // Find closing div tags
  const closeMatches = line.match(/<\/div>/g);
  if (closeMatches) {
    closeCount += closeMatches.length;
  }
}

console.log('Opening <div> tags at lines: ' + openDivLines.join(', '));
console.log('Total opens: ' + openDivLines.length);
console.log('Total closes: ' + closeCount);
if (openDivLines.length > closeCount) {
  console.log('UNBALANCED: Missing ' + (openDivLines.length - closeCount) + ' </div>');
  console.log('Last opened at line: ' + openDivLines[openDivLines.length - 1]);
}

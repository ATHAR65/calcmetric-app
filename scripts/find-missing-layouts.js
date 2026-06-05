const fs = require('fs');
const path = require('path');

const calculatorsDir = path.join(__dirname, '../src/app/calculators');
const folders = fs.readdirSync(calculatorsDir);

console.log(`Checking ${folders.length} folders in ${calculatorsDir}...`);

folders.forEach((folder) => {
  const folderPath = path.join(calculatorsDir, folder);
  if (!fs.statSync(folderPath).isDirectory()) return;

  const layoutPath = path.join(folderPath, 'layout.js');
  const pagePath = path.join(folderPath, 'page.js');

  if (!fs.existsSync(pagePath)) {
    console.log(`❌ Folder ${folder} has no page.js!`);
    return;
  }

  if (!fs.existsSync(layoutPath)) {
    console.log(`❌ Folder ${folder} has NO layout.js!`);
  } else {
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    if (!layoutContent.includes('canonical')) {
      console.log(`⚠️ Folder ${folder} has layout.js but NO canonical tag!`);
    } else {
      // Check if canonical matches the folder name
      const match = layoutContent.match(/canonical:\s*["'`]([^"'`]+)["'`]/) || layoutContent.match(/canonical:\s*siteUrl\s*\+\s*["'`]([^"'`]+)["'`]/);
      if (match) {
        const canonicalVal = match[1];
        if (!canonicalVal.includes(folder)) {
          console.log(`⚠️ Folder ${folder} has canonical mismatch: ${canonicalVal}`);
        }
      } else {
        console.log(`⚠️ Folder ${folder} has canonical tag but regex couldn't parse it.`);
      }
    }
  }
});

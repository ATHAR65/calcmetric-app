const path = require('path');
const fs = require('fs');

// We need to run the sitemap function.
// Since it's Next.js and uses ESM, let's read the file and evaluate it or run a modified version that we can execute in node.
const sitemapPath = path.join(__dirname, '../src/app/sitemap.js');
let content = fs.readFileSync(sitemapPath, 'utf8');

// Replace imports with require or mocks
content = content
  .replace("import { promises as fs } from \"fs\";", "const fs = require('fs').promises;")
  .replace("import path from \"path\";", "const path = require('path');")
  .replace("import { blogPosts } from \"@/lib/siteConfig\";", "const { blogPosts } = require('../src/lib/siteConfig.js');")
  .replace("export default async function sitemap()", "async function sitemap()")
  .replace(/^export const /gm, 'var ')
  .replace(/^export let /gm, 'var ')
  .replace(/^export function /gm, 'function ')
  .replace(/^import .*/gm, '');

// Append execution code
content += `
sitemap().then(routes => {
  console.log("Total routes in sitemap:", routes.length);
  const filePaths = routes.map(r => r.url);
  console.log("First 10 routes:", filePaths.slice(0, 10));
  console.log("Last 10 routes:", filePaths.slice(-10));
  
  // Check if any route is invalid or missing
  const duplicates = filePaths.filter((item, index) => filePaths.indexOf(item) !== index);
  if (duplicates.length > 0) {
    console.log("⚠️ Duplicate URLs found in sitemap:", duplicates);
  } else {
    console.log("✅ No duplicate URLs in sitemap.");
  }
}).catch(err => {
  console.error("Error running sitemap:", err);
});
`;

// Save temporary test file
const tempPath = path.join(__dirname, '../scratch/test-sitemap-exec.js');
fs.mkdirSync(path.dirname(tempPath), { recursive: true });
fs.writeFileSync(tempPath, content, 'utf8');

console.log("Running temp sitemap script...");
const { execSync } = require('child_process');
try {
  const output = execSync('node scratch/test-sitemap-exec.js', { encoding: 'utf8' });
  console.log(output);
} catch (err) {
  console.error("Exec error:", err.stdout || err.message);
}

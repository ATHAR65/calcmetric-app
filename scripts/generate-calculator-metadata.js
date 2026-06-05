const fs = require('fs');
const path = require('path');
const vm = require('vm');

const siteConfigPath = path.join(__dirname, '../src/lib/siteConfig.js');
const calculatorsDir = path.join(__dirname, '../src/app/calculators');

if (!fs.existsSync(siteConfigPath)) {
  console.error('siteConfig.js not found at:', siteConfigPath);
  process.exit(1);
}

// Read siteConfig.js
const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8');

// Evaluate the file content in a sandbox to extract constants
const sandbox = {};
vm.createContext(sandbox);
// Remove ES module export keywords so vm can run it
const code = siteConfigContent
  .replace(/^export const /gm, 'var ')
  .replace(/^export let /gm, 'var ')
  .replace(/^export function /gm, 'function ')
  .replace(/^import .*/gm, '');
vm.runInContext(code, sandbox);

const calculators = sandbox.calculators;

if (!calculators || !Array.isArray(calculators)) {
  console.error('Calculators array not found in siteConfig.js. Sandbox keys:', Object.keys(sandbox));
  process.exit(1);
}

console.log(`Found ${calculators.length} calculators in siteConfig.js`);

let createdCount = 0;
let updatedCount = 0;
let skippedCount = 0;

calculators.forEach((calc) => {
  if (!calc.href.startsWith('/calculators/')) {
    console.warn(`Skipping non-calculator href: ${calc.href}`);
    return;
  }

  const folderName = calc.href.replace('/calculators/', '');
  const folderPath = path.join(calculatorsDir, folderName);

  if (!fs.existsSync(folderPath)) {
    console.warn(`Calculator folder does not exist: ${folderPath}`);
    return;
  }

  const layoutPath = path.join(folderPath, 'layout.js');
  const canonicalUrl = `https://www.themetricapp.com/calculators/${folderName}`;
  
  // Format metadata
  const metaTitle = `${calc.title} 2026 — Free Online Calculator`;
  const metaDesc = `${calc.desc} Free, instant, and accurate online calculator. No sign-up required.`;
  const metaKeywords = [
    calc.title.toLowerCase(),
    `${calc.title.toLowerCase()} 2026`,
    calc.tag ? calc.tag.toLowerCase() : '',
    'calculator',
    'free financial calculators',
    'themetricapp'
  ].filter(k => k).join(', ');

  const layoutContent = `const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "${metaTitle}",
  description: "${metaDesc}",
  keywords: [
    "${calc.title}",
    "${calc.title} 2026",
    "${calc.tag || ''}",
    "calculator",
    "free financial calculators",
  ],
  alternates: {
    canonical: "${canonicalUrl}",
  },
  openGraph: {
    title: "${metaTitle} | TheMetricApp",
    description: "${metaDesc}",
    url: "${canonicalUrl}",
    siteName: "TheMetricApp",
    type: "website",
    images: [
      {
        url: \`/api/og?title=\${encodeURIComponent("${metaTitle}")}&description=\${encodeURIComponent("${calc.desc}")}&type=website\`,
        width: 1200,
        height: 630,
        alt: "${metaTitle}",
      },
    ],
  },
  twitter: {
    title: "${metaTitle} | TheMetricApp",
    description: "${metaDesc}",
    card: "summary_large_image",
    images: [\`/api/og?title=\${encodeURIComponent("${metaTitle}")}&description=\${encodeURIComponent("${calc.desc}")}&type=website\`],
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_US",
  },
};

export default function Layout({ children }) {
  return children;
}
`;

  if (!fs.existsSync(layoutPath)) {
    fs.writeFileSync(layoutPath, layoutContent, 'utf8');
    createdCount++;
  } else {
    // If it exists, let's check if it exports metadata with canonical
    const currentContent = fs.readFileSync(layoutPath, 'utf8');
    if (!currentContent.includes('canonical')) {
      // It exists but does not have canonical, overwrite it
      fs.writeFileSync(layoutPath, layoutContent, 'utf8');
      updatedCount++;
    } else {
      skippedCount++;
    }
  }
});

console.log(`Summary:`);
console.log(`- Created layout.js: ${createdCount}`);
console.log(`- Updated layout.js: ${updatedCount}`);
console.log(`- Skipped (already has canonical): ${skippedCount}`);

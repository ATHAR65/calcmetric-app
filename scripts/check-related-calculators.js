const fs = require('fs');
const path = require('path');

const config = require('../src/lib/siteConfig.js');
const calcSlugs = config.calculators.map(c => c.href.replace('/calculators/', ''));

const rcContent = fs.readFileSync(path.join(__dirname, '../src/components/RelatedCalculators.js'), 'utf8');

// Extract keys from relatedCalculators object
const keyMatches = rcContent.match(/"([^"]+)"\s*:\s*\[/g);
const rcKeys = keyMatches ? keyMatches.map(m => m.replace(/["\[\s:]/g, '')) : [];

console.log('SiteConfig calculators:', calcSlugs.length);
console.log('RelatedCalculators keys:', rcKeys.length);
console.log('');

const missing = calcSlugs.filter(s => !rcKeys.includes(s));
console.log('Missing from RelatedCalculators:', missing.length);
missing.forEach(s => console.log('  -', s));

console.log('');
console.log('Extra in RelatedCalculators (not in siteConfig):');
const extra = rcKeys.filter(k => !calcSlugs.includes(k));
extra.forEach(s => console.log('  -', s));
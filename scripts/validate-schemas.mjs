import { readFileSync } from 'fs';
import { get } from 'http';

const pages = [
  'http://localhost:3000/calculators/doordash-tax-estimator',
  'http://localhost:3000/calculators/side-hustle-tax-calculator',
  'http://localhost:3000/calculators/solo-401k-contribution-calculator',
  'http://localhost:3000/calculators/paypal-fee-calculator',
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  for (const url of pages) {
    console.log(`\n========== ${url} ==========`);
    const html = await fetch(url);
    const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
    let match;
    let found = 0;
    let errors = 0;

    while ((match = regex.exec(html)) !== null) {
      const jsonStr = match[1].trim();
      found++;
      try {
        const parsed = JSON.parse(jsonStr);
        const type = parsed['@type'] || 'UNKNOWN';
        const name = parsed.name || parsed.url || '(no name)';
        console.log(`  ✅ Valid: ${type} — ${name}`);
        
        // Type-specific validation
        if (type === 'WebApplication') {
          if (!parsed.applicationCategory) console.log('     ⚠️  Missing applicationCategory');
          if (!parsed.offers || !parsed.offers.price) console.log('     ⚠️  Missing offers.price');
        }
        if (type === 'BreadcrumbList') {
          if (!parsed.itemListElement || parsed.itemListElement.length < 2) console.log('     ⚠️  Less than 2 breadcrumb items');
          else console.log(`     ${parsed.itemListElement.length} breadcrumb items`);
        }
        if (type === 'FAQPage') {
          if (!parsed.mainEntity) console.log('     ⚠️  Missing mainEntity');
          else console.log(`     ${parsed.mainEntity.length} FAQ items`);
        }
        if (type === 'Organization') {
          if (!parsed.logo) console.log('     ⚠️  Missing logo');
          if (!parsed.sameAs) console.log('     ⚠️  Missing sameAs');
        }
        if (type === 'WebSite') {
          if (!parsed.url) console.log('     ⚠️  Missing url');
        }
      } catch (e) {
        errors++;
        console.log(`  ❌ INVALID JSON-LD: ${e.message}`);
        console.log(`     First 100 chars: ${jsonStr.substring(0, 100)}`);
      }
    }

    console.log(`  Summary: ${found} schema(s) found, ${errors} error(s)`);
    if (found === 0) console.log('  ❌ No JSON-LD schemas found on this page!');
  }
}

main().catch(console.error);

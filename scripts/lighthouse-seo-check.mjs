import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { writeFileSync } from 'fs';

const urls = [
  { name: 'homepage', url: 'http://localhost:3000' },
  { name: 'doordash-calculator', url: 'http://localhost:3000/calculators/doordash-tax-estimator' },
  { name: 'side-hustle-calculator', url: 'http://localhost:3000/calculators/side-hustle-tax-calculator' },
  { name: 'solo-401k-calculator', url: 'http://localhost:3000/calculators/solo-401k-contribution-calculator' },
  { name: 'paypal-calculator', url: 'http://localhost:3000/calculators/paypal-fee-calculator' },
  { name: 'amazon-fba-calculator', url: 'http://localhost:3000/calculators/amazon-fba-fee-calculator' },
  { name: 'rental-property-calculator', url: 'http://localhost:3000/calculators/rental-property-roi-calculator' },
  { name: 'blog-index', url: 'http://localhost:3000/blog' },
];

const config = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['seo'],
    formFactor: 'desktop',
    screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1 },
    throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 },
  },
};

async function runAudit(url, name) {
  let chrome;
  try {
    chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'] });
    const result = await lighthouse(url, { logLevel: 'error', output: 'json', port: chrome.port }, config);
    
    const report = { name, url, seoScore: Math.round(result.lhr.categories.seo.score * 100) };
    
    // Key SEO audits
    const checks = ['meta-description', 'document-title', 'html-has-lang', 'crawlable-anchors', 'canonical', 'structured-data', 'link-text', 'is-crawlable', 'viewport'];
    report.audits = {};
    for (const id of checks) {
      const a = result.lhr.audits[id];
      if (a) report.audits[id] = { score: a.score, title: a.title, displayValue: a.displayValue || null };
    }

    // All failed SEO audits
    report.failedSEO = Object.entries(result.lhr.audits)
      .filter(([_, a]) => a.score !== null && a.score < 1)
      .map(([id, a]) => ({ id, title: a.title, score: a.score }));

    return report;
  } catch (err) {
    return { name, url, error: err.message };
  } finally {
    if (chrome) { try { await chrome.kill(); } catch (_) {} }
  }
}

async function main() {
  console.log('Running Lighthouse SEO audits...\n');
  const results = [];
  for (const { name, url } of urls) {
    process.stdout.write(`  ${name}... `);
    const report = await runAudit(url, name);
    results.push(report);
    console.log(report.error ? `❌ ${report.error}` : `✅ SEO: ${report.seoScore}`);
  }

  console.log('\n===== SEO AUDIT RESULTS =====\n');
  for (const r of results) {
    if (r.error) { console.log(`❌ ${r.name}: ${r.error}\n`); continue; }
    console.log(`📄 ${r.name} — SEO Score: ${r.seoScore}/100`);
    for (const [id, a] of Object.entries(r.audits)) {
      const status = a.score === 1 ? '✅' : a.score === 0 ? '❌' : `⚠️  ${a.score}`;
      console.log(`  ${status} ${a.title}`);
    }
    if (r.failedSEO.length > 0) {
      console.log(`  ⚠️  ${r.failedSEO.length} failed audit(s):`);
      for (const f of r.failedSEO) console.log(`    - ${f.title} (score: ${f.score})`);
    }
    console.log('');
  }
}

main().catch(console.error);

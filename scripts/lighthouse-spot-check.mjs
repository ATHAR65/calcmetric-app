import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { writeFileSync } from 'fs';

const urls = [
  { name: 'homepage', url: 'http://localhost:3000' },
  { name: 'stripe-calculator', url: 'http://localhost:3000/calculators/stripe-fee-merchant-calculator' },
  { name: 'amazon-fba-calculator', url: 'http://localhost:3000/calculators/amazon-fba-fee-calculator' },
  { name: 'rental-property-calculator', url: 'http://localhost:3000/calculators/rental-property-roi-calculator' },
  { name: 'blog-index', url: 'http://localhost:3000/blog' },
];

const config = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
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

    const scores = {
      performance: result.lhr.categories.performance?.score != null ? Math.round(result.lhr.categories.performance.score * 100) : 'N/A',
      accessibility: result.lhr.categories.accessibility?.score != null ? Math.round(result.lhr.categories.accessibility.score * 100) : 'N/A',
      'best-practices': result.lhr.categories['best-practices']?.score != null ? Math.round(result.lhr.categories['best-practices'].score * 100) : 'N/A',
      seo: result.lhr.categories.seo?.score != null ? Math.round(result.lhr.categories.seo.score * 100) : 'N/A',
    };

    const metrics = {};
    const metricIds = ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index', 'interactive'];
    for (const id of metricIds) {
      const a = result.lhr.audits[id];
      if (a && a.displayValue) metrics[id] = a.displayValue;
    }

    const failedAudits = Object.entries(result.lhr.audits)
      .filter(([_, a]) => a.score !== null && a.score >= 0 && a.score < 1)
      .map(([id, a]) => ({ id, title: a.title, score: a.score, group: a.group }));

    return { name, url, scores, metrics, failedAudits };
  } catch (err) {
    return { name, url, error: err.message };
  } finally {
    if (chrome) { try { await chrome.kill(); } catch (_) {} }
  }
}

async function main() {
  console.log('\n===== LIGHTHOUSE SPOT CHECK =====\n');
  const results = [];

  for (const { name, url } of urls) {
    process.stdout.write(`Auditing ${name}... `);
    const report = await runAudit(url, name);
    results.push(report);
    console.log(report.error ? `❌ ${report.error}` : '✅');
  }

  // Summary table
  console.log('\n📊 SCORES\n');
  console.log('| Page | Perf | A11y | BP | SEO |');
  console.log('|------|:----:|:----:|:--:|:---:|');
  for (const r of results) {
    if (r.error) {
      console.log(`| ${r.name} | ❌ Error | ❌ | ❌ | ❌ |`);
    } else {
      console.log(`| ${r.name} | ${r.scores.performance} | ${r.scores.accessibility} | ${r.scores['best-practices']} | ${r.scores.seo} |`);
    }
  }

  console.log('\n📊 KEY METRICS\n');
  for (const r of results) {
    if (r.error) continue;
    console.log(`\n${r.name}:`);
    console.log(`  FCP: ${r.metrics['first-contentful-paint'] || 'N/A'}`);
    console.log(`  LCP: ${r.metrics['largest-contentful-paint'] || 'N/A'}`);
    console.log(`  TBT: ${r.metrics['total-blocking-time'] || 'N/A'}`);
    console.log(`  CLS: ${r.metrics['cumulative-layout-shift'] || 'N/A'}`);
    console.log(`  Speed Index: ${r.metrics['speed-index'] || 'N/A'}`);
    console.log(`  TTI: ${r.metrics['interactive'] || 'N/A'}`);
  }

  console.log('\n📊 ISSUES FOUND\n');
  for (const r of results) {
    if (r.error) continue;
    console.log(`\n${r.name} — ${r.failedAudits.length} issue(s):`);
    const grouped = {};
    for (const fa of r.failedAudits) {
      const cat = fa.group || 'other';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(fa);
    }
    for (const [cat, audits] of Object.entries(grouped)) {
      console.log(`  ${cat}:`);
      for (const a of audits) {
        console.log(`    - ${a.title} (score: ${a.score})`);
      }
    }
  }

  // Save report
  let md = '# Lighthouse Spot Check Report\n\n';
  md += '## Scores\n\n| Page | Performance | Accessibility | Best Practices | SEO |\n|------|:-----------:|:-------------:|:--------------:|:---:|\n';
  for (const r of results) {
    if (r.error) {
      md += `| ${r.name} | ❌ Error | ❌ | ❌ | ❌ |\n`;
    } else {
      md += `| ${r.name} | ${r.scores.performance} | ${r.scores.accessibility} | ${r.scores['best-practices']} | ${r.scores.seo} |\n`;
    }
  }
  md += '\n\n## Issues Found\n\n';
  for (const r of results) {
    if (r.error) continue;
    md += `### ${r.name}\n\n`;
    if (r.failedAudits.length === 0) {
      md += '✅ No issues found.\n\n';
    } else {
      for (const fa of r.failedAudits) {
        md += `- [${fa.group || 'other'}] ${fa.title} (score: ${fa.score})\n`;
      }
      md += '\n';
    }
  }

  const reportPath = process.platform === 'win32' ? process.env.USERPROFILE + '\\lighthouse-spot-report.md' : '/tmp/lighthouse-spot-report.md';
  writeFileSync(reportPath, md);
  console.log(`\n📄 Full report saved to ${reportPath}`);
}

main().catch(console.error);

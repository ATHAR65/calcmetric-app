import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { writeFileSync } from 'fs';

const urls = [
  // Homepage
  { name: 'homepage', url: 'http://localhost:3000' },
  // Existing calculators (spot check)
  { name: 'stripe-calculator', url: 'http://localhost:3000/calculators/stripe-fee-merchant-calculator' },
  { name: 'ecommerce-calculator', url: 'http://localhost:3000/calculators/ecommerce-net-profit-margin' },
  // NEW Calculator 1
  { name: 'tariff-calculator', url: 'http://localhost:3000/calculators/us-import-tariff-calculator' },
  // NEW Calculator 2
  { name: 'side-hustle-calculator', url: 'http://localhost:3000/calculators/side-hustle-tax-calculator' },
  // NEW Calculator 3
  { name: 'mileage-calculator', url: 'http://localhost:3000/calculators/irs-mileage-deduction-calculator' },
  // NEW Calculator 4
  { name: 'solo-401k-calculator', url: 'http://localhost:3000/calculators/solo-401k-contribution-calculator' },
  // NEW Calculator 5
  { name: 'paypal-calculator', url: 'http://localhost:3000/calculators/paypal-fee-calculator' },
  // Existing blogs (spot check)
  { name: 'ecommerce-blog', url: 'http://localhost:3000/blog/ecommerce-profit-margin-calculator-2026' },
  { name: 'stripe-blog', url: 'http://localhost:3000/blog/stripe-fee-calculator-2026' },
  // NEW Blog 1
  { name: 'tariff-blog', url: 'http://localhost:3000/blog/us-import-tariff-calculator-2026' },
  // NEW Blog 2
  { name: 'side-hustle-blog', url: 'http://localhost:3000/blog/side-hustle-tax-calculator-2026' },
  // NEW Blog 3
  { name: 'mileage-blog', url: 'http://localhost:3000/blog/irs-mileage-deduction-calculator-2026' },
  // NEW Blog 4
  { name: 'solo-401k-blog', url: 'http://localhost:3000/blog/solo-401k-contribution-calculator-2026' },
  // NEW Blog 5
  { name: 'paypal-blog', url: 'http://localhost:3000/blog/paypal-fee-calculator-2026' },
  // Other
  { name: 'about', url: 'http://localhost:3000/about' },
];

const config = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    formFactor: 'desktop',
    screenEmulation: {
      mobile: false,
      width: 1350,
      height: 940,
      deviceScaleFactor: 1,
    },
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
    },
  },
};

async function runAudit(url, name) {
  let chrome;
  try {
    chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
    });
    const options = {
      logLevel: 'error',
      output: 'json',
      port: chrome.port,
    };
    const result = await lighthouse(url, options, config);
    const report = {
      url,
      scores: {
        performance: result.lhr.categories.performance?.score
          ? Math.round(result.lhr.categories.performance.score * 100)
          : null,
        accessibility: result.lhr.categories.accessibility?.score
          ? Math.round(result.lhr.categories.accessibility.score * 100)
          : null,
        'best-practices': result.lhr.categories['best-practices']?.score
          ? Math.round(result.lhr.categories['best-practices'].score * 100)
          : null,
        seo: result.lhr.categories.seo?.score
          ? Math.round(result.lhr.categories.seo.score * 100)
          : null,
      },
      warnings: result.lhr.runWarnings || [],
      audits: {},
    };

    // Extract key audit details
    const keyAudits = [
      'first-contentful-paint',
      'largest-contentful-paint',
      'total-blocking-time',
      'cumulative-layout-shift',
      'speed-index',
      'interactive',
      'meta-description',
      'document-title',
      'html-has-lang',
      'image-alt',
      'link-name',
      'color-contrast',
      'tap-targets',
      'font-display',
      'uses-responsive-images',
      'offscreen-images',
      'modern-image-formats',
      'render-blocking-resources',
      'server-response-time',
      'crawlable-anchors',
      'canonical',
      'is-crawlable',
      'structured-data',
    ];

    for (const auditId of keyAudits) {
      const audit = result.lhr.audits[auditId];
      if (audit) {
        report.audits[auditId] = {
          score: audit.score,
          displayValue: audit.displayValue || null,
          title: audit.title,
          description: audit.description,
          details: audit.details || null,
        };
      }
    }

    // Get failed audits (score !== 1)
    report.failedAudits = Object.entries(result.lhr.audits)
      .filter(([_, a]) => a.score !== null && a.score < 1 && a.score >= 0)
      .map(([id, a]) => ({
        id,
        title: a.title,
        score: a.score,
        group: a.group,
      }));

    return report;
  } catch (err) {
    return { url, name, error: err.message };
  } finally {
    if (chrome) {
      try { await chrome.kill(); } catch (_) {}
    }
  }
}

async function main() {
  const results = [];
  for (const { name, url } of urls) {
    console.log(`Auditing ${name} (${url})...`);
    try {
      const report = await runAudit(url, name);
      report.name = name;
      results.push(report);
      console.log(`  Done: ${name}`);
    } catch (err) {
      console.log(`  ❌ Error on ${name}: ${err.message}`);
      results.push({ url, name, error: err.message });
    }
  }

// Generate summary
console.log('\n===== LIGHTHOUSE AUDIT SUMMARY =====\n');
let summaryMarkdown = '# Lighthouse Audit Report\n\n';

for (const r of results) {
  if (r.error) {
    console.log(`❌ ${r.name}: ERROR - ${r.error}`);
    summaryMarkdown += `## ${r.name} — ❌ Error\n${r.error}\n\n`;
    continue;
  }

  console.log(`\n📄 ${r.name}`);
  console.log(`  Performance: ${r.scores.performance ?? 'N/A'}`);
  console.log(`  Accessibility: ${r.scores.accessibility ?? 'N/A'}`);
  console.log(`  Best Practices: ${r.scores['best-practices'] ?? 'N/A'}`);
  console.log(`  SEO: ${r.scores.seo ?? 'N/A'}`);

  summaryMarkdown += `## ${r.name}\n`;
  summaryMarkdown += `| Category | Score |\n|----------|------:|\n`;
  summaryMarkdown += `| **Performance** | ${r.scores.performance ?? 'N/A'} |\n`;
  summaryMarkdown += `| **Accessibility** | ${r.scores.accessibility ?? 'N/A'} |\n`;
  summaryMarkdown += `| **Best Practices** | ${r.scores['best-practices'] ?? 'N/A'} |\n`;
  summaryMarkdown += `| **SEO** | ${r.scores.seo ?? 'N/A'} |\n\n`;

  // Key metrics
  if (r.audits['first-contentful-paint']) {
    summaryMarkdown += `**FCP**: ${r.audits['first-contentful-paint'].displayValue}\n`;
  }
  if (r.audits['largest-contentful-paint']) {
    summaryMarkdown += `**LCP**: ${r.audits['largest-contentful-paint'].displayValue}\n`;
  }
  if (r.audits['total-blocking-time']) {
    summaryMarkdown += `**TBT**: ${r.audits['total-blocking-time'].displayValue}\n`;
  }
  if (r.audits['cumulative-layout-shift']) {
    summaryMarkdown += `**CLS**: ${r.audits['cumulative-layout-shift'].displayValue}\n`;
  }
  summaryMarkdown += '\n';

  // Failed audits
  if (r.failedAudits && r.failedAudits.length > 0) {
    summaryMarkdown += `**Issues to fix (${r.failedAudits.length}):**\n`;
    const failedByCategory = {};
    for (const fa of r.failedAudits) {
      const cat = fa.group || 'other';
      if (!failedByCategory[cat]) failedByCategory[cat] = [];
      failedByCategory[cat].push(fa);
    }
    for (const [cat, audits] of Object.entries(failedByCategory)) {
      summaryMarkdown += `- **${cat}**:\n`;
      for (const a of audits) {
        summaryMarkdown += `  - ${a.title} (score: ${a.score})\n`;
      }
    }
  } else {
    summaryMarkdown += '✅ No failed audits found.\n';
  }
  summaryMarkdown += '\n---\n\n';
}

const reportPath = process.platform === 'win32'
  ? process.env.USERPROFILE + '\\lighthouse-report.md'
  : '/tmp/lighthouse-report.md';
writeFileSync(reportPath, summaryMarkdown);
console.log('\nFull report saved to ' + reportPath);

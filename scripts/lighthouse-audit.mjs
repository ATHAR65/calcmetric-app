import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { writeFileSync } from 'fs';

const urls = [
  { name: 'homepage', url: 'http://localhost:3000' },
  { name: 'stripe-calculator', url: 'http://localhost:3000/calculators/stripe-fee-merchant-calculator' },
  { name: 'ecommerce-calculator', url: 'http://localhost:3000/calculators/ecommerce-net-profit-margin' },
  { name: 'airbnb-calculator', url: 'http://localhost:3000/calculators/airbnb-host-net-income' },
  { name: 'solar-calculator', url: 'http://localhost:3000/calculators/residential-solar-panel-roi' },
  { name: 'ev-vs-gas-calculator', url: 'http://localhost:3000/calculators/ev-charging-vs-gas-savings' },
  { name: 'doordash-calculator', url: 'http://localhost:3000/calculators/doordash-tax-estimator' },
  { name: 'california-1099-calculator', url: 'http://localhost:3000/calculators/california-1099-tax-calculator' },
  { name: 'texas-paycheck-calculator', url: 'http://localhost:3000/calculators/texas-paycheck-calculator' },
  { name: 'freelancer-fee-calculator', url: 'http://localhost:3000/calculators/freelancer-platform-fee-comparison' },
  { name: 'ebay-calculator', url: 'http://localhost:3000/calculators/ebay-seller-fee-profit' },
  { name: 'us-tariff-calculator', url: 'http://localhost:3000/calculators/us-import-tariff-calculator' },
  { name: 'side-hustle-calculator', url: 'http://localhost:3000/calculators/side-hustle-tax-calculator' },
  { name: 'mileage-calculator', url: 'http://localhost:3000/calculators/irs-mileage-deduction-calculator' },
  { name: 'solo-401k-calculator', url: 'http://localhost:3000/calculators/solo-401k-contribution-calculator' },
  { name: 'paypal-calculator', url: 'http://localhost:3000/calculators/paypal-fee-calculator' },
  { name: 'amazon-fba-calculator', url: 'http://localhost:3000/calculators/amazon-fba-fee-calculator' },
  { name: 'rental-property-roi-calculator', url: 'http://localhost:3000/calculators/rental-property-roi-calculator' },
  // Blog posts
  { name: 'ecommerce-blog', url: 'http://localhost:3000/blog/ecommerce-profit-margin-calculator-2026' },
  { name: 'stripe-blog', url: 'http://localhost:3000/blog/stripe-fee-calculator-2026' },
  { name: 'doordash-blog', url: 'http://localhost:3000/blog/doordash-tax-estimator-2026' },
  { name: 'amazon-fba-blog', url: 'http://localhost:3000/blog/amazon-fba-fee-calculator-2026' },
  { name: 'rental-property-blog', url: 'http://localhost:3000/blog/rental-property-roi-calculator-2026' },
  { name: 'about', url: 'http://localhost:3000/about' },
  { name: 'faq', url: 'http://localhost:3000/faq' },
  { name: 'contact', url: 'http://localhost:3000/contact' },
  { name: 'blog-index', url: 'http://localhost:3000/blog' },
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
}

main().catch(console.error);

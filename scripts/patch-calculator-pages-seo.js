/**
 * Patch all calculator page.js files to add server-side schema + static SEO content.
 * Run: node scripts/patch-calculator-pages-seo.js
 */
const fs = require("fs");
const path = require("path");

const siteRoot = path.resolve(__dirname, "..");
const calcDir = path.join(siteRoot, "src", "app", "calculators");

function parseLayoutMeta(layoutPath) {
  if (!fs.existsSync(layoutPath)) return { title: "", description: "" };
  const content = fs.readFileSync(layoutPath, "utf8");
  let title = "";
  let description = "";

  const absTitle = content.match(/title:\s*\{\s*absolute:\s*"([^"]+)"/);
  if (absTitle) {
    title = absTitle[1].replace(/\s*\|\s*TheMetricApp\s*$/, "").trim();
  } else {
    const plainTitle = content.match(/^\s*title:\s*"([^"]+)"/m);
    if (plainTitle) title = plainTitle[1].replace(/\s*\|\s*TheMetricApp\s*$/, "").trim();
  }

  const descMatch = content.match(/description:\s*"([^"]+)"/);
  if (descMatch) description = descMatch[1];

  return { title, description };
}

function extractFaqs(content) {
  const faqs = [];
  const re = /"name":\s*"([^"]+)"[\s\S]*?"text":\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(content)) !== null && faqs.length < 5) {
    if (m[1].startsWith("@") || m[2].startsWith("@")) continue;
    faqs.push({ q: m[1], a: m[2] });
  }
  return faqs;
}

function escapeJs(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

function patchPage(slug, pagePath, layoutPath) {
  let content = fs.readFileSync(pagePath, "utf8");

  if (content.includes("CalculatorSchemas")) return false;

  const meta = parseLayoutMeta(layoutPath);
  const faqs = extractFaqs(content);

  const faqItems = faqs
    .map((f) => `  { q: "${escapeJs(f.q)}", a: "${escapeJs(f.a)}" }`)
    .join(",\n");

  const constants = `
const CALC_SLUG = "${slug}";
const CALC_NAME = "${escapeJs(meta.title)}";
const CALC_DESCRIPTION = "${escapeJs(meta.description)}";
const staticFaqs = [
${faqItems || '  { q: "Is this calculator free?", a: "Yes — TheMetricApp calculators are 100% free with no sign-up required." }'}
];
`;

  // Add imports
  if (!content.includes('CalculatorSchemas')) {
    content = content.replace(
      'import Calculator from "./Calculator";',
      `import Calculator from "./Calculator";
import CalculatorSchemas from "@/components/CalculatorSchemas";
import CalculatorStaticSeo from "@/components/CalculatorStaticSeo";`
    );
  }

  content = content.replace(/^import SchemaMarkup from "@\/components\/SchemaMarkup";\n/m, "");

  // Insert constants before export default
  content = content.replace(
    /export default function Page\(\)/,
    constants + "\nexport default function Page()"
  );

  // Replace SchemaMarkup with CalculatorSchemas
  content = content.replace(
    /<SchemaMarkup data=\{\[faqSchema\]\} \/>/g,
    `<CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema]} />`
  );
  content = content.replace(
    /<SchemaMarkup data=\{\[faqSchema, breadcrumbSchema\]\} \/>/g,
    `<CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema, breadcrumbSchema]} />`
  );

  // Add CalculatorStaticSeo before closing fragment if not present
  if (!content.includes("CalculatorStaticSeo")) {
    content = content.replace(
      /(<Calculator \/>)\s*(<\/>\s*\);)/,
      `$1
      <CalculatorStaticSeo title={CALC_NAME} description={CALC_DESCRIPTION} slug={CALC_SLUG} faqs={staticFaqs} />
      $2`
    );
  }

  fs.writeFileSync(pagePath, content, "utf8");
  return true;
}

let patched = 0;
for (const folder of fs.readdirSync(calcDir)) {
  const folderPath = path.join(calcDir, folder);
  if (!fs.statSync(folderPath).isDirectory()) continue;
  const pagePath = path.join(folderPath, "page.js");
  if (!fs.existsSync(pagePath)) continue;
  if (patchPage(folder, pagePath, path.join(folderPath, "layout.js"))) {
    patched++;
    console.log(`Patched: ${folder}`);
  }
}
console.log(`Done. Patched ${patched} calculator pages.`);

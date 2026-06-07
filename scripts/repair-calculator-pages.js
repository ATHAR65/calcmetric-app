/**
 * Repair calculator page.js return blocks to correct structure.
 */
const fs = require("fs");
const path = require("path");

const calcDir = path.join(__dirname, "..", "src", "app", "calculators");
let fixed = 0;

for (const folder of fs.readdirSync(calcDir)) {
  const pagePath = path.join(calcDir, folder, "page.js");
  if (!fs.existsSync(pagePath)) continue;
  let c = fs.readFileSync(pagePath, "utf8");
  if (!c.includes("CALC_SLUG") || !c.includes("faqSchema")) continue;

  const correctReturn = `  return (
    <>
      <CalculatorSchemas slug={CALC_SLUG} name={CALC_NAME} description={CALC_DESCRIPTION} extraSchemas={[faqSchema]} />
      <Calculator />
      <CalculatorStaticSeo title={CALC_NAME} description={CALC_DESCRIPTION} slug={CALC_SLUG} faqs={staticFaqs} />
    </>
  );`;

  c = c.replace(/return\s*\([\s\S]*?\);(?=\s*\n\})/, correctReturn);
  fs.writeFileSync(pagePath, c);
  fixed++;
  console.log("Repaired:", folder);
}

console.log("Done:", fixed);

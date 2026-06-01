const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

async function optimizeImages() {
  // 1. Optimize themetric-logo.png — resize to max 300px on longest side (2:3 ratio)
  // Header displays at ~24x36px, 300px gives good retina support
  const logoSrc = path.join(publicDir, "themetric-logo.png");
  const logoTmp = path.join(publicDir, "themetric-logo-opt.png");

  const logoMeta = await sharp(logoSrc).metadata();
  console.log(`Logo original: ${logoMeta.width}x${logoMeta.height} (${Math.round(fs.statSync(logoSrc).size / 1024)}KB)`);

  // Resize to 300px wide (maintaining aspect ratio). Original is 1024x1536.
  await sharp(logoSrc)
    .resize(300, undefined, { fit: "inside", withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toFile(logoTmp);

  const logoOptSize = fs.statSync(logoTmp).size;
  console.log(`Logo optimized: ~300px wide (${Math.round(logoOptSize / 1024)}KB, saved ${Math.round((1 - logoOptSize / fs.statSync(logoSrc).size) * 100)}%)`);

  // Replace original
  fs.unlinkSync(logoSrc);
  fs.renameSync(logoTmp, logoSrc);

  // 2. Optimize themetric-favicon.png — resize to 64x64 for favicon use
  const faviconSrc = path.join(publicDir, "themetric-favicon.png");
  const faviconTmp = path.join(publicDir, "themetric-favicon-opt.png");

  const favMeta = await sharp(faviconSrc).metadata();
  console.log(`Favicon original: ${favMeta.width}x${favMeta.height} (${Math.round(fs.statSync(faviconSrc).size / 1024)}KB)`);

  // Resize to 64x64 (square crop center)
  await sharp(faviconSrc)
    .resize(64, 64, { fit: "cover", position: "center" })
    .png({ compressionLevel: 9, palette: true })
    .toFile(faviconTmp);

  const favOptSize = fs.statSync(faviconTmp).size;
  console.log(`Favicon optimized: 64x64 (${Math.round(favOptSize / 1024)}KB, saved ${Math.round((1 - favOptSize / fs.statSync(faviconSrc).size) * 100)}%)`);

  // Replace original
  fs.unlinkSync(faviconSrc);
  fs.renameSync(faviconTmp, faviconSrc);

  console.log("\n✅ All images optimized!");
}

optimizeImages().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});

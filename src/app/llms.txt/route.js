import { calculators, blogPosts, siteUrl, siteName, siteDescription } from "@/lib/siteConfig";

// Serves /llms.txt — a plain-text guide for AI crawlers (AI Overviews, ChatGPT,
// Perplexity, etc.). Generated from siteConfig so new calculators/guides are
// included automatically. See https://llmstxt.org/
export function GET() {
  const lines = [];

  lines.push(`# ${siteName}`);
  lines.push("");
  lines.push(`> ${siteDescription}`);
  lines.push("");
  lines.push(
    "All tools are free, require no sign-up, and run in the browser. Calculations cover US and UK taxes, " +
      "marketplace/platform fees, business profitability, loans, savings, and ROI."
  );
  lines.push("");

  lines.push("## Calculators");
  for (const c of calculators) {
    const desc = c.desc ? ` — ${c.desc}` : "";
    lines.push(`- [${c.title}](${siteUrl}${c.href})${desc}`);
  }
  lines.push("");

  lines.push("## Guides & Articles");
  for (const p of blogPosts) {
    const desc = p.excerpt ? ` — ${p.excerpt}` : "";
    lines.push(`- [${p.title}](${siteUrl}/blog/${p.slug})${desc}`);
  }
  lines.push("");

  lines.push("## About");
  lines.push(`- [About TheMetricApp](${siteUrl}/about)`);
  lines.push(`- [Editorial Policy](${siteUrl}/editorial-policy)`);
  lines.push(`- [FAQ](${siteUrl}/faq)`);
  lines.push(`- [Contact](${siteUrl}/contact)`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

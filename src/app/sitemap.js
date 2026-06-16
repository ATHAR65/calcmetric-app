import { promises as fs } from "fs";
import path from "path";
import { blogPosts } from "@/lib/siteConfig";

// Parse "Month DD, YYYY" to a Date object; fallback to today
function parseDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? new Date() : d;
  } catch {
    return new Date();
  }
}

// Build a blog slug lookup for lastModified dates
const blogDateMap = {};
blogPosts.forEach((post) => {
  blogDateMap[post.slug] = parseDate(post.date);
});

// Last-modified date for a static page, taken from its source file's mtime so
// the sitemap reflects genuine edits instead of the crawl time. Falls back to
// the file's directory or today's date if the page file can't be read.
async function staticPageMtime(...segments) {
  try {
    const stat = await fs.stat(path.join(process.cwd(), "src", "app", ...segments, "page.js"));
    return stat.mtime;
  } catch {
    return new Date();
  }
}

export default async function sitemap() {
  const baseUrl = "https://www.themetricapp.com";

  // Base static routes — lastModified sourced from each page's file mtime.
  const routes = [
    { url: `${baseUrl}`, lastModified: await staticPageMtime(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: await staticPageMtime("about"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: await staticPageMtime("contact"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/faq`, lastModified: await staticPageMtime("faq"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: await staticPageMtime("privacy-policy"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: await staticPageMtime("terms"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/editorial-policy`, lastModified: await staticPageMtime("editorial-policy"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/blog`, lastModified: await staticPageMtime("blog"), changeFrequency: "weekly", priority: 0.8 },
  ];

  // Dynamic lookup of calculator routes with file modification dates
  try {
    const calcDir = path.join(process.cwd(), "src", "app", "calculators");
    const calcs = await fs.readdir(calcDir);
    for (const folder of calcs) {
      const fullPath = path.join(calcDir, folder);
      const stat = await fs.stat(fullPath);
      if (stat.isDirectory()) {
        routes.push({
          url: `${baseUrl}/calculators/${folder}`,
          lastModified: stat.mtime,
          changeFrequency: "weekly",
          priority: 0.9,
        });
      }
    }
  } catch (e) {
    console.error("Failed to read calculators directory:", e);
  }

  // Dynamic lookup of blog post routes with actual publication dates
  try {
    const blogDir = path.join(process.cwd(), "src", "app", "blog");
    const blogs = await fs.readdir(blogDir);
    for (const folder of blogs) {
      const fullPath = path.join(blogDir, folder);
      const stat = await fs.stat(fullPath);
      if (stat.isDirectory()) {
        // Use actual blog post date if available, otherwise fall back to file mtime
        const actualDate = blogDateMap[folder] || stat.mtime;
        routes.push({
          url: `${baseUrl}/blog/${folder}`,
          lastModified: actualDate,
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    }
  } catch (e) {
    console.error("Failed to read blog directory:", e);
  }

  // Dynamic lookup of tools guide routes
  try {
    const toolsDir = path.join(process.cwd(), "src", "app", "tools");
    const tools = await fs.readdir(toolsDir);
    for (const folder of tools) {
      const fullPath = path.join(toolsDir, folder);
      const stat = await fs.stat(fullPath);
      if (stat.isDirectory()) {
        routes.push({
          url: `${baseUrl}/tools/${folder}`,
          lastModified: stat.mtime,
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  } catch (e) {
    console.error("Failed to read tools directory:", e);
  }

  return routes;
}

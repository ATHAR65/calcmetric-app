import { promises as fs } from "fs";
import path from "path";

export default async function sitemap() {
  const baseUrl = "https://www.themetricapp.com";

  // Base static routes
  const routes = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  // Dynamic lookup of calculator routes
  try {
    const calcDir = path.join(process.cwd(), "src", "app", "calculators");
    const calcs = await fs.readdir(calcDir);
    for (const folder of calcs) {
      const fullPath = path.join(calcDir, folder);
      const stat = await fs.stat(fullPath);
      if (stat.isDirectory()) {
        routes.push({
          url: `${baseUrl}/calculators/${folder}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.9,
        });
      }
    }
  } catch (e) {
    console.error("Failed to read calculators directory:", e);
  }

  // Dynamic lookup of blog post routes
  try {
    const blogDir = path.join(process.cwd(), "src", "app", "blog");
    const blogs = await fs.readdir(blogDir);
    for (const folder of blogs) {
      const fullPath = path.join(blogDir, folder);
      const stat = await fs.stat(fullPath);
      if (stat.isDirectory()) {
        routes.push({
          url: `${baseUrl}/blog/${folder}`,
          lastModified: new Date(),
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
          lastModified: new Date(),
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

import type { MetadataRoute } from "next";

import { siteContent } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-27");

  return Object.values(siteContent.seo.pages).map((page) => ({
    url: new URL(page.path, siteContent.siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}

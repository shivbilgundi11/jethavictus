import { siteContent } from "@/lib/content/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.siteUrl,
      lastModified: new Date(),
    },
  ];
}

import type { Metadata } from "next";

import { siteContent } from "@/lib/content/site";

export type SeoPage = keyof typeof siteContent.seo.pages;

export function getPageMetadata(page: SeoPage): Metadata {
  const { brand, seo, siteUrl } = siteContent;
  const data = seo.pages[page];
  const url = new URL(data.path, siteUrl).toString();

  return {
    title: page === "home" ? { absolute: data.title } : data.title,
    description: data.description,
    keywords: [...seo.keywords],
    alternates: {
      canonical: data.path,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url,
      siteName: `${brand.name} ${brand.suffix}`,
      type: "website",
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: `${data.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  };
}

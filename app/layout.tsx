import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteContent } from "@/lib/content/site";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.siteUrl),
  applicationName: "Jethavictus Solutions",
  title: {
    default: "Jethavictus Solutions",
    template: "%s | Jethavictus Solutions",
  },
  description:
    "High-performance technology consulting across AI, cloud, cybersecurity, ERP, blockchain, IoT, and data science.",
  keywords: [...siteContent.seo.keywords],
  authors: [{ name: "Jethavictus Solutions" }],
  creator: "Jethavictus Solutions",
  publisher: "Jethavictus Solutions",
  category: "Technology consulting",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteContent.siteUrl,
    siteName: "Jethavictus Solutions",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-surface-page text-content-primary flex min-h-screen flex-col font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

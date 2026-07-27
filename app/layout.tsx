import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Jethavictus Solutions",
    template: "%s | Jethavictus Solutions",
  },
  description:
    "High-performance technology consulting across AI, cloud, cybersecurity, ERP, blockchain, IoT, and data science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-surface-page text-content-primary flex min-h-screen flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

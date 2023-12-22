import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { inter } from "@/app/ui/fonts";
import { siteConfig } from "@/config/site";

import { TailwindIndicator } from "@/components/marketting/tailwindcss-inficator";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@awelrisak",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  generator: "Next.js",
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Laascaanood Library",
    "Laascaanood",
    "Las Anod",
    "Las Anod Library",
    "Las Anod Public Library",
    "Books",
    "Community",
    "Reading",
    "Literature",
  ],
  authors: [{ name: "Abdurezak Farah", url: "https://www.cabdirisaaq.com" }],
  creator: "Abdurezak Farah",
  publisher: "Finiin",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <main className="relative w-full min-h-screen">
          {children}
          <TailwindIndicator />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}

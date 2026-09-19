import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

import DAKNavbar from "@/components/DAKNavbar";
import DAKFooter from "@/components/DAKFooter";

const manrope = Manrope({
  variable: "--font-dak",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3002";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "DAK Corporation",
    template: "%s | DAK Corporation",
  },

  description:
    "DAK Corporation builds intelligent technology and AI-powered products for modern businesses.",

  keywords: [
    "DAK Corporation",
    "DAK",
    "Artificial Intelligence",
    "AI",
    "Business Software",
    "AI Software",
    "BizAI Employee",
    "Technology",
    "Business Automation",
  ],

  authors: [
    {
      name: "DAK Corporation",
    },
  ],

  creator: "DAK Corporation",

  publisher: "DAK Corporation",

  applicationName: "DAK Corporation",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/dak-icon.svg",
    shortcut: "/dak-icon.svg",
    apple: "/dak-icon.svg",
  },

  openGraph: {
    type: "website",
    siteName: "DAK Corporation",
    title: "DAK Corporation",
    description:
      "Building intelligent technology and AI-powered products for modern businesses.",
    url: "/",
  },

  twitter: {
    card: "summary_large_image",
    title: "DAK Corporation",
    description:
      "Building intelligent technology and AI-powered products for modern businesses.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} bg-[#050507] text-white antialiased`}
      >
        <DAKNavbar />

        {children}

        <DAKFooter />
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import { Caveat, Geist, Geist_Mono, Gochi_Hand } from "next/font/google";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/MotionProvider";
import { profile } from "@/lib/content";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
// Two handwriting faces: Caveat for flowing script/captions, Gochi Hand for scrawled margin notes.
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-caveat", display: "swap" });
const gochi = Gochi_Hand({ subsets: ["latin"], weight: "400", variable: "--font-gochi", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const description =
  "Dhwanil Bhavsar — Product manager, cybersecurity enthusiast & community builder from Indore, India. Passionate about AI-powered automation, ethical hacking and visual storytelling through photography. Building products, empowering communities and exploring technology.";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — `,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: ["Dhwanil Bhavsar", "portfolio", "Developer", "Community Builder", "Photography", "Indore"],
  authors: [{ name: profile.name, url: profile.githubUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Building Products, Exploring Security, Connecting Communities.`,
    description,
    siteName: profile.name,
    images: [{ url: profile.portrait.src, width: profile.portrait.width, height: profile.portrait.height, alt: profile.portrait.alt }],
  },
  twitter: {
    card: "summary",
    creator: "@dhwanillll",
    title: `${profile.name} — Portfolio`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${caveat.variable} ${gochi.variable}`}
    >
      <body className="bg-white font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only rounded-full bg-ink px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

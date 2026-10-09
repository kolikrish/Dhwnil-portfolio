import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import { Caveat, Geist_Mono, Gochi_Hand } from "next/font/google";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/MotionProvider";
import { profile } from "@/lib/content";
import "./globals.css";

const gilroy = localFont({
  src: "../../public/fonts/Gilroy-Light.ttf",
  variable: "--font-gilroy",
  display: "swap",
});

const poppins = localFont({
  src: "../../public/fonts/Poppins-Light.ttf",
  variable: "--font-poppins",
  display: "swap",
});

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
// Two handwriting faces: Caveat for flowing script/captions, Gochi Hand for scrawled margin notes.
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-caveat", display: "swap" });
const gochi = Gochi_Hand({ subsets: ["latin"], weight: "400", variable: "--font-gochi", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhwanilbhavsar.vercel.app";
const description =
  "Explore Dhwanil Bhavsar's work in product growth, AI automation, cybersecurity, developer communities, technical writing, and photography in Indore, India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dhwanil Bhavsar — Product Growth, Cybersecurity & Photography",
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Dhwanil Bhavsar",
    "Product Growth Engineer",
    "Cybersecurity",
    "The Hackers Meetup",
    "Community Builder",
    "Indore",
    "Walkover",
    "viaSocket",
    "AI Automation",
    "Technical Writer",
    "Photography",
  ],
  authors: [{ name: profile.name, url: profile.githubUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Product Growth, Cybersecurity & Photography`,
    description,
    siteName: profile.name,
    images: [{ url: profile.portrait.src, width: profile.portrait.width, height: profile.portrait.height, alt: profile.portrait.alt }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dhwanillll",
    title: `${profile.name} — Product Growth, Cybersecurity & Photography`,
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
      className={`${gilroy.variable} ${poppins.variable} ${geistMono.variable} ${caveat.variable} ${gochi.variable}`}
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

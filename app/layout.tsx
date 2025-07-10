import type { Metadata, Viewport } from "next";
import { Kulim_Park, Syne_Mono } from "next/font/google";
import "./globals.css";
import { Logo } from "./Logo";
import PlausibleProvider from "next-plausible";
import { UserAPIKey } from "./UserAPIKey";
import { Toaster } from "@/components/ui/sonner";
import GitHub from "./components/GitHubIcon";
import XformerlyTwitter from "./components/TwitterIcon";
import { PlusIcon } from "./components/PlusIcon";

const kulimPark = Kulim_Park({
  variable: "--font-kulim-park",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

const syneMono = Syne_Mono({
  variable: "--font-syne-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const title = "EasyEdit – Edit images with one prompt";
const description = "The easiest way to edit images in one prompt";
const url = "https://bannus.riiio.top/";
const ogimage = "https://www.easyedit.io/og-image.png";
const sitename = "bannus";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${kulimPark.variable} ${syneMono.variable}`}>
      <head>
        <PlausibleProvider domain="easyedit.io" />
      </head>
      <body className="flex min-h-screen w-full flex-col antialiased">
        <header className="relative flex p-4 text-center text-white items-center justify-between">
          {/* 左侧 Logo+标题 */}
          <a
            href="https://bannus.riiio.top"
            className="flex items-center gap-2 text-lg"
          >
            <Logo />
            智能图片编辑
          </a>

          {/* 右侧 New Image + API Key */}
          <div className="flex items-center gap-2">
            <UserAPIKey />
          </div>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center overflow-auto pt-4 md:pb-12">
          <div className="w-full">{children}</div>
        </main>

        <Toaster />

        <footer className="flex flex-col items-center p-4">
          <p className="text-sm text-gray-400 text-center">
            Powered by{" "}
            <a
              href="https://riiio.top"
              target="_blank"
              className="text-gray-200 underline underline-offset-2"
            >
              Rio API
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}

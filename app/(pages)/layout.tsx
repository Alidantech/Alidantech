import "@/lib/styles/globals.css";
import type { Metadata, Viewport } from "next";

import clsx from "clsx";

import { Providers } from "@/app/providers";
import { siteConfig } from "@/lib/config/site";
import { fontSans } from "@/lib/config/fonts";
import { Navbar } from "@/components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen w-full max-w-screen overflow-x-hidden">
            <Navbar />
            <main className="flex-grow flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <main className="min-h-screen overflow-x-hidden flex flex-col justify-between items-center">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}

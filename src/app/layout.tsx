import type { Metadata } from "next";
import { outfit, robotoMono } from "@/lib/fonts";
import "./globals.css";
import ThemeProvider from "@/Provider/ThemeProvider";

export const metadata: Metadata = {
  title: "UI",
  description: "A UI component collection for reference.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${robotoMono.variable} antialiased `}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

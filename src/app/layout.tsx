import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


import "./globals.scss";
import { ThemeContainer } from "@/themeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Experiment App",
  description: "Honestly, we have a bit of everything around here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContainer>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </html>
    </ThemeContainer>
  );
}

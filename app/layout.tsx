import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hassan Mahmoud | Portfolio",
  description: "Computer Science Student, AI & Automation Enthusiast",
  keywords: ["portfolio", "developer", "AI", "automation", "software engineer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}

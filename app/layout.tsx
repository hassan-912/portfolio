import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './context/ThemeContext'

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

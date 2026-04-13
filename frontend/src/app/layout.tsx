import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QueryProvider } from "@/components/providers/QueryProvider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Costra AI — AI-Powered Cloud Cost Optimization",
    template: "%s | Costra AI",
  },
  description:
    "Transform your app idea into a cost-optimized, production-ready cloud architecture. AI-powered pricing intelligence across AWS, GCP, and Azure.",
  keywords: [
    "cloud cost optimization",
    "AI architecture",
    "AWS pricing",
    "GCP pricing",
    "Azure pricing",
    "infrastructure cost",
    "cloud comparison",
  ],
  openGraph: {
    title: "Costra AI — AI-Powered Cloud Cost Optimization",
    description:
      "Transform your app idea into a cost-optimized, production-ready cloud architecture.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <QueryProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}

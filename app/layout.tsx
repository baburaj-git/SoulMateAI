'use client';

import { Inter } from "next/font/google"
import "./globals.css"
import { LayoutContent } from "@/components/layout-content"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'SoulSync Matrimonial',
  description: 'Find your perfect match based on MBTI personality compatibility',
  keywords: ['matrimonial', 'MBTI', 'personality', 'matchmaking', 'compatibility'],
  authors: [{ name: 'SoulSync Team' }],
  openGraph: {
    title: 'SoulSync Matrimonial',
    description: 'Find your perfect match based on MBTI personality compatibility',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}

import './globals.css'
'use client';

import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from '@/lib/auth-context'
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
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
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}

import './globals.css'
'use client';

import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from '@/lib/auth-context'
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import { metadata } from "./metadata"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="bg-primary text-primary-foreground py-6">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">SoulSync AI</h3>
                    <p className="text-sm">
                      Modern matrimonial matchmaking for Indian families through scientific approach
                    </p>
                    <p className="text-sm mt-2">CIN: U72900MH2023PTC123456</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="/" className="hover:underline">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/process" className="hover:underline">
                          Our Process
                        </a>
                      </li>
                      <li>
                        <a href="/why-soulsync" className="hover:underline">
                          Why SoulSync
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="hover:underline">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-sm">Email: support@soulsyncai.in</p>
                    <p className="text-sm">Phone: +91 98765 43210</p>
                    <p className="text-sm">Toll-free: 1800 123 4567</p>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-center text-sm">
                  &copy; {new Date().getFullYear()} SoulSync AI. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}

import './globals.css'
'use client';

import { AuthProvider } from '@/lib/auth-context';
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
      <Toaster />
    </AuthProvider>
  );
} 
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">SoulSync AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 hover:text-primary-foreground/80">
              Home
            </Link>
            <Link href="/process" className="px-3 py-2 hover:text-primary-foreground/80">
              Our Process
            </Link>
            <Link href="/why-soulsync" className="px-3 py-2 hover:text-primary-foreground/80">
              Why SoulSync
            </Link>
            <Link href="/contact" className="px-3 py-2 hover:text-primary-foreground/80">
              Contact Us
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>हिन्दी (Hindi)</DropdownMenuItem>
                <DropdownMenuItem>தமிழ் (Tamil)</DropdownMenuItem>
                <DropdownMenuItem>తెలుగు (Telugu)</DropdownMenuItem>
                <DropdownMenuItem>ಕನ್ನಡ (Kannada)</DropdownMenuItem>
                <DropdownMenuItem>मराठी (Marathi)</DropdownMenuItem>
                <DropdownMenuItem>ગુજરાતી (Gujarati)</DropdownMenuItem>
                <DropdownMenuItem>বাংলা (Bengali)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/auth">
              <Button variant="secondary" className="ml-4">
                Register / Login
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>हिन्दी (Hindi)</DropdownMenuItem>
                <DropdownMenuItem>தமிழ் (Tamil)</DropdownMenuItem>
                <DropdownMenuItem>తెలుగు (Telugu)</DropdownMenuItem>
                <DropdownMenuItem>ಕನ್ನಡ (Kannada)</DropdownMenuItem>
                <DropdownMenuItem>मराठी (Marathi)</DropdownMenuItem>
                <DropdownMenuItem>ગુજરાતી (Gujarati)</DropdownMenuItem>
                <DropdownMenuItem>বাংলা (Bengali)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary-foreground/80 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/process"
                className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Process
              </Link>
              <Link
                href="/why-soulsync"
                className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Why SoulSync
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/auth"
                className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Register / Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar


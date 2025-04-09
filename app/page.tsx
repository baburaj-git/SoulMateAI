'use client';

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, ArrowRight } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/indian-couple.png"
            alt="Indian Couple in Traditional Wedding Attire"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Perfect Match with AI
            </h1>
            <p className="text-xl text-white/90 mb-8">
              SoulSync AI combines personality assessment with advanced algorithms to help you find your ideal life partner.
            </p>
            <div className="flex gap-4">
              {user ? (
                <Link href="/profile">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    View Profile
                  </Button>
                </Link>
              ) : (
                <Link href="/register">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Get Started
                  </Button>
                </Link>
              )}
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoulSync AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Matching</h3>
                  <p className="text-muted-foreground">
                    Our advanced algorithms analyze personality traits and preferences to find your perfect match.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Personality Assessment</h3>
                  <p className="text-muted-foreground">
                    MBTI-based personality test helps understand compatibility and relationship dynamics.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
                  <p className="text-muted-foreground">
                    All profiles are verified to ensure authenticity and build trust in the community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of singles who have found their life partners through SoulSync AI.
          </p>
          {!user && (
            <Link href="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}


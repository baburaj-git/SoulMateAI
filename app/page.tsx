import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, ArrowRight } from "lucide-react"
import { MBTITest } from "@/components/MBTITest"

export default function Home() {
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

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Find Your Perfect Life Partner with AI</h1>
            <p className="text-xl mb-8">
              SoulSync AI combines traditional Indian values with modern technology to create meaningful and lasting
              marriages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/auth">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/process">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart size={24} />
                </div>
                <h3 className="text-4xl font-bold mb-2">25,000+</h3>
                <p className="text-muted-foreground">Successful Marriages</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users size={24} />
                </div>
                <h3 className="text-4xl font-bold mb-2">1,00,000+</h3>
                <p className="text-muted-foreground">Active Users Across India</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <h3 className="text-4xl font-bold mb-2">95%</h3>
                <p className="text-muted-foreground">Compatibility Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MBTI Test Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Take Our Personality Assessment</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our AI-powered matchmaking system uses the scientifically validated MBTI framework to understand your personality type
            and find your most compatible matches.
          </p>
          <MBTITest />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoulSync AI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">AI-Powered Matching</h3>
              <p className="text-muted-foreground mb-4">
                Our advanced algorithms analyze multiple compatibility factors to find your perfect match while
                respecting traditional values.
              </p>
              <Link href="/why-soulsync" className="text-primary inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Family Involvement</h3>
              <p className="text-muted-foreground mb-4">
                We respect the role of family in Indian marriages while giving individuals the freedom to make their own
                choices.
              </p>
              <Link href="/why-soulsync" className="text-primary inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Cultural Compatibility</h3>
              <p className="text-muted-foreground mb-4">
                We consider cultural backgrounds, traditions, and values to ensure long-term relationship success.
              </p>
              <Link href="/why-soulsync" className="text-primary inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Verified Profiles</h3>
              <p className="text-muted-foreground mb-4">
                All profiles undergo strict verification including education, career, and family background checks.
              </p>
              <Link href="/why-soulsync" className="text-primary inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Privacy Focused</h3>
              <p className="text-muted-foreground mb-4">
                Your data is secure with us. We prioritize your privacy throughout the matchmaking process.
              </p>
              <Link href="/why-soulsync" className="text-primary inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Relationship Guidance</h3>
              <p className="text-muted-foreground mb-4">
                Get expert advice from our panel of relationship counselors with experience in Indian marriages.
              </p>
              <Link href="/why-soulsync" className="text-primary inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="italic mb-4">
                  "After my parents tried several traditional matchmakers without success, I convinced them to try
                  SoulSync AI. The matches were so much more compatible with my personality and values. I met my husband
                  within two months of joining!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted mr-4"></div>
                  <div>
                    <p className="font-semibold">Ananya & Vikram</p>
                    <p className="text-sm text-muted-foreground">Delhi, Married in 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="italic mb-4">
                  "As an NRI looking for a partner who shares both my Indian values and global outlook, SoulSync AI was
                  perfect. The compatibility assessment was thorough and my match and I connected instantly. Thank you
                  SoulSync!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted mr-4"></div>
                  <div>
                    <p className="font-semibold">Arjun & Meera</p>
                    <p className="text-sm text-muted-foreground">Mumbai/Singapore, Engaged 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Life Partner?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy couples who found their soulmate through our AI-powered matchmaking service.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


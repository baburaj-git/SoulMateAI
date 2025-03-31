import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, FileText, Users, MessageCircle, ThumbsUp, Heart } from "lucide-react"

export default function ProcessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Matchmaking Process</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how our scientific approach to matchmaking increases your chances of finding a compatible life
          partner.
        </p>
      </div>

      {/* AI Agents Interaction Showcase */}
      <div className="mb-16 relative">
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">AI-Powered Compatibility Assessment</h2>
              <p className="text-lg mb-6">
                Our advanced AI agents work behind the scenes to analyze compatibility factors between potential
                matches. Each AI agent represents an individual's preferences, personality traits, and relationship
                goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="ml-3">Deep personality analysis beyond surface-level preferences</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="ml-3">Value-based matching for long-term compatibility</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="ml-3">Cultural and family background consideration</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="AI Bride Agent"
                    width={250}
                    height={400}
                    className="absolute left-0 top-0 z-10 rounded-lg shadow-lg border-4 border-white"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute left-[60px] top-[50px] z-20 bg-white p-3 rounded-lg shadow-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary">Analyzing compatibility...</p>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="AI Groom Agent"
                    width={250}
                    height={400}
                    className="absolute right-0 top-0 z-0 rounded-lg shadow-lg border-4 border-white"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute right-[60px] top-[120px] z-20 bg-white p-3 rounded-lg shadow-lg border border-secondary/20">
                    <p className="text-sm font-medium text-secondary">Matching values detected</p>
                  </div>
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-primary to-secondary p-1 rounded-full h-16 w-16 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <h2 className="text-2xl font-bold mb-8 text-center">Our 6-Step Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>1. Profile Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Profile Creation"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4">
                  <p className="text-white text-sm">Your AI agent is created based on your profile data</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Create your detailed profile with personal information, preferences, and upload photos to showcase your
              personality.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Comprehensive bio-data collection</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Photo verification process</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Background verification</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>2. Personality Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Personality Assessment"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4">
                  <p className="text-white text-sm">AI analyzes your personality traits and preferences</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Take our scientifically designed compatibility tests to help our AI understand your personality traits and
              preferences.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Psychological compatibility tests</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Value and belief assessment</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Lifestyle and future goals analysis</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <ThumbsUp className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>3. AI Matching</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 relative h-[200px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.svg?height=200&width=150"
                    alt="AI Bride Agent"
                    width={100}
                    height={180}
                    className="absolute left-4 top-2 z-10 rounded-lg shadow-md border-2 border-white"
                    style={{ objectFit: "cover" }}
                  />
                  <Image
                    src="/placeholder.svg?height=200&width=150"
                    alt="AI Groom Agent"
                    width={100}
                    height={180}
                    className="absolute right-4 top-2 z-10 rounded-lg shadow-md border-2 border-white"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-primary/10 p-4 rounded-full h-20 w-20 flex items-center justify-center">
                    <div className="animate-pulse bg-primary rounded-full h-16 w-16 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 text-center">
                    <p className="text-sm font-medium bg-white/80 mx-auto w-fit px-2 py-1 rounded">
                      AI agents interacting
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Our advanced AI algorithm analyzes your profile and assessment results to find highly compatible matches.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Multi-dimensional compatibility scoring</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Cultural and family background matching</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Continuous learning from successful matches</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>4. Connect & Communicate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 relative h-[200px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="relative w-full h-full">
                  <div className="absolute left-4 top-4 z-10 bg-white p-3 rounded-lg shadow-md max-w-[120px]">
                    <p className="text-xs text-primary">Hello! I noticed we both love hiking and classical music.</p>
                  </div>
                  <div className="absolute right-4 top-[80px] z-10 bg-white p-3 rounded-lg shadow-md max-w-[120px]">
                    <p className="text-xs text-secondary">That's great! I also saw we have similar family values.</p>
                  </div>
                  <div className="absolute left-4 bottom-4 z-10 bg-white p-3 rounded-lg shadow-md max-w-[120px]">
                    <p className="text-xs text-primary">Would you like to video chat sometime this week?</p>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 text-center">
                    <p className="text-sm font-medium bg-white/80 mx-auto w-fit px-2 py-1 rounded">
                      AI-guided conversation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Start conversations with your matches through our secure messaging platform and get to know each other
              better.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Secure and private messaging</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Video call integration</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Guided conversation starters</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>5. Meet in Person</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Meeting in Person"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4">
                  <p className="text-white text-sm">AI agents help prepare for your first meeting</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              When you're ready, arrange to meet your match in person with the support of our relationship advisors.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Safe meeting recommendations</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Pre-meeting guidance</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Post-meeting feedback collection</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>6. Relationship Success</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Relationship Success"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4">
                  <p className="text-white text-sm">AI continues to provide relationship guidance</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Receive ongoing relationship guidance and support as your connection grows into a lifelong partnership.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Relationship counseling</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Pre-marital guidance</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Long-term success strategies</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* AI Compatibility Visualization */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">How Our AI Agents Assess Compatibility</h2>
        <div className="bg-muted rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl font-semibold mb-4">Multi-Dimensional Compatibility Analysis</h3>
              <p className="mb-6">
                Our AI agents represent each individual's unique characteristics and preferences. When assessing
                compatibility, they interact in a virtual environment to analyze:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2 flex items-center">
                    <div className="h-4 w-4 rounded-full bg-primary mr-2"></div>
                    Emotional Compatibility
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    AI agents evaluate emotional intelligence, communication styles, and how you express and receive
                    affection.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2 flex items-center">
                    <div className="h-4 w-4 rounded-full bg-secondary mr-2"></div>
                    Value Alignment
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Your core values, beliefs, and life priorities are compared to find meaningful connections.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2 flex items-center">
                    <div className="h-4 w-4 rounded-full bg-primary mr-2"></div>
                    Lifestyle Compatibility
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Daily habits, social preferences, and future goals are analyzed for long-term harmony.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2 flex items-center">
                    <div className="h-4 w-4 rounded-full bg-secondary mr-2"></div>
                    Cultural Integration
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Family backgrounds, traditions, and cultural expectations are considered for a harmonious
                    relationship.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Female AI Agent */}
                    <div className="absolute left-0 top-[50px] z-10 bg-white p-4 rounded-lg shadow-lg border-2 border-primary w-[140px]">
                      <div className="text-center mb-2">
                        <div className="h-16 w-16 bg-primary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-primary text-2xl">F</span>
                        </div>
                        <p className="font-semibold text-sm">Bride AI Agent</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs">
                          <span className="font-medium">Values:</span> Family, Career
                        </div>
                        <div className="text-xs">
                          <span className="font-medium">Interests:</span> Travel, Reading
                        </div>
                        <div className="text-xs">
                          <span className="font-medium">Goals:</span> Children, Home
                        </div>
                      </div>
                    </div>

                    {/* Male AI Agent */}
                    <div className="absolute right-0 top-[50px] z-10 bg-white p-4 rounded-lg shadow-lg border-2 border-secondary w-[140px]">
                      <div className="text-center mb-2">
                        <div className="h-16 w-16 bg-secondary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-secondary text-2xl">M</span>
                        </div>
                        <p className="font-semibold text-sm">Groom AI Agent</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs">
                          <span className="font-medium">Values:</span> Family, Stability
                        </div>
                        <div className="text-xs">
                          <span className="font-medium">Interests:</span> Travel, Sports
                        </div>
                        <div className="text-xs">
                          <span className="font-medium">Goals:</span> Children, Career
                        </div>
                      </div>
                    </div>

                    {/* Compatibility Lines */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 400 400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="140"
                        y1="100"
                        x2="260"
                        y2="100"
                        stroke="#E11D48"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      <text x="200" y="90" textAnchor="middle" fontSize="12" fill="#E11D48">
                        Family Values: 95%
                      </text>

                      <line
                        x1="140"
                        y1="150"
                        x2="260"
                        y2="150"
                        stroke="#9333EA"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      <text x="200" y="140" textAnchor="middle" fontSize="12" fill="#9333EA">
                        Travel Interest: 90%
                      </text>

                      <line
                        x1="140"
                        y1="200"
                        x2="260"
                        y2="200"
                        stroke="#E11D48"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      <text x="200" y="190" textAnchor="middle" fontSize="12" fill="#E11D48">
                        Children Goals: 100%
                      </text>

                      <line
                        x1="140"
                        y1="250"
                        x2="260"
                        y2="250"
                        stroke="#9333EA"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      <text x="200" y="240" textAnchor="middle" fontSize="12" fill="#9333EA">
                        Career Alignment: 85%
                      </text>
                    </svg>

                    {/* Compatibility Score */}
                    <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 z-30 bg-white p-4 rounded-lg shadow-lg border-2 border-primary text-center">
                      <p className="font-bold text-lg">Overall Compatibility</p>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <Heart className="h-5 w-5 text-primary fill-primary" />
                        <Heart className="h-5 w-5 text-primary fill-primary" />
                        <Heart className="h-5 w-5 text-primary fill-primary" />
                        <Heart className="h-5 w-5 text-primary fill-primary" />
                        <Heart className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <p className="font-bold text-xl text-primary mt-1">92%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-muted rounded-lg p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl italic mb-6">
            "SoulSync AI's scientific approach to matchmaking was exactly what we needed. The personality assessment was
            thorough and the matches were incredibly accurate. We connected instantly and are now happily married. Thank
            you SoulSync!"
          </p>
          <div>
            <p className="font-semibold">Priya & Rahul</p>
            <p className="text-sm text-muted-foreground">Matched in 2022, Married in 2023</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">How long does the matching process take?</h3>
            <p className="text-muted-foreground">
              Our AI begins matching immediately after you complete your profile and personality assessment. Most users
              receive their first set of matches within 24-48 hours.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">How accurate is the AI matching?</h3>
            <p className="text-muted-foreground">
              Our AI has a 95% compatibility rate, meaning that 95% of our matched couples report high satisfaction with
              their compatibility. The system continuously learns and improves from successful matches.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Is my personal information secure?</h3>
            <p className="text-muted-foreground">
              Absolutely. We use bank-level encryption to protect your data and never share your personal information
              with third parties without your explicit consent.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Can I specify my preferences for matches?</h3>
            <p className="text-muted-foreground">
              Yes, you can set preferences for age, location, education, profession, and other factors. However, our AI
              may occasionally suggest matches outside your stated preferences if it detects high compatibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Brain, Shield, Heart, Award } from "lucide-react"

export default function WhySoulSyncPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Why Choose SoulSync AI</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how our modern approach to Indian matrimonial matchmaking sets us apart from traditional services.
        </p>
      </div>

      {/* Main Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">The SoulSync Difference</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold">Balance of Tradition and Modernity</h3>
                <p className="text-muted-foreground">
                  We respect Indian traditions while embracing modern approaches to finding compatible partners.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold">Comprehensive Compatibility Assessment</h3>
                <p className="text-muted-foreground">
                  Our detailed assessment goes beyond basic preferences to understand your core values and relationship
                  needs.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold">Thorough Background Verification</h3>
                <p className="text-muted-foreground">
                  All profiles undergo strict verification of education, career, and family background to ensure
                  authenticity.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold">Family Involvement Options</h3>
                <p className="text-muted-foreground">
                  We offer features for family members to participate in the matchmaking process while respecting
                  individual choices.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold">Relationship Guidance</h3>
                <p className="text-muted-foreground">
                  Our experts provide support and advice throughout your journey to finding the perfect match.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Happy Indian couple celebrating their engagement"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <Brain className="h-8 w-8 text-primary mb-4" />
              <CardTitle>AI-Powered Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our advanced algorithms analyze multiple compatibility factors including personality traits, values,
                goals, and lifestyle preferences to find your perfect match.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Trust & Safety</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We verify all profiles through a rigorous process including ID verification, education certificates,
                employment verification, and family background checks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Cultural Sensitivity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our matching system respects Indian cultural backgrounds and traditions while embracing modern values,
                creating a perfect balance for today's generation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Comparison */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">SoulSync AI vs Traditional Matchmaking</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-4 text-left">Features</th>
                <th className="p-4 text-center">SoulSync AI</th>
                <th className="p-4 text-center">Traditional Matrimonial Services</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Matching Approach</td>
                <td className="p-4 text-center">AI-powered scientific algorithm</td>
                <td className="p-4 text-center">Manual matching or basic filters</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Compatibility Assessment</td>
                <td className="p-4 text-center">100+ compatibility factors</td>
                <td className="p-4 text-center">Basic biodata matching</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Profile Verification</td>
                <td className="p-4 text-center">Comprehensive verification process</td>
                <td className="p-4 text-center">Basic or no verification</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Family Involvement</td>
                <td className="p-4 text-center">Balanced approach with family accounts</td>
                <td className="p-4 text-center">Either family-dominated or completely individual</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Success Rate</td>
                <td className="p-4 text-center">95% compatibility rate</td>
                <td className="p-4 text-center">40-60% compatibility rate</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Relationship Support</td>
                <td className="p-4 text-center">Continuous guidance and counseling</td>
                <td className="p-4 text-center">Limited or no support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <p className="italic mb-4">
                "After trying several matrimonial sites with no success, SoulSync AI was a breath of fresh air. The
                matches were so much more compatible with my personality and values. I met my husband within two months
                of joining!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted mr-4"></div>
                <div>
                  <p className="font-semibold">Ananya S.</p>
                  <p className="text-sm text-muted-foreground">Delhi, India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <p className="italic mb-4">
                "As a working professional with limited time, SoulSync AI's scientific approach saved me from endless
                meetings. My parents were initially skeptical but are now the biggest fans after seeing how compatible
                we are!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted mr-4"></div>
                <div>
                  <p className="font-semibold">Vikram & Meera</p>
                  <p className="text-sm text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Awards */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">Awards & Recognition</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-2" />
            <p className="font-semibold">Best Matrimonial App 2023</p>
            <p className="text-sm text-muted-foreground">India Tech Innovation Awards</p>
          </div>

          <div className="text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-2" />
            <p className="font-semibold">Most Trusted Matchmaking Service</p>
            <p className="text-sm text-muted-foreground">Indian Consumer Choice Awards</p>
          </div>

          <div className="text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-2" />
            <p className="font-semibold">AI Excellence in Relationships</p>
            <p className="text-sm text-muted-foreground">Global AI Summit, Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  )
}


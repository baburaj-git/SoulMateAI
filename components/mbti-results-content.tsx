'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';

export function MBTIResultsContent() {
  const searchParams = useSearchParams();
  const mbtiType = searchParams.get('type');
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!mbtiType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">No MBTI Results Found</h2>
            <p className="text-muted-foreground mb-4">
              It seems you haven't taken the MBTI test yet or your results are not available.
            </p>
            <Link href="/mbti-test">
              <Button>Take the MBTI Test</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Your MBTI Results</h2>
          <div className="text-4xl font-bold text-primary mb-6">{mbtiType}</div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">What does this mean?</h3>
              <p className="text-muted-foreground">
                Your MBTI type indicates your personality preferences and can help in understanding your compatibility with others.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
              <p className="text-muted-foreground mb-4">
                Your results have been saved to your profile. You can now explore potential matches based on your personality type.
              </p>
              <div className="flex gap-4">
                <Link href="/profile">
                  <Button variant="outline">View Profile</Button>
                </Link>
                <Link href="/">
                  <Button>Find Matches</Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
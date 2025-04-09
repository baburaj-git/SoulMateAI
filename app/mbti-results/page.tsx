import { Suspense } from 'react';
import ProtectedRoute from '@/components/protected-route';
import { MBTIResultsContent } from '@/components/mbti-results-content';

export default function MBTIResultsPage() {
  return (
    <ProtectedRoute>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      }>
        <MBTIResultsContent />
      </Suspense>
    </ProtectedRoute>
  );
} 
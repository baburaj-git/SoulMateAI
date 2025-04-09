import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError);
      return NextResponse.json(
        { error: 'Authentication error. Please try logging in again.' },
        { status: 401 }
      );
    }

    if (!session) {
      return NextResponse.json(
        { error: 'No active session found. Please log in.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { mbtiType } = body;

    if (!mbtiType) {
      return NextResponse.json(
        { error: 'MBTI type is required' },
        { status: 400 }
      );
    }

    // Update the user's MBTI type in Supabase
    const { data: userData, error: updateError } = await supabase
      .from('users')
      .update({ mbti_type: mbtiType })
      .eq('id', session.user.id)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating user:', updateError);
      return NextResponse.json(
        { error: 'Failed to update MBTI type' },
        { status: 500 }
      );
    }

    return NextResponse.json(userData);
  } catch (error) {
    console.error('Error in MBTI route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
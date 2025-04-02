import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, mbtiType } = body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        mbtiType,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error saving MBTI result:', error);
    return NextResponse.json(
      { error: 'Failed to save MBTI result' },
      { status: 500 }
    );
  }
} 
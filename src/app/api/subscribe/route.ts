import { NextRequest, NextResponse } from 'next/server';

interface SubscriptionRecord {
  email: string;
  subscribedAt: string;
}

// In-memory store — replace with a real database (e.g. Prisma, Supabase) in production.
const subscribers: SubscriptionRecord[] = [];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email: string = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: { message: 'A valid email address is required.', code: 'INVALID_EMAIL' } },
        { status: 400 }
      );
    }

    const alreadySubscribed = subscribers.some((s) => s.email === email);
    if (alreadySubscribed) {
      // Return 200 so the client shows success — no reason to reveal internal state.
      return NextResponse.json({ success: true, message: 'Already subscribed.' });
    }

    subscribers.push({ email, subscribedAt: new Date().toISOString() });

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully.' },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: { message: 'Unexpected server error.', code: 'SERVER_ERROR' } },
      { status: 500 }
    );
  }
}

// Return a clear 405 for unsupported methods.
export async function GET() {
  return NextResponse.json(
    { success: false, error: { message: 'Method not allowed.', code: 'METHOD_NOT_ALLOWED' } },
    { status: 405 }
  );
}

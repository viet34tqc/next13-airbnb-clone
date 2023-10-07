import getCurrentUser from '@/app/actions/getCurrentUser';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    const body = await req.json();
    // If there is empty value return error
    // TODO: using Zod for validation
    const isAllHaveValue = Object.values(body).every(value => !!value);
    if (!isAllHaveValue) {
      return NextResponse.json({ error: 'Missing data' }, { status: 401 });
    }

    const { listingId, startDate, endDate, totalPrice } = body;

    const newReservation = await db.listing.update({
      where: {
        id: listingId,
      },
      data: {
        reservations: {
          create: {
            userId: currentUser.id,
            startDate,
            endDate,
            totalPrice,
          },
        },
      },
    });

    return NextResponse.json(newReservation);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : 'Something went wrong',
      },
      { status: 500 }
    );
  }
}

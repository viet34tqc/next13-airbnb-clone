import getCurrentUser from '@/app/actions/getCurrentUser';
import { COMMON_ERROR_MESSAGE, USER_NOT_FOUND_MESSAGE } from '@/lib/constants';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { error: USER_NOT_FOUND_MESSAGE },
        { status: 401 }
      );
    }

    const body = await req.json();
    // If there is empty value return error
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
        message: error instanceof Error ? error.message : COMMON_ERROR_MESSAGE,
      },
      { status: 500 }
    );
  }
}

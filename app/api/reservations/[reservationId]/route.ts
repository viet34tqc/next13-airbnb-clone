import getCurrentUser from '@/app/actions/getCurrentUser';
import { COMMON_ERROR_MESSAGE, USER_NOT_FOUND_MESSAGE } from '@/lib/constants';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

type Params = {
  params: {
    reservationId: string;
  };
};

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { reservationId } = params;
    if (!reservationId) {
      return NextResponse.json(
        { error: 'Missing reservationId' },
        { status: 400 }
      );
    }

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { error: USER_NOT_FOUND_MESSAGE },
        { status: 401 }
      );
    }

    await db.reservation.deleteMany({
      where: {
        id: reservationId,
        userId: currentUser.id,
      },
    });
    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error?.message || 'Database error' },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      { message: COMMON_ERROR_MESSAGE },
      { status: 500 }
    );
  }
}

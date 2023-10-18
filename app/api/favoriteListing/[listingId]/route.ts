import getCurrentUser from '@/app/actions/getCurrentUser';
import { COMMON_ERROR_MESSAGE, USER_NOT_FOUND_MESSAGE } from '@/lib/constants';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

type FavoriteParams = {
  params: {
    listingId: string;
  };
};

export async function PUT(request: Request) {
  try {
    const { listingId } = await request.json();
    if (!listingId) {
      return NextResponse.json(
        { error: 'Missing listing ID' },
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

    const favoriteListings = [...currentUser.favoriteListings, listingId];
    await db.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteListings,
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

export async function DELETE(request: Request, { params }: FavoriteParams) {
  try {
    const { listingId } = params;
    if (!listingId) {
      return NextResponse.json(
        { error: 'Missing listing ID' },
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

    const favoriteListings = currentUser.favoriteListings.filter(
      id => id !== listingId
    );
    await db.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteListings,
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

import getCurrentUser from '@/app/actions/getCurrentUser';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

type Params = {
  params: {
    listingId: string;
  };
};

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { listingId } = params;
    if (!listingId) {
      return NextResponse.json(
        { error: 'Missing listingId' },
        { status: 400 }
      );
    }

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    await db.listing.deleteMany({
      where: {
        id: listingId,
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
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}

import getCurrentUser from '@/app/actions/getCurrentUser';
import { listingFormSchema } from '@/components/modals/NewListingModal/validationSchema';
import { COMMON_ERROR_MESSAGE, USER_NOT_FOUND_MESSAGE } from '@/lib/constants';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

type Params = {
  params: {
    listingId: string;
  };
};

export async function PUT(request: Request, { params }: Params) {
  try {
    const { listingId } = params;
    if (listingId) {
      return NextResponse.json(
        { message: 'Missing listing ID' },
        { status: 400 }
      );
    }

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { message: USER_NOT_FOUND_MESSAGE },
        { status: 401 }
      );
    }

    const body = await request.json();

    // If there is empty value return error
    const zodParse = listingFormSchema.safeParse(body);
    if (!zodParse.success) {
      return NextResponse.json({ error: 'Missing data' }, { status: 401 });
    }

    const {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      location,
      price,
    } = body;

    await db.listing.update({
      where: {
        id: listingId,
      },
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue: location.value,
        price: parseInt(price, 10),
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

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { listingId } = params;
    if (!listingId) {
      return NextResponse.json({ error: 'Missing listingId' }, { status: 400 });
    }

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { error: USER_NOT_FOUND_MESSAGE },
        { status: 401 }
      );
    }

    await db.listing.delete({
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
      { message: COMMON_ERROR_MESSAGE },
      { status: 500 }
    );
  }
}

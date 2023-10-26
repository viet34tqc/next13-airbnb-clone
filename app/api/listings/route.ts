import getCurrentUser from '@/app/actions/getCurrentUser';
import { listingFormSchema } from '@/components/modals/NewListingModal/validationSchema';
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

    const listing = await db.listing.create({
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

    return NextResponse.json(listing);
  } catch (error) {
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : COMMON_ERROR_MESSAGE,
      },
      { status: 500 }
    );
  }
}

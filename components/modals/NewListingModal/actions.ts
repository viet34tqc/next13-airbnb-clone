'use server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import { USER_NOT_FOUND_MESSAGE } from '@/lib/constants';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { ListingFormValues } from '../types';

type createListingState = {
  error?: boolean;
  message?: string;
};

export async function createNewListing(data: ListingFormValues) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw Error(USER_NOT_FOUND_MESSAGE);
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
    } = data;

    await db.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue: location.value,
        price: price,
        userId: currentUser.id,
      },
    });

    revalidatePath('/');
    revalidatePath('/properties');
    return { message: 'Create listing successfully' };
  } catch (error) {
    return {
      error: true,
      message:
        error instanceof Error ? error.message : 'Failed to create new listing',
    };
  }
}

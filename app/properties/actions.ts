'use server';

import { USER_NOT_FOUND_MESSAGE } from '@/lib/constants';
import { db } from '@/lib/db';
import getCurrentUser from '../actions/getCurrentUser';

type State = {
  error?: boolean;
  message?: string;
};
export async function deleteListing(listingId: string, prevState: State) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      throw new Error(USER_NOT_FOUND_MESSAGE);
    }

    await db.listing.delete({
      where: {
        id: listingId,
        userId: currentUser.id,
      },
    });
    // revalidatePath('/properties');
    return { message: 'Delete listing successfully' };
  } catch (error) {
    return {
      error: true,
      message: error instanceof Error ? error.message : 'Database error',
    };
  }
}

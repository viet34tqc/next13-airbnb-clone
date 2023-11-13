'use server';

import { USER_NOT_FOUND_MESSAGE } from '@/lib/constants';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import getCurrentUser from '../actions/getCurrentUser';

type State = {
  message?: string;
};

export async function cancelReservation(
  reservationId: string,
  prevState: State
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      throw new Error(USER_NOT_FOUND_MESSAGE);
    }

    await db.reservation.deleteMany({
      where: {
        id: reservationId,
        userId: currentUser.id,
      },
    });
    revalidatePath('/trips');
    return { message: 'Cancel reservation successfully' };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'Database error',
    };
  }
}

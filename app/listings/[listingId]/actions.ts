'use server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import { USER_NOT_FOUND_MESSAGE } from '@/lib/constants';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const NewReservationSchema = z.object({
  totalPrice: z
    .number()
    .gt(0, { message: 'totalPrice must be greater than 0' }),
  startDate: z.date(),
  endDate: z.date(),
  listingId: z.string().min(0, { message: 'listingId is required' }),
});

type NewReservationData = z.infer<typeof NewReservationSchema>;

type createReservationState = {
  validationErrors?: {
    [K in keyof NewReservationData]?: string[];
  };
  message?: string;
};

export async function createReservation(
  data: Partial<NewReservationData>,
  prevState: createReservationState,
  formData: Partial<NewReservationData>
) {
  const validatedFields = NewReservationSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      validationErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      throw Error(USER_NOT_FOUND_MESSAGE);
    }

    const { listingId, startDate, endDate, totalPrice } = validatedFields.data;

    await db.listing.update({
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
  } catch (error) {
    return {
      message:
        error instanceof Error ? error.message : 'Failed to make reservation',
    };
  }

  revalidatePath('/trips');
  redirect('/trips'); // go to trips page to see all the successful reservation of this user.
}

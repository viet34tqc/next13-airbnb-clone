import { db } from '@/lib/db';

export default async function getReservation(listingId: string) {
  try {
    const reservations = await db.reservation.findMany({
      where: {
        listingId: listingId,
      },
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return reservations;
  } catch (error) {
    return [];
  }
}

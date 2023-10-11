import { db } from '@/lib/db';

type Params = {
  listingId?: string;
  userId?: string;
};

export default async function getReservations({ listingId, userId }: Params) {
  const query: Record<string, string> = {};
  if (listingId) {
    query.listingId = listingId;
  }
  if (userId) {
    query.userId = userId;
  }
  try {
    const reservations = await db.reservation.findMany({
      where: query,
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

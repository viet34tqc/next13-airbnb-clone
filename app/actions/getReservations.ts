import { db } from '@/lib/db';

type Params = {
  listingId?: string;
  userId?: string;
  authorId?: string;
};

export default async function getReservations({
  listingId,
  userId,
  authorId,
}: Params) {
  const query: Record<string, string | Record<string, string>> = {};
  if (listingId) {
    query.listingId = listingId;
  }

  // Get reservations made by an user
  if (userId) {
    query.userId = userId;
  }

  // Get reservations of the listing created by an user
  if (authorId) {
    query.listing = { userId: authorId };
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

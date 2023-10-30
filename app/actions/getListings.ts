import { db } from '@/lib/db';
import { ListingsParams } from '@/lib/types/listings';

export default async function getListings(params: ListingsParams) {
  const query: Record<string, any> = {};
  const {
    userId,
    roomCount,
    guestCount,
    bathroomCount,
    locationValue,
    startDate,
    endDate,
    category,
  } = params;
  if (userId) {
    query.userId = userId;
  }
  if (category) {
    query.category = category;
  }

  // gte means greater than
  if (roomCount) {
    query.roomCount = {
      gte: +roomCount,
    };
  }

  if (guestCount) {
    query.guestCount = {
      gte: +guestCount,
    };
  }

  if (bathroomCount) {
    query.bathroomCount = {
      gte: +bathroomCount,
    };
  }

  if (locationValue) {
    query.locationValue = locationValue;
  }

  if (startDate && endDate) {
    query.NOT = {
      reservations: {
        some: {
          OR: [
            {
              endDate: { gte: startDate },
              startDate: { lte: startDate },
            },
            {
              startDate: { lte: endDate },
              endDate: { gte: endDate },
            },
          ],
        },
      },
    };
  }

  try {
    const listings = await db.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return listings;
  } catch (error) {
    return [];
  }
}

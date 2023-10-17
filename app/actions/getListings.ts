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

  // gt means greater than
  if (roomCount) {
    query.roomCount = {
      gt: +roomCount,
    };
  }

  if (guestCount) {
    query.guestCount = {
      gt: +guestCount,
    };
  }

  if (bathroomCount) {
    query.bathroomCount = {
      gt: +bathroomCount,
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
              endDate: { gt: startDate },
              startDate: { lt: startDate },
            },
            {
              startDate: { lt: endDate },
              endDate: { gt: endDate },
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

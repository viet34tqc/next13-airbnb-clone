import { db } from '@/lib/db';

export default async function getListingById(listingId: string) {
  try {
    const listing = await db.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });

    return listing;
  } catch (error) {
    return null;
  }
}

import { db } from '@/lib/db';

export default async function getListings() {
  try {
    const listings = await db.listing.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return listings;
  } catch (error) {
    return null;
  }
}

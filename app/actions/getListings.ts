import { db } from '@/lib/db';
import { ListingsParams } from '@/lib/types/listings';

export default async function getListings(params: ListingsParams) {
  const query: Record<string, any> = {};
  if (params?.userId) {
    query.userId = params.userId;
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

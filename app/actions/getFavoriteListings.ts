import { db } from '@/lib/db';
import getCurrentUser from './getCurrentUser';

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }
    const favoriteListings = await db.listing.findMany({
      where: {
        id: {
          in: [...currentUser.favoriteListings || []]
        }
      },
    });

    return favoriteListings;
  } catch (error) {
    return [];
  }
}

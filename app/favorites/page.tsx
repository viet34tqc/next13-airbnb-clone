import ErrorMessage from '@/components/shared/ErrorMessage';
import Button from '@/components/ui/Button';
import FavoritesView from '@/modules/FavoritesPage/FavoritesView';
import { Metadata } from 'next';
import Link from 'next/link';
import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';

export const metadata: Metadata = {
  title: 'Favorites Listings',
  description: 'Your favorite listings',
};

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  // This code is no longer needed because I replace it with nextjs middleware
  /* if (!currentUser) {
    return (
      <ErrorMessageWithLogin title="Unauthorized" subtitle="Please login" />
    );
  } */
  const favoriteListings = await getFavoriteListings();

  if (!favoriteListings.length) {
    return (
      <ErrorMessage
        title="No favorite listings"
        subtitle="Please come back to homepage to add your favorite listings"
      >
        <Link href="/">
          <Button>Go to homepage</Button>
        </Link>
      </ErrorMessage>
    );
  }
  return (
    <main className="py-16 md:p-16">
      <FavoritesView
        favoriteListings={favoriteListings}
        currentUser={currentUser}
      />
    </main>
  );
};

export default FavoritesPage;

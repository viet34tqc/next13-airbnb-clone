import ErrorMessage from '@/components/shared/ErrorMessage';
import Button from '@/components/ui/Button';
import FavoritesView from '@/modules/FavoritesPage/FavoritesView';
import Link from 'next/link';
import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';

const FavoritesPage = async () => {
  const favoriteListings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

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

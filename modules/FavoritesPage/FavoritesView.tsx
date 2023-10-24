import getCurrentUser from '@/app/actions/getCurrentUser';
import getFavoriteListings from '@/app/actions/getFavoriteListings';
import ErrorMessage from '@/components/shared/ErrorMessage';
import GridListingLayout from '@/components/shared/GridListingLayout';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import HomeListingCard from '../HomePage/components/Listings/HomeListingCard';

const FavoritesView = async () => {
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
    <GridListingLayout>
      {favoriteListings.map((listing, index) => (
        <HomeListingCard
          index={index}
          key={listing.id}
          listing={listing}
          currentUser={currentUser}
        />
      ))}
    </GridListingLayout>
  );
};

export default FavoritesView;

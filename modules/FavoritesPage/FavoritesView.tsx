import GridListingLayout from '@/components/shared/GridListingLayout';
import PageHeader from '@/components/shared/PageHeader';
import { UserOrNull } from '@/lib/types/auth';
import { Listing } from '@prisma/client';
import HomeListingCard from '../HomePage/components/Listings/HomeListingCard';

type Props = {
  favoriteListings: Array<Listing>;
  currentUser: UserOrNull;
};

const FavoritesView = ({ favoriteListings, currentUser }: Props) => {
  return (
    <>
      <PageHeader title="Favorites" subtitle="List of your favorite listings" />
      <GridListingLayout>
        {favoriteListings.map(listing => (
          <HomeListingCard
            key={listing.id}
            listing={listing}
            currentUser={currentUser}
          />
        ))}
      </GridListingLayout>
    </>
  );
};

export default FavoritesView;

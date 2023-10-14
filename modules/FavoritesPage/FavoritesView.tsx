import { UserOrNull } from '@/lib/types/auth';
import { Listing } from '@prisma/client';
import HomeListingCard from '../HomePage/components/Listings/HomeListingCard';

type Props = {
  favoriteListings: Array<Listing>;
  currentUser: UserOrNull;
};

const FavoritesView = ({ favoriteListings, currentUser }: Props) => {
  return (
    <div className="container">
      <div
        className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-5
              gap-8
          "
      >
        {favoriteListings.map(listing => (
          <HomeListingCard
            key={listing.id}
            listing={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesView;

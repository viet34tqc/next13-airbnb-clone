import getCurrentUser from '@/app/actions/getCurrentUser';
import getListings from '@/app/actions/getListings';
import GridListingLayout from '@/components/shared/GridListingLayout';
import { ListingsParams } from '@/lib/types/listings';
import HomeListingCard from './HomeListingCard';
import NoListings from './NoListings';

const Listings = async ({ searchParams }: { searchParams: ListingsParams }) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (!listings || !listings.length) {
    return <NoListings />;
  }
  return (
    <GridListingLayout>
      {listings.map((listing, index) => (
        <HomeListingCard
          key={listing.id}
          listing={listing}
          index={index}
          currentUser={currentUser}
        />
      ))}
    </GridListingLayout>
  );
};

export default Listings;

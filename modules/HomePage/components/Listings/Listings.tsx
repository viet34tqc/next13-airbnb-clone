import getCurrentUser from '@/app/actions/getCurrentUser';
import getListings from '@/app/actions/getListings';
import ListingCard from './ListingCard';
import NoListings from './NoListings';

const Listings = async () => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (!listings || !listings.length) {
    return <NoListings />;
  }

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
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Listings;

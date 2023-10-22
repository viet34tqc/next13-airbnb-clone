'use client';

import GridListingLayout from '@/components/shared/GridListingLayout';
import { UserOrNull } from '@/lib/types/auth';
import { Listing } from '@prisma/client';
import HomeListingCard from './HomeListingCard';

type Props = {
  listings: Array<Listing>;
  currentUser: UserOrNull;
};

const Listings = async ({ listings, currentUser }: Props) => {
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

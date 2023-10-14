'use client';

import { categories } from '@/lib/constants';
import { Listing, Reservation, User } from '@prisma/client';
import ListingHead from './ListingHead';
import ListingInfo from './ListingInfo';
import ListingReservation from './ListingReservation';

type Props = {
  listing: Listing & { user: User };
  currentUser: UserOrNull;
  reservations: Reservation[];
};

const ListingView = ({ listing, currentUser, reservations }: Props) => {
  const category = categories.find(items => items.label === listing.category);
  return (
    <div className="container">
      <div className="flex flex-col gap-6">
        <ListingHead
          title={listing.title}
          imageSrc={listing.imageSrc}
          locationValue={listing.locationValue}
          id={listing.id}
          currentUser={currentUser}
        />
        <div
          className="
              grid
              grid-cols-1
              md:grid-cols-7
              md:gap-10
              mt-6
            "
        >
          <ListingInfo
            user={listing.user}
            category={category}
            description={listing.description}
            roomCount={listing.roomCount}
            guestCount={listing.guestCount}
            bathroomCount={listing.bathroomCount}
            locationValue={listing.locationValue}
          />
          <div
            className="
                order-first
                mb-10
                md:order-last
                md:col-span-3
              "
          >
            <ListingReservation
              listing={listing}
              currentUser={currentUser}
              reservations={reservations}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingView;

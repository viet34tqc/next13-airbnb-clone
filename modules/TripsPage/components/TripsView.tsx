import GridListingLayout from '@/components/shared/GridListingLayout';
import { Listing, Reservation } from '@prisma/client';
import { PropsWithChildren } from 'react';
import TripsListingCard from './TripsListingCard';

type Props = {
  reservations: (Reservation & { listing: Listing })[];
};

const TripsView = ({ reservations, children }: PropsWithChildren<Props>) => {
  return (
    <>
      <div className="container">{children}</div>
      <GridListingLayout>
        {reservations.map((reservation, index) => (
          <TripsListingCard
            key={reservation.id}
            listing={reservation.listing}
            index={index}
            reservation={reservation}
          />
        ))}
      </GridListingLayout>
    </>
  );
};

export default TripsView;

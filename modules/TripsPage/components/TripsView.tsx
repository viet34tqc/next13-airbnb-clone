import GridListingLayout from '@/components/shared/GridListingLayout';
import { UserOrNull } from '@/lib/types/auth';
import { Reservation } from '@prisma/client';
import { PropsWithChildren } from 'react';
import TripsListingCard from './TripsListingCard';

type Props = {
  reservations: Reservation[];
  currentUser: UserOrNull;
};

const TripsView = ({
  reservations,
  currentUser,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <div className="container">{children}</div>
      <GridListingLayout>
        {reservations.map((reservation: any) => (
          <TripsListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
          />
        ))}
      </GridListingLayout>
    </>
  );
};

export default TripsView;

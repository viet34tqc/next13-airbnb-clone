import ModalHeading from '@/components/ui/Modal/ModalHeading';
import { Reservation, User } from '@prisma/client';
import TripsListingCard from './TripsListingCard';

type Props = {
  reservations: Reservation[];
  currentUser: User | null;
};

const TripsView = ({ reservations, currentUser }: Props) => {
  return (
    <div className="container">
      <ModalHeading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {reservations.map((reservation: any) => (
          <TripsListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default TripsView;

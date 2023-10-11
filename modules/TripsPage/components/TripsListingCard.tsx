import ListingCard from '@/components/shared/ListingCard';
import ListingCardImg from '@/components/shared/ListingCard/ListingCardImg';
import ListingCardLocation from '@/components/shared/ListingCard/ListingCardLocation';
import ListingCardReservationDate from '@/components/shared/ListingCard/ListingCardReservationDate';
import ListingCardTotalPrice from '@/components/shared/ListingCard/ListingCardTotalPrice';
import { Listing, Reservation, User } from '@prisma/client';
import ReservationCancelButton from './ReservationCancelButton';

type Props = {
  data: Listing;
  reservation: Reservation;
  currentUser: User | null;
};

const TripsListingCard = ({ data, reservation, currentUser }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <ListingCard listingId={data.id}>
        <ListingCardImg
          imageSrc={data.imageSrc}
          currentUser={currentUser}
          listingId={data.id}
        />
        <ListingCardLocation locationValue={data.locationValue} />
        <ListingCardReservationDate reservation={reservation} />
        <ListingCardTotalPrice price={reservation.totalPrice} />
      </ListingCard>
      <ReservationCancelButton reservationId={reservation.id} />
    </div>
  );
};

export default TripsListingCard;

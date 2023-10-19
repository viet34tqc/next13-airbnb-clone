import ListingCardImg from '@/components/shared/ListingCard/ListingCardImg';
import ListingCardLocation from '@/components/shared/ListingCard/ListingCardLocation';
import ListingCardReservationDate from '@/components/shared/ListingCard/ListingCardReservationDate';
import ListingCardTotalPrice from '@/components/shared/ListingCard/ListingCardTotalPrice';
import ListingCardWrapper from '@/components/shared/ListingCard/ListingCardWrapper';
import { Listing, Reservation } from '@prisma/client';
import ReservationCancelButton from './ReservationCancelButton';

type Props = {
  data: Listing;
  reservation: Reservation;
};

const TripsListingCard = ({ data, reservation }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <ListingCardWrapper listingId={data.id}>
        <div className="relative">
          <ListingCardImg
            imageSrc={data.imageSrc}
            currentUser={null}
            listingId={data.id}
          />
        </div>
        <ListingCardLocation locationValue={data.locationValue} />
        <ListingCardReservationDate reservation={reservation} />
        <ListingCardTotalPrice price={reservation.totalPrice} />
      </ListingCardWrapper>
      <ReservationCancelButton reservationId={reservation.id} />
    </div>
  );
};

export default TripsListingCard;

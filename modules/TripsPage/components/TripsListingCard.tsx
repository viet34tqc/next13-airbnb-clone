import ListingCard from '@/components/shared/ListingCard';
import ListingCardImg from '@/components/shared/ListingCard/ListingCardImg';
import ListingCardLocation from '@/components/shared/ListingCard/ListingCardLocation';
import ListingCardPrice from '@/components/shared/ListingCard/ListingCardPrice';
import ListingCardReservationDate from '@/components/shared/ListingCard/ListingCardReservationDate';
import { Listing, Reservation, User } from '@prisma/client';

type Props = {
  data: Listing;
  reservation: Reservation;
  currentUser: User | null;
};

const TripsListingCard = ({ data, reservation, currentUser }: Props) => {
  return (
    <ListingCard listingId={data.id}>
      <ListingCardImg
        imageSrc={data.imageSrc}
        currentUser={currentUser}
        listingId={data.id}
      />
      <ListingCardLocation locationValue={data.locationValue} />
      <ListingCardReservationDate reservation={reservation} />
      <ListingCardPrice price={data.price} />
    </ListingCard>
  );
};

export default TripsListingCard;

'use client';

import ListingCardImg from '@/components/shared/ListingCard/ListingCardImg';
import ListingCardLocation from '@/components/shared/ListingCard/ListingCardLocation';
import ListingCardReservationDate from '@/components/shared/ListingCard/ListingCardReservationDate';
import ListingCardTotalPrice from '@/components/shared/ListingCard/ListingCardTotalPrice';
import ListingCardWrapper from '@/components/shared/ListingCard/ListingCardWrapper';
import { Listing, Reservation } from '@prisma/client';
import CancelReservationButton from './CancelReservationButton';

type Props = {
  listing: Listing;
  reservation: Reservation;
  index: number;
};

const TripsListingCard = ({ listing, reservation, index }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <ListingCardWrapper listingId={listing.id}>
        <div className="relative">
          <ListingCardImg imageSrc={listing.imageSrc} priority={index <= 5} />
        </div>
        <ListingCardLocation locationValue={listing.locationValue} />
        <ListingCardReservationDate reservation={reservation} />
        <ListingCardTotalPrice price={reservation.totalPrice} />
      </ListingCardWrapper>
      <CancelReservationButton reservationId={reservation.id} />
    </div>
  );
};

export default TripsListingCard;

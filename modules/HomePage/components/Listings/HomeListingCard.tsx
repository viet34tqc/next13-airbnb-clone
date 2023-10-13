import ListingCardCategory from '@/components/shared/ListingCard/ListingCardCategory';
import ListingCardImg from '@/components/shared/ListingCard/ListingCardImg';
import ListingCardLocation from '@/components/shared/ListingCard/ListingCardLocation';
import ListingCardPrice from '@/components/shared/ListingCard/ListingCardPrice';
import ListingCardWrapper from '@/components/shared/ListingCard/ListingCardWrapper';
import { Listing, User } from '@prisma/client';

type Props = {
  listing: Listing;
  currentUser: User | null;
};

const HomeListingCard = async ({ listing, currentUser }: Props) => {
  return (
    <ListingCardWrapper listingId={listing.id}>
      <ListingCardImg
        imageSrc={listing.imageSrc}
        currentUser={currentUser}
        listingId={listing.id}
      />
      <ListingCardLocation locationValue={listing.locationValue} />
      <ListingCardCategory category={listing.category} />
      <ListingCardPrice price={listing.price} />
    </ListingCardWrapper>
  );
};

export default HomeListingCard;

import ListingCardCategory from '@/components/shared/ListingCard/ListingCardCategory';
import ListingCardImg from '@/components/shared/ListingCard/ListingCardImg';
import ListingCardLocation from '@/components/shared/ListingCard/ListingCardLocation';
import ListingCardPrice from '@/components/shared/ListingCard/ListingCardPrice';
import ListingCardWrapper from '@/components/shared/ListingCard/ListingCardWrapper';
import { UserOrNull } from '@/lib/types/auth';
import { Listing } from '@prisma/client';
import DeleteListingButton from './DeleteListingButton';

type Props = {
  listing: Listing;
  currentUser: UserOrNull;
};

const PropertiesListingCard = ({ listing, currentUser }: Props) => {
  return (
    <div className="flex flex-col gap-2">
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
      <DeleteListingButton listingId={listing.id} />
    </div>
  );
};

export default PropertiesListingCard;
